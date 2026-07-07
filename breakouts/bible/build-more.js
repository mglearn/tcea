#!/usr/bin/env node
/* build-more.js — expand the "Bible as Literature" suite.
   Reads bible/grades/_specs-<band>.json (English breakout specs) and, when present,
   bible/grades/_i18n-<band>-<slug>.json (translations for es/vi/ar/hi/ur/zh). For each
   spec it emits:
     1) grades/<band>-<slug>.js         — window.BREAKOUT (English content + shared
                                          translated UI; per-language story content when a
                                          translation file exists, else English fallback)
     2) grades/<band>-<slug>-student.html — the shared-engine student page
   It also writes grades manifest breakouts.js (window.BIBLE_LIB) for the landing page.

   Run:  node breakouts/bible/build-more.js */
const fs = require('fs');
const path = require('path');
const { COMMON } = require('../build-ml.js');

const ROOT = __dirname;                       // breakouts/bible
const GRADES = path.join(ROOT, 'grades');
const LANGS = ['en', 'es', 'vi', 'ar', 'hi', 'ur', 'zh'];
const TLANGS = ['es', 'vi', 'ar', 'hi', 'ur', 'zh'];

const CONFETTI = ['#054c8c', '#2f6cae', '#fbd239', '#5b8fc0', '#dbe6f2', '#023266'];
const LOCK_COLORS = ['#054c8c', '#2f6cae', '#fbd239', '#5b8fc0'];
const PAD_COLORS = ['#2f6cae', '#023266', '#5b8fc0', '#054c8c'];
const FOOTER_TEXT = 'Bible as Literature Breakouts · Taught as story, not scripture · Runs entirely in your browser — no logins, no data collected.';
const DISCLAIMER = 'A study resource about religious literature, not religious instruction.';

const BANDS = [
  { key: 'k2',   label: 'K–2',  eyebrow: 'Critical Thinking Breakout · Grades K–2',
    featured: { file: 'k2',   title: 'The Storyteller’s Order', blurb: 'Sequence the Genesis creation account and identify the Golden Rule’s plain meaning.' } },
  { key: 'g35',  label: '3–5',  eyebrow: 'Critical Thinking Breakout · Grades 3–5',
    featured: { file: 'g35',  title: 'Underdogs & Lions’ Dens', blurb: 'Find the shared theme across David & Goliath and Daniel, then test it against Solomon.' } },
  { key: 'g68',  label: '6–8',  eyebrow: 'Critical Thinking Breakout · Grades 6–8',
    featured: { file: 'g68',  title: 'Parables & Persuasion', blurb: 'Name the parable genre, analyze rhetorical technique, and connect the Sermon to Dr. King.' } },
  { key: 'g912', label: '9–12', eyebrow: 'Critical Thinking Breakout · Grades 9–12',
    featured: { file: 'g912', title: 'Allusion, Archetype & Argument', blurb: 'Trace the “fall” archetype and biblical allusions, and separate textual fact from interpretation.' } },
];

/* shared UI translated across all 7 languages (drops footer.disclaimer — we set our own) */
function commonForLang(lg) {
  const o = {};
  for (const k of Object.keys(COMMON)) {
    if (k === 'footer.disclaimer') continue;
    if (COMMON[k][lg] !== undefined) o[k] = COMMON[k][lg];
  }
  return o;
}

/* harvest already-translated suite constants (crumb.suite, header.eyebrow, brief.label,
   footer.text) from a band's hand-translated featured file, per language */
function harvest(band) {
  const out = {};
  try {
    const w = {}; eval(fs.readFileSync(path.join(GRADES, band.featured.file + '.js'), 'utf8').replace('window.BREAKOUT', 'w.BREAKOUT'));
    const U = w.BREAKOUT.UI || {};
    for (const lg of LANGS) {
      const u = U[lg] || {};
      out[lg] = {};
      for (const k of ['crumb.suite', 'header.eyebrow', 'brief.label', 'footer.text']) if (u[k]) out[lg][k] = u[k];
    }
  } catch (e) { console.error('harvest failed', band.key, e.message); }
  return out;
}

function loadTrans(file) {
  const p = path.join(GRADES, `_i18n-${file}.json`);
  if (!fs.existsSync(p)) return null;
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch (e) { console.error('bad translation file', p, e.message); return null; }
}

/* ---- per-language showcase pages (es/vi/ar/hi/ur/zh) ---- */
const SHOW_LANGS = ['es', 'vi', 'ar', 'hi', 'ur', 'zh'];
const AUTONYM = { en: 'English', es: 'Español', vi: 'Tiếng Việt', ar: 'العربية', hi: 'हिन्दी', ur: 'اردو', zh: '中文' };
const PAGE = { en: 'index.html', es: 'es.html', vi: 'vi.html', ar: 'ar.html', hi: 'hi.html', ur: 'ur.html', zh: 'zh.html' };
const CHROME = {
  es: { dir: 'ltr', htmlLang: 'es', navAll: 'Todas las actividades', bandWord: 'Grados', featured: '★ Destacada', openCTA: 'Abrir en español →',
    docTitle: 'La Biblia como literatura · 31 actividades en español', h1: 'La Biblia como literatura', eyebrow: 'Versión en español · 7 idiomas disponibles',
    lead: 'Las 31 actividades de pensamiento crítico, en español. Cada actividad abre directamente en español; dentro de cada una puedes cambiar de idioma con el selector 🌐. Los textos bíblicos se estudian de forma académica —como literatura, historia, retórica y alusión—, nunca de forma devocional, según la línea trazada por la Corte Suprema en Abington v. Schempp (1963).',
    note: 'Esta página enlaza cada actividad para que se abra en español. La misma biblioteca está disponible en 7 idiomas. ¿Prefieres inglés? Visita el panel principal.',
    footer: 'Contenido CC BY 4.0 · Código MIT · La Biblia como literatura · Se ejecuta en tu navegador, sin recopilar datos',
    tally: [['31', 'Actividades'], ['4', 'Niveles · K–12'], ['7', 'Idiomas'], ['$0', 'Gratis · sin cuentas']] },
  vi: { dir: 'ltr', htmlLang: 'vi', navAll: 'Tất cả hoạt động', bandWord: 'Lớp', featured: '★ Nổi bật', openCTA: 'Mở bằng tiếng Việt →',
    docTitle: 'Kinh Thánh như văn học · 31 hoạt động bằng tiếng Việt', h1: 'Kinh Thánh như văn học', eyebrow: 'Phiên bản tiếng Việt · có 7 ngôn ngữ',
    lead: '31 hoạt động tư duy phản biện, bằng tiếng Việt. Mỗi hoạt động mở trực tiếp bằng tiếng Việt; trong mỗi hoạt động, bạn có thể đổi ngôn ngữ bằng nút 🌐. Các văn bản Kinh Thánh được nghiên cứu một cách học thuật —như văn học, lịch sử, tu từ và điển tích—, không bao giờ mang tính sùng đạo, theo lằn ranh mà Tòa án Tối cao Hoa Kỳ vạch ra trong vụ Abington kiện Schempp (1963).',
    note: 'Trang này liên kết mỗi hoạt động để mở bằng tiếng Việt. Cùng một thư viện có sẵn bằng 7 ngôn ngữ. Bạn thích tiếng Anh? Hãy vào trang chính.',
    footer: 'Nội dung CC BY 4.0 · Mã nguồn MIT · Kinh Thánh như văn học · Chạy trong trình duyệt, không thu thập dữ liệu',
    tally: [['31', 'Hoạt động'], ['4', 'Cấp lớp · K–12'], ['7', 'Ngôn ngữ'], ['$0', 'Miễn phí · không cần tài khoản']] },
  ar: { dir: 'rtl', htmlLang: 'ar', navAll: 'جميع الأنشطة', bandWord: 'الصفوف', featured: '★ مميّزة', openCTA: 'افتح بالعربية ←',
    docTitle: 'الكتاب المقدس بوصفه أدبًا · 31 نشاطًا بالعربية', h1: 'الكتاب المقدس بوصفه أدبًا', eyebrow: 'النسخة العربية · تتوفر 7 لغات',
    lead: '31 نشاطًا للتفكير النقدي، بالعربية. يفتح كل نشاط مباشرةً بالعربية؛ ويمكنك داخل كل نشاط تغيير اللغة عبر زر 🌐. تُدرَس النصوص الكتابية دراسةً أكاديمية —بوصفها أدبًا وتاريخًا وبلاغة وتلميحًا—، لا دراسةً تعبّدية، وفق الخط الذي رسمته المحكمة العليا الأمريكية في قضية أبينغتون ضد شيمب (1963).',
    note: 'تربط هذه الصفحة كل نشاط ليفتح بالعربية. المكتبة نفسها متوفرة بسبع لغات. تفضّل الإنجليزية؟ زُر الصفحة الرئيسية.',
    footer: 'المحتوى CC BY 4.0 · الشيفرة MIT · الكتاب المقدس بوصفه أدبًا · يعمل في متصفحك دون جمع بيانات',
    tally: [['31', 'أنشطة'], ['4', 'مستويات · K–12'], ['7', 'لغات'], ['$0', 'مجاني · دون حسابات']] },
  hi: { dir: 'ltr', htmlLang: 'hi', navAll: 'सभी गतिविधियाँ', bandWord: 'कक्षा', featured: '★ विशेष', openCTA: 'हिन्दी में खोलें →',
    docTitle: 'साहित्य के रूप में बाइबल · 31 गतिविधियाँ हिन्दी में', h1: 'साहित्य के रूप में बाइबल', eyebrow: 'हिन्दी संस्करण · 7 भाषाएँ उपलब्ध',
    lead: '31 आलोचनात्मक-चिंतन गतिविधियाँ, हिन्दी में। हर गतिविधि सीधे हिन्दी में खुलती है; हर गतिविधि के भीतर आप 🌐 बटन से भाषा बदल सकते हैं। बाइबल के पाठों को अकादमिक रूप से पढ़ाया जाता है —साहित्य, इतिहास, अलंकार और संकेत के रूप में—, कभी भी धार्मिक भक्ति के रूप में नहीं, उस रेखा के अनुसार जो अमेरिकी सर्वोच्च न्यायालय ने Abington बनाम Schempp (1963) में खींची।',
    note: 'यह पृष्ठ हर गतिविधि को हिन्दी में खोलने के लिए जोड़ता है। यही पुस्तकालय 7 भाषाओं में उपलब्ध है। अंग्रेज़ी पसंद है? मुख्य पृष्ठ देखें।',
    footer: 'सामग्री CC BY 4.0 · कोड MIT · साहित्य के रूप में बाइबल · आपके ब्राउज़र में चलता है, कोई डेटा एकत्र नहीं',
    tally: [['31', 'गतिविधियाँ'], ['4', 'स्तर · K–12'], ['7', 'भाषाएँ'], ['$0', 'मुफ़्त · कोई खाता नहीं']] },
  ur: { dir: 'rtl', htmlLang: 'ur', navAll: 'تمام سرگرمیاں', bandWord: 'جماعت', featured: '★ نمایاں', openCTA: 'اردو میں کھولیں ←',
    docTitle: 'ادب کے طور پر بائبل · 31 سرگرمیاں اردو میں', h1: 'ادب کے طور پر بائبل', eyebrow: 'اردو نسخہ · 7 زبانیں دستیاب',
    lead: 'تنقیدی سوچ کی 31 سرگرمیاں، اردو میں۔ ہر سرگرمی براہِ راست اردو میں کھلتی ہے؛ ہر سرگرمی کے اندر آپ 🌐 بٹن سے زبان بدل سکتے ہیں۔ بائبل کے متون کا مطالعہ علمی انداز میں کیا جاتا ہے —ادب، تاریخ، بلاغت اور تلمیح کے طور پر—، کبھی عبادتی انداز میں نہیں، اُس اصول کے مطابق جو امریکی سپریم کورٹ نے Abington بمقابلہ Schempp (1963) میں طے کیا۔',
    note: 'یہ صفحہ ہر سرگرمی کو اردو میں کھولنے کے لیے جوڑتا ہے۔ یہی لائبریری 7 زبانوں میں دستیاب ہے۔ انگریزی پسند ہے؟ مرکزی صفحہ دیکھیں۔',
    footer: 'مواد CC BY 4.0 · کوڈ MIT · ادب کے طور پر بائبل · آپ کے براؤزر میں چلتا ہے، کوئی ڈیٹا جمع نہیں',
    tally: [['31', 'سرگرمیاں'], ['4', 'سطحیں · K–12'], ['7', 'زبانیں'], ['$0', 'مفت · کوئی اکاؤنٹ نہیں']] },
  zh: { dir: 'ltr', htmlLang: 'zh', navAll: '全部活动', bandWord: '年级', featured: '★ 精选', openCTA: '用中文打开 →',
    docTitle: '作为文学的圣经 · 31 个中文活动', h1: '作为文学的圣经', eyebrow: '中文版 · 提供 7 种语言',
    lead: '31 个批判性思维活动，中文版。每个活动都直接以中文打开；在每个活动中，你可以用 🌐 按钮切换语言。圣经文本以学术方式研究——作为文学、历史、修辞与典故——绝不以宗教信仰方式，遵循美国最高法院在 Abington 诉 Schempp 案（1963）中划定的界线。',
    note: '本页将每个活动链接为以中文打开。同一套活动提供 7 种语言。想看英文？请访问主页面。',
    footer: '内容 CC BY 4.0 · 代码 MIT · 作为文学的圣经 · 在你的浏览器中运行，不收集数据',
    tally: [['31', '活动'], ['4', '年级 · K–12'], ['7', '语言'], ['$0', '免费 · 无需账户']] },
};

/* localized title/blurb of a band's hand-translated featured breakout, per language */
function featuredLoc(band) {
  const out = {}; const langs = ['en', ...SHOW_LANGS];
  try {
    const w = {}; eval(fs.readFileSync(path.join(GRADES, band.featured.file + '.js'), 'utf8').replace('window.BREAKOUT', 'w.BREAKOUT'));
    const U = w.BREAKOUT.UI || {};
    for (const lg of langs) { const u = U[lg] || {}; out[lg] = { title: u['header.h1'] || band.featured.title, blurb: u['header.sub'] || band.featured.blurb }; }
  } catch (e) { for (const lg of langs) out[lg] = { title: band.featured.title, blurb: band.featured.blurb }; }
  return out;
}

function showcaseCss() {
  return `:root{--navy:#054c8c;--navy-d:#023266;--navy-mid:#2f6cae;--paper:#f4f8fc;--card:#fff;--ink:#161c2e;--ink-soft:#516079;--gold:#fbd239;--gold-d:#7a5208;--line:rgba(5,76,140,.14)}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'DM Sans',sans-serif;color:var(--ink);line-height:1.6;background:radial-gradient(ellipse 60% 45% at 85% -5%,rgba(251,210,57,.16)0%,transparent 60%),radial-gradient(ellipse 55% 45% at 0% 100%,rgba(5,76,140,.12)0%,transparent 60%),var(--paper)}
.topnav{position:fixed;top:0;left:0;right:0;z-index:200;height:56px;background:rgba(42,84,130,.96);backdrop-filter:blur(14px);border-bottom:1px solid var(--line);display:flex;align-items:center;padding:0 28px;gap:8px}
.brand{font-family:'Playfair Display',serif;font-size:1rem;font-weight:700;color:#e9f0fa;text-decoration:none}
.navlinks{margin-inline-start:auto;display:flex;gap:4px}
.navlinks a{font-size:.72rem;font-weight:500;color:rgba(214,228,240,.85);text-decoration:none;padding:6px 11px;border-radius:5px}
.navlinks a:hover{background:rgba(255,255,255,.12);color:#fff}
.wrap{max-width:1160px;margin:0 auto;padding:88px 24px 80px}
.langrow{display:flex;flex-wrap:wrap;align-items:center;gap:2px;font-family:'DM Mono',monospace;font-size:.74rem;margin-bottom:22px}
.langrow .g{margin-inline-end:6px}
.langrow a{color:var(--navy-mid);text-decoration:none;padding:2px 5px;border-radius:4px}
.langrow a:hover{background:#eef2fb;color:var(--navy)}
.langrow .cur{color:var(--gold-d);font-weight:600;padding:2px 5px}
.langrow i{color:var(--line);font-style:normal}
.eyebrow{display:inline-flex;align-items:center;gap:8px;background:#eef2fb;border:1px solid rgba(5,76,140,.2);border-radius:100px;padding:6px 16px;font-family:'DM Mono',monospace;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;color:#054c8c;margin-bottom:16px}
.eyebrow::before{content:'';width:6px;height:6px;border-radius:50%;background:#fbd239}
h1{font-family:'Playfair Display',serif;font-size:clamp(2rem,5vw,3rem);font-weight:900;line-height:1.08;margin-bottom:12px}
.lead{font-size:1rem;font-weight:300;color:var(--ink-soft);max-width:780px}
.tally{display:flex;gap:30px;flex-wrap:wrap;margin:26px 0 8px}
.tally .n{font-family:'Playfair Display',serif;font-size:1.9rem;font-weight:700;color:var(--navy-mid);line-height:1}
.tally .l{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-soft);margin-top:4px}
.band-h{font-family:'DM Mono',monospace;font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:#054c8c;margin:34px 0 12px;display:flex;align-items:center;gap:12px}
.band-h::after{content:"";flex:1;height:1px;background:rgba(5,76,140,.12)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}
.card{display:flex;flex-direction:column;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px 18px;text-decoration:none;transition:border-color .2s,box-shadow .2s,transform .15s}
.card:hover{border-color:rgba(5,76,140,.3);box-shadow:0 12px 34px rgba(0,0,0,.12);transform:translateY(-2px)}
.card .star{font-family:'DM Mono',monospace;font-size:.58rem;font-weight:500;letter-spacing:.08em;color:var(--gold-d);margin-bottom:6px}
.card .t{font-family:'Playfair Display',serif;font-size:1.04rem;font-weight:700;color:#12233a;line-height:1.16;margin-bottom:5px}
.card .b{font-size:.8rem;font-weight:300;color:var(--ink-soft);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.card .o{margin-top:10px;font-size:.72rem;font-weight:600;color:var(--navy-mid)}
.note{background:rgba(252,176,64,.06);border:1px solid rgba(252,176,64,.28);border-inline-start:3px solid var(--gold);border-radius:10px;padding:16px 20px;margin:34px 0 0}
.note p{font-size:.85rem;font-weight:300;color:var(--ink-soft)}
footer{background:var(--navy-d);border-top:1px solid rgba(5,76,140,.1);padding:26px;text-align:center;font-family:'DM Mono',monospace;font-size:.62rem;color:rgba(188,205,228,.75);letter-spacing:.05em;margin-top:48px}`;
}

function showcasePage(lang) {
  const c = CHROME[lang];
  const bar = ['en', 'es', 'vi', 'ar', 'hi', 'ur', 'zh'].map((l, i) => {
    const sep = i ? '<i>·</i>' : '';
    return sep + (l === lang ? `<span class="cur">${AUTONYM[l]}</span>` : `<a href="${PAGE[l]}">${AUTONYM[l]}</a>`);
  }).join('');
  const tally = c.tally.map(t => `<div><div class="n">${esc(t[0])}</div><div class="l">${esc(t[1])}</div></div>`).join('');
  return `<!DOCTYPE html>
<html lang="${c.htmlLang}" dir="${c.dir}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>${esc(c.docTitle)}</title>
<meta name="description" content="${esc(c.eyebrow)}">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>${showcaseCss()}</style>
</head>
<body>
<nav class="topnav">
  <a href="index.html" class="brand">${esc(c.h1)}</a>
  <div class="navlinks"><a href="index.html">English</a><a href="correlation.html">TEKS</a></div>
</nav>
<div class="wrap">
  <div class="langrow"><span class="g">🌐</span>${bar}</div>
  <div class="eyebrow">${esc(c.eyebrow)}</div>
  <h1>${esc(c.h1)}</h1>
  <p class="lead">${esc(c.lead)}</p>
  <div class="tally">${tally}</div>
  <div id="grid"></div>
  <div class="note"><p>${esc(c.note)}</p></div>
</div>
<footer>${esc(c.footer)}</footer>
<script src="breakouts-${lang}.js"></script>
<script>
(function(){
  var lib=window.BIBLE_LIB_${lang.toUpperCase()}||[],order=['K–2','3–5','6–8','9–12'],host=document.getElementById('grid');
  if(!host)return;
  function e(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  var by={};lib.forEach(function(x){(by[x.band]=by[x.band]||[]).push(x);});
  host.innerHTML=order.filter(function(b){return by[b];}).map(function(b){
    var cards=by[b].map(function(x){return '<a class="card" href="'+x.href+'">'+(x.featured?'<span class="star">${c.featured}</span>':'')+'<span class="t">'+e(x.title)+'</span><span class="b">'+e(x.blurb)+'</span><span class="o">${c.openCTA}</span></a>';}).join('');
    return '<div class="band-h">${c.bandWord} '+e(b)+'</div><div class="grid">'+cards+'</div>';
  }).join('');
})();
</script>
</body>
</html>
`;
}

function buildUI(band, spec, trans, consts) {
  const UI = {};
  for (const lg of LANGS) UI[lg] = commonForLang(lg);
  Object.assign(UI.en, {
    'crumb.suite': 'Bible as Literature Breakouts',
    'header.eyebrow': band.eyebrow,
    'header.h1': spec.h1,
    'header.sub': spec.sub,
    'brief.label': spec.brief.label,
    'brief.h': spec.brief.h,
    'brief.p': spec.brief.p,
    'footer.text': FOOTER_TEXT,
    'footer.disclaimer': DISCLAIMER,
    'win.stamp': spec.win.stamp,
    'win.h': spec.win.h,
    'win.p': spec.win.p,
  });
  for (const lg of TLANGS) {
    Object.assign(UI[lg], consts[lg] || {});                 // crumb.suite, eyebrow, brief.label, footer.text
    const c = trans && trans[lg] && trans[lg].chrome;
    if (c) Object.assign(UI[lg], {
      'header.h1': c.h1, 'header.sub': c.sub,
      'brief.h': c.briefH, 'brief.p': c.briefP,
      'win.stamp': c.winStamp, 'win.h': c.winH, 'win.p': c.winP,
    });
  }
  return UI;
}

function enContent(spec) {
  const clues = spec.clues.map((c, i) => ({ id: 'c' + (i + 1), ico: c.ico, nm: c.nm, title: c.title, body: c.body }));
  const locks = spec.locks.map((l, i) => {
    const base = { id: 'L' + (i + 1), type: l.type, color: LOCK_COLORS[i % LOCK_COLORS.length], title: l.title, q: l.q };
    if (l.type === 'seq') { base.pads = l.pads.map((p, j) => ({ k: p.k, e: p.e, c: PAD_COLORS[j % PAD_COLORS.length] })); base.answer = l.answer; }
    else if (l.type === 'mc') { base.options = l.options; base.answerIndex = l.answerIndex; }
    else if (l.type === 'multi') { base.items = l.items.map(it => ({ t: it.t, strong: !!it.strong })); }
    else if (l.type === 'word') { base.answer = dedupeLower(l.answer); }
    base.reason = l.reason;
    return base;
  });
  return { clues, locks };
}

function dedupeLower(arr) {
  const seen = new Set(), out = [];
  for (const a of arr) { const v = String(a).trim().toLowerCase(); if (v && !seen.has(v)) { seen.add(v); out.push(v); } }
  return out;
}

function buildContent(spec, trans) {
  const en = enContent(spec);
  const out = { en };
  for (const lg of TLANGS) {
    const t = trans && trans[lg];
    if (!t || !t.clues || !t.locks) continue;               // missing -> engine falls back to en
    const clues = en.clues.map((c, i) => ({ ...c, nm: t.clues[i].nm, title: t.clues[i].title, body: t.clues[i].body }));
    const locks = en.locks.map((l, i) => {
      const tl = t.locks[i]; const nl = { ...l, title: tl.title, q: tl.q, reason: tl.reason };
      if (l.type === 'mc') nl.options = tl.options;
      else if (l.type === 'multi') nl.items = l.items.map((it, j) => ({ ...it, t: tl.items[j] }));
      else if (l.type === 'seq') nl.pads = l.pads.map((p, j) => ({ ...p, e: tl.pads[j] }));
      else if (l.type === 'word') nl.answer = dedupeLower([...(tl.answer || []), ...l.answer]);
      return nl;
    });
    out[lg] = { clues, locks };
  }
  return out;
}

function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

const PALETTE = ':root{--navy:#054c8c;--navy-d:#023266;--red:#023266;--red-d:#012247;--gold:#fbd239;--gold-d:#d9a010;--paper:#f4f8fc;--ink:#161c2e;--ink-soft:#516079;--card:#fff;--line:#dbe6f2;--good:#2D8A5F;--bad:#c0392b;--c1:#054c8c;--c2:#2f6cae;--c3:#023266;--c4:#fbd239;--c5:#0e6b8a;--bg-a:rgba(251,210,57,.14);--bg-b:rgba(5,76,140,.10)}';

function studentHtml(file, band, spec, nlocks) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>${esc(spec.h1)} — Bible as Literature Breakouts</title>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>${PALETTE}</style>
<link rel="stylesheet" href="../../assets/breakout.css">
</head>
<body>
<canvas id="confetti"></canvas>
<div class="wrap">
  <div class="langbar"><span class="globe" aria-hidden="true">🌐</span><div data-i18n-picker></div></div>
  <div class="crumb"><a href="../index.html" data-i18n="crumb.teacher">‹ Teacher launch</a> · <a href="../index.html" data-i18n="crumb.suite">Bible as Literature Breakouts</a></div>

  <header class="top">
    <div class="eyebrow" data-i18n="header.eyebrow">${esc(band.eyebrow)}</div>
    <h1 data-i18n="header.h1">${esc(spec.h1)}</h1>
    <p class="sub" data-i18n="header.sub">${esc(spec.sub)}</p>
  </header>

  <div class="progress-wrap">
    <span class="pcount" id="pcount">0 of ${nlocks} locks open</span>
    <div class="lockdots" id="lockdots"></div>
    <button class="resetbtn" id="resetBtn" data-i18n="ui.reset">↺ Reset</button>
  </div>

  <div class="brief">
    <span class="tag" data-i18n="brief.label">${esc(spec.brief.label)}</span>
    <h2 data-i18n="brief.h">${esc(spec.brief.h)}</h2>
    <p data-i18n="brief.p">${esc(spec.brief.p)}</p>
  </div>

  <div class="section-title" data-i18n="sect.clues">🔍 The Clues</div>
  <p class="hint" data-i18n="sect.cluesHint">Tap each clue to read it. (You can reopen them anytime.)</p>
  <div class="clue-grid" id="clueGrid"></div>

  <div class="section-title" data-i18n="sect.locks">🔒 The Locks</div>
  <p class="hint" data-i18n="sect.locksHint">Solve each lock using the clues above.</p>
  <div class="locks" id="locks"></div>

  <footer>
    <span data-i18n="footer.text">${esc(FOOTER_TEXT)}</span> · <a href="../policy.html" data-i18n="footer.privacy">Privacy &amp; compliance</a><br>
    <span style="opacity:.7" data-i18n="footer.disclaimer">${esc(DISCLAIMER)}</span>
  </footer>
</div>

<div class="modal-bg" id="modalBg"><div class="modal" id="modal"></div></div>
<div class="win" id="win"><div class="win-card">
  <div class="stamp" data-i18n="win.stamp">${esc(spec.win.stamp)}</div>
  <h2 data-i18n="win.h">${esc(spec.win.h)}</h2>
  <p data-i18n="win.p">${esc(spec.win.p)}</p>
  <button id="winReplay" data-i18n="ui.playagain">Play Again</button>
</div></div>

<script src="${file}.js"></script>
<script src="../../assets/i18n.js"></script>
<script src="../../assets/breakout.js"></script>
</body>
</html>
`;
}

let written = 0, translated = 0;
const lib = [];
const libs = {}; for (const lg of SHOW_LANGS) libs[lg] = [];
for (const band of BANDS) {
  lib.push({ band: band.label, href: `grades/${band.featured.file}-student.html`, title: band.featured.title, blurb: band.featured.blurb, featured: true });
  const floc = featuredLoc(band);
  for (const lg of SHOW_LANGS) libs[lg].push({ band: band.label, href: `grades/${band.featured.file}-student.html?lang=${lg}`, title: floc[lg].title, blurb: floc[lg].blurb, featured: true });
  const specFile = path.join(GRADES, `_specs-${band.key}.json`);
  if (!fs.existsSync(specFile)) { console.error('no specs for', band.key); continue; }
  const consts = harvest(band);
  const specs = JSON.parse(fs.readFileSync(specFile, 'utf8'));
  for (const spec of specs) {
    const file = `${band.key}-${spec.slug}`;
    const trans = loadTrans(file);
    if (trans) translated++;
    const obj = { id: `bible-${band.key}-${spec.slug}`, band: band.label, confetti: CONFETTI, UI: buildUI(band, spec, trans, consts), CONTENT: buildContent(spec, trans) };
    fs.writeFileSync(path.join(GRADES, file + '.js'), 'window.BREAKOUT = ' + JSON.stringify(obj, null, 1) + ';\n');
    fs.writeFileSync(path.join(GRADES, file + '-student.html'), studentHtml(file, band, spec, spec.locks.length));
    lib.push({ band: band.label, href: `grades/${file}-student.html`, title: spec.h1, blurb: spec.sub });
    for (const lg of SHOW_LANGS) {
      const t = trans && trans[lg] && trans[lg].chrome;
      libs[lg].push({ band: band.label, href: `grades/${file}-student.html?lang=${lg}`, title: (t && t.h1) || spec.h1, blurb: (t && t.sub) || spec.sub });
    }
    written++;
  }
}

fs.writeFileSync(path.join(ROOT, 'breakouts.js'), 'window.BIBLE_LIB = ' + JSON.stringify(lib) + ';\n');
for (const lg of SHOW_LANGS) {
  fs.writeFileSync(path.join(ROOT, `breakouts-${lg}.js`), `window.BIBLE_LIB_${lg.toUpperCase()} = ${JSON.stringify(libs[lg])};\n`);
  fs.writeFileSync(path.join(ROOT, `${lg}.html`), showcasePage(lg));
}
console.log(`build-more: wrote ${written} breakouts (${translated} with translations); ${lib.length} EN + ${SHOW_LANGS.length}×${libs.es.length} localized entries; pages: ${SHOW_LANGS.map(l => l + '.html').join(', ')}.`);
