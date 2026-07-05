#!/usr/bin/env node
/* _instrument-hubs.js — one-time: add data-i18n attributes to the 9 grade hubs
   (grade<G>/index.html), extract the English strings, and add a Teacher-supports
   link row (UDL / ELPS / lesson-plan guide). Idempotent: skips a file that is
   already instrumented. Writes the extracted English to _hub/en.json:
     { shared:{...identical chrome...}, grades:{ grade1:{...}, ... } }
   build-hubs.js then turns _hub/<lang>.json into each grade's i18n-index.js. */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const GRADES = ['gradeK', 'grade1', 'grade2', 'grade3', 'grade4', 'grade5', 'grade6', 'grade7', 'grade8'];

const shared = {};   // filled from the first grade (identical across grades)
const grades = {};

const SUPPORTS = '\n  <p class="meta" style="margin-top:14px"><b data-i18n="supports.lead">🧑‍🏫 Teacher supports:</b> ' +
  '<a href="../udl.html" data-i18n="supports.udl">UDL supports</a> · ' +
  '<a href="../elps.html" data-i18n="supports.elps">ELPS supports</a> · ' +
  '<a href="../guide.html" data-i18n="supports.guide">Lesson-plan guide</a></p>';

for (const g of GRADES) {
  const fp = path.join(ROOT, g, 'index.html');
  let h = fs.readFileSync(fp, 'utf8');
  if (h.includes('data-i18n=')) { console.log('· ' + g + ' already instrumented'); continue; }
  const gd = {};
  const cap = {};
  // helper: add an attribute to an element matched by `re` (with one capture = inner), record capture under key
  function inject(re, attr, key, store) {
    h = h.replace(re, (m, pre, inner) => { store[key] = inner.trim(); return pre.replace('>', ' ' + attr + '="' + key + '">') + inner; });
  }
  // shared chrome (record into `cap`, later promoted to `shared`)
  h = h.replace(/(<div class="crumb"><a href="\.\.\/index\.html")(>)(.*?)(<\/a>)/s, (m, a, gt, inner, end) => { cap['crumb'] = inner.trim(); return a + ' data-i18n="crumb"' + gt + inner + end; });
  h = h.replace(/(<div class="feat")(>)(.*?)(<\/div>)/s, (m, a, gt, inner, end) => { cap['feat'] = inner.trim(); return a + ' data-i18n="feat"' + gt + inner + end; });
  h = h.replace(/(<a class="big-btn" href="student\.html")(>)(.*?)(<\/a>)/s, (m, a, gt, inner, end) => { cap['btn.open'] = inner.trim(); return a + ' data-i18n="btn.open"' + gt + inner + end; });
  h = h.replace(/(<a class="pill" href="engineering-challenge\.html")(>)(.*?)(<\/a>)/s, (m, a, gt, inner, end) => { cap['pill.stem'] = inner.trim(); return a + ' data-i18n="pill.stem"' + gt + inner + end; });
  h = h.replace(/(<a class="pill" href="glossary\.html")(>)(.*?)(<\/a>)/s, (m, a, gt, inner, end) => { cap['pill.words'] = inner.trim(); return a + ' data-i18n="pill.words"' + gt + inner + end; });
  h = h.replace(/(<a class="pill" href="skills-teks\.html")(>)(.*?)(<\/a>)/s, (m, a, gt, inner, end) => { cap['pill.skills'] = inner.trim(); return a + ' data-i18n="pill.skills"' + gt + inner + end; });
  h = h.replace(/(<a class="pill" href="answer-key\.html")(>)(.*?)(<\/a>)/s, (m, a, gt, inner, end) => { cap['pill.key'] = inner.trim(); return a + ' data-i18n="pill.key"' + gt + inner + end; });
  h = h.replace(/(<footer)(>)(.*?)(<\/footer>)/s, (m, a, gt, inner, end) => { cap['footer'] = inner.trim(); return a + ' data-i18n-html="footer"' + gt + inner + end; });
  // meta: split "prefix <code>path</code>"
  h = h.replace(/(<div class="meta">)(.*?)( ?<code>.*?<\/code>)(<\/div>)/s, (m, open, pre, code, end) => { cap['meta.pre'] = pre.trim(); return open + '<span data-i18n="meta.pre">' + pre.trim() + '</span> ' + code.trim() + end; });

  // per-grade content
  h = h.replace(/(<div class="eyebrow")(>)(.*?)(<\/div>)/s, (m, a, gt, inner, end) => { gd['eyebrow'] = inner.trim(); return a + ' data-i18n="eyebrow"' + gt + inner + end; });
  h = h.replace(/(<h1)(>)(.*?)(<\/h1>)/s, (m, a, gt, inner, end) => { gd['h1'] = inner.trim(); return a + ' data-i18n="h1"' + gt + inner + end; });
  h = h.replace(/(<p class="band")(>)(.*?)(<\/p>)/s, (m, a, gt, inner, end) => { gd['band'] = inner.trim(); return a + ' data-i18n="band"' + gt + inner + end; });
  h = h.replace(/(<div class="featname")(>)(.*?)(<\/div>)/s, (m, a, gt, inner, end) => { gd['featname'] = inner.trim(); return a + ' data-i18n="featname"' + gt + inner + end; });
  h = h.replace(/(<div class="featname"[^>]*>.*?<\/div>\s*<p)(>)(.*?)(<\/p>)/s, (m, a, gt, inner, end) => { gd['card.p'] = inner.trim(); return a + ' data-i18n-html="card.p"' + gt + inner + end; });
  h = h.replace(/(<a class="pill more" href="more\.html")(>)(.*?)(<\/a>)/s, (m, a, gt, inner, end) => { gd['pill.more'] = inner.trim(); return a + ' data-i18n="pill.more"' + gt + inner + end; });
  h = h.replace(/(<div class="note")(>)(.*?)(<\/div>)/s, (m, a, gt, inner, end) => { gd['note'] = inner.trim(); return a + ' data-i18n-html="note"' + gt + inner + end; });

  // add Teacher-supports row right after the pillrow
  h = h.replace(/(<div class="pillrow">[\s\S]*?<\/div>)/, '$1' + SUPPORTS);

  fs.writeFileSync(fp, h);
  grades[g] = gd;
  if (!Object.keys(shared).length) Object.assign(shared, cap);
  console.log('✓ instrumented ' + g + ' (grade keys: ' + Object.keys(gd).length + ')');
}

// shared supports labels (defaults; translated later)
Object.assign(shared, {
  'supports.lead': '🧑‍🏫 Teacher supports:',
  'supports.udl': 'UDL supports',
  'supports.elps': 'ELPS supports',
  'supports.guide': 'Lesson-plan guide',
});

if (Object.keys(grades).length) {
  fs.mkdirSync(path.join(ROOT, '_hub'), { recursive: true });
  const out = { shared, grades };
  fs.writeFileSync(path.join(ROOT, '_hub', 'en.json'), JSON.stringify(out, null, 2) + '\n');
  console.log('\nwrote _hub/en.json — shared[' + Object.keys(shared).length + '] grades[' + Object.keys(grades).length + ']');
}
