#!/usr/bin/env node
/* build-catalog.js — scan all breakout suites and emit catalog.js (window.CATALOG),
   powering the top-level breakouts/index.html (search + randomizer).
   Run:  node breakouts/build-catalog.js */
const fs = require('fs'), path = require('path'), cp = require('child_process');
const ROOT = __dirname;
const BAND = { grade35: '3–5', grade68: '6–8', grade912: '9–12', g35: '3–5', g68: '6–8', g912: '9–12' };

function localeMeta(suite) {
  const out = [];
  for (const band of ['grade35', 'grade68', 'grade912']) {
    const dir = path.join(ROOT, suite, band, 'locales');
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith('.js')) continue;
      const slug = f.replace('.js', '');
      try {
        const w = {}; eval(fs.readFileSync(path.join(dir, f), 'utf8').replace('window.BREAKOUT', 'w.BREAKOUT'));
        const b = w.BREAKOUT, en = b.CONTENT.en;
        const kw = [
          ...en.clues.flatMap(c => [c.nm, c.title, c.body]),
          ...en.locks.flatMap(l => [l.q, l.reason, ...(l.options || []), ...((l.items || []).map(i => i.t))]),
        ].join(' ').replace(/\s+/g, ' ').toLowerCase().slice(0, 600);
        out.push({
          suite, band: BAND[band], slug,
          title: b.UI.en['header.h1'],
          desc: b.UI.en['header.sub'],
          href: `${suite}/${band}/${slug}-student.html`,
          kw,
        });
      } catch (e) { console.error('skip', suite, f, e.message); }
    }
  }
  return out;
}

function clearMeta() {
  const out = [];
  const grab = (file, re) => { try { const m = fs.readFileSync(path.join(ROOT, file), 'utf8').match(re); return m ? m[1].replace(/\s*—\s*(Critical Thinking Breakout|Teacher Launch).*/, '').trim() : ''; } catch (e) { return ''; } };
  // 3 main band breakouts
  for (const band of ['grade35', 'grade68', 'grade912']) {
    const title = grab(`clear/${band}/student.html`, /<title>([^<]*)<\/title>/);
    const desc = grab(`clear/${band}/student.html`, /<p class="[^"]*sub[^"]*"[^>]*>([^<]*)</) || 'A CLEAR critical-thinking breakout.';
    if (title) out.push({ suite: 'clear', band: BAND[band], slug: band, title, desc, href: `clear/${band}/student.html`, kw: (title + ' ' + desc).toLowerCase() });
  }
  // practice activities (multilingual library) — link to the English entry
  const adir = path.join(ROOT, 'clear/more/activities');
  if (fs.existsSync(adir)) {
    for (const topic of fs.readdirSync(adir)) {
      const en = path.join(adir, topic, 'en.html');
      if (!fs.existsSync(en)) continue;
      const title = (fs.readFileSync(en, 'utf8').match(/<title>([^<—]*)/) || [, topic])[1].trim();
      const bandKey = topic.split('-')[0]; // g35/g68/g912
      const subj = (topic.split('-')[1] || '').toUpperCase();
      out.push({ suite: 'clear', band: BAND[bandKey] || '', slug: topic, title, desc: `Practice activity · ${subj} · 7 languages`, href: `clear/more/activities/${topic}/en.html`, kw: (title + ' ' + topic).toLowerCase(), activity: true });
    }
  }
  return out;
}

const SUITES = [
  { id: 'clear', name: 'CLEAR Critical Thinking Breakouts', accent: '#7c5cbf',
    desc: 'A detective-style thinking system plus a full library of standards-aligned breakouts and 36 practice activities in seven languages.',
    landing: 'clear/index.html', correlation: 'clear/correlation.html', answerKey: 'clear/answer-key.html' },
  { id: 'july4', name: 'Fourth of July', accent: '#c1121f',
    desc: 'Twelve breakouts on American independence — the Declaration, symbols, the growth of liberty, and civic traditions. Seven languages.',
    landing: 'july4/index.html', correlation: 'july4/correlation.html', answerKey: 'july4/answer-key.html' },
  { id: 'july5th', name: 'July 5 & Black Freedom Holidays', accent: '#0b6b3a',
    desc: 'Twelve breakouts on the freedom days the calendar often overlooks — Douglass’s July 5 address, Juneteenth, Pinkster, Watch Night, and more. Seven languages.',
    landing: 'july5th/index.html', correlation: 'july5th/correlation.html', answerKey: 'july5th/answer-key.html' },
];

const breakouts = [...clearMeta(), ...localeMeta('july4'), ...localeMeta('july5th')];
const catalog = { generated: cp.execSync('git log -1 --format=%cI 2>/dev/null || true').toString().trim() || '', suites: SUITES, breakouts };
fs.writeFileSync(path.join(ROOT, 'catalog.js'), 'window.CATALOG = ' + JSON.stringify(catalog) + ';\n');
console.log(`catalog.js: ${SUITES.length} suites, ${breakouts.length} breakouts (${breakouts.filter(b => b.activity).length} practice activities)`);
