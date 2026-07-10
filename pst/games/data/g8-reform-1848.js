/* PST Arcade — ticket registry (Grade 8 · A Nation to Reform, 1848). Each ticket is retrieval
   practice for one unit + phase. English-first; other languages carried inline per ticket
   (ticket.i18n[lang]). The engine (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent.
   Same shape as every other data file: {id, grade, unit, unitTitle, phase, type, format, teks,
   strat, d, i18n}. This scenario dramatizes the real reform movements of the mid-1800s; abolition,
   women's-rights, and reform history is kept factual and respectful (TEC §28.0022). */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 8 · A Nation to Reform, 1848 · SURFACE ───────── */
  {
    id: 'g8-reform-1848-surface-entry', grade: 8, unit: 'reform-1848',
    unitTitle: "A Nation to Reform, 1848 — How Do You Change a Nation?", phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.20(c)(24)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: reform words',
      seconds: 45,
      questions: [
        { q: 'An effort to change society to make it better or more fair is a…', choices: ['reform', 'convention', 'petition'], a: 0 },
        { q: 'The movement to end slavery was called…', choices: ['temperance', 'abolition', 'suffrage'], a: 1 },
        { q: 'The right to vote is called…', choices: ['suffrage', 'petition', 'reform'], a: 0 },
        { q: 'The movement to reduce or ban the drinking of alcohol was…', choices: ['abolition', 'suffrage', 'temperance'], a: 2 }
      ],
      takeaway: 'Know these four words and you can read the rest of the unit with confidence.'
    },
    es: {
      title: 'Calentamiento: palabras de la reforma',
      seconds: 45,
      questions: [
        { q: 'Un esfuerzo por cambiar la sociedad para mejorarla o hacerla más justa es una…', choices: ['reforma', 'convención', 'petición'], a: 0 },
        { q: 'El movimiento para acabar con la esclavitud se llamaba…', choices: ['templanza', 'abolición', 'sufragio'], a: 1 },
        { q: 'El derecho a votar se llama…', choices: ['sufragio', 'petición', 'reforma'], a: 0 },
        { q: 'El movimiento para reducir o prohibir el consumo de alcohol era…', choices: ['abolición', 'sufragio', 'templanza'], a: 2 }
      ],
      takeaway: 'Domina estas cuatro palabras y podrás leer el resto de la unidad con confianza.'
    },
    vi: {
      title: 'Khởi động: từ vựng về cải cách',
      seconds: 45,
      questions: [
        { q: 'Một nỗ lực thay đổi xã hội để nó tốt hơn hoặc công bằng hơn là một cuộc…', choices: ['cải cách', 'đại hội', 'thỉnh nguyện'], a: 0 },
        { q: 'Phong trào chấm dứt chế độ nô lệ được gọi là…', choices: ['tiết chế rượu', 'bãi nô', 'quyền bầu cử'], a: 1 },
        { q: 'Quyền được bỏ phiếu được gọi là…', choices: ['quyền bầu cử', 'thỉnh nguyện', 'cải cách'], a: 0 },
        { q: 'Phong trào giảm hoặc cấm việc uống rượu bia là…', choices: ['bãi nô', 'quyền bầu cử', 'tiết chế rượu'], a: 2 }
      ],
      takeaway: 'Nắm được bốn từ này là bạn có thể đọc phần còn lại của đơn vị bài học một cách tự tin.'
    },
    ar: {
      title: 'تهيئة: كلمات الإصلاح',
      seconds: 45,
      questions: [
        { q: 'الجهد لتغيير المجتمع لجعله أفضل أو أكثر عدلًا هو…', choices: ['إصلاح', 'مؤتمر', 'عريضة'], a: 0 },
        { q: 'حركة إنهاء العبودية كانت تُسمّى…', choices: ['الاعتدال', 'إلغاء العبودية', 'حق الاقتراع'], a: 1 },
        { q: 'حق التصويت يُسمّى…', choices: ['حق الاقتراع', 'عريضة', 'إصلاح'], a: 0 },
        { q: 'حركة تقليل شرب الكحول أو منعه كانت…', choices: ['إلغاء العبودية', 'حق الاقتراع', 'الاعتدال'], a: 2 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وستقرأ بقية الوحدة بثقة.'
    },
    hi: {
      title: 'वार्म-अप: सुधार के शब्द',
      seconds: 45,
      questions: [
        { q: 'समाज को बेहतर या अधिक न्यायपूर्ण बनाने के लिए बदलने का प्रयास है…', choices: ['सुधार', 'सम्मेलन', 'याचिका'], a: 0 },
        { q: 'दासता को समाप्त करने के आंदोलन को कहा जाता था…', choices: ['संयम (मद्यनिषेध)', 'दास-उन्मूलन', 'मताधिकार'], a: 1 },
        { q: 'मतदान के अधिकार को कहते हैं…', choices: ['मताधिकार', 'याचिका', 'सुधार'], a: 0 },
        { q: 'शराब पीने को कम करने या रोकने का आंदोलन था…', choices: ['दास-उन्मूलन', 'मताधिकार', 'संयम (मद्यनिषेध)'], a: 2 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और आप शेष इकाई आत्मविश्वास से पढ़ सकेंगे।'
    },
    ur: {
      title: 'وارم اپ: اصلاح کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'معاشرے کو بہتر یا زیادہ منصفانہ بنانے کے لیے بدلنے کی کوشش ہے…', choices: ['اصلاح', 'کنونشن', 'درخواست'], a: 0 },
        { q: 'غلامی ختم کرنے کی تحریک کہلاتی تھی…', choices: ['اعتدال (شراب نوشی کی روک تھام)', 'خاتمۂ غلامی', 'حقِ رائے دہی'], a: 1 },
        { q: 'ووٹ دینے کے حق کو کہتے ہیں…', choices: ['حقِ رائے دہی', 'درخواست', 'اصلاح'], a: 0 },
        { q: 'شراب نوشی کو کم یا بند کرنے کی تحریک تھی…', choices: ['خاتمۂ غلامی', 'حقِ رائے دہی', 'اعتدال (شراب نوشی کی روک تھام)'], a: 2 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو آپ باقی اکائی اعتماد کے ساتھ پڑھ سکیں گے۔'
    },
    zh: {
      title: '热身：改革词汇',
      seconds: 45,
      questions: [
        { q: '为使社会更美好或更公正而作出的改变努力称为…', choices: ['改革', '大会', '请愿'], a: 0 },
        { q: '终结奴隶制的运动被称为…', choices: ['禁酒', '废奴', '选举权'], a: 1 },
        { q: '投票的权利称为…', choices: ['选举权', '请愿', '改革'], a: 0 },
        { q: '减少或禁止饮酒的运动是…', choices: ['废奴', '选举权', '禁酒'], a: 2 }
      ],
      takeaway: '掌握这四个词，你就能自信地读完本单元的其余部分。'
    } }
  },
  {
    id: 'g8-reform-1848-surface-exit', grade: 8, unit: 'reform-1848',
    unitTitle: "A Nation to Reform, 1848 — How Do You Change a Nation?", phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.20(c)(24)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['abolition', 'the movement to end slavery'],
        ['suffrage', 'the right to vote'],
        ['temperance', 'the movement to reduce or ban alcohol'],
        ['convention', 'a large meeting called to plan action or make demands'],
        ['petition', 'a signed request asking government to act']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['abolición', 'el movimiento para acabar con la esclavitud'],
        ['sufragio', 'el derecho a votar'],
        ['templanza', 'el movimiento para reducir o prohibir el alcohol'],
        ['convención', 'una gran reunión convocada para planear acciones o hacer demandas'],
        ['petición', 'una solicitud firmada que pide al gobierno que actúe']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['bãi nô', 'phong trào chấm dứt chế độ nô lệ'],
        ['quyền bầu cử', 'quyền được bỏ phiếu'],
        ['tiết chế rượu', 'phong trào giảm hoặc cấm rượu bia'],
        ['đại hội', 'một cuộc họp lớn được triệu tập để lên kế hoạch hành động hoặc đưa ra yêu sách'],
        ['thỉnh nguyện', 'một đơn có chữ ký yêu cầu chính quyền hành động']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['إلغاء العبودية', 'حركة إنهاء العبودية'],
        ['حق الاقتراع', 'حق التصويت'],
        ['الاعتدال', 'حركة تقليل الكحول أو منعه'],
        ['المؤتمر', 'اجتماع كبير يُعقد للتخطيط للعمل أو تقديم المطالب'],
        ['العريضة', 'طلب موقّع يدعو الحكومة إلى اتخاذ إجراء']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['दास-उन्मूलन', 'दासता को समाप्त करने का आंदोलन'],
        ['मताधिकार', 'मतदान का अधिकार'],
        ['संयम (मद्यनिषेध)', 'शराब को कम करने या प्रतिबंधित करने का आंदोलन'],
        ['सम्मेलन', 'कार्रवाई की योजना बनाने या माँगें रखने के लिए बुलाई गई बड़ी बैठक'],
        ['याचिका', 'सरकार से कार्रवाई का अनुरोध करता एक हस्ताक्षरित पत्र']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['خاتمۂ غلامی', 'غلامی ختم کرنے کی تحریک'],
        ['حقِ رائے دہی', 'ووٹ دینے کا حق'],
        ['اعتدال (شراب نوشی کی روک تھام)', 'شراب کو کم یا ممنوع کرنے کی تحریک'],
        ['کنونشن', 'کارروائی کی منصوبہ بندی یا مطالبات کے لیے بلایا گیا بڑا اجتماع'],
        ['درخواست', 'حکومت سے کارروائی کی طلب کرنے والی دستخط شدہ درخواست']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['废奴', '终结奴隶制的运动'],
        ['选举权', '投票的权利'],
        ['禁酒', '减少或禁止酒类的运动'],
        ['大会', '为筹划行动或提出诉求而召集的大型会议'],
        ['请愿', '请求政府采取行动的签名请求']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 8 · A Nation to Reform, 1848 · DEEP ───────── */
  {
    id: 'g8-reform-1848-deep-entry', grade: 8, unit: 'reform-1848',
    unitTitle: "A Nation to Reform, 1848 — How Do You Change a Nation?", phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.20(c)(24), (c)(25)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: cause, goal & tactic',
      items: [
        { before: 'A movement’s', after: 'is what it wants to achieve — for abolitionists, ending slavery.', choices: ['goal', 'tactic', 'opposition'], a: 0 },
        { before: 'A signed request to government and a public speech are examples of a', after: 'a movement uses.', choices: ['goal', 'tactic', 'cause'], a: 1 },
        { before: 'The Second Great Awakening and the nation’s ideals helped', after: 'the reform movements of the mid-1800s.', choices: ['spark', 'silence', 'ban'], a: 0 }
      ],
      takeaway: 'Every movement has a cause, a goal, a tactic, and opposition. Keep the four straight.'
    },
    es: {
      title: 'Calentamiento: causa, meta y táctica',
      items: [
        { before: 'La', after: 'de un movimiento es lo que quiere lograr — para los abolicionistas, acabar con la esclavitud.', choices: ['meta', 'táctica', 'oposición'], a: 0 },
        { before: 'Una solicitud firmada al gobierno y un discurso público son ejemplos de una', after: 'que usa un movimiento.', choices: ['meta', 'táctica', 'causa'], a: 1 },
        { before: 'El Segundo Gran Despertar y los ideales de la nación ayudaron a', after: 'los movimientos de reforma de mediados del siglo XIX.', choices: ['encender', 'silenciar', 'prohibir'], a: 0 }
      ],
      takeaway: 'Todo movimiento tiene causa, meta, táctica y oposición. Mantén los cuatro claros.'
    },
    vi: {
      title: 'Khởi động: nguyên nhân, mục tiêu và chiến thuật',
      items: [
        { before: 'Của một phong trào,', after: 'là điều nó muốn đạt được — với những người bãi nô, đó là chấm dứt chế độ nô lệ.', choices: ['mục tiêu', 'chiến thuật', 'sự chống đối'], a: 0 },
        { before: 'Một đơn có chữ ký gửi chính quyền và một bài diễn thuyết công khai là ví dụ về một', after: 'mà một phong trào sử dụng.', choices: ['mục tiêu', 'chiến thuật', 'nguyên nhân'], a: 1 },
        { before: 'Cuộc Đại Thức Tỉnh Lần Hai và những lý tưởng của quốc gia đã giúp', after: 'các phong trào cải cách giữa những năm 1800.', choices: ['thổi bùng', 'dập tắt', 'cấm đoán'], a: 0 }
      ],
      takeaway: 'Mỗi phong trào đều có nguyên nhân, mục tiêu, chiến thuật và sự chống đối. Hãy phân biệt rõ bốn điều đó.'
    },
    ar: {
      title: 'تهيئة: السبب والهدف والتكتيك',
      items: [
        { before: 'إن', after: 'الحركة هو ما تريد تحقيقه — بالنسبة لدعاة إلغاء العبودية، هو إنهاء العبودية.', choices: ['الهدف', 'التكتيك', 'المعارضة'], a: 0 },
        { before: 'العريضة الموقّعة إلى الحكومة والخطاب العام مثالان على', after: 'تستخدمه الحركة.', choices: ['هدف', 'تكتيك', 'سبب'], a: 1 },
        { before: 'ساعدت الصحوة الكبرى الثانية ومُثُل الأمة على', after: 'حركات الإصلاح في منتصف القرن التاسع عشر.', choices: ['إشعال', 'إسكات', 'حظر'], a: 0 }
      ],
      takeaway: 'لكل حركة سبب وهدف وتكتيك ومعارضة. حافظ على تمييز الأربعة.'
    },
    hi: {
      title: 'वार्म-अप: कारण, लक्ष्य और युक्ति',
      items: [
        { before: 'किसी आंदोलन का', after: 'वह है जो वह हासिल करना चाहता है — दास-उन्मूलनवादियों के लिए, दासता का अंत।', choices: ['लक्ष्य', 'युक्ति', 'विरोध'], a: 0 },
        { before: 'सरकार को एक हस्ताक्षरित अनुरोध और एक सार्वजनिक भाषण उदाहरण हैं एक', after: 'के जिसे कोई आंदोलन प्रयोग करता है।', choices: ['लक्ष्य', 'युक्ति', 'कारण'], a: 1 },
        { before: 'द्वितीय महान जागृति और राष्ट्र के आदर्शों ने मदद की', after: '19वीं सदी के मध्य के सुधार आंदोलनों को।', choices: ['प्रज्वलित करने में', 'चुप कराने में', 'प्रतिबंधित करने में'], a: 0 }
      ],
      takeaway: 'हर आंदोलन का एक कारण, लक्ष्य, युक्ति और विरोध होता है। चारों को अलग-अलग समझें।'
    },
    ur: {
      title: 'وارم اپ: وجہ، مقصد اور حکمتِ عملی',
      items: [
        { before: 'کسی تحریک کا', after: 'وہ ہے جو وہ حاصل کرنا چاہتی ہے — خاتمۂ غلامی کے حامیوں کے لیے، غلامی کا خاتمہ۔', choices: ['مقصد', 'حکمتِ عملی', 'مخالفت'], a: 0 },
        { before: 'حکومت کو ایک دستخط شدہ درخواست اور ایک عوامی تقریر مثالیں ہیں ایک', after: 'کی جسے کوئی تحریک استعمال کرتی ہے۔', choices: ['مقصد', 'حکمتِ عملی', 'وجہ'], a: 1 },
        { before: 'دوسری عظیم بیداری اور قوم کے نصب العین نے مدد کی', after: 'انیسویں صدی کے وسط کی اصلاحی تحریکوں کو۔', choices: ['بھڑکانے میں', 'خاموش کرانے میں', 'ممنوع کرنے میں'], a: 0 }
      ],
      takeaway: 'ہر تحریک کی ایک وجہ، مقصد، حکمتِ عملی اور مخالفت ہوتی ہے۔ چاروں کو الگ الگ سمجھیں۔'
    },
    zh: {
      title: '热身：起因、目标与策略',
      items: [
        { before: '一个运动的', after: '就是它想要实现的目标——对废奴者而言，就是终结奴隶制。', choices: ['目标', '策略', '反对'], a: 0 },
        { before: '递交政府的签名请求和公开演讲，都是运动所使用的一种', after: '的例子。', choices: ['目标', '策略', '起因'], a: 1 },
        { before: '第二次大觉醒和国家的理想帮助', after: '了19世纪中叶的改革运动。', choices: ['点燃', '压制', '禁止'], a: 0 }
      ],
      takeaway: '每个运动都有起因、目标、策略和反对。把这四者分清楚。'
    } }
  },
  {
    id: 'g8-reform-1848-deep-exit', grade: 8, unit: 'reform-1848',
    unitTitle: "A Nation to Reform, 1848 — How Do You Change a Nation?", phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.20(c)(24), (c)(25)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort — goal or tactic?',
      cats: ['Goal (what a movement wants)', 'Tactic (how it works for change)'],
      items: [
        { t: 'End slavery immediately', c: 0 },
        { t: 'Win equal rights and the vote', c: 0 },
        { t: 'Open free public schools', c: 0 },
        { t: 'Publish an antislavery newspaper', c: 1 },
        { t: 'Hold a convention and issue a declaration', c: 1 },
        { t: 'Gather signatures on a petition', c: 1 }
      ],
      takeaway: 'Sorting goals from tactics is the concept map behind every reformer’s plan.'
    },
    es: {
      title: 'Salida: clasifica — ¿meta o táctica?',
      cats: ['Meta (lo que quiere un movimiento)', 'Táctica (cómo busca el cambio)'],
      items: [
        { t: 'Acabar con la esclavitud de inmediato', c: 0 },
        { t: 'Lograr la igualdad de derechos y el voto', c: 0 },
        { t: 'Abrir escuelas públicas gratuitas', c: 0 },
        { t: 'Publicar un periódico antiesclavista', c: 1 },
        { t: 'Celebrar una convención y emitir una declaración', c: 1 },
        { t: 'Reunir firmas en una petición', c: 1 }
      ],
      takeaway: 'Separar metas de tácticas es el mapa conceptual detrás del plan de todo reformador.'
    },
    vi: {
      title: 'Phiếu ra: phân loại — mục tiêu hay chiến thuật?',
      cats: ['Mục tiêu (điều một phong trào muốn)', 'Chiến thuật (cách nó tạo ra thay đổi)'],
      items: [
        { t: 'Chấm dứt chế độ nô lệ ngay lập tức', c: 0 },
        { t: 'Giành quyền bình đẳng và quyền bầu cử', c: 0 },
        { t: 'Mở trường công miễn phí', c: 0 },
        { t: 'Xuất bản một tờ báo chống chế độ nô lệ', c: 1 },
        { t: 'Tổ chức một đại hội và ban hành một bản tuyên ngôn', c: 1 },
        { t: 'Thu thập chữ ký trên một đơn thỉnh nguyện', c: 1 }
      ],
      takeaway: 'Phân biệt mục tiêu với chiến thuật chính là sơ đồ khái niệm đằng sau kế hoạch của mọi nhà cải cách.'
    },
    ar: {
      title: 'الخروج: صنّف — هدف أم تكتيك؟',
      cats: ['هدف (ما تريده الحركة)', 'تكتيك (كيف تسعى للتغيير)'],
      items: [
        { t: 'إنهاء العبودية فورًا', c: 0 },
        { t: 'نيل الحقوق المتساوية وحق التصويت', c: 0 },
        { t: 'فتح مدارس عامة مجانية', c: 0 },
        { t: 'إصدار صحيفة مناهضة للعبودية', c: 1 },
        { t: 'عقد مؤتمر وإصدار إعلان', c: 1 },
        { t: 'جمع التوقيعات على عريضة', c: 1 }
      ],
      takeaway: 'تمييز الأهداف عن التكتيكات هو الخريطة المفاهيمية وراء خطة كل مُصلِح.'
    },
    hi: {
      title: 'निकास: छाँटें — लक्ष्य या युक्ति?',
      cats: ['लक्ष्य (आंदोलन क्या चाहता है)', 'युक्ति (वह बदलाव के लिए कैसे काम करता है)'],
      items: [
        { t: 'दासता को तुरंत समाप्त करना', c: 0 },
        { t: 'समान अधिकार और मतदान का अधिकार पाना', c: 0 },
        { t: 'निःशुल्क सार्वजनिक विद्यालय खोलना', c: 0 },
        { t: 'दासता-विरोधी अखबार प्रकाशित करना', c: 1 },
        { t: 'एक सम्मेलन आयोजित करना और घोषणापत्र जारी करना', c: 1 },
        { t: 'याचिका पर हस्ताक्षर जुटाना', c: 1 }
      ],
      takeaway: 'लक्ष्यों को युक्तियों से अलग करना ही हर सुधारक की योजना के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: چھانٹیں — مقصد یا حکمتِ عملی؟',
      cats: ['مقصد (تحریک کیا چاہتی ہے)', 'حکمتِ عملی (وہ تبدیلی کے لیے کیسے کام کرتی ہے)'],
      items: [
        { t: 'غلامی کو فوراً ختم کرنا', c: 0 },
        { t: 'مساوی حقوق اور حقِ رائے دہی حاصل کرنا', c: 0 },
        { t: 'مفت سرکاری اسکول کھولنا', c: 0 },
        { t: 'غلامی مخالف اخبار شائع کرنا', c: 1 },
        { t: 'ایک کنونشن منعقد کرنا اور اعلامیہ جاری کرنا', c: 1 },
        { t: 'درخواست پر دستخط جمع کرنا', c: 1 }
      ],
      takeaway: 'مقاصد کو حکمتِ عملیوں سے الگ کرنا ہی ہر مصلح کے منصوبے کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：分类——目标还是策略？',
      cats: ['目标（运动想要什么）', '策略（如何促成改变）'],
      items: [
        { t: '立即终结奴隶制', c: 0 },
        { t: '争取平等权利和选举权', c: 0 },
        { t: '开办免费公立学校', c: 0 },
        { t: '出版一份反奴隶制的报纸', c: 1 },
        { t: '召开大会并发表一份宣言', c: 1 },
        { t: '在请愿书上征集签名', c: 1 }
      ],
      takeaway: '把目标与策略分开，就是每位改革者计划背后的概念图。'
    } }
  },

  /* ───────── Grade 8 · A Nation to Reform, 1848 · TRANSFER ───────── */
  {
    id: 'g8-reform-1848-transfer-entry', grade: 8, unit: 'reform-1848',
    unitTitle: "A Nation to Reform, 1848 — How Do You Change a Nation?", phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.20(c)(31)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving process',
      seconds: 45,
      questions: [
        { q: 'The FIRST step of the problem-solving process is to…', choices: ['pick a solution', 'define the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing a strategy, a good problem-solver…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other views'], a: 0 },
        { q: 'A strong solution is defended with…', choices: ['a loud voice', 'claim + evidence', 'only feelings'], a: 1 },
        { q: 'After choosing and defending a solution, the last step is to…', choices: ['forget it', 'evaluate how well it worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Define → gather → weigh → decide → defend → evaluate. That is the whole transfer move.'
    },
    es: {
      title: 'Calentamiento: el proceso de resolución de problemas',
      seconds: 45,
      questions: [
        { q: 'El PRIMER paso del proceso de resolución de problemas es…', choices: ['elegir una solución', 'definir el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir una estrategia, quien resuelve bien problemas…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora otras opiniones'], a: 0 },
        { q: 'Una solución sólida se defiende con…', choices: ['una voz fuerte', 'afirmación + evidencia', 'solo sentimientos'], a: 1 },
        { q: 'Tras elegir y defender una solución, el último paso es…', choices: ['olvidarla', 'evaluar qué tan bien funcionó', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Definir → reunir → sopesar → decidir → defender → evaluar. Ese es todo el movimiento de transferencia.'
    },
    vi: {
      title: 'Khởi động: quy trình giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Bước ĐẦU TIÊN của quy trình giải quyết vấn đề là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn một chiến lược, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua quan điểm khác'], a: 0 },
        { q: 'Một giải pháp vững chắc được bảo vệ bằng…', choices: ['một giọng nói to', 'luận điểm + bằng chứng', 'chỉ cảm xúc'], a: 1 },
        { q: 'Sau khi chọn và bảo vệ một giải pháp, bước cuối cùng là…', choices: ['quên nó đi', 'đánh giá xem nó hiệu quả ra sao', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → quyết định → bảo vệ → đánh giá. Đó chính là toàn bộ bước chuyển giao.'
    },
    ar: {
      title: 'تهيئة: عملية حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'الخطوة الأولى في عملية حل المشكلة هي…', choices: ['اختيار حل', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل اختيار استراتيجية، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل الآراء الأخرى'], a: 0 },
        { q: 'الحل القوي يُدافَع عنه بـ…', choices: ['صوت عالٍ', 'ادعاء + دليل', 'المشاعر فقط'], a: 1 },
        { q: 'بعد اختيار حل والدفاع عنه، الخطوة الأخيرة هي…', choices: ['نسيانه', 'تقييم مدى نجاحه', 'إخفاء المفاضلات'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن ← قرِّر ← دافِع ← قيِّم. تلك هي حركة النقل بأكملها.'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान की प्रक्रिया',
      seconds: 45,
      questions: [
        { q: 'समस्या-समाधान प्रक्रिया का पहला चरण है…', choices: ['एक समाधान चुनना', 'समस्या को परिभाषित करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'रणनीति चुनने से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य विचारों को अनदेखा करता है'], a: 0 },
        { q: 'एक मजबूत समाधान का बचाव किया जाता है…', choices: ['एक ऊँची आवाज़ से', 'दावा + साक्ष्य से', 'केवल भावनाओं से'], a: 1 },
        { q: 'समाधान चुनने और उसका बचाव करने के बाद, अंतिम चरण है…', choices: ['उसे भूल जाना', 'यह आँकना कि वह कितना अच्छा रहा', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → निर्णय लें → बचाव करें → आँकें। यही पूरी अंतरण चाल है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کا عمل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے کے عمل کا پہلا مرحلہ ہے…', choices: ['ایک حل چننا', 'مسئلے کو متعین کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'حکمتِ عملی چننے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دوسری آراء کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'ایک مضبوط حل کا دفاع کیا جاتا ہے…', choices: ['ایک بلند آواز سے', 'دعویٰ + ثبوت سے', 'صرف جذبات سے'], a: 1 },
        { q: 'حل چننے اور اس کا دفاع کرنے کے بعد، آخری مرحلہ ہے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ وہ کتنا کارگر رہا', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← فیصلہ کریں ← دفاع کریں ← جانچیں۔ یہی پوری منتقلی کی چال ہے۔'
    },
    zh: {
      title: '热身：解决问题的过程',
      seconds: 45,
      questions: [
        { q: '解决问题过程的第一步是…', choices: ['挑选一个方案', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在选择策略之前，优秀的解决问题者会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视他人的观点'], a: 0 },
        { q: '有力的解决方案要靠什么来辩护…', choices: ['大嗓门', '主张 + 证据', '只有感受'], a: 1 },
        { q: '在选定并辩护方案之后，最后一步是…', choices: ['把它忘掉', '评估它的效果如何', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 决定 → 辩护 → 评估。这就是整个迁移动作。'
    } }
  },
  {
    id: 'g8-reform-1848-transfer-exit', grade: 8, unit: 'reform-1848',
    unitTitle: "A Nation to Reform, 1848 — How Do You Change a Nation?", phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.20(c)(31)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim, evidence & trade-offs',
      items: [
        { before: 'A claim without', after: 'from the sources is just an opinion.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: 'A reformer must weigh the', after: 'of each strategy — bold change vs. the change most likely to win.', choices: ['trade-offs', 'colors', 'spelling'], a: 0 },
        { before: 'The last step of the process is to', after: 'how well your strategy actually worked.', choices: ['evaluate', 'forget', 'hide'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs, then evaluate — that is thinking like a reformer and a citizen.'
    },
    es: {
      title: 'Salida: afirmación, evidencia y concesiones',
      items: [
        { before: 'Una afirmación sin', after: 'de las fuentes es solo una opinión.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Un reformador debe sopesar las', after: 'de cada estrategia — el cambio audaz frente al cambio con más posibilidades de ganar.', choices: ['concesiones', 'colores', 'ortografía'], a: 0 },
        { before: 'El último paso del proceso es', after: 'qué tan bien funcionó realmente tu estrategia.', choices: ['evaluar', 'olvidar', 'ocultar'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones, y luego evaluar: así se piensa como reformador y como ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm, bằng chứng và đánh đổi',
      items: [
        { before: 'Một luận điểm không có', after: 'từ các nguồn thì chỉ là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Một nhà cải cách phải cân nhắc những', after: 'của mỗi chiến lược — thay đổi táo bạo so với thay đổi dễ giành thắng lợi nhất.', choices: ['đánh đổi', 'màu sắc', 'chính tả'], a: 0 },
        { before: 'Bước cuối cùng của quy trình là', after: 'xem chiến lược của bạn thực sự hiệu quả đến đâu.', choices: ['đánh giá', 'quên đi', 'che giấu'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi, rồi đánh giá — đó là tư duy như một nhà cải cách và một công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء ودليل ومفاضلات',
      items: [
        { before: 'الادعاء بلا', after: 'من المصادر ما هو إلا رأي.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'على المُصلِح أن يوازن', after: 'كل استراتيجية — التغيير الجريء مقابل التغيير الأرجح فوزًا.', choices: ['مفاضلات', 'ألوان', 'إملاء'], a: 0 },
        { before: 'الخطوة الأخيرة في العملية هي أن', after: 'مدى نجاح استراتيجيتك فعلًا.', choices: ['تقيّم', 'تنسى', 'تخفي'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات، ثم التقييم — ذلك هو التفكير كمُصلِح ومواطن.'
    },
    hi: {
      title: 'निकास: दावा, साक्ष्य और समझौते',
      items: [
        { before: 'स्रोतों से', after: 'के बिना दावा महज़ एक राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: 'एक सुधारक को हर रणनीति के', after: 'को तौलना चाहिए — साहसिक बदलाव बनाम जीतने की सबसे अधिक संभावना वाला बदलाव।', choices: ['समझौतों', 'रंगों', 'वर्तनी'], a: 0 },
        { before: 'प्रक्रिया का अंतिम चरण है यह', after: 'कि आपकी रणनीति वास्तव में कितनी कारगर रही।', choices: ['आँकना', 'भूलना', 'छिपाना'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते, फिर आँकना — यही एक सुधारक और एक नागरिक की तरह सोचना है।'
    },
    ur: {
      title: 'اخراج: دعویٰ، ثبوت اور سمجھوتے',
      items: [
        { before: 'مآخذ سے', after: 'کے بغیر دعویٰ محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: 'ایک مصلح کو ہر حکمتِ عملی کے', after: 'کو تولنا چاہیے — جرأت مندانہ تبدیلی بمقابلہ سب سے زیادہ جیتنے کے امکان والی تبدیلی۔', choices: ['سمجھوتوں', 'رنگوں', 'ہجے'], a: 0 },
        { before: 'عمل کا آخری مرحلہ یہ', after: 'ہے کہ آپ کی حکمتِ عملی حقیقتاً کتنی کارگر رہی۔', choices: ['جانچنا', 'بھولنا', 'چھپانا'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے، پھر جانچنا — یہی ایک مصلح اور ایک شہری کی طرح سوچنا ہے۔'
    },
    zh: {
      title: '离场：主张、证据与取舍',
      items: [
        { before: '缺少来自资料的', after: '，主张只是一种意见。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '改革者必须权衡每种策略的', after: '——大胆的变革与最可能取胜的变革之间。', choices: ['取舍', '颜色', '拼写'], a: 0 },
        { before: '这一过程的最后一步是', after: '你的策略实际效果如何。', choices: ['评估', '忘记', '隐藏'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍，然后评估——这就是像改革者和公民一样思考。'
    } }
  }

]);
