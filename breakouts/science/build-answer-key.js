#!/usr/bin/env node
/* build-answer-key.js — generate an encrypted teacher answer key for one grade's
   Science Critical Thinking Breakout. The password is NEVER stored in the repo —
   pass it at run time:

     node breakouts/science/build-answer-key.js 6 'THE-PASSWORD'

   Encryption matches the in-page decryptor: PBKDF2(SHA-256, 250k) -> AES-256-GCM,
   ciphertext with the 16-byte auth tag appended, salt/iv/ct base64-encoded.
   Writes grade<N>/answer-key.html (ciphertext only — safe to commit). */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

let grade = String(process.argv[2] || '').trim();
const pw = process.argv[3] || process.env.AK_PW;
if (!/^([1-8]|[Kk])$/.test(grade) || !pw) {
  console.error("Usage: node build-answer-key.js <K|1-8> <password>");
  process.exit(1);
}
grade = grade.toUpperCase(); // K
const SECTION = { 'K': '112.2', '1': '112.3', '2': '112.4', '3': '112.5', '4': '112.6', '5': '112.7', '6': '112.26', '7': '112.27', '8': '112.28' }[grade];
const gradeLabel = grade === 'K' ? 'Kindergarten' : 'Grade ' + grade;

const ROOT = __dirname;
const ITER = 250000;
const dataFile = path.join(ROOT, `grade${grade}`, 'locales', `grade${grade}.js`);
const w = {}; eval(fs.readFileSync(dataFile, 'utf8').replace('window.BREAKOUT', 'w.BREAKOUT'));
const B = w.BREAKOUT, en = B.CONTENT.en;

function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function answerText(l) {
  if (l.type === 'seq') return l.answer.map(k => (l.pads.find(p => p.k === k) || {}).e || k).join(' → ');
  if (l.type === 'mc') return esc(l.options[l.answerIndex]);
  if (l.type === 'multi') {
    const strong = l.items.filter(i => i.strong).map(i => '✓ ' + esc(i.t)).join('; ');
    const decoy = (l.items.find(i => !i.strong) || {}).t;
    return strong + (decoy ? ` &nbsp;—&nbsp; <em>leave out (decoy):</em> ${esc(decoy)}` : '');
  }
  if (l.type === 'word') return l.answer.map(esc).join('  /  ');
  return '';
}

const title = B.UI.en['header.h1'];
let body = `<style>
body{font-family:Nunito,system-ui,sans-serif;max-width:860px;margin:20px auto;padding:0 18px;color:#122430}
h1{color:#0b3d5c}
h2{color:#0a6b52;border-bottom:2px solid #f0a316;padding-bottom:4px;margin-top:26px;font-size:1.12rem}
.ak{background:#f2f8fb;border-left:4px solid #0a6b52;padding:10px 14px;margin:9px 0;border-radius:6px;font-size:.92rem;line-height:1.5}
em{color:#4a5d6b}
.clue{font-size:.88rem;color:#4a5d6b;margin:5px 0}
</style>
<h1>Answer Key — ${esc(title)} (${gradeLabel})</h1>
<p>Teacher use only. Every lock is answerable from the evidence board alone; the rationale models the reasoning students should be able to state. Aligned to the 2021 Texas science TEKS (§${SECTION}).</p>
<h2>Evidence board (6 clues — 1 is a decoy)</h2>`;
const decoyId = en.clues[en.clues.length - 1].id; // c6 is the true-but-off-topic decoy in every science breakout
en.clues.forEach(c => {
  body += `<div class="clue"><strong>${c.ico} ${esc(c.nm)}</strong> — ${esc(c.title)}${c.id === decoyId ? ' &nbsp;<em>(decoy: true but off-topic)</em>' : ''}</div>`;
});
body += `<h2>Locks</h2>`;
en.locks.forEach(l => {
  body += `<div class="ak"><strong>${esc(l.id)} · ${esc(l.type.toUpperCase())} — ${esc(l.title)}</strong><br>` +
    `<em>Q:</em> ${esc(l.q)}<br>` +
    `<em>Answer:</em> ${answerText(l)}<br>` +
    `<em>Why (names the thinking move):</em> ${esc(l.reason)}</div>`;
});

// encrypt
const salt = crypto.randomBytes(16), iv = crypto.randomBytes(12);
const key = crypto.pbkdf2Sync(pw, salt, ITER, 32, 'sha256');
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
const enc = Buffer.concat([cipher.update(body, 'utf8'), cipher.final()]);
const ct = Buffer.concat([enc, cipher.getAuthTag()]);
const PAYLOAD = { salt: salt.toString('base64'), iv: iv.toString('base64'), iter: ITER, ct: ct.toString('base64') };

const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>Answer Key — ${esc(title)} (${gradeLabel})</title>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
<style>
:root{--navy:#0b3d5c;--sci:#0a6b52;--gold:#f0a316;--paper:#f2f8fb;--ink:#122430}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Nunito',sans-serif;background:radial-gradient(ellipse 60% 45% at 85% -5%,rgba(240,163,22,.16)0%,transparent 60%),radial-gradient(ellipse 55% 45% at 0% 100%,rgba(10,107,82,.12)0%,transparent 60%),var(--paper);color:var(--ink);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
.gate{background:#fff;border:1px solid rgba(11,61,92,.14);border-radius:16px;padding:32px 28px;max-width:420px;width:100%;text-align:center;box-shadow:0 12px 34px rgba(11,61,92,.12)}
h1{font-family:'Fredoka',sans-serif;color:var(--navy);font-size:1.4rem;margin-bottom:6px}
p.sub{color:#4a5d6b;font-size:.9rem;margin-bottom:20px}
input{width:100%;padding:12px 14px;border:2px solid rgba(11,61,92,.25);border-radius:10px;background:#f2f8fb;color:var(--ink);font-size:1rem;font-family:inherit;margin-bottom:12px}
input:focus{outline:none;border-color:var(--sci)}
button{width:100%;background:var(--sci);color:#fff;border:none;border-radius:10px;padding:12px;font-family:'Fredoka',sans-serif;font-weight:600;font-size:1rem;cursor:pointer}
button:hover{background:#0b3d5c}
.err{color:#c0392b;font-size:.85rem;min-height:18px;margin-top:8px}
.req{margin-top:18px;padding-top:16px;border-top:1px solid rgba(11,61,92,.12);font-size:.82rem;color:#4a5d6b;line-height:1.5}
#out{display:none;background:#fff;color:#122430;max-width:860px;width:100%;margin:0 auto;border-radius:12px;padding:8px 4px}
</style>
</head>
<body>
<div class="gate" id="gate">
  <h1>🔒 Teacher Answer Key</h1>
  <p class="sub">${esc(title)} · ${gradeLabel} · enter the password to unlock the answers and rationales.</p>
  <input type="password" id="pw" placeholder="Password" autocomplete="off">
  <button id="go">Unlock</button>
  <div class="err" id="err"></div>
  <p class="req">Don't have the passcode? Ask your suite administrator for the ${gradeLabel} answer-key password. Keys are kept out of the student pages.</p>
</div>
<div id="out"></div>
<script>
const PAYLOAD = ${JSON.stringify(PAYLOAD)};
const b64d = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
async function unlock(pw){
  const salt=b64d(PAYLOAD.salt), iv=b64d(PAYLOAD.iv), ct=b64d(PAYLOAD.ct);
  const baseKey=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveKey']);
  const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:PAYLOAD.iter,hash:'SHA-256'},baseKey,{name:'AES-GCM',length:256},false,['decrypt']);
  const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv},key,ct);
  return new TextDecoder().decode(plain);
}
document.getElementById('go').onclick=async()=>{
  const pw=document.getElementById('pw').value;
  try{
    const html=await unlock(pw);
    document.getElementById('gate').style.display='none';
    const out=document.getElementById('out');
    out.style.display='block'; out.innerHTML=html;
  }catch(e){ document.getElementById('err').textContent='Incorrect password. Try again.'; }
};
document.getElementById('pw').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('go').click();});
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, `grade${grade}`, 'answer-key.html'), page);

// self-check: decrypt round-trip
const dkey = crypto.pbkdf2Sync(pw, salt, ITER, 32, 'sha256');
const d = crypto.createDecipheriv('aes-256-gcm', dkey, iv);
d.setAuthTag(ct.slice(ct.length - 16));
const round = Buffer.concat([d.update(ct.slice(0, ct.length - 16)), d.final()]).toString('utf8');
console.log(`grade${grade}/answer-key.html: ${en.locks.length} locks, ${body.length} chars, round-trip ${round === body ? 'OK' : 'FAIL'}.`);
