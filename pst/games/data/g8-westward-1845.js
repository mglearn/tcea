/* PST Arcade — ticket registry (Grade 8 · Crossing the Continent, 1845).
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. Content on Manifest Destiny,
   displacement, and slavery expansion is kept factual and respectful toward Native nations,
   Mexican residents, and enslaved people (TEC §28.0022). */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 8 · Westward 1845 · SURFACE ───────── */
  {
    id: 'g8-westward-1845-surface-entry', grade: 8, unit: 'westward-1845',
    unitTitle: "Crossing the Continent, 1845 — How Far Should the Nation Go?", phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.20(c)(6)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: expansion words',
      seconds: 45,
      questions: [
        { q: 'The 1840s belief that the U.S. was meant to expand across the continent was called…', choices: ['Manifest Destiny', 'popular sovereignty', 'sectionalism'], a: 0 },
        { q: 'Adding a new territory such as Texas to the country is called…', choices: ['cession', 'annexation', 'migration'], a: 1 },
        { q: 'Land given up by one country to another — like the Mexican Cession — is a…', choices: ['cession', 'treaty', 'frontier'], a: 0 },
        { q: 'Loyalty to your region over the nation as a whole is called…', choices: ['annexation', 'sectionalism', 'territory'], a: 1 }
      ],
      takeaway: 'Know these four words and the rest of the unit will read clearly.'
    },
    es: {
      title: 'Calentamiento: palabras de la expansión',
      seconds: 45,
      questions: [
        { q: 'La creencia de la década de 1840 de que EE. UU. debía expandirse por el continente se llamaba…', choices: ['Destino Manifiesto', 'soberanía popular', 'seccionalismo'], a: 0 },
        { q: 'Añadir un nuevo territorio como Texas al país se llama…', choices: ['cesión', 'anexión', 'migración'], a: 1 },
        { q: 'La tierra que un país cede a otro —como la Cesión Mexicana— es una…', choices: ['cesión', 'tratado', 'frontera'], a: 0 },
        { q: 'La lealtad a tu región por encima de la nación en su conjunto se llama…', choices: ['anexión', 'seccionalismo', 'territorio'], a: 1 }
      ],
      takeaway: 'Domina estas cuatro palabras y el resto de la unidad se leerá con claridad.'
    },
    vi: {
      title: 'Khởi động: từ vựng về mở rộng lãnh thổ',
      seconds: 45,
      questions: [
        { q: 'Niềm tin thập niên 1840 rằng Hoa Kỳ có sứ mệnh mở rộng khắp lục địa được gọi là…', choices: ['Vận Mệnh Hiển Nhiên', 'chủ quyền nhân dân', 'chủ nghĩa phân vùng'], a: 0 },
        { q: 'Việc sáp nhập một lãnh thổ mới như Texas vào đất nước được gọi là…', choices: ['nhượng địa', 'sáp nhập', 'di cư'], a: 1 },
        { q: 'Vùng đất mà một nước nhượng lại cho nước khác — như phần nhượng địa Mexico — là một…', choices: ['nhượng địa', 'hiệp ước', 'biên cương'], a: 0 },
        { q: 'Lòng trung thành với vùng miền của mình hơn cả quốc gia được gọi là…', choices: ['sáp nhập', 'chủ nghĩa phân vùng', 'lãnh thổ'], a: 1 }
      ],
      takeaway: 'Nắm bốn từ này thì phần còn lại của bài học sẽ rõ ràng.'
    },
    ar: {
      title: 'تهيئة: كلمات التوسّع',
      seconds: 45,
      questions: [
        { q: 'الاعتقاد في أربعينيات القرن التاسع عشر بأنّ الولايات المتحدة مقدَّر لها أن تتوسّع عبر القارة سُمّي…', choices: ['القدَر المتجلّي', 'السيادة الشعبية', 'النزعة الإقليمية'], a: 0 },
        { q: 'ضمّ إقليم جديد مثل تكساس إلى البلاد يُسمّى…', choices: ['تنازلًا', 'ضمًّا', 'هجرة'], a: 1 },
        { q: 'الأرض التي تتنازل عنها دولة لأخرى — كالتنازل المكسيكي — هي…', choices: ['تنازل', 'معاهدة', 'حدود'], a: 0 },
        { q: 'الولاء لإقليمك فوق الأمّة ككل يُسمّى…', choices: ['ضمًّا', 'النزعة الإقليمية', 'إقليمًا'], a: 1 }
      ],
      takeaway: 'أتقِن هذه الكلمات الأربع وستقرأ بقية الوحدة بوضوح.'
    },
    hi: {
      title: 'वार्म-अप: विस्तार के शब्द',
      seconds: 45,
      questions: [
        { q: '1840 के दशक की यह मान्यता कि अमेरिका को महाद्वीप भर में फैलना था, कहलाती थी…', choices: ['मैनिफेस्ट डेस्टिनी', 'लोकप्रिय संप्रभुता', 'क्षेत्रीयतावाद'], a: 0 },
        { q: 'टेक्सास जैसे किसी नए क्षेत्र को देश में जोड़ना कहलाता है…', choices: ['अधिहरण (सेशन)', 'विलय (एनेक्सेशन)', 'प्रवास'], a: 1 },
        { q: 'एक देश द्वारा दूसरे को दी गई भूमि — जैसे मेक्सिकन सेशन — है एक…', choices: ['अधिहरण (सेशन)', 'संधि', 'सीमांत'], a: 0 },
        { q: 'समूचे राष्ट्र के बजाय अपने क्षेत्र के प्रति निष्ठा कहलाती है…', choices: ['विलय', 'क्षेत्रीयतावाद', 'क्षेत्र'], a: 1 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और शेष इकाई स्पष्ट रूप से पढ़ी जाएगी।'
    },
    ur: {
      title: 'وارم اپ: توسیع کے الفاظ',
      seconds: 45,
      questions: [
        { q: '1840 کی دہائی کا یہ عقیدہ کہ امریکہ کو براعظم بھر میں پھیلنا تھا، کہلاتا تھا…', choices: ['مینی فیسٹ ڈیسٹنی', 'عوامی خودمختاری', 'علاقائیت'], a: 0 },
        { q: 'ٹیکساس جیسے کسی نئے علاقے کو ملک میں شامل کرنا کہلاتا ہے…', choices: ['دستبرداری (سیشن)', 'الحاق (اینیکسیشن)', 'ہجرت'], a: 1 },
        { q: 'ایک ملک کی جانب سے دوسرے کو دی گئی زمین — جیسے میکسیکن سیشن — ہے ایک…', choices: ['دستبرداری (سیشن)', 'معاہدہ', 'سرحدی علاقہ'], a: 0 },
        { q: 'پوری قوم کے بجائے اپنے علاقے سے وفاداری کہلاتی ہے…', choices: ['الحاق', 'علاقائیت', 'علاقہ'], a: 1 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو باقی اکائی واضح طور پر پڑھی جائے گی۔'
    },
    zh: {
      title: '热身：扩张词汇',
      seconds: 45,
      questions: [
        { q: '1840 年代认为美国注定要横跨大陆扩张的信念被称为…', choices: ['天定命运', '人民主权', '地方主义'], a: 0 },
        { q: '把得克萨斯这样的新领地并入国家称为…', choices: ['割让', '兼并', '迁移'], a: 1 },
        { q: '一国让与另一国的土地——如墨西哥割让地——是一种…', choices: ['割让', '条约', '边疆'], a: 0 },
        { q: '把对本地区的忠诚置于整个国家之上称为…', choices: ['兼并', '地方主义', '领地'], a: 1 }
      ],
      takeaway: '掌握这四个词，本单元的其余部分就会读得清楚。'
    } }
  },
  {
    id: 'g8-westward-1845-surface-exit', grade: 8, unit: 'westward-1845',
    unitTitle: "Crossing the Continent, 1845 — How Far Should the Nation Go?", phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.20(c)(6)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['annexation', 'adding a new territory to the country'],
        ['cession', 'land one country gives up to another'],
        ['sectionalism', 'loyalty to your region over the whole nation'],
        ['popular sovereignty', 'letting a territory vote on whether it allows slavery'],
        ['treaty', 'a formal, written agreement between nations']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['anexión', 'añadir un nuevo territorio al país'],
        ['cesión', 'tierra que un país cede a otro'],
        ['seccionalismo', 'lealtad a tu región por encima de toda la nación'],
        ['soberanía popular', 'dejar que un territorio vote si permite la esclavitud'],
        ['tratado', 'un acuerdo formal y escrito entre naciones']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['sáp nhập', 'thêm một lãnh thổ mới vào đất nước'],
        ['nhượng địa', 'vùng đất một nước nhượng lại cho nước khác'],
        ['chủ nghĩa phân vùng', 'lòng trung thành với vùng miền hơn cả quốc gia'],
        ['chủ quyền nhân dân', 'để một lãnh thổ bỏ phiếu xem có cho phép chế độ nô lệ hay không'],
        ['hiệp ước', 'một thỏa thuận chính thức, bằng văn bản giữa các quốc gia']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['الضمّ', 'إضافة إقليم جديد إلى البلاد'],
        ['التنازل', 'أرض تتنازل عنها دولة لأخرى'],
        ['النزعة الإقليمية', 'الولاء لإقليمك فوق الأمّة كلها'],
        ['السيادة الشعبية', 'ترك الإقليم يصوّت على السماح بالعبودية من عدمه'],
        ['المعاهدة', 'اتفاق رسمي مكتوب بين الأمم']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['विलय', 'देश में एक नया क्षेत्र जोड़ना'],
        ['अधिहरण', 'भूमि जो एक देश दूसरे को देता है'],
        ['क्षेत्रीयतावाद', 'समूचे राष्ट्र के बजाय अपने क्षेत्र के प्रति निष्ठा'],
        ['लोकप्रिय संप्रभुता', 'किसी क्षेत्र को यह वोट देने देना कि वह दासता की अनुमति दे या नहीं'],
        ['संधि', 'राष्ट्रों के बीच एक औपचारिक, लिखित समझौता']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['الحاق', 'ملک میں ایک نیا علاقہ شامل کرنا'],
        ['دستبرداری', 'زمین جو ایک ملک دوسرے کو دیتا ہے'],
        ['علاقائیت', 'پوری قوم کے بجائے اپنے علاقے سے وفاداری'],
        ['عوامی خودمختاری', 'کسی علاقے کو یہ ووٹ دینے دینا کہ وہ غلامی کی اجازت دے یا نہیں'],
        ['معاہدہ', 'اقوام کے درمیان ایک باقاعدہ، تحریری سمجھوتہ']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['兼并', '把一块新领地并入国家'],
        ['割让', '一国让与另一国的土地'],
        ['地方主义', '把对本地区的忠诚置于整个国家之上'],
        ['人民主权', '让某领地投票决定是否允许蓄奴'],
        ['条约', '国家之间正式的书面协议']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 8 · Westward 1845 · DEEP ───────── */
  {
    id: 'g8-westward-1845-deep-entry', grade: 8, unit: 'westward-1845',
    unitTitle: "Crossing the Continent, 1845 — How Far Should the Nation Go?", phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.20(c)(6), (c)(7), (c)(12)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: opportunity & cost',
      items: [
        { before: 'New land opening for settler farms was an', after: 'for some families.', choices: ['opportunity', 'a treaty', 'a cession'], a: 0 },
        { before: 'For Native nations, the same expansion moved onto their homelands and was a great', after: 'to them.', choices: ['reward', 'cost', 'annexation'], a: 1 },
        { before: 'Because each new territory reopened slavery, expansion pushed North and South toward', after: 'and crisis.', choices: ['sectionalism', 'migration', 'a frontier'], a: 0 }
      ],
      takeaway: 'The same expansion was opportunity for some and cost for others — hold both.'
    },
    es: {
      title: 'Calentamiento: oportunidad y costo',
      items: [
        { before: 'Que se abriera nueva tierra para granjas de colonos fue una', after: 'para algunas familias.', choices: ['oportunidad', 'un tratado', 'una cesión'], a: 0 },
        { before: 'Para las naciones indígenas, esa misma expansión invadió sus tierras y fue un gran', after: 'para ellas.', choices: ['premio', 'costo', 'anexión'], a: 1 },
        { before: 'Como cada nuevo territorio reabría la esclavitud, la expansión empujó al Norte y al Sur hacia', after: 'y la crisis.', choices: ['el seccionalismo', 'la migración', 'una frontera'], a: 0 }
      ],
      takeaway: 'La misma expansión fue oportunidad para unos y costo para otros: ten en cuenta ambos.'
    },
    vi: {
      title: 'Khởi động: cơ hội & cái giá',
      items: [
        { before: 'Việc mở ra vùng đất mới cho các trang trại của người định cư là một', after: 'đối với một số gia đình.', choices: ['cơ hội', 'một hiệp ước', 'một phần nhượng địa'], a: 0 },
        { before: 'Với các dân tộc bản địa, chính cuộc mở rộng ấy tràn vào quê hương họ và là một', after: 'lớn đối với họ.', choices: ['phần thưởng', 'cái giá', 'sự sáp nhập'], a: 1 },
        { before: 'Vì mỗi lãnh thổ mới lại khơi lại chế độ nô lệ, cuộc mở rộng đẩy miền Bắc và miền Nam về phía', after: 'và khủng hoảng.', choices: ['chủ nghĩa phân vùng', 'sự di cư', 'một vùng biên cương'], a: 0 }
      ],
      takeaway: 'Cùng một cuộc mở rộng là cơ hội cho người này và cái giá cho người khác — hãy giữ cả hai.'
    },
    ar: {
      title: 'تهيئة: الفرصة والكلفة',
      items: [
        { before: 'فتح أرض جديدة لمزارع المستوطنين كان', after: 'لبعض العائلات.', choices: ['فرصة', 'معاهدة', 'تنازلًا'], a: 0 },
        { before: 'أمّا للأمم الأصلية، فقد زحف التوسّع نفسه على أوطانهم وكان', after: 'كبيرة عليهم.', choices: ['مكافأة', 'كلفة', 'ضمًّا'], a: 1 },
        { before: 'ولأنّ كل إقليم جديد يعيد فتح مسألة العبودية، دفع التوسّع الشمال والجنوب نحو', after: 'والأزمة.', choices: ['النزعة الإقليمية', 'الهجرة', 'حدود'], a: 0 }
      ],
      takeaway: 'التوسّع نفسه كان فرصة للبعض وكلفة على غيرهم — احمل الاثنين معًا.'
    },
    hi: {
      title: 'वार्म-अप: अवसर और लागत',
      items: [
        { before: 'बसने वालों के खेतों के लिए नई भूमि का खुलना कुछ परिवारों के लिए एक', after: 'था।', choices: ['अवसर', 'एक संधि', 'एक अधिहरण'], a: 0 },
        { before: 'मूल राष्ट्रों के लिए वही विस्तार उनकी मातृभूमि पर चढ़ आया और उनके लिए एक बड़ी', after: 'था।', choices: ['इनाम', 'लागत', 'विलय'], a: 1 },
        { before: 'चूँकि हर नया क्षेत्र दासता को फिर से खोल देता था, विस्तार ने उत्तर और दक्षिण को', after: 'और संकट की ओर धकेला।', choices: ['क्षेत्रीयतावाद', 'प्रवास', 'एक सीमांत'], a: 0 }
      ],
      takeaway: 'वही विस्तार कुछ के लिए अवसर और दूसरों के लिए लागत था — दोनों को थामें।'
    },
    ur: {
      title: 'وارم اپ: موقع اور قیمت',
      items: [
        { before: 'آبادکاروں کے کھیتوں کے لیے نئی زمین کا کھلنا کچھ خاندانوں کے لیے ایک', after: 'تھا۔', choices: ['موقع', 'ایک معاہدہ', 'ایک دستبرداری'], a: 0 },
        { before: 'مقامی اقوام کے لیے وہی توسیع اُن کے وطن پر چڑھ آئی اور اُن کے لیے ایک بڑی', after: 'تھی۔', choices: ['انعام', 'قیمت', 'الحاق'], a: 1 },
        { before: 'چونکہ ہر نیا علاقہ غلامی کو دوبارہ کھول دیتا تھا، توسیع نے شمال اور جنوب کو', after: 'اور بحران کی طرف دھکیلا۔', choices: ['علاقائیت', 'ہجرت', 'ایک سرحدی علاقہ'], a: 0 }
      ],
      takeaway: 'وہی توسیع کچھ کے لیے موقع اور دوسروں کے لیے قیمت تھی — دونوں کو تھامیں۔'
    },
    zh: {
      title: '热身：机遇与代价',
      items: [
        { before: '为拓荒者农场开放新的土地，对一些家庭来说是一种', after: '。', choices: ['机遇', '一份条约', '一块割让地'], a: 0 },
        { before: '对原住民族而言，同样的扩张侵入了他们的家园，对他们来说是巨大的', after: '。', choices: ['奖赏', '代价', '兼并'], a: 1 },
        { before: '由于每一块新领地都重新掀起蓄奴之争，扩张把北方与南方推向', after: '与危机。', choices: ['地方主义', '迁移', '一片边疆'], a: 0 }
      ],
      takeaway: '同样的扩张对一些人是机遇、对另一些人是代价——两者都要记住。'
    } }
  },
  {
    id: 'g8-westward-1845-deep-exit', grade: 8, unit: 'westward-1845',
    unitTitle: "Crossing the Continent, 1845 — How Far Should the Nation Go?", phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.20(c)(6), (c)(7), (c)(12), (c)(21)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: opportunity or cost of expansion?',
      cats: ['An opportunity for some', 'A cost for others'],
      items: [
        { t: 'Settler families gaining farmland in the West', c: 0 },
        { t: 'The nation reaching the Pacific with new ports', c: 0 },
        { t: 'New land and resources for a growing economy', c: 0 },
        { t: 'Native nations losing their homelands', c: 1 },
        { t: 'Mexican residents becoming foreigners on their own land', c: 1 },
        { t: 'Enslaved people whose futures were bargained over the territories', c: 1 }
      ],
      takeaway: 'Sorting who gained and who paid is the concept map behind a fair judgment of expansion.'
    },
    es: {
      title: 'Salida: ¿oportunidad o costo de la expansión?',
      cats: ['Una oportunidad para algunos', 'Un costo para otros'],
      items: [
        { t: 'Familias de colonos que obtienen tierras de cultivo en el Oeste', c: 0 },
        { t: 'La nación alcanzando el Pacífico con nuevos puertos', c: 0 },
        { t: 'Nueva tierra y recursos para una economía en crecimiento', c: 0 },
        { t: 'Naciones indígenas que pierden sus tierras', c: 1 },
        { t: 'Residentes mexicanos que se vuelven extranjeros en su propia tierra', c: 1 },
        { t: 'Personas esclavizadas cuyo futuro se negoció por los territorios', c: 1 }
      ],
      takeaway: 'Clasificar quién ganó y quién pagó es el mapa conceptual detrás de un juicio justo de la expansión.'
    },
    vi: {
      title: 'Phiếu ra: cơ hội hay cái giá của mở rộng?',
      cats: ['Cơ hội cho một số người', 'Cái giá cho những người khác'],
      items: [
        { t: 'Các gia đình định cư có được đất canh tác ở miền Tây', c: 0 },
        { t: 'Đất nước vươn tới Thái Bình Dương với các cảng mới', c: 0 },
        { t: 'Đất đai và tài nguyên mới cho một nền kinh tế đang lớn mạnh', c: 0 },
        { t: 'Các dân tộc bản địa mất đi quê hương', c: 1 },
        { t: 'Cư dân Mexico trở thành người ngoại quốc ngay trên đất của mình', c: 1 },
        { t: 'Những người nô lệ có tương lai bị mặc cả qua các lãnh thổ', c: 1 }
      ],
      takeaway: 'Phân loại ai được lợi và ai phải trả giá là sơ đồ khái niệm đằng sau một phán xét công bằng về mở rộng.'
    },
    ar: {
      title: 'الخروج: فرصة أم كلفة للتوسّع؟',
      cats: ['فرصة للبعض', 'كلفة على غيرهم'],
      items: [
        { t: 'عائلات مستوطنة تنال أراضٍ زراعية في الغرب', c: 0 },
        { t: 'الأمّة تصل إلى المحيط الهادئ بموانئ جديدة', c: 0 },
        { t: 'أرض وموارد جديدة لاقتصاد متنامٍ', c: 0 },
        { t: 'أمم أصلية تفقد أوطانها', c: 1 },
        { t: 'سكّان مكسيكيون يصبحون غرباء على أرضهم', c: 1 },
        { t: 'أشخاص مستعبَدون تُساوَم مصائرهم على الأقاليم', c: 1 }
      ],
      takeaway: 'تصنيف مَن كسب ومَن دفع هو الخريطة المفاهيمية وراء حُكم عادل على التوسّع.'
    },
    hi: {
      title: 'निकास: विस्तार — अवसर या लागत?',
      cats: ['कुछ के लिए एक अवसर', 'दूसरों के लिए एक लागत'],
      items: [
        { t: 'पश्चिम में कृषि भूमि पाने वाले बसने वाले परिवार', c: 0 },
        { t: 'नए बंदरगाहों के साथ प्रशांत तक पहुँचता राष्ट्र', c: 0 },
        { t: 'बढ़ती अर्थव्यवस्था के लिए नई भूमि और संसाधन', c: 0 },
        { t: 'अपनी मातृभूमि खोते मूल राष्ट्र', c: 1 },
        { t: 'अपनी ही भूमि पर विदेशी बन जाते मैक्सिकन निवासी', c: 1 },
        { t: 'दास लोग जिनके भविष्य को क्षेत्रों पर सौदेबाज़ी में डाला गया', c: 1 }
      ],
      takeaway: 'किसे लाभ हुआ और किसने कीमत चुकाई — यह छाँटना ही विस्तार के न्यायसंगत निर्णय के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: توسیع — موقع یا قیمت؟',
      cats: ['کچھ کے لیے ایک موقع', 'دوسروں کے لیے ایک قیمت'],
      items: [
        { t: 'مغرب میں کاشتکاری کی زمین پانے والے آبادکار خاندان', c: 0 },
        { t: 'نئی بندرگاہوں کے ساتھ بحرالکاہل تک پہنچتی قوم', c: 0 },
        { t: 'بڑھتی معیشت کے لیے نئی زمین اور وسائل', c: 0 },
        { t: 'اپنا وطن کھوتی مقامی اقوام', c: 1 },
        { t: 'اپنی ہی زمین پر اجنبی بن جاتے میکسیکن باشندے', c: 1 },
        { t: 'غلام لوگ جن کے مستقبل کو علاقوں پر سودے بازی میں ڈالا گیا', c: 1 }
      ],
      takeaway: 'کس نے فائدہ اٹھایا اور کس نے قیمت چکائی — یہ چھانٹنا ہی توسیع کے منصفانہ فیصلے کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：扩张是机遇还是代价？',
      cats: ['对一些人是机遇', '对另一些人是代价'],
      items: [
        { t: '在西部获得农田的拓荒家庭', c: 0 },
        { t: '国家凭借新港口抵达太平洋', c: 0 },
        { t: '为不断增长的经济带来新土地与资源', c: 0 },
        { t: '失去家园的原住民族', c: 1 },
        { t: '在自己的土地上沦为外国人的墨西哥居民', c: 1 },
        { t: '未来被拿来在这些领地上讨价还价的被奴役者', c: 1 }
      ],
      takeaway: '分清谁受益、谁付出代价，就是对扩张作出公正判断背后的概念图。'
    } }
  },

  /* ───────── Grade 8 · Westward 1845 · TRANSFER ───────── */
  {
    id: 'g8-westward-1845-transfer-entry', grade: 8, unit: 'westward-1845',
    unitTitle: "Crossing the Continent, 1845 — How Far Should the Nation Go?", phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.20(c)(31)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving steps',
      seconds: 45,
      questions: [
        { q: 'The FIRST move in the problem-solving process is to…', choices: ['pick a solution', 'define the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing terms, a good problem-solver…', choices: ['gathers valid information & weighs options', 'guesses quickly', 'ignores other stakeholders'], a: 0 },
        { q: 'A strong proposal for expansion is backed by…', choices: ['a loud voice', 'evidence & named trade-offs', 'only feelings'], a: 1 },
        { q: 'After choosing a solution, the LAST step is to…', choices: ['forget it', 'evaluate how well it worked', 'hide the human cost'], a: 1 }
      ],
      takeaway: 'Define → gather → weigh → decide → defend → evaluate. That is §113.20(c)(31)(B).'
    },
    es: {
      title: 'Calentamiento: los pasos para resolver problemas',
      seconds: 45,
      questions: [
        { q: 'El PRIMER paso del proceso de resolución de problemas es…', choices: ['elegir una solución', 'definir el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir los términos, quien resuelve bien problemas…', choices: ['reúne información válida y sopesa opciones', 'adivina rápido', 'ignora a otras partes interesadas'], a: 0 },
        { q: 'Una propuesta sólida de expansión se respalda con…', choices: ['una voz fuerte', 'evidencia y concesiones nombradas', 'solo sentimientos'], a: 1 },
        { q: 'Después de elegir una solución, el ÚLTIMO paso es…', choices: ['olvidarla', 'evaluar qué tan bien funcionó', 'ocultar el costo humano'], a: 1 }
      ],
      takeaway: 'Definir → reunir → sopesar → decidir → defender → evaluar. Eso es §113.20(c)(31)(B).'
    },
    vi: {
      title: 'Khởi động: các bước giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Bước ĐẦU TIÊN trong quy trình giải quyết vấn đề là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn các điều khoản, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin xác thực & cân nhắc phương án', 'đoán nhanh', 'bỏ qua các bên liên quan khác'], a: 0 },
        { q: 'Một đề xuất mở rộng vững chắc được củng cố bằng…', choices: ['một giọng nói to', 'bằng chứng & những đánh đổi được nêu rõ', 'chỉ cảm xúc'], a: 1 },
        { q: 'Sau khi chọn một giải pháp, bước CUỐI CÙNG là…', choices: ['quên nó đi', 'đánh giá xem nó hiệu quả ra sao', 'giấu đi cái giá con người'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → quyết định → bảo vệ → đánh giá. Đó là §113.20(c)(31)(B).'
    },
    ar: {
      title: 'تهيئة: خطوات حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'الخطوة الأولى في عملية حل المشكلة هي…', choices: ['اختيار حل', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل اختيار الشروط، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع معلومات صحيحة وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل أصحاب المصلحة الآخرين'], a: 0 },
        { q: 'الاقتراح القوي للتوسّع يُدعم بـ…', choices: ['صوت عالٍ', 'أدلة ومفاضلات مذكورة', 'المشاعر فقط'], a: 1 },
        { q: 'بعد اختيار حل، الخطوة الأخيرة هي…', choices: ['أن تنساه', 'أن تقيّم مدى نجاحه', 'أن تخفي الكلفة البشرية'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن ← قرِّر ← دافِع ← قيِّم. تلك هي §113.20(c)(31)(B).'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान के चरण',
      seconds: 45,
      questions: [
        { q: 'समस्या-समाधान प्रक्रिया का पहला चरण है…', choices: ['एक समाधान चुनना', 'समस्या को परिभाषित करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'शर्तें चुनने से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['वैध जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य हितधारकों को अनदेखा करता है'], a: 0 },
        { q: 'विस्तार का एक मजबूत प्रस्ताव किस पर टिका होता है…', choices: ['एक ऊँची आवाज़', 'साक्ष्य और नामित समझौते', 'केवल भावनाएँ'], a: 1 },
        { q: 'समाधान चुनने के बाद, अंतिम चरण है…', choices: ['उसे भूल जाना', 'यह आँकना कि वह कितना अच्छा रहा', 'मानवीय लागत को छिपाना'], a: 1 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → निर्णय लें → बचाव करें → आँकें। यही §113.20(c)(31)(B) है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کے مراحل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے کے عمل کا پہلا مرحلہ ہے…', choices: ['ایک حل چننا', 'مسئلے کو متعین کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'شرائط چننے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['درست معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دیگر اسٹیک ہولڈرز کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'توسیع کی ایک مضبوط تجویز کی بنیاد ہوتی ہے…', choices: ['ایک بلند آواز', 'ثبوت اور مذکورہ سمجھوتے', 'صرف جذبات'], a: 1 },
        { q: 'حل چننے کے بعد، آخری مرحلہ ہے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ وہ کتنا کارگر رہا', 'انسانی قیمت کو چھپانا'], a: 1 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← فیصلہ کریں ← دفاع کریں ← جانچیں۔ یہی §113.20(c)(31)(B) ہے۔'
    },
    zh: {
      title: '热身：解决问题的步骤',
      seconds: 45,
      questions: [
        { q: '解决问题过程的第一步是…', choices: ['挑选一个方案', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在选定条件之前，优秀的解决问题者会…', choices: ['收集可靠信息并权衡各种方案', '快速猜测', '无视其他利益相关者'], a: 0 },
        { q: '一份有力的扩张方案背后有…', choices: ['大嗓门', '证据与明确指出的取舍', '只有感受'], a: 1 },
        { q: '选定方案之后，最后一步是…', choices: ['把它忘掉', '评估它的效果如何', '隐藏人的代价'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 决定 → 辩护 → 评估。这就是 §113.20(c)(31)(B)。'
    } }
  },
  {
    id: 'g8-westward-1845-transfer-exit', grade: 8, unit: 'westward-1845',
    unitTitle: "Crossing the Continent, 1845 — How Far Should the Nation Go?", phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.20(c)(31)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim, evidence & trade-offs',
      items: [
        { before: 'A proposal for expansion without', after: 'is just an opinion.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: 'A fair judgment names the human cost — to Native nations, Mexican residents, and', after: 'people.', choices: ['enslaved', 'foreign', 'wealthy'], a: 0 },
        { before: 'Naming the', after: 'of your terms shows you weighed them honestly.', choices: ['trade-offs', 'colors', 'vocabulary'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs, told honestly, is thinking like a historian and a citizen.'
    },
    es: {
      title: 'Salida: afirmación, evidencia y concesiones',
      items: [
        { before: 'Una propuesta de expansión sin', after: 'es solo una opinión.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Un juicio justo nombra el costo humano —para las naciones indígenas, los residentes mexicanos y las personas', after: '.', choices: ['esclavizadas', 'extranjeras', 'ricas'], a: 0 },
        { before: 'Nombrar las', after: 'de tus términos muestra que los sopesaste con honestidad.', choices: ['concesiones', 'colores', 'vocabulario'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones, contadas con honestidad, es pensar como historiador y ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm, bằng chứng & đánh đổi',
      items: [
        { before: 'Một đề xuất mở rộng không có', after: 'thì chỉ là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Một phán xét công bằng nêu rõ cái giá con người — với các dân tộc bản địa, cư dân Mexico, và những người', after: '.', choices: ['nô lệ', 'ngoại quốc', 'giàu có'], a: 0 },
        { before: 'Nêu ra những', after: 'trong các điều khoản của bạn cho thấy bạn đã cân nhắc chúng một cách trung thực.', choices: ['đánh đổi', 'màu sắc', 'từ vựng'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi, được kể trung thực, chính là tư duy như một nhà sử học và một công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء ودليل ومفاضلات',
      items: [
        { before: 'اقتراح للتوسّع بلا', after: 'ما هو إلا رأي.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'الحُكم العادل يذكر الكلفة البشرية — على الأمم الأصلية والسكّان المكسيكيين والأشخاص', after: '.', choices: ['المستعبَدين', 'الأجانب', 'الأثرياء'], a: 0 },
        { before: 'إن تسمية', after: 'الخاصة بشروطك تُظهر أنك وازنتها بأمانة.', choices: ['المفاضلات', 'الألوان', 'المفردات'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات، تُروى بأمانة، هي التفكير كمؤرّخ ومواطن.'
    },
    hi: {
      title: 'निकास: दावा, साक्ष्य और समझौते',
      items: [
        { before: 'बिना', after: 'के विस्तार का प्रस्ताव महज़ एक राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: 'एक न्यायसंगत निर्णय मानवीय लागत को नाम देता है — मूल राष्ट्रों, मैक्सिकन निवासियों और', after: 'लोगों के लिए।', choices: ['दास बनाए गए', 'विदेशी', 'धनी'], a: 0 },
        { before: 'अपनी शर्तों की', after: 'का नाम लेना दिखाता है कि आपने उन्हें ईमानदारी से तौला।', choices: ['समझौतों', 'रंगों', 'शब्दावली'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते, ईमानदारी से बताए गए, एक इतिहासकार और एक नागरिक की तरह सोचना है।'
    },
    ur: {
      title: 'اخراج: دعویٰ، ثبوت اور سمجھوتے',
      items: [
        { before: 'بغیر', after: 'کے توسیع کی تجویز محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: 'ایک منصفانہ فیصلہ انسانی قیمت کا نام لیتا ہے — مقامی اقوام، میکسیکن باشندوں، اور', after: 'لوگوں کے لیے۔', choices: ['غلام بنائے گئے', 'غیر ملکی', 'دولت مند'], a: 0 },
        { before: 'اپنی شرائط کے', after: 'کا نام لینا ظاہر کرتا ہے کہ آپ نے انہیں ایمانداری سے تولا۔', choices: ['سمجھوتوں', 'رنگوں', 'الفاظ'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے، ایمانداری سے بیان کیے جائیں، تو یہ ایک مؤرخ اور ایک شہری کی طرح سوچنا ہے۔'
    },
    zh: {
      title: '离场：主张、证据与取舍',
      items: [
        { before: '没有', after: '的扩张方案只是一种意见。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '公正的判断会指出人的代价——对原住民族、墨西哥居民，以及被', after: '的人。', choices: ['奴役', '外国', '富有'], a: 0 },
        { before: '说出你所提条件中的', after: '，表明你诚实地权衡了它们。', choices: ['取舍', '颜色', '词汇'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍，诚实地讲出来，就是像史学家和公民一样思考。'
    } }
  }

]);
