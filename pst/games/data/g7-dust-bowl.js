/* PST Arcade — ticket registry. Each ticket is retrieval practice for one unit + phase.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. To add tickets, append objects
   with the same shape: {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 7 · Dust Bowl 1935 · SURFACE ───────── */
  {
    id: 'g7-dust-bowl-surface-entry', grade: 7, unit: 'dust-bowl',
    unitTitle: "Dust and Drought, 1935 — Stay or Go?", phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.19(c)(11)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: Dust Bowl words',
      seconds: 45,
      questions: [
        { q: 'A long stretch with little or no rain, so crops and grass dry up, is a…', choices: ['drought', 'mortgage', 'migration'], a: 0 },
        { q: 'A giant dust storm so thick it turned day to darkness was called a…', choices: ['contour plowing', 'black blizzard', 'conservation'], a: 1 },
        { q: 'When wind or water wears away and carries off the soil, that is…', choices: ['erosion', 'foreclosure', 'drought'], a: 0 },
        { q: 'When the bank takes the farm because the loan can’t be paid, that is…', choices: ['migration', 'conservation', 'foreclosure'], a: 2 }
      ],
      takeaway: 'Know these four words and you can read the rest of the unit with confidence.'
    },
    es: {
      title: 'Calentamiento: palabras del Dust Bowl',
      seconds: 45,
      questions: [
        { q: 'Un período largo con poca o ninguna lluvia, en el que los cultivos y el pasto se secan, es una…', choices: ['sequía', 'hipoteca', 'migración'], a: 0 },
        { q: 'Una tormenta de polvo gigante tan densa que convertía el día en oscuridad se llamaba…', choices: ['arado en contorno', 'ventisca negra', 'conservación'], a: 1 },
        { q: 'Cuando el viento o el agua desgasta y arrastra el suelo, eso es…', choices: ['erosión', 'ejecución hipotecaria', 'sequía'], a: 0 },
        { q: 'Cuando el banco se queda con la granja porque no se puede pagar el préstamo, eso es…', choices: ['migración', 'conservación', 'ejecución hipotecaria'], a: 2 }
      ],
      takeaway: 'Domina estas cuatro palabras y podrás leer el resto de la unidad con confianza.'
    },
    vi: {
      title: 'Khởi động: từ vựng về Dust Bowl',
      seconds: 45,
      questions: [
        { q: 'Một giai đoạn dài có ít hoặc không có mưa, khiến mùa màng và cỏ khô héo, được gọi là…', choices: ['hạn hán', 'khoản thế chấp', 'sự di cư'], a: 0 },
        { q: 'Một trận bão bụi khổng lồ dày đặc đến mức biến ngày thành đêm được gọi là…', choices: ['cày theo đường đồng mức', 'bão đen', 'sự bảo tồn'], a: 1 },
        { q: 'Khi gió hoặc nước bào mòn và cuốn đi lớp đất, đó là…', choices: ['xói mòn', 'tịch biên', 'hạn hán'], a: 0 },
        { q: 'Khi ngân hàng lấy nông trại vì khoản vay không thể trả, đó là…', choices: ['sự di cư', 'sự bảo tồn', 'tịch biên'], a: 2 }
      ],
      takeaway: 'Nắm được bốn từ này là bạn có thể đọc phần còn lại của đơn vị bài học một cách tự tin.'
    },
    ar: {
      title: 'تهيئة: كلمات كارثة الغبار',
      seconds: 45,
      questions: [
        { q: 'الفترة الطويلة التي يقلّ فيها المطر أو ينعدم، فتجفّ المحاصيل والعشب، تُسمّى…', choices: ['جفاف', 'رهن عقاري', 'هجرة'], a: 0 },
        { q: 'العاصفة الغبارية الضخمة الكثيفة لدرجة أنها حوّلت النهار إلى ظلام كانت تُسمّى…', choices: ['حراثة كنتورية', 'عاصفة سوداء', 'حفاظ'], a: 1 },
        { q: 'عندما تجرف الرياح أو المياه التربة وتحملها بعيدًا، فهذا…', choices: ['تعرية', 'حجز عقاري', 'جفاف'], a: 0 },
        { q: 'عندما يأخذ البنك المزرعة لأن القرض لا يمكن سداده، فهذا…', choices: ['هجرة', 'حفاظ', 'حجز عقاري'], a: 2 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وستقرأ بقية الوحدة بثقة.'
    },
    hi: {
      title: 'वार्म-अप: डस्ट बाउल के शब्द',
      seconds: 45,
      questions: [
        { q: 'लंबा समय जिसमें बहुत कम या बिल्कुल बारिश न हो, जिससे फसलें और घास सूख जाएँ, वह है…', choices: ['सूखा', 'बंधक', 'प्रवास'], a: 0 },
        { q: 'इतना घना विशाल धूल भरा तूफ़ान जो दिन को अंधकार में बदल दे, उसे कहा जाता था…', choices: ['समोच्च जुताई', 'काला बवंडर', 'संरक्षण'], a: 1 },
        { q: 'जब हवा या पानी मिट्टी को घिसकर बहा ले जाए, वह है…', choices: ['कटाव', 'ज़ब्ती', 'सूखा'], a: 0 },
        { q: 'जब बैंक खेत ले लेता है क्योंकि क़र्ज़ नहीं चुकाया जा सका, वह है…', choices: ['प्रवास', 'संरक्षण', 'ज़ब्ती'], a: 2 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और आप शेष इकाई आत्मविश्वास से पढ़ सकेंगे।'
    },
    ur: {
      title: 'وارم اپ: ڈسٹ باؤل کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'ایک طویل عرصہ جس میں بہت کم یا بالکل بارش نہ ہو، جس سے فصلیں اور گھاس سوکھ جائیں، وہ ہے…', choices: ['خشک سالی', 'رہن', 'نقل مکانی'], a: 0 },
        { q: 'اتنا گھنا بڑا گرد آلود طوفان جو دن کو اندھیرے میں بدل دے، اسے کہا جاتا تھا…', choices: ['کنٹور ہل چلانا', 'کالا طوفان', 'تحفظ'], a: 1 },
        { q: 'جب ہوا یا پانی مٹی کو گھِس کر بہا لے جائے، وہ ہے…', choices: ['کٹاؤ', 'ضبطی', 'خشک سالی'], a: 0 },
        { q: 'جب بینک کھیت لے لیتا ہے کیونکہ قرض ادا نہیں ہو سکا، وہ ہے…', choices: ['نقل مکانی', 'تحفظ', 'ضبطی'], a: 2 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو آپ باقی اکائی اعتماد کے ساتھ پڑھ سکیں گے۔'
    },
    zh: {
      title: '热身：黑风暴词汇',
      seconds: 45,
      questions: [
        { q: '长期少雨或无雨、导致庄稼和草枯死的时期，称为…', choices: ['干旱', '按揭贷款', '迁移'], a: 0 },
        { q: '浓密到把白昼变成黑暗的巨大沙尘暴被称为…', choices: ['等高线耕作', '黑风暴', '保护'], a: 1 },
        { q: '当风或水侵蚀并卷走土壤时，这就是…', choices: ['侵蚀', '止赎', '干旱'], a: 0 },
        { q: '当银行因贷款无法偿还而收走农场时，这就是…', choices: ['迁移', '保护', '止赎'], a: 2 }
      ],
      takeaway: '掌握这四个词，你就能自信地读完本单元的其余部分。'
    } }
  },
  {
    id: 'g7-dust-bowl-surface-exit', grade: 7, unit: 'dust-bowl',
    unitTitle: "Dust and Drought, 1935 — Stay or Go?", phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.19(c)(11)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['Dust Bowl', 'the 1930s Southern Plains region hit by drought and dust storms'],
        ['erosion', 'when wind or water wears away and carries off the soil'],
        ['foreclosure', 'when the bank takes the farm because the loan can’t be paid'],
        ['conservation', 'protecting and caring for natural resources like soil and water'],
        ['stakeholder', 'anyone who is affected by a decision or has something at stake']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['Dust Bowl', 'la región de las Llanuras del Sur de los años 30 golpeada por la sequía y las tormentas de polvo'],
        ['erosión', 'cuando el viento o el agua desgasta y arrastra el suelo'],
        ['ejecución hipotecaria', 'cuando el banco se queda con la granja porque no se puede pagar el préstamo'],
        ['conservación', 'proteger y cuidar los recursos naturales como el suelo y el agua'],
        ['parte interesada', 'cualquiera que se ve afectado por una decisión o tiene algo en juego']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['Dust Bowl', 'vùng Đồng bằng phía Nam những năm 1930 bị hạn hán và bão bụi tàn phá'],
        ['xói mòn', 'khi gió hoặc nước bào mòn và cuốn đi lớp đất'],
        ['tịch biên', 'khi ngân hàng lấy nông trại vì khoản vay không thể trả'],
        ['bảo tồn', 'bảo vệ và chăm sóc tài nguyên thiên nhiên như đất và nước'],
        ['bên liên quan', 'bất kỳ ai bị ảnh hưởng bởi một quyết định hoặc có lợi ích liên quan']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['كارثة الغبار', 'منطقة السهول الجنوبية في الثلاثينيات التي ضربها الجفاف والعواصف الغبارية'],
        ['تعرية', 'عندما تجرف الرياح أو المياه التربة وتحملها بعيدًا'],
        ['حجز عقاري', 'عندما يأخذ البنك المزرعة لأن القرض لا يمكن سداده'],
        ['حفاظ', 'حماية الموارد الطبيعية مثل التربة والماء والعناية بها'],
        ['صاحب مصلحة', 'كل من يتأثّر بقرار أو لديه شيء على المحكّ']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['डस्ट बाउल', '1930 के दशक का दक्षिणी मैदानी क्षेत्र जो सूखे और धूल भरे तूफ़ानों से प्रभावित हुआ'],
        ['कटाव', 'जब हवा या पानी मिट्टी को घिसकर बहा ले जाए'],
        ['ज़ब्ती', 'जब बैंक खेत ले लेता है क्योंकि क़र्ज़ नहीं चुकाया जा सका'],
        ['संरक्षण', 'मिट्टी और पानी जैसे प्राकृतिक संसाधनों की रक्षा और देखभाल करना'],
        ['हितधारक', 'कोई भी जो किसी निर्णय से प्रभावित होता है या जिसका कुछ दाँव पर है']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['ڈسٹ باؤل', '1930 کی دہائی کا جنوبی میدانی علاقہ جو خشک سالی اور گرد آلود طوفانوں سے متاثر ہوا'],
        ['کٹاؤ', 'جب ہوا یا پانی مٹی کو گھِس کر بہا لے جائے'],
        ['ضبطی', 'جب بینک کھیت لے لیتا ہے کیونکہ قرض ادا نہیں ہو سکا'],
        ['تحفظ', 'مٹی اور پانی جیسے قدرتی وسائل کی حفاظت اور دیکھ بھال کرنا'],
        ['اسٹیک ہولڈر', 'کوئی بھی جو کسی فیصلے سے متاثر ہوتا ہے یا جس کا کچھ داؤ پر ہے']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['黑风暴（Dust Bowl）', '20 世纪 30 年代遭受干旱与沙尘暴袭击的南部平原地区'],
        ['侵蚀', '当风或水侵蚀并卷走土壤时'],
        ['止赎', '当银行因贷款无法偿还而收走农场时'],
        ['保护', '保护并爱护土壤和水等自然资源'],
        ['利益相关者', '任何受某项决定影响或有利害关系的人']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 7 · Dust Bowl 1935 · DEEP ───────── */
  {
    id: 'g7-dust-bowl-deep-entry', grade: 7, unit: 'dust-bowl',
    unitTitle: "Dust and Drought, 1935 — Stay or Go?", phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.19(c)(9), (c)(11)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: cause → effect',
      items: [
        { before: 'Farmers plowing up the grass for wheat left', after: 'exposed to the wind.', choices: ['bare soil', 'more rain', 'new towns'], a: 0 },
        { before: 'Years of drought plus high wind lifted the dry soil into', after: 'that buried fields and fences.', choices: ['black blizzards', 'cover crops', 'mortgages'], a: 0 },
        { before: 'Failing crops plus Great Depression debt meant farmers could not pay the mortgage, which led to', after: 'and families leaving west.', choices: ['conservation', 'foreclosures', 'higher rainfall'], a: 1 }
      ],
      takeaway: 'The Dust Bowl was a chain: human choices AND nature, each cause setting off the next.'
    },
    es: {
      title: 'Calentamiento: causa → efecto',
      items: [
        { before: 'Los agricultores que araron el pasto para sembrar trigo dejaron', after: 'expuesto al viento.', choices: ['suelo desnudo', 'más lluvia', 'nuevos pueblos'], a: 0 },
        { before: 'Años de sequía más viento fuerte levantaron el suelo seco formando', after: 'que enterraron campos y cercas.', choices: ['ventiscas negras', 'cultivos de cobertura', 'hipotecas'], a: 0 },
        { before: 'Las cosechas fallidas más la deuda de la Gran Depresión hicieron que los agricultores no pudieran pagar la hipoteca, lo que provocó', after: 'y familias que se iban al oeste.', choices: ['conservación', 'ejecuciones hipotecarias', 'más lluvia'], a: 1 }
      ],
      takeaway: 'El Dust Bowl fue una cadena: decisiones humanas Y naturaleza, cada causa desencadenando la siguiente.'
    },
    vi: {
      title: 'Khởi động: nguyên nhân → hệ quả',
      items: [
        { before: 'Nông dân cày xới cỏ để trồng lúa mì đã để lại', after: 'phơi ra trước gió.', choices: ['đất trơ trụi', 'nhiều mưa hơn', 'những thị trấn mới'], a: 0 },
        { before: 'Nhiều năm hạn hán cộng với gió mạnh đã cuốn lớp đất khô thành', after: 'chôn vùi đồng ruộng và hàng rào.', choices: ['những trận bão đen', 'cây che phủ đất', 'những khoản thế chấp'], a: 0 },
        { before: 'Mùa màng thất bát cộng với nợ nần thời Đại Khủng hoảng khiến nông dân không trả nổi khoản thế chấp, dẫn đến', after: 'và các gia đình bỏ đi về phía tây.', choices: ['sự bảo tồn', 'những vụ tịch biên', 'lượng mưa cao hơn'], a: 1 }
      ],
      takeaway: 'Dust Bowl là một chuỗi: lựa chọn của con người VÀ thiên nhiên, mỗi nguyên nhân châm ngòi cho cái tiếp theo.'
    },
    ar: {
      title: 'تهيئة: السبب ← الأثر',
      items: [
        { before: 'المزارعون الذين حرثوا العشب لزراعة القمح تركوا', after: 'مكشوفة للرياح.', choices: ['تربة عارية', 'مزيدًا من المطر', 'بلدات جديدة'], a: 0 },
        { before: 'سنوات من الجفاف مع رياح قوية رفعت التربة الجافة إلى', after: 'دفنت الحقول والأسيجة.', choices: ['عواصف سوداء', 'محاصيل غطاء', 'رهون عقارية'], a: 0 },
        { before: 'فشل المحاصيل مع ديون الكساد الكبير يعني أن المزارعين لم يستطيعوا سداد الرهن، مما أدى إلى', after: 'ورحيل العائلات غربًا.', choices: ['حفاظ', 'حجوزات عقارية', 'أمطار أغزر'], a: 1 }
      ],
      takeaway: 'كانت كارثة الغبار سلسلة: خيارات بشرية وطبيعة معًا، كل سبب يُشعل الذي يليه.'
    },
    hi: {
      title: 'वार्म-अप: कारण → प्रभाव',
      items: [
        { before: 'गेहूँ के लिए घास जोतने वाले किसानों ने छोड़ दिया', after: 'हवा के सामने खुला हुआ।', choices: ['नंगी मिट्टी', 'अधिक बारिश', 'नए कस्बे'], a: 0 },
        { before: 'सालों के सूखे और तेज़ हवा ने सूखी मिट्टी को उठाकर बना दिया', after: 'जिसने खेतों और बाड़ों को दफ़न कर दिया।', choices: ['काले बवंडर', 'आवरण फ़सलें', 'बंधक'], a: 0 },
        { before: 'फ़सलों की विफलता और महामंदी के क़र्ज़ का मतलब था कि किसान बंधक नहीं चुका सके, जिससे हुई', after: 'और परिवार पश्चिम की ओर चले गए।', choices: ['संरक्षण', 'ज़ब्तियाँ', 'अधिक वर्षा'], a: 1 }
      ],
      takeaway: 'डस्ट बाउल एक श्रृंखला थी: मानव चुनाव और प्रकृति, हर कारण अगले को जन्म देता हुआ।'
    },
    ur: {
      title: 'وارم اپ: سبب ← اثر',
      items: [
        { before: 'گندم کے لیے گھاس ہل چلا کر کاٹنے والے کسانوں نے چھوڑ دی', after: 'ہوا کے سامنے کھلی ہوئی۔', choices: ['ننگی مٹی', 'زیادہ بارش', 'نئے قصبے'], a: 0 },
        { before: 'برسوں کی خشک سالی اور تیز ہوا نے خشک مٹی کو اٹھا کر بنا دیا', after: 'جس نے کھیتوں اور باڑوں کو دفن کر دیا۔', choices: ['کالے طوفان', 'ڈھانپنے والی فصلیں', 'رہن'], a: 0 },
        { before: 'فصلوں کی ناکامی اور عظیم کساد بازاری کے قرض کا مطلب تھا کہ کسان رہن ادا نہ کر سکے، جس سے ہوئیں', after: 'اور خاندان مغرب کی طرف چلے گئے۔', choices: ['تحفظ', 'ضبطیاں', 'زیادہ بارش'], a: 1 }
      ],
      takeaway: 'ڈسٹ باؤل ایک سلسلہ تھا: انسانی انتخاب اور فطرت، ہر سبب اگلے کو جنم دیتا ہوا۔'
    },
    zh: {
      title: '热身：原因 → 结果',
      items: [
        { before: '农民为种小麦而翻耕草地，留下了', after: '暴露在风中。', choices: ['裸露的土壤', '更多降雨', '新的城镇'], a: 0 },
        { before: '连年干旱加上强风把干燥的土壤卷起，形成了', after: '掩埋了田地和篱笆。', choices: ['黑风暴', '覆盖作物', '按揭贷款'], a: 0 },
        { before: '歉收加上大萧条的债务，意味着农民无法偿还按揭，进而导致', after: '以及家庭西迁。', choices: ['保护', '止赎', '更多降雨'], a: 1 }
      ],
      takeaway: '黑风暴是一条链条：人的选择与自然，每个原因都引发下一个。'
    } }
  },
  {
    id: 'g7-dust-bowl-deep-exit', grade: 7, unit: 'dust-bowl',
    unitTitle: "Dust and Drought, 1935 — Stay or Go?", phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.19(c)(9), (c)(11)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort by human choice or natural cause',
      cats: ['Human choice', 'Natural cause'],
      items: [
        { t: 'Plowing up the grass for wheat', c: 0 },
        { t: 'Calling in loans during the Depression', c: 0 },
        { t: 'Deciding to migrate west to California', c: 0 },
        { t: 'Years of drought with little rain', c: 1 },
        { t: 'High winds sweeping the Plains', c: 1 },
        { t: 'Soil drying out and blowing away', c: 1 }
      ],
      takeaway: 'The Dust Bowl took BOTH human choices and nature. Sorting them is the concept map behind your argument.'
    },
    es: {
      title: 'Salida: clasifica por decisión humana o causa natural',
      cats: ['Decisión humana', 'Causa natural'],
      items: [
        { t: 'Arar el pasto para sembrar trigo', c: 0 },
        { t: 'Exigir el pago de préstamos durante la Depresión', c: 0 },
        { t: 'Decidir migrar al oeste a California', c: 0 },
        { t: 'Años de sequía con poca lluvia', c: 1 },
        { t: 'Vientos fuertes barriendo las llanuras', c: 1 },
        { t: 'El suelo secándose y volándose', c: 1 }
      ],
      takeaway: 'El Dust Bowl requirió AMBAS: decisiones humanas y naturaleza. Clasificarlas es el mapa conceptual detrás de tu argumento.'
    },
    vi: {
      title: 'Phiếu ra: phân loại theo lựa chọn của con người hay nguyên nhân tự nhiên',
      cats: ['Lựa chọn của con người', 'Nguyên nhân tự nhiên'],
      items: [
        { t: 'Cày xới cỏ để trồng lúa mì', c: 0 },
        { t: 'Đòi trả nợ vay trong thời Đại Khủng hoảng', c: 0 },
        { t: 'Quyết định di cư về phía tây tới California', c: 0 },
        { t: 'Nhiều năm hạn hán với ít mưa', c: 1 },
        { t: 'Gió mạnh quét qua vùng Đồng bằng', c: 1 },
        { t: 'Đất khô cạn và bị thổi bay đi', c: 1 }
      ],
      takeaway: 'Dust Bowl cần CẢ lựa chọn của con người lẫn thiên nhiên. Phân loại chúng chính là sơ đồ khái niệm đằng sau lập luận của bạn.'
    },
    ar: {
      title: 'الخروج: صنّف حسب الاختيار البشري أو السبب الطبيعي',
      cats: ['اختيار بشري', 'سبب طبيعي'],
      items: [
        { t: 'حرث العشب لزراعة القمح', c: 0 },
        { t: 'المطالبة بسداد القروض أثناء الكساد', c: 0 },
        { t: 'قرار الهجرة غربًا إلى كاليفورنيا', c: 0 },
        { t: 'سنوات من الجفاف بأمطار قليلة', c: 1 },
        { t: 'رياح قوية تجتاح السهول', c: 1 },
        { t: 'جفاف التربة وتطايرها', c: 1 }
      ],
      takeaway: 'تطلّبت كارثة الغبار الاختيارات البشرية والطبيعة معًا. تصنيفها هو الخريطة المفاهيمية وراء حجّتك.'
    },
    hi: {
      title: 'निकास: मानव चुनाव या प्राकृतिक कारण के अनुसार छाँटें',
      cats: ['मानव चुनाव', 'प्राकृतिक कारण'],
      items: [
        { t: 'गेहूँ के लिए घास जोतना', c: 0 },
        { t: 'महामंदी के दौरान क़र्ज़ की वसूली माँगना', c: 0 },
        { t: 'पश्चिम की ओर कैलिफ़ोर्निया प्रवास का निर्णय', c: 0 },
        { t: 'कम बारिश वाले सूखे के साल', c: 1 },
        { t: 'मैदानों में बहती तेज़ हवाएँ', c: 1 },
        { t: 'मिट्टी का सूखना और उड़ जाना', c: 1 }
      ],
      takeaway: 'डस्ट बाउल में मानव चुनाव और प्रकृति दोनों लगे। इन्हें छाँटना ही आपके तर्क के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: انسانی انتخاب یا قدرتی سبب کے مطابق چھانٹیں',
      cats: ['انسانی انتخاب', 'قدرتی سبب'],
      items: [
        { t: 'گندم کے لیے گھاس ہل چلا کر کاٹنا', c: 0 },
        { t: 'کساد بازاری کے دوران قرضوں کی واپسی کا مطالبہ', c: 0 },
        { t: 'مغرب کی طرف کیلیفورنیا نقل مکانی کا فیصلہ', c: 0 },
        { t: 'کم بارش والے خشک سالی کے سال', c: 1 },
        { t: 'میدانوں میں چلتی تیز ہوائیں', c: 1 },
        { t: 'مٹی کا سوکھنا اور اڑ جانا', c: 1 }
      ],
      takeaway: 'ڈسٹ باؤل میں انسانی انتخاب اور فطرت دونوں شامل تھے۔ انہیں چھانٹنا ہی آپ کی دلیل کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：按人为选择或自然原因分类',
      cats: ['人为选择', '自然原因'],
      items: [
        { t: '为种小麦而翻耕草地', c: 0 },
        { t: '在大萧条期间催收贷款', c: 0 },
        { t: '决定西迁前往加利福尼亚', c: 0 },
        { t: '连年干旱、降雨稀少', c: 1 },
        { t: '强风席卷平原', c: 1 },
        { t: '土壤干裂被风吹走', c: 1 }
      ],
      takeaway: '黑风暴同时源于人为选择与自然。把它们分类，就是你论证背后的概念图。'
    } }
  },

  /* ───────── Grade 7 · Dust Bowl 1935 · TRANSFER ───────── */
  {
    id: 'g7-dust-bowl-transfer-entry', grade: 7, unit: 'dust-bowl',
    unitTitle: "Dust and Drought, 1935 — Stay or Go?", phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.19(c)(23)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving steps',
      seconds: 45,
      questions: [
        { q: 'The FIRST thing a problem-solver does is…', choices: ['pick a solution', 'define the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing, a good problem-solver…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other views'], a: 0 },
        { q: 'A strong solution is backed by…', choices: ['a loud voice', 'claim + evidence', 'only feelings'], a: 1 },
        { q: 'After choosing a solution, you should…', choices: ['forget it', 'evaluate how well it worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Define → gather → weigh → decide → defend → evaluate. That is the whole transfer move.'
    },
    es: {
      title: 'Calentamiento: los pasos para resolver problemas',
      seconds: 45,
      questions: [
        { q: 'Lo PRIMERO que hace quien resuelve problemas es…', choices: ['elegir una solución', 'definir el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir, quien resuelve bien problemas…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora otras opiniones'], a: 0 },
        { q: 'Una solución sólida se respalda con…', choices: ['una voz fuerte', 'afirmación + evidencia', 'solo sentimientos'], a: 1 },
        { q: 'Después de elegir una solución, deberías…', choices: ['olvidarla', 'evaluar qué tan bien funcionó', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Definir → reunir → sopesar → decidir → defender → evaluar. Ese es todo el movimiento de transferencia.'
    },
    vi: {
      title: 'Khởi động: các bước giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Điều ĐẦU TIÊN người giải quyết vấn đề làm là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua quan điểm khác'], a: 0 },
        { q: 'Một giải pháp vững chắc được củng cố bằng…', choices: ['một giọng nói to', 'luận điểm + bằng chứng', 'chỉ cảm xúc'], a: 1 },
        { q: 'Sau khi chọn một giải pháp, bạn nên…', choices: ['quên nó đi', 'đánh giá xem nó hiệu quả ra sao', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → quyết định → bảo vệ → đánh giá. Đó chính là toàn bộ bước chuyển giao.'
    },
    ar: {
      title: 'تهيئة: خطوات حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'أول ما يفعله حلّال المشكلات هو…', choices: ['اختيار حل', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل الاختيار، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل الآراء الأخرى'], a: 0 },
        { q: 'الحل القوي يُدعم بـ…', choices: ['صوت عالٍ', 'ادعاء + دليل', 'المشاعر فقط'], a: 1 },
        { q: 'بعد اختيار حل، ينبغي أن…', choices: ['تنساه', 'تقيّم مدى نجاحه', 'تخفي المفاضلات'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن ← قرِّر ← دافِع ← قيِّم. تلك هي حركة النقل بأكملها.'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान के चरण',
      seconds: 45,
      questions: [
        { q: 'समस्या हल करने वाला सबसे पहले जो करता है, वह है…', choices: ['एक समाधान चुनना', 'समस्या को परिभाषित करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'चुनने से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य विचारों को अनदेखा करता है'], a: 0 },
        { q: 'एक मजबूत समाधान का आधार होता है…', choices: ['एक ऊँची आवाज़', 'दावा + साक्ष्य', 'केवल भावनाएँ'], a: 1 },
        { q: 'समाधान चुनने के बाद, आपको चाहिए…', choices: ['उसे भूल जाना', 'यह आँकना कि वह कितना अच्छा रहा', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → निर्णय लें → बचाव करें → आँकें। यही पूरी अंतरण चाल है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کے مراحل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے والا سب سے پہلے جو کرتا ہے، وہ ہے…', choices: ['ایک حل چننا', 'مسئلے کو متعین کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'چننے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دوسری آراء کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'ایک مضبوط حل کی بنیاد ہوتی ہے…', choices: ['ایک بلند آواز', 'دعویٰ + ثبوت', 'صرف جذبات'], a: 1 },
        { q: 'حل چننے کے بعد، آپ کو چاہیے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ وہ کتنا کارگر رہا', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← فیصلہ کریں ← دفاع کریں ← جانچیں۔ یہی پوری منتقلی کی چال ہے۔'
    },
    zh: {
      title: '热身：解决问题的步骤',
      seconds: 45,
      questions: [
        { q: '解决问题者首先要做的是…', choices: ['挑选一个方案', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在做出选择之前，优秀的解决问题者会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视他人的观点'], a: 0 },
        { q: '有力的解决方案背后有…', choices: ['大嗓门', '主张 + 证据', '只有感受'], a: 1 },
        { q: '选定方案之后，你应当…', choices: ['把它忘掉', '评估它的效果如何', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 决定 → 辩护 → 评估。这就是整个迁移动作。'
    } }
  },
  {
    id: 'g7-dust-bowl-transfer-exit', grade: 7, unit: 'dust-bowl',
    unitTitle: "Dust and Drought, 1935 — Stay or Go?", phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.19(c)(23)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim + evidence + trade-offs',
      items: [
        { before: 'A stakeholder’s claim without', after: 'from the sources is just an opinion.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: 'A strong recommendation names the', after: '— the advantages and disadvantages of each option.', choices: ['trade-offs', 'colors', 'vocabulary'], a: 0 },
        { before: 'The last step of the problem-solving process is to', after: 'how well the solution actually worked.', choices: ['evaluate', 'forget', 'hide'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs, then evaluate — thinking like a historian and a citizen.'
    },
    es: {
      title: 'Salida: afirmación + evidencia + concesiones',
      items: [
        { before: 'La afirmación de una parte interesada sin', after: 'de las fuentes es solo una opinión.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Una recomendación sólida nombra las', after: '— las ventajas y desventajas de cada opción.', choices: ['concesiones', 'colores', 'vocabulario'], a: 0 },
        { before: 'El último paso del proceso de resolución de problemas es', after: 'qué tan bien funcionó realmente la solución.', choices: ['evaluar', 'olvidar', 'ocultar'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones, luego evaluar — pensar como un historiador y un ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm + bằng chứng + đánh đổi',
      items: [
        { before: 'Luận điểm của một bên liên quan mà không có', after: 'từ các nguồn thì chỉ là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Một khuyến nghị vững chắc nêu ra những', after: '— ưu điểm và nhược điểm của mỗi phương án.', choices: ['đánh đổi', 'màu sắc', 'từ vựng'], a: 0 },
        { before: 'Bước cuối cùng của quá trình giải quyết vấn đề là', after: 'xem giải pháp thực sự hiệu quả đến đâu.', choices: ['đánh giá', 'quên đi', 'giấu đi'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi, rồi đánh giá — tư duy như một nhà sử học và một công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء + دليل + مفاضلات',
      items: [
        { before: 'ادعاء صاحب المصلحة بلا', after: 'من المصادر ما هو إلا رأي.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'التوصية القوية تسمّي', after: '— مزايا وعيوب كل خيار.', choices: ['المفاضلات', 'الألوان', 'المفردات'], a: 0 },
        { before: 'الخطوة الأخيرة في عملية حل المشكلة هي أن', after: 'مدى نجاح الحل فعليًا.', choices: ['تقيّم', 'تنسى', 'تخفي'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات ثم التقييم — التفكير كمؤرّخ ومواطن.'
    },
    hi: {
      title: 'निकास: दावा + साक्ष्य + समझौते',
      items: [
        { before: 'स्रोतों से', after: 'के बिना किसी हितधारक का दावा महज़ एक राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: 'एक मजबूत सिफ़ारिश नाम लेती है', after: '— हर विकल्प के फ़ायदे और नुक़सान।', choices: ['समझौतों का', 'रंगों का', 'शब्दावली का'], a: 0 },
        { before: 'समस्या-समाधान प्रक्रिया का अंतिम चरण है यह', after: 'कि समाधान वास्तव में कितना अच्छा रहा।', choices: ['आँकना', 'भूलना', 'छिपाना'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते, फिर आँकें — एक इतिहासकार और एक नागरिक की तरह सोचना।'
    },
    ur: {
      title: 'اخراج: دعویٰ + ثبوت + سمجھوتے',
      items: [
        { before: 'مآخذ سے', after: 'کے بغیر کسی اسٹیک ہولڈر کا دعویٰ محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: 'ایک مضبوط سفارش نام لیتی ہے', after: '— ہر اختیار کے فائدے اور نقصانات۔', choices: ['سمجھوتوں کا', 'رنگوں کا', 'الفاظ کا'], a: 0 },
        { before: 'مسئلہ حل کرنے کے عمل کا آخری مرحلہ یہ ہے کہ', after: 'کہ حل واقعی کتنا کارگر رہا۔', choices: ['جانچیں', 'بھول جائیں', 'چھپائیں'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے، پھر جانچیں — ایک مؤرخ اور ایک شہری کی طرح سوچنا۔'
    },
    zh: {
      title: '离场：主张 + 证据 + 取舍',
      items: [
        { before: '利益相关者的主张若没有来自资料的', after: '，就只是一种意见。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '有力的建议会说出其中的', after: '——每个方案的利与弊。', choices: ['取舍', '颜色', '词汇'], a: 0 },
        { before: '解决问题过程的最后一步，是去', after: '这个方案实际的效果如何。', choices: ['评估', '遗忘', '隐藏'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍，然后评估——像史学家和公民一样思考。'
    } }
  }

]);
