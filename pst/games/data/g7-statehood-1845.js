/* PST Arcade — ticket registry for Grade 7 · One Star or Many? 1845 (Texas annexation).
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. To add tickets, append objects
   with the same shape: {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}.
   Annexation and slavery content is kept factual and respectful (TEC §28.0022). */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 7 · Statehood 1845 · SURFACE ───────── */
  {
    id: 'g7-statehood-1845-surface-entry', grade: 7, unit: 'statehood-1845',
    unitTitle: 'One Star or Many? 1845 — Should Texas Join the United States?', phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.19(c)(11), (c)(13)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: annexation words',
      seconds: 45,
      questions: [
        { q: 'A country run by elected leaders instead of a king is a…', choices: ['republic', 'treaty', 'tariff'], a: 0 },
        { q: 'One country adding another’s territory to itself is called…', choices: ['sovereignty', 'annexation', 'ratification'], a: 1 },
        { q: 'A country’s power to govern itself and make its own decisions is its…', choices: ['sovereignty', 'statehood', 'national debt'], a: 0 },
        { q: 'The money a government owes and must pay back is its…', choices: ['tariff', 'treaty', 'national debt'], a: 2 }
      ],
      takeaway: 'Know these four words and you can follow the whole 1845 annexation debate.'
    },
    es: {
      title: 'Calentamiento: palabras de la anexión',
      seconds: 45,
      questions: [
        { q: 'Un país gobernado por líderes electos en lugar de un rey es una…', choices: ['república', 'tratado', 'arancel'], a: 0 },
        { q: 'Que un país sume a sí mismo el territorio de otro se llama…', choices: ['soberanía', 'anexión', 'ratificación'], a: 1 },
        { q: 'El poder de un país para gobernarse y tomar sus propias decisiones es su…', choices: ['soberanía', 'estatalidad', 'deuda nacional'], a: 0 },
        { q: 'El dinero que un gobierno debe y tiene que devolver es su…', choices: ['arancel', 'tratado', 'deuda nacional'], a: 2 }
      ],
      takeaway: 'Domina estas cuatro palabras y podrás seguir todo el debate de la anexión de 1845.'
    },
    vi: {
      title: 'Khởi động: từ vựng về sáp nhập',
      seconds: 45,
      questions: [
        { q: 'Một quốc gia do các nhà lãnh đạo được bầu chọn cầm quyền thay vì vua là một…', choices: ['nền cộng hòa', 'hiệp ước', 'thuế quan'], a: 0 },
        { q: 'Việc một quốc gia sáp nhập lãnh thổ của quốc gia khác vào mình được gọi là…', choices: ['chủ quyền', 'sáp nhập', 'phê chuẩn'], a: 1 },
        { q: 'Quyền của một quốc gia tự cai trị và tự ra quyết định là…', choices: ['chủ quyền', 'tư cách tiểu bang', 'nợ quốc gia'], a: 0 },
        { q: 'Khoản tiền mà chính phủ nợ và phải trả lại là…', choices: ['thuế quan', 'hiệp ước', 'nợ quốc gia'], a: 2 }
      ],
      takeaway: 'Nắm bốn từ này là bạn có thể theo dõi cả cuộc tranh luận sáp nhập năm 1845.'
    },
    ar: {
      title: 'تهيئة: كلمات الضم',
      seconds: 45,
      questions: [
        { q: 'البلد الذي يحكمه قادة منتخبون بدلاً من ملك هو…', choices: ['جمهورية', 'معاهدة', 'تعريفة جمركية'], a: 0 },
        { q: 'أن يضيف بلد إليه أرض بلد آخر يُسمّى…', choices: ['السيادة', 'الضم', 'التصديق'], a: 1 },
        { q: 'قدرة البلد على حكم نفسه واتخاذ قراراته هي…', choices: ['السيادة', 'مرتبة الولاية', 'الدين الوطني'], a: 0 },
        { q: 'المال الذي تدين به الحكومة وعليها سداده هو…', choices: ['التعريفة الجمركية', 'المعاهدة', 'الدين الوطني'], a: 2 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وستتابع كامل نقاش الضم عام 1845.'
    },
    hi: {
      title: 'वार्म-अप: विलय के शब्द',
      seconds: 45,
      questions: [
        { q: 'राजा के बजाय निर्वाचित नेताओं द्वारा चलाया जाने वाला देश एक है…', choices: ['गणराज्य', 'संधि', 'टैरिफ'], a: 0 },
        { q: 'एक देश द्वारा दूसरे के क्षेत्र को अपने में मिलाना कहलाता है…', choices: ['सार्वभौमिकता', 'विलय', 'अनुसमर्थन'], a: 1 },
        { q: 'किसी देश की खुद पर शासन करने और अपने निर्णय लेने की शक्ति उसकी…', choices: ['सार्वभौमिकता', 'राज्य-पद', 'राष्ट्रीय कर्ज़'], a: 0 },
        { q: 'सरकार जो पैसा उधार लेती है और लौटाना होता है, वह उसका…', choices: ['टैरिफ', 'संधि', 'राष्ट्रीय कर्ज़'], a: 2 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और आप 1845 के पूरे विलय वाद-विवाद को समझ सकेंगे।'
    },
    ur: {
      title: 'وارم اپ: الحاق کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'وہ ملک جو بادشاہ کے بجائے منتخب رہنماؤں سے چلتا ہو، وہ…', choices: ['جمہوریہ', 'معاہدہ', 'محصول'], a: 0 },
        { q: 'ایک ملک کا دوسرے کا علاقہ اپنے اندر شامل کرنا کہلاتا ہے…', choices: ['خودمختاری', 'الحاق', 'توثیق'], a: 1 },
        { q: 'کسی ملک کی خود پر حکومت کرنے اور اپنے فیصلے کرنے کی طاقت اس کی…', choices: ['خودمختاری', 'ریاستی حیثیت', 'قومی قرض'], a: 0 },
        { q: 'وہ رقم جو حکومت مقروض ہو اور واپس کرنی ہو، وہ اس کا…', choices: ['محصول', 'معاہدہ', 'قومی قرض'], a: 2 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو آپ 1845 کے پورے الحاق کے مباحثے کو سمجھ سکیں گے۔'
    },
    zh: {
      title: '热身：并入词汇',
      seconds: 45,
      questions: [
        { q: '由民选领导人而非国王管理的国家是一个…', choices: ['共和国', '条约', '关税'], a: 0 },
        { q: '一个国家把另一个国家的领土并入自己，称为…', choices: ['主权', '并入', '批准'], a: 1 },
        { q: '一个国家自我统治、自主决策的权力是它的…', choices: ['主权', '州的地位', '国家债务'], a: 0 },
        { q: '政府欠下并必须偿还的钱是它的…', choices: ['关税', '条约', '国家债务'], a: 2 }
      ],
      takeaway: '掌握这四个词，你就能跟上整场 1845 年的并入辩论。'
    } }
  },
  {
    id: 'g7-statehood-1845-surface-exit', grade: 7, unit: 'statehood-1845',
    unitTitle: 'One Star or Many? 1845 — Should Texas Join the United States?', phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.19(c)(11), (c)(13)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['annexation', 'one country adding another’s territory to itself'],
        ['sovereignty', 'a country’s power to govern itself'],
        ['treaty', 'a formal, written agreement between countries'],
        ['tariff', 'a tax on goods coming in from another country'],
        ['ratify', 'to formally approve an agreement so it becomes official']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['anexión', 'que un país sume a sí mismo el territorio de otro'],
        ['soberanía', 'el poder de un país para gobernarse a sí mismo'],
        ['tratado', 'un acuerdo formal y escrito entre países'],
        ['arancel', 'un impuesto sobre bienes que entran de otro país'],
        ['ratificar', 'aprobar formalmente un acuerdo para que sea oficial']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['sáp nhập', 'một quốc gia sáp nhập lãnh thổ quốc gia khác vào mình'],
        ['chủ quyền', 'quyền của một quốc gia tự cai trị'],
        ['hiệp ước', 'một thỏa thuận chính thức, bằng văn bản giữa các quốc gia'],
        ['thuế quan', 'thuế đánh vào hàng hóa nhập từ quốc gia khác'],
        ['phê chuẩn', 'chính thức chấp thuận một thỏa thuận để nó có hiệu lực']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['الضم', 'أن يضيف بلد إليه أرض بلد آخر'],
        ['السيادة', 'قدرة البلد على حكم نفسه'],
        ['المعاهدة', 'اتفاق رسمي مكتوب بين الدول'],
        ['التعريفة الجمركية', 'ضريبة على البضائع الواردة من بلد آخر'],
        ['التصديق', 'الموافقة الرسمية على اتفاق ليصبح رسمياً']
      ],
      takeaway: 'إذا طابقت الخمس جميعاً، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['विलय', 'एक देश द्वारा दूसरे का क्षेत्र अपने में मिलाना'],
        ['सार्वभौमिकता', 'किसी देश की खुद पर शासन करने की शक्ति'],
        ['संधि', 'देशों के बीच एक औपचारिक, लिखित समझौता'],
        ['टैरिफ', 'दूसरे देश से आने वाले माल पर कर'],
        ['अनुसमर्थन करना', 'एक समझौते को औपचारिक रूप से मंजूर करना ताकि वह आधिकारिक बन जाए']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['الحاق', 'ایک ملک کا دوسرے کا علاقہ اپنے اندر شامل کرنا'],
        ['خودمختاری', 'کسی ملک کی خود پر حکومت کرنے کی طاقت'],
        ['معاہدہ', 'ممالک کے درمیان ایک رسمی، تحریری معاہدہ'],
        ['محصول', 'دوسرے ملک سے آنے والے مال پر ٹیکس'],
        ['توثیق کرنا', 'کسی معاہدے کو رسمی طور پر منظور کرنا تاکہ وہ سرکاری ہو جائے']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['并入', '一个国家把另一个国家的领土并入自己'],
        ['主权', '一个国家自我统治的权力'],
        ['条约', '国家之间正式、书面的协议'],
        ['关税', '对从另一个国家进口货物征收的税'],
        ['批准', '正式批准一项协议使其生效']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 7 · Statehood 1845 · DEEP ───────── */
  {
    id: 'g7-statehood-1845-deep-entry', grade: 7, unit: 'statehood-1845',
    unitTitle: 'One Star or Many? 1845 — Should Texas Join the United States?', phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.19(c)(11), (c)(12)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: costs & benefits',
      items: [
        { before: 'Joining the U.S. would bring the protection of the', after: 'to a republic hard to defend alone.', choices: ['U.S. Army', 'Mexican Army', 'Rio Grande'], a: 0 },
        { before: 'Staying independent would let Texas keep its', after: 'and its own choices.', choices: ['debt', 'sovereignty', 'tariffs'], a: 1 },
        { before: 'Because Texas allowed slavery, joining as a slave state deepened the U.S.', after: 'between North and South.', choices: ['tariff', 'treaty', 'sectional divide'], a: 2 }
      ],
      takeaway: 'Every option in 1845 carried a benefit AND a cost. Trace both.'
    },
    es: {
      title: 'Calentamiento: costos y beneficios',
      items: [
        { before: 'Unirse a EE. UU. traería la protección del', after: 'a una república difícil de defender sola.', choices: ['Ejército de EE. UU.', 'Ejército mexicano', 'Río Grande'], a: 0 },
        { before: 'Quedarse independiente permitiría a Texas conservar su', after: 'y sus propias decisiones.', choices: ['deuda', 'soberanía', 'aranceles'], a: 1 },
        { before: 'Como Texas permitía la esclavitud, unirse como estado esclavista profundizó la', after: 'de EE. UU. entre el Norte y el Sur.', choices: ['arancel', 'tratado', 'división seccional'], a: 2 }
      ],
      takeaway: 'Cada opción en 1845 llevaba un beneficio Y un costo. Rastrea ambos.'
    },
    vi: {
      title: 'Khởi động: chi phí & lợi ích',
      items: [
        { before: 'Gia nhập Hoa Kỳ sẽ mang lại sự bảo vệ của', after: 'cho một nền cộng hòa khó tự vệ một mình.', choices: ['Quân đội Hoa Kỳ', 'Quân đội Mexico', 'Sông Rio Grande'], a: 0 },
        { before: 'Giữ độc lập sẽ cho phép Texas giữ lại', after: 'và các lựa chọn riêng của mình.', choices: ['nợ', 'chủ quyền', 'thuế quan'], a: 1 },
        { before: 'Vì Texas cho phép chế độ nô lệ, gia nhập với tư cách bang nô lệ đã làm sâu sắc thêm', after: 'của Hoa Kỳ giữa miền Bắc và miền Nam.', choices: ['thuế quan', 'hiệp ước', 'sự chia rẽ vùng miền'], a: 2 }
      ],
      takeaway: 'Mọi lựa chọn năm 1845 đều mang cả lợi ích VÀ chi phí. Hãy truy cả hai.'
    },
    ar: {
      title: 'تهيئة: التكاليف والمنافع',
      items: [
        { before: 'الانضمام إلى الولايات المتحدة سيجلب حماية', after: 'لجمهورية يصعب الدفاع عنها وحدها.', choices: ['الجيش الأمريكي', 'الجيش المكسيكي', 'نهر ريو جراندي'], a: 0 },
        { before: 'البقاء مستقلة سيسمح لتكساس بالاحتفاظ ب', after: 'وبخياراتها الخاصة.', choices: ['الدين', 'السيادة', 'التعريفات الجمركية'], a: 1 },
        { before: 'لأن تكساس أباحت الرق، فإن انضمامها كولاية عبودية عمّق', after: 'في الولايات المتحدة بين الشمال والجنوب.', choices: ['تعريفة جمركية', 'معاهدة', 'الانقسام الإقليمي'], a: 2 }
      ],
      takeaway: 'كل خيار عام 1845 حمل منفعة وتكلفة معاً. تتبّع كليهما.'
    },
    hi: {
      title: 'वार्म-अप: लागत और लाभ',
      items: [
        { before: 'अमेरिका में शामिल होना अकेले रक्षा में कठिन एक गणराज्य को', after: 'की सुरक्षा देता।', choices: ['अमेरिकी सेना', 'मेक्सिकी सेना', 'रियो ग्रांडे'], a: 0 },
        { before: 'स्वतंत्र रहना टेक्सास को अपनी', after: 'और अपने निर्णय रखने देता।', choices: ['कर्ज़', 'सार्वभौमिकता', 'टैरिफ'], a: 1 },
        { before: 'चूंकि टेक्सास में दासता थी, दास-राज्य के रूप में शामिल होने से उत्तर और दक्षिण के बीच अमेरिका का', after: 'गहरा गया।', choices: ['टैरिफ', 'संधि', 'क्षेत्रीय विभाजन'], a: 2 }
      ],
      takeaway: '1845 का हर विकल्प एक लाभ और एक लागत दोनों लाता था। दोनों को खोजें।'
    },
    ur: {
      title: 'وارم اپ: لاگت اور فوائد',
      items: [
        { before: 'امریکہ میں شامل ہونا اکیلے دفاع میں مشکل ایک جمہوریہ کو', after: 'کی حفاظت دیتا۔', choices: ['امریکی فوج', 'مکسیکی فوج', 'دریائے ریو گرانڈے'], a: 0 },
        { before: 'آزاد رہنا ٹیکساس کو اپنی', after: 'اور اپنے فیصلے رکھنے دیتا۔', choices: ['قرض', 'خودمختاری', 'محصولات'], a: 1 },
        { before: 'چونکہ ٹیکساس میں غلامی تھی، غلام ریاست کے طور پر شامل ہونے نے شمال اور جنوب کے درمیان امریکی', after: 'کو گہرا کر دیا۔', choices: ['محصول', 'معاہدہ', 'علاقائی تقسیم'], a: 2 }
      ],
      takeaway: '1845 کا ہر اختیار ایک فائدہ اور ایک لاگت دونوں لاتا تھا۔ دونوں کو تلاش کریں۔'
    },
    zh: {
      title: '热身：成本与收益',
      items: [
        { before: '加入美国会为一个难以单独防守的共和国带来', after: '的保护。', choices: ['美国军队', '墨西哥军队', '格兰德河'], a: 0 },
        { before: '保持独立会让德克萨斯保留它的', after: '以及自己的选择。', choices: ['债务', '主权', '关税'], a: 1 },
        { before: '由于德克萨斯允许奴隶制，作为蓄奴州加入加深了美国南北方之间的', after: '。', choices: ['关税', '条约', '地区分裂'], a: 2 }
      ],
      takeaway: '1845 年的每个选择都兼有收益与成本。两者都要追踪。'
    } }
  },
  {
    id: 'g7-statehood-1845-deep-exit', grade: 7, unit: 'statehood-1845',
    unitTitle: 'One Star or Many? 1845 — Should Texas Join the United States?', phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.19(c)(11), (c)(12)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort join vs. stay independent',
      cats: ['Join the United States', 'Stay an independent republic'],
      items: [
        { t: 'Protection of the U.S. Army', c: 0 },
        { t: 'Help paying off the national debt', c: 0 },
        { t: 'Larger trade and U.S. markets', c: 0 },
        { t: 'Keeps its own sovereignty and self-rule', c: 1 },
        { t: 'No new U.S. taxes or tariffs', c: 1 },
        { t: 'Avoids being pulled into other nations’ quarrels', c: 1 }
      ],
      takeaway: 'Sorting outcomes by option is the concept map behind your 1845 argument.'
    },
    es: {
      title: 'Salida: clasifica unirse vs. seguir independiente',
      cats: ['Unirse a Estados Unidos', 'Seguir siendo república independiente'],
      items: [
        { t: 'Protección del Ejército de EE. UU.', c: 0 },
        { t: 'Ayuda para pagar la deuda nacional', c: 0 },
        { t: 'Mayor comercio y mercados de EE. UU.', c: 0 },
        { t: 'Conserva su soberanía y autogobierno', c: 1 },
        { t: 'Sin nuevos impuestos ni aranceles de EE. UU.', c: 1 },
        { t: 'Evita verse arrastrada a los conflictos de otras naciones', c: 1 }
      ],
      takeaway: 'Clasificar los resultados por opción es el mapa conceptual detrás de tu argumento de 1845.'
    },
    vi: {
      title: 'Phiếu ra: phân loại gia nhập vs. giữ độc lập',
      cats: ['Gia nhập Hoa Kỳ', 'Giữ nền cộng hòa độc lập'],
      items: [
        { t: 'Sự bảo vệ của Quân đội Hoa Kỳ', c: 0 },
        { t: 'Giúp trả nợ quốc gia', c: 0 },
        { t: 'Thương mại lớn hơn và thị trường Hoa Kỳ', c: 0 },
        { t: 'Giữ chủ quyền và quyền tự trị', c: 1 },
        { t: 'Không có thuế hay thuế quan mới của Hoa Kỳ', c: 1 },
        { t: 'Tránh bị lôi kéo vào tranh chấp của các quốc gia khác', c: 1 }
      ],
      takeaway: 'Phân loại kết quả theo lựa chọn chính là sơ đồ khái niệm đằng sau lập luận năm 1845 của bạn.'
    },
    ar: {
      title: 'الخروج: صنّف الانضمام مقابل البقاء مستقلاً',
      cats: ['الانضمام إلى الولايات المتحدة', 'البقاء جمهورية مستقلة'],
      items: [
        { t: 'حماية الجيش الأمريكي', c: 0 },
        { t: 'المساعدة في سداد الدين الوطني', c: 0 },
        { t: 'تجارة أوسع وأسواق أمريكية', c: 0 },
        { t: 'تحتفظ بسيادتها وحكمها الذاتي', c: 1 },
        { t: 'لا ضرائب أو تعريفات أمريكية جديدة', c: 1 },
        { t: 'تجنّب الانجرار إلى نزاعات الأمم الأخرى', c: 1 }
      ],
      takeaway: 'تصنيف النتائج حسب الخيار هو الخريطة المفاهيمية وراء حجتك لعام 1845.'
    },
    hi: {
      title: 'निकास: शामिल होना बनाम स्वतंत्र रहना छाँटें',
      cats: ['अमेरिका में शामिल होना', 'स्वतंत्र गणराज्य बने रहना'],
      items: [
        { t: 'अमेरिकी सेना की सुरक्षा', c: 0 },
        { t: 'राष्ट्रीय कर्ज़ चुकाने में मदद', c: 0 },
        { t: 'बड़ा व्यापार और अमेरिकी बाज़ार', c: 0 },
        { t: 'अपनी सार्वभौमिकता और स्व-शासन रखता है', c: 1 },
        { t: 'कोई नया अमेरिकी कर या टैरिफ नहीं', c: 1 },
        { t: 'अन्य देशों के झगड़ों में खिंचने से बचता है', c: 1 }
      ],
      takeaway: 'परिणामों को विकल्प के अनुसार छाँटना ही 1845 के आपके तर्क के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: شامل ہونا بمقابلہ آزاد رہنا چھانٹیں',
      cats: ['امریکہ میں شامل ہونا', 'آزاد جمہوریہ رہنا'],
      items: [
        { t: 'امریکی فوج کی حفاظت', c: 0 },
        { t: 'قومی قرض ادا کرنے میں مدد', c: 0 },
        { t: 'بڑا تجارت اور امریکی منڈیاں', c: 0 },
        { t: 'اپنی خودمختاری اور خودحکومی رکھتا ہے', c: 1 },
        { t: 'کوئی نیا امریکی ٹیکس یا محصول نہیں', c: 1 },
        { t: 'دوسری اقوام کے جھگڑوں میں گھسیٹنے سے بچتا ہے', c: 1 }
      ],
      takeaway: 'نتائج کو اختیار کے مطابق چھانٹنا ہی 1845 کے آپ کے دلیل کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：把“加入”与“保持独立”分类',
      cats: ['加入美国', '保持独立共和国'],
      items: [
        { t: '美国军队的保护', c: 0 },
        { t: '帮助偿还国家债务', c: 0 },
        { t: '更大的贸易与美国市场', c: 0 },
        { t: '保留自己的主权与自治', c: 1 },
        { t: '没有新的美国税或关税', c: 1 },
        { t: '避免被卷入其他国家的纠纷', c: 1 }
      ],
      takeaway: '按选项对结果分类，就是你 1845 年论证背后的概念图。'
    } }
  },

  /* ───────── Grade 7 · Statehood 1845 · TRANSFER ───────── */
  {
    id: 'g7-statehood-1845-transfer-entry', grade: 7, unit: 'statehood-1845',
    unitTitle: 'One Star or Many? 1845 — Should Texas Join the United States?', phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.19(c)(23)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving steps',
      seconds: 45,
      questions: [
        { q: 'The FIRST move in the problem-solving process is to…', choices: ['pick a solution', 'define the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing, a good problem-solver…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other stakeholders'], a: 0 },
        { q: 'A strong recommendation is backed by…', choices: ['a loud voice', 'claim + evidence', 'only feelings'], a: 1 },
        { q: 'After choosing a solution, you should…', choices: ['forget it', 'evaluate how well it worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Define → gather → weigh → decide → defend → evaluate. That is §113.19(c)(23)(B).'
    },
    es: {
      title: 'Calentamiento: los pasos para resolver problemas',
      seconds: 45,
      questions: [
        { q: 'El PRIMER paso del proceso de resolución de problemas es…', choices: ['elegir una solución', 'definir el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir, quien resuelve bien problemas…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora a otras partes interesadas'], a: 0 },
        { q: 'Una recomendación sólida se respalda con…', choices: ['una voz fuerte', 'afirmación + evidencia', 'solo sentimientos'], a: 1 },
        { q: 'Después de elegir una solución, deberías…', choices: ['olvidarla', 'evaluar qué tan bien funcionó', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Definir → reunir → sopesar → decidir → defender → evaluar. Eso es §113.19(c)(23)(B).'
    },
    vi: {
      title: 'Khởi động: các bước giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Bước ĐẦU TIÊN của quy trình giải quyết vấn đề là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua các bên liên quan khác'], a: 0 },
        { q: 'Một đề xuất vững chắc được củng cố bằng…', choices: ['một giọng nói to', 'luận điểm + bằng chứng', 'chỉ cảm xúc'], a: 1 },
        { q: 'Sau khi chọn một giải pháp, bạn nên…', choices: ['quên nó đi', 'đánh giá xem nó hiệu quả ra sao', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → quyết định → bảo vệ → đánh giá. Đó là §113.19(c)(23)(B).'
    },
    ar: {
      title: 'تهيئة: خطوات حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'الخطوة الأولى في عملية حل المشكلة هي…', choices: ['اختيار حل', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل الاختيار، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل أصحاب المصلحة الآخرين'], a: 0 },
        { q: 'التوصية القوية تُدعم بـ…', choices: ['صوت عالٍ', 'ادعاء + دليل', 'المشاعر فقط'], a: 1 },
        { q: 'بعد اختيار حل، ينبغي أن…', choices: ['تنساه', 'تقيّم مدى نجاحه', 'تخفي المفاضلات'], a: 1 }
      ],
      takeaway: 'حدّد ← اجمع ← وازِن ← قرّر ← دافِع ← قيّم. تلك هي §113.19(c)(23)(B).'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान के चरण',
      seconds: 45,
      questions: [
        { q: 'समस्या-समाधान प्रक्रिया का पहला कदम है…', choices: ['एक समाधान चुनना', 'समस्या को परिभाषित करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'चुनने से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य हितधारकों को अनदेखा करता है'], a: 0 },
        { q: 'एक मजबूत सिफारिश का आधार होता है…', choices: ['एक ऊंची आवाज़', 'दावा + साक्ष्य', 'केवल भावनाएँ'], a: 1 },
        { q: 'समाधान चुनने के बाद, आपको चाहिए…', choices: ['उसे भूल जाना', 'यह आँकना कि वह कितना अच्छा रहा', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → निर्णय लें → बचाव करें → आँकें। यही §113.19(c)(23)(B) है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کے مراحل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے کے عمل کا پہلا قدم ہے…', choices: ['ایک حل چننا', 'مسئلے کو متعین کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'چننے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دوسرے اسٹیک ہولڈرز کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'ایک مضبوط سفارش کی بنیاد ہوتی ہے…', choices: ['ایک بلند آواز', 'دعویٰ + ثبوت', 'صرف جذبات'], a: 1 },
        { q: 'حل چننے کے بعد، آپ کو چاہیے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ وہ کتنا کارگر رہا', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← فیصلہ کریں ← دفاع کریں ← جانچیں۔ یہی §113.19(c)(23)(B) ہے۔'
    },
    zh: {
      title: '热身：解决问题的步骤',
      seconds: 45,
      questions: [
        { q: '解决问题过程的第一步是…', choices: ['挑选一个方案', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在做出选择之前，优秀的解决问题者会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视其他利益相关者'], a: 0 },
        { q: '有力的建议背后有…', choices: ['大嗓门', '主张 + 证据', '只有感受'], a: 1 },
        { q: '选定方案之后，你应当…', choices: ['把它忘掉', '评估它的效果如何', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 决定 → 辩护 → 评估。这就是 §113.19(c)(23)(B)。'
    } }
  },
  {
    id: 'g7-statehood-1845-transfer-exit', grade: 7, unit: 'statehood-1845',
    unitTitle: 'One Star or Many? 1845 — Should Texas Join the United States?', phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.19(c)(23)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim + evidence',
      items: [
        { before: 'A recommendation without', after: 'is just an opinion.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: 'When stakeholders disagree, each should support their view with', after: 'from the sources.', choices: ['evidence', 'volume', 'guesses'], a: 0 },
        { before: 'Naming the', after: 'of your solution shows you weighed it honestly.', choices: ['trade-offs', 'colors', 'vocabulary'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs = thinking like a historian and a citizen.'
    },
    es: {
      title: 'Salida: afirmación + evidencia',
      items: [
        { before: 'Una recomendación sin', after: 'es solo una opinión.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Cuando las partes interesadas no están de acuerdo, cada una debe respaldar su postura con', after: 'de las fuentes.', choices: ['evidencia', 'volumen', 'suposiciones'], a: 0 },
        { before: 'Nombrar las', after: 'de tu solución muestra que la sopesaste con honestidad.', choices: ['concesiones', 'colores', 'vocabulario'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones = pensar como un historiador y un ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm + bằng chứng',
      items: [
        { before: 'Một đề xuất không có', after: 'thì chỉ là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Khi các bên liên quan bất đồng, mỗi bên nên củng cố quan điểm của mình bằng', after: 'từ các nguồn.', choices: ['bằng chứng', 'âm lượng', 'phỏng đoán'], a: 0 },
        { before: 'Nêu ra những', after: 'của giải pháp cho thấy bạn đã cân nhắc nó một cách trung thực.', choices: ['đánh đổi', 'màu sắc', 'từ vựng'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi = tư duy như một nhà sử học và một công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء + دليل',
      items: [
        { before: 'التوصية بلا', after: 'ما هي إلا رأي.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'عندما يختلف أصحاب المصلحة، ينبغي أن يدعم كلّ منهم رأيه بـ', after: 'من المصادر.', choices: ['أدلة', 'علوّ الصوت', 'تخمينات'], a: 0 },
        { before: 'إن تسمية', after: 'الخاصة بحلّك تُظهر أنك وازنته بصدق.', choices: ['المفاضلات', 'الألوان', 'المفردات'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات = التفكير كمؤرّخ ومواطن.'
    },
    hi: {
      title: 'निकास: दावा + साक्ष्य',
      items: [
        { before: 'बिना', after: 'के सिफारिश महज़ एक राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: 'जब हितधारक असहमत हों, तो हर एक को अपने विचार का समर्थन करना चाहिए', after: 'स्रोतों से।', choices: ['साक्ष्य से', 'आवाज़ की ऊंचाई से', 'अनुमानों से'], a: 0 },
        { before: 'अपने समाधान की', after: 'का नाम लेना दिखाता है कि आपने उसे ईमानदारी से तौला।', choices: ['समझौतों', 'रंगों', 'शब्दावली'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते = एक इतिहासकार और एक नागरिक की तरह सोचना।'
    },
    ur: {
      title: 'اخراج: دعویٰ + ثبوت',
      items: [
        { before: 'بغیر', after: 'کے سفارش محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: 'جب اسٹیک ہولڈرز اختلاف کریں، تو ہر ایک کو اپنے نقطہ نظر کی حمایت کرنی چاہیے', after: 'مآخذ سے۔', choices: ['ثبوت سے', 'آواز کی بلندی سے', 'اندازوں سے'], a: 0 },
        { before: 'اپنے حل کے', after: 'کا نام لینا ظاہر کرتا ہے کہ آپ نے اسے دیانتداری سے تولا۔', choices: ['سمجھوتوں', 'رنگوں', 'الفاظ'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے = ایک مؤرخ اور ایک شہری کی طرح سوچنا۔'
    },
    zh: {
      title: '离场：主张 + 证据',
      items: [
        { before: '没有', after: '的建议只是一种意见。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '当利益相关者意见不合时，各方都应当支撑自己的观点，用', after: '来自资料。', choices: ['证据', '音量', '猜测'], a: 0 },
        { before: '说出你方案中的', after: '，表明你已经诚实地权衡过它。', choices: ['取舍', '颜色', '词汇'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍 = 像史学家和公民一样思考。'
    } }
  }

]);
