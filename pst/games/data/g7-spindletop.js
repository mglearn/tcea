/* PST Arcade — ticket registry. Each ticket is retrieval practice for one unit + phase.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. To add tickets, append objects
   with the same shape: {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 7 · Spindletop 1901 · SURFACE ───────── */
  {
    id: 'g7-spindletop-surface-entry', grade: 7, unit: 'spindletop',
    unitTitle: 'Spindletop, 1901 — When Oil Changed Everything', phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.19(c)(11)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: oil-boom words',
      seconds: 45,
      questions: [
        { q: 'An economy built mainly on farming and ranching is…', choices: ['agrarian', 'industrial', 'urban'], a: 0 },
        { q: 'A town that grows very fast because of a sudden chance to get rich is a…', choices: ['refinery', 'boomtown', 'derrick'], a: 1 },
        { q: 'A well where oil shoots out of the ground under its own pressure is a…', choices: ['gusher', 'quota', 'stakeholder'], a: 0 },
        { q: 'Anyone affected by a decision or with something at stake is a…', choices: ['speculator', 'refiner', 'stakeholder'], a: 2 }
      ],
      takeaway: 'Know these four words and the rest of the Spindletop unit reads much easier.'
    },
    es: {
      title: 'Calentamiento: palabras del auge petrolero',
      seconds: 45,
      questions: [
        { q: 'Una economía basada sobre todo en la agricultura y la ganadería es…', choices: ['agraria', 'industrial', 'urbana'], a: 0 },
        { q: 'Un pueblo que crece muy rápido por una repentina oportunidad de hacerse rico es un…', choices: ['refinería', 'pueblo en auge', 'torre de perforación'], a: 1 },
        { q: 'Un pozo donde el petróleo sale disparado del suelo por su propia presión es un…', choices: ['chorro de petróleo', 'cuota', 'parte interesada'], a: 0 },
        { q: 'Cualquiera afectado por una decisión o con algo en juego es un…', choices: ['especulador', 'refinador', 'parte interesada'], a: 2 }
      ],
      takeaway: 'Domina estas cuatro palabras y el resto de la unidad de Spindletop se leerá mucho más fácil.'
    },
    vi: {
      title: 'Khởi động: từ vựng về cơn sốt dầu',
      seconds: 45,
      questions: [
        { q: 'Nền kinh tế chủ yếu dựa vào trồng trọt và chăn nuôi là…', choices: ['nông nghiệp', 'công nghiệp', 'đô thị'], a: 0 },
        { q: 'Một thị trấn phát triển rất nhanh nhờ cơ hội làm giàu bất ngờ là một…', choices: ['nhà máy lọc dầu', 'thị trấn bùng nổ', 'giàn khoan'], a: 1 },
        { q: 'Một giếng nơi dầu phun lên khỏi mặt đất nhờ áp suất của chính nó là một…', choices: ['giếng phun dầu', 'hạn ngạch', 'bên liên quan'], a: 0 },
        { q: 'Bất kỳ ai bị ảnh hưởng bởi một quyết định hoặc có điều gì đó liên quan là một…', choices: ['nhà đầu cơ', 'người lọc dầu', 'bên liên quan'], a: 2 }
      ],
      takeaway: 'Nắm được bốn từ này thì phần còn lại của đơn vị Spindletop sẽ dễ đọc hơn nhiều.'
    },
    ar: {
      title: 'تهيئة: كلمات طفرة النفط',
      seconds: 45,
      questions: [
        { q: 'الاقتصاد القائم أساسًا على الزراعة وتربية الماشية هو اقتصاد…', choices: ['زراعي', 'صناعي', 'حضري'], a: 0 },
        { q: 'البلدة التي تنمو بسرعة كبيرة بسبب فرصة مفاجئة للثراء هي…', choices: ['مصفاة', 'بلدة مزدهرة', 'برج حفر'], a: 1 },
        { q: 'البئر الذي يندفع منه النفط من الأرض بضغطه الذاتي هو…', choices: ['نافورة نفط', 'حصة', 'صاحب مصلحة'], a: 0 },
        { q: 'أي شخص يتأثر بقرار أو لديه شيء على المحك هو…', choices: ['مضارب', 'مُكرِّر', 'صاحب مصلحة'], a: 2 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وستقرأ بقية وحدة سبيندلتوب بسهولة أكبر بكثير.'
    },
    hi: {
      title: 'वार्म-अप: तेल-उछाल के शब्द',
      seconds: 45,
      questions: [
        { q: 'मुख्य रूप से खेती और पशुपालन पर टिकी अर्थव्यवस्था है…', choices: ['कृषि-प्रधान', 'औद्योगिक', 'शहरी'], a: 0 },
        { q: 'अमीर बनने के अचानक अवसर के कारण बहुत तेज़ी से बढ़ने वाला शहर है एक…', choices: ['रिफ़ाइनरी', 'बूमटाउन', 'डेरिक'], a: 1 },
        { q: 'ऐसा कुआँ जहाँ तेल अपने ही दबाव से ज़मीन से बाहर फूट पड़ता है, वह है एक…', choices: ['गशर', 'कोटा', 'हितधारक'], a: 0 },
        { q: 'किसी निर्णय से प्रभावित या जिसका कुछ दाँव पर हो, वह है एक…', choices: ['सट्टेबाज', 'रिफ़ाइनर', 'हितधारक'], a: 2 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और स्पिंडलटॉप इकाई का बाकी हिस्सा कहीं आसानी से पढ़ा जाएगा।'
    },
    ur: {
      title: 'وارم اپ: تیل کے عروج کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'وہ معیشت جو بنیادی طور پر کھیتی باڑی اور مویشی پالنے پر قائم ہو، وہ ہے…', choices: ['زرعی', 'صنعتی', 'شہری'], a: 0 },
        { q: 'وہ قصبہ جو امیر بننے کے اچانک موقع کی وجہ سے بہت تیزی سے بڑھے، وہ ہے ایک…', choices: ['ریفائنری', 'بوم ٹاؤن', 'ڈیرک'], a: 1 },
        { q: 'وہ کنواں جہاں تیل اپنے ہی دباؤ سے زمین سے پھوٹ پڑے، وہ ہے ایک…', choices: ['گشر', 'کوٹا', 'اسٹیک ہولڈر'], a: 0 },
        { q: 'کوئی بھی جو کسی فیصلے سے متاثر ہو یا جس کا کچھ داؤ پر ہو، وہ ہے ایک…', choices: ['سٹے باز', 'ریفائنر', 'اسٹیک ہولڈر'], a: 2 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو اسپنڈل ٹاپ یونٹ کا باقی حصہ کہیں آسانی سے پڑھا جائے گا۔'
    },
    zh: {
      title: '热身：石油繁荣词汇',
      seconds: 45,
      questions: [
        { q: '主要建立在耕作与畜牧之上的经济是…', choices: ['农业型', '工业型', '城市型'], a: 0 },
        { q: '因突然的致富机会而迅速壮大的城镇是一个…', choices: ['炼油厂', '繁荣城镇', '井架'], a: 1 },
        { q: '石油靠自身压力从地下喷出的油井是一口…', choices: ['喷油井', '配额', '利益相关者'], a: 0 },
        { q: '任何受某项决定影响或有利害关系的人是一个…', choices: ['投机者', '炼油者', '利益相关者'], a: 2 }
      ],
      takeaway: '掌握这四个词，斯宾德尔托普单元的其余部分就好读多了。'
    } }
  },
  {
    id: 'g7-spindletop-surface-exit', grade: 7, unit: 'spindletop',
    unitTitle: 'Spindletop, 1901 — When Oil Changed Everything', phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.19(c)(11)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['gusher', 'a well where oil shoots up under its own pressure'],
        ['derrick', 'the tall tower built over a well to drill and pump'],
        ['refinery', 'a plant that turns crude oil into fuels and products'],
        ['speculation', 'buying land hoping the price will jump — a gamble'],
        ['boom & bust', 'a fast rise followed by a sharp fall']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['chorro de petróleo', 'un pozo donde el petróleo sale disparado por su propia presión'],
        ['torre de perforación', 'la torre alta construida sobre un pozo para perforar y bombear'],
        ['refinería', 'una planta que convierte el petróleo crudo en combustibles y productos'],
        ['especulación', 'comprar tierra esperando que el precio suba — una apuesta'],
        ['auge y caída', 'una subida rápida seguida de una caída brusca']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['giếng phun dầu', 'một giếng nơi dầu phun lên nhờ áp suất của chính nó'],
        ['giàn khoan', 'tháp cao dựng trên giếng để khoan và bơm'],
        ['nhà máy lọc dầu', 'nhà máy biến dầu thô thành nhiên liệu và sản phẩm'],
        ['đầu cơ', 'mua đất với hy vọng giá tăng vọt — một canh bạc'],
        ['bùng nổ và suy thoái', 'một sự tăng nhanh theo sau là một sự sụt giảm mạnh']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['نافورة نفط', 'بئر يندفع منه النفط لأعلى بضغطه الذاتي'],
        ['برج حفر', 'البرج العالي المبني فوق البئر للحفر والضخ'],
        ['مصفاة', 'منشأة تحوّل النفط الخام إلى وقود ومنتجات'],
        ['مضاربة', 'شراء الأرض على أمل ارتفاع السعر — مقامرة'],
        ['ازدهار وكساد', 'ارتفاع سريع يتبعه هبوط حاد']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['गशर', 'ऐसा कुआँ जहाँ तेल अपने ही दबाव से ऊपर फूट पड़ता है'],
        ['डेरिक', 'कुएँ के ऊपर ड्रिल और पंप करने के लिए बनी ऊँची मीनार'],
        ['रिफ़ाइनरी', 'ऐसा संयंत्र जो कच्चे तेल को ईंधन और उत्पादों में बदलता है'],
        ['सट्टेबाज़ी', 'कीमत बढ़ने की उम्मीद में ज़मीन खरीदना — एक जुआ'],
        ['उछाल और गिरावट', 'तेज़ी से चढ़ाव के बाद तीखी गिरावट']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['گشر', 'وہ کنواں جہاں تیل اپنے ہی دباؤ سے اوپر پھوٹ پڑتا ہے'],
        ['ڈیرک', 'کنویں کے اوپر کھدائی اور پمپ کرنے کے لیے بنی بلند مینار'],
        ['ریفائنری', 'وہ پلانٹ جو خام تیل کو ایندھن اور مصنوعات میں بدلتا ہے'],
        ['سٹے بازی', 'قیمت بڑھنے کی امید میں زمین خریدنا — ایک جوا'],
        ['عروج و زوال', 'تیزی سے چڑھاؤ کے بعد تیز گراوٹ']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['喷油井', '石油靠自身压力向上喷出的油井'],
        ['井架', '架在油井之上用于钻探和抽油的高塔'],
        ['炼油厂', '把原油转化为燃料和产品的工厂'],
        ['投机', '买地指望价格暴涨——一场赌博'],
        ['繁荣与萧条', '快速上涨之后急剧下跌']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 7 · Spindletop 1901 · DEEP ───────── */
  {
    id: 'g7-spindletop-deep-entry', grade: 7, unit: 'spindletop',
    unitTitle: 'Spindletop, 1901 — When Oil Changed Everything', phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.19(c)(9), (c)(11)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: cause & effect',
      items: [
        { before: 'The oil strike at Spindletop caused thousands to', after: 'into Beaumont almost overnight.', choices: ['migrate', 'refine', 'irrigate'], a: 0 },
        { before: 'Because oil was suddenly cheap and plentiful, land prices and', after: 'exploded.', choices: ['speculation', 'ranching', 'rainfall'], a: 0 },
        { before: 'The boom sped the shift from an agrarian economy to an', after: 'one.', choices: ['industrial', 'agrarian', 'rural'], a: 0 }
      ],
      takeaway: 'One oil strike set off a chain — every effect became the cause of the next.'
    },
    es: {
      title: 'Calentamiento: causa y efecto',
      items: [
        { before: 'El descubrimiento de petróleo en Spindletop hizo que miles de personas', after: 'a Beaumont casi de la noche a la mañana.', choices: ['migraran', 'refinaran', 'irrigaran'], a: 0 },
        { before: 'Como el petróleo era de pronto barato y abundante, los precios de la tierra y la', after: 'se dispararon.', choices: ['especulación', 'ganadería', 'lluvia'], a: 0 },
        { before: 'El auge aceleró el paso de una economía agraria a una', after: '.', choices: ['industrial', 'agraria', 'rural'], a: 0 }
      ],
      takeaway: 'Un solo hallazgo de petróleo desató una cadena: cada efecto se volvió la causa del siguiente.'
    },
    vi: {
      title: 'Khởi động: nguyên nhân & kết quả',
      items: [
        { before: 'Việc trúng dầu ở Spindletop khiến hàng nghìn người', after: 'vào Beaumont gần như chỉ sau một đêm.', choices: ['di cư', 'lọc dầu', 'tưới tiêu'], a: 0 },
        { before: 'Vì dầu bỗng trở nên rẻ và dồi dào, giá đất và hoạt động', after: 'bùng nổ.', choices: ['đầu cơ', 'chăn nuôi', 'mưa'], a: 0 },
        { before: 'Cơn sốt đẩy nhanh sự chuyển đổi từ nền kinh tế nông nghiệp sang nền kinh tế', after: '.', choices: ['công nghiệp', 'nông nghiệp', 'nông thôn'], a: 0 }
      ],
      takeaway: 'Một lần trúng dầu đã khởi động cả chuỗi — mỗi kết quả lại trở thành nguyên nhân của điều tiếp theo.'
    },
    ar: {
      title: 'تهيئة: السبب والنتيجة',
      items: [
        { before: 'أدى اكتشاف النفط في سبيندلتوب إلى أن', after: 'الآلاف إلى بومونت بين ليلة وضحاها تقريبًا.', choices: ['يهاجر', 'يُكرّر', 'يَروي'], a: 0 },
        { before: 'ولأن النفط أصبح فجأة رخيصًا ووفيرًا، انفجرت أسعار الأرض و', after: '.', choices: ['المضاربة', 'تربية الماشية', 'الأمطار'], a: 0 },
        { before: 'سرّعت الطفرة التحول من اقتصاد زراعي إلى اقتصاد', after: '.', choices: ['صناعي', 'زراعي', 'ريفي'], a: 0 }
      ],
      takeaway: 'اكتشاف نفط واحد أطلق سلسلة — كل نتيجة أصبحت سبب ما يليها.'
    },
    hi: {
      title: 'वार्म-अप: कारण और प्रभाव',
      items: [
        { before: 'स्पिंडलटॉप में तेल मिलने से हज़ारों लोग लगभग रातों-रात बीयूमॉन्ट में', after: 'लगे।', choices: ['प्रवास करने', 'शोधन करने', 'सिंचाई करने'], a: 0 },
        { before: 'चूँकि तेल अचानक सस्ता और भरपूर हो गया, ज़मीन की कीमतें और', after: 'बेतहाशा बढ़ गईं।', choices: ['सट्टेबाज़ी', 'पशुपालन', 'वर्षा'], a: 0 },
        { before: 'इस उछाल ने कृषि-प्रधान अर्थव्यवस्था से', after: 'अर्थव्यवस्था की ओर बदलाव तेज़ कर दिया।', choices: ['औद्योगिक', 'कृषि-प्रधान', 'ग्रामीण'], a: 0 }
      ],
      takeaway: 'एक ही तेल की खोज ने एक शृंखला छेड़ दी — हर प्रभाव अगली चीज़ का कारण बन गया।'
    },
    ur: {
      title: 'وارم اپ: سبب اور اثر',
      items: [
        { before: 'اسپنڈل ٹاپ میں تیل ملنے سے ہزاروں لوگ تقریباً راتوں رات بیومونٹ میں', after: 'لگے۔', choices: ['ہجرت کرنے', 'صاف کرنے', 'آبپاشی کرنے'], a: 0 },
        { before: 'چونکہ تیل اچانک سستا اور وافر ہو گیا، زمین کی قیمتیں اور', after: 'بے تحاشا بڑھ گئیں۔', choices: ['سٹے بازی', 'مویشی پالنا', 'بارش'], a: 0 },
        { before: 'اس عروج نے زرعی معیشت سے', after: 'معیشت کی طرف تبدیلی تیز کر دی۔', choices: ['صنعتی', 'زرعی', 'دیہی'], a: 0 }
      ],
      takeaway: 'ایک ہی تیل کی دریافت نے ایک سلسلہ چھیڑ دیا — ہر اثر اگلی چیز کا سبب بن گیا۔'
    },
    zh: {
      title: '热身：因与果',
      items: [
        { before: '斯宾德尔托普的石油发现使成千上万人几乎一夜之间', after: '涌入博蒙特。', choices: ['迁入', '炼制', '灌溉'], a: 0 },
        { before: '由于石油骤然又便宜又充足，地价和', after: '随之飙升。', choices: ['投机', '畜牧', '降雨'], a: 0 },
        { before: '这场繁荣加速了从农业经济向', after: '经济的转变。', choices: ['工业', '农业', '乡村'], a: 0 }
      ],
      takeaway: '一次石油发现引发了一连串反应——每个结果都成了下一件事的原因。'
    } }
  },
  {
    id: 'g7-spindletop-deep-exit', grade: 7, unit: 'spindletop',
    unitTitle: 'Spindletop, 1901 — When Oil Changed Everything', phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.19(c)(9), (c)(11)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort the old economy vs. the new oil economy',
      cats: ['Old agrarian economy', 'New oil economy'],
      items: [
        { t: 'Cotton farming', c: 0 },
        { t: 'Cattle ranching', c: 0 },
        { t: 'Land measured in acres of crops', c: 0 },
        { t: 'Refineries and derricks', c: 1 },
        { t: 'Boomtowns and speculation', c: 1 },
        { t: 'Factory and oil-field jobs', c: 1 }
      ],
      takeaway: 'Sorting old vs. new is the concept map of the agrarian-to-industrial shift.'
    },
    es: {
      title: 'Salida: clasifica la economía vieja frente a la nueva economía petrolera',
      cats: ['Vieja economía agraria', 'Nueva economía petrolera'],
      items: [
        { t: 'Cultivo de algodón', c: 0 },
        { t: 'Cría de ganado', c: 0 },
        { t: 'Tierra medida en acres de cultivos', c: 0 },
        { t: 'Refinerías y torres de perforación', c: 1 },
        { t: 'Pueblos en auge y especulación', c: 1 },
        { t: 'Empleos en fábricas y campos petroleros', c: 1 }
      ],
      takeaway: 'Clasificar lo viejo vs lo nuevo es el mapa conceptual del paso de lo agrario a lo industrial.'
    },
    vi: {
      title: 'Phiếu ra: phân loại nền kinh tế cũ và nền kinh tế dầu mỏ mới',
      cats: ['Kinh tế nông nghiệp cũ', 'Kinh tế dầu mỏ mới'],
      items: [
        { t: 'Trồng bông', c: 0 },
        { t: 'Chăn nuôi gia súc', c: 0 },
        { t: 'Đất đo bằng mẫu cây trồng', c: 0 },
        { t: 'Nhà máy lọc dầu và giàn khoan', c: 1 },
        { t: 'Thị trấn bùng nổ và đầu cơ', c: 1 },
        { t: 'Việc làm ở nhà máy và mỏ dầu', c: 1 }
      ],
      takeaway: 'Phân loại cũ và mới chính là sơ đồ khái niệm của bước chuyển từ nông nghiệp sang công nghiệp.'
    },
    ar: {
      title: 'الخروج: صنّف الاقتصاد القديم مقابل اقتصاد النفط الجديد',
      cats: ['الاقتصاد الزراعي القديم', 'اقتصاد النفط الجديد'],
      items: [
        { t: 'زراعة القطن', c: 0 },
        { t: 'تربية الماشية', c: 0 },
        { t: 'أرض تُقاس بأفدنة المحاصيل', c: 0 },
        { t: 'مصافٍ وأبراج حفر', c: 1 },
        { t: 'بلدات مزدهرة ومضاربة', c: 1 },
        { t: 'وظائف في المصانع وحقول النفط', c: 1 }
      ],
      takeaway: 'تصنيف القديم مقابل الجديد هو الخريطة المفاهيمية للتحول من الزراعي إلى الصناعي.'
    },
    hi: {
      title: 'निकास: पुरानी अर्थव्यवस्था बनाम नई तेल अर्थव्यवस्था को छाँटें',
      cats: ['पुरानी कृषि अर्थव्यवस्था', 'नई तेल अर्थव्यवस्था'],
      items: [
        { t: 'कपास की खेती', c: 0 },
        { t: 'पशुपालन', c: 0 },
        { t: 'फ़सलों के एकड़ में मापी गई ज़मीन', c: 0 },
        { t: 'रिफ़ाइनरियाँ और डेरिक', c: 1 },
        { t: 'बूमटाउन और सट्टेबाज़ी', c: 1 },
        { t: 'कारखानों और तेल-क्षेत्रों की नौकरियाँ', c: 1 }
      ],
      takeaway: 'पुराने बनाम नए को छाँटना ही कृषि-से-औद्योगिक बदलाव का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: پرانی معیشت بمقابلہ نئی تیل کی معیشت کو چھانٹیں',
      cats: ['پرانی زرعی معیشت', 'نئی تیل کی معیشت'],
      items: [
        { t: 'کپاس کی کاشت', c: 0 },
        { t: 'مویشی پالنا', c: 0 },
        { t: 'فصلوں کے ایکڑ میں ناپی گئی زمین', c: 0 },
        { t: 'ریفائنریاں اور ڈیرک', c: 1 },
        { t: 'بوم ٹاؤن اور سٹے بازی', c: 1 },
        { t: 'کارخانوں اور تیل کے میدانوں کی ملازمتیں', c: 1 }
      ],
      takeaway: 'پرانے بمقابلہ نئے کو چھانٹنا ہی زرعی سے صنعتی تبدیلی کا تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：把旧经济与新石油经济分类',
      cats: ['旧农业经济', '新石油经济'],
      items: [
        { t: '棉花种植', c: 0 },
        { t: '养牛放牧', c: 0 },
        { t: '以作物英亩计量的土地', c: 0 },
        { t: '炼油厂与井架', c: 1 },
        { t: '繁荣城镇与投机', c: 1 },
        { t: '工厂与油田的工作', c: 1 }
      ],
      takeaway: '把旧与新分类，就是农业向工业转变的概念图。'
    } }
  },

  /* ───────── Grade 7 · Spindletop 1901 · TRANSFER ───────── */
  {
    id: 'g7-spindletop-transfer-entry', grade: 7, unit: 'spindletop',
    unitTitle: 'Spindletop, 1901 — When Oil Changed Everything', phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.19(c)(23)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving process',
      seconds: 45,
      questions: [
        { q: 'The FIRST step in the problem-solving process is to…', choices: ['pick a solution', 'define the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing, a good problem-solver…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other views'], a: 0 },
        { q: 'Reasoning from a stakeholder’s point of view means you…', choices: ['see only your own gain', 'consider how the decision affects that person', 'copy the mayor'], a: 1 },
        { q: 'The LAST step after choosing a solution is to…', choices: ['forget it', 'evaluate how well it worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Define → gather → weigh → choose → defend → evaluate. That is §113.19(c)(23)(B).'
    },
    es: {
      title: 'Calentamiento: el proceso de resolución de problemas',
      seconds: 45,
      questions: [
        { q: 'El PRIMER paso del proceso de resolución de problemas es…', choices: ['elegir una solución', 'definir el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir, quien resuelve bien problemas…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora otras opiniones'], a: 0 },
        { q: 'Razonar desde el punto de vista de una parte interesada significa que…', choices: ['ves solo tu propia ganancia', 'consideras cómo la decisión afecta a esa persona', 'copias al alcalde'], a: 1 },
        { q: 'El ÚLTIMO paso tras elegir una solución es…', choices: ['olvidarla', 'evaluar qué tan bien funcionó', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Definir → reunir → sopesar → elegir → defender → evaluar. Eso es §113.19(c)(23)(B).'
    },
    vi: {
      title: 'Khởi động: quy trình giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Bước ĐẦU TIÊN trong quy trình giải quyết vấn đề là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua quan điểm khác'], a: 0 },
        { q: 'Lập luận từ quan điểm của một bên liên quan nghĩa là bạn…', choices: ['chỉ thấy lợi ích của riêng mình', 'cân nhắc quyết định ảnh hưởng đến người đó ra sao', 'bắt chước thị trưởng'], a: 1 },
        { q: 'Bước CUỐI CÙNG sau khi chọn một giải pháp là…', choices: ['quên nó đi', 'đánh giá xem nó hiệu quả ra sao', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → chọn → bảo vệ → đánh giá. Đó là §113.19(c)(23)(B).'
    },
    ar: {
      title: 'تهيئة: عملية حل المشكلات',
      seconds: 45,
      questions: [
        { q: 'الخطوة الأولى في عملية حل المشكلات هي…', choices: ['اختيار حل', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل الاختيار، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل الآراء الأخرى'], a: 0 },
        { q: 'التفكير من وجهة نظر صاحب مصلحة يعني أنك…', choices: ['ترى مكسبك أنت فقط', 'تراعي كيف يؤثر القرار في ذلك الشخص', 'تقلّد رئيس البلدية'], a: 1 },
        { q: 'الخطوة الأخيرة بعد اختيار حل هي…', choices: ['أن تنساه', 'أن تقيّم مدى نجاحه', 'أن تخفي المفاضلات'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن ← اختر ← دافِع ← قيِّم. تلك هي §113.19(c)(23)(B).'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान की प्रक्रिया',
      seconds: 45,
      questions: [
        { q: 'समस्या-समाधान प्रक्रिया का पहला चरण है…', choices: ['एक समाधान चुनना', 'समस्या को परिभाषित करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'चुनने से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य विचारों को अनदेखा करता है'], a: 0 },
        { q: 'किसी हितधारक के दृष्टिकोण से तर्क करने का अर्थ है कि आप…', choices: ['केवल अपना लाभ देखते हैं', 'सोचते हैं कि निर्णय उस व्यक्ति को कैसे प्रभावित करता है', 'महापौर की नकल करते हैं'], a: 1 },
        { q: 'समाधान चुनने के बाद अंतिम चरण है…', choices: ['उसे भूल जाना', 'यह आँकना कि वह कितना अच्छा रहा', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → चुनें → बचाव करें → आँकें। यही §113.19(c)(23)(B) है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کا عمل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے کے عمل کا پہلا قدم ہے…', choices: ['ایک حل چننا', 'مسئلے کو متعین کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'چننے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دوسری آراء کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'کسی اسٹیک ہولڈر کے نقطہ نظر سے سوچنے کا مطلب ہے کہ آپ…', choices: ['صرف اپنا فائدہ دیکھتے ہیں', 'غور کرتے ہیں کہ فیصلہ اُس شخص کو کیسے متاثر کرتا ہے', 'میئر کی نقل کرتے ہیں'], a: 1 },
        { q: 'حل چننے کے بعد آخری قدم ہے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ وہ کتنا کارگر رہا', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← چنیں ← دفاع کریں ← جانچیں۔ یہی §113.19(c)(23)(B) ہے۔'
    },
    zh: {
      title: '热身：解决问题的流程',
      seconds: 45,
      questions: [
        { q: '解决问题流程的第一步是…', choices: ['挑选一个方案', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在做出选择之前，优秀的解决问题者会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视他人的观点'], a: 0 },
        { q: '从利益相关者的角度进行推理，意味着你…', choices: ['只看自己的收益', '考虑这个决定如何影响那个人', '照抄市长的做法'], a: 1 },
        { q: '选定方案之后的最后一步是…', choices: ['把它忘掉', '评估它的效果如何', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 选择 → 辩护 → 评估。这就是 §113.19(c)(23)(B)。'
    } }
  },
  {
    id: 'g7-spindletop-transfer-exit', grade: 7, unit: 'spindletop',
    unitTitle: 'Spindletop, 1901 — When Oil Changed Everything', phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.19(c)(23)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim, evidence & trade-offs',
      items: [
        { before: 'A recommendation for the boom town is only strong when it is backed by', after: 'from the sources.', choices: ['evidence', 'volume', 'guesses'], a: 0 },
        { before: 'Naming the', after: 'of your solution shows you weighed its costs as well as its gains.', choices: ['trade-offs', 'colors', 'vocabulary'], a: 0 },
        { before: 'The final move of the problem-solving process is to', after: 'how well the solution worked.', choices: ['evaluate', 'forget', 'hide'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs, then evaluate — that is thinking like a historian and a citizen.'
    },
    es: {
      title: 'Salida: afirmación, evidencia y concesiones',
      items: [
        { before: 'Una recomendación para el pueblo en auge solo es sólida cuando se respalda con', after: 'de las fuentes.', choices: ['evidencia', 'volumen', 'suposiciones'], a: 0 },
        { before: 'Nombrar las', after: 'de tu solución muestra que sopesaste sus costos y sus beneficios.', choices: ['concesiones', 'colores', 'vocabulario'], a: 0 },
        { before: 'El paso final del proceso de resolución de problemas es', after: 'qué tan bien funcionó la solución.', choices: ['evaluar', 'olvidar', 'ocultar'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones, luego evaluar: eso es pensar como historiador y ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm, bằng chứng & đánh đổi',
      items: [
        { before: 'Một đề xuất cho thị trấn bùng nổ chỉ vững chắc khi được củng cố bằng', after: 'từ các nguồn.', choices: ['bằng chứng', 'âm lượng', 'phỏng đoán'], a: 0 },
        { before: 'Nêu ra những', after: 'của giải pháp cho thấy bạn đã cân nhắc cả chi phí lẫn lợi ích.', choices: ['đánh đổi', 'màu sắc', 'từ vựng'], a: 0 },
        { before: 'Bước cuối cùng của quy trình giải quyết vấn đề là', after: 'xem giải pháp hiệu quả ra sao.', choices: ['đánh giá', 'quên', 'giấu'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi, rồi đánh giá — đó là tư duy như một nhà sử học và một công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء ودليل ومفاضلات',
      items: [
        { before: 'التوصية للبلدة المزدهرة لا تكون قوية إلا حين تُدعم بـ', after: 'من المصادر.', choices: ['أدلة', 'علوّ الصوت', 'تخمينات'], a: 0 },
        { before: 'إن تسمية', after: 'الخاصة بحلّك تُظهر أنك وازنت تكاليفه ومكاسبه.', choices: ['المفاضلات', 'الألوان', 'المفردات'], a: 0 },
        { before: 'الخطوة الأخيرة في عملية حل المشكلات هي أن', after: 'مدى نجاح الحل.', choices: ['تقيّم', 'تنسى', 'تخفي'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات، ثم التقييم — ذلك هو التفكير كمؤرّخ ومواطن.'
    },
    hi: {
      title: 'निकास: दावा, साक्ष्य और समझौते',
      items: [
        { before: 'बूमटाउन के लिए कोई सिफ़ारिश तभी मज़बूत होती है जब उसका आधार हो', after: 'स्रोतों से।', choices: ['साक्ष्य', 'आवाज़ की ऊँचाई', 'अनुमान'], a: 0 },
        { before: 'अपने समाधान की', after: 'का नाम लेना दिखाता है कि आपने उसके लाभ के साथ-साथ लागत भी तौली।', choices: ['समझौतों', 'रंगों', 'शब्दावली'], a: 0 },
        { before: 'समस्या-समाधान प्रक्रिया की अंतिम चाल है यह', after: 'कि समाधान कितना अच्छा रहा।', choices: ['आँकना', 'भूलना', 'छिपाना'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते, फिर आँकना — यही एक इतिहासकार और एक नागरिक की तरह सोचना है।'
    },
    ur: {
      title: 'اخراج: دعویٰ، ثبوت اور سمجھوتے',
      items: [
        { before: 'بوم ٹاؤن کے لیے کوئی سفارش تبھی مضبوط ہوتی ہے جب اس کی بنیاد ہو', after: 'مآخذ سے۔', choices: ['ثبوت', 'آواز کی بلندی', 'اندازے'], a: 0 },
        { before: 'اپنے حل کے', after: 'کا نام لینا ظاہر کرتا ہے کہ آپ نے اس کے فائدے کے ساتھ ساتھ لاگت بھی تولی۔', choices: ['سمجھوتوں', 'رنگوں', 'الفاظ'], a: 0 },
        { before: 'مسئلہ حل کرنے کے عمل کی آخری چال یہ', after: 'ہے کہ حل کتنا کارگر رہا۔', choices: ['جانچنا', 'بھولنا', 'چھپانا'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے، پھر جانچنا — یہی ایک مؤرخ اور ایک شہری کی طرح سوچنا ہے۔'
    },
    zh: {
      title: '离场：主张、证据与取舍',
      items: [
        { before: '对繁荣城镇的建议只有在有', after: '来自资料的支撑时才有力。', choices: ['证据', '音量', '猜测'], a: 0 },
        { before: '说出你方案中的', after: '，表明你既权衡了它的代价，也权衡了它的收益。', choices: ['取舍', '颜色', '词汇'], a: 0 },
        { before: '解决问题流程的最后一步是', after: '方案的效果如何。', choices: ['评估', '遗忘', '隐藏'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍，再评估——这就是像史学家和公民一样思考。'
    } }
  }

]);
