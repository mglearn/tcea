#!/usr/bin/env node
/* patch-i18n.js — wire translation loading into every grade's student.html + play.html
   (idempotent). student.html loads locales/grade<N>-i18n.js after the English data;
   play.html loads more-i18n.js and its builder merges MORE_I18N (all languages).
   Run once:  node breakouts/science/patch-i18n.js */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const GRADES = ['K', '1', '2', '3', '4', '5', '6', '7', '8'].filter(g => fs.existsSync(path.join(ROOT, 'grade' + g)));

function newBuilder(band, conf, titlePrefix) {
  return `(function () {
  var params = new URLSearchParams(location.search);
  var slug = params.get('b');
  var lib = window.MORE || {};
  var actualSlug = lib[slug] ? slug : Object.keys(lib)[0];
  var entry = lib[actualSlug];
  var I18N = window.MORE_I18N || {};
  function hdr(u) { return { 'header.h1': u.h1, 'header.sub': u.sub, 'brief.h': u.briefH, 'brief.p': u.briefP, 'win.stamp': u.winStamp, 'win.h': u.winH, 'win.p': u.winP }; }
  var baseEn = (window.MORE_BASE_UI && window.MORE_BASE_UI.en) || {};
  var UI = { en: Object.assign({}, baseEn, hdr(entry.ui)) };
  var CONTENT = { en: { clues: entry.clues, locks: entry.locks } };
  for (var lang in I18N) {
    var L = I18N[lang]; var t = L.breakouts && L.breakouts[actualSlug];
    if (!t) continue;
    UI[lang] = Object.assign({}, L.base, hdr(t.ui));
    CONTENT[lang] = { clues: t.clues, locks: t.locks };
  }
  window.BREAKOUT = { id: entry.id, band: '${band}', confetti: entry.confetti || ${conf}, UI: UI, CONTENT: CONTENT };
  document.title = entry.ui.h1 + ' — ${titlePrefix} Science Critical Thinking Online Breakout';
})();`;
}

let patched = 0;
for (const g of GRADES) {
  const dir = path.join(ROOT, 'grade' + g);
  // ---- play.html ----
  const pp = path.join(dir, 'play.html');
  let ph = fs.readFileSync(pp, 'utf8');
  if (!ph.includes('window.MORE_I18N')) {
    ph = ph.replace('<script src="more.js"></script>', '<script src="more.js"></script>\n<script src="more-i18n.js"></script>');
    const band = (ph.match(/band:\s*'([^']*)'/) || [])[1];
    const conf = (ph.match(/confetti:\s*entry\.confetti\s*\|\|\s*(\[[^\]]*\])/) || [])[1];
    const titlePrefix = (ph.match(/entry\.ui\.h1 \+ ' — ([^']*?) Science Critical/) || [])[1];
    const start = '(function () {\n  var params = new URLSearchParams(location.search);';
    const si = ph.indexOf(start);
    const ei = ph.indexOf('})();', si);
    if (si >= 0 && ei > si && band && conf && titlePrefix) {
      ph = ph.slice(0, si) + newBuilder(band, conf, titlePrefix) + ph.slice(ei + 5);
      fs.writeFileSync(pp, ph);
      patched++;
    } else { console.error('  play.html parse issue for grade' + g); }
  }
  // ---- student.html ----
  const sp = path.join(dir, 'student.html');
  let sh = fs.readFileSync(sp, 'utf8');
  const tag = `<script src="locales/grade${g}.js"></script>`;
  if (sh.includes(tag) && !sh.includes(`locales/grade${g}-i18n.js`)) {
    sh = sh.replace(tag, tag + `\n<script src="locales/grade${g}-i18n.js"></script>`);
    fs.writeFileSync(sp, sh);
    patched++;
  }
}
console.log('patch-i18n: patched ' + patched + ' file(s) across grades [' + GRADES.join(',') + ']');
