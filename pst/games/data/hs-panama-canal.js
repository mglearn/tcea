/* PST Arcade — ticket registry for HS · US History Since 1877 · The Panama Canal, 1903.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. Same shape as every unit:
   {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}.
   Honest history (TEC §28.0022): the 1903 secession, the "in perpetuity" Canal Zone,
   worker deaths, and gold/silver-roll segregation are kept factual and respectful. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── HS · Panama Canal 1903 · SURFACE ───────── */
  {
    id: 'hs-panama-canal-surface-entry', grade: 11, unit: 'panama-canal',
    unitTitle: 'The Panama Canal, 1903 — a World-Power Question', phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.41(c)(7)(A), (c)(12)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: canal words',
      seconds: 45,
      questions: [
        { q: 'A narrow strip of land joining two larger land masses, with water on both sides, is an…', choices: ['isthmus', 'lock', 'canal'], a: 0 },
        { q: 'One nation controlling foreign lands and peoples is…', choices: ['sovereignty', 'imperialism', 'neutrality'], a: 1 },
        { q: 'Theodore Roosevelt’s policy of negotiating while backing it with military force is called…', choices: ['"big stick" diplomacy', 'a sphere of influence', 'Manifest Destiny'], a: 0 },
        { q: 'A nation’s supreme authority to govern itself and its territory is its…', choices: ['isthmus', 'Canal Zone', 'sovereignty'], a: 2 }
      ],
      takeaway: 'Know these four words and the rest of the unit reads clearly.'
    },
    es: {
      title: 'Calentamiento: palabras del canal',
      seconds: 45,
      questions: [
        { q: 'Una franja estrecha de tierra que une dos masas de tierra mayores, con agua a ambos lados, es un…', choices: ['istmo', 'esclusa', 'canal'], a: 0 },
        { q: 'Que una nación controle tierras y pueblos extranjeros es…', choices: ['soberanía', 'imperialismo', 'neutralidad'], a: 1 },
        { q: 'La política de Theodore Roosevelt de negociar respaldándola con la fuerza militar se llama…', choices: ['diplomacia del "gran garrote"', 'una esfera de influencia', 'Destino Manifiesto'], a: 0 },
        { q: 'La autoridad suprema de una nación para gobernarse a sí misma y a su territorio es su…', choices: ['istmo', 'Zona del Canal', 'soberanía'], a: 2 }
      ],
      takeaway: 'Domina estas cuatro palabras y el resto de la unidad se lee con claridad.'
    },
    vi: {
      title: 'Khởi động: từ vựng về kênh đào',
      seconds: 45,
      questions: [
        { q: 'Dải đất hẹp nối hai khối đất lớn hơn, hai bên đều có nước, được gọi là…', choices: ['eo đất', 'âu thuyền', 'kênh đào'], a: 0 },
        { q: 'Một quốc gia kiểm soát đất đai và dân tộc nước ngoài là…', choices: ['chủ quyền', 'chủ nghĩa đế quốc', 'trung lập'], a: 1 },
        { q: 'Chính sách của Theodore Roosevelt vừa thương lượng vừa hậu thuẫn bằng sức mạnh quân sự được gọi là…', choices: ['ngoại giao "cây gậy lớn"', 'phạm vi ảnh hưởng', 'Vận Mệnh Hiển Nhiên'], a: 0 },
        { q: 'Quyền tối cao của một quốc gia trong việc tự quản trị mình và lãnh thổ của mình là…', choices: ['eo đất', 'Vùng Kênh đào', 'chủ quyền'], a: 2 }
      ],
      takeaway: 'Nắm bốn từ này thì phần còn lại của bài học đọc rõ ràng.'
    },
    ar: {
      title: 'تهيئة: كلمات القناة',
      seconds: 45,
      questions: [
        { q: 'الشريط الضيّق من الأرض الذي يصل بين كتلتين أرضيتين أكبر، وله ماء على جانبيه، هو…', choices: ['برزخ', 'هويس', 'قناة'], a: 0 },
        { q: 'سيطرة أمة واحدة على أراضٍ وشعوب أجنبية هي…', choices: ['السيادة', 'الإمبريالية', 'الحياد'], a: 1 },
        { q: 'سياسة ثيودور روزفلت في التفاوض مع دعمها بالقوة العسكرية تُسمّى…', choices: ['دبلوماسية "العصا الغليظة"', 'منطقة نفوذ', 'القدر المتجلّي'], a: 0 },
        { q: 'السلطة العليا للأمة في حكم نفسها وإقليمها هي…', choices: ['برزخ', 'منطقة القناة', 'السيادة'], a: 2 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع فيُقرأ باقي الوحدة بوضوح.'
    },
    hi: {
      title: 'वार्म-अप: नहर के शब्द',
      seconds: 45,
      questions: [
        { q: 'दो बड़े भू-भागों को जोड़ने वाली भूमि की संकरी पट्टी, जिसके दोनों ओर पानी हो, कहलाती है…', choices: ['स्थलडमरूमध्य (इस्थमस)', 'लॉक (जलद्वार)', 'नहर'], a: 0 },
        { q: 'एक राष्ट्र द्वारा विदेशी भूमि और लोगों पर नियंत्रण है…', choices: ['संप्रभुता', 'साम्राज्यवाद', 'तटस्थता'], a: 1 },
        { q: 'बातचीत करते हुए उसे सैन्य बल से समर्थन देने की थियोडोर रूज़वेल्ट की नीति कहलाती है…', choices: ['"बड़ी छड़ी" कूटनीति', 'प्रभाव क्षेत्र', 'मैनिफेस्ट डेस्टिनी'], a: 0 },
        { q: 'किसी राष्ट्र का स्वयं और अपने क्षेत्र पर शासन करने का सर्वोच्च अधिकार है उसकी…', choices: ['इस्थमस', 'नहर क्षेत्र', 'संप्रभुता'], a: 2 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और शेष इकाई स्पष्ट रूप से पढ़ी जाएगी।'
    },
    ur: {
      title: 'وارم اپ: نہر کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'دو بڑے خطوں کو ملانے والی زمین کی تنگ پٹی، جس کے دونوں طرف پانی ہو، کہلاتی ہے…', choices: ['برزخ (استھمس)', 'لاک (آبی دروازہ)', 'نہر'], a: 0 },
        { q: 'ایک قوم کا غیر ملکی زمینوں اور لوگوں پر کنٹرول ہے…', choices: ['خودمختاری', 'سامراجیت', 'غیر جانبداری'], a: 1 },
        { q: 'مذاکرات کے ساتھ اسے فوجی طاقت سے تقویت دینے کی تھیوڈور روزویلٹ کی پالیسی کہلاتی ہے…', choices: ['"بڑی لاٹھی" سفارت کاری', 'اثر و رسوخ کا دائرہ', 'مینی فیسٹ ڈیسٹنی'], a: 0 },
        { q: 'کسی قوم کا خود اور اپنے علاقے پر حکومت کرنے کا اعلیٰ ترین اختیار ہے اس کی…', choices: ['برزخ', 'نہری زون', 'خودمختاری'], a: 2 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو باقی اکائی واضح طور پر پڑھی جائے گی۔'
    },
    zh: {
      title: '热身：运河词汇',
      seconds: 45,
      questions: [
        { q: '连接两块较大陆地、两侧皆有水的狭长陆地称为…', choices: ['地峡', '船闸', '运河'], a: 0 },
        { q: '一个国家控制外国土地和人民称为…', choices: ['主权', '帝国主义', '中立'], a: 1 },
        { q: '西奥多·罗斯福一边谈判、一边以军事力量为后盾的政策被称为…', choices: ['"大棒"外交', '势力范围', '天定命运'], a: 0 },
        { q: '一个国家治理自身及其领土的最高权力是它的…', choices: ['地峡', '运河区', '主权'], a: 2 }
      ],
      takeaway: '掌握这四个词，本单元其余部分便读来清晰。'
    } }
  },
  {
    id: 'hs-panama-canal-surface-exit', grade: 11, unit: 'panama-canal',
    unitTitle: 'The Panama Canal, 1903 — a World-Power Question', phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.41(c)(7)(A), (c)(12)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['isthmus', 'a narrow strip of land joining two land masses'],
        ['sovereignty', 'a nation’s supreme authority to govern itself'],
        ['imperialism', 'one nation’s control of foreign lands and peoples'],
        ['Canal Zone', 'the strip the U.S. held "in perpetuity" from 1903'],
        ['sphere of influence', 'a region where one nation holds dominant power']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['istmo', 'una franja estrecha de tierra que une dos masas de tierra'],
        ['soberanía', 'la autoridad suprema de una nación para gobernarse'],
        ['imperialismo', 'el control de una nación sobre tierras y pueblos extranjeros'],
        ['Zona del Canal', 'la franja que EE. UU. tuvo "a perpetuidad" desde 1903'],
        ['esfera de influencia', 'una región donde una nación tiene poder dominante']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['eo đất', 'dải đất hẹp nối hai khối đất lớn'],
        ['chủ quyền', 'quyền tối cao của một quốc gia tự quản trị mình'],
        ['chủ nghĩa đế quốc', 'sự kiểm soát của một quốc gia đối với đất đai và dân tộc nước ngoài'],
        ['Vùng Kênh đào', 'dải đất Hoa Kỳ nắm giữ "vĩnh viễn" từ năm 1903'],
        ['phạm vi ảnh hưởng', 'khu vực nơi một quốc gia nắm quyền lực chi phối']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['برزخ', 'شريط ضيّق من الأرض يصل بين كتلتين أرضيتين'],
        ['السيادة', 'السلطة العليا للأمة في حكم نفسها'],
        ['الإمبريالية', 'سيطرة أمة على أراضٍ وشعوب أجنبية'],
        ['منطقة القناة', 'الشريط الذي احتفظت به الولايات المتحدة "إلى الأبد" منذ 1903'],
        ['منطقة النفوذ', 'إقليم تملك فيه أمة واحدة قوة مهيمنة']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['इस्थमस', 'दो भू-भागों को जोड़ने वाली भूमि की संकरी पट्टी'],
        ['संप्रभुता', 'किसी राष्ट्र का स्वयं शासन करने का सर्वोच्च अधिकार'],
        ['साम्राज्यवाद', 'किसी राष्ट्र का विदेशी भूमि और लोगों पर नियंत्रण'],
        ['नहर क्षेत्र', 'वह पट्टी जो अमेरिका ने 1903 से "सदा के लिए" रखी'],
        ['प्रभाव क्षेत्र', 'वह क्षेत्र जहाँ एक राष्ट्र का प्रभुत्वकारी शक्ति हो']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['برزخ', 'دو خطوں کو ملانے والی زمین کی تنگ پٹی'],
        ['خودمختاری', 'کسی قوم کا خود حکومت کرنے کا اعلیٰ ترین اختیار'],
        ['سامراجیت', 'کسی قوم کا غیر ملکی زمینوں اور لوگوں پر کنٹرول'],
        ['نہری زون', 'وہ پٹی جو امریکہ نے 1903 سے "ہمیشہ کے لیے" رکھی'],
        ['اثر و رسوخ کا دائرہ', 'وہ خطہ جہاں ایک قوم غالب طاقت رکھتی ہو']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['地峡', '连接两块陆地的狭长陆地'],
        ['主权', '一个国家治理自身的最高权力'],
        ['帝国主义', '一个国家对外国土地和人民的控制'],
        ['运河区', '美国自1903年"永久"持有的那条地带'],
        ['势力范围', '一个国家握有支配性权力的区域']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── HS · Panama Canal 1903 · DEEP ───────── */
  {
    id: 'hs-panama-canal-deep-entry', grade: 11, unit: 'panama-canal',
    unitTitle: 'The Panama Canal, 1903 — a World-Power Question', phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.41(c)(7)(A), (c)(12)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the strategic case',
      items: [
        { before: 'Naval strategist Alfred Thayer Mahan argued that national greatness rested on', after: ', so a canal was vital.', choices: ['sea power', 'free trade', 'immigration'], a: 0 },
        { before: 'Congress nearly chose a longer route through', after: ', but lobbying swayed the vote to Panama.', choices: ['Mexico', 'Nicaragua', 'Cuba'], a: 1 },
        { before: 'In 1903, Panama seceded from', after: ', backed by U.S. warships and money.', choices: ['Spain', 'Colombia', 'France'], a: 1 }
      ],
      takeaway: 'Sea power, the Nicaragua-vs-Panama route, and the 1903 secession are the spine of the story.'
    },
    es: {
      title: 'Calentamiento: el argumento estratégico',
      items: [
        { before: 'El estratega naval Alfred Thayer Mahan sostenía que la grandeza nacional se basaba en', after: ', por lo que un canal era vital.', choices: ['el poder marítimo', 'el libre comercio', 'la inmigración'], a: 0 },
        { before: 'El Congreso estuvo a punto de elegir una ruta más larga por', after: ', pero el cabildeo inclinó el voto hacia Panamá.', choices: ['México', 'Nicaragua', 'Cuba'], a: 1 },
        { before: 'En 1903, Panamá se separó de', after: ', con el respaldo de buques de guerra y dinero de EE. UU.', choices: ['España', 'Colombia', 'Francia'], a: 1 }
      ],
      takeaway: 'El poder marítimo, la ruta Nicaragua-vs-Panamá y la secesión de 1903 son la columna del relato.'
    },
    vi: {
      title: 'Khởi động: luận điểm chiến lược',
      items: [
        { before: 'Chiến lược gia hải quân Alfred Thayer Mahan lập luận rằng sự vĩ đại của quốc gia dựa trên', after: ', nên một con kênh là tối quan trọng.', choices: ['sức mạnh biển', 'thương mại tự do', 'nhập cư'], a: 0 },
        { before: 'Quốc hội suýt chọn một tuyến dài hơn qua', after: ', nhưng vận động hành lang đã nghiêng lá phiếu về Panama.', choices: ['Mexico', 'Nicaragua', 'Cuba'], a: 1 },
        { before: 'Năm 1903, Panama ly khai khỏi', after: ', với sự hậu thuẫn của tàu chiến và tiền của Hoa Kỳ.', choices: ['Tây Ban Nha', 'Colombia', 'Pháp'], a: 1 }
      ],
      takeaway: 'Sức mạnh biển, tuyến Nicaragua-vs-Panama, và cuộc ly khai 1903 là xương sống của câu chuyện.'
    },
    ar: {
      title: 'تهيئة: الحجّة الاستراتيجية',
      items: [
        { before: 'رأى الاستراتيجي البحري ألفريد ثاير ماهان أن عظمة الأمم تقوم على', after: '، لذا كانت القناة حيوية.', choices: ['القوة البحرية', 'التجارة الحرة', 'الهجرة'], a: 0 },
        { before: 'كاد الكونغرس يختار طريقًا أطول عبر', after: '، لكن الضغط رجّح التصويت لصالح بنما.', choices: ['المكسيك', 'نيكاراغوا', 'كوبا'], a: 1 },
        { before: 'في عام 1903، انفصلت بنما عن', after: '، بدعم من السفن الحربية والمال الأمريكي.', choices: ['إسبانيا', 'كولومبيا', 'فرنسا'], a: 1 }
      ],
      takeaway: 'القوة البحرية، وطريق نيكاراغوا مقابل بنما، وانفصال 1903 هي العمود الفقري للقصة.'
    },
    hi: {
      title: 'वार्म-अप: रणनीतिक तर्क',
      items: [
        { before: 'नौसैनिक रणनीतिकार अल्फ्रेड थायर माहन का तर्क था कि राष्ट्रीय महानता आधारित है', after: ' पर, इसलिए नहर अनिवार्य थी।', choices: ['समुद्री शक्ति', 'मुक्त व्यापार', 'आप्रवासन'], a: 0 },
        { before: 'कांग्रेस लगभग एक लंबा मार्ग चुनने वाली थी', after: ' से होकर, पर पैरवी ने मत पनामा की ओर झुका दिया।', choices: ['मेक्सिको', 'निकारागुआ', 'क्यूबा'], a: 1 },
        { before: '1903 में, पनामा अलग हुआ', after: ' से, अमेरिकी युद्धपोतों और धन के समर्थन से।', choices: ['स्पेन', 'कोलंबिया', 'फ्रांस'], a: 1 }
      ],
      takeaway: 'समुद्री शक्ति, निकारागुआ बनाम पनामा मार्ग, और 1903 का अलगाव कहानी की रीढ़ हैं।'
    },
    ur: {
      title: 'وارم اپ: حکمتِ عملی کی دلیل',
      items: [
        { before: 'بحری حکمتِ عملی کے ماہر الفریڈ تھایر ماہن کی دلیل تھی کہ قومی عظمت کا انحصار ہے', after: ' پر، اس لیے نہر لازمی تھی۔', choices: ['بحری طاقت', 'آزاد تجارت', 'ہجرت'], a: 0 },
        { before: 'کانگریس تقریباً ایک طویل راستہ چننے والی تھی', after: ' سے ہوتا ہوا، مگر لابنگ نے ووٹ پاناما کی طرف جھکا دیا۔', choices: ['میکسیکو', 'نکاراگوا', 'کیوبا'], a: 1 },
        { before: '1903 میں، پاناما الگ ہوا', after: ' سے، امریکی جنگی جہازوں اور پیسے کی حمایت سے۔', choices: ['اسپین', 'کولمبیا', 'فرانس'], a: 1 }
      ],
      takeaway: 'بحری طاقت، نکاراگوا بمقابلہ پاناما راستہ، اور 1903 کی علیحدگی کہانی کی ریڑھ ہیں۔'
    },
    zh: {
      title: '热身：战略论据',
      items: [
        { before: '海军战略家阿尔弗雷德·塞耶·马汉主张，国家的伟大建立于', after: '，因此运河至关重要。', choices: ['海权', '自由贸易', '移民'], a: 0 },
        { before: '国会差点选择一条更长的路线，经由', after: '，但游说使投票倾向巴拿马。', choices: ['墨西哥', '尼加拉瓜', '古巴'], a: 1 },
        { before: '1903年，巴拿马脱离', after: '，得到美国军舰与金钱的支持。', choices: ['西班牙', '哥伦比亚', '法国'], a: 1 }
      ],
      takeaway: '海权、尼加拉瓜与巴拿马路线之争，以及1903年的分离，是这个故事的主干。'
    } }
  },
  {
    id: 'hs-panama-canal-deep-exit', grade: 11, unit: 'panama-canal',
    unitTitle: 'The Panama Canal, 1903 — a World-Power Question', phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.41(c)(7)(A), (c)(12), (c)(29)(A)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: benefits vs. costs of building the canal',
      cats: ['Benefit (U.S. view)', 'Cost (others bear)'],
      items: [
        { t: 'Faster Atlantic–Pacific naval movement', c: 0 },
        { t: 'Shorter, cheaper global trade routes', c: 0 },
        { t: 'Prestige as a world power', c: 0 },
        { t: 'Colombia loses a province and the canal', c: 1 },
        { t: '"In perpetuity" concession of sovereignty', c: 1 },
        { t: '~5,600 worker deaths; segregated "silver roll" labor', c: 1 }
      ],
      takeaway: 'Sorting benefits against costs is the concept map behind your argument about expansionism.'
    },
    es: {
      title: 'Salida: beneficios vs. costos de construir el canal',
      cats: ['Beneficio (visión de EE. UU.)', 'Costo (lo asumen otros)'],
      items: [
        { t: 'Movimiento naval más rápido entre el Atlántico y el Pacífico', c: 0 },
        { t: 'Rutas comerciales globales más cortas y baratas', c: 0 },
        { t: 'Prestigio como potencia mundial', c: 0 },
        { t: 'Colombia pierde una provincia y el canal', c: 1 },
        { t: 'Concesión "a perpetuidad" de la soberanía', c: 1 },
        { t: '~5.600 muertes de trabajadores; trabajo segregado del "silver roll"', c: 1 }
      ],
      takeaway: 'Clasificar beneficios frente a costos es el mapa conceptual detrás de tu argumento sobre el expansionismo.'
    },
    vi: {
      title: 'Phiếu ra: lợi ích so với chi phí của việc xây kênh',
      cats: ['Lợi ích (góc nhìn Hoa Kỳ)', 'Chi phí (bên khác gánh)'],
      items: [
        { t: 'Di chuyển hải quân Đại Tây Dương–Thái Bình Dương nhanh hơn', c: 0 },
        { t: 'Tuyến thương mại toàn cầu ngắn hơn, rẻ hơn', c: 0 },
        { t: 'Uy tín của một cường quốc thế giới', c: 0 },
        { t: 'Colombia mất một tỉnh và con kênh', c: 1 },
        { t: 'Nhượng chủ quyền "vĩnh viễn"', c: 1 },
        { t: '~5.600 công nhân thiệt mạng; lao động phân biệt "silver roll"', c: 1 }
      ],
      takeaway: 'Phân loại lợi ích so với chi phí là sơ đồ khái niệm đằng sau lập luận của bạn về chủ nghĩa bành trướng.'
    },
    ar: {
      title: 'الخروج: منافع مقابل تكاليف بناء القناة',
      cats: ['منفعة (وجهة نظر الولايات المتحدة)', 'تكلفة (يتحمّلها الآخرون)'],
      items: [
        { t: 'حركة بحرية أسرع بين الأطلسي والهادئ', c: 0 },
        { t: 'طرق تجارة عالمية أقصر وأرخص', c: 0 },
        { t: 'هيبة كقوة عالمية', c: 0 },
        { t: 'كولومبيا تفقد إقليمًا والقناة', c: 1 },
        { t: 'التنازل عن السيادة "إلى الأبد"', c: 1 },
        { t: 'نحو 5,600 وفاة بين العمال؛ عمل مفصول عنصريًا بنظام "السجل الفضي"', c: 1 }
      ],
      takeaway: 'تصنيف المنافع مقابل التكاليف هو الخريطة المفاهيمية وراء حجّتك حول التوسعية.'
    },
    hi: {
      title: 'निकास: नहर बनाने के लाभ बनाम लागत',
      cats: ['लाभ (अमेरिकी दृष्टि)', 'लागत (औरों पर)'],
      items: [
        { t: 'अटलांटिक–प्रशांत के बीच तेज़ नौसैनिक आवाजाही', c: 0 },
        { t: 'छोटे, सस्ते वैश्विक व्यापार मार्ग', c: 0 },
        { t: 'विश्व शक्ति के रूप में प्रतिष्ठा', c: 0 },
        { t: 'कोलंबिया एक प्रांत और नहर खो देता है', c: 1 },
        { t: 'संप्रभुता की "सदा के लिए" रियायत', c: 1 },
        { t: '~5,600 श्रमिकों की मृत्यु; पृथक "सिल्वर रोल" श्रम', c: 1 }
      ],
      takeaway: 'लाभों को लागतों से छाँटना ही विस्तारवाद पर आपके तर्क के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: نہر بنانے کے فوائد بمقابلہ اخراجات',
      cats: ['فائدہ (امریکی نقطہ نظر)', 'قیمت (دوسرے اٹھاتے ہیں)'],
      items: [
        { t: 'بحرِ اوقیانوس–بحرالکاہل کے درمیان تیز بحری نقل و حرکت', c: 0 },
        { t: 'مختصر، سستے عالمی تجارتی راستے', c: 0 },
        { t: 'عالمی طاقت کے طور پر وقار', c: 0 },
        { t: 'کولمبیا ایک صوبہ اور نہر کھو دیتا ہے', c: 1 },
        { t: 'خودمختاری کی "ہمیشہ کے لیے" رعایت', c: 1 },
        { t: 'تقریباً 5,600 مزدوروں کی اموات؛ علیحدہ "سلور رول" مزدوری', c: 1 }
      ],
      takeaway: 'فوائد کو اخراجات سے چھانٹنا ہی توسیع پسندی پر آپ کی دلیل کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：建造运河的收益与代价',
      cats: ['收益（美国视角）', '代价（他人承担）'],
      items: [
        { t: '大西洋–太平洋之间更快的海军调动', c: 0 },
        { t: '更短、更廉价的全球贸易航线', c: 0 },
        { t: '作为世界强国的声望', c: 0 },
        { t: '哥伦比亚失去一个省份和运河', c: 1 },
        { t: '"永久"让渡主权', c: 1 },
        { t: '约5,600名工人死亡；被隔离的"银册"劳工', c: 1 }
      ],
      takeaway: '把收益与代价分类，就是你关于扩张主义论证背后的概念图。'
    } }
  },

  /* ───────── HS · Panama Canal 1903 · TRANSFER ───────── */
  {
    id: 'hs-panama-canal-transfer-entry', grade: 11, unit: 'panama-canal',
    unitTitle: 'The Panama Canal, 1903 — a World-Power Question', phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.41(c)(32)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving process',
      seconds: 45,
      questions: [
        { q: 'The FIRST move of the problem-solving process is to…', choices: ['pick a solution', 'identify the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing, a good problem-solver…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other stakeholders'], a: 0 },
        { q: 'A strong recommendation is backed by…', choices: ['a loud voice', 'claim + evidence', 'only feelings'], a: 1 },
        { q: 'The LAST step is to…', choices: ['forget it', 'evaluate how well the solution worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Identify → gather → weigh options → choose → defend → evaluate. That is §113.41(c)(32)(B).'
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
      takeaway: 'Identificar → reunir → sopesar opciones → elegir → defender → evaluar. Eso es §113.41(c)(32)(B).'
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
      takeaway: 'Xác định → thu thập → cân nhắc phương án → chọn → bảo vệ → đánh giá. Đó là §113.41(c)(32)(B).'
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
      takeaway: 'حدِّد ← اجمع ← وازِن الخيارات ← اختَر ← دافِع ← قيِّم. تلك هي §113.41(c)(32)(B).'
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
      takeaway: 'पहचानें → जुटाएँ → विकल्प तौलें → चुनें → बचाव करें → आँकें। यही §113.41(c)(32)(B) है।'
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
      takeaway: 'نشاندہی ← جمع ← اختیارات تولنا ← چننا ← دفاع ← جانچنا۔ یہی §113.41(c)(32)(B) ہے۔'
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
      takeaway: '界定 → 收集 → 权衡方案 → 选择 → 辩护 → 评估。这就是 §113.41(c)(32)(B)。'
    } }
  },
  {
    id: 'hs-panama-canal-transfer-exit', grade: 11, unit: 'panama-canal',
    unitTitle: 'The Panama Canal, 1903 — a World-Power Question', phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.41(c)(32)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim, evidence & trade-offs',
      items: [
        { before: 'A recommendation without', after: 'from the sources is just an opinion.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: 'Reasoning from a stakeholder’s', after: 'is how you see the crisis as they did.', choices: ['point of view', 'budget', 'signature'], a: 0 },
        { before: 'Naming the', after: 'of your solution shows you weighed the options.', choices: ['trade-offs', 'colors', 'vocabulary'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs = running the full problem-solving process like a historian and citizen.'
    },
    es: {
      title: 'Salida: afirmación, evidencia y concesiones',
      items: [
        { before: 'Una recomendación sin', after: 'de las fuentes es solo una opinión.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Razonar desde el', after: 'de una parte interesada es cómo ves la crisis como ella la vio.', choices: ['punto de vista', 'presupuesto', 'firma'], a: 0 },
        { before: 'Nombrar las', after: 'de tu solución muestra que sopesaste las opciones.', choices: ['concesiones', 'colores', 'vocabulario'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones = recorrer todo el proceso de resolución como historiador y ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm, bằng chứng & đánh đổi',
      items: [
        { before: 'Một khuyến nghị không có', after: 'từ các nguồn thì chỉ là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Suy luận từ', after: 'của một bên liên quan là cách bạn nhìn cuộc khủng hoảng như họ đã nhìn.', choices: ['góc nhìn', 'ngân sách', 'chữ ký'], a: 0 },
        { before: 'Nêu ra những', after: 'của giải pháp cho thấy bạn đã cân nhắc các phương án.', choices: ['đánh đổi', 'màu sắc', 'từ vựng'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi = thực hiện trọn quy trình giải quyết vấn đề như một nhà sử học và công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء ودليل ومفاضلات',
      items: [
        { before: 'التوصية بلا', after: 'من المصادر ما هي إلا رأي.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'الاستدلال من', after: 'صاحب المصلحة هو كيف ترى الأزمة كما رآها.', choices: ['وجهة نظر', 'ميزانية', 'توقيع'], a: 0 },
        { before: 'إن تسمية', after: 'الخاصة بحلّك تُظهر أنك وازنت الخيارات.', choices: ['المفاضلات', 'الألوان', 'المفردات'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات = تنفيذ عملية حل المشكلات كاملةً كمؤرّخ ومواطن.'
    },
    hi: {
      title: 'निकास: दावा, साक्ष्य और समझौते',
      items: [
        { before: 'स्रोतों से', after: 'के बिना सिफारिश महज़ एक राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: 'किसी हितधारक के', after: 'से तर्क करना ही वह तरीका है जिससे आप संकट को उनकी तरह देखते हैं।', choices: ['दृष्टिकोण', 'बजट', 'हस्ताक्षर'], a: 0 },
        { before: 'अपने समाधान की', after: 'का नाम लेना दिखाता है कि आपने विकल्प तौले।', choices: ['समझौतों', 'रंगों', 'शब्दावली'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते = एक इतिहासकार और नागरिक की तरह पूरी समस्या-समाधान प्रक्रिया चलाना।'
    },
    ur: {
      title: 'اخراج: دعویٰ، ثبوت اور سمجھوتے',
      items: [
        { before: 'مآخذ سے', after: 'کے بغیر سفارش محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: 'کسی اسٹیک ہولڈر کے', after: 'سے استدلال کرنا ہی وہ طریقہ ہے جس سے آپ بحران کو اُن کی طرح دیکھتے ہیں۔', choices: ['نقطہ نظر', 'بجٹ', 'دستخط'], a: 0 },
        { before: 'اپنے حل کے', after: 'کا نام لینا ظاہر کرتا ہے کہ آپ نے اختیارات تولے۔', choices: ['سمجھوتوں', 'رنگوں', 'الفاظ'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے = ایک مؤرخ اور شہری کی طرح پورا مسئلہ حل کرنے کا عمل چلانا۔'
    },
    zh: {
      title: '离场：主张、证据与取舍',
      items: [
        { before: '一份建议若没有来自资料的', after: '，就只是一种意见。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '从某位利益相关者的', after: '进行推理，就是像他们那样看待这场危机。', choices: ['视角', '预算', '签名'], a: 0 },
        { before: '说出你方案中的', after: '，表明你权衡过各种方案。', choices: ['取舍', '颜色', '词汇'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍 = 像史学家和公民那样走完整个解决问题的流程。'
    } }
  }

]);
