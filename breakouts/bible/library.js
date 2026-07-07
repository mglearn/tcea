/* library.js — searchable/filterable breakout list, shared by index.html (mode "search":
   nothing shown until you type or pick a grade) and library.html (mode "browse": shows all).
   Expects window.BIBLE_LIB (from breakouts.js) and optional window.LIB_MODE ("search"|"browse"). */
(function(){
  var lib=window.BIBLE_LIB||[], order=['K–2','3–5','6–8','9–12'],
      MODE=window.LIB_MODE==='search'?'search':'browse',
      host=document.getElementById('libGrid'), empty=document.getElementById('libEmpty'),
      input=document.getElementById('libSearch'), chipHost=document.getElementById('libChips'),
      countEl=document.getElementById('libCount');
  if(!host||!input)return;
  function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  var state={q:'',band:'all'};
  // grade-band search synonyms so free-text like "grade 4" or "high school" still finds the right band
  var bandKw={'K–2':'k-2 kindergarten grade 1 2 first second primary early','3–5':'3-5 grade 3 4 5 third fourth fifth elementary','6–8':'6-8 grade 6 7 8 sixth seventh eighth middle school','9–12':'9-12 grade 9 10 11 12 english i ii iii iv high school secondary'};
  // per-breakout keywords (Bible text/reference + characters + concept + required-list name) so a search
  // finds items whose key term isn't in the title/blurb — e.g. "humility", "anxious", "gilgamesh".
  var kwMap={
    'k2':'genesis creation golden rule berenstain bears storyteller order beginning',
    'k2-noah-ark':'noah ark flood genesis animals boat rain rainbow',
    'k2-good-samaritan':'good samaritan luke neighbor kindness helper parable',
    'k2-solomon-choice':'solomon wisdom judgment 1 kings baby two mothers king',
    'k2-jonah-fish':'jonah fish whale nineveh book of jonah second chance',
    'k2-moses-rules':'moses ten commandments exodus rules law sinai tablets',
    'k2-you-are-special':'you are special max lucado wemmicks punchinello eli allegory worth self worth bible-connected picture book kindergarten',
    'g35':'david goliath daniel lions den solomon underdog theme courage 1 samuel',
    'g35-noah-flood':'noah flood ark genesis covenant rainbow theme obedience',
    'g35-jonah-second-chance':'jonah nineveh fish second chance cause effect book of jonah',
    'g35-good-samaritan-35':'good samaritan luke neighbor parable theme evidence',
    'g35-moses-ten':'moses ten commandments exodus law code sinai',
    'g35-last-supper':'last supper leonardo da vinci gospel john painting art history',
    'g35-humility':'humility humble pride luke 14 places of honor lowest seat feast necessity of humility grade 4 parable',
    'g35-moses-red-sea':'moses burning bush red sea exodus 3 14 pharaoh egypt israelites rescue parting grade 5',
    'g68':'prodigal son sermon on the mount luke matthew parable rhetoric persuasion martin luther king anaphora',
    'g68-jonah-irony':'jonah irony reluctant prophet book of jonah reversal',
    'g68-good-samaritan-68':'good samaritan luke parable reversal craft show dont tell',
    'g68-psalms-poetry':'psalms poetry parallelism frost williams ancient hebrew poem',
    'g68-esther-plot':'esther dramatic irony reversal book of esther plot',
    'g68-solomon-judgment':'solomon judgment 1 kings logic argument clever test',
    'g68-do-not-be-anxious':'do not be anxious worry anxiety matthew 6 sermon on the mount birds lilies how much more grade 6 provision',
    'g68-ecclesiastes':'ecclesiastes a time for everything wisdom poetry seasons parallelism grade 8 opposites',
    'g912':'adam eve genesis fall archetype allusion esther interpretation english iii',
    'g912-noah-archetype':'noah flood epic of gilgamesh archetype allusion comparative',
    'g912-psalm-23':'psalm 23 shepherd extended metaphor lord is my shepherd allusion',
    'g912-lamentations':'lamentations 3 lament acrostic grief poetry genre',
    'g912-good-samaritan-law':'good samaritan good samaritan laws parable allusion law',
    'g912-solomon-wisdom':'solomon wisdom literature clever test rhetoric genre',
    'g912-job':'job innocent sufferer suffering whirlwind archetype wisdom literature english ii patience comforters',
    'g912-corinthians-love':'1 corinthians 13 definition of love paul epistle letter faith hope love wedding english iv'
  };

  // grade-band filter chips
  var bandsPresent=order.filter(function(b){return lib.some(function(x){return x.band===b;});});
  var chips=[{v:'all',label:'All grades'}].concat(bandsPresent.map(function(b){return {v:b,label:'Grades '+b};}));
  if(chipHost){
    chipHost.innerHTML=chips.map(function(c){
      return '<button type="button" class="lib-chip'+(c.v===state.band?' on':'')+'" data-band="'+esc(c.v)+'">'+esc(c.label)+'</button>';
    }).join('');
    chipHost.addEventListener('click',function(e){
      var btn=e.target.closest('.lib-chip'); if(!btn)return;
      state.band=btn.getAttribute('data-band');
      chipHost.querySelectorAll('.lib-chip').forEach(function(c){c.classList.toggle('on',c.getAttribute('data-band')===state.band);});
      render();
    });
  }

  function matches(){
    var q=state.q.trim().toLowerCase(), terms=q?q.split(/\s+/):[];
    return lib.filter(function(x){
      if(state.band!=='all'&&x.band!==state.band)return false;
      if(!terms.length)return true;
      var slug=x.href.replace('grades/','').replace('-student.html','');
      var hay=(x.title+' '+x.blurb+' Grades '+x.band+' '+(bandKw[x.band]||'')+' '+(kwMap[slug]||'')).toLowerCase();
      return terms.every(function(t){return hay.indexOf(t)!==-1;});
    });
  }
  function cardHtml(x){
    return '<a class="lib-card" href="'+x.href+'">'+
      (x.featured?'<span class="lc-star">★ Featured</span>':'')+
      '<span class="lc-title">'+esc(x.title)+'</span>'+
      '<span class="lc-blurb">'+esc(x.blurb)+'</span>'+
      '<span class="lc-open">Open breakout →</span></a>';
  }
  function render(){
    var active=state.q.trim()!==''||state.band!=='all';
    // gateway "search" mode: show nothing until the user types or picks a grade
    if(MODE==='search'&&!active){
      host.innerHTML='';
      if(empty){empty.style.display='block';empty.textContent='Type a title, Bible text, story, or grade above to find a breakout — or open the full library.';}
      if(countEl)countEl.textContent=lib.length+' breakouts';
      return;
    }
    var list=matches(), byBand={};
    list.forEach(function(x){(byBand[x.band]=byBand[x.band]||[]).push(x);});
    host.innerHTML=order.filter(function(b){return byBand[b];}).map(function(b){
      var cards=byBand[b].map(cardHtml).join('');
      return '<div><div class="lib-band-h">Grades '+esc(b)+'</div><div class="lib-grid">'+cards+'</div></div>';
    }).join('');
    if(empty){
      empty.style.display=list.length?'none':'block';
      if(!list.length)empty.textContent='No breakouts match — try a different word or grade band.';
    }
    if(countEl)countEl.textContent=list.length+(list.length===1?' breakout':' breakouts');
  }
  input.addEventListener('input',function(e){state.q=e.target.value;render();});
  render();
})();
