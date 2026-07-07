#!/usr/bin/env node
/* build.js — generate the "Idioms & Sayings for Multilingual Learners" suite.
   Reads grades/_specs-<band>.json (English specs) and optional grades/_i18n-<band>-<slug>.json
   (translations for es/vi/ar/hi/ur/zh). For each spec it emits:
     1) grades/<band>-<slug>.js         — window.BREAKOUT (English content + shared translated UI;
                                          per-language content when a translation file exists)
     2) grades/<band>-<slug>-student.html — the shared-engine student page
   Also writes the landing manifest breakouts.js (window.IDIOMS_LIB).

   Cross-linguistic design: an idiom breakout's English content already carries the L1 comparison
   (e.g. "Spanish says echar una mano"); the _i18n files translate the surrounding explanation.

   Run:  node breakouts/idioms/build.js */
const fs = require('fs');
const path = require('path');
const { COMMON } = require('../build-ml.js');

const ROOT = __dirname;                        // breakouts/idioms
const GRADES = path.join(ROOT, 'grades');
const LANGS = ['en', 'es', 'vi', 'ar', 'hi', 'ur', 'zh'];
const TLANGS = ['es', 'vi', 'ar', 'hi', 'ur', 'zh'];

const CONFETTI = ['#0e7490', '#0891b2', '#f59e0b', '#22d3ee', '#7c3aed', '#0b5563'];
const LOCK_COLORS = ['#0e7490', '#0891b2', '#f59e0b', '#7c3aed'];
const PAD_COLORS = ['#0891b2', '#0b5563', '#22d3ee', '#0e7490'];
const FOOTER_TEXT = 'Idioms & Sayings for Multilingual Learners · A TCEA educator resource · Runs entirely in your browser — no logins, no data collected.';
const DISCLAIMER = 'Idioms are studied as language and culture; home languages are welcomed as a resource.';

const BANDS = [
  { key: 'g35',  label: '3–5',  eyebrow: 'Idioms & Sayings · Grades 3–5' },
  { key: 'g68',  label: '6–8',  eyebrow: 'Idioms & Sayings · Grades 6–8' },
  { key: 'g912', label: '9–12', eyebrow: 'Idioms & Sayings · Grades 9–12' },
];

function commonForLang(lg) {
  const o = {};
  for (const k of Object.keys(COMMON)) {
    if (k === 'footer.disclaimer') continue;              // we set our own
    if (COMMON[k][lg] !== undefined) o[k] = COMMON[k][lg];
  }
  return o;
}

function loadTrans(file) {
  const p = path.join(GRADES, `_i18n-${file}.json`);
  if (!fs.existsSync(p)) return null;
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch (e) { console.error('bad translation file', p, e.message); return null; }
}

function buildUI(band, spec, trans) {
  const UI = {};
  for (const lg of LANGS) UI[lg] = commonForLang(lg);
  Object.assign(UI.en, {
    'crumb.suite': 'Idioms & Sayings for Multilingual Learners',
    'header.eyebrow': band.eyebrow,
    'header.h1': spec.h1,
    'header.sub': spec.sub,
    'brief.label': spec.brief.label,
    'brief.h': spec.brief.h,
    'brief.p': spec.brief.p,
    'footer.text': FOOTER_TEXT,
    'footer.disclaimer': DISCLAIMER,
    'win.stamp': spec.win.stamp,
    'win.h': spec.win.h,
    'win.p': spec.win.p,
  });
  for (const lg of TLANGS) {
    const c = trans && trans[lg] && trans[lg].chrome;
    if (c) Object.assign(UI[lg], {
      'header.h1': c.h1, 'header.sub': c.sub,
      'brief.h': c.briefH, 'brief.p': c.briefP,
      'win.stamp': c.winStamp, 'win.h': c.winH, 'win.p': c.winP,
    });
  }
  return UI;
}

function dedupeLower(arr) {
  const seen = new Set(), out = [];
  for (const a of arr) { const v = String(a).trim().toLowerCase(); if (v && !seen.has(v)) { seen.add(v); out.push(v); } }
  return out;
}

function enContent(spec) {
  const clues = spec.clues.map((c, i) => ({ id: 'c' + (i + 1), ico: c.ico, nm: c.nm, title: c.title, body: c.body }));
  const locks = spec.locks.map((l, i) => {
    const base = { id: 'L' + (i + 1), type: l.type, color: LOCK_COLORS[i % LOCK_COLORS.length], title: l.title, q: l.q };
    if (l.type === 'seq') { base.pads = l.pads.map((p, j) => ({ k: p.k, e: p.e, c: PAD_COLORS[j % PAD_COLORS.length] })); base.answer = l.answer; }
    else if (l.type === 'mc') { base.options = l.options; base.answerIndex = l.answerIndex; }
    else if (l.type === 'multi') { base.items = l.items.map(it => ({ t: it.t, strong: !!it.strong })); }
    else if (l.type === 'word') { base.answer = dedupeLower(l.answer); }
    base.reason = l.reason;
    return base;
  });
  return { clues, locks };
}

function buildContent(spec, trans) {
  const en = enContent(spec);
  const out = { en };
  for (const lg of TLANGS) {
    const t = trans && trans[lg];
    if (!t || !t.clues || !t.locks) continue;              // missing -> engine falls back to en
    const clues = en.clues.map((c, i) => ({ ...c, nm: t.clues[i].nm, title: t.clues[i].title, body: t.clues[i].body }));
    const locks = en.locks.map((l, i) => {
      const tl = t.locks[i]; const nl = { ...l, title: tl.title, q: tl.q, reason: tl.reason };
      if (l.type === 'mc') nl.options = tl.options;
      else if (l.type === 'multi') nl.items = l.items.map((it, j) => ({ ...it, t: tl.items[j] }));
      else if (l.type === 'seq') nl.pads = l.pads.map((p, j) => ({ ...p, e: tl.pads[j] }));
      else if (l.type === 'word') nl.answer = dedupeLower([...(tl.answer || []), ...l.answer]);
      return nl;
    });
    out[lg] = { clues, locks };
  }
  return out;
}

function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

const PALETTE = ':root{--navy:#0e7490;--navy-d:#0b5563;--red:#0b5563;--red-d:#083f4a;--gold:#f59e0b;--gold-d:#b45309;--paper:#f2fbfc;--ink:#122a2e;--ink-soft:#4b6a70;--card:#fff;--line:#cfe9ed;--good:#2D8A5F;--bad:#c0392b;--c1:#0e7490;--c2:#0891b2;--c3:#0b5563;--c4:#f59e0b;--c5:#7c3aed;--bg-a:rgba(245,158,11,.14);--bg-b:rgba(14,116,144,.10)}';

function studentHtml(file, band, spec, nlocks) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>${esc(spec.h1)} — Idioms & Sayings for Multilingual Learners</title>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>${PALETTE}</style>
<link rel="stylesheet" href="../../assets/breakout.css">
</head>
<body>
<canvas id="confetti"></canvas>
<div class="wrap">
  <div class="langbar"><span class="globe" aria-hidden="true">🌐</span><div data-i18n-picker></div></div>
  <div class="crumb"><a href="../index.html" data-i18n="crumb.teacher">‹ Teacher launch</a> · <a href="../index.html" data-i18n="crumb.suite">Idioms & Sayings for Multilingual Learners</a></div>

  <header class="top">
    <div class="eyebrow" data-i18n="header.eyebrow">${esc(band.eyebrow)}</div>
    <h1 data-i18n="header.h1">${esc(spec.h1)}</h1>
    <p class="sub" data-i18n="header.sub">${esc(spec.sub)}</p>
  </header>

  <div class="progress-wrap">
    <span class="pcount" id="pcount">0 of ${nlocks} locks open</span>
    <div class="lockdots" id="lockdots"></div>
    <button class="resetbtn" id="resetBtn" data-i18n="ui.reset">↺ Reset</button>
  </div>

  <div class="brief">
    <span class="tag" data-i18n="brief.label">${esc(spec.brief.label)}</span>
    <h2 data-i18n="brief.h">${esc(spec.brief.h)}</h2>
    <p data-i18n="brief.p">${esc(spec.brief.p)}</p>
  </div>

  <div class="section-title" data-i18n="sect.clues">🔍 The Clues</div>
  <p class="hint" data-i18n="sect.cluesHint">Tap each clue to read it. (You can reopen them anytime.)</p>
  <div class="clue-grid" id="clueGrid"></div>

  <div class="section-title" data-i18n="sect.locks">🔒 The Locks</div>
  <p class="hint" data-i18n="sect.locksHint">Solve each lock using the clues above.</p>
  <div class="locks" id="locks"></div>

  <footer>
    <span data-i18n="footer.text">${esc(FOOTER_TEXT)}</span> · <a href="../policy.html" data-i18n="footer.privacy">Privacy &amp; compliance</a><br>
    <span style="opacity:.7" data-i18n="footer.disclaimer">${esc(DISCLAIMER)}</span>
  </footer>
</div>

<div class="modal-bg" id="modalBg"><div class="modal" id="modal"></div></div>
<div class="win" id="win"><div class="win-card">
  <div class="stamp" data-i18n="win.stamp">${esc(spec.win.stamp)}</div>
  <h2 data-i18n="win.h">${esc(spec.win.h)}</h2>
  <p data-i18n="win.p">${esc(spec.win.p)}</p>
  <button id="winReplay" data-i18n="ui.playagain">Play Again</button>
</div></div>

<script src="${file}.js"></script>
<script src="../../assets/i18n.js"></script>
<script src="../../assets/breakout.js"></script>
</body>
</html>
`;
}

let written = 0, translated = 0;
const lib = [];
for (const band of BANDS) {
  const specFile = path.join(GRADES, `_specs-${band.key}.json`);
  if (!fs.existsSync(specFile)) { console.error('no specs for', band.key, '(skipping)'); continue; }
  const specs = JSON.parse(fs.readFileSync(specFile, 'utf8'));
  for (const spec of specs) {
    const file = `${band.key}-${spec.slug}`;
    const trans = loadTrans(file);
    if (trans) translated++;
    const obj = { id: `idioms-${band.key}-${spec.slug}`, band: band.label, confetti: CONFETTI, UI: buildUI(band, spec, trans), CONTENT: buildContent(spec, trans) };
    fs.writeFileSync(path.join(GRADES, file + '.js'), 'window.BREAKOUT = ' + JSON.stringify(obj, null, 1) + ';\n');
    fs.writeFileSync(path.join(GRADES, file + '-student.html'), studentHtml(file, band, spec, spec.locks.length));
    lib.push({ band: band.label, href: `grades/${file}-student.html`, title: spec.h1, blurb: spec.sub, kw: spec.kw || '' });
    written++;
  }
}

fs.writeFileSync(path.join(ROOT, 'breakouts.js'), 'window.IDIOMS_LIB = ' + JSON.stringify(lib) + ';\n');
console.log(`idioms build: wrote ${written} breakouts (${translated} with translations); manifest breakouts.js has ${lib.length} entries.`);
