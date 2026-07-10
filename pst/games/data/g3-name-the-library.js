/* PST Arcade — ticket registry (Grade 3 · Name the Library). Each ticket is retrieval
   practice for one unit + phase. English-first; other languages carried inline per ticket
   (ticket.i18n[lang]). The engine (arcade.js) reads window.PST_TICKETS. Nothing is stored or
   sent. Shape: {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 3 · Name the Library · SURFACE ───────── */
  {
    id: 'g3-name-the-library-surface-entry', grade: 3, unit: 'name-the-library',
    unitTitle: 'Name the Library — Who Should We Honor?', phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.14(c)(1)(A)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: honor words',
      seconds: 45,
      questions: [
        { q: 'To show that you respect someone for the good they did is to…', choices: ['honor them', 'nominate them', 'ignore them'], a: 0 },
        { q: 'Something helpful a person gives or does for others is a…', choices: ['biography', 'contribution', 'community'], a: 1 },
        { q: 'The true story of a real person’s life is a…', choices: ['biography', 'hero', 'evidence'], a: 0 },
        { q: 'Facts you can point to that show something is true are…', choices: ['a community', 'a stakeholder', 'evidence'], a: 2 }
      ],
      takeaway: 'Know these four words — honor, contribution, biography, evidence — and the rest of the unit reads easily.'
    },
    es: {
      title: 'Calentamiento: palabras de honrar',
      seconds: 45,
      questions: [
        { q: 'Mostrar que respetas a alguien por lo bueno que hizo es…', choices: ['honrarlo', 'nominarlo', 'ignorarlo'], a: 0 },
        { q: 'Algo útil que una persona da o hace por los demás es una…', choices: ['biografía', 'contribución', 'comunidad'], a: 1 },
        { q: 'La historia verdadera de la vida de una persona real es una…', choices: ['biografía', 'héroe', 'evidencia'], a: 0 },
        { q: 'Los hechos que puedes señalar que muestran que algo es verdad son…', choices: ['una comunidad', 'una parte interesada', 'evidencia'], a: 2 }
      ],
      takeaway: 'Domina estas cuatro palabras —honrar, contribución, biografía, evidencia— y el resto de la unidad se lee fácil.'
    },
    vi: {
      title: 'Khởi động: từ vựng về vinh danh',
      seconds: 45,
      questions: [
        { q: 'Thể hiện rằng bạn kính trọng ai đó vì điều tốt họ đã làm là…', choices: ['vinh danh họ', 'đề cử họ', 'phớt lờ họ'], a: 0 },
        { q: 'Một điều hữu ích mà một người trao tặng hoặc làm cho người khác là một…', choices: ['tiểu sử', 'đóng góp', 'cộng đồng'], a: 1 },
        { q: 'Câu chuyện có thật về cuộc đời của một người thật là một…', choices: ['tiểu sử', 'người hùng', 'bằng chứng'], a: 0 },
        { q: 'Những sự thật bạn có thể chỉ ra để cho thấy điều gì đó là đúng là…', choices: ['một cộng đồng', 'một bên liên quan', 'bằng chứng'], a: 2 }
      ],
      takeaway: 'Nắm bốn từ này — vinh danh, đóng góp, tiểu sử, bằng chứng — thì phần còn lại của bài học đọc rất dễ.'
    },
    ar: {
      title: 'تهيئة: كلمات التكريم',
      seconds: 45,
      questions: [
        { q: 'أن تُظهر احترامك لشخص ما لما فعله من خير هو أن…', choices: ['تُكرّمه', 'تُرشّحه', 'تتجاهله'], a: 0 },
        { q: 'الشيء المفيد الذي يقدّمه أو يفعله المرء للآخرين هو…', choices: ['سيرة ذاتية', 'إسهام', 'مجتمع'], a: 1 },
        { q: 'القصة الحقيقية لحياة شخص حقيقي هي…', choices: ['سيرة ذاتية', 'بطل', 'دليل'], a: 0 },
        { q: 'الحقائق التي يمكنك الإشارة إليها لتُثبت أن شيئًا ما صحيح هي…', choices: ['مجتمع', 'صاحب مصلحة', 'دليل'], a: 2 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع — تكريم، إسهام، سيرة ذاتية، دليل — وستقرأ بقية الوحدة بسهولة.'
    },
    hi: {
      title: 'वार्म-अप: सम्मान के शब्द',
      seconds: 45,
      questions: [
        { q: 'किसी के अच्छे काम के लिए उसका आदर दिखाना है, उसे…', choices: ['सम्मानित करना', 'नामांकित करना', 'अनदेखा करना'], a: 0 },
        { q: 'कोई सहायक चीज़ जो एक व्यक्ति दूसरों को देता या करता है, वह है एक…', choices: ['जीवनी', 'योगदान', 'समुदाय'], a: 1 },
        { q: 'किसी असली व्यक्ति के जीवन की सच्ची कहानी है एक…', choices: ['जीवनी', 'नायक', 'साक्ष्य'], a: 0 },
        { q: 'वे तथ्य जिन्हें आप दिखा सकें कि कुछ सच है, वे हैं…', choices: ['एक समुदाय', 'एक हितधारक', 'साक्ष्य'], a: 2 }
      ],
      takeaway: 'इन चार शब्दों को जान लें — सम्मान, योगदान, जीवनी, साक्ष्य — तो शेष इकाई आसानी से पढ़ पाएँगे।'
    },
    ur: {
      title: 'وارم اپ: عزت کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'کسی کے اچھے کام کے لیے اس کا احترام ظاہر کرنا ہے، اسے…', choices: ['عزت دینا', 'نامزد کرنا', 'نظرانداز کرنا'], a: 0 },
        { q: 'کوئی مددگار چیز جو ایک شخص دوسروں کو دیتا یا کرتا ہے، وہ ہے ایک…', choices: ['سوانح عمری', 'خدمت', 'برادری'], a: 1 },
        { q: 'کسی حقیقی شخص کی زندگی کی سچی کہانی ہے ایک…', choices: ['سوانح عمری', 'ہیرو', 'ثبوت'], a: 0 },
        { q: 'وہ حقائق جنہیں آپ دکھا سکیں کہ کوئی چیز سچ ہے، وہ ہیں…', choices: ['ایک برادری', 'ایک اسٹیک ہولڈر', 'ثبوت'], a: 2 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں — عزت، خدمت، سوانح عمری، ثبوت — تو باقی اکائی آسانی سے پڑھ سکیں گے۔'
    },
    zh: {
      title: '热身：致敬词汇',
      seconds: 45,
      questions: [
        { q: '因某人做了好事而表达对他的敬意，就是…', choices: ['向他致敬', '提名他', '忽视他'], a: 0 },
        { q: '一个人给予或为他人所做的有益之事是一种…', choices: ['传记', '贡献', '社区'], a: 1 },
        { q: '关于一个真实人物一生的真实故事是一部…', choices: ['传记', '英雄', '证据'], a: 0 },
        { q: '你能指出来、证明某事为真的事实是…', choices: ['一个社区', '一位利益相关者', '证据'], a: 2 }
      ],
      takeaway: '掌握这四个词——致敬、贡献、传记、证据——本单元其余部分就容易读懂了。'
    } }
  },
  {
    id: 'g3-name-the-library-surface-exit', grade: 3, unit: 'name-the-library',
    unitTitle: 'Name the Library — Who Should We Honor?', phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.14(c)(1)(A)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['hero', 'a person who does something brave or good that helps many'],
        ['contribution', 'something helpful a person gives or does for others'],
        ['biography', 'the true story of a real person’s life'],
        ['primary source', 'information from someone who was there'],
        ['nominate', 'to name a person as a choice for something']
      ],
      takeaway: 'Matched all five? You are ready to go deep. If not, revisit the word wall.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['héroe', 'una persona que hace algo valiente o bueno que ayuda a muchos'],
        ['contribución', 'algo útil que una persona da o hace por los demás'],
        ['biografía', 'la historia verdadera de la vida de una persona real'],
        ['fuente primaria', 'información de alguien que estuvo allí'],
        ['nominar', 'nombrar a una persona como opción para algo']
      ],
      takeaway: '¿Relacionaste las cinco? Estás listo para ir a lo profundo. Si no, repasa el muro de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['người hùng', 'người làm điều dũng cảm hoặc tốt đẹp giúp ích cho nhiều người'],
        ['đóng góp', 'một điều hữu ích mà một người trao tặng hoặc làm cho người khác'],
        ['tiểu sử', 'câu chuyện có thật về cuộc đời của một người thật'],
        ['nguồn sơ cấp', 'thông tin từ người đã có mặt tại đó'],
        ['đề cử', 'nêu tên một người làm lựa chọn cho điều gì đó']
      ],
      takeaway: 'Ghép đúng cả năm? Bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại bảng từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['بطل', 'شخص يفعل أمرًا شجاعًا أو حسنًا يساعد الكثيرين'],
        ['إسهام', 'شيء مفيد يقدّمه أو يفعله المرء للآخرين'],
        ['سيرة ذاتية', 'القصة الحقيقية لحياة شخص حقيقي'],
        ['مصدر أولي', 'معلومات من شخص كان حاضرًا هناك'],
        ['يُرشّح', 'أن يسمّي شخصًا كخيار لشيء ما']
      ],
      takeaway: 'طابقت الخمس جميعًا؟ أنت مستعد للتعمّق. وإلا، فراجِع جدار الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['नायक', 'वह व्यक्ति जो कोई बहादुर या अच्छा काम करे जो कई लोगों की मदद करे'],
        ['योगदान', 'कोई सहायक चीज़ जो एक व्यक्ति दूसरों को देता या करता है'],
        ['जीवनी', 'किसी असली व्यक्ति के जीवन की सच्ची कहानी'],
        ['प्राथमिक स्रोत', 'किसी ऐसे व्यक्ति से जानकारी जो वहाँ मौजूद था'],
        ['नामांकित करना', 'किसी व्यक्ति का नाम किसी चीज़ के विकल्प के रूप में लेना']
      ],
      takeaway: 'पाँचों मिला दिए? आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-दीवार फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['ہیرو', 'وہ شخص جو کوئی بہادر یا اچھا کام کرے جو بہت سے لوگوں کی مدد کرے'],
        ['خدمت', 'کوئی مددگار چیز جو ایک شخص دوسروں کو دیتا یا کرتا ہے'],
        ['سوانح عمری', 'کسی حقیقی شخص کی زندگی کی سچی کہانی'],
        ['بنیادی ماخذ', 'کسی ایسے شخص سے معلومات جو وہاں موجود تھا'],
        ['نامزد کرنا', 'کسی شخص کا نام کسی چیز کے انتخاب کے طور پر لینا']
      ],
      takeaway: 'پانچوں ملا دیے؟ آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی دیوار دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['英雄', '做出勇敢或善良之举、帮助众人的人'],
        ['贡献', '一个人给予或为他人所做的有益之事'],
        ['传记', '关于一个真实人物一生的真实故事'],
        ['第一手资料', '来自当时在场者的信息'],
        ['提名', '把某人列为某事的候选']
      ],
      takeaway: '五个都配对正确？你可以进入深层学习了。若没有，请重温词汇墙。'
    } }
  },

  /* ───────── Grade 3 · Name the Library · DEEP ───────── */
  {
    id: 'g3-name-the-library-deep-entry', grade: 3, unit: 'name-the-library',
    unitTitle: 'Name the Library — Who Should We Honor?', phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.14(c)(14)(A–C)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: primary vs. secondary',
      items: [
        { before: 'A letter the person wrote themselves is a', after: 'source.', choices: ['primary', 'secondary', 'community'], a: 0 },
        { before: 'A book written about the person years later is a', after: 'source.', choices: ['primary', 'secondary', 'brave'], a: 1 },
        { before: 'A claim is stronger when it is backed by', after: 'from a source.', choices: ['evidence', 'a title', 'a photo frame'], a: 0 }
      ],
      takeaway: 'Primary = from someone who was there. Secondary = from someone who studied it later.'
    },
    es: {
      title: 'Calentamiento: primaria vs. secundaria',
      items: [
        { before: 'Una carta que la propia persona escribió es una fuente', after: '.', choices: ['primaria', 'secundaria', 'comunitaria'], a: 0 },
        { before: 'Un libro escrito sobre la persona años después es una fuente', after: '.', choices: ['primaria', 'secundaria', 'valiente'], a: 1 },
        { before: 'Una afirmación es más sólida cuando se respalda con', after: 'de una fuente.', choices: ['evidencia', 'un título', 'un marco de foto'], a: 0 }
      ],
      takeaway: 'Primaria = de alguien que estuvo allí. Secundaria = de alguien que lo estudió después.'
    },
    vi: {
      title: 'Khởi động: sơ cấp và thứ cấp',
      items: [
        { before: 'Một lá thư do chính người đó viết là nguồn', after: '.', choices: ['sơ cấp', 'thứ cấp', 'cộng đồng'], a: 0 },
        { before: 'Một cuốn sách viết về người đó nhiều năm sau là nguồn', after: '.', choices: ['sơ cấp', 'thứ cấp', 'dũng cảm'], a: 1 },
        { before: 'Một luận điểm vững chắc hơn khi được củng cố bằng', after: 'từ một nguồn.', choices: ['bằng chứng', 'một tiêu đề', 'một khung ảnh'], a: 0 }
      ],
      takeaway: 'Sơ cấp = từ người đã có mặt. Thứ cấp = từ người nghiên cứu nó về sau.'
    },
    ar: {
      title: 'تهيئة: أولي مقابل ثانوي',
      items: [
        { before: 'الرسالة التي كتبها الشخص بنفسه هي مصدر', after: '.', choices: ['أولي', 'ثانوي', 'مجتمعي'], a: 0 },
        { before: 'الكتاب المكتوب عن الشخص بعد سنوات هو مصدر', after: '.', choices: ['أولي', 'ثانوي', 'شجاع'], a: 1 },
        { before: 'يكون الادعاء أقوى حين يُدعم بـ', after: 'من مصدر.', choices: ['دليل', 'عنوان', 'إطار صورة'], a: 0 }
      ],
      takeaway: 'الأولي = من شخص كان حاضرًا. الثانوي = من شخص درسه لاحقًا.'
    },
    hi: {
      title: 'वार्म-अप: प्राथमिक बनाम द्वितीयक',
      items: [
        { before: 'व्यक्ति द्वारा स्वयं लिखा पत्र एक', after: 'स्रोत है।', choices: ['प्राथमिक', 'द्वितीयक', 'सामुदायिक'], a: 0 },
        { before: 'व्यक्ति के बारे में वर्षों बाद लिखी गई किताब एक', after: 'स्रोत है।', choices: ['प्राथमिक', 'द्वितीयक', 'बहादुर'], a: 1 },
        { before: 'दावा तब अधिक मजबूत होता है जब उसका आधार हो', after: 'किसी स्रोत से।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक फोटो फ्रेम'], a: 0 }
      ],
      takeaway: 'प्राथमिक = किसी ऐसे से जो वहाँ था। द्वितीयक = किसी ऐसे से जिसने बाद में उसका अध्ययन किया।'
    },
    ur: {
      title: 'وارم اپ: بنیادی بمقابلہ ثانوی',
      items: [
        { before: 'وہ خط جو شخص نے خود لکھا، ایک', after: 'ماخذ ہے۔', choices: ['بنیادی', 'ثانوی', 'برادری کا'], a: 0 },
        { before: 'شخص کے بارے میں برسوں بعد لکھی گئی کتاب ایک', after: 'ماخذ ہے۔', choices: ['بنیادی', 'ثانوی', 'بہادر'], a: 1 },
        { before: 'دعویٰ اُس وقت زیادہ مضبوط ہوتا ہے جب اس کی بنیاد ہو', after: 'کسی ماخذ سے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک تصویری فریم'], a: 0 }
      ],
      takeaway: 'بنیادی = کسی ایسے سے جو وہاں موجود تھا۔ ثانوی = کسی ایسے سے جس نے بعد میں اس کا مطالعہ کیا۔'
    },
    zh: {
      title: '热身：第一手与第二手',
      items: [
        { before: '本人亲手写的信是一份', after: '资料。', choices: ['第一手', '第二手', '社区'], a: 0 },
        { before: '多年后有人写的关于此人的书是一份', after: '资料。', choices: ['第一手', '第二手', '勇敢的'], a: 1 },
        { before: '当一个主张有来自资料的', after: '支撑时，它就更有力。', choices: ['证据', '一个标题', '一个相框'], a: 0 }
      ],
      takeaway: '第一手＝来自当时在场的人。第二手＝来自后来研究它的人。'
    } }
  },
  {
    id: 'g3-name-the-library-deep-exit', grade: 3, unit: 'name-the-library',
    unitTitle: 'Name the Library — Who Should We Honor?', phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.14(c)(14)(A–C)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort the sources',
      cats: ['Primary (was there)', 'Secondary (studied later)'],
      items: [
        { t: 'A photo taken during the person’s life', c: 0 },
        { t: 'A letter the person wrote', c: 0 },
        { t: 'A speech the person gave', c: 0 },
        { t: 'A biography book written years later', c: 1 },
        { t: 'A Nat Geo Kids article about the person', c: 1 },
        { t: 'An encyclopedia page about the person', c: 1 }
      ],
      takeaway: 'Sorting sources into primary vs. secondary is how you check what you can trust.'
    },
    es: {
      title: 'Salida: clasifica las fuentes',
      cats: ['Primaria (estuvo allí)', 'Secundaria (estudiada después)'],
      items: [
        { t: 'Una foto tomada durante la vida de la persona', c: 0 },
        { t: 'Una carta que la persona escribió', c: 0 },
        { t: 'Un discurso que la persona pronunció', c: 0 },
        { t: 'Un libro de biografía escrito años después', c: 1 },
        { t: 'Un artículo de Nat Geo Kids sobre la persona', c: 1 },
        { t: 'Una página de enciclopedia sobre la persona', c: 1 }
      ],
      takeaway: 'Clasificar fuentes en primaria vs. secundaria es como compruebas en qué puedes confiar.'
    },
    vi: {
      title: 'Phiếu ra: phân loại các nguồn',
      cats: ['Sơ cấp (đã có mặt)', 'Thứ cấp (nghiên cứu sau)'],
      items: [
        { t: 'Một tấm ảnh chụp trong đời của người đó', c: 0 },
        { t: 'Một lá thư do người đó viết', c: 0 },
        { t: 'Một bài diễn văn người đó đọc', c: 0 },
        { t: 'Một cuốn tiểu sử viết nhiều năm sau', c: 1 },
        { t: 'Một bài Nat Geo Kids về người đó', c: 1 },
        { t: 'Một trang bách khoa toàn thư về người đó', c: 1 }
      ],
      takeaway: 'Phân loại nguồn thành sơ cấp và thứ cấp là cách bạn kiểm tra điều gì đáng tin.'
    },
    ar: {
      title: 'الخروج: صنّف المصادر',
      cats: ['أولي (كان حاضرًا)', 'ثانوي (دُرس لاحقًا)'],
      items: [
        { t: 'صورة التُقطت خلال حياة الشخص', c: 0 },
        { t: 'رسالة كتبها الشخص', c: 0 },
        { t: 'خطاب ألقاه الشخص', c: 0 },
        { t: 'كتاب سيرة ذاتية كُتب بعد سنوات', c: 1 },
        { t: 'مقال من Nat Geo Kids عن الشخص', c: 1 },
        { t: 'صفحة موسوعة عن الشخص', c: 1 }
      ],
      takeaway: 'تصنيف المصادر إلى أولي مقابل ثانوي هو كيف تتحقق مما يمكنك الوثوق به.'
    },
    hi: {
      title: 'निकास: स्रोतों को छाँटें',
      cats: ['प्राथमिक (वहाँ मौजूद था)', 'द्वितीयक (बाद में अध्ययन किया)'],
      items: [
        { t: 'व्यक्ति के जीवनकाल में ली गई एक तस्वीर', c: 0 },
        { t: 'व्यक्ति द्वारा लिखा गया एक पत्र', c: 0 },
        { t: 'व्यक्ति द्वारा दिया गया एक भाषण', c: 0 },
        { t: 'वर्षों बाद लिखी गई एक जीवनी पुस्तक', c: 1 },
        { t: 'व्यक्ति के बारे में एक Nat Geo Kids लेख', c: 1 },
        { t: 'व्यक्ति के बारे में एक विश्वकोश पृष्ठ', c: 1 }
      ],
      takeaway: 'स्रोतों को प्राथमिक बनाम द्वितीयक में छाँटना ही जाँचने का तरीका है कि किस पर भरोसा करें।'
    },
    ur: {
      title: 'اخراج: مآخذ کو چھانٹیں',
      cats: ['بنیادی (وہاں موجود تھا)', 'ثانوی (بعد میں مطالعہ کیا)'],
      items: [
        { t: 'شخص کی زندگی کے دوران لی گئی ایک تصویر', c: 0 },
        { t: 'شخص کا لکھا ہوا ایک خط', c: 0 },
        { t: 'شخص کی دی ہوئی ایک تقریر', c: 0 },
        { t: 'برسوں بعد لکھی گئی ایک سوانحی کتاب', c: 1 },
        { t: 'شخص کے بارے میں ایک Nat Geo Kids مضمون', c: 1 },
        { t: 'شخص کے بارے میں ایک انسائیکلوپیڈیا صفحہ', c: 1 }
      ],
      takeaway: 'مآخذ کو بنیادی بمقابلہ ثانوی میں چھانٹنا ہی جانچنے کا طریقہ ہے کہ کس پر بھروسا کریں۔'
    },
    zh: {
      title: '离场：把资料分类',
      cats: ['第一手（当时在场）', '第二手（后来研究）'],
      items: [
        { t: '在此人生前拍摄的一张照片', c: 0 },
        { t: '此人亲手写的一封信', c: 0 },
        { t: '此人发表的一次演讲', c: 0 },
        { t: '多年后写成的一本传记', c: 1 },
        { t: '一篇关于此人的 Nat Geo Kids 文章', c: 1 },
        { t: '一页关于此人的百科全书条目', c: 1 }
      ],
      takeaway: '把资料分成第一手与第二手，就是你检查什么可信的方法。'
    } }
  },

  /* ───────── Grade 3 · Name the Library · TRANSFER ───────── */
  {
    id: 'g3-name-the-library-transfer-entry', grade: 3, unit: 'name-the-library',
    unitTitle: 'Name the Library — Who Should We Honor?', phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.14(c)(16)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving steps',
      seconds: 45,
      questions: [
        { q: 'The FIRST step of solving the library problem is to…', choices: ['vote right away', 'name the problem clearly', 'pick your favorite'], a: 1 },
        { q: 'Before nominating a person, a good problem-solver…', choices: ['gathers information from sources', 'guesses fast', 'ignores other stakeholders'], a: 0 },
        { q: 'A fair choice rests on…', choices: ['who we like best', 'evidence, not just liking', 'the loudest voice'], a: 1 },
        { q: 'After the community votes, the last step is to…', choices: ['forget it', 'evaluate how the choice worked', 'hide the other views'], a: 1 }
      ],
      takeaway: 'Name the problem → gather → weigh → choose → defend → evaluate. That is §113.14(c)(16)(B).'
    },
    es: {
      title: 'Calentamiento: los pasos para resolver problemas',
      seconds: 45,
      questions: [
        { q: 'El PRIMER paso para resolver el problema de la biblioteca es…', choices: ['votar de inmediato', 'nombrar el problema con claridad', 'elegir tu favorito'], a: 1 },
        { q: 'Antes de nominar a una persona, quien resuelve bien problemas…', choices: ['reúne información de fuentes', 'adivina rápido', 'ignora a otras partes interesadas'], a: 0 },
        { q: 'Una elección justa se apoya en…', choices: ['a quién queremos más', 'evidencia, no solo el gusto', 'la voz más fuerte'], a: 1 },
        { q: 'Después de que la comunidad vota, el último paso es…', choices: ['olvidarlo', 'evaluar cómo funcionó la elección', 'ocultar las otras opiniones'], a: 1 }
      ],
      takeaway: 'Nombrar el problema → reunir → sopesar → elegir → defender → evaluar. Eso es §113.14(c)(16)(B).'
    },
    vi: {
      title: 'Khởi động: các bước giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Bước ĐẦU TIÊN để giải bài toán thư viện là…', choices: ['bỏ phiếu ngay', 'nêu rõ vấn đề', 'chọn người mình thích'], a: 1 },
        { q: 'Trước khi đề cử một người, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin từ nguồn', 'đoán nhanh', 'phớt lờ các bên liên quan khác'], a: 0 },
        { q: 'Một lựa chọn công bằng dựa trên…', choices: ['ai ta thích nhất', 'bằng chứng, không chỉ vì thích', 'giọng nói to nhất'], a: 1 },
        { q: 'Sau khi cộng đồng bỏ phiếu, bước cuối cùng là…', choices: ['quên nó đi', 'đánh giá lựa chọn hiệu quả ra sao', 'giấu đi các quan điểm khác'], a: 1 }
      ],
      takeaway: 'Nêu vấn đề → thu thập → cân nhắc → chọn → bảo vệ → đánh giá. Đó là §113.14(c)(16)(B).'
    },
    ar: {
      title: 'تهيئة: خطوات حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'الخطوة الأولى لحل مشكلة المكتبة هي…', choices: ['التصويت فورًا', 'تحديد المشكلة بوضوح', 'اختيار المفضّل لديك'], a: 1 },
        { q: 'قبل ترشيح شخص، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع المعلومات من المصادر', 'التخمين بسرعة', 'تجاهل أصحاب المصلحة الآخرين'], a: 0 },
        { q: 'الاختيار العادل يستند إلى…', choices: ['من نحبّه أكثر', 'الدليل، لا مجرد الميل', 'الصوت الأعلى'], a: 1 },
        { q: 'بعد أن يصوّت المجتمع، الخطوة الأخيرة هي…', choices: ['نسيانه', 'تقييم مدى نجاح الاختيار', 'إخفاء الآراء الأخرى'], a: 1 }
      ],
      takeaway: 'حدِّد المشكلة ← اجمع ← وازِن ← اختَر ← دافِع ← قيِّم. تلك هي §113.14(c)(16)(B).'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान के चरण',
      seconds: 45,
      questions: [
        { q: 'पुस्तकालय की समस्या हल करने का पहला चरण है…', choices: ['तुरंत मतदान करना', 'समस्या को स्पष्ट रूप से नाम देना', 'अपना पसंदीदा चुनना'], a: 1 },
        { q: 'किसी व्यक्ति को नामांकित करने से पहले, अच्छा समस्या-समाधानकर्ता…', choices: ['स्रोतों से जानकारी जुटाता है', 'जल्दी अनुमान लगाता है', 'अन्य हितधारकों को अनदेखा करता है'], a: 0 },
        { q: 'एक निष्पक्ष चुनाव आधारित होता है…', choices: ['हम किसे सबसे अधिक पसंद करते हैं', 'साक्ष्य पर, केवल पसंद पर नहीं', 'सबसे ऊँची आवाज़ पर'], a: 1 },
        { q: 'समुदाय के मतदान के बाद, अंतिम चरण है…', choices: ['उसे भूल जाना', 'यह आँकना कि चुनाव कैसा रहा', 'अन्य विचारों को छिपाना'], a: 1 }
      ],
      takeaway: 'समस्या को नाम दें → जुटाएँ → तौलें → चुनें → बचाव करें → आँकें। यही है §113.14(c)(16)(B)।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کے مراحل',
      seconds: 45,
      questions: [
        { q: 'لائبریری کا مسئلہ حل کرنے کا پہلا مرحلہ ہے…', choices: ['فوراً ووٹ دینا', 'مسئلے کو واضح طور پر نام دینا', 'اپنا پسندیدہ چننا'], a: 1 },
        { q: 'کسی شخص کو نامزد کرنے سے پہلے، اچھا مسئلہ حل کرنے والا…', choices: ['مآخذ سے معلومات جمع کرتا ہے', 'جلدی اندازہ لگاتا ہے', 'دوسرے اسٹیک ہولڈرز کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'ایک منصفانہ انتخاب کی بنیاد ہوتی ہے…', choices: ['ہم کسے سب سے زیادہ پسند کرتے ہیں', 'ثبوت پر، صرف پسند پر نہیں', 'سب سے بلند آواز پر'], a: 1 },
        { q: 'برادری کے ووٹ کے بعد، آخری مرحلہ ہے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ انتخاب کیسا رہا', 'دوسری آراء کو چھپانا'], a: 1 }
      ],
      takeaway: 'مسئلے کو نام دیں ← جمع کریں ← تولیں ← چنیں ← دفاع کریں ← جانچیں۔ یہی ہے §113.14(c)(16)(B)۔'
    },
    zh: {
      title: '热身：解决问题的步骤',
      seconds: 45,
      questions: [
        { q: '解决图书馆命名问题的第一步是…', choices: ['立刻投票', '清楚地界定问题', '选自己最喜欢的'], a: 1 },
        { q: '在提名某人之前，优秀的解决问题者会…', choices: ['从资料中收集信息', '快速猜测', '无视其他利益相关者'], a: 0 },
        { q: '公平的选择依靠…', choices: ['我们最喜欢谁', '证据，而不只是喜好', '最大的嗓门'], a: 1 },
        { q: '社区投票之后，最后一步是…', choices: ['把它忘掉', '评估这个选择效果如何', '隐藏其他观点'], a: 1 }
      ],
      takeaway: '界定问题 → 收集 → 权衡 → 选择 → 辩护 → 评估。这就是 §113.14(c)(16)(B)。'
    } }
  },
  {
    id: 'g3-name-the-library-transfer-exit', grade: 3, unit: 'name-the-library',
    unitTitle: 'Name the Library — Who Should We Honor?', phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.14(c)(16)(B), (c)(15)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim + evidence',
      items: [
        { before: 'Our library should honor this person — that sentence is my', after: '.', choices: ['claim', 'guess', 'title'], a: 0 },
        { before: 'A claim without', after: 'from a source is just an opinion.', choices: ['evidence', 'a name', 'a photo'], a: 0 },
        { before: 'Voting and accepting the result even if it isn’t my first choice is a job of a good', after: '.', choices: ['citizen', 'winner', 'author'], a: 0 }
      ],
      takeaway: 'Claim + evidence, then a fair vote you accept — that is thinking like a good citizen.'
    },
    es: {
      title: 'Salida: afirmación + evidencia',
      items: [
        { before: 'Nuestra biblioteca debería honrar a esta persona — esa oración es mi', after: '.', choices: ['afirmación', 'suposición', 'título'], a: 0 },
        { before: 'Una afirmación sin', after: 'de una fuente es solo una opinión.', choices: ['evidencia', 'un nombre', 'una foto'], a: 0 },
        { before: 'Votar y aceptar el resultado aunque no sea tu primera opción es labor de un buen', after: '.', choices: ['ciudadano', 'ganador', 'autor'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia, y luego un voto justo que aceptas — eso es pensar como un buen ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm + bằng chứng',
      items: [
        { before: 'Thư viện của chúng ta nên vinh danh người này — câu đó là', after: 'của tôi.', choices: ['luận điểm', 'phỏng đoán', 'tiêu đề'], a: 0 },
        { before: 'Một luận điểm không có', after: 'từ một nguồn thì chỉ là ý kiến.', choices: ['bằng chứng', 'một cái tên', 'một tấm ảnh'], a: 0 },
        { before: 'Bỏ phiếu và chấp nhận kết quả dù không phải lựa chọn đầu tiên là việc của một', after: 'tốt.', choices: ['công dân', 'người thắng cuộc', 'tác giả'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng, rồi một cuộc bỏ phiếu công bằng mà bạn chấp nhận — đó là tư duy của một công dân tốt.'
    },
    ar: {
      title: 'الخروج: ادعاء + دليل',
      items: [
        { before: 'ينبغي أن تُكرّم مكتبتنا هذا الشخص — تلك الجملة هي', after: 'الخاص بي.', choices: ['ادعائي', 'تخميني', 'عنواني'], a: 0 },
        { before: 'الادعاء بلا', after: 'من مصدر ما هو إلا رأي.', choices: ['دليل', 'اسم', 'صورة'], a: 0 },
        { before: 'التصويت وقبول النتيجة حتى لو لم تكن خيارك الأول هو عمل', after: 'صالح.', choices: ['مواطن', 'فائز', 'مؤلف'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل، ثم تصويت عادل تقبله — تلك هي طريقة تفكير المواطن الصالح.'
    },
    hi: {
      title: 'निकास: दावा + साक्ष्य',
      items: [
        { before: 'हमारे पुस्तकालय को इस व्यक्ति को सम्मानित करना चाहिए — यह वाक्य मेरा', after: 'है।', choices: ['दावा', 'अनुमान', 'शीर्षक'], a: 0 },
        { before: 'किसी स्रोत से', after: 'के बिना दावा महज़ एक राय है।', choices: ['साक्ष्य', 'एक नाम', 'एक तस्वीर'], a: 0 },
        { before: 'मतदान करना और परिणाम स्वीकारना, भले ही वह आपकी पहली पसंद न हो, एक अच्छे', after: 'का काम है।', choices: ['नागरिक', 'विजेता', 'लेखक'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य, फिर एक निष्पक्ष मतदान जिसे आप स्वीकारते हैं — यही एक अच्छे नागरिक की तरह सोचना है।'
    },
    ur: {
      title: 'اخراج: دعویٰ + ثبوت',
      items: [
        { before: 'ہماری لائبریری کو اس شخص کو عزت دینی چاہیے — یہ جملہ میرا', after: 'ہے۔', choices: ['دعویٰ', 'اندازہ', 'عنوان'], a: 0 },
        { before: 'کسی ماخذ سے', after: 'کے بغیر دعویٰ محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک نام', 'ایک تصویر'], a: 0 },
        { before: 'ووٹ دینا اور نتیجہ قبول کرنا خواہ وہ آپ کا پہلا انتخاب نہ ہو، ایک اچھے', after: 'کا کام ہے۔', choices: ['شہری', 'فاتح', 'مصنف'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت، پھر ایک منصفانہ ووٹ جسے آپ قبول کریں — یہی ایک اچھے شہری کی طرح سوچنا ہے۔'
    },
    zh: {
      title: '离场：主张 + 证据',
      items: [
        { before: '我们的图书馆应当向这个人致敬——这句话是我的', after: '。', choices: ['主张', '猜测', '标题'], a: 0 },
        { before: '没有来自资料的', after: '的主张只是一种意见。', choices: ['证据', '一个名字', '一张照片'], a: 0 },
        { before: '投票并接受结果，即使那不是你的首选，这是一个好', after: '的职责。', choices: ['公民', '赢家', '作者'], a: 0 }
      ],
      takeaway: '主张 + 证据，再加上你所接受的公平投票——这就是像好公民一样思考。'
    } }
  }

]);
