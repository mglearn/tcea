#!/usr/bin/env node
/* build-more.js — expand the "Bible as Literature" suite.
   Reads bible/grades/_specs-<band>.json (English breakout specs) and, when present,
   bible/grades/_i18n-<band>-<slug>.json (translations for es/vi/ar/hi/ur/zh). For each
   spec it emits:
     1) grades/<band>-<slug>.js         — window.BREAKOUT (English content + shared
                                          translated UI; per-language story content when a
                                          translation file exists, else English fallback)
     2) grades/<band>-<slug>-student.html — the shared-engine student page
   It also writes grades manifest breakouts.js (window.BIBLE_LIB) for the landing page.

   Run:  node breakouts/bible/build-more.js */
const fs = require('fs');
const path = require('path');
const { COMMON } = require('../build-ml.js');

const ROOT = __dirname;                       // breakouts/bible
const GRADES = path.join(ROOT, 'grades');
const LANGS = ['en', 'es', 'vi', 'ar', 'hi', 'ur', 'zh'];
const TLANGS = ['es', 'vi', 'ar', 'hi', 'ur', 'zh'];

const CONFETTI = ['#054c8c', '#2f6cae', '#fbd239', '#5b8fc0', '#dbe6f2', '#023266'];
const LOCK_COLORS = ['#054c8c', '#2f6cae', '#fbd239', '#5b8fc0'];
const PAD_COLORS = ['#2f6cae', '#023266', '#5b8fc0', '#054c8c'];
const FOOTER_TEXT = 'Bible as Literature Breakouts · Taught as story, not scripture · Runs entirely in your browser — no logins, no data collected.';
const DISCLAIMER = 'A study resource about religious literature, not religious instruction.';

const BANDS = [
  { key: 'k2',   label: 'K–2',  eyebrow: 'Critical Thinking Breakout · Grades K–2',
    featured: { file: 'k2',   title: 'The Storyteller’s Order', blurb: 'Sequence the Genesis creation account and identify the Golden Rule’s plain meaning.' } },
  { key: 'g35',  label: '3–5',  eyebrow: 'Critical Thinking Breakout · Grades 3–5',
    featured: { file: 'g35',  title: 'Underdogs & Lions’ Dens', blurb: 'Find the shared theme across David & Goliath and Daniel, then test it against Solomon.' } },
  { key: 'g68',  label: '6–8',  eyebrow: 'Critical Thinking Breakout · Grades 6–8',
    featured: { file: 'g68',  title: 'Parables & Persuasion', blurb: 'Name the parable genre, analyze rhetorical technique, and connect the Sermon to Dr. King.' } },
  { key: 'g912', label: '9–12', eyebrow: 'Critical Thinking Breakout · Grades 9–12',
    featured: { file: 'g912', title: 'Allusion, Archetype & Argument', blurb: 'Trace the “fall” archetype and biblical allusions, and separate textual fact from interpretation.' } },
];

/* shared UI translated across all 7 languages (drops footer.disclaimer — we set our own) */
function commonForLang(lg) {
  const o = {};
  for (const k of Object.keys(COMMON)) {
    if (k === 'footer.disclaimer') continue;
    if (COMMON[k][lg] !== undefined) o[k] = COMMON[k][lg];
  }
  return o;
}

/* harvest already-translated suite constants (crumb.suite, header.eyebrow, brief.label,
   footer.text) from a band's hand-translated featured file, per language */
function harvest(band) {
  const out = {};
  try {
    const w = {}; eval(fs.readFileSync(path.join(GRADES, band.featured.file + '.js'), 'utf8').replace('window.BREAKOUT', 'w.BREAKOUT'));
    const U = w.BREAKOUT.UI || {};
    for (const lg of LANGS) {
      const u = U[lg] || {};
      out[lg] = {};
      for (const k of ['crumb.suite', 'header.eyebrow', 'brief.label', 'footer.text']) if (u[k]) out[lg][k] = u[k];
    }
  } catch (e) { console.error('harvest failed', band.key, e.message); }
  return out;
}

function loadTrans(file) {
  const p = path.join(GRADES, `_i18n-${file}.json`);
  if (!fs.existsSync(p)) return null;
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch (e) { console.error('bad translation file', p, e.message); return null; }
}

function buildUI(band, spec, trans, consts) {
  const UI = {};
  for (const lg of LANGS) UI[lg] = commonForLang(lg);
  Object.assign(UI.en, {
    'crumb.suite': 'Bible as Literature Breakouts',
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
    Object.assign(UI[lg], consts[lg] || {});                 // crumb.suite, eyebrow, brief.label, footer.text
    const c = trans && trans[lg] && trans[lg].chrome;
    if (c) Object.assign(UI[lg], {
      'header.h1': c.h1, 'header.sub': c.sub,
      'brief.h': c.briefH, 'brief.p': c.briefP,
      'win.stamp': c.winStamp, 'win.h': c.winH, 'win.p': c.winP,
    });
  }
  return UI;
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

function dedupeLower(arr) {
  const seen = new Set(), out = [];
  for (const a of arr) { const v = String(a).trim().toLowerCase(); if (v && !seen.has(v)) { seen.add(v); out.push(v); } }
  return out;
}

function buildContent(spec, trans) {
  const en = enContent(spec);
  const out = { en };
  for (const lg of TLANGS) {
    const t = trans && trans[lg];
    if (!t || !t.clues || !t.locks) continue;               // missing -> engine falls back to en
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

const PALETTE = ':root{--navy:#054c8c;--navy-d:#023266;--red:#023266;--red-d:#012247;--gold:#fbd239;--gold-d:#d9a010;--paper:#f4f8fc;--ink:#161c2e;--ink-soft:#516079;--card:#fff;--line:#dbe6f2;--good:#2D8A5F;--bad:#c0392b;--c1:#054c8c;--c2:#2f6cae;--c3:#023266;--c4:#fbd239;--c5:#0e6b8a;--bg-a:rgba(251,210,57,.14);--bg-b:rgba(5,76,140,.10)}';

function studentHtml(file, band, spec, nlocks) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>${esc(spec.h1)} — Bible as Literature Breakouts</title>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>${PALETTE}</style>
<link rel="stylesheet" href="../../assets/breakout.css">
</head>
<body>
<canvas id="confetti"></canvas>
<div class="wrap">
  <div class="langbar"><span class="globe" aria-hidden="true">🌐</span><div data-i18n-picker></div></div>
  <div class="crumb"><a href="../index.html" data-i18n="crumb.teacher">‹ Teacher launch</a> · <a href="../index.html" data-i18n="crumb.suite">Bible as Literature Breakouts</a></div>

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
  lib.push({ band: band.label, href: `grades/${band.featured.file}-student.html`, title: band.featured.title, blurb: band.featured.blurb, featured: true });
  const specFile = path.join(GRADES, `_specs-${band.key}.json`);
  if (!fs.existsSync(specFile)) { console.error('no specs for', band.key); continue; }
  const consts = harvest(band);
  const specs = JSON.parse(fs.readFileSync(specFile, 'utf8'));
  for (const spec of specs) {
    const file = `${band.key}-${spec.slug}`;
    const trans = loadTrans(file);
    if (trans) translated++;
    const obj = { id: `bible-${band.key}-${spec.slug}`, band: band.label, confetti: CONFETTI, UI: buildUI(band, spec, trans, consts), CONTENT: buildContent(spec, trans) };
    fs.writeFileSync(path.join(GRADES, file + '.js'), 'window.BREAKOUT = ' + JSON.stringify(obj, null, 1) + ';\n');
    fs.writeFileSync(path.join(GRADES, file + '-student.html'), studentHtml(file, band, spec, spec.locks.length));
    lib.push({ band: band.label, href: `grades/${file}-student.html`, title: spec.h1, blurb: spec.sub });
    written++;
  }
}

fs.writeFileSync(path.join(ROOT, 'breakouts.js'), 'window.BIBLE_LIB = ' + JSON.stringify(lib) + ';\n');
console.log(`build-more: wrote ${written} breakouts (${translated} with translations), ${lib.length} library entries.`);
