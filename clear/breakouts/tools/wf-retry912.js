export const meta = {
  name: 'author-g912-retry',
  description: 'Author TEKS-aligned critical-thinking breakouts (English) and translate each to 6 languages',
  phases: [
    { title: 'Author', detail: 'English master + answers per activity' },
    { title: 'Translate', detail: 'es, vi, zh, hi, ar, ur per activity' },
  ],
}

/* ---------- 36 activity specs (12 per grade band) ---------- */
const SPECS = [
  // Grades 3–5
  {slug:'g35-sci-lifecycle', grade:'grade35', subject:'Science', topic:'Animal life cycles & metamorphosis (egg→larva→pupa→adult); what evidence shows a stage', teks:'Science 3.10A / 2.10C'},
  {slug:'g35-sci-matter', grade:'grade35', subject:'Science', topic:'States of matter and changes (solid/liquid/gas; melting, freezing, evaporation)', teks:'Science 5.5A / 3.5'},
  {slug:'g35-sci-foodchain', grade:'grade35', subject:'Science', topic:'Food chains: producers, consumers, decomposers and energy flow', teks:'Science 4.9A / 5.9'},
  {slug:'g35-sci-weather', grade:'grade35', subject:'Science', topic:'Weather observation, tools, and the water cycle', teks:'Science 3.8 / 4.8'},
  {slug:'g35-ela-mainidea', grade:'grade35', subject:'ELA', topic:'Main idea vs. supporting details in a short passage', teks:'ELA 4.6G / 3.6'},
  {slug:'g35-ela-factopinion', grade:'grade35', subject:'ELA', topic:'Telling fact from opinion; signal words', teks:'ELA 4.9 / inference'},
  {slug:'g35-ela-sequence', grade:'grade35', subject:'ELA', topic:'Story sequence / plot order (beginning, middle, end; signal words)', teks:'ELA 3.8 / 4.8'},
  {slug:'g35-ela-context', grade:'grade35', subject:'ELA', topic:'Using context clues to figure out an unknown word', teks:'ELA 4.3B'},
  {slug:'g35-ss-mapskills', grade:'grade35', subject:'Social Studies', topic:'Map skills: compass rose / cardinal directions, map key/legend', teks:'Social Studies 4.6 (geography)'},
  {slug:'g35-ss-economics', grade:'grade35', subject:'Social Studies', topic:'Goods and services; needs vs. wants; scarcity', teks:'Social Studies 3.6 / 4.12'},
  {slug:'g35-ss-government', grade:'grade35', subject:'Social Studies', topic:'Why we have rules and laws; local government & community helpers', teks:'Social Studies 3.9 / 4.14'},
  {slug:'g35-ss-texas', grade:'grade35', subject:'Social Studies', topic:'Texas symbols and important historical figures; ordering events on a timeline', teks:'Social Studies 4.1 / 4.2'},
  // Grades 6–8
  {slug:'g68-sci-cells', grade:'grade68', subject:'Science', topic:'Cells and organelles; plant vs animal cell; function follows structure', teks:'Science 7.12D'},
  {slug:'g68-sci-watercycle', grade:'grade68', subject:'Science', topic:'Water cycle and Earth systems interactions', teks:'Science 6.x / 8.10'},
  {slug:'g68-sci-forces', grade:'grade68', subject:'Science', topic:"Forces & motion; Newton's laws; balanced vs unbalanced forces", teks:'Science 8.6 / 6.8'},
  {slug:'g68-sci-ecosystems', grade:'grade68', subject:'Science', topic:'Ecosystems, food webs, energy pyramids; producers/consumers', teks:'Science 7.10 / 7.5'},
  {slug:'g68-ela-authorspurpose', grade:'grade68', subject:'ELA', topic:"Author's purpose (Persuade, Inform, Entertain) from text evidence", teks:'ELA 6.9 / 7.9'},
  {slug:'g68-ela-theme', grade:'grade68', subject:'ELA', topic:'Theme and inference vs. summary; supporting with evidence', teks:'ELA 7.7 / 6.6'},
  {slug:'g68-ela-argument', grade:'grade68', subject:'ELA', topic:'Claim, evidence, reasoning; relevant vs irrelevant support', teks:'ELA 8.10 / 8.9'},
  {slug:'g68-ela-figurative', grade:'grade68', subject:'ELA', topic:'Figurative language: simile, metaphor, personification, hyperbole', teks:'ELA 6.8 / 7.8'},
  {slug:'g68-ss-sources', grade:'grade68', subject:'Social Studies', topic:'Primary vs. secondary sources; evaluating reliability', teks:'Social Studies 8.29 / 6.21'},
  {slug:'g68-ss-texashistory', grade:'grade68', subject:'Social Studies', topic:'Texas Revolution: ordering key events; cause and effect', teks:'Social Studies 7.3 (Texas history)'},
  {slug:'g68-ss-economics', grade:'grade68', subject:'Social Studies', topic:'Supply & demand, scarcity, opportunity cost', teks:'Social Studies 7.12 / economics'},
  {slug:'g68-ss-constitution', grade:'grade68', subject:'Social Studies', topic:'U.S. Constitution: three branches, checks & balances, Bill of Rights', teks:'Social Studies 8.15 / 8.17'},
  // Grades 9–12
  {slug:'g912-sci-genetics', grade:'grade912', subject:'Science', topic:'DNA, alleles, dominant/recessive, Punnett squares & probability', teks:'Biology 6F/6G'},
  {slug:'g912-sci-periodic', grade:'grade912', subject:'Science', topic:'Periodic table trends; physical vs chemical change; evidence of reaction', teks:'Chemistry 5 / 6'},
  {slug:'g912-sci-energy', grade:'grade912', subject:'Science', topic:'Energy, work, forces & motion; conservation of energy; reading motion graphs', teks:'Physics 4 / IPC 4'},
  {slug:'g912-sci-expdesign', grade:'grade912', subject:'Science', topic:'Experimental design: independent/dependent/controlled variables, controls, sample size', teks:'Biology 2 / IPC 2'},
  {slug:'g912-ela-rhetoric', grade:'grade912', subject:'ELA', topic:'Rhetorical appeals: ethos, pathos, logos in persuasive text', teks:'English I 8 / English II'},
  {slug:'g912-ela-fallacies', grade:'grade912', subject:'ELA', topic:'Logical fallacies (ad hominem, strawman, false dilemma, slippery slope, bandwagon)', teks:'English II 9 / English I'},
  {slug:'g912-ela-sources', grade:'grade912', subject:'ELA', topic:'Evaluating source credibility and bias for research', teks:'English I 12 / English II 12'},
  {slug:'g912-ela-tone', grade:'grade912', subject:'ELA', topic:'Tone and diction; using textual evidence to infer author attitude', teks:'English I 5 / English II 5'},
  {slug:'g912-ss-government', grade:'grade912', subject:'Social Studies', topic:'Separation of powers, checks & balances, Bill of Rights application', teks:'U.S. Government 7 / 8'},
  {slug:'g912-ss-economics', grade:'grade912', subject:'Social Studies', topic:'Supply & demand, opportunity cost, market vs command economies', teks:'Economics 5 / 8'},
  {slug:'g912-ss-history', grade:'grade912', subject:'Social Studies', topic:'Cause and effect & chronological reasoning (e.g., causes leading to a major conflict)', teks:'U.S. History 1 / 29'},
  {slug:'g912-ss-geography', grade:'grade912', subject:'Social Studies', topic:'Evaluating evidence and reasoning in a geographic/policy claim', teks:'World Geography 8 / 21'},
]

const TRANS_LANGS = ['es','vi','zh','hi','ar','ur']
const LANG_NAMES = {es:'Spanish', vi:'Vietnamese', zh:'Simplified Chinese', hi:'Hindi (Devanagari script)', ar:'Arabic', ur:'Urdu (Nastaliq/Arabic script)'}

/* ---------- schemas ---------- */
const LOCK_SCHEMA = {
  type:'object', additionalProperties:false, required:['type','title','q','reason'],
  properties:{
    type:{type:'string', enum:['digit','mc','word','seq','multi']},
    title:{type:'string'}, q:{type:'string'}, reason:{type:'string'},
    digitAnswer:{type:'string', description:'digits only, for type=digit'},
    options:{type:'array', items:{type:'string'}, description:'3-4 choices, for type=mc'},
    answerIndex:{type:'integer', description:'index of correct option, for type=mc'},
    accepted:{type:'array', items:{type:'string'}, description:'accepted answers (lowercase variants), for type=word'},
    pads:{type:'array', items:{type:'object', additionalProperties:false, required:['key','emoji','label'], properties:{key:{type:'string'}, emoji:{type:'string'}, label:{type:'string'}}}, description:'3-4 tappable items, for type=seq'},
    order:{type:'array', items:{type:'string'}, description:'correct order of pad keys, for type=seq'},
    items:{type:'array', items:{type:'object', additionalProperties:false, required:['text','strong'], properties:{text:{type:'string'}, strong:{type:'boolean'}}}, description:'4-5 items; strong=true are correct picks, for type=multi'},
  }
}
const MASTER_SCHEMA = {
  type:'object', additionalProperties:false,
  required:['teks','icon','title','sub','missionTitle','missionBody','clues','locks','win'],
  properties:{
    teks:{type:'string', description:'specific TEKS code(s) addressed'},
    icon:{type:'string', description:'one emoji representing the activity'},
    title:{type:'string'}, sub:{type:'string', description:'1-2 sentence hook'},
    missionTitle:{type:'string'}, missionBody:{type:'string', description:'the scenario / mission brief'},
    clues:{type:'array', minItems:4, maxItems:6, items:{type:'object', additionalProperties:false, required:['ico','nm','title','body'], properties:{ico:{type:'string', description:'one emoji'}, nm:{type:'string', description:'short label'}, title:{type:'string'}, body:{type:'string'}}}},
    locks:{type:'array', minItems:4, maxItems:5, items:LOCK_SCHEMA},
    win:{type:'object', additionalProperties:false, required:['stamp','h2','p'], properties:{stamp:{type:'string', description:'short uppercase badge with a check, e.g. CASE CLOSED ✓'}, h2:{type:'string'}, p:{type:'string'}}},
  }
}
const LANGBLOCK = {
  type:'object', additionalProperties:false,
  required:['title','sub','missionTitle','missionBody','clues','locks','win'],
  properties:{
    title:{type:'string'}, sub:{type:'string'}, missionTitle:{type:'string'}, missionBody:{type:'string'},
    clues:{type:'array', items:{type:'object', additionalProperties:false, required:['nm','title','body'], properties:{nm:{type:'string'}, title:{type:'string'}, body:{type:'string'}}}},
    locks:{type:'array', items:{type:'object', additionalProperties:false, required:['title','q','reason'], properties:{title:{type:'string'}, q:{type:'string'}, reason:{type:'string'}, options:{type:'array', items:{type:'string'}}, accepted:{type:'array', items:{type:'string'}}, items:{type:'array', items:{type:'string'}}}}},
    win:{type:'object', additionalProperties:false, required:['stamp','h2','p'], properties:{stamp:{type:'string'}, h2:{type:'string'}, p:{type:'string'}}},
  }
}
const TRANS_SCHEMA = {
  type:'object', additionalProperties:false, required:TRANS_LANGS,
  properties:Object.fromEntries(TRANS_LANGS.map(c => [c, LANGBLOCK])),
}

/* ---------- prompts ---------- */
function authorPrompt(s){
  return `You are an expert Texas teacher and instructional designer. Author ONE self-contained "digital breakout" critical-thinking activity.

Grade band: ${s.grade.replace('grade','').replace('35','3-5').replace('68','6-8').replace('912','9-12')}
Subject: ${s.subject}
Topic: ${s.topic}
Target TEKS: ${s.teks} (choose the specific code(s) and put them in the "teks" field).

The activity is an escape-room style puzzle. Students open CLUES (evidence cards) and then solve LOCKS using ONLY what the clues prove. The whole point is reasoning: every lock answer MUST be derivable strictly from the clues — never from outside knowledge or guessing.

Requirements:
- Reading level and vocabulary appropriate for this grade band.
- 4 to 6 clues. Each has one emoji (ico), a short name (nm), a title, and a body. Include exactly ONE decoy/irrelevant clue that contains no useful information, to teach students to notice irrelevant information.
- 4 OR 5 locks. Use a VARIETY of these lock types and include at least one "word" lock and at least one "seq" or "multi" lock:
  * digit  — a number the student computes/counts from the clues. Set digitAnswer to the digits as a string (e.g. "4" or "12").
  * mc     — multiple choice. Provide 3-4 options and answerIndex (0-based) of the evidence-supported answer.
  * word   — type the answer. Provide accepted: an array of lowercase acceptable answers including common variants/synonyms/spellings.
  * seq    — tap items in the right order. Provide pads (3-4 items, each {key, emoji, label}) and order (array of the keys in correct order).
  * multi  — select every correct item. Provide items (4-5 {text, strong}); strong=true marks the correct picks (at least 2 strong, plus believable noise).
- Each lock has a "reason": a short "why" that explains the reasoning (1-2 sentences), so the thinking sticks.
- Title: catchy and themed. sub: a 1-2 sentence hook. missionTitle + missionBody: the scenario/brief.
- win: a short uppercase stamp ending with ✓, a celebratory h2, and a p that names the reasoning skill they practiced.
- Make it genuinely fun and concrete (a story/scenario), not a worksheet.

Return ONLY the structured object.`
}

function transPrompt(s, master){
  return `You are a professional educational translator and a native speaker of each target language. Translate the following English breakout activity into all 6 languages: ${TRANS_LANGS.map(c=>c+' = '+LANG_NAMES[c]).join(', ')}.

Rules:
- Translate ALL human-readable text naturally, at the same grade-appropriate reading level, keeping meaning and the puzzle logic intact.
- Preserve array LENGTH and ORDER exactly. clues[] must map 1:1 to the English clues; locks[] must map 1:1 to the English locks (same index = same lock). For each lock provide ONLY the fields that apply: translate "options" (same count/order) for multiple-choice locks; translate "items" (same count/order, text only) for select-all locks; for a "word" lock provide "accepted" = acceptable answers in THAT language (lowercase, include natural variants). Do NOT include options/items/accepted for locks that don't use them.
- Do NOT translate or alter emoji. Do NOT output keys, order arrays, answerIndex, or strong flags — only the visible text.
- Chinese = Simplified. Hindi = Devanagari script. Urdu = Nastaliq (Arabic script). Arabic and Urdu will be shown right-to-left automatically; just write natural text.
- Numbers stay as numerals where the English uses numerals.

English activity (JSON):
${JSON.stringify(master)}

Return ONLY the structured object with keys ${TRANS_LANGS.join(', ')}.`
}

/* ---------- run ---------- */
const grade = 'grade912'
const ONLY=['g912-ss-government','g912-ss-economics','g912-ss-history']
const items = SPECS.filter(s => s.grade === grade && ONLY.includes(s.slug))
log(`Authoring ${items.length} activities for ${grade} (author → translate)`)

const results = await pipeline(items,
  (spec) => agent(authorPrompt(spec), {label:`author:${spec.slug}`, phase:'Author', schema:MASTER_SCHEMA})
              .then(master => ({spec, master})),
  (prev) => {
    if(!prev || !prev.master) return null
    const {spec, master} = prev
    return agent(transPrompt(spec, master), {label:`translate:${spec.slug}`, phase:'Translate', schema:TRANS_SCHEMA})
      .then(tr => ({
        slug: spec.slug, grade: spec.grade, subject: spec.subject,
        teks: master.teks || spec.teks, icon: master.icon || '🧠',
        master: {title:master.title, sub:master.sub, missionTitle:master.missionTitle, missionBody:master.missionBody, clues:master.clues, locks:master.locks, win:master.win},
        langs: tr,
      }))
  }
)
return results.filter(Boolean)
