/* PST Arcade — ticket registry. Each ticket is retrieval practice for one unit + phase.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. To add tickets, append objects
   with the same shape: {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 6 · Who Decides? · SURFACE ───────── */
  {
    id: 'g6-who-decides-surface-entry', grade: 6, unit: 'who-decides',
    unitTitle: "Who Decides? — Building a Government from Scratch", phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.18(c)(9), (c)(10), (c)(12)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: government words',
      seconds: 45,
      questions: [
        { q: 'The system a society uses to make and enforce its rules is a…', choices: ['government', 'citizen', 'stakeholder'], a: 0 },
        { q: 'A government whose power has real limits it must obey is a…', choices: ['unlimited government', 'limited government', 'monarchy'], a: 1 },
        { q: 'A government in which the people hold power, usually by voting, is a…', choices: ['democracy', 'monarchy', 'oligarchy'], a: 0 },
        { q: 'The idea that everyone, even leaders, must follow the same laws is the…', choices: ['rule of law', 'constitution', 'republic'], a: 0 }
      ],
      takeaway: 'Know these four words and you can reason about who holds power for the rest of the unit.'
    },
    es: {
      title: 'Calentamiento: palabras de gobierno',
      seconds: 45,
      questions: [
        { q: 'El sistema que una sociedad usa para crear y hacer cumplir sus reglas es un…', choices: ['gobierno', 'ciudadano', 'parte interesada'], a: 0 },
        { q: 'Un gobierno cuyo poder tiene límites reales que debe obedecer es un…', choices: ['gobierno ilimitado', 'gobierno limitado', 'monarquía'], a: 1 },
        { q: 'Un gobierno en el que el pueblo tiene el poder, generalmente por voto, es una…', choices: ['democracia', 'monarquía', 'oligarquía'], a: 0 },
        { q: 'La idea de que todos, incluso los líderes, deben cumplir las mismas leyes es el…', choices: ['estado de derecho', 'constitución', 'república'], a: 0 }
      ],
      takeaway: 'Domina estas cuatro palabras y podrás razonar sobre quién tiene el poder durante el resto de la unidad.'
    },
    vi: {
      title: 'Khởi động: từ vựng về chính quyền',
      seconds: 45,
      questions: [
        { q: 'Hệ thống mà một xã hội dùng để đặt ra và thực thi các quy tắc của mình là một…', choices: ['chính quyền', 'công dân', 'bên liên quan'], a: 0 },
        { q: 'Một chính quyền mà quyền lực có những giới hạn thực sự phải tuân theo là một…', choices: ['chính quyền không giới hạn', 'chính quyền có giới hạn', 'chế độ quân chủ'], a: 1 },
        { q: 'Một chính quyền trong đó người dân nắm quyền, thường bằng cách bỏ phiếu, là một…', choices: ['nền dân chủ', 'chế độ quân chủ', 'chế độ đầu sỏ'], a: 0 },
        { q: 'Ý tưởng rằng mọi người, kể cả nhà lãnh đạo, đều phải tuân theo cùng những luật lệ là…', choices: ['pháp quyền', 'hiến pháp', 'nền cộng hòa'], a: 0 }
      ],
      takeaway: 'Nắm được bốn từ này là bạn có thể lập luận về việc ai nắm quyền trong suốt phần còn lại của đơn vị bài học.'
    },
    ar: {
      title: 'تهيئة: كلمات الحكم',
      seconds: 45,
      questions: [
        { q: 'النظام الذي يستخدمه المجتمع لوضع قواعده وإنفاذها هو…', choices: ['حكومة', 'مواطن', 'صاحب مصلحة'], a: 0 },
        { q: 'الحكومة التي لسلطتها حدود حقيقية يجب أن تلتزم بها هي…', choices: ['حكومة غير محدودة', 'حكومة محدودة', 'ملكية'], a: 1 },
        { q: 'الحكومة التي يملك فيها الشعب السلطة، عادةً عن طريق التصويت، هي…', choices: ['ديمقراطية', 'ملكية', 'حكم القلة'], a: 0 },
        { q: 'الفكرة القائلة بأن الجميع، حتى القادة، يجب أن يتبعوا القوانين نفسها هي…', choices: ['سيادة القانون', 'دستور', 'جمهورية'], a: 0 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وستتمكن من التفكير في من يملك السلطة طوال بقية الوحدة.'
    },
    hi: {
      title: 'वार्म-अप: सरकार के शब्द',
      seconds: 45,
      questions: [
        { q: 'वह व्यवस्था जिसे कोई समाज अपने नियम बनाने और लागू करने के लिए उपयोग करता है, वह है…', choices: ['सरकार', 'नागरिक', 'हितधारक'], a: 0 },
        { q: 'वह सरकार जिसकी शक्ति की वास्तविक सीमाएँ हैं जिनका उसे पालन करना पड़ता है, वह है…', choices: ['असीमित सरकार', 'सीमित सरकार', 'राजतंत्र'], a: 1 },
        { q: 'वह सरकार जिसमें जनता के पास शक्ति होती है, आमतौर पर मतदान द्वारा, वह है…', choices: ['लोकतंत्र', 'राजतंत्र', 'कुलीनतंत्र'], a: 0 },
        { q: 'यह विचार कि सभी, यहाँ तक कि नेता भी, समान कानूनों का पालन करें, वह है…', choices: ['कानून का शासन', 'संविधान', 'गणराज्य'], a: 0 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और आप शेष इकाई में इस पर तर्क कर सकेंगे कि शक्ति किसके पास है।'
    },
    ur: {
      title: 'وارم اپ: حکومت کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'وہ نظام جسے کوئی معاشرہ اپنے قواعد بنانے اور نافذ کرنے کے لیے استعمال کرتا ہے، وہ ہے…', choices: ['حکومت', 'شہری', 'اسٹیک ہولڈر'], a: 0 },
        { q: 'وہ حکومت جس کی طاقت کی حقیقی حدود ہوں جن کی اسے پابندی کرنی پڑے، وہ ہے…', choices: ['لامحدود حکومت', 'محدود حکومت', 'بادشاہت'], a: 1 },
        { q: 'وہ حکومت جس میں عوام کے پاس طاقت ہو، عموماً ووٹ کے ذریعے، وہ ہے…', choices: ['جمہوریت', 'بادشاہت', 'چند سری حکومت'], a: 0 },
        { q: 'یہ خیال کہ سب، حتیٰ کہ رہنما بھی، ایک ہی قوانین کی پیروی کریں، وہ ہے…', choices: ['قانون کی حکمرانی', 'آئین', 'جمہوریہ'], a: 0 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو آپ باقی اکائی میں اس پر استدلال کر سکیں گے کہ طاقت کس کے پاس ہے۔'
    },
    zh: {
      title: '热身：政府词汇',
      seconds: 45,
      questions: [
        { q: '一个社会用来制定和执行规则的体系称为…', choices: ['政府', '公民', '利益相关者'], a: 0 },
        { q: '权力有必须遵守的真实限制的政府是…', choices: ['无限政府', '有限政府', '君主制'], a: 1 },
        { q: '人民掌握权力、通常通过投票的政府是…', choices: ['民主制', '君主制', '寡头制'], a: 0 },
        { q: '人人（包括领导者）都必须遵守同样法律的理念是…', choices: ['法治', '宪法', '共和制'], a: 0 }
      ],
      takeaway: '掌握这四个词，你就能在本单元其余部分里推理谁掌握权力。'
    } }
  },
  {
    id: 'g6-who-decides-surface-exit', grade: 6, unit: 'who-decides',
    unitTitle: "Who Decides? — Building a Government from Scratch", phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.18(c)(9), (c)(10), (c)(12)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['limited government', 'a government whose power has real limits'],
        ['democracy', 'a government in which the people hold power by voting'],
        ['monarchy', 'a government led by a king or queen'],
        ['rule of law', 'everyone, even leaders, must follow the same laws'],
        ['constitution', "a society's highest written plan for governing itself"]
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['gobierno limitado', 'un gobierno cuyo poder tiene límites reales'],
        ['democracia', 'un gobierno en el que el pueblo tiene el poder por voto'],
        ['monarquía', 'un gobierno encabezado por un rey o una reina'],
        ['estado de derecho', 'todos, incluso los líderes, deben cumplir las mismas leyes'],
        ['constitución', 'el plan escrito supremo de una sociedad para gobernarse']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['chính quyền có giới hạn', 'một chính quyền mà quyền lực có những giới hạn thực sự'],
        ['nền dân chủ', 'một chính quyền trong đó người dân nắm quyền bằng bỏ phiếu'],
        ['chế độ quân chủ', 'một chính quyền do vua hoặc nữ hoàng đứng đầu'],
        ['pháp quyền', 'mọi người, kể cả nhà lãnh đạo, đều phải tuân theo cùng luật lệ'],
        ['hiến pháp', 'bản kế hoạch thành văn cao nhất của một xã hội để tự quản trị']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['حكومة محدودة', 'حكومة لسلطتها حدود حقيقية'],
        ['ديمقراطية', 'حكومة يملك فيها الشعب السلطة عن طريق التصويت'],
        ['ملكية', 'حكومة يقودها ملك أو ملكة'],
        ['سيادة القانون', 'الجميع، حتى القادة، يجب أن يتبعوا القوانين نفسها'],
        ['دستور', 'أعلى خطة مكتوبة لمجتمع كي يحكم نفسه']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['सीमित सरकार', 'एक सरकार जिसकी शक्ति की वास्तविक सीमाएँ हैं'],
        ['लोकतंत्र', 'एक सरकार जिसमें जनता मतदान द्वारा शक्ति रखती है'],
        ['राजतंत्र', 'एक सरकार जिसका नेतृत्व राजा या रानी करते हैं'],
        ['कानून का शासन', 'सभी, यहाँ तक कि नेता भी, समान कानूनों का पालन करें'],
        ['संविधान', 'खुद को शासित करने के लिए किसी समाज की सर्वोच्च लिखित योजना']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['محدود حکومت', 'ایک حکومت جس کی طاقت کی حقیقی حدود ہیں'],
        ['جمہوریت', 'ایک حکومت جس میں عوام ووٹ کے ذریعے طاقت رکھتے ہیں'],
        ['بادشاہت', 'ایک حکومت جس کی قیادت بادشاہ یا ملکہ کرتے ہیں'],
        ['قانون کی حکمرانی', 'سب، حتیٰ کہ رہنما بھی، ایک ہی قوانین کی پیروی کریں'],
        ['آئین', 'خود پر حکومت کرنے کے لیے کسی معاشرے کا اعلیٰ ترین تحریری منصوبہ']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['有限政府', '一个权力有真实限制的政府'],
        ['民主制', '一个由人民通过投票掌权的政府'],
        ['君主制', '一个由国王或女王领导的政府'],
        ['法治', '人人（包括领导者）都必须遵守同样的法律'],
        ['宪法', '一个社会用以自我治理的最高成文规划']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 6 · Who Decides? · DEEP ───────── */
  {
    id: 'g6-who-decides-deep-entry', grade: 6, unit: 'who-decides',
    unitTitle: "Who Decides? — Building a Government from Scratch", phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.18(c)(9), (c)(10), (c)(13), (c)(14)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: power & trade-offs',
      items: [
        { before: 'A democracy gives many people a voice, but its trade-off is that decisions can be', after: '.', choices: ['fast', 'slow', 'secret'], a: 1 },
        { before: 'When one leader holds unlimited power, orders are fast and clear, but', after: 'are easily lost.', choices: ['rights', 'roads', 'maps'], a: 0 },
        { before: 'On the spectrum of government, a constitutional monarchy sits toward the', after: 'side because a written law limits the ruler.', choices: ['limited', 'unlimited', 'lawless'], a: 0 }
      ],
      takeaway: 'Every government type trades one value for another — always name what it gives AND what it costs.'
    },
    es: {
      title: 'Calentamiento: poder y concesiones',
      items: [
        { before: 'Una democracia da voz a muchas personas, pero su concesión es que las decisiones pueden ser', after: '.', choices: ['rápidas', 'lentas', 'secretas'], a: 1 },
        { before: 'Cuando un líder tiene poder ilimitado, las órdenes son rápidas y claras, pero los', after: 'se pierden fácilmente.', choices: ['derechos', 'caminos', 'mapas'], a: 0 },
        { before: 'En el espectro de gobierno, una monarquía constitucional se ubica hacia el lado', after: 'porque una ley escrita limita al gobernante.', choices: ['limitado', 'ilimitado', 'sin ley'], a: 0 }
      ],
      takeaway: 'Todo tipo de gobierno cambia un valor por otro: nombra siempre lo que da Y lo que cuesta.'
    },
    vi: {
      title: 'Khởi động: quyền lực & sự đánh đổi',
      items: [
        { before: 'Nền dân chủ trao tiếng nói cho nhiều người, nhưng cái giá của nó là các quyết định có thể', after: '.', choices: ['nhanh', 'chậm', 'bí mật'], a: 1 },
        { before: 'Khi một nhà lãnh đạo nắm quyền lực không giới hạn, các mệnh lệnh nhanh và rõ ràng, nhưng', after: 'dễ bị mất.', choices: ['các quyền', 'các con đường', 'các tấm bản đồ'], a: 0 },
        { before: 'Trên phổ chính quyền, chế độ quân chủ lập hiến nằm về phía', after: 'vì một luật thành văn giới hạn nhà cai trị.', choices: ['có giới hạn', 'không giới hạn', 'vô luật'], a: 0 }
      ],
      takeaway: 'Mỗi loại chính quyền đánh đổi giá trị này lấy giá trị khác — luôn nêu ra cái nó cho VÀ cái nó phải trả giá.'
    },
    ar: {
      title: 'تهيئة: السلطة والمفاضلات',
      items: [
        { before: 'الديمقراطية تمنح صوتًا لكثير من الناس، لكن مفاضلتها أن القرارات قد تكون', after: '.', choices: ['سريعة', 'بطيئة', 'سرّية'], a: 1 },
        { before: 'عندما يملك قائد واحد سلطة غير محدودة، تكون الأوامر سريعة وواضحة، لكن', after: 'تُفقد بسهولة.', choices: ['الحقوق', 'الطرق', 'الخرائط'], a: 0 },
        { before: 'على طيف الحكم، تقع الملكية الدستورية نحو الجانب', after: 'لأن قانونًا مكتوبًا يقيّد الحاكم.', choices: ['المحدود', 'غير المحدود', 'الفوضوي'], a: 0 }
      ],
      takeaway: 'كل نوع من الحكم يقايض قيمة بأخرى — سمِّ دائمًا ما يمنحه وما يكلّفه.'
    },
    hi: {
      title: 'वार्म-अप: शक्ति और समझौते',
      items: [
        { before: 'लोकतंत्र कई लोगों को आवाज़ देता है, लेकिन इसका समझौता यह है कि निर्णय हो सकते हैं', after: '।', choices: ['तेज़', 'धीमे', 'गुप्त'], a: 1 },
        { before: 'जब एक नेता के पास असीमित शक्ति होती है, तो आदेश तेज़ और स्पष्ट होते हैं, लेकिन', after: 'आसानी से खो जाते हैं।', choices: ['अधिकार', 'सड़कें', 'नक्शे'], a: 0 },
        { before: 'सरकार के स्पेक्ट्रम पर, संवैधानिक राजतंत्र', after: 'ओर स्थित है क्योंकि एक लिखित कानून शासक को सीमित करता है।', choices: ['सीमित', 'असीमित', 'कानूनहीन'], a: 0 }
      ],
      takeaway: 'हर सरकार का प्रकार एक मूल्य के बदले दूसरा देता है — हमेशा बताएँ कि वह क्या देती है और क्या लागत लेती है।'
    },
    ur: {
      title: 'وارم اپ: طاقت اور سمجھوتے',
      items: [
        { before: 'جمہوریت بہت سے لوگوں کو آواز دیتی ہے، لیکن اس کا سمجھوتہ یہ ہے کہ فیصلے ہو سکتے ہیں', after: '۔', choices: ['تیز', 'سست', 'خفیہ'], a: 1 },
        { before: 'جب ایک رہنما کے پاس لامحدود طاقت ہو، تو احکامات تیز اور واضح ہوتے ہیں، لیکن', after: 'آسانی سے کھو جاتے ہیں۔', choices: ['حقوق', 'سڑکیں', 'نقشے'], a: 0 },
        { before: 'حکومت کے دائرے پر، آئینی بادشاہت', after: 'طرف واقع ہے کیونکہ ایک تحریری قانون حکمران کو محدود کرتا ہے۔', choices: ['محدود', 'لامحدود', 'بے قانون'], a: 0 }
      ],
      takeaway: 'حکومت کی ہر قسم ایک قدر کے بدلے دوسری دیتی ہے — ہمیشہ بتائیں کہ وہ کیا دیتی ہے اور کیا قیمت لیتی ہے۔'
    },
    zh: {
      title: '热身：权力与取舍',
      items: [
        { before: '民主制让许多人有发言权，但它的取舍是决策可能', after: '。', choices: ['快', '慢', '保密'], a: 1 },
        { before: '当一位领导者掌握无限权力时，命令快速而明确，但', after: '容易丧失。', choices: ['权利', '道路', '地图'], a: 0 },
        { before: '在政府的谱系上，君主立宪制偏向', after: '一侧，因为一部成文法律限制着统治者。', choices: ['有限', '无限', '无法'], a: 0 }
      ],
      takeaway: '每种政府类型都是以一种价值换取另一种——总要说出它给予什么以及付出什么代价。'
    } }
  },
  {
    id: 'g6-who-decides-deep-exit', grade: 6, unit: 'who-decides',
    unitTitle: "Who Decides? — Building a Government from Scratch", phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.18(c)(9), (c)(10)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort by how power is limited',
      cats: ['Limited government', 'Unlimited government'],
      items: [
        { t: 'Leaders must obey a written constitution', c: 0 },
        { t: 'Citizens can vote leaders out', c: 0 },
        { t: 'Rights are protected by law', c: 0 },
        { t: 'One leader can change the rules alone', c: 1 },
        { t: 'No law can stop the ruler', c: 1 },
        { t: "Citizens' rights can be taken away at will", c: 1 }
      ],
      takeaway: 'Sorting features into limited vs unlimited is the concept map behind judging any government.'
    },
    es: {
      title: 'Salida: clasifica según cómo se limita el poder',
      cats: ['Gobierno limitado', 'Gobierno ilimitado'],
      items: [
        { t: 'Los líderes deben obedecer una constitución escrita', c: 0 },
        { t: 'Los ciudadanos pueden votar para sacar a los líderes', c: 0 },
        { t: 'Los derechos están protegidos por la ley', c: 0 },
        { t: 'Un solo líder puede cambiar las reglas por sí mismo', c: 1 },
        { t: 'Ninguna ley puede detener al gobernante', c: 1 },
        { t: 'Los derechos de los ciudadanos pueden quitarse a voluntad', c: 1 }
      ],
      takeaway: 'Clasificar rasgos en limitado vs ilimitado es el mapa conceptual para juzgar cualquier gobierno.'
    },
    vi: {
      title: 'Phiếu ra: phân loại theo cách quyền lực bị giới hạn',
      cats: ['Chính quyền có giới hạn', 'Chính quyền không giới hạn'],
      items: [
        { t: 'Nhà lãnh đạo phải tuân theo một hiến pháp thành văn', c: 0 },
        { t: 'Công dân có thể bỏ phiếu bãi nhiệm lãnh đạo', c: 0 },
        { t: 'Các quyền được luật pháp bảo vệ', c: 0 },
        { t: 'Một nhà lãnh đạo có thể tự mình thay đổi luật lệ', c: 1 },
        { t: 'Không luật nào có thể ngăn nhà cai trị', c: 1 },
        { t: 'Quyền của công dân có thể bị tước bỏ tùy ý', c: 1 }
      ],
      takeaway: 'Phân loại đặc điểm thành có giới hạn và không giới hạn là sơ đồ khái niệm để đánh giá bất kỳ chính quyền nào.'
    },
    ar: {
      title: 'الخروج: صنّف حسب كيفية تقييد السلطة',
      cats: ['حكومة محدودة', 'حكومة غير محدودة'],
      items: [
        { t: 'يجب على القادة الالتزام بدستور مكتوب', c: 0 },
        { t: 'يستطيع المواطنون التصويت لإقالة القادة', c: 0 },
        { t: 'الحقوق محمية بالقانون', c: 0 },
        { t: 'يستطيع قائد واحد تغيير القواعد بمفرده', c: 1 },
        { t: 'لا قانون يستطيع إيقاف الحاكم', c: 1 },
        { t: 'يمكن سلب حقوق المواطنين حسب الهوى', c: 1 }
      ],
      takeaway: 'تصنيف السمات إلى محدودة مقابل غير محدودة هو الخريطة المفاهيمية للحكم على أي حكومة.'
    },
    hi: {
      title: 'निकास: शक्ति कैसे सीमित है, उसके अनुसार छाँटें',
      cats: ['सीमित सरकार', 'असीमित सरकार'],
      items: [
        { t: 'नेताओं को एक लिखित संविधान का पालन करना चाहिए', c: 0 },
        { t: 'नागरिक मतदान करके नेताओं को हटा सकते हैं', c: 0 },
        { t: 'अधिकार कानून द्वारा संरक्षित हैं', c: 0 },
        { t: 'एक अकेला नेता अकेले ही नियम बदल सकता है', c: 1 },
        { t: 'कोई कानून शासक को रोक नहीं सकता', c: 1 },
        { t: 'नागरिकों के अधिकार मनमर्ज़ी से छीने जा सकते हैं', c: 1 }
      ],
      takeaway: 'विशेषताओं को सीमित बनाम असीमित में छाँटना ही किसी भी सरकार को परखने का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: طاقت کیسے محدود ہے، اس کے مطابق چھانٹیں',
      cats: ['محدود حکومت', 'لامحدود حکومت'],
      items: [
        { t: 'رہنماؤں کو ایک تحریری آئین کی پابندی کرنی چاہیے', c: 0 },
        { t: 'شہری ووٹ دے کر رہنماؤں کو ہٹا سکتے ہیں', c: 0 },
        { t: 'حقوق قانون کے ذریعے محفوظ ہیں', c: 0 },
        { t: 'ایک اکیلا رہنما تنہا قواعد بدل سکتا ہے', c: 1 },
        { t: 'کوئی قانون حکمران کو نہیں روک سکتا', c: 1 },
        { t: 'شہریوں کے حقوق مرضی سے چھینے جا سکتے ہیں', c: 1 }
      ],
      takeaway: 'خصوصیات کو محدود بمقابلہ لامحدود میں چھانٹنا ہی کسی بھی حکومت کو پرکھنے کا تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：按权力如何被限制来分类',
      cats: ['有限政府', '无限政府'],
      items: [
        { t: '领导者必须遵守一部成文宪法', c: 0 },
        { t: '公民可以投票罢免领导者', c: 0 },
        { t: '权利受法律保护', c: 0 },
        { t: '一位领导者可以独自更改规则', c: 1 },
        { t: '没有法律能约束统治者', c: 1 },
        { t: '公民的权利可以被随意剥夺', c: 1 }
      ],
      takeaway: '把特征分成有限与无限，就是评判任何政府背后的概念图。'
    } }
  },

  /* ───────── Grade 6 · Who Decides? · TRANSFER ───────── */
  {
    id: 'g6-who-decides-transfer-entry', grade: 6, unit: 'who-decides',
    unitTitle: "Who Decides? — Building a Government from Scratch", phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.18(c)(22)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving steps',
      seconds: 45,
      questions: [
        { q: 'The FIRST thing a problem-solver does is…', choices: ['pick a solution', 'define the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing, a good problem-solver…', choices: ['gathers valid information & weighs options', 'guesses quickly', 'ignores other views'], a: 0 },
        { q: 'A strong recommendation for a government is backed by…', choices: ['a loud voice', 'evidence + trade-offs', 'only feelings'], a: 1 },
        { q: 'After choosing a solution, you should…', choices: ['forget it', 'evaluate how well it worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Define → gather → weigh → decide → defend → evaluate. That is the whole transfer move.'
    },
    es: {
      title: 'Calentamiento: los pasos para resolver problemas',
      seconds: 45,
      questions: [
        { q: 'Lo PRIMERO que hace quien resuelve problemas es…', choices: ['elegir una solución', 'definir el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir, quien resuelve bien problemas…', choices: ['reúne información válida y sopesa opciones', 'adivina rápido', 'ignora otras opiniones'], a: 0 },
        { q: 'Una recomendación sólida de gobierno se respalda con…', choices: ['una voz fuerte', 'evidencia + concesiones', 'solo sentimientos'], a: 1 },
        { q: 'Después de elegir una solución, deberías…', choices: ['olvidarla', 'evaluar qué tan bien funcionó', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Definir → reunir → sopesar → decidir → defender → evaluar. Ese es todo el movimiento de transferencia.'
    },
    vi: {
      title: 'Khởi động: các bước giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Điều ĐẦU TIÊN người giải quyết vấn đề làm là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin hợp lệ & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua quan điểm khác'], a: 0 },
        { q: 'Một đề xuất vững chắc về chính quyền được củng cố bằng…', choices: ['một giọng nói to', 'bằng chứng + sự đánh đổi', 'chỉ cảm xúc'], a: 1 },
        { q: 'Sau khi chọn một giải pháp, bạn nên…', choices: ['quên nó đi', 'đánh giá xem nó hiệu quả ra sao', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → quyết định → bảo vệ → đánh giá. Đó chính là toàn bộ bước chuyển giao.'
    },
    ar: {
      title: 'تهيئة: خطوات حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'أول ما يفعله حلّال المشكلات هو…', choices: ['اختيار حل', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل الاختيار، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع معلومات صحيحة وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل الآراء الأخرى'], a: 0 },
        { q: 'التوصية القوية بشأن الحكومة تُدعم بـ…', choices: ['صوت عالٍ', 'دليل + مفاضلات', 'المشاعر فقط'], a: 1 },
        { q: 'بعد اختيار حل، ينبغي أن…', choices: ['تنساه', 'تقيّم مدى نجاحه', 'تخفي المفاضلات'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن ← قرِّر ← دافِع ← قيِّم. تلك هي حركة النقل بأكملها.'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान के चरण',
      seconds: 45,
      questions: [
        { q: 'समस्या हल करने वाला सबसे पहले जो करता है, वह है…', choices: ['एक समाधान चुनना', 'समस्या को परिभाषित करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'चुनने से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['वैध जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य विचारों को अनदेखा करता है'], a: 0 },
        { q: 'सरकार के लिए एक मजबूत सिफ़ारिश का आधार होता है…', choices: ['एक ऊँची आवाज़', 'साक्ष्य + समझौते', 'केवल भावनाएँ'], a: 1 },
        { q: 'समाधान चुनने के बाद, आपको चाहिए…', choices: ['उसे भूल जाना', 'यह आँकना कि वह कितना अच्छा रहा', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → निर्णय लें → बचाव करें → आँकें। यही पूरी अंतरण चाल है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کے مراحل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے والا سب سے پہلے جو کرتا ہے، وہ ہے…', choices: ['ایک حل چننا', 'مسئلے کو متعین کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'چننے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['درست معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دوسری آراء کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'حکومت کے لیے ایک مضبوط سفارش کی بنیاد ہوتی ہے…', choices: ['ایک بلند آواز', 'ثبوت + سمجھوتے', 'صرف جذبات'], a: 1 },
        { q: 'حل چننے کے بعد، آپ کو چاہیے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ وہ کتنا کارگر رہا', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← فیصلہ کریں ← دفاع کریں ← جانچیں۔ یہی پوری منتقلی کی چال ہے۔'
    },
    zh: {
      title: '热身：解决问题的步骤',
      seconds: 45,
      questions: [
        { q: '解决问题者首先要做的是…', choices: ['挑选一个方案', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在做出选择之前，优秀的解决问题者会…', choices: ['收集有效信息并权衡各种方案', '快速猜测', '无视他人的观点'], a: 0 },
        { q: '一份有力的政府建议背后有…', choices: ['大嗓门', '证据 + 取舍', '只有感受'], a: 1 },
        { q: '选定方案之后，你应当…', choices: ['把它忘掉', '评估它的效果如何', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 决定 → 辩护 → 评估。这就是整个迁移动作。'
    } }
  },
  {
    id: 'g6-who-decides-transfer-exit', grade: 6, unit: 'who-decides',
    unitTitle: "Who Decides? — Building a Government from Scratch", phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.18(c)(22)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: defend your government',
      items: [
        { before: 'A recommendation for who should hold power without', after: 'is just an opinion.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: 'Every government structure asks a society to accept some', after: '— name them honestly.', choices: ['trade-offs', 'colors', 'holidays'], a: 0 },
        { before: 'After the founders decide, they must', after: 'how well the government protects rights and keeps order.', choices: ['evaluate', 'forget', 'hide'], a: 0 }
      ],
      takeaway: 'Evidence + trade-offs + evaluation = deciding like a founder who has to live with the choice.'
    },
    es: {
      title: 'Salida: defiende tu gobierno',
      items: [
        { before: 'Una recomendación sobre quién debe tener el poder sin', after: 'es solo una opinión.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Toda estructura de gobierno pide a una sociedad aceptar algunas', after: '— nómbralas con honestidad.', choices: ['concesiones', 'colores', 'fiestas'], a: 0 },
        { before: 'Después de que los fundadores deciden, deben', after: 'qué tan bien el gobierno protege los derechos y mantiene el orden.', choices: ['evaluar', 'olvidar', 'ocultar'], a: 0 }
      ],
      takeaway: 'Evidencia + concesiones + evaluación = decidir como un fundador que tendrá que vivir con la elección.'
    },
    vi: {
      title: 'Phiếu ra: bảo vệ chính quyền của bạn',
      items: [
        { before: 'Một đề xuất về việc ai nên nắm quyền mà không có', after: 'thì chỉ là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Mọi cấu trúc chính quyền đều đòi hỏi một xã hội chấp nhận vài', after: '— hãy nêu chúng một cách trung thực.', choices: ['sự đánh đổi', 'màu sắc', 'ngày lễ'], a: 0 },
        { before: 'Sau khi các nhà sáng lập quyết định, họ phải', after: 'xem chính quyền bảo vệ các quyền và giữ trật tự tốt đến đâu.', choices: ['đánh giá', 'quên đi', 'che giấu'], a: 0 }
      ],
      takeaway: 'Bằng chứng + sự đánh đổi + đánh giá = quyết định như một nhà sáng lập phải sống với lựa chọn của mình.'
    },
    ar: {
      title: 'الخروج: دافِع عن حكومتك',
      items: [
        { before: 'التوصية بشأن من يملك السلطة بلا', after: 'ما هي إلا رأي.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'كل بنية حكم تطلب من المجتمع قبول بعض', after: '— سمِّها بصدق.', choices: ['المفاضلات', 'الألوان', 'الأعياد'], a: 0 },
        { before: 'بعد أن يقرر المؤسسون، عليهم أن', after: 'مدى نجاح الحكومة في حماية الحقوق وحفظ النظام.', choices: ['يقيّموا', 'ينسوا', 'يخفوا'], a: 0 }
      ],
      takeaway: 'دليل + مفاضلات + تقييم = أن تقرر كمؤسس عليه أن يعيش مع خياره.'
    },
    hi: {
      title: 'निकास: अपनी सरकार का बचाव करें',
      items: [
        { before: 'शक्ति किसके पास हो, इसकी सिफ़ारिश बिना', after: 'के महज़ एक राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: 'हर सरकारी ढाँचा किसी समाज से कुछ', after: 'स्वीकारने को कहता है — उन्हें ईमानदारी से बताएँ।', choices: ['समझौते', 'रंग', 'त्योहार'], a: 0 },
        { before: 'संस्थापकों के निर्णय के बाद, उन्हें', after: 'करना होगा कि सरकार अधिकारों की रक्षा और व्यवस्था कितनी अच्छी रखती है।', choices: ['मूल्यांकन', 'भूलना', 'छिपाना'], a: 0 }
      ],
      takeaway: 'साक्ष्य + समझौते + मूल्यांकन = एक संस्थापक की तरह निर्णय लेना जिसे उस चुनाव के साथ जीना है।'
    },
    ur: {
      title: 'اخراج: اپنی حکومت کا دفاع کریں',
      items: [
        { before: 'طاقت کس کے پاس ہو، اس کی سفارش بغیر', after: 'کے محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: 'حکومت کا ہر ڈھانچہ کسی معاشرے سے کچھ', after: 'قبول کرنے کو کہتا ہے — انہیں دیانتداری سے بتائیں۔', choices: ['سمجھوتے', 'رنگ', 'تہوار'], a: 0 },
        { before: 'بانیوں کے فیصلے کے بعد، انہیں', after: 'کرنا ہوگا کہ حکومت حقوق کی حفاظت اور نظم کتنا اچھا رکھتی ہے۔', choices: ['جائزہ', 'بھولنا', 'چھپانا'], a: 0 }
      ],
      takeaway: 'ثبوت + سمجھوتے + جائزہ = ایک بانی کی طرح فیصلہ کرنا جسے اس انتخاب کے ساتھ جینا ہے۔'
    },
    zh: {
      title: '离场：为你的政府辩护',
      items: [
        { before: '关于谁应掌权的建议，若没有', after: '，只是一种意见。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '每一种政府架构都要求社会接受一些', after: '——诚实地把它们说出来。', choices: ['取舍', '颜色', '节日'], a: 0 },
        { before: '在缔造者做出决定之后，他们必须', after: '政府在保护权利和维持秩序方面做得如何。', choices: ['评估', '遗忘', '隐藏'], a: 0 }
      ],
      takeaway: '证据 + 取舍 + 评估 = 像一位必须承担选择后果的缔造者那样决策。'
    } }
  }

]);
