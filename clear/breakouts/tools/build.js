#!/usr/bin/env node
/* Critical Thinking Breakouts — site generator.
   Reads authored content (tools/content/*.json) and emits self-contained,
   offline-capable HTML: student activities (per language), per-grade catalogs,
   encrypted teacher answer keys, and a teacher hub.
   Run: node tools/build.js */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const CONTENT = path.join(__dirname, 'content');
const STYLE = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8');
const ENGINE = fs.readFileSync(path.join(__dirname, 'engine.js'), 'utf8');
const ANSWER_PASSWORD = 'ClearBreakouts2026';
const SITE_BASE = 'https://mglearn.github.io/tcea/clear/breakouts'; // GitHub Pages base (no trailing slash)

const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">';

/* ---- languages ---- */
const LANGS = [
  {code:'en', label:'English',     dir:'ltr'},
  {code:'es', label:'Español',     dir:'ltr'},
  {code:'vi', label:'Tiếng Việt',  dir:'ltr'},
  {code:'zh', label:'中文',         dir:'ltr'},
  {code:'hi', label:'हिन्दी',       dir:'ltr'},
  {code:'ar', label:'العربية',      dir:'rtl'},
  {code:'ur', label:'اردو',         dir:'rtl'},
];
const LANG_CODES = LANGS.map(l => l.code);
const LANG_DIR = Object.fromEntries(LANGS.map(l => [l.code, l.dir]));

const GRADES = [
  {key:'grade35',  file:'grade35.html',  band:'Grades 3–5'},
  {key:'grade68',  file:'grade68.html',  band:'Grades 6–8'},
  {key:'grade912', file:'grade912.html', band:'Grades 9–12'},
];
const SUBJECT_COLORS = {'Science':'var(--c3)','ELA':'var(--c2)','Social Studies':'var(--c1)'};
const PALETTE = ['var(--c5)','var(--c4)','var(--c3)','var(--c1)','var(--c2)'];
const PAD_COLORS = ['#e03131','#2f6fe0','#f08a16','#46a23c','#7c5cbf','#1aa3b8'];

/* ---- English chrome defaults (fallback for any missing translation) ---- */
const CHROME_EN = {
  locksOpen:'{n} of {t} locks open', reset:'↺ Reset', check:'Check', gotIt:'Got it',
  playAgain:'Play Again', typeAnswer:'Type your answer', clear:'clear', solved:'Solved!',
  cluesTitle:'🔍 The Clues', cluesHint:'Tap each item to investigate. (You can reopen them anytime.)',
  locksTitle:'🔒 The Locks', locksHint:'Solve each lock using the clues above.',
  missionTag:'Mission Brief', eyebrow:'Digital Breakout', backToActivities:'‹ Back to activities',
  backToHub:'Critical Thinking Breakouts',
  footer:'Runs entirely in your browser — no logins, no data collected.', privacy:'Privacy & compliance',
  fbDefault:'Not quite — re-check the clues.', fbDigit:"That number doesn't match the clues. Count again.",
  fbWord:'Check the clues for the answer that fits.', fbMc:"That one isn't supported by the evidence. Look again.",
  fbSeq:"That order doesn't match the clues. Try again.",
  fbMultiExtra:"One pick isn't strong evidence — strong means facts you can verify, not rumors or feelings.",
  fbMultiMissing:"You're missing a piece of strong evidence. Find them all.",
  catalogIntro:'Pick an activity, then choose your language. Every breakout runs in any browser — no logins, no prep.',
  chooseLanguage:'Language', openBtn:'Open activity',
  bands:{grade35:'Grades 3–5', grade68:'Grades 6–8', grade912:'Grades 9–12'},
  subjects:{'Science':'Science','ELA':'English / Language Arts','Social Studies':'Social Studies'},
};

/* ---- load authored content ---- */
function loadJSON(p, fallback){ try { return JSON.parse(fs.readFileSync(p,'utf8')); } catch(e){ return fallback; } }
const chromeRaw = loadJSON(path.join(CONTENT,'chrome.json'), {});
const CHROME = {};
for(const code of LANG_CODES){
  CHROME[code] = Object.assign({}, CHROME_EN, chromeRaw[code]||{});
  CHROME[code].bands = Object.assign({}, CHROME_EN.bands, (chromeRaw[code]||{}).bands||{});
  CHROME[code].subjects = Object.assign({}, CHROME_EN.subjects, (chromeRaw[code]||{}).subjects||{});
}

let ACTIVITIES = [];
for(const g of GRADES){
  const arr = loadJSON(path.join(CONTENT, g.key + '.json'), []);
  arr.forEach(a => { a.grade = a.grade || g.key; ACTIVITIES.push(a); });
}

/* ---- helpers ---- */
const esc = s => String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const j = obj => JSON.stringify(obj).replace(/</g, "\\u003c");
function ensureDir(p){ fs.mkdirSync(p, {recursive:true}); }
function write(rel, content){ const p = path.join(ROOT, rel); ensureDir(path.dirname(p)); fs.writeFileSync(p, content); }
function langsOf(a){ return LANG_CODES.filter(c => c === 'en' ? true : (a.langs && a.langs[c])); }
function block(a, lang){ return lang === 'en' ? a.master : (a.langs && a.langs[lang]) || a.master; }

/* merge master lock structure with a translated display block */
function mergeLock(m, lb, i){
  const o = {
    id:'L'+(i+1), color:PALETTE[i%PALETTE.length], type:m.type,
    title:(lb&&lb.title)||m.title, q:(lb&&lb.q)||m.q, reason:(lb&&lb.reason)||m.reason
  };
  if(m.type==='digit'){ o.len=String(m.digitAnswer).length; o.answer=[String(m.digitAnswer)]; }
  else if(m.type==='mc'){ o.options=(lb&&lb.options&&lb.options.length===m.options.length)?lb.options:m.options; o.answerIndex=m.answerIndex; }
  else if(m.type==='word'){
    const all=[...(m.accepted||[]), ...((lb&&lb.accepted)||[])].map(s=>String(s).trim().toLowerCase()).filter(Boolean);
    o.answer=[...new Set(all)];
  }
  else if(m.type==='seq'){ o.pads=m.pads.map((p,k)=>({k:p.key,e:p.emoji,c:PAD_COLORS[k%PAD_COLORS.length]})); o.answer=m.order; }
  else if(m.type==='multi'){ o.items=m.items.map((it,k)=>{
    const tr=lb&&lb.items&&lb.items[k];
    const text=(tr&&typeof tr==='object')?tr.text:(tr||it.text); // master items are {text,strong}; translations are strings
    return {t:text, strong:!!it.strong};
  }); }
  return o;
}

/* ---- student activity page ---- */
function buildStudent(a, lang){
  const T = CHROME[lang], dir = LANG_DIR[lang], b = block(a, lang), m = a.master;
  const clues = m.clues.map((c,i)=>({ id:'c'+i, ico:c.ico,
    nm:((b.clues&&b.clues[i]&&b.clues[i].nm))||c.nm,
    title:((b.clues&&b.clues[i]&&b.clues[i].title))||c.title,
    body:((b.clues&&b.clues[i]&&b.clues[i].body))||c.body }));
  const locks = m.locks.map((lk,i)=>mergeLock(lk, b.locks&&b.locks[i], i));
  const data = { T:{ locksOpen:T.locksOpen, check:T.check, gotIt:T.gotIt, typeAnswer:T.typeAnswer, clear:T.clear,
    solved:T.solved, fbDefault:T.fbDefault, fbDigit:T.fbDigit, fbWord:T.fbWord, fbMc:T.fbMc, fbSeq:T.fbSeq,
    fbMultiExtra:T.fbMultiExtra, fbMultiMissing:T.fbMultiMissing }, clues, locks };

  const win = b.win || m.win;
  const others = langsOf(a);
  const langbar = others.map(c => {
    const L = LANGS.find(x=>x.code===c);
    return '<a class="'+(c===lang?'active':'')+'" href="'+c+'.html" lang="'+c+'">'+esc(L.label)+'</a>';
  }).join('');

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>${esc(b.title)} — Critical Thinking Breakouts</title>
${FONTS}
<style>${STYLE}</style>
</head>
<body>
<canvas id="confetti"></canvas>
<div class="wrap">
  <div class="crumb"><a href="../../${gradeFileOf(a.grade)}">${esc(T.backToActivities)}</a></div>
  <header class="top">
    <div class="eyebrow">${esc(T.eyebrow)} · ${esc(T.bands[a.grade])}</div>
    <h1>${esc(b.title)}</h1>
    <p class="sub">${esc(b.sub)}</p>
    <div class="langbar">${langbar}</div>
  </header>

  <div class="progress-wrap">
    <span class="pcount" id="pcount">0</span>
    <div class="lockdots" id="lockdots"></div>
    <button class="resetbtn" id="resetBtn">${esc(T.reset)}</button>
  </div>

  <div class="brief">
    <span class="tag">${a.icon||'🧠'} ${esc(T.missionTag)}</span>
    <h2>${esc(b.missionTitle)}</h2>
    <p>${esc(b.missionBody)}</p>
  </div>

  <div class="section-title">${esc(T.cluesTitle)}</div>
  <p class="hint">${esc(T.cluesHint)}</p>
  <div class="clue-grid" id="clueGrid"></div>

  <div class="section-title">${esc(T.locksTitle)}</div>
  <p class="hint">${esc(T.locksHint)}</p>
  <div class="locks" id="locks"></div>

  <footer>Critical Thinking Breakouts · ${esc(T.bands[a.grade])} · ${esc(T.footer)} · <a href="../../../policy.html">${esc(T.privacy)}</a></footer>
</div>

<div class="modal-bg" id="modalBg"><div class="modal" id="modal"></div></div>
<div class="win" id="win"><div class="win-card">
  <div class="stamp">${esc(win.stamp)}</div>
  <h2>${esc(win.h2)}</h2>
  <p>${esc(win.p)}</p>
  <button id="winBtn">${esc(T.playAgain)}</button>
</div></div>

<script>const DATA=${j(data)};</script>
<script>${ENGINE}</script>
</body>
</html>`;
}

function gradeFileOf(gradeKey){ return (GRADES.find(g=>g.key===gradeKey)||GRADES[0]).file; }

/* ---- per-grade catalog (student-facing, language switcher, zero teacher links) ---- */
function buildCatalog(grade){
  const acts = ACTIVITIES.filter(a => a.grade === grade.key);
  const cards = acts.map(a => {
    const t = {};
    for(const c of langsOf(a)){ const bb = block(a,c); t[c] = {title:bb.title, sub:bb.sub}; }
    return { slug:a.slug, icon:a.icon||'🧠', subject:a.subject, color:SUBJECT_COLORS[a.subject]||'var(--navy)',
      langs:langsOf(a), t };
  });
  const chromeForJs = {}; for(const c of LANG_CODES) chromeForJs[c] = {
    subjects:CHROME[c].subjects, openBtn:CHROME[c].openBtn, chooseLanguage:CHROME[c].chooseLanguage,
    catalogIntro:CHROME[c].catalogIntro, band:CHROME[c].bands[grade.key], backToHub:CHROME[c].backToHub };
  const langButtons = LANGS.map(l => '<button data-lang="'+l.code+'" lang="'+l.code+'">'+esc(l.label)+'</button>').join('');

  return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>${esc(grade.band)} · More Critical Thinking Breakouts</title>
${FONTS}
<style>${STYLE}
  .cat-head{text-align:center;padding:10px 0}
  .cat-head h1{font-size:clamp(1.8rem,5vw,2.7rem)}
  .cat-intro{color:var(--ink-soft);font-weight:600;max-width:620px;margin:8px auto 0}
  .langlabel{font-family:'Fredoka',sans-serif;font-weight:600;color:var(--navy);font-size:.8rem;margin-top:18px}
</style>
</head>
<body>
<div class="wrap">
  <div class="crumb"><a href="../index.html" id="hubLink">‹ ${esc(grade.band)}</a></div>
  <header class="cat-head">
    <div class="eyebrow" id="bandEy">${esc(grade.band)}</div>
    <h1 id="catTitle">${esc(grade.band)} Breakouts</h1>
    <p class="cat-intro" id="catIntro">${esc(CHROME_EN.catalogIntro)}</p>
    <div class="langlabel" id="langLabel">${esc(CHROME_EN.chooseLanguage)}</div>
    <div class="langbar" id="langbar">${langButtons}</div>
  </header>
  <div class="cat-grid" id="grid"></div>
  <footer>Critical Thinking Breakouts · ${esc(grade.band)}</footer>
</div>
<script>
const ACTS=${j(cards)};
const CH=${j(chromeForJs)};
let lang='en';
function render(){
  const c=CH[lang]; document.documentElement.lang=lang;
  document.documentElement.dir=(lang==='ar'||lang==='ur')?'rtl':'ltr';
  document.getElementById('catIntro').textContent=c.catalogIntro;
  document.getElementById('langLabel').textContent=c.chooseLanguage;
  document.getElementById('catTitle').textContent=c.band;
  document.getElementById('bandEy').textContent=c.band;
  document.getElementById('hubLink').textContent='‹ '+c.backToHub;
  document.querySelectorAll('#langbar button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  const grid=document.getElementById('grid'); grid.innerHTML='';
  ACTS.forEach(a=>{
    const use=a.langs.indexOf(lang)>=0?lang:'en';
    const tt=a.t[use]||a.t.en||{title:a.slug,sub:''};
    const card=document.createElement('a'); card.className='cat-card';
    card.href='activities/'+a.slug+'/'+use+'.html';
    card.innerHTML='<div class="ico">'+a.icon+'</div>'+
      '<span class="subj" style="background:'+a.color+'">'+(c.subjects[a.subject]||a.subject)+'</span>'+
      '<h2>'+tt.title+'</h2><p>'+tt.sub+'</p><span class="go">'+c.openBtn+'</span>';
    grid.appendChild(card);
  });
}
document.querySelectorAll('#langbar button').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;render();});
render();
</script>
</body>
</html>`;
}

/* ---- encryption (matches Web Crypto: PBKDF2-SHA256 + AES-256-GCM, tag appended) ---- */
function encryptHTML(plaintext){
  const iters=250000, salt=crypto.randomBytes(16), iv=crypto.randomBytes(12);
  const key=crypto.pbkdf2Sync(ANSWER_PASSWORD, salt, iters, 32, 'sha256');
  const c=crypto.createCipheriv('aes-256-gcm', key, iv);
  const enc=Buffer.concat([c.update(Buffer.from(plaintext,'utf8')), c.final()]);
  const blob=Buffer.concat([enc, c.getAuthTag()]);
  return { salt:salt.toString('base64'), iv:iv.toString('base64'), iters, data:blob.toString('base64') };
}

/* ---- teacher answer key (encrypted) ---- */
function answerPlain(a){
  const m=a.master;
  let rows='';
  m.locks.forEach((lk,i)=>{
    let ans='', extra='';
    if(lk.type==='digit') ans=esc(lk.digitAnswer);
    else if(lk.type==='mc') ans=esc(lk.options[lk.answerIndex]);
    else if(lk.type==='word'){
      ans=esc((lk.accepted||[])[0]||'');
      const per=LANG_CODES.filter(c=>c!=='en').map(c=>{
        const lb=a.langs&&a.langs[c]; const acc=lb&&lb.locks&&lb.locks[i]&&lb.locks[i].accepted;
        return acc&&acc.length?('<b>'+c+':</b> '+esc(acc.join(', '))):null; }).filter(Boolean);
      if(per.length) extra='<div class="acc">Accepted by language — '+per.join(' · ')+'</div>';
    }
    else if(lk.type==='seq') ans=esc(lk.order.map(k=>{const p=lk.pads.find(x=>x.key===k);return p?p.emoji+' '+(p.label||p.key):k;}).join(' → '));
    else if(lk.type==='multi') ans=esc(m.locks[i].items.filter(it=>it.strong).map(it=>it.text).join(' • '));
    rows+='<tr><td>'+(i+1)+' — '+esc(lk.type.toUpperCase())+'</td><td class="ans">'+ans+'</td><td>'+esc(lk.reason)+extra+'</td></tr>';
  });
  return '<button class="printbtn" onclick="window.print()">🖨 Print answer key</button>'+
    '<h2>'+(a.icon||'🧠')+' '+esc(m.title)+'</h2>'+
    '<div class="band">'+esc(CHROME_EN.bands[a.grade])+' · '+esc(a.subject)+' · TEKS: '+esc(a.teks||'')+'</div>'+
    '<table><tr><th>Lock</th><th>Answer</th><th>Reasoning</th></tr>'+rows+'</table>';
}

const GATE_CSS = `
  :root{--navy:#102a54;--gold-d:#c97f12;--paper:#fbf8f1;--ink:#1c2436;--ink-soft:#54607a;--card:#fff;--line:#e3e8f2;--good:#2f7a28}
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:var(--ink);background:var(--paper);line-height:1.55}
  .wrap{max-width:760px;margin:0 auto;padding:28px 20px 80px}
  .crumb{font-size:.82rem;font-weight:700;margin-bottom:14px}.crumb a{color:#2f6fe0;text-decoration:none}
  .warn{background:#fde8e8;border:2px solid #f3b6b6;color:#9a2b2b;border-radius:12px;padding:14px 18px;font-weight:700;margin-bottom:20px}
  h1{font-size:1.7rem;color:var(--navy);font-weight:800}
  h2{font-size:1.2rem;color:var(--navy);margin:26px 0 4px;border-left:5px solid var(--gold-d);padding-left:12px}
  .band{font-weight:700;color:var(--ink-soft);font-size:.86rem;margin-bottom:10px}
  table{width:100%;border-collapse:collapse;margin:10px 0;font-size:.9rem}
  th,td{border:1px solid var(--line);padding:9px 11px;text-align:left;vertical-align:top}
  th{background:#f0f3fa;color:var(--navy)}.ans{font-weight:800;color:var(--good)}
  .acc{margin-top:6px;font-size:.82rem;color:var(--ink-soft)}
  .printbtn{background:var(--gold-d);color:#fff;border:none;border-radius:9px;padding:9px 18px;font-weight:700;cursor:pointer;margin-top:8px}
  @media print{.printbtn,.crumb,#gate{display:none}}
  #gate{max-width:420px;background:var(--card);border:2px solid var(--line);border-radius:14px;padding:24px;margin-top:6px}
  #gate label{display:block;font-weight:700;color:var(--navy);margin-bottom:8px}
  #gate input{width:100%;padding:11px 13px;font-size:1rem;border:2px solid var(--line);border-radius:9px}
  #gate input:focus{outline:none;border-color:var(--gold-d)}
  #gate button{margin-top:12px;background:var(--navy);color:#fff;border:none;border-radius:9px;padding:11px 22px;font-weight:700;cursor:pointer;font-size:1rem}
  #gateMsg{color:#9a2b2b;font-weight:700;font-size:.9rem;margin-top:10px;min-height:1.2em}
  .lock-note{color:var(--ink-soft);font-size:.84rem;font-weight:600;margin:10px 0 0}
  footer{margin-top:30px;font-size:.8rem;color:var(--ink-soft);font-weight:600}`;

const GATE_JS = `
  const b64ToBytes=b=>Uint8Array.from(atob(b),ch=>ch.charCodeAt(0));
  async function decrypt(pw){
    const enc=new TextEncoder();
    const bk=await crypto.subtle.importKey("raw",enc.encode(pw),"PBKDF2",false,["deriveKey"]);
    const key=await crypto.subtle.deriveKey({name:"PBKDF2",salt:b64ToBytes(CIPHER.salt),iterations:CIPHER.iters,hash:"SHA-256"},bk,{name:"AES-GCM",length:256},false,["decrypt"]);
    const plain=await crypto.subtle.decrypt({name:"AES-GCM",iv:b64ToBytes(CIPHER.iv)},key,b64ToBytes(CIPHER.data));
    return new TextDecoder().decode(plain);
  }
  async function tryUnlock(){
    const pw=document.getElementById("pw").value,msg=document.getElementById("gateMsg");msg.textContent="";
    if(!pw){msg.textContent="Please enter the password.";return;}
    try{document.getElementById("content").innerHTML=await decrypt(pw);document.getElementById("gate").style.display="none";}
    catch(e){msg.textContent="Incorrect password. Try again.";document.getElementById("pw").value="";document.getElementById("pw").focus();}
  }
  document.getElementById("unlock").addEventListener("click",tryUnlock);
  document.getElementById("pw").addEventListener("keydown",e=>{if(e.key==="Enter")tryUnlock();});`;

function buildAnswerKey(a){
  const cipher=encryptHTML(answerPlain(a));
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>Answer Key — ${esc(a.master.title)}</title>
<style>${GATE_CSS}</style>
</head>
<body>
<div class="wrap">
  <div class="crumb"><a href="../index.html">‹ Teacher hub</a></div>
  <h1>Teacher Answer Key</h1>
  <div class="warn">⚠️ For teachers only. Do not share this page, its URL, or the password with students.</div>
  <div id="gate">
    <label for="pw">🔒 Enter the teacher password to view the answer key</label>
    <input type="password" id="pw" autocomplete="off" autofocus placeholder="Password">
    <button id="unlock">Unlock answer key</button>
    <div id="gateMsg"></div>
    <p class="lock-note">The answers are encrypted in this file — unreadable without the password, even in the page source.</p>
  </div>
  <div id="content"></div>
  <footer>Critical Thinking Breakouts · Teacher answer key · Keep private.</footer>
</div>
<script>const CIPHER=${j(cipher)};${GATE_JS}</script>
</body>
</html>`;
}

/* ---- teacher hub (NOT linked from any student page) ---- */
function buildTeacherHub(){
  let sections='';
  for(const g of GRADES){
    const acts=ACTIVITIES.filter(a=>a.grade===g.key);
    if(!acts.length) continue;
    let rows='';
    for(const a of acts){
      const studentLinks=langsOf(a).map(c=>{
        const L=LANGS.find(x=>x.code===c);
        return '<a href="../more/activities/'+a.slug+'/'+c+'.html">'+esc(L.label)+'</a>';
      }).join(' · ');
      rows+='<tr><td><b>'+(a.icon||'')+' '+esc(a.master.title)+'</b><div class="teks">'+esc(a.subject)+' · TEKS '+esc(a.teks||'')+'</div></td>'+
        '<td class="langs">'+studentLinks+'</td>'+
        '<td><a class="keylink" href="answers/'+a.slug+'.html">🔑 Answer key</a></td></tr>';
    }
    sections+='<h2>'+esc(g.band)+'</h2><table><tr><th>Activity</th><th>Student versions</th><th>Teacher</th></tr>'+rows+'</table>';
  }
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>Teacher Hub — Critical Thinking Breakouts</title>
${FONTS}
<style>
  :root{--navy:#102a54;--gold-d:#c97f12;--paper:#fbf8f1;--ink:#1c2436;--ink-soft:#54607a;--line:#e3e8f2}
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Nunito',sans-serif;color:var(--ink);background:var(--paper);line-height:1.55}
  .wrap{max-width:920px;margin:0 auto;padding:28px 20px 80px}
  .eyebrow{display:inline-block;background:var(--navy);color:#fff;font-family:'Fredoka',sans-serif;font-weight:600;font-size:.72rem;letter-spacing:.13em;text-transform:uppercase;padding:6px 16px;border-radius:100px}
  h1{font-family:'Fredoka',sans-serif;color:var(--navy);font-size:2rem;margin:12px 0 4px}
  .lead{color:var(--ink-soft);font-weight:600;margin-bottom:8px}
  .warn{background:#fff7e6;border:2px solid var(--gold-d);color:#7a4f00;border-radius:12px;padding:12px 16px;font-weight:700;margin:14px 0 24px}
  h2{font-family:'Fredoka',sans-serif;color:var(--navy);font-size:1.25rem;margin:26px 0 8px;border-left:5px solid var(--gold-d);padding-left:12px}
  table{width:100%;border-collapse:collapse;margin-bottom:14px;font-size:.9rem}
  th,td{border:1px solid var(--line);padding:9px 11px;text-align:left;vertical-align:top}
  th{background:#f0f3fa;color:var(--navy)}
  .teks{color:var(--ink-soft);font-size:.8rem;font-weight:600;margin-top:3px}
  .langs a{color:#2f6fe0;text-decoration:none;font-weight:700;white-space:nowrap}
  .keylink{color:var(--gold-d);font-weight:800;text-decoration:none;white-space:nowrap}
  .links{margin:18px 0;font-weight:700}.links a{color:#2f6fe0;text-decoration:none;margin-right:16px}
  footer{margin-top:30px;font-size:.8rem;color:var(--ink-soft);font-weight:600}
</style>
</head>
<body>
<div class="wrap">
  <div class="eyebrow">Teacher Hub · Private</div>
  <h1>Critical Thinking Breakouts — Teacher Hub</h1>
  <p class="lead">Every activity, in all languages, plus its password-protected answer key. Students never see this page — keep the URL out of student-facing links.</p>
  <div class="warn">🔑 Answer keys are encrypted. Password: kept with your records (same one for every key).</div>
  <div class="links">
    <a href="answer-key-links.html">📋 Shareable answer-key links</a>
    <a href="../index.html">Student hub</a>
    <a href="../answer-key.html">Original 3 answer keys</a>
    <a href="../policy.html">Privacy &amp; compliance</a>
  </div>
  ${sections}
  <footer>Critical Thinking Breakouts · Teacher Hub · Keep private.</footer>
</div>
</body>
</html>`;
}

/* ---- teacher answer-key link sheet (copy-paste URLs to share) ---- */
function buildLinksPage(){
  let sections='';
  for(const g of GRADES){
    const acts=ACTIVITIES.filter(a=>a.grade===g.key);
    if(!acts.length) continue;
    let rows='';
    for(const a of acts){
      const url=SITE_BASE+'/teacher/answers/'+a.slug+'.html';
      rows+='<tr><td class="nm">'+(a.icon||'')+' '+esc(a.master.title)+'<div class="sub">'+esc(a.subject)+'</div></td>'+
        '<td><code class="url" id="u-'+a.slug+'">'+esc(url)+'</code></td>'+
        '<td><button class="copy" data-url="'+esc(url)+'">Copy</button></td></tr>';
    }
    sections+='<h2>'+esc(g.band)+'</h2><table><tr><th>Activity</th><th>Shareable link (answer key — password-protected)</th><th></th></tr>'+rows+'</table>';
  }
  const origUrl=SITE_BASE+'/answer-key.html';
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>Answer Key Links — Teacher Reference</title>
${FONTS}
<style>
  :root{--navy:#102a54;--gold-d:#c97f12;--paper:#fbf8f1;--ink:#1c2436;--ink-soft:#54607a;--line:#e3e8f2;--good:#2f7a28}
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Nunito',sans-serif;color:var(--ink);background:var(--paper);line-height:1.5}
  .wrap{max-width:960px;margin:0 auto;padding:28px 20px 80px}
  .eyebrow{display:inline-block;background:var(--navy);color:#fff;font-family:'Fredoka',sans-serif;font-weight:600;font-size:.72rem;letter-spacing:.13em;text-transform:uppercase;padding:6px 16px;border-radius:100px}
  h1{font-family:'Fredoka',sans-serif;color:var(--navy);font-size:1.9rem;margin:12px 0 4px}
  .lead{color:var(--ink-soft);font-weight:600;margin-bottom:14px}
  .pwbox{background:#fff7e6;border:2px solid var(--gold-d);color:#7a4f00;border-radius:12px;padding:12px 16px;font-weight:700;margin:14px 0 8px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
  .pwbox code{background:#fff;border:1px solid var(--gold-d);border-radius:6px;padding:3px 10px;font-size:1rem;color:var(--navy)}
  .pwbox button{margin-left:auto}
  .links{margin:8px 0 18px;font-weight:700}.links a{color:#2f6fe0;text-decoration:none;margin-right:16px}
  h2{font-family:'Fredoka',sans-serif;color:var(--navy);font-size:1.2rem;margin:24px 0 8px;border-left:5px solid var(--gold-d);padding-left:12px}
  table{width:100%;border-collapse:collapse;margin-bottom:8px;font-size:.9rem}
  th,td{border:1px solid var(--line);padding:8px 10px;text-align:left;vertical-align:middle}
  th{background:#f0f3fa;color:var(--navy)}
  .nm{font-weight:700;white-space:nowrap}.nm .sub{color:var(--ink-soft);font-size:.78rem;font-weight:600}
  code.url{font-size:.8rem;color:var(--navy);word-break:break-all}
  button.copy,button.copyall{background:var(--navy);color:#fff;border:none;border-radius:8px;padding:7px 14px;font-family:'Fredoka',sans-serif;font-weight:600;cursor:pointer;font-size:.85rem;white-space:nowrap}
  button.copy:hover,button.copyall:hover{background:#0b1d3d}
  button.copied{background:var(--good)!important}
  .toolbar{margin:6px 0 18px}
  footer{margin-top:30px;font-size:.8rem;color:var(--ink-soft);font-weight:600}
</style>
</head>
<body>
<div class="wrap">
  <div class="eyebrow">Teacher Reference · Private</div>
  <h1>Answer Key Links</h1>
  <p class="lead">Copy any link below to share an activity's answer key with a teacher. Every key is password-protected — students who open a link without the password see nothing.</p>
  <div class="pwbox">🔑 Password for every answer key: <code id="pw">${esc(ANSWER_PASSWORD)}</code>
    <button class="copy" data-url="${esc(ANSWER_PASSWORD)}">Copy password</button></div>
  <div class="links">
    <a href="index.html">‹ Teacher hub</a>
    <a href="../answer-key.html">Original 3 answer keys (one page)</a>
  </div>
  <div class="toolbar"><button class="copyall">Copy ALL links</button></div>
  ${sections}
  <p style="font-size:.85rem;color:var(--ink-soft);font-weight:600;margin-top:14px">Original three breakouts (single combined key): <code class="url">${esc(origUrl)}</code></p>
  <footer>Critical Thinking Breakouts · Teacher reference · Keep private. Do not share the password with students.</footer>
</div>
<script>
  function flash(btn,txt){const o=btn.textContent;btn.textContent=txt||'Copied ✓';btn.classList.add('copied');setTimeout(()=>{btn.textContent=o;btn.classList.remove('copied');},1300);}
  function copyText(t){ if(navigator.clipboard&&navigator.clipboard.writeText){return navigator.clipboard.writeText(t);}
    const ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();return Promise.resolve();}
  document.querySelectorAll('button.copy').forEach(b=>b.onclick=()=>copyText(b.dataset.url).then(()=>flash(b)));
  document.querySelector('button.copyall').onclick=function(){
    const urls=[...document.querySelectorAll('code.url')].map(c=>c.textContent).join('\\n');
    copyText(urls).then(()=>flash(this,'All links copied ✓'));
  };
</script>
</body>
</html>`;
}

/* ---- run ---- */
let counts={student:0, keys:0, catalogs:0};
for(const a of ACTIVITIES){
  for(const lang of langsOf(a)){ write('more/activities/'+a.slug+'/'+lang+'.html', buildStudent(a, lang)); counts.student++; }
  write('teacher/answers/'+a.slug+'.html', buildAnswerKey(a)); counts.keys++;
}
for(const g of GRADES){ if(ACTIVITIES.some(a=>a.grade===g.key)){ write('more/'+g.file, buildCatalog(g)); counts.catalogs++; } }
write('teacher/index.html', buildTeacherHub());
write('teacher/answer-key-links.html', buildLinksPage());

console.log('Activities:', ACTIVITIES.length);
console.log('Student files:', counts.student);
console.log('Answer keys:', counts.keys);
console.log('Catalogs:', counts.catalogs, '+ teacher hub');
