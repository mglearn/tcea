#!/usr/bin/env node
/* _instrument-more.js — one-time: add the language switcher + data-i18n to the 9
   more.html library pages, extract chrome into _more/en.json, and swap the grid
   script for a language-aware one that pulls translated titles from MORE_I18N.
   Idempotent. build-more-i18n.js writes each grade's i18n-more.js. */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const GRADES = ['gradeK', 'grade1', 'grade2', 'grade3', 'grade4', 'grade5', 'grade6', 'grade7', 'grade8'];

const LANGBAR = '  <div class="langbar"><span class="globe" aria-hidden="true">🌐</span><div data-i18n-picker></div></div>\n';
const LANGBAR_CSS = '  .langbar{display:flex;align-items:center;justify-content:flex-end;gap:8px;margin-bottom:8px}\n  .langbar .globe{font-size:1.1rem}\n  .breakout-i18n-switcher,#i18nSwitcher{font-family:\'Nunito\',sans-serif;font-weight:700;font-size:.9rem;padding:7px 12px;border:2px solid var(--line);border-radius:9px;background:#fff;color:var(--navy);cursor:pointer}\n';
const GRID_SCRIPT = `<script src="more.js"></script>
<script src="more-i18n.js"></script>
<script src="../../assets/i18n.js"></script>
<script src="i18n-more.js"></script>
<script>
(function () {
  var lib = window.MORE || {}, I18N = window.MORE_I18N || {};
  function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function render() {
    var lang = window.BreakoutI18n ? BreakoutI18n.getLang() : 'en';
    var open = (window.BreakoutI18n && BreakoutI18n.t('grid.open')) || '▶ Open breakout';
    document.getElementById('grid').innerHTML = Object.keys(lib).map(function (slug) {
      var e = lib[slug];
      var t = (I18N[lang] && I18N[lang].breakouts && I18N[lang].breakouts[slug]) || null;
      var h1 = (t && t.ui && t.ui.h1) || e.ui.h1;
      var sub = (t && t.ui && t.ui.sub) || e.ui.sub;
      return '<a class="pill" href="play.html?b=' + encodeURIComponent(slug) + '">' +
        '<span class="teks">TEKS ' + esc(e.teks || '') + '</span>' +
        '<h3>' + esc(h1) + '</h3><p>' + esc(sub) + '</p>' +
        '<span class="go">' + esc(open) + '</span></a>';
    }).join('');
  }
  render();
  window.addEventListener('breakout-i18n:changed', render);
})();
</script>`;

const shared = {};
const grades = {};

for (const g of GRADES) {
  const fp = path.join(ROOT, g, 'more.html');
  let h = fs.readFileSync(fp, 'utf8');
  if (h.includes('data-i18n=')) { console.log('· ' + g + ' more already instrumented'); continue; }
  const gd = {};
  // add langbar CSS + element
  h = h.replace('</style>', LANGBAR_CSS + '</style>');
  h = h.replace('<div class="wrap">\n', '<div class="wrap">\n' + LANGBAR);
  // chrome
  h = h.replace(/(<div class="crumb")(>)(.*?)(<\/div>)/s, (m, a, gt, inner, end) => { gd['crumb'] = inner.trim(); return a + ' data-i18n-html="crumb"' + gt + inner + end; });
  h = h.replace(/(<div class="eyebrow")(>)(.*?)(<\/div>)/s, (m, a, gt, inner, end) => { gd['eyebrow'] = inner.trim(); return a + ' data-i18n="eyebrow"' + gt + inner + end; });
  h = h.replace(/(<h1)(>)(.*?)(<\/h1>)/s, (m, a, gt, inner, end) => { gd['h1'] = inner.trim(); return a + ' data-i18n="h1"' + gt + inner + end; });
  h = h.replace(/(<p class="lead")(>)(.*?)(<\/p>)/s, (m, a, gt, inner, end) => { gd['lead'] = inner.trim(); return a + ' data-i18n="lead"' + gt + inner + end; });
  h = h.replace(/(<div class="note")(>)(.*?)(<\/div>)/s, (m, a, gt, inner, end) => { shared['note'] = inner.trim(); return a + ' data-i18n-html="note"' + gt + inner + end; });
  h = h.replace(/(<footer)(>)(.*?)(<\/footer>)/s, (m, a, gt, inner, end) => { gd['footer'] = inner.trim(); return a + ' data-i18n-html="footer"' + gt + inner + end; });
  // swap the trailing script(s) for the language-aware grid + i18n loaders
  h = h.replace(/<script src="more\.js"><\/script>\s*<script>[\s\S]*?<\/script>\s*<\/body>/, GRID_SCRIPT + '\n</body>');
  fs.writeFileSync(fp, h);
  grades[g] = gd;
  console.log('✓ ' + g + ' more (' + Object.keys(gd).length + ' keys)');
}

shared['grid.open'] = '▶ Open breakout';

if (Object.keys(grades).length) {
  fs.mkdirSync(path.join(ROOT, '_more'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, '_more', 'en.json'), JSON.stringify({ shared, grades }, null, 2) + '\n');
  console.log('\nwrote _more/en.json — shared[' + Object.keys(shared).length + '] grades[' + Object.keys(grades).length + ']');
}
