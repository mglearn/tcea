/**
 * Pedagogy Showcase Interest Poll, Apps Script backend
 * ====================================================
 * This is a STANDALONE script. Do not bind it to an existing spreadsheet.
 * It creates its own Google Sheet, remembers the ID, and manages the
 * header row for you.
 *
 * SETUP
 * 1. Go to https://script.google.com and click New project.
 * 2. Delete the starter code. Paste this entire file. Save.
 * 3. In the function dropdown pick "setup" and click Run.
 *    Authorize when prompted. The execution log prints the URL of the
 *    new Google Sheet. Open it and bookmark it.
 * 4. Deploy > New deployment > Web app
 *      Execute as: Me
 *      Who has access: Anyone
 * 5. Copy the /exec URL. Paste it into ENDPOINT in index.html
 *    and into ENDPOINT in results.html.
 *
 * Every later edit to this file needs Deploy > New deployment, or
 * Manage deployments > edit > New version. Saving alone does nothing.
 */

/* ---------------- configuration ---------------- */

var SHEET_TITLE = 'Pedagogy Showcase Poll Responses';
var TAB_NAME    = 'Responses';
var REPORT_KEY  = 'CHANGE-ME';

// Column order. These ids must match the question ids in index.html.
// Changing this list shifts every column, so run clearResponses or start a
// fresh sheet rather than mixing old rows with new ones.
var FIELDS = [
  'role', 'grades', 'content', 'years',
  'saturday', 'alt_times', 'length', 'format',
  'topics_top3', 'topic_missing',
  'payer', 'screen'
];

// Friendly header labels, same order as FIELDS.
var HEADERS = [
  'Role', 'Grade bands', 'Content areas', 'Years in education',
  'Saturday', 'Backup windows', 'Preferred length', 'Live or recorded',
  'Top three sessions', 'Topic requested',
  'Who pays', 'Screen size'
];

/* ---------------- run these by hand ---------------- */

/**
 * Creates the spreadsheet, writes the header row, and logs the URL.
 * Safe to run again. It never creates a second spreadsheet.
 */
function setup() {
  var sh = getSheet_();
  var url = sh.getParent().getUrl();
  Logger.log('Spreadsheet ready: ' + url);
  Logger.log('Report password: ' + REPORT_KEY);
  Logger.log('Next, deploy as a web app and paste the /exec URL into both HTML files.');
  return url;
}

/** Returns the spreadsheet URL, handy for checking after the fact. */
function getSheetUrl() {
  var url = getSheet_().getParent().getUrl();
  Logger.log(url);
  return url;
}

/**
 * Deletes every response but keeps the sheet and the header row.
 * Run this after testing, before you share the poll link.
 */
function clearResponses() {
  var sh = getSheet_();
  var last = sh.getLastRow();
  if (last > 1) sh.deleteRows(2, last - 1);
  Logger.log('Cleared ' + Math.max(0, last - 1) + ' rows.');
}

/* ---------------- internals ---------------- */

function props_() {
  return PropertiesService.getScriptProperties();
}

/**
 * Finds the response tab, creating the spreadsheet on first use.
 * The spreadsheet ID lives in script properties, so the script keeps
 * pointing at the same file even if you rename or move it.
 */
function getSheet_() {
  var id = props_().getProperty('SHEET_ID');
  var ss = null;

  if (id) {
    try {
      ss = SpreadsheetApp.openById(id);
    } catch (err) {
      ss = null; // file was deleted or access was lost, so rebuild below
    }
  }

  if (!ss) {
    ss = SpreadsheetApp.create(SHEET_TITLE);
    props_().setProperty('SHEET_ID', ss.getId());
  }

  var sh = ss.getSheetByName(TAB_NAME);
  if (!sh) {
    var only = ss.getSheets();
    if (only.length === 1 && only[0].getLastRow() === 0) {
      sh = only[0];
      sh.setName(TAB_NAME);
    } else {
      sh = ss.insertSheet(TAB_NAME);
    }
  }

  if (sh.getLastRow() === 0) {
    sh.appendRow(['Timestamp'].concat(HEADERS));
    sh.getRange(1, 1, 1, HEADERS.length + 1)
      .setFontWeight('bold')
      .setBackground('#0A3476')
      .setFontColor('#ffffff');
    sh.setFrozenRows(1);
    sh.setColumnWidth(1, 150);
  }

  return sh;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ---------------- web app endpoints ---------------- */

/** Receives one poll submission from index.html. */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);

    var data = JSON.parse(e.postData.contents);
    var sh = getSheet_();
    var row = [new Date()];

    for (var i = 0; i < FIELDS.length; i++) {
      var v = data[FIELDS[i]];
      row.push(v === undefined || v === null ? '' : String(v).slice(0, 500));
    }

    sh.appendRow(row);
    return json_({ ok: true });

  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (ignore) {}
  }
}

/** Serves the response set to results.html, password required. */
function doGet(e) {
  var key = (e && e.parameter) ? e.parameter.key : '';
  if (key !== REPORT_KEY) {
    return json_({ ok: false, error: 'bad key' });
  }

  var sh = getSheet_();
  var sheetUrl = sh.getParent().getUrl();
  var last = sh.getLastRow();

  if (last < 2) {
    return json_({ ok: true, rows: [], count: 0, sheetUrl: sheetUrl });
  }

  var values = sh.getRange(2, 1, last - 1, FIELDS.length + 1).getValues();
  var rows = values.map(function (r) {
    var o = { timestamp: r[0] ? new Date(r[0]).toISOString() : '' };
    for (var i = 0; i < FIELDS.length; i++) {
      o[FIELDS[i]] = String(r[i + 1] || '');
    }
    return o;
  });

  return json_({ ok: true, rows: rows, count: rows.length, sheetUrl: sheetUrl });
}
