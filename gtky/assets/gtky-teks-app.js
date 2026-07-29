/* Renders the TEKS correlation from window.GTKY_TEKS + window.GTKY_MANIFEST.
   One row per worksheet type (band + subject + grade), grouped by subject,
   filterable by grade band and subject. Page chrome localizes via the i18n
   engine; the TEKS content itself stays in English. */
(function () {
  'use strict';
  var M = window.GTKY_MANIFEST || [];
  var T = window.GTKY_TEKS || { subjects: {}, focus: {} };
  var t = function (k, v) { return window.BreakoutI18n.t(k, v); };

  var BAND_ORDER = ['k-2', '3-5', '6-8', '9-12'];
  var SUBJECT_ORDER = ['science', 'math', 'ela', 'social-studies', 'fine-arts'];
  var GRADE_ORDER = ['kindergarten', 'grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5', '6-8', '9-12'];
  var state = { band: 'all', subject: 'all' };

  // Unique band/subject/grade slots (ignore language + variant).
  function slots() {
    var seen = {}, out = [];
    M.forEach(function (w) {
      if (w.variant) return;
      var k = w.band + '|' + w.subject + '|' + w.grade;
      if (seen[k]) return; seen[k] = 1;
      out.push({ band: w.band, subject: w.subject, grade: w.grade });
    });
    return out;
  }

  function uniqueSorted(values, order) {
    var seen = {}; values.forEach(function (v) { seen[v] = true; });
    return order.filter(function (o) { return seen[o]; });
  }

  function buildFilters() {
    var all = slots();
    var bandSel = document.getElementById('filter-band');
    var subjSel = document.getElementById('filter-subject');
    [[bandSel, uniqueSorted(all.map(function (s) { return s.band; }), BAND_ORDER)],
     [subjSel, uniqueSorted(all.map(function (s) { return s.subject; }), SUBJECT_ORDER)]]
      .forEach(function (pair) {
        var sel = pair[0]; sel.innerHTML = '';
        var o0 = document.createElement('option'); o0.value = 'all'; sel.appendChild(o0);
        pair[1].forEach(function (v) { var o = document.createElement('option'); o.value = v; sel.appendChild(o); });
        sel.value = 'all';
      });
    labelFilters();
    bandSel.addEventListener('change', function () { state.band = bandSel.value; render(); });
    subjSel.addEventListener('change', function () { state.subject = subjSel.value; render(); });
    document.getElementById('filter-reset').addEventListener('click', function () {
      state.band = 'all'; state.subject = 'all'; bandSel.value = 'all'; subjSel.value = 'all'; render();
    });
  }

  function labelFilters() {
    var bandSel = document.getElementById('filter-band');
    var subjSel = document.getElementById('filter-subject');
    Array.prototype.forEach.call(bandSel.options, function (o) { o.textContent = o.value === 'all' ? t('filter.all') : t('band.' + o.value); });
    Array.prototype.forEach.call(subjSel.options, function (o) { o.textContent = o.value === 'all' ? t('filter.all') : t('subject.' + o.value); });
    document.getElementById('filter-reset').textContent = t('filter.reset');
  }

  function render() {
    var host = document.getElementById('teks');
    var count = document.getElementById('teks-count');
    host.innerHTML = '';

    var all = slots().filter(function (s) {
      return (state.band === 'all' || s.band === state.band) &&
             (state.subject === 'all' || s.subject === state.subject);
    });
    count.textContent = t('teks.count', { n: all.length });

    var shownSubjects = SUBJECT_ORDER.filter(function (subj) {
      return (state.subject === 'all' || state.subject === subj) &&
             all.some(function (s) { return s.subject === subj; });
    });

    if (!shownSubjects.length) {
      var p = document.createElement('p'); p.className = 'empty'; p.textContent = t('teks.empty'); host.appendChild(p); return;
    }

    shownSubjects.forEach(function (subj) {
      var meta = T.subjects[subj] || {};
      var section = document.createElement('section'); section.className = 'teks-subject';

      var h = document.createElement('h2'); h.textContent = t('subject.' + subj); section.appendChild(h);

      var chapter = document.createElement('p'); chapter.className = 'teks-chapter';
      chapter.innerHTML = '<span class="lbl">' + t('teks.chapterLabel') + ':</span> ';
      var a = document.createElement('a'); a.href = meta.url || '#'; a.target = '_blank'; a.rel = 'noopener'; a.textContent = meta.chapter || '';
      chapter.appendChild(a); section.appendChild(chapter);

      var strandsWrap = document.createElement('div'); strandsWrap.className = 'teks-strands';
      var sl = document.createElement('span'); sl.className = 'lbl'; sl.textContent = t('teks.strandsLabel') + ': '; strandsWrap.appendChild(sl);
      (meta.strands || []).forEach(function (s) { var chip = document.createElement('span'); chip.className = 'chip'; chip.textContent = s; strandsWrap.appendChild(chip); });
      section.appendChild(strandsWrap);

      var align = document.createElement('p'); align.className = 'teks-align';
      align.innerHTML = '<span class="lbl">' + t('teks.alignLabel') + ':</span> ' + (meta.align || '');
      section.appendChild(align);

      // Grade rows for this subject, filtered by band.
      var rows = all.filter(function (s) { return s.subject === subj; })
        .sort(function (x, y) {
          var d = BAND_ORDER.indexOf(x.band) - BAND_ORDER.indexOf(y.band);
          if (d) return d;
          return GRADE_ORDER.indexOf(x.grade) - GRADE_ORDER.indexOf(y.grade);
        });

      var table = document.createElement('table'); table.className = 'teks-table';
      var thead = document.createElement('thead');
      thead.innerHTML = '<tr><th>' + t('teks.gradeCol') + '</th><th>' + t('teks.focusCol') + '</th></tr>';
      table.appendChild(thead);
      var tbody = document.createElement('tbody');
      rows.forEach(function (s) {
        var focus = (T.focus[subj] && T.focus[subj][s.grade]) || '';
        var tr = document.createElement('tr');
        var td1 = document.createElement('td'); td1.className = 'teks-grade';
        var gradeLabel = t('grade.' + s.grade);
        var bandLabel = t('band.' + s.band);
        // Band-level sheets (6-8, 9-12) use the band as their grade, so the tag
        // would just repeat the label — only show it for per-grade bands.
        td1.innerHTML = '<strong>' + gradeLabel + '</strong>' +
          (gradeLabel === bandLabel ? '' : '<br><span class="band-tag">' + bandLabel + '</span>');
        var td2 = document.createElement('td'); td2.textContent = focus;
        tr.appendChild(td1); tr.appendChild(td2); tbody.appendChild(tr);
      });
      table.appendChild(tbody); section.appendChild(table);
      host.appendChild(section);
    });
  }

  function init() {
    buildFilters();
    window.addEventListener('breakout-i18n:changed', function () { labelFilters(); render(); });
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
