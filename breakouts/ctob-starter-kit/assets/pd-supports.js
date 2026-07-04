/* pd-supports.js — merge localized "teacher supports" link labels (UDL / ELPS /
   lesson-plan guide) into a correlation page's i18n dictionary. Loaded with defer,
   AFTER the page's own i18n-correlation.js. The page sets window.PD_SUP_KEY to its
   registered widget key. Labels match the PD pages' own nav labels. */
(function () {
  var KEY = window.PD_SUP_KEY;
  if (!KEY || !window.BreakoutI18n || !BreakoutI18n.extend) return;
  var L = {
    en: { udl: 'UDL supports', elps: 'ELPS supports', guide: 'Lesson-plan guide' },
    es: { udl: 'Apoyos UDL', elps: 'Apoyos ELPS', guide: 'Guía de planificación de lecciones' },
    vi: { udl: 'Hỗ trợ UDL', elps: 'Hỗ trợ ELPS', guide: 'Hướng dẫn giáo án' },
    ar: { udl: 'دعائم التصميم الشامل للتعلم (UDL)', elps: 'دعائم معايير ELPS', guide: 'دليل خطة الدرس' },
    hi: { udl: 'UDL सहायता', elps: 'ELPS सहायताएँ', guide: 'पाठ-योजना मार्गदर्शिका' },
    ur: { udl: 'UDL معاونتیں', elps: 'ELPS معاونتیں', guide: 'سبق کی منصوبہ بندی کی رہنمائی' },
    zh: { udl: 'UDL 支持', elps: 'ELPS 支持', guide: '教案指南' }
  };
  var dict = {};
  for (var l in L) dict[l] = { 'sup.udl': L[l].udl, 'sup.elps': L[l].elps, 'sup.guide': L[l].guide };
  BreakoutI18n.extend(KEY, dict);
})();
