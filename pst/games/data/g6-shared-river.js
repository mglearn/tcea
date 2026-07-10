/* PST Arcade — ticket registry. Each ticket is retrieval practice for one unit + phase.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. To add tickets, append objects
   with the same shape: {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 6 · The Shared River · SURFACE ───────── */
  {
    id: 'g6-shared-river-surface-entry', grade: 6, unit: 'shared-river',
    unitTitle: 'The Shared River — One River, Many Nations', phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.18(c)(6), (c)(7)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: river-region words',
      seconds: 45,
      questions: [
        { q: 'When there is not enough of a resource for everyone who wants it, that is…', choices: ['scarcity', 'interdependence', 'a watershed'], a: 0 },
        { q: 'All the land whose rain and streams drain into the same river is its…', choices: ['stakeholder', 'watershed', 'region'], a: 1 },
        { q: 'Electricity made by moving water, often at a dam, is…', choices: ['hydroelectric power', 'a natural resource', 'a factor of production'], a: 0 },
        { q: 'Anyone affected by a decision or who has something at stake is a…', choices: ['region', 'stakeholder', 'watershed'], a: 1 }
      ],
      takeaway: 'Know these four words and you can read the rest of the unit with confidence.'
    },
    es: {
      title: 'Calentamiento: palabras de la región del río',
      seconds: 45,
      questions: [
        { q: 'Cuando no hay suficiente de un recurso para todos los que lo quieren, eso es…', choices: ['escasez', 'interdependencia', 'una cuenca hidrográfica'], a: 0 },
        { q: 'Toda la tierra cuya lluvia y arroyos desembocan en el mismo río es su…', choices: ['parte interesada', 'cuenca hidrográfica', 'región'], a: 1 },
        { q: 'La electricidad hecha por el agua en movimiento, a menudo en una presa, es…', choices: ['energía hidroeléctrica', 'un recurso natural', 'un factor de producción'], a: 0 },
        { q: 'Cualquier persona afectada por una decisión o que tiene algo en juego es una…', choices: ['región', 'parte interesada', 'cuenca hidrográfica'], a: 1 }
      ],
      takeaway: 'Domina estas cuatro palabras y podrás leer el resto de la unidad con confianza.'
    },
    vi: {
      title: 'Khởi động: từ vựng về vùng sông',
      seconds: 45,
      questions: [
        { q: 'Khi không đủ một tài nguyên cho tất cả những người cần nó, đó là…', choices: ['sự khan hiếm', 'sự phụ thuộc lẫn nhau', 'một lưu vực'], a: 0 },
        { q: 'Toàn bộ vùng đất mà mưa và suối đổ vào cùng một con sông là…', choices: ['bên liên quan', 'lưu vực của nó', 'vùng'], a: 1 },
        { q: 'Điện được tạo ra từ nước chuyển động, thường tại một con đập, là…', choices: ['thủy điện', 'một tài nguyên thiên nhiên', 'một yếu tố sản xuất'], a: 0 },
        { q: 'Bất kỳ ai chịu ảnh hưởng bởi một quyết định hoặc có điều gì đó liên quan là một…', choices: ['vùng', 'bên liên quan', 'lưu vực'], a: 1 }
      ],
      takeaway: 'Nắm được bốn từ này là bạn có thể đọc phần còn lại của đơn vị bài học một cách tự tin.'
    },
    ar: {
      title: 'تهيئة: كلمات منطقة النهر',
      seconds: 45,
      questions: [
        { q: 'عندما لا يكون هناك ما يكفي من مورد لكل من يريده، فهذا هو…', choices: ['الندرة', 'الاعتماد المتبادل', 'حوض تصريف'], a: 0 },
        { q: 'كل الأرض التي يصبّ مطرها وجداولها في النهر نفسه هي…', choices: ['صاحب مصلحة', 'حوض تصريفه', 'إقليم'], a: 1 },
        { q: 'الكهرباء المولّدة من الماء المتحرّك، غالبًا عند سد، هي…', choices: ['الطاقة الكهرومائية', 'مورد طبيعي', 'عامل إنتاج'], a: 0 },
        { q: 'أي شخص يتأثّر بقرار أو لديه شيء على المحك هو…', choices: ['إقليم', 'صاحب مصلحة', 'حوض تصريف'], a: 1 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وستقرأ بقية الوحدة بثقة.'
    },
    hi: {
      title: 'वार्म-अप: नदी-क्षेत्र के शब्द',
      seconds: 45,
      questions: [
        { q: 'जब किसी संसाधन की मात्रा उसे चाहने वाले सभी के लिए पर्याप्त न हो, तो वह है…', choices: ['अभाव', 'परस्पर निर्भरता', 'एक जलसंभर'], a: 0 },
        { q: 'वह सारी भूमि जिसकी वर्षा और धाराएँ एक ही नदी में गिरती हैं, वह उसका…', choices: ['हितधारक', 'जलसंभर', 'क्षेत्र'], a: 1 },
        { q: 'बहते पानी से बनी बिजली, अक्सर किसी बाँध पर, कहलाती है…', choices: ['जलविद्युत', 'एक प्राकृतिक संसाधन', 'उत्पादन का एक कारक'], a: 0 },
        { q: 'किसी निर्णय से प्रभावित कोई भी व्यक्ति या जिसका कुछ दाँव पर हो, वह है…', choices: ['क्षेत्र', 'हितधारक', 'जलसंभर'], a: 1 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और आप शेष इकाई आत्मविश्वास से पढ़ सकेंगे।'
    },
    ur: {
      title: 'وارم اپ: دریائی خطے کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'جب کسی وسیلے کی مقدار اُس کے تمام خواہش مندوں کے لیے کافی نہ ہو، تو یہ ہے…', choices: ['قلت', 'باہمی انحصار', 'ایک آب گیر خطہ'], a: 0 },
        { q: 'وہ ساری زمین جس کی بارش اور ندیاں ایک ہی دریا میں گرتی ہیں، وہ اُس کا…', choices: ['اسٹیک ہولڈر', 'آب گیر خطہ', 'خطہ'], a: 1 },
        { q: 'بہتے پانی سے بنی بجلی، اکثر کسی بند پر، کہلاتی ہے…', choices: ['پن بجلی', 'ایک قدرتی وسیلہ', 'پیداوار کا ایک عنصر'], a: 0 },
        { q: 'کوئی بھی شخص جو کسی فیصلے سے متاثر ہو یا جس کا کچھ داؤ پر ہو، وہ ہے…', choices: ['خطہ', 'اسٹیک ہولڈر', 'آب گیر خطہ'], a: 1 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو آپ باقی اکائی اعتماد کے ساتھ پڑھ سکیں گے۔'
    },
    zh: {
      title: '热身：河流地区词汇',
      seconds: 45,
      questions: [
        { q: '当一种资源不足以满足所有需要它的人时，这就是…', choices: ['稀缺', '相互依存', '流域'], a: 0 },
        { q: '雨水与溪流汇入同一条河的全部土地，就是它的…', choices: ['利益相关者', '流域', '地区'], a: 1 },
        { q: '由流动的水产生的电，常常在水坝处，称为…', choices: ['水力发电', '自然资源', '生产要素'], a: 0 },
        { q: '任何受某项决定影响或有利害关系的人，就是…', choices: ['地区', '利益相关者', '流域'], a: 1 }
      ],
      takeaway: '掌握这四个词，你就能自信地读完本单元的其余部分。'
    } }
  },
  {
    id: 'g6-shared-river-surface-exit', grade: 6, unit: 'shared-river',
    unitTitle: 'The Shared River — One River, Many Nations', phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.18(c)(6), (c)(7)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['region', 'an area whose places share features'],
        ['scarcity', 'not enough of a resource for everyone'],
        ['watershed', 'all the land that drains into one river'],
        ['interdependence', 'when people or countries depend on one another'],
        ['stakeholder', 'anyone who has something at stake in a decision']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['región', 'un área cuyos lugares comparten características'],
        ['escasez', 'que no hay suficiente de un recurso para todos'],
        ['cuenca hidrográfica', 'toda la tierra que desemboca en un río'],
        ['interdependencia', 'cuando las personas o los países dependen unos de otros'],
        ['parte interesada', 'cualquiera que tiene algo en juego en una decisión']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['vùng', 'một khu vực mà các nơi chia sẻ những đặc điểm chung'],
        ['sự khan hiếm', 'không đủ một tài nguyên cho tất cả mọi người'],
        ['lưu vực', 'toàn bộ vùng đất đổ nước vào một con sông'],
        ['sự phụ thuộc lẫn nhau', 'khi con người hoặc các quốc gia phụ thuộc vào nhau'],
        ['bên liên quan', 'bất kỳ ai có điều gì đó liên quan trong một quyết định']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['الإقليم', 'منطقة تشترك أماكنها في سمات مشتركة'],
        ['الندرة', 'عدم توفّر ما يكفي من مورد للجميع'],
        ['حوض التصريف', 'كل الأرض التي تصبّ في نهر واحد'],
        ['الاعتماد المتبادل', 'عندما يعتمد الناس أو الدول بعضهم على بعض'],
        ['صاحب المصلحة', 'أي شخص لديه شيء على المحك في قرار']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['क्षेत्र', 'एक इलाका जिसके स्थान समान विशेषताएँ साझा करते हैं'],
        ['अभाव', 'सभी के लिए किसी संसाधन का पर्याप्त न होना'],
        ['जलसंभर', 'वह सारी भूमि जो एक नदी में गिरती है'],
        ['परस्पर निर्भरता', 'जब लोग या देश एक-दूसरे पर निर्भर होते हैं'],
        ['हितधारक', 'कोई भी जिसका किसी निर्णय में कुछ दाँव पर हो']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['خطہ', 'ایک علاقہ جس کی جگہیں مشترکہ خصوصیات رکھتی ہیں'],
        ['قلت', 'سب کے لیے کسی وسیلے کا کافی نہ ہونا'],
        ['آب گیر خطہ', 'وہ ساری زمین جو ایک دریا میں گرتی ہے'],
        ['باہمی انحصار', 'جب لوگ یا ممالک ایک دوسرے پر انحصار کرتے ہیں'],
        ['اسٹیک ہولڈر', 'کوئی بھی جس کا کسی فیصلے میں کچھ داؤ پر ہو']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['地区', '各地共享某些特征的一片区域'],
        ['稀缺', '某种资源不足以满足所有人'],
        ['流域', '全部汇入同一条河的土地'],
        ['相互依存', '当人们或国家彼此依赖时'],
        ['利益相关者', '在某项决定中有利害关系的任何人']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 6 · The Shared River · DEEP ───────── */
  {
    id: 'g6-shared-river-deep-entry', grade: 6, unit: 'shared-river',
    unitTitle: 'The Shared River — One River, Many Nations', phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.18(c)(5), (c)(8)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: upstream & downstream',
      items: [
        { before: 'Highland sits at the source, so it is', after: 'and controls the flow.', choices: ['downstream', 'upstream', 'at the mouth'], a: 1 },
        { before: 'Rivermouth is the last country, so it', after: 'whatever water is left.', choices: ['receives', 'blocks', 'ignores'], a: 0 },
        { before: 'If Highland holds back water to fill its dam, then Rivermouth’s farms get', after: 'in a dry year.', choices: ['more', 'less', 'the same'], a: 1 }
      ],
      takeaway: 'A choice made high on the river reaches everyone below it. Cause upstream, effect downstream.'
    },
    es: {
      title: 'Calentamiento: aguas arriba y aguas abajo',
      items: [
        { before: 'Highland está en la fuente, así que está', after: 'y controla el caudal.', choices: ['aguas abajo', 'aguas arriba', 'en la desembocadura'], a: 1 },
        { before: 'Rivermouth es el último país, así que', after: 'el agua que queda.', choices: ['recibe', 'bloquea', 'ignora'], a: 0 },
        { before: 'Si Highland retiene agua para llenar su presa, entonces las granjas de Rivermouth reciben', after: 'en un año seco.', choices: ['más', 'menos', 'lo mismo'], a: 1 }
      ],
      takeaway: 'Una decisión tomada arriba en el río llega a todos los que están debajo. Causa aguas arriba, efecto aguas abajo.'
    },
    vi: {
      title: 'Khởi động: thượng nguồn & hạ nguồn',
      items: [
        { before: 'Highland nằm ở nguồn, nên nó ở', after: 'và kiểm soát dòng chảy.', choices: ['hạ nguồn', 'thượng nguồn', 'ở cửa sông'], a: 1 },
        { before: 'Rivermouth là quốc gia cuối cùng, nên nó', after: 'lượng nước còn lại.', choices: ['nhận', 'chặn', 'phớt lờ'], a: 0 },
        { before: 'Nếu Highland giữ nước lại để tích đầy đập, thì các nông trại của Rivermouth nhận được', after: 'trong một năm khô hạn.', choices: ['nhiều hơn', 'ít hơn', 'như cũ'], a: 1 }
      ],
      takeaway: 'Một lựa chọn ở phía trên con sông sẽ ảnh hưởng tới mọi người ở dưới. Nguyên nhân ở thượng nguồn, hậu quả ở hạ nguồn.'
    },
    ar: {
      title: 'تهيئة: أعلى المجرى وأسفله',
      items: [
        { before: 'تقع هايلاند عند المنبع، لذا فهي في', after: 'وتتحكّم في التدفّق.', choices: ['أسفل المجرى', 'أعلى المجرى', 'عند المصبّ'], a: 1 },
        { before: 'ريفرماوث هي الدولة الأخيرة، لذا فهي', after: 'ما يتبقّى من الماء.', choices: ['تتلقّى', 'تحجب', 'تتجاهل'], a: 0 },
        { before: 'إذا حجزت هايلاند الماء لملء سدّها، فإن مزارع ريفرماوث تحصل على', after: 'في العام الجاف.', choices: ['أكثر', 'أقلّ', 'المقدار نفسه'], a: 1 }
      ],
      takeaway: 'القرار المتّخَذ أعلى النهر يصل إلى كل من هم أسفله. السبب في الأعلى والأثر في الأسفل.'
    },
    hi: {
      title: 'वार्म-अप: ऊपरी और निचली धारा',
      items: [
        { before: 'Highland स्रोत पर है, इसलिए वह', after: 'है और प्रवाह को नियंत्रित करता है।', choices: ['निचली धारा में', 'ऊपरी धारा में', 'मुहाने पर'], a: 1 },
        { before: 'Rivermouth अंतिम देश है, इसलिए वह बचा हुआ पानी', after: 'है।', choices: ['प्राप्त करता', 'रोकता', 'अनदेखा करता'], a: 0 },
        { before: 'यदि Highland अपने बाँध को भरने के लिए पानी रोक लेता है, तो Rivermouth के खेतों को सूखे वर्ष में', after: 'मिलता है।', choices: ['अधिक', 'कम', 'उतना ही'], a: 1 }
      ],
      takeaway: 'नदी में ऊपर लिया गया निर्णय उसके नीचे सभी तक पहुँचता है। कारण ऊपरी धारा में, प्रभाव निचली धारा में।'
    },
    ur: {
      title: 'وارم اپ: بالائی اور زیریں دھارا',
      items: [
        { before: 'ہائی لینڈ منبع پر واقع ہے، اس لیے وہ', after: 'ہے اور بہاؤ کو کنٹرول کرتا ہے۔', choices: ['زیریں دھارا میں', 'بالائی دھارا میں', 'دہانے پر'], a: 1 },
        { before: 'ریورماؤتھ آخری ملک ہے، اس لیے وہ بچا ہوا پانی', after: 'ہے۔', choices: ['وصول کرتا', 'روکتا', 'نظرانداز کرتا'], a: 0 },
        { before: 'اگر ہائی لینڈ اپنے بند کو بھرنے کے لیے پانی روک لے، تو ریورماؤتھ کے کھیتوں کو خشک سال میں', after: 'ملتا ہے۔', choices: ['زیادہ', 'کم', 'اتنا ہی'], a: 1 }
      ],
      takeaway: 'دریا میں اوپر لیا گیا فیصلہ اُس کے نیچے سب تک پہنچتا ہے۔ سبب بالائی دھارا میں، اثر زیریں دھارا میں۔'
    },
    zh: {
      title: '热身：上游与下游',
      items: [
        { before: 'Highland 位于源头，所以它处于', after: '，并控制水流。', choices: ['下游', '上游', '河口'], a: 1 },
        { before: 'Rivermouth 是最后一个国家，所以它', after: '剩下的水。', choices: ['接收', '拦截', '忽视'], a: 0 },
        { before: '如果 Highland 蓄水来灌满水坝，那么在干旱之年 Rivermouth 的农田得到的水会', after: '。', choices: ['更多', '更少', '一样多'], a: 1 }
      ],
      takeaway: '在河流上游做出的决定会影响下游的每一个人。因在上游，果在下游。'
    } }
  },
  {
    id: 'g6-shared-river-deep-exit', grade: 6, unit: 'shared-river',
    unitTitle: 'The Shared River — One River, Many Nations', phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.18(c)(5), (c)(8)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort each stakeholder by position',
      cats: ['Upstream (controls flow)', 'Downstream (gets what is left)'],
      items: [
        { t: 'Highland filling a hydroelectric dam', c: 0 },
        { t: 'The country at the river’s source', c: 0 },
        { t: 'The nation that decides how much to release', c: 0 },
        { t: 'Rivermouth’s farmers growing the food', c: 1 },
        { t: 'The fish and wetlands near the mouth', c: 1 },
        { t: 'The last country before the sea', c: 1 }
      ],
      takeaway: 'Sorting stakeholders into upstream vs downstream is the concept map behind fair sharing.'
    },
    es: {
      title: 'Salida: clasifica cada parte interesada por su posición',
      cats: ['Aguas arriba (controla el caudal)', 'Aguas abajo (recibe lo que queda)'],
      items: [
        { t: 'Highland llenando una presa hidroeléctrica', c: 0 },
        { t: 'El país en la fuente del río', c: 0 },
        { t: 'La nación que decide cuánta agua liberar', c: 0 },
        { t: 'Los granjeros de Rivermouth que cultivan el alimento', c: 1 },
        { t: 'Los peces y humedales cerca de la desembocadura', c: 1 },
        { t: 'El último país antes del mar', c: 1 }
      ],
      takeaway: 'Clasificar a las partes interesadas en aguas arriba vs aguas abajo es el mapa conceptual detrás del reparto justo.'
    },
    vi: {
      title: 'Phiếu ra: phân loại từng bên liên quan theo vị trí',
      cats: ['Thượng nguồn (kiểm soát dòng chảy)', 'Hạ nguồn (nhận phần còn lại)'],
      items: [
        { t: 'Highland tích đầy đập thủy điện', c: 0 },
        { t: 'Quốc gia ở nguồn con sông', c: 0 },
        { t: 'Nước quyết định xả bao nhiêu nước', c: 0 },
        { t: 'Nông dân Rivermouth trồng lương thực', c: 1 },
        { t: 'Cá và vùng đất ngập nước gần cửa sông', c: 1 },
        { t: 'Quốc gia cuối cùng trước khi ra biển', c: 1 }
      ],
      takeaway: 'Phân loại các bên liên quan thành thượng nguồn và hạ nguồn chính là sơ đồ khái niệm đằng sau việc chia sẻ công bằng.'
    },
    ar: {
      title: 'الخروج: صنّف كل صاحب مصلحة حسب موقعه',
      cats: ['أعلى المجرى (يتحكّم في التدفّق)', 'أسفل المجرى (يأخذ ما يتبقّى)'],
      items: [
        { t: 'هايلاند تملأ سدًّا كهرومائيًّا', c: 0 },
        { t: 'الدولة عند منبع النهر', c: 0 },
        { t: 'الأمة التي تقرّر كمية الماء المُطلَقة', c: 0 },
        { t: 'مزارعو ريفرماوث الذين يزرعون الغذاء', c: 1 },
        { t: 'الأسماك والأراضي الرطبة قرب المصبّ', c: 1 },
        { t: 'آخر دولة قبل البحر', c: 1 }
      ],
      takeaway: 'تصنيف أصحاب المصلحة إلى أعلى المجرى وأسفله هو الخريطة المفاهيمية وراء التقاسم العادل.'
    },
    hi: {
      title: 'निकास: प्रत्येक हितधारक को उसकी स्थिति के अनुसार छाँटें',
      cats: ['ऊपरी धारा (प्रवाह नियंत्रित करता है)', 'निचली धारा (जो बचता है वह मिलता है)'],
      items: [
        { t: 'Highland जो जलविद्युत बाँध भर रहा है', c: 0 },
        { t: 'नदी के स्रोत पर स्थित देश', c: 0 },
        { t: 'वह राष्ट्र जो तय करता है कितना पानी छोड़ना है', c: 0 },
        { t: 'Rivermouth के किसान जो अनाज उगाते हैं', c: 1 },
        { t: 'मुहाने के पास की मछलियाँ और आर्द्रभूमि', c: 1 },
        { t: 'समुद्र से पहले का अंतिम देश', c: 1 }
      ],
      takeaway: 'हितधारकों को ऊपरी बनाम निचली धारा में छाँटना ही न्यायसंगत बँटवारे के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: ہر اسٹیک ہولڈر کو اس کی پوزیشن کے مطابق چھانٹیں',
      cats: ['بالائی دھارا (بہاؤ کنٹرول کرتا ہے)', 'زیریں دھارا (جو بچے وہ ملتا ہے)'],
      items: [
        { t: 'ہائی لینڈ جو پن بجلی کا بند بھر رہا ہے', c: 0 },
        { t: 'دریا کے منبع پر واقع ملک', c: 0 },
        { t: 'وہ قوم جو طے کرتی ہے کتنا پانی چھوڑنا ہے', c: 0 },
        { t: 'ریورماؤتھ کے کسان جو غذا اگاتے ہیں', c: 1 },
        { t: 'دہانے کے قریب مچھلیاں اور جھیلی زمینیں', c: 1 },
        { t: 'سمندر سے پہلے کا آخری ملک', c: 1 }
      ],
      takeaway: 'اسٹیک ہولڈرز کو بالائی بمقابلہ زیریں دھارا میں چھانٹنا ہی منصفانہ تقسیم کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：按位置把每位利益相关者分类',
      cats: ['上游（控制水流）', '下游（得到剩下的）'],
      items: [
        { t: 'Highland 蓄水灌满水力发电坝', c: 0 },
        { t: '位于河流源头的国家', c: 0 },
        { t: '决定放多少水的国家', c: 0 },
        { t: 'Rivermouth 种粮食的农民', c: 1 },
        { t: '河口附近的鱼类与湿地', c: 1 },
        { t: '入海前的最后一个国家', c: 1 }
      ],
      takeaway: '把利益相关者分成上游与下游，就是公平分享背后的概念图。'
    } }
  },

  /* ───────── Grade 6 · The Shared River · TRANSFER ───────── */
  {
    id: 'g6-shared-river-transfer-entry', grade: 6, unit: 'shared-river',
    unitTitle: 'The Shared River — One River, Many Nations', phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.18(c)(22)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving process',
      seconds: 45,
      questions: [
        { q: 'The FIRST step of the problem-solving process is to…', choices: ['pick a solution', 'define the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing how to share the river, a good stakeholder…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other countries’ needs'], a: 0 },
        { q: 'A strong sharing agreement is backed by…', choices: ['the loudest minister', 'claim + evidence', 'only one country’s wishes'], a: 1 },
        { q: 'After choosing a solution, the last step is to…', choices: ['forget it', 'evaluate how well it worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Define → gather → weigh → decide → defend → evaluate. That is the whole transfer move.'
    },
    es: {
      title: 'Calentamiento: el proceso de resolución de problemas',
      seconds: 45,
      questions: [
        { q: 'El PRIMER paso del proceso de resolución de problemas es…', choices: ['elegir una solución', 'definir el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir cómo compartir el río, una buena parte interesada…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora las necesidades de otros países'], a: 0 },
        { q: 'Un acuerdo de reparto sólido se respalda con…', choices: ['el ministro que grita más fuerte', 'afirmación + evidencia', 'los deseos de un solo país'], a: 1 },
        { q: 'Después de elegir una solución, el último paso es…', choices: ['olvidarla', 'evaluar qué tan bien funcionó', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Definir → reunir → sopesar → decidir → defender → evaluar. Ese es todo el movimiento de transferencia.'
    },
    vi: {
      title: 'Khởi động: quy trình giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Bước ĐẦU TIÊN của quy trình giải quyết vấn đề là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn cách chia sẻ con sông, một bên liên quan giỏi sẽ…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua nhu cầu của nước khác'], a: 0 },
        { q: 'Một thỏa thuận chia sẻ vững chắc được củng cố bằng…', choices: ['vị bộ trưởng nói to nhất', 'luận điểm + bằng chứng', 'chỉ mong muốn của một nước'], a: 1 },
        { q: 'Sau khi chọn một giải pháp, bước cuối cùng là…', choices: ['quên nó đi', 'đánh giá xem nó hiệu quả ra sao', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → quyết định → bảo vệ → đánh giá. Đó chính là toàn bộ bước chuyển giao.'
    },
    ar: {
      title: 'تهيئة: عملية حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'الخطوة الأولى في عملية حل المشكلة هي…', choices: ['اختيار حل', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل اختيار كيفية تقاسم النهر، يقوم صاحب المصلحة الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل احتياجات الدول الأخرى'], a: 0 },
        { q: 'اتفاق التقاسم القوي يُدعم بـ…', choices: ['أعلى الوزراء صوتًا', 'ادعاء + دليل', 'رغبات دولة واحدة فقط'], a: 1 },
        { q: 'بعد اختيار حل، الخطوة الأخيرة هي…', choices: ['أن تنساه', 'أن تقيّم مدى نجاحه', 'أن تخفي المفاضلات'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن ← قرِّر ← دافِع ← قيِّم. تلك هي حركة النقل بأكملها.'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान की प्रक्रिया',
      seconds: 45,
      questions: [
        { q: 'समस्या-समाधान प्रक्रिया का पहला चरण है…', choices: ['एक समाधान चुनना', 'समस्या को परिभाषित करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'नदी को साझा करने का तरीका चुनने से पहले, एक अच्छा हितधारक…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य देशों की ज़रूरतों को अनदेखा करता है'], a: 0 },
        { q: 'एक मजबूत साझा-समझौते का आधार होता है…', choices: ['सबसे ऊँची आवाज़ वाला मंत्री', 'दावा + साक्ष्य', 'केवल एक देश की इच्छाएँ'], a: 1 },
        { q: 'समाधान चुनने के बाद, अंतिम चरण है…', choices: ['उसे भूल जाना', 'यह आँकना कि वह कितना अच्छा रहा', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → निर्णय लें → बचाव करें → आँकें। यही पूरी अंतरण चाल है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کا عمل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے کے عمل کا پہلا مرحلہ ہے…', choices: ['ایک حل چننا', 'مسئلے کو متعین کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'دریا کو بانٹنے کا طریقہ چننے سے پہلے، ایک اچھا اسٹیک ہولڈر…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دوسرے ممالک کی ضروریات کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'ایک مضبوط اشتراکی معاہدے کی بنیاد ہوتی ہے…', choices: ['سب سے بلند آواز والا وزیر', 'دعویٰ + ثبوت', 'صرف ایک ملک کی خواہشات'], a: 1 },
        { q: 'حل چننے کے بعد، آخری مرحلہ ہے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ وہ کتنا کارگر رہا', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← فیصلہ کریں ← دفاع کریں ← جانچیں۔ یہی پوری منتقلی کی چال ہے۔'
    },
    zh: {
      title: '热身：解决问题的过程',
      seconds: 45,
      questions: [
        { q: '解决问题过程的第一步是…', choices: ['挑选一个方案', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在选择如何分享河流之前，优秀的利益相关者会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视其他国家的需求'], a: 0 },
        { q: '有力的分享协议背后有…', choices: ['嗓门最大的部长', '主张 + 证据', '只有一个国家的愿望'], a: 1 },
        { q: '选定方案之后，最后一步是…', choices: ['把它忘掉', '评估它的效果如何', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 决定 → 辩护 → 评估。这就是整个迁移动作。'
    } }
  },
  {
    id: 'g6-shared-river-transfer-exit', grade: 6, unit: 'shared-river',
    unitTitle: 'The Shared River — One River, Many Nations', phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.18(c)(22)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim + evidence + trade-offs',
      items: [
        { before: 'A sharing agreement without', after: 'is just one country’s opinion.', choices: ['evidence', 'a title', 'a dam'], a: 0 },
        { before: 'When upstream and downstream disagree, each should support its view with', after: 'from the sources.', choices: ['evidence', 'volume', 'guesses'], a: 0 },
        { before: 'Naming the', after: 'each country must accept shows you thought it through.', choices: ['trade-offs', 'colors', 'vocabulary'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs = thinking like a stakeholder who can actually be trusted with the river.'
    },
    es: {
      title: 'Salida: afirmación + evidencia + concesiones',
      items: [
        { before: 'Un acuerdo de reparto sin', after: 'es solo la opinión de un país.', choices: ['evidencia', 'un título', 'una presa'], a: 0 },
        { before: 'Cuando aguas arriba y aguas abajo no están de acuerdo, cada uno debe respaldar su postura con', after: 'de las fuentes.', choices: ['evidencia', 'volumen', 'suposiciones'], a: 0 },
        { before: 'Nombrar las', after: 'que cada país debe aceptar muestra que lo pensaste a fondo.', choices: ['concesiones', 'colores', 'vocabulario'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones = pensar como una parte interesada en quien de verdad se puede confiar el río.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm + bằng chứng + đánh đổi',
      items: [
        { before: 'Một thỏa thuận chia sẻ không có', after: 'thì chỉ là ý kiến của một nước.', choices: ['bằng chứng', 'một tiêu đề', 'một con đập'], a: 0 },
        { before: 'Khi thượng nguồn và hạ nguồn bất đồng, mỗi bên nên củng cố quan điểm của mình bằng', after: 'từ các nguồn.', choices: ['bằng chứng', 'âm lượng', 'phỏng đoán'], a: 0 },
        { before: 'Nêu ra những', after: 'mà mỗi nước phải chấp nhận cho thấy bạn đã cân nhắc kỹ.', choices: ['đánh đổi', 'màu sắc', 'từ vựng'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi = tư duy như một bên liên quan thực sự đáng tin cậy với con sông.'
    },
    ar: {
      title: 'الخروج: ادعاء + دليل + مفاضلات',
      items: [
        { before: 'اتفاق تقاسم بلا', after: 'ما هو إلا رأي دولة واحدة.', choices: ['دليل', 'عنوان', 'سد'], a: 0 },
        { before: 'عندما يختلف أعلى المجرى وأسفله، ينبغي أن يدعم كلٌّ منهما رأيه بـ', after: 'من المصادر.', choices: ['أدلة', 'علوّ الصوت', 'تخمينات'], a: 0 },
        { before: 'إن تسمية', after: 'التي على كل دولة قبولها تُظهر أنك فكّرت فيها مليًّا.', choices: ['المفاضلات', 'الألوان', 'المفردات'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات = التفكير كصاحب مصلحة يمكن ائتمانه فعلًا على النهر.'
    },
    hi: {
      title: 'निकास: दावा + साक्ष्य + समझौते',
      items: [
        { before: 'बिना', after: 'के साझा-समझौता महज़ एक देश की राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक बाँध'], a: 0 },
        { before: 'जब ऊपरी और निचली धारा असहमत हों, तो हर एक को अपने विचार का समर्थन करना चाहिए', after: 'स्रोतों से।', choices: ['साक्ष्य से', 'आवाज़ की ऊँचाई से', 'अनुमानों से'], a: 0 },
        { before: 'हर देश को जो', after: 'स्वीकार करने होंगे, उनका नाम लेना दिखाता है कि आपने गहराई से सोचा।', choices: ['समझौते', 'रंग', 'शब्दावली'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते = एक ऐसे हितधारक की तरह सोचना जिस पर सचमुच नदी का भरोसा किया जा सके।'
    },
    ur: {
      title: 'اخراج: دعویٰ + ثبوت + سمجھوتے',
      items: [
        { before: 'بغیر', after: 'کے اشتراکی معاہدہ محض ایک ملک کی رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک بند'], a: 0 },
        { before: 'جب بالائی اور زیریں دھارا اختلاف کریں، تو ہر ایک کو اپنے نقطہ نظر کی حمایت کرنی چاہیے', after: 'مآخذ سے۔', choices: ['ثبوت سے', 'آواز کی بلندی سے', 'اندازوں سے'], a: 0 },
        { before: 'ہر ملک کو جو', after: 'قبول کرنے ہوں گے، اُن کا نام لینا ظاہر کرتا ہے کہ آپ نے گہرائی سے سوچا۔', choices: ['سمجھوتے', 'رنگ', 'الفاظ'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے = ایک ایسے اسٹیک ہولڈر کی طرح سوچنا جس پر واقعی دریا کا اعتماد کیا جا سکے۔'
    },
    zh: {
      title: '离场：主张 + 证据 + 取舍',
      items: [
        { before: '没有', after: '的分享协议只是一个国家的意见。', choices: ['证据', '一个标题', '一座水坝'], a: 0 },
        { before: '当上游与下游意见不合时，各方都应当支撑自己的观点，用', after: '来自资料。', choices: ['证据', '音量', '猜测'], a: 0 },
        { before: '说出每个国家必须接受的', after: '，表明你已经把它想透彻了。', choices: ['取舍', '颜色', '词汇'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍 = 像一个真正能被托付这条河的利益相关者一样思考。'
    } }
  }

]);
