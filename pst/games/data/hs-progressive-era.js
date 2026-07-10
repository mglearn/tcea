/* PST Arcade — ticket registry for HS · US History · The Progressive Era, 1906.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. Same shape as every unit:
   {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}.
   Honest history (TEC §28.0022): the era's real gains (food/drug safety, direct democracy,
   suffrage) are kept alongside its blind spots — deepening segregation and the eugenics /
   immigration-restriction ideas some Progressives embraced — factually and respectfully. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── HS · Progressive Era 1906 · SURFACE ───────── */
  {
    id: 'hs-progressive-era-surface-entry', grade: 11, unit: 'progressive-era',
    unitTitle: 'The Progressive Era — Should We Regulate Big Business?', phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.41(c)(5), (c)(28)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: reform words',
      seconds: 45,
      questions: [
        { q: 'A company or combination that controls an entire industry and crushes competition is a…', choices: ['monopoly / trust', 'referendum', 'muckraker'], a: 0 },
        { q: 'A journalist who investigated and exposed corruption and unsafe conditions was called a…', choices: ['muckraker', 'stakeholder', 'trust'], a: 0 },
        { q: 'Government rules that set limits on how businesses operate, for safety or the public good, are…', choices: ['laissez-faire', 'regulation', 'suffrage'], a: 1 },
        { q: 'The belief that government should leave business alone and let the free market decide is…', choices: ['regulation', 'trust-busting', 'laissez-faire'], a: 2 }
      ],
      takeaway: 'Monopoly, muckraker, regulation, laissez-faire — these four words frame the whole debate.'
    },
    es: {
      title: 'Calentamiento: palabras de la reforma',
      seconds: 45,
      questions: [
        { q: 'Una empresa o combinación que controla toda una industria y aplasta la competencia es un…', choices: ['monopolio / trust', 'referéndum', 'muckraker'], a: 0 },
        { q: 'Un periodista que investigaba y exponía la corrupción y las condiciones inseguras se llamaba…', choices: ['muckraker', 'parte interesada', 'trust'], a: 0 },
        { q: 'Las reglas del gobierno que ponen límites al funcionamiento de las empresas, por seguridad o el bien público, son…', choices: ['laissez-faire', 'regulación', 'sufragio'], a: 1 },
        { q: 'La creencia de que el gobierno debe dejar en paz a las empresas y dejar decidir al libre mercado es…', choices: ['regulación', 'desmantelamiento de trusts', 'laissez-faire'], a: 2 }
      ],
      takeaway: 'Monopolio, muckraker, regulación, laissez-faire: estas cuatro palabras enmarcan todo el debate.'
    },
    vi: {
      title: 'Khởi động: từ vựng cải cách',
      seconds: 45,
      questions: [
        { q: 'Một công ty hoặc liên minh kiểm soát cả một ngành và bóp nghẹt cạnh tranh là một…', choices: ['độc quyền / trust', 'trưng cầu dân ý', 'muckraker'], a: 0 },
        { q: 'Một nhà báo điều tra và phơi bày tham nhũng cùng điều kiện không an toàn được gọi là…', choices: ['muckraker', 'bên liên quan', 'trust'], a: 0 },
        { q: 'Những quy tắc của chính phủ đặt giới hạn cho cách doanh nghiệp hoạt động, vì an toàn hoặc lợi ích công, là…', choices: ['laissez-faire', 'sự điều tiết', 'quyền bầu cử'], a: 1 },
        { q: 'Niềm tin rằng chính phủ nên để yên cho doanh nghiệp và để thị trường tự do quyết định là…', choices: ['sự điều tiết', 'phá vỡ trust', 'laissez-faire'], a: 2 }
      ],
      takeaway: 'Độc quyền, muckraker, điều tiết, laissez-faire — bốn từ này định khung cả cuộc tranh luận.'
    },
    ar: {
      title: 'تهيئة: كلمات الإصلاح',
      seconds: 45,
      questions: [
        { q: 'الشركة أو التكتل الذي يسيطر على صناعة بأكملها ويسحق المنافسة هو…', choices: ['احتكار / تراست', 'استفتاء', 'كاشف فساد (muckraker)'], a: 0 },
        { q: 'الصحفي الذي يحقّق ويكشف الفساد والظروف غير الآمنة كان يُسمّى…', choices: ['كاشف فساد (muckraker)', 'صاحب مصلحة', 'تراست'], a: 0 },
        { q: 'قواعد الحكومة التي تضع حدودًا لكيفية عمل الشركات، من أجل السلامة أو الصالح العام، هي…', choices: ['عدم التدخل (laissez-faire)', 'التنظيم', 'حق الاقتراع'], a: 1 },
        { q: 'الاعتقاد بأن على الحكومة أن تترك الأعمال وشأنها وتدع السوق الحرة تقرّر هو…', choices: ['التنظيم', 'تفكيك التراستات', 'عدم التدخل (laissez-faire)'], a: 2 }
      ],
      takeaway: 'احتكار، كاشف فساد، تنظيم، عدم التدخل — هذه الكلمات الأربع تؤطّر النقاش كله.'
    },
    hi: {
      title: 'वार्म-अप: सुधार के शब्द',
      seconds: 45,
      questions: [
        { q: 'एक कंपनी या गठजोड़ जो पूरे उद्योग को नियंत्रित करता है और प्रतिस्पर्धा को कुचल देता है, वह है…', choices: ['एकाधिकार / ट्रस्ट', 'जनमत-संग्रह', 'मकरेकर'], a: 0 },
        { q: 'भ्रष्टाचार और असुरक्षित परिस्थितियों की जाँच कर उन्हें उजागर करने वाला पत्रकार कहलाता था…', choices: ['मकरेकर', 'हितधारक', 'ट्रस्ट'], a: 0 },
        { q: 'सरकार के वे नियम जो व्यवसायों के संचालन पर सीमाएँ लगाते हैं — सुरक्षा या जनहित के लिए — कहलाते हैं…', choices: ['लेसे-फेयर', 'विनियमन', 'मताधिकार'], a: 1 },
        { q: 'यह विश्वास कि सरकार को व्यवसाय को अकेला छोड़ देना चाहिए और मुक्त बाज़ार को फैसला करने देना चाहिए, है…', choices: ['विनियमन', 'ट्रस्ट-तोड़क', 'लेसे-फेयर'], a: 2 }
      ],
      takeaway: 'एकाधिकार, मकरेकर, विनियमन, लेसे-फेयर — ये चार शब्द पूरे विवाद को दायरा देते हैं।'
    },
    ur: {
      title: 'وارم اپ: اصلاح کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'ایک کمپنی یا اتحاد جو پوری صنعت پر قابض ہو اور مقابلے کو کچل دے، وہ ہے…', choices: ['اجارہ داری / ٹرسٹ', 'ریفرنڈم', 'مکریکر'], a: 0 },
        { q: 'کرپشن اور غیر محفوظ حالات کی تحقیق کر کے انہیں بے نقاب کرنے والا صحافی کہلاتا تھا…', choices: ['مکریکر', 'اسٹیک ہولڈر', 'ٹرسٹ'], a: 0 },
        { q: 'حکومت کے وہ قواعد جو کاروبار کے چلانے پر حدود لگاتے ہیں — تحفظ یا عوامی بھلائی کے لیے — کہلاتے ہیں…', choices: ['لیسے فیئر', 'ضابطہ کاری', 'حقِ رائے دہی'], a: 1 },
        { q: 'یہ عقیدہ کہ حکومت کو کاروبار کو اکیلا چھوڑ دینا چاہیے اور آزاد منڈی کو فیصلہ کرنے دینا چاہیے، ہے…', choices: ['ضابطہ کاری', 'ٹرسٹ توڑنا', 'لیسے فیئر'], a: 2 }
      ],
      takeaway: 'اجارہ داری، مکریکر، ضابطہ کاری، لیسے فیئر — یہ چار الفاظ پوری بحث کا دائرہ بناتے ہیں۔'
    },
    zh: {
      title: '热身：改革词汇',
      seconds: 45,
      questions: [
        { q: '控制整个行业并压垮竞争的公司或联合体是…', choices: ['垄断 / 托拉斯', '公民复决', '扒粪记者'], a: 0 },
        { q: '调查并揭露腐败和不安全状况的记者被称为…', choices: ['扒粪记者', '利益相关者', '托拉斯'], a: 0 },
        { q: '政府为安全或公共利益而限制企业经营方式的规则是…', choices: ['自由放任', '监管', '选举权'], a: 1 },
        { q: '认为政府应放手让企业自行发展、由自由市场决定的信念是…', choices: ['监管', '拆分托拉斯', '自由放任'], a: 2 }
      ],
      takeaway: '垄断、扒粪记者、监管、自由放任——这四个词框定了整场辩论。'
    } }
  },
  {
    id: 'hs-progressive-era-surface-exit', grade: 11, unit: 'progressive-era',
    unitTitle: 'The Progressive Era — Should We Regulate Big Business?', phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.41(c)(5), (c)(28)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the reformer or law to what it did',
      pairs: [
        ['Ida Tarbell', 'exposed the ruthless Standard Oil trust'],
        ['Upton Sinclair', 'wrote "The Jungle," revealing filthy meatpacking'],
        ['Jacob Riis', 'photographed tenement poverty for reform'],
        ['Pure Food and Drug Act (1906)', 'federal law banning mislabeled food and medicine'],
        ['19th Amendment', 'guaranteed women the right to vote nationwide']
      ],
      takeaway: 'Muckrakers exposed the problems; the 1906 laws and the amendments were the reforms that answered.'
    },
    es: {
      title: 'Salida: relaciona al reformador o la ley con lo que hizo',
      pairs: [
        ['Ida Tarbell', 'expuso el despiadado trust de Standard Oil'],
        ['Upton Sinclair', 'escribió "The Jungle", revelando el sucio empaque de carne'],
        ['Jacob Riis', 'fotografió la pobreza de los conventillos para la reforma'],
        ['Pure Food and Drug Act (1906)', 'ley federal que prohibió alimentos y medicinas mal etiquetados'],
        ['19.ª Enmienda', 'garantizó a las mujeres el derecho al voto en todo el país']
      ],
      takeaway: 'Los muckrakers expusieron los problemas; las leyes de 1906 y las enmiendas fueron las reformas que respondieron.'
    },
    vi: {
      title: 'Phiếu ra: ghép nhà cải cách hoặc đạo luật với điều họ đã làm',
      pairs: [
        ['Ida Tarbell', 'phơi bày trust Standard Oil tàn nhẫn'],
        ['Upton Sinclair', 'viết "The Jungle," phơi bày ngành đóng gói thịt bẩn thỉu'],
        ['Jacob Riis', 'chụp ảnh cảnh nghèo khổ ở khu ổ chuột để thúc đẩy cải cách'],
        ['Pure Food and Drug Act (1906)', 'luật liên bang cấm thực phẩm và thuốc dán nhãn sai'],
        ['Tu chính án thứ 19', 'bảo đảm phụ nữ có quyền bầu cử trên toàn quốc']
      ],
      takeaway: 'Các muckraker phơi bày vấn đề; các đạo luật 1906 và các tu chính án là những cải cách đáp lại.'
    },
    ar: {
      title: 'الخروج: طابِق المصلح أو القانون مع ما فعله',
      pairs: [
        ['Ida Tarbell', 'كشفت تراست ستاندرد أويل القاسي'],
        ['Upton Sinclair', 'كتب "The Jungle" كاشفًا قذارة تعليب اللحوم'],
        ['Jacob Riis', 'صوّر فقر المساكن الشعبية من أجل الإصلاح'],
        ['Pure Food and Drug Act (1906)', 'قانون فيدرالي يحظر الأغذية والأدوية المغلوطة الوسم'],
        ['التعديل التاسع عشر', 'كفل للنساء حق التصويت في عموم البلاد']
      ],
      takeaway: 'كشف كاشفو الفساد المشكلات؛ وكانت قوانين 1906 والتعديلات هي الإصلاحات التي أجابت عنها.'
    },
    hi: {
      title: 'निकास: सुधारक या कानून को उसके काम से मिलाएँ',
      pairs: [
        ['Ida Tarbell', 'स्टैंडर्ड ऑयल के निर्मम ट्रस्ट को उजागर किया'],
        ['Upton Sinclair', '"The Jungle" लिखा, गंदे मांस-पैकिंग को उजागर किया'],
        ['Jacob Riis', 'सुधार के लिए झुग्गी-बस्ती की गरीबी की तस्वीरें लीं'],
        ['Pure Food and Drug Act (1906)', 'गलत लेबल वाले भोजन और दवा पर रोक लगाने वाला संघीय कानून'],
        ['19वाँ संशोधन', 'देशभर में महिलाओं को मत देने का अधिकार दिया']
      ],
      takeaway: 'मकरेकरों ने समस्याएँ उजागर कीं; 1906 के कानून और संशोधन वे सुधार थे जिन्होंने उत्तर दिया।'
    },
    ur: {
      title: 'اخراج: مصلح یا قانون کو اس کے کام سے ملائیں',
      pairs: [
        ['Ida Tarbell', 'اسٹینڈرڈ آئل کے بے رحم ٹرسٹ کو بے نقاب کیا'],
        ['Upton Sinclair', '"The Jungle" لکھا، گندی گوشت پیکنگ کو بے نقاب کیا'],
        ['Jacob Riis', 'اصلاح کے لیے کچی آبادی کی غربت کی تصویریں کھینچیں'],
        ['Pure Food and Drug Act (1906)', 'غلط لیبل والے کھانے اور دوا پر پابندی لگانے والا وفاقی قانون'],
        ['19ویں ترمیم', 'ملک بھر میں خواتین کو ووٹ کا حق دیا']
      ],
      takeaway: 'مکریکرز نے مسائل بے نقاب کیے؛ 1906 کے قوانین اور ترامیم وہ اصلاحات تھیں جنہوں نے جواب دیا۔'
    },
    zh: {
      title: '离场：把改革者或法律与其作为配对',
      pairs: [
        ['Ida Tarbell', '揭露了冷酷的标准石油托拉斯'],
        ['Upton Sinclair', '写了《The Jungle》，揭露肮脏的肉类加工'],
        ['Jacob Riis', '为改革拍摄了贫民窟的贫困'],
        ['Pure Food and Drug Act (1906)', '禁止标签造假食品和药品的联邦法律'],
        ['第19条修正案', '在全国范围内保障妇女投票权']
      ],
      takeaway: '扒粪记者揭露问题；1906年的法律和修正案则是回应问题的改革。'
    } }
  },

  /* ───────── HS · Progressive Era 1906 · DEEP ───────── */
  {
    id: 'hs-progressive-era-deep-entry', grade: 11, unit: 'progressive-era',
    unitTitle: 'The Progressive Era — Should We Regulate Big Business?', phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.41(c)(5), (c)(28)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: problem → reform',
      items: [
        { before: 'Public outrage after Upton Sinclair’s "The Jungle" helped pass the', after: 'of 1906.', choices: ['Pure Food and Drug Act', 'Sherman Antitrust Act', 'Homestead Act'], a: 0 },
        { before: 'To break the grip of party bosses, Progressives gave voters the initiative, referendum, and', after: 'to remove officials.', choices: ['recall', 'trust', 'tariff'], a: 0 },
        { before: 'Woman suffrage was finally won nationwide by the', after: 'in 1920.', choices: ['16th Amendment', '19th Amendment', '18th Amendment'], a: 1 }
      ],
      takeaway: 'Each Progressive reform answered a specific problem — that cause-and-effect link is the deep move.'
    },
    es: {
      title: 'Calentamiento: problema → reforma',
      items: [
        { before: 'La indignación pública tras "The Jungle" de Upton Sinclair ayudó a aprobar la', after: 'de 1906.', choices: ['Pure Food and Drug Act', 'Sherman Antitrust Act', 'Homestead Act'], a: 0 },
        { before: 'Para romper el control de los jefes de partido, los progresistas dieron a los votantes la iniciativa, el referéndum y la', after: 'para destituir funcionarios.', choices: ['revocatoria (recall)', 'trust', 'tarifa'], a: 0 },
        { before: 'El sufragio femenino se logró por fin en todo el país con la', after: 'en 1920.', choices: ['16.ª Enmienda', '19.ª Enmienda', '18.ª Enmienda'], a: 1 }
      ],
      takeaway: 'Cada reforma progresista respondió a un problema concreto: ese vínculo causa-efecto es el paso profundo.'
    },
    vi: {
      title: 'Khởi động: vấn đề → cải cách',
      items: [
        { before: 'Sự phẫn nộ của công chúng sau "The Jungle" của Upton Sinclair đã giúp thông qua', after: 'năm 1906.', choices: ['Pure Food and Drug Act', 'Sherman Antitrust Act', 'Homestead Act'], a: 0 },
        { before: 'Để phá vỡ sự khống chế của các trùm đảng phái, phe cải cách trao cho cử tri quyền đề xuất, trưng cầu dân ý, và quyền', after: 'để bãi nhiệm quan chức.', choices: ['bãi miễn (recall)', 'trust', 'thuế quan'], a: 0 },
        { before: 'Quyền bầu cử của phụ nữ cuối cùng đã giành được trên toàn quốc nhờ', after: 'năm 1920.', choices: ['Tu chính án thứ 16', 'Tu chính án thứ 19', 'Tu chính án thứ 18'], a: 1 }
      ],
      takeaway: 'Mỗi cải cách Tiến bộ đáp lại một vấn đề cụ thể — mối liên hệ nhân-quả đó là bước học sâu.'
    },
    ar: {
      title: 'تهيئة: مشكلة ← إصلاح',
      items: [
        { before: 'ساعد الغضب الشعبي بعد "The Jungle" لأبتون سنكلير على تمرير', after: 'عام 1906.', choices: ['Pure Food and Drug Act', 'Sherman Antitrust Act', 'Homestead Act'], a: 0 },
        { before: 'لكسر قبضة زعماء الأحزاب، منح الإصلاحيون الناخبين المبادرة والاستفتاء و', after: 'لعزل المسؤولين.', choices: ['الإقالة (recall)', 'التراست', 'التعرفة'], a: 0 },
        { before: 'تحقّق حق اقتراع المرأة أخيرًا في عموم البلاد بموجب', after: 'عام 1920.', choices: ['التعديل السادس عشر', 'التعديل التاسع عشر', 'التعديل الثامن عشر'], a: 1 }
      ],
      takeaway: 'كل إصلاح تقدّمي أجاب عن مشكلة محددة — تلك الصلة بين السبب والنتيجة هي الخطوة العميقة.'
    },
    hi: {
      title: 'वार्म-अप: समस्या → सुधार',
      items: [
        { before: 'अप्टन सिंक्लेयर की "The Jungle" के बाद जन-आक्रोश ने 1906 का', after: 'पारित करने में मदद की।', choices: ['Pure Food and Drug Act', 'Sherman Antitrust Act', 'Homestead Act'], a: 0 },
        { before: 'पार्टी बॉसों की पकड़ तोड़ने के लिए, प्रगतिशीलों ने मतदाताओं को पहल, जनमत-संग्रह और अधिकारियों को हटाने का', after: 'अधिकार दिया।', choices: ['रिकॉल', 'ट्रस्ट', 'टैरिफ'], a: 0 },
        { before: 'महिला मताधिकार अंततः 1920 में', after: 'द्वारा देशभर में मिला।', choices: ['16वाँ संशोधन', '19वाँ संशोधन', '18वाँ संशोधन'], a: 1 }
      ],
      takeaway: 'हर प्रगतिशील सुधार ने एक विशिष्ट समस्या का उत्तर दिया — वह कारण-प्रभाव संबंध ही गहन कदम है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ ← اصلاح',
      items: [
        { before: 'اپٹن سنکلیئر کی "The Jungle" کے بعد عوامی غم و غصے نے 1906 کا', after: 'منظور کرانے میں مدد کی۔', choices: ['Pure Food and Drug Act', 'Sherman Antitrust Act', 'Homestead Act'], a: 0 },
        { before: 'پارٹی سرداروں کی گرفت توڑنے کے لیے، اصلاح پسندوں نے ووٹروں کو پہل، ریفرنڈم اور عہدیداروں کو ہٹانے کا', after: 'اختیار دیا۔', choices: ['ری کال', 'ٹرسٹ', 'محصول'], a: 0 },
        { before: 'خواتین کا حقِ رائے دہی آخرکار 1920 میں', after: 'کے ذریعے ملک بھر میں ملا۔', choices: ['16ویں ترمیم', '19ویں ترمیم', '18ویں ترمیم'], a: 1 }
      ],
      takeaway: 'ہر ترقی پسند اصلاح نے ایک مخصوص مسئلے کا جواب دیا — وہ سبب و اثر کا ربط ہی گہرا قدم ہے۔'
    },
    zh: {
      title: '热身：问题 → 改革',
      items: [
        { before: '厄普顿·辛克莱《The Jungle》引发的公众愤怒推动通过了1906年的', after: '。', choices: ['Pure Food and Drug Act', 'Sherman Antitrust Act', 'Homestead Act'], a: 0 },
        { before: '为打破党魁的控制，进步派赋予选民创制权、复决权，以及罢免官员的', after: '权。', choices: ['罢免权', '托拉斯', '关税'], a: 0 },
        { before: '妇女选举权最终在1920年通过', after: '在全国实现。', choices: ['第16条修正案', '第19条修正案', '第18条修正案'], a: 1 }
      ],
      takeaway: '每项进步派改革都回应了一个具体问题——那种因果联系就是深层学习的关键。'
    } }
  },
  {
    id: 'hs-progressive-era-deep-exit', grade: 11, unit: 'progressive-era',
    unitTitle: 'The Progressive Era — Should We Regulate Big Business?', phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.41(c)(5), (c)(28)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: problem of industrial America vs. Progressive reform',
      cats: ['Problem of industrial America', 'Progressive reform / response'],
      items: [
        { t: 'Trusts fix prices and crush competition', c: 0 },
        { t: 'Rotten, mislabeled food and medicine', c: 0 },
        { t: 'Corrupt party bosses control elections', c: 0 },
        { t: 'The Pure Food and Drug Act of 1906', c: 1 },
        { t: 'Initiative, referendum, and recall', c: 1 },
        { t: 'The 17th Amendment (direct election of senators)', c: 1 }
      ],
      takeaway: 'Sorting problems from the reforms that answered them is the cause-and-effect map behind your argument.'
    },
    es: {
      title: 'Salida: problema de la América industrial vs. reforma progresista',
      cats: ['Problema de la América industrial', 'Reforma / respuesta progresista'],
      items: [
        { t: 'Los trusts fijan precios y aplastan la competencia', c: 0 },
        { t: 'Alimentos y medicinas podridos y mal etiquetados', c: 0 },
        { t: 'Jefes de partido corruptos controlan las elecciones', c: 0 },
        { t: 'La Pure Food and Drug Act de 1906', c: 1 },
        { t: 'Iniciativa, referéndum y revocatoria (recall)', c: 1 },
        { t: 'La 17.ª Enmienda (elección directa de senadores)', c: 1 }
      ],
      takeaway: 'Separar los problemas de las reformas que los respondieron es el mapa causa-efecto detrás de tu argumento.'
    },
    vi: {
      title: 'Phiếu ra: vấn đề của nước Mỹ công nghiệp so với cải cách Tiến bộ',
      cats: ['Vấn đề của nước Mỹ công nghiệp', 'Cải cách / đáp ứng Tiến bộ'],
      items: [
        { t: 'Các trust định giá và bóp nghẹt cạnh tranh', c: 0 },
        { t: 'Thực phẩm và thuốc hư hỏng, dán nhãn sai', c: 0 },
        { t: 'Trùm đảng phái tham nhũng khống chế bầu cử', c: 0 },
        { t: 'Pure Food and Drug Act năm 1906', c: 1 },
        { t: 'Đề xuất, trưng cầu dân ý, và bãi miễn (recall)', c: 1 },
        { t: 'Tu chính án thứ 17 (bầu trực tiếp thượng nghị sĩ)', c: 1 }
      ],
      takeaway: 'Tách vấn đề khỏi các cải cách đáp lại chúng là bản đồ nhân-quả đằng sau lập luận của bạn.'
    },
    ar: {
      title: 'الخروج: مشكلة أمريكا الصناعية مقابل الإصلاح التقدّمي',
      cats: ['مشكلة أمريكا الصناعية', 'إصلاح / استجابة تقدّمية'],
      items: [
        { t: 'التراستات تحدّد الأسعار وتسحق المنافسة', c: 0 },
        { t: 'أغذية وأدوية فاسدة ومغلوطة الوسم', c: 0 },
        { t: 'زعماء أحزاب فاسدون يتحكّمون في الانتخابات', c: 0 },
        { t: 'قانون Pure Food and Drug Act لعام 1906', c: 1 },
        { t: 'المبادرة والاستفتاء والإقالة (recall)', c: 1 },
        { t: 'التعديل السابع عشر (الانتخاب المباشر لأعضاء مجلس الشيوخ)', c: 1 }
      ],
      takeaway: 'فصل المشكلات عن الإصلاحات التي أجابت عنها هو خريطة السبب والنتيجة وراء حجّتك.'
    },
    hi: {
      title: 'निकास: औद्योगिक अमेरिका की समस्या बनाम प्रगतिशील सुधार',
      cats: ['औद्योगिक अमेरिका की समस्या', 'प्रगतिशील सुधार / प्रतिक्रिया'],
      items: [
        { t: 'ट्रस्ट कीमतें तय करते हैं और प्रतिस्पर्धा कुचलते हैं', c: 0 },
        { t: 'सड़ा हुआ, गलत लेबल वाला भोजन और दवा', c: 0 },
        { t: 'भ्रष्ट पार्टी बॉस चुनाव नियंत्रित करते हैं', c: 0 },
        { t: '1906 का Pure Food and Drug Act', c: 1 },
        { t: 'पहल, जनमत-संग्रह और रिकॉल', c: 1 },
        { t: '17वाँ संशोधन (सीनेटरों का प्रत्यक्ष चुनाव)', c: 1 }
      ],
      takeaway: 'समस्याओं को उन सुधारों से अलग करना जिन्होंने उत्तर दिया, आपके तर्क के पीछे का कारण-प्रभाव मानचित्र है।'
    },
    ur: {
      title: 'اخراج: صنعتی امریکہ کا مسئلہ بمقابلہ ترقی پسند اصلاح',
      cats: ['صنعتی امریکہ کا مسئلہ', 'ترقی پسند اصلاح / ردعمل'],
      items: [
        { t: 'ٹرسٹ قیمتیں مقرر کرتے اور مقابلہ کچلتے ہیں', c: 0 },
        { t: 'خراب، غلط لیبل والا کھانا اور دوا', c: 0 },
        { t: 'بدعنوان پارٹی سردار انتخابات کو کنٹرول کرتے ہیں', c: 0 },
        { t: '1906 کا Pure Food and Drug Act', c: 1 },
        { t: 'پہل، ریفرنڈم اور ری کال', c: 1 },
        { t: '17ویں ترمیم (سینیٹرز کا براہِ راست انتخاب)', c: 1 }
      ],
      takeaway: 'مسائل کو ان اصلاحات سے الگ کرنا جنہوں نے جواب دیا، آپ کی دلیل کے پیچھے سبب و اثر کا نقشہ ہے۔'
    },
    zh: {
      title: '离场：工业化美国的问题 vs. 进步派改革',
      cats: ['工业化美国的问题', '进步派改革 / 回应'],
      items: [
        { t: '托拉斯操纵价格、压垮竞争', c: 0 },
        { t: '腐坏、标签造假的食品和药品', c: 0 },
        { t: '腐败的党魁控制选举', c: 0 },
        { t: '1906年的 Pure Food and Drug Act', c: 1 },
        { t: '创制权、复决权和罢免权', c: 1 },
        { t: '第17条修正案（参议员直选）', c: 1 }
      ],
      takeaway: '把问题与回应它们的改革分类，就是你论证背后的因果图。'
    } }
  },

  /* ───────── HS · Progressive Era 1906 · TRANSFER ───────── */
  {
    id: 'hs-progressive-era-transfer-entry', grade: 11, unit: 'progressive-era',
    unitTitle: 'The Progressive Era — Should We Regulate Big Business?', phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.41(c)(31)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving process',
      seconds: 45,
      questions: [
        { q: 'The FIRST move of the problem-solving process is to…', choices: ['pick a solution', 'identify the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing, a good problem-solver…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other stakeholders'], a: 0 },
        { q: 'A strong recommendation is backed by…', choices: ['a loud voice', 'claim + evidence', 'only feelings'], a: 1 },
        { q: 'The LAST step is to…', choices: ['forget it', 'evaluate how well the solution worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Identify → gather → weigh options → choose → defend → evaluate. That is §113.41(c)(31)(B).'
    },
    es: {
      title: 'Calentamiento: el proceso de resolución de problemas',
      seconds: 45,
      questions: [
        { q: 'El PRIMER paso del proceso de resolución de problemas es…', choices: ['elegir una solución', 'identificar el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir, quien resuelve bien problemas…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora a otras partes interesadas'], a: 0 },
        { q: 'Una recomendación sólida se respalda con…', choices: ['una voz fuerte', 'afirmación + evidencia', 'solo sentimientos'], a: 1 },
        { q: 'El ÚLTIMO paso es…', choices: ['olvidarlo', 'evaluar qué tan bien funcionó la solución', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Identificar → reunir → sopesar opciones → elegir → defender → evaluar. Eso es §113.41(c)(31)(B).'
    },
    vi: {
      title: 'Khởi động: quy trình giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Bước ĐẦU TIÊN của quy trình giải quyết vấn đề là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua các bên liên quan khác'], a: 0 },
        { q: 'Một khuyến nghị vững chắc được củng cố bằng…', choices: ['một giọng nói to', 'luận điểm + bằng chứng', 'chỉ cảm xúc'], a: 1 },
        { q: 'Bước CUỐI CÙNG là…', choices: ['quên nó đi', 'đánh giá giải pháp hiệu quả ra sao', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc phương án → chọn → bảo vệ → đánh giá. Đó là §113.41(c)(31)(B).'
    },
    ar: {
      title: 'تهيئة: عملية حل المشكلات',
      seconds: 45,
      questions: [
        { q: 'أول خطوة في عملية حل المشكلات هي…', choices: ['اختيار حل', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل الاختيار، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل أصحاب المصلحة الآخرين'], a: 0 },
        { q: 'التوصية القوية تُدعم بـ…', choices: ['صوت عالٍ', 'ادعاء + دليل', 'المشاعر فقط'], a: 1 },
        { q: 'الخطوة الأخيرة هي…', choices: ['نسيانها', 'تقييم مدى نجاح الحل', 'إخفاء المفاضلات'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن الخيارات ← اختَر ← دافِع ← قيِّم. تلك هي §113.41(c)(31)(B).'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान प्रक्रिया',
      seconds: 45,
      questions: [
        { q: 'समस्या-समाधान प्रक्रिया का पहला कदम है…', choices: ['एक समाधान चुनना', 'समस्या की पहचान करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'चुनने से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य हितधारकों को अनदेखा करता है'], a: 0 },
        { q: 'एक मजबूत सिफारिश का आधार होता है…', choices: ['एक ऊँची आवाज़', 'दावा + साक्ष्य', 'केवल भावनाएँ'], a: 1 },
        { q: 'अंतिम कदम है…', choices: ['उसे भूल जाना', 'यह आँकना कि समाधान कितना अच्छा रहा', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'पहचानें → जुटाएँ → विकल्प तौलें → चुनें → बचाव करें → आँकें। यही §113.41(c)(31)(B) है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کا عمل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے کے عمل کا پہلا قدم ہے…', choices: ['ایک حل چننا', 'مسئلے کی نشاندہی کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'چننے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دیگر اسٹیک ہولڈرز کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'ایک مضبوط سفارش کی بنیاد ہوتی ہے…', choices: ['ایک بلند آواز', 'دعویٰ + ثبوت', 'صرف جذبات'], a: 1 },
        { q: 'آخری قدم ہے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ حل کتنا کارگر رہا', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'نشاندہی ← جمع ← اختیارات تولنا ← چننا ← دفاع ← جانچنا۔ یہی §113.41(c)(31)(B) ہے۔'
    },
    zh: {
      title: '热身：解决问题的流程',
      seconds: 45,
      questions: [
        { q: '解决问题流程的第一步是…', choices: ['挑选一个方案', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在做出选择之前，优秀的解决问题者会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视其他利益相关者'], a: 0 },
        { q: '有力的建议背后有…', choices: ['大嗓门', '主张 + 证据', '只有感受'], a: 1 },
        { q: '最后一步是…', choices: ['把它忘掉', '评估方案的效果如何', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡方案 → 选择 → 辩护 → 评估。这就是 §113.41(c)(31)(B)。'
    } }
  },
  {
    id: 'hs-progressive-era-transfer-exit', grade: 11, unit: 'progressive-era',
    unitTitle: 'The Progressive Era — Should We Regulate Big Business?', phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.41(c)(31)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim, evidence & trade-offs',
      items: [
        { before: 'A recommendation about regulating business without', after: 'from the sources is just an opinion.', choices: ['evidence', 'a title', 'a slogan'], a: 0 },
        { before: 'Reasoning from a stakeholder’s', after: 'is how you weigh the owner’s and the worker’s 1906 differently.', choices: ['point of view', 'budget', 'signature'], a: 0 },
        { before: 'Honest history means naming both the gains and the', after: 'of Progressive reform — like reforms that excluded Black Americans.', choices: ['blind spots', 'colors', 'vocabulary'], a: 0 }
      ],
      takeaway: 'Claim + evidence + weighing the trade-offs and blind spots = running the full problem-solving process.'
    },
    es: {
      title: 'Salida: afirmación, evidencia y concesiones',
      items: [
        { before: 'Una recomendación sobre regular a las empresas sin', after: 'de las fuentes es solo una opinión.', choices: ['evidencia', 'un título', 'un eslogan'], a: 0 },
        { before: 'Razonar desde el', after: 'de una parte interesada es cómo sopesas de distinta forma el 1906 del dueño y el del trabajador.', choices: ['punto de vista', 'presupuesto', 'firma'], a: 0 },
        { before: 'La historia honesta significa nombrar tanto los logros como las', after: 'de la reforma progresista, como las reformas que excluyeron a los afroamericanos.', choices: ['zonas ciegas', 'colores', 'vocabulario'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + sopesar concesiones y zonas ciegas = recorrer todo el proceso de resolución.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm, bằng chứng & đánh đổi',
      items: [
        { before: 'Một khuyến nghị về việc điều tiết doanh nghiệp mà không có', after: 'từ các nguồn thì chỉ là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một khẩu hiệu'], a: 0 },
        { before: 'Suy luận từ', after: 'của một bên liên quan là cách bạn cân nhắc năm 1906 của chủ và của công nhân khác nhau.', choices: ['góc nhìn', 'ngân sách', 'chữ ký'], a: 0 },
        { before: 'Lịch sử trung thực nghĩa là nêu cả thành quả lẫn những', after: 'của cải cách Tiến bộ — như các cải cách loại trừ người Mỹ da đen.', choices: ['điểm mù', 'màu sắc', 'từ vựng'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + cân nhắc đánh đổi và điểm mù = thực hiện trọn quy trình giải quyết vấn đề.'
    },
    ar: {
      title: 'الخروج: ادعاء ودليل ومفاضلات',
      items: [
        { before: 'التوصية بشأن تنظيم الأعمال بلا', after: 'من المصادر ما هي إلا رأي.', choices: ['دليل', 'عنوان', 'شعار'], a: 0 },
        { before: 'الاستدلال من', after: 'صاحب المصلحة هو كيف تزن عام 1906 لدى المالك والعامل بشكل مختلف.', choices: ['وجهة نظر', 'ميزانية', 'توقيع'], a: 0 },
        { before: 'التاريخ الصادق يعني تسمية المكاسب و', after: 'الخاصة بالإصلاح التقدّمي معًا — مثل الإصلاحات التي أقصت الأمريكيين السود.', choices: ['النقاط العمياء', 'الألوان', 'المفردات'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + موازنة المفاضلات والنقاط العمياء = تنفيذ عملية حل المشكلات كاملةً.'
    },
    hi: {
      title: 'निकास: दावा, साक्ष्य और समझौते',
      items: [
        { before: 'व्यवसाय के विनियमन पर स्रोतों से', after: 'के बिना दी गई सिफारिश महज़ एक राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नारा'], a: 0 },
        { before: 'किसी हितधारक के', after: 'से तर्क करना ही वह तरीका है जिससे आप मालिक और मज़दूर के 1906 को अलग-अलग तौलते हैं।', choices: ['दृष्टिकोण', 'बजट', 'हस्ताक्षर'], a: 0 },
        { before: 'ईमानदार इतिहास का अर्थ है प्रगतिशील सुधार के लाभों और उसकी', after: 'दोनों का नाम लेना — जैसे वे सुधार जिन्होंने अश्वेत अमेरिकियों को बाहर रखा।', choices: ['अंध-बिंदुओं', 'रंगों', 'शब्दावली'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौतों और अंध-बिंदुओं को तौलना = पूरी समस्या-समाधान प्रक्रिया चलाना।'
    },
    ur: {
      title: 'اخراج: دعویٰ، ثبوت اور سمجھوتے',
      items: [
        { before: 'کاروبار کے ضابطے پر مآخذ سے', after: 'کے بغیر دی گئی سفارش محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نعرہ'], a: 0 },
        { before: 'کسی اسٹیک ہولڈر کے', after: 'سے استدلال کرنا ہی وہ طریقہ ہے جس سے آپ مالک اور مزدور کے 1906 کو الگ الگ تولتے ہیں۔', choices: ['نقطہ نظر', 'بجٹ', 'دستخط'], a: 0 },
        { before: 'ایماندار تاریخ کا مطلب ہے ترقی پسند اصلاح کے فوائد اور اس کے', after: 'دونوں کا نام لینا — جیسے وہ اصلاحات جنہوں نے سیاہ فام امریکیوں کو باہر رکھا۔', choices: ['اندھے پہلوؤں', 'رنگوں', 'الفاظ'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتوں اور اندھے پہلوؤں کو تولنا = پورا مسئلہ حل کرنے کا عمل چلانا۔'
    },
    zh: {
      title: '离场：主张、证据与取舍',
      items: [
        { before: '一份关于监管企业的建议若没有来自资料的', after: '，就只是一种意见。', choices: ['证据', '一个标题', '一句口号'], a: 0 },
        { before: '从某位利益相关者的', after: '进行推理，就是你如何区别地权衡业主和工人的1906年。', choices: ['视角', '预算', '签名'], a: 0 },
        { before: '诚实的历史意味着既说出进步派改革的成果，也说出它的', after: '——比如把非裔美国人排除在外的那些改革。', choices: ['盲点', '颜色', '词汇'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 权衡取舍与盲点 = 走完整个解决问题的流程。'
    } }
  }

]);
