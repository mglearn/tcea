/* PST Arcade — ticket registry. Each ticket is retrieval practice for one unit + phase.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. To add tickets, append objects
   with the same shape: {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 4 · The Mission Decision 1718 · SURFACE ───────── */
  {
    id: 'g4-the-mission-surface-entry', grade: 4, unit: 'the-mission',
    unitTitle: "The Mission Decision, 1718 — Where Should It Stand?", phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.15(c)(2)(C), (c)(9)(A)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: mission words',
      seconds: 45,
      questions: [
        { q: 'A settlement built by the Catholic Church and Spain to teach its faith is a…', choices: ['mission', 'presidio', 'colony'], a: 0 },
        { q: 'A fort with soldiers, built to protect a mission, is a…', choices: ['trade route', 'presidio', 'frontier'], a: 1 },
        { q: 'The peoples who already lived in Texas, like the Caddo and Coahuiltecan, are the…', choices: ['missionaries', 'American Indian nations', 'settlers'], a: 1 },
        { q: 'A river, spring, or creek a settlement needed to drink and farm is a…', choices: ['water source', 'stakeholder', 'colony'], a: 0 }
      ],
      takeaway: 'Know these four words and the rest of the unit reads much easier.'
    },
    es: {
      title: 'Calentamiento: palabras de la misión',
      seconds: 45,
      questions: [
        { q: 'Un asentamiento construido por la Iglesia católica y España para enseñar su fe es una…', choices: ['misión', 'presidio', 'colonia'], a: 0 },
        { q: 'Un fuerte con soldados, construido para proteger una misión, es un…', choices: ['ruta comercial', 'presidio', 'frontera'], a: 1 },
        { q: 'Los pueblos que ya vivían en Texas, como los caddo y los coahuiltecos, son las…', choices: ['misioneros', 'naciones indígenas americanas', 'colonos'], a: 1 },
        { q: 'Un río, manantial o arroyo que un asentamiento necesitaba para beber y cultivar es una…', choices: ['fuente de agua', 'parte interesada', 'colonia'], a: 0 }
      ],
      takeaway: 'Domina estas cuatro palabras y el resto de la unidad se leerá mucho más fácil.'
    },
    vi: {
      title: 'Khởi động: từ vựng về khu truyền giáo',
      seconds: 45,
      questions: [
        { q: 'Một khu định cư do Giáo hội Công giáo và Tây Ban Nha xây dựng để truyền dạy đức tin là một…', choices: ['khu truyền giáo', 'đồn lũy', 'thuộc địa'], a: 0 },
        { q: 'Một pháo đài có lính, xây để bảo vệ khu truyền giáo, là một…', choices: ['tuyến đường buôn bán', 'đồn lũy', 'vùng biên cương'], a: 1 },
        { q: 'Các dân tộc đã sinh sống ở Texas, như người Caddo và Coahuiltecan, là các…', choices: ['nhà truyền giáo', 'quốc gia người bản địa châu Mỹ', 'người định cư'], a: 1 },
        { q: 'Một dòng sông, con suối hay lạch nước mà khu định cư cần để uống và trồng trọt là một…', choices: ['nguồn nước', 'bên liên quan', 'thuộc địa'], a: 0 }
      ],
      takeaway: 'Nắm được bốn từ này thì phần còn lại của bài học sẽ dễ đọc hơn nhiều.'
    },
    ar: {
      title: 'تهيئة: كلمات البعثة',
      seconds: 45,
      questions: [
        { q: 'المستوطنة التي بنتها الكنيسة الكاثوليكية وإسبانيا لتعليم عقيدتها هي…', choices: ['بعثة تبشيرية', 'حصن (بريسيديو)', 'مستعمرة'], a: 0 },
        { q: 'الحصن الذي فيه جنود، والمبني لحماية البعثة، هو…', choices: ['طريق تجاري', 'حصن (بريسيديو)', 'ثغر حدودي'], a: 1 },
        { q: 'الشعوب التي كانت تعيش في تكساس، مثل الكادو والكواويلتيكان، هي…', choices: ['المبشرون', 'أمم الهنود الأمريكيين', 'المستوطنون'], a: 1 },
        { q: 'النهر أو النبع أو الجدول الذي تحتاجه المستوطنة للشرب والزراعة هو…', choices: ['مصدر مياه', 'طرف معني', 'مستعمرة'], a: 0 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وستقرأ بقية الوحدة بسهولة أكبر.'
    },
    hi: {
      title: 'वार्म-अप: मिशन के शब्द',
      seconds: 45,
      questions: [
        { q: 'कैथोलिक चर्च और स्पेन द्वारा अपनी आस्था सिखाने के लिए बनाई गई बस्ती है एक…', choices: ['मिशन', 'प्रेसिडियो', 'उपनिवेश'], a: 0 },
        { q: 'सैनिकों वाला किला, जो किसी मिशन की रक्षा के लिए बनाया गया, है एक…', choices: ['व्यापार मार्ग', 'प्रेसिडियो', 'सीमांत'], a: 1 },
        { q: 'जो लोग टेक्सास में पहले से रहते थे, जैसे कैडो और कोआविल्टेकन, वे हैं…', choices: ['मिशनरी', 'अमेरिकी भारतीय राष्ट्र', 'बसने वाले'], a: 1 },
        { q: 'नदी, झरना या नाला जिसकी बस्ती को पीने और खेती के लिए ज़रूरत थी, है एक…', choices: ['जल स्रोत', 'हितधारक', 'उपनिवेश'], a: 0 }
      ],
      takeaway: 'इन चार शब्दों को जान लें तो शेष इकाई पढ़ना बहुत आसान हो जाएगा।'
    },
    ur: {
      title: 'وارم اپ: مشن کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'کیتھولک چرچ اور اسپین کی جانب سے اپنے عقیدے کی تعلیم کے لیے بنائی گئی بستی ہے ایک…', choices: ['مشن', 'پریسیڈیو', 'نوآبادی'], a: 0 },
        { q: 'سپاہیوں والا قلعہ، جو کسی مشن کی حفاظت کے لیے بنایا گیا، ہے ایک…', choices: ['تجارتی راستہ', 'پریسیڈیو', 'سرحدی علاقہ'], a: 1 },
        { q: 'جو لوگ ٹیکساس میں پہلے سے رہتے تھے، جیسے کیڈو اور کواویلٹیکن، وہ ہیں…', choices: ['مبلغین', 'امریکی انڈین اقوام', 'آباد کار'], a: 1 },
        { q: 'دریا، چشمہ یا نالہ جس کی بستی کو پینے اور کھیتی کے لیے ضرورت تھی، ہے ایک…', choices: ['پانی کا ذریعہ', 'اسٹیک ہولڈر', 'نوآبادی'], a: 0 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو باقی اکائی پڑھنا بہت آسان ہو جائے گا۔'
    },
    zh: {
      title: '热身：传教区词汇',
      seconds: 45,
      questions: [
        { q: '由天主教会和西班牙建立、用来传授信仰的定居点是…', choices: ['传教区', '要塞（presidio）', '殖民地'], a: 0 },
        { q: '驻有士兵、为保护传教区而建的堡垒是…', choices: ['贸易路线', '要塞（presidio）', '边疆'], a: 1 },
        { q: '早已生活在得克萨斯的民族，如卡多人和科阿韦尔特坎人，是…', choices: ['传教士', '美洲印第安民族', '移居者'], a: 1 },
        { q: '定居点用来饮用和耕种所需的河流、泉水或溪流是…', choices: ['水源', '利益相关者', '殖民地'], a: 0 }
      ],
      takeaway: '掌握这四个词，本单元其余内容读起来就轻松多了。'
    } }
  },
  {
    id: 'g4-the-mission-surface-exit', grade: 4, unit: 'the-mission',
    unitTitle: "The Mission Decision, 1718 — Where Should It Stand?", phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.15(c)(2)(C), (c)(9)(A)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['mission', 'a settlement built to teach the Catholic faith'],
        ['presidio', 'a fort with soldiers that protects a mission'],
        ['missionary', 'a person sent to teach the Catholic faith'],
        ['stakeholder', 'anyone affected by a decision'],
        ['trade route', 'a path people used to carry and exchange goods']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['misión', 'un asentamiento construido para enseñar la fe católica'],
        ['presidio', 'un fuerte con soldados que protege una misión'],
        ['misionero', 'una persona enviada a enseñar la fe católica'],
        ['parte interesada', 'cualquiera afectado por una decisión'],
        ['ruta comercial', 'un camino que la gente usaba para llevar e intercambiar bienes']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['khu truyền giáo', 'một khu định cư được xây để truyền dạy đức tin Công giáo'],
        ['đồn lũy', 'một pháo đài có lính bảo vệ khu truyền giáo'],
        ['nhà truyền giáo', 'một người được cử đi truyền dạy đức tin Công giáo'],
        ['bên liên quan', 'bất kỳ ai chịu ảnh hưởng bởi một quyết định'],
        ['tuyến đường buôn bán', 'một con đường người ta dùng để vận chuyển và trao đổi hàng hóa']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['البعثة التبشيرية', 'مستوطنة بُنيت لتعليم العقيدة الكاثوليكية'],
        ['الحصن (بريسيديو)', 'حصن فيه جنود يحمي البعثة'],
        ['المبشّر', 'شخص أُرسِل لتعليم العقيدة الكاثوليكية'],
        ['الطرف المعني', 'أي شخص يتأثر بقرار ما'],
        ['الطريق التجاري', 'مسار كان الناس يستخدمونه لنقل البضائع وتبادلها']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['मिशन', 'कैथोलिक आस्था सिखाने के लिए बनाई गई बस्ती'],
        ['प्रेसिडियो', 'सैनिकों वाला किला जो मिशन की रक्षा करता है'],
        ['मिशनरी', 'कैथोलिक आस्था सिखाने के लिए भेजा गया व्यक्ति'],
        ['हितधारक', 'कोई भी जो किसी निर्णय से प्रभावित होता है'],
        ['व्यापार मार्ग', 'एक रास्ता जिसे लोग सामान ले जाने और बदलने के लिए इस्तेमाल करते थे']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['مشن', 'کیتھولک عقیدہ سکھانے کے لیے بنائی گئی بستی'],
        ['پریسیڈیو', 'سپاہیوں والا قلعہ جو مشن کی حفاظت کرتا ہے'],
        ['مبلغ', 'کیتھولک عقیدہ سکھانے کے لیے بھیجا گیا شخص'],
        ['اسٹیک ہولڈر', 'کوئی بھی جو کسی فیصلے سے متاثر ہوتا ہے'],
        ['تجارتی راستہ', 'ایک راستہ جسے لوگ سامان لے جانے اور تبادلے کے لیے استعمال کرتے تھے']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['传教区', '为传授天主教信仰而建立的定居点'],
        ['要塞（presidio）', '驻有士兵、保护传教区的堡垒'],
        ['传教士', '被派去传授天主教信仰的人'],
        ['利益相关者', '受某项决定影响的任何人'],
        ['贸易路线', '人们用来运送和交换货物的路径']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 4 · The Mission Decision 1718 · DEEP ───────── */
  {
    id: 'g4-the-mission-deep-entry', grade: 4, unit: 'the-mission',
    unitTitle: "The Mission Decision, 1718 — Where Should It Stand?", phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.15(c)(7)(A–B), (c)(8)(A–C)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: what makes a site good?',
      items: [
        { before: 'A steady river close by means the site has good', after: 'for drinking and farming.', choices: ['water', 'defense', 'trade'], a: 0 },
        { before: 'A spot a presidio can protect gives the mission good', after: 'against rivals.', choices: ['farmland', 'defense', 'water'], a: 1 },
        { before: 'A mission could only stand where the American Indian people of the land allowed it, so', after: 'can outweigh even good water.', choices: ['relationships', 'rivers', 'soil'], a: 0 }
      ],
      takeaway: 'Water, farmland, defense, trade, and relationships — weigh all five, not just one.'
    },
    es: {
      title: 'Calentamiento: ¿qué hace bueno un lugar?',
      items: [
        { before: 'Un río constante cerca significa que el lugar tiene buena', after: 'para beber y cultivar.', choices: ['agua', 'defensa', 'comercio'], a: 0 },
        { before: 'Un sitio que un presidio pueda proteger le da a la misión buena', after: 'contra los rivales.', choices: ['tierra de cultivo', 'defensa', 'agua'], a: 1 },
        { before: 'Una misión solo podía existir donde los pueblos indígenas de la tierra lo permitían, así que las', after: 'pueden pesar más que incluso el buen agua.', choices: ['relaciones', 'ríos', 'tierra'], a: 0 }
      ],
      takeaway: 'Agua, tierra de cultivo, defensa, comercio y relaciones: sopesa las cinco, no solo una.'
    },
    vi: {
      title: 'Khởi động: điều gì làm nên một địa điểm tốt?',
      items: [
        { before: 'Một dòng sông ổn định ở gần nghĩa là địa điểm có nguồn', after: 'tốt để uống và trồng trọt.', choices: ['nước', 'phòng thủ', 'buôn bán'], a: 0 },
        { before: 'Một vị trí mà đồn lũy có thể bảo vệ cho khu truyền giáo khả năng', after: 'tốt trước các đối thủ.', choices: ['đất canh tác', 'phòng thủ', 'nước'], a: 1 },
        { before: 'Khu truyền giáo chỉ tồn tại được ở nơi người bản địa của vùng đất cho phép, nên', after: 'có thể quan trọng hơn cả nguồn nước tốt.', choices: ['mối quan hệ', 'sông ngòi', 'đất đai'], a: 0 }
      ],
      takeaway: 'Nước, đất canh tác, phòng thủ, buôn bán và mối quan hệ — hãy cân nhắc cả năm, không chỉ một.'
    },
    ar: {
      title: 'تهيئة: ما الذي يجعل الموقع جيدًا؟',
      items: [
        { before: 'وجود نهر ثابت قريب يعني أن الموقع فيه', after: 'جيدة للشرب والزراعة.', choices: ['مياه', 'دفاع', 'تجارة'], a: 0 },
        { before: 'الموقع الذي يستطيع الحصن حمايته يمنح البعثة', after: 'جيدًا ضد المنافسين.', choices: ['أرضًا زراعية', 'دفاعًا', 'مياهًا'], a: 1 },
        { before: 'لم تكن البعثة تقوم إلا حيث يسمح بها سكان الأرض من الهنود الأمريكيين، لذا فإن', after: 'قد تفوق حتى المياه الجيدة.', choices: ['العلاقات', 'الأنهار', 'التربة'], a: 0 }
      ],
      takeaway: 'المياه والأرض الزراعية والدفاع والتجارة والعلاقات — وازِن الخمسة، لا واحدًا فقط.'
    },
    hi: {
      title: 'वार्म-अप: कौन-सी जगह अच्छी होती है?',
      items: [
        { before: 'पास में एक स्थिर नदी का मतलब है कि जगह पर पीने और खेती के लिए अच्छा', after: 'है।', choices: ['पानी', 'रक्षा', 'व्यापार'], a: 0 },
        { before: 'जिस जगह की प्रेसिडियो रक्षा कर सके, वह मिशन को प्रतिद्वंद्वियों के विरुद्ध अच्छी', after: 'देती है।', choices: ['कृषि भूमि', 'रक्षा', 'पानी'], a: 1 },
        { before: 'मिशन केवल वहीं टिक सकता था जहाँ भूमि के अमेरिकी भारतीय लोग अनुमति देते, इसलिए', after: 'अच्छे पानी से भी अधिक भारी पड़ सकते हैं।', choices: ['रिश्ते', 'नदियाँ', 'मिट्टी'], a: 0 }
      ],
      takeaway: 'पानी, कृषि भूमि, रक्षा, व्यापार और रिश्ते — पाँचों को तौलें, सिर्फ एक को नहीं।'
    },
    ur: {
      title: 'وارم اپ: کون سی جگہ اچھی ہوتی ہے؟',
      items: [
        { before: 'قریب ایک مستقل دریا کا مطلب ہے کہ جگہ پر پینے اور کھیتی کے لیے اچھا', after: 'ہے۔', choices: ['پانی', 'دفاع', 'تجارت'], a: 0 },
        { before: 'جس جگہ کی پریسیڈیو حفاظت کر سکے، وہ مشن کو حریفوں کے خلاف اچھا', after: 'دیتی ہے۔', choices: ['کاشتکاری کی زمین', 'دفاع', 'پانی'], a: 1 },
        { before: 'مشن صرف وہیں قائم رہ سکتا تھا جہاں زمین کے امریکی انڈین لوگ اجازت دیتے، اس لیے', after: 'اچھے پانی سے بھی زیادہ بھاری پڑ سکتے ہیں۔', choices: ['تعلقات', 'دریا', 'مٹی'], a: 0 }
      ],
      takeaway: 'پانی، کاشتکاری کی زمین، دفاع، تجارت اور تعلقات — پانچوں کو تولیں، صرف ایک کو نہیں۔'
    },
    zh: {
      title: '热身：什么样的地点才算好？',
      items: [
        { before: '附近有一条稳定的河流，意味着该地点拥有良好的', after: '，可供饮用和耕种。', choices: ['水源', '防御', '贸易'], a: 0 },
        { before: '要塞能够保护的地点，为传教区提供了良好的', after: '，以抵御对手。', choices: ['农田', '防御', '水源'], a: 1 },
        { before: '传教区只能立于当地美洲印第安人允许的地方，因此', after: '有时比良好的水源还重要。', choices: ['关系', '河流', '土壤'], a: 0 }
      ],
      takeaway: '水源、农田、防御、贸易和关系——五者都要权衡，而不只是其中一个。'
    } }
  },
  {
    id: 'g4-the-mission-deep-exit', grade: 4, unit: 'the-mission',
    unitTitle: "The Mission Decision, 1718 — Where Should It Stand?", phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.15(c)(7)(A–B), (c)(8)(A–C)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort each clue',
      cats: ['Points to a GOOD location', 'Points to a POOR location'],
      items: [
        { t: 'A steady river is close by', c: 0 },
        { t: 'The soil is good and land is flat to farm', c: 0 },
        { t: 'The people of the land are willing to allow it', c: 0 },
        { t: 'Water is far away or floods often', c: 1 },
        { t: 'The spot is open and hard to defend', c: 1 },
        { t: 'The people already there do not want it', c: 1 }
      ],
      takeaway: 'Sorting clues into good vs poor is the concept map behind where the mission should stand.'
    },
    es: {
      title: 'Salida: clasifica cada pista',
      cats: ['Indica un BUEN lugar', 'Indica un MAL lugar'],
      items: [
        { t: 'Un río constante está cerca', c: 0 },
        { t: 'El suelo es bueno y la tierra es plana para cultivar', c: 0 },
        { t: 'Los pueblos de la tierra están dispuestos a permitirlo', c: 0 },
        { t: 'El agua está lejos o se inunda a menudo', c: 1 },
        { t: 'El lugar es abierto y difícil de defender', c: 1 },
        { t: 'Los pueblos que ya están allí no lo quieren', c: 1 }
      ],
      takeaway: 'Clasificar pistas en bueno vs malo es el mapa conceptual detrás de dónde debe estar la misión.'
    },
    vi: {
      title: 'Phiếu ra: phân loại từng manh mối',
      cats: ['Chỉ ra địa điểm TỐT', 'Chỉ ra địa điểm KÉM'],
      items: [
        { t: 'Một dòng sông ổn định ở gần', c: 0 },
        { t: 'Đất tốt và bằng phẳng để canh tác', c: 0 },
        { t: 'Người dân của vùng đất sẵn lòng cho phép', c: 0 },
        { t: 'Nước ở xa hoặc thường xuyên ngập lụt', c: 1 },
        { t: 'Vị trí trống trải và khó phòng thủ', c: 1 },
        { t: 'Người đã sống ở đó không muốn có nó', c: 1 }
      ],
      takeaway: 'Phân loại manh mối thành tốt và kém chính là sơ đồ khái niệm cho việc khu truyền giáo nên đặt ở đâu.'
    },
    ar: {
      title: 'الخروج: صنّف كل دليل',
      cats: ['يشير إلى موقع جيد', 'يشير إلى موقع سيّئ'],
      items: [
        { t: 'يوجد نهر ثابت قريب', c: 0 },
        { t: 'التربة جيدة والأرض مستوية للزراعة', c: 0 },
        { t: 'سكان الأرض على استعداد للسماح به', c: 0 },
        { t: 'المياه بعيدة أو تفيض كثيرًا', c: 1 },
        { t: 'الموقع مكشوف ويصعب الدفاع عنه', c: 1 },
        { t: 'السكان الموجودون هناك لا يريدونه', c: 1 }
      ],
      takeaway: 'تصنيف الأدلة إلى جيد وسيّئ هو الخريطة المفاهيمية وراء أين ينبغي أن تقوم البعثة.'
    },
    hi: {
      title: 'निकास: हर सुराग को छाँटें',
      cats: ['अच्छी जगह की ओर इशारा', 'खराब जगह की ओर इशारा'],
      items: [
        { t: 'पास में एक स्थिर नदी है', c: 0 },
        { t: 'मिट्टी अच्छी है और खेती के लिए ज़मीन समतल है', c: 0 },
        { t: 'भूमि के लोग इसे अनुमति देने को तैयार हैं', c: 0 },
        { t: 'पानी दूर है या अक्सर बाढ़ आती है', c: 1 },
        { t: 'जगह खुली है और रक्षा करना कठिन है', c: 1 },
        { t: 'जो लोग पहले से वहाँ हैं वे इसे नहीं चाहते', c: 1 }
      ],
      takeaway: 'सुरागों को अच्छे बनाम खराब में छाँटना ही यह तय करने का अवधारणा मानचित्र है कि मिशन कहाँ हो।'
    },
    ur: {
      title: 'اخراج: ہر سراغ کو چھانٹیں',
      cats: ['اچھی جگہ کی نشاندہی', 'خراب جگہ کی نشاندہی'],
      items: [
        { t: 'قریب ایک مستقل دریا ہے', c: 0 },
        { t: 'مٹی اچھی ہے اور کھیتی کے لیے زمین ہموار ہے', c: 0 },
        { t: 'زمین کے لوگ اس کی اجازت دینے کو تیار ہیں', c: 0 },
        { t: 'پانی دور ہے یا اکثر سیلاب آتا ہے', c: 1 },
        { t: 'جگہ کھلی ہے اور دفاع کرنا مشکل ہے', c: 1 },
        { t: 'جو لوگ پہلے سے وہاں ہیں وہ اسے نہیں چاہتے', c: 1 }
      ],
      takeaway: 'سراغوں کو اچھے بمقابلہ خراب میں چھانٹنا ہی یہ طے کرنے کا تصوراتی نقشہ ہے کہ مشن کہاں ہو۔'
    },
    zh: {
      title: '离场：把每条线索分类',
      cats: ['指向好地点', '指向差地点'],
      items: [
        { t: '附近有一条稳定的河流', c: 0 },
        { t: '土壤肥沃、土地平坦可耕种', c: 0 },
        { t: '当地的人们愿意允许它', c: 0 },
        { t: '水源遥远或经常泛滥', c: 1 },
        { t: '地点开阔、难以防御', c: 1 },
        { t: '已在那里的人们不想要它', c: 1 }
      ],
      takeaway: '把线索分成好与差，就是决定传教区应立于何处的概念图。'
    } }
  },

  /* ───────── Grade 4 · The Mission Decision 1718 · TRANSFER ───────── */
  {
    id: 'g4-the-mission-transfer-entry', grade: 4, unit: 'the-mission',
    unitTitle: "The Mission Decision, 1718 — Where Should It Stand?", phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.15(c)(22)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving steps',
      seconds: 45,
      questions: [
        { q: 'The FIRST thing an advisor does is…', choices: ['pick a spot', 'define the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing where the mission goes, a good advisor…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other stakeholders'], a: 0 },
        { q: 'A strong recommendation is backed by…', choices: ['a loud voice', 'claim + evidence', 'only feelings'], a: 1 },
        { q: 'After choosing where to build, you should…', choices: ['forget it', 'evaluate how well it worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Define → gather → weigh → decide → defend → evaluate. That is §113.15(c)(22)(B).'
    },
    es: {
      title: 'Calentamiento: los pasos para resolver problemas',
      seconds: 45,
      questions: [
        { q: 'Lo PRIMERO que hace un asesor es…', choices: ['elegir un lugar', 'definir el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir dónde va la misión, un buen asesor…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora a otras partes interesadas'], a: 0 },
        { q: 'Una recomendación sólida se respalda con…', choices: ['una voz fuerte', 'afirmación + evidencia', 'solo sentimientos'], a: 1 },
        { q: 'Después de elegir dónde construir, deberías…', choices: ['olvidarlo', 'evaluar qué tan bien funcionó', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Definir → reunir → sopesar → decidir → defender → evaluar. Eso es §113.15(c)(22)(B).'
    },
    vi: {
      title: 'Khởi động: các bước giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Điều ĐẦU TIÊN một cố vấn làm là…', choices: ['chọn một địa điểm', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn nơi đặt khu truyền giáo, một cố vấn giỏi sẽ…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua các bên liên quan khác'], a: 0 },
        { q: 'Một khuyến nghị vững chắc được củng cố bằng…', choices: ['một giọng nói to', 'luận điểm + bằng chứng', 'chỉ cảm xúc'], a: 1 },
        { q: 'Sau khi chọn nơi xây dựng, bạn nên…', choices: ['quên nó đi', 'đánh giá xem nó hiệu quả ra sao', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → quyết định → bảo vệ → đánh giá. Đó là §113.15(c)(22)(B).'
    },
    ar: {
      title: 'تهيئة: خطوات حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'أول ما يفعله المستشار هو…', choices: ['اختيار موقع', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل اختيار مكان البعثة، يقوم المستشار الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل الأطراف المعنية الأخرى'], a: 0 },
        { q: 'التوصية القوية تُدعم بـ…', choices: ['صوت عالٍ', 'ادعاء + دليل', 'المشاعر فقط'], a: 1 },
        { q: 'بعد اختيار مكان البناء، ينبغي أن…', choices: ['تنساه', 'تقيّم مدى نجاحه', 'تخفي المفاضلات'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن ← قرِّر ← دافِع ← قيِّم. ذلك هو §113.15(c)(22)(B).'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान के चरण',
      seconds: 45,
      questions: [
        { q: 'सलाहकार सबसे पहले जो करता है, वह है…', choices: ['एक जगह चुनना', 'समस्या को परिभाषित करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'मिशन कहाँ हो, यह चुनने से पहले एक अच्छा सलाहकार…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य हितधारकों को अनदेखा करता है'], a: 0 },
        { q: 'एक मजबूत सिफ़ारिश का आधार होता है…', choices: ['एक ऊँची आवाज़', 'दावा + साक्ष्य', 'केवल भावनाएँ'], a: 1 },
        { q: 'कहाँ बनाना है यह चुनने के बाद, आपको चाहिए…', choices: ['उसे भूल जाना', 'यह आँकना कि वह कितना अच्छा रहा', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → निर्णय लें → बचाव करें → आँकें। यही §113.15(c)(22)(B) है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کے مراحل',
      seconds: 45,
      questions: [
        { q: 'مشیر سب سے پہلے جو کرتا ہے، وہ ہے…', choices: ['ایک جگہ چننا', 'مسئلے کو متعین کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'مشن کہاں ہو، یہ چننے سے پہلے ایک اچھا مشیر…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دوسرے اسٹیک ہولڈرز کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'ایک مضبوط سفارش کی بنیاد ہوتی ہے…', choices: ['ایک بلند آواز', 'دعویٰ + ثبوت', 'صرف جذبات'], a: 1 },
        { q: 'کہاں بنانا ہے یہ چننے کے بعد، آپ کو چاہیے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ وہ کتنا کارگر رہا', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← فیصلہ کریں ← دفاع کریں ← جانچیں۔ یہی §113.15(c)(22)(B) ہے۔'
    },
    zh: {
      title: '热身：解决问题的步骤',
      seconds: 45,
      questions: [
        { q: '顾问首先要做的是…', choices: ['挑选一个地点', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在选定传教区选址之前，优秀的顾问会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视其他利益相关者'], a: 0 },
        { q: '有力的建议背后有…', choices: ['大嗓门', '主张 + 证据', '只有感受'], a: 1 },
        { q: '选定建造地点之后，你应当…', choices: ['把它忘掉', '评估它的效果如何', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 决定 → 辩护 → 评估。这就是 §113.15(c)(22)(B)。'
    } }
  },
  {
    id: 'g4-the-mission-transfer-exit', grade: 4, unit: 'the-mission',
    unitTitle: "The Mission Decision, 1718 — Where Should It Stand?", phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.15(c)(22)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim + evidence',
      items: [
        { before: 'A recommendation without', after: 'is just an opinion.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: 'When stakeholders disagree, each should support their view with', after: 'from the sources.', choices: ['evidence', 'volume', 'guesses'], a: 0 },
        { before: 'Naming the', after: 'of your chosen site shows you thought it through.', choices: ['trade-offs', 'colors', 'vocabulary'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs = thinking like a historian and a citizen.'
    },
    es: {
      title: 'Salida: afirmación + evidencia',
      items: [
        { before: 'Una recomendación sin', after: 'es solo una opinión.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Cuando las partes interesadas no están de acuerdo, cada una debe respaldar su postura con', after: 'de las fuentes.', choices: ['evidencia', 'volumen', 'suposiciones'], a: 0 },
        { before: 'Nombrar las', after: 'del lugar que elegiste muestra que lo pensaste a fondo.', choices: ['concesiones', 'colores', 'vocabulario'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones = pensar como un historiador y un ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm + bằng chứng',
      items: [
        { before: 'Một khuyến nghị không có', after: 'thì chỉ là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Khi các bên liên quan bất đồng, mỗi bên nên củng cố quan điểm của mình bằng', after: 'từ các nguồn.', choices: ['bằng chứng', 'âm lượng', 'phỏng đoán'], a: 0 },
        { before: 'Nêu ra những', after: 'của địa điểm bạn chọn cho thấy bạn đã cân nhắc kỹ.', choices: ['đánh đổi', 'màu sắc', 'từ vựng'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi = tư duy như một nhà sử học và một công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء + دليل',
      items: [
        { before: 'التوصية بلا', after: 'ما هي إلا رأي.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'عندما تختلف الأطراف المعنية، ينبغي أن يدعم كلٌّ منها رأيه بـ', after: 'من المصادر.', choices: ['أدلة', 'علوّ الصوت', 'تخمينات'], a: 0 },
        { before: 'إن تسمية', after: 'الخاصة بالموقع الذي اخترته تُظهر أنك فكّرت فيه مليًّا.', choices: ['المفاضلات', 'الألوان', 'المفردات'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات = التفكير كمؤرّخ ومواطن.'
    },
    hi: {
      title: 'निकास: दावा + साक्ष्य',
      items: [
        { before: 'बिना', after: 'के सिफ़ारिश महज़ एक राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: 'जब हितधारक असहमत हों, तो हर एक को अपने विचार का समर्थन करना चाहिए', after: 'स्रोतों से।', choices: ['साक्ष्य से', 'आवाज़ की ऊँचाई से', 'अनुमानों से'], a: 0 },
        { before: 'अपने चुने हुए स्थान की', after: 'का नाम लेना दिखाता है कि आपने उसे गहराई से सोचा।', choices: ['समझौतों', 'रंगों', 'शब्दावली'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते = एक इतिहासकार और एक नागरिक की तरह सोचना।'
    },
    ur: {
      title: 'اخراج: دعویٰ + ثبوت',
      items: [
        { before: 'بغیر', after: 'کے سفارش محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: 'جب اسٹیک ہولڈرز اختلاف کریں، تو ہر ایک کو اپنے نقطہ نظر کی حمایت کرنی چاہیے', after: 'مآخذ سے۔', choices: ['ثبوت سے', 'آواز کی بلندی سے', 'اندازوں سے'], a: 0 },
        { before: 'اپنی چنی ہوئی جگہ کے', after: 'کا نام لینا ظاہر کرتا ہے کہ آپ نے اسے سوچ سمجھ کر پرکھا۔', choices: ['سمجھوتوں', 'رنگوں', 'الفاظ'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے = ایک مؤرخ اور ایک شہری کی طرح سوچنا۔'
    },
    zh: {
      title: '离场：主张 + 证据',
      items: [
        { before: '没有', after: '的建议只是一种意见。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '当利益相关者意见不合时，各方都应当支撑自己的观点，用', after: '来自资料。', choices: ['证据', '音量', '猜测'], a: 0 },
        { before: '说出你所选地点的', after: '，表明你已经把它想透彻了。', choices: ['取舍', '颜色', '词汇'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍 = 像史学家和公民一样思考。'
    } }
  }

]);
