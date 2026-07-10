/* PST Arcade — ticket registry. Each ticket is retrieval practice for one unit + phase.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. To add tickets, append objects
   with the same shape: {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 5 · Immigration 1914 · SURFACE ───────── */
  {
    id: 'g5-immigration-surface-entry', grade: 5, unit: 'immigration',
    unitTitle: 'A New Life — Immigration, 1914', phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.16(c)(25)(A)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: immigration words',
      seconds: 45,
      questions: [
        { q: 'A person who moves INTO a new country to live is an…', choices: ['immigrant', 'inspector', 'ancestor'], a: 0 },
        { q: 'A reason that PUSHES people to leave their home country is a…', choices: ['pull factor', 'push factor', 'port of entry'], a: 1 },
        { q: 'Ellis Island, in New York Harbor, was mainly a…', choices: ['factory', 'port of entry & inspection station', 'settlement house'], a: 1 },
        { q: 'A crowded city apartment building of the early 1900s was called a…', choices: ['tenement', 'quota', 'manifest'], a: 0 }
      ],
      takeaway: 'Know these four words and you can read the rest of the unit with confidence.'
    },
    es: {
      title: 'Calentamiento: palabras de inmigración',
      seconds: 45,
      questions: [
        { q: 'Una persona que se muda A un nuevo país para vivir es un…', choices: ['inmigrante', 'inspector', 'antepasado'], a: 0 },
        { q: 'Una razón que EMPUJA a la gente a dejar su país de origen es un…', choices: ['factor de atracción', 'factor de empuje', 'puerto de entrada'], a: 1 },
        { q: 'Ellis Island, en el puerto de Nueva York, era principalmente un…', choices: ['fábrica', 'puerto de entrada y estación de inspección', 'casa de asentamiento'], a: 1 },
        { q: 'Un edificio de apartamentos abarrotado de una ciudad de principios del siglo XX se llamaba…', choices: ['inquilinato', 'cuota', 'manifiesto'], a: 0 }
      ],
      takeaway: 'Domina estas cuatro palabras y podrás leer el resto de la unidad con confianza.'
    },
    vi: {
      title: 'Khởi động: từ vựng về nhập cư',
      seconds: 45,
      questions: [
        { q: 'Người chuyển VÀO một quốc gia mới để sinh sống là một…', choices: ['người nhập cư', 'thanh tra', 'tổ tiên'], a: 0 },
        { q: 'Một lý do ĐẨY người ta rời khỏi quê hương là một…', choices: ['yếu tố kéo', 'yếu tố đẩy', 'cửa khẩu nhập cảnh'], a: 1 },
        { q: 'Đảo Ellis, trong Cảng New York, chủ yếu là một…', choices: ['nhà máy', 'cửa khẩu nhập cảnh & trạm kiểm tra', 'nhà cộng đồng'], a: 1 },
        { q: 'Một chung cư chật chội trong thành phố hồi đầu những năm 1900 được gọi là…', choices: ['nhà ổ chuột', 'hạn ngạch', 'bản kê khai'], a: 0 }
      ],
      takeaway: 'Nắm được bốn từ này là bạn có thể đọc phần còn lại của đơn vị bài học một cách tự tin.'
    },
    ar: {
      title: 'تهيئة: كلمات الهجرة',
      seconds: 45,
      questions: [
        { q: 'الشخص الذي ينتقل إلى بلد جديد للعيش فيه هو…', choices: ['مهاجر', 'مفتّش', 'سلف'], a: 0 },
        { q: 'السبب الذي يدفع الناس لمغادرة بلدهم الأصلي هو…', choices: ['عامل جذب', 'عامل دفع', 'منفذ دخول'], a: 1 },
        { q: 'كانت جزيرة إليس، في ميناء نيويورك، بشكل رئيسي…', choices: ['مصنعًا', 'منفذ دخول ومحطة تفتيش', 'دار استيطان'], a: 1 },
        { q: 'كان مبنى الشقق المكتظ في مدينة مطلع القرن العشرين يُسمّى…', choices: ['مسكنًا شعبيًا', 'حصة', 'كشف ركاب'], a: 0 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وستقرأ بقية الوحدة بثقة.'
    },
    hi: {
      title: 'वार्म-अप: आप्रवासन के शब्द',
      seconds: 45,
      questions: [
        { q: 'जो व्यक्ति रहने के लिए किसी नए देश में आता है, वह है…', choices: ['आप्रवासी', 'निरीक्षक', 'पूर्वज'], a: 0 },
        { q: 'लोगों को अपने गृह देश छोड़ने के लिए धकेलने वाला कारण है…', choices: ['आकर्षण कारक', 'धक्का कारक', 'प्रवेश बंदरगाह'], a: 1 },
        { q: 'न्यूयॉर्क बंदरगाह में एलिस द्वीप मुख्यतः था एक…', choices: ['कारखाना', 'प्रवेश बंदरगाह और निरीक्षण केंद्र', 'सेटलमेंट हाउस'], a: 1 },
        { q: '1900 के दशक की शुरुआत की भीड़भाड़ वाली शहरी अपार्टमेंट इमारत को कहा जाता था…', choices: ['टेनमेंट', 'कोटा', 'मैनिफेस्ट'], a: 0 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और आप शेष इकाई आत्मविश्वास से पढ़ सकेंगे।'
    },
    ur: {
      title: 'وارم اپ: ہجرت کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'وہ شخص جو رہنے کے لیے کسی نئے ملک میں آتا ہے، وہ ہے…', choices: ['تارکِ وطن', 'معائنہ کار', 'جدِ امجد'], a: 0 },
        { q: 'وہ وجہ جو لوگوں کو اپنے آبائی ملک چھوڑنے پر مجبور کرتی ہے، وہ ہے…', choices: ['کشش کا عامل', 'دھکیلنے کا عامل', 'داخلے کی بندرگاہ'], a: 1 },
        { q: 'نیو یارک ہاربر میں ایلس آئی لینڈ بنیادی طور پر تھا ایک…', choices: ['کارخانہ', 'داخلے کی بندرگاہ اور معائنہ اسٹیشن', 'سیٹلمنٹ ہاؤس'], a: 1 },
        { q: '1900 کی دہائی کے اوائل کی ہجوم بھری شہری اپارٹمنٹ عمارت کو کہا جاتا تھا…', choices: ['ٹینمنٹ', 'کوٹا', 'مینی فیسٹ'], a: 0 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو آپ باقی اکائی اعتماد کے ساتھ پڑھ سکیں گے۔'
    },
    zh: {
      title: '热身：移民词汇',
      seconds: 45,
      questions: [
        { q: '迁入一个新国家定居的人称为…', choices: ['移民', '检查员', '祖先'], a: 0 },
        { q: '把人们推离祖国的原因是…', choices: ['拉力因素', '推力因素', '入境口岸'], a: 1 },
        { q: '位于纽约港的埃利斯岛主要是一个…', choices: ['工厂', '入境口岸与检查站', '安置所'], a: 1 },
        { q: '1900 年代初拥挤的城市公寓楼被称为…', choices: ['廉租公寓', '配额', '旅客名单'], a: 0 }
      ],
      takeaway: '掌握这四个词，你就能自信地读完本单元的其余部分。'
    } }
  },
  {
    id: 'g5-immigration-surface-exit', grade: 5, unit: 'immigration',
    unitTitle: 'A New Life — Immigration, 1914', phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.16(c)(25)(A)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['immigrate', 'to move into a new country to live'],
        ['emigrate', 'to leave your home country'],
        ['push factor', 'a reason that drives people to leave'],
        ['pull factor', 'a reason that attracts people to a place'],
        ['quota', 'a legal limit on how many may enter']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['inmigrar', 'mudarse a un nuevo país para vivir'],
        ['emigrar', 'dejar tu país de origen'],
        ['factor de empuje', 'una razón que impulsa a la gente a irse'],
        ['factor de atracción', 'una razón que atrae a la gente a un lugar'],
        ['cuota', 'un límite legal de cuántos pueden entrar']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['nhập cư', 'chuyển vào một quốc gia mới để sinh sống'],
        ['di cư ra nước ngoài', 'rời khỏi quê hương của bạn'],
        ['yếu tố đẩy', 'một lý do khiến người ta phải ra đi'],
        ['yếu tố kéo', 'một lý do thu hút người ta đến một nơi'],
        ['hạn ngạch', 'giới hạn pháp lý về số người được phép nhập cảnh']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['يهاجر إلى', 'ينتقل إلى بلد جديد للعيش فيه'],
        ['يهاجر من', 'يغادر بلده الأصلي'],
        ['عامل الدفع', 'سبب يدفع الناس إلى المغادرة'],
        ['عامل الجذب', 'سبب يجذب الناس إلى مكان'],
        ['الحصة', 'حدّ قانوني لعدد من يُسمح لهم بالدخول']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['आप्रवास करना', 'रहने के लिए किसी नए देश में आना'],
        ['उत्प्रवास करना', 'अपना गृह देश छोड़ना'],
        ['धक्का कारक', 'एक कारण जो लोगों को जाने के लिए विवश करता है'],
        ['आकर्षण कारक', 'एक कारण जो लोगों को किसी स्थान की ओर आकर्षित करता है'],
        ['कोटा', 'कितने लोग प्रवेश कर सकते हैं, इसकी कानूनी सीमा']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['ہجرت کر کے آنا', 'رہنے کے لیے کسی نئے ملک میں آنا'],
        ['ہجرت کر کے جانا', 'اپنا آبائی ملک چھوڑنا'],
        ['دھکیلنے کا عامل', 'ایک وجہ جو لوگوں کو جانے پر مجبور کرتی ہے'],
        ['کشش کا عامل', 'ایک وجہ جو لوگوں کو کسی جگہ کی طرف کھینچتی ہے'],
        ['کوٹا', 'کتنے لوگ داخل ہو سکتے ہیں، اس کی قانونی حد']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['移入（immigrate）', '迁入一个新国家定居'],
        ['移出（emigrate）', '离开你的祖国'],
        ['推力因素', '促使人们离开的原因'],
        ['拉力因素', '吸引人们前往某地的原因'],
        ['配额', '对准许入境人数的法律限制']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 5 · Immigration 1914 · DEEP ───────── */
  {
    id: 'g5-immigration-deep-entry', grade: 5, unit: 'immigration',
    unitTitle: 'A New Life — Immigration, 1914', phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.16(c)(12)(C)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: push & pull',
      items: [
        { before: 'War and hunger at home are', after: 'that drive people away.', choices: ['pull factors', 'push factors', 'ports of entry'], a: 1 },
        { before: 'The promise of jobs and land is a', after: 'that attracts newcomers.', choices: ['pull factor', 'push factor', 'quota'], a: 0 },
        { before: 'People often leave farms for cities because of', after: 'like factory work.', choices: ['pull factors', 'tenements', 'manifests'], a: 0 }
      ],
      takeaway: 'Every migration story is a mix of push AND pull. Look for both.'
    },
    es: {
      title: 'Calentamiento: empuje y atracción',
      items: [
        { before: 'La guerra y el hambre en casa son', after: 'que alejan a la gente.', choices: ['factores de atracción', 'factores de empuje', 'puertos de entrada'], a: 1 },
        { before: 'La promesa de empleos y tierra es un', after: 'que atrae a los recién llegados.', choices: ['factor de atracción', 'factor de empuje', 'cuota'], a: 0 },
        { before: 'La gente suele dejar el campo por las ciudades a causa de', after: 'como el trabajo en fábricas.', choices: ['factores de atracción', 'inquilinatos', 'manifiestos'], a: 0 }
      ],
      takeaway: 'Toda historia de migración es una mezcla de empuje Y atracción. Busca ambos.'
    },
    vi: {
      title: 'Khởi động: đẩy & kéo',
      items: [
        { before: 'Chiến tranh và nạn đói ở quê nhà là', after: 'khiến người ta rời đi.', choices: ['những yếu tố kéo', 'những yếu tố đẩy', 'những cửa khẩu nhập cảnh'], a: 1 },
        { before: 'Hứa hẹn về việc làm và đất đai là một', after: 'thu hút những người mới đến.', choices: ['yếu tố kéo', 'yếu tố đẩy', 'hạn ngạch'], a: 0 },
        { before: 'Người ta thường rời nông trại lên thành phố vì', after: 'như việc làm trong nhà máy.', choices: ['những yếu tố kéo', 'những khu nhà ổ chuột', 'những bản kê khai'], a: 0 }
      ],
      takeaway: 'Mỗi câu chuyện di cư là sự pha trộn của cả đẩy VÀ kéo. Hãy tìm cả hai.'
    },
    ar: {
      title: 'تهيئة: الدفع والجذب',
      items: [
        { before: 'الحرب والجوع في الوطن هما', after: 'تُبعد الناس.', choices: ['عوامل جذب', 'عوامل دفع', 'منافذ دخول'], a: 1 },
        { before: 'وعد الوظائف والأرض هو', after: 'يجذب الوافدين الجدد.', choices: ['عامل جذب', 'عامل دفع', 'حصة'], a: 0 },
        { before: 'كثيرًا ما يترك الناس المزارع إلى المدن بسبب', after: 'مثل العمل في المصانع.', choices: ['عوامل جذب', 'مساكن شعبية', 'كشوف ركاب'], a: 0 }
      ],
      takeaway: 'كل قصة هجرة مزيج من الدفع والجذب معًا. ابحث عن كليهما.'
    },
    hi: {
      title: 'वार्म-अप: धक्का और आकर्षण',
      items: [
        { before: 'घर पर युद्ध और भूख हैं', after: 'जो लोगों को दूर धकेलते हैं।', choices: ['आकर्षण कारक', 'धक्का कारक', 'प्रवेश बंदरगाह'], a: 1 },
        { before: 'नौकरियों और भूमि का वादा एक', after: 'है जो नवागंतुकों को आकर्षित करता है।', choices: ['आकर्षण कारक', 'धक्का कारक', 'कोटा'], a: 0 },
        { before: 'लोग अक्सर खेतों को छोड़कर शहरों की ओर जाते हैं', after: 'जैसे कारखाने के काम के कारण।', choices: ['आकर्षण कारकों', 'टेनमेंट', 'मैनिफेस्ट'], a: 0 }
      ],
      takeaway: 'हर प्रवास की कहानी धक्का और आकर्षण दोनों का मिश्रण होती है। दोनों को खोजें।'
    },
    ur: {
      title: 'وارم اپ: دھکیلنا اور کھینچنا',
      items: [
        { before: 'گھر پر جنگ اور بھوک ہیں', after: 'جو لوگوں کو دور دھکیلتے ہیں۔', choices: ['کشش کے عوامل', 'دھکیلنے کے عوامل', 'داخلے کی بندرگاہیں'], a: 1 },
        { before: 'ملازمتوں اور زمین کا وعدہ ایک', after: 'ہے جو نئے آنے والوں کو کھینچتا ہے۔', choices: ['کشش کا عامل', 'دھکیلنے کا عامل', 'کوٹا'], a: 0 },
        { before: 'لوگ اکثر کھیت چھوڑ کر شہروں کا رخ کرتے ہیں', after: 'جیسے کارخانے کے کام کی وجہ سے۔', choices: ['کشش کے عوامل', 'ٹینمنٹس', 'مینی فیسٹس'], a: 0 }
      ],
      takeaway: 'ہر ہجرت کی کہانی دھکیلنے اور کھینچنے دونوں کا مرکب ہوتی ہے۔ دونوں کو تلاش کریں۔'
    },
    zh: {
      title: '热身：推力与拉力',
      items: [
        { before: '本国的战争与饥饿是', after: '把人们推离家乡。', choices: ['拉力因素', '推力因素', '入境口岸'], a: 1 },
        { before: '就业与土地的许诺是一种', after: '吸引着新来者。', choices: ['拉力因素', '推力因素', '配额'], a: 0 },
        { before: '人们常常离开农场前往城市，是因为', after: '例如工厂的工作。', choices: ['拉力因素', '廉租公寓', '旅客名单'], a: 0 }
      ],
      takeaway: '每个迁移故事都是推力与拉力的混合。两者都要寻找。'
    } }
  },
  {
    id: 'g5-immigration-deep-exit', grade: 5, unit: 'immigration',
    unitTitle: 'A New Life — Immigration, 1914', phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.16(c)(12)(C), (c)(23)(C)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort the factors',
      cats: ['Push (leave)', 'Pull (attract)'],
      items: [
        { t: 'Crop failure and famine', c: 0 },
        { t: 'Religious persecution', c: 0 },
        { t: 'War at home', c: 0 },
        { t: 'Factory jobs in cities', c: 1 },
        { t: 'Family already settled here', c: 1 },
        { t: 'Cheap or free farmland', c: 1 }
      ],
      takeaway: 'Sorting causes into push vs pull is the concept map behind your argument.'
    },
    es: {
      title: 'Salida: clasifica los factores',
      cats: ['Empuje (irse)', 'Atracción (atraer)'],
      items: [
        { t: 'Pérdida de cosechas y hambruna', c: 0 },
        { t: 'Persecución religiosa', c: 0 },
        { t: 'Guerra en casa', c: 0 },
        { t: 'Empleos en fábricas de las ciudades', c: 1 },
        { t: 'Familia ya establecida aquí', c: 1 },
        { t: 'Tierra de cultivo barata o gratuita', c: 1 }
      ],
      takeaway: 'Clasificar las causas en empuje vs atracción es el mapa conceptual detrás de tu argumento.'
    },
    vi: {
      title: 'Phiếu ra: phân loại các yếu tố',
      cats: ['Đẩy (ra đi)', 'Kéo (thu hút)'],
      items: [
        { t: 'Mất mùa và nạn đói', c: 0 },
        { t: 'Đàn áp tôn giáo', c: 0 },
        { t: 'Chiến tranh ở quê nhà', c: 0 },
        { t: 'Việc làm trong nhà máy ở thành phố', c: 1 },
        { t: 'Gia đình đã định cư ở đây', c: 1 },
        { t: 'Đất canh tác rẻ hoặc miễn phí', c: 1 }
      ],
      takeaway: 'Phân loại nguyên nhân thành đẩy và kéo chính là sơ đồ khái niệm đằng sau lập luận của bạn.'
    },
    ar: {
      title: 'الخروج: صنّف العوامل',
      cats: ['دفع (المغادرة)', 'جذب (الجذب)'],
      items: [
        { t: 'فشل المحاصيل والمجاعة', c: 0 },
        { t: 'الاضطهاد الديني', c: 0 },
        { t: 'حرب في الوطن', c: 0 },
        { t: 'وظائف المصانع في المدن', c: 1 },
        { t: 'عائلة مستقرة هنا بالفعل', c: 1 },
        { t: 'أرض زراعية رخيصة أو مجانية', c: 1 }
      ],
      takeaway: 'تصنيف الأسباب إلى دفع مقابل جذب هو الخريطة المفاهيمية وراء حجّتك.'
    },
    hi: {
      title: 'निकास: कारकों को छाँटें',
      cats: ['धक्का (छोड़ना)', 'आकर्षण (खींचना)'],
      items: [
        { t: 'फसल की विफलता और अकाल', c: 0 },
        { t: 'धार्मिक उत्पीड़न', c: 0 },
        { t: 'घर पर युद्ध', c: 0 },
        { t: 'शहरों में कारखाने की नौकरियाँ', c: 1 },
        { t: 'परिवार पहले से यहाँ बसा हुआ', c: 1 },
        { t: 'सस्ती या मुफ़्त कृषि भूमि', c: 1 }
      ],
      takeaway: 'कारणों को धक्का बनाम आकर्षण में छाँटना ही आपके तर्क के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: عوامل کو چھانٹیں',
      cats: ['دھکیلنا (چھوڑنا)', 'کھینچنا (متوجہ کرنا)'],
      items: [
        { t: 'فصل کی ناکامی اور قحط', c: 0 },
        { t: 'مذہبی ایذا رسانی', c: 0 },
        { t: 'گھر پر جنگ', c: 0 },
        { t: 'شہروں میں کارخانوں کی ملازمتیں', c: 1 },
        { t: 'خاندان پہلے سے یہاں آباد', c: 1 },
        { t: 'سستی یا مفت کاشتکاری کی زمین', c: 1 }
      ],
      takeaway: 'وجوہات کو دھکیلنے بمقابلہ کھینچنے میں چھانٹنا ہی آپ کی دلیل کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：把各因素分类',
      cats: ['推力（离开）', '拉力（吸引）'],
      items: [
        { t: '歉收与饥荒', c: 0 },
        { t: '宗教迫害', c: 0 },
        { t: '本国的战争', c: 0 },
        { t: '城市里的工厂工作', c: 1 },
        { t: '家人已在此定居', c: 1 },
        { t: '廉价或免费的农田', c: 1 }
      ],
      takeaway: '把原因分成推力与拉力，就是你论证背后的概念图。'
    } }
  },

  /* ───────── Grade 5 · Immigration 1914 · TRANSFER ───────── */
  {
    id: 'g5-immigration-transfer-entry', grade: 5, unit: 'immigration',
    unitTitle: 'A New Life — Immigration, 1914', phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.16(c)(26)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving steps',
      seconds: 45,
      questions: [
        { q: 'The FIRST thing a problem-solver does is…', choices: ['pick a solution', 'define the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing, a good problem-solver…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other views'], a: 0 },
        { q: 'A strong solution is backed by…', choices: ['a loud voice', 'claim + evidence', 'only feelings'], a: 1 },
        { q: 'After choosing a solution, you should…', choices: ['forget it', 'evaluate how well it worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Define → gather → weigh → decide → defend → evaluate. That is the whole transfer move.'
    },
    es: {
      title: 'Calentamiento: los pasos para resolver problemas',
      seconds: 45,
      questions: [
        { q: 'Lo PRIMERO que hace quien resuelve problemas es…', choices: ['elegir una solución', 'definir el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir, quien resuelve bien problemas…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora otras opiniones'], a: 0 },
        { q: 'Una solución sólida se respalda con…', choices: ['una voz fuerte', 'afirmación + evidencia', 'solo sentimientos'], a: 1 },
        { q: 'Después de elegir una solución, deberías…', choices: ['olvidarla', 'evaluar qué tan bien funcionó', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Definir → reunir → sopesar → decidir → defender → evaluar. Ese es todo el movimiento de transferencia.'
    },
    vi: {
      title: 'Khởi động: các bước giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Điều ĐẦU TIÊN người giải quyết vấn đề làm là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua quan điểm khác'], a: 0 },
        { q: 'Một giải pháp vững chắc được củng cố bằng…', choices: ['một giọng nói to', 'luận điểm + bằng chứng', 'chỉ cảm xúc'], a: 1 },
        { q: 'Sau khi chọn một giải pháp, bạn nên…', choices: ['quên nó đi', 'đánh giá xem nó hiệu quả ra sao', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → quyết định → bảo vệ → đánh giá. Đó chính là toàn bộ bước chuyển giao.'
    },
    ar: {
      title: 'تهيئة: خطوات حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'أول ما يفعله حلّال المشكلات هو…', choices: ['اختيار حل', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل الاختيار، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل الآراء الأخرى'], a: 0 },
        { q: 'الحل القوي يُدعم بـ…', choices: ['صوت عالٍ', 'ادعاء + دليل', 'المشاعر فقط'], a: 1 },
        { q: 'بعد اختيار حل، ينبغي أن…', choices: ['تنساه', 'تقيّم مدى نجاحه', 'تخفي المفاضلات'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن ← قرِّر ← دافِع ← قيِّم. تلك هي حركة النقل بأكملها.'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान के चरण',
      seconds: 45,
      questions: [
        { q: 'समस्या हल करने वाला सबसे पहले जो करता है, वह है…', choices: ['एक समाधान चुनना', 'समस्या को परिभाषित करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'चुनने से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य विचारों को अनदेखा करता है'], a: 0 },
        { q: 'एक मजबूत समाधान का आधार होता है…', choices: ['एक ऊँची आवाज़', 'दावा + साक्ष्य', 'केवल भावनाएँ'], a: 1 },
        { q: 'समाधान चुनने के बाद, आपको चाहिए…', choices: ['उसे भूल जाना', 'यह आँकना कि वह कितना अच्छा रहा', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → निर्णय लें → बचाव करें → आँकें। यही पूरी अंतरण चाल है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کے مراحل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے والا سب سے پہلے جو کرتا ہے، وہ ہے…', choices: ['ایک حل چننا', 'مسئلے کو متعین کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'چننے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دوسری آراء کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'ایک مضبوط حل کی بنیاد ہوتی ہے…', choices: ['ایک بلند آواز', 'دعویٰ + ثبوت', 'صرف جذبات'], a: 1 },
        { q: 'حل چننے کے بعد، آپ کو چاہیے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ وہ کتنا کارگر رہا', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← فیصلہ کریں ← دفاع کریں ← جانچیں۔ یہی پوری منتقلی کی چال ہے۔'
    },
    zh: {
      title: '热身：解决问题的步骤',
      seconds: 45,
      questions: [
        { q: '解决问题者首先要做的是…', choices: ['挑选一个方案', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在做出选择之前，优秀的解决问题者会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视他人的观点'], a: 0 },
        { q: '有力的解决方案背后有…', choices: ['大嗓门', '主张 + 证据', '只有感受'], a: 1 },
        { q: '选定方案之后，你应当…', choices: ['把它忘掉', '评估它的效果如何', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 决定 → 辩护 → 评估。这就是整个迁移动作。'
    } }
  },
  {
    id: 'g5-immigration-transfer-exit', grade: 5, unit: 'immigration',
    unitTitle: 'A New Life — Immigration, 1914', phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.16(c)(23)(G,H)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim + evidence',
      items: [
        { before: 'A claim without', after: 'is just an opinion.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: 'When two stakeholders disagree, each should support their view with', after: 'from the sources.', choices: ['evidence', 'volume', 'guesses'], a: 0 },
        { before: 'Naming the', after: 'of your solution shows you thought it through.', choices: ['trade-offs', 'colors', 'vocabulary'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs = thinking like a historian and a citizen.'
    },
    es: {
      title: 'Salida: afirmación + evidencia',
      items: [
        { before: 'Una afirmación sin', after: 'es solo una opinión.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Cuando dos partes interesadas no están de acuerdo, cada una debe respaldar su postura con', after: 'de las fuentes.', choices: ['evidencia', 'volumen', 'suposiciones'], a: 0 },
        { before: 'Nombrar las', after: 'de tu solución muestra que la pensaste a fondo.', choices: ['concesiones', 'colores', 'vocabulario'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones = pensar como un historiador y un ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm + bằng chứng',
      items: [
        { before: 'Một luận điểm không có', after: 'thì chỉ là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Khi hai bên liên quan bất đồng, mỗi bên nên củng cố quan điểm của mình bằng', after: 'từ các nguồn.', choices: ['bằng chứng', 'âm lượng', 'phỏng đoán'], a: 0 },
        { before: 'Nêu ra những', after: 'của giải pháp cho thấy bạn đã cân nhắc kỹ.', choices: ['đánh đổi', 'màu sắc', 'từ vựng'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi = tư duy như một nhà sử học và một công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء + دليل',
      items: [
        { before: 'الادعاء بلا', after: 'ما هو إلا رأي.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'عندما يختلف صاحبا مصلحة، ينبغي أن يدعم كلٌّ منهما رأيه بـ', after: 'من المصادر.', choices: ['أدلة', 'علوّ الصوت', 'تخمينات'], a: 0 },
        { before: 'إن تسمية', after: 'الخاصة بحلّك تُظهر أنك فكّرت فيه مليًّا.', choices: ['المفاضلات', 'الألوان', 'المفردات'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات = التفكير كمؤرّخ ومواطن.'
    },
    hi: {
      title: 'निकास: दावा + साक्ष्य',
      items: [
        { before: 'बिना', after: 'के दावा महज़ एक राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: 'जब दो हितधारक असहमत हों, तो हर एक को अपने विचार का समर्थन करना चाहिए', after: 'स्रोतों से।', choices: ['साक्ष्य से', 'आवाज़ की ऊँचाई से', 'अनुमानों से'], a: 0 },
        { before: 'अपने समाधान की', after: 'का नाम लेना दिखाता है कि आपने उसे गहराई से सोचा।', choices: ['समझौतों', 'रंगों', 'शब्दावली'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते = एक इतिहासकार और एक नागरिक की तरह सोचना।'
    },
    ur: {
      title: 'اخراج: دعویٰ + ثبوت',
      items: [
        { before: 'بغیر', after: 'کے دعویٰ محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: 'جب دو اسٹیک ہولڈرز اختلاف کریں، تو ہر ایک کو اپنے نقطہ نظر کی حمایت کرنی چاہیے', after: 'مآخذ سے۔', choices: ['ثبوت سے', 'آواز کی بلندی سے', 'اندازوں سے'], a: 0 },
        { before: 'اپنے حل کے', after: 'کا نام لینا ظاہر کرتا ہے کہ آپ نے اسے سوچ سمجھ کر پرکھا۔', choices: ['سمجھوتوں', 'رنگوں', 'الفاظ'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے = ایک مؤرخ اور ایک شہری کی طرح سوچنا۔'
    },
    zh: {
      title: '离场：主张 + 证据',
      items: [
        { before: '没有', after: '的主张只是一种意见。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '当两位利益相关者意见不合时，各方都应当支撑自己的观点，用', after: '来自资料。', choices: ['证据', '音量', '猜测'], a: 0 },
        { before: '说出你方案中的', after: '，表明你已经把它想透彻了。', choices: ['取舍', '颜色', '词汇'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍 = 像史学家和公民一样思考。'
    } }
  }

]);
