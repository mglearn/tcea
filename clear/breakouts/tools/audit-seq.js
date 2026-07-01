// Flag seq locks whose English question enumerates the answer order (giveaway).
const fs=require("fs"),path=require("path");
const STOP=new Set("the a an and or to of in on it is if can you your then first next last step steps order tap put place them each one two three four from into by for with this that decide choose find name see look ask label using".split(" "));
let flagged=[],total=0;
for(const g of ["grade35","grade68","grade912"]){
  const p=path.join("tools/content",g+".json");
  if(!fs.existsSync(p))continue;
  for(const a of JSON.parse(fs.readFileSync(p,"utf8"))){
    (a.master.locks||[]).forEach((lk)=>{
      if(lk.type!=="seq")return; total++;
      const q=(lk.q||"").toLowerCase().replace(/[^a-z0-9 ]/g," ");
      const ordered=lk.order.map(k=>{const pad=lk.pads.find(x=>x.key===k)||{};return (pad.label||pad.key||"").toLowerCase().replace(/[^a-z0-9 ]/g," ");});
      // distinctive content words per label
      const words=ordered.map(l=>l.split(/\s+/).filter(w=>w.length>2&&!STOP.has(w)));
      let pos=-1,hits=0,inOrder=true;
      for(const cand of words){
        let found=-1; for(const w of cand){const idx=q.indexOf(w,pos+1); if(idx>=0){found=idx;break;}}
        if(found>=0){hits++; if(found<pos)inOrder=false; pos=found;} else inOrder=false;
      }
      const ratio=hits/ordered.length;
      const giveaway=(ratio>=0.66 && ordered.length>=3) || hits>=3;
      if(giveaway)flagged.push({slug:a.slug,lockTitle:lk.title,q:lk.q,hits,n:ordered.length});
    });
  }
}
console.log("seq locks scanned: "+total+" | flagged: "+flagged.length+"\n");
flagged.forEach(f=>{console.log("["+f.slug+"] "+f.lockTitle+"  ("+f.hits+"/"+f.n+" answer-words in Q)");console.log("  Q: "+f.q+"\n");});
