/*
Reflection Time Backend for Google Apps Script

Setup:
1. Create a Google Sheet.
2. Extensions > Apps Script.
3. Paste this file into Code.gs.
4. Set SHEET_ID below to your Google Sheet ID.
5. Deploy > New deployment > Web app.
6. Execute as: Me. Who has access: Anyone with the link.
7. The Web App URL has been added to index.html and facilitator-dashboard.html.

This stores responses in a Google Sheet and creates/updates a markdown file in Drive.
*/
const SHEET_ID = '1PL5oC9Rz-SgcbS8UMELRhPon2eieTUXgaj_xnpeJgYA';
const SHEET_NAME = 'responses';
const MARKDOWN_FILE_NAME = 'reflection-responses.md';

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const row = normalize_(payload);
    const sheet = getSheet_();
    sheet.appendRow([
      row.timestamp,
      row.sessionId,
      row.workshopTitle,
      row.choiceId,
      row.choiceLabel,
      row.displayName,
      row.note,
      row.userAgent
    ]);
    updateMarkdownFile_(row.sessionId);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err.message || err) });
  }
}

function doGet(e) {
  try {
    const sessionId = (e.parameter.sessionId || '').trim();
    const rows = getRows_(sessionId);
    const markdown = buildMarkdown_(rows, sessionId || 'all-sessions');
    return json_({ ok: true, rows: rows, markdown: markdown });
  } catch (err) {
    return json_({ ok: false, error: String(err.message || err) });
  }
}

function normalize_(p) {
  const clean = function(value, max) {
    return String(value || '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);
  };
  const allowed = {
    printer: 'Printer',
    monitor: 'Monitor',
    thumbdrive: 'Thumbdrive',
    headphones: 'Headphones',
    camera: 'Camera',
    cloud: 'Cloud Storage'
  };
  const choiceId = clean(p.choiceId, 40);
  if (!allowed[choiceId]) throw new Error('Invalid choice.');
  return {
    timestamp: clean(p.timestamp, 40) || new Date().toISOString(),
    sessionId: clean(p.sessionId, 80) || 'default-session',
    workshopTitle: clean(p.workshopTitle, 120) || 'Workshop Reflection',
    choiceId: choiceId,
    choiceLabel: allowed[choiceId],
    displayName: clean(p.displayName, 60),
    note: clean(p.note, 400),
    userAgent: clean(p.userAgent, 140)
  };
}

function getSheet_() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['timestamp','sessionId','workshopTitle','choiceId','choiceLabel','displayName','note','userAgent']);
  }
  return sheet;
}

function getRows_(sessionId) {
  const sheet = getSheet_();
  const values = sheet.getDataRange().getValues();
  const headers = values.shift();
  return values.map(function(row) {
    const obj = {};
    headers.forEach(function(h, i) { obj[h] = row[i]; });
    return obj;
  }).filter(function(r) {
    return !sessionId || r.sessionId === sessionId;
  });
}

function buildMarkdown_(rows, sessionId) {
  const labels = ['Printer','Monitor','Thumbdrive','Headphones','Camera','Cloud Storage'];
  const counts = {};
  rows.forEach(function(r) { counts[r.choiceLabel] = (counts[r.choiceLabel] || 0) + 1; });
  const out = [];
  out.push('# Reflection Time Responses', '', 'Session: ' + sessionId, 'Generated: ' + new Date().toISOString(), '');
  out.push('## Summary', '');
  labels.forEach(function(label) { out.push('- ' + label + ': ' + (counts[label] || 0)); });
  out.push('', '## Responses', '');
  rows.forEach(function(r, i) {
    out.push('### ' + (i + 1) + '. ' + r.choiceLabel);
    out.push('- Time: ' + r.timestamp);
    out.push('- Name/Table: ' + (r.displayName || 'Anonymous'));
    out.push('- Note: ' + (r.note || 'None'), '');
  });
  return out.join('\n');
}

function updateMarkdownFile_(sessionId) {
  const markdown = buildMarkdown_(getRows_(sessionId), sessionId);
  const files = DriveApp.getFilesByName(MARKDOWN_FILE_NAME);
  if (files.hasNext()) {
    files.next().setContent(markdown);
  } else {
    DriveApp.createFile(MARKDOWN_FILE_NAME, markdown, MimeType.PLAIN_TEXT);
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
