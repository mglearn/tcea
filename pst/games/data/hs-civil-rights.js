/* PST Arcade — ticket registry for HS · US History Since 1877 · Birmingham, 1963 — the Civil Rights Movement.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. Same shape as every unit:
   {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}.
   Honest history (TEC §28.0022): the violence used against nonviolent protesters — police dogs,
   fire hoses, mass arrests, and the 16th Street Baptist Church bombing that killed four girls —
   is kept factual, respectful, and never sensational. Named titles stay in English. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── HS · Civil Rights 1963 · SURFACE ───────── */
  {
    id: 'hs-civil-rights-surface-entry', grade: 11, unit: 'civil-rights',
    unitTitle: "Birmingham, 1963 — the Civil Rights Movement", phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.41(c)(9), (c)(28)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: movement words',
      seconds: 45,
      questions: [
        { q: 'The enforced separation of people by race in schools, transit, and public life is…', choices: ['segregation', 'integration', 'due process'], a: 0 },
        { q: 'The system of state and local laws that enforced racial segregation across the South was called…', choices: ['equal protection', 'Jim Crow', 'the boycott'], a: 1 },
        { q: 'Peacefully occupying a segregated space, such as a lunch counter, and refusing to leave is a…', choices: ['filibuster', 'boycott', 'sit-in'], a: 2 },
        { q: 'Deliberately and publicly refusing to obey a law believed unjust, and accepting the penalty, is…', choices: ['civil disobedience', 'integration', 'segregation'], a: 0 }
      ],
      takeaway: 'Know these four words and the rest of the unit reads clearly.'
    },
    es: {
      title: 'Calentamiento: palabras del movimiento',
      seconds: 45,
      questions: [
        { q: 'La separación forzada de las personas por raza en escuelas, transporte y la vida pública es…', choices: ['la segregación', 'la integración', 'el debido proceso'], a: 0 },
        { q: 'El sistema de leyes estatales y locales que impuso la segregación racial en el Sur se llamaba…', choices: ['igual protección', 'Jim Crow', 'el boicot'], a: 1 },
        { q: 'Ocupar pacíficamente un espacio segregado, como una barra de almuerzo, y negarse a salir es una…', choices: ['obstrucción legislativa', 'un boicot', 'sentada (sit-in)'], a: 2 },
        { q: 'Negarse deliberada y públicamente a obedecer una ley considerada injusta, y aceptar la sanción, es…', choices: ['la desobediencia civil', 'la integración', 'la segregación'], a: 0 }
      ],
      takeaway: 'Domina estas cuatro palabras y el resto de la unidad se lee con claridad.'
    },
    vi: {
      title: 'Khởi động: từ vựng phong trào',
      seconds: 45,
      questions: [
        { q: 'Sự tách biệt cưỡng bức con người theo chủng tộc trong trường học, giao thông và đời sống công cộng là…', choices: ['sự phân biệt (segregation)', 'sự hòa nhập', 'quy trình công bằng'], a: 0 },
        { q: 'Hệ thống luật của bang và địa phương áp đặt phân biệt chủng tộc khắp miền Nam được gọi là…', choices: ['bảo vệ bình đẳng', 'Jim Crow', 'sự tẩy chay'], a: 1 },
        { q: 'Ôn hòa chiếm một không gian bị phân biệt, như quầy ăn trưa, và từ chối rời đi là một cuộc…', choices: ['câu giờ nghị trường', 'tẩy chay', 'ngồi lì (sit-in)'], a: 2 },
        { q: 'Cố ý và công khai từ chối tuân theo một luật bị cho là bất công, và chấp nhận hình phạt, là…', choices: ['bất tuân dân sự', 'sự hòa nhập', 'sự phân biệt'], a: 0 }
      ],
      takeaway: 'Nắm bốn từ này thì phần còn lại của bài học đọc rõ ràng.'
    },
    ar: {
      title: 'تهيئة: كلمات الحركة',
      seconds: 45,
      questions: [
        { q: 'الفصل القسري بين الناس بحسب العرق في المدارس والنقل والحياة العامة هو…', choices: ['الفصل العنصري', 'الاندماج', 'الإجراءات القانونية الواجبة'], a: 0 },
        { q: 'منظومة قوانين الولايات والقوانين المحلية التي فرضت الفصل العنصري في الجنوب كانت تُسمّى…', choices: ['الحماية المتساوية', 'جيم كرو', 'المقاطعة'], a: 1 },
        { q: 'الاحتلال السلمي لمكان مفصول عنصريًا، كطاولة غداء، ورفض المغادرة هو…', choices: ['المماطلة البرلمانية', 'مقاطعة', 'اعتصام (sit-in)'], a: 2 },
        { q: 'الرفض المتعمّد والعلني لإطاعة قانون يُعتقد أنه ظالم، مع قبول العقوبة، هو…', choices: ['العصيان المدني', 'الاندماج', 'الفصل العنصري'], a: 0 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع فيُقرأ باقي الوحدة بوضوح.'
    },
    hi: {
      title: 'वार्म-अप: आंदोलन के शब्द',
      seconds: 45,
      questions: [
        { q: 'स्कूलों, परिवहन और सार्वजनिक जीवन में लोगों का नस्ल के आधार पर जबरन पृथक्करण है…', choices: ['पृथक्करण (segregation)', 'एकीकरण', 'नियत प्रक्रिया'], a: 0 },
        { q: 'दक्षिण भर में नस्लीय पृथक्करण लागू करने वाली राज्य और स्थानीय कानूनों की व्यवस्था कहलाती थी…', choices: ['समान संरक्षण', 'जिम क्रो', 'बहिष्कार'], a: 1 },
        { q: 'किसी पृथक स्थान, जैसे लंच काउंटर, पर शांतिपूर्वक कब्ज़ा करना और वहाँ से न हटना है एक…', choices: ['फिलिबस्टर', 'बहिष्कार', 'धरना (sit-in)'], a: 2 },
        { q: 'किसी अन्यायपूर्ण मानी गई कानून की जानबूझकर और सार्वजनिक रूप से अवज्ञा करना और दंड स्वीकारना है…', choices: ['सविनय अवज्ञा', 'एकीकरण', 'पृथक्करण'], a: 0 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और शेष इकाई स्पष्ट रूप से पढ़ी जाएगी।'
    },
    ur: {
      title: 'وارم اپ: تحریک کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'اسکولوں، ٹرانسپورٹ اور عوامی زندگی میں لوگوں کی نسل کی بنیاد پر جبری علیحدگی ہے…', choices: ['علیحدگی (segregation)', 'یکجائی', 'واجب قانونی عمل'], a: 0 },
        { q: 'پورے جنوب میں نسلی علیحدگی نافذ کرنے والے ریاستی اور مقامی قوانین کا نظام کہلاتا تھا…', choices: ['مساوی تحفظ', 'جِم کرو', 'بائیکاٹ'], a: 1 },
        { q: 'کسی علیحدہ کی گئی جگہ، جیسے لنچ کاؤنٹر، پر پُرامن قبضہ کرنا اور وہاں سے نہ ہٹنا ایک…', choices: ['فلی بسٹر', 'بائیکاٹ', 'دھرنا (sit-in)'], a: 2 },
        { q: 'کسی ناانصاف سمجھے جانے والے قانون کی جان بوجھ کر اور علانیہ نافرمانی کرنا اور سزا قبول کرنا ہے…', choices: ['شہری نافرمانی', 'یکجائی', 'علیحدگی'], a: 0 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو باقی اکائی واضح طور پر پڑھی جائے گی۔'
    },
    zh: {
      title: '热身：运动词汇',
      seconds: 45,
      questions: [
        { q: '在学校、交通和公共生活中按种族强制隔离人群，称为…', choices: ['种族隔离', '融合', '正当程序'], a: 0 },
        { q: '在整个南方强制推行种族隔离的州法与地方法体系被称为…', choices: ['平等保护', '吉姆·克劳（Jim Crow）', '抵制'], a: 1 },
        { q: '和平占据一个被隔离的空间（如午餐柜台）并拒绝离开，称为…', choices: ['冗长辩论阻挠', '抵制', '静坐（sit-in）'], a: 2 },
        { q: '有意且公开地拒绝服从一项被认为不公正的法律，并接受惩罚，称为…', choices: ['公民不服从', '融合', '种族隔离'], a: 0 }
      ],
      takeaway: '掌握这四个词，本单元其余部分便读来清晰。'
    } }
  },
  {
    id: 'hs-civil-rights-surface-exit', grade: 11, unit: 'civil-rights',
    unitTitle: "Birmingham, 1963 — the Civil Rights Movement", phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.41(c)(9), (c)(28)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['segregation', 'the enforced separation of people by race'],
        ['Jim Crow', 'the state and local laws that enforced segregation in the South'],
        ['nonviolent direct action', 'confronting injustice through peaceful marches, sit-ins, and boycotts'],
        ['boycott', 'a coordinated refusal to buy from a business to force change'],
        ['equal protection', "the Fourteenth Amendment's guarantee of equal treatment under law"]
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['segregación', 'la separación forzada de las personas por raza'],
        ['Jim Crow', 'las leyes estatales y locales que impusieron la segregación en el Sur'],
        ['acción directa no violenta', 'enfrentar la injusticia con marchas, sentadas y boicots pacíficos'],
        ['boicot', 'una negativa coordinada a comprar de un negocio para forzar un cambio'],
        ['igual protección', 'la garantía de la Decimocuarta Enmienda de igual trato ante la ley']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['sự phân biệt', 'sự tách biệt cưỡng bức con người theo chủng tộc'],
        ['Jim Crow', 'luật của bang và địa phương áp đặt phân biệt ở miền Nam'],
        ['hành động trực tiếp bất bạo động', 'đối đầu bất công bằng tuần hành, ngồi lì và tẩy chay ôn hòa'],
        ['tẩy chay', 'sự từ chối phối hợp không mua của một doanh nghiệp để buộc thay đổi'],
        ['bảo vệ bình đẳng', 'sự bảo đảm của Tu chính án thứ Mười bốn về đối xử bình đẳng trước pháp luật']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['الفصل العنصري', 'الفصل القسري بين الناس بحسب العرق'],
        ['جيم كرو', 'قوانين الولايات والقوانين المحلية التي فرضت الفصل في الجنوب'],
        ['العمل المباشر اللاعنفي', 'مواجهة الظلم بمسيرات واعتصامات ومقاطعات سلمية'],
        ['المقاطعة', 'رفض منسّق للشراء من متجر لإجبار التغيير'],
        ['الحماية المتساوية', 'ضمان التعديل الرابع عشر للمعاملة المتساوية أمام القانون']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['पृथक्करण', 'लोगों का नस्ल के आधार पर जबरन पृथक्करण'],
        ['जिम क्रो', 'दक्षिण में पृथक्करण लागू करने वाले राज्य और स्थानीय कानून'],
        ['अहिंसक प्रत्यक्ष कार्रवाई', 'शांतिपूर्ण मार्च, धरनों और बहिष्कारों से अन्याय का सामना'],
        ['बहिष्कार', 'बदलाव के लिए किसी व्यवसाय से खरीदने का समन्वित इनकार'],
        ['समान संरक्षण', 'कानून के समक्ष समान व्यवहार की चौदहवें संशोधन की गारंटी']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['علیحدگی', 'لوگوں کی نسل کی بنیاد پر جبری علیحدگی'],
        ['جِم کرو', 'جنوب میں علیحدگی نافذ کرنے والے ریاستی اور مقامی قوانین'],
        ['غیر متشدد براہِ راست اقدام', 'پُرامن مارچوں، دھرنوں اور بائیکاٹ سے ناانصافی کا سامنا'],
        ['بائیکاٹ', 'تبدیلی پر مجبور کرنے کے لیے کسی کاروبار سے خریداری کا مربوط انکار'],
        ['مساوی تحفظ', 'قانون کے سامنے مساوی سلوک کی چودھویں ترمیم کی ضمانت']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['种族隔离', '按种族强制隔离人群'],
        ['吉姆·克劳（Jim Crow）', '在南方强制推行隔离的州法与地方法'],
        ['非暴力直接行动', '以和平游行、静坐和抵制来对抗不公'],
        ['抵制', '为迫使改变而协同拒绝购买某商家'],
        ['平等保护', '第十四修正案关于法律面前平等对待的保障']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── HS · Civil Rights 1963 · DEEP ───────── */
  {
    id: 'hs-civil-rights-deep-entry', grade: 11, unit: 'civil-rights',
    unitTitle: "Birmingham, 1963 — the Civil Rights Movement", phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.41(c)(9), (c)(28)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the road to Birmingham',
      items: [
        { before: 'The 1954 Supreme Court decision that ruled segregated public schools unconstitutional was', after: '.', choices: ['Brown v. Board', 'Plessy v. Ferguson', 'the Voting Rights Act'], a: 0 },
        { before: 'The 1955–56 boycott, sparked by Rosa Parks and led by a young Dr. King, was the', after: '.', choices: ['Selma March', 'Montgomery Bus Boycott', 'Children’s Crusade'], a: 1 },
        { before: 'From his cell in the spring of 1963, King answered the white clergy in his', after: '.', choices: ['"I Have a Dream" speech', '"Letter from Birmingham Jail"', 'Gettysburg Address'], a: 1 }
      ],
      takeaway: 'Brown v. Board, Montgomery, and the "Letter from Birmingham Jail" are the spine of the story.'
    },
    es: {
      title: 'Calentamiento: el camino a Birmingham',
      items: [
        { before: 'La decisión de la Corte Suprema de 1954 que declaró inconstitucional la segregación en las escuelas públicas fue', after: '.', choices: ['Brown v. Board', 'Plessy v. Ferguson', 'la Ley de Derecho al Voto'], a: 0 },
        { before: 'El boicot de 1955–56, iniciado por Rosa Parks y dirigido por un joven Dr. King, fue el', after: '.', choices: ['la Marcha de Selma', 'Boicot de Autobuses de Montgomery', 'la Cruzada de los Niños'], a: 1 },
        { before: 'Desde su celda en la primavera de 1963, King respondió al clero blanco en su', after: '.', choices: ['discurso "I Have a Dream"', '"Letter from Birmingham Jail"', 'Discurso de Gettysburg'], a: 1 }
      ],
      takeaway: 'Brown v. Board, Montgomery y la "Letter from Birmingham Jail" son la columna del relato.'
    },
    vi: {
      title: 'Khởi động: con đường đến Birmingham',
      items: [
        { before: 'Phán quyết năm 1954 của Tòa Tối cao tuyên bố trường công bị phân biệt là vi hiến chính là', after: '.', choices: ['Brown v. Board', 'Plessy v. Ferguson', 'Đạo luật Quyền Bầu cử'], a: 0 },
        { before: 'Cuộc tẩy chay 1955–56, khởi phát từ Rosa Parks và do Dr. King trẻ tuổi dẫn dắt, là', after: '.', choices: ['Cuộc Tuần hành Selma', 'Cuộc Tẩy chay Xe buýt Montgomery', 'Cuộc Thập tự chinh Trẻ em'], a: 1 },
        { before: 'Từ phòng giam vào mùa xuân 1963, King đáp lại giới giáo sĩ da trắng trong', after: '.', choices: ['bài diễn văn "I Have a Dream"', '"Letter from Birmingham Jail"', 'Diễn văn Gettysburg'], a: 1 }
      ],
      takeaway: 'Brown v. Board, Montgomery, và "Letter from Birmingham Jail" là xương sống của câu chuyện.'
    },
    ar: {
      title: 'تهيئة: الطريق إلى برمنغهام',
      items: [
        { before: 'قرار المحكمة العليا لعام 1954 الذي قضى بعدم دستورية المدارس العامة المفصولة عنصريًا هو', after: '.', choices: ['Brown v. Board', 'Plessy v. Ferguson', 'قانون حق التصويت'], a: 0 },
        { before: 'المقاطعة في 1955–56، التي أشعلتها روزا باركس وقادها الدكتور كينغ الشاب، كانت', after: '.', choices: ['مسيرة سيلما', 'مقاطعة حافلات مونتغمري', 'حملة الأطفال الصليبية'], a: 1 },
        { before: 'من زنزانته في ربيع 1963، ردّ كينغ على رجال الدين البيض في', after: '.', choices: ['خطاب "I Have a Dream"', '"Letter from Birmingham Jail"', 'خطاب غيتيسبرغ'], a: 1 }
      ],
      takeaway: 'Brown v. Board ومونتغمري و"Letter from Birmingham Jail" هي العمود الفقري للقصة.'
    },
    hi: {
      title: 'वार्म-अप: बर्मिंघम की राह',
      items: [
        { before: '1954 का सर्वोच्च न्यायालय का फैसला जिसने पृथक सार्वजनिक स्कूलों को असंवैधानिक ठहराया, वह था', after: '।', choices: ['Brown v. Board', 'Plessy v. Ferguson', 'मताधिकार अधिनियम'], a: 0 },
        { before: '1955–56 का बहिष्कार, जिसे रोज़ा पार्क्स ने भड़काया और युवा डॉ. किंग ने नेतृत्व किया, वह था', after: '।', choices: ['सेल्मा मार्च', 'मॉन्टगोमरी बस बहिष्कार', 'चिल्ड्रन्स क्रूसेड'], a: 1 },
        { before: '1963 के वसंत में अपनी कोठरी से, किंग ने श्वेत पादरियों को उत्तर दिया अपने', after: ' में।', choices: ['"I Have a Dream" भाषण', '"Letter from Birmingham Jail"', 'गेटिसबर्ग संबोधन'], a: 1 }
      ],
      takeaway: 'Brown v. Board, मॉन्टगोमरी, और "Letter from Birmingham Jail" कहानी की रीढ़ हैं।'
    },
    ur: {
      title: 'وارم اپ: برمنگھم کا راستہ',
      items: [
        { before: '1954 کا سپریم کورٹ کا فیصلہ جس نے علیحدہ پبلک اسکولوں کو غیر آئینی قرار دیا، وہ تھا', after: '۔', choices: ['Brown v. Board', 'Plessy v. Ferguson', 'حقِ رائے دہی ایکٹ'], a: 0 },
        { before: '1955–56 کا بائیکاٹ، جسے روزا پارکس نے بھڑکایا اور نوجوان ڈاکٹر کنگ نے قیادت کی، وہ تھا', after: '۔', choices: ['سیلما مارچ', 'مانٹگمری بس بائیکاٹ', 'چلڈرنز کروسیڈ'], a: 1 },
        { before: '1963 کے موسمِ بہار میں اپنی کوٹھری سے، کنگ نے سفید فام پادریوں کو جواب دیا اپنے', after: ' میں۔', choices: ['"I Have a Dream" تقریر', '"Letter from Birmingham Jail"', 'گیٹسبرگ خطاب'], a: 1 }
      ],
      takeaway: 'Brown v. Board، مانٹگمری، اور "Letter from Birmingham Jail" کہانی کی ریڑھ ہیں۔'
    },
    zh: {
      title: '热身：通往伯明翰之路',
      items: [
        { before: '1954年最高法院裁定隔离的公立学校违宪的判决是', after: '。', choices: ['Brown v. Board', 'Plessy v. Ferguson', '《投票权法》'], a: 0 },
        { before: '1955–56年由罗莎·帕克斯引发、年轻的金博士领导的抵制是', after: '。', choices: ['塞尔玛游行', '蒙哥马利公交抵制', '儿童十字军'], a: 1 },
        { before: '1963年春天，金在牢房里回应白人神职人员，写下了他的', after: '。', choices: ['"I Have a Dream" 演说', '"Letter from Birmingham Jail"', '葛底斯堡演说'], a: 1 }
      ],
      takeaway: 'Brown v. Board、蒙哥马利，以及 "Letter from Birmingham Jail" 是这个故事的主干。'
    } }
  },
  {
    id: 'hs-civil-rights-deep-exit', grade: 11, unit: 'civil-rights',
    unitTitle: "Birmingham, 1963 — the Civil Rights Movement", phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.41(c)(9), (c)(28)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: nonviolent direct action vs. legal / legislative change',
      cats: ['Nonviolent direct action', 'Legal / legislative change'],
      items: [
        { t: 'The Montgomery Bus Boycott', c: 0 },
        { t: 'Sit-ins at segregated lunch counters', c: 0 },
        { t: 'The Birmingham Campaign & Children’s Crusade', c: 0 },
        { t: 'Brown v. Board strikes down segregated schools', c: 1 },
        { t: 'The Civil Rights Act of 1964', c: 1 },
        { t: 'The Voting Rights Act of 1965', c: 1 }
      ],
      takeaway: 'The movement pressed on two fronts — action in the streets and change in the law — and each fed the other.'
    },
    es: {
      title: 'Salida: acción directa no violenta vs. cambio legal / legislativo',
      cats: ['Acción directa no violenta', 'Cambio legal / legislativo'],
      items: [
        { t: 'El Boicot de Autobuses de Montgomery', c: 0 },
        { t: 'Sentadas en barras de almuerzo segregadas', c: 0 },
        { t: 'La Campaña de Birmingham y la Cruzada de los Niños', c: 0 },
        { t: 'Brown v. Board anula las escuelas segregadas', c: 1 },
        { t: 'La Ley de Derechos Civiles de 1964', c: 1 },
        { t: 'La Ley de Derecho al Voto de 1965', c: 1 }
      ],
      takeaway: 'El movimiento presionó en dos frentes — la acción en las calles y el cambio en la ley — y cada uno alimentó al otro.'
    },
    vi: {
      title: 'Phiếu ra: hành động trực tiếp bất bạo động vs. thay đổi pháp lý / lập pháp',
      cats: ['Hành động trực tiếp bất bạo động', 'Thay đổi pháp lý / lập pháp'],
      items: [
        { t: 'Cuộc Tẩy chay Xe buýt Montgomery', c: 0 },
        { t: 'Các cuộc ngồi lì tại quầy ăn trưa bị phân biệt', c: 0 },
        { t: 'Chiến dịch Birmingham và Cuộc Thập tự chinh Trẻ em', c: 0 },
        { t: 'Brown v. Board bác bỏ trường học bị phân biệt', c: 1 },
        { t: 'Đạo luật Dân quyền năm 1964', c: 1 },
        { t: 'Đạo luật Quyền Bầu cử năm 1965', c: 1 }
      ],
      takeaway: 'Phong trào gây áp lực trên hai mặt trận — hành động trên đường phố và thay đổi trong luật — và mỗi bên nuôi dưỡng bên kia.'
    },
    ar: {
      title: 'الخروج: العمل المباشر اللاعنفي مقابل التغيير القانوني / التشريعي',
      cats: ['العمل المباشر اللاعنفي', 'التغيير القانوني / التشريعي'],
      items: [
        { t: 'مقاطعة حافلات مونتغمري', c: 0 },
        { t: 'الاعتصامات عند طاولات الغداء المفصولة عنصريًا', c: 0 },
        { t: 'حملة برمنغهام وحملة الأطفال الصليبية', c: 0 },
        { t: 'قضية Brown v. Board تُبطل المدارس المفصولة', c: 1 },
        { t: 'قانون الحقوق المدنية لعام 1964', c: 1 },
        { t: 'قانون حق التصويت لعام 1965', c: 1 }
      ],
      takeaway: 'ضغطت الحركة على جبهتين — العمل في الشوارع والتغيير في القانون — وغذّت كل جبهة الأخرى.'
    },
    hi: {
      title: 'निकास: अहिंसक प्रत्यक्ष कार्रवाई बनाम कानूनी / विधायी बदलाव',
      cats: ['अहिंसक प्रत्यक्ष कार्रवाई', 'कानूनी / विधायी बदलाव'],
      items: [
        { t: 'मॉन्टगोमरी बस बहिष्कार', c: 0 },
        { t: 'पृथक लंच काउंटरों पर धरने', c: 0 },
        { t: 'बर्मिंघम अभियान और चिल्ड्रन्स क्रूसेड', c: 0 },
        { t: 'Brown v. Board पृथक स्कूलों को रद्द करता है', c: 1 },
        { t: '1964 का नागरिक अधिकार अधिनियम', c: 1 },
        { t: '1965 का मताधिकार अधिनियम', c: 1 }
      ],
      takeaway: 'आंदोलन ने दो मोर्चों पर दबाव डाला — सड़कों पर कार्रवाई और कानून में बदलाव — और हर एक ने दूसरे को बल दिया।'
    },
    ur: {
      title: 'اخراج: غیر متشدد براہِ راست اقدام بمقابلہ قانونی / قانون سازی کی تبدیلی',
      cats: ['غیر متشدد براہِ راست اقدام', 'قانونی / قانون سازی کی تبدیلی'],
      items: [
        { t: 'مانٹگمری بس بائیکاٹ', c: 0 },
        { t: 'علیحدہ لنچ کاؤنٹرز پر دھرنے', c: 0 },
        { t: 'برمنگھم مہم اور چلڈرنز کروسیڈ', c: 0 },
        { t: 'Brown v. Board علیحدہ اسکولوں کو کالعدم قرار دیتا ہے', c: 1 },
        { t: '1964 کا شہری حقوق ایکٹ', c: 1 },
        { t: '1965 کا حقِ رائے دہی ایکٹ', c: 1 }
      ],
      takeaway: 'تحریک نے دو محاذوں پر دباؤ ڈالا — سڑکوں پر اقدام اور قانون میں تبدیلی — اور ہر ایک نے دوسرے کو تقویت دی۔'
    },
    zh: {
      title: '离场：非暴力直接行动 与 法律 / 立法变革',
      cats: ['非暴力直接行动', '法律 / 立法变革'],
      items: [
        { t: '蒙哥马利公交抵制', c: 0 },
        { t: '在被隔离的午餐柜台静坐', c: 0 },
        { t: '伯明翰运动与儿童十字军', c: 0 },
        { t: 'Brown v. Board 推翻隔离学校', c: 1 },
        { t: '1964年《民权法》', c: 1 },
        { t: '1965年《投票权法》', c: 1 }
      ],
      takeaway: '运动在两条战线上施压——街头的行动与法律的变革——彼此相互促进。'
    } }
  },

  /* ───────── HS · Civil Rights 1963 · TRANSFER ───────── */
  {
    id: 'hs-civil-rights-transfer-entry', grade: 11, unit: 'civil-rights',
    unitTitle: "Birmingham, 1963 — the Civil Rights Movement", phase: 'transfer', type: 'entry',
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
    id: 'hs-civil-rights-transfer-exit', grade: 11, unit: 'civil-rights',
    unitTitle: "Birmingham, 1963 — the Civil Rights Movement", phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.41(c)(31)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim, evidence & trade-offs',
      items: [
        { before: 'A recommendation without', after: 'from the sources is just an opinion.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: 'Reasoning from a stakeholder’s', after: 'is how you see the spring of 1963 as they did.', choices: ['point of view', 'budget', 'signature'], a: 0 },
        { before: 'Naming the', after: 'of your course of action shows you weighed the options.', choices: ['trade-offs', 'colors', 'vocabulary'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs = running the full problem-solving process like a historian and citizen.'
    },
    es: {
      title: 'Salida: afirmación, evidencia y concesiones',
      items: [
        { before: 'Una recomendación sin', after: 'de las fuentes es solo una opinión.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Razonar desde el', after: 'de una parte interesada es cómo ves la primavera de 1963 como ella la vio.', choices: ['punto de vista', 'presupuesto', 'firma'], a: 0 },
        { before: 'Nombrar las', after: 'de tu curso de acción muestra que sopesaste las opciones.', choices: ['concesiones', 'colores', 'vocabulario'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones = recorrer todo el proceso de resolución como historiador y ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm, bằng chứng & đánh đổi',
      items: [
        { before: 'Một khuyến nghị không có', after: 'từ các nguồn thì chỉ là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Suy luận từ', after: 'của một bên liên quan là cách bạn nhìn mùa xuân 1963 như họ đã nhìn.', choices: ['góc nhìn', 'ngân sách', 'chữ ký'], a: 0 },
        { before: 'Nêu ra những', after: 'của phương án hành động cho thấy bạn đã cân nhắc các lựa chọn.', choices: ['đánh đổi', 'màu sắc', 'từ vựng'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi = thực hiện trọn quy trình giải quyết vấn đề như một nhà sử học và công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء ودليل ومفاضلات',
      items: [
        { before: 'التوصية بلا', after: 'من المصادر ما هي إلا رأي.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'الاستدلال من', after: 'صاحب المصلحة هو كيف ترى ربيع 1963 كما رآه.', choices: ['وجهة نظر', 'ميزانية', 'توقيع'], a: 0 },
        { before: 'إن تسمية', after: 'الخاصة بمسار عملك تُظهر أنك وازنت الخيارات.', choices: ['المفاضلات', 'الألوان', 'المفردات'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات = تنفيذ عملية حل المشكلات كاملةً كمؤرّخ ومواطن.'
    },
    hi: {
      title: 'निकास: दावा, साक्ष्य और समझौते',
      items: [
        { before: 'स्रोतों से', after: 'के बिना सिफारिश महज़ एक राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: 'किसी हितधारक के', after: 'से तर्क करना ही वह तरीका है जिससे आप 1963 के वसंत को उनकी तरह देखते हैं।', choices: ['दृष्टिकोण', 'बजट', 'हस्ताक्षर'], a: 0 },
        { before: 'अपने कार्य-मार्ग की', after: 'का नाम लेना दिखाता है कि आपने विकल्प तौले।', choices: ['समझौतों', 'रंगों', 'शब्दावली'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते = एक इतिहासकार और नागरिक की तरह पूरी समस्या-समाधान प्रक्रिया चलाना।'
    },
    ur: {
      title: 'اخراج: دعویٰ، ثبوت اور سمجھوتے',
      items: [
        { before: 'مآخذ سے', after: 'کے بغیر سفارش محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: 'کسی اسٹیک ہولڈر کے', after: 'سے استدلال کرنا ہی وہ طریقہ ہے جس سے آپ 1963 کے موسمِ بہار کو اُن کی طرح دیکھتے ہیں۔', choices: ['نقطہ نظر', 'بجٹ', 'دستخط'], a: 0 },
        { before: 'اپنے لائحہ عمل کے', after: 'کا نام لینا ظاہر کرتا ہے کہ آپ نے اختیارات تولے۔', choices: ['سمجھوتوں', 'رنگوں', 'الفاظ'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے = ایک مؤرخ اور شہری کی طرح پورا مسئلہ حل کرنے کا عمل چلانا۔'
    },
    zh: {
      title: '离场：主张、证据与取舍',
      items: [
        { before: '一份建议若没有来自资料的', after: '，就只是一种意见。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '从某位利益相关者的', after: '进行推理，就是像他们那样看待1963年的春天。', choices: ['视角', '预算', '签名'], a: 0 },
        { before: '说出你行动方案中的', after: '，表明你权衡过各种方案。', choices: ['取舍', '颜色', '词汇'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍 = 像史学家和公民那样走完整个解决问题的流程。'
    } }
  }

]);
