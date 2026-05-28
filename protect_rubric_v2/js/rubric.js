const STORE_KEY = 'protect_v2_review';
const SETTINGS_KEY = 'protect_v2_settings';
let RUBRIC = null;

async function loadRubric(){
  if(RUBRIC) return RUBRIC;
  const res = await fetch('data/protect-v2.json');
  RUBRIC = await res.json();
  return RUBRIC;
}

function blankReview(){
  return {
    meta:{vendor:'', productUrl:'', reviewer:'', organization:'', reviewDate:new Date().toISOString().slice(0,10), recommendationOverride:''},
    docs:{privacyPolicy:'', terms:'', addendum:'', security:'', notes:''},
    categories:{},
    ai:{used:false, provider:'', model:'', generatedAt:'', raw:''}
  };
}

function getReview(){
  try{return Object.assign(blankReview(), JSON.parse(localStorage.getItem(STORE_KEY)||'{}'));}
  catch(e){return blankReview();}
}

function saveReview(data){
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

function clearReview(){localStorage.removeItem(STORE_KEY);}

function getSettings(){
  try{return Object.assign({mode:'manual', provider:'proxy', apiKey:'', endpoint:'', model:'', temperature:0.1}, JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}'));}
  catch(e){return {mode:'manual', provider:'proxy', apiKey:'', endpoint:'', model:'', temperature:0.1};}
}

function saveSettings(s){localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));}

function totalScore(review){
  return Object.values(review.categories||{}).reduce((sum,c)=>sum+(Number(c.score)||0),0);
}

function recommendation(total){
  if(total>=12) return {range:'12–14', label:'Approve', className:'approve'};
  if(total>=9) return {range:'9–11', label:'Approve with conditions', className:'conditions'};
  if(total>=6) return {range:'6–8', label:'Hold', className:'hold'};
  return {range:'0–5', label:'Do not approve for student use', className:'deny'};
}

function escapeHtml(s=''){
  return String(s).replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function downloadFile(filename, content, type='text/plain'){
  const blob = content instanceof Blob ? content : new Blob([content], {type});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 500);
}

function slugify(s){return (s||'protect-review').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,80) || 'protect-review';}

function today(){return new Date().toISOString().slice(0,10);}
