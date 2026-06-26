/**
 * School District Staff App Intake
 * Google Apps Script backend for index.html
 * Version: 1.0.0
 *
 * What it does:
 * - Creates or opens a Google Sheet for intake responses
 * - Appends form submissions from the HTML mockup
 * - Adds reviewer columns for IT/data privacy follow-up
 * - Supports an optional shared secret for simple gatekeeping
 *
 * This is a starter pattern. Review with your district IT/security staff before production use.
 */

const CONFIG = {
  SPREADSHEET_NAME: 'Staff App Intake Responses',
  RESPONSES_SHEET_NAME: 'Intake Responses',
  REVIEW_LOG_SHEET_NAME: 'Review Log',
  CONFIG_SHEET_NAME: 'Config',

  // Optional. Leave blank if you do not want a shared secret.
  // If you use one, put the same value into the HTML form setup field or hard-code it in the page.
  SHARED_SECRET: '',

  // Optional. Add district staff who should be editors on the response spreadsheet.
  ADMIN_EMAILS: [
    // 'cto@example.org',
    // 'dataprivacy@example.org'
  ],

  // Optional domain control for logged-in Google Workspace users.
  // Apps Script can only read Session.getActiveUser().getEmail() in some deployment modes.
  // Use Google Workspace deployment settings as the primary access control.
  ALLOWED_EMAIL_DOMAINS: [
    // 'exampleisd.org'
  ],

  // Optional. If true, setup() attempts to share the spreadsheet with ADMIN_EMAILS as editors.
  SHARE_WITH_ADMINS: true
};

const RESPONSE_HEADERS = [
  'Timestamp',
  'Submission ID',
  'Risk Estimate',
  'Submitter Name',
  'Submitter Email',
  'Campus or Department',
  'App Name',
  'App Status',
  'Problem Solved',
  'What It Does',
  'Intended Users',
  'Approved Tool Check',
  'Data Types',
  'Data Location',
  'Touches Student Data',
  'Retention Plan',
  'Third Parties',
  'Primary Owner',
  'Backup Owner',
  'Code Location',
  'Credential Location',
  'Handoff Plan',
  'Support Plan',
  'Review Checks',
  'Reviewer Notes From Submitter',
  'Reviewer Status',
  'Assigned Reviewer',
  'Reviewer Decision Notes',
  'Raw JSON'
];

function setup() {
  const ss = getOrCreateSpreadsheet_();
  const responseSheet = getOrCreateSheet_(ss, CONFIG.RESPONSES_SHEET_NAME, RESPONSE_HEADERS);
  const reviewHeaders = ['Timestamp', 'Submission ID', 'Reviewer Email', 'Action', 'Notes'];
  getOrCreateSheet_(ss, CONFIG.REVIEW_LOG_SHEET_NAME, reviewHeaders);
  writeConfigSheet_(ss);
  protectHeaderRow_(responseSheet);
  shareWithAdmins_(ss);

  PropertiesService.getScriptProperties().setProperties({
    SPREADSHEET_ID: ss.getId(),
    SETUP_COMPLETE: 'true'
  }, true);

  Logger.log('Setup complete. Spreadsheet URL: ' + ss.getUrl());
  Logger.log('Deploy this script as a web app, then paste the web app URL into index.html or the form setup field.');
  return ss.getUrl();
}

function doGet(e) {
  const ss = getOrCreateSpreadsheet_();
  const out = {
    ok: true,
    app: 'School District Staff App Intake',
    version: '1.0.0',
    spreadsheetId: ss.getId(),
    timestamp: new Date().toISOString()
  };
  return json_(out);
}

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    checkSharedSecret_(payload, e);
    checkDomainIfAvailable_();

    const ss = getOrCreateSpreadsheet_();
    const sheet = getOrCreateSheet_(ss, CONFIG.RESPONSES_SHEET_NAME, RESPONSE_HEADERS);
    const submissionId = makeSubmissionId_();
    const rowObject = normalizePayload_(payload, submissionId);
    const row = RESPONSE_HEADERS.map(header => rowObject[header] || '');
    sheet.appendRow(row);

    logReview_(ss, submissionId, 'System', 'Submitted', 'New intake submitted');

    return json_({
      ok: true,
      submissionId,
      message: 'Submission recorded',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return json_({
      ok: false,
      error: String(err && err.message ? err.message : err),
      timestamp: new Date().toISOString()
    });
  }
}

function parsePayload_(e) {
  if (!e) throw new Error('Missing request event');
  if (e.parameter && e.parameter.payload) {
    return JSON.parse(e.parameter.payload);
  }
  if (e.postData && e.postData.contents) {
    const text = e.postData.contents;
    try {
      return JSON.parse(text);
    } catch (err) {
      // HTML form submits URLSearchParams by default.
      const match = text.match(/(?:^|&)payload=([^&]+)/);
      if (match) return JSON.parse(decodeURIComponent(match[1].replace(/\+/g, ' ')));
    }
  }
  throw new Error('No payload found');
}

function checkSharedSecret_(payload, e) {
  if (!CONFIG.SHARED_SECRET) return;
  const supplied = (payload && payload.sharedSecret) || (e.parameter && e.parameter.sharedSecret) || '';
  if (supplied !== CONFIG.SHARED_SECRET) {
    throw new Error('Shared secret mismatch');
  }
}

function checkDomainIfAvailable_() {
  if (!CONFIG.ALLOWED_EMAIL_DOMAINS || CONFIG.ALLOWED_EMAIL_DOMAINS.length === 0) return;
  const email = Session.getActiveUser().getEmail();
  if (!email) return; // Deployment access settings should be the main control.
  const domain = email.split('@').pop().toLowerCase();
  const allowed = CONFIG.ALLOWED_EMAIL_DOMAINS.map(d => String(d).toLowerCase());
  if (allowed.indexOf(domain) === -1) {
    throw new Error('User domain is not allowed');
  }
}

function normalizePayload_(p, submissionId) {
  const safe = p || {};
  return {
    'Timestamp': new Date(),
    'Submission ID': submissionId,
    'Risk Estimate': safe.riskEstimate || '',
    'Submitter Name': safe.submitterName || '',
    'Submitter Email': safe.submitterEmail || '',
    'Campus or Department': safe.campus || '',
    'App Name': safe.appName || '',
    'App Status': safe.appStatus || '',
    'Problem Solved': safe.problemSolved || '',
    'What It Does': safe.whatItDoes || '',
    'Intended Users': safe.intendedUsers || '',
    'Approved Tool Check': safe.approvedToolCheck || '',
    'Data Types': asList_(safe.dataTypes),
    'Data Location': safe.dataLocation || '',
    'Touches Student Data': safe.studentData || '',
    'Retention Plan': safe.retentionPlan || '',
    'Third Parties': safe.thirdParties || '',
    'Primary Owner': safe.primaryOwner || '',
    'Backup Owner': safe.backupOwner || '',
    'Code Location': safe.codeLocation || '',
    'Credential Location': safe.credentialLocation || '',
    'Handoff Plan': safe.handoffPlan || '',
    'Support Plan': safe.supportPlan || '',
    'Review Checks': asList_(safe.reviewChecks),
    'Reviewer Notes From Submitter': safe.notes || '',
    'Reviewer Status': defaultStatus_(safe.riskEstimate, safe.studentData),
    'Assigned Reviewer': '',
    'Reviewer Decision Notes': '',
    'Raw JSON': JSON.stringify(safe)
  };
}

function defaultStatus_(risk, studentData) {
  if (String(studentData).toLowerCase() === 'yes') return 'Needs full review';
  if (String(risk).toLowerCase() === 'high') return 'Needs full review';
  if (String(risk).toLowerCase() === 'medium') return 'Needs IT triage';
  return 'New';
}

function asList_(value) {
  if (!value) return '';
  return Array.isArray(value) ? value.join('; ') : String(value);
}

function getOrCreateSpreadsheet_() {
  const props = PropertiesService.getScriptProperties();
  const existingId = props.getProperty('SPREADSHEET_ID');
  if (existingId) {
    try { return SpreadsheetApp.openById(existingId); } catch (err) { /* create below */ }
  }
  const ss = SpreadsheetApp.create(CONFIG.SPREADSHEET_NAME);
  props.setProperty('SPREADSHEET_ID', ss.getId());
  return ss;
}

function getOrCreateSheet_(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  } else {
    const existingHeaders = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), headers.length)).getValues()[0];
    headers.forEach((h, i) => {
      if (existingHeaders.indexOf(h) === -1) {
        sheet.getRange(1, sheet.getLastColumn() + 1).setValue(h);
      }
    });
  }
  sheet.getRange(1, 1, 1, sheet.getLastColumn()).setFontWeight('bold').setBackground('#0A3476').setFontColor('#ffffff');
  sheet.autoResizeColumns(1, Math.min(sheet.getLastColumn(), headers.length));
  return sheet;
}

function writeConfigSheet_(ss) {
  const sheet = getOrCreateSheet_(ss, CONFIG.CONFIG_SHEET_NAME, ['Setting', 'Value']);
  sheet.clear();
  const rows = [
    ['Spreadsheet created', new Date()],
    ['Spreadsheet ID', ss.getId()],
    ['Spreadsheet URL', ss.getUrl()],
    ['Responses sheet', CONFIG.RESPONSES_SHEET_NAME],
    ['Shared secret required', CONFIG.SHARED_SECRET ? 'Yes' : 'No'],
    ['Allowed email domains', CONFIG.ALLOWED_EMAIL_DOMAINS.join(', ') || 'Controlled by deployment settings'],
    ['Admin emails', CONFIG.ADMIN_EMAILS.join(', ') || 'None listed'],
    ['Production note', 'Review access, retention, and privacy requirements with district IT before live use']
  ];
  sheet.getRange(1, 1, 1, 2).setValues([['Setting', 'Value']]);
  sheet.getRange(2, 1, rows.length, 2).setValues(rows);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, 2).setFontWeight('bold').setBackground('#0A3476').setFontColor('#ffffff');
  sheet.autoResizeColumns(1, 2);
}

function protectHeaderRow_(sheet) {
  try {
    const range = sheet.getRange(1, 1, 1, sheet.getLastColumn());
    const protection = range.protect().setDescription('Protect intake response headers');
    protection.removeEditors(protection.getEditors());
    if (CONFIG.ADMIN_EMAILS.length) protection.addEditors(CONFIG.ADMIN_EMAILS);
  } catch (err) {
    Logger.log('Header protection skipped: ' + err);
  }
}

function shareWithAdmins_(ss) {
  if (!CONFIG.SHARE_WITH_ADMINS || !CONFIG.ADMIN_EMAILS.length) return;
  try {
    const file = DriveApp.getFileById(ss.getId());
    CONFIG.ADMIN_EMAILS.forEach(email => file.addEditor(email));
  } catch (err) {
    Logger.log('Admin sharing skipped: ' + err);
  }
}

function logReview_(ss, submissionId, reviewerEmail, action, notes) {
  const sheet = getOrCreateSheet_(ss, CONFIG.REVIEW_LOG_SHEET_NAME, ['Timestamp', 'Submission ID', 'Reviewer Email', 'Action', 'Notes']);
  sheet.appendRow([new Date(), submissionId, reviewerEmail, action, notes]);
}

function makeSubmissionId_() {
  return 'APP-' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss') + '-' + Math.floor(Math.random() * 9000 + 1000);
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
