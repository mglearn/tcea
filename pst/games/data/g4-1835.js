/* PST Arcade — ticket registry (Grade 4 · 1835 unit). Each ticket is retrieval practice
   for one unit + phase. English-first; other languages carried inline per ticket
   (ticket.i18n[lang]). The engine (arcade.js) reads window.PST_TICKETS. Nothing is stored
   or sent. Same shape as g5-immigration.js:
   {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 4 · 1835 · SURFACE ───────── */
  {
    id: 'g4-1835-surface-entry', grade: 4, unit: '1835',
    unitTitle: '1835 — What Should Our Family Do?', phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.15(c)(19)(A)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: words of 1835 Texas',
      seconds: 45,
      questions: [
        { q: 'A settlement of people ruled by a faraway government is a…', choices: ['colony', 'mission', 'republic'], a: 0 },
        { q: 'A person given permission to bring in and settle new families was an…', choices: ['empresario', 'stakeholder', 'Texian'], a: 0 },
        { q: 'A Texan of Mexican or Spanish heritage is a…', choices: ['Texian', 'Tejano', 'empresario'], a: 1 },
        { q: 'A big, often forceful change in who governs is a…', choices: ['annexation', 'colony', 'revolution'], a: 2 }
      ],
      takeaway: 'Know these words and you can follow the whole story from missions to 1835.'
    },
    es: {
      title: 'Calentamiento: palabras del Texas de 1835',
      seconds: 45,
      questions: [
        { q: 'Un asentamiento de personas gobernado por un gobierno lejano es una…', choices: ['colonia', 'misión', 'república'], a: 0 },
        { q: 'La persona autorizada a traer y asentar nuevas familias era un…', choices: ['empresario', 'parte interesada', 'texano (Texian)'], a: 0 },
        { q: 'Un texano de herencia mexicana o española es un…', choices: ['texano (Texian)', 'tejano', 'empresario'], a: 1 },
        { q: 'Un cambio grande, a menudo por la fuerza, en quién gobierna es una…', choices: ['anexión', 'colonia', 'revolución'], a: 2 }
      ],
      takeaway: 'Domina estas palabras y podrás seguir toda la historia, de las misiones a 1835.'
    },
    vi: {
      title: 'Khởi động: từ vựng về Texas năm 1835',
      seconds: 45,
      questions: [
        { q: 'Một khu định cư của người dân do một chính quyền ở xa cai trị là một…', choices: ['thuộc địa', 'khu truyền giáo', 'nền cộng hòa'], a: 0 },
        { q: 'Người được phép đưa vào và định cư những gia đình mới là một…', choices: ['empresario (người chiêu mộ)', 'bên liên quan', 'Texian (người định cư nói tiếng Anh)'], a: 0 },
        { q: 'Một người Texas gốc Mexico hoặc Tây Ban Nha là một…', choices: ['Texian', 'Tejano', 'empresario'], a: 1 },
        { q: 'Một sự thay đổi lớn, thường bằng vũ lực, về việc ai cai trị là một cuộc…', choices: ['sáp nhập', 'thuộc địa', 'cách mạng'], a: 2 }
      ],
      takeaway: 'Nắm được các từ này là bạn theo dõi được cả câu chuyện, từ các khu truyền giáo đến năm 1835.'
    },
    ar: {
      title: 'تهيئة: كلمات تكساس عام 1835',
      seconds: 45,
      questions: [
        { q: 'مستوطنة من الناس تحكمها حكومة بعيدة هي…', choices: ['مستعمرة', 'إرسالية', 'جمهورية'], a: 0 },
        { q: 'الشخص المأذون له بجلب عائلات جديدة وتوطينها كان…', choices: ['متعهّد توطين (إمبريساريو)', 'صاحب مصلحة', 'تكسيان'], a: 0 },
        { q: 'التكساسي من أصل مكسيكي أو إسباني هو…', choices: ['تكسيان', 'تيخانو', 'متعهّد توطين'], a: 1 },
        { q: 'التغيير الكبير، وغالبًا بالقوة، في مَن يحكم هو…', choices: ['ضمّ', 'مستعمرة', 'ثورة'], a: 2 }
      ],
      takeaway: 'أتقن هذه الكلمات وستتابع القصة كاملة من الإرساليات حتى عام 1835.'
    },
    hi: {
      title: 'वार्म-अप: 1835 के टेक्सास के शब्द',
      seconds: 45,
      questions: [
        { q: 'दूर की सरकार द्वारा शासित लोगों की बस्ती है एक…', choices: ['उपनिवेश', 'मिशन', 'गणराज्य'], a: 0 },
        { q: 'नई परिवारों को लाने और बसाने की अनुमति प्राप्त व्यक्ति था एक…', choices: ['एम्प्रेसारियो', 'हितधारक', 'टेक्सियन'], a: 0 },
        { q: 'मैक्सिकन या स्पेनिश विरासत वाला टेक्सासवासी है एक…', choices: ['टेक्सियन', 'तेहानो', 'एम्प्रेसारियो'], a: 1 },
        { q: 'शासन कौन करे, इसमें एक बड़ा, अक्सर बलपूर्वक परिवर्तन है एक…', choices: ['अधिमिलन', 'उपनिवेश', 'क्रांति'], a: 2 }
      ],
      takeaway: 'इन शब्दों को जान लें और आप मिशनों से 1835 तक की पूरी कहानी समझ सकेंगे।'
    },
    ur: {
      title: 'وارم اپ: 1835 کے ٹیکساس کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'دور کی حکومت کے زیرِ حکومت لوگوں کی بستی ہے ایک…', choices: ['نوآبادی', 'مشن', 'جمہوریہ'], a: 0 },
        { q: 'نئے خاندانوں کو لانے اور آباد کرنے کی اجازت رکھنے والا شخص تھا ایک…', choices: ['ایمپریساریو', 'اسٹیک ہولڈر', 'ٹیکسیئن'], a: 0 },
        { q: 'میکسیکی یا ہسپانوی ورثے والا ٹیکساسی ہے ایک…', choices: ['ٹیکسیئن', 'تیہانو', 'ایمپریساریو'], a: 1 },
        { q: 'کون حکومت کرے، اس میں ایک بڑی، اکثر زبردستی تبدیلی ہے ایک…', choices: ['الحاق', 'نوآبادی', 'انقلاب'], a: 2 }
      ],
      takeaway: 'ان الفاظ کو جان لیں تو آپ مشنوں سے 1835 تک کی پوری کہانی سمجھ سکیں گے۔'
    },
    zh: {
      title: '热身：1835 年得克萨斯的词汇',
      seconds: 45,
      questions: [
        { q: '由遥远政府统治的人们聚居地称为…', choices: ['殖民地', '传教区', '共和国'], a: 0 },
        { q: '获准引进并安置新家庭的人称为…', choices: ['招募人（empresario）', '利益相关者', '得克萨斯移民（Texian）'], a: 0 },
        { q: '拥有墨西哥或西班牙血统的得州人称为…', choices: ['得克萨斯移民（Texian）', '特哈诺（Tejano）', '招募人'], a: 1 },
        { q: '统治者归属发生的、常常是强力的巨大改变称为…', choices: ['并入', '殖民地', '革命'], a: 2 }
      ],
      takeaway: '掌握这些词，你就能读懂从传教区到 1835 年的整个故事。'
    } }
  },
  {
    id: 'g4-1835-surface-exit', grade: 4, unit: '1835',
    unitTitle: '1835 — What Should Our Family Do?', phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.15(c)(19)(A)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['empresario', 'a person given permission to settle new families'],
        ['Tejano', 'a Texan of Mexican or Spanish heritage'],
        ['Texian', 'an English-speaking colonist in Mexican Texas'],
        ['independence', 'being free to govern yourself'],
        ['stakeholder', 'anyone affected by a decision']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['empresario', 'persona autorizada a asentar nuevas familias'],
        ['tejano', 'un texano de herencia mexicana o española'],
        ['texano (Texian)', 'colono de habla inglesa en el Texas mexicano'],
        ['independencia', 'ser libre para gobernarse a sí mismo'],
        ['parte interesada', 'cualquiera afectado por una decisión']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['empresario', 'người được phép định cư những gia đình mới'],
        ['Tejano', 'một người Texas gốc Mexico hoặc Tây Ban Nha'],
        ['Texian', 'người định cư nói tiếng Anh ở Texas thuộc Mexico'],
        ['độc lập', 'được tự do tự cai quản mình'],
        ['bên liên quan', 'bất kỳ ai bị ảnh hưởng bởi một quyết định']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['متعهّد توطين (إمبريساريو)', 'شخص مأذون له بتوطين عائلات جديدة'],
        ['تيخانو', 'تكساسي من أصل مكسيكي أو إسباني'],
        ['تكسيان', 'مستوطن ناطق بالإنجليزية في تكساس المكسيكية'],
        ['الاستقلال', 'أن تكون حرًّا في حكم نفسك'],
        ['صاحب المصلحة', 'أي شخص يتأثر بقرار']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['एम्प्रेसारियो', 'नई परिवारों को बसाने की अनुमति प्राप्त व्यक्ति'],
        ['तेहानो', 'मैक्सिकन या स्पेनिश विरासत वाला टेक्सासवासी'],
        ['टेक्सियन', 'मैक्सिकन टेक्सास में अंग्रेज़ी-भाषी उपनिवेशी'],
        ['स्वतंत्रता', 'स्वयं शासन करने के लिए स्वतंत्र होना'],
        ['हितधारक', 'निर्णय से प्रभावित कोई भी व्यक्ति']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['ایمپریساریو', 'نئے خاندانوں کو آباد کرنے کی اجازت رکھنے والا شخص'],
        ['تیہانو', 'میکسیکی یا ہسپانوی ورثے والا ٹیکساسی'],
        ['ٹیکسیئن', 'میکسیکی ٹیکساس میں انگریزی بولنے والا نوآبادکار'],
        ['آزادی', 'خود پر حکومت کرنے میں آزاد ہونا'],
        ['اسٹیک ہولڈر', 'فیصلے سے متاثر ہونے والا کوئی بھی شخص']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['招募人（empresario）', '获准安置新家庭的人'],
        ['特哈诺（Tejano）', '拥有墨西哥或西班牙血统的得州人'],
        ['得克萨斯移民（Texian）', '墨属得克萨斯的英语殖民者'],
        ['独立', '能够自由地自我治理'],
        ['利益相关者', '受某项决定影响的任何人']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 4 · 1835 · DEEP ───────── */
  {
    id: 'g4-1835-deep-entry', grade: 4, unit: '1835',
    unitTitle: '1835 — What Should Our Family Do?', phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.15(c)(3)(A), (c)(12)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: cause & effect of rising tension',
      items: [
        { before: 'The Law of April 6, 1830 was a', after: 'that raised tension in Texas.', choices: ['cause', 'effect', 'region'], a: 0 },
        { before: 'Colonists and Tejanos feeling unheard was an', after: 'of the far-off government changing the rules.', choices: ['effect', 'cause', 'source'], a: 0 },
        { before: 'In 1821 Mexico broke free of Spain and became a', after: 'that then invited settlers.', choices: ['colony', 'republic', 'mission'], a: 1 }
      ],
      takeaway: 'Rising tension is a chain of causes and effects. Trace the arrows both ways.'
    },
    es: {
      title: 'Calentamiento: causa y efecto de la tensión creciente',
      items: [
        { before: 'La Ley del 6 de abril de 1830 fue una', after: 'que aumentó la tensión en Texas.', choices: ['causa', 'efecto', 'región'], a: 0 },
        { before: 'Que colonos y tejanos se sintieran ignorados fue un', after: 'de que el gobierno lejano cambiara las reglas.', choices: ['efecto', 'causa', 'fuente'], a: 0 },
        { before: 'En 1821 México se liberó de España y se convirtió en una', after: 'que luego invitó a colonos.', choices: ['colonia', 'república', 'misión'], a: 1 }
      ],
      takeaway: 'La tensión creciente es una cadena de causas y efectos. Sigue las flechas en ambos sentidos.'
    },
    vi: {
      title: 'Khởi động: nguyên nhân & hệ quả của căng thẳng gia tăng',
      items: [
        { before: 'Luật ngày 6 tháng 4 năm 1830 là một', after: 'làm gia tăng căng thẳng ở Texas.', choices: ['nguyên nhân', 'hệ quả', 'vùng miền'], a: 0 },
        { before: 'Việc người định cư và người Tejano cảm thấy không được lắng nghe là một', after: 'của việc chính quyền ở xa thay đổi luật lệ.', choices: ['hệ quả', 'nguyên nhân', 'nguồn tư liệu'], a: 0 },
        { before: 'Năm 1821 Mexico thoát khỏi Tây Ban Nha và trở thành một', after: 'rồi mời gọi người định cư.', choices: ['thuộc địa', 'nền cộng hòa', 'khu truyền giáo'], a: 1 }
      ],
      takeaway: 'Căng thẳng gia tăng là một chuỗi nguyên nhân và hệ quả. Hãy lần theo mũi tên cả hai chiều.'
    },
    ar: {
      title: 'تهيئة: سبب ونتيجة تصاعد التوتر',
      items: [
        { before: 'كان قانون 6 أبريل 1830', after: 'رفع التوتر في تكساس.', choices: ['سببًا', 'نتيجة', 'إقليمًا'], a: 0 },
        { before: 'شعور المستوطنين والتيخانو بأنهم غير مسموعين كان', after: 'لتغيير الحكومة البعيدة للقوانين.', choices: ['نتيجة', 'سببًا', 'مصدرًا'], a: 0 },
        { before: 'في عام 1821 تحرّرت المكسيك من إسبانيا وصارت', after: 'دعت بعدها المستوطنين.', choices: ['مستعمرة', 'جمهورية', 'إرسالية'], a: 1 }
      ],
      takeaway: 'تصاعد التوتر سلسلة من الأسباب والنتائج. تتبّع الأسهم في الاتجاهين.'
    },
    hi: {
      title: 'वार्म-अप: बढ़ते तनाव का कारण और प्रभाव',
      items: [
        { before: '6 अप्रैल 1830 का कानून एक', after: 'था जिसने टेक्सास में तनाव बढ़ाया।', choices: ['कारण', 'प्रभाव', 'क्षेत्र'], a: 0 },
        { before: 'उपनिवेशियों और तेहानो का अनसुना महसूस करना एक', after: 'था, दूर की सरकार द्वारा नियम बदलने का।', choices: ['प्रभाव', 'कारण', 'स्रोत'], a: 0 },
        { before: '1821 में मेक्सिको स्पेन से मुक्त हुआ और बना एक', after: 'जिसने फिर उपनिवेशियों को आमंत्रित किया।', choices: ['उपनिवेश', 'गणराज्य', 'मिशन'], a: 1 }
      ],
      takeaway: 'बढ़ता तनाव कारणों और प्रभावों की एक श्रृंखला है। तीरों को दोनों ओर से देखें।'
    },
    ur: {
      title: 'وارم اپ: بڑھتے تناؤ کا سبب اور اثر',
      items: [
        { before: '6 اپریل 1830 کا قانون ایک', after: 'تھا جس نے ٹیکساس میں تناؤ بڑھایا۔', choices: ['سبب', 'اثر', 'خطہ'], a: 0 },
        { before: 'نوآبادکاروں اور تیہانو کا اَن سنا محسوس کرنا ایک', after: 'تھا، دور کی حکومت کے قوانین بدلنے کا۔', choices: ['اثر', 'سبب', 'ماخذ'], a: 0 },
        { before: '1821 میں میکسیکو اسپین سے آزاد ہوا اور بنا ایک', after: 'جس نے پھر نوآبادکاروں کو دعوت دی۔', choices: ['نوآبادی', 'جمہوریہ', 'مشن'], a: 1 }
      ],
      takeaway: 'بڑھتا تناؤ اسباب اور اثرات کی ایک زنجیر ہے۔ تیروں کو دونوں طرف سے دیکھیں۔'
    },
    zh: {
      title: '热身：紧张升级的因与果',
      items: [
        { before: '1830 年 4 月 6 日法令是一个', after: '，加剧了得克萨斯的紧张。', choices: ['原因', '结果', '地区'], a: 0 },
        { before: '殖民者与特哈诺人感到不被倾听，是一个', after: '，源于遥远政府更改规则。', choices: ['结果', '原因', '史料'], a: 0 },
        { before: '1821 年墨西哥脱离西班牙，成为一个', after: '，随后邀请移民前来。', choices: ['殖民地', '共和国', '传教区'], a: 1 }
      ],
      takeaway: '紧张升级是一条因果链。请顺着箭头两个方向追溯。'
    } }
  },
  {
    id: 'g4-1835-deep-exit', grade: 4, unit: '1835',
    unitTitle: '1835 — What Should Our Family Do?', phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.15(c)(3)(A), (c)(12)(B)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort cause vs. effect',
      cats: ['Cause (built the tension)', 'Effect (what happened)'],
      items: [
        { t: 'Far-off government changing the rules', c: 0 },
        { t: 'The Law of April 6, 1830', c: 0 },
        { t: 'Disagreements over rights, land, and self-government', c: 0 },
        { t: 'Colonists and Tejanos feel unheard', c: 1 },
        { t: 'Anger, smuggling, and protest', c: 1 },
        { t: 'Texas moves toward revolution', c: 1 }
      ],
      takeaway: 'Sorting causes from effects is the concept map behind your claim about 1835.'
    },
    es: {
      title: 'Salida: clasifica causa vs. efecto',
      cats: ['Causa (creó la tensión)', 'Efecto (lo que pasó)'],
      items: [
        { t: 'Gobierno lejano que cambia las reglas', c: 0 },
        { t: 'La Ley del 6 de abril de 1830', c: 0 },
        { t: 'Desacuerdos sobre derechos, tierra y autogobierno', c: 0 },
        { t: 'Colonos y tejanos se sienten ignorados', c: 1 },
        { t: 'Enojo, contrabando y protesta', c: 1 },
        { t: 'Texas avanza hacia la revolución', c: 1 }
      ],
      takeaway: 'Clasificar causas y efectos es el mapa conceptual detrás de tu afirmación sobre 1835.'
    },
    vi: {
      title: 'Phiếu ra: phân loại nguyên nhân và hệ quả',
      cats: ['Nguyên nhân (gây căng thẳng)', 'Hệ quả (điều đã xảy ra)'],
      items: [
        { t: 'Chính quyền ở xa thay đổi luật lệ', c: 0 },
        { t: 'Luật ngày 6 tháng 4 năm 1830', c: 0 },
        { t: 'Bất đồng về quyền lợi, đất đai và tự quản', c: 0 },
        { t: 'Người định cư và người Tejano thấy không được lắng nghe', c: 1 },
        { t: 'Tức giận, buôn lậu và phản đối', c: 1 },
        { t: 'Texas tiến tới cách mạng', c: 1 }
      ],
      takeaway: 'Phân loại nguyên nhân và hệ quả chính là sơ đồ khái niệm đằng sau luận điểm của bạn về năm 1835.'
    },
    ar: {
      title: 'الخروج: صنّف السبب مقابل النتيجة',
      cats: ['سبب (بنى التوتر)', 'نتيجة (ما حدث)'],
      items: [
        { t: 'حكومة بعيدة تغيّر القوانين', c: 0 },
        { t: 'قانون 6 أبريل 1830', c: 0 },
        { t: 'خلافات حول الحقوق والأرض والحكم الذاتي', c: 0 },
        { t: 'المستوطنون والتيخانو يشعرون بأنهم غير مسموعين', c: 1 },
        { t: 'غضب وتهريب واحتجاج', c: 1 },
        { t: 'تكساس تتجه نحو الثورة', c: 1 }
      ],
      takeaway: 'تصنيف الأسباب عن النتائج هو الخريطة المفاهيمية وراء ادعائك حول عام 1835.'
    },
    hi: {
      title: 'निकास: कारण बनाम प्रभाव छाँटें',
      cats: ['कारण (तनाव बनाया)', 'प्रभाव (जो हुआ)'],
      items: [
        { t: 'दूर की सरकार का नियम बदलना', c: 0 },
        { t: '6 अप्रैल 1830 का कानून', c: 0 },
        { t: 'अधिकार, भूमि और स्वशासन पर मतभेद', c: 0 },
        { t: 'उपनिवेशी और तेहानो अनसुना महसूस करते हैं', c: 1 },
        { t: 'गुस्सा, तस्करी और विरोध', c: 1 },
        { t: 'टेक्सास क्रांति की ओर बढ़ता है', c: 1 }
      ],
      takeaway: 'कारणों को प्रभावों से छाँटना ही 1835 के बारे में आपके दावे के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: سبب بمقابلہ اثر چھانٹیں',
      cats: ['سبب (تناؤ پیدا کیا)', 'اثر (جو ہوا)'],
      items: [
        { t: 'دور کی حکومت کا قوانین بدلنا', c: 0 },
        { t: '6 اپریل 1830 کا قانون', c: 0 },
        { t: 'حقوق، زمین اور خود حکمرانی پر اختلافات', c: 0 },
        { t: 'نوآبادکار اور تیہانو اَن سنا محسوس کرتے ہیں', c: 1 },
        { t: 'غصہ، اسمگلنگ اور احتجاج', c: 1 },
        { t: 'ٹیکساس انقلاب کی طرف بڑھتا ہے', c: 1 }
      ],
      takeaway: 'اسباب کو اثرات سے چھانٹنا ہی 1835 کے بارے میں آپ کے دعوے کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：把因与果分类',
      cats: ['原因（造成紧张）', '结果（所发生的）'],
      items: [
        { t: '遥远政府更改规则', c: 0 },
        { t: '1830 年 4 月 6 日法令', c: 0 },
        { t: '在权利、土地和自治上的分歧', c: 0 },
        { t: '殖民者与特哈诺人感到不被倾听', c: 1 },
        { t: '愤怒、走私与抗议', c: 1 },
        { t: '得克萨斯走向革命', c: 1 }
      ],
      takeaway: '把原因和结果分开，就是你关于 1835 年主张背后的概念图。'
    } }
  },

  /* ───────── Grade 4 · 1835 · TRANSFER ───────── */
  {
    id: 'g4-1835-transfer-entry', grade: 4, unit: '1835',
    unitTitle: '1835 — What Should Our Family Do?', phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.15(c)(22)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving process',
      seconds: 45,
      questions: [
        { q: 'The FIRST step of the problem-solving process is to…', choices: ['pick a side', 'define the problem', 'give a speech'], a: 1 },
        { q: 'Before deciding, a good problem-solver…', choices: ['gathers information and weighs options', 'guesses fast', 'ignores other stakeholders'], a: 0 },
        { q: 'When you weigh a choice like “stay loyal, seek reform, or fight,” you look at each option’s…', choices: ['color', 'advantages and disadvantages', 'spelling'], a: 1 },
        { q: 'After choosing a solution, the LAST step is to…', choices: ['forget it', 'evaluate how well it worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Define → gather → weigh → decide → defend → evaluate. That is §113.15(c)(22)(B).'
    },
    es: {
      title: 'Calentamiento: el proceso de resolución de problemas',
      seconds: 45,
      questions: [
        { q: 'El PRIMER paso del proceso de resolución de problemas es…', choices: ['elegir un bando', 'definir el problema', 'dar un discurso'], a: 1 },
        { q: 'Antes de decidir, quien resuelve bien problemas…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora a otras partes interesadas'], a: 0 },
        { q: 'Al sopesar una opción como “ser leal, buscar reforma o luchar”, observas de cada opción sus…', choices: ['colores', 'ventajas y desventajas', 'ortografía'], a: 1 },
        { q: 'Después de elegir una solución, el ÚLTIMO paso es…', choices: ['olvidarla', 'evaluar qué tan bien funcionó', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Definir → reunir → sopesar → decidir → defender → evaluar. Eso es §113.15(c)(22)(B).'
    },
    vi: {
      title: 'Khởi động: quy trình giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Bước ĐẦU TIÊN của quy trình giải quyết vấn đề là…', choices: ['chọn một phe', 'xác định vấn đề', 'đọc một bài diễn văn'], a: 1 },
        { q: 'Trước khi quyết định, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin và cân nhắc các phương án', 'đoán nhanh', 'bỏ qua các bên liên quan khác'], a: 0 },
        { q: 'Khi cân nhắc một lựa chọn như “giữ trung thành, tìm cải cách, hay chiến đấu”, bạn xem xét ở mỗi phương án…', choices: ['màu sắc', 'ưu điểm và nhược điểm', 'chính tả'], a: 1 },
        { q: 'Sau khi chọn một giải pháp, bước CUỐI CÙNG là…', choices: ['quên nó đi', 'đánh giá xem nó hiệu quả ra sao', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → quyết định → bảo vệ → đánh giá. Đó là §113.15(c)(22)(B).'
    },
    ar: {
      title: 'تهيئة: عملية حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'الخطوة الأولى في عملية حل المشكلة هي…', choices: ['اختيار جانب', 'تحديد المشكلة', 'إلقاء خطاب'], a: 1 },
        { q: 'قبل اتخاذ القرار، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل أصحاب المصلحة الآخرين'], a: 0 },
        { q: 'عند موازنة خيار مثل «البقاء موالياً، أو طلب الإصلاح، أو القتال»، تنظر في كل خيار إلى…', choices: ['اللون', 'المزايا والعيوب', 'الإملاء'], a: 1 },
        { q: 'بعد اختيار حل، الخطوة الأخيرة هي…', choices: ['نسيانه', 'تقييم مدى نجاحه', 'إخفاء المفاضلات'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن ← قرِّر ← دافِع ← قيِّم. تلك هي §113.15(c)(22)(B).'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान की प्रक्रिया',
      seconds: 45,
      questions: [
        { q: 'समस्या-समाधान प्रक्रिया का पहला चरण है…', choices: ['एक पक्ष चुनना', 'समस्या को परिभाषित करना', 'भाषण देना'], a: 1 },
        { q: 'निर्णय से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी अनुमान लगाता है', 'अन्य हितधारकों की उपेक्षा करता है'], a: 0 },
        { q: '“वफादार रहें, सुधार माँगें, या लड़ें” जैसे विकल्प को तौलते समय, आप हर विकल्प के देखते हैं…', choices: ['रंग', 'फायदे और नुकसान', 'वर्तनी'], a: 1 },
        { q: 'समाधान चुनने के बाद, अंतिम चरण है…', choices: ['उसे भूल जाना', 'यह आँकना कि वह कितना अच्छा रहा', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → निर्णय लें → बचाव करें → आँकें। यही §113.15(c)(22)(B) है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کا عمل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے کے عمل کا پہلا مرحلہ ہے…', choices: ['ایک فریق چننا', 'مسئلے کو متعین کرنا', 'تقریر کرنا'], a: 1 },
        { q: 'فیصلے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی اندازہ لگاتا ہے', 'دیگر اسٹیک ہولڈرز کو نظرانداز کرتا ہے'], a: 0 },
        { q: '“وفادار رہیں، اصلاح مانگیں، یا لڑیں” جیسے اختیار کو تولتے وقت، آپ ہر اختیار کے دیکھتے ہیں…', choices: ['رنگ', 'فوائد اور نقصانات', 'ہجے'], a: 1 },
        { q: 'حل چننے کے بعد، آخری مرحلہ ہے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ وہ کتنا کارگر رہا', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← فیصلہ کریں ← دفاع کریں ← جانچیں۔ یہی §113.15(c)(22)(B) ہے۔'
    },
    zh: {
      title: '热身：解决问题的流程',
      seconds: 45,
      questions: [
        { q: '解决问题流程的第一步是…', choices: ['选择一方', '界定问题', '发表演讲'], a: 1 },
        { q: '在做决定之前，优秀的解决问题者会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视其他利益相关者'], a: 0 },
        { q: '在权衡“保持忠诚、寻求改革还是抗争”这样的选项时，你要看每个选项的…', choices: ['颜色', '利与弊', '拼写'], a: 1 },
        { q: '选定方案之后，最后一步是…', choices: ['把它忘掉', '评估它的效果如何', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 决定 → 辩护 → 评估。这就是 §113.15(c)(22)(B)。'
    } }
  },
  {
    id: 'g4-1835-transfer-exit', grade: 4, unit: '1835',
    unitTitle: '1835 — What Should Our Family Do?', phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.15(c)(22)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim, evidence & reflection',
      items: [
        { before: 'A recommendation for what the family should do is a claim; it needs', after: 'from the sources to be strong.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: 'Naming the', after: 'of “stay loyal, seek reform, or fight” shows you weighed the options.', choices: ['trade-offs', 'colors', 'spelling'], a: 0 },
        { before: 'The final step is to', after: 'how well the solution would have worked.', choices: ['evaluate', 'forget', 'hide'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs + evaluation = thinking like a historian and a citizen.'
    },
    es: {
      title: 'Salida: afirmación, evidencia y reflexión',
      items: [
        { before: 'Una recomendación sobre qué debe hacer la familia es una afirmación; necesita', after: 'de las fuentes para ser sólida.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Nombrar las', after: 'de “ser leal, buscar reforma o luchar” muestra que sopesaste las opciones.', choices: ['concesiones', 'colores', 'ortografía'], a: 0 },
        { before: 'El último paso es', after: 'qué tan bien habría funcionado la solución.', choices: ['evaluar', 'olvidar', 'ocultar'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones + evaluación = pensar como un historiador y un ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm, bằng chứng & suy ngẫm',
      items: [
        { before: 'Một đề xuất về việc gia đình nên làm gì là một luận điểm; nó cần', after: 'từ các nguồn để trở nên vững chắc.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Nêu ra những', after: 'của “giữ trung thành, tìm cải cách, hay chiến đấu” cho thấy bạn đã cân nhắc các phương án.', choices: ['đánh đổi', 'màu sắc', 'chính tả'], a: 0 },
        { before: 'Bước cuối cùng là', after: 'xem giải pháp sẽ hiệu quả đến mức nào.', choices: ['đánh giá', 'quên đi', 'giấu đi'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi + đánh giá = tư duy như một nhà sử học và một công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء ودليل وتأمّل',
      items: [
        { before: 'التوصية بما ينبغي أن تفعله العائلة هي ادعاء؛ وهي تحتاج إلى', after: 'من المصادر لتكون قوية.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'إن تسمية', after: 'الخاصة بـ«البقاء موالياً، أو طلب الإصلاح، أو القتال» تُظهر أنك وازنت الخيارات.', choices: ['المفاضلات', 'الألوان', 'الإملاء'], a: 0 },
        { before: 'الخطوة الأخيرة هي أن', after: 'مدى نجاح الحل.', choices: ['تقيّم', 'تنسى', 'تخفي'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات + تقييم = التفكير كمؤرّخ ومواطن.'
    },
    hi: {
      title: 'निकास: दावा, साक्ष्य और चिंतन',
      items: [
        { before: 'परिवार को क्या करना चाहिए, इसकी सिफारिश एक दावा है; मजबूत होने के लिए इसे चाहिए', after: 'स्रोतों से।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: '“वफादार रहें, सुधार माँगें, या लड़ें” की', after: 'का नाम लेना दिखाता है कि आपने विकल्पों को तौला।', choices: ['समझौतों', 'रंगों', 'वर्तनी'], a: 0 },
        { before: 'अंतिम चरण है यह', after: 'कि समाधान कितनी अच्छी तरह काम करता।', choices: ['आँकना', 'भूलना', 'छिपाना'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते + मूल्यांकन = एक इतिहासकार और एक नागरिक की तरह सोचना।'
    },
    ur: {
      title: 'اخراج: دعویٰ، ثبوت اور غور و فکر',
      items: [
        { before: 'خاندان کو کیا کرنا چاہیے، اس کی سفارش ایک دعویٰ ہے؛ مضبوط ہونے کے لیے اسے چاہیے', after: 'مآخذ سے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: '“وفادار رہیں، اصلاح مانگیں، یا لڑیں” کے', after: 'کا نام لینا ظاہر کرتا ہے کہ آپ نے اختیارات تولے۔', choices: ['سمجھوتوں', 'رنگوں', 'ہجوں'], a: 0 },
        { before: 'آخری مرحلہ یہ', after: 'ہے کہ حل کتنے اچھے طریقے سے کام کرتا۔', choices: ['جانچنا', 'بھولنا', 'چھپانا'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے + جانچ = ایک مؤرخ اور ایک شہری کی طرح سوچنا۔'
    },
    zh: {
      title: '离场：主张、证据与反思',
      items: [
        { before: '关于家庭该怎么做的建议是一个主张；要有力，它需要来自资料的', after: '。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '说出“保持忠诚、寻求改革还是抗争”的', after: '，表明你权衡了各个选项。', choices: ['取舍', '颜色', '拼写'], a: 0 },
        { before: '最后一步是', after: '这个方案的效果会如何。', choices: ['评估', '忘记', '隐藏'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍 + 评估 = 像史学家和公民一样思考。'
    } }
  }

]);
