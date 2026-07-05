#!/usr/bin/env node
/* _instrument-skills.js — one-time: add the language switcher + data-i18n to the 9
   skills-teks.html pages (uniform skeleton), extract English into _skills/en.json,
   keyed per grade. Idempotent. build-skills.js writes each grade's i18n-skills.js. */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const GRADES = ['gradeK', 'grade1', 'grade2', 'grade3', 'grade4', 'grade5', 'grade6', 'grade7', 'grade8'];

const LANGBAR = '  <div class="langbar"><span class="globe" aria-hidden="true">🌐</span><div data-i18n-picker></div></div>\n';
const LANGBAR_CSS = '  .langbar{display:flex;align-items:center;justify-content:flex-end;gap:8px;margin-bottom:8px}\n  .langbar .globe{font-size:1.1rem}\n  .breakout-i18n-switcher,#i18nSwitcher{font-family:\'Nunito\',sans-serif;font-weight:700;font-size:.9rem;padding:7px 12px;border:2px solid var(--line);border-radius:9px;background:#fff;color:var(--navy);cursor:pointer}\n';

const grades = {};
for (const g of GRADES) {
  const fp = path.join(ROOT, g, 'skills-teks.html');
  let h = fs.readFileSync(fp, 'utf8');
  if (h.includes('data-i18n=')) { console.log('· ' + g + ' skills already instrumented'); continue; }
  const d = {};
  // switcher
  h = h.replace('</style>', LANGBAR_CSS + '</style>');
  h = h.replace('<div class="wrap">\n', '<div class="wrap">\n' + LANGBAR);
  // single-occurrence elements
  h = h.replace(/(<div class="crumb")(>)(.*?)(<\/div>)/s, (m, a, gt, i, e) => { d['crumb'] = i.trim(); return a + ' data-i18n-html="crumb"' + gt + i + e; });
  h = h.replace(/(<div class="eyebrow")(>)(.*?)(<\/div>)/s, (m, a, gt, i, e) => { d['eyebrow'] = i.trim(); return a + ' data-i18n="eyebrow"' + gt + i + e; });
  h = h.replace(/(<h1)(>)(.*?)(<\/h1>)/s, (m, a, gt, i, e) => { d['h1'] = i.trim(); return a + ' data-i18n="h1"' + gt + i + e; });
  h = h.replace(/(<p class="lead")(>)(.*?)(<\/p>)/s, (m, a, gt, i, e) => { d['lead'] = i.trim(); return a + ' data-i18n-html="lead"' + gt + i + e; });
  h = h.replace(/(<div class="misc")(>)(.*?)(<\/div>)/s, (m, a, gt, i, e) => { d['misc'] = i.trim(); return a + ' data-i18n-html="misc"' + gt + i + e; });
  h = h.replace(/(<a class="btn2"[^>]*)(>)(.*?)(<\/a>)/s, (m, a, gt, i, e) => { d['btn'] = i.trim(); return a + ' data-i18n="btn"' + gt + i + e; });
  h = h.replace(/(<p class="disc")(>)(.*?)(<\/p>)/s, (m, a, gt, i, e) => { d['disc'] = i.trim(); return a + ' data-i18n-html="disc"' + gt + i + e; });
  h = h.replace(/(<footer)(>)(.*?)(<\/footer>)/s, (m, a, gt, i, e) => { d['footer'] = i.trim(); return a + ' data-i18n-html="footer"' + gt + i + e; });
  // repeated elements → indexed keys (document order preserved per type)
  let n;
  n = 0; h = h.replace(/(<h2)(>)(.*?)(<\/h2>)/gs, (m, a, gt, i, e) => { const k = 'h2.' + n++; d[k] = i.trim(); return a + ' data-i18n-html="' + k + '"' + gt + i + e; });
  n = 0; h = h.replace(/(<th)(>)(.*?)(<\/th>)/gs, (m, a, gt, i, e) => { const k = 'th.' + n++; d[k] = i.trim(); return a + ' data-i18n-html="' + k + '"' + gt + i + e; });
  n = 0; h = h.replace(/(<td)(>)(.*?)(<\/td>)/gs, (m, a, gt, i, e) => { const k = 'td.' + n++; d[k] = i.trim(); return a + ' data-i18n-html="' + k + '"' + gt + i + e; });
  // plain <p> (not lead/disc, already tagged) that remain untagged
  n = 0; h = h.replace(/(<p)(>)(.*?)(<\/p>)/gs, (m, a, gt, i, e) => { const k = 'p.' + n++; d[k] = i.trim(); return a + ' data-i18n-html="' + k + '"' + gt + i + e; });
  // load engine + generated dict
  h = h.replace('</body>', '<script src="../../assets/i18n.js" defer></script>\n<script src="i18n-skills.js" defer></script>\n</body>');
  fs.writeFileSync(fp, h);
  grades[g] = d;
  console.log('✓ ' + g + ' skills (' + Object.keys(d).length + ' keys)');
}
if (Object.keys(grades).length) {
  fs.mkdirSync(path.join(ROOT, '_skills'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, '_skills', 'en.json'), JSON.stringify({ grades }, null, 2) + '\n');
  console.log('\nwrote _skills/en.json — grades[' + Object.keys(grades).length + ']');
}
