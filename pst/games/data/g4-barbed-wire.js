/* PST Arcade — ticket registry. Each ticket is retrieval practice for one unit + phase.
   English-first; other languages carried inline per ticket (ticket.i18n[lang]). The engine
   (arcade.js) reads window.PST_TICKETS. Nothing is stored or sent. To add tickets, append objects
   with the same shape: {id, grade, unit, unitTitle, phase, type, format, teks, strat, d, i18n}. */
window.PST_TICKETS = (window.PST_TICKETS || []).concat([

  /* ───────── Grade 4 · Fences on the Range 1883 · SURFACE ───────── */
  {
    id: 'g4-barbed-wire-surface-entry', grade: 4, unit: 'barbed-wire',
    unitTitle: 'Fences on the Range, 1883 — Who Gets the Land?', phase: 'surface', type: 'entry',
    format: 'mcq', teks: '§113.15(c)(10)(A), (c)(19)(A)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: range & fence words',
      seconds: 45,
      questions: [
        { q: 'Wide, unfenced land where cattle roamed and grazed freely was the…', choices: ['open range', 'homestead', 'railroad'], a: 0 },
        { q: 'Cheap, sharp fencing wire that let people fence off huge areas was…', choices: ['a windmill', 'barbed wire', 'a cattle drive'], a: 1 },
        { q: 'A machine that used wind to pump underground water to the surface was a…', choices: ['windmill', 'railroad', 'drought'], a: 0 },
        { q: 'How much of something there is, and how much people want it — which sets the price — is…', choices: ['a cattle drive', 'a homestead', 'supply & demand'], a: 2 }
      ],
      takeaway: 'Know these four words and the rest of the unit will make sense.'
    },
    es: {
      title: 'Calentamiento: palabras del rancho y la cerca',
      seconds: 45,
      questions: [
        { q: 'La tierra amplia y sin cercas donde el ganado vagaba y pastaba libremente era…', choices: ['la pradera abierta', 'la parcela familiar', 'el ferrocarril'], a: 0 },
        { q: 'El alambre de cerca barato y afilado que permitió cercar áreas enormes era…', choices: ['un molino de viento', 'el alambre de púas', 'un arreo de ganado'], a: 1 },
        { q: 'Una máquina que usaba el viento para bombear agua subterránea a la superficie era un…', choices: ['molino de viento', 'ferrocarril', 'sequía'], a: 0 },
        { q: 'Cuánto hay de algo y cuánto lo desea la gente —lo que fija el precio— es…', choices: ['un arreo de ganado', 'una parcela familiar', 'la oferta y la demanda'], a: 2 }
      ],
      takeaway: 'Domina estas cuatro palabras y el resto de la unidad tendrá sentido.'
    },
    vi: {
      title: 'Khởi động: từ vựng về đồng cỏ & hàng rào',
      seconds: 45,
      questions: [
        { q: 'Vùng đất rộng, không rào nơi gia súc rong ruổi và gặm cỏ tự do được gọi là…', choices: ['đồng cỏ mở', 'trại định cư', 'đường sắt'], a: 0 },
        { q: 'Loại dây rào rẻ, sắc nhọn cho phép người ta rào những vùng đất rộng lớn là…', choices: ['cối xay gió', 'dây thép gai', 'cuộc lùa gia súc'], a: 1 },
        { q: 'Cỗ máy dùng sức gió để bơm nước ngầm lên mặt đất là…', choices: ['cối xay gió', 'đường sắt', 'hạn hán'], a: 0 },
        { q: 'Có bao nhiêu của một thứ và người ta muốn nó bao nhiêu — điều định giá cả — là…', choices: ['cuộc lùa gia súc', 'trại định cư', 'cung và cầu'], a: 2 }
      ],
      takeaway: 'Nắm được bốn từ này thì phần còn lại của đơn vị bài học sẽ dễ hiểu.'
    },
    ar: {
      title: 'تهيئة: كلمات المرعى والسياج',
      seconds: 45,
      questions: [
        { q: 'الأرض الواسعة غير المسيّجة حيث كانت الماشية تجول وترعى بحرية كانت…', choices: ['المرعى المفتوح', 'أرض الاستيطان', 'السكة الحديدية'], a: 0 },
        { q: 'سلك السياج الرخيص الحاد الذي أتاح تسييج مساحات ضخمة كان…', choices: ['طاحونة هواء', 'الأسلاك الشائكة', 'سوق الماشية'], a: 1 },
        { q: 'الآلة التي استخدمت الرياح لضخّ المياه الجوفية إلى السطح كانت…', choices: ['طاحونة هواء', 'سكة حديدية', 'جفاف'], a: 0 },
        { q: 'كمية الشيء المتوفرة ومدى رغبة الناس فيه — وهو ما يحدّد السعر — هو…', choices: ['سوق الماشية', 'أرض استيطان', 'العرض والطلب'], a: 2 }
      ],
      takeaway: 'أتقن هذه الكلمات الأربع وسيصبح باقي الوحدة مفهومًا.'
    },
    hi: {
      title: 'वार्म-अप: चरागाह और बाड़ के शब्द',
      seconds: 45,
      questions: [
        { q: 'चौड़ी, बिना बाड़ वाली भूमि जहाँ मवेशी स्वतंत्र रूप से घूमते और चरते थे, वह थी…', choices: ['खुला चरागाह', 'गृहस्थान', 'रेलमार्ग'], a: 0 },
        { q: 'सस्ता, नुकीला बाड़ का तार जिससे लोग विशाल क्षेत्रों में बाड़ लगा सके, वह था…', choices: ['पवनचक्की', 'कँटीला तार', 'मवेशी हाँकना'], a: 1 },
        { q: 'वह मशीन जो हवा से भूमिगत पानी को सतह पर पंप करती थी, वह थी…', choices: ['पवनचक्की', 'रेलमार्ग', 'सूखा'], a: 0 },
        { q: 'किसी चीज़ की कितनी मात्रा है और लोग उसे कितना चाहते हैं — जो कीमत तय करता है — वह है…', choices: ['मवेशी हाँकना', 'गृहस्थान', 'आपूर्ति और माँग'], a: 2 }
      ],
      takeaway: 'इन चार शब्दों को जान लें और शेष इकाई समझ में आ जाएगी।'
    },
    ur: {
      title: 'وارم اپ: چراگاہ اور باڑ کے الفاظ',
      seconds: 45,
      questions: [
        { q: 'وسیع، بغیر باڑ کی زمین جہاں مویشی آزادانہ گھومتے اور چرتے تھے، وہ تھی…', choices: ['کھلی چراگاہ', 'گھر بستی', 'ریلوے'], a: 0 },
        { q: 'سستا، نوکیلا باڑ کا تار جس سے لوگ وسیع علاقوں کو باڑ لگا سکے، وہ تھا…', choices: ['پن چکی', 'خاردار تار', 'مویشی ہانکنا'], a: 1 },
        { q: 'وہ مشین جو ہوا سے زیرِ زمین پانی کو سطح پر پمپ کرتی تھی، وہ تھی…', choices: ['پن چکی', 'ریلوے', 'خشک سالی'], a: 0 },
        { q: 'کسی چیز کی کتنی مقدار ہے اور لوگ اسے کتنا چاہتے ہیں — جو قیمت طے کرتا ہے — وہ ہے…', choices: ['مویشی ہانکنا', 'گھر بستی', 'رسد اور طلب'], a: 2 }
      ],
      takeaway: 'ان چار الفاظ کو جان لیں تو باقی اکائی سمجھ میں آ جائے گی۔'
    },
    zh: {
      title: '热身：牧场与围栏词汇',
      seconds: 45,
      questions: [
        { q: '牛群自由漫游和吃草、辽阔而没有围栏的土地是…', choices: ['开阔牧场', '宅地', '铁路'], a: 0 },
        { q: '便宜又尖锐、让人们能圈起大片土地的围栏铁丝是…', choices: ['风车', '带刺铁丝网', '赶牛'], a: 1 },
        { q: '利用风力把地下水抽到地面的机器是…', choices: ['风车', '铁路', '干旱'], a: 0 },
        { q: '某样东西有多少、人们又有多想要它——由此决定价格——这是…', choices: ['赶牛', '宅地', '供给与需求'], a: 2 }
      ],
      takeaway: '掌握这四个词，本单元其余部分就都能理解了。'
    } }
  },
  {
    id: 'g4-barbed-wire-surface-exit', grade: 4, unit: 'barbed-wire',
    unitTitle: 'Fences on the Range, 1883 — Who Gets the Land?', phase: 'surface', type: 'exit',
    format: 'match', teks: '§113.15(c)(10)(A), (c)(19)(A)', strat: 'Vocabulary & feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: match the word to its meaning',
      pairs: [
        ['open range', 'wide unfenced land where cattle grazed freely'],
        ['barbed wire', 'cheap sharp fencing that could enclose huge areas'],
        ['homestead', 'land a family settles and farms as their own'],
        ['drought', 'a long time with little or no rain'],
        ['stakeholder', 'anyone affected by a decision or with something at stake']
      ],
      takeaway: 'If you matched all five, you are ready to go deep. If not, revisit the word bank.'
    },
    es: {
      title: 'Salida: relaciona la palabra con su significado',
      pairs: [
        ['pradera abierta', 'tierra amplia y sin cercas donde el ganado pastaba libremente'],
        ['alambre de púas', 'cerca barata y afilada que podía encerrar áreas enormes'],
        ['parcela familiar', 'tierra que una familia coloniza y cultiva como propia'],
        ['sequía', 'un largo período con poca o ninguna lluvia'],
        ['parte interesada', 'cualquiera afectado por una decisión o con algo en juego']
      ],
      takeaway: 'Si relacionaste las cinco, estás listo para ir a lo profundo. Si no, repasa el banco de palabras.'
    },
    vi: {
      title: 'Phiếu ra: ghép từ với nghĩa của nó',
      pairs: [
        ['đồng cỏ mở', 'vùng đất rộng, không rào nơi gia súc gặm cỏ tự do'],
        ['dây thép gai', 'hàng rào rẻ, sắc có thể vây quanh những vùng rộng lớn'],
        ['trại định cư', 'đất mà một gia đình đến ở và canh tác làm của riêng'],
        ['hạn hán', 'một thời gian dài có ít hoặc không có mưa'],
        ['bên liên quan', 'bất kỳ ai bị ảnh hưởng bởi một quyết định hoặc có lợi ích liên quan']
      ],
      takeaway: 'Nếu bạn ghép đúng cả năm, bạn đã sẵn sàng học chuyên sâu. Nếu chưa, hãy xem lại kho từ vựng.'
    },
    ar: {
      title: 'الخروج: طابِق الكلمة مع معناها',
      pairs: [
        ['المرعى المفتوح', 'أرض واسعة غير مسيّجة حيث كانت الماشية ترعى بحرية'],
        ['الأسلاك الشائكة', 'سياج رخيص حاد يمكنه أن يطوّق مساحات ضخمة'],
        ['أرض الاستيطان', 'أرض تستقرّ فيها عائلة وتزرعها ملكًا لها'],
        ['الجفاف', 'فترة طويلة بقليل من المطر أو دونه'],
        ['صاحب المصلحة', 'أي شخص يتأثر بقرار أو لديه ما يخسره']
      ],
      takeaway: 'إذا طابقت الخمس جميعًا، فأنت مستعد للتعمّق. وإلا، فراجِع بنك الكلمات.'
    },
    hi: {
      title: 'निकास: शब्द को उसके अर्थ से मिलाएँ',
      pairs: [
        ['खुला चरागाह', 'चौड़ी बिना बाड़ वाली भूमि जहाँ मवेशी स्वतंत्र रूप से चरते थे'],
        ['कँटीला तार', 'सस्ती नुकीली बाड़ जो विशाल क्षेत्रों को घेर सकती थी'],
        ['गृहस्थान', 'भूमि जिसे कोई परिवार बसाकर अपनी बनाकर खेती करता है'],
        ['सूखा', 'लंबा समय जब बहुत कम या बिल्कुल वर्षा न हो'],
        ['हितधारक', 'कोई भी जो निर्णय से प्रभावित हो या जिसका कुछ दाँव पर हो']
      ],
      takeaway: 'यदि आपने पाँचों मिला दिए, तो आप गहन में जाने के लिए तैयार हैं। यदि नहीं, तो शब्द-बैंक फिर देखें।'
    },
    ur: {
      title: 'اخراج: لفظ کو اس کے مطلب سے ملائیں',
      pairs: [
        ['کھلی چراگاہ', 'وسیع بغیر باڑ کی زمین جہاں مویشی آزادانہ چرتے تھے'],
        ['خاردار تار', 'سستی نوکیلی باڑ جو وسیع علاقوں کو گھیر سکتی تھی'],
        ['گھر بستی', 'زمین جسے کوئی خاندان آباد کر کے اپنی بنا کر کاشت کرتا ہے'],
        ['خشک سالی', 'ایک طویل عرصہ جب بہت کم یا بالکل بارش نہ ہو'],
        ['اسٹیک ہولڈر', 'کوئی بھی جو فیصلے سے متاثر ہو یا جس کا کچھ داؤ پر ہو']
      ],
      takeaway: 'اگر آپ نے پانچوں ملا دیے تو آپ گہرائی میں جانے کو تیار ہیں۔ ورنہ لفظی بینک دوبارہ دیکھیں۔'
    },
    zh: {
      title: '离场：把词语与其含义配对',
      pairs: [
        ['开阔牧场', '辽阔而没有围栏、牛群自由吃草的土地'],
        ['带刺铁丝网', '便宜锋利、能圈起大片区域的围栏'],
        ['宅地', '一家人定居并耕作、据为己有的土地'],
        ['干旱', '很少或没有降雨的漫长时期'],
        ['利益相关者', '任何受某项决定影响或有利害关系的人']
      ],
      takeaway: '如果五个都配对正确，你就可以进入深层学习了。若没有，请重温词汇表。'
    } }
  },

  /* ───────── Grade 4 · Fences on the Range 1883 · DEEP ───────── */
  {
    id: 'g4-barbed-wire-deep-entry', grade: 4, unit: 'barbed-wire',
    unitTitle: 'Fences on the Range, 1883 — Who Gets the Land?', phase: 'deep', type: 'entry',
    format: 'cloze', teks: '§113.15(c)(8)(A–C), (c)(4)(C)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: cause & effect on the range',
      items: [
        { before: 'Because', after: 'was cheap, people could fence off huge areas of land — and the water.', choices: ['barbed wire', 'the drought', 'the railroad'], a: 0 },
        { before: 'The', after: 'reached Texas, so cattle and crops could go to faraway markets.', choices: ['windmill', 'railroad', 'homestead'], a: 1 },
        { before: 'When fences blocked the creek and the trail, the result was', after: 'in the night.', choices: ['fence-cutting', 'supply & demand', 'a cattle drive'], a: 0 }
      ],
      takeaway: 'Every fence fight has a cause AND an effect. Look for both.'
    },
    es: {
      title: 'Calentamiento: causa y efecto en la pradera',
      items: [
        { before: 'Como', after: 'era barato, la gente pudo cercar áreas enormes de tierra —y el agua.', choices: ['el alambre de púas', 'la sequía', 'el ferrocarril'], a: 0 },
        { before: 'El', after: 'llegó a Texas, así que el ganado y los cultivos pudieron ir a mercados lejanos.', choices: ['molino de viento', 'ferrocarril', 'parcela familiar'], a: 1 },
        { before: 'Cuando las cercas bloquearon el arroyo y el sendero, el resultado fue el', after: 'en la noche.', choices: ['corte de cercas', 'la oferta y la demanda', 'arreo de ganado'], a: 0 }
      ],
      takeaway: 'Cada pelea por cercas tiene una causa Y un efecto. Busca ambos.'
    },
    vi: {
      title: 'Khởi động: nhân & quả trên đồng cỏ',
      items: [
        { before: 'Vì', after: 'rẻ, người ta có thể rào những vùng đất rộng lớn — và cả nguồn nước.', choices: ['dây thép gai', 'hạn hán', 'đường sắt'], a: 0 },
        { before: '', after: 'đến Texas, nên gia súc và mùa màng có thể ra tới các thị trường xa xôi.', choices: ['Cối xay gió', 'Đường sắt', 'Trại định cư'], a: 1 },
        { before: 'Khi hàng rào chặn con suối và lối mòn, kết quả là nạn', after: 'trong đêm.', choices: ['cắt hàng rào', 'cung và cầu', 'lùa gia súc'], a: 0 }
      ],
      takeaway: 'Mỗi cuộc tranh chấp hàng rào đều có nhân VÀ quả. Hãy tìm cả hai.'
    },
    ar: {
      title: 'تهيئة: السبب والنتيجة في المرعى',
      items: [
        { before: 'لأن', after: 'كانت رخيصة، تمكّن الناس من تسييج مساحات ضخمة من الأرض — والمياه.', choices: ['الأسلاك الشائكة', 'الجفاف', 'السكة الحديدية'], a: 0 },
        { before: 'وصلت', after: 'إلى تكساس، فأمكن للماشية والمحاصيل الوصول إلى الأسواق البعيدة.', choices: ['طاحونة الهواء', 'السكة الحديدية', 'أرض الاستيطان'], a: 1 },
        { before: 'عندما سدّت الأسوار الجدول والدرب، كانت النتيجة', after: 'في الليل.', choices: ['قطع الأسوار', 'العرض والطلب', 'سوق الماشية'], a: 0 }
      ],
      takeaway: 'كل نزاع على سياج له سبب ونتيجة معًا. ابحث عن كليهما.'
    },
    hi: {
      title: 'वार्म-अप: चरागाह में कारण और प्रभाव',
      items: [
        { before: 'चूँकि', after: 'सस्ता था, लोग विशाल क्षेत्रों में — और पानी पर भी — बाड़ लगा सके।', choices: ['कँटीला तार', 'सूखा', 'रेलमार्ग'], a: 0 },
        { before: '', after: 'टेक्सास पहुँचा, तो मवेशी और फसलें दूर के बाज़ारों तक जा सकीं।', choices: ['पवनचक्की', 'रेलमार्ग', 'गृहस्थान'], a: 1 },
        { before: 'जब बाड़ों ने नाले और पगडंडी को रोक दिया, तो परिणाम रात में', after: 'हुआ।', choices: ['बाड़ काटना', 'आपूर्ति और माँग', 'मवेशी हाँकना'], a: 0 }
      ],
      takeaway: 'हर बाड़ की लड़ाई का एक कारण और एक प्रभाव होता है। दोनों को खोजें।'
    },
    ur: {
      title: 'وارم اپ: چراگاہ میں سبب اور اثر',
      items: [
        { before: 'چونکہ', after: 'سستا تھا، لوگ وسیع علاقوں — اور پانی — کو باڑ لگا سکے۔', choices: ['خاردار تار', 'خشک سالی', 'ریلوے'], a: 0 },
        { before: '', after: 'ٹیکساس پہنچی، تو مویشی اور فصلیں دور کے بازاروں تک جا سکیں۔', choices: ['پن چکی', 'ریلوے', 'گھر بستی'], a: 1 },
        { before: 'جب باڑوں نے ندی اور پگڈنڈی روک دی، تو نتیجہ رات میں', after: 'نکلا۔', choices: ['باڑ کاٹنا', 'رسد اور طلب', 'مویشی ہانکنا'], a: 0 }
      ],
      takeaway: 'ہر باڑ کے جھگڑے کا ایک سبب اور ایک اثر ہوتا ہے۔ دونوں کو تلاش کریں۔'
    },
    zh: {
      title: '热身：牧场上的因与果',
      items: [
        { before: '因为', after: '便宜，人们才能圈起大片土地——连同水源。', choices: ['带刺铁丝网', '干旱', '铁路'], a: 0 },
        { before: '', after: '通到了得克萨斯，牛群和庄稼便能运往远方的市场。', choices: ['风车', '铁路', '宅地'], a: 1 },
        { before: '当围栏挡住了小溪和小道，结果就是夜里的', after: '。', choices: ['剪断围栏', '供给与需求', '赶牛'], a: 0 }
      ],
      takeaway: '每一场围栏之争都有因也有果。两者都要寻找。'
    } }
  },
  {
    id: 'g4-barbed-wire-deep-exit', grade: 4, unit: 'barbed-wire',
    unitTitle: 'Fences on the Range, 1883 — Who Gets the Land?', phase: 'deep', type: 'exit',
    format: 'sort', teks: '§113.15(c)(8)(A–C), (c)(4)(C)', strat: 'Concept organization', d: 0.64,
    i18n: { en: {
      title: 'Exit: sort cause vs effect',
      cats: ['Cause (what changed)', 'Effect (what happened)'],
      items: [
        { t: 'Cheap barbed wire arrives', c: 0 },
        { t: 'The railroad reaches Texas', c: 0 },
        { t: 'Drought makes grass & water scarce', c: 0 },
        { t: 'Land and water get fenced off from others', c: 1 },
        { t: 'Cattle trails, roads & schools are blocked', c: 1 },
        { t: 'Fence-cutting fights break out', c: 1 }
      ],
      takeaway: 'Sorting causes from effects is the concept map behind your argument.'
    },
    es: {
      title: 'Salida: clasifica causa y efecto',
      cats: ['Causa (qué cambió)', 'Efecto (qué pasó)'],
      items: [
        { t: 'Llega el alambre de púas barato', c: 0 },
        { t: 'El ferrocarril llega a Texas', c: 0 },
        { t: 'La sequía vuelve escasos el pasto y el agua', c: 0 },
        { t: 'La tierra y el agua quedan cercadas de los demás', c: 1 },
        { t: 'Se bloquean senderos de ganado, caminos y escuelas', c: 1 },
        { t: 'Estallan las peleas por el corte de cercas', c: 1 }
      ],
      takeaway: 'Separar causas de efectos es el mapa conceptual detrás de tu argumento.'
    },
    vi: {
      title: 'Phiếu ra: phân loại nhân và quả',
      cats: ['Nhân (điều gì thay đổi)', 'Quả (điều gì xảy ra)'],
      items: [
        { t: 'Dây thép gai rẻ xuất hiện', c: 0 },
        { t: 'Đường sắt đến Texas', c: 0 },
        { t: 'Hạn hán làm cỏ & nước khan hiếm', c: 0 },
        { t: 'Đất và nước bị rào chắn khỏi người khác', c: 1 },
        { t: 'Lối mòn gia súc, đường sá & trường học bị chặn', c: 1 },
        { t: 'Các cuộc tranh chấp cắt hàng rào nổ ra', c: 1 }
      ],
      takeaway: 'Phân tách nhân khỏi quả chính là sơ đồ khái niệm đằng sau lập luận của bạn.'
    },
    ar: {
      title: 'الخروج: صنّف السبب مقابل النتيجة',
      cats: ['السبب (ما الذي تغيّر)', 'النتيجة (ما الذي حدث)'],
      items: [
        { t: 'وصول الأسلاك الشائكة الرخيصة', c: 0 },
        { t: 'وصول السكة الحديدية إلى تكساس', c: 0 },
        { t: 'الجفاف يجعل العشب والماء نادرَين', c: 0 },
        { t: 'تسييج الأرض والماء بعيدًا عن الآخرين', c: 1 },
        { t: 'سدّ دروب الماشية والطرق والمدارس', c: 1 },
        { t: 'اندلاع نزاعات قطع الأسوار', c: 1 }
      ],
      takeaway: 'فصل الأسباب عن النتائج هو الخريطة المفاهيمية وراء حجّتك.'
    },
    hi: {
      title: 'निकास: कारण बनाम प्रभाव छाँटें',
      cats: ['कारण (क्या बदला)', 'प्रभाव (क्या हुआ)'],
      items: [
        { t: 'सस्ता कँटीला तार आता है', c: 0 },
        { t: 'रेलमार्ग टेक्सास पहुँचता है', c: 0 },
        { t: 'सूखे से घास और पानी दुर्लभ हो जाते हैं', c: 0 },
        { t: 'भूमि और पानी दूसरों से बाड़ लगाकर रोक दिए जाते हैं', c: 1 },
        { t: 'मवेशी पगडंडियाँ, सड़कें और स्कूल अवरुद्ध हो जाते हैं', c: 1 },
        { t: 'बाड़ काटने की लड़ाइयाँ छिड़ जाती हैं', c: 1 }
      ],
      takeaway: 'कारणों को प्रभावों से अलग करना ही आपके तर्क के पीछे का अवधारणा मानचित्र है।'
    },
    ur: {
      title: 'اخراج: سبب بمقابلہ اثر چھانٹیں',
      cats: ['سبب (کیا بدلا)', 'اثر (کیا ہوا)'],
      items: [
        { t: 'سستا خاردار تار آتا ہے', c: 0 },
        { t: 'ریلوے ٹیکساس پہنچتی ہے', c: 0 },
        { t: 'خشک سالی سے گھاس اور پانی کمیاب ہو جاتے ہیں', c: 0 },
        { t: 'زمین اور پانی دوسروں سے باڑ لگا کر روک دیے جاتے ہیں', c: 1 },
        { t: 'مویشیوں کی پگڈنڈیاں، سڑکیں اور اسکول بند ہو جاتے ہیں', c: 1 },
        { t: 'باڑ کاٹنے کے جھگڑے پھوٹ پڑتے ہیں', c: 1 }
      ],
      takeaway: 'اسباب کو اثرات سے الگ کرنا ہی آپ کی دلیل کے پیچھے تصوراتی نقشہ ہے۔'
    },
    zh: {
      title: '离场：把因与果分类',
      cats: ['因（发生了什么变化）', '果（结果如何）'],
      items: [
        { t: '便宜的带刺铁丝网出现', c: 0 },
        { t: '铁路通到得克萨斯', c: 0 },
        { t: '干旱使草与水变得稀缺', c: 0 },
        { t: '土地和水被围起来、把别人挡在外面', c: 1 },
        { t: '赶牛小道、道路与学校被阻断', c: 1 },
        { t: '剪断围栏的争斗爆发', c: 1 }
      ],
      takeaway: '把因与果分开，就是你论证背后的概念图。'
    } }
  },

  /* ───────── Grade 4 · Fences on the Range 1883 · TRANSFER ───────── */
  {
    id: 'g4-barbed-wire-transfer-entry', grade: 4, unit: 'barbed-wire',
    unitTitle: 'Fences on the Range, 1883 — Who Gets the Land?', phase: 'transfer', type: 'entry',
    format: 'mcq', teks: '§113.15(c)(22)(B)', strat: 'Retrieval practice', d: 0.54,
    i18n: { en: {
      title: 'Warm-up: the problem-solving steps',
      seconds: 45,
      questions: [
        { q: 'The FIRST thing a problem-solver does is…', choices: ['pick a solution', 'define the problem', 'defend a claim'], a: 1 },
        { q: 'Before choosing, a good problem-solver…', choices: ['gathers information & weighs options', 'guesses quickly', 'ignores other stakeholders'], a: 0 },
        { q: 'A person affected by the fence decision — a rancher, farmer, or lawmaker — is a…', choices: ['stakeholder', 'bystander', 'narrator'], a: 0 },
        { q: 'After choosing a solution, the last step is to…', choices: ['forget it', 'evaluate how well it worked', 'hide the trade-offs'], a: 1 }
      ],
      takeaway: 'Define → gather → weigh → decide → defend → evaluate. That is §113.15(c)(22)(B).'
    },
    es: {
      title: 'Calentamiento: los pasos para resolver problemas',
      seconds: 45,
      questions: [
        { q: 'Lo PRIMERO que hace quien resuelve problemas es…', choices: ['elegir una solución', 'definir el problema', 'defender una afirmación'], a: 1 },
        { q: 'Antes de elegir, quien resuelve bien problemas…', choices: ['reúne información y sopesa opciones', 'adivina rápido', 'ignora a otras partes interesadas'], a: 0 },
        { q: 'Una persona afectada por la decisión de las cercas —un ranchero, agricultor o legislador— es una…', choices: ['parte interesada', 'espectadora', 'narradora'], a: 0 },
        { q: 'Después de elegir una solución, el último paso es…', choices: ['olvidarla', 'evaluar qué tan bien funcionó', 'ocultar las concesiones'], a: 1 }
      ],
      takeaway: 'Definir → reunir → sopesar → decidir → defender → evaluar. Eso es §113.15(c)(22)(B).'
    },
    vi: {
      title: 'Khởi động: các bước giải quyết vấn đề',
      seconds: 45,
      questions: [
        { q: 'Điều ĐẦU TIÊN người giải quyết vấn đề làm là…', choices: ['chọn một giải pháp', 'xác định vấn đề', 'bảo vệ một luận điểm'], a: 1 },
        { q: 'Trước khi chọn, người giải quyết vấn đề giỏi sẽ…', choices: ['thu thập thông tin & cân nhắc các phương án', 'đoán nhanh', 'bỏ qua các bên liên quan khác'], a: 0 },
        { q: 'Người bị ảnh hưởng bởi quyết định hàng rào — một chủ trại, nông dân hay nhà lập pháp — là một…', choices: ['bên liên quan', 'người ngoài cuộc', 'người kể chuyện'], a: 0 },
        { q: 'Sau khi chọn một giải pháp, bước cuối cùng là…', choices: ['quên nó đi', 'đánh giá xem nó hiệu quả ra sao', 'giấu đi các đánh đổi'], a: 1 }
      ],
      takeaway: 'Xác định → thu thập → cân nhắc → quyết định → bảo vệ → đánh giá. Đó chính là §113.15(c)(22)(B).'
    },
    ar: {
      title: 'تهيئة: خطوات حل المشكلة',
      seconds: 45,
      questions: [
        { q: 'أول ما يفعله حلّال المشكلات هو…', choices: ['اختيار حل', 'تحديد المشكلة', 'الدفاع عن ادعاء'], a: 1 },
        { q: 'قبل الاختيار، يقوم حلّال المشكلات الجيد بـ…', choices: ['جمع المعلومات وموازنة الخيارات', 'التخمين بسرعة', 'تجاهل أصحاب المصلحة الآخرين'], a: 0 },
        { q: 'الشخص المتأثر بقرار الأسوار — مربّي ماشية أو مزارع أو مشرّع — هو…', choices: ['صاحب مصلحة', 'متفرّج', 'راوٍ'], a: 0 },
        { q: 'بعد اختيار حل، الخطوة الأخيرة هي…', choices: ['أن تنساه', 'أن تقيّم مدى نجاحه', 'أن تخفي المفاضلات'], a: 1 }
      ],
      takeaway: 'حدِّد ← اجمع ← وازِن ← قرِّر ← دافِع ← قيِّم. تلك هي §113.15(c)(22)(B).'
    },
    hi: {
      title: 'वार्म-अप: समस्या-समाधान के चरण',
      seconds: 45,
      questions: [
        { q: 'समस्या हल करने वाला सबसे पहले जो करता है, वह है…', choices: ['एक समाधान चुनना', 'समस्या को परिभाषित करना', 'एक दावे का बचाव करना'], a: 1 },
        { q: 'चुनने से पहले, एक अच्छा समस्या-समाधानकर्ता…', choices: ['जानकारी जुटाता है और विकल्पों को तौलता है', 'जल्दी से अनुमान लगाता है', 'अन्य हितधारकों को अनदेखा करता है'], a: 0 },
        { q: 'बाड़ के निर्णय से प्रभावित व्यक्ति — एक रैंचर, किसान या विधायक — है एक…', choices: ['हितधारक', 'दर्शक', 'कथावाचक'], a: 0 },
        { q: 'समाधान चुनने के बाद, अंतिम चरण है…', choices: ['उसे भूल जाना', 'यह आँकना कि वह कितना अच्छा रहा', 'समझौतों को छिपाना'], a: 1 }
      ],
      takeaway: 'परिभाषित करें → जुटाएँ → तौलें → निर्णय लें → बचाव करें → आँकें। यही §113.15(c)(22)(B) है।'
    },
    ur: {
      title: 'وارم اپ: مسئلہ حل کرنے کے مراحل',
      seconds: 45,
      questions: [
        { q: 'مسئلہ حل کرنے والا سب سے پہلے جو کرتا ہے، وہ ہے…', choices: ['ایک حل چننا', 'مسئلے کو متعین کرنا', 'ایک دعوے کا دفاع کرنا'], a: 1 },
        { q: 'چننے سے پہلے، ایک اچھا مسئلہ حل کرنے والا…', choices: ['معلومات جمع کرتا اور اختیارات تولتا ہے', 'جلدی سے اندازہ لگاتا ہے', 'دوسرے اسٹیک ہولڈرز کو نظرانداز کرتا ہے'], a: 0 },
        { q: 'باڑ کے فیصلے سے متاثر شخص — ایک رینچر، کسان یا قانون ساز — ہے ایک…', choices: ['اسٹیک ہولڈر', 'تماشائی', 'راوی'], a: 0 },
        { q: 'حل چننے کے بعد، آخری مرحلہ ہے…', choices: ['اسے بھول جانا', 'یہ جانچنا کہ وہ کتنا کارگر رہا', 'سمجھوتوں کو چھپانا'], a: 1 }
      ],
      takeaway: 'متعین کریں ← جمع کریں ← تولیں ← فیصلہ کریں ← دفاع کریں ← جانچیں۔ یہی §113.15(c)(22)(B) ہے۔'
    },
    zh: {
      title: '热身：解决问题的步骤',
      seconds: 45,
      questions: [
        { q: '解决问题者首先要做的是…', choices: ['挑选一个方案', '界定问题', '为一个主张辩护'], a: 1 },
        { q: '在做出选择之前，优秀的解决问题者会…', choices: ['收集信息并权衡各种方案', '快速猜测', '无视其他利益相关者'], a: 0 },
        { q: '受围栏决定影响的人——牧场主、农民或立法者——是一位…', choices: ['利益相关者', '旁观者', '叙述者'], a: 0 },
        { q: '选定方案之后，最后一步是…', choices: ['把它忘掉', '评估它的效果如何', '隐藏其中的取舍'], a: 1 }
      ],
      takeaway: '界定 → 收集 → 权衡 → 决定 → 辩护 → 评估。这就是 §113.15(c)(22)(B)。'
    } }
  },
  {
    id: 'g4-barbed-wire-transfer-exit', grade: 4, unit: 'barbed-wire',
    unitTitle: 'Fences on the Range, 1883 — Who Gets the Land?', phase: 'transfer', type: 'exit',
    format: 'cloze', teks: '§113.15(c)(22)(B), (c)(19)(B)', strat: 'Feedback', d: 0.62,
    i18n: { en: {
      title: 'Exit: claim + evidence',
      items: [
        { before: 'A claim without', after: 'is just an opinion.', choices: ['evidence', 'a title', 'a map'], a: 0 },
        { before: 'When two stakeholders disagree, each should support their view with evidence from the', after: '.', choices: ['sources', 'loudest voice', 'weather'], a: 0 },
        { before: 'Naming the', after: 'of your solution shows you thought it all the way through.', choices: ['trade-offs', 'colors', 'vocabulary'], a: 0 }
      ],
      takeaway: 'Claim + evidence + trade-offs = thinking like a historian and a citizen.'
    },
    es: {
      title: 'Salida: afirmación + evidencia',
      items: [
        { before: 'Una afirmación sin', after: 'es solo una opinión.', choices: ['evidencia', 'un título', 'un mapa'], a: 0 },
        { before: 'Cuando dos partes interesadas no están de acuerdo, cada una debe respaldar su postura con evidencia de las', after: '.', choices: ['fuentes', 'voz más alta', 'condiciones del clima'], a: 0 },
        { before: 'Nombrar las', after: 'de tu solución muestra que la pensaste a fondo.', choices: ['concesiones', 'colores', 'vocabulario'], a: 0 }
      ],
      takeaway: 'Afirmación + evidencia + concesiones = pensar como un historiador y un ciudadano.'
    },
    vi: {
      title: 'Phiếu ra: luận điểm + bằng chứng',
      items: [
        { before: 'Một luận điểm không có', after: 'thì chỉ là một ý kiến.', choices: ['bằng chứng', 'một tiêu đề', 'một tấm bản đồ'], a: 0 },
        { before: 'Khi hai bên liên quan bất đồng, mỗi bên nên củng cố quan điểm bằng bằng chứng từ các', after: '.', choices: ['nguồn tài liệu', 'giọng nói to nhất', 'điều kiện thời tiết'], a: 0 },
        { before: 'Nêu ra những', after: 'của giải pháp cho thấy bạn đã cân nhắc kỹ đến cùng.', choices: ['đánh đổi', 'màu sắc', 'từ vựng'], a: 0 }
      ],
      takeaway: 'Luận điểm + bằng chứng + đánh đổi = tư duy như một nhà sử học và một công dân.'
    },
    ar: {
      title: 'الخروج: ادعاء + دليل',
      items: [
        { before: 'الادعاء بلا', after: 'ما هو إلا رأي.', choices: ['دليل', 'عنوان', 'خريطة'], a: 0 },
        { before: 'عندما يختلف صاحبا مصلحة، ينبغي أن يدعم كلٌّ منهما رأيه بأدلة من', after: '.', choices: ['المصادر', 'أعلى صوت', 'أحوال الطقس'], a: 0 },
        { before: 'إن تسمية', after: 'الخاصة بحلّك تُظهر أنك فكّرت فيه حتى النهاية.', choices: ['المفاضلات', 'الألوان', 'المفردات'], a: 0 }
      ],
      takeaway: 'ادعاء + دليل + مفاضلات = التفكير كمؤرّخ ومواطن.'
    },
    hi: {
      title: 'निकास: दावा + साक्ष्य',
      items: [
        { before: 'बिना', after: 'के दावा महज़ एक राय है।', choices: ['साक्ष्य', 'एक शीर्षक', 'एक नक्शा'], a: 0 },
        { before: 'जब दो हितधारक असहमत हों, तो हर एक को अपने विचार का समर्थन साक्ष्य से करना चाहिए', after: 'से।', choices: ['स्रोतों', 'सबसे ऊँची आवाज़', 'मौसम की स्थिति'], a: 0 },
        { before: 'अपने समाधान की', after: 'का नाम लेना दिखाता है कि आपने उसे पूरी तरह सोचा।', choices: ['समझौतों', 'रंगों', 'शब्दावली'], a: 0 }
      ],
      takeaway: 'दावा + साक्ष्य + समझौते = एक इतिहासकार और एक नागरिक की तरह सोचना।'
    },
    ur: {
      title: 'اخراج: دعویٰ + ثبوت',
      items: [
        { before: 'بغیر', after: 'کے دعویٰ محض ایک رائے ہے۔', choices: ['ثبوت', 'ایک عنوان', 'ایک نقشہ'], a: 0 },
        { before: 'جب دو اسٹیک ہولڈرز اختلاف کریں، تو ہر ایک کو اپنے نقطہ نظر کی حمایت ثبوت سے کرنی چاہیے', after: 'سے۔', choices: ['مآخذ', 'بلند ترین آواز', 'موسمی حالات'], a: 0 },
        { before: 'اپنے حل کے', after: 'کا نام لینا ظاہر کرتا ہے کہ آپ نے اسے پوری طرح سوچ کر پرکھا۔', choices: ['سمجھوتوں', 'رنگوں', 'الفاظ'], a: 0 }
      ],
      takeaway: 'دعویٰ + ثبوت + سمجھوتے = ایک مؤرخ اور ایک شہری کی طرح سوچنا۔'
    },
    zh: {
      title: '离场：主张 + 证据',
      items: [
        { before: '没有', after: '的主张只是一种意见。', choices: ['证据', '一个标题', '一张地图'], a: 0 },
        { before: '当两位利益相关者意见不合时，各方都应当用证据来支撑观点，证据来自', after: '。', choices: ['资料', '最大的嗓门', '天气状况'], a: 0 },
        { before: '说出你方案中的', after: '，表明你已经把它彻底想透了。', choices: ['取舍', '颜色', '词汇'], a: 0 }
      ],
      takeaway: '主张 + 证据 + 取舍 = 像史学家和公民一样思考。'
    } }
  }

]);
