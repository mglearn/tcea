/* Grade 7 "More" — short single-concept Critical Thinking Online Breakouts, one per
   key TEKS concept (§112.27). The player (play.html) merges MORE_BASE_UI with each
   entry's ui overrides and hands the result to the shared engine. 6 clues (1 decoy)
   + 4 locks (seq/mc/multi/word); each reason names the thinking move. */
window.MORE_BASE_UI = {
  en: {
    "sect.clues": "🔍 The Evidence",
    "sect.cluesHint": "Tap each piece of evidence to read it. (You can reopen them anytime.)",
    "sect.locks": "🔒 The Locks",
    "sect.locksHint": "Solve each lock using only the evidence above.",
    "crumb.teacher": "‹ More Grade 7 breakouts",
    "crumb.suite": "Grade 7 Science",
    "ui.reset": "↺ Reset", "ui.check": "Check", "ui.gotit": "Got it", "ui.playagain": "Play Again",
    "ui.solved": "🔓 Solved!", "ui.pcount": "{n} of {total} locks open",
    "ui.wordph": "Type your answer", "ui.clear": "clear",
    "fb.digit": "That number doesn't match the evidence. Check again.",
    "fb.word": "Check the evidence for the word that fits.",
    "fb.mc": "That one isn't supported by the evidence. Look again.",
    "fb.multiExtra": "One pick isn't strong evidence. Strong means what the evidence actually proves.",
    "fb.multiMissing": "You're missing a piece of strong evidence. Find them all.",
    "fb.seq": "That order doesn't match the evidence. Try again.",
    "footer.privacy": "Privacy & compliance", "footer.text": "Grade 7 Science · Critical Thinking Online Breakouts · Runs entirely in your browser — no logins, no data collected.",
    "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.27, Grade 7). Good-faith paraphrase; confirm before adoption.",
    "header.eyebrow": "Grade 7 Science · Quick Concept Breakout",
    "brief.label": "🎯 Warm-Up"
  }
};

window.MORE = {

 "elements-compounds": {
  id: "sci7-elements-compounds", teks: "7.6(A,B)", concept: "Elements & Compounds",
  ui: {
   h1: "Element or Compound?", sub: "Is it one kind of atom, or several joined together? Read the evidence and open all four locks.",
   briefH: "Read the chemistry", briefP: "Everything is built from atoms. Some substances are one kind of atom; others are different atoms chemically joined. Use the evidence to tell elements from compounds and read a formula.",
   winStamp: "CHEMISTRY CRACKED ✓", winH: "Formula pro!", winP: "You built matter from atoms up, spotted a compound, and read its formula. A formula's subscripts tell you exactly which atoms — and how many — are joined."
  },
  clues: [
   {id:"c1",ico:"⚛️",nm:"Atom",title:"Atoms",body:"An atom is the tiny building block of all matter. Everything is made of atoms."},
   {id:"c2",ico:"🔵",nm:"Element",title:"Elements",body:"An element is made of just ONE kind of atom, like oxygen (O) or gold (Au). It can't be broken into simpler substances."},
   {id:"c3",ico:"💧",nm:"Compound",title:"Compounds",body:"A compound is two or more DIFFERENT kinds of atoms chemically joined, like water (H₂O). Its parts are locked in a fixed ratio."},
   {id:"c4",ico:"🔢",nm:"Formula",title:"Reading a Formula",body:"A chemical formula's small numbers (subscripts) count each atom. H₂O means 2 hydrogen atoms and 1 oxygen atom."},
   {id:"c5",ico:"🫧",nm:"Example",title:"Carbon Dioxide",body:"CO₂ is a compound: 1 carbon atom joined with 2 oxygen atoms. Different atoms, chemically joined, in a fixed ratio."},
   {id:"c6",ico:"💰",nm:"Gold Fact",title:"A Gold Fact",body:"All the gold ever mined in history would fit inside just a few swimming pools. It's a true, surprising fact — but it won't help you tell an element from a compound."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#b5531f",title:"Build Up Matter",q:"Order these from the simplest building block to the most complex. Tap the pads in order.",
    pads:[{k:"comp",e:"💧 Compound (joined atoms)",c:"#2f6fe0"},{k:"atom",e:"⚛️ Single atom",c:"#e0902a"},{k:"elem",e:"🔵 Element (one kind of atom)",c:"#2f8f7f"}],
    answer:["atom","elem","comp"],reason:"An atom is the building block, an element is one kind of atom, and a compound joins different atoms. Ordering by structure explains how matter is built."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"Which Is a Compound?",q:"Which of these is a compound?",
    options:["Oxygen gas (O₂) — one kind of atom.","Water (H₂O) — two kinds of atoms chemically joined.","A bowl of trail mix."],
    answerIndex:1,reason:"A compound is different atoms chemically joined. Oxygen gas is an element (one kind of atom); trail mix is a mixture."},
   {id:"L3",type:"multi",color:"#e0902a",title:"Water Is a Compound",q:"Check ONLY the strong evidence that water (H₂O) is a compound. Leave out the true-but-off-topic fact.",
    items:[{t:"It is made of two different kinds of atoms.",strong:true},{t:"The hydrogen and oxygen atoms are chemically joined.",strong:true},{t:"It has a fixed formula, H₂O, in a set ratio.",strong:true},{t:"All the gold ever mined would fit in a few swimming pools.",strong:false}],
    reason:"Different atoms, chemically joined, in a fixed ratio — that's a compound. The gold fact is true but off-topic."},
   {id:"L4",type:"word",color:"#2f6fe0",title:"Name It",q:"A substance made of two or more different kinds of atoms chemically joined (like H₂O) is a ____. Type the word.",
    answer:["compound","compuesto"],reason:"A compound is different atoms chemically joined. Naming it — versus an element — is the key classification move."}
  ]
 },

 "solutions": {
  id: "sci7-solutions", teks: "7.6(D,E)", concept: "Solutions & Dissolving",
  ui: {
   h1: "Solutions & Dissolving", sub: "How does sugar vanish into water — and how do you speed it up? Read the evidence and open all four locks.",
   briefH: "Make it dissolve", briefP: "A solution forms when one substance dissolves evenly into another. Use the evidence to name the parts and figure out what makes dissolving faster.",
   winStamp: "DISSOLVED ✓", winH: "Solution star!", winP: "You sped up dissolving, spotted the solute, and named the solvent. Heat, stirring, and smaller pieces all make a solute dissolve faster."
  },
  clues: [
   {id:"c1",ico:"🥤",nm:"Solution",title:"Solutions",body:"A solution is a mixture where one substance dissolves so evenly into another that it looks uniform, like sugar dissolved in water."},
   {id:"c2",ico:"🧂",nm:"Parts",title:"Solute & Solvent",body:"The solute is the substance that dissolves (the sugar). The solvent is what does the dissolving (the water)."},
   {id:"c3",ico:"📈",nm:"Concentration",title:"Strong or Weak",body:"More solute makes a solution more concentrated. Adding more solvent dilutes it (makes it weaker)."},
   {id:"c4",ico:"⚡",nm:"Speed It Up",title:"Dissolving Faster",body:"A solute dissolves faster with heat, with stirring (agitation), and when it is in smaller pieces (more surface area)."},
   {id:"c5",ico:"🍵",nm:"Example",title:"Hot vs. Iced Tea",body:"Sugar dissolves much faster in hot tea than in iced tea, because the warmer particles move faster and mix more."},
   {id:"c6",ico:"🐦",nm:"Bird Fact",title:"A Hummingbird Fact",body:"A hummingbird's heart can beat over 1,000 times a minute. It's a true, amazing fact — but it won't help you dissolve a solute."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#b5531f",title:"Dissolve It Fastest",q:"Order the steps to dissolve a sugar cube as FAST as possible. Tap the pads in order.",
    pads:[{k:"stir",e:"🌀 Stir it",c:"#2f6fe0"},{k:"crush",e:"🔨 Crush into small pieces",c:"#e0902a"},{k:"hot",e:"🔥 Add to hot water",c:"#2f8f7f"}],
    answer:["crush","hot","stir"],reason:"Crushing adds surface area, heat speeds the particles, and stirring mixes them — each step makes the solute dissolve faster."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"Spot the Solute",q:"In a glass of salt water, what is the solute?",
    options:["The water — it does the dissolving.","The salt — it dissolves into the water.","The glass."],
    answerIndex:1,reason:"The solute is the substance that dissolves (the salt). The water is the solvent that does the dissolving."},
   {id:"L3",type:"multi",color:"#e0902a",title:"What Speeds Dissolving?",q:"Check ONLY the strong evidence for making a solute dissolve faster. Leave out the true-but-off-topic fact.",
    items:[{t:"Heating the solvent makes the particles move faster.",strong:true},{t:"Stirring (agitation) mixes the solute in faster.",strong:true},{t:"Smaller pieces give more surface area to dissolve.",strong:true},{t:"A hummingbird's heart can beat over 1,000 times a minute.",strong:false}],
    reason:"Heat, agitation, and surface area all speed dissolving. The hummingbird fact is true but off-topic."},
   {id:"L4",type:"word",color:"#2f6fe0",title:"Name the Dissolver",q:"In a solution, the substance that does the dissolving (the water in salt water) is the ____. Type the word.",
    answer:["solvent","solvente","disolvente"],reason:"The solvent does the dissolving; the solute is what dissolves. Naming each part is how we describe a solution."}
  ]
 },

 "motion": {
  id: "sci7-motion", teks: "7.7", concept: "Speed, Velocity & Graphs",
  ui: {
   h1: "Speed, Velocity & Graphs", sub: "How fast, which way, and what does the graph say? Read the evidence and open all four locks.",
   briefH: "Read the motion", briefP: "Speed tells you how fast; velocity adds direction. A distance–time graph tells the whole story. Use the evidence to read motion like a scientist.",
   winStamp: "MOTION READ ✓", winH: "Motion master!", winP: "You matched a graph to a trip, read a flat line as a stop, and told speed from velocity. Slope is speed — and direction is what makes velocity different."
  },
  clues: [
   {id:"c1",ico:"📏",nm:"Speed",title:"Speed",body:"Speed is how fast something moves: speed = distance ÷ time. It has no direction attached."},
   {id:"c2",ico:"🧭",nm:"Velocity",title:"Velocity",body:"Velocity is speed WITH a direction. It depends on displacement — the straight-line distance and direction from start to finish."},
   {id:"c3",ico:"📈",nm:"Graph",title:"Distance–Time Graphs",body:"On a distance–time graph, the slope is the speed. Steeper means faster, a flat line means stopped, and a line sloping back to zero means returning to the start."},
   {id:"c4",ico:"↩️",nm:"Round Trip",title:"Displacement",body:"If you travel out and come all the way back to where you started, your displacement is zero — so your average velocity is zero, even though your speed was not."},
   {id:"c5",ico:"🚗",nm:"Example",title:"Two Cars",body:"Two cars can drive at the same speed but have different velocities if they head in different directions."},
   {id:"c6",ico:"🦅",nm:"Falcon Fact",title:"A Falcon Fact",body:"A peregrine falcon can dive at over 200 miles per hour. It's a true fact about speed — but it isn't something you can read off a distance–time graph."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#b5531f",title:"Match the Graph",q:"A jogger runs to the park, rests, then jogs home. Order the distance–time graph's parts to match the trip. Tap the pads in order.",
    pads:[{k:"rise",e:"📈 Line rising from 0",c:"#2f8f7f"},{k:"flat",e:"➖ Flat line",c:"#e0902a"},{k:"fall",e:"📉 Line falling to 0",c:"#2f6fe0"}],
    answer:["rise","flat","fall"],reason:"Rising = moving away, flat = resting (not moving), falling to zero = returning home. Slope on a distance–time graph is speed."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"What's a Flat Line?",q:"On a distance–time graph, what does a flat (horizontal) line mean?",
    options:["The object is moving at a steady, fast speed.","The object is not moving — its distance isn't changing.","The object is speeding up."],
    answerIndex:1,reason:"A flat line means the distance isn't changing, so the object is stopped. A steeper line — not a flat one — means faster."},
   {id:"L3",type:"multi",color:"#e0902a",title:"Speed vs. Velocity",q:"Two runners each cover 400 m in 100 s. Runner A ends across the field; Runner B loops back to start. Check ONLY the strong evidence about their motion. Leave out the true-but-off-topic fact.",
    items:[{t:"They have the same average speed (same distance ÷ same time).",strong:true},{t:"Runner B's displacement is zero, so B's average velocity is zero.",strong:true},{t:"Velocity differs because it depends on direction and displacement.",strong:true},{t:"A peregrine falcon can dive over 200 miles per hour.",strong:false}],
    reason:"Same distance and time means same speed, but returning to start makes B's velocity zero. The falcon fact is true but off-topic."},
   {id:"L4",type:"word",color:"#2f6fe0",title:"Name It",q:"Speed together with a direction — which depends on displacement — is called ____. Type the word.",
    answer:["velocity","velocidad"],reason:"Velocity is speed plus direction. Telling it from plain speed is the key motion idea."}
  ]
 },

 "heat-transfer": {
  id: "sci7-heat-transfer", teks: "7.8", concept: "Heat Transfer",
  ui: {
   h1: "Heat on the Move", sub: "Conduction, convection, or radiation? Read the evidence and open all four locks.",
   briefH: "Follow the heat", briefP: "Heat always flows from hot to cold — but it can travel three ways. Use the evidence to name each kind of heat transfer and find where the flow stops.",
   winStamp: "HEAT TRACED ✓", winH: "Heat expert!", winP: "You followed heat to equilibrium, named the Sun's radiation, and spotted conduction. Heat always moves hot→cold until everything reaches the same temperature."
  },
  clues: [
   {id:"c1",ico:"🌡️",nm:"Hot to Cold",title:"Which Way Heat Flows",body:"Heat always flows from a warmer object to a cooler one — never the other way on its own."},
   {id:"c2",ico:"🥄",nm:"Conduction",title:"Conduction",body:"Conduction is heat moving by direct touch. A metal spoon in hot soup heats up as particles pass energy along the metal."},
   {id:"c3",ico:"♨️",nm:"Convection",title:"Convection",body:"Convection is heat carried by a moving fluid or gas. Warm water and warm air rise, carrying heat with them."},
   {id:"c4",ico:"☀️",nm:"Radiation",title:"Radiation",body:"Radiation is heat that travels as rays, even through empty space. The Sun warms Earth by radiation."},
   {id:"c5",ico:"⚖️",nm:"Equilibrium",title:"Thermal Equilibrium",body:"Heat keeps flowing until both objects reach the SAME temperature. Then the flow stops — that balance is thermal equilibrium."},
   {id:"c6",ico:"🐧",nm:"Penguin Fact",title:"A Penguin Fact",body:"Emperor penguins huddle in huge groups to survive Antarctic cold. It's a true fact — but it isn't the kind of heat transfer you're naming here."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#b5531f",title:"Reach Equilibrium",q:"A hot rock is dropped into cool water. Order what happens. Tap the pads in order.",
    pads:[{k:"same",e:"⚖️ Both reach the same temperature",c:"#2f6fe0"},{k:"touch",e:"🤝 Hot rock meets cool water",c:"#e0902a"},{k:"flow",e:"➡️ Heat flows from rock to water",c:"#2f8f7f"}],
    answer:["touch","flow","same"],reason:"They touch, heat flows hot→cold, and they end at the same temperature — thermal equilibrium. Heat always flows warm to cool."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"Warmth Across Space",q:"You feel the Sun's warmth across empty space. Which kind of heat transfer is that?",
    options:["Conduction — direct touch.","Convection — moving air.","Radiation — heat traveling as rays."],
    answerIndex:2,reason:"Radiation can cross empty space as rays, which is how the Sun's heat reaches Earth. Conduction and convection need matter."},
   {id:"L3",type:"multi",color:"#e0902a",title:"The Hot Spoon",q:"Check ONLY the strong evidence that a metal spoon heating up in soup is CONDUCTION. Leave out the true-but-off-topic fact.",
    items:[{t:"The heat spreads by direct touch through the metal.",strong:true},{t:"Particles pass energy to their neighbors along the spoon.",strong:true},{t:"No moving fluid or ray is carrying the heat.",strong:true},{t:"Emperor penguins huddle to survive the cold.",strong:false}],
    reason:"Heat moving by direct contact through a solid is conduction. The penguin fact is true but off-topic."},
   {id:"L4",type:"word",color:"#2f6fe0",title:"Name the Rising Kind",q:"Heat carried by a moving fluid or gas — the way warm air and water rise — is called ____. Type the word.",
    answer:["convection","convección","conveccion"],reason:"Convection carries heat in a moving fluid. Naming the three kinds of transfer is how we explain how heat moves."}
  ]
 },

 "solar-system": {
  id: "sci7-solar-system", teks: "7.9", concept: "The Solar System",
  ui: {
   h1: "Tour the Solar System", sub: "What's out there, and what holds it together? Read the evidence and open all four locks.",
   briefH: "Explore the neighborhood", briefP: "Our solar system is the Sun and everything orbiting it. Use the evidence to sort the objects, find what keeps them in orbit, and see why Earth can support life.",
   winStamp: "SYSTEM CHARTED ✓", winH: "Space explorer!", winP: "You ordered objects by distance, named what holds orbits together, and found why Earth is special. Gravity from the Sun keeps the whole system in motion."
  },
  clues: [
   {id:"c1",ico:"☀️",nm:"The Sun",title:"The Sun's Pull",body:"The Sun sits at the center of our solar system. Its gravity keeps the planets and other objects orbiting around it."},
   {id:"c2",ico:"🪐",nm:"Planets",title:"Two Kinds of Planets",body:"The inner planets (Mercury, Venus, Earth, Mars) are small and rocky. The outer planets are large gas and ice giants."},
   {id:"c3",ico:"☄️",nm:"Small Bodies",title:"Asteroids & Comets",body:"Asteroids are rocky chunks, many between Mars and Jupiter. Comets are icy and grow glowing tails when near the Sun."},
   {id:"c4",ico:"🧊",nm:"Far Regions",title:"Kuiper Belt & Oort Cloud",body:"Far past the planets lie the icy Kuiper belt and, even farther, the Oort cloud — home to many comets."},
   {id:"c5",ico:"🌍",nm:"Just Right",title:"Why Earth Has Life",body:"Earth supports life because it is the right distance from the Sun for liquid water and has a protective atmosphere."},
   {id:"c6",ico:"🌮",nm:"Food Fact",title:"A Space-Snack Fact",body:"Astronauts often eat tortillas instead of bread because crumbs float and can clog equipment. It's a true, fun fact — but it won't help you chart the solar system."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#b5531f",title:"Order by Distance",q:"Order these from CLOSEST to the Sun to FARTHEST. Tap the pads in order.",
    pads:[{k:"kuiper",e:"🧊 Kuiper belt",c:"#2f6fe0"},{k:"mercury",e:"🔥 Mercury",c:"#e0902a"},{k:"earth",e:"🌍 Earth",c:"#2f8f7f"}],
    answer:["mercury","earth","kuiper"],reason:"Mercury is closest, then Earth, then the far-off Kuiper belt. Ordering by distance maps the structure of the solar system."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"What Holds Orbits?",q:"What keeps the planets orbiting the Sun instead of flying off?",
    options:["The Sun's gravity.","The planets' own light.","The push of the solar wind."],
    answerIndex:0,reason:"The Sun's gravity pulls on the planets and keeps them in orbit. Gravity governs motion across the solar system."},
   {id:"L3",type:"multi",color:"#e0902a",title:"Why Earth Has Life",q:"Check ONLY the strong evidence that Earth can support life. Leave out the true-but-off-topic fact.",
    items:[{t:"It is the right distance from the Sun for liquid water.",strong:true},{t:"It has liquid water on its surface.",strong:true},{t:"It has a protective atmosphere.",strong:true},{t:"Astronauts eat tortillas to avoid floating crumbs.",strong:false}],
    reason:"Right distance, liquid water, and an atmosphere make Earth habitable. The tortilla fact is true but off-topic."},
   {id:"L4",type:"word",color:"#2f6fe0",title:"Name the Force",q:"The force from the Sun that governs the motion of everything in the solar system is ____. Type the word.",
    answer:["gravity","gravedad"],reason:"Gravity is the force that governs orbits. Naming the cause explains why the whole system stays together."}
  ]
 },

 "plate-tectonics": {
  id: "sci7-plate-tectonics", teks: "7.10", concept: "Plate Tectonics",
  ui: {
   h1: "Shifting Plates", sub: "What builds mountains and shakes the ground? Read the evidence and open all four locks.",
   briefH: "Read Earth's history", briefP: "Earth's surface is broken into giant plates that slowly move. Use the evidence to read rock layers, explain earthquakes and mountains, and see how continents have shifted.",
   winStamp: "HISTORY READ ✓", winH: "Earth detective!", winP: "You read rock layers by superposition, tied quakes and mountains to moving plates, and found the evidence continents once joined. Earth's surface is always slowly changing."
  },
  clues: [
   {id:"c1",ico:"🧩",nm:"Plates",title:"Moving Plates",body:"Earth's outer shell is broken into huge tectonic plates that slowly move over time."},
   {id:"c2",ico:"🌋",nm:"Boundaries",title:"Where Plates Meet",body:"Where plates meet or grind past each other, they cause earthquakes, build mountains, and form volcanoes."},
   {id:"c3",ico:"🦴",nm:"Fossil Clues",title:"Fossil Evidence",body:"Matching fossils of the same species are found on continents now separated by oceans — evidence those lands were once joined."},
   {id:"c4",ico:"📚",nm:"Rock Layers",title:"Superposition",body:"In undisturbed rock layers, the oldest layers are on the BOTTOM and the youngest are on top. This is the law of superposition."},
   {id:"c5",ico:"🔥",nm:"Hot Spots",title:"Hot Spots",body:"Some volcanoes, like Hawaii's, form over 'hot spots' where magma rises through a plate as it slides overhead."},
   {id:"c6",ico:"🦖",nm:"Dino Fact",title:"A Dinosaur Fact",body:"Some dinosaurs had feathers, like modern birds. It's a true, fascinating fact — but it won't help you read rock layers or plate motion."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#b5531f",title:"Read the Rock Layers",q:"Using superposition, order these rock layers from OLDEST to YOUNGEST. Tap the pads in order.",
    pads:[{k:"top",e:"🟫 Top layer",c:"#2f6fe0"},{k:"bottom",e:"🟩 Bottom layer",c:"#e0902a"},{k:"middle",e:"🟨 Middle layer",c:"#2f8f7f"}],
    answer:["bottom","middle","top"],reason:"In undisturbed rock, the bottom layer formed first (oldest) and the top last (youngest). Superposition lets us read Earth's timeline."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"What Builds Mountains?",q:"What causes earthquakes and builds most mountains?",
    options:["The Moon's gravity.","The movement of Earth's tectonic plates.","Changes in the weather."],
    answerIndex:1,reason:"Moving tectonic plates cause earthquakes and push up mountains. Plate motion reshapes Earth's surface."},
   {id:"L3",type:"multi",color:"#e0902a",title:"Continents Once Joined",q:"Check ONLY the strong evidence that today's separated continents were once joined. Leave out the true-but-off-topic fact.",
    items:[{t:"Matching fossils of the same species appear across oceans.",strong:true},{t:"The coastlines of some continents fit together like puzzle pieces.",strong:true},{t:"Matching rock formations line up across the split.",strong:true},{t:"Some dinosaurs had feathers.",strong:false}],
    reason:"Matching fossils, coastlines, and rocks across oceans point to once-joined continents. The dinosaur fact is true but off-topic."},
   {id:"L4",type:"word",color:"#2f6fe0",title:"Name the Rule",q:"The rule that in undisturbed layers the oldest rock is on the bottom is the law of ____. Type the word.",
    answer:["superposition","superposición","superposicion"],reason:"Superposition orders rock layers by age. Naming the rule lets us read Earth's history from the rocks."}
  ]
 },

 "hydrosphere": {
  id: "sci7-hydrosphere", teks: "7.11", concept: "Water & Watersheds",
  ui: {
   h1: "Water & Watersheds", sub: "Where does the rain go, and how do we affect it? Read the evidence and open all four locks.",
   briefH: "Follow the water", briefP: "The hydrosphere is all of Earth's water. Use the evidence to trace how water moves through a watershed and how human choices help or harm it.",
   winStamp: "WATER TRACED ✓", winH: "Water guardian!", winP: "You followed rain through a watershed, defined it, and spotted human impacts. What we do on the land flows straight into our water."
  },
  clues: [
   {id:"c1",ico:"💧",nm:"Hydrosphere",title:"The Hydrosphere",body:"The hydrosphere is all of Earth's water — oceans, lakes, rivers, ice, and underground water."},
   {id:"c2",ico:"🗺️",nm:"Watershed",title:"Watersheds",body:"A watershed is an area of land where all the water drains to the same river, lake, or ocean."},
   {id:"c3",ico:"🕳️",nm:"Groundwater",title:"Groundwater",body:"Groundwater is water stored underground in spaces between rocks and soil (aquifers). Wells pump it up for drinking and farming."},
   {id:"c4",ico:"🏭",nm:"Human Impact",title:"Helping & Harming",body:"Runoff carrying fertilizer, litter, or chemicals pollutes water. Conservation and cleaner practices protect it."},
   {id:"c5",ico:"🌊",nm:"Oceans",title:"Ocean Systems",body:"Humans depend on ocean systems for food, weather, and oxygen — and human activity can harm them too."},
   {id:"c6",ico:"🐙",nm:"Sea Fact",title:"An Octopus Fact",body:"An octopus has three hearts and blue blood. It's a true, amazing fact — but it won't help you trace a watershed."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#b5531f",title:"Follow the Rain",q:"Order how water moves through a watershed after it rains. Tap the pads in order.",
    pads:[{k:"river",e:"🏞️ Collects in a river or lake",c:"#2f6fe0"},{k:"high",e:"⛰️ Rain falls on high ground",c:"#e0902a"},{k:"down",e:"💧 Flows downhill in streams",c:"#2f8f7f"}],
    answer:["high","down","river"],reason:"Rain falls on high ground, flows downhill through streams, and collects in a shared river or lake. That draining path defines a watershed."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"What's a Watershed?",q:"What is a watershed?",
    options:["A shed where water is stored.","An area of land where all water drains to the same river or lake.","A machine that cleans water."],
    answerIndex:1,reason:"A watershed is the land area that drains to a common body of water. Everything on that land can end up in the water."},
   {id:"L3",type:"multi",color:"#e0902a",title:"Human Impact on Water",q:"Check ONLY the strong evidence that human activity can harm a watershed. Leave out the true-but-off-topic fact.",
    items:[{t:"Fertilizer runoff from lawns and farms pollutes the water.",strong:true},{t:"Litter and chemicals wash into streams and rivers.",strong:true},{t:"Pumping too much groundwater can lower the water supply.",strong:true},{t:"An octopus has three hearts and blue blood.",strong:false}],
    reason:"Runoff, pollution, and over-pumping all harm a watershed. The octopus fact is true but off-topic."},
   {id:"L4",type:"word",color:"#2f6fe0",title:"Name the Underground Water",q:"Water stored underground in aquifers, pumped up by wells, is called ____. Type the word.",
    answer:["groundwater","ground water","agua subterránea","agua subterranea"],reason:"Groundwater is underground water in aquifers. Naming Earth's water stores helps us protect them."}
  ]
 },

 "energy-pyramids": {
  id: "sci7-energy-pyramids", teks: "7.12", concept: "Energy Pyramids",
  ui: {
   h1: "Energy Pyramids", sub: "Why are there so few top predators? Read the evidence and open all four locks.",
   briefH: "Follow the energy", briefP: "Energy flows through an ecosystem from the Sun up through living things — but most is lost at each step. Use the evidence to see why the top of the pyramid is small.",
   winStamp: "ENERGY TRACED ✓", winH: "Ecosystem expert!", winP: "You stacked the trophic levels, explained the 10% rule, and named the base. Because only about a tenth of the energy passes up, top predators are always few."
  },
  clues: [
   {id:"c1",ico:"🌿",nm:"Producers",title:"Producers",body:"Producers, like plants, capture the Sun's energy and make their own food. They form the base of every energy pyramid."},
   {id:"c2",ico:"🐛",nm:"Energy Flows Up",title:"Up the Levels",body:"Energy flows upward: producers are eaten by plant-eaters (herbivores), which are eaten by meat-eaters (carnivores)."},
   {id:"c3",ico:"🔟",nm:"The 10% Rule",title:"Only 10% Passes Up",body:"Only about 10% of the energy at one level passes to the next. The other ~90% is used for life or lost as heat."},
   {id:"c4",ico:"🦅",nm:"Few at the Top",title:"A Small Top",body:"Because so little energy reaches the top, there is only enough to support a few top predators."},
   {id:"c5",ico:"🍄",nm:"Recycling",title:"Decomposers",body:"Decomposers like fungi break down dead things and return nutrients to the soil, so matter is recycled through the ecosystem."},
   {id:"c6",ico:"🐨",nm:"Koala Fact",title:"A Koala Fact",body:"Koalas sleep up to 20 hours a day to save energy from their low-energy diet. It's a true fact — but it isn't evidence about the energy pyramid."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#b5531f",title:"Stack the Pyramid",q:"Order the levels of an energy pyramid from the BASE (most energy) to the TOP (least). Tap the pads in order.",
    pads:[{k:"carn",e:"🦅 Carnivore",c:"#2f6fe0"},{k:"prod",e:"🌿 Producer",c:"#e0902a"},{k:"herb",e:"🐛 Herbivore",c:"#2f8f7f"}],
    answer:["prod","herb","carn"],reason:"Producers form the base, herbivores are next, and carnivores are at the top. Energy flows up, and less is available at each level."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"Why So Few Predators?",q:"Why are there far fewer top predators than plants in an ecosystem?",
    options:["Predators are just bigger, so fewer fit.","Only about 10% of energy passes to each higher level.","Plants eat the predators."],
    answerIndex:1,reason:"Only about 10% of energy passes up each level, so there's little left to support top predators. It's about energy, not size."},
   {id:"L3",type:"multi",color:"#e0902a",title:"Energy Decreases Upward",q:"Check ONLY the strong evidence that available energy shrinks toward the top. Leave out the true-but-off-topic fact.",
    items:[{t:"Only about 10% of energy passes to the next level.",strong:true},{t:"Most energy is used for life processes or lost as heat.",strong:true},{t:"So each higher level has less energy to go around.",strong:true},{t:"Koalas sleep up to 20 hours a day.",strong:false}],
    reason:"The 10% rule and energy lost as heat mean less energy higher up. The koala fact is true but off-topic."},
   {id:"L4",type:"word",color:"#2f6fe0",title:"Name the Base",q:"The organisms at the base of the pyramid that make their own food from sunlight are called ____. Type the word.",
    answer:["producers","producer","productores","productor"],reason:"Producers capture the Sun's energy and feed the whole pyramid. Naming the base explains where all the energy starts."}
  ]
 },

 "body-systems": {
  id: "sci7-body-systems", teks: "7.13", concept: "Human Body Systems",
  ui: {
   h1: "Body Systems", sub: "How is your body organized, and how do the parts team up? Read the evidence and open all four locks.",
   briefH: "Meet the team", briefP: "Your body is built from cells organized into bigger and bigger parts, and its systems work together. Use the evidence to trace the organization and see how systems cooperate.",
   winStamp: "SYSTEMS ONLINE ✓", winH: "Body scientist!", winP: "You built the body from cells up, named the transport system, and saw how systems team up. Cells to systems, your body works as one connected whole."
  },
  clues: [
   {id:"c1",ico:"🔬",nm:"Cells",title:"Start With Cells",body:"The body is built up in levels: cells group into tissues, tissues into organs, and organs into organ systems."},
   {id:"c2",ico:"❤️",nm:"Circulatory",title:"Circulatory System",body:"The circulatory system — the heart and blood vessels — moves blood, oxygen, and nutrients around the body."},
   {id:"c3",ico:"🫁",nm:"Respiratory",title:"Respiratory System",body:"The respiratory system — the lungs — takes in oxygen from the air and removes carbon dioxide."},
   {id:"c4",ico:"🤝",nm:"Teamwork",title:"Systems Cooperate",body:"Systems work together. The respiratory system takes in oxygen, and the circulatory system carries it to every cell."},
   {id:"c5",ico:"🦴",nm:"More Systems",title:"Support & Control",body:"The skeletal and muscular systems support and move the body; the digestive system breaks down food; the nervous system carries signals."},
   {id:"c6",ico:"🦒",nm:"Giraffe Fact",title:"A Giraffe Fact",body:"A giraffe has the same number of neck bones as a human — just seven. It's a true, surprising fact — but it won't help you order the body's levels."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#b5531f",title:"From Cells to Systems",q:"Order the body's levels of organization from SMALLEST to LARGEST. Tap the pads in order.",
    pads:[{k:"organ",e:"🫀 Organ",c:"#2f6fe0"},{k:"cell",e:"🔬 Cell",c:"#e0902a"},{k:"system",e:"🫁 Organ system",c:"#7c5cbf"},{k:"tissue",e:"🧫 Tissue",c:"#2f8f7f"}],
    answer:["cell","tissue","organ","system"],reason:"Cells form tissues, tissues form organs, and organs form organ systems. Levels of organization show how the body is built."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"The Transport System",q:"Which system moves blood, oxygen, and nutrients throughout the body?",
    options:["The respiratory system.","The circulatory system.","The skeletal system."],
    answerIndex:1,reason:"The circulatory system (heart and vessels) transports blood and oxygen. The respiratory system brings oxygen in; the circulatory system delivers it."},
   {id:"L3",type:"multi",color:"#e0902a",title:"Systems Work Together",q:"Check ONLY the strong evidence that body systems depend on each other. Leave out the true-but-off-topic fact.",
    items:[{t:"The respiratory system takes oxygen into the lungs.",strong:true},{t:"The circulatory system carries that oxygen to the cells.",strong:true},{t:"Neither system could keep the body alive alone.",strong:true},{t:"A giraffe has just seven neck bones, like a human.",strong:false}],
    reason:"Oxygen taken in by the lungs is delivered by the blood — the systems depend on each other. The giraffe fact is true but off-topic."},
   {id:"L4",type:"word",color:"#2f6fe0",title:"Name the Level",q:"A group of similar cells working together — the level between a cell and an organ — is a ____. Type the word.",
    answer:["tissue","tissues","tejido"],reason:"A tissue is a group of similar cells. Naming the levels shows how the body is organized from cells to systems."}
  ]
 },

 "taxonomy": {
  id: "sci7-taxonomy", teks: "7.14", concept: "Classifying Life",
  ui: {
   h1: "Sorting Life", sub: "How do scientists organize millions of living things? Read the evidence and open all four locks.",
   briefH: "Sort the living world", briefP: "Scientists classify organisms by the traits they share, from broad groups down to specific ones. Use the evidence to see how life is sorted and what each kingdom does.",
   winStamp: "LIFE SORTED ✓", winH: "Classification champ!", winP: "You ordered the groups broad to specific, named the recyclers, and saw that shared traits decide the grouping. Taxonomy brings order to the living world."
  },
  clues: [
   {id:"c1",ico:"🗂️",nm:"Taxonomy",title:"Classifying Life",body:"Taxonomy is the science of sorting organisms into groups based on the traits they share."},
   {id:"c2",ico:"🪜",nm:"Broad to Specific",title:"From Broad to Specific",body:"Organisms are grouped from broad to specific: a big kingdom narrows down through smaller groups to a single species."},
   {id:"c3",ico:"👑",nm:"Kingdoms",title:"Kingdoms of Life",body:"Living things are sorted into large kingdoms — such as animals, plants, fungi, and bacteria — based on shared characteristics."},
   {id:"c4",ico:"🍄",nm:"Roles",title:"What Groups Do",body:"Different groups play different roles: fungi decompose dead matter, and helpful bacteria aid digestion inside animals."},
   {id:"c5",ico:"🔍",nm:"Shared Traits",title:"Traits Decide",body:"Scientists group organisms by shared characteristics — the more traits two organisms share, the more closely they are grouped."},
   {id:"c6",ico:"🎸",nm:"Music Fact",title:"A Sound Fact",body:"A cricket's chirping speeds up as the temperature rises. It's a true, cool fact — but it won't help you classify organisms."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#b5531f",title:"Broad to Specific",q:"Order these classification groups from the BROADEST to the MOST specific. Tap the pads in order.",
    pads:[{k:"species",e:"🐺 Species",c:"#2f6fe0"},{k:"kingdom",e:"👑 Kingdom",c:"#e0902a"},{k:"genus",e:"🦊 Genus",c:"#2f8f7f"}],
    answer:["kingdom","genus","species"],reason:"A broad kingdom narrows down to a genus and then a single species. Ordering broad-to-specific is how classification works."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"The Recyclers",q:"Which kingdom is known for breaking down dead matter and recycling nutrients?",
    options:["Animals.","Fungi.","Plants."],
    answerIndex:1,reason:"Fungi are the great decomposers, recycling nutrients from dead matter back into the ecosystem."},
   {id:"L3",type:"multi",color:"#e0902a",title:"How Scientists Group Life",q:"Check ONLY the strong evidence for how organisms are classified. Leave out the true-but-off-topic fact.",
    items:[{t:"Organisms are grouped by the characteristics they share.",strong:true},{t:"Broad groups split into smaller, more specific ones.",strong:true},{t:"Organisms that share more traits are grouped more closely.",strong:true},{t:"A cricket chirps faster as it gets warmer.",strong:false}],
    reason:"Shared traits, from broad groups to specific ones, drive classification. The cricket fact is true but off-topic."},
   {id:"L4",type:"word",color:"#2f6fe0",title:"Name the Broadest Group",q:"The broadest group in this classification — such as animals, plants, or fungi — is a ____. Type the word.",
    answer:["kingdom","kingdoms","reino"],reason:"A kingdom is one of the broadest groups of life. Naming the levels shows how taxonomy is organized."}
  ]
 }

};
