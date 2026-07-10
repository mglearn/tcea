/* PST Arcade — ticket registry (Grade 5 · Head West, 1846). Retrieval practice for one unit + phase.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. Same shape as g5-immigration.js:
   {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. This unit treats U.S.
   westward expansion honestly and respectfully, including its effect on the Native nations whose
   homelands lay along the trails (TEC §28.0022). Do not translate: id, grade, unit, unitTitle,
   phase, type, format, teks, strat, d, seconds, and the answer/category indices (a, c). */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 5 · Head West 1846 · SURFACE ───────── */
  {
    id: 'g5-head-west-surface-entry', grade: 5, unit: 'head-west',
    unitTitle: "Head West, 1846 — Should Our Family Go?", phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.16(c)(6)(A)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: westward words',
      seconds: 45,
      questions: [
        { q: 'The edge of settled land, where the maps ran out for U.S. settlers, was the…', choices: ['frontier', 'territory', 'prairie'], a: 0 },
        { q: 'The 1840s belief that the U.S. was meant to spread west across the continent was called…', choices: ['the Oregon Trail', 'Manifest Destiny', 'the Louisiana Purchase'], a: 1 },
        { q: 'A long line of covered wagons that traveled together for safety was a…', choices: ['wagon train', 'prairie', 'frontier'], a: 0 },
        { q: 'The 1803 deal that doubled the size of the country and opened the West was the…', choices: ['Oregon Trail', 'Manifest Destiny', 'Louisiana Purchase'], a: 2 }
      ],
      takeaway: 'Know these four words and you can read the rest of the unit with confidence.'
    },
    es: {
      title: 'Calentamiento: palabras del oeste',
      seconds: 45,
      questions: [
        { q: 'El borde de la tierra poblada, donde se acababan los mapas para los colonos de EE. UU., era la…', choices: ['frontera', 'territorio', 'pradera'], a: 0 },
        { q: 'La creencia de la década de 1840 de que EE. UU. debía extenderse hacia el oeste por el continente se llamó…', choices: ['el Sendero de Oregón', 'Destino Manifiesto', 'la Compra de Luisiana'], a: 1 },
        { q: 'Una larga fila de carretas cubiertas que viajaban juntas por seguridad era una…', choices: ['caravana de carretas', 'pradera', 'frontera'], a: 0 },
        { q: 'El acuerdo de 1803 que duplicó el tamaño del país y abrió el Oeste fue la…', choices: ['Sendero de Oregón', 'Destino Manifiesto', 'Compra de Luisiana'], a: 2 }
      ],
      takeaway: 'Domina estas cuatro palabras y podrás leer el resto de la unidad con confianza.'
    },
    vi: {
      title: 'Khởi động: từ vựng về miền Tây',
      seconds: 45,
      questions: [
        { q: 'Ranh giới của vùng đất đã định cư, nơi bản đồ của người định cư Mỹ kết thúc, được gọi là…', choices: ['biên cương', 'lãnh thổ', 'đồng cỏ'], a: 0 },
        { q: 'Niềm tin thập niên 1840 rằng nước Mỹ phải mở rộng về phía tây khắp lục địa được gọi là…', choices: ['Đường mòn Oregon', 'Vận mệnh Hiển nhiên', 'Vụ mua Louisiana'], a: 1 },
        { q: 'Một hàng dài những cỗ xe ngựa có mui đi cùng nhau để được an toàn là một…', choices: ['đoàn xe ngựa', 'đồng cỏ', 'biên cương'], a: 0 },
        { q: 'Thương vụ năm 1803 làm tăng gấp đôi diện tích đất nước và mở ra miền Tây là…', choices: ['Đường mòn Oregon', 'Vận mệnh Hiển nhiên', 'Vụ mua Louisiana'], a: 2 }
      ],
      takeaway: 'Nắm được bốn từ này là bạn có thể đọc phần còn lại của đơn vị bài học một cách tự tin.'
    },
    ar: {
      title: 'تهيئة: كلمات الغرب',
      seconds: 45,
      questions: [
        { q: 'حافة الأرض المأهولة، حيث تنتهي خرائط المستوطنين الأمريكيين، كانت تُسمّى…', choices: ['التخوم', 'الإقليم', 'المرج'], a: 0 },
        { q: 'اعتقاد أربعينيات القرن التاسع عشر بأن على الولايات المتحدة أن تمتد غربًا عبر القارة سُمّي…', choices: ['درب أوريغون', 'القدر المتجلّي', 'صفقة لويزيانا'], a: 1 },
        { q: 'صفٌّ طويل من العربات المغطّاة تسير معًا طلبًا للأمان كان يُسمّى…', choices: ['قافلة العربات', 'المرج', 'التخوم'], a: 0 },
        { q: 'الصفقة التي جرت عام 1803 وضاعفت مساحة البلاد وفتحت الغرب هي…', choices: ['درب أوريغون', 'القدر المتجلّي', 'صفقة لويزيانا'], a: 2 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وستقرأ بقية الوحدة بثقة.'
    },
    hi: {
      title: 'वार्म-अप: पश्चिम के शब्द',
      seconds: 45,
      questions: [
        { q: 'बसी हुई भूमि का किनारा, जहाँ अमेरिकी बसने वालों के लिए नक्शे खत्म हो जाते थे, कहलाता था…', choices: ['सीमांत', 'क्षेत्र', 'घास का मैदान'], a: 0 },
        { q: '1840 के दशक का यह विश्वास कि अमेरिका को महाद्वीप भर में पश्चिम की ओर फैलना है, कहलाता था…', choices: ['ओरेगन ट्रेल', 'मैनिफेस्ट डेस्टिनी', 'लुइज़ियाना खरीद'], a: 1 },
        { q: 'सुरक्षा के लिए साथ-साथ चलने वाली ढकी हुई गाड़ियों की लंबी कतार थी एक…', choices: ['वैगन ट्रेन', 'घास का मैदान', 'सीमांत'], a: 0 },
        { q: '1803 का वह सौदा जिसने देश का आकार दोगुना कर पश्चिम खोल दिया, था…', choices: ['ओरेगन ट्रेल', 'मैनिफेस्ट डेस्टिनी', 'लुइज़ियाना खरीद'], a: 2 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और आप शेष इकाई आत्मविश्वास से पढ़ सकेंगे।'
    },
    ur: {
      title: 'وارم اپ: مغرب کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'آباد زمین کا کنارہ، جہاں امریکی آباد کاروں کے لیے نقشے ختم ہو جاتے تھے، کہلاتا تھا…', choices: ['سرحدی علاقہ', 'خطہ', 'میدانِ گھاس'], a: 0 },
        { q: '1840 کی دہائی کا یہ عقیدہ کہ امریکہ کو براعظم بھر میں مغرب کی طرف پھیلنا ہے، کہلاتا تھا…', choices: ['اوریگون ٹریل', 'مینی فیسٹ ڈیسٹنی', 'لوزیانا کی خریداری'], a: 1 },
        { q: 'حفاظت کے لیے مل کر سفر کرنے والی ڈھکی ہوئی گاڑیوں کی لمبی قطار تھی ایک…', choices: ['ویگن ٹرین', 'میدانِ گھاس', 'سرحدی علاقہ'], a: 0 },
        { q: '1803 کا وہ معاہدہ جس نے ملک کا رقبہ دوگنا کر کے مغرب کھول دیا، تھا…', choices: ['اوریگون ٹریل', 'مینی فیسٹ ڈیسٹنی', 'لوزیانا کی خریداری'], a: 2 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو آپ باقی اکائی اعتماد کے ساتھ پڑھ سکیں گے۔'
    },
    zh: {
      title: '热身：西进词汇',
      seconds: 45,
      questions: [
        { q: '已开垦土地的边缘，即美国移民地图的尽头，被称为…', choices: ['边疆', '准州', '草原'], a: 0 },
        { q: '1840 年代认为美国注定要向西横跨大陆扩张的信念被称为…', choices: ['俄勒冈小道', '天定命运', '路易斯安那购地'], a: 1 },
        { q: '为了安全而结队同行的一长列篷车被称为…', choices: ['篷车队', '草原', '边疆'], a: 0 },
        { q: '1803 年使国土面积翻倍并打开西部的那笔交易是…', choices: ['俄勒冈小道', '天定命运', '路易斯安那购地'], a: 2 }
      ],
      takeaway: '掌握这四个词，你就能自信地读完本单元的其余部分。'
    } }
  },
  {
    id: 'g5-head-west-surface-exit', grade: 5, unit: 'head-west',
    unitTitle: "Head West, 1846 — Should Our Family Go?", phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.16(c)(6)(A)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['frontier', 'the edge of settled land, where the maps ran out'],
        ['pioneer', 'one of the first settlers to move into a new region'],
        ['migration', 'the movement of many people to a new place to live'],
        ['prairie', 'a wide, flat land of tall grasses that wagons crossed'],
        ['stakeholder', 'anyone affected by a decision or with something at stake']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['frontera', 'el borde de la tierra poblada, donde se acababan los mapas'],
        ['pionero', 'uno de los primeros colonos en llegar a una región nueva'],
        ['migración', 'el movimiento de muchas personas a un nuevo lugar para vivir'],
        ['pradera', 'una tierra amplia y llana de hierbas altas que cruzaban las carretas'],
        ['parte interesada', 'cualquiera afectado por una decisión o con algo en juego']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['biên cương', 'ranh giới của vùng đất đã định cư, nơi bản đồ kết thúc'],
        ['người tiên phong', 'một trong những người định cư đầu tiên đến một vùng mới'],
        ['di cư', 'sự di chuyển của nhiều người đến một nơi mới để sinh sống'],
        ['đồng cỏ', 'vùng đất rộng, phẳng đầy cỏ cao mà xe ngựa phải băng qua'],
        ['bên liên quan', 'bất kỳ ai bị ảnh hưởng bởi quyết định hoặc có điều gì đó bị đe dọa']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['التخوم', 'حافة الأرض المأهولة، حيث تنتهي الخرائط'],
        ['رائد', 'أحد أوائل المستوطنين الذين انتقلوا إلى منطقة جديدة'],
        ['الهجرة', 'انتقال أناس كثيرين إلى مكان جديد للعيش فيه'],
        ['المرج', 'أرض واسعة مسطّحة من الأعشاب العالية عبرتها العربات'],
        ['صاحب مصلحة', 'كل من يتأثر بقرار أو لديه شيء على المحك']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['सीमांत', 'बसी हुई भूमि का किनारा, जहाँ नक्शे खत्म हो जाते थे'],
        ['अग्रगामी', 'किसी नए क्षेत्र में जाने वाले पहले बसने वालों में से एक'],
        ['प्रवास', 'रहने के लिए कई लोगों का किसी नए स्थान की ओर जाना'],
        ['घास का मैदान', 'ऊँची घासों की चौड़ी, समतल भूमि जिसे गाड़ियाँ पार करती थीं'],
        ['हितधारक', 'कोई भी जो निर्णय से प्रभावित हो या जिसका कुछ दाँव पर हो']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['سرحدی علاقہ', 'آباد زمین کا کنارہ، جہاں نقشے ختم ہو جاتے تھے'],
        ['پیش رو آباد کار', 'کسی نئے علاقے میں جانے والے پہلے آباد کاروں میں سے ایک'],
        ['نقل مکانی', 'رہنے کے لیے بہت سے لوگوں کا کسی نئی جگہ کی طرف جانا'],
        ['میدانِ گھاس', 'اونچی گھاسوں کی چوڑی، ہموار زمین جسے گاڑیاں پار کرتی تھیں'],
        ['اسٹیک ہولڈر', 'کوئی بھی جو فیصلے سے متاثر ہو یا جس کا کچھ داؤ پر ہو']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['边疆', '已开垦土地的边缘，即地图的尽头'],
        ['拓荒者', '迁入新地区的最早移民之一'],
        ['迁徙', '许多人迁往一个新地方定居'],
        ['草原', '篷车必须穿越的、长满高草的宽阔平坦土地'],
        ['利益相关者', '任何受某项决定影响或有切身利害的人']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 5 · Head West 1846 · DEEP ───────── */
  {
    id: 'g5-head-west-deep-entry', grade: 5, unit: 'head-west',
    unitTitle: "Head West, 1846 — Should Our Family Go?", phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.16(c)(7)(A–C)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: opportunities, costs & effects',
      items: [
        { before: 'The promise of rich, cheap farmland was an', after: 'that pulled families west.', choices: ['opportunity', 'danger', 'effect on Native peoples'], a: 0 },
        { before: 'A months-long journey with disease and river crossings was a', after: 'of going.', choices: ['opportunity', 'danger or cost', 'trail map'], a: 1 },
        { before: 'Strangers crossing homelands and pressure on land and buffalo were an', after: 'of westward migration.', choices: ['opportunity for settlers', 'effect on Native peoples', 'reason to celebrate'], a: 1 }
      ],
      takeaway: 'Every westward choice mixes opportunity, cost, AND its effect on the Native nations already there.'
    },
    es: {
      title: 'Calentamiento: oportunidades, costos y efectos',
      items: [
        { before: 'La promesa de tierras ricas y baratas era una', after: 'que atraía a las familias al oeste.', choices: ['oportunidad', 'peligro', 'efecto en los pueblos nativos'], a: 0 },
        { before: 'Un viaje de meses con enfermedades y cruces de ríos era un', after: 'de partir.', choices: ['oportunidad', 'peligro o costo', 'mapa del sendero'], a: 1 },
        { before: 'Extraños cruzando tierras ancestrales y presión sobre la tierra y el búfalo eran un', after: 'de la migración hacia el oeste.', choices: ['oportunidad para los colonos', 'efecto en los pueblos nativos', 'motivo de celebración'], a: 1 }
      ],
      takeaway: 'Toda decisión hacia el oeste mezcla oportunidad, costo Y su efecto en las naciones nativas que ya vivían allí.'
    },
    vi: {
      title: 'Khởi động: cơ hội, cái giá và tác động',
      items: [
        { before: 'Lời hứa về đất canh tác màu mỡ, rẻ tiền là một', after: 'thu hút các gia đình đi về phía tây.', choices: ['cơ hội', 'mối nguy', 'tác động lên các dân tộc bản địa'], a: 0 },
        { before: 'Một chuyến đi kéo dài nhiều tháng với bệnh tật và những lần vượt sông là một', after: 'của việc ra đi.', choices: ['cơ hội', 'mối nguy hoặc cái giá', 'bản đồ đường mòn'], a: 1 },
        { before: 'Người lạ băng qua quê hương và áp lực lên đất đai và bò rừng là một', after: 'của cuộc di cư về phía tây.', choices: ['cơ hội cho người định cư', 'tác động lên các dân tộc bản địa', 'lý do để ăn mừng'], a: 1 }
      ],
      takeaway: 'Mỗi lựa chọn đi về phía tây đều pha trộn cơ hội, cái giá VÀ tác động của nó lên các dân tộc bản địa đã sinh sống ở đó.'
    },
    ar: {
      title: 'تهيئة: الفرص والتكاليف والآثار',
      items: [
        { before: 'وعد الأرض الزراعية الخصبة والرخيصة كان', after: 'جذبت العائلات نحو الغرب.', choices: ['فرصة', 'خطرًا', 'أثرًا على الشعوب الأصلية'], a: 0 },
        { before: 'رحلة تدوم أشهرًا مع المرض وعبور الأنهار كانت', after: 'للرحيل.', choices: ['فرصة', 'خطرًا أو تكلفة', 'خريطة درب'], a: 1 },
        { before: 'الغرباء الذين يعبرون أوطان الآخرين والضغط على الأرض والجاموس كانا', after: 'للهجرة نحو الغرب.', choices: ['فرصة للمستوطنين', 'أثرًا على الشعوب الأصلية', 'سببًا للاحتفال'], a: 1 }
      ],
      takeaway: 'كل خيار نحو الغرب يمزج بين الفرصة والتكلفة وأثره على الأمم الأصلية التي كانت هناك من قبل.'
    },
    hi: {
      title: 'वार्म-अप: अवसर, लागत और प्रभाव',
      items: [
        { before: 'उपजाऊ, सस्ती कृषि भूमि का वादा एक', after: 'था जो परिवारों को पश्चिम की ओर खींचता था।', choices: ['अवसर', 'खतरा', 'मूल निवासियों पर प्रभाव'], a: 0 },
        { before: 'बीमारी और नदी पार करने वाली महीनों लंबी यात्रा जाने की एक', after: 'थी।', choices: ['अवसर', 'खतरा या लागत', 'ट्रेल का नक्शा'], a: 1 },
        { before: 'अजनबियों का मातृभूमि पार करना और भूमि व भैंसों पर दबाव पश्चिम की ओर प्रवास का एक', after: 'था।', choices: ['बसने वालों के लिए अवसर', 'मूल निवासियों पर प्रभाव', 'जश्न मनाने का कारण'], a: 1 }
      ],
      takeaway: 'पश्चिम की ओर हर विकल्प अवसर, लागत और वहाँ पहले से रह रहे मूल राष्ट्रों पर उसके प्रभाव को मिलाता है।'
    },
    ur: {
      title: 'وارم اپ: مواقع، قیمت اور اثرات',
      items: [
        { before: 'زرخیز، سستی کاشتکاری کی زمین کا وعدہ ایک', after: 'تھا جو خاندانوں کو مغرب کی طرف کھینچتا تھا۔', choices: ['موقع', 'خطرہ', 'مقامی اقوام پر اثر'], a: 0 },
        { before: 'بیماری اور دریا عبور کرنے والا مہینوں طویل سفر جانے کی ایک', after: 'تھا۔', choices: ['موقع', 'خطرہ یا قیمت', 'راستے کا نقشہ'], a: 1 },
        { before: 'اجنبیوں کا آبائی زمینوں سے گزرنا اور زمین و بھینسوں پر دباؤ مغرب کی طرف نقل مکانی کا ایک', after: 'تھا۔', choices: ['آباد کاروں کے لیے موقع', 'مقامی اقوام پر اثر', 'جشن منانے کی وجہ'], a: 1 }
      ],
      takeaway: 'مغرب کی طرف ہر انتخاب موقع، قیمت اور وہاں پہلے سے موجود مقامی اقوام پر اس کے اثر کو ملاتا ہے۔'
    },
    zh: {
      title: '热身：机遇、代价与影响',
      items: [
        { before: '肥沃而廉价农田的许诺是一种', after: '，把家庭吸引向西部。', choices: ['机遇', '危险', '对原住民的影响'], a: 0 },
        { before: '历时数月、伴随疾病和渡河的旅程是出行的一种', after: '。', choices: ['机遇', '危险或代价', '路线地图'], a: 1 },
        { before: '陌生人穿越家园、对土地和野牛造成的压力，是西进迁徙的一种', after: '。', choices: ['对移民的机遇', '对原住民的影响', '值得庆祝的理由'], a: 1 }
      ],
      takeaway: '每一个西进的选择都混合着机遇、代价，以及它对早已生活在那里的原住民族的影响。'
    } }
  },
  {
    id: 'g5-head-west-deep-exit', grade: 5, unit: 'head-west',
    unitTitle: "Head West, 1846 — Should Our Family Go?", phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.16(c)(7)(A–C), (c)(8)(A/B)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort opportunities vs costs & effects',
      cats: ['Opportunity (the pull)', 'Danger, cost, or effect'],
      items: [
        { t: 'Rich, cheap farmland', c: 0 },
        { t: 'A fresh start and more land', c: 0 },
        { t: 'Joining family and neighbors already west', c: 0 },
        { t: 'A months-long, risky journey', c: 1 },
        { t: 'Leaving everything familiar behind', c: 1 },
        { t: 'Strangers crossing Native homelands', c: 1 }
      ],
      takeaway: 'Sorting opportunities against costs and effects is the concept map behind your argument.'
    },
    es: {
      title: 'Salida: clasifica oportunidades vs costos y efectos',
      cats: ['Oportunidad (la atracción)', 'Peligro, costo o efecto'],
      items: [
        { t: 'Tierra de cultivo rica y barata', c: 0 },
        { t: 'Un nuevo comienzo y más tierra', c: 0 },
        { t: 'Reunirse con familia y vecinos ya en el oeste', c: 0 },
        { t: 'Un viaje de meses y arriesgado', c: 1 },
        { t: 'Dejar atrás todo lo conocido', c: 1 },
        { t: 'Extraños cruzando tierras ancestrales nativas', c: 1 }
      ],
      takeaway: 'Clasificar oportunidades frente a costos y efectos es el mapa conceptual detrás de tu argumento.'
    },
    vi: {
      title: 'Phiếu ra: phân loại cơ hội với cái giá và tác động',
      cats: ['Cơ hội (sức hút)', 'Mối nguy, cái giá hoặc tác động'],
      items: [
        { t: 'Đất canh tác màu mỡ, rẻ tiền', c: 0 },
        { t: 'Một khởi đầu mới và nhiều đất hơn', c: 0 },
        { t: 'Đoàn tụ với gia đình và hàng xóm đã ở miền tây', c: 0 },
        { t: 'Một chuyến đi kéo dài nhiều tháng, đầy rủi ro', c: 1 },
        { t: 'Bỏ lại phía sau mọi thứ thân thuộc', c: 1 },
        { t: 'Người lạ băng qua quê hương của người bản địa', c: 1 }
      ],
      takeaway: 'Phân loại cơ hội với cái giá và tác động chính là sơ đồ khái niệm đằng sau lập luận của bạn.'
    },
    ar: {
      title: 'الخروج: صنّف الفرص مقابل التكاليف والآثار',
      cats: ['فرصة (الجذب)', 'خطر أو تكلفة أو أثر'],
      items: [
        { t: 'أرض زراعية خصبة ورخيصة', c: 0 },
        { t: 'بداية جديدة ومزيد من الأرض', c: 0 },
        { t: 'اللحاق بالعائلة والجيران المستقرين غربًا', c: 0 },
        { t: 'رحلة تدوم أشهرًا ومحفوفة بالمخاطر', c: 1 },
        { t: 'ترك كل ما هو مألوف خلفك', c: 1 },
        { t: 'غرباء يعبرون أوطان الشعوب الأصلية', c: 1 }
      ],
      takeaway: 'تصنيف الفرص مقابل التكاليف والآثار هو الخريطة المفاهيمية وراء حجّتك.'
    },
    hi: {
      title: 'निकास: अवसरों बनाम लागत और प्रभावों को छाँटें',
      cats: ['अवसर (आकर्षण)', 'खतरा, लागत या प्रभाव'],
      items: [
        { t: 'उपजाऊ, सस्ती कृषि भूमि', c: 0 },
        { t: 'एक नई शुरुआत और अधिक भूमि', c: 0 },
        { t: 'पश्चिम में पहले से बसे परिवार व पड़ोसियों से मिलना', c: 0 },
        { t: 'महीनों लंबी, जोखिम भरी यात्रा', c: 1 },
        { t: 'सब कुछ परिचित पीछे छोड़ना', c: 1 },
        { t: 'अजनबियों का मूल निवासियों की मातृभूमि पार करना', c: 1 }
      ],
      takeaway: 'अवसरों को लागत और प्रभावों के मुकाबले छाँटना ही आपके तर्क के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: مواقع بمقابلہ قیمت اور اثرات کو چھانٹیں',
      cats: ['موقع (کشش)', 'خطرہ، قیمت یا اثر'],
      items: [
        { t: 'زرخیز، سستی کاشتکاری کی زمین', c: 0 },
        { t: 'ایک نئی شروعات اور مزید زمین', c: 0 },
        { t: 'مغرب میں پہلے سے آباد خاندان و ہمسایوں سے ملنا', c: 0 },
        { t: 'مہینوں طویل، خطرناک سفر', c: 1 },
        { t: 'ہر مانوس چیز کو پیچھے چھوڑنا', c: 1 },
        { t: 'اجنبیوں کا مقامی اقوام کی آبائی زمینوں سے گزرنا', c: 1 }
      ],
      takeaway: 'مواقع کو قیمت اور اثرات کے مقابلے میں چھانٹنا ہی آپ کی دلیل کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：把机遇与代价、影响分类',
      cats: ['机遇（吸引力）', '危险、代价或影响'],
      items: [
        { t: '肥沃而廉价的农田', c: 0 },
        { t: '重新开始与更多土地', c: 0 },
        { t: '与已在西部的亲友团聚', c: 0 },
        { t: '历时数月、充满风险的旅程', c: 1 },
        { t: '抛下一切熟悉的事物', c: 1 },
        { t: '陌生人穿越原住民的家园', c: 1 }
      ],
      takeaway: '把机遇与代价、影响分类，就是你论证背后的概念图。'
    } }
  },

  /* ───────── Grade 5 · Head West 1846 · TRANSFER ───────── */
  {
    id: 'g5-head-west-transfer-entry', grade: 5, unit: 'head-west',
    unitTitle: "Head West, 1846 — Should Our Family Go?", phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.16(c)(26)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving steps',
      seconds: 45,
      questions: [
        { q: 'The FIRST thing a problem-solver does is…', choices: ['pick a solution', 'define the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing, a good problem-solver…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other views'], a: 0 },
        { q: 'When deciding about heading west, whose point of view must also be weighed?', choices: ['only the father who wants land', 'the Native nations whose homelands the trails cross', 'only families who already left'], a: 1 },
        { q: 'After choosing a solution, you should…', choices: ['forget it', 'evaluate how well it worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Define → gather → weigh → decide → defend → evaluate — and weigh every stakeholder, including Native nations.'
    },
    es: {
      title: 'Calentamiento: los pasos para resolver problemas',
      seconds: 45,
      questions: [
        { q: 'Lo PRIMERO que hace quien resuelve problemas es…', choices: ['elegir una solución', 'definir el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir, quien resuelve bien problemas…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora otras opiniones'], a: 0 },
        { q: 'Al decidir sobre ir al oeste, ¿el punto de vista de quién también debe sopesarse?', choices: ['solo el del padre que quiere tierra', 'el de las naciones nativas cuyas tierras cruzan los senderos', 'solo el de las familias que ya se fueron'], a: 1 },
        { q: 'Después de elegir una solución, deberías…', choices: ['olvidarla', 'evaluar qué tan bien funcionó', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Definir → reunir → sopesar → decidir → defender → evaluar, y sopesar a cada parte interesada, incluidas las naciones nativas.'
    },
    vi: {
      title: 'Khởi động: các bước giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Điều ĐẦU TIÊN người giải quyết vấn đề làm là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua quan điểm khác'], a: 0 },
        { q: 'Khi quyết định về việc đi về phía tây, quan điểm của ai cũng phải được cân nhắc?', choices: ['chỉ người cha muốn có đất', 'các dân tộc bản địa có quê hương mà những đường mòn băng qua', 'chỉ những gia đình đã ra đi'], a: 1 },
        { q: 'Sau khi chọn một giải pháp, bạn nên…', choices: ['quên nó đi', 'đánh giá xem nó hiệu quả ra sao', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → quyết định → bảo vệ → đánh giá, và cân nhắc mọi bên liên quan, kể cả các dân tộc bản địa.'
    },
    ar: {
      title: 'تهيئة: خطوات حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'أول ما يفعله حلّال المشكلات هو…', choices: ['اختيار حل', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل الاختيار، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل الآراء الأخرى'], a: 0 },
        { q: 'عند اتخاذ قرار التوجّه غربًا، وجهة نظر من التي يجب موازنتها أيضًا؟', choices: ['الأب الذي يريد الأرض فقط', 'الأمم الأصلية التي تعبر الدروب أوطانها', 'العائلات التي رحلت بالفعل فقط'], a: 1 },
        { q: 'بعد اختيار حل، ينبغي أن…', choices: ['تنساه', 'تقيّم مدى نجاحه', 'تخفي المفاضلات'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن ← قرِّر ← دافِع ← قيِّم، ووازِن كل صاحب مصلحة، بمن فيهم الأمم الأصلية.'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान के चरण',
      seconds: 45,
      questions: [
        { q: 'समस्या हल करने वाला सबसे पहले जो करता है, वह है…', choices: ['एक समाधान चुनना', 'समस्या को परिभाषित करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'चुनने से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य विचारों को अनदेखा करता है'], a: 0 },
        { q: 'पश्चिम जाने का निर्णय लेते समय, किसका दृष्टिकोण भी तौला जाना चाहिए?', choices: ['केवल भूमि चाहने वाले पिता का', 'उन मूल राष्ट्रों का जिनकी मातृभूमि से रास्ते गुज़रते हैं', 'केवल पहले जा चुके परिवारों का'], a: 1 },
        { q: 'समाधान चुनने के बाद, आपको चाहिए…', choices: ['उसे भूल जाना', 'यह आँकना कि वह कितना अच्छा रहा', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → निर्णय लें → बचाव करें → आँकें, और मूल राष्ट्रों सहित हर हितधारक को तौलें।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کے مراحل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے والا سب سے پہلے جو کرتا ہے، وہ ہے…', choices: ['ایک حل چننا', 'مسئلے کو متعین کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'چننے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دوسری آراء کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'مغرب جانے کا فیصلہ کرتے وقت، کس کا نقطہ نظر بھی تولا جانا چاہیے؟', choices: ['صرف زمین چاہنے والے والد کا', 'ان مقامی اقوام کا جن کی آبائی زمینوں سے راستے گزرتے ہیں', 'صرف پہلے جا چکے خاندانوں کا'], a: 1 },
        { q: 'حل چننے کے بعد، آپ کو چاہیے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ وہ کتنا کارگر رہا', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← فیصلہ کریں ← دفاع کریں ← جانچیں، اور مقامی اقوام سمیت ہر اسٹیک ہولڈر کو تولیں۔'
    },
    zh: {
      title: '热身：解决问题的步骤',
      seconds: 45,
      questions: [
        { q: '解决问题者首先要做的是…', choices: ['挑选一个方案', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在做出选择之前，优秀的解决问题者会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视他人的观点'], a: 0 },
        { q: '在决定是否西进时，还必须权衡谁的观点？', choices: ['只权衡想要土地的父亲', '小道穿越其家园的原住民族', '只权衡已经离开的家庭'], a: 1 },
        { q: '选定方案之后，你应当…', choices: ['把它忘掉', '评估它的效果如何', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 决定 → 辩护 → 评估，并权衡每一位利益相关者，包括原住民族。'
    } }
  },
  {
    id: 'g5-head-west-transfer-exit', grade: 5, unit: 'head-west',
    unitTitle: "Head West, 1846 — Should Our Family Go?", phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.16(c)(23)(G,H)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim + evidence',
      items: [
        { before: 'A claim about whether the family should go west needs', after: 'to be more than an opinion.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: 'A strong recommendation names the', after: '— what the family gains and what it gives up.', choices: ['trade-offs', 'colors', 'wagon names'], a: 0 },
        { before: 'Because the trails cross Native homelands, a fair decision must also weigh', after: 'point of view.', choices: ["the Native nations'", "the shopkeeper's", "the newspaper's"], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs — and every stakeholder weighed — is thinking like a historian and a citizen.'
    },
    es: {
      title: 'Salida: afirmación + evidencia',
      items: [
        { before: 'Una afirmación sobre si la familia debe ir al oeste necesita', after: 'para ser más que una opinión.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Una recomendación sólida nombra las', after: ': lo que la familia gana y lo que renuncia.', choices: ['concesiones', 'colores', 'nombres de carretas'], a: 0 },
        { before: 'Como los senderos cruzan tierras nativas, una decisión justa también debe sopesar el', after: 'punto de vista.', choices: ['de las naciones nativas', 'del tendero', 'del periódico'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones, y cada parte interesada sopesada, es pensar como historiador y ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm + bằng chứng',
      items: [
        { before: 'Một luận điểm về việc gia đình có nên đi về phía tây hay không cần', after: 'để hơn là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Một khuyến nghị vững chắc nêu ra những', after: ': gia đình được gì và phải từ bỏ gì.', choices: ['đánh đổi', 'màu sắc', 'tên các cỗ xe'], a: 0 },
        { before: 'Vì những đường mòn băng qua quê hương người bản địa, một quyết định công bằng cũng phải cân nhắc quan điểm của', after: '.', choices: ['các dân tộc bản địa', 'người chủ tiệm', 'tờ báo'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi, và cân nhắc mọi bên liên quan, là tư duy như một nhà sử học và một công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء + دليل',
      items: [
        { before: 'الادعاء حول ما إذا كان على العائلة التوجّه غربًا يحتاج إلى', after: 'ليكون أكثر من مجرد رأي.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'التوصية القوية تسمّي', after: ': ما تكسبه العائلة وما تتخلى عنه.', choices: ['المفاضلات', 'الألوان', 'أسماء العربات'], a: 0 },
        { before: 'لأن الدروب تعبر أوطان الشعوب الأصلية، فإن القرار العادل يجب أن يوازن أيضًا وجهة نظر', after: '.', choices: ['الأمم الأصلية', 'صاحب المتجر', 'الصحيفة'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات، مع موازنة كل صاحب مصلحة، هو التفكير كمؤرّخ ومواطن.'
    },
    hi: {
      title: 'निकास: दावा + साक्ष्य',
      items: [
        { before: 'परिवार को पश्चिम जाना चाहिए या नहीं, इस दावे को महज़ राय से अधिक बनने के लिए चाहिए', after: '।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: 'एक मजबूत सिफ़ारिश', after: 'का नाम लेती है — परिवार को क्या मिलता है और क्या छोड़ना पड़ता है।', choices: ['समझौतों', 'रंगों', 'गाड़ियों के नामों'], a: 0 },
        { before: 'चूँकि रास्ते मूल निवासियों की मातृभूमि से गुज़रते हैं, एक न्यायपूर्ण निर्णय को यह दृष्टिकोण भी तौलना चाहिए —', after: '।', choices: ['मूल राष्ट्रों का', 'दुकानदार का', 'अख़बार का'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते, और हर हितधारक को तौलना, एक इतिहासकार और नागरिक की तरह सोचना है।'
    },
    ur: {
      title: 'اخراج: دعویٰ + ثبوت',
      items: [
        { before: 'خاندان کو مغرب جانا چاہیے یا نہیں، اس دعوے کو محض رائے سے زیادہ بننے کے لیے چاہیے', after: '۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: 'ایک مضبوط سفارش', after: 'کا نام لیتی ہے — خاندان کو کیا ملتا ہے اور کیا چھوڑنا پڑتا ہے۔', choices: ['سمجھوتوں', 'رنگوں', 'گاڑیوں کے ناموں'], a: 0 },
        { before: 'چونکہ راستے مقامی اقوام کی آبائی زمینوں سے گزرتے ہیں، ایک منصفانہ فیصلے کو یہ نقطہ نظر بھی تولنا چاہیے —', after: '۔', choices: ['مقامی اقوام کا', 'دکاندار کا', 'اخبار کا'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے، اور ہر اسٹیک ہولڈر کو تولنا، ایک مؤرخ اور شہری کی طرح سوچنا ہے۔'
    },
    zh: {
      title: '离场：主张 + 证据',
      items: [
        { before: '关于家庭是否应当西进的主张，需要', after: '，才能不只是一种意见。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '有力的建议会说出其中的', after: '——家庭得到什么、又放弃什么。', choices: ['取舍', '颜色', '篷车的名字'], a: 0 },
        { before: '由于小道穿越原住民的家园，公正的决定还必须权衡', after: '的观点。', choices: ['原住民族', '店主', '报纸'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍，并权衡每一位利益相关者，就是像史学家和公民一样思考。'
    } }
  }

]);
