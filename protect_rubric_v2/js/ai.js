function buildAIPrompt(review, rubric){
  return `You are assisting with a PROTECT Rubric v2.0 privacy review. Score each category 0, 1, or 2. You must quote supporting evidence from the supplied documents. If evidence is missing, say so and do not invent it. Return ONLY valid JSON matching this shape: {"categories":[{"number":1,"score":0,"evidence":"quoted evidence or missing evidence note","gaps":"specific gaps","confidence":"low|medium|high"}],"summary":"brief summary","conflicts":"conflicts found"}.

Rubric categories:
${rubric.categories.map(c=>`${c.number}. ${c.code} — ${c.name}\nLook for: ${c.lookForShort}\n0: ${c.levels[0]}\n1: ${c.levels[1]}\n2: ${c.levels[2]}`).join('\n\n')}

Vendor: ${review.meta.vendor}
Product URL: ${review.meta.productUrl}

PRIVACY POLICY:\n${review.docs.privacyPolicy}\n\nTERMS OF SERVICE:\n${review.docs.terms}\n\nADDENDUM / NDPA:\n${review.docs.addendum}\n\nSECURITY / COMPLIANCE DOCUMENT:\n${review.docs.security}`;
}

async function runAIAssist(){
  const settings = getSettings();
  const review = getReview();
  const rubric = await loadRubric();
  if(settings.mode==='manual'){ showStatus('AI Assist is disabled. Open AI Settings to configure it.', true); return; }
  if(!review.docs.privacyPolicy && !review.docs.terms && !review.docs.addendum && !review.docs.security){ showStatus('Paste at least one document before running AI Assist.', true); return; }
  showStatus('Running AI-assisted draft scoring...');
  const prompt = buildAIPrompt(review, rubric);
  try{
    let text = '';
    if(settings.provider==='proxy') text = await callProxy(settings, prompt);
    else if(settings.provider==='openai') text = await callOpenAI(settings, prompt);
    else if(settings.provider==='gemini') text = await callGemini(settings, prompt);
    else if(settings.provider==='ollama') text = await callOllama(settings, prompt);
    else throw new Error('Unsupported provider.');
    const json = parseJsonLoose(text);
    applyAIResult(json, settings);
    showStatus('AI draft applied. Verify every score and quote before exporting.');
  }catch(err){ console.error(err); showStatus(`AI Assist failed: ${err.message}`, true); }
}

async function callProxy(settings, prompt){
  if(!settings.endpoint) throw new Error('Proxy endpoint is missing.');
  const res = await fetch(settings.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt, model:settings.model||undefined, temperature:Number(settings.temperature)||0.1})});
  if(!res.ok) throw new Error(`Proxy returned ${res.status}`);
  const data = await res.json(); return data.text || data.result || data.content || JSON.stringify(data);
}

async function callOpenAI(settings, prompt){
  if(!settings.apiKey) throw new Error('OpenAI API key is missing.');
  const res = await fetch('https://api.openai.com/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${settings.apiKey}`},body:JSON.stringify({model:settings.model||'gpt-4o-mini',temperature:Number(settings.temperature)||0.1,messages:[{role:'user',content:prompt}],response_format:{type:'json_object'}})});
  if(!res.ok) throw new Error(`OpenAI returned ${res.status}`);
  const data = await res.json(); return data.choices?.[0]?.message?.content || '';
}

async function callGemini(settings, prompt){
  if(!settings.apiKey) throw new Error('Gemini API key is missing.');
  const model = settings.model || 'gemini-1.5-flash';
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(settings.apiKey)}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts:[{text:prompt}]}],generationConfig:{temperature:Number(settings.temperature)||0.1,responseMimeType:'application/json'}})});
  if(!res.ok) throw new Error(`Gemini returned ${res.status}`);
  const data = await res.json(); return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

async function callOllama(settings, prompt){
  if(!settings.endpoint) throw new Error('Ollama endpoint is missing, for example http://localhost:11434/api/generate');
  const res = await fetch(settings.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:settings.model||'llama3.1',prompt,stream:false,format:'json',options:{temperature:Number(settings.temperature)||0.1}})});
  if(!res.ok) throw new Error(`Ollama returned ${res.status}`);
  const data = await res.json(); return data.response || JSON.stringify(data);
}

function parseJsonLoose(text){
  try{return JSON.parse(text);}catch(e){
    const m = String(text).match(/\{[\s\S]*\}/); if(m) return JSON.parse(m[0]); throw new Error('AI did not return valid JSON.');
  }
}

function applyAIResult(json, settings){
  const review = getReview();
  (json.categories||[]).forEach(item=>{
    const n = String(item.number);
    review.categories[n] = review.categories[n] || {};
    review.categories[n].score = String(item.score ?? '');
    review.categories[n].evidence = item.evidence || '';
    review.categories[n].gaps = item.gaps || '';
  });
  review.ai = {used:true, provider:settings.provider, model:settings.model||'', generatedAt:new Date().toISOString(), raw:JSON.stringify(json,null,2)};
  saveReview(review);
  location.reload();
}
