const STORE = {
  a1Prompt:'aldoMini.activity1.prompt',
  a1Notes:'aldoMini.activity1.notes',
  a2Prompt:'aldoMini.activity2.prompt',
  a2Notes:'aldoMini.activity2.notes',
  a3Prompt:'aldoMini.activity3.prompt',
  settings:'aldoMini.settings'
};
const strategies = {
 surface:[['Jigsaw Method','0.92'],['Feedback: corrective, reinforcement, cues','0.92'],['Captions and subtitles','0.91'],['Retrieval practice','0.63'],['Differentiation','0.58'],['Direct Instruction','0.56'],['Reading strategies','0.47']],
 deep:[['Cognitive task analysis','1.09'],['Constructivist teaching','0.90'],['Feedback timing','0.89'],['Argumentation','0.86'],['Outlining and organizing','0.86'],['Evaluation and reflection','0.75'],['Design thinking','0.51']],
 transfer:[['Collective teacher efficacy','1.01'],['Jigsaw Method','0.92'],['Mathematics problem solving','0.88'],['Blended learning','0.85'],['Transfer strategies','0.75'],['Acceleration programs','0.55']]
};
function $(id){return document.getElementById(id)}
function checked(name){return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(x=>x.value)}
function val(id,fallback=''){const el=$(id); return el ? el.value.trim() || fallback : fallback}
function save(key,value){localStorage.setItem(key,value)}
function load(key,fallback=''){return localStorage.getItem(key)||fallback}
function copyText(text){navigator.clipboard.writeText(text).then(()=>toast('Copied.'))}
function copyFrom(id){copyText($(id).innerText || $(id).value)}
function toast(msg){let t=$('toast'); if(!t){alert(msg);return} t.textContent=msg; t.style.display='inline-block'; setTimeout(()=>t.style.display='none',1800)}
function downloadFile(name,text,type='text/plain'){const blob=new Blob([text],{type}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name; a.click(); URL.revokeObjectURL(a.href)}
function getRoleOutputs(role){
 if(role==='Instructional coach') return 'look-fors, modeling language, coaching questions, evidence to collect, and a short debrief protocol';
 if(role==='Instructional leader') return 'rollout pacing, success indicators, observation criteria, staff-facing talking points, and implementation risks';
 return 'lesson moves, grade-level examples, student-facing language, checks for understanding, and differentiation notes';
}
function styleClause(style){
 const map={
  'Few-shot':'Use a few-shot prompting style. Include two brief examples before generating the final plan.',
  'Chain-of-thought request':'Use a reasoning-friendly style, but summarize reasoning as concise design decisions rather than private chain-of-thought.',
  'Checklist':'Use a checklist style with clear pass/fail criteria.',
  'Rubric':'Use a rubric style with criteria, performance levels, and evidence notes.',
  'RETO':'Use RETO: Role, Expectation, Task, Output.',
  'PREPARE':'Use PREPARE: Persona, Role of user, Expected output, Parameters, Audience, References, Evaluation.',
  'Socratic':'Use a Socratic style that asks clarifying questions first, then offers a draft plan.',
  'Compare and revise':'Generate a first draft, critique it, then provide a revised version.'
 };
 return map[style] || 'Use a clear structured prompting style.';
}
function aldoText(phases){return phases.length ? phases.join(', ') : 'relationship building, pre-assessment, strategic instruction, post-assessment, reflection'}
function makeActivity1(){
 const role=val('role','Teacher'), topic=val('topic','feedback timing'), audience=val('audience','K-12 educators'), timing=val('timing','45 minutes'), style=val('style','RETO'), constraints=val('constraints','Keep it practical, classroom-ready, and readable.'), phases=checked('aldo');
 const prompt=`As a ${role.toLowerCase()} designing for ${audience}, help me create a ${timing} learning experience on "${topic}."

Use ALDO in this order: ${aldoText(phases)}.

${styleClause(style)}

Make the output role-specific. For this role, include ${getRoleOutputs(role)}.

Constraints:
${constraints}

After the draft, add a section titled "What Might Be Missing" with five gaps I should look for when I review the result.`;
 $('output').textContent=prompt; save(STORE.a1Prompt,prompt); save(STORE.settings,JSON.stringify({role,topic,audience,timing,style,constraints,phases}));
 return prompt;
}
function sendToA2(){const p=$('output').textContent.trim()||makeActivity1(); save(STORE.a1Prompt,p); save(STORE.a1Notes,val('notes','')); location.href='activity2.html'}
function initA1(){ if(!$('output'))return; $('savedPrompt').textContent=load(STORE.a1Prompt,'No Activity 1 prompt saved yet.'); $('notes').value=load(STORE.a1Notes,''); $('makeBtn').onclick=makeActivity1; $('copyBtn').onclick=()=>copyFrom('output'); $('nextBtn').onclick=sendToA2; $('saveNotes').onclick=()=>{save(STORE.a1Notes,val('notes',''));toast('Notes saved.')} }
function makeActivity2(){
 const base=load(STORE.a1Prompt,'Paste or create your Activity 1 prompt first.'); const include=checked('include2');
 let refs='Surface: '+strategies.surface.map(x=>`${x[0]} d=${x[1]}`).join('; ')+'.\nDeep: '+strategies.deep.map(x=>`${x[0]} d=${x[1]}`).join('; ')+'.\nTransfer: '+strategies.transfer.map(x=>`${x[0]} d=${x[1]}`).join('; ')+'.';
 let prompt=`Start with this Activity 1 prompt and improve the resulting plan.\n\n--- ACTIVITY 1 PROMPT ---\n${base}\n--- END ---\n\nRevise the output so it functions as a standalone webpage workflow rather than a Custom GPT, Gem, or Bot. Keep those more robust options on the radar only as an escalation path.\n\nRequired checks:\n- ROLE: Ask whether the user is designing for teachers, coaches, or leaders.\n- STRUCTURE: Follow ALDO in order.\n- AUDIENCE: Change outputs based on the selected role.\n- EVIDENCE: Use only the embedded effect-size list below. Do not invent effect sizes.\n- DEPTH: Label each task with SOLO level.\n- ESCALATION: Add a small note about when a Custom GPT, Gem, or Bot may be better.\n\nEmbedded effect-size list:\n${refs}\n\nSelected extension options: ${include.join(', ') || 'none selected'}.\n\nReturn the revised prompt plus a short validation checklist.`;
 $('output2').textContent=prompt; save(STORE.a2Prompt,prompt); return prompt;
}
function sendToA3(){const p=$('output2').textContent.trim()||makeActivity2(); save(STORE.a2Prompt,p); save(STORE.a2Notes,val('notes2','')); location.href='activity3.html'}
function initA2(){ if(!$('output2'))return; $('fromA1').textContent=load(STORE.a1Prompt,'No Activity 1 prompt found. Return to Activity 1 and click “Send to Activity 2.”'); $('notes2').value=load(STORE.a2Notes,''); $('make2').onclick=makeActivity2; $('copy2').onclick=()=>copyFrom('output2'); $('next2').onclick=sendToA3; $('saveNotes2').onclick=()=>{save(STORE.a2Notes,val('notes2',''));toast('Notes saved.')} }
function makeActivity3(){
 const base=load(STORE.a2Prompt,'Paste or create your Activity 2 prompt first.');
 const prompt=`Create a self-contained workshop webpage or starter HTML file based on the Activity 2 prompt below.\n\n--- ACTIVITY 2 PROMPT ---\n${base}\n--- END ---\n\nThe webpage must let me enter role, topic, audience, timing, and constraints. It must let me select ALDO phases, evidence prompts, SOLO depth checks, and ACE Framework sentence stems.\n\nRequired page behavior:\n1. Generate or assemble a plan from the page inputs.\n2. Export the result as Markdown, JSON, and print/save-to-PDF.\n3. Show a comparison area where I paste the Activity 1 draft and compare it to the final generated plan.\n4. Run these internal checks:\n   - Which named strategies appear?\n   - What is the effect size from the embedded list?\n   - Are any below d = 0.40?\n   - Does the plan balance surface, deep, and transfer?\n   - Where is feedback timed, and to whom?\n5. If requested, show how the result appears in SOLO Taxonomy and ACE Framework format, including sentence stems for Articulate, Connect, and Extend.\n\nDesign requirements:\n- TCEA blue and gold visual style.\n- Minimum font size: 18px.\n- Clear navigation.\n- No server required.\n- Store progress locally in the browser.\n- Keep Custom GPTs, Gems, or Bots as optional escalation, not the default workflow.`;
 $('output3').textContent=prompt; save(STORE.a3Prompt,prompt); return prompt;
}
function exportAll(){const data={activity1Prompt:load(STORE.a1Prompt),activity1Notes:load(STORE.a1Notes),activity2Prompt:load(STORE.a2Prompt),activity2Notes:load(STORE.a2Notes),activity3Prompt:load(STORE.a3Prompt),exportedAt:new Date().toISOString()}; downloadFile('aldo-prompt-studio-workflow.json',JSON.stringify(data,null,2),'application/json')}
function initA3(){ if(!$('output3'))return; $('fromA2').textContent=load(STORE.a2Prompt,'No Activity 2 prompt found. Return to Activity 2 and click “Send to Activity 3.”'); $('make3').onclick=makeActivity3; $('copy3').onclick=()=>copyFrom('output3'); $('exportJson').onclick=exportAll; $('printPage').onclick=()=>window.print() }
function initExamples(){document.querySelectorAll('[data-copy]').forEach(btn=>btn.onclick=()=>copyText(btn.parentElement.querySelector('pre').innerText))}
function initRefs(){ if(!$('resetAll'))return; $('resetAll').onclick=()=>{if(confirm('Clear saved local progress for this mini-site?')){Object.values(STORE).forEach(k=>localStorage.removeItem(k));toast('Progress cleared.')}}}
document.addEventListener('DOMContentLoaded',()=>{initA1();initA2();initA3();initExamples();initRefs();});
