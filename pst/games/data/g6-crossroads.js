/* PST Arcade — ticket registry for Grade 6 · Crossroads. Each ticket is retrieval
   practice for one unit + phase. English-first; other languages carried inline per
   ticket (ticket.i18n[lang]). The engine (arcade.js) reads window.PST_TICKETS.
   Nothing is stored or sent. Shape matches g5-immigration.js:
   {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 6 · Crossroads · SURFACE ───────── */
  {
    id: 'g6-crossroads-surface-entry', grade: 6, unit: 'crossroads',
    unitTitle: 'A Crossroads for the Region — Growth vs. Heritage', phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.18(c)(6), (c)(7), (c)(14)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: crossroads words',
      seconds: 45,
      questions: [
        { q: 'When a place grows richer and gains jobs, roads, and schools, that is…', choices: ['economic development', 'cultural heritage', 'sustainability'], a: 0 },
        { q: 'The buildings, art, beliefs, languages, and customs a group inherits and passes on are its…', choices: ['factors of production', 'cultural heritage', 'tourism'], a: 1 },
        { q: 'An economy based on customs and skills handed down for generations is a…', choices: ['market economy', 'command economy', 'traditional economy'], a: 2 },
        { q: 'Anyone affected by a decision, or who has something at stake, is a…', choices: ['stakeholder', 'institution', 'entrepreneur'], a: 0 }
      ],
      takeaway: 'Know these four words and you can read the rest of the unit with confidence.'
    },
    es: {
      title: 'Calentamiento: palabras de la encrucijada',
      seconds: 45,
      questions: [
        { q: 'Cuando un lugar se enriquece y gana empleos, carreteras y escuelas, eso es…', choices: ['desarrollo económico', 'patrimonio cultural', 'sostenibilidad'], a: 0 },
        { q: 'Los edificios, el arte, las creencias, las lenguas y las costumbres que un grupo hereda y transmite son su…', choices: ['factores de producción', 'patrimonio cultural', 'turismo'], a: 1 },
        { q: 'Una economía basada en costumbres y destrezas transmitidas por generaciones es una…', choices: ['economía de mercado', 'economía dirigida', 'economía tradicional'], a: 2 },
        { q: 'Cualquiera afectado por una decisión, o que tiene algo en juego, es un…', choices: ['parte interesada', 'institución', 'emprendedor'], a: 0 }
      ],
      takeaway: 'Domina estas cuatro palabras y podrás leer el resto de la unidad con confianza.'
    },
    vi: {
      title: 'Khởi động: từ vựng ngã tư',
      seconds: 45,
      questions: [
        { q: 'Khi một nơi trở nên giàu hơn và có thêm việc làm, đường sá và trường học, đó là…', choices: ['phát triển kinh tế', 'di sản văn hóa', 'sự bền vững'], a: 0 },
        { q: 'Các công trình, nghệ thuật, tín ngưỡng, ngôn ngữ và phong tục mà một nhóm thừa hưởng và truyền lại là…', choices: ['các yếu tố sản xuất', 'di sản văn hóa', 'du lịch'], a: 1 },
        { q: 'Một nền kinh tế dựa trên phong tục và kỹ năng truyền qua nhiều thế hệ là một…', choices: ['nền kinh tế thị trường', 'nền kinh tế chỉ huy', 'nền kinh tế truyền thống'], a: 2 },
        { q: 'Bất kỳ ai bị ảnh hưởng bởi một quyết định, hoặc có điều gì đó liên quan, là một…', choices: ['bên liên quan', 'thể chế', 'doanh nhân'], a: 0 }
      ],
      takeaway: 'Nắm được bốn từ này là bạn có thể đọc phần còn lại của đơn vị bài học một cách tự tin.'
    },
    ar: {
      title: 'تهيئة: كلمات مفترق الطرق',
      seconds: 45,
      questions: [
        { q: 'عندما يصبح المكان أكثر ثراءً ويكسب وظائف وطرقًا ومدارس، فهذا…', choices: ['التنمية الاقتصادية', 'التراث الثقافي', 'الاستدامة'], a: 0 },
        { q: 'المباني والفنون والمعتقدات واللغات والعادات التي ترثها الجماعة وتُورّثها هي…', choices: ['عوامل الإنتاج', 'التراث الثقافي', 'السياحة'], a: 1 },
        { q: 'الاقتصاد القائم على عادات ومهارات متوارَثة عبر الأجيال هو…', choices: ['اقتصاد السوق', 'الاقتصاد الموجَّه', 'الاقتصاد التقليدي'], a: 2 },
        { q: 'أي شخص يتأثر بقرار، أو لديه مصلحة معرّضة للخطر، هو…', choices: ['صاحب مصلحة', 'مؤسسة', 'رائد أعمال'], a: 0 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وستقرأ بقية الوحدة بثقة.'
    },
    hi: {
      title: 'वार्म-अप: चौराहे के शब्द',
      seconds: 45,
      questions: [
        { q: 'जब कोई जगह अधिक समृद्ध होती है और उसे नौकरियाँ, सड़कें और स्कूल मिलते हैं, तो वह है…', choices: ['आर्थिक विकास', 'सांस्कृतिक विरासत', 'स्थिरता'], a: 0 },
        { q: 'किसी समूह को विरासत में मिली और आगे बढ़ाई गई इमारतें, कला, मान्यताएँ, भाषाएँ और रीति-रिवाज उसकी हैं…', choices: ['उत्पादन के कारक', 'सांस्कृतिक विरासत', 'पर्यटन'], a: 1 },
        { q: 'पीढ़ियों से चली आ रही रीति-रिवाजों और कौशलों पर आधारित अर्थव्यवस्था है एक…', choices: ['बाज़ार अर्थव्यवस्था', 'आदेश अर्थव्यवस्था', 'पारंपरिक अर्थव्यवस्था'], a: 2 },
        { q: 'किसी निर्णय से प्रभावित होने वाला, या जिसका कुछ दाँव पर हो, वह है एक…', choices: ['हितधारक', 'संस्था', 'उद्यमी'], a: 0 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और आप शेष इकाई आत्मविश्वास से पढ़ सकेंगे।'
    },
    ur: {
      title: 'وارم اپ: چوراہے کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'جب کوئی جگہ زیادہ خوشحال ہوتی ہے اور اسے ملازمتیں، سڑکیں اور اسکول ملتے ہیں، تو یہ ہے…', choices: ['معاشی ترقی', 'ثقافتی ورثہ', 'پائیداری'], a: 0 },
        { q: 'کسی گروہ کو ورثے میں ملی اور آگے منتقل کی گئی عمارتیں، فن، عقائد، زبانیں اور رسم و رواج اس کا ہیں…', choices: ['پیداوار کے عوامل', 'ثقافتی ورثہ', 'سیاحت'], a: 1 },
        { q: 'نسلوں سے چلی آ رہی روایات اور مہارتوں پر مبنی معیشت ایک…', choices: ['منڈی کی معیشت', 'حکم کی معیشت', 'روایتی معیشت'], a: 2 },
        { q: 'کوئی بھی جو کسی فیصلے سے متاثر ہو، یا جس کا کچھ داؤ پر ہو، وہ ہے ایک…', choices: ['اسٹیک ہولڈر', 'ادارہ', 'کاروباری'], a: 0 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو آپ باقی اکائی اعتماد کے ساتھ پڑھ سکیں گے۔'
    },
    zh: {
      title: '热身：十字路口词汇',
      seconds: 45,
      questions: [
        { q: '当一个地方变得更富裕，并获得就业、道路和学校时，这就是…', choices: ['经济发展', '文化遗产', '可持续性'], a: 0 },
        { q: '一个群体继承并传承下来的建筑、艺术、信仰、语言和习俗，是它的…', choices: ['生产要素', '文化遗产', '旅游业'], a: 1 },
        { q: '建立在世代相传的习俗与技能之上的经济，是一种…', choices: ['市场经济', '计划经济', '传统经济'], a: 2 },
        { q: '任何受某项决定影响、或有利害关系的人，都是一位…', choices: ['利益相关者', '制度机构', '企业家'], a: 0 }
      ],
      takeaway: '掌握这四个词，你就能自信地读完本单元的其余部分。'
    } }
  },
  {
    id: 'g6-crossroads-surface-exit', grade: 6, unit: 'crossroads',
    unitTitle: 'A Crossroads for the Region — Growth vs. Heritage', phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.18(c)(6), (c)(7), (c)(14)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['factors of production', 'natural resources, labor, capital, and entrepreneurs'],
        ['traditional economy', 'an economy built on customs and skills handed down'],
        ['cultural heritage', 'the art, beliefs, and customs a group passes on'],
        ['institution', 'a lasting part of society that meets a shared need'],
        ['sustainability', 'using something so it stays healthy for the future']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['factores de producción', 'recursos naturales, trabajo, capital y emprendedores'],
        ['economía tradicional', 'una economía basada en costumbres y destrezas transmitidas'],
        ['patrimonio cultural', 'el arte, las creencias y las costumbres que un grupo transmite'],
        ['institución', 'una parte duradera de la sociedad que atiende una necesidad común'],
        ['sostenibilidad', 'usar algo de modo que siga sano para el futuro']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['các yếu tố sản xuất', 'tài nguyên thiên nhiên, lao động, vốn và doanh nhân'],
        ['nền kinh tế truyền thống', 'nền kinh tế dựa trên phong tục và kỹ năng truyền lại'],
        ['di sản văn hóa', 'nghệ thuật, tín ngưỡng và phong tục mà một nhóm truyền lại'],
        ['thể chế', 'một phần lâu bền của xã hội đáp ứng một nhu cầu chung'],
        ['sự bền vững', 'sử dụng thứ gì đó sao cho nó vẫn lành mạnh cho tương lai']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['عوامل الإنتاج', 'الموارد الطبيعية والعمل ورأس المال ورواد الأعمال'],
        ['الاقتصاد التقليدي', 'اقتصاد قائم على عادات ومهارات متوارَثة'],
        ['التراث الثقافي', 'الفنون والمعتقدات والعادات التي تُورّثها الجماعة'],
        ['المؤسسة', 'جزء دائم من المجتمع يلبّي حاجة مشتركة'],
        ['الاستدامة', 'استخدام الشيء بحيث يبقى سليمًا للمستقبل']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['उत्पादन के कारक', 'प्राकृतिक संसाधन, श्रम, पूँजी और उद्यमी'],
        ['पारंपरिक अर्थव्यवस्था', 'रीति-रिवाजों और हस्तांतरित कौशलों पर आधारित अर्थव्यवस्था'],
        ['सांस्कृतिक विरासत', 'कला, मान्यताएँ और रीति-रिवाज जो कोई समूह आगे बढ़ाता है'],
        ['संस्था', 'समाज का एक स्थायी हिस्सा जो एक साझा ज़रूरत पूरी करता है'],
        ['स्थिरता', 'किसी चीज़ का इस तरह उपयोग कि वह भविष्य के लिए स्वस्थ बनी रहे']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['پیداوار کے عوامل', 'قدرتی وسائل، محنت، سرمایہ اور کاروباری'],
        ['روایتی معیشت', 'رسم و رواج اور منتقل شدہ مہارتوں پر مبنی معیشت'],
        ['ثقافتی ورثہ', 'فن، عقائد اور رسم و رواج جو کوئی گروہ آگے منتقل کرتا ہے'],
        ['ادارہ', 'معاشرے کا ایک پائیدار حصہ جو ایک مشترکہ ضرورت پوری کرتا ہے'],
        ['پائیداری', 'کسی چیز کو اس طرح استعمال کرنا کہ وہ مستقبل کے لیے صحت مند رہے']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['生产要素', '自然资源、劳动力、资本和企业家'],
        ['传统经济', '建立在世代相传的习俗与技能之上的经济'],
        ['文化遗产', '一个群体传承下去的艺术、信仰和习俗'],
        ['制度机构', '社会中满足共同需求的一个持久组成部分'],
        ['可持续性', '以让某物在未来保持健康的方式来使用它']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 6 · Crossroads · DEEP ───────── */
  {
    id: 'g6-crossroads-deep-entry', grade: 6, unit: 'crossroads',
    unitTitle: 'A Crossroads for the Region — Growth vs. Heritage', phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.18(c)(5), (c)(8), (c)(16)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: benefits & costs',
      items: [
        { before: 'Thousands of new jobs and higher wages are a', after: 'of the development.', choices: ['cost', 'benefit', 'source'], a: 1 },
        { before: 'A factory built next to the ancient heritage site is a', after: 'of the project.', choices: ['cost', 'benefit', 'stakeholder'], a: 0 },
        { before: 'When a benefit for one group is a cost for another, that is a', after: 'to weigh.', choices: ['trade-off', 'quota', 'terrace'], a: 0 }
      ],
      takeaway: 'Every big offer has benefits AND costs. Naming both is the heart of the concept map.'
    },
    es: {
      title: 'Calentamiento: beneficios y costos',
      items: [
        { before: 'Miles de empleos nuevos y salarios más altos son un', after: 'del desarrollo.', choices: ['costo', 'beneficio', 'fuente'], a: 1 },
        { before: 'Una fábrica construida junto al antiguo sitio patrimonial es un', after: 'del proyecto.', choices: ['costo', 'beneficio', 'parte interesada'], a: 0 },
        { before: 'Cuando un beneficio para un grupo es un costo para otro, eso es una', after: 'que sopesar.', choices: ['concesión', 'cuota', 'terraza'], a: 0 }
      ],
      takeaway: 'Toda gran oferta tiene beneficios Y costos. Nombrar ambos es el corazón del mapa conceptual.'
    },
    vi: {
      title: 'Khởi động: lợi ích & chi phí',
      items: [
        { before: 'Hàng nghìn việc làm mới và mức lương cao hơn là một', after: 'của dự án phát triển.', choices: ['chi phí', 'lợi ích', 'nguồn'], a: 1 },
        { before: 'Một nhà máy xây ngay cạnh di tích cổ là một', after: 'của dự án.', choices: ['chi phí', 'lợi ích', 'bên liên quan'], a: 0 },
        { before: 'Khi lợi ích của nhóm này lại là chi phí của nhóm khác, đó là một', after: 'phải cân nhắc.', choices: ['sự đánh đổi', 'hạn ngạch', 'ruộng bậc thang'], a: 0 }
      ],
      takeaway: 'Mọi lời đề nghị lớn đều có lợi ích VÀ chi phí. Nêu tên cả hai chính là cốt lõi của sơ đồ khái niệm.'
    },
    ar: {
      title: 'تهيئة: الفوائد والتكاليف',
      items: [
        { before: 'آلاف الوظائف الجديدة والأجور الأعلى هي', after: 'للمشروع التنموي.', choices: ['تكلفة', 'فائدة', 'مصدر'], a: 1 },
        { before: 'مصنع يُبنى بجوار الموقع التراثي القديم هو', after: 'للمشروع.', choices: ['تكلفة', 'فائدة', 'صاحب مصلحة'], a: 0 },
        { before: 'عندما تكون فائدة لجماعة تكلفةً على أخرى، فتلك', after: 'يجب موازنتها.', choices: ['مفاضلة', 'حصة', 'مدرّجة'], a: 0 }
      ],
      takeaway: 'كل عرض كبير له فوائد وتكاليف معًا. تسمية كليهما هي جوهر الخريطة المفاهيمية.'
    },
    hi: {
      title: 'वार्म-अप: लाभ और लागत',
      items: [
        { before: 'हज़ारों नई नौकरियाँ और ऊँची मज़दूरी विकास का एक', after: 'हैं।', choices: ['लागत', 'लाभ', 'स्रोत'], a: 1 },
        { before: 'प्राचीन विरासत स्थल के पास बनी फ़ैक्ट्री परियोजना की एक', after: 'है।', choices: ['लागत', 'लाभ', 'हितधारक'], a: 0 },
        { before: 'जब एक समूह का लाभ दूसरे की लागत हो, तो वह एक', after: 'है जिसे तौलना है।', choices: ['समझौता', 'कोटा', 'सीढ़ीदार खेत'], a: 0 }
      ],
      takeaway: 'हर बड़े प्रस्ताव में लाभ और लागत दोनों होते हैं। दोनों का नाम लेना ही अवधारणा मानचित्र का सार है।'
    },
    ur: {
      title: 'وارم اپ: فوائد اور اخراجات',
      items: [
        { before: 'ہزاروں نئی ملازمتیں اور زیادہ اجرت ترقی کا ایک', after: 'ہیں۔', choices: ['خرچ', 'فائدہ', 'ذریعہ'], a: 1 },
        { before: 'قدیم ثقافتی ورثہ مقام کے پاس بنی فیکٹری منصوبے کا ایک', after: 'ہے۔', choices: ['خرچ', 'فائدہ', 'اسٹیک ہولڈر'], a: 0 },
        { before: 'جب ایک گروہ کا فائدہ دوسرے کا خرچ ہو، تو وہ ایک', after: 'ہے جسے تولنا ہے۔', choices: ['سمجھوتہ', 'کوٹا', 'سیڑھی دار کھیت'], a: 0 }
      ],
      takeaway: 'ہر بڑی پیشکش میں فوائد اور اخراجات دونوں ہوتے ہیں۔ دونوں کا نام لینا ہی تصوراتی نقشے کا مرکز ہے۔'
    },
    zh: {
      title: '热身：收益与代价',
      items: [
        { before: '数千个新岗位和更高的工资是这一开发项目的一项', after: '。', choices: ['代价', '收益', '来源'], a: 1 },
        { before: '在古老遗产地旁边修建的工厂是这个项目的一项', after: '。', choices: ['代价', '收益', '利益相关者'], a: 0 },
        { before: '当一个群体的收益成为另一个群体的代价时，那就是一项需要权衡的', after: '。', choices: ['取舍', '配额', '梯田'], a: 0 }
      ],
      takeaway: '每个重大提议都既有收益又有代价。两者都说出来，正是概念图的核心。'
    } }
  },
  {
    id: 'g6-crossroads-deep-exit', grade: 6, unit: 'crossroads',
    unitTitle: 'A Crossroads for the Region — Growth vs. Heritage', phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.18(c)(5), (c)(8), (c)(16)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort benefits and costs',
      cats: ['Benefit (what it gives)', 'Cost (what it changes or takes)'],
      items: [
        { t: 'Thousands of jobs and higher wages', c: 0 },
        { t: 'Money for schools, roads, and clinics', c: 0 },
        { t: 'Young people can stay instead of leaving', c: 0 },
        { t: 'A factory next to the ancient heritage site', c: 1 },
        { t: 'Strain on the land, water, and quiet', c: 1 },
        { t: 'Loss of crafts, language, or customs', c: 1 }
      ],
      takeaway: 'Sorting the offer into benefits vs costs is the concept map behind your argument.'
    },
    es: {
      title: 'Salida: clasifica beneficios y costos',
      cats: ['Beneficio (lo que da)', 'Costo (lo que cambia o quita)'],
      items: [
        { t: 'Miles de empleos y salarios más altos', c: 0 },
        { t: 'Dinero para escuelas, carreteras y clínicas', c: 0 },
        { t: 'Los jóvenes pueden quedarse en vez de irse', c: 0 },
        { t: 'Una fábrica junto al antiguo sitio patrimonial', c: 1 },
        { t: 'Presión sobre la tierra, el agua y la calma', c: 1 },
        { t: 'Pérdida de artesanías, lengua o costumbres', c: 1 }
      ],
      takeaway: 'Clasificar la oferta en beneficios vs costos es el mapa conceptual detrás de tu argumento.'
    },
    vi: {
      title: 'Phiếu ra: phân loại lợi ích và chi phí',
      cats: ['Lợi ích (điều nó mang lại)', 'Chi phí (điều nó thay đổi hoặc lấy đi)'],
      items: [
        { t: 'Hàng nghìn việc làm và mức lương cao hơn', c: 0 },
        { t: 'Tiền cho trường học, đường sá và trạm y tế', c: 0 },
        { t: 'Người trẻ có thể ở lại thay vì ra đi', c: 0 },
        { t: 'Một nhà máy cạnh di tích cổ', c: 1 },
        { t: 'Áp lực lên đất, nước và sự yên tĩnh', c: 1 },
        { t: 'Mất nghề thủ công, ngôn ngữ hoặc phong tục', c: 1 }
      ],
      takeaway: 'Phân loại lời đề nghị thành lợi ích và chi phí chính là sơ đồ khái niệm đằng sau lập luận của bạn.'
    },
    ar: {
      title: 'الخروج: صنّف الفوائد والتكاليف',
      cats: ['فائدة (ما يقدّمه)', 'تكلفة (ما يغيّره أو يأخذه)'],
      items: [
        { t: 'آلاف الوظائف وأجور أعلى', c: 0 },
        { t: 'أموال للمدارس والطرق والعيادات', c: 0 },
        { t: 'يمكن للشباب البقاء بدل الرحيل', c: 0 },
        { t: 'مصنع بجوار الموقع التراثي القديم', c: 1 },
        { t: 'ضغط على الأرض والماء والهدوء', c: 1 },
        { t: 'فقدان الحِرَف أو اللغة أو العادات', c: 1 }
      ],
      takeaway: 'تصنيف العرض إلى فوائد مقابل تكاليف هو الخريطة المفاهيمية وراء حجّتك.'
    },
    hi: {
      title: 'निकास: लाभ और लागत को छाँटें',
      cats: ['लाभ (जो यह देता है)', 'लागत (जो यह बदलता या छीनता है)'],
      items: [
        { t: 'हज़ारों नौकरियाँ और ऊँची मज़दूरी', c: 0 },
        { t: 'स्कूलों, सड़कों और क्लीनिकों के लिए पैसा', c: 0 },
        { t: 'युवा जाने के बजाय रुक सकते हैं', c: 0 },
        { t: 'प्राचीन विरासत स्थल के पास एक फ़ैक्ट्री', c: 1 },
        { t: 'भूमि, जल और शांति पर दबाव', c: 1 },
        { t: 'शिल्प, भाषा या रीति-रिवाजों का नुकसान', c: 1 }
      ],
      takeaway: 'प्रस्ताव को लाभ बनाम लागत में छाँटना ही आपके तर्क के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: فوائد اور اخراجات کو چھانٹیں',
      cats: ['فائدہ (جو یہ دیتا ہے)', 'خرچ (جو یہ بدلتا یا لے لیتا ہے)'],
      items: [
        { t: 'ہزاروں ملازمتیں اور زیادہ اجرت', c: 0 },
        { t: 'اسکولوں، سڑکوں اور کلینکوں کے لیے پیسہ', c: 0 },
        { t: 'نوجوان جانے کے بجائے رک سکتے ہیں', c: 0 },
        { t: 'قدیم ثقافتی ورثہ مقام کے پاس ایک فیکٹری', c: 1 },
        { t: 'زمین، پانی اور سکون پر دباؤ', c: 1 },
        { t: 'دستکاری، زبان یا رسم و رواج کا نقصان', c: 1 }
      ],
      takeaway: 'پیشکش کو فوائد بمقابلہ اخراجات میں چھانٹنا ہی آپ کی دلیل کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：把收益和代价分类',
      cats: ['收益（它带来的）', '代价（它改变或夺走的）'],
      items: [
        { t: '数千个岗位和更高的工资', c: 0 },
        { t: '用于学校、道路和诊所的资金', c: 0 },
        { t: '年轻人可以留下而不必离开', c: 0 },
        { t: '古老遗产地旁边的一座工厂', c: 1 },
        { t: '对土地、水源和宁静的压力', c: 1 },
        { t: '手工艺、语言或习俗的流失', c: 1 }
      ],
      takeaway: '把这项提议分成收益与代价，就是你论证背后的概念图。'
    } }
  },

  /* ───────── Grade 6 · Crossroads · TRANSFER ───────── */
  {
    id: 'g6-crossroads-transfer-entry', grade: 6, unit: 'crossroads',
    unitTitle: 'A Crossroads for the Region — Growth vs. Heritage', phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.18(c)(22)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving process',
      seconds: 45,
      questions: [
        { q: 'The FIRST step of the problem-solving process is to…', choices: ['pick a solution', 'define the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing, a good problem-solver…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other stakeholders'], a: 0 },
        { q: 'Reasoning "from that person’s point of view" means you…', choices: ['forget the evidence', 'argue as your stakeholder would', 'always say yes'], a: 1 },
        { q: 'The LAST step is to…', choices: ['evaluate how well the solution worked', 'hide the trade-offs', 'start over for no reason'], a: 0 }
      ],
      takeaway: 'Define → gather → weigh → decide → defend → evaluate. That is §113.18(c)(22)(B).'
    },
    es: {
      title: 'Calentamiento: el proceso de resolución de problemas',
      seconds: 45,
      questions: [
        { q: 'El PRIMER paso del proceso de resolución de problemas es…', choices: ['elegir una solución', 'definir el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir, quien resuelve bien problemas…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora a otras partes interesadas'], a: 0 },
        { q: 'Razonar «desde el punto de vista de esa persona» significa que…', choices: ['olvidas la evidencia', 'argumentas como lo haría tu parte interesada', 'siempre dices que sí'], a: 1 },
        { q: 'El ÚLTIMO paso es…', choices: ['evaluar qué tan bien funcionó la solución', 'ocultar las concesiones', 'empezar de nuevo sin razón'], a: 0 }
      ],
      takeaway: 'Definir → reunir → sopesar → decidir → defender → evaluar. Eso es §113.18(c)(22)(B).'
    },
    vi: {
      title: 'Khởi động: quy trình giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Bước ĐẦU TIÊN của quy trình giải quyết vấn đề là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua các bên liên quan khác'], a: 0 },
        { q: 'Lập luận "từ góc nhìn của người đó" nghĩa là bạn…', choices: ['quên bằng chứng', 'tranh luận như bên liên quan của bạn sẽ làm', 'luôn nói đồng ý'], a: 1 },
        { q: 'Bước CUỐI CÙNG là…', choices: ['đánh giá xem giải pháp hiệu quả ra sao', 'giấu đi các đánh đổi', 'bắt đầu lại một cách vô cớ'], a: 0 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → quyết định → bảo vệ → đánh giá. Đó là §113.18(c)(22)(B).'
    },
    ar: {
      title: 'تهيئة: عملية حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'الخطوة الأولى في عملية حل المشكلة هي…', choices: ['اختيار حل', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل الاختيار، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل أصحاب المصلحة الآخرين'], a: 0 },
        { q: 'التفكير "من وجهة نظر ذلك الشخص" يعني أنك…', choices: ['تنسى الأدلة', 'تحاجّ كما سيفعل صاحب مصلحتك', 'توافق دائمًا'], a: 1 },
        { q: 'الخطوة الأخيرة هي…', choices: ['تقييم مدى نجاح الحل', 'إخفاء المفاضلات', 'البدء من جديد بلا سبب'], a: 0 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن ← قرِّر ← دافِع ← قيِّم. تلك هي §113.18(c)(22)(B).'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान की प्रक्रिया',
      seconds: 45,
      questions: [
        { q: 'समस्या-समाधान प्रक्रिया का पहला चरण है…', choices: ['एक समाधान चुनना', 'समस्या को परिभाषित करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'चुनने से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य हितधारकों को अनदेखा करता है'], a: 0 },
        { q: '"उस व्यक्ति के दृष्टिकोण से" तर्क करने का अर्थ है कि आप…', choices: ['साक्ष्य भूल जाते हैं', 'जैसे आपका हितधारक करता, वैसे तर्क करते हैं', 'हमेशा हाँ कहते हैं'], a: 1 },
        { q: 'अंतिम चरण है…', choices: ['यह आँकना कि समाधान कितना अच्छा रहा', 'समझौतों को छिपाना', 'बिना कारण फिर से शुरू करना'], a: 0 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → निर्णय लें → बचाव करें → आँकें। यही §113.18(c)(22)(B) है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کا عمل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے کے عمل کا پہلا مرحلہ ہے…', choices: ['ایک حل چننا', 'مسئلے کو متعین کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'چننے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دوسرے اسٹیک ہولڈرز کو نظرانداز کرتا ہے'], a: 0 },
        { q: '"اس شخص کے نقطہ نظر سے" استدلال کا مطلب ہے کہ آپ…', choices: ['ثبوت بھول جاتے ہیں', 'جیسے آپ کا اسٹیک ہولڈر کرتا، ویسے دلیل دیتے ہیں', 'ہمیشہ ہاں کہتے ہیں'], a: 1 },
        { q: 'آخری مرحلہ ہے…', choices: ['یہ جانچنا کہ حل کتنا کارگر رہا', 'سمجھوتوں کو چھپانا', 'بلا وجہ دوبارہ شروع کرنا'], a: 0 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← فیصلہ کریں ← دفاع کریں ← جانچیں۔ یہی §113.18(c)(22)(B) ہے۔'
    },
    zh: {
      title: '热身：解决问题的过程',
      seconds: 45,
      questions: [
        { q: '解决问题过程的第一步是…', choices: ['挑选一个方案', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在做出选择之前，优秀的解决问题者会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视其他利益相关者'], a: 0 },
        { q: '"从那个人的视角"推理，意味着你…', choices: ['忘掉证据', '像你的利益相关者那样论证', '总是说同意'], a: 1 },
        { q: '最后一步是…', choices: ['评估方案的效果如何', '隐藏其中的取舍', '无缘无故地重新开始'], a: 0 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 决定 → 辩护 → 评估。这就是 §113.18(c)(22)(B)。'
    } }
  },
  {
    id: 'g6-crossroads-transfer-exit', grade: 6, unit: 'crossroads',
    unitTitle: 'A Crossroads for the Region — Growth vs. Heritage', phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.18(c)(22)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: defend the decision',
      items: [
        { before: 'A recommendation about whether the project should go ahead is stronger when it is backed by', after: 'from the sources.', choices: ['evidence', 'a louder voice', 'a map'], a: 0 },
        { before: 'Naming the', after: 'shows you weighed what each side must give up.', choices: ['trade-offs', 'terraces', 'tourists'], a: 0 },
        { before: 'The final step of the process is to', after: 'how well the decision worked for jobs and heritage.', choices: ['evaluate', 'forget', 'hide'], a: 0 }
      ],
      takeaway: 'Evidence + trade-offs + evaluation = thinking like a stakeholder and a problem-solver.'
    },
    es: {
      title: 'Salida: defiende la decisión',
      items: [
        { before: 'Una recomendación sobre si el proyecto debe seguir adelante es más fuerte cuando se respalda con', after: 'de las fuentes.', choices: ['evidencia', 'una voz más fuerte', 'un mapa'], a: 0 },
        { before: 'Nombrar las', after: 'muestra que sopesaste lo que cada lado debe ceder.', choices: ['concesiones', 'terrazas', 'turistas'], a: 0 },
        { before: 'El paso final del proceso es', after: 'qué tan bien funcionó la decisión para los empleos y el patrimonio.', choices: ['evaluar', 'olvidar', 'ocultar'], a: 0 }
      ],
      takeaway: 'Evidencia + concesiones + evaluación = pensar como una parte interesada y como quien resuelve problemas.'
    },
    vi: {
      title: 'Phiếu ra: bảo vệ quyết định',
      items: [
        { before: 'Một đề xuất về việc dự án có nên tiến hành hay không sẽ vững hơn khi được củng cố bằng', after: 'từ các nguồn.', choices: ['bằng chứng', 'một giọng nói to hơn', 'một tấm bản đồ'], a: 0 },
        { before: 'Nêu ra những', after: 'cho thấy bạn đã cân nhắc điều mỗi bên phải từ bỏ.', choices: ['đánh đổi', 'ruộng bậc thang', 'khách du lịch'], a: 0 },
        { before: 'Bước cuối cùng của quy trình là', after: 'xem quyết định hiệu quả ra sao với việc làm và di sản.', choices: ['đánh giá', 'quên đi', 'giấu đi'], a: 0 }
      ],
      takeaway: 'Bằng chứng + đánh đổi + đánh giá = tư duy như một bên liên quan và một người giải quyết vấn đề.'
    },
    ar: {
      title: 'الخروج: دافِع عن القرار',
      items: [
        { before: 'التوصية بشأن ما إذا كان المشروع سيمضي قدمًا تكون أقوى عندما تُدعم بـ', after: 'من المصادر.', choices: ['أدلة', 'صوت أعلى', 'خريطة'], a: 0 },
        { before: 'إن تسمية', after: 'تُظهر أنك وازنت ما على كل جانب أن يتنازل عنه.', choices: ['المفاضلات', 'المدرّجات', 'السياح'], a: 0 },
        { before: 'الخطوة الأخيرة في العملية هي أن', after: 'مدى نجاح القرار للوظائف والتراث.', choices: ['تقيّم', 'تنسى', 'تخفي'], a: 0 }
      ],
      takeaway: 'أدلة + مفاضلات + تقييم = التفكير كصاحب مصلحة وحلّال مشكلات.'
    },
    hi: {
      title: 'निकास: निर्णय का बचाव करें',
      items: [
        { before: 'परियोजना आगे बढ़नी चाहिए या नहीं, इस पर सिफ़ारिश तब मज़बूत होती है जब उसका आधार हो', after: 'स्रोतों से।', choices: ['साक्ष्य', 'एक ऊँची आवाज़', 'एक नक्शा'], a: 0 },
        { before: 'अपने', after: 'का नाम लेना दिखाता है कि आपने तौला कि हर पक्ष को क्या छोड़ना होगा।', choices: ['समझौतों', 'सीढ़ीदार खेतों', 'पर्यटकों'], a: 0 },
        { before: 'प्रक्रिया का अंतिम चरण है यह', after: 'कि निर्णय नौकरियों और विरासत के लिए कितना अच्छा रहा।', choices: ['आँकना', 'भूल जाना', 'छिपाना'], a: 0 }
      ],
      takeaway: 'साक्ष्य + समझौते + मूल्यांकन = एक हितधारक और एक समस्या-समाधानकर्ता की तरह सोचना।'
    },
    ur: {
      title: 'اخراج: فیصلے کا دفاع کریں',
      items: [
        { before: 'منصوبہ آگے بڑھنا چاہیے یا نہیں، اس بارے میں سفارش تب مضبوط ہوتی ہے جب اس کی بنیاد ہو', after: 'مآخذ سے۔', choices: ['ثبوت', 'ایک بلند آواز', 'ایک نقشہ'], a: 0 },
        { before: 'اپنے', after: 'کا نام لینا ظاہر کرتا ہے کہ آپ نے تولا کہ ہر فریق کو کیا چھوڑنا ہوگا۔', choices: ['سمجھوتوں', 'سیڑھی دار کھیتوں', 'سیاحوں'], a: 0 },
        { before: 'عمل کا آخری مرحلہ یہ', after: 'ہے کہ فیصلہ ملازمتوں اور ورثے کے لیے کتنا کارگر رہا۔', choices: ['جانچنا', 'بھول جانا', 'چھپانا'], a: 0 }
      ],
      takeaway: 'ثبوت + سمجھوتے + جانچ = ایک اسٹیک ہولڈر اور ایک مسئلہ حل کرنے والے کی طرح سوچنا۔'
    },
    zh: {
      title: '离场：为决定辩护',
      items: [
        { before: '关于项目是否应当推进的建议，当它有以下支撑时更有力：', after: '来自资料。', choices: ['证据', '更大的嗓门', '一张地图'], a: 0 },
        { before: '说出其中的', after: '，表明你已权衡了各方必须放弃的东西。', choices: ['取舍', '梯田', '游客'], a: 0 },
        { before: '这个过程的最后一步是', after: '这个决定对就业和遗产的效果如何。', choices: ['评估', '忘记', '隐藏'], a: 0 }
      ],
      takeaway: '证据 + 取舍 + 评估 = 像利益相关者和解决问题者一样思考。'
    } }
  }

]);
