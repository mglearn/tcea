/* PST Arcade — ticket registry for HS · US History Since 1877 · The Cuban Missile Crisis, 1962.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. Same shape as every unit:
   {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}.
   Honest history (TEC §28.0022): the genuine risk of nuclear war, the SECRET U.S. promise to
   remove Jupiter missiles from Turkey, and the fact that Cuba — whose sovereignty was at stake —
   was not at the negotiating table, are kept factual and respectful. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── HS · Cuban Missile Crisis 1962 · SURFACE ───────── */
  {
    id: 'hs-cuban-missile-crisis-surface-entry', grade: 11, unit: 'cuban-missile-crisis',
    unitTitle: 'The Cuban Missile Crisis, 1962 — Thirteen Days on the Brink', phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.41(c)(8)(A), (c)(8)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: Cold War words',
      seconds: 45,
      questions: [
        { q: 'The decades-long rivalry between the U.S. and the Soviet Union, fought through threats and arms rather than direct combat, is the…', choices: ['Cold War', 'World War', 'Civil War'], a: 0 },
        { q: 'Preventing an enemy’s attack by convincing them the cost would be too high is called…', choices: ['containment', 'deterrence', 'diplomacy'], a: 1 },
        { q: 'Kennedy called the naval ring around Cuba a "quarantine" instead of a blockade because a blockade is legally…', choices: ['an act of war', 'a treaty', 'a trade deal'], a: 0 },
        { q: 'The idea that if either superpower launched a nuclear attack, both would be destroyed, is…', choices: ['brinkmanship', 'containment', 'MAD (mutually assured destruction)'], a: 2 }
      ],
      takeaway: 'Cold War, deterrence, quarantine, and MAD unlock the rest of the unit.'
    },
    es: {
      title: 'Calentamiento: palabras de la Guerra Fría',
      seconds: 45,
      questions: [
        { q: 'La rivalidad de décadas entre EE. UU. y la Unión Soviética, librada con amenazas y armas en vez de combate directo, es la…', choices: ['Guerra Fría', 'Guerra Mundial', 'Guerra Civil'], a: 0 },
        { q: 'Impedir el ataque de un enemigo convenciéndolo de que el costo sería demasiado alto se llama…', choices: ['contención', 'disuasión', 'diplomacia'], a: 1 },
        { q: 'Kennedy llamó "cuarentena" al cerco naval en torno a Cuba, en vez de bloqueo, porque un bloqueo es legalmente…', choices: ['un acto de guerra', 'un tratado', 'un acuerdo comercial'], a: 0 },
        { q: 'La idea de que si cualquiera de las superpotencias lanzara un ataque nuclear, ambas serían destruidas, es…', choices: ['la política del abismo', 'la contención', 'la DAM (destrucción mutua asegurada)'], a: 2 }
      ],
      takeaway: 'Guerra Fría, disuasión, cuarentena y DAM abren el resto de la unidad.'
    },
    vi: {
      title: 'Khởi động: từ vựng Chiến tranh Lạnh',
      seconds: 45,
      questions: [
        { q: 'Cuộc kình địch kéo dài nhiều thập kỷ giữa Hoa Kỳ và Liên Xô, diễn ra bằng đe dọa và vũ khí thay vì giao chiến trực tiếp, là…', choices: ['Chiến tranh Lạnh', 'Thế chiến', 'Nội chiến'], a: 0 },
        { q: 'Ngăn cuộc tấn công của kẻ thù bằng cách thuyết phục họ rằng cái giá sẽ quá cao được gọi là…', choices: ['ngăn chặn (containment)', 'răn đe', 'ngoại giao'], a: 1 },
        { q: 'Kennedy gọi vòng vây hải quân quanh Cuba là "cách ly" thay vì phong tỏa, vì phong tỏa về mặt pháp lý là…', choices: ['một hành động chiến tranh', 'một hiệp ước', 'một thỏa thuận thương mại'], a: 0 },
        { q: 'Ý tưởng rằng nếu bất kỳ siêu cường nào phóng đòn tấn công hạt nhân thì cả hai đều bị hủy diệt là…', choices: ['chính sách bên miệng hố chiến tranh', 'ngăn chặn', 'MAD (hủy diệt lẫn nhau chắc chắn)'], a: 2 }
      ],
      takeaway: 'Chiến tranh Lạnh, răn đe, cách ly và MAD mở khóa phần còn lại của bài học.'
    },
    ar: {
      title: 'تهيئة: كلمات الحرب الباردة',
      seconds: 45,
      questions: [
        { q: 'التنافس الممتدّ عقودًا بين الولايات المتحدة والاتحاد السوفيتي، الذي خيض بالتهديدات والأسلحة بدلًا من القتال المباشر، هو…', choices: ['الحرب الباردة', 'الحرب العالمية', 'الحرب الأهلية'], a: 0 },
        { q: 'منع هجوم العدو بإقناعه أن الكلفة ستكون باهظة جدًا يُسمّى…', choices: ['الاحتواء', 'الردع', 'الدبلوماسية'], a: 1 },
        { q: 'سمّى كينيدي الحصار البحري حول كوبا "حجرًا صحيًا" بدل الحصار، لأن الحصار قانونيًا هو…', choices: ['عمل حربي', 'معاهدة', 'اتفاق تجاري'], a: 0 },
        { q: 'فكرة أنه إذا شنّت أيّ قوة عظمى هجومًا نوويًا فسيُدمَّر الطرفان هي…', choices: ['سياسة حافة الهاوية', 'الاحتواء', 'الدمار المتبادل المؤكد (MAD)'], a: 2 }
      ],
      takeaway: 'الحرب الباردة والردع والحجر الصحي والدمار المتبادل تفتح باقي الوحدة.'
    },
    hi: {
      title: 'वार्म-अप: शीत युद्ध के शब्द',
      seconds: 45,
      questions: [
        { q: 'अमेरिका और सोवियत संघ के बीच दशकों लंबी प्रतिद्वंद्विता, जो सीधे युद्ध के बजाय धमकियों और हथियारों से लड़ी गई, है…', choices: ['शीत युद्ध', 'विश्व युद्ध', 'गृह युद्ध'], a: 0 },
        { q: 'दुश्मन को यह समझाकर कि हमले की कीमत बहुत अधिक होगी, उसके हमले को रोकना कहलाता है…', choices: ['नियंत्रण (कंटेनमेंट)', 'निवारण (डिटरेंस)', 'कूटनीति'], a: 1 },
        { q: 'कैनेडी ने क्यूबा के चारों ओर नौसैनिक घेरे को नाकाबंदी के बजाय "क्वारंटीन" कहा, क्योंकि नाकाबंदी कानूनी रूप से है…', choices: ['युद्ध का कृत्य', 'एक संधि', 'एक व्यापार समझौता'], a: 0 },
        { q: 'यह विचार कि यदि कोई भी महाशक्ति परमाणु हमला करती है तो दोनों नष्ट हो जाएँगी, कहलाता है…', choices: ['ब्रिंकमैनशिप', 'नियंत्रण', 'MAD (परस्पर सुनिश्चित विनाश)'], a: 2 }
      ],
      takeaway: 'शीत युद्ध, निवारण, क्वारंटीन और MAD शेष इकाई को खोल देते हैं।'
    },
    ur: {
      title: 'وارم اپ: سرد جنگ کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'امریکہ اور سوویت یونین کے درمیان دہائیوں پر محیط رقابت، جو براہِ راست جنگ کے بجائے دھمکیوں اور ہتھیاروں سے لڑی گئی، ہے…', choices: ['سرد جنگ', 'عالمی جنگ', 'خانہ جنگی'], a: 0 },
        { q: 'دشمن کو یہ باور کرا کر کہ حملے کی قیمت بہت زیادہ ہوگی، اس کے حملے کو روکنا کہلاتا ہے…', choices: ['روک تھام (کنٹینمنٹ)', 'تحدید (ڈیٹرنس)', 'سفارت کاری'], a: 1 },
        { q: 'کینیڈی نے کیوبا کے گرد بحری گھیرے کو ناکہ بندی کے بجائے "قرنطینہ" کہا، کیونکہ ناکہ بندی قانونی طور پر ہے…', choices: ['جنگ کا عمل', 'ایک معاہدہ', 'ایک تجارتی معاہدہ'], a: 0 },
        { q: 'یہ خیال کہ اگر کوئی بھی سپر پاور جوہری حملہ کرے تو دونوں تباہ ہو جائیں گی، کہلاتا ہے…', choices: ['برنک مین شپ', 'روک تھام', 'MAD (باہمی یقینی تباہی)'], a: 2 }
      ],
      takeaway: 'سرد جنگ، تحدید، قرنطینہ اور MAD باقی اکائی کو کھولتے ہیں۔'
    },
    zh: {
      title: '热身：冷战词汇',
      seconds: 45,
      questions: [
        { q: '美国与苏联之间长达数十年、以威胁和军备而非直接交战进行的对抗，被称为…', choices: ['冷战', '世界大战', '内战'], a: 0 },
        { q: '通过让敌人相信进攻代价过高来阻止其进攻，被称为…', choices: ['遏制', '威慑', '外交'], a: 1 },
        { q: '肯尼迪把封锁古巴的海军包围圈称为"隔离检疫"而非封锁，因为封锁在法律上是…', choices: ['一种战争行为', '一项条约', '一项贸易协定'], a: 0 },
        { q: '认为只要任一超级大国发动核攻击、双方都会被摧毁的观念，是…', choices: ['边缘政策', '遏制', 'MAD（相互确保摧毁）'], a: 2 }
      ],
      takeaway: '冷战、威慑、隔离检疫与 MAD 为本单元其余部分开路。'
    } }
  },
  {
    id: 'hs-cuban-missile-crisis-surface-exit', grade: 11, unit: 'cuban-missile-crisis',
    unitTitle: 'The Cuban Missile Crisis, 1962 — Thirteen Days on the Brink', phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.41(c)(8)(A), (c)(8)(B)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['containment', 'the U.S. policy of stopping the spread of communism'],
        ['brinkmanship', 'pushing a confrontation to the edge of war to force a back-down'],
        ['blockade / "quarantine"', 'a naval ring around Cuba to stop Soviet ships'],
        ['ExComm', 'Kennedy’s small secret crisis advisory group'],
        ['MAD', 'if either side attacks with nuclear weapons, both are destroyed']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['contención', 'la política de EE. UU. de frenar la expansión del comunismo'],
        ['política del abismo', 'llevar una confrontación al borde de la guerra para forzar un repliegue'],
        ['bloqueo / "cuarentena"', 'un cerco naval en torno a Cuba para detener los barcos soviéticos'],
        ['ExComm', 'el pequeño grupo asesor secreto de crisis de Kennedy'],
        ['DAM', 'si cualquier bando ataca con armas nucleares, ambos son destruidos']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['ngăn chặn', 'chính sách của Hoa Kỳ nhằm chặn sự lan rộng của chủ nghĩa cộng sản'],
        ['chính sách bên miệng hố chiến tranh', 'đẩy đối đầu tới bờ vực chiến tranh để buộc đối phương lùi bước'],
        ['phong tỏa / "cách ly"', 'vòng vây hải quân quanh Cuba để chặn tàu Liên Xô'],
        ['ExComm', 'nhóm cố vấn khủng hoảng nhỏ và bí mật của Kennedy'],
        ['MAD', 'nếu bên nào tấn công bằng vũ khí hạt nhân, cả hai đều bị hủy diệt']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['الاحتواء', 'سياسة الولايات المتحدة لوقف انتشار الشيوعية'],
        ['سياسة حافة الهاوية', 'دفع المواجهة إلى حافة الحرب لإجبار الطرف الآخر على التراجع'],
        ['الحصار / "الحجر الصحي"', 'حصار بحري حول كوبا لإيقاف السفن السوفيتية'],
        ['اللجنة التنفيذية (ExComm)', 'فريق كينيدي الاستشاري الصغير والسرّي لإدارة الأزمة'],
        ['الدمار المتبادل (MAD)', 'إذا هاجم أيّ طرف بالسلاح النووي، دُمِّر الطرفان']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['नियंत्रण (कंटेनमेंट)', 'साम्यवाद के प्रसार को रोकने की अमेरिकी नीति'],
        ['ब्रिंकमैनशिप', 'दूसरे पक्ष को पीछे हटाने के लिए टकराव को युद्ध के कगार तक ले जाना'],
        ['नाकाबंदी / "क्वारंटीन"', 'सोवियत जहाज़ों को रोकने के लिए क्यूबा के चारों ओर नौसैनिक घेरा'],
        ['ExComm', 'कैनेडी का छोटा गुप्त संकट सलाहकार समूह'],
        ['MAD', 'यदि कोई भी पक्ष परमाणु हथियारों से हमला करे, तो दोनों नष्ट']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['روک تھام (کنٹینمنٹ)', 'کمیونزم کے پھیلاؤ کو روکنے کی امریکی پالیسی'],
        ['برنک مین شپ', 'دوسرے فریق کو پیچھے ہٹانے کے لیے تصادم کو جنگ کے کنارے تک لے جانا'],
        ['ناکہ بندی / "قرنطینہ"', 'سوویت جہازوں کو روکنے کے لیے کیوبا کے گرد بحری گھیرا'],
        ['ExComm', 'کینیڈی کا چھوٹا خفیہ بحرانی مشاورتی گروپ'],
        ['MAD', 'اگر کوئی بھی فریق جوہری ہتھیاروں سے حملہ کرے تو دونوں تباہ']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['遏制', '美国阻止共产主义扩散的政策'],
        ['边缘政策', '把对抗推到战争边缘以迫使对方退让'],
        ['封锁 / "隔离检疫"', '封锁古巴、拦截苏联船只的海军包围圈'],
        ['ExComm（执行委员会）', '肯尼迪处理危机的小型秘密顾问团'],
        ['MAD', '任一方以核武器进攻，双方都会被摧毁']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── HS · Cuban Missile Crisis 1962 · DEEP ───────── */
  {
    id: 'hs-cuban-missile-crisis-deep-entry', grade: 11, unit: 'cuban-missile-crisis',
    unitTitle: 'The Cuban Missile Crisis, 1962 — Thirteen Days on the Brink', phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.41(c)(8)(A), (c)(8)(B), (c)(28)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: options & consequences',
      items: [
        { before: 'On October 14, 1962, photos from a', after: 'spy plane revealed Soviet missile sites under construction in Cuba.', choices: ['U-2', 'B-52', 'weather'], a: 0 },
        { before: 'Kennedy chose a naval', after: 'over an immediate airstrike, keeping room to negotiate.', choices: ['invasion', 'blockade', 'retreat'], a: 1 },
        { before: 'The Joint Chiefs pressed for an airstrike or invasion, but advisers warned it risked', after: 'with the Soviet Union.', choices: ['nuclear war', 'a trade deal', 'an election'], a: 0 }
      ],
      takeaway: 'The U-2 discovery, the blockade choice, and the escalation risk are the spine of the deep phase.'
    },
    es: {
      title: 'Calentamiento: opciones y consecuencias',
      items: [
        { before: 'El 14 de octubre de 1962, fotos de un avión espía', after: 'revelaron sitios de misiles soviéticos en construcción en Cuba.', choices: ['U-2', 'B-52', 'meteorológico'], a: 0 },
        { before: 'Kennedy eligió un', after: 'naval en vez de un ataque aéreo inmediato, dejando margen para negociar.', choices: ['invasión', 'bloqueo', 'repliegue'], a: 1 },
        { before: 'El Estado Mayor Conjunto presionó por un ataque aéreo o invasión, pero los asesores advirtieron que arriesgaba', after: 'con la Unión Soviética.', choices: ['una guerra nuclear', 'un acuerdo comercial', 'una elección'], a: 0 }
      ],
      takeaway: 'El descubrimiento del U-2, la opción del bloqueo y el riesgo de escalada son la columna de la fase profunda.'
    },
    vi: {
      title: 'Khởi động: các phương án và hệ quả',
      items: [
        { before: 'Ngày 14 tháng 10 năm 1962, ảnh chụp từ máy bay do thám', after: 'phát hiện các bãi phóng tên lửa Liên Xô đang được xây ở Cuba.', choices: ['U-2', 'B-52', 'thời tiết'], a: 0 },
        { before: 'Kennedy chọn một cuộc', after: 'bằng hải quân thay vì không kích ngay lập tức, để chừa chỗ thương lượng.', choices: ['xâm lược', 'phong tỏa', 'rút lui'], a: 1 },
        { before: 'Hội đồng Tham mưu trưởng thúc ép không kích hoặc xâm lược, nhưng các cố vấn cảnh báo điều đó có nguy cơ dẫn tới', after: 'với Liên Xô.', choices: ['chiến tranh hạt nhân', 'một thỏa thuận thương mại', 'một cuộc bầu cử'], a: 0 }
      ],
      takeaway: 'Việc U-2 phát hiện, lựa chọn phong tỏa và nguy cơ leo thang là xương sống của giai đoạn chuyên sâu.'
    },
    ar: {
      title: 'تهيئة: الخيارات والعواقب',
      items: [
        { before: 'في 14 أكتوبر 1962، كشفت صور من طائرة تجسّس', after: 'مواقع صواريخ سوفيتية قيد الإنشاء في كوبا.', choices: ['يو-2', 'بي-52', 'للأرصاد'], a: 0 },
        { before: 'اختار كينيدي', after: 'بحريًا بدل ضربة جوية فورية، مبقيًا مجالًا للتفاوض.', choices: ['غزوًا', 'حصارًا', 'انسحابًا'], a: 1 },
        { before: 'ضغط رؤساء الأركان لضربة جوية أو غزو، لكن المستشارين حذّروا من أن ذلك يخاطر بـ', after: 'مع الاتحاد السوفيتي.', choices: ['حرب نووية', 'اتفاق تجاري', 'انتخابات'], a: 0 }
      ],
      takeaway: 'اكتشاف اليو-2، وخيار الحصار، وخطر التصعيد هي عمود المرحلة المتعمّقة.'
    },
    hi: {
      title: 'वार्म-अप: विकल्प और परिणाम',
      items: [
        { before: '14 अक्टूबर 1962 को, एक जासूसी विमान', after: 'की तस्वीरों ने क्यूबा में निर्माणाधीन सोवियत मिसाइल स्थल उजागर किए।', choices: ['U-2', 'B-52', 'मौसम'], a: 0 },
        { before: 'कैनेडी ने तत्काल हवाई हमले के बजाय एक नौसैनिक', after: 'चुना, ताकि बातचीत की गुंजाइश बनी रहे।', choices: ['आक्रमण', 'नाकाबंदी', 'पीछे हटना'], a: 1 },
        { before: 'ज्वाइंट चीफ्स ने हवाई हमले या आक्रमण पर ज़ोर दिया, पर सलाहकारों ने चेताया कि इससे जोखिम था', after: 'का सोवियत संघ के साथ।', choices: ['परमाणु युद्ध', 'एक व्यापार समझौता', 'एक चुनाव'], a: 0 }
      ],
      takeaway: 'U-2 की खोज, नाकाबंदी का चुनाव, और वृद्धि का जोखिम गहन चरण की रीढ़ हैं।'
    },
    ur: {
      title: 'وارم اپ: اختیارات اور نتائج',
      items: [
        { before: '14 اکتوبر 1962 کو، ایک جاسوس طیارے', after: 'کی تصاویر نے کیوبا میں زیرِ تعمیر سوویت میزائل مقامات کو بے نقاب کیا۔', choices: ['U-2', 'B-52', 'موسمی'], a: 0 },
        { before: 'کینیڈی نے فوری فضائی حملے کے بجائے ایک بحری', after: 'کا انتخاب کیا، تاکہ مذاکرات کی گنجائش رہے۔', choices: ['حملہ', 'ناکہ بندی', 'پسپائی'], a: 1 },
        { before: 'جوائنٹ چیفس نے فضائی حملے یا حملے پر زور دیا، مگر مشیروں نے خبردار کیا کہ اس سے خطرہ تھا', after: 'کا سوویت یونین کے ساتھ۔', choices: ['جوہری جنگ', 'ایک تجارتی معاہدہ', 'ایک انتخاب'], a: 0 }
      ],
      takeaway: 'U-2 کی دریافت، ناکہ بندی کا انتخاب، اور کشیدگی کا خطرہ گہرے مرحلے کی ریڑھ ہیں۔'
    },
    zh: {
      title: '热身：选项与后果',
      items: [
        { before: '1962年10月14日，一架', after: '侦察机拍下的照片揭露了古巴境内正在建造的苏联导弹发射场。', choices: ['U-2', 'B-52', '气象'], a: 0 },
        { before: '肯尼迪选择了海军', after: '而非立即空袭，为谈判留出余地。', choices: ['入侵', '封锁', '撤退'], a: 1 },
        { before: '参谋长联席会议力主空袭或入侵，但顾问们警告这有风险引发与苏联的', after: '。', choices: ['核战争', '一项贸易协定', '一场选举'], a: 0 }
      ],
      takeaway: 'U-2 的发现、封锁的抉择以及升级的风险，是深层阶段的主干。'
    } }
  },
  {
    id: 'hs-cuban-missile-crisis-deep-exit', grade: 11, unit: 'cuban-missile-crisis',
    unitTitle: 'The Cuban Missile Crisis, 1962 — Thirteen Days on the Brink', phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.41(c)(8)(A), (c)(8)(B), (c)(28)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: firmer options vs. more cautious options',
      cats: ['Firmer / higher-risk response', 'More cautious / lower-risk response'],
      items: [
        { t: 'Airstrike to destroy the missile sites', c: 0 },
        { t: 'Full invasion of Cuba', c: 0 },
        { t: 'Threaten massive retaliation to force a pullout', c: 0 },
        { t: 'Naval blockade / "quarantine" of Cuba', c: 1 },
        { t: 'Quiet back-channel diplomacy with Khrushchev', c: 1 },
        { t: 'Offer to trade the Jupiter missiles in Turkey', c: 1 }
      ],
      takeaway: 'Sorting bold against cautious options is the concept map behind your evaluation of Kennedy’s choice.'
    },
    es: {
      title: 'Salida: opciones más firmes vs. opciones más cautelosas',
      cats: ['Respuesta más firme / de mayor riesgo', 'Respuesta más cautelosa / de menor riesgo'],
      items: [
        { t: 'Ataque aéreo para destruir los sitios de misiles', c: 0 },
        { t: 'Invasión total de Cuba', c: 0 },
        { t: 'Amenazar con represalias masivas para forzar la retirada', c: 0 },
        { t: 'Bloqueo naval / "cuarentena" de Cuba', c: 1 },
        { t: 'Diplomacia discreta por canales secretos con Jrushchov', c: 1 },
        { t: 'Ofrecer canjear los misiles Júpiter en Turquía', c: 1 }
      ],
      takeaway: 'Clasificar lo audaz frente a lo cauteloso es el mapa conceptual detrás de tu evaluación de la decisión de Kennedy.'
    },
    vi: {
      title: 'Phiếu ra: phương án cứng rắn hơn so với thận trọng hơn',
      cats: ['Phản ứng cứng rắn hơn / rủi ro cao hơn', 'Phản ứng thận trọng hơn / rủi ro thấp hơn'],
      items: [
        { t: 'Không kích phá hủy các bãi phóng tên lửa', c: 0 },
        { t: 'Xâm lược toàn diện Cuba', c: 0 },
        { t: 'Đe dọa trả đũa ồ ạt để buộc rút quân', c: 0 },
        { t: 'Phong tỏa hải quân / "cách ly" Cuba', c: 1 },
        { t: 'Ngoại giao kín qua kênh bí mật với Khrushchev', c: 1 },
        { t: 'Đề nghị đổi các tên lửa Jupiter ở Thổ Nhĩ Kỳ', c: 1 }
      ],
      takeaway: 'Phân loại phương án táo bạo so với thận trọng là sơ đồ khái niệm đằng sau đánh giá của bạn về lựa chọn của Kennedy.'
    },
    ar: {
      title: 'الخروج: خيارات أكثر حزمًا مقابل خيارات أكثر حذرًا',
      cats: ['استجابة أكثر حزمًا / أعلى مخاطرة', 'استجابة أكثر حذرًا / أقل مخاطرة'],
      items: [
        { t: 'ضربة جوية لتدمير مواقع الصواريخ', c: 0 },
        { t: 'غزو كامل لكوبا', c: 0 },
        { t: 'التهديد برد انتقامي هائل لإجبار الانسحاب', c: 0 },
        { t: 'حصار بحري / "حجر صحي" على كوبا', c: 1 },
        { t: 'دبلوماسية هادئة عبر قنوات سرّية مع خروتشوف', c: 1 },
        { t: 'عرض مقايضة صواريخ جوبيتر في تركيا', c: 1 }
      ],
      takeaway: 'تصنيف الجريء مقابل الحذِر هو الخريطة المفاهيمية وراء تقييمك لاختيار كينيدي.'
    },
    hi: {
      title: 'निकास: अधिक कठोर विकल्प बनाम अधिक सतर्क विकल्प',
      cats: ['अधिक कठोर / अधिक जोखिम वाली प्रतिक्रिया', 'अधिक सतर्क / कम जोखिम वाली प्रतिक्रिया'],
      items: [
        { t: 'मिसाइल स्थलों को नष्ट करने के लिए हवाई हमला', c: 0 },
        { t: 'क्यूबा पर पूर्ण आक्रमण', c: 0 },
        { t: 'वापसी के लिए बाध्य करने हेतु भारी जवाबी कार्रवाई की धमकी', c: 0 },
        { t: 'क्यूबा की नौसैनिक नाकाबंदी / "क्वारंटीन"', c: 1 },
        { t: 'ख्रुश्चेव के साथ गुप्त चैनल से शांत कूटनीति', c: 1 },
        { t: 'तुर्की में जुपिटर मिसाइलों की अदला-बदली की पेशकश', c: 1 }
      ],
      takeaway: 'साहसिक बनाम सतर्क विकल्पों को छाँटना ही कैनेडी के चुनाव के आपके मूल्यांकन के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: زیادہ سخت اختیارات بمقابلہ زیادہ محتاط اختیارات',
      cats: ['زیادہ سخت / زیادہ خطرے والا ردعمل', 'زیادہ محتاط / کم خطرے والا ردعمل'],
      items: [
        { t: 'میزائل مقامات کو تباہ کرنے کے لیے فضائی حملہ', c: 0 },
        { t: 'کیوبا پر مکمل حملہ', c: 0 },
        { t: 'انخلا پر مجبور کرنے کے لیے بھرپور جوابی کارروائی کی دھمکی', c: 0 },
        { t: 'کیوبا کی بحری ناکہ بندی / "قرنطینہ"', c: 1 },
        { t: 'خروشچیف کے ساتھ خفیہ چینل سے خاموش سفارت کاری', c: 1 },
        { t: 'ترکی میں جوپیٹر میزائلوں کے تبادلے کی پیشکش', c: 1 }
      ],
      takeaway: 'جرات مندانہ بمقابلہ محتاط اختیارات کو چھانٹنا ہی کینیڈی کے انتخاب کے آپ کے جائزے کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：更强硬的选项与更谨慎的选项',
      cats: ['更强硬 / 更高风险的应对', '更谨慎 / 更低风险的应对'],
      items: [
        { t: '空袭以摧毁导弹发射场', c: 0 },
        { t: '全面入侵古巴', c: 0 },
        { t: '威胁大规模报复以迫使撤离', c: 0 },
        { t: '对古巴进行海军封锁 / "隔离检疫"', c: 1 },
        { t: '通过秘密渠道与赫鲁晓夫进行低调外交', c: 1 },
        { t: '提出交换土耳其的木星导弹', c: 1 }
      ],
      takeaway: '把强硬与谨慎的选项分类，就是你评价肯尼迪抉择背后的概念图。'
    } }
  },

  /* ───────── HS · Cuban Missile Crisis 1962 · TRANSFER ───────── */
  {
    id: 'hs-cuban-missile-crisis-transfer-entry', grade: 11, unit: 'cuban-missile-crisis',
    unitTitle: 'The Cuban Missile Crisis, 1962 — Thirteen Days on the Brink', phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.41(c)(31)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving process',
      seconds: 45,
      questions: [
        { q: 'The FIRST move of the problem-solving process is to…', choices: ['pick a solution', 'identify the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing, a good problem-solver…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other stakeholders'], a: 0 },
        { q: 'A strong recommendation is backed by…', choices: ['a loud voice', 'claim + evidence', 'only feelings'], a: 1 },
        { q: 'The LAST step is to…', choices: ['forget it', 'evaluate how well the solution worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Identify → gather → weigh options → choose → defend → evaluate. That is §113.41(c)(31)(B).'
    },
    es: {
      title: 'Calentamiento: el proceso de resolución de problemas',
      seconds: 45,
      questions: [
        { q: 'El PRIMER paso del proceso de resolución de problemas es…', choices: ['elegir una solución', 'identificar el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir, quien resuelve bien problemas…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora a otras partes interesadas'], a: 0 },
        { q: 'Una recomendación sólida se respalda con…', choices: ['una voz fuerte', 'afirmación + evidencia', 'solo sentimientos'], a: 1 },
        { q: 'El ÚLTIMO paso es…', choices: ['olvidarlo', 'evaluar qué tan bien funcionó la solución', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Identificar → reunir → sopesar opciones → elegir → defender → evaluar. Eso es §113.41(c)(31)(B).'
    },
    vi: {
      title: 'Khởi động: quy trình giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Bước ĐẦU TIÊN của quy trình giải quyết vấn đề là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua các bên liên quan khác'], a: 0 },
        { q: 'Một khuyến nghị vững chắc được củng cố bằng…', choices: ['một giọng nói to', 'luận điểm + bằng chứng', 'chỉ cảm xúc'], a: 1 },
        { q: 'Bước CUỐI CÙNG là…', choices: ['quên nó đi', 'đánh giá giải pháp hiệu quả ra sao', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc phương án → chọn → bảo vệ → đánh giá. Đó là §113.41(c)(31)(B).'
    },
    ar: {
      title: 'تهيئة: عملية حل المشكلات',
      seconds: 45,
      questions: [
        { q: 'أول خطوة في عملية حل المشكلات هي…', choices: ['اختيار حل', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل الاختيار، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل أصحاب المصلحة الآخرين'], a: 0 },
        { q: 'التوصية القوية تُدعم بـ…', choices: ['صوت عالٍ', 'ادعاء + دليل', 'المشاعر فقط'], a: 1 },
        { q: 'الخطوة الأخيرة هي…', choices: ['نسيانها', 'تقييم مدى نجاح الحل', 'إخفاء المفاضلات'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن الخيارات ← اختَر ← دافِع ← قيِّم. تلك هي §113.41(c)(31)(B).'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान प्रक्रिया',
      seconds: 45,
      questions: [
        { q: 'समस्या-समाधान प्रक्रिया का पहला कदम है…', choices: ['एक समाधान चुनना', 'समस्या की पहचान करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'चुनने से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य हितधारकों को अनदेखा करता है'], a: 0 },
        { q: 'एक मजबूत सिफारिश का आधार होता है…', choices: ['एक ऊँची आवाज़', 'दावा + साक्ष्य', 'केवल भावनाएँ'], a: 1 },
        { q: 'अंतिम कदम है…', choices: ['उसे भूल जाना', 'यह आँकना कि समाधान कितना अच्छा रहा', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'पहचानें → जुटाएँ → विकल्प तौलें → चुनें → बचाव करें → आँकें। यही §113.41(c)(31)(B) है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کا عمل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے کے عمل کا پہلا قدم ہے…', choices: ['ایک حل چننا', 'مسئلے کی نشاندہی کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'چننے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دیگر اسٹیک ہولڈرز کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'ایک مضبوط سفارش کی بنیاد ہوتی ہے…', choices: ['ایک بلند آواز', 'دعویٰ + ثبوت', 'صرف جذبات'], a: 1 },
        { q: 'آخری قدم ہے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ حل کتنا کارگر رہا', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'نشاندہی ← جمع ← اختیارات تولنا ← چننا ← دفاع ← جانچنا۔ یہی §113.41(c)(31)(B) ہے۔'
    },
    zh: {
      title: '热身：解决问题的流程',
      seconds: 45,
      questions: [
        { q: '解决问题流程的第一步是…', choices: ['挑选一个方案', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在做出选择之前，优秀的解决问题者会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视其他利益相关者'], a: 0 },
        { q: '有力的建议背后有…', choices: ['大嗓门', '主张 + 证据', '只有感受'], a: 1 },
        { q: '最后一步是…', choices: ['把它忘掉', '评估方案的效果如何', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡方案 → 选择 → 辩护 → 评估。这就是 §113.41(c)(31)(B)。'
    } }
  },
  {
    id: 'hs-cuban-missile-crisis-transfer-exit', grade: 11, unit: 'cuban-missile-crisis',
    unitTitle: 'The Cuban Missile Crisis, 1962 — Thirteen Days on the Brink', phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.41(c)(31)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim, evidence & trade-offs',
      items: [
        { before: 'A recommendation without', after: 'from the sources is just an opinion.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: 'Reasoning from a stakeholder’s', after: 'is how you see the crisis as Kennedy, Khrushchev, or Castro did.', choices: ['point of view', 'budget', 'signature'], a: 0 },
        { before: 'Naming the', after: 'of your solution — like the secret Jupiter-missiles trade — shows you weighed the options.', choices: ['trade-offs', 'colors', 'vocabulary'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs = running the full problem-solving process like a historian and citizen.'
    },
    es: {
      title: 'Salida: afirmación, evidencia y concesiones',
      items: [
        { before: 'Una recomendación sin', after: 'de las fuentes es solo una opinión.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Razonar desde el', after: 'de una parte interesada es cómo ves la crisis como la vieron Kennedy, Jrushchov o Castro.', choices: ['punto de vista', 'presupuesto', 'firma'], a: 0 },
        { before: 'Nombrar las', after: 'de tu solución —como el canje secreto de los misiles Júpiter— muestra que sopesaste las opciones.', choices: ['concesiones', 'colores', 'vocabulario'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones = recorrer todo el proceso de resolución como historiador y ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm, bằng chứng & đánh đổi',
      items: [
        { before: 'Một khuyến nghị không có', after: 'từ các nguồn thì chỉ là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Suy luận từ', after: 'của một bên liên quan là cách bạn nhìn cuộc khủng hoảng như Kennedy, Khrushchev hay Castro đã nhìn.', choices: ['góc nhìn', 'ngân sách', 'chữ ký'], a: 0 },
        { before: 'Nêu ra những', after: 'của giải pháp — như vụ đổi tên lửa Jupiter bí mật — cho thấy bạn đã cân nhắc các phương án.', choices: ['đánh đổi', 'màu sắc', 'từ vựng'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi = thực hiện trọn quy trình giải quyết vấn đề như một nhà sử học và công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء ودليل ومفاضلات',
      items: [
        { before: 'التوصية بلا', after: 'من المصادر ما هي إلا رأي.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'الاستدلال من', after: 'صاحب المصلحة هو كيف ترى الأزمة كما رآها كينيدي أو خروتشوف أو كاسترو.', choices: ['وجهة نظر', 'ميزانية', 'توقيع'], a: 0 },
        { before: 'إن تسمية', after: 'الخاصة بحلّك — مثل مقايضة صواريخ جوبيتر السرّية — تُظهر أنك وازنت الخيارات.', choices: ['المفاضلات', 'الألوان', 'المفردات'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات = تنفيذ عملية حل المشكلات كاملةً كمؤرّخ ومواطن.'
    },
    hi: {
      title: 'निकास: दावा, साक्ष्य और समझौते',
      items: [
        { before: 'स्रोतों से', after: 'के बिना सिफारिश महज़ एक राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: 'किसी हितधारक के', after: 'से तर्क करना ही वह तरीका है जिससे आप संकट को कैनेडी, ख्रुश्चेव या कास्त्रो की तरह देखते हैं।', choices: ['दृष्टिकोण', 'बजट', 'हस्ताक्षर'], a: 0 },
        { before: 'अपने समाधान की', after: 'का नाम लेना — जैसे गुप्त जुपिटर-मिसाइल अदला-बदली — दिखाता है कि आपने विकल्प तौले।', choices: ['समझौतों', 'रंगों', 'शब्दावली'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते = एक इतिहासकार और नागरिक की तरह पूरी समस्या-समाधान प्रक्रिया चलाना।'
    },
    ur: {
      title: 'اخراج: دعویٰ، ثبوت اور سمجھوتے',
      items: [
        { before: 'مآخذ سے', after: 'کے بغیر سفارش محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: 'کسی اسٹیک ہولڈر کے', after: 'سے استدلال کرنا ہی وہ طریقہ ہے جس سے آپ بحران کو کینیڈی، خروشچیف یا کاسترو کی طرح دیکھتے ہیں۔', choices: ['نقطہ نظر', 'بجٹ', 'دستخط'], a: 0 },
        { before: 'اپنے حل کے', after: 'کا نام لینا — جیسے خفیہ جوپیٹر میزائل تبادلہ — ظاہر کرتا ہے کہ آپ نے اختیارات تولے۔', choices: ['سمجھوتوں', 'رنگوں', 'الفاظ'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے = ایک مؤرخ اور شہری کی طرح پورا مسئلہ حل کرنے کا عمل چلانا۔'
    },
    zh: {
      title: '离场：主张、证据与取舍',
      items: [
        { before: '一份建议若没有来自资料的', after: '，就只是一种意见。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '从某位利益相关者的', after: '进行推理，就是像肯尼迪、赫鲁晓夫或卡斯特罗那样看待这场危机。', choices: ['视角', '预算', '签名'], a: 0 },
        { before: '说出你方案中的', after: '——比如秘密交换木星导弹——表明你权衡过各种方案。', choices: ['取舍', '颜色', '词汇'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍 = 像史学家和公民那样走完整个解决问题的流程。'
    } }
  }

]);
