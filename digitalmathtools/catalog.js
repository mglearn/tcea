/* Digital Math Tools — shared catalog.
   ---------------------------------------------------------------------------
   One data source for the whole library, consumed by both the top-level hub
   (index.html, BASE = "") and each collection page (e.g. pkk/index.html,
   BASE = "../"). Tool/collection `href` values are RELATIVE TO THIS FILE'S
   FOLDER (the digitalmathtools root); each page prepends its own BASE.

   To add a grade band later (K–2, 3–5, 6–8, 9–12):
     1. Give the band's collection a folder + its own index.html.
     2. Add a `collections[]` entry (set bandId) and its `tools[]`.
     3. Nothing else — the hub and search pick it up automatically.

   English is the source language; the other six widen access.               */
window.MATHTOOLS = (function () {
  "use strict";

  // ---- Grade bands (drives the hub's "Browse by grade band" section) -------
  var bands = [
    { id: "prek-k", order: 1, label: { en: "PreK–K", es: "PreK–Kínder", vi: "Mầm non–Mẫu giáo", ar: "ما قبل الروضة–الروضة", hi: "प्री-के–किंडर", ur: "پری کے–کنڈر", zh: "学前–幼儿园" } },
    { id: "k-2",   order: 2, label: { en: "K–2", es: "K–2", vi: "K–2", ar: "K–2", hi: "K–2", ur: "K–2", zh: "K–2" } },
    { id: "3-5",   order: 3, label: { en: "3–5", es: "3–5", vi: "3–5", ar: "3–5", hi: "3–5", ur: "3–5", zh: "3–5" } },
    { id: "6-8",   order: 4, label: { en: "6–8", es: "6–8", vi: "6–8", ar: "6–8", hi: "6–8", ur: "6–8", zh: "6–8" } },
    { id: "9-12",  order: 5, label: { en: "9–12", es: "9–12", vi: "9–12", ar: "9–12", hi: "9–12", ur: "9–12", zh: "9–12" } }
  ];

  // ---- Collections (a themed set of tools for a band) ----------------------
  var collections = [
    {
      id: "pkk", bandId: "prek-k", icon: "🧸", accent: "#5b3fa5", href: "pkk/index.html",
      name: { en: "PreKindergarten & Kindergarten", es: "Prekínder y Kínder", vi: "Mầm non & Mẫu giáo", ar: "ما قبل الروضة والروضة", hi: "प्री-किंडरगार्टन और किंडरगार्टन", ur: "پری کنڈرگارٹن اور کنڈرگارٹن", zh: "学前班与幼儿园" },
      desc: {
        en: "Five touch-friendly math tools for our youngest learners — counting, adding, shapes, measuring, and sorting.",
        es: "Cinco herramientas matemáticas táctiles para los más pequeños: contar, sumar, figuras, medir y clasificar.",
        vi: "Năm công cụ toán cảm ứng cho các bé nhỏ nhất — đếm, cộng, hình dạng, đo lường và phân loại.",
        ar: "خمس أدوات رياضيات تعمل باللمس لأصغر المتعلمين — العدّ والجمع والأشكال والقياس والفرز.",
        hi: "हमारे सबसे छोटे शिक्षार्थियों के लिए पाँच टच-अनुकूल गणित उपकरण — गिनना, जोड़ना, आकृतियाँ, मापना और छाँटना।",
        ur: "ہمارے سب سے چھوٹے سیکھنے والوں کے لیے پانچ ٹچ دوست ریاضی اوزار — گننا، جمع، اشکال، پیمائش اور چھانٹنا۔",
        zh: "为最年幼的学习者设计的五个触控友好的数学工具——数数、加法、图形、测量和分类。"
      }
    }
  ];

  // ---- Shared tag vocabulary (English key -> per-language label) ------------
  var TAG = {
    "Counting":{en:"Counting",es:"Contar",vi:"Đếm",ar:"العدّ",hi:"गिनती",ur:"گنتی",zh:"数数"},
    "Cardinality":{en:"Cardinality",es:"Cardinalidad",vi:"Số lượng",ar:"العدد الكلي",hi:"संख्या-बोध",ur:"تعداد",zh:"基数"},
    "Subitizing":{en:"Subitizing",es:"Subitación",vi:"Nhận số nhanh",ar:"التعرف السريع",hi:"त्वरित गणना",ur:"فوری شناخت",zh:"快速识数"},
    "Compare":{en:"Compare",es:"Comparar",vi:"So sánh",ar:"المقارنة",hi:"तुलना",ur:"موازنہ",zh:"比较"},
    "Addition":{en:"Addition",es:"Suma",vi:"Phép cộng",ar:"الجمع",hi:"जोड़",ur:"جمع",zh:"加法"},
    "Subtraction":{en:"Subtraction",es:"Resta",vi:"Phép trừ",ar:"الطرح",hi:"घटाव",ur:"تفریق",zh:"减法"},
    "Story problems":{en:"Story problems",es:"Problemas narrados",vi:"Bài toán đố",ar:"مسائل قصصية",hi:"कहानी सवाल",ur:"کہانی کے سوال",zh:"情境题"},
    "Compose":{en:"Compose",es:"Componer",vi:"Ghép số",ar:"التركيب",hi:"रचना",ur:"ترکیب",zh:"组合"},
    "2-D shapes":{en:"2-D shapes",es:"Figuras 2-D",vi:"Hình 2-D",ar:"أشكال ثنائية",hi:"2-D आकृतियाँ",ur:"2-D اشکال",zh:"二维图形"},
    "3-D solids":{en:"3-D solids",es:"Cuerpos 3-D",vi:"Khối 3-D",ar:"مجسمات ثلاثية",hi:"3-D ठोस",ur:"3-D ٹھوس",zh:"三维立体"},
    "Attributes":{en:"Attributes",es:"Atributos",vi:"Thuộc tính",ar:"الخصائص",hi:"गुण",ur:"خصوصیات",zh:"属性"},
    "Length":{en:"Length",es:"Longitud",vi:"Chiều dài",ar:"الطول",hi:"लंबाई",ur:"لمبائی",zh:"长度"},
    "Height":{en:"Height",es:"Altura",vi:"Chiều cao",ar:"الارتفاع",hi:"ऊँचाई",ur:"اونچائی",zh:"高度"},
    "Weight":{en:"Weight",es:"Peso",vi:"Cân nặng",ar:"الوزن",hi:"वज़न",ur:"وزن",zh:"重量"},
    "Capacity":{en:"Capacity",es:"Capacidad",vi:"Dung tích",ar:"السعة",hi:"धारिता",ur:"گنجائش",zh:"容量"},
    "Sort":{en:"Sort",es:"Clasificar",vi:"Phân loại",ar:"الفرز",hi:"छाँटना",ur:"چھانٹنا",zh:"分类"},
    "Classify":{en:"Classify",es:"Categorizar",vi:"Xếp nhóm",ar:"التصنيف",hi:"वर्गीकरण",ur:"درجہ بندی",zh:"归类"},
    "Data":{en:"Data",es:"Datos",vi:"Dữ liệu",ar:"البيانات",hi:"आँकड़े",ur:"ڈیٹا",zh:"数据"},
    "Picture graph":{en:"Picture graph",es:"Pictograma",vi:"Biểu đồ tranh",ar:"رسم بالصور",hi:"चित्र ग्राफ़",ur:"تصویری گراف",zh:"图画图表"}
  };

  // ---- Tools (href relative to the digitalmathtools root) ------------------
  var tools = [
    { id:"count-the-critters", collection:"pkk", bandId:"prek-k", icon:"🐾", accent:"#e8632c",
      title:"Count the Critters", href:"pkk/count-the-critters/index.html",
      tags:["Counting","Cardinality","Subitizing","Compare"],
      kw:"count counting one-to-one correspondence numeral subitize subitizing quantity more fewer same ten-frame animals critters compare how many contar figuras 数数",
      desc:{
        en:"Count animals, match numerals to quantities, subitize small sets, and compare two groups with more, fewer, and same.",
        es:"Cuenta animales, relaciona números con cantidades, reconoce grupos pequeños al instante y compara dos grupos con más, menos e igual.",
        vi:"Đếm con vật, ghép chữ số với số lượng, nhận nhanh nhóm nhỏ, và so sánh hai nhóm với nhiều hơn, ít hơn và bằng nhau.",
        ar:"عُدّ الحيوانات، وطابِق الأرقام مع الكميات، وتعرّف بسرعة على المجموعات الصغيرة، وقارن بين مجموعتين بأكثر وأقل وتساوٍ.",
        hi:"जानवर गिनें, अंकों को मात्रा से मिलाएँ, छोटे समूहों को झट से पहचानें, और दो समूहों की तुलना अधिक, कम और बराबर से करें।",
        ur:"جانور گنیں، اعداد کو مقدار سے ملائیں، چھوٹے گروہوں کو فوراً پہچانیں، اور دو گروہوں کا موازنہ زیادہ، کم اور برابر سے کریں۔",
        zh:"数动物、把数字和数量配对、快速识别小组数量，并用更多、更少和一样多来比较两组。"} },
    { id:"snack-shop-stories", collection:"pkk", bandId:"prek-k", icon:"🍎", accent:"#c0392b",
      title:"Snack Shop Stories", href:"pkk/snack-shop-stories/index.html",
      tags:["Addition","Subtraction","Story problems","Compose"],
      kw:"add addition join joining subtract subtraction separate take away compose decompose make ten story mat snack sum difference suma resta 加法 减法",
      desc:{
        en:"Model addition as joining groups and subtraction as separating groups with story mats, objects, and spoken math stories.",
        es:"Representa la suma como unir grupos y la resta como separar grupos con tapetes de cuentos, objetos e historias matemáticas habladas.",
        vi:"Mô hình phép cộng là gộp nhóm và phép trừ là tách nhóm bằng thảm truyện, đồ vật và câu chuyện toán được đọc lên.",
        ar:"مثّل الجمع كضمّ المجموعات والطرح كفصلها باستخدام حصائر القصص والأشياء وقصص رياضية منطوقة.",
        hi:"कहानी मैट, वस्तुओं और बोली गई गणित कहानियों से जोड़ को समूह मिलाना और घटाव को समूह अलग करना दिखाएँ।",
        ur:"کہانی میٹ، اشیاء اور بولی جانے والی ریاضی کہانیوں سے جمع کو گروہ ملانا اور تفریق کو گروہ الگ کرنا ظاہر کریں۔",
        zh:"用故事垫、实物和口述数学故事，把加法演示为把两组合起来、把减法演示为从一组中拿走。"} },
    { id:"shape-builder-town", collection:"pkk", bandId:"prek-k", icon:"🔷", accent:"#2980b9",
      title:"Shape Builder Town", href:"pkk/shape-builder-town/index.html",
      tags:["2-D shapes","3-D solids","Attributes","Compose"],
      kw:"shape shapes circle triangle square rectangle hexagon solid cube sphere cone cylinder attribute sides corners position above below beside build compose geometry figuras 图形",
      desc:{
        en:"Identify, describe, compare, move, and combine 2-D shapes, and recognize 3-D solids while building houses, robots, and more.",
        es:"Identifica, describe, compara, mueve y combina figuras 2-D, y reconoce cuerpos 3-D mientras construyes casas, robots y más.",
        vi:"Nhận biết, mô tả, so sánh, di chuyển và ghép các hình 2-D, và nhận ra các khối 3-D trong khi xây nhà, rô-bốt và hơn thế nữa.",
        ar:"تعرّف على الأشكال ثنائية الأبعاد وصِفها وقارنها وحرّكها وادمجها، وميّز المجسمات ثلاثية الأبعاد أثناء بناء المنازل والروبوتات والمزيد.",
        hi:"2-D आकृतियों को पहचानें, बताएँ, तुलना करें, हिलाएँ और जोड़ें, और घर, रोबोट आदि बनाते हुए 3-D ठोस पहचानें।",
        ur:"2-D اشکال کو پہچانیں، بیان کریں، موازنہ کریں، حرکت دیں اور ملائیں، اور گھر، روبوٹ وغیرہ بناتے ہوئے 3-D ٹھوس پہچانیں۔",
        zh:"识别、描述、比较、移动并组合二维图形，在搭建房子、机器人等的同时认识三维立体。"} },
    { id:"playground-measurement-quest", collection:"pkk", bandId:"prek-k", icon:"📏", accent:"#16a085",
      title:"Playground Measurement Quest", href:"pkk/playground-measurement-quest/index.html",
      tags:["Length","Height","Weight","Capacity"],
      kw:"measure measurement length longer shorter taller height weight heavier lighter capacity holds more less balance scale cubes nonstandard units compare medir 测量",
      desc:{
        en:"Compare length, height, weight, and capacity; predict, measure with nonstandard units, and try it with real classroom objects.",
        es:"Compara longitud, altura, peso y capacidad; predice, mide con unidades no convencionales y pruébalo con objetos reales del salón.",
        vi:"So sánh chiều dài, chiều cao, cân nặng và dung tích; dự đoán, đo bằng đơn vị không chuẩn, và thử với đồ vật thật trong lớp.",
        ar:"قارن الطول والارتفاع والوزن والسعة؛ توقّع وقِس بوحدات غير معيارية وجرّب ذلك بأشياء حقيقية في الصف.",
        hi:"लंबाई, ऊँचाई, वज़न और धारिता की तुलना करें; अनुमान लगाएँ, अमानक इकाइयों से मापें, और कक्षा की असली चीज़ों से आज़माएँ।",
        ur:"لمبائی، اونچائی، وزن اور گنجائش کا موازنہ کریں؛ اندازہ لگائیں، غیر معیاری اکائیوں سے ناپیں، اور کلاس کی حقیقی چیزوں سے آزمائیں۔",
        zh:"比较长度、高度、重量和容量；预测、用非标准单位测量，并用教室里真实的物品试一试。"} },
    { id:"pet-parade-sort-graph", collection:"pkk", bandId:"prek-k", icon:"📊", accent:"#8e44ad",
      title:"Pet Parade Sort and Graph", href:"pkk/pet-parade-sort-graph/index.html",
      tags:["Sort","Classify","Data","Picture graph"],
      kw:"sort sorting classify category attribute rule count graph picture graph data more fewer equal compare pet parade clasificar 分类 图表",
      desc:{
        en:"Sort objects by attribute, explain the rule, count categories, build a picture graph, and answer questions about the data.",
        es:"Clasifica objetos por atributo, explica la regla, cuenta categorías, crea un pictograma y responde preguntas sobre los datos.",
        vi:"Phân loại đồ vật theo thuộc tính, giải thích quy tắc, đếm các nhóm, lập biểu đồ tranh, và trả lời câu hỏi về dữ liệu.",
        ar:"افرز الأشياء حسب الخاصية، واشرح القاعدة، وعُدّ الفئات، وأنشئ رسمًا بالصور، وأجب عن أسئلة حول البيانات.",
        hi:"वस्तुओं को गुण के अनुसार छाँटें, नियम बताएँ, श्रेणियाँ गिनें, चित्र ग्राफ़ बनाएँ, और आँकड़ों पर सवालों के जवाब दें।",
        ur:"اشیاء کو خصوصیت کے مطابق چھانٹیں، اصول بتائیں، اقسام گنیں، تصویری گراف بنائیں، اور ڈیٹا کے بارے میں سوالوں کے جواب دیں۔",
        zh:"按属性给物品分类、说明规则、数各类别、制作图画图表，并回答关于数据的问题。"} }
  ];

  return { bands: bands, collections: collections, tools: tools, TAG: TAG };
})();
