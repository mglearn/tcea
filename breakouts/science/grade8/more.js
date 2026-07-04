/* Grade 8 "More" — short single-concept Critical Thinking Online Breakouts, one per
   key TEKS concept (§112.28). The player (play.html) merges MORE_BASE_UI with each
   entry's ui overrides and hands the result to the shared engine. 6 clues (1 decoy)
   + 4 locks (seq/mc/multi/word); each reason names the thinking move. */
window.MORE_BASE_UI = {
  en: {
    "sect.clues": "🔍 The Evidence",
    "sect.cluesHint": "Tap each piece of evidence to read it. (You can reopen them anytime.)",
    "sect.locks": "🔒 The Locks",
    "sect.locksHint": "Solve each lock using only the evidence above.",
    "crumb.teacher": "‹ More Grade 8 breakouts",
    "crumb.suite": "Grade 8 Science",
    "ui.reset": "↺ Reset", "ui.check": "Check", "ui.gotit": "Got it", "ui.playagain": "Play Again",
    "ui.solved": "🔓 Solved!", "ui.pcount": "{n} of {total} locks open",
    "ui.wordph": "Type your answer", "ui.clear": "clear",
    "fb.digit": "That number doesn't match the evidence. Check again.",
    "fb.word": "Check the evidence for the word that fits.",
    "fb.mc": "That one isn't supported by the evidence. Look again.",
    "fb.multiExtra": "One pick isn't strong evidence. Strong means what the evidence actually proves.",
    "fb.multiMissing": "You're missing a piece of strong evidence. Find them all.",
    "fb.seq": "That order doesn't match the evidence. Try again.",
    "footer.privacy": "Privacy & compliance", "footer.text": "Grade 8 Science · Critical Thinking Online Breakouts · Runs entirely in your browser — no logins, no data collected.",
    "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.28, Grade 8). Good-faith paraphrase; confirm before adoption.",
    "header.eyebrow": "Grade 8 Science · Quick Concept Breakout",
    "brief.label": "🎯 Warm-Up"
  }
};

window.MORE = {

 "classify-matter": {
  id: "sci8-classify-matter", teks: "8.6(A)", concept: "Classifying Matter",
  ui: {
   h1: "Classify the Matter", sub: "Element, compound, or mixture? Read the evidence and open all four locks.",
   briefH: "Model the matter", briefP: "All matter can be sorted by how its atoms are put together. Use the evidence to model and classify elements, compounds, and mixtures.",
   winStamp: "MATTER CLASSIFIED ✓", winH: "Matter master!", winP: "You ordered matter by how it's joined, spotted a compound, and showed air is a mixture. How atoms connect is what tells element from compound from mixture."
  },
  clues: [
   {id:"c1",ico:"🔵",nm:"Element",title:"Elements",body:"An element is made of only ONE kind of atom, like copper or oxygen. A model shows all identical particles."},
   {id:"c2",ico:"🔗",nm:"Compound",title:"Compounds",body:"A compound is two or more DIFFERENT atoms chemically joined in a fixed ratio, like table salt (NaCl). A model shows different atoms bonded together."},
   {id:"c3",ico:"🥗",nm:"Mixture",title:"Mixtures",body:"A mixture is substances physically mixed but NOT chemically joined. Its parts keep their own properties and can be separated. A model shows separate particles side by side."},
   {id:"c4",ico:"🖼️",nm:"Models",title:"Reading Models",body:"Particle diagrams reveal the type: all-same = element; joined-different = compound; mixed-but-separate = mixture."},
   {id:"c5",ico:"💨",nm:"Example",title:"Air & Salt",body:"Air is a mixture of gases (nitrogen, oxygen, and more) that can be separated. Table salt (NaCl) is a compound of joined sodium and chlorine atoms."},
   {id:"c6",ico:"🎢",nm:"Ride Fact",title:"A Roller-Coaster Fact",body:"The fastest roller coaster reaches over 149 miles per hour. It's a true, thrilling fact — but it won't help you classify matter."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#3b46b5",title:"Order the Models",q:"Order these from all-identical atoms to fully mixed-but-separate. Tap the pads in order.",
    pads:[{k:"mix",e:"🥗 Mixture (separate)",c:"#e0533a"},{k:"elem",e:"🔵 Element (all same)",c:"#2f8fd0"},{k:"comp",e:"🔗 Compound (joined types)",c:"#0a8a5f"}],
    answer:["elem","comp","mix"],reason:"An element is one kind of atom, a compound joins different atoms, and a mixture just blends them. Modeling the particles is how we classify matter."},
   {id:"L2",type:"mc",color:"#2f8fd0",title:"Spot the Compound",q:"Which of these is a compound?",
    options:["Oxygen gas (O₂) — one kind of atom.","Table salt (NaCl) — two different atoms chemically joined.","Air — several gases mixed together."],
    answerIndex:1,reason:"A compound is different atoms chemically joined in a fixed ratio. Oxygen gas is an element; air is a mixture."},
   {id:"L3",type:"multi",color:"#e0533a",title:"Air Is a Mixture",q:"Check ONLY the strong evidence that air is a mixture. Leave out the true-but-off-topic fact.",
    items:[{t:"It contains several different gases blended together.",strong:true},{t:"The gases are not chemically joined — each keeps its properties.",strong:true},{t:"The gases can be separated by physical means.",strong:true},{t:"The fastest roller coaster tops 149 miles per hour.",strong:false}],
    reason:"Several unjoined, separable substances make air a mixture. The roller-coaster fact is true but off-topic."},
   {id:"L4",type:"word",color:"#0a8a5f",title:"Name the Blend",q:"Substances physically blended but not chemically joined (like air) form a ____. Type the word.",
    answer:["mixture","mezcla"],reason:"A mixture is physically blended, not chemically joined. Naming the category is how scientists classify matter."}
  ]
 },

 "acids-bases": {
  id: "sci8-acids-bases", teks: "8.6(D)", concept: "Acids & Bases",
  ui: {
   h1: "Acids & Bases", sub: "Sour or slippery? Read the pH evidence and open all four locks.",
   briefH: "Test the pH", briefP: "The pH scale sorts substances from acidic to basic, with water in the middle. Use the evidence to read pH and tell acids from bases.",
   winStamp: "pH TESTED ✓", winH: "pH pro!", winP: "You lined substances up by pH, identified an acid, and named water's spot on the scale. pH below 7 is acidic, above 7 is basic, and 7 is neutral."
  },
  clues: [
   {id:"c1",ico:"🌡️",nm:"pH Scale",title:"The pH Scale",body:"The pH scale runs from 0 to 14. It measures how acidic or basic a solution is."},
   {id:"c2",ico:"🍋",nm:"Acids",title:"Acids",body:"Acids have a pH BELOW 7. They often taste sour (lemon juice, vinegar) and turn litmus paper red."},
   {id:"c3",ico:"🧼",nm:"Bases",title:"Bases",body:"Bases have a pH ABOVE 7. They often feel slippery (soap, baking soda) and turn litmus paper blue."},
   {id:"c4",ico:"💧",nm:"Neutral",title:"Neutral Water",body:"Pure water has a pH of 7 — exactly in the middle. It is neither acidic nor basic; it is neutral."},
   {id:"c5",ico:"🧪",nm:"Indicators",title:"Indicators",body:"An indicator like litmus paper reveals pH by changing color: red for acids, blue for bases."},
   {id:"c6",ico:"🦈",nm:"Ocean Fact",title:"A Shark Fact",body:"Some sharks can detect a single drop of blood in an Olympic-size pool of water. It's a true, striking fact — but it won't help you read pH."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#3b46b5",title:"Order by pH",q:"Order these from the LOWEST pH (most acidic) to the HIGHEST (most basic). Tap the pads in order.",
    pads:[{k:"soap",e:"🧼 Soap (pH 10)",c:"#0a8a5f"},{k:"lemon",e:"🍋 Lemon juice (pH 2)",c:"#e0533a"},{k:"water",e:"💧 Water (pH 7)",c:"#2f8fd0"}],
    answer:["lemon","water","soap"],reason:"Lemon juice is acidic (low pH), water is neutral (7), and soap is basic (high pH). Ordering by pH is how we compare acids and bases."},
   {id:"L2",type:"mc",color:"#2f8fd0",title:"Acid or Base?",q:"A solution has a pH of 3. What is it?",
    options:["A base — above 7.","An acid — below 7.","Neutral — exactly 7."],
    answerIndex:1,reason:"A pH below 7 means acidic. Above 7 is basic and exactly 7 is neutral."},
   {id:"L3",type:"multi",color:"#e0533a",title:"Vinegar Is an Acid",q:"Check ONLY the strong evidence that vinegar is an acid. Leave out the true-but-off-topic fact.",
    items:[{t:"Its pH is below 7.",strong:true},{t:"It tastes sour.",strong:true},{t:"It turns litmus paper red.",strong:true},{t:"Some sharks can detect a drop of blood in a huge pool.",strong:false}],
    reason:"Low pH, sour taste, and red litmus all mark an acid. The shark fact is true but off-topic."},
   {id:"L4",type:"word",color:"#0a8a5f",title:"Name Water's pH",q:"Pure water has a pH of 7 — neither acidic nor basic. That middle point is called ____. Type the word.",
    answer:["neutral","neutro","neutra"],reason:"A pH of 7 is neutral. Naming the middle of the scale anchors acids on one side and bases on the other."}
  ]
 },

 "conservation-mass": {
  id: "sci8-conservation-mass", teks: "8.6(E)", concept: "Conservation of Mass",
  ui: {
   h1: "Conservation of Mass", sub: "Where does the mass go when things react or burn? Read the evidence and open all four locks.",
   briefH: "Follow every atom", briefP: "In a chemical reaction, atoms are only rearranged — so mass is never lost. Use the evidence to prove it, even when it looks like mass disappeared.",
   winStamp: "MASS ACCOUNTED ✓", winH: "Nothing lost!", winP: "You proved mass holds in a sealed reaction and explained the burning-log trick. Atoms only rearrange, so the total mass before always equals the mass after."
  },
  clues: [
   {id:"c1",ico:"⚛️",nm:"Atoms Rearrange",title:"Atoms Rearrange",body:"In a chemical reaction, atoms are only rearranged into new substances — never created or destroyed."},
   {id:"c2",ico:"⚖️",nm:"Mass Holds",title:"Mass Is Conserved",body:"Because every atom is still there, the total mass of the reactants equals the total mass of the products."},
   {id:"c3",ico:"🔒",nm:"Sealed",title:"Sealed Systems",body:"In a sealed container, nothing can enter or leave — so the scale reads the same mass before and after the reaction."},
   {id:"c4",ico:"🟰",nm:"Balanced",title:"Balanced Equations",body:"A balanced chemical equation has the SAME number of each kind of atom on both sides — a picture of conservation of mass."},
   {id:"c5",ico:"🪵",nm:"Burning Log",title:"The Burning Log",body:"A log seems to lose mass as it burns, but the 'missing' mass leaves as gases and smoke. Capture those gases and the mass is unchanged."},
   {id:"c6",ico:"🎻",nm:"Music Fact",title:"A Violin Fact",body:"A violin has about 70 separate parts. It's a true, neat fact — but it won't help you account for mass in a reaction."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#3b46b5",title:"Prove It",q:"Order the steps that prove mass is conserved in a sealed reaction. Tap the pads in order.",
    pads:[{k:"after",e:"⚖️ Weigh again: same mass",c:"#0a8a5f"},{k:"before",e:"⚖️ Weigh the sealed reactants",c:"#e0533a"},{k:"react",e:"⚛️ Atoms rearrange (none escape)",c:"#2f8fd0"}],
    answer:["before","react","after"],reason:"Weigh the sealed reactants, let the atoms rearrange with nothing escaping, and weigh again — the mass is unchanged. That's conservation of mass."},
   {id:"L2",type:"mc",color:"#2f8fd0",title:"The Vanishing Log",q:"A burning log seems to lose mass. Why?",
    options:["Mass is destroyed by the fire.","The 'missing' mass leaves as gases and smoke — in a sealed system it would stay the same.","The atoms simply disappear."],
    answerIndex:1,reason:"Mass isn't destroyed — it escapes as gas and smoke. Trap those gases and the total mass is unchanged."},
   {id:"L3",type:"multi",color:"#e0533a",title:"Sealed and Steady",q:"Check ONLY the strong evidence that mass is conserved in a sealed reaction. Leave out the true-but-off-topic fact.",
    items:[{t:"The scale reads the same before and after.",strong:true},{t:"Atoms are only rearranged, not created or destroyed.",strong:true},{t:"The sealed container lets nothing enter or leave.",strong:true},{t:"A violin has about 70 separate parts.",strong:false}],
    reason:"Same mass, rearranged atoms, and a sealed system prove conservation. The violin fact is true but off-topic."},
   {id:"L4",type:"word",color:"#0a8a5f",title:"Name the Law",q:"In a reaction, mass is neither made nor lost — it is ____. Type the word.",
    answer:["conserved","conservada","conservado"],reason:"Mass is conserved because atoms only rearrange. Naming the law is what explains the 'missing' mass."}
  ]
 },

 "newtons-laws": {
  id: "sci8-newtons-laws", teks: "8.7", concept: "Newton's Laws",
  ui: {
   h1: "Newton's Laws in Action", sub: "Inertia, F = ma, and equal-and-opposite — read the evidence and open all four locks.",
   briefH: "See the three laws", briefP: "Newton's three laws explain almost every motion around you. Use the evidence to watch all three at work in one kick of a ball.",
   winStamp: "LAWS IN ACTION ✓", winH: "Physics pro!", winP: "You put the three laws in order, explained why you lurch when a car stops, and named inertia. Together, Newton's laws describe how forces change motion."
  },
  clues: [
   {id:"c1",ico:"🛑",nm:"First Law",title:"First Law (Inertia)",body:"An object stays at rest, or keeps moving the same way, unless an unbalanced force acts on it. This resistance to change is inertia."},
   {id:"c2",ico:"🚀",nm:"Second Law",title:"Second Law (F = ma)",body:"Acceleration = net force ÷ mass. More force gives more acceleration; more mass gives less acceleration."},
   {id:"c3",ico:"🔁",nm:"Third Law",title:"Third Law (Pairs)",body:"For every force there is an equal and opposite force on the OTHER object. Push on something and it pushes back."},
   {id:"c4",ico:"🚗",nm:"Together",title:"All Three at Once",body:"In a car crash the laws act together: your body keeps moving (1st), the belt's force stops you (2nd), and you push on the belt as it pushes on you (3rd)."},
   {id:"c5",ico:"⚽",nm:"Example",title:"A Kicked Ball",body:"A still ball waits (1st law), a harder kick gives more acceleration (2nd law), and your foot feels the ball push back (3rd law)."},
   {id:"c6",ico:"🐌",nm:"Snail Fact",title:"A Snail Fact",body:"A snail can sleep for up to three years in the right conditions. It's a true, odd fact — but it won't help you apply Newton's laws."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#3b46b5",title:"One Kick, Three Laws",q:"Order how the three laws appear as you kick a ball. Tap the pads in order.",
    pads:[{k:"third",e:"🔁 The ball pushes back on your foot",c:"#0a8a5f"},{k:"first",e:"🛑 The ball waits, still, until kicked",c:"#e0533a"},{k:"second",e:"🚀 A harder kick = more acceleration",c:"#2f8fd0"}],
    answer:["first","second","third"],reason:"The ball waits (1st law), accelerates from the force (2nd law), and pushes back on your foot (3rd law). One kick shows all three."},
   {id:"L2",type:"mc",color:"#2f8fd0",title:"The Sudden Stop",q:"Why do you lurch forward when a car stops suddenly?",
    options:["A force pushes you forward.","Inertia — your body keeps moving until a force stops it (Newton's First Law).","Gravity pulls you forward."],
    answerIndex:1,reason:"Your body keeps moving because of inertia until the belt provides a force to stop you — that's Newton's First Law."},
   {id:"L3",type:"multi",color:"#e0533a",title:"Why Seatbelts Work",q:"Check ONLY the strong evidence that a seatbelt is about Newton's First Law. Leave out the true-but-off-topic fact.",
    items:[{t:"Your body keeps moving forward when the car suddenly stops.",strong:true},{t:"Inertia means motion doesn't change without a force.",strong:true},{t:"The belt provides the force that stops your body.",strong:true},{t:"A snail can sleep for up to three years.",strong:false}],
    reason:"Inertia keeps you moving until the belt's force stops you — the First Law. The snail fact is true but off-topic."},
   {id:"L4",type:"word",color:"#0a8a5f",title:"Name the Resistance",q:"An object's resistance to a change in its motion, described by Newton's First Law, is called ____. Type the word.",
    answer:["inertia","inercia"],reason:"Inertia is the tendency to resist a change in motion. Naming it is the heart of Newton's First Law."}
  ]
 },

 "waves": {
  id: "sci8-waves", teks: "8.8", concept: "Waves & the EM Spectrum",
  ui: {
   h1: "Anatomy of a Wave", sub: "Amplitude, wavelength, frequency — and the whole EM spectrum. Read the evidence and open all four locks.",
   briefH: "Measure the wave", briefP: "Waves are described by a few key measurements, and electromagnetic waves span from radio to X-rays. Use the evidence to read a wave and sort the spectrum.",
   winStamp: "WAVE MEASURED ✓", winH: "Wave expert!", winP: "You ordered the EM spectrum, read amplitude as energy, and saw why higher frequency means shorter wavelength. A wave's numbers tell its whole story."
  },
  clues: [
   {id:"c1",ico:"📏",nm:"Amplitude",title:"Amplitude",body:"Amplitude is the height of a wave. A bigger amplitude means the wave carries more energy."},
   {id:"c2",ico:"↔️",nm:"Wavelength",title:"Wavelength",body:"Wavelength is the distance from one crest to the next. Radio waves are long; X-rays are very short."},
   {id:"c3",ico:"🔁",nm:"Frequency",title:"Frequency",body:"Frequency is how many waves pass each second. Since EM waves travel at one fixed speed, higher frequency means shorter wavelength."},
   {id:"c4",ico:"🌈",nm:"EM Spectrum",title:"The EM Spectrum",body:"The electromagnetic spectrum runs from long-wavelength radio waves, through visible light, to short-wavelength X-rays — all traveling at the speed of light."},
   {id:"c5",ico:"📡",nm:"Uses",title:"EM at Work",body:"Radio and Wi-Fi carry signals, microwaves heat food, X-rays image bones, and ultraviolet light can sterilize."},
   {id:"c6",ico:"🐆",nm:"Speed Fact",title:"A Cheetah Fact",body:"A cheetah can accelerate faster than most sports cars. It's a true fact about speed — but it isn't about wave measurements."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#3b46b5",title:"Sort the Spectrum",q:"Order these electromagnetic waves from the LONGEST wavelength to the SHORTEST. Tap the pads in order.",
    pads:[{k:"xray",e:"☢️ X-rays",c:"#e0533a"},{k:"radio",e:"📻 Radio waves",c:"#2f8fd0"},{k:"light",e:"🌈 Visible light",c:"#0a8a5f"}],
    answer:["radio","light","xray"],reason:"Radio waves are longest, visible light is in the middle, and X-rays are shortest. Ordering by wavelength maps the EM spectrum."},
   {id:"L2",type:"mc",color:"#2f8fd0",title:"What Does Amplitude Tell You?",q:"What does a wave's amplitude tell you?",
    options:["How much energy it carries — taller means more.","How fast it travels.","How many waves pass per second."],
    answerIndex:0,reason:"Amplitude is the wave's height and shows its energy. Speed and count are different measurements."},
   {id:"L3",type:"multi",color:"#e0533a",title:"Frequency vs. Wavelength",q:"Check ONLY the strong evidence that higher frequency means shorter wavelength. Leave out the true-but-off-topic fact.",
    items:[{t:"EM waves all travel at one fixed speed (the speed of light).",strong:true},{t:"More waves per second must fit into the same distance.",strong:true},{t:"So each wave is squeezed shorter.",strong:true},{t:"A cheetah accelerates faster than most sports cars.",strong:false}],
    reason:"At a fixed speed, more waves per second means each is shorter. The cheetah fact is true but off-topic."},
   {id:"L4",type:"word",color:"#0a8a5f",title:"Name the Height",q:"The height of a wave — the measurement that shows its energy — is its ____. Type the word.",
    answer:["amplitude","amplitud"],reason:"Amplitude is a wave's height and its energy. Naming each measurement lets us describe any wave."}
  ]
 },

 "stars-universe": {
  id: "sci8-stars-universe", teks: "8.9", concept: "Stars & the Universe",
  ui: {
   h1: "Stars & Galaxies", sub: "How stars live and how the universe is built — read the evidence and open all four locks.",
   briefH: "Zoom out to the cosmos", briefP: "Stars are born, shine, and die, and they gather into galaxies. Use the evidence to trace a star's life and place Earth in the universe.",
   winStamp: "COSMOS CHARTED ✓", winH: "Astronomer!", winP: "You traced a star's life, named the Milky Way's shape, and found the evidence for an expanding universe. From a gas cloud to galaxies, the universe is always changing."
  },
  clues: [
   {id:"c1",ico:"☁️",nm:"Nebula",title:"Stars Are Born",body:"A star begins in a nebula — a giant cloud of gas and dust that gravity pulls together until it ignites."},
   {id:"c2",ico:"⭐",nm:"Star Life",title:"Stars Live and Die",body:"A star shines for a long time, then runs out of fuel and dies. Its size decides how it ends."},
   {id:"c3",ico:"📊",nm:"H-R Diagram",title:"The H-R Diagram",body:"The Hertzsprung-Russell (H-R) diagram sorts stars by their brightness and temperature, helping scientists compare and classify them."},
   {id:"c4",ico:"🌌",nm:"Galaxies",title:"Galaxies",body:"Galaxies come in shapes — spiral, elliptical, and irregular. Our solar system sits inside the spiral Milky Way galaxy."},
   {id:"c5",ico:"💥",nm:"Expanding",title:"An Expanding Universe",body:"Distant galaxies are moving away from us, and their light is shifted redward. This evidence supports the Big Bang theory of the universe's origin."},
   {id:"c6",ico:"🧀",nm:"Moon Fact",title:"A Moon Fact",body:"The idea that the Moon is made of cheese is an old folk tale, not science. It's a fun bit of folklore — but it won't help you study real stars."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#3b46b5",title:"A Star's Life",q:"Order the stages of a star's life. Tap the pads in order.",
    pads:[{k:"die",e:"💥 The star dies",c:"#e0533a"},{k:"nebula",e:"☁️ Nebula (gas cloud)",c:"#2f8fd0"},{k:"shine",e:"⭐ The star shines",c:"#0a8a5f"}],
    answer:["nebula","shine","die"],reason:"A star forms from a nebula, shines for ages, then dies. Ordering the life cycle is how we understand stars change over time."},
   {id:"L2",type:"mc",color:"#2f8fd0",title:"Our Galaxy's Shape",q:"The Milky Way, the galaxy that holds our solar system, is what shape?",
    options:["An elliptical galaxy.","A spiral galaxy.","An irregular galaxy."],
    answerIndex:1,reason:"The Milky Way is a spiral galaxy, and our solar system sits within one of its arms."},
   {id:"L3",type:"multi",color:"#e0533a",title:"An Expanding Universe",q:"Check ONLY the strong evidence that the universe is expanding. Leave out the true-but-off-topic fact.",
    items:[{t:"Distant galaxies are moving away from us.",strong:true},{t:"Their light is shifted toward the red end of the spectrum.",strong:true},{t:"This evidence supports the Big Bang theory.",strong:true},{t:"An old tale says the Moon is made of cheese.",strong:false}],
    reason:"Galaxies moving away with redshifted light support an expanding universe. The cheese tale is folklore, not evidence."},
   {id:"L4",type:"word",color:"#0a8a5f",title:"Name the Star Nursery",q:"The giant cloud of gas and dust where a star is born is a ____. Type the word.",
    answer:["nebula","nebulae","nebulosa"],reason:"A nebula is a star's birthplace. Naming the stage anchors the star life cycle."}
  ]
 },

 "weather-climate": {
  id: "sci8-weather-climate", teks: "8.10", concept: "Weather Systems",
  ui: {
   h1: "Weather Systems", sub: "What drives our weather, and how is climate different? Read the evidence and open all four locks.",
   briefH: "Track the weather", briefP: "The Sun's energy, the ocean, and the atmosphere work together to make weather. Use the evidence to see how a storm forms and how weather differs from climate.",
   winStamp: "FORECAST IN ✓", winH: "Weather watcher!", winP: "You traced how a cyclone forms, told weather from climate, and saw the Sun as the engine. Energy from the Sun, moving through air and ocean, drives all our weather."
  },
  clues: [
   {id:"c1",ico:"☀️",nm:"The Engine",title:"The Sun Drives Weather",body:"The Sun heats Earth's surface unevenly. That uneven heating moves air and water, which drives our weather."},
   {id:"c2",ico:"📅",nm:"Weather vs. Climate",title:"Weather vs. Climate",body:"Weather is what's happening day to day. Climate is the average of weather over many years in a place."},
   {id:"c3",ico:"🌬️",nm:"Air Masses",title:"Moving Air",body:"Global wind patterns push air masses around the planet. Where warm and cold air masses meet, storms form."},
   {id:"c4",ico:"🌀",nm:"Cyclones",title:"Tropical Cyclones",body:"Warm ocean water plus rising moist air can grow into a spinning tropical cyclone — a hurricane or typhoon."},
   {id:"c5",ico:"🌊",nm:"Currents",title:"Ocean Currents",body:"Ocean currents carry heat around the globe, warming or cooling the regions they pass and shaping weather."},
   {id:"c6",ico:"🦗",nm:"Bug Fact",title:"A Cricket Fact",body:"You can estimate the temperature by counting a cricket's chirps. It's a true, quirky fact — but it isn't how weather systems form."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#3b46b5",title:"How a Cyclone Forms",q:"Order how a tropical cyclone forms. Tap the pads in order.",
    pads:[{k:"spin",e:"🌀 The storm spins into a cyclone",c:"#e0533a"},{k:"warm",e:"🌊 Warm ocean water heats the air",c:"#2f8fd0"},{k:"rise",e:"⬆️ Warm, moist air rises",c:"#0a8a5f"}],
    answer:["warm","rise","spin"],reason:"Warm ocean water heats the air, the moist air rises, and the system spins into a cyclone. Tracing the cause-and-effect chain explains the storm."},
   {id:"L2",type:"mc",color:"#2f8fd0",title:"Weather or Climate?",q:"What's the difference between weather and climate?",
    options:["They mean the same thing.","Weather is day-to-day; climate is the long-term average.","Climate is today's forecast; weather is the yearly average."],
    answerIndex:1,reason:"Weather is short-term and changes daily; climate is the long-term average of a region's weather."},
   {id:"L3",type:"multi",color:"#e0533a",title:"The Sun Drives Weather",q:"Check ONLY the strong evidence that the Sun drives Earth's weather. Leave out the true-but-off-topic fact.",
    items:[{t:"The Sun heats Earth's surface unevenly.",strong:true},{t:"That heat makes air and water rise and move.",strong:true},{t:"Moving air and water create wind and weather.",strong:true},{t:"You can estimate temperature by counting cricket chirps.",strong:false}],
    reason:"Uneven solar heating moving air and water is what drives weather. The cricket fact is true but off-topic."},
   {id:"L4",type:"word",color:"#0a8a5f",title:"Name the Long-Term Pattern",q:"The average of a region's weather over many years is its ____. Type the word.",
    answer:["climate","clima"],reason:"Climate is the long-term average; weather is day to day. Telling them apart is a key Earth-science idea."}
  ]
 },

 "carbon-cycle": {
  id: "sci8-carbon-cycle", teks: "8.11", concept: "Carbon & Climate",
  ui: {
   h1: "Carbon & Climate", sub: "How does carbon move, and how does it change the climate? Read the evidence and open all four locks.",
   briefH: "Follow the carbon", briefP: "Carbon cycles among the air, living things, the ocean, and the ground — and extra carbon dioxide warms the planet. Use the evidence to trace it.",
   winStamp: "CARBON TRACED ✓", winH: "Climate scientist!", winP: "You followed carbon through the cycle, tied fossil fuels to warming, and named the element. Carbon moves in a cycle, and adding extra CO₂ traps more heat."
  },
  clues: [
   {id:"c1",ico:"🔄",nm:"Carbon Cycle",title:"The Carbon Cycle",body:"Carbon moves in a cycle among the air (as CO₂), living things, the ocean, and rocks and fossil fuels."},
   {id:"c2",ico:"🌳",nm:"In and Out",title:"Plants In, Breath Out",body:"Plants take in carbon dioxide during photosynthesis. Breathing, decay, and burning release carbon dioxide back to the air."},
   {id:"c3",ico:"🌡️",nm:"Greenhouse",title:"Trapping Heat",body:"Carbon dioxide is a greenhouse gas: extra CO₂ in the air traps more heat and warms the climate."},
   {id:"c4",ico:"🏭",nm:"Human Impact",title:"Human Activity",body:"Burning fossil fuels and clearing forests add extra carbon dioxide to the air, raising its concentration."},
   {id:"c5",ico:"🌋",nm:"Natural Events",title:"Natural Events",body:"Natural events, like large volcanic eruptions, can also change the climate by releasing gases and particles."},
   {id:"c6",ico:"🦜",nm:"Bird Fact",title:"A Parrot Fact",body:"Some parrots can live for more than 60 years. It's a true, remarkable fact — but it won't help you trace the carbon cycle."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#3b46b5",title:"Follow the Carbon",q:"Order one trip carbon takes through the cycle. Tap the pads in order.",
    pads:[{k:"back",e:"💨 Released back to the air by breathing",c:"#e0533a"},{k:"air",e:"☁️ Carbon dioxide in the air",c:"#2f8fd0"},{k:"plant",e:"🌳 Taken in by a plant (photosynthesis)",c:"#0a8a5f"}],
    answer:["air","plant","back"],reason:"CO₂ in the air is taken in by plants, then released again by breathing and decay. Tracing the loop shows carbon is recycled, not used up."},
   {id:"L2",type:"mc",color:"#2f8fd0",title:"Fossil Fuels & Climate",q:"How does burning fossil fuels affect the climate?",
    options:["It removes carbon dioxide from the air.","It adds carbon dioxide, which traps more heat and warms the climate.","It has no effect on climate."],
    answerIndex:1,reason:"Burning fossil fuels releases CO₂, a greenhouse gas that traps heat and warms the climate."},
   {id:"L3",type:"multi",color:"#e0533a",title:"Humans Add Carbon",q:"Check ONLY the strong evidence that human activity adds carbon dioxide to the air. Leave out the true-but-off-topic fact.",
    items:[{t:"Burning fossil fuels releases carbon dioxide.",strong:true},{t:"Clearing forests removes trees that would absorb CO₂.",strong:true},{t:"Both raise the amount of CO₂ in the atmosphere.",strong:true},{t:"Some parrots live more than 60 years.",strong:false}],
    reason:"Burning fuels and clearing forests both raise atmospheric CO₂. The parrot fact is true but off-topic."},
   {id:"L4",type:"word",color:"#0a8a5f",title:"Name the Element",q:"The element that cycles through air, living things, ocean, and rock — and warms the climate as CO₂ — is ____. Type the word.",
    answer:["carbon","carbono"],reason:"Carbon is the element at the center of the cycle. Naming it connects living things, the air, and the climate."}
  ]
 },

 "ecosystems-change": {
  id: "sci8-ecosystems-change", teks: "8.12", concept: "Change in Ecosystems",
  ui: {
   h1: "Change in Ecosystems", sub: "How do ecosystems recover and stay healthy? Read the evidence and open all four locks.",
   briefH: "Watch it recover", briefP: "Ecosystems change after disturbances, and their variety of life helps them bounce back. Use the evidence to trace succession and see why biodiversity matters.",
   winStamp: "ECOSYSTEM READ ✓", winH: "Ecologist!", winP: "You ordered how life returns after a fire, saw why variety keeps an ecosystem stable, and named it. Biodiversity is what helps an ecosystem survive change."
  },
  clues: [
   {id:"c1",ico:"🕸️",nm:"Food Webs",title:"Food Webs Connect",body:"In a food web, energy flows between many species. Removing one species can ripple through and disrupt the whole web."},
   {id:"c2",ico:"🌱",nm:"Succession",title:"Ecological Succession",body:"Succession is how a community rebuilds after change. Primary succession starts on bare rock with no soil; secondary succession follows a disturbance where soil remains."},
   {id:"c3",ico:"🔥",nm:"After a Fire",title:"Secondary Succession",body:"After a fire, secondary succession is fast because the soil survives: weeds and grasses return first, then shrubs and trees."},
   {id:"c4",ico:"🦋",nm:"Biodiversity",title:"Biodiversity",body:"Biodiversity is the variety of living things. More biodiversity makes an ecosystem more stable and better able to recover from disturbances."},
   {id:"c5",ico:"🌊",nm:"Disturbances",title:"Disturbances",body:"Fires, floods, and human activity are disturbances that change which populations live in an ecosystem."},
   {id:"c6",ico:"🐙",nm:"Sea Fact",title:"An Octopus Fact",body:"An octopus can change color in a fraction of a second. It's a true, amazing fact — but it won't help you explain succession."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#3b46b5",title:"Life Returns",q:"Order how a forest recovers by secondary succession after a fire. Tap the pads in order.",
    pads:[{k:"trees",e:"🌲 Shrubs and trees return",c:"#e0533a"},{k:"fire",e:"🔥 A fire clears the area (soil remains)",c:"#2f8fd0"},{k:"grass",e:"🌱 Weeds and grasses grow first",c:"#0a8a5f"}],
    answer:["fire","grass","trees"],reason:"After a fire the soil survives, so grasses return first, then shrubs and trees. Ordering succession shows how an ecosystem recovers."},
   {id:"L2",type:"mc",color:"#2f8fd0",title:"Why Variety Matters",q:"How does high biodiversity affect an ecosystem?",
    options:["It makes the ecosystem more stable and better able to recover.","It makes the ecosystem weaker.","It has no effect on stability."],
    answerIndex:0,reason:"More biodiversity gives an ecosystem more ways to adapt, making it more stable and resilient."},
   {id:"L3",type:"multi",color:"#e0533a",title:"Primary vs. Secondary",q:"Check ONLY the strong evidence that distinguishes primary from secondary succession. Leave out the true-but-off-topic fact.",
    items:[{t:"Primary succession starts on bare rock with no soil.",strong:true},{t:"Secondary succession follows a disturbance where soil remains.",strong:true},{t:"Secondary succession is faster because the soil survives.",strong:true},{t:"An octopus can change color in a fraction of a second.",strong:false}],
    reason:"Starting soil is the key difference, and it makes secondary succession faster. The octopus fact is true but off-topic."},
   {id:"L4",type:"word",color:"#0a8a5f",title:"Name the Variety",q:"The variety of living things that helps an ecosystem stay stable and recover is called ____. Type the word.",
    answer:["biodiversity","biodiversidad"],reason:"Biodiversity is the variety of life that builds resilience. Naming it explains why diverse ecosystems bounce back."}
  ]
 },

 "cells-heredity": {
  id: "sci8-cells-heredity", teks: "8.13", concept: "Cells & Heredity",
  ui: {
   h1: "Cells & Heredity", sub: "What runs a cell, and how are traits passed on? Read the evidence and open all four locks.",
   briefH: "Inside the cell", briefP: "Cells have specialized parts, and instructions for traits are stored in genes. Use the evidence to find where the instructions live and how they pass to offspring.",
   winStamp: "CODE CRACKED ✓", winH: "Cell scientist!", winP: "You zoomed from cell to gene, named the powerhouse, and saw how traits are inherited. Genes on chromosomes carry the instructions passed from parent to offspring."
  },
  clues: [
   {id:"c1",ico:"🧫",nm:"Organelles",title:"Cell Parts",body:"A cell has specialized parts: the nucleus controls the cell, mitochondria release energy, the cell membrane controls what enters and leaves, and (in plants) chloroplasts make food."},
   {id:"c2",ico:"🧬",nm:"Genes",title:"Genes & Chromosomes",body:"Instructions for traits are carried by genes, which sit on chromosomes inside the nucleus. Genes are made of DNA."},
   {id:"c3",ico:"👪",nm:"Inheritance",title:"Passing It On",body:"Offspring inherit genes from their parents. That's why traits are passed from one generation to the next."},
   {id:"c4",ico:"🦎",nm:"Variation",title:"Variation & Survival",body:"Small variations in inherited traits can help an organism survive and reproduce — the basis of adaptation over time."},
   {id:"c5",ico:"⚡",nm:"Powerhouse",title:"The Powerhouse",body:"Mitochondria are often called the cell's powerhouse because they release the energy the cell needs to work."},
   {id:"c6",ico:"🌮",nm:"Food Fact",title:"A Taco Fact",body:"Americans eat billions of tacos each year. It's a true, fun fact — but it won't help you explain cells or heredity."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#3b46b5",title:"Zoom In to the Gene",q:"Order these from the LARGEST to the SMALLEST, zooming in toward the instructions. Tap the pads in order.",
    pads:[{k:"gene",e:"🧬 Gene",c:"#e0533a"},{k:"cell",e:"🧫 Cell",c:"#2f8fd0"},{k:"chrom",e:"📏 Chromosome",c:"#7c5cbf"},{k:"nucleus",e:"⚪ Nucleus",c:"#0a8a5f"}],
    answer:["cell","nucleus","chrom","gene"],reason:"Zoom in: the cell holds the nucleus, the nucleus holds chromosomes, and a chromosome holds genes. Levels of organization show where traits are stored."},
   {id:"L2",type:"mc",color:"#2f8fd0",title:"The Powerhouse",q:"Which organelle releases the energy a cell needs to work?",
    options:["The nucleus.","The mitochondria.","The cell membrane."],
    answerIndex:1,reason:"Mitochondria release the cell's energy, which is why they're called the powerhouse. The nucleus controls the cell; the membrane guards it."},
   {id:"L3",type:"multi",color:"#e0533a",title:"How Traits Are Inherited",q:"Check ONLY the strong evidence that genes control inherited traits. Leave out the true-but-off-topic fact.",
    items:[{t:"Genes sit on chromosomes and are made of DNA.",strong:true},{t:"Genes carry the instructions for an organism's traits.",strong:true},{t:"Offspring inherit their genes from their parents.",strong:true},{t:"Americans eat billions of tacos each year.",strong:false}],
    reason:"Genes on chromosomes carry DNA instructions inherited from parents. The taco fact is true but off-topic."},
   {id:"L4",type:"word",color:"#0a8a5f",title:"Name the Unit",q:"The unit of heredity, found on a chromosome, that carries the instructions for a trait is a ____. Type the word.",
    answer:["gene","genes","gen"],reason:"A gene is the unit of heredity that carries a trait's instructions. Naming it connects cells to inheritance."}
  ]
 }

};
