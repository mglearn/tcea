/* PST Arcade — ticket registry. Each ticket is retrieval practice for one unit + phase.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. To add tickets, append objects
   with the same shape: {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 3 · Town Square · SURFACE ───────── */
  {
    id: 'g3-town-square-surface-entry', grade: 3, unit: 'town-square',
    unitTitle: "The Town Square Problem — Meeting a Community's Needs", phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.14(c)(2)(A)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: community words',
      seconds: 45,
      questions: [
        { q: 'A group of people who live, work, and help each other in one place is a…', choices: ['community', 'budget', 'stakeholder'], a: 0 },
        { q: 'Something you must have to live, like food or shelter, is a…', choices: ['want', 'need', 'good'], a: 1 },
        { q: 'When there is not enough of something for everyone, that is…', choices: ['supply', 'demand', 'scarcity'], a: 2 },
        { q: 'Anyone who is affected by a decision or has something at stake is a…', choices: ['stakeholder', 'citizen', 'service'], a: 0 }
      ],
      takeaway: 'Know these four words and the rest of the town square unit gets much easier.'
    },
    es: {
      title: 'Calentamiento: palabras de la comunidad',
      seconds: 45,
      questions: [
        { q: 'Un grupo de personas que viven, trabajan y se ayudan en un mismo lugar es una…', choices: ['comunidad', 'presupuesto', 'parte interesada'], a: 0 },
        { q: 'Algo que debes tener para vivir, como comida o refugio, es una…', choices: ['deseo', 'necesidad', 'mercancía'], a: 1 },
        { q: 'Cuando no hay suficiente de algo para todos, eso es…', choices: ['oferta', 'demanda', 'escasez'], a: 2 },
        { q: 'Cualquiera que se ve afectado por una decisión o tiene algo en juego es una…', choices: ['parte interesada', 'ciudadano', 'servicio'], a: 0 }
      ],
      takeaway: 'Domina estas cuatro palabras y el resto de la unidad de la plaza será mucho más fácil.'
    },
    vi: {
      title: 'Khởi động: từ vựng về cộng đồng',
      seconds: 45,
      questions: [
        { q: 'Một nhóm người cùng sống, làm việc và giúp đỡ nhau ở một nơi là một…', choices: ['cộng đồng', 'ngân sách', 'bên liên quan'], a: 0 },
        { q: 'Thứ bạn buộc phải có để sống, như thức ăn hay chỗ ở, là một…', choices: ['mong muốn', 'nhu cầu', 'hàng hóa'], a: 1 },
        { q: 'Khi không có đủ thứ gì đó cho mọi người, đó là…', choices: ['cung', 'cầu', 'sự khan hiếm'], a: 2 },
        { q: 'Bất kỳ ai bị ảnh hưởng bởi một quyết định hoặc có điều gì đó liên quan là một…', choices: ['bên liên quan', 'công dân', 'dịch vụ'], a: 0 }
      ],
      takeaway: 'Nắm được bốn từ này thì phần còn lại của đơn vị quảng trường sẽ dễ hơn nhiều.'
    },
    ar: {
      title: 'تهيئة: كلمات المجتمع',
      seconds: 45,
      questions: [
        { q: 'مجموعة من الناس يعيشون ويعملون ويساعد بعضهم بعضًا في مكان واحد هي…', choices: ['مجتمع', 'ميزانية', 'صاحب مصلحة'], a: 0 },
        { q: 'الشيء الذي يجب أن تملكه لتعيش، مثل الطعام أو المأوى، هو…', choices: ['رغبة', 'حاجة', 'سلعة'], a: 1 },
        { q: 'عندما لا يوجد ما يكفي من شيء للجميع، فذلك هو…', choices: ['العرض', 'الطلب', 'الندرة'], a: 2 },
        { q: 'أي شخص يتأثر بقرار أو له مصلحة فيه هو…', choices: ['صاحب مصلحة', 'مواطن', 'خدمة'], a: 0 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وستصبح بقية وحدة الساحة أسهل بكثير.'
    },
    hi: {
      title: 'वार्म-अप: समुदाय के शब्द',
      seconds: 45,
      questions: [
        { q: 'लोगों का वह समूह जो एक ही जगह रहता, काम करता और एक-दूसरे की मदद करता है, वह है…', choices: ['समुदाय', 'बजट', 'हितधारक'], a: 0 },
        { q: 'जीने के लिए ज़रूरी चीज़, जैसे भोजन या आश्रय, है एक…', choices: ['इच्छा', 'ज़रूरत', 'वस्तु'], a: 1 },
        { q: 'जब किसी चीज़ की सबके लिए पर्याप्त मात्रा न हो, तो वह है…', choices: ['आपूर्ति', 'माँग', 'अभाव'], a: 2 },
        { q: 'कोई भी व्यक्ति जो किसी निर्णय से प्रभावित होता है या जिसका कुछ दाँव पर है, वह है…', choices: ['हितधारक', 'नागरिक', 'सेवा'], a: 0 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और टाउन स्क्वायर इकाई का बाकी हिस्सा बहुत आसान हो जाएगा।'
    },
    ur: {
      title: 'وارم اپ: کمیونٹی کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'لوگوں کا وہ گروہ جو ایک ہی جگہ رہتا، کام کرتا اور ایک دوسرے کی مدد کرتا ہے، وہ ہے…', choices: ['کمیونٹی', 'بجٹ', 'اسٹیک ہولڈر'], a: 0 },
        { q: 'زندہ رہنے کے لیے ضروری چیز، جیسے کھانا یا رہائش، ہے ایک…', choices: ['خواہش', 'ضرورت', 'شے'], a: 1 },
        { q: 'جب کسی چیز کی سب کے لیے کافی مقدار نہ ہو، تو وہ ہے…', choices: ['رسد', 'طلب', 'قلت'], a: 2 },
        { q: 'کوئی بھی شخص جو کسی فیصلے سے متاثر ہوتا ہے یا جس کا کچھ داؤ پر ہے، وہ ہے…', choices: ['اسٹیک ہولڈر', 'شہری', 'خدمت'], a: 0 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو ٹاؤن اسکوائر یونٹ کا باقی حصہ بہت آسان ہو جائے گا۔'
    },
    zh: {
      title: '热身：社区词汇',
      seconds: 45,
      questions: [
        { q: '在同一个地方一起生活、工作、互相帮助的一群人称为…', choices: ['社区', '预算', '利益相关者'], a: 0 },
        { q: '生存必须拥有的东西，如食物或住所，是一种…', choices: ['想要', '需求', '商品'], a: 1 },
        { q: '当某样东西不够所有人分时，这就是…', choices: ['供给', '需求', '稀缺'], a: 2 },
        { q: '任何受某项决定影响或与之有利害关系的人，都是…', choices: ['利益相关者', '公民', '服务'], a: 0 }
      ],
      takeaway: '掌握这四个词，城镇广场单元的其余部分就会轻松许多。'
    } }
  },
  {
    id: 'g3-town-square-surface-exit', grade: 3, unit: 'town-square',
    unitTitle: "The Town Square Problem — Meeting a Community's Needs", phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.14(c)(2)(A)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['goods', 'things people make or grow to sell'],
        ['services', 'helpful jobs people do for others'],
        ['budget', 'a plan for how to spend and save money'],
        ['local government', 'the town leaders who make rules and run services'],
        ['citizen', 'a member of a community with rights and jobs to do']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word wall.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['mercancías', 'cosas que la gente hace o cultiva para vender'],
        ['servicios', 'trabajos útiles que la gente hace para otros'],
        ['presupuesto', 'un plan de cómo gastar y ahorrar dinero'],
        ['gobierno local', 'los líderes del pueblo que hacen reglas y dirigen los servicios'],
        ['ciudadano', 'un miembro de la comunidad con derechos y tareas que cumplir']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el muro de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['hàng hóa', 'những thứ người ta làm ra hoặc trồng để bán'],
        ['dịch vụ', 'những công việc hữu ích người ta làm cho người khác'],
        ['ngân sách', 'một kế hoạch về cách chi tiêu và tiết kiệm tiền'],
        ['chính quyền địa phương', 'những người lãnh đạo thị trấn đặt ra quy tắc và điều hành dịch vụ'],
        ['công dân', 'một thành viên của cộng đồng có quyền lợi và trách nhiệm']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại bảng từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['السلع', 'أشياء يصنعها الناس أو يزرعونها للبيع'],
        ['الخدمات', 'أعمال مفيدة يقدّمها الناس للآخرين'],
        ['الميزانية', 'خطة لكيفية إنفاق المال وادّخاره'],
        ['الحكومة المحلية', 'قادة البلدة الذين يضعون القواعد ويديرون الخدمات'],
        ['المواطن', 'عضو في المجتمع له حقوق وعليه واجبات']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع جدار الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['वस्तुएँ', 'चीज़ें जो लोग बेचने के लिए बनाते या उगाते हैं'],
        ['सेवाएँ', 'सहायक काम जो लोग दूसरों के लिए करते हैं'],
        ['बजट', 'पैसे को खर्च करने और बचाने की योजना'],
        ['स्थानीय सरकार', 'नगर के नेता जो नियम बनाते और सेवाएँ चलाते हैं'],
        ['नागरिक', 'समुदाय का सदस्य जिसके अधिकार और कर्तव्य होते हैं']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-दीवार फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['اشیاء', 'چیزیں جو لوگ بیچنے کے لیے بناتے یا اگاتے ہیں'],
        ['خدمات', 'مددگار کام جو لوگ دوسروں کے لیے کرتے ہیں'],
        ['بجٹ', 'پیسہ خرچ کرنے اور بچانے کا منصوبہ'],
        ['مقامی حکومت', 'قصبے کے رہنما جو قواعد بناتے اور خدمات چلاتے ہیں'],
        ['شہری', 'کمیونٹی کا رکن جس کے حقوق اور فرائض ہوتے ہیں']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی دیوار دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['商品', '人们制造或种植来出售的东西'],
        ['服务', '人们为他人所做的有用工作'],
        ['预算', '关于如何花钱和存钱的计划'],
        ['地方政府', '制定规则、运营服务的镇领导'],
        ['公民', '拥有权利和职责的社区成员']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇墙。'
    } }
  },

  /* ───────── Grade 3 · Town Square · DEEP ───────── */
  {
    id: 'g3-town-square-deep-entry', grade: 3, unit: 'town-square',
    unitTitle: "The Town Square Problem — Meeting a Community's Needs", phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.14(c)(6)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: needs, wants & scarcity',
      items: [
        { before: 'Clean water and safety are', after: 'the town must have.', choices: ['wants', 'needs', 'profits'], a: 1 },
        { before: 'Because there is only one empty lot, the town faces', after: 'and must choose.', choices: ['scarcity', 'a surplus', 'a service'], a: 0 },
        { before: 'When only 5 loaves are left but everyone wants bread, the price goes', after: '', choices: ['down', 'up', 'away'], a: 1 }
      ],
      takeaway: 'Needs come before wants, and scarcity is what forces the town to pick.'
    },
    es: {
      title: 'Calentamiento: necesidades, deseos y escasez',
      items: [
        { before: 'El agua limpia y la seguridad son', after: 'que el pueblo debe tener.', choices: ['deseos', 'necesidades', 'ganancias'], a: 1 },
        { before: 'Como solo hay un lote vacío, el pueblo enfrenta', after: 'y debe elegir.', choices: ['escasez', 'un excedente', 'un servicio'], a: 0 },
        { before: 'Cuando solo quedan 5 panes pero todos quieren pan, el precio', after: '', choices: ['baja', 'sube', 'desaparece'], a: 1 }
      ],
      takeaway: 'Las necesidades van antes que los deseos, y la escasez es lo que obliga al pueblo a elegir.'
    },
    vi: {
      title: 'Khởi động: nhu cầu, mong muốn & khan hiếm',
      items: [
        { before: 'Nước sạch và an toàn là', after: 'mà thị trấn buộc phải có.', choices: ['những mong muốn', 'những nhu cầu', 'những khoản lợi nhuận'], a: 1 },
        { before: 'Vì chỉ có một lô đất trống, thị trấn đối mặt với', after: 'và phải lựa chọn.', choices: ['sự khan hiếm', 'sự dư thừa', 'một dịch vụ'], a: 0 },
        { before: 'Khi chỉ còn 5 ổ bánh mà ai cũng muốn mua, giá sẽ', after: '', choices: ['giảm xuống', 'tăng lên', 'biến mất'], a: 1 }
      ],
      takeaway: 'Nhu cầu đứng trước mong muốn, và sự khan hiếm là điều buộc thị trấn phải chọn.'
    },
    ar: {
      title: 'تهيئة: الحاجات والرغبات والندرة',
      items: [
        { before: 'الماء النظيف والأمان هما', after: 'يجب أن تملكهما البلدة.', choices: ['رغبتان', 'حاجتان', 'أرباح'], a: 1 },
        { before: 'لأنه لا يوجد سوى قطعة أرض فارغة واحدة، تواجه البلدة', after: 'وعليها أن تختار.', choices: ['الندرة', 'فائضًا', 'خدمة'], a: 0 },
        { before: 'حين يتبقى 5 أرغفة فقط والجميع يريد الخبز، فإن السعر', after: '', choices: ['ينخفض', 'يرتفع', 'يختفي'], a: 1 }
      ],
      takeaway: 'الحاجات تسبق الرغبات، والندرة هي ما يُجبر البلدة على الاختيار.'
    },
    hi: {
      title: 'वार्म-अप: ज़रूरतें, इच्छाएँ और अभाव',
      items: [
        { before: 'साफ़ पानी और सुरक्षा वे', after: 'हैं जो नगर के पास होनी ही चाहिए।', choices: ['इच्छाएँ', 'ज़रूरतें', 'मुनाफ़े'], a: 1 },
        { before: 'क्योंकि केवल एक खाली प्लॉट है, नगर के सामने', after: 'है और उसे चुनना ही होगा।', choices: ['अभाव', 'अधिशेष', 'एक सेवा'], a: 0 },
        { before: 'जब सिर्फ़ 5 रोटियाँ बचें पर सब रोटी चाहें, तो कीमत', after: '', choices: ['घटती है', 'बढ़ती है', 'गायब हो जाती है'], a: 1 }
      ],
      takeaway: 'ज़रूरतें इच्छाओं से पहले आती हैं, और अभाव ही नगर को चुनने के लिए मजबूर करता है।'
    },
    ur: {
      title: 'وارم اپ: ضروریات، خواہشات اور قلت',
      items: [
        { before: 'صاف پانی اور تحفظ وہ', after: 'ہیں جو قصبے کے پاس ہونی ہی چاہئیں۔', choices: ['خواہشات', 'ضروریات', 'منافع'], a: 1 },
        { before: 'چونکہ صرف ایک خالی پلاٹ ہے، قصبے کو', after: 'کا سامنا ہے اور اسے چننا ہی ہوگا۔', choices: ['قلت', 'زائد مقدار', 'ایک خدمت'], a: 0 },
        { before: 'جب صرف 5 روٹیاں بچیں مگر سب روٹی چاہیں، تو قیمت', after: '', choices: ['گرتی ہے', 'بڑھتی ہے', 'غائب ہو جاتی ہے'], a: 1 }
      ],
      takeaway: 'ضروریات خواہشات سے پہلے آتی ہیں، اور قلت ہی قصبے کو چننے پر مجبور کرتی ہے۔'
    },
    zh: {
      title: '热身：需求、想要与稀缺',
      items: [
        { before: '干净的水和安全是小镇必须拥有的', after: '。', choices: ['想要', '需求', '利润'], a: 1 },
        { before: '因为只剩一块空地，小镇面临', after: '，必须做出选择。', choices: ['稀缺', '过剩', '一项服务'], a: 0 },
        { before: '当只剩 5 个面包而人人都想要时，价格会', after: '', choices: ['下降', '上升', '消失'], a: 1 }
      ],
      takeaway: '需求先于想要，而稀缺正是迫使小镇做出取舍的原因。'
    } }
  },
  {
    id: 'g3-town-square-deep-exit', grade: 3, unit: 'town-square',
    unitTitle: "The Town Square Problem — Meeting a Community's Needs", phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.14(c)(6)(B), (c)(2)(A)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort needs from wants',
      cats: ['Need (must have)', 'Want (nice to have)'],
      items: [
        { t: 'Clean water', c: 0 },
        { t: 'Safety (fire &amp; police)', c: 0 },
        { t: 'A way to learn', c: 0 },
        { t: 'A splash pad', c: 1 },
        { t: 'A fancy fountain', c: 1 },
        { t: 'A bigger parking lot', c: 1 }
      ],
      takeaway: 'Sorting needs from wants is the concept map behind every town square choice.'
    },
    es: {
      title: 'Salida: separa necesidades de deseos',
      cats: ['Necesidad (debe tenerse)', 'Deseo (bueno tenerlo)'],
      items: [
        { t: 'Agua limpia', c: 0 },
        { t: 'Seguridad (bomberos y policía)', c: 0 },
        { t: 'Una manera de aprender', c: 0 },
        { t: 'Un área de chorros de agua', c: 1 },
        { t: 'Una fuente elegante', c: 1 },
        { t: 'Un estacionamiento más grande', c: 1 }
      ],
      takeaway: 'Separar necesidades de deseos es el mapa conceptual detrás de cada decisión de la plaza.'
    },
    vi: {
      title: 'Phiếu ra: phân loại nhu cầu và mong muốn',
      cats: ['Nhu cầu (buộc phải có)', 'Mong muốn (có thì tốt)'],
      items: [
        { t: 'Nước sạch', c: 0 },
        { t: 'An toàn (cứu hỏa & cảnh sát)', c: 0 },
        { t: 'Một cách để học tập', c: 0 },
        { t: 'Sân phun nước', c: 1 },
        { t: 'Một đài phun nước cầu kỳ', c: 1 },
        { t: 'Một bãi đỗ xe lớn hơn', c: 1 }
      ],
      takeaway: 'Phân loại nhu cầu và mong muốn chính là sơ đồ khái niệm đằng sau mọi lựa chọn ở quảng trường.'
    },
    ar: {
      title: 'الخروج: افصل الحاجات عن الرغبات',
      cats: ['حاجة (يجب امتلاكها)', 'رغبة (من الجميل امتلاكها)'],
      items: [
        { t: 'ماء نظيف', c: 0 },
        { t: 'الأمان (الإطفاء والشرطة)', c: 0 },
        { t: 'وسيلة للتعلّم', c: 0 },
        { t: 'ساحة رذاذ ماء', c: 1 },
        { t: 'نافورة فاخرة', c: 1 },
        { t: 'موقف سيارات أكبر', c: 1 }
      ],
      takeaway: 'فصل الحاجات عن الرغبات هو الخريطة المفاهيمية وراء كل قرار في الساحة.'
    },
    hi: {
      title: 'निकास: ज़रूरतों को इच्छाओं से अलग करें',
      cats: ['ज़रूरत (होनी ही चाहिए)', 'इच्छा (हो तो अच्छा)'],
      items: [
        { t: 'साफ़ पानी', c: 0 },
        { t: 'सुरक्षा (दमकल और पुलिस)', c: 0 },
        { t: 'सीखने का एक साधन', c: 0 },
        { t: 'एक स्प्लैश पैड', c: 1 },
        { t: 'एक शानदार फव्वारा', c: 1 },
        { t: 'एक बड़ा पार्किंग स्थल', c: 1 }
      ],
      takeaway: 'ज़रूरतों को इच्छाओं से अलग करना ही टाउन स्क्वायर के हर निर्णय के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: ضروریات کو خواہشات سے الگ کریں',
      cats: ['ضرورت (ہونی ہی چاہیے)', 'خواہش (ہو تو اچھا)'],
      items: [
        { t: 'صاف پانی', c: 0 },
        { t: 'تحفظ (فائر اور پولیس)', c: 0 },
        { t: 'سیکھنے کا ایک ذریعہ', c: 0 },
        { t: 'ایک اسپلیش پیڈ', c: 1 },
        { t: 'ایک شاندار فوارہ', c: 1 },
        { t: 'ایک بڑی پارکنگ', c: 1 }
      ],
      takeaway: 'ضروریات کو خواہشات سے الگ کرنا ہی ٹاؤن اسکوائر کے ہر فیصلے کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：把需求与想要分类',
      cats: ['需求（必须拥有）', '想要（有则更好）'],
      items: [
        { t: '干净的水', c: 0 },
        { t: '安全（消防与警察）', c: 0 },
        { t: '学习的途径', c: 0 },
        { t: '喷水池游乐区', c: 1 },
        { t: '华丽的喷泉', c: 1 },
        { t: '更大的停车场', c: 1 }
      ],
      takeaway: '把需求与想要分类，就是城镇广场每一次选择背后的概念图。'
    } }
  },

  /* ───────── Grade 3 · Town Square · TRANSFER ───────── */
  {
    id: 'g3-town-square-transfer-entry', grade: 3, unit: 'town-square',
    unitTitle: "The Town Square Problem — Meeting a Community's Needs", phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.14(c)(16)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving steps',
      seconds: 45,
      questions: [
        { q: 'The FIRST step of the problem-solving process is to…', choices: ['name the problem', 'take a vote', 'pick a winner'], a: 0 },
        { q: 'Before choosing what to build on the lot, a good problem-solver…', choices: ['guesses fast', 'gathers information & weighs options', 'ignores other stakeholders'], a: 1 },
        { q: 'When you speak as a stakeholder, you should reason from…', choices: ['that person\'s point of view', 'only your own wishes', 'the loudest voice'], a: 0 },
        { q: 'After the town chooses a solution, the class should…', choices: ['forget about it', 'check whether it worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Name → gather → weigh → choose → defend → check. That is §113.14(c)(16)(B) end to end.'
    },
    es: {
      title: 'Calentamiento: los pasos para resolver problemas',
      seconds: 45,
      questions: [
        { q: 'El PRIMER paso del proceso para resolver problemas es…', choices: ['nombrar el problema', 'hacer una votación', 'elegir un ganador'], a: 0 },
        { q: 'Antes de elegir qué construir en el lote, quien resuelve bien problemas…', choices: ['adivina rápido', 'reúne información y sopesa opciones', 'ignora a otras partes interesadas'], a: 1 },
        { q: 'Cuando hablas como parte interesada, debes razonar desde…', choices: ['el punto de vista de esa persona', 'solo tus propios deseos', 'la voz más fuerte'], a: 0 },
        { q: 'Después de que el pueblo elige una solución, la clase debe…', choices: ['olvidarla', 'comprobar si funcionó', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Nombrar → reunir → sopesar → elegir → defender → comprobar. Eso es §113.14(c)(16)(B) de principio a fin.'
    },
    vi: {
      title: 'Khởi động: các bước giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Bước ĐẦU TIÊN của quá trình giải quyết vấn đề là…', choices: ['nêu tên vấn đề', 'tiến hành bỏ phiếu', 'chọn ra người thắng'], a: 0 },
        { q: 'Trước khi chọn xây gì trên lô đất, người giải quyết vấn đề giỏi sẽ…', choices: ['đoán nhanh', 'thu thập thông tin & cân nhắc các phương án', 'bỏ qua các bên liên quan khác'], a: 1 },
        { q: 'Khi bạn phát biểu với tư cách một bên liên quan, bạn nên lập luận từ…', choices: ['quan điểm của người đó', 'chỉ mong muốn của riêng bạn', 'giọng nói to nhất'], a: 0 },
        { q: 'Sau khi thị trấn chọn một giải pháp, lớp học nên…', choices: ['quên nó đi', 'kiểm tra xem nó có hiệu quả không', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Nêu tên → thu thập → cân nhắc → chọn → bảo vệ → kiểm tra. Đó là §113.14(c)(16)(B) từ đầu đến cuối.'
    },
    ar: {
      title: 'تهيئة: خطوات حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'الخطوة الأولى في عملية حل المشكلة هي…', choices: ['تسمية المشكلة', 'إجراء تصويت', 'اختيار فائز'], a: 0 },
        { q: 'قبل اختيار ما يُبنى على الأرض، يقوم حلّال المشكلات الجيد بـ…', choices: ['التخمين بسرعة', 'جمع المعلومات وموازنة الخيارات', 'تجاهل أصحاب المصلحة الآخرين'], a: 1 },
        { q: 'عندما تتحدث بصفتك صاحب مصلحة، ينبغي أن تفكّر من…', choices: ['وجهة نظر ذلك الشخص', 'رغباتك أنت فقط', 'الصوت الأعلى'], a: 0 },
        { q: 'بعد أن تختار البلدة حلًّا، ينبغي على الصف أن…', choices: ['ينساه', 'يتحقّق مما إذا كان قد نجح', 'يخفي المفاضلات'], a: 1 }
      ],
      takeaway: 'سمِّ ← اجمع ← وازِن ← اختَر ← دافِع ← تحقّق. هذه هي §113.14(c)(16)(B) من أولها إلى آخرها.'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान के चरण',
      seconds: 45,
      questions: [
        { q: 'समस्या-समाधान प्रक्रिया का पहला चरण है…', choices: ['समस्या का नाम बताना', 'मतदान करना', 'एक विजेता चुनना'], a: 0 },
        { q: 'प्लॉट पर क्या बनाना है यह चुनने से पहले, अच्छा समस्या-समाधानकर्ता…', choices: ['जल्दी अनुमान लगाता है', 'जानकारी जुटाता है और विकल्पों को तौलता है', 'अन्य हितधारकों को अनदेखा करता है'], a: 1 },
        { q: 'जब आप एक हितधारक के रूप में बोलते हैं, तो आपको तर्क करना चाहिए…', choices: ['उस व्यक्ति के दृष्टिकोण से', 'केवल अपनी इच्छाओं से', 'सबसे ऊँची आवाज़ से'], a: 0 },
        { q: 'नगर द्वारा समाधान चुनने के बाद, कक्षा को चाहिए…', choices: ['उसे भूल जाना', 'यह जाँचना कि वह काम आया या नहीं', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'नाम दें → जुटाएँ → तौलें → चुनें → बचाव करें → जाँचें। यही §113.14(c)(16)(B) आद्योपांत है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کے مراحل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے کے عمل کا پہلا مرحلہ ہے…', choices: ['مسئلے کا نام بتانا', 'ووٹنگ کرانا', 'ایک فاتح چننا'], a: 0 },
        { q: 'پلاٹ پر کیا بنانا ہے یہ چننے سے پہلے، اچھا مسئلہ حل کرنے والا…', choices: ['جلدی اندازہ لگاتا ہے', 'معلومات جمع کرتا اور اختیارات تولتا ہے', 'دوسرے اسٹیک ہولڈرز کو نظرانداز کرتا ہے'], a: 1 },
        { q: 'جب آپ ایک اسٹیک ہولڈر کے طور پر بولتے ہیں، تو آپ کو استدلال کرنا چاہیے…', choices: ['اس شخص کے نقطہ نظر سے', 'صرف اپنی خواہشات سے', 'سب سے بلند آواز سے'], a: 0 },
        { q: 'قصبے کے حل چننے کے بعد، کلاس کو چاہیے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ وہ کارگر رہا یا نہیں', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'نام دیں ← جمع کریں ← تولیں ← چنیں ← دفاع کریں ← جانچیں۔ یہی §113.14(c)(16)(B) شروع سے آخر تک ہے۔'
    },
    zh: {
      title: '热身：解决问题的步骤',
      seconds: 45,
      questions: [
        { q: '解决问题过程的第一步是…', choices: ['明确问题', '进行投票', '选出赢家'], a: 0 },
        { q: '在决定这块空地上建什么之前，优秀的解决问题者会…', choices: ['快速猜测', '收集信息并权衡各种方案', '无视其他利益相关者'], a: 1 },
        { q: '当你以利益相关者的身份发言时，你应当从…出发来推理', choices: ['那个人的观点', '只从你自己的意愿', '最大的嗓门'], a: 0 },
        { q: '在小镇选定方案之后，全班应当…', choices: ['把它忘掉', '检查它是否奏效', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '明确 → 收集 → 权衡 → 选择 → 辩护 → 检查。这就是 §113.14(c)(16)(B) 的完整过程。'
    } }
  },
  {
    id: 'g3-town-square-transfer-exit', grade: 3, unit: 'town-square',
    unitTitle: "The Town Square Problem — Meeting a Community's Needs", phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.14(c)(15), (c)(16)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim + evidence',
      items: [
        { before: 'Our town should build a ______; a claim without', after: 'is just an opinion.', choices: ['evidence', 'a map', 'a title'], a: 0 },
        { before: 'A strong recommendation names the', after: '— what we give up by choosing it.', choices: ['trade-offs', 'colors', 'vocabulary'], a: 0 },
        { before: 'Voting lets the community', after: 'a solution together, even when it cannot have everything.', choices: ['choose', 'forget', 'hide'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs, then a fair vote — that is thinking like a citizen.'
    },
    es: {
      title: 'Salida: afirmación + evidencia',
      items: [
        { before: 'Nuestro pueblo debería construir un ______; una afirmación sin', after: 'es solo una opinión.', choices: ['evidencia', 'un mapa', 'un título'], a: 0 },
        { before: 'Una recomendación sólida nombra las', after: '— lo que renunciamos al elegirla.', choices: ['concesiones', 'colores', 'vocabulario'], a: 0 },
        { before: 'Votar permite que la comunidad', after: 'una solución en conjunto, aun cuando no puede tenerlo todo.', choices: ['elija', 'olvide', 'oculte'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones, y luego una votación justa: eso es pensar como ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm + bằng chứng',
      items: [
        { before: 'Thị trấn của chúng ta nên xây một ______; một luận điểm không có', after: 'thì chỉ là ý kiến.', choices: ['bằng chứng', 'một tấm bản đồ', 'một tiêu đề'], a: 0 },
        { before: 'Một đề xuất vững chắc nêu rõ những', after: '— điều chúng ta phải từ bỏ khi chọn nó.', choices: ['đánh đổi', 'màu sắc', 'từ vựng'], a: 0 },
        { before: 'Bỏ phiếu giúp cộng đồng cùng nhau', after: 'một giải pháp, ngay cả khi không thể có mọi thứ.', choices: ['chọn', 'quên', 'giấu'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi, rồi một cuộc bỏ phiếu công bằng — đó là tư duy như một công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء + دليل',
      items: [
        { before: 'ينبغي أن تبني بلدتنا ______؛ فالادعاء بلا', after: 'ما هو إلا رأي.', choices: ['دليل', 'خريطة', 'عنوان'], a: 0 },
        { before: 'التوصية القوية تسمّي', after: '— أي ما نتخلّى عنه باختيارها.', choices: ['المفاضلات', 'الألوان', 'المفردات'], a: 0 },
        { before: 'التصويت يتيح للمجتمع أن', after: 'حلًّا معًا، حتى حين لا يمكنه الحصول على كل شيء.', choices: ['يختار', 'ينسى', 'يخفي'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات، ثم تصويت عادل — تلك هي طريقة تفكير المواطن.'
    },
    hi: {
      title: 'निकास: दावा + साक्ष्य',
      items: [
        { before: 'हमारे नगर को एक ______ बनाना चाहिए; बिना', after: 'के दावा महज़ एक राय है।', choices: ['साक्ष्य', 'एक नक्शा', 'एक शीर्षक'], a: 0 },
        { before: 'एक मज़बूत सिफ़ारिश उन', after: 'का नाम लेती है — जो चुनने पर हम छोड़ते हैं।', choices: ['समझौतों', 'रंगों', 'शब्दावली'], a: 0 },
        { before: 'मतदान समुदाय को साथ मिलकर एक समाधान', after: 'देता है, तब भी जब उसे सब कुछ नहीं मिल सकता।', choices: ['चुनने', 'भूलने', 'छिपाने'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते, फिर एक निष्पक्ष मतदान — यही एक नागरिक की तरह सोचना है।'
    },
    ur: {
      title: 'اخراج: دعویٰ + ثبوت',
      items: [
        { before: 'ہمارے قصبے کو ایک ______ بنانا چاہیے؛ بغیر', after: 'کے دعویٰ محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک نقشہ', 'ایک عنوان'], a: 0 },
        { before: 'ایک مضبوط سفارش ان', after: 'کا نام لیتی ہے — جو چننے پر ہم چھوڑتے ہیں۔', choices: ['سمجھوتوں', 'رنگوں', 'الفاظ'], a: 0 },
        { before: 'ووٹنگ کمیونٹی کو مل کر ایک حل', after: 'دیتی ہے، حتیٰ کہ جب اسے سب کچھ نہیں مل سکتا۔', choices: ['چننے', 'بھولنے', 'چھپانے'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے، پھر ایک منصفانہ ووٹ — یہی ایک شہری کی طرح سوچنا ہے۔'
    },
    zh: {
      title: '离场：主张 + 证据',
      items: [
        { before: '我们的小镇应该建一个 ______；没有', after: '的主张只是一种意见。', choices: ['证据', '一张地图', '一个标题'], a: 0 },
        { before: '有力的建议会说出其中的', after: '——也就是选择它时我们放弃的东西。', choices: ['取舍', '颜色', '词汇'], a: 0 },
        { before: '投票让社区能够共同', after: '一个方案，即使无法拥有一切。', choices: ['选择', '遗忘', '隐藏'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍，再加一次公平投票——这就是像公民一样思考。'
    } }
  }

]);
