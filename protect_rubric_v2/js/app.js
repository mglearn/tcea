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
  ['privacyPolicy','terms','addendum','security','notes'].forEach(k=>{const el=document.getElementById(k); if(el) el.value=review.docs[k]||'';});
  const box = document.getElementById('reviewCategories');
  box.innerHTML = r.categories.map(c=>{
    const saved = review.categories[c.number] || {};
    return `<section class="card review-card" data-cat="${c.number}">
      <div>
        <h3><span class="score-badge">${c.code}</span> ${c.name}</h3>
        <p class="small"><strong>Regulatory anchors:</strong> ${escapeHtml(c.regulatoryAnchors)}</p>
        <details><summary><strong>What to look for</strong></summary><ul>${c.whatToLookFor.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul></details>
        <details><summary><strong>Level descriptors</strong></summary>
          <table><tr><th>Score</th><th>Descriptor</th></tr>${[0,1,2].map(n=>`<tr><td>${n}</td><td>${escapeHtml(c.levels[n])}</td></tr>`).join('')}</table>
        </details>
        <div class="field"><label>Evidence quotes / page / URL / section</label><textarea class="evidence">${escapeHtml(saved.evidence||'')}</textarea></div>
        <div class="field"><label>Gaps / remediation notes</label><textarea class="gaps">${escapeHtml(saved.gaps||'')}</textarea></div>
      </div>
      <div>
        <label>Score</label>
        <select class="score-select">
          <option value="">Not scored</option>
          <option value="0" ${saved.score==0?'selected':''}>0</option>
          <option value="1" ${saved.score==1?'selected':''}>1</option>
          <option value="2" ${saved.score==2?'selected':''}>2</option>
        </select>
        <p class="small">${escapeHtml(c.lookForShort)}</p>
      </div>
    </section>`;
  }).join('');
  updateTotal();
  document.querySelectorAll('input,textarea,select').forEach(el=>el.addEventListener('input',()=>{collectReview(); updateTotal();}));
  document.getElementById('saveBtn').onclick=()=>{collectReview(true); showStatus('Saved in this browser.');};
  document.getElementById('clearBtn').onclick=()=>{if(confirm('Clear this review from this browser?')){clearReview(); location.reload();}};
  document.getElementById('reportBtn').onclick=()=>{collectReview(true); location.href='report.html';};
  document.getElementById('aiBtn').onclick=async()=>{collectReview(true); await runAIAssist();};
  const settings = getSettings();
  if(settings.mode==='manual') document.getElementById('aiHint').textContent='AI Assist is disabled. Manual review and exports are available.';
  else document.getElementById('aiHint').textContent='AI Assist is configured. Draft scores require human verification.';
}

function collectReview(save=false){
  const review = getReview();
  ['vendor','productUrl','reviewer','organization','reviewDate'].forEach(k=>{const el=document.getElementById(k); if(el) review.meta[k]=el.value.trim();});
  ['privacyPolicy','terms','addendum','security','notes'].forEach(k=>{const el=document.getElementById(k); if(el) review.docs[k]=el.value;});
  review.categories = review.categories || {};
  document.querySelectorAll('[data-cat]').forEach(sec=>{
    const n = sec.dataset.cat;
    review.categories[n] = {
      score: sec.querySelector('.score-select').value,
      evidence: sec.querySelector('.evidence').value,
      gaps: sec.querySelector('.gaps').value
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

function showStatus(msg, err=false){
  const el = document.getElementById('status');
  if(!el) return; el.textContent = msg; el.className = 'status' + (err?' err':''); el.classList.remove('hidden');
  setTimeout(()=>el.classList.add('hidden'), 5000);
}
