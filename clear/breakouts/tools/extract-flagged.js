const fs=require("fs"),path=require("path");
const LANGS=["en","es","vi","zh","hi","ar","ur"];
const FLAG=[
 ["grade35","g35-sci-matter"],["grade35","g35-ela-factopinion"],
 ["grade68","g68-ela-argument"],["grade68","g68-ela-figurative"],["grade68","g68-ss-economics"],
 ["grade912","g912-sci-energy"],["grade912","g912-ela-sources"],
];
const out=[];
for(const [g,slug] of FLAG){
  const arr=JSON.parse(fs.readFileSync(path.join("tools/content",g+".json"),"utf8"));
  const a=arr.find(x=>x.slug===slug);
  const idx=a.master.locks.findIndex(l=>l.type==="seq");
  const lk=a.master.locks[idx];
  const pads=lk.order.map(k=>{const p=lk.pads.find(x=>x.key===k);return p.label||p.key;});
  const qByLang={en:lk.q};
  for(const L of LANGS.slice(1)){
    const tl=a.langs&&a.langs[L]&&a.langs[L].locks&&a.langs[L].locks[idx];
    if(tl&&tl.q)qByLang[L]=tl.q;
  }
  out.push({slug, grade:g, lockIndex:idx, padOrder:pads, currentQ:qByLang});
}
fs.writeFileSync("/tmp/flagged.json",JSON.stringify(out,null,1));
console.log("extracted "+out.length+" locks -> /tmp/flagged.json");
out.forEach(o=>console.log("  "+o.slug+" lock#"+o.lockIndex+" pads: "+o.padOrder.join(" | ")));
