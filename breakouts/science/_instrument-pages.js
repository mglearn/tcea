#!/usr/bin/env node
/* _instrument-pages.js — one-time: add the switcher + data-i18n to the non-uniform
   content pages (glossary.html, engineering-challenge.html) across all 9 grades,
   extracting English per grade. Named single-instance elements get stable keys;
   repeated elements get indexed keys (document order preserved). Idempotent.
   build-pages.js writes each grade's i18n-<type>.js. */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const GRADES = ['gradeK', 'grade1', 'grade2', 'grade3', 'grade4', 'grade5', 'grade6', 'grade7', 'grade8'];

const LANGBAR = '  <div class="langbar"><span class="globe" aria-hidden="true">🌐</span><div data-i18n-picker></div></div>\n';
const LANGBAR_CSS = '  .langbar{display:flex;align-items:center;justify-content:flex-end;gap:8px;margin-bottom:8px}\n  .langbar .globe{font-size:1.1rem}\n  .breakout-i18n-switcher,#i18nSwitcher{font-family:\'Nunito\',sans-serif;font-weight:700;font-size:.9rem;padding:7px 12px;border:2px solid var(--line);border-radius:9px;background:#fff;color:var(--navy);cursor:pointer}\n';

// element openers to match: [regex-with-3-groups(open,'>',inner,end), key, html?]
function namedOpen(tagOpen) { return new RegExp('(' + tagOpen + ')(>)([\\s\\S]*?)(<\\/' + tagOpen.match(/<([a-z0-9]+)/)[1] + '>)'); }

const CONFIG = {
  glossary: {
    file: 'glossary.html', reg: 'i18n-glossary.js', widget: 'glossary',
    named: [
      ['<div class="crumb"', 'crumb', 1], ['<div class="eyebrow"', 'eyebrow', 0],
      ['<h1', 'h1', 0], ['<p class="lead"', 'lead', 1], ['<footer', 'footer', 1],
    ],
    indexed: [['<h2', 'h2', 1], ['<dt', 'dt', 1], ['<dd', 'dd', 1], ['<span class="ex"', 'ex', 1]],
  },
  engineering: {
    file: 'engineering-challenge.html', reg: 'i18n-eng.js', widget: 'eng',
    named: [
      ['<div class="crumb"', 'crumb', 1], ['<div class="eyebrow"', 'eyebrow', 0],
      ['<h1', 'h1', 0], ['<p class="lead"', 'lead', 1], ['<footer', 'footer', 1],
    ],
    indexed: [['<h2', 'h2', 1], ['<h3', 'h3', 1], ['<p', 'p', 1], ['<li', 'li', 1],
      ['<span class="teks"', 'teks', 1]],
  },
};

function run(cfg) {
  const grades = {};
  for (const g of GRADES) {
    const fp = path.join(ROOT, g, cfg.file);
    if (!fs.existsSync(fp)) continue;
    let h = fs.readFileSync(fp, 'utf8');
    if (h.includes('data-i18n=')) { console.log('· ' + g + ' ' + cfg.file + ' already done'); continue; }
    const d = {};
    h = h.replace('</style>', LANGBAR_CSS + '</style>');
    h = h.replace('<div class="wrap">\n', '<div class="wrap">\n' + LANGBAR);
    const closeTag = o => '</' + o.match(/<([a-z0-9]+)/)[1] + '>';
    for (const [open, key, html] of cfg.named) {
      const re = new RegExp('(' + open.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(>)([\\s\\S]*?)(' + closeTag(open) + ')');
      h = h.replace(re, (m, a, gt, inner, end) => { d[key] = inner.trim(); return a + ' data-i18n' + (html ? '-html' : '') + '="' + key + '"' + gt + inner + end; });
    }
    for (const [open, key, html] of cfg.indexed) {
      let n = 0;
      const re = new RegExp('(' + open.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(>)([\\s\\S]*?)(' + closeTag(open) + ')', 'g');
      h = h.replace(re, (m, a, gt, inner, end) => { const k = key + '.' + n++; d[k] = inner.trim(); return a + ' data-i18n-html="' + k + '"' + gt + inner + end; });
    }
    h = h.replace('</body>', '<script src="../../assets/i18n.js" defer></script>\n<script src="' + cfg.reg + '" defer></script>\n</body>');
    fs.writeFileSync(fp, h);
    grades[g] = d;
    console.log('✓ ' + g + ' ' + cfg.file + ' (' + Object.keys(d).length + ' keys)');
  }
  if (Object.keys(grades).length) {
    const dir = path.join(ROOT, '_' + cfg.widget);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'en.json'), JSON.stringify({ widget: cfg.widget, grades }, null, 2) + '\n');
    console.log('  → _' + cfg.widget + '/en.json (' + Object.keys(grades).length + ' grades)\n');
  }
}

run(CONFIG.glossary);
run(CONFIG.engineering);
