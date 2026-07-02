#!/usr/bin/env node
/* build-ml-clear.js — Light-tier: convert the 3 CLEAR main band breakouts
   (clear/<band>/student.html) to the shared engine + 7-language switcher,
   preserving CLEAR's purple palette. Writes clear/<band>/locales/<band>.js and
   rewrites student.html as a skeleton. English + shared UI + eyebrow filled;
   es..zh chrome + content pending the translation pass.
   Run:  node breakouts/build-ml-clear.js */
const fs = require('fs'), path = require('path');
const { extract, COMMON } = require('./build-ml.js');
const ROOT = __dirname;
const FONTS = `<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">`;
const PALETTE = '--c1:#7c5cbf;--c2:#1aa3b8;--c3:#46a23c;--c4:#f08a16;--c5:#2f6fe0;--navy:#102a54;--navy-d:#0b1d3d;--gold:#FCB040;--gold-d:#c97f12;--paper:#fbf8f1;--ink:#1c2436;--ink-soft:#54607a;--card:#fff;--line:#e3e8f2;--good:#2f9e44;--bad:#e03131;--bg-a:rgba(252,176,64,.12);--bg-b:rgba(47,111,224,.10)';
const CONFETTI = ['#7c5cbf', '#1aa3b8', '#46a23c', '#f08a16', '#2f6fe0', '#FCB040'];
const LANGS = ['en', 'es', 'vi', 'ar', 'hi', 'ur', 'zh'];
// "Critical Thinking Breakout · Grades X" per language (renames the old "Digital Breakout" eyebrow)
const CTB = { en: 'Critical Thinking Breakout', es: 'Breakout de pensamiento crítico', vi: 'Breakout tư duy phản biện', ar: 'تحدّي التفكير النقدي', hi: 'आलोचनात्मक चिंतन ब्रेकआउट', ur: 'تنقیدی سوچ بریک آؤٹ', zh: '批判性思维破解' };
const GR = { grade35: { en: 'Grades 3–5', es: 'Grados 3–5', vi: 'Lớp 3–5', ar: 'الصفوف 3–5', hi: 'कक्षा 3–5', ur: 'جماعت 3–5', zh: '3–5 年级' }, grade68: { en: 'Grades 6–8', es: 'Grados 6–8', vi: 'Lớp 6–8', ar: 'الصفوف 6–8', hi: 'कक्षा 6–8', ur: 'جماعت 6–8', zh: '6–8 年级' }, grade912: { en: 'Grades 9–12', es: 'Grados 9–12', vi: 'Lớp 9–12', ar: 'الصفوف 9–12', hi: 'कक्षा 9–12', ur: 'جماعत 9–12', zh: '9–12 年级' } };
// breakout-specific chrome the translation pass must fill (eyebrow is pre-filled here)
const CHROME = ['crumb.suite', 'header.h1', 'header.sub', 'brief.label', 'brief.h', 'brief.p', 'footer.text', 'win.stamp', 'win.h', 'win.p'];

function skeleton(band, x) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>${x.h1} — CLEAR Critical Thinking Breakouts</title>
${FONTS}
<style>:root{${PALETTE}}</style>
<link rel="stylesheet" href="../../assets/breakout.css">
</head>
<body>
<canvas id="confetti"></canvas>
<div class="wrap">
  <div class="langbar"><span class="globe" aria-hidden="true">🌐</span><div data-i18n-picker></div></div>
  <div class="crumb"><a href="index.html" data-i18n="crumb.teacher">‹ Teacher launch</a> · <a href="../index.html" data-i18n="crumb.suite">CLEAR Critical Thinking Breakouts</a></div>

  <header class="top">
    <div class="eyebrow" data-i18n="header.eyebrow">Critical Thinking Breakout · ${GR[band].en}</div>
    <h1 data-i18n="header.h1">${x.h1}</h1>
    <p class="sub" data-i18n="header.sub">${x.sub}</p>
  </header>

  <div class="progress-wrap">
    <span class="pcount" id="pcount">0 of ${x.locks.length} locks open</span>
    <div class="lockdots" id="lockdots"></div>
    <button class="resetbtn" id="resetBtn" data-i18n="ui.reset">↺ Reset</button>
  </div>

  <div class="brief">
    <span class="tag" data-i18n="brief.label">${x.briefLabel}</span>
    <h2 data-i18n="brief.h">${x.briefH}</h2>
    <p data-i18n="brief.p">${x.briefP}</p>
  </div>

  <div class="section-title" data-i18n="sect.clues">🔍 The Clues</div>
  <p class="hint" data-i18n="sect.cluesHint">Tap each clue to read it. (You can reopen them anytime.)</p>
  <div class="clue-grid" id="clueGrid"></div>

  <div class="section-title" data-i18n="sect.locks">🔒 The Locks</div>
  <p class="hint" data-i18n="sect.locksHint">Solve each lock using the clues above.</p>
  <div class="locks" id="locks"></div>

  <footer>
    <span data-i18n="footer.text">${x.footer || 'CLEAR Critical Thinking Breakouts · Runs entirely in your browser — no logins, no data collected.'}</span> · <a href="policy.html" data-i18n="footer.privacy">Privacy &amp; compliance</a><br>
    <span style="opacity:.7" data-i18n="footer.disclaimer">Translations are AI-seeded and pending native-speaker review.</span>
  </footer>
</div>

<div class="modal-bg" id="modalBg"><div class="modal" id="modal"></div></div>
<div class="win" id="win"><div class="win-card">
  <div class="stamp" data-i18n="win.stamp">${x.winStamp}</div>
  <h2 data-i18n="win.h">${x.winH}</h2>
  <p data-i18n="win.p">${x.winP}</p>
  <button id="winReplay" data-i18n="ui.playagain">Play Again</button>
</div></div>

<script src="locales/${band}.js"></script>
<script src="../../assets/i18n.js"></script>
<script src="../../assets/breakout.js"></script>
</body>
</html>
`;
}

function localeStub(band, x) {
  const UI = {};
  for (const lg of LANGS) {
    UI[lg] = {};
    for (const k of Object.keys(COMMON)) UI[lg][k] = COMMON[k][lg];
    UI[lg]['header.eyebrow'] = CTB[lg] + ' · ' + GR[band][lg];   // pre-filled, do not translate
  }
  UI.en['crumb.suite'] = 'CLEAR Critical Thinking Breakouts';
  UI.en['header.h1'] = x.h1; UI.en['header.sub'] = x.sub;
  UI.en['brief.label'] = x.briefLabel; UI.en['brief.h'] = x.briefH; UI.en['brief.p'] = x.briefP;
  UI.en['footer.text'] = x.footer || 'CLEAR Critical Thinking Breakouts · Runs entirely in your browser — no logins, no data collected.';
  UI.en['win.stamp'] = x.winStamp; UI.en['win.h'] = x.winH; UI.en['win.p'] = x.winP;
  const CONTENT = { en: { clues: x.clues, locks: x.locks } };
  for (const lg of LANGS.slice(1)) CONTENT[lg] = { clues: [], locks: [] };
  const obj = { id: 'clear-' + band, confetti: CONFETTI, UI, CONTENT };
  return 'window.BREAKOUT = ' + JSON.stringify(obj, null, 1) + ';\n';
}

let n = 0;
for (const band of ['grade35', 'grade68', 'grade912']) {
  const file = path.join(ROOT, 'clear', band, 'student.html');
  const html = fs.readFileSync(file, 'utf8');
  const x = extract(html);
  x.h1 = x.h1.replace(/\s*—\s*(Critical Thinking Breakout|Digital Breakout).*/i, '').trim();
  fs.mkdirSync(path.join(ROOT, 'clear', band, 'locales'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'clear', band, 'locales', band + '.js'), localeStub(band, x));
  fs.writeFileSync(file, skeleton(band, x));
  n++;
}
console.log(`Converted ${n} CLEAR main breakouts to shared engine (purple palette, 7-lang switcher). English + eyebrow filled; es..zh chrome+content pending.`);
