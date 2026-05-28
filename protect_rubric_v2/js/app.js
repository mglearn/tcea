function renderNav(active){
  const nav = document.querySelector('.nav');
  if(!nav) return;
  const items = [
    ['index.html','Home'],['review.html','Review'],['report.html','Report'],['infographic.html','Infographic'],['settings.html','AI Settings'],['help.html','Help']
  ];
  nav.innerHTML = items.map(([href,label])=>`<a class="${active===href?'active':''}" href="${href}">${label}</a>`).join('');
}

async function initHome(){
  renderNav('index.html');
  const r = await loadRubric();
  document.getElementById('catGrid').innerHTML = r.categories.map(c=>`
    <div class="card category">
      <div class="num">${c.number}</div>
      <div><h3>${c.code} — ${c.name}</h3><p class="small">${c.lookForShort}</p></div>
    </div>`).join('');
}

async function initReview(){
  renderNav('review.html');
  const r = await loadRubric();
  const review = getReview();
  ['vendor','productUrl','reviewer','organization','reviewDate'].forEach(k=>{const el=document.getElementById(k); if(el) el.value=review.meta[k]||'';});
  const allText = review.docs.allText || [review.docs.privacyPolicy, review.docs.terms, review.docs.addendum, review.docs.security].filter(Boolean).join('\n\n');
  const allTextEl = document.getElementById('allText');
  if(allTextEl) allTextEl.value = allText;
  const box = document.getElementById('reviewCategories');
  box.innerHTML = r.categories.map(c=>{
    const saved = review.categories[c.number] || {};
    return `<section class="card review-card simple-review-card" data-cat="${c.number}">
      <div>
        <h3><span class="score-badge">${c.code}</span> ${c.name}</h3>
        <p class="small">${escapeHtml(c.lookForShort)}</p>
        <p class="small auto-reason">${escapeHtml(saved.reason || 'Paste vendor text and run analysis.')}</p>
      </div>
      <div>
        <label>Score</label>
        <select class="score-select">
          <option value="">Not scored</option>
          <option value="0" ${saved.score==0?'selected':''}>0</option>
          <option value="1" ${saved.score==1?'selected':''}>1</option>
          <option value="2" ${saved.score==2?'selected':''}>2</option>
        </select>
      </div>
    </section>`;
  }).join('');
  updateTotal();
  document.querySelectorAll('input,textarea,select').forEach(el=>el.addEventListener('input',()=>{collectReview(); updateTotal();}));
  document.getElementById('saveBtn').onclick=()=>{collectReview(true); showStatus('Saved in this browser.');};
  document.getElementById('clearBtn').onclick=()=>{if(confirm('Clear this review from this browser?')){clearReview(); location.reload();}};
  document.getElementById('reportBtn').onclick=()=>{collectReview(true); location.href='report.html';};
  const analyzeAndReport = ()=>{if(analyzeReviewText(r)===false) return; collectReview(true); updateTotal(); location.href='report.html';};
  document.getElementById('analyzeBtn').onclick=analyzeAndReport;
  document.getElementById('analyzePasteBtn').onclick=analyzeAndReport;
  if(allText.trim() && !Object.keys(review.categories||{}).length){ analyzeReviewText(r); collectReview(true); updateTotal(); }
}

function collectReview(save=false){
  const review = getReview();
  ['vendor','productUrl','reviewer','organization','reviewDate'].forEach(k=>{const el=document.getElementById(k); if(el) review.meta[k]=el.value.trim();});
  const allTextEl = document.getElementById('allText');
  if(allTextEl){
    review.docs.allText = allTextEl.value;
    review.docs.privacyPolicy = allTextEl.value;
    review.docs.terms = '';
    review.docs.addendum = '';
    review.docs.security = '';
    review.docs.notes = '';
  }
  review.categories = review.categories || {};
  document.querySelectorAll('[data-cat]').forEach(sec=>{
    const n = sec.dataset.cat;
    const existing = review.categories[n] || {};
    review.categories[n] = {
      score: sec.querySelector('.score-select').value,
      evidence: '',
      gaps: '',
      reason: sec.querySelector('.auto-reason')?.textContent || existing.reason || ''
    };
  });
  if(save) saveReview(review);
  return review;
}

function updateTotal(){
  const review = collectReview(false);
  const total = totalScore(review); const rec = recommendation(total);
  const el = document.getElementById('liveTotal');
  if(el) el.innerHTML = `<strong>${total}/14</strong> — ${rec.label}`;
}

function analyzeReviewText(rubric){
  const text = (document.getElementById('allText')?.value || '').toLowerCase();
  if(!text.trim()){ showStatus('Paste vendor text before analyzing.', true); return false; }
  const rules = {
    1: [
      {label:'parent/student access, correction, deletion, or export rights', terms:['access', 'correct', 'correction', 'delete', 'deletion', 'export', 'parent', 'eligible student']},
      {label:'request process or response timeline', terms:['request', 'days', 'school days', 'calendar days', 'portal', 'email', 'contact']},
      {label:'COPPA, FERPA, or parental consent handling', terms:['coppa', 'ferpa', 'parental consent', 'verifiable parental consent']}
    ],
    2: [
      {label:'retention, deletion, destruction, or return language', terms:['retain', 'retention', 'delete', 'deletion', 'destroy', 'destruction', 'return']},
      {label:'termination, backup, or de-identification handling', terms:['termination', 'backup', 'de-identified', 'deidentified', 'aggregate']},
      {label:'specific timing, schedule, request, or account-closure process', terms:['days', 'schedule', 'upon request', 'account closure']}
    ],
    3: [
      {label:'opt-out, do-not-sell/share, or targeted advertising limits', terms:['opt out', 'opt-out', 'do not sell', 'do not share', 'targeted advertising']},
      {label:'profiling, behavioral tracking, or browser privacy signal limits', terms:['profiling', 'behavioral', 'tracking', 'global privacy control', 'do not track']},
      {label:'AI, model training, or machine-learning use of student data', terms:['ai training', 'model training', 'machine learning', 'student data']}
    ],
    4: [
      {label:'data collection or student information categories', terms:['collect', 'collected', 'personal information', 'student information', 'data categories']},
      {label:'third parties, subprocessors, service providers, or affiliates', terms:['subprocessor', 'third party', 'third-party', 'service provider', 'affiliate']},
      {label:'hosting, data residency, update date, or policy-change notice', terms:['hosting', 'data residency', 'last updated', 'effective date', 'changes to this policy']}
    ],
    5: [
      {label:'encryption, HTTPS, TLS, at-rest, or in-transit protection', terms:['encrypt', 'encryption', 'https', 'tls', 'ssl', 'at rest', 'in transit']},
      {label:'breach, incident, notification, or unauthorized-access process', terms:['breach', 'incident', 'notification', 'unauthorized access']},
      {label:'access controls, audit logs, MFA, or security measures', terms:['access control', 'audit log', 'multi-factor', 'mfa', 'security measures']}
    ],
    6: [
      {label:'COPPA, under-13, children, minors, or age-band language', terms:['coppa', 'under 13', 'under thirteen', 'children', 'minor', 'age']},
      {label:'parental, school, FERPA, or school-official consent pathway', terms:['consent', 'parental consent', 'school consent', 'ferpa', 'school official']},
      {label:'age-appropriate design, default privacy, guardians, or dark-pattern limits', terms:['age appropriate', 'dark patterns', 'default privacy', 'guardian']}
    ],
    7: [
      {label:'subprocessors, third parties, or service providers', terms:['subprocessor', 'sub-processors', 'third party', 'third-party', 'service provider']},
      {label:'30-day notice, objection path, or material-change notice', terms:['30 days', 'thirty days', 'notice', 'objection', 'material change']},
      {label:'flow-down standards, DPA, or cross-border transfer handling', terms:['same standards', 'flow down', 'data processing agreement', 'dpa', 'cross-border']}
    ]
  };

  rubric.categories.forEach(c=>{
    const groups = rules[c.number] || [];
    const matched = groups.map(group=>({label:group.label, terms:group.terms.filter(term=>text.includes(term))}));
    const groupHits = matched.filter(group=>group.terms.length).length;
    const totalHits = matched.reduce((sum, group)=>sum+group.terms.length, 0);
    let score = 0;
    if(groupHits >= 3 && totalHits >= 6) score = 2;
    else if(groupHits >= 1 && totalHits >= 2) score = 1;
    const sec = document.querySelector(`[data-cat="${c.number}"]`);
    if(!sec) return;
    sec.querySelector('.score-select').value = String(score);
    const matchedLabels = matched.filter(group=>group.terms.length).map(group=>`${group.label} (${group.terms.slice(0,4).join(', ')})`);
    const missingLabels = matched.filter(group=>!group.terms.length).map(group=>group.label);
    const reason = score === 2
      ? `Estimated 2: found ${matchedLabels.join('; ')}.`
      : score === 1
        ? `Estimated 1: found ${matchedLabels.join('; ')}. Missing or weak signals: ${missingLabels.join('; ') || 'none detected by this local scan'}.`
        : `Estimated 0: did not find clear signals for ${groups.map(group=>group.label).join('; ')}.`;
    sec.querySelector('.auto-reason').textContent = reason;
  });
  return true;
}

function showStatus(msg, err=false){
  const el = document.getElementById('status');
  if(!el) return; el.textContent = msg; el.className = 'status' + (err?' err':''); el.classList.remove('hidden');
  setTimeout(()=>el.classList.add('hidden'), 5000);
}
