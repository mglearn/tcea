#!/usr/bin/env node
/* build-catalog.js — scan all breakout suites and emit catalog.js (window.CATALOG),
   powering the top-level breakouts/index.html (search + randomizer).
   Run:  node breakouts/build-catalog.js */
const fs = require('fs'), path = require('path'), cp = require('child_process');
const ROOT = __dirname;
const BAND = { grade35: '3–5', grade68: '6–8', grade912: '9–12', k2: 'K–2', g35: '3–5', g68: '6–8', g912: '9–12' };

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
  const grab = (file, re) => { try { const m = fs.readFileSync(path.join(ROOT, file), 'utf8').match(re); return m ? m[1].replace(/\s*—.*$/, '').trim() : ''; } catch (e) { return ''; } };
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

function bibleMeta() {
  const out = [];
  const dir = path.join(ROOT, 'bible/grades');
  if (!fs.existsSync(dir)) return out;
  const bandOf = { k2: 'K–2', g35: '3–5', g68: '6–8', g912: '9–12' };
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort();
  for (const f of files) {
    const slug = f.replace('.js', '');
    const m = slug.match(/^(k2|g912|g68|g35)/);       // band prefix (existing k2.js … or new k2-<slug>.js)
    if (!m) continue;
    try {
      const w = {}; eval(fs.readFileSync(path.join(dir, f), 'utf8').replace('window.BREAKOUT', 'w.BREAKOUT'));
      const b = w.BREAKOUT, en = b.CONTENT.en;
      const kw = [
        ...en.clues.flatMap(c => [c.nm, c.title, c.body]),
        ...en.locks.flatMap(l => [l.q, l.reason, ...(l.options || []), ...((l.items || []).map(i => i.t))]),
      ].join(' ').replace(/\s+/g, ' ').toLowerCase().slice(0, 600);
      out.push({
        suite: 'bible', band: b.band || bandOf[m[1]], slug,
        title: b.UI.en['header.h1'],
        desc: b.UI.en['header.sub'],
        href: `bible/grades/${slug}-student.html`,
        kw,
      });
    } catch (e) { console.error('skip bible', f, e.message); }
  }
  return out;
}

function scienceMeta() {
  const out = [];
  const bandOf = g => (g === 'K' || +g <= 2 ? 'K–2' : +g <= 5 ? '3–5' : '6–8');
  for (const g of ['K', '1', '2', '3', '4', '5', '6', '7', '8']) {
    const band = bandOf(g);
    const fp = path.join(ROOT, 'science', 'grade' + g, 'locales', 'grade' + g + '.js');
    if (!fs.existsSync(fp)) continue;
    try {
      const w = {}; eval(fs.readFileSync(fp, 'utf8').replace('window.BREAKOUT', 'w.BREAKOUT'));
      const b = w.BREAKOUT, en = b.CONTENT.en;
      const kw = [
        ...en.clues.flatMap(c => [c.nm, c.title, c.body]),
        ...en.locks.flatMap(l => [l.q, l.reason, ...(l.options || []), ...((l.items || []).map(i => i.t))]),
      ].join(' ').replace(/\s+/g, ' ').toLowerCase().slice(0, 600);
      out.push({
        suite: 'science', band, slug: 'grade' + g,
        title: b.UI.en['header.h1'],
        desc: b.UI.en['header.sub'],
        href: `science/grade${g}/index.html`,
        kw: `grade ${g} ${kw}`,
      });
    } catch (e) { console.error('skip science', g, e.message); }
    // "More" single-concept breakouts for this grade (science/grade<g>/more.js -> window.MORE)
    const moreFp = path.join(ROOT, 'science', 'grade' + g, 'more.js');
    if (fs.existsSync(moreFp)) {
      try {
        const w2 = { window: {} };
        eval('(function(window){' + fs.readFileSync(moreFp, 'utf8') + '})(w2.window)');
        const MORE = w2.window.MORE || {};
        for (const slug of Object.keys(MORE)) {
          const e = MORE[slug];
          const kw = [...e.clues.flatMap(c => [c.nm, c.title, c.body]),
            ...e.locks.flatMap(l => [l.q, l.reason, ...(l.options || []), ...((l.items || []).map(i => i.t))])]
            .join(' ').replace(/\s+/g, ' ').toLowerCase().slice(0, 600);
          out.push({
            suite: 'science', band, slug: 'grade' + g + '-' + slug,
            title: e.ui.h1, desc: e.ui.sub,
            href: `science/grade${g}/play.html?b=${slug}`,
            kw: `grade ${g} ${e.concept || ''} ${e.teks || ''} ${kw}`, activity: true,
          });
        }
      } catch (e) { console.error('skip science more', g, e.message); }
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
  { id: 'bible', name: 'Bible as Literature', accent: '#2f6cae',
    desc: 'Four breakouts on Texas-adopted Bible stories, studied academically as literature and history — sequence, theme, genre, archetype, and allusion. Never devotional. Seven languages.',
    landing: 'bible/index.html', correlation: 'bible/correlation.html', answerKey: 'bible/answer-key.html' },
  { id: 'science', name: 'Science (Grades 1–8)', accent: '#0a6b52',
    desc: 'Critical Thinking Online Breakouts across the Texas science TEKS — from pushes and pulls to conservation of mass — each grade with a featured breakout, a concept set (one per key idea), a hands-on STEM engineering design challenge, and a student word bank. Seven languages.',
    landing: 'science/index.html', correlation: 'science/correlation.html' },
];

const breakouts = [...clearMeta(), ...localeMeta('july4'), ...localeMeta('july5th'), ...bibleMeta(), ...scienceMeta()];
const catalog = { generated: cp.execSync('git log -1 --format=%cI 2>/dev/null || true').toString().trim() || '', suites: SUITES, breakouts };
fs.writeFileSync(path.join(ROOT, 'catalog.js'), 'window.CATALOG = ' + JSON.stringify(catalog) + ';\n');
console.log(`catalog.js: ${SUITES.length} suites, ${breakouts.length} breakouts (${breakouts.filter(b => b.activity).length} practice activities)`);
