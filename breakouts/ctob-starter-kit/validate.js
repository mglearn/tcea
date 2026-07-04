#!/usr/bin/env node
/* validate.js — structural checks for a breakout + its translations, BEFORE you
   ship. Catches the silent gameplay bugs described in ctob_project_pack.md §2.4 / §15.
   (It does NOT replace a real-browser solve — do that too.)

   Usage:  node validate.js example/example      (pass the path WITHOUT .en.js)

   Checks the English source:
     • 6 clues, each with id/ico/nm/title/body; exactly one decoy is your job to keep
     • 4 locks, each with an id; one of each type (seq/mc/multi/word) is recommended
     • multi = exactly 3 strong + 1 not-strong;  seq answer keys ⊆ pad keys, same length
     • mc answerIndex in range;  word answer non-empty
   And each _i18n/<lang>.json:
     • has chrome; clues length 6; locks length 4
     • per lock, the translated type-field length matches English (options 3, items 4,
       pads = English pad count); word non-empty; no ASCII double-quote left in a value
*/
const fs = require('fs');
const path = require('path');
const LANGS = ['es', 'vi', 'ar', 'hi', 'ur', 'zh'];

const arg = (process.argv[2] || 'example/example').replace(/\.en\.js$/, '');
const enFile = arg + '.en.js';
const i18nDir = path.join(path.dirname(arg), '_i18n');
let errors = 0, warns = 0;
const err = m => { console.log('  ✗ ' + m); errors++; };
const warn = m => { console.log('  ⚠ ' + m); warns++; };

function evalGlobal(file) {
  const w = { window: {} };
  eval('(function(window){' + fs.readFileSync(file, 'utf8') + '})(w.window)');
  return w.window.BREAKOUT;
}

console.log('English source: ' + enFile);
const B = evalGlobal(enFile);
const en = B && B.CONTENT && B.CONTENT.en;
if (!en) { err('window.BREAKOUT.CONTENT.en missing'); process.exit(1); }

// clues
if (!Array.isArray(en.clues) || en.clues.length !== 6) err(`expected 6 clues, found ${en.clues && en.clues.length}`);
(en.clues || []).forEach((c, i) => {
  ['id', 'ico', 'nm', 'title', 'body'].forEach(k => { if (!c[k]) err(`clue ${i} missing "${k}"`); });
});

// locks
if (!Array.isArray(en.locks) || en.locks.length !== 4) err(`expected 4 locks, found ${en.locks && en.locks.length}`);
const types = (en.locks || []).map(l => l.type);
['seq', 'mc', 'multi', 'word'].forEach(t => { if (!types.includes(t)) warn(`no "${t}" lock (one of each type is recommended)`); });
(en.locks || []).forEach((l, i) => {
  if (!l.id) err(`lock ${i} missing "id"`);
  if (!l.reason) warn(`lock ${l.id || i} has no "reason" (every lock should name the thinking move)`);
  if (l.type === 'mc') {
    if (!Array.isArray(l.options) || l.options.length < 2) err(`${l.id} mc needs options`);
    if (typeof l.answerIndex !== 'number' || l.answerIndex < 0 || l.answerIndex >= (l.options || []).length) err(`${l.id} mc answerIndex out of range`);
  } else if (l.type === 'multi') {
    const strong = (l.items || []).filter(x => x.strong).length;
    const weak = (l.items || []).filter(x => !x.strong).length;
    if (strong !== 3 || weak !== 1) err(`${l.id} multi must be 3 strong + 1 decoy (found ${strong} strong, ${weak} decoy)`);
  } else if (l.type === 'seq') {
    const keys = (l.pads || []).map(p => p.k);
    if (!Array.isArray(l.answer) || l.answer.length !== keys.length) err(`${l.id} seq answer length must equal pad count`);
    (l.answer || []).forEach(k => { if (!keys.includes(k)) err(`${l.id} seq answer key "${k}" is not a pad key`); });
  } else if (l.type === 'word') {
    if (!Array.isArray(l.answer) || !l.answer.length) err(`${l.id} word answer is empty`);
  } else if (l.type === 'digit') {
    if (!Array.isArray(l.answer) || !l.answer.length) err(`${l.id} digit answer is empty`);
  }
});

// translations
for (const lang of LANGS) {
  const fp = path.join(i18nDir, lang + '.json');
  if (!fs.existsSync(fp)) continue;
  console.log('Translation: ' + lang);
  let d; try { d = JSON.parse(fs.readFileSync(fp, 'utf8')); } catch (e) { err(`${lang}: JSON parse error — ${e.message}`); continue; }
  if (!d.chrome) err(`${lang}: no "chrome" block`);
  if ((d.clues || []).length !== 6) err(`${lang}: clues length ${(d.clues || []).length} (expected 6)`);
  if ((d.locks || []).length !== 4) err(`${lang}: locks length ${(d.locks || []).length} (expected 4)`);
  (en.locks || []).forEach((l, i) => {
    const t = (d.locks || [])[i]; if (!t) return;
    if (l.type === 'mc' && (t.options || []).length !== l.options.length) err(`${lang} L${i + 1}: options length mismatch`);
    if (l.type === 'multi' && (t.items || []).length !== l.items.length) err(`${lang} L${i + 1}: items length mismatch`);
    if (l.type === 'seq' && (t.pads || []).length !== l.pads.length) err(`${lang} L${i + 1}: pads length mismatch`);
    if (l.type === 'word') { const w = Array.isArray(t.word) ? t.word : (t.word ? [t.word] : []); if (!w.length) err(`${lang} L${i + 1}: word answer empty`); }
  });
  // JSON-safety: a stray ASCII double-quote inside a value is the classic break (§5)
  const raw = fs.readFileSync(fp, 'utf8');
  if (/:\s*"[^"\n]*[^\\]"[^"\n,}\]]*"/.test(raw)) warn(`${lang}: possible stray ASCII double-quote inside a value (see §5 — use typographic quotes)`);
}

console.log(`\n${errors === 0 ? '✓ PASS' : '✗ FAIL'} — ${errors} error(s), ${warns} warning(s)`);
process.exit(errors ? 1 : 0);
