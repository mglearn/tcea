/**
 * LibVibes — "Share your LibVibe" submission web app
 * --------------------------------------------------
 * Serves a submission form (Form.html) and records each entry to a Google Sheet,
 * saving any pasted solution HTML to a Drive folder for the librarian to review.
 *
 * No student logins. You (the maintainer) review submissions in the Sheet and
 * publish approved ones into libvibes/community/<slug>/ on the site.
 *
 * SETUP: see SETUP.md in this folder.
 */

// ===================== CONFIG =====================
// Leave SHEET_ID blank to let the script create a spreadsheet on first run
// (its URL is written to the Apps Script log and remembered).
var SHEET_ID = '';                              // optional: an existing Spreadsheet ID
var SHEET_NAME = 'Submissions';
var DRIVE_FOLDER_NAME = 'LibVibes Submissions'; // Drive folder for pasted solution HTML
var NOTIFY_EMAIL = '';                          // optional: get an email per submission
var MAX_HTML_BYTES = 900000;                    // reject pasted files larger than ~900 KB
// =================================================

/**
 * Run this ONCE from the Apps Script editor (Run ▸ setup) to explicitly create
 * the Google Sheet that stores submissions. It creates the "LibVibes Submissions"
 * spreadsheet (with headers), remembers its ID, and logs the URL. If you already
 * pasted a SHEET_ID above, it just ensures the Submissions tab + headers exist.
 */
function setup() {
  var sh = getSheet_();
  var url = sh.getParent().getUrl();
  Logger.log('LibVibes submissions spreadsheet ready: ' + url);
  return url;
}

function doGet() {
  return HtmlService.createTemplateFromFile('Form')
    .evaluate()
    .setTitle('Share your LibVibe · TCEA')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/** Called from Form.html via google.script.run. Returns {ok:true} or throws. */
function submitLibVibe(p) {
  p = p || {};
  if (!p.title || !String(p.title).trim())   throw new Error('Please give your solution a title.');
  if (!p.prompt || !String(p.prompt).trim()) throw new Error('Please paste the starter prompt.');
  if (!p.agree)                              throw new Error('Please confirm the submission agreement.');
  if (!p.solutionHtml && !p.solutionLink)    throw new Error('Please paste your solution HTML or provide a link to it.');

  var fileUrl = '';
  if (p.solutionHtml && String(p.solutionHtml).trim()) {
    if (String(p.solutionHtml).length > MAX_HTML_BYTES)
      throw new Error('That solution file is very large — please share a link instead.');
    var name = slugify_(p.title) + '.html';
    var file = getFolder_().createFile(name, p.solutionHtml, 'text/html');
    fileUrl = file.getUrl();
  }

  getSheet_().appendRow([
    new Date(), 'Pending', p.name || '', p.email || '', p.school || '',
    String(p.title).trim(), p.grade || '', p.category || '',
    p.description || '', p.prompt || '', p.solutionLink || '', fileUrl, ''
  ]);

  if (NOTIFY_EMAIL) {
    try {
      MailApp.sendEmail(NOTIFY_EMAIL, 'New LibVibe submission: ' + p.title,
        'Title: ' + p.title +
        '\nBy: ' + (p.name || '?') + ' <' + (p.email || '') + '>' +
        '\nGrade band: ' + (p.grade || '') +
        '\nCategory: ' + (p.category || '') +
        '\n\n' + (p.description || '') +
        '\n\nSolution: ' + (fileUrl || p.solutionLink || '(none)'));
    } catch (e) {}
  }
  return { ok: true };
}

// ===================== helpers =====================
function getSheet_() {
  var ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : bootstrapSpreadsheet_();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['Timestamp', 'Status', 'Name', 'Email', 'School', 'Title',
      'Grade band', 'Category', 'Description', 'Prompt', 'Solution link',
      'Saved HTML file', 'Reviewer notes']);
    sh.setFrozenRows(1);
  }
  return sh;
}

function bootstrapSpreadsheet_() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('SS_ID');
  if (id) { try { return SpreadsheetApp.openById(id); } catch (e) {} }
  var ss = SpreadsheetApp.create('LibVibes Submissions');
  props.setProperty('SS_ID', ss.getId());
  Logger.log('Created submissions spreadsheet: ' + ss.getUrl());
  return ss;
}

function getFolder_() {
  var it = DriveApp.getFoldersByName(DRIVE_FOLDER_NAME);
  return it.hasNext() ? it.next() : DriveApp.createFolder(DRIVE_FOLDER_NAME);
}

function slugify_(s) {
  return String(s || 'untitled').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'untitled';
}
