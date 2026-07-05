#!/usr/bin/env node
/* build-correlation.js — generate science/correlation.html: a standards-correlation
   guide covering every Science Critical Thinking Online Breakout (featured + concept
   sets), grouped by grade band, read live from the data files. Run:
     node breakouts/science/build-correlation.js
   Standards are ALIGNED TO (paraphrased), never reproduced. */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

// Featured breakouts carry their alignment in the hub's Skills&TEKS page, not the data,
// so name the anchor here (8 entries). Concept sets are read live from each more.js.
const FEATURED = {
  'K': { title: 'Light and Shadows', teks: 'K.8(A,B)', concept: 'We need light to see; blocking light makes shadows' },
  '1': { title: 'Push, Pull, and Play!', teks: '1.7(A)', concept: 'Pushes & pulls change motion' },
  '2': { title: 'Make Some Noise!', teks: '2.8(A)', concept: 'Sound is made by vibrating matter' },
  '3': { title: 'Blast Off! A Trip Through Space', teks: '3.9(A,B)', concept: 'The solar system: orbits & planet order' },
  '4': { title: 'Light It Up! The Secret of Circuits', teks: '4.8(C)', concept: 'Electricity in a closed circuit makes light & heat' },
  '5': { title: 'Round and Round: Day, Night, and Shadows', teks: '5.9', concept: "Earth's rotation causes day/night & shadows" },
  '6': { title: 'Cargo Ship Rescue', teks: '6.6(D), 6.7, 6.8', concept: 'Density, net force, Newton’s Third Law & energy conservation' },
  '7': { title: 'Rescue Run', teks: '7.7, 7.8', concept: 'Speed vs. velocity, distance–time graphs & heat transfer' },
  '8': { title: 'Launch Control', teks: '8.6(E), 8.7(A), 8.8', concept: 'Conservation of mass, Newton’s Second Law & waves' },
};
const SECTION = { 'K': '112.2', '1': '112.3', '2': '112.4', '3': '112.5', '4': '112.6', '5': '112.7', '6': '112.26', '7': '112.27', '8': '112.28' };
const bandName = g => (g === 'K' || +g <= 2 ? 'K–2' : +g <= 5 ? '3–5' : '6–8');

function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function readMore(g) {
  const fp = path.join(ROOT, 'grade' + g, 'more.js');
  if (!fs.existsSync(fp)) return {};
  const w = { window: {} };
  eval('(function(window){' + fs.readFileSync(fp, 'utf8') + '})(w.window)');
  return w.window.MORE || {};
}

const GRADES = ['K', '1', '2', '3', '4', '5', '6', '7', '8'].filter(g => fs.existsSync(path.join(ROOT, 'grade' + g)));
let total = 0;
function gradeBlock(g) {
  const f = FEATURED[g];
  const MORE = readMore(g);
  const slugs = Object.keys(MORE);
  total += 1 + slugs.length;
  const gLabel = g === 'K' ? 'Kindergarten' : 'Grade ' + g;
  let out = `<h3>${gLabel} <span class="sec">· §${SECTION[g]} · band ${bandName(g)}</span></h3>
  <table>
    <tr><th>Breakout</th><th>Type</th><th>Concept / skill</th><th>TEKS (aligned to)</th><th>Lock types</th></tr>
    <tr class="feat"><td><a href="grade${g}/student.html">${esc(f.title)}</a></td><td>Featured</td><td>${esc(f.concept)}</td><td><code>${esc(f.teks)}</code></td><td>seq · mc · multi · word</td></tr>`;
  for (const slug of slugs) {
    const e = MORE[slug];
    const types = e.locks.map(l => l.type).join(' · ');
    out += `<tr><td><a href="grade${g}/play.html?b=${slug}">${esc(e.ui.h1)}</a></td><td>Concept</td><td>${esc(e.concept || '')}</td><td><code>${esc(e.teks || '')}</code></td><td>${esc(types)}</td></tr>`;
  }
  return out + `</table>\n`;
}
const rowsElem = GRADES.filter(g => g === 'K' || +g <= 5).map(gradeBlock).join('');
const rowsMid = GRADES.filter(g => +g >= 6).map(gradeBlock).join('');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>Standards Correlation — Science Critical Thinking Online Breakouts (Grades K–8)</title>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{--navy:#0b3d5c;--sci:#0a6b52;--gold:#f0a316;--paper:#f2f8fb;--ink:#122430;--ink-soft:#4a5d6b;--card:#fff;--line:#d7e6ee}
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Nunito',sans-serif;color:var(--ink);background:var(--paper);line-height:1.55}
  .wrap{max-width:900px;margin:0 auto;padding:30px 20px 70px}
  .crumb{font-size:.82rem;font-weight:700;margin-bottom:14px}
  .crumb a{color:#2f6fe0;text-decoration:none}
  .eyebrow{display:inline-block;background:var(--sci);color:#fff;font-family:'Fredoka',sans-serif;font-weight:600;
    font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;padding:6px 16px;border-radius:100px;margin-bottom:12px}
  h1{font-family:'Fredoka',sans-serif;font-weight:700;font-size:clamp(1.8rem,5vw,2.6rem);color:var(--navy)}
  .lead{font-weight:600;color:var(--ink-soft);margin-top:8px;max-width:70ch}
  h2{font-family:'Fredoka',sans-serif;color:var(--navy);font-size:1.25rem;margin:30px 0 4px;border-bottom:2px solid var(--line);padding-bottom:5px}
  h3{font-family:'Fredoka',sans-serif;color:var(--sci);font-size:1.05rem;margin:22px 0 6px}
  h3 .sec{font-family:'Nunito',sans-serif;font-weight:700;font-size:.82rem;color:var(--ink-soft)}
  table{width:100%;border-collapse:collapse;margin-top:6px;font-size:.84rem}
  th,td{border:1px solid var(--line);padding:7px 9px;text-align:left;vertical-align:top}
  th{background:var(--sci);color:#fff;font-family:'Fredoka',sans-serif;font-weight:600}
  tr.feat td{background:#eef7f3}
  td a{color:#2f6fe0;text-decoration:none;font-weight:700}
  code{background:#e7f1f6;padding:1px 6px;border-radius:5px;color:var(--navy);font-weight:700;white-space:nowrap}
  .note{background:#f7fbfd;border:2px solid var(--line);border-radius:14px;padding:16px 20px;margin-top:16px;font-size:.9rem;color:var(--ink-soft);font-weight:600}
  .disc{font-size:.82rem;color:var(--ink-soft);margin-top:14px;font-style:italic}
  .tally{display:flex;gap:26px;flex-wrap:wrap;margin-top:16px}
  .tally .n{font-family:'Fredoka',sans-serif;font-weight:700;font-size:1.6rem;color:var(--navy);line-height:1}
  .tally .l{font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-soft);font-weight:700}
  footer{text-align:center;margin-top:30px;font-size:.8rem;color:var(--ink-soft);font-weight:600}
  footer a{color:#2f6fe0;text-decoration:none}
  @media print{.crumb{display:none}body{background:#fff}}
</style>
</head>
<body>
<div class="wrap">
  <div class="crumb"><a href="index.html">‹ Science Critical Thinking Online Breakouts</a></div>
  <div class="eyebrow">Standards Correlation · Grades K–8</div>
  <h1>Standards Correlation Guide</h1>
  <p class="lead">Every Science Critical Thinking Online Breakout, mapped to the 2021 Texas Essential Knowledge and Skills for Science (§112.2–112.28). Each grade lists its featured breakout and the concept set (one short breakout per key idea). Every breakout uses four locks — a <b>sequence</b>, a <b>multiple-choice</b>, an <b>evidence-sort</b> (3 strong + 1 decoy), and a <b>word</b> lock — so students practice ordering, reasoning, separating strong evidence from a true-but-off-topic fact, and naming the idea.</p>
  <div class="tally">
    <div><div class="n">${GRADES.length}</div><div class="l">Grades</div></div>
    <div><div class="n">${total}</div><div class="l">Breakouts</div></div>
    <div><div class="n">${total * 4}</div><div class="l">Locks</div></div>
    <div><div class="n">7</div><div class="l">Languages</div></div>
  </div>

  <div class="note">🧑‍🏫 <b>How to read this:</b> each row is one breakout. The <b>Concept / skill</b> and <b>TEKS</b> columns name what it targets; the <b>Lock types</b> show the four reasoning moves. Each grade page also has a lock-by-lock <b>Skills &amp; TEKS</b> table with the thinking move and, for the featured breakout, a high-effect-size strategy (Hattie).</div>

  <div class="crumb" style="margin:10px 0 0">🧑‍🏫 Teacher supports: <a href="udl.html">UDL supports</a> · <a href="elps.html">ELPS supports</a> · <a href="guide.html">Lesson-plan guide</a></div>

  ${rowsElem ? '<h2>🧒 Elementary · Grades K–5</h2>\n' + rowsElem : ''}
  ${rowsMid ? '<h2>🔬 Middle School · Grades 6–8</h2>\n' + rowsMid : ''}

  <p class="disc">Standards are <b>aligned to</b>, not reproduced from, the official TEKS. Featured-breakout TEKS name the anchor standard; see each grade's Skills &amp; TEKS page for the full lock-by-lock alignment.</p>

  <footer>Science Critical Thinking Online Breakouts · Self-contained, no logins, no data collected. · <a href="policy.html">Privacy &amp; compliance</a></footer>
</div>
</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, 'correlation.html'), html);
console.log(`correlation.html: ${GRADES.length} grades, ${total} breakouts (${total * 4} locks) correlated.`);
