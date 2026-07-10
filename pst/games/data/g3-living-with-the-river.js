/* PST Arcade — ticket registry. Each ticket is retrieval practice for one unit + phase.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. To add tickets, append objects
   with the same shape: {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 3 · Living with the River · SURFACE ───────── */
  {
    id: 'g3-living-with-the-river-surface-entry', grade: 3, unit: 'living-with-the-river',
    unitTitle: 'Living with the River — When Nature Changes Our Community', phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.14(c)(3)(A)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: river & nature words',
      seconds: 45,
      questions: [
        { q: 'Something in nature that can hurt people or places, like a flood or a storm, is a…', choices: ['natural hazard', 'compass rose', 'budget'], a: 0 },
        { q: 'When water rises and covers land that is usually dry, that is a…', choices: ['legend', 'flood', 'wetland'], a: 1 },
        { q: 'To change what YOU do to fit the land — build higher or move away — is to…', choices: ['adapt', 'modify', 'conserve'], a: 0 },
        { q: 'A long wall or raised bank that holds a river back is a…', choices: ['grid', 'wetland', 'levee'], a: 2 }
      ],
      takeaway: 'Know these four words and you can read the rest of the unit with confidence.'
    },
    es: {
      title: 'Calentamiento: palabras del río y la naturaleza',
      seconds: 45,
      questions: [
        { q: 'Algo en la naturaleza que puede dañar a las personas o los lugares, como una inundación o una tormenta, es un…', choices: ['peligro natural', 'rosa de los vientos', 'presupuesto'], a: 0 },
        { q: 'Cuando el agua sube y cubre tierra que suele estar seca, eso es una…', choices: ['leyenda', 'inundación', 'humedal'], a: 1 },
        { q: 'Cambiar lo que TÚ haces para adaptarte a la tierra —construir más alto o mudarte— es…', choices: ['adaptarse', 'modificar', 'conservar'], a: 0 },
        { q: 'Un muro largo o un borde elevado que contiene un río es un…', choices: ['cuadrícula', 'humedal', 'dique'], a: 2 }
      ],
      takeaway: 'Domina estas cuatro palabras y podrás leer el resto de la unidad con confianza.'
    },
    vi: {
      title: 'Khởi động: từ vựng về sông và thiên nhiên',
      seconds: 45,
      questions: [
        { q: 'Thứ trong thiên nhiên có thể gây hại cho người hoặc nơi chốn, như lũ lụt hay bão, được gọi là…', choices: ['hiểm họa thiên nhiên', 'hoa gió (la bàn)', 'ngân sách'], a: 0 },
        { q: 'Khi nước dâng lên và phủ ngập vùng đất thường khô ráo, đó là một trận…', choices: ['chú giải bản đồ', 'lũ lụt', 'vùng đất ngập nước'], a: 1 },
        { q: 'Thay đổi điều BẠN làm để thích ứng với vùng đất — xây cao hơn hoặc dời đi — là…', choices: ['thích ứng', 'cải biến', 'bảo tồn'], a: 0 },
        { q: 'Một bức tường dài hoặc bờ đắp cao giữ dòng sông lại là một…', choices: ['ô lưới', 'vùng đất ngập nước', 'đê'], a: 2 }
      ],
      takeaway: 'Nắm được bốn từ này là bạn có thể đọc phần còn lại của đơn vị bài học một cách tự tin.'
    },
    ar: {
      title: 'تهيئة: كلمات النهر والطبيعة',
      seconds: 45,
      questions: [
        { q: 'شيء في الطبيعة قد يؤذي الناس أو الأماكن، مثل فيضان أو عاصفة، هو…', choices: ['خطر طبيعي', 'وردة البوصلة', 'ميزانية'], a: 0 },
        { q: 'عندما يرتفع الماء ويغطي أرضًا تكون عادةً جافة، فذلك…', choices: ['مفتاح الخريطة', 'فيضان', 'أرض رطبة'], a: 1 },
        { q: 'أن تغيّر ما تفعله أنت لتلائم الأرض — تبني أعلى أو تنتقل — هو أن…', choices: ['تتكيّف', 'تعدّل', 'تحافظ'], a: 0 },
        { q: 'جدار طويل أو ضفة مرتفعة تحبس النهر هي…', choices: ['شبكة', 'أرض رطبة', 'سدّ ترابي'], a: 2 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وستقرأ بقية الوحدة بثقة.'
    },
    hi: {
      title: 'वार्म-अप: नदी और प्रकृति के शब्द',
      seconds: 45,
      questions: [
        { q: 'प्रकृति में कुछ ऐसा जो लोगों या स्थानों को नुकसान पहुँचा सकता है, जैसे बाढ़ या तूफान, वह है…', choices: ['प्राकृतिक ख़तरा', 'दिशा-सूचक (कम्पास रोज़)', 'बजट'], a: 0 },
        { q: 'जब पानी चढ़ता है और उस भूमि को ढँक लेता है जो आमतौर पर सूखी रहती है, वह है…', choices: ['मानचित्र-कुंजी', 'बाढ़', 'आर्द्रभूमि'], a: 1 },
        { q: 'भूमि के अनुरूप ढलने के लिए जो आप करते हैं उसे बदलना — ऊँचा बनाना या दूर हट जाना — यह है…', choices: ['अनुकूलन करना', 'परिवर्तन करना', 'संरक्षण करना'], a: 0 },
        { q: 'एक लंबी दीवार या ऊँचा तटबंध जो नदी को रोके रखता है, वह है…', choices: ['ग्रिड', 'आर्द्रभूमि', 'तटबंध (लेवी)'], a: 2 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और आप शेष इकाई आत्मविश्वास से पढ़ सकेंगे।'
    },
    ur: {
      title: 'وارم اپ: دریا اور فطرت کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'فطرت میں کوئی چیز جو لوگوں یا مقامات کو نقصان پہنچا سکتی ہے، جیسے سیلاب یا طوفان، وہ ہے…', choices: ['قدرتی خطرہ', 'قطب نما (کمپاس روز)', 'بجٹ'], a: 0 },
        { q: 'جب پانی چڑھتا ہے اور اُس زمین کو ڈھانپ لیتا ہے جو عام طور پر خشک رہتی ہے، وہ ہے…', choices: ['نقشے کی کلید', 'سیلاب', 'دلدلی زمین'], a: 1 },
        { q: 'زمین کے مطابق ڈھلنے کے لیے جو آپ کرتے ہیں اُسے بدلنا — اونچا بنانا یا دور ہٹ جانا — یہ ہے…', choices: ['مطابقت اختیار کرنا', 'تبدیلی کرنا', 'تحفظ کرنا'], a: 0 },
        { q: 'ایک لمبی دیوار یا اونچا کنارہ جو دریا کو روکے رکھتا ہے، وہ ہے…', choices: ['گرڈ', 'دلدلی زمین', 'بند (لیوی)'], a: 2 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو آپ باقی اکائی اعتماد کے ساتھ پڑھ سکیں گے۔'
    },
    zh: {
      title: '热身：河流与自然词汇',
      seconds: 45,
      questions: [
        { q: '自然界中可能伤害人或地方的事物，比如洪水或风暴，称为…', choices: ['自然灾害', '指北罗盘', '预算'], a: 0 },
        { q: '当水位上升、淹没通常干燥的土地时，那就是一场…', choices: ['图例', '洪水', '湿地'], a: 1 },
        { q: '改变你自己所做的事以适应土地——建得更高或搬离——就是…', choices: ['适应', '改造', '保护'], a: 0 },
        { q: '一道拦住河水的长墙或高筑的堤岸是一座…', choices: ['网格', '湿地', '堤坝'], a: 2 }
      ],
      takeaway: '掌握这四个词，你就能自信地读完本单元的其余部分。'
    } }
  },
  {
    id: 'g3-living-with-the-river-surface-exit', grade: 3, unit: 'living-with-the-river',
    unitTitle: 'Living with the River — When Nature Changes Our Community', phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.14(c)(3)(A)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['environment', 'the land, water, air, plants, and animals around us'],
        ['flood', 'when water rises and covers land that is usually dry'],
        ['adapt', 'to change what you do to fit the land'],
        ['modify', 'to change the land to fit people'],
        ['wetland', 'low, soggy land that soaks up floodwater like a sponge']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['medio ambiente', 'la tierra, el agua, el aire, las plantas y los animales a nuestro alrededor'],
        ['inundación', 'cuando el agua sube y cubre tierra que suele estar seca'],
        ['adaptarse', 'cambiar lo que haces para adaptarte a la tierra'],
        ['modificar', 'cambiar la tierra para que se ajuste a las personas'],
        ['humedal', 'tierra baja y empapada que absorbe el agua de la inundación como una esponja']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['môi trường', 'đất, nước, không khí, cây cối và động vật quanh ta'],
        ['lũ lụt', 'khi nước dâng lên và phủ ngập vùng đất thường khô ráo'],
        ['thích ứng', 'thay đổi điều bạn làm để hợp với vùng đất'],
        ['cải biến', 'thay đổi vùng đất cho hợp với con người'],
        ['vùng đất ngập nước', 'vùng đất thấp, sũng nước, hút nước lũ như bọt biển']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['البيئة', 'الأرض والماء والهواء والنباتات والحيوانات من حولنا'],
        ['فيضان', 'عندما يرتفع الماء ويغطي أرضًا تكون عادةً جافة'],
        ['يتكيّف', 'أن تغيّر ما تفعله لتلائم الأرض'],
        ['يعدّل', 'أن تغيّر الأرض لتلائم الناس'],
        ['أرض رطبة', 'أرض منخفضة مبتلّة تمتصّ ماء الفيضان مثل الإسفنجة']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['पर्यावरण', 'हमारे चारों ओर की भूमि, जल, वायु, पौधे और जानवर'],
        ['बाढ़', 'जब पानी चढ़ता है और आमतौर पर सूखी रहने वाली भूमि को ढँक लेता है'],
        ['अनुकूलन करना', 'भूमि के अनुरूप ढलने के लिए जो आप करते हैं उसे बदलना'],
        ['परिवर्तन करना', 'लोगों के अनुकूल बनाने के लिए भूमि को बदलना'],
        ['आर्द्रभूमि', 'नीची, गीली भूमि जो स्पंज की तरह बाढ़ के पानी को सोख लेती है']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['ماحول', 'ہمارے گرد کی زمین، پانی، ہوا، پودے اور جانور'],
        ['سیلاب', 'جب پانی چڑھتا ہے اور عام طور پر خشک رہنے والی زمین کو ڈھانپ لیتا ہے'],
        ['مطابقت اختیار کرنا', 'زمین کے مطابق ڈھلنے کے لیے جو آپ کرتے ہیں اُسے بدلنا'],
        ['تبدیلی کرنا', 'لوگوں کے مطابق بنانے کے لیے زمین کو بدلنا'],
        ['دلدلی زمین', 'نیچی، گیلی زمین جو اسفنج کی طرح سیلابی پانی جذب کر لیتی ہے']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['环境', '我们周围的土地、水、空气、植物和动物'],
        ['洪水', '当水位上升、淹没通常干燥的土地时'],
        ['适应', '改变你自己所做的事以适应土地'],
        ['改造', '改变土地以适应人们'],
        ['湿地', '低洼潮湿、像海绵一样吸收洪水的土地']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 3 · Living with the River · DEEP ───────── */
  {
    id: 'g3-living-with-the-river-deep-entry', grade: 3, unit: 'living-with-the-river',
    unitTitle: 'Living with the River — When Nature Changes Our Community', phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.14(c)(3)(C), (c)(14)(D)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: cause & effect',
      items: [
        { before: 'Heavy spring rain and melting snow make the river', after: 'over its banks.', choices: ['rise', 'dry up', 'freeze'], a: 0 },
        { before: 'When the river floods, water covers Main Street and', after: 'wash away near the bank.', choices: ['walls', 'soil', 'maps'], a: 1 },
        { before: 'A wall holds the water back, but it also', after: 'a lot of money.', choices: ['saves', 'costs', 'plants'], a: 1 }
      ],
      takeaway: 'Every flood is a chain of causes and effects — and every solution starts a new one.'
    },
    es: {
      title: 'Calentamiento: causa y efecto',
      items: [
        { before: 'La lluvia fuerte de primavera y el deshielo hacen que el río', after: 'sobre sus orillas.', choices: ['suba', 'se seque', 'se congele'], a: 0 },
        { before: 'Cuando el río se desborda, el agua cubre la calle principal y el', after: 'se lava cerca de la orilla.', choices: ['muros', 'suelo', 'mapas'], a: 1 },
        { before: 'Un muro contiene el agua, pero también', after: 'mucho dinero.', choices: ['ahorra', 'cuesta', 'planta'], a: 1 }
      ],
      takeaway: 'Toda inundación es una cadena de causas y efectos, y cada solución inicia una nueva.'
    },
    vi: {
      title: 'Khởi động: nguyên nhân và kết quả',
      items: [
        { before: 'Mưa xuân lớn và tuyết tan khiến dòng sông', after: 'tràn qua bờ.', choices: ['dâng lên', 'cạn khô', 'đóng băng'], a: 0 },
        { before: 'Khi sông lũ, nước phủ ngập Phố Chính và', after: 'bị cuốn trôi gần bờ.', choices: ['những bức tường', 'đất', 'những tấm bản đồ'], a: 1 },
        { before: 'Một bức tường giữ nước lại, nhưng nó cũng', after: 'rất nhiều tiền.', choices: ['tiết kiệm', 'tốn', 'trồng'], a: 1 }
      ],
      takeaway: 'Mỗi trận lũ là một chuỗi nguyên nhân và kết quả — và mỗi giải pháp lại khởi đầu một chuỗi mới.'
    },
    ar: {
      title: 'تهيئة: السبب والنتيجة',
      items: [
        { before: 'مطر الربيع الغزير وذوبان الثلج يجعلان النهر', after: 'فوق ضفتيه.', choices: ['يرتفع', 'يجفّ', 'يتجمّد'], a: 0 },
        { before: 'عندما يفيض النهر، يغطي الماء الشارع الرئيسي و', after: 'يُجرَف قرب الضفة.', choices: ['الجدران', 'التربة', 'الخرائط'], a: 1 },
        { before: 'الجدار يحبس الماء، لكنه أيضًا', after: 'الكثير من المال.', choices: ['يوفّر', 'يكلّف', 'يزرع'], a: 1 }
      ],
      takeaway: 'كل فيضان سلسلة من الأسباب والنتائج — وكل حلّ يبدأ سلسلة جديدة.'
    },
    hi: {
      title: 'वार्म-अप: कारण और प्रभाव',
      items: [
        { before: 'भारी वसंत वर्षा और पिघलती बर्फ़ नदी को', after: 'अपने किनारों के ऊपर कर देती हैं।', choices: ['ऊपर चढ़ा देती हैं', 'सुखा देती हैं', 'जमा देती हैं'], a: 0 },
        { before: 'जब नदी में बाढ़ आती है, पानी मेन स्ट्रीट को ढँक लेता है और', after: 'किनारे के पास बह जाती है।', choices: ['दीवारें', 'मिट्टी', 'नक्शे'], a: 1 },
        { before: 'एक दीवार पानी को रोक लेती है, पर वह', after: 'बहुत सारा पैसा भी।', choices: ['बचाती है', 'खर्च कराती है', 'रोपती है'], a: 1 }
      ],
      takeaway: 'हर बाढ़ कारणों और प्रभावों की एक श्रृंखला है — और हर समाधान एक नई श्रृंखला शुरू करता है।'
    },
    ur: {
      title: 'وارم اپ: سبب اور اثر',
      items: [
        { before: 'بہار کی تیز بارش اور پگھلتی برف دریا کو', after: 'اپنے کناروں سے اوپر کر دیتی ہیں۔', choices: ['چڑھا دیتی ہیں', 'خشک کر دیتی ہیں', 'جما دیتی ہیں'], a: 0 },
        { before: 'جب دریا میں سیلاب آتا ہے، پانی مین اسٹریٹ کو ڈھانپ لیتا ہے اور', after: 'کنارے کے پاس بہہ جاتی ہے۔', choices: ['دیواریں', 'مٹی', 'نقشے'], a: 1 },
        { before: 'ایک دیوار پانی کو روک لیتی ہے، مگر وہ', after: 'بہت سا پیسہ بھی۔', choices: ['بچاتی ہے', 'خرچ کراتی ہے', 'لگاتی ہے'], a: 1 }
      ],
      takeaway: 'ہر سیلاب اسباب اور اثرات کی ایک زنجیر ہے — اور ہر حل ایک نئی زنجیر شروع کرتا ہے۔'
    },
    zh: {
      title: '热身：因与果',
      items: [
        { before: '春天的暴雨和融雪使河水', after: '漫过河岸。', choices: ['上涨', '干涸', '结冰'], a: 0 },
        { before: '当河水泛滥时，水淹没大街，而', after: '在河岸附近被冲走。', choices: ['墙', '泥土', '地图'], a: 1 },
        { before: '一道墙挡住了水，但它也', after: '很多钱。', choices: ['节省', '花费', '种植'], a: 1 }
      ],
      takeaway: '每一场洪水都是因与果的链条——而每一个解决方案又开启一条新的链条。'
    } }
  },
  {
    id: 'g3-living-with-the-river-deep-exit', grade: 3, unit: 'living-with-the-river',
    unitTitle: 'Living with the River — When Nature Changes Our Community', phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.14(c)(3)(B–C), (c)(14)(B)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: adapt or modify?',
      cats: ['Adapt (change what people do)', 'Modify (change the land)'],
      items: [
        { t: 'Move homes to higher ground', c: 0 },
        { t: 'Build houses up on stilts', c: 0 },
        { t: 'Leave in time when a flood warning comes', c: 0 },
        { t: 'Build a wall or levee along the river', c: 1 },
        { t: 'Dig a channel to send water away', c: 1 },
        { t: 'Plant trees and keep wetlands by the bank', c: 1 }
      ],
      takeaway: 'Sorting choices into adapt vs modify is the map behind every solution you weigh.'
    },
    es: {
      title: 'Salida: ¿adaptarse o modificar?',
      cats: ['Adaptarse (cambiar lo que hacen las personas)', 'Modificar (cambiar la tierra)'],
      items: [
        { t: 'Mudar las casas a terreno más alto', c: 0 },
        { t: 'Construir casas sobre pilotes', c: 0 },
        { t: 'Irse a tiempo cuando llega un aviso de inundación', c: 0 },
        { t: 'Construir un muro o dique junto al río', c: 1 },
        { t: 'Cavar un canal para desviar el agua', c: 1 },
        { t: 'Plantar árboles y conservar los humedales junto a la orilla', c: 1 }
      ],
      takeaway: 'Clasificar las opciones en adaptarse vs modificar es el mapa detrás de cada solución que sopesas.'
    },
    vi: {
      title: 'Phiếu ra: thích ứng hay cải biến?',
      cats: ['Thích ứng (thay đổi điều con người làm)', 'Cải biến (thay đổi vùng đất)'],
      items: [
        { t: 'Dời nhà lên vùng đất cao hơn', c: 0 },
        { t: 'Xây nhà trên cột (nhà sàn)', c: 0 },
        { t: 'Rời đi kịp lúc khi có cảnh báo lũ', c: 0 },
        { t: 'Xây tường hoặc đê dọc bờ sông', c: 1 },
        { t: 'Đào kênh để dẫn nước đi', c: 1 },
        { t: 'Trồng cây và giữ vùng đất ngập nước bên bờ', c: 1 }
      ],
      takeaway: 'Phân loại lựa chọn thành thích ứng và cải biến chính là sơ đồ đằng sau mỗi giải pháp bạn cân nhắc.'
    },
    ar: {
      title: 'الخروج: تكيّف أم تعديل؟',
      cats: ['تكيّف (تغيير ما يفعله الناس)', 'تعديل (تغيير الأرض)'],
      items: [
        { t: 'نقل المنازل إلى أرض أعلى', c: 0 },
        { t: 'بناء البيوت على ركائز', c: 0 },
        { t: 'المغادرة في الوقت المناسب عند صدور تحذير من الفيضان', c: 0 },
        { t: 'بناء جدار أو سدّ ترابي بمحاذاة النهر', c: 1 },
        { t: 'حفر قناة لتصريف الماء بعيدًا', c: 1 },
        { t: 'زراعة الأشجار والحفاظ على الأراضي الرطبة عند الضفة', c: 1 }
      ],
      takeaway: 'تصنيف الخيارات إلى تكيّف مقابل تعديل هو الخريطة وراء كل حلّ توازنه.'
    },
    hi: {
      title: 'निकास: अनुकूलन या परिवर्तन?',
      cats: ['अनुकूलन (लोग जो करते हैं उसे बदलना)', 'परिवर्तन (भूमि को बदलना)'],
      items: [
        { t: 'घरों को ऊँची भूमि पर ले जाना', c: 0 },
        { t: 'घरों को खंभों पर ऊँचा बनाना', c: 0 },
        { t: 'बाढ़ की चेतावनी आने पर समय रहते निकल जाना', c: 0 },
        { t: 'नदी के किनारे दीवार या तटबंध बनाना', c: 1 },
        { t: 'पानी को दूर भेजने के लिए नहर खोदना', c: 1 },
        { t: 'किनारे पर पेड़ लगाना और आर्द्रभूमि बनाए रखना', c: 1 }
      ],
      takeaway: 'विकल्पों को अनुकूलन बनाम परिवर्तन में छाँटना ही हर उस समाधान के पीछे का नक्शा है जिसे आप तौलते हैं।'
    },
    ur: {
      title: 'اخراج: مطابقت یا تبدیلی؟',
      cats: ['مطابقت (لوگ جو کرتے ہیں اُسے بدلنا)', 'تبدیلی (زمین کو بدلنا)'],
      items: [
        { t: 'گھروں کو اونچی زمین پر منتقل کرنا', c: 0 },
        { t: 'گھروں کو ستونوں پر اونچا بنانا', c: 0 },
        { t: 'سیلاب کی وارننگ آنے پر بروقت نکل جانا', c: 0 },
        { t: 'دریا کے کنارے دیوار یا بند بنانا', c: 1 },
        { t: 'پانی کو دور بھیجنے کے لیے نہر کھودنا', c: 1 },
        { t: 'کنارے پر درخت لگانا اور دلدلی زمین قائم رکھنا', c: 1 }
      ],
      takeaway: 'اختیارات کو مطابقت بمقابلہ تبدیلی میں چھانٹنا ہی ہر اُس حل کے پیچھے نقشہ ہے جسے آپ تولتے ہیں۔'
    },
    zh: {
      title: '离场：适应还是改造？',
      cats: ['适应（改变人们的做法）', '改造（改变土地）'],
      items: [
        { t: '把房屋迁到更高的地方', c: 0 },
        { t: '把房子架在高桩上', c: 0 },
        { t: '洪水预警来时及时撤离', c: 0 },
        { t: '沿河修建墙或堤坝', c: 1 },
        { t: '挖一条水渠把水引走', c: 1 },
        { t: '在河岸种树并保留湿地', c: 1 }
      ],
      takeaway: '把选择分成适应与改造，就是你权衡每个解决方案背后的地图。'
    } }
  },

  /* ───────── Grade 3 · Living with the River · TRANSFER ───────── */
  {
    id: 'g3-living-with-the-river-transfer-entry', grade: 3, unit: 'living-with-the-river',
    unitTitle: 'Living with the River — When Nature Changes Our Community', phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.14(c)(16)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving steps',
      seconds: 45,
      questions: [
        { q: 'The FIRST thing a problem-solver does is…', choices: ['pick a solution', 'name the problem', 'take a vote'], a: 1 },
        { q: 'Before choosing what to do, a good problem-solver…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other people'], a: 0 },
        { q: 'When Willow Bend weighs a wall against planting trees, it should think about…', choices: ['only the color', 'safety, cost, and nature', 'who is loudest'], a: 1 },
        { q: 'After the town chooses a solution, the last step is to…', choices: ['forget about it', 'check how well it worked', 'hide the cost'], a: 1 }
      ],
      takeaway: 'Name it → gather → weigh → choose → defend → check. That is the whole problem-solving process.'
    },
    es: {
      title: 'Calentamiento: los pasos para resolver problemas',
      seconds: 45,
      questions: [
        { q: 'Lo PRIMERO que hace quien resuelve problemas es…', choices: ['elegir una solución', 'nombrar el problema', 'hacer una votación'], a: 1 },
        { q: 'Antes de elegir qué hacer, quien resuelve bien problemas…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora a los demás'], a: 0 },
        { q: 'Cuando Willow Bend compara un muro con plantar árboles, debe pensar en…', choices: ['solo el color', 'la seguridad, el costo y la naturaleza', 'quién grita más'], a: 1 },
        { q: 'Después de que el pueblo elige una solución, el último paso es…', choices: ['olvidarla', 'comprobar qué tan bien funcionó', 'ocultar el costo'], a: 1 }
      ],
      takeaway: 'Nombrar → reunir → sopesar → elegir → defender → comprobar. Ese es todo el proceso de resolución de problemas.'
    },
    vi: {
      title: 'Khởi động: các bước giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Điều ĐẦU TIÊN người giải quyết vấn đề làm là…', choices: ['chọn một giải pháp', 'gọi tên vấn đề', 'tổ chức bỏ phiếu'], a: 1 },
        { q: 'Trước khi chọn phải làm gì, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua người khác'], a: 0 },
        { q: 'Khi Willow Bend cân nhắc giữa xây tường và trồng cây, thị trấn nên nghĩ về…', choices: ['chỉ màu sắc', 'sự an toàn, chi phí và thiên nhiên', 'ai nói to nhất'], a: 1 },
        { q: 'Sau khi thị trấn chọn một giải pháp, bước cuối cùng là…', choices: ['quên nó đi', 'kiểm tra xem nó hiệu quả ra sao', 'giấu đi chi phí'], a: 1 }
      ],
      takeaway: 'Gọi tên → thu thập → cân nhắc → chọn → bảo vệ → kiểm tra. Đó chính là toàn bộ quá trình giải quyết vấn đề.'
    },
    ar: {
      title: 'تهيئة: خطوات حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'أول ما يفعله حلّال المشكلات هو…', choices: ['اختيار حل', 'تسمية المشكلة', 'إجراء تصويت'], a: 1 },
        { q: 'قبل اختيار ما يُفعل، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل الآخرين'], a: 0 },
        { q: 'عندما توازن ويلو بند بين جدار وزراعة الأشجار، ينبغي أن تفكّر في…', choices: ['اللون فقط', 'السلامة والتكلفة والطبيعة', 'مَن هو الأعلى صوتًا'], a: 1 },
        { q: 'بعد أن تختار البلدة حلًّا، الخطوة الأخيرة هي…', choices: ['نسيانه', 'التحقق من مدى نجاحه', 'إخفاء التكلفة'], a: 1 }
      ],
      takeaway: 'سمِّ ← اجمع ← وازِن ← اختر ← دافِع ← تحقّق. تلك هي عملية حل المشكلة بأكملها.'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान के चरण',
      seconds: 45,
      questions: [
        { q: 'समस्या हल करने वाला सबसे पहले जो करता है, वह है…', choices: ['एक समाधान चुनना', 'समस्या का नाम देना', 'मतदान कराना'], a: 1 },
        { q: 'क्या करना है यह चुनने से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'दूसरों को अनदेखा करता है'], a: 0 },
        { q: 'जब विलो बेंड दीवार और पेड़ लगाने के बीच तौलता है, तो उसे सोचना चाहिए…', choices: ['केवल रंग के बारे में', 'सुरक्षा, लागत और प्रकृति के बारे में', 'कौन सबसे ज़ोर से बोलता है'], a: 1 },
        { q: 'कस्बे द्वारा समाधान चुनने के बाद, अंतिम चरण है…', choices: ['उसे भूल जाना', 'जाँचना कि वह कितना अच्छा रहा', 'लागत को छिपाना'], a: 1 }
      ],
      takeaway: 'नाम दें → जुटाएँ → तौलें → चुनें → बचाव करें → जाँचें। यही पूरी समस्या-समाधान प्रक्रिया है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کے مراحل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے والا سب سے پہلے جو کرتا ہے، وہ ہے…', choices: ['ایک حل چننا', 'مسئلے کا نام رکھنا', 'ووٹنگ کرانا'], a: 1 },
        { q: 'کیا کرنا ہے یہ چننے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دوسروں کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'جب ویلو بینڈ دیوار اور درخت لگانے کے درمیان تولتا ہے، تو اسے سوچنا چاہیے…', choices: ['صرف رنگ کے بارے میں', 'حفاظت، لاگت اور فطرت کے بارے میں', 'کون سب سے اونچی آواز میں بولتا ہے'], a: 1 },
        { q: 'قصبے کے حل چننے کے بعد، آخری مرحلہ ہے…', choices: ['اسے بھول جانا', 'جانچنا کہ وہ کتنا کارگر رہا', 'لاگت کو چھپانا'], a: 1 }
      ],
      takeaway: 'نام دیں ← جمع کریں ← تولیں ← چنیں ← دفاع کریں ← جانچیں۔ یہی پورا مسئلہ حل کرنے کا عمل ہے۔'
    },
    zh: {
      title: '热身：解决问题的步骤',
      seconds: 45,
      questions: [
        { q: '解决问题者首先要做的是…', choices: ['挑选一个方案', '说清问题是什么', '进行投票'], a: 1 },
        { q: '在决定该怎么做之前，优秀的解决问题者会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视他人'], a: 0 },
        { q: '当柳湾在筑墙与种树之间权衡时，它应当考虑…', choices: ['只考虑颜色', '安全、成本和自然', '谁的嗓门最大'], a: 1 },
        { q: '小镇选定方案之后，最后一步是…', choices: ['把它忘掉', '检查它的效果如何', '隐藏成本'], a: 1 }
      ],
      takeaway: '说清 → 收集 → 权衡 → 选择 → 辩护 → 检查。这就是整个解决问题的过程。'
    } }
  },
  {
    id: 'g3-living-with-the-river-transfer-exit', grade: 3, unit: 'living-with-the-river',
    unitTitle: 'Living with the River — When Nature Changes Our Community', phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.14(c)(16)(B), (c)(14)(E,F)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim + evidence',
      items: [
        { before: 'A claim about what the town should do is stronger when you back it with', after: 'from the sources.', choices: ['evidence', 'a louder voice', 'a guess'], a: 0 },
        { before: 'A good solution weighs safety, cost, and', after: 'before the town decides.', choices: ['nature', 'the weather app', 'the map title'], a: 0 },
        { before: 'After the town acts, we look back to', after: 'whether the solution really worked.', choices: ['check', 'forget', 'hide'], a: 0 }
      ],
      takeaway: 'Claim + evidence + checking your solution = thinking like a good citizen.'
    },
    es: {
      title: 'Salida: afirmación + evidencia',
      items: [
        { before: 'Una afirmación sobre lo que debe hacer el pueblo es más fuerte cuando la respaldas con', after: 'de las fuentes.', choices: ['evidencia', 'una voz más fuerte', 'una suposición'], a: 0 },
        { before: 'Una buena solución sopesa la seguridad, el costo y la', after: 'antes de que el pueblo decida.', choices: ['naturaleza', 'la app del clima', 'el título del mapa'], a: 0 },
        { before: 'Después de que el pueblo actúa, miramos atrás para', after: 'si la solución realmente funcionó.', choices: ['comprobar', 'olvidar', 'ocultar'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + comprobar tu solución = pensar como un buen ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm + bằng chứng',
      items: [
        { before: 'Một luận điểm về việc thị trấn nên làm gì sẽ vững hơn khi bạn củng cố nó bằng', after: 'từ các nguồn.', choices: ['bằng chứng', 'giọng nói to hơn', 'một phỏng đoán'], a: 0 },
        { before: 'Một giải pháp tốt cân nhắc sự an toàn, chi phí và', after: 'trước khi thị trấn quyết định.', choices: ['thiên nhiên', 'ứng dụng thời tiết', 'tiêu đề bản đồ'], a: 0 },
        { before: 'Sau khi thị trấn hành động, chúng ta nhìn lại để', after: 'xem giải pháp có thực sự hiệu quả không.', choices: ['kiểm tra', 'quên', 'giấu'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + kiểm tra giải pháp = tư duy như một công dân tốt.'
    },
    ar: {
      title: 'الخروج: ادعاء + دليل',
      items: [
        { before: 'الادعاء بشأن ما ينبغي أن تفعله البلدة يكون أقوى حين تدعمه بـ', after: 'من المصادر.', choices: ['دليل', 'صوت أعلى', 'تخمين'], a: 0 },
        { before: 'الحل الجيد يوازن السلامة والتكلفة و', after: 'قبل أن تقرّر البلدة.', choices: ['الطبيعة', 'تطبيق الطقس', 'عنوان الخريطة'], a: 0 },
        { before: 'بعد أن تتصرّف البلدة، ننظر إلى الوراء لـ', after: 'ما إذا كان الحل قد نجح فعلًا.', choices: ['نتحقّق من', 'ننسى', 'نخفي'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + التحقق من حلّك = التفكير كمواطن صالح.'
    },
    hi: {
      title: 'निकास: दावा + साक्ष्य',
      items: [
        { before: 'कस्बे को क्या करना चाहिए, इस बारे में दावा तब मज़बूत होता है जब आप उसका समर्थन करते हैं', after: 'स्रोतों से।', choices: ['साक्ष्य से', 'ऊँची आवाज़ से', 'एक अनुमान से'], a: 0 },
        { before: 'एक अच्छा समाधान सुरक्षा, लागत और', after: 'को तौलता है, इससे पहले कि कस्बा निर्णय ले।', choices: ['प्रकृति', 'मौसम ऐप', 'नक्शे का शीर्षक'], a: 0 },
        { before: 'कस्बे के कार्य करने के बाद, हम पीछे मुड़कर यह', after: 'कि समाधान वाकई काम आया या नहीं।', choices: ['जाँचते हैं', 'भूल जाते हैं', 'छिपाते हैं'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + अपने समाधान की जाँच = एक अच्छे नागरिक की तरह सोचना।'
    },
    ur: {
      title: 'اخراج: دعویٰ + ثبوت',
      items: [
        { before: 'قصبے کو کیا کرنا چاہیے، اس بارے میں دعویٰ اُس وقت مضبوط ہوتا ہے جب آپ اس کی حمایت کریں', after: 'مآخذ سے۔', choices: ['ثبوت سے', 'اونچی آواز سے', 'ایک اندازے سے'], a: 0 },
        { before: 'ایک اچھا حل حفاظت، لاگت اور', after: 'کو تولتا ہے، قصبے کے فیصلہ کرنے سے پہلے۔', choices: ['فطرت', 'موسم کی ایپ', 'نقشے کا عنوان'], a: 0 },
        { before: 'قصبے کے عمل کرنے کے بعد، ہم پیچھے مڑ کر یہ', after: 'کہ حل واقعی کارگر رہا یا نہیں۔', choices: ['جانچتے ہیں', 'بھول جاتے ہیں', 'چھپاتے ہیں'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + اپنے حل کی جانچ = ایک اچھے شہری کی طرح سوچنا۔'
    },
    zh: {
      title: '离场：主张 + 证据',
      items: [
        { before: '关于小镇该怎么做的主张，当你用', after: '来自资料时会更有力。', choices: ['证据', '更大的嗓门', '一个猜测'], a: 0 },
        { before: '好的方案在小镇做决定之前，会权衡安全、成本和', after: '。', choices: ['自然', '天气应用', '地图标题'], a: 0 },
        { before: '小镇采取行动之后，我们回头', after: '方案是否真的有效。', choices: ['检查', '忘记', '隐藏'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 检查你的方案 = 像一个好公民一样思考。'
    } }
  }

]);
