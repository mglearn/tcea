#!/usr/bin/env node
/* validate.js — structural checks for a PST unit and/or its arcade tickets.
 *
 *   node validate.js <unit-dir>              e.g. node validate.js example
 *   node validate.js --tickets <file.js>     e.g. node validate.js --tickets example/example-tickets.js
 *
 * Unit check:    all 7 languages in i18n-unit.js share an identical key set (parity), and every
 *                data-i18n key used in the HTML exists in the English dictionary (coverage).
 * Tickets check: every ticket has all 7 languages, and the answer index `a` / category index `c`
 *                and choice count are byte-identical across languages (translating must not reorder).
 *
 * Exit code 0 = all pass, 1 = any failure. No dependencies. */
'use strict';
const fs = require('fs');
const path = require('path');

const LANGS = ['en', 'es', 'vi', 'ar', 'hi', 'ur', 'zh'];
let failures = 0;
const fail = (m) => { console.log('  ✗ ' + m); failures++; };
const ok = (m) => console.log('  ✓ ' + m);

/* Load a file that calls BreakoutI18n.register(id, dicts) and return dicts. */
function loadRegister(file) {
  let captured = null;
  const sandbox = {
    window: {},
    BreakoutI18n: { register: (id, d) => { captured = d; }, extend: (id, d) => { captured = d; } },
  };
  sandbox.window.BreakoutI18n = sandbox.BreakoutI18n;
  new Function('window', 'BreakoutI18n', fs.readFileSync(file, 'utf8'))(sandbox.window, sandbox.BreakoutI18n);
  return captured;
}

function parity(dict, label) {
  const langs = Object.keys(dict);
  const en = Object.keys(dict.en || {}).sort();
  let good = true;
  LANGS.forEach((l) => { if (!dict[l]) { fail(`${label}: missing language "${l}"`); good = false; } });
  langs.forEach((l) => {
    const k = Object.keys(dict[l]).sort();
    if (k.length !== en.length || k.some((x, i) => x !== en[i])) {
      good = false;
      const miss = en.filter((x) => !(x in dict[l]));
      const extra = k.filter((x) => !(x in dict.en));
      fail(`${label}: "${l}" key set differs (${k.length} vs en ${en.length})`
        + (miss.length ? ` missing ${miss.slice(0, 6).join(',')}` : '')
        + (extra.length ? ` extra ${extra.slice(0, 6).join(',')}` : ''));
    }
  });
  if (good) ok(`${label}: parity OK — ${langs.length} languages × ${en.length} keys`);
  return good;
}

function checkUnit(dir) {
  console.log(`\nUnit: ${dir}`);
  const uni = path.join(dir, 'i18n-unit.js');
  if (!fs.existsSync(uni)) { fail(`no i18n-unit.js in ${dir}`); return; }
  const dict = loadRegister(uni);
  if (!dict || !dict.en) { fail('i18n-unit.js did not register an { en: {…} } dictionary'); return; }
  parity(dict, 'i18n-unit');
  // HTML key coverage
  const pages = ['index', 'surface', 'deep', 'transfer', 'facilitator-guide', 'assessment'];
  const missing = new Set();
  pages.forEach((p) => {
    const f = path.join(dir, p + '.html');
    if (!fs.existsSync(f)) return;
    const h = fs.readFileSync(f, 'utf8');
    const re = /data-i18n(?:-html)?="([^"]+)"/g; let m;
    while ((m = re.exec(h))) if (!(m[1] in dict.en)) missing.add(m[1]);
  });
  if (missing.size) fail('HTML keys missing from en dict: ' + [...missing].slice(0, 20).join(', '));
  else ok('HTML coverage OK — every data-i18n key is in the en dictionary');
}

function checkTickets(file) {
  console.log(`\nTickets: ${file}`);
  const sandbox = { window: {} };
  new Function('window', fs.readFileSync(file, 'utf8'))(sandbox.window);
  const T = sandbox.window.PST_TICKETS || [];
  if (!T.length) { fail('no tickets registered (window.PST_TICKETS is empty)'); return; }
  ok(`${T.length} ticket(s) loaded`);
  T.forEach((t) => {
    const en = t.i18n && t.i18n.en;
    if (!en) { fail(`${t.id}: no English content`); return; }
    LANGS.forEach((l) => {
      const c = t.i18n[l];
      if (!c) { fail(`${t.id}: missing language "${l}"`); return; }
      if (en.questions) en.questions.forEach((q, i) => {
        if (!c.questions || c.questions[i].a !== q.a || c.questions[i].choices.length !== q.choices.length)
          fail(`${t.id} [${l}] question ${i}: answer index or choice count drifted`);
      });
      if (en.items && en.items[0] && en.items[0].a !== undefined) en.items.forEach((q, i) => {
        if (!c.items || c.items[i].a !== q.a || c.items[i].choices.length !== q.choices.length)
          fail(`${t.id} [${l}] item ${i}: answer index or choice count drifted`);
      });
      if (en.items && en.items[0] && en.items[0].c !== undefined) en.items.forEach((q, i) => {
        if (!c.items || c.items[i].c !== q.c) fail(`${t.id} [${l}] item ${i}: category index drifted`);
      });
      if (en.pairs && (!c.pairs || c.pairs.length !== en.pairs.length)) fail(`${t.id} [${l}]: pair count drifted`);
      if (en.cats && (!c.cats || c.cats.length !== en.cats.length)) fail(`${t.id} [${l}]: category count drifted`);
    });
  });
  if (!failures) ok('all tickets: 7 languages, answer/category indices preserved');
}

// ---- CLI ----
const args = process.argv.slice(2);
if (!args.length) {
  console.log('usage:\n  node validate.js <unit-dir>\n  node validate.js --tickets <file.js>');
  process.exit(2);
}
if (args[0] === '--tickets') checkTickets(args[1]);
else checkUnit(args[0]);

console.log(failures ? `\n${failures} problem(s) found.` : '\nAll checks passed. ✓');
process.exit(failures ? 1 : 0);
