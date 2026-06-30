#!/usr/bin/env node
/* Structural validator for authored content. Run: node tools/validate.js [grade35|grade68|grade912] */
const fs = require('fs'), path = require('path');
const CONTENT = path.join(__dirname, 'content');
const LANGS = ['es','vi','zh','hi','ar','ur'];
const files = process.argv[2] ? [process.argv[2]+'.json'] : ['grade35.json','grade68.json','grade912.json'];
let problems = 0, activities = 0;
const warn = (slug, msg) => { console.log('  ⚠ ['+slug+'] '+msg); problems++; };

for(const f of files){
  const p = path.join(CONTENT, f);
  if(!fs.existsSync(p)){ console.log('(skip '+f+' — not present)'); continue; }
  const arr = JSON.parse(fs.readFileSync(p,'utf8'));
  console.log('== '+f+' : '+arr.length+' activities ==');
  for(const a of arr){
    activities++;
    const m = a.master;
    if(!m){ warn(a.slug,'no master'); continue; }
    if(!m.title||!m.sub||!m.missionBody) warn(a.slug,'missing header text');
    if(!m.clues || m.clues.length<4) warn(a.slug,'too few clues');
    if(!m.win||!m.win.stamp) warn(a.slug,'missing win');
    // lock structure + answers
    (m.locks||[]).forEach((lk,i)=>{
      const tag='lock'+(i+1)+'('+lk.type+')';
      if(lk.type==='digit'){ if(!/^\d+$/.test(String(lk.digitAnswer||''))) warn(a.slug,tag+' bad digitAnswer: '+lk.digitAnswer); }
      else if(lk.type==='mc'){ if(!Array.isArray(lk.options)||lk.options.length<2) warn(a.slug,tag+' needs options');
        if(typeof lk.answerIndex!=='number'||lk.answerIndex<0||lk.answerIndex>=(lk.options||[]).length) warn(a.slug,tag+' bad answerIndex'); }
      else if(lk.type==='word'){ if(!Array.isArray(lk.accepted)||!lk.accepted.length) warn(a.slug,tag+' no accepted answers'); }
      else if(lk.type==='seq'){ if(!Array.isArray(lk.pads)||!Array.isArray(lk.order)) warn(a.slug,tag+' missing pads/order');
        else { const keys=lk.pads.map(p=>p.key); if(lk.order.length!==lk.pads.length) warn(a.slug,tag+' order length != pads');
          for(const k of lk.order) if(!keys.includes(k)) warn(a.slug,tag+' order key not in pads: '+k); } }
      else if(lk.type==='multi'){ if(!Array.isArray(lk.items)||lk.items.length<3) warn(a.slug,tag+' too few items');
        else if(!lk.items.some(it=>it.strong)) warn(a.slug,tag+' no strong items'); }
      if(!lk.reason) warn(a.slug,tag+' missing reason');
    });
    const wordLockCount = (m.locks||[]).filter(l=>l.type==='word').length;
    if(!wordLockCount) warn(a.slug,'no word lock (spec asked for >=1)');
    // translations
    for(const L of LANGS){
      const lb = a.langs && a.langs[L];
      if(!lb){ warn(a.slug,'missing translation: '+L); continue; }
      if(!lb.title||!lb.missionBody) warn(a.slug,L+': missing header text');
      if((lb.clues||[]).length !== m.clues.length) warn(a.slug,L+': clues length '+(lb.clues||[]).length+' != '+m.clues.length);
      if((lb.locks||[]).length !== m.locks.length) warn(a.slug,L+': locks length '+(lb.locks||[]).length+' != '+m.locks.length);
      (m.locks||[]).forEach((lk,i)=>{
        const tlb=(lb.locks||[])[i]; if(!tlb) return;
        if(lk.type==='mc' && (tlb.options||[]).length !== lk.options.length) warn(a.slug,L+' lock'+(i+1)+': options length mismatch');
        if(lk.type==='multi' && (tlb.items||[]).length !== lk.items.length) warn(a.slug,L+' lock'+(i+1)+': items length mismatch');
        if(lk.type==='word' && (!tlb.accepted||!tlb.accepted.length)) warn(a.slug,L+' lock'+(i+1)+': no translated accepted');
      });
    }
  }
}
console.log('\n'+activities+' activities checked, '+problems+' problem(s).');
process.exit(problems?1:0);
