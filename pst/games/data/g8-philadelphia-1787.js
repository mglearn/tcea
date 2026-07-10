/* PST Arcade — ticket registry (Grade 8 · Philadelphia, 1787). Retrieval practice for one
   unit + phase. English-first; other languages carried inline per ticket (ticket.i18n[lang]).
   The engine (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. Shape:
   {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 8 · Philadelphia, 1787 · SURFACE ───────── */
  {
    id: 'g8-philadelphia-1787-surface-entry', grade: 8, unit: 'philadelphia-1787',
    unitTitle: "Philadelphia, 1787 — Can We Build a Government That Holds?", phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.20(c)(3)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: convention words',
      seconds: 45,
      questions: [
        { q: 'The nation\'s first plan of government, a loose league of states with a weak central government, was the…', choices: ['Articles of Confederation', 'Bill of Rights', 'Virginia Plan'], a: 0 },
        { q: 'A written plan that sets up a government and the rules it must follow is a…', choices: ['delegate', 'constitution', 'compromise'], a: 1 },
        { q: 'To formally approve or accept — as the states had to do with the Constitution — is to…', choices: ['ratify', 'represent', 'delegate'], a: 0 },
        { q: 'A person sent to represent a state at the Convention was a…', choices: ['republic', 'stakeholder', 'delegate'], a: 2 }
      ],
      takeaway: 'Know these four words and the rest of the unit reads clearly.'
    },
    es: {
      title: 'Calentamiento: palabras de la convención',
      seconds: 45,
      questions: [
        { q: 'El primer plan de gobierno de la nación, una liga suelta de estados con un gobierno central débil, fue…', choices: ['los Artículos de la Confederación', 'la Carta de Derechos', 'el Plan de Virginia'], a: 0 },
        { q: 'Un plan escrito que establece un gobierno y las reglas que debe seguir es una…', choices: ['delegado', 'constitución', 'compromiso'], a: 1 },
        { q: 'Aprobar o aceptar formalmente —como los estados debieron hacer con la Constitución— es…', choices: ['ratificar', 'representar', 'delegar'], a: 0 },
        { q: 'Una persona enviada a representar a un estado en la Convención era un…', choices: ['república', 'parte interesada', 'delegado'], a: 2 }
      ],
      takeaway: 'Domina estas cuatro palabras y el resto de la unidad se lee con claridad.'
    },
    vi: {
      title: 'Khởi động: từ vựng về hội nghị',
      seconds: 45,
      questions: [
        { q: 'Kế hoạch chính quyền đầu tiên của quốc gia, một liên minh lỏng lẻo của các bang với chính quyền trung ương yếu, là…', choices: ['Các Điều khoản Hợp bang', 'Đạo luật Nhân quyền', 'Kế hoạch Virginia'], a: 0 },
        { q: 'Một bản kế hoạch viết ra để thiết lập chính quyền và các quy tắc chính quyền phải tuân theo là một…', choices: ['đại biểu', 'hiến pháp', 'thỏa hiệp'], a: 1 },
        { q: 'Chính thức phê chuẩn hoặc chấp nhận — như các bang phải làm với Hiến pháp — là…', choices: ['phê chuẩn', 'đại diện', 'ủy quyền'], a: 0 },
        { q: 'Người được cử đi đại diện cho một bang tại Hội nghị là một…', choices: ['nền cộng hòa', 'bên liên quan', 'đại biểu'], a: 2 }
      ],
      takeaway: 'Nắm được bốn từ này thì phần còn lại của đơn vị bài học đọc rất rõ ràng.'
    },
    ar: {
      title: 'تهيئة: كلمات المؤتمر',
      seconds: 45,
      questions: [
        { q: 'كانت أول خطة حكم للأمة، وهي رابطة فضفاضة من الولايات بحكومة مركزية ضعيفة، هي…', choices: ['مواد الكونفدرالية', 'وثيقة الحقوق', 'خطة فرجينيا'], a: 0 },
        { q: 'الخطة المكتوبة التي تُنشئ حكومة والقواعد التي يجب أن تتبعها هي…', choices: ['مندوب', 'دستور', 'تسوية'], a: 1 },
        { q: 'الموافقة أو القبول رسميًا — كما كان على الولايات أن تفعل مع الدستور — هو…', choices: ['المصادقة', 'التمثيل', 'التفويض'], a: 0 },
        { q: 'الشخص المُرسَل لتمثيل ولاية في المؤتمر كان…', choices: ['جمهورية', 'صاحب مصلحة', 'مندوبًا'], a: 2 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وستقرأ بقية الوحدة بوضوح.'
    },
    hi: {
      title: 'वार्म-अप: कन्वेंशन के शब्द',
      seconds: 45,
      questions: [
        { q: 'राष्ट्र की पहली सरकारी योजना, कमज़ोर केंद्रीय सरकार वाला राज्यों का ढीला संघ, थी…', choices: ['आर्टिकल्स ऑफ कॉन्फेडरेशन', 'बिल ऑफ राइट्स', 'वर्जीनिया योजना'], a: 0 },
        { q: 'एक लिखित योजना जो सरकार और उसके पालनीय नियमों को स्थापित करती है, वह है…', choices: ['प्रतिनिधि', 'संविधान', 'समझौता'], a: 1 },
        { q: 'औपचारिक रूप से स्वीकृति या अनुमोदन देना — जैसा राज्यों को संविधान के साथ करना पड़ा — कहलाता है…', choices: ['अनुसमर्थन', 'प्रतिनिधित्व', 'प्रत्यायोजन'], a: 0 },
        { q: 'कन्वेंशन में किसी राज्य का प्रतिनिधित्व करने भेजा गया व्यक्ति था एक…', choices: ['गणराज्य', 'हितधारक', 'प्रतिनिधि'], a: 2 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और शेष इकाई स्पष्ट रूप से पढ़ी जा सकेगी।'
    },
    ur: {
      title: 'وارم اپ: کنونشن کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'قوم کا پہلا حکومتی منصوبہ، کمزور مرکزی حکومت کے ساتھ ریاستوں کا ڈھیلا اتحاد، تھا…', choices: ['آرٹیکلز آف کنفیڈریشن', 'بل آف رائٹس', 'ورجینیا منصوبہ'], a: 0 },
        { q: 'ایک تحریری منصوبہ جو حکومت اور اس کے قابلِ عمل قواعد قائم کرتا ہے، وہ ہے…', choices: ['مندوب', 'آئین', 'سمجھوتہ'], a: 1 },
        { q: 'باقاعدہ طور پر منظوری یا قبولیت دینا — جیسا ریاستوں کو آئین کے ساتھ کرنا پڑا — کہلاتا ہے…', choices: ['توثیق', 'نمائندگی', 'تفویض'], a: 0 },
        { q: 'کنونشن میں کسی ریاست کی نمائندگی کے لیے بھیجا گیا شخص تھا ایک…', choices: ['جمہوریہ', 'اسٹیک ہولڈر', 'مندوب'], a: 2 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو باقی اکائی واضح طور پر پڑھی جا سکے گی۔'
    },
    zh: {
      title: '热身：制宪会议词汇',
      seconds: 45,
      questions: [
        { q: '国家的第一份政府方案——由各州松散结盟、中央政府软弱——是…', choices: ['邦联条例', '权利法案', '弗吉尼亚方案'], a: 0 },
        { q: '一份设立政府并规定其必须遵守规则的书面方案是…', choices: ['代表', '宪法', '妥协'], a: 1 },
        { q: '正式批准或接受——正如各州对宪法所必须做的——就是…', choices: ['批准', '代表', '委托'], a: 0 },
        { q: '被派去在制宪会议上代表某州的人是一位…', choices: ['共和国', '利益相关者', '代表'], a: 2 }
      ],
      takeaway: '掌握这四个词，本单元其余部分就读得清清楚楚。'
    } }
  },
  {
    id: 'g8-philadelphia-1787-surface-exit', grade: 8, unit: 'philadelphia-1787',
    unitTitle: "Philadelphia, 1787 — Can We Build a Government That Holds?", phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.20(c)(3)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['federalism', 'power shared between a national government and the states'],
        ['separation of powers', 'splitting government into legislative, executive, and judicial branches'],
        ['checks & balances', 'each branch can limit the others so none grows too strong'],
        ['compromise', 'a deal where each side gives up something both can accept'],
        ['republic', 'a government where citizens elect representatives to decide for them']
      ],
      takeaway: 'Matched all five? You are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['federalismo', 'poder compartido entre un gobierno nacional y los estados'],
        ['separación de poderes', 'dividir el gobierno en poderes legislativo, ejecutivo y judicial'],
        ['pesos y contrapesos', 'cada poder puede limitar a los otros para que ninguno se vuelva demasiado fuerte'],
        ['compromiso', 'un acuerdo en que cada lado cede algo que ambos pueden aceptar'],
        ['república', 'un gobierno donde los ciudadanos eligen representantes para decidir por ellos']
      ],
      takeaway: '¿Relacionaste las cinco? Estás listo para lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['chủ nghĩa liên bang', 'quyền lực được chia sẻ giữa chính quyền quốc gia và các bang'],
        ['phân quyền', 'chia chính quyền thành các nhánh lập pháp, hành pháp và tư pháp'],
        ['kiểm soát và cân bằng', 'mỗi nhánh có thể hạn chế các nhánh khác để không nhánh nào quá mạnh'],
        ['thỏa hiệp', 'một thỏa thuận mỗi bên nhường bớt điều gì đó mà cả hai chấp nhận'],
        ['nền cộng hòa', 'chính quyền nơi công dân bầu ra đại diện để quyết định thay họ']
      ],
      takeaway: 'Ghép đúng cả năm? Bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['الفيدرالية', 'سلطة مشتركة بين حكومة وطنية والولايات'],
        ['الفصل بين السلطات', 'تقسيم الحكومة إلى سلطات تشريعية وتنفيذية وقضائية'],
        ['الضوابط والتوازنات', 'يمكن لكل سلطة أن تحدّ من الأخريات كي لا تقوى إحداها أكثر من اللازم'],
        ['التسوية', 'اتفاق يتنازل فيه كل طرف عن شيء يقبله الطرفان'],
        ['الجمهورية', 'حكومة ينتخب فيها المواطنون ممثلين ليقرروا نيابة عنهم']
      ],
      takeaway: 'طابقت الخمس جميعًا؟ أنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['संघवाद', 'राष्ट्रीय सरकार और राज्यों के बीच साझा शक्ति'],
        ['शक्तियों का पृथक्करण', 'सरकार को विधायी, कार्यकारी और न्यायिक शाखाओं में बाँटना'],
        ['नियंत्रण और संतुलन', 'हर शाखा दूसरों को सीमित कर सकती है ताकि कोई बहुत शक्तिशाली न हो'],
        ['समझौता', 'एक सौदा जिसमें हर पक्ष कुछ छोड़ता है जिसे दोनों स्वीकार कर सकें'],
        ['गणराज्य', 'ऐसी सरकार जहाँ नागरिक अपने लिए निर्णय हेतु प्रतिनिधि चुनते हैं']
      ],
      takeaway: 'पाँचों मिला दिए? आप गहन में जाने को तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['وفاقیت', 'قومی حکومت اور ریاستوں کے درمیان مشترکہ اختیار'],
        ['اختیارات کی علیحدگی', 'حکومت کو مقننہ، انتظامیہ اور عدلیہ کی شاخوں میں تقسیم کرنا'],
        ['چیک اینڈ بیلنس', 'ہر شاخ دوسروں کو محدود کر سکتی ہے تاکہ کوئی حد سے زیادہ طاقتور نہ ہو'],
        ['سمجھوتہ', 'ایک معاہدہ جس میں ہر فریق کچھ چھوڑتا ہے جسے دونوں قبول کر سکیں'],
        ['جمہوریہ', 'ایسی حکومت جہاں شہری اپنے لیے فیصلہ کرنے کو نمائندے چنتے ہیں']
      ],
      takeaway: 'پانچوں ملا دیے؟ آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['联邦制', '国家政府与各州之间共享权力'],
        ['三权分立', '把政府分为立法、行政、司法三个部门'],
        ['制衡', '各部门可相互限制，使任何一方都不致过于强大'],
        ['妥协', '各方各让一步、双方都能接受的协议'],
        ['共和国', '公民选举代表替他们作出决定的政府']
      ],
      takeaway: '五个都配对正确了？你可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 8 · Philadelphia, 1787 · DEEP ───────── */
  {
    id: 'g8-philadelphia-1787-deep-entry', grade: 8, unit: 'philadelphia-1787',
    unitTitle: "Philadelphia, 1787 — Can We Build a Government That Holds?", phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.20(c)(3), (c)(15)(A)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: competing interests',
      items: [
        { before: 'Large states like Virginia backed the', after: ', wanting votes counted by population.', choices: ['New Jersey Plan', 'Virginia Plan', 'Bill of Rights'], a: 1 },
        { before: 'Small states like Delaware backed the', after: ', wanting one vote per state.', choices: ['New Jersey Plan', 'Virginia Plan', 'Great Compromise'], a: 0 },
        { before: 'Power shared between the nation and the states is', after: ', a core principle they debated.', choices: ['ratification', 'federalism', 'representation'], a: 1 }
      ],
      takeaway: 'Every tension pulls on a principle — federalism, representation, separation of powers.'
    },
    es: {
      title: 'Calentamiento: intereses en pugna',
      items: [
        { before: 'Estados grandes como Virginia respaldaron el', after: ', queriendo votos por población.', choices: ['Plan de Nueva Jersey', 'Plan de Virginia', 'la Carta de Derechos'], a: 1 },
        { before: 'Estados pequeños como Delaware respaldaron el', after: ', queriendo un voto por estado.', choices: ['Plan de Nueva Jersey', 'Plan de Virginia', 'el Gran Compromiso'], a: 0 },
        { before: 'El poder compartido entre la nación y los estados es el', after: ', un principio central que debatieron.', choices: ['ratificación', 'federalismo', 'representación'], a: 1 }
      ],
      takeaway: 'Cada tensión tira de un principio: federalismo, representación, separación de poderes.'
    },
    vi: {
      title: 'Khởi động: lợi ích xung đột',
      items: [
        { before: 'Các bang lớn như Virginia ủng hộ', after: ', muốn phiếu được tính theo dân số.', choices: ['Kế hoạch New Jersey', 'Kế hoạch Virginia', 'Đạo luật Nhân quyền'], a: 1 },
        { before: 'Các bang nhỏ như Delaware ủng hộ', after: ', muốn mỗi bang một phiếu.', choices: ['Kế hoạch New Jersey', 'Kế hoạch Virginia', 'Đại Thỏa hiệp'], a: 0 },
        { before: 'Quyền lực chia sẻ giữa quốc gia và các bang là', after: ', một nguyên tắc cốt lõi họ tranh luận.', choices: ['sự phê chuẩn', 'chủ nghĩa liên bang', 'sự đại diện'], a: 1 }
      ],
      takeaway: 'Mỗi căng thẳng đều tác động đến một nguyên tắc — liên bang, đại diện, phân quyền.'
    },
    ar: {
      title: 'تهيئة: المصالح المتنافسة',
      items: [
        { before: 'أيّدت الولايات الكبيرة مثل فرجينيا', after: '، راغبةً في احتساب الأصوات حسب عدد السكان.', choices: ['خطة نيوجيرسي', 'خطة فرجينيا', 'وثيقة الحقوق'], a: 1 },
        { before: 'أيّدت الولايات الصغيرة مثل ديلاوير', after: '، راغبةً في صوت واحد لكل ولاية.', choices: ['خطة نيوجيرسي', 'خطة فرجينيا', 'التسوية الكبرى'], a: 0 },
        { before: 'السلطة المشتركة بين الأمة والولايات هي', after: '، وهي مبدأ أساسي تناقشوا فيه.', choices: ['المصادقة', 'الفيدرالية', 'التمثيل'], a: 1 }
      ],
      takeaway: 'كل توتر يشدّ على مبدأ — الفيدرالية، التمثيل، الفصل بين السلطات.'
    },
    hi: {
      title: 'वार्म-अप: परस्पर विरोधी हित',
      items: [
        { before: 'वर्जीनिया जैसे बड़े राज्यों ने', after: 'का समर्थन किया, जो जनसंख्या के आधार पर वोट चाहते थे।', choices: ['न्यू जर्सी योजना', 'वर्जीनिया योजना', 'बिल ऑफ राइट्स'], a: 1 },
        { before: 'डेलावेयर जैसे छोटे राज्यों ने', after: 'का समर्थन किया, जो प्रति राज्य एक वोट चाहते थे।', choices: ['न्यू जर्सी योजना', 'वर्जीनिया योजना', 'महान समझौता'], a: 0 },
        { before: 'राष्ट्र और राज्यों के बीच साझा शक्ति', after: 'है, जिस पर उन्होंने बहस की एक मूल सिद्धांत।', choices: ['अनुसमर्थन', 'संघवाद', 'प्रतिनिधित्व'], a: 1 }
      ],
      takeaway: 'हर तनाव किसी सिद्धांत पर खिंचाव डालता है — संघवाद, प्रतिनिधित्व, शक्तियों का पृथक्करण।'
    },
    ur: {
      title: 'وارم اپ: متصادم مفادات',
      items: [
        { before: 'ورجینیا جیسی بڑی ریاستوں نے', after: 'کی حمایت کی، جو آبادی کے حساب سے ووٹ چاہتی تھیں۔', choices: ['نیو جرسی منصوبہ', 'ورجینیا منصوبہ', 'بل آف رائٹس'], a: 1 },
        { before: 'ڈیلاویئر جیسی چھوٹی ریاستوں نے', after: 'کی حمایت کی، جو فی ریاست ایک ووٹ چاہتی تھیں۔', choices: ['نیو جرسی منصوبہ', 'ورجینیا منصوبہ', 'عظیم سمجھوتہ'], a: 0 },
        { before: 'قوم اور ریاستوں کے درمیان مشترکہ اختیار', after: 'ہے، ایک بنیادی اصول جس پر انہوں نے بحث کی۔', choices: ['توثیق', 'وفاقیت', 'نمائندگی'], a: 1 }
      ],
      takeaway: 'ہر کشیدگی کسی اصول پر کھنچاؤ ڈالتی ہے — وفاقیت، نمائندگی، اختیارات کی علیحدگی۔'
    },
    zh: {
      title: '热身：相互竞争的利益',
      items: [
        { before: '弗吉尼亚等大州支持', after: '，希望按人口计票。', choices: ['新泽西方案', '弗吉尼亚方案', '权利法案'], a: 1 },
        { before: '特拉华等小州支持', after: '，希望每州一票。', choices: ['新泽西方案', '弗吉尼亚方案', '大妥协'], a: 0 },
        { before: '国家与各州之间共享权力就是', after: '，这是他们辩论的核心原则。', choices: ['批准', '联邦制', '代表制'], a: 1 }
      ],
      takeaway: '每一处张力都牵动着某一原则——联邦制、代表制、三权分立。'
    } }
  },
  {
    id: 'g8-philadelphia-1787-deep-exit', grade: 8, unit: 'philadelphia-1787',
    unitTitle: "Philadelphia, 1787 — Can We Build a Government That Holds?", phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.20(c)(3), (c)(21)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort the position by side',
      cats: ['Large states (Virginia Plan)', 'Small states (New Jersey Plan)'],
      items: [
        { t: 'Votes counted by population', c: 0 },
        { t: 'More people should mean more votes', c: 0 },
        { t: 'A strong national government', c: 0 },
        { t: 'One vote per state', c: 1 },
        { t: 'Fear of being outvoted by bigger states', c: 1 },
        { t: 'Every state equal, regardless of size', c: 1 }
      ],
      takeaway: 'Sorting each side\'s interest is the concept map behind the Great Compromise.'
    },
    es: {
      title: 'Salida: clasifica la postura por bando',
      cats: ['Estados grandes (Plan de Virginia)', 'Estados pequeños (Plan de Nueva Jersey)'],
      items: [
        { t: 'Votos contados por población', c: 0 },
        { t: 'Más gente debería significar más votos', c: 0 },
        { t: 'Un gobierno nacional fuerte', c: 0 },
        { t: 'Un voto por estado', c: 1 },
        { t: 'Temor a ser superados en votos por los estados grandes', c: 1 },
        { t: 'Cada estado igual, sin importar su tamaño', c: 1 }
      ],
      takeaway: 'Clasificar el interés de cada bando es el mapa conceptual detrás del Gran Compromiso.'
    },
    vi: {
      title: 'Phiếu ra: phân loại lập trường theo phe',
      cats: ['Bang lớn (Kế hoạch Virginia)', 'Bang nhỏ (Kế hoạch New Jersey)'],
      items: [
        { t: 'Phiếu được tính theo dân số', c: 0 },
        { t: 'Đông dân hơn thì phải nhiều phiếu hơn', c: 0 },
        { t: 'Một chính quyền quốc gia mạnh', c: 0 },
        { t: 'Mỗi bang một phiếu', c: 1 },
        { t: 'Sợ bị các bang lớn hơn áp đảo phiếu', c: 1 },
        { t: 'Mọi bang bình đẳng, bất kể lớn nhỏ', c: 1 }
      ],
      takeaway: 'Phân loại lợi ích của mỗi phe chính là sơ đồ khái niệm đằng sau Đại Thỏa hiệp.'
    },
    ar: {
      title: 'الخروج: صنّف الموقف حسب الجانب',
      cats: ['الولايات الكبيرة (خطة فرجينيا)', 'الولايات الصغيرة (خطة نيوجيرسي)'],
      items: [
        { t: 'احتساب الأصوات حسب عدد السكان', c: 0 },
        { t: 'المزيد من السكان يعني المزيد من الأصوات', c: 0 },
        { t: 'حكومة وطنية قوية', c: 0 },
        { t: 'صوت واحد لكل ولاية', c: 1 },
        { t: 'الخوف من أن تتغلب عليها الولايات الأكبر بالأصوات', c: 1 },
        { t: 'كل ولاية متساوية بغضّ النظر عن حجمها', c: 1 }
      ],
      takeaway: 'تصنيف مصلحة كل جانب هو الخريطة المفاهيمية وراء التسوية الكبرى.'
    },
    hi: {
      title: 'निकास: पक्ष के अनुसार रुख को छाँटें',
      cats: ['बड़े राज्य (वर्जीनिया योजना)', 'छोटे राज्य (न्यू जर्सी योजना)'],
      items: [
        { t: 'जनसंख्या के आधार पर वोट गिनना', c: 0 },
        { t: 'अधिक लोग मतलब अधिक वोट', c: 0 },
        { t: 'एक मज़बूत राष्ट्रीय सरकार', c: 0 },
        { t: 'प्रति राज्य एक वोट', c: 1 },
        { t: 'बड़े राज्यों द्वारा मतों में हार जाने का डर', c: 1 },
        { t: 'आकार से परे, हर राज्य समान', c: 1 }
      ],
      takeaway: 'हर पक्ष के हित को छाँटना ही महान समझौते के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: فریق کے مطابق مؤقف کو چھانٹیں',
      cats: ['بڑی ریاستیں (ورجینیا منصوبہ)', 'چھوٹی ریاستیں (نیو جرسی منصوبہ)'],
      items: [
        { t: 'آبادی کے حساب سے ووٹ گننا', c: 0 },
        { t: 'زیادہ لوگ یعنی زیادہ ووٹ', c: 0 },
        { t: 'ایک مضبوط قومی حکومت', c: 0 },
        { t: 'فی ریاست ایک ووٹ', c: 1 },
        { t: 'بڑی ریاستوں کے ہاتھوں ووٹوں میں ہار جانے کا خوف', c: 1 },
        { t: 'حجم سے قطع نظر، ہر ریاست برابر', c: 1 }
      ],
      takeaway: 'ہر فریق کے مفاد کو چھانٹنا ہی عظیم سمجھوتے کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：按阵营给立场分类',
      cats: ['大州（弗吉尼亚方案）', '小州（新泽西方案）'],
      items: [
        { t: '按人口计票', c: 0 },
        { t: '人口越多票数应越多', c: 0 },
        { t: '一个强有力的国家政府', c: 0 },
        { t: '每州一票', c: 1 },
        { t: '担心被更大的州以票数压过', c: 1 },
        { t: '不论大小，各州平等', c: 1 }
      ],
      takeaway: '把每一方的利益分类，就是大妥协背后的概念图。'
    } }
  },

  /* ───────── Grade 8 · Philadelphia, 1787 · TRANSFER ───────── */
  {
    id: 'g8-philadelphia-1787-transfer-entry', grade: 8, unit: 'philadelphia-1787',
    unitTitle: "Philadelphia, 1787 — Can We Build a Government That Holds?", phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.20(c)(31)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving steps',
      seconds: 45,
      questions: [
        { q: 'The FIRST move in the problem-solving process is to…', choices: ['pick a solution', 'define the problem', 'declare a winner'], a: 1 },
        { q: 'Before choosing a framework, a delegate should…', choices: ['gather information & weigh options', 'guess quickly', 'ignore other states'], a: 0 },
        { q: 'A proposed framework is defended with…', choices: ['a louder voice', 'evidence & the compromises behind it', 'only self-interest'], a: 1 },
        { q: 'The LAST step is to…', choices: ['forget the trade-offs', 'evaluate whether the solution would hold', 'hide who was left out'], a: 1 }
      ],
      takeaway: 'Define → gather → weigh → choose → defend → evaluate. That is §113.20(c)(31)(B).'
    },
    es: {
      title: 'Calentamiento: los pasos para resolver problemas',
      seconds: 45,
      questions: [
        { q: 'El PRIMER paso del proceso de resolución de problemas es…', choices: ['elegir una solución', 'definir el problema', 'declarar un ganador'], a: 1 },
        { q: 'Antes de elegir un marco, un delegado debe…', choices: ['reunir información y sopesar opciones', 'adivinar rápido', 'ignorar a los demás estados'], a: 0 },
        { q: 'Un marco propuesto se defiende con…', choices: ['una voz más fuerte', 'evidencia y las concesiones detrás de él', 'solo interés propio'], a: 1 },
        { q: 'El ÚLTIMO paso es…', choices: ['olvidar las concesiones', 'evaluar si la solución se sostendría', 'ocultar a quién se dejó fuera'], a: 1 }
      ],
      takeaway: 'Definir → reunir → sopesar → elegir → defender → evaluar. Eso es §113.20(c)(31)(B).'
    },
    vi: {
      title: 'Khởi động: các bước giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Bước ĐẦU TIÊN trong quy trình giải quyết vấn đề là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'tuyên bố người thắng'], a: 1 },
        { q: 'Trước khi chọn một khuôn khổ, một đại biểu nên…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua các bang khác'], a: 0 },
        { q: 'Một khuôn khổ được đề xuất được bảo vệ bằng…', choices: ['giọng nói to hơn', 'bằng chứng & các thỏa hiệp đằng sau nó', 'chỉ tư lợi'], a: 1 },
        { q: 'Bước CUỐI CÙNG là…', choices: ['quên đi các đánh đổi', 'đánh giá xem giải pháp có trụ được không', 'giấu đi ai bị bỏ lại'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → chọn → bảo vệ → đánh giá. Đó là §113.20(c)(31)(B).'
    },
    ar: {
      title: 'تهيئة: خطوات حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'الخطوة الأولى في عملية حل المشكلة هي…', choices: ['اختيار حل', 'تحديد المشكلة', 'إعلان فائز'], a: 1 },
        { q: 'قبل اختيار إطار، ينبغي على المندوب أن…', choices: ['يجمع المعلومات ويوازن الخيارات', 'يخمّن بسرعة', 'يتجاهل الولايات الأخرى'], a: 0 },
        { q: 'يُدافَع عن الإطار المقترح بـ…', choices: ['صوت أعلى', 'الأدلة والتسويات التي وراءه', 'المصلحة الذاتية فقط'], a: 1 },
        { q: 'الخطوة الأخيرة هي أن…', choices: ['تنسى المفاضلات', 'تقيّم ما إذا كان الحل سيصمد', 'تخفي مَن استُبعد'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن ← اختر ← دافِع ← قيِّم. تلك هي §113.20(c)(31)(B).'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान के चरण',
      seconds: 45,
      questions: [
        { q: 'समस्या-समाधान प्रक्रिया का पहला कदम है…', choices: ['एक समाधान चुनना', 'समस्या को परिभाषित करना', 'एक विजेता घोषित करना'], a: 1 },
        { q: 'एक ढाँचा चुनने से पहले, प्रतिनिधि को चाहिए…', choices: ['जानकारी जुटाना और विकल्पों को तौलना', 'जल्दी अनुमान लगाना', 'अन्य राज्यों को अनदेखा करना'], a: 0 },
        { q: 'प्रस्तावित ढाँचे का बचाव किया जाता है…', choices: ['ऊँची आवाज़ से', 'साक्ष्य और उसके पीछे के समझौतों से', 'केवल स्वार्थ से'], a: 1 },
        { q: 'अंतिम कदम है…', choices: ['समझौतों को भूल जाना', 'यह आँकना कि समाधान टिकेगा या नहीं', 'यह छिपाना कि किसे छोड़ा गया'], a: 1 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → चुनें → बचाव करें → आँकें। यही §113.20(c)(31)(B) है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کے مراحل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے کے عمل میں پہلا قدم ہے…', choices: ['ایک حل چننا', 'مسئلے کو متعین کرنا', 'ایک فاتح کا اعلان کرنا'], a: 1 },
        { q: 'ایک ڈھانچہ چننے سے پہلے، مندوب کو چاہیے…', choices: ['معلومات جمع کرنا اور اختیارات تولنا', 'جلدی اندازہ لگانا', 'دوسری ریاستوں کو نظرانداز کرنا'], a: 0 },
        { q: 'تجویز کردہ ڈھانچے کا دفاع کیا جاتا ہے…', choices: ['بلند آواز سے', 'ثبوت اور اس کے پیچھے سمجھوتوں سے', 'صرف ذاتی مفاد سے'], a: 1 },
        { q: 'آخری قدم ہے…', choices: ['سمجھوتوں کو بھول جانا', 'یہ جانچنا کہ حل قائم رہے گا یا نہیں', 'یہ چھپانا کہ کسے چھوڑا گیا'], a: 1 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← چنیں ← دفاع کریں ← جانچیں۔ یہی §113.20(c)(31)(B) ہے۔'
    },
    zh: {
      title: '热身：解决问题的步骤',
      seconds: 45,
      questions: [
        { q: '解决问题过程的第一步是…', choices: ['挑选一个方案', '界定问题', '宣布一个赢家'], a: 1 },
        { q: '在选择框架之前，代表应当…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视其他各州'], a: 0 },
        { q: '所提出的框架要用以下方式来辩护…', choices: ['更大的嗓门', '证据以及其背后的妥协', '只顾自身利益'], a: 1 },
        { q: '最后一步是…', choices: ['忘掉其中的取舍', '评估该方案能否维系', '隐瞒谁被排除在外'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 选择 → 辩护 → 评估。这就是 §113.20(c)(31)(B)。'
    } }
  },
  {
    id: 'g8-philadelphia-1787-transfer-exit', grade: 8, unit: 'philadelphia-1787',
    unitTitle: "Philadelphia, 1787 — Can We Build a Government That Holds?", phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.20(c)(31)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: compromise & evidence',
      items: [
        { before: 'Representation was settled by the', after: ', which created a two-house Congress.', choices: ['Great Compromise', 'Bill of Rights', 'Virginia Plan'], a: 0 },
        { before: 'A framework the states could accept was reached through', after: ', not by one side winning.', choices: ['compromise', 'guessing', 'silence'], a: 0 },
        { before: 'A strong proposal names its', after: ' honestly instead of hiding them.', choices: ['trade-offs', 'colors', 'winners'], a: 0 }
      ],
      takeaway: 'Compromise + evidence + honest trade-offs = reasoning like a delegate and a citizen.'
    },
    es: {
      title: 'Salida: compromiso y evidencia',
      items: [
        { before: 'La representación se resolvió mediante el', after: ', que creó un Congreso de dos cámaras.', choices: ['Gran Compromiso', 'la Carta de Derechos', 'Plan de Virginia'], a: 0 },
        { before: 'Se llegó a un marco que los estados podían aceptar mediante el', after: ', no porque un lado ganara.', choices: ['compromiso', 'la adivinación', 'el silencio'], a: 0 },
        { before: 'Una propuesta sólida nombra sus', after: ' con honestidad en vez de ocultarlas.', choices: ['concesiones', 'colores', 'ganadores'], a: 0 }
      ],
      takeaway: 'Compromiso + evidencia + concesiones honestas = razonar como delegado y ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: thỏa hiệp & bằng chứng',
      items: [
        { before: 'Vấn đề đại diện được giải quyết bằng', after: ', tạo ra một Quốc hội hai viện.', choices: ['Đại Thỏa hiệp', 'Đạo luật Nhân quyền', 'Kế hoạch Virginia'], a: 0 },
        { before: 'Một khuôn khổ mà các bang có thể chấp nhận đạt được nhờ', after: ', chứ không do một bên thắng.', choices: ['thỏa hiệp', 'sự phỏng đoán', 'sự im lặng'], a: 0 },
        { before: 'Một đề xuất vững chắc nêu rõ các', after: ' của mình một cách trung thực thay vì giấu đi.', choices: ['đánh đổi', 'màu sắc', 'người thắng'], a: 0 }
      ],
      takeaway: 'Thỏa hiệp + bằng chứng + đánh đổi trung thực = tư duy như một đại biểu và một công dân.'
    },
    ar: {
      title: 'الخروج: التسوية والدليل',
      items: [
        { before: 'حُسم أمر التمثيل بـ', after: '، الذي أنشأ كونغرسًا من مجلسين.', choices: ['التسوية الكبرى', 'وثيقة الحقوق', 'خطة فرجينيا'], a: 0 },
        { before: 'تمّ التوصل إلى إطار تقبله الولايات عبر', after: '، لا بانتصار جانب واحد.', choices: ['التسوية', 'التخمين', 'الصمت'], a: 0 },
        { before: 'الاقتراح القوي يسمّي', after: ' الخاصة به بصدق بدل إخفائها.', choices: ['المفاضلات', 'الألوان', 'الفائزين'], a: 0 }
      ],
      takeaway: 'تسوية + دليل + مفاضلات صادقة = التفكير كمندوب ومواطن.'
    },
    hi: {
      title: 'निकास: समझौता और साक्ष्य',
      items: [
        { before: 'प्रतिनिधित्व', after: 'से सुलझा, जिसने द्विसदनीय कांग्रेस बनाई।', choices: ['महान समझौते', 'बिल ऑफ राइट्स', 'वर्जीनिया योजना'], a: 0 },
        { before: 'ऐसा ढाँचा जिसे राज्य स्वीकार कर सकें,', after: 'से पहुँचा गया, न कि किसी एक पक्ष के जीतने से।', choices: ['समझौते', 'अनुमान', 'मौन'], a: 0 },
        { before: 'एक मज़बूत प्रस्ताव अपने', after: 'को छिपाने के बजाय ईमानदारी से नाम देता है।', choices: ['समझौतों', 'रंगों', 'विजेताओं'], a: 0 }
      ],
      takeaway: 'समझौता + साक्ष्य + ईमानदार समझौते = एक प्रतिनिधि और एक नागरिक की तरह तर्क करना।'
    },
    ur: {
      title: 'اخراج: سمجھوتہ اور ثبوت',
      items: [
        { before: 'نمائندگی کا معاملہ', after: 'سے طے ہوا، جس نے دو ایوانی کانگریس بنائی۔', choices: ['عظیم سمجھوتے', 'بل آف رائٹس', 'ورجینیا منصوبہ'], a: 0 },
        { before: 'ایسا ڈھانچہ جسے ریاستیں قبول کر سکیں،', after: 'کے ذریعے پہنچا گیا، نہ کہ کسی ایک فریق کی جیت سے۔', choices: ['سمجھوتے', 'اندازے', 'خاموشی'], a: 0 },
        { before: 'ایک مضبوط تجویز اپنے', after: 'کو چھپانے کے بجائے دیانتداری سے بیان کرتی ہے۔', choices: ['سمجھوتوں', 'رنگوں', 'فاتحین'], a: 0 }
      ],
      takeaway: 'سمجھوتہ + ثبوت + دیانتدار سمجھوتے = ایک مندوب اور ایک شہری کی طرح استدلال کرنا۔'
    },
    zh: {
      title: '离场：妥协与证据',
      items: [
        { before: '代表权问题通过', after: '得到解决，它创建了两院制国会。', choices: ['大妥协', '权利法案', '弗吉尼亚方案'], a: 0 },
        { before: '各州都能接受的框架是通过', after: '达成的，而非某一方获胜。', choices: ['妥协', '猜测', '沉默'], a: 0 },
        { before: '有力的提案会诚实地说出其', after: '，而不是把它们隐藏起来。', choices: ['取舍', '颜色', '赢家'], a: 0 }
      ],
      takeaway: '妥协 + 证据 + 诚实的取舍 = 像代表和公民一样推理。'
    } }
  }

]);
