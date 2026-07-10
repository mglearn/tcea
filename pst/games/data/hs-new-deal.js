/* PST Arcade — ticket registry for HS · US History · The New Deal, 1935.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. Same shape as every unit:
   {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}.
   Honest history (TEC §28.0022): Social Security's 1935 exclusion of farm and domestic
   workers — disproportionately Black Americans and women — is kept factual and respectful,
   alongside the New Deal's genuine relief and lasting reform. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── HS · New Deal 1935 · SURFACE ───────── */
  {
    id: 'hs-new-deal-surface-entry', grade: 11, unit: 'new-deal',
    unitTitle: "The New Deal, 1935 — a Question of Government's Reach", phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.41(c)(16), (c)(28)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: Depression & New Deal words',
      seconds: 45,
      questions: [
        { q: 'The severe worldwide economic collapse of the 1930s, the worst in U.S. history, is the…', choices: ['Great Depression', 'New Deal', 'Dust Bowl'], a: 0 },
        { q: "Franklin Roosevelt's set of programs and agencies to fight the Depression is the…", choices: ['welfare state', 'New Deal', 'Hundred Days'], a: 1 },
        { q: 'The belief that government should leave the economy largely alone is…', choices: ['deficit spending', 'laissez-faire', 'Social Security'], a: 1 },
        { q: 'The three goals of the New Deal — the "3 Rs" — were relief, recovery, and…', choices: ['reform', 'retreat', 'revenue'], a: 0 }
      ],
      takeaway: 'Know these four words and the rest of the unit reads clearly.'
    },
    es: {
      title: 'Calentamiento: palabras de la Depresión y el New Deal',
      seconds: 45,
      questions: [
        { q: 'El grave colapso económico mundial de la década de 1930, el peor en la historia de EE. UU., es la…', choices: ['Gran Depresión', 'New Deal', 'Dust Bowl'], a: 0 },
        { q: 'El conjunto de programas y agencias de Franklin Roosevelt para combatir la Depresión es el…', choices: ['estado de bienestar', 'New Deal', 'los Cien Días'], a: 1 },
        { q: 'La creencia de que el gobierno debe dejar la economía prácticamente en paz es el…', choices: ['gasto deficitario', 'laissez-faire', 'Seguro Social'], a: 1 },
        { q: 'Las tres metas del New Deal — las "3 R" — fueron ayuda (relief), recuperación (recovery) y…', choices: ['reforma', 'retirada', 'ingresos'], a: 0 }
      ],
      takeaway: 'Domina estas cuatro palabras y el resto de la unidad se lee con claridad.'
    },
    vi: {
      title: 'Khởi động: từ vựng về Đại Khủng hoảng & New Deal',
      seconds: 45,
      questions: [
        { q: 'Cuộc sụp đổ kinh tế toàn cầu nghiêm trọng của thập niên 1930, tồi tệ nhất trong lịch sử Hoa Kỳ, là…', choices: ['Đại Khủng hoảng', 'New Deal', 'Dust Bowl (Vành đai Bụi)'], a: 0 },
        { q: 'Tập hợp các chương trình và cơ quan của Franklin Roosevelt nhằm chống Đại Khủng hoảng là…', choices: ['nhà nước phúc lợi', 'New Deal', 'Trăm Ngày'], a: 1 },
        { q: 'Niềm tin rằng chính phủ nên để nền kinh tế phần lớn tự vận hành là…', choices: ['chi tiêu thâm hụt', 'laissez-faire (tự do kinh doanh)', 'An sinh Xã hội'], a: 1 },
        { q: 'Ba mục tiêu của New Deal — "3 chữ R" — là cứu trợ (relief), phục hồi (recovery) và…', choices: ['cải cách (reform)', 'rút lui', 'nguồn thu'], a: 0 }
      ],
      takeaway: 'Nắm bốn từ này thì phần còn lại của bài học đọc rõ ràng.'
    },
    ar: {
      title: 'تهيئة: كلمات الكساد والصفقة الجديدة',
      seconds: 45,
      questions: [
        { q: 'الانهيار الاقتصادي العالمي الحاد في ثلاثينيات القرن العشرين، الأسوأ في تاريخ الولايات المتحدة، هو…', choices: ['الكساد الكبير', 'الصفقة الجديدة', 'وعاء الغبار'], a: 0 },
        { q: 'مجموعة برامج فرانكلين روزفلت ووكالاته لمكافحة الكساد هي…', choices: ['دولة الرفاه', 'الصفقة الجديدة', 'المئة يوم'], a: 1 },
        { q: 'الاعتقاد بأن على الحكومة أن تترك الاقتصاد لحاله إلى حدٍّ كبير هو…', choices: ['الإنفاق بالعجز', 'دعه يعمل (laissez-faire)', 'الضمان الاجتماعي'], a: 1 },
        { q: 'أهداف الصفقة الجديدة الثلاثة — "الراءات الثلاث" — كانت الإغاثة والتعافي و…', choices: ['الإصلاح', 'الانسحاب', 'الإيرادات'], a: 0 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع فيُقرأ باقي الوحدة بوضوح.'
    },
    hi: {
      title: 'वार्म-अप: महामंदी और न्यू डील के शब्द',
      seconds: 45,
      questions: [
        { q: '1930 के दशक का गंभीर विश्वव्यापी आर्थिक पतन, अमेरिकी इतिहास का सबसे बुरा, कहलाता है…', choices: ['महामंदी (ग्रेट डिप्रेशन)', 'न्यू डील', 'डस्ट बाउल'], a: 0 },
        { q: 'महामंदी से लड़ने के लिए फ्रैंकलिन रूज़वेल्ट के कार्यक्रमों और एजेंसियों का समूह है…', choices: ['कल्याणकारी राज्य', 'न्यू डील', 'सौ दिन'], a: 1 },
        { q: 'यह विश्वास कि सरकार को अर्थव्यवस्था को अधिकांशतः अकेला छोड़ देना चाहिए, कहलाता है…', choices: ['घाटे का व्यय', 'लेसे-फेयर', 'सामाजिक सुरक्षा'], a: 1 },
        { q: 'न्यू डील के तीन लक्ष्य — "3 R" — थे राहत (relief), पुनर्प्राप्ति (recovery) और…', choices: ['सुधार (reform)', 'पीछे हटना', 'राजस्व'], a: 0 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और शेष इकाई स्पष्ट रूप से पढ़ी जाएगी।'
    },
    ur: {
      title: 'وارم اپ: کساد اور نیو ڈیل کے الفاظ',
      seconds: 45,
      questions: [
        { q: '1930 کی دہائی کا شدید عالمی معاشی زوال، امریکی تاریخ کا بدترین، کہلاتا ہے…', choices: ['عظیم کساد (گریٹ ڈپریشن)', 'نیو ڈیل', 'ڈسٹ باؤل'], a: 0 },
        { q: 'کساد سے لڑنے کے لیے فرینکلن روزویلٹ کے پروگراموں اور اداروں کا مجموعہ ہے…', choices: ['فلاحی ریاست', 'نیو ڈیل', 'سو دن'], a: 1 },
        { q: 'یہ عقیدہ کہ حکومت کو معیشت کو زیادہ تر خود پر چھوڑ دینا چاہیے، کہلاتا ہے…', choices: ['خسارے کا خرچ', 'لیسے فیئر', 'سماجی تحفظ'], a: 1 },
        { q: 'نیو ڈیل کے تین مقاصد — "3 R" — تھے امداد (relief)، بحالی (recovery) اور…', choices: ['اصلاح (reform)', 'پسپائی', 'محصول'], a: 0 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو باقی اکائی واضح طور پر پڑھی جائے گی۔'
    },
    zh: {
      title: '热身：大萧条与新政词汇',
      seconds: 45,
      questions: [
        { q: '20世纪30年代严重的全球经济崩溃，美国史上最严重的一次，称为…', choices: ['大萧条', '新政', '尘暴区'], a: 0 },
        { q: '富兰克林·罗斯福为对抗大萧条而推出的一整套计划与机构称为…', choices: ['福利国家', '新政', '百日新政'], a: 1 },
        { q: '认为政府应基本上放手让经济自行运作的信念是…', choices: ['赤字开支', '自由放任（laissez-faire）', '社会保障'], a: 1 },
        { q: '新政的三大目标——"3R"——是救济（relief）、复兴（recovery）与…', choices: ['改革（reform）', '撤退', '税收'], a: 0 }
      ],
      takeaway: '掌握这四个词，本单元其余部分便读来清晰。'
    } }
  },
  {
    id: 'hs-new-deal-surface-exit', grade: 11, unit: 'new-deal',
    unitTitle: "The New Deal, 1935 — a Question of Government's Reach", phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.41(c)(16), (c)(18)(A)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['Great Depression', 'the severe worldwide economic collapse of the 1930s'],
        ['New Deal', "FDR's set of programs and agencies to fight the Depression"],
        ['deficit spending', 'a government spending more than it collects, by borrowing'],
        ['Social Security', 'the 1935 old-age and unemployment insurance funded by payroll taxes'],
        ['welfare state', "a system in which government answers for citizens' basic economic security"]
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['Gran Depresión', 'el grave colapso económico mundial de la década de 1930'],
        ['New Deal', 'el conjunto de programas y agencias de FDR para combatir la Depresión'],
        ['gasto deficitario', 'un gobierno que gasta más de lo que recauda, endeudándose'],
        ['Seguro Social', 'el seguro de vejez y desempleo de 1935 financiado con impuestos sobre la nómina'],
        ['estado de bienestar', 'un sistema en que el gobierno responde por la seguridad económica básica de los ciudadanos']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['Đại Khủng hoảng', 'cuộc sụp đổ kinh tế toàn cầu nghiêm trọng của thập niên 1930'],
        ['New Deal', 'tập hợp các chương trình và cơ quan của FDR nhằm chống Đại Khủng hoảng'],
        ['chi tiêu thâm hụt', 'chính phủ chi nhiều hơn thu, bằng cách vay mượn'],
        ['An sinh Xã hội', 'bảo hiểm tuổi già và thất nghiệp năm 1935 tài trợ bằng thuế lương'],
        ['nhà nước phúc lợi', 'một hệ thống trong đó chính phủ chịu trách nhiệm về an ninh kinh tế cơ bản của công dân']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['الكساد الكبير', 'الانهيار الاقتصادي العالمي الحاد في ثلاثينيات القرن العشرين'],
        ['الصفقة الجديدة', 'مجموعة برامج روزفلت ووكالاته لمكافحة الكساد'],
        ['الإنفاق بالعجز', 'حكومة تنفق أكثر مما تجبي، عن طريق الاقتراض'],
        ['الضمان الاجتماعي', 'تأمين الشيخوخة والبطالة لعام 1935 المموَّل من ضرائب الرواتب'],
        ['دولة الرفاه', 'نظام تتحمّل فيه الحكومة مسؤولية الأمن الاقتصادي الأساسي للمواطنين']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['महामंदी', '1930 के दशक का गंभीर विश्वव्यापी आर्थिक पतन'],
        ['न्यू डील', 'महामंदी से लड़ने के लिए एफडीआर के कार्यक्रमों और एजेंसियों का समूह'],
        ['घाटे का व्यय', 'एक सरकार जो अपनी आय से अधिक खर्च करती है, उधार लेकर'],
        ['सामाजिक सुरक्षा', '1935 का वृद्धावस्था और बेरोज़गारी बीमा, वेतन-कर से वित्तपोषित'],
        ['कल्याणकारी राज्य', 'एक व्यवस्था जिसमें सरकार नागरिकों की बुनियादी आर्थिक सुरक्षा के लिए जिम्मेदार होती है']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['عظیم کساد', '1930 کی دہائی کا شدید عالمی معاشی زوال'],
        ['نیو ڈیل', 'کساد سے لڑنے کے لیے ایف ڈی آر کے پروگراموں اور اداروں کا مجموعہ'],
        ['خسارے کا خرچ', 'ایک حکومت جو اپنی آمدنی سے زیادہ خرچ کرتی ہے، قرض لے کر'],
        ['سماجی تحفظ', '1935 کا بڑھاپے اور بے روزگاری کا بیمہ، تنخواہ ٹیکس سے مالی معاونت'],
        ['فلاحی ریاست', 'ایک نظام جس میں حکومت شہریوں کے بنیادی معاشی تحفظ کی ذمہ دار ہوتی ہے']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['大萧条', '20世纪30年代严重的全球经济崩溃'],
        ['新政', '罗斯福为对抗大萧条推出的一整套计划与机构'],
        ['赤字开支', '政府靠借债而支出多于收入'],
        ['社会保障', '1935年由工资税资助的养老与失业保险'],
        ['福利国家', '政府对公民基本经济保障负责的一种体制']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── HS · New Deal 1935 · DEEP ───────── */
  {
    id: 'hs-new-deal-deep-entry', grade: 11, unit: 'new-deal',
    unitTitle: "The New Deal, 1935 — a Question of Government's Reach", phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.41(c)(16), (c)(18)(A), (c)(28)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the New Deal at work',
      items: [
        { before: 'In FDR’s first', after: ', emergency laws poured through Congress and he calmed the nation in radio "fireside chats."', choices: ['Hundred Days', 'court-packing', 'Dust Bowl'], a: 0 },
        { before: 'The New Deal expanded federal power to take responsibility for the economy, shifting the balance between', after: 'governments.', choices: ['state and federal', 'city and county', 'foreign and domestic'], a: 0 },
        { before: 'In Schechter v. United States the Supreme Court', after: 'a centerpiece New Deal law, ruling Washington had reached too far.', choices: ['upheld', 'struck down', 'ignored'], a: 1 }
      ],
      takeaway: 'The Hundred Days, the state-vs-federal balance, and Schechter are the spine of the New Deal fight.'
    },
    es: {
      title: 'Calentamiento: el New Deal en acción',
      items: [
        { before: 'En los primeros', after: ' de FDR, leyes de emergencia inundaron el Congreso y él calmó a la nación en "charlas junto al fuego" por radio.', choices: ['Cien Días', 'plan de ampliar la Corte', 'Dust Bowl'], a: 0 },
        { before: 'El New Deal amplió el poder federal para responsabilizarse de la economía, cambiando el equilibrio entre los gobiernos', after: '.', choices: ['estatal y federal', 'municipal y del condado', 'extranjero y nacional'], a: 0 },
        { before: 'En Schechter v. Estados Unidos, la Corte Suprema', after: ' una ley central del New Deal, dictaminando que Washington se había extralimitado.', choices: ['confirmó', 'anuló', 'ignoró'], a: 1 }
      ],
      takeaway: 'Los Cien Días, el equilibrio estatal-federal y Schechter son la columna de la lucha del New Deal.'
    },
    vi: {
      title: 'Khởi động: New Deal vận hành',
      items: [
        { before: 'Trong', after: ' đầu tiên của FDR, các đạo luật khẩn cấp tuôn qua Quốc hội và ông trấn an dân tộc qua "trò chuyện bên lò sưởi" trên đài.', choices: ['Trăm Ngày', 'kế hoạch mở rộng Tòa án', 'Dust Bowl'], a: 0 },
        { before: 'New Deal mở rộng quyền lực liên bang để gánh trách nhiệm về nền kinh tế, dịch chuyển cán cân giữa chính quyền', after: '.', choices: ['bang và liên bang', 'thành phố và quận', 'nước ngoài và trong nước'], a: 0 },
        { before: 'Trong vụ Schechter kiện Hoa Kỳ, Tối cao Pháp viện đã', after: ' một đạo luật trọng tâm của New Deal, phán rằng Washington đã đi quá xa.', choices: ['giữ nguyên', 'bác bỏ', 'phớt lờ'], a: 1 }
      ],
      takeaway: 'Trăm Ngày, cán cân bang–liên bang, và vụ Schechter là xương sống của cuộc tranh đấu New Deal.'
    },
    ar: {
      title: 'تهيئة: الصفقة الجديدة في العمل',
      items: [
        { before: 'في', after: ' الأولى لروزفلت، تدفّقت قوانين الطوارئ عبر الكونغرس وطمأن الأمة في "أحاديث المدفأة" الإذاعية.', choices: ['المئة يوم', 'خطة توسيع المحكمة', 'وعاء الغبار'], a: 0 },
        { before: 'وسّعت الصفقة الجديدة السلطة الفيدرالية لتتحمّل مسؤولية الاقتصاد، مغيِّرةً التوازن بين حكومات', after: '.', choices: ['الولايات والاتحاد', 'المدينة والمقاطعة', 'الخارج والداخل'], a: 0 },
        { before: 'في قضية شيختر ضد الولايات المتحدة،', after: ' المحكمة العليا قانونًا محوريًا من الصفقة الجديدة، حاكمةً بأن واشنطن تجاوزت حدّها.', choices: ['أيّدت', 'أبطلت', 'تجاهلت'], a: 1 }
      ],
      takeaway: 'المئة يوم، وتوازن الولايات مقابل الاتحاد، وقضية شيختر هي العمود الفقري لمعركة الصفقة الجديدة.'
    },
    hi: {
      title: 'वार्म-अप: न्यू डील काम पर',
      items: [
        { before: 'एफडीआर के पहले', after: ' में, आपातकालीन कानून कांग्रेस से बहते चले गए और उन्होंने रेडियो पर "फायरसाइड चैट" से राष्ट्र को शांत किया।', choices: ['सौ दिन', 'न्यायालय-भराई योजना', 'डस्ट बाउल'], a: 0 },
        { before: 'न्यू डील ने अर्थव्यवस्था की जिम्मेदारी लेने के लिए संघीय शक्ति का विस्तार किया, जिससे इन सरकारों के बीच संतुलन बदला —', after: '।', choices: ['राज्य और संघीय', 'शहर और काउंटी', 'विदेशी और घरेलू'], a: 0 },
        { before: 'शेक्टर बनाम संयुक्त राज्य में सर्वोच्च न्यायालय ने न्यू डील के एक केंद्रीय कानून को', after: ', यह निर्णय देते हुए कि वॉशिंगटन बहुत आगे बढ़ गया।', choices: ['बरकरार रखा', 'रद्द कर दिया', 'अनदेखा किया'], a: 1 }
      ],
      takeaway: 'सौ दिन, राज्य-बनाम-संघीय संतुलन, और शेक्टर न्यू डील की लड़ाई की रीढ़ हैं।'
    },
    ur: {
      title: 'وارم اپ: نیو ڈیل عمل میں',
      items: [
        { before: 'ایف ڈی آر کے پہلے', after: ' میں، ہنگامی قوانین کانگریس سے بہتے چلے گئے اور انہوں نے ریڈیو پر "فائر سائیڈ چیٹ" سے قوم کو تسلی دی۔', choices: ['سو دن', 'عدالت بھرنے کا منصوبہ', 'ڈسٹ باؤل'], a: 0 },
        { before: 'نیو ڈیل نے معیشت کی ذمہ داری اٹھانے کے لیے وفاقی طاقت کو وسیع کیا، جس سے ان حکومتوں کے درمیان توازن بدلا —', after: '۔', choices: ['ریاستی اور وفاقی', 'شہر اور کاؤنٹی', 'غیر ملکی اور ملکی'], a: 0 },
        { before: 'شیختر بمقابلہ ریاستہائے متحدہ میں سپریم کورٹ نے نیو ڈیل کے ایک مرکزی قانون کو', after: '، یہ فیصلہ دیتے ہوئے کہ واشنگٹن بہت آگے بڑھ گیا۔', choices: ['برقرار رکھا', 'کالعدم کر دیا', 'نظرانداز کیا'], a: 1 }
      ],
      takeaway: 'سو دن، ریاستی بمقابلہ وفاقی توازن، اور شیختر نیو ڈیل کی جنگ کی ریڑھ ہیں۔'
    },
    zh: {
      title: '热身：运作中的新政',
      items: [
        { before: '在罗斯福最初的', after: '里，紧急立法涌过国会，他还通过电台"炉边谈话"安抚全国。', choices: ['百日新政', '扩充法院计划', '尘暴区'], a: 0 },
        { before: '新政扩大了联邦权力以承担经济责任，改变了以下两级政府之间的平衡：', after: '。', choices: ['州与联邦', '市与县', '对外与对内'], a: 0 },
        { before: '在谢克特诉合众国案中，最高法院', after: '了一项新政的核心法律，裁定华盛顿伸得太远。', choices: ['维持', '推翻', '无视'], a: 1 }
      ],
      takeaway: '百日新政、州与联邦的平衡，以及谢克特案，是新政之争的主干。'
    } }
  },
  {
    id: 'hs-new-deal-deep-exit', grade: 11, unit: 'new-deal',
    unitTitle: "The New Deal, 1935 — a Question of Government's Reach", phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.41(c)(16), (c)(18)(A)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort each action as Relief or Reform',
      cats: ['Helped people now (Relief)', 'Fixed the system (Reform)'],
      items: [
        { t: 'CCC put young men to work in nature for wages sent home', c: 0 },
        { t: 'WPA paid the jobless to build roads, schools, and art', c: 0 },
        { t: 'Direct relief checks to families with no income', c: 0 },
        { t: 'FDIC insured bank deposits so savings could not vanish', c: 1 },
        { t: 'Social Security created lasting old-age and unemployment insurance', c: 1 },
        { t: 'New rules regulating banks and the stock market', c: 1 }
      ],
      takeaway: 'Relief eases suffering now; reform changes the system so the crash cannot repeat. Recovery sits between them.'
    },
    es: {
      title: 'Salida: clasifica cada acción como Ayuda o Reforma',
      cats: ['Ayudó a la gente ahora (Ayuda)', 'Arregló el sistema (Reforma)'],
      items: [
        { t: 'El CCC dio trabajo a jóvenes en la naturaleza con salarios enviados a casa', c: 0 },
        { t: 'La WPA pagó a los desempleados para construir caminos, escuelas y arte', c: 0 },
        { t: 'Cheques de ayuda directa a familias sin ingresos', c: 0 },
        { t: 'La FDIC aseguró los depósitos bancarios para que los ahorros no desaparecieran', c: 1 },
        { t: 'El Seguro Social creó un seguro duradero de vejez y desempleo', c: 1 },
        { t: 'Nuevas reglas que regulan los bancos y la bolsa de valores', c: 1 }
      ],
      takeaway: 'La ayuda alivia el sufrimiento ahora; la reforma cambia el sistema para que el colapso no se repita. La recuperación está entre ambas.'
    },
    vi: {
      title: 'Phiếu ra: phân loại mỗi hành động là Cứu trợ hay Cải cách',
      cats: ['Giúp người dân ngay (Cứu trợ)', 'Sửa hệ thống (Cải cách)'],
      items: [
        { t: 'CCC cho thanh niên làm việc trong thiên nhiên, lương gửi về nhà', c: 0 },
        { t: 'WPA trả công cho người thất nghiệp để xây đường, trường học và nghệ thuật', c: 0 },
        { t: 'Ngân phiếu cứu trợ trực tiếp cho gia đình không có thu nhập', c: 0 },
        { t: 'FDIC bảo hiểm tiền gửi ngân hàng để tiết kiệm không tan biến', c: 1 },
        { t: 'An sinh Xã hội tạo ra bảo hiểm tuổi già và thất nghiệp lâu dài', c: 1 },
        { t: 'Quy định mới điều tiết ngân hàng và thị trường chứng khoán', c: 1 }
      ],
      takeaway: 'Cứu trợ làm dịu khổ đau ngay; cải cách thay đổi hệ thống để cuộc sụp đổ không tái diễn. Phục hồi nằm giữa hai điều đó.'
    },
    ar: {
      title: 'الخروج: صنِّف كل إجراء كإغاثة أم إصلاح',
      cats: ['ساعد الناس الآن (إغاثة)', 'أصلح النظام (إصلاح)'],
      items: [
        { t: 'وفّر الـ CCC عملًا للشباب في الطبيعة بأجور تُرسَل إلى ذويهم', c: 0 },
        { t: 'دفعت الـ WPA للعاطلين لبناء الطرق والمدارس والفن', c: 0 },
        { t: 'شيكات إغاثة مباشرة للأسر بلا دخل', c: 0 },
        { t: 'أمّن الـ FDIC ودائع البنوك حتى لا تتبخّر المدخرات', c: 1 },
        { t: 'أنشأ الضمان الاجتماعي تأمينًا دائمًا للشيخوخة والبطالة', c: 1 },
        { t: 'قواعد جديدة لتنظيم البنوك وسوق الأسهم', c: 1 }
      ],
      takeaway: 'الإغاثة تخفّف المعاناة الآن؛ والإصلاح يغيّر النظام كي لا يتكرر الانهيار. أما التعافي فيقع بينهما.'
    },
    hi: {
      title: 'निकास: प्रत्येक कार्रवाई को राहत या सुधार के रूप में छाँटें',
      cats: ['अभी लोगों की मदद की (राहत)', 'व्यवस्था को ठीक किया (सुधार)'],
      items: [
        { t: 'CCC ने युवकों को प्रकृति में काम दिया, वेतन घर भेजा गया', c: 0 },
        { t: 'WPA ने बेरोज़गारों को सड़कें, स्कूल और कला बनाने के लिए भुगतान किया', c: 0 },
        { t: 'बिना आय वाले परिवारों को सीधे राहत चेक', c: 0 },
        { t: 'FDIC ने बैंक जमाओं का बीमा किया ताकि बचत गायब न हो', c: 1 },
        { t: 'सामाजिक सुरक्षा ने स्थायी वृद्धावस्था और बेरोज़गारी बीमा बनाया', c: 1 },
        { t: 'बैंकों और शेयर बाज़ार को विनियमित करने वाले नए नियम', c: 1 }
      ],
      takeaway: 'राहत अभी पीड़ा कम करती है; सुधार व्यवस्था को बदलता है ताकि पतन दोबारा न हो। पुनर्प्राप्ति इन दोनों के बीच है।'
    },
    ur: {
      title: 'اخراج: ہر اقدام کو امداد یا اصلاح کے طور پر چھانٹیں',
      cats: ['ابھی لوگوں کی مدد کی (امداد)', 'نظام کو درست کیا (اصلاح)'],
      items: [
        { t: 'CCC نے نوجوانوں کو فطرت میں کام دیا، تنخواہ گھر بھیجی گئی', c: 0 },
        { t: 'WPA نے بے روزگاروں کو سڑکیں، اسکول اور فن بنانے کے لیے ادائیگی کی', c: 0 },
        { t: 'بغیر آمدنی والے خاندانوں کو براہِ راست امدادی چیک', c: 0 },
        { t: 'FDIC نے بینک جمع رقوم کا بیمہ کیا تاکہ بچت غائب نہ ہو', c: 1 },
        { t: 'سماجی تحفظ نے دیرپا بڑھاپے اور بے روزگاری کا بیمہ بنایا', c: 1 },
        { t: 'بینکوں اور اسٹاک مارکیٹ کو ضابطے میں لانے والے نئے قواعد', c: 1 }
      ],
      takeaway: 'امداد ابھی تکلیف کم کرتی ہے؛ اصلاح نظام کو بدلتی ہے تاکہ زوال دوبارہ نہ ہو۔ بحالی ان دونوں کے درمیان ہے۔'
    },
    zh: {
      title: '离场：把每项举措分类为救济或改革',
      cats: ['当下帮助民众（救济）', '修补制度（改革）'],
      items: [
        { t: 'CCC让青年在自然中工作，工资寄回家中', c: 0 },
        { t: 'WPA付钱给失业者去修路、建校、创作艺术', c: 0 },
        { t: '向无收入家庭直接发放救济支票', c: 0 },
        { t: 'FDIC为银行存款投保，使储蓄不致化为乌有', c: 1 },
        { t: '社会保障建立了持久的养老与失业保险', c: 1 },
        { t: '监管银行与股票市场的新规则', c: 1 }
      ],
      takeaway: '救济当下缓解苦难；改革则改变制度，使崩溃不再重演。复兴介于两者之间。'
    } }
  },

  /* ───────── HS · New Deal 1935 · TRANSFER ───────── */
  {
    id: 'hs-new-deal-transfer-entry', grade: 11, unit: 'new-deal',
    unitTitle: "The New Deal, 1935 — a Question of Government's Reach", phase: 'transfer', type: 'entry',
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
    id: 'hs-new-deal-transfer-exit', grade: 11, unit: 'new-deal',
    unitTitle: "The New Deal, 1935 — a Question of Government's Reach", phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.41(c)(31)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim, evidence & trade-offs',
      items: [
        { before: 'A recommendation without', after: 'from the sources is just an opinion.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: "Reasoning from a stakeholder's", after: 'is how you see the crisis as they did — the New Dealer, the critic, the excluded sharecropper.', choices: ['point of view', 'budget', 'signature'], a: 0 },
        { before: 'Naming the', after: 'of your solution — cost, liberty, constitutional limits — shows you weighed the options.', choices: ['trade-offs', 'colors', 'vocabulary'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs = running the full problem-solving process like a historian and citizen.'
    },
    es: {
      title: 'Salida: afirmación, evidencia y concesiones',
      items: [
        { before: 'Una recomendación sin', after: 'de las fuentes es solo una opinión.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Razonar desde el', after: 'de una parte interesada es cómo ves la crisis como ella la vio: el partidario del New Deal, el crítico, el aparcero excluido.', choices: ['punto de vista', 'presupuesto', 'firma'], a: 0 },
        { before: 'Nombrar las', after: 'de tu solución — costo, libertad, límites constitucionales — muestra que sopesaste las opciones.', choices: ['concesiones', 'colores', 'vocabulario'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones = recorrer todo el proceso de resolución como historiador y ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm, bằng chứng & đánh đổi',
      items: [
        { before: 'Một khuyến nghị không có', after: 'từ các nguồn thì chỉ là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Suy luận từ', after: 'của một bên liên quan là cách bạn nhìn cuộc khủng hoảng như họ: người ủng hộ New Deal, người phê phán, người tá điền bị loại trừ.', choices: ['góc nhìn', 'ngân sách', 'chữ ký'], a: 0 },
        { before: 'Nêu ra những', after: 'của giải pháp — chi phí, tự do, giới hạn hiến pháp — cho thấy bạn đã cân nhắc các phương án.', choices: ['đánh đổi', 'màu sắc', 'từ vựng'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi = thực hiện trọn quy trình giải quyết vấn đề như một nhà sử học và công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء ودليل ومفاضلات',
      items: [
        { before: 'التوصية بلا', after: 'من المصادر ما هي إلا رأي.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'الاستدلال من', after: 'صاحب المصلحة هو كيف ترى الأزمة كما رآها: مؤيّد الصفقة الجديدة، والناقد، والمزارع المستأجر المُستبعَد.', choices: ['وجهة نظر', 'ميزانية', 'توقيع'], a: 0 },
        { before: 'إن تسمية', after: 'الخاصة بحلّك — التكلفة والحرية والحدود الدستورية — تُظهر أنك وازنت الخيارات.', choices: ['المفاضلات', 'الألوان', 'المفردات'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات = تنفيذ عملية حل المشكلات كاملةً كمؤرّخ ومواطن.'
    },
    hi: {
      title: 'निकास: दावा, साक्ष्य और समझौते',
      items: [
        { before: 'स्रोतों से', after: 'के बिना सिफारिश महज़ एक राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: 'किसी हितधारक के', after: 'से तर्क करना ही वह तरीका है जिससे आप संकट को उनकी तरह देखते हैं — न्यू डील समर्थक, आलोचक, बहिष्कृत बटाईदार।', choices: ['दृष्टिकोण', 'बजट', 'हस्ताक्षर'], a: 0 },
        { before: 'अपने समाधान की', after: 'का नाम लेना — लागत, स्वतंत्रता, संवैधानिक सीमाएँ — दिखाता है कि आपने विकल्प तौले।', choices: ['समझौतों', 'रंगों', 'शब्दावली'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते = एक इतिहासकार और नागरिक की तरह पूरी समस्या-समाधान प्रक्रिया चलाना।'
    },
    ur: {
      title: 'اخراج: دعویٰ، ثبوت اور سمجھوتے',
      items: [
        { before: 'مآخذ سے', after: 'کے بغیر سفارش محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: 'کسی اسٹیک ہولڈر کے', after: 'سے استدلال کرنا ہی وہ طریقہ ہے جس سے آپ بحران کو اُن کی طرح دیکھتے ہیں — نیو ڈیل کا حامی، ناقد، محروم بٹائی دار۔', choices: ['نقطہ نظر', 'بجٹ', 'دستخط'], a: 0 },
        { before: 'اپنے حل کے', after: 'کا نام لینا — لاگت، آزادی، آئینی حدود — ظاہر کرتا ہے کہ آپ نے اختیارات تولے۔', choices: ['سمجھوتوں', 'رنگوں', 'الفاظ'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے = ایک مؤرخ اور شہری کی طرح پورا مسئلہ حل کرنے کا عمل چلانا۔'
    },
    zh: {
      title: '离场：主张、证据与取舍',
      items: [
        { before: '一份建议若没有来自资料的', after: '，就只是一种意见。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '从某位利益相关者的', after: '进行推理，就是像他们那样看待这场危机——新政支持者、批评者、被排除的佃农。', choices: ['视角', '预算', '签名'], a: 0 },
        { before: '说出你方案中的', after: '——代价、自由、宪法界限——表明你权衡过各种方案。', choices: ['取舍', '颜色', '词汇'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍 = 像史学家和公民那样走完整个解决问题的流程。'
    } }
  }

]);
