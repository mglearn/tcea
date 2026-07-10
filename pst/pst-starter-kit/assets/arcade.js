/* PST Arcade engine — renders entry/exit tickets. Self-contained: no logins, nothing stored or sent.
   Formats: mcq (Beat the Clock), match (Quick Match), sort (Sort It), cloze (Fill the Gap).
   i18n: picks the active language from window.BreakoutI18n at launch; content lives per-language on
   each ticket (ticket.i18n[lang]). Keyboard-operable; RTL comes from the page dir + logical CSS. */
(function () {
  'use strict';

  var STR = {
    en: { score:'Score', streak:'Streak', time:'Time', check:'Check', again:'Play again', done:'Done',
      right:'Correct!', wrong:'Not quite', timeup:"Time's up!", back:'Back to the ticket',
      matchAll:'Match every pair.', pickCat:'Tap an item, then its category.', great:'Great retrieval!',
      good:'Good work — keep going.', keep:'Keep practicing — try again.', qof:'of' },
    es: { score:'Puntos', streak:'Racha', time:'Tiempo', check:'Comprobar', again:'Jugar otra vez', done:'Listo',
      right:'¡Correcto!', wrong:'Casi', timeup:'¡Se acabó el tiempo!', back:'Volver al boleto',
      matchAll:'Empareja todas las parejas.', pickCat:'Toca un elemento y luego su categoría.', great:'¡Gran recuperación!',
      good:'Buen trabajo, sigue así.', keep:'Sigue practicando, inténtalo de nuevo.', qof:'de' },
    vi: { score:'Điểm', streak:'Chuỗi', time:'Thời gian', check:'Kiểm tra', again:'Chơi lại', done:'Xong',
      right:'Chính xác!', wrong:'Chưa đúng', timeup:'Hết giờ!', back:'Quay lại phiếu',
      matchAll:'Ghép tất cả các cặp.', pickCat:'Chạm một mục, rồi chạm loại của nó.', great:'Nhớ lại rất tốt!',
      good:'Làm tốt lắm — tiếp tục nhé.', keep:'Luyện tập thêm — thử lại.', qof:'trên' },
    ar: { score:'النقاط', streak:'التتابع', time:'الوقت', check:'تحقّق', again:'العب مرة أخرى', done:'تم',
      right:'صحيح!', wrong:'ليس تماماً', timeup:'انتهى الوقت!', back:'العودة إلى البطاقة',
      matchAll:'طابِق كل الأزواج.', pickCat:'انقر عنصراً ثم فئته.', great:'استرجاع رائع!',
      good:'عمل جيد — واصِل.', keep:'واصل التدريب — حاول مجدداً.', qof:'من' },
    hi: { score:'अंक', streak:'लगातार', time:'समय', check:'जाँचें', again:'फिर खेलें', done:'पूरा',
      right:'सही!', wrong:'बिलकुल नहीं', timeup:'समय समाप्त!', back:'टिकट पर लौटें',
      matchAll:'हर जोड़ी मिलाएँ.', pickCat:'एक वस्तु चुनें, फिर उसकी श्रेणी.', great:'बढ़िया स्मरण!',
      good:'अच्छा काम — चलते रहें.', keep:'अभ्यास जारी रखें — फिर प्रयास करें.', qof:'में से' },
    ur: { score:'اسکور', streak:'تسلسل', time:'وقت', check:'جانچیں', again:'دوبارہ کھیلیں', done:'مکمل',
      right:'درست!', wrong:'بالکل نہیں', timeup:'وقت ختم!', back:'ٹکٹ پر واپس',
      matchAll:'ہر جوڑا ملائیں۔', pickCat:'ایک آئٹم چنیں، پھر اس کی قسم۔', great:'شاندار یادداشت!',
      good:'اچھا کام — جاری رکھیں۔', keep:'مشق جاری رکھیں — دوبارہ کوشش کریں۔', qof:'میں سے' },
    zh: { score:'得分', streak:'连击', time:'时间', check:'检查', again:'再玩一次', done:'完成',
      right:'正确！', wrong:'差一点', timeup:'时间到！', back:'返回票券',
      matchAll:'配对所有的对。', pickCat:'点选一个项目，再点它的类别。', great:'很棒的回忆检索！',
      good:'做得好——继续。', keep:'继续练习——再试一次。', qof:'/' }
  };

  function lang() {
    try { if (window.BreakoutI18n && BreakoutI18n.getLang) return BreakoutI18n.getLang(); } catch (_) {}
    return 'en';
  }
  function t(k) { var L = lang(); return (STR[L] && STR[L][k]) || STR.en[k] || k; }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function shuffle(a, seed) { // deterministic-ish shuffle varied by seed so it isn't identical each mount
    a = a.slice(); var s = seed || 1;
    for (var i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; var j = Math.floor(s / 233280 * (i + 1)); var tmp = a[i]; a[i] = a[j]; a[j] = tmp; }
    return a;
  }

  function content(ticket) { return ticket.i18n[lang()] || ticket.i18n.en; }

  // ---- shared scoreboard ----
  function scoreboard(total, withTimer) {
    var b = el('div', 'board');
    var sc = el('span', 'chip', t('score') + ' <b>0</b>');
    var st = el('span', 'chip', '🔥 ' + t('streak') + ' <b>0</b>');
    var pr = el('div', 'progress'); var pi = el('i'); pr.appendChild(pi);
    b.appendChild(sc); b.appendChild(st); b.appendChild(pr);
    var tm = null;
    if (withTimer) { tm = el('span', 'chip timer', '⏱ <b>' + withTimer + '</b>'); b.appendChild(tm); }
    return { root: b, setScore: function (n) { sc.querySelector('b').textContent = n; },
      setStreak: function (n) { st.querySelector('b').textContent = n; },
      setProgress: function (done) { pi.style.width = Math.round(done / total * 100) + '%'; },
      setTime: function (n) { if (tm) { tm.querySelector('b').textContent = n; tm.classList.toggle('low', n <= 5); } } };
  }

  function endCard(host, ticket, correct, total, onAgain) {
    var pct = total ? correct / total : 0;
    var stars = pct >= 0.9 ? 3 : pct >= 0.6 ? 2 : 1;
    var msg = stars === 3 ? t('great') : stars === 2 ? t('good') : t('keep');
    var c = content(ticket);
    var ec = el('div', 'endcard');
    ec.appendChild(el('div', 'score', correct + ' / ' + total));
    ec.appendChild(el('div', 'stars', '★★★☆☆☆'.slice(3 - stars, 6 - stars)));
    ec.appendChild(el('p', null, esc(msg)));
    if (c.takeaway) ec.appendChild(el('p', 'note-sm', esc(c.takeaway)));
    var row = el('div', 'act-row');
    var again = el('button', 'btn', esc(t('again'))); again.type = 'button'; again.onclick = onAgain;
    row.appendChild(again);
    ec.appendChild(row);
    host.innerHTML = ''; host.appendChild(ec);
  }

  // ---- format: mcq / cloze (both = pick one of N, optional timer) ----
  function playSequence(host, ticket, opts) {
    var c = content(ticket);
    var items = c.questions || c.items || [];
    var withTimer = opts.timer && c.seconds ? c.seconds : 0;
    var i = 0, correct = 0, streak = 0, timeLeft = withTimer, timer = null;
    var sb = scoreboard(items.length, withTimer);
    var stage = el('div');
    host.innerHTML = ''; host.appendChild(sb.root); host.appendChild(stage);

    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function finish() { stop(); endCard(host, ticket, correct, items.length, function () { playSequence(host, ticket, opts); }); }
    function tick() { timeLeft--; sb.setTime(timeLeft); if (timeLeft <= 0) { finish(); } }
    if (withTimer) { timer = setInterval(tick, 1000); }

    function render() {
      if (i >= items.length) { return finish(); }
      var it = items[i];
      stage.innerHTML = '';
      sb.setProgress(i);
      var q = opts.cloze
        ? esc(it.before || '') + ' <b style="color:var(--ac)">_____</b> ' + esc(it.after || '')
        : esc(it.q);
      var pr = el('p', 'prompt'); pr.innerHTML = (opts.cloze ? '“' : '') + q + (opts.cloze ? '”' : '');
      stage.appendChild(pr);
      var choices = it.choices.map(function (ch, idx) { return { ch: ch, idx: idx }; });
      var order = shuffle(choices, (i + 1) * (it.choices.length + 3));
      var box = el('div', 'opts');
      var answered = false;
      order.forEach(function (o, pos) {
        var btn = el('button', 'opt');
        btn.type = 'button';
        btn.innerHTML = '<span class="k">' + String.fromCharCode(65 + pos) + '</span>' + esc(o.ch);
        btn.onclick = function () {
          if (answered) return; answered = true;
          var isRight = o.idx === it.a;
          if (isRight) { btn.classList.add('right'); correct++; streak++; sb.setScore(correct); sb.setStreak(streak); }
          else {
            btn.classList.add('wrong'); streak = 0; sb.setStreak(0);
            Array.prototype.forEach.call(box.children, function (b2, p2) { if (order[p2].idx === it.a) b2.classList.add('right'); });
          }
          Array.prototype.forEach.call(box.children, function (b2) { b2.setAttribute('disabled', ''); if (!b2.classList.contains('right') && !b2.classList.contains('wrong')) b2.classList.add('dim'); });
          var fb = el('div', 'fb ' + (isRight ? 'ok' : 'no'), (isRight ? '✓ ' : '✕ ') + esc(isRight ? t('right') : t('wrong')) + (it.why ? ' — ' + esc(it.why) : ''));
          stage.appendChild(fb);
          setTimeout(function () { i++; sb.setProgress(i); render(); }, isRight ? 750 : 1500);
        };
        box.appendChild(btn);
      });
      stage.appendChild(box);
      var first = box.querySelector('button'); if (first) first.focus();
    }
    render();
  }

  // ---- format: match (Quick Match) ----
  function playMatch(host, ticket) {
    var c = content(ticket), pairs = c.pairs || [];
    var total = pairs.length, matched = 0, streak = 0, tries = 0, correct = 0;
    var sb = scoreboard(total, 0);
    var stage = el('div');
    host.innerHTML = ''; host.appendChild(el('p', 'prompt', esc(t('matchAll'))));
    host.appendChild(sb.root); host.appendChild(stage);
    var left = pairs.map(function (p, idx) { return { txt: p[0], id: idx }; });
    var right = pairs.map(function (p, idx) { return { txt: p[1], id: idx }; });
    left = shuffle(left, 7); right = shuffle(right, 13);
    var sel = null;
    var wrap = el('div', 'match');
    var colL = el('div', 'col'), colR = el('div', 'col');
    function mkBtn(item, side) {
      var b = el('button', 'opt'); b.type = 'button'; b.textContent = item.txt; b.dataset.id = item.id; b.dataset.side = side;
      b.onclick = function () {
        if (b.getAttribute('disabled') != null) return;
        if (!sel) { sel = b; b.classList.add('sel'); return; }
        if (sel === b) { b.classList.remove('sel'); sel = null; return; }
        if (sel.dataset.side === side) { sel.classList.remove('sel'); sel = b; b.classList.add('sel'); return; }
        tries++;
        if (sel.dataset.id === b.dataset.id) {
          sel.classList.remove('sel'); sel.classList.add('right'); b.classList.add('right');
          sel.setAttribute('disabled', ''); b.setAttribute('disabled', '');
          matched++; correct++; streak++; sb.setScore(matched); sb.setStreak(streak); sb.setProgress(matched);
          sel = null;
          if (matched === total) { setTimeout(function () { endCard(host, ticket, total, total, function () { playMatch(host, ticket); }); }, 500); }
        } else {
          var a = sel; a.classList.remove('sel'); a.classList.add('wrong'); b.classList.add('wrong'); streak = 0; sb.setStreak(0);
          setTimeout(function () { a.classList.remove('wrong'); b.classList.remove('wrong'); }, 650); sel = null;
        }
      };
      return b;
    }
    left.forEach(function (it) { colL.appendChild(mkBtn(it, 'L')); });
    right.forEach(function (it) { colR.appendChild(mkBtn(it, 'R')); });
    wrap.appendChild(colL); wrap.appendChild(colR); stage.appendChild(wrap);
  }

  // ---- format: sort (Sort It) ----
  function playSort(host, ticket) {
    var c = content(ticket), cats = c.cats || [], items = c.items || [];
    var total = items.length, placed = 0, streak = 0, correct = 0;
    var sb = scoreboard(total, 0);
    host.innerHTML = ''; host.appendChild(el('p', 'prompt', esc(t('pickCat'))));
    host.appendChild(sb.root);
    var stage = el('div', 'sortbox'); host.appendChild(stage);
    var tokens = el('div', 'tokens');
    var pool = shuffle(items.map(function (it, idx) { return { t: it.t, c: it.c, id: idx }; }), 5);
    var picked = null;
    var catBoxes = [];
    var catWrap = el('div', 'cats');
    cats.forEach(function (name, ci) {
      var box = el('div', 'cat'); box.appendChild(el('h4', null, esc(name)));
      var drop = el('div', 'tokens'); box.appendChild(drop);
      box.onclick = function () {
        if (!picked) return;
        var tok = picked; picked = null;
        var right = tok.dataset.cat == ci;
        tok.classList.remove('picked');
        if (right) {
          tok.classList.add('right', 'placed'); tok.setAttribute('disabled', ''); drop.appendChild(tok);
          placed++; correct++; streak++; sb.setScore(placed); sb.setStreak(streak); sb.setProgress(placed);
          if (placed === total) setTimeout(function () { endCard(host, ticket, total, total, function () { playSort(host, ticket); }); }, 450);
        } else {
          streak = 0; sb.setStreak(0); box.classList.add('over'); tok.classList.add('wrong');
          setTimeout(function () { box.classList.remove('over'); tok.classList.remove('wrong'); }, 600);
        }
      };
      catBoxes.push(box); catWrap.appendChild(box);
    });
    pool.forEach(function (it) {
      var tok = el('button', 'token'); tok.type = 'button'; tok.textContent = it.t; tok.dataset.cat = it.c;
      tok.onclick = function () {
        if (tok.getAttribute('disabled') != null) return;
        if (picked === tok) { tok.classList.remove('picked'); picked = null; return; }
        if (picked) picked.classList.remove('picked');
        picked = tok; tok.classList.add('picked');
      };
      tokens.appendChild(tok);
    });
    stage.appendChild(tokens); stage.appendChild(catWrap);
  }

  // ---- public: mount a ticket into a host element ----
  function mount(host, ticket) {
    if (typeof host === 'string') host = document.getElementById(host);
    if (!host || !ticket) return;
    var c = content(ticket);
    host.className = 'arcade';
    var tk = el('div', 'tk ' + (ticket.phase || ''));
    var head = el('div', 'tkhead');
    head.appendChild(el('span', 'badge ' + (ticket.type === 'exit' ? 'exit' : ''), ticket.type === 'exit' ? '🎫 EXIT' : '🎟️ ENTRY'));
    head.appendChild(el('span', 'fmt', fmtLabel(ticket.format)));
    tk.appendChild(head);
    var meta = el('div', 'tkmeta');
    if (ticket.strat) meta.appendChild(el('span', 'es', esc(ticket.strat) + (ticket.d != null ? ' · d ' + ticket.d.toFixed(2) : '')));
    if (ticket.teks) meta.appendChild(el('span', 'teks', esc(ticket.teks)));
    tk.appendChild(meta);
    tk.appendChild(el('h3', null, esc(c.title || '')));
    var stage = el('div'); tk.appendChild(stage);
    host.innerHTML = ''; host.appendChild(tk);
    switch (ticket.format) {
      case 'match': playMatch(stage, ticket); break;
      case 'sort': playSort(stage, ticket); break;
      case 'cloze': playSequence(stage, ticket, { cloze: true }); break;
      default: playSequence(stage, ticket, { timer: true }); // mcq / Beat the Clock
    }
  }

  function fmtLabel(f) {
    var L = lang();
    var names = {
      en: { mcq: 'Beat the Clock', match: 'Quick Match', sort: 'Sort It', cloze: 'Fill the Gap' },
      es: { mcq: 'Contra el reloj', match: 'Emparejar', sort: 'Clasificar', cloze: 'Completa el hueco' },
      vi: { mcq: 'Chạy đua thời gian', match: 'Ghép nhanh', sort: 'Phân loại', cloze: 'Điền chỗ trống' },
      ar: { mcq: 'سباق الوقت', match: 'مطابقة سريعة', sort: 'صنِّف', cloze: 'املأ الفراغ' },
      hi: { mcq: 'घड़ी को हराओ', match: 'त्वरित मिलान', sort: 'छाँटें', cloze: 'रिक्त भरें' },
      ur: { mcq: 'گھڑی کو ہرائیں', match: 'فوری جوڑ', sort: 'چھانٹیں', cloze: 'خلا پُر کریں' },
      zh: { mcq: '限时抢答', match: '快速配对', sort: '分类', cloze: '填空' }
    };
    return ((names[L] || names.en)[f] || f);
  }

  window.PSTArcade = {
    mount: mount,
    tickets: function () { return (window.PST_TICKETS || []).slice(); },
    byId: function (id) { return (window.PST_TICKETS || []).filter(function (x) { return x.id === id; })[0]; },
    fmtLabel: fmtLabel
  };
})();
