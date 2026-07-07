#!/usr/bin/env node
/* gen-pd-pages.js — emit the teacher PD pages (udl.html, elps.html, guide.html)
   into each suite folder. Pages are i18n shells; content comes from the shared
   assets/*-i18n.js bundles (built by build-pd.js) merged per suite at runtime. */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

const SUITES = {
  science: { accent: '#0a6b52', accentD: '#075640', navy: '#0b3d5c', bandA: 'rgba(10,107,82,.10)', bandB: 'rgba(11,61,92,.08)', policy: true },
  bible:   { accent: '#054c8c', accentD: '#023266', navy: '#023266', bandA: 'rgba(5,76,140,.10)',  bandB: 'rgba(251,210,57,.12)', policy: true },
  clear:   { accent: '#7c5cbf', accentD: '#5a3fa0', navy: '#102a54', bandA: 'rgba(124,92,191,.12)', bandB: 'rgba(47,111,224,.08)', policy: true },
  july4:   { accent: '#0a2463', accentD: '#081b4a', navy: '#0a2463', bandA: 'rgba(10,36,99,.10)',  bandB: 'rgba(193,18,31,.08)',  policy: false },
  july5th: { accent: '#0b6b3a', accentD: '#08512c', navy: '#0b6b3a', bandA: 'rgba(11,107,58,.10)', bandB: 'rgba(178,30,40,.08)',  policy: false },
  idioms:  { accent: '#0e7490', accentD: '#0b5563', navy: '#0b3d5c', bandA: 'rgba(14,116,144,.10)', bandB: 'rgba(245,158,11,.10)', policy: true },
};

const FONTS = '<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">';

function head(cfg) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title data-i18n="doctitle">Teacher Supports</title>
${FONTS}
<style>:root{--pd-accent:${cfg.accent};--pd-accent-d:${cfg.accentD};--pd-navy:${cfg.navy};--pd-band-a:${cfg.bandA};--pd-band-b:${cfg.bandB}}</style>
<link rel="stylesheet" href="../assets/pd.css">
</head>
<body>
<div class="wrap">
  <div class="langbar"><span class="globe" aria-hidden="true">🌐</span><div data-i18n-picker></div></div>
  <div class="crumb"><a href="index.html" data-i18n="crumb">‹ Back</a></div>
  <div class="eyebrow" data-i18n="eyebrow">Teacher Supports</div>
  <h1 data-i18n="h1">Teacher Supports</h1>
  <p class="lead" data-i18n="lead"></p>`;
}

function pdnav(links) {
  return `  <div class="crumb" style="margin-top:14px">` +
    links.map(k => `<a href="${k.href}" data-i18n="${k.key}">${k.href}</a>`).join(' · ') +
    `</div>`;
}

function foot(cfg, discHtml) {
  const privacy = cfg.policy ? ` · <a href="policy.html" data-i18n="footer.privacy">Privacy &amp; compliance</a>` : '';
  return `  <p class="disc" data-i18n="disc"></p>
  ${discHtml}
  <footer><span data-i18n="footer"></span>${privacy}</footer>
</div>`;
}

function scripts(global, suite, page) {
  return `<script src="../assets/i18n.js"></script>
<script src="../assets/${global.file}"></script>
<script src="../assets/pd-suite-i18n.js"></script>
<script>
(function(){
  var LANGS=['en','es','vi','ar','hi','ur','zh'];
  var CORE=window.${global.name}||{}, SUITE=window.PD_SUITE||{};
  var SK='${suite}', PG='${page}';
  var merged={};
  LANGS.forEach(function(l){
    var core=CORE[l]||CORE.en||{};
    var sAll=SUITE[l]||SUITE.en||{};
    var s=sAll[SK]||{};
    merged[l]=Object.assign({},core,s.common||{},s[PG]||{});
  });
  BreakoutI18n.register('${suite}-${page}',merged);
})();
</script>
</body>
</html>`;
}

// ---- UDL page body ----
function udlBody() {
  const area = (h, list) => `    <div class="card"><h4 data-i18n="${h}"></h4><div data-i18n-html="${list}"></div></div>`;
  const principle = (h, sub, areas, apply) => `
  <h2 data-i18n="${h}"></h2>
  <p class="lead" style="margin-top:2px" data-i18n="${sub}"></p>
  <div class="grid">
${areas.map(a => area(a[0], a[1])).join('\n')}
  </div>
  <div class="apply" data-i18n-html="${apply}"></div>`;
  return `
  <div class="goal" data-i18n-html="goal"></div>
  <div class="note" data-i18n-html="howto"></div>
${principle('eng.h', 'eng.sub', [['a7.h', 'a7.list'], ['a8.h', 'a8.list'], ['a9.h', 'a9.list']], 'eng.apply')}
${principle('rep.h', 'rep.sub', [['a1.h', 'a1.list'], ['a2.h', 'a2.list'], ['a3.h', 'a3.list']], 'rep.apply')}
${principle('act.h', 'act.sub', [['a4.h', 'a4.list'], ['a5.h', 'a5.list'], ['a6.h', 'a6.list']], 'act.apply')}

  <h2 data-i18n="wins.h"></h2>
  <div class="note" data-i18n-html="wins.list"></div>
${pdnav([{ href: 'elps.html', key: 'nav.elps' }, { href: 'guide.html', key: 'nav.guide' }, { href: 'correlation.html', key: 'nav.correlation' }])}`;
}

// ---- ELPS page body ----
function elpsBody() {
  const dom = (h, tag, exp, apply) => `    <div class="card"><h4><span data-i18n="${h}"></span> <span class="tag" data-i18n="${tag}"></span></h4><div data-i18n-html="${exp}"></div><div class="apply" data-i18n-html="${apply}"></div></div>`;
  const lvl = (h, look, sc) => `    <tr><td><b data-i18n="${h}"></b></td><td data-i18n="${look}"></td><td data-i18n="${sc}"></td></tr>`;
  return `
  <div class="goal" data-i18n-html="goal"></div>
  <div class="note" data-i18n-html="howto"></div>

  <h2 data-i18n="accom.h"></h2>
  <p data-i18n-html="accom.p"></p>

  <h2 data-i18n="domains.h"></h2>
  <div class="grid">
${dom('dom.listen.h', 'dom.listen.tag', 'dom.listen.exp', 'dom.listen.apply')}
${dom('dom.speak.h', 'dom.speak.tag', 'dom.speak.exp', 'dom.speak.apply')}
${dom('dom.read.h', 'dom.read.tag', 'dom.read.exp', 'dom.read.apply')}
${dom('dom.write.h', 'dom.write.tag', 'dom.write.exp', 'dom.write.apply')}
  </div>

  <h2 data-i18n="levels.h"></h2>
  <p data-i18n="levels.intro"></p>
  <table>
    <tr><th data-i18n="levels.th.level"></th><th data-i18n="levels.th.look"></th><th data-i18n="levels.th.scaffold"></th></tr>
${lvl('lvl.pre.h', 'lvl.pre.look', 'lvl.pre.scaffold')}
${lvl('lvl.beg.h', 'lvl.beg.look', 'lvl.beg.scaffold')}
${lvl('lvl.int.h', 'lvl.int.look', 'lvl.int.scaffold')}
${lvl('lvl.high.h', 'lvl.high.look', 'lvl.high.scaffold')}
${lvl('lvl.adv.h', 'lvl.adv.look', 'lvl.adv.scaffold')}
  </table>
${pdnav([{ href: 'udl.html', key: 'nav.udl' }, { href: 'guide.html', key: 'nav.guide' }, { href: 'correlation.html', key: 'nav.correlation' }])}`;
}

// ---- Guide page body ----
function guideBody() {
  const sec = (h, p) => `  <h2 data-i18n="${h}"></h2>\n  <p data-i18n-html="${p}"></p>`;
  const step = (t, h, b) => `    <li><span class="t" data-i18n="${t}"></span><h4 data-i18n="${h}"></h4><p data-i18n="${b}"></p></li>`;
  const exRow = (lbl, val) => `      <tr><th data-i18n="${lbl}"></th><td data-i18n="${val}"></td></tr>`;
  return `
  <div class="note" data-i18n-html="howto"></div>
${sec('s1.h', 's1.p')}
${sec('s2.h', 's2.p')}
${sec('s3.h', 's3.p')}
${sec('s4.h', 's4.p')}
${sec('s5.h', 's5.p')}
${sec('s6.h', 's6.p')}
${sec('s7.h', 's7.p')}
${sec('s8.h', 's8.p')}

  <h2 data-i18n="s9.h"></h2>
  <p data-i18n="s9.intro"></p>
  <ol class="steps">
${step('p1.t', 'p1.h', 'p1.b')}
${step('p2.t', 'p2.h', 'p2.b')}
${step('p3.t', 'p3.h', 'p3.b')}
${step('p4.t', 'p4.h', 'p4.b')}
${step('p5.t', 'p5.h', 'p5.b')}
  </ol>

  <h2 data-i18n="s10.h"></h2>
  <div class="note" data-i18n-html="s10.list"></div>

  <h2 data-i18n="s11.h"></h2>
  <div class="note" data-i18n-html="s11.list"></div>

  <h2 data-i18n="ex.h"></h2>
  <div class="card">
    <h4 data-i18n-html="ex.name"></h4>
    <table>
${exRow('ex.lbl.bigidea', 'ex.bigidea')}
${exRow('ex.lbl.eq', 'ex.eq')}
${exRow('ex.lbl.obj', 'ex.obj')}
${exRow('ex.lbl.lang', 'ex.lang')}
${exRow('ex.lbl.vocab', 'ex.vocab')}
${exRow('ex.lbl.success', 'ex.success')}
    </table>
  </div>
${pdnav([{ href: 'udl.html', key: 'nav.udl' }, { href: 'elps.html', key: 'nav.elps' }, { href: 'correlation.html', key: 'nav.correlation' }])}`;
}

const PAGES = {
  udl:   { body: udlBody,   global: { name: 'PD_UDL', file: 'udl-core-i18n.js' }, cite: '  <p class="cite" data-i18n-html="cite"></p>' },
  elps:  { body: elpsBody,  global: { name: 'PD_ELPS', file: 'elps-core-i18n.js' }, cite: '  <p class="cite" data-i18n-html="cite"></p>' },
  guide: { body: guideBody, global: { name: 'PD_GUIDE', file: 'guide-core-i18n.js' }, cite: '' },
};

let count = 0;
for (const suite of Object.keys(SUITES)) {
  const cfg = SUITES[suite];
  for (const page of Object.keys(PAGES)) {
    const P = PAGES[page];
    const html = head(cfg) + P.body() + '\n' + foot(cfg, P.cite) + '\n' + scripts(P.global, suite, page);
    const outDir = path.join(ROOT, suite);
    fs.writeFileSync(path.join(outDir, page + '.html'), html);
    count++;
  }
}
console.log('generated ' + count + ' PD pages across ' + Object.keys(SUITES).length + ' suites');
