#!/usr/bin/env node
/* _instrument-toc.js — one-time: add data-i18n to science/index.html (the TOC),
   extract English into _toc/en.json, and switch the inline register to i18n-toc.js.
   Idempotent. build-toc.js then writes i18n-toc.js from _toc/<lang>.json. */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const GRADES = ['gradeK', 'grade1', 'grade2', 'grade3', 'grade4', 'grade5', 'grade6', 'grade7', 'grade8'];
const fp = path.join(ROOT, 'index.html');
let h = fs.readFileSync(fp, 'utf8');
if (h.includes('data-i18n=')) { console.log('· TOC already instrumented'); process.exit(0); }
const dict = {};
function one(re, attr, key) {
  h = h.replace(re, (m, a, gt, inner, end) => { dict[key] = inner.trim(); return a + ' ' + attr + '="' + key + '"' + gt + inner + end; });
}
// chrome
h = h.replace(/(<div class="crumb"><a href="\.\.\/index\.html")(>)(.*?)(<\/a>)/s, (m, a, gt, inner, end) => { dict['crumb'] = inner.trim(); return a + ' data-i18n="crumb"' + gt + inner + end; });
one(/(<div class="eyebrow")(>)(.*?)(<\/div>)/s, 'data-i18n', 'eyebrow');
one(/(<h1)(>)(.*?)(<\/h1>)/s, 'data-i18n', 'h1');
one(/(<p class="sub")(>)(.*?)(<\/p>)/s, 'data-i18n-html', 'sub');
// two group labels (in order)
let gl = 0;
h = h.replace(/(<div class="grouplabel")(>)(.*?)(<\/div>)/gs, (m, a, gt, inner, end) => { const k = gl++ === 0 ? 'group.elem' : 'group.mid'; dict[k] = inner.trim(); return a + ' data-i18n="' + k + '"' + gt + inner + end; });
// foot-links + footer
one(/(<div class="foot-links")(>)(.*?)(<\/div>)/s, 'data-i18n-html', 'foot');
one(/(<footer)(>)(.*?)(<\/footer>)/s, 'data-i18n-html', 'footer');
// per-grade cards
for (const g of GRADES) {
  const cardRe = new RegExp('(<a class="card" href="' + g + '\\/index\\.html"[\\s\\S]*?<\\/a>)');
  h = h.replace(cardRe, (card) => {
    let c = card;
    c = c.replace(/(<span class="g")(>)(.*?)(<\/span>)/s, (m, a, gt, inner, end) => { dict['card.' + g + '.g'] = inner.trim(); return a + ' data-i18n="card.' + g + '.g"' + gt + inner + end; });
    c = c.replace(/(<h2)(>)(.*?)(<\/h2>)/s, (m, a, gt, inner, end) => { dict['card.' + g + '.h2'] = inner.trim(); return a + ' data-i18n="card.' + g + '.h2"' + gt + inner + end; });
    c = c.replace(/(<p)(>)(.*?)(<\/p>)/s, (m, a, gt, inner, end) => { dict['card.' + g + '.p'] = inner.trim(); return a + ' data-i18n-html="card.' + g + '.p"' + gt + inner + end; });
    c = c.replace(/(<span class="go")(>)(.*?)(<\/span>)/s, (m, a, gt, inner, end) => { dict['card.' + g + '.go'] = inner.trim(); return a + ' data-i18n="card.' + g + '.go"' + gt + inner + end; });
    return c;
  });
}
// swap inline register for a generated file
h = h.replace(/<script>document\.addEventListener\('DOMContentLoaded'[\s\S]*?<\/script>/, '<script src="i18n-toc.js" defer></script>');
fs.writeFileSync(fp, h);
fs.mkdirSync(path.join(ROOT, '_toc'), { recursive: true });
fs.writeFileSync(path.join(ROOT, '_toc', 'en.json'), JSON.stringify(dict, null, 2) + '\n');
console.log('✓ instrumented TOC — ' + Object.keys(dict).length + ' keys → _toc/en.json');
