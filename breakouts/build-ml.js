#!/usr/bin/env node
/* build-ml.js — convert English student breakouts into the shared-engine,
   multilingual format. For each <slug>-student.html it:
     1) extracts the English chrome + CLUES/LOCKS,
     2) writes <band>/locales/<slug>.js  (window.BREAKOUT with UI + CONTENT;
        English + shared UI filled, breakout-specific translations left for
        the translation pass),
     3) rewrites <slug>-student.html as a tiny skeleton that loads
        assets/i18n.js + assets/breakout.js + locales/<slug>.js.
   July 5 ("july5") is seeded fully from the already-translated pilot.

   Run:  node breakouts/build-ml.js
*/
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname);           // breakouts/
const FONTS = `<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">`;

const PALETTE = {
  july5th: '--navy:#0b6b3a;--navy-d:#075229;--red:#b21e28;--red-d:#7d141b;--gold:#e0a409;--gold-d:#b07d06;--paper:#fbf7ef;--ink:#211f1a;--ink-soft:#5c574c;--card:#fff;--line:#e8e2d5;--good:#2f9e44;--bad:#e03131;--c1:#0b6b3a;--c2:#b21e28;--c3:#0f7a5a;--c4:#e0a409;--c5:#5a3fb0;--bg-a:rgba(178,30,40,.10);--bg-b:rgba(11,107,58,.10)',
  july4:   '--navy:#0a2463;--navy-d:#061a4a;--red:#c1121f;--red-d:#8b0d16;--gold:#e6b400;--gold-d:#b8901a;--paper:#fbf9f3;--ink:#1c2436;--ink-soft:#54607a;--card:#fff;--line:#e3e8f2;--good:#2f9e44;--bad:#e03131;--c1:#0a2463;--c2:#c1121f;--c3:#2f6fe0;--c4:#e6b400;--c5:#1a7a8c;--bg-a:rgba(193,18,31,.10);--bg-b:rgba(10,36,99,.10)',
};
const CONFETTI = {
  july5th: ['#0b6b3a','#b21e28','#e0a409','#111111','#ffffff','#0f7a5a'],
  july4:   ['#0a2463','#c1121f','#e6b400','#2f6fe0','#ffffff','#1a7a8c'],
};

/* Shared UI strings identical across every breakout, in all 7 languages. */
const COMMON = {
  'sect.clues':      {en:'🔍 The Clues',es:'🔍 Las pistas',vi:'🔍 Các manh mối',ar:'🔍 الأدلّة',hi:'🔍 सुराग',ur:'🔍 سراغ',zh:'🔍 线索'},
  'sect.cluesHint':  {en:'Tap each clue to read it. (You can reopen them anytime.)',es:'Toca cada pista para leerla. (Puedes volver a abrirlas cuando quieras.)',vi:'Chạm vào mỗi manh mối để đọc. (Bạn có thể mở lại bất cứ lúc nào.)',ar:'انقر كل دليل لقراءته. (يمكنك فتحه مجددًا في أي وقت.)',hi:'हर सुराग पढ़ने के लिए उस पर टैप करो। (इन्हें कभी भी दोबारा खोल सकते हो।)',ur:'ہر سراغ پڑھنے کے لیے اس پر ٹیپ کریں۔ (انہیں کبھی بھی دوبارہ کھول سکتے ہیں۔)',zh:'点按每条线索来阅读。（你可以随时重新打开。）'},
  'sect.locks':      {en:'🔒 The Locks',es:'🔒 Los candados',vi:'🔒 Các ổ khóa',ar:'🔒 الأقفال',hi:'🔒 ताले',ur:'🔒 تالے',zh:'🔒 锁'},
  'sect.locksHint':  {en:'Solve each lock using the clues above.',es:'Resuelve cada candado usando las pistas de arriba.',vi:'Giải mỗi ổ khóa bằng các manh mối ở trên.',ar:'حلّ كل قفل مستعينًا بالأدلّة أعلاه.',hi:'ऊपर के सुरागों की मदद से हर ताला हल करो।',ur:'اوپر دیے گئے سراغوں کی مدد سے ہر تالا حل کریں۔',zh:'用上面的线索解开每一把锁。'},
  'crumb.teacher':   {en:'‹ Teacher launch',es:'‹ Guía del docente',vi:'‹ Trang giáo viên',ar:'‹ صفحة المعلّم',hi:'‹ शिक्षक पृष्ठ',ur:'‹ استاد کا صفحہ',zh:'‹ 教师页面'},
  'ui.reset':        {en:'↺ Reset',es:'↺ Reiniciar',vi:'↺ Đặt lại',ar:'↺ إعادة',hi:'↺ रीसेट',ur:'↺ دوبارہ',zh:'↺ 重置'},
  'ui.check':        {en:'Check',es:'Comprobar',vi:'Kiểm tra',ar:'تحقّق',hi:'जाँचें',ur:'جانچیں',zh:'检查'},
  'ui.gotit':        {en:'Got it',es:'Entendido',vi:'Đã hiểu',ar:'حسنًا',hi:'समझ गया',ur:'ٹھیک ہے',zh:'知道了'},
  'ui.playagain':    {en:'Play Again',es:'Jugar de nuevo',vi:'Chơi lại',ar:'العب مجددًا',hi:'फिर से खेलें',ur:'دوبارہ کھیلیں',zh:'再玩一次'},
  'ui.solved':       {en:'🔓 Solved!',es:'🔓 ¡Resuelto!',vi:'🔓 Đã giải!',ar:'🔓 تم الحل!',hi:'🔓 हल हो गया!',ur:'🔓 حل ہو گیا!',zh:'🔓 已解开！'},
  'ui.pcount':       {en:'{n} of {total} locks open',es:'{n} de {total} candados abiertos',vi:'Đã mở {n}/{total} ổ khóa',ar:'{n} من {total} أقفال مفتوحة',hi:'{total} में से {n} ताले खुले',ur:'{total} میں سے {n} تالے کھلے',zh:'已打开 {n}/{total} 把锁'},
  'ui.wordph':       {en:'Type your answer',es:'Escribe tu respuesta',vi:'Nhập câu trả lời của bạn',ar:'اكتب إجابتك',hi:'अपना उत्तर लिखें',ur:'اپنا جواب لکھیں',zh:'输入你的答案'},
  'ui.clear':        {en:'clear',es:'limpiar',vi:'xóa',ar:'مسح',hi:'साफ़',ur:'صاف',zh:'清除'},
  'fb.digit':        {en:"That number doesn't match the clues. Check again.",es:'Ese número no coincide con las pistas. Revisa de nuevo.',vi:'Con số đó không khớp với manh mối. Hãy kiểm tra lại.',ar:'هذا الرقم لا يطابق الأدلّة. تحقّق مرة أخرى.',hi:'यह संख्या सुरागों से मेल नहीं खाती। फिर से जाँचें।',ur:'یہ عدد سراغوں سے میل نہیں کھاتا۔ دوبارہ جانچیں۔',zh:'这个数字与线索不符。请再检查。'},
  'fb.word':         {en:'Check the clues for the word that fits.',es:'Busca en las pistas la palabra que encaja.',vi:'Hãy tìm trong manh mối từ phù hợp.',ar:'ابحث في الأدلّة عن الكلمة المناسبة.',hi:'सही शब्द के लिए सुरागों को देखें।',ur:'صحیح لفظ کے لیے سراغ دیکھیں۔',zh:'在线索中找出合适的词。'},
  'fb.mc':           {en:"That one isn't supported by the clues. Look again.",es:'Esa opción no está respaldada por las pistas. Mira otra vez.',vi:'Lựa chọn đó không được manh mối chứng minh. Hãy xem lại.',ar:'هذا الخيار لا تدعمه الأدلّة. انظر مرة أخرى.',hi:'यह विकल्प सुरागों से समर्थित नहीं है। फिर से देखें।',ur:'یہ انتخاب سراغوں سے ثابت نہیں ہوتا۔ دوبارہ دیکھیں۔',zh:'这个选项没有线索支持。请再看看。'},
  'fb.multiExtra':   {en:"One pick isn't strong evidence. Strong means facts the clues actually prove.",es:'Una de tus elecciones no es evidencia sólida. Sólida significa hechos que las pistas realmente prueban.',vi:'Một lựa chọn không phải bằng chứng vững chắc. Vững chắc nghĩa là sự thật mà manh mối thực sự chứng minh.',ar:'أحد اختياراتك ليس دليلاً قويًا. القويّ يعني حقائق تثبتها الأدلّة فعلاً.',hi:'आपका एक चुनाव मज़बूत प्रमाण नहीं है। मज़बूत यानी वे तथ्य जो सुराग सचमुच साबित करते हैं।',ur:'آپ کا ایک انتخاب مضبوط ثبوت نہیں ہے۔ مضبوط یعنی وہ حقائق جو سراغ واقعی ثابت کرتے ہیں۔',zh:'你的一个选择不是有力证据。有力是指线索真正证明的事实。'},
  'fb.multiMissing': {en:"You're missing a piece of strong evidence. Find them all.",es:'Te falta una prueba sólida. Encuéntralas todas.',vi:'Bạn còn thiếu một bằng chứng vững chắc. Hãy tìm hết.',ar:'ينقصك دليل قويّ. اعثر عليها كلّها.',hi:'आपसे एक मज़बूत प्रमाण छूट रहा है। सभी को खोजें।',ur:'آپ سے ایک مضبوط ثبوت رہ گیا ہے۔ سب تلاش کریں۔',zh:'你还缺一个有力证据。把它们都找齐。'},
  'fb.seq':          {en:"That order doesn't match the clues. Try again.",es:'Ese orden no coincide con las pistas. Inténtalo de nuevo.',vi:'Thứ tự đó không khớp với manh mối. Hãy thử lại.',ar:'هذا الترتيب لا يطابق الأدلّة. حاول مرة أخرى.',hi:'यह क्रम सुरागों से मेल नहीं खाता। फिर से कोशिश करें।',ur:'یہ ترتیب سراغوں سے میل نہیں کھاتی۔ دوبارہ کوشش کریں۔',zh:'这个顺序与线索不符。请再试一次。'},
  'footer.privacy':  {en:'Privacy & compliance',es:'Privacidad y cumplimiento',vi:'Quyền riêng tư & tuân thủ',ar:'الخصوصية والامتثال',hi:'गोपनीयता और अनुपालन',ur:'رازداری اور تعمیل',zh:'隐私与合规'},
  'footer.disclaimer':{en:'',es:'',vi:'',ar:'',hi:'',ur:'',zh:''},
};
const LANGS = ['en','es','vi','ar','hi','ur','zh'];
/* breakout-specific chrome keys that the translation pass must fill for es..zh */
const CHROME_KEYS = ['crumb.suite','header.eyebrow','header.h1','header.sub','brief.label','brief.h','brief.p','footer.text','win.stamp','win.h','win.p'];

function decode(s){
  return String(s)
    .replace(/&amp;/g,'&').replace(/&mdash;/g,'—').replace(/&ndash;/g,'–')
    .replace(/&rsquo;/g,'’').replace(/&lsquo;/g,'‘').replace(/&rdquo;/g,'”').replace(/&ldquo;/g,'“')
    .replace(/&hellip;/g,'…').replace(/&nbsp;/g,' ').replace(/&#39;/g,"'").replace(/&quot;/g,'"')
    .replace(/\s+/g,' ').trim();
}
function grab(re, html, i){ const m = html.match(re); return m ? decode(m[i||1]) : ''; }

function parseArr(s){ return eval('(' + s + ')'); }   // CLUES/LOCKS are JS literals (single-quote) in july4, JSON in july5th
function extract(html){
  const clues = parseArr(html.match(/const CLUES=(\[[\s\S]*?\]);/)[1]);
  const locks = parseArr(html.match(/const LOCKS=(\[[\s\S]*?\]);/)[1]);
  // crumb suite = the 2nd anchor in the crumb line
  const crumbSuite = grab(/<div class="crumb">\s*<a [^>]*>[\s\S]*?<\/a>\s*·\s*<a [^>]*>([\s\S]*?)<\/a>/, html);
  const eyebrow = grab(/<div class="eyebrow"[^>]*>([\s\S]*?)<\/div>/, html);
  let h1 = grab(/<h1[^>]*>([\s\S]*?)<\/h1>/, html).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  const sub = grab(/<p class="sub"[^>]*>([\s\S]*?)<\/p>/, html);
  const briefM = html.match(/<div class="brief">\s*<span class="tag"[^>]*>([\s\S]*?)<\/span>\s*<h2[^>]*>([\s\S]*?)<\/h2>\s*<p[^>]*>([\s\S]*?)<\/p>/);
  const winM = html.match(/<div class="stamp"[^>]*>([\s\S]*?)<\/div>\s*<h2[^>]*>([\s\S]*?)<\/h2>\s*<p[^>]*>([\s\S]*?)<\/p>/);
  const footer = grab(/<footer>\s*([\s\S]*?)\s*·\s*<a href="policy/, html);
  return {
    clues, locks, crumbSuite, eyebrow, h1, sub,
    briefLabel: decode(briefM[1]), briefH: decode(briefM[2]), briefP: decode(briefM[3]),
    winStamp: decode(winM[1]), winH: decode(winM[2]), winP: decode(winM[3]), footer,
  };
}

function skeleton(slug, suite, x){
  const pal = PALETTE[suite];
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>${x.h1} — ${x.crumbSuite}</title>
${FONTS}
<style>:root{${pal}}</style>
<link rel="stylesheet" href="../../assets/breakout.css">
</head>
<body>
<canvas id="confetti"></canvas>
<div class="wrap">
  <div class="langbar"><span class="globe" aria-hidden="true">🌐</span><div data-i18n-picker></div></div>
  <div class="crumb"><a href="${slug}.html" data-i18n="crumb.teacher">‹ Teacher launch</a> · <a href="index.html" data-i18n="crumb.suite">${x.crumbSuite}</a></div>

  <header class="top">
    <div class="eyebrow" data-i18n="header.eyebrow">${x.eyebrow}</div>
    <h1 data-i18n="header.h1">${x.h1}</h1>
    <p class="sub" data-i18n="header.sub">${x.sub}</p>
  </header>

  <div class="progress-wrap">
    <span class="pcount" id="pcount">0 of ${x.locks.length} locks open</span>
    <div class="lockdots" id="lockdots"></div>
    <button class="resetbtn" id="resetBtn" data-i18n="ui.reset">↺ Reset</button>
  </div>

  <div class="brief">
    <span class="tag" data-i18n="brief.label">${x.briefLabel}</span>
    <h2 data-i18n="brief.h">${x.briefH}</h2>
    <p data-i18n="brief.p">${x.briefP}</p>
  </div>

  <div class="section-title" data-i18n="sect.clues">🔍 The Clues</div>
  <p class="hint" data-i18n="sect.cluesHint">Tap each clue to read it. (You can reopen them anytime.)</p>
  <div class="clue-grid" id="clueGrid"></div>

  <div class="section-title" data-i18n="sect.locks">🔒 The Locks</div>
  <p class="hint" data-i18n="sect.locksHint">Solve each lock using the clues above.</p>
  <div class="locks" id="locks"></div>

  <footer>
    <span data-i18n="footer.text">${x.footer}</span> · <a href="policy.html" data-i18n="footer.privacy">Privacy &amp; compliance</a><br>
    <span style="opacity:.7" data-i18n="footer.disclaimer"></span>
  </footer>
</div>

<div class="modal-bg" id="modalBg"><div class="modal" id="modal"></div></div>
<div class="win" id="win"><div class="win-card">
  <div class="stamp" data-i18n="win.stamp">${x.winStamp}</div>
  <h2 data-i18n="win.h">${x.winH}</h2>
  <p data-i18n="win.p">${x.winP}</p>
  <button id="winReplay" data-i18n="ui.playagain">Play Again</button>
</div></div>

<script src="locales/${slug}.js"></script>
<script src="../../assets/i18n.js"></script>
<script src="../../assets/breakout.js"></script>
</body>
</html>
`;
}

function localeStub(slug, suite, x){
  // UI: en fully filled (common + chrome); es..zh get common only, chrome left as "" TODO
  const UI = {};
  for (const lg of LANGS) {
    UI[lg] = {};
    for (const k of Object.keys(COMMON)) UI[lg][k] = COMMON[k][lg];
  }
  // English chrome
  UI.en['crumb.suite']=x.crumbSuite; UI.en['header.eyebrow']=x.eyebrow; UI.en['header.h1']=x.h1;
  UI.en['header.sub']=x.sub; UI.en['brief.label']=x.briefLabel; UI.en['brief.h']=x.briefH; UI.en['brief.p']=x.briefP;
  UI.en['footer.text']=x.footer; UI.en['win.stamp']=x.winStamp; UI.en['win.h']=x.winH; UI.en['win.p']=x.winP;
  // breakout-specific chrome keys are intentionally omitted for es..zh so they
  // fall back to English until the translation pass adds them (see CHROME_KEYS).
  const CONTENT = { en: { clues: x.clues, locks: x.locks } };
  for (const lg of LANGS.slice(1)) CONTENT[lg] = { clues: [], locks: [] };         // TODO translate
  const obj = { id: slug, confetti: CONFETTI[suite], UI, CONTENT };
  return 'window.BREAKOUT = ' + JSON.stringify(obj, null, 1) + ';\n';
}

// ---- seed july5 fully from the translated pilot ----
function seedFromPilot(){
  const p = fs.readFileSync(path.join(ROOT,'july5th/grade35/july5-student.i18n.html'),'utf8');
  const UI = eval('('+p.match(/const UI\s*=\s*(\{[\s\S]*?\});\s*\n\/\* =+ Structured/)[1]+')');
  const CONTENT = eval('('+p.match(/const CONTENT\s*=\s*(\{[\s\S]*?\});\s*\n\/\* =+ register/)[1]+')');
  // ensure common UI keys present for every lang (pilot lacks ui.clear/fb.seq)
  for (const lg of LANGS) for (const k of Object.keys(COMMON)) if (UI[lg][k]===undefined) UI[lg][k]=COMMON[k][lg];
  const obj = { id:'july5', confetti: CONFETTI.july5th, UI, CONTENT };
  return 'window.BREAKOUT = ' + JSON.stringify(obj, null, 1) + ';\n';
}

// H1 overrides (where the source h1 has inline markup we want to preserve as text)
const H1_OVERRIDE = { electionday: 'Election Day Festivals (Black Governors & Kings)' };

module.exports = { extract, localeStub, seedFromPilot, PALETTE, CONFETTI, COMMON };
if (require.main !== module) return;

let done = 0, seeded = 0;
for (const suite of ['july5th','july4']) {
  for (const band of ['grade35','grade68','grade912']) {
    const dir = path.join(ROOT, suite, band);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith('-student.html')) continue;
      const slug = f.replace('-student.html','');
      const file = path.join(dir, f);
      const html = fs.readFileSync(file,'utf8');
      const x = extract(html);
      if (H1_OVERRIDE[slug]) x.h1 = H1_OVERRIDE[slug];
      fs.mkdirSync(path.join(dir,'locales'), { recursive:true });
      if (slug==='july5') { fs.writeFileSync(path.join(dir,'locales',slug+'.js'), seedFromPilot()); seeded++; }
      else fs.writeFileSync(path.join(dir,'locales',slug+'.js'), localeStub(slug, suite, x));
      fs.writeFileSync(file, skeleton(slug, suite, x));
      done++;
    }
  }
}
console.log(`Converted ${done} student breakouts (july5 seeded from pilot: ${seeded}).`);
console.log('Locale files written under each band/locales/. English + shared UI complete; es/vi/ar/hi/ur/zh chrome+content pending for all but july5.');
