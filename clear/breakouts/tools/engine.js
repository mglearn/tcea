/* Critical Thinking Breakouts — shared player engine.
   Reads a global DATA object injected per page. No external requests. */
(function(){
  const T = DATA.T;
  const CLUES = DATA.clues;
  const LOCKS = DATA.locks;
  const $ = s => document.querySelector(s);
  let solved = {};
  const opened = new Set();

  function renderClues(){
    const g = $('#clueGrid'); g.innerHTML = '';
    CLUES.forEach(c => {
      const b = document.createElement('button');
      b.className = 'clue' + (opened.has(c.id) ? ' opened' : '');
      b.innerHTML = '<div class="ico">' + c.ico + '</div><div class="nm">' + c.nm + '</div>';
      b.onclick = () => openClue(c);
      g.appendChild(b);
    });
  }
  function openClue(c){
    opened.add(c.id);
    $('#modal').innerHTML = '<div class="mico">' + c.ico + '</div><h3>' + c.title + '</h3><p>' + c.body + '</p>' +
      '<button class="closebtn" id="clueClose">' + T.gotIt + '</button>';
    $('#modal').querySelector('#clueClose').onclick = () => $('#modalBg').classList.remove('show');
    $('#modalBg').classList.add('show');
    renderClues();
  }
  $('#modalBg').onclick = e => { if(e.target.id === 'modalBg') e.currentTarget.classList.remove('show'); };

  function renderDots(){
    const d = $('#lockdots'); d.innerHTML = '';
    LOCKS.forEach(l => {
      const s = document.createElement('div');
      s.className = 'ld' + (solved[l.id] ? ' open' : '');
      s.textContent = solved[l.id] ? '🔓' : '🔒';
      d.appendChild(s);
    });
    const n = Object.keys(solved).filter(k => solved[k]).length;
    $('#pcount').textContent = T.locksOpen.replace('{n}', n).replace('{t}', LOCKS.length);
    if(n === LOCKS.length) setTimeout(showWin, 400);
  }

  function renderLocks(){
    const wrap = $('#locks'); wrap.innerHTML = '';
    LOCKS.forEach(l => {
      const card = document.createElement('div');
      card.className = 'lock' + (solved[l.id] ? ' solved' : '');
      card.id = 'card-' + l.id;
      let body = '';
      if(l.type === 'digit'){
        body = '<div class="digits">' + Array.from({length:l.len}).map((_,i) =>
          '<input class="digit" data-i="' + i + '" maxlength="1" inputmode="numeric" pattern="[0-9]">').join('') + '</div>';
      } else if(l.type === 'word'){
        body = '<input class="wordin" placeholder="' + T.typeAnswer + '">';
      } else if(l.type === 'mc'){
        body = '<div class="mc">' + l.options.map((o,i) => '<button data-i="' + i + '">' + o + '</button>').join('') + '</div>';
      } else if(l.type === 'seq'){
        body = '<div class="seq-current" id="seq-' + l.id + '">— — —</div><button class="seq-clear" data-clear>' + T.clear + '</button>' +
          '<div class="seq-pads">' + l.pads.map(p => '<button class="seqpad" data-k="' + p.k + '" style="background:' + p.c + '">' + p.e + '</button>').join('') + '</div>';
      } else if(l.type === 'multi'){
        body = '<div class="multi">' + l.items.map((o,i) =>
          '<button class="multi-opt" data-i="' + i + '"><span class="mbox"></span><span>' + o.t + '</span></button>').join('') + '</div>';
      }
      const showSubmit = l.type !== 'mc';
      card.innerHTML =
        '<div class="lk-head"><div class="lk-badge" style="background:' + l.color + '">' + l.id.replace('L','') + '</div>' +
        '<div class="lk-title">' + l.title + '</div></div>' +
        '<div class="lk-body"><div class="lk-q">' + l.q + '</div>' + body +
        (showSubmit ? '<button class="lk-submit">' + T.check + '</button>' : '') +
        '<div class="lk-feedback" data-fb></div></div>' +
        '<div class="lk-solved-msg">🔓 ' + T.solved + '</div>' +
        '<div class="reasoning" style="' + (solved[l.id] ? '' : 'display:none') + '">' + l.reason + '</div>';
      wrap.appendChild(card);
      wireLock(l, card);
    });
  }

  function wireLock(l, card){
    if(solved[l.id]) return;
    const fb = card.querySelector('[data-fb]');
    const ok = () => {
      solved[l.id] = true;
      card.classList.add('solved');
      card.querySelector('.reasoning').style.display = 'block';
      renderDots();
    };
    const fail = msg => { fb.className = 'lk-feedback bad'; fb.textContent = msg || T.fbDefault; };

    if(l.type === 'digit'){
      const inputs = [...card.querySelectorAll('.digit')];
      inputs.forEach((inp,i) => inp.addEventListener('input', () => { if(inp.value && i < inputs.length-1) inputs[i+1].focus(); }));
      card.querySelector('.lk-submit').onclick = () => {
        const val = inputs.map(x => x.value).join('');
        if(l.answer.includes(val)) ok(); else fail(T.fbDigit);
      };
    } else if(l.type === 'word'){
      const inp = card.querySelector('.wordin');
      const go = () => { const v = inp.value.trim().toLowerCase(); if(l.answer.includes(v)) ok(); else fail(T.fbWord); };
      card.querySelector('.lk-submit').onclick = go;
      inp.addEventListener('keydown', e => { if(e.key === 'Enter') go(); });
    } else if(l.type === 'mc'){
      card.querySelectorAll('.mc button').forEach(b => {
        b.onclick = () => { if(+b.dataset.i === l.answerIndex) ok(); else fail(T.fbMc); };
      });
    } else if(l.type === 'seq'){
      let seq = [];
      const disp = card.querySelector('#seq-' + l.id);
      const draw = () => { disp.textContent = seq.length ? seq.map(k => l.pads.find(p => p.k === k).e).join(' ') : '— — —'; };
      card.querySelectorAll('.seqpad').forEach(p => {
        p.onclick = () => { seq.push(p.dataset.k); if(seq.length > l.answer.length) seq = seq.slice(-l.answer.length); draw(); };
      });
      card.querySelector('[data-clear]').onclick = () => { seq = []; draw(); };
      card.querySelector('.lk-submit').onclick = () => {
        if(seq.length === l.answer.length && seq.every((k,i) => k === l.answer[i])) ok();
        else fail(T.fbSeq);
      };
    } else if(l.type === 'multi'){
      const picked = new Set();
      card.querySelectorAll('.multi-opt').forEach(b => {
        b.onclick = () => { const i = +b.dataset.i; if(picked.has(i)){ picked.delete(i); b.classList.remove('picked'); } else { picked.add(i); b.classList.add('picked'); } };
      });
      card.querySelector('.lk-submit').onclick = () => {
        const correct = l.items.map((o,i) => o.strong ? i : -1).filter(i => i >= 0);
        const chosen = [...picked].sort((a,b) => a-b);
        const good = chosen.length === correct.length && chosen.every((v,i) => v === correct[i]);
        if(good) ok();
        else { const extra = [...picked].some(i => !l.items[i].strong); fail(extra ? T.fbMultiExtra : T.fbMultiMissing); }
      };
    }
  }

  function showWin(){ $('#win').classList.add('show'); fireConfetti(); }
  $('#resetBtn').onclick = () => { solved = {}; opened.clear(); renderClues(); renderLocks(); renderDots(); };
  const wb = $('#winBtn'); if(wb) wb.onclick = () => location.reload();

  function fireConfetti(){
    const cv = $('#confetti'), ctx = cv.getContext('2d');
    cv.width = innerWidth; cv.height = innerHeight;
    const cols = ['#7c5cbf','#1aa3b8','#46a23c','#f08a16','#2f6fe0','#FCB040'];
    const bits = Array.from({length:130}, () => ({ x:Math.random()*cv.width, y:-20-Math.random()*cv.height*.5,
      r:5+Math.random()*7, c:cols[(Math.random()*cols.length)|0], vy:2.5+Math.random()*3.5, vx:-1.5+Math.random()*3, rot:Math.random()*6, vr:-.2+Math.random()*.4 }));
    let f = 0;
    (function a(){
      ctx.clearRect(0,0,cv.width,cv.height);
      bits.forEach(b => { b.x+=b.vx; b.y+=b.vy; b.rot+=b.vr;
        ctx.save(); ctx.translate(b.x,b.y); ctx.rotate(b.rot); ctx.fillStyle=b.c; ctx.fillRect(-b.r/2,-b.r/2,b.r,b.r*.6); ctx.restore(); });
      f++; if(f<150) requestAnimationFrame(a); else ctx.clearRect(0,0,cv.width,cv.height);
    })();
  }
  addEventListener('resize', () => { const cv = $('#confetti'); cv.width = innerWidth; cv.height = innerHeight; });

  renderClues(); renderLocks(); renderDots();
})();
