#!/usr/bin/env node
/* build-answer-key.js — regenerate the encrypted teacher answer key covering ALL
   breakouts in the suite (featured + generated), then embed the AES-256-GCM payload
   into answer-key.html. The password is NEVER stored here — pass it at run time:

     node breakouts/bible/build-answer-key.js 'THE-PASSWORD'

   Encryption matches the in-page decryptor: PBKDF2(SHA-256, 250k) -> AES-256-GCM,
   ciphertext with the 16-byte auth tag appended, salt/iv/ct base64-encoded. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const pw = process.argv[2] || process.env.AK_PW;
if (!pw) { console.error('Usage: node build-answer-key.js <password>'); process.exit(1); }

const ROOT = __dirname;
const GRADES = path.join(ROOT, 'grades');
const ITER = 250000;

function loadBreakout(file) {
  const w = {}; eval(fs.readFileSync(path.join(GRADES, file + '.js'), 'utf8').replace('window.BREAKOUT', 'w.BREAKOUT'));
  return w.BREAKOUT;
}
function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function answerText(l) {
  if (l.type === 'seq') return l.answer.map(k => (l.pads.find(p => p.k === k) || {}).e || k).join(' → ');
  if (l.type === 'mc') return l.options[l.answerIndex];
  if (l.type === 'multi') {
    const strong = l.items.filter(i => i.strong).map(i => '✓ ' + i.t).join('; ');
    const decoy = (l.items.find(i => !i.strong) || {}).t;
    return strong + (decoy ? ` &nbsp;—&nbsp; <em>leave out (decoy):</em> ${esc(decoy)}` : '');
  }
  if (l.type === 'word') return l.answer.join('  /  ');
  return '';
}

// order & grouping from the English library manifest
const w = {}; eval(fs.readFileSync(path.join(ROOT, 'breakouts.js'), 'utf8').replace('window.BIBLE_LIB', 'w.LIB'));
const LIB = w.LIB;

let body = `<style>
body{font-family:Nunito,system-ui,sans-serif;max-width:860px;margin:20px auto;padding:0 18px;color:#232526}
h1{color:#023266}
h2{color:#054c8c;border-bottom:2px solid #fbd239;padding-bottom:4px;margin-top:30px;font-size:1.15rem}
h3{color:#2f6cae;margin:20px 0 6px;font-size:1.02rem}
.ak{background:#f4f8fc;border-left:4px solid #054c8c;padding:10px 14px;margin:9px 0;border-radius:6px;font-size:.92rem;line-height:1.5}
em{color:#5A5F64}
</style>
<h1>Answer Key — Bible as Literature Breakouts</h1>
<p>Teacher use only. Every lock is answerable from the clue set; rationales model the CLEAR reasoning students should be able to articulate. Covers all ${LIB.length} breakouts.</p>`;

let curBand = null;
for (const entry of LIB) {
  const file = entry.href.replace('grades/', '').replace('-student.html', '');
  const b = loadBreakout(file);
  const en = b.CONTENT.en;
  if (entry.band !== curBand) { curBand = entry.band; body += `<h2>Grades ${esc(curBand)}</h2>`; }
  body += `<h3>${esc(b.UI.en['header.h1'])}</h3>`;
  en.locks.forEach(l => {
    body += `<div class="ak"><strong>${esc(l.id)} — ${esc(l.title)}</strong><br>` +
      `<em>Q:</em> ${esc(l.q)}<br>` +
      `<em>Answer:</em> ${answerText(l)}<br>` +
      `<em>Why (CLEAR rationale):</em> ${esc(l.reason)}</div>`;
  });
}

// encrypt
const salt = crypto.randomBytes(16), iv = crypto.randomBytes(12);
const key = crypto.pbkdf2Sync(pw, salt, ITER, 32, 'sha256');
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
const enc = Buffer.concat([cipher.update(body, 'utf8'), cipher.final()]);
const ct = Buffer.concat([enc, cipher.getAuthTag()]);
const PAYLOAD = { salt: salt.toString('base64'), iv: iv.toString('base64'), iter: ITER, ct: ct.toString('base64') };

// splice into answer-key.html
const akPath = path.join(ROOT, 'answer-key.html');
let html = fs.readFileSync(akPath, 'utf8');
html = html.replace(/const PAYLOAD = \{.*?\};/s, 'const PAYLOAD = ' + JSON.stringify(PAYLOAD) + ';');
fs.writeFileSync(akPath, html);

// self-check: decrypt round-trip
const dkey = crypto.pbkdf2Sync(pw, salt, ITER, 32, 'sha256');
const d = crypto.createDecipheriv('aes-256-gcm', dkey, iv);
d.setAuthTag(ct.slice(ct.length - 16));
const round = Buffer.concat([d.update(ct.slice(0, ct.length - 16)), d.final()]).toString('utf8');
console.log(`answer key: ${LIB.length} breakouts, ${body.length} chars, round-trip ${round === body ? 'OK' : 'FAIL'}; payload embedded.`);
