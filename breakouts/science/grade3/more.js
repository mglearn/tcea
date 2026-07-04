/* Grade 3 "More" — short single-concept Critical Thinking Online Breakouts, one per
   key TEKS concept (§112.5), pitched to upper-elementary readers. The player (play.html)
   merges MORE_BASE_UI with each entry's ui overrides and hands the result to the shared
   engine. 6 clues (1 decoy) + 4 locks (seq/mc/multi/word); each reason names the move. */
window.MORE_BASE_UI = {
  en: {
    "sect.clues": "🔍 The Clues",
    "sect.cluesHint": "Tap each clue to read it. You can open them again anytime.",
    "sect.locks": "🔒 The Locks",
    "sect.locksHint": "Use the clues to open each lock.",
    "crumb.teacher": "‹ More Grade 3 breakouts",
    "crumb.suite": "Grade 3 Science",
    "ui.reset": "↺ Start over", "ui.check": "Check", "ui.gotit": "Got it", "ui.playagain": "Play Again",
    "ui.solved": "🔓 Open!", "ui.pcount": "{n} of {total} locks open",
    "ui.wordph": "Type your answer", "ui.clear": "clear",
    "fb.digit": "Not quite. Look at the clues again.",
    "fb.word": "Look at the clues for the word that fits.",
    "fb.mc": "That one isn't supported by the clues. Look again.",
    "fb.multiExtra": "One pick isn't strong evidence. Pick only what the clues show.",
    "fb.multiMissing": "You're missing one. Find them all.",
    "fb.seq": "That order doesn't match the clues. Try again.",
    "footer.privacy": "Privacy & compliance", "footer.text": "Grade 3 Science · Critical Thinking Online Breakouts · Runs in your browser — no logins, no data collected.",
    "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.5, Grade 3). Good-faith paraphrase; confirm before adoption.",
    "header.eyebrow": "Grade 3 Science · Quick Breakout",
    "brief.label": "🎯 Warm-Up"
  }
};

window.MORE = {

 "states-of-matter": {
  id: "sci3-states-of-matter", teks: "3.6(B)", concept: "Solids, Liquids & Gases",
  ui: {
   h1: "Solid, Liquid, or Gas?", sub: "How does matter hold its shape? Read the clues and open all four locks.",
   briefH: "Sort the matter", briefP: "Matter comes in three states: solid, liquid, and gas. Each one holds its shape in a different way. Use the clues to open the locks!",
   winStamp: "SORTED ✓", winH: "Matter master!", winP: "You ordered the states, spotted the liquid, and named the gas. Solids keep their shape, liquids take their container's shape, and gases fill it all up."
  },
  clues: [
   {id:"c1",ico:"🧊",nm:"Solid",title:"Solids",body:"A solid has a definite shape of its own. A block or an ice cube keeps its shape."},
   {id:"c2",ico:"💧",nm:"Liquid",title:"Liquids",body:"A liquid takes the shape of its container but keeps the same amount. Water in a cup fills the cup's shape."},
   {id:"c3",ico:"💨",nm:"Gas",title:"Gases",body:"A gas spreads out to fill its whole container. Air fills up a balloon completely."},
   {id:"c4",ico:"🔬",nm:"Particles",title:"Tiny Particles",body:"In a solid, particles are packed tight. In a liquid, they slide past each other. In a gas, they spread far apart."},
   {id:"c5",ico:"♨️",nm:"Same Stuff",title:"One Kind, Three States",body:"Water can be a solid (ice), a liquid (water), or a gas (steam) — the same stuff in three states."},
   {id:"c6",ico:"🦋",nm:"Bug Fact",title:"A Butterfly Fact",body:"A butterfly tastes with its feet. That is true and fun — but it is not about states of matter."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#5b3a9e",title:"Most Packed to Most Spread",q:"Order the states from the MOST packed particles to the MOST spread out. Tap the pads in order.",
    pads:[{k:"gas",e:"💨 Gas",c:"#2f6fe0"},{k:"solid",e:"🧊 Solid",c:"#5b3a9e"},{k:"liquid",e:"💧 Liquid",c:"#0d9488"}],
    answer:["solid","liquid","gas"],reason:"Solid particles are packed tight, liquid particles slide, and gas particles spread far apart. Ordering by particles explains the states."},
   {id:"L2",type:"mc",color:"#0d9488",title:"Which Is a Liquid?",q:"Which state takes the shape of its container but keeps the same amount?",
    options:["A solid.","A liquid.","A gas."],
    answerIndex:1,reason:"A liquid takes its container's shape but keeps its amount. A solid keeps its own shape; a gas fills the whole container."},
   {id:"L3",type:"multi",color:"#e0902a",title:"All About Gases",q:"Tap ONLY the true clues about a gas. Leave out the fun fact.",
    items:[{t:"It spreads to fill its whole container.",strong:true},{t:"Its particles are spread far apart.",strong:true},{t:"Air filling a balloon is a gas.",strong:true},{t:"A butterfly tastes with its feet.",strong:false}],
    reason:"A gas fills its container with far-apart particles, like air in a balloon. The butterfly fact is true but is not about gases."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"The state that spreads out to fill its whole container, like air in a balloon, is a ____. Type the word.",
    answer:["gas","gases","gas state"],reason:"A gas fills its container. Naming the three states helps us describe and sort matter."}
  ]
 },

 "state-changes": {
  id: "sci3-state-changes", teks: "3.6(C)", concept: "Changes of State",
  ui: {
   h1: "Melt, Freeze, Evaporate", sub: "How does heating and cooling change matter? Read the clues and open all four locks.",
   briefH: "Change the state", briefP: "Heating and cooling can change matter from one state to another — solid to liquid to gas and back. Use the clues to open the locks!",
   winStamp: "CHANGED ✓", winH: "Great work!", winP: "You traced water from ice to vapor, explained the drops on a cold glass, and named what a puddle does. Heating and cooling change the state of matter."
  },
  clues: [
   {id:"c1",ico:"🔥",nm:"Heat",title:"Heating Up",body:"Heating a solid can melt it into a liquid. Heating a liquid can boil it into a gas."},
   {id:"c2",ico:"❄️",nm:"Cool",title:"Cooling Down",body:"Cooling a gas can turn it into a liquid. Cooling a liquid can freeze it into a solid."},
   {id:"c3",ico:"🥤",nm:"Cold Glass",title:"Condensation",body:"Water drops appear on the outside of a cold glass. That is water vapor in the air cooling into liquid — called condensation."},
   {id:"c4",ico:"🌤️",nm:"Puddle",title:"Evaporation",body:"A puddle slowly dries up in the sun. The liquid water turns into a gas (water vapor) — called evaporation."},
   {id:"c5",ico:"♨️",nm:"Steam",title:"Water Vapor",body:"Boiling water gives off steam — hot water turning into a gas called water vapor."},
   {id:"c6",ico:"🐧",nm:"Bird Fact",title:"A Penguin Fact",body:"Penguins huddle together to stay warm. That is true and cute — but it is not a change of state."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#5b3a9e",title:"Ice to Vapor",q:"Heat water all the way. Put it in order. Tap the pads in order.",
    pads:[{k:"vapor",e:"💨 Water vapor (gas)",c:"#2f6fe0"},{k:"ice",e:"🧊 Ice (solid)",c:"#5b3a9e"},{k:"water",e:"💧 Water (liquid)",c:"#0d9488"}],
    answer:["ice","water","vapor"],reason:"Ice melts to water, then water heats into vapor. Adding heat moves matter from solid to liquid to gas."},
   {id:"L2",type:"mc",color:"#0d9488",title:"Drops on a Glass",q:"What makes water drops form on the outside of a cold glass?",
    options:["The glass is leaking.","Water vapor in the air cools into liquid drops.","The water inside pushes through the glass."],
    answerIndex:1,reason:"Water vapor in the air cools when it touches the cold glass and turns into liquid drops — condensation."},
   {id:"L3",type:"multi",color:"#e0902a",title:"Caused by Heat or Cold",q:"Tap ONLY the changes caused by heating or cooling. Leave out the fun fact.",
    items:[{t:"Ice melting into water.",strong:true},{t:"Water boiling into vapor.",strong:true},{t:"Drops condensing on a cold glass.",strong:true},{t:"Penguins huddle to stay warm.",strong:false}],
    reason:"Melting, boiling, and condensing are all caused by heating or cooling. The penguin fact is true but is not a state change."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"When a puddle dries up and the water turns into a gas, we say the water will ____. Type the word.",
    answer:["evaporate","evaporates","evaporation","evaporar","evapora"],reason:"Liquid water turns to gas by evaporating. Naming the change tells what heat did to the matter."}
  ]
 },

 "measure-matter": {
  id: "sci3-measure-matter", teks: "3.6(A)", concept: "Measuring Matter",
  ui: {
   h1: "Test It! Measure Matter", sub: "How do scientists describe an object? Read the clues and open all four locks.",
   briefH: "Be a scientist", briefP: "Scientists measure and test matter to describe it — its mass, its temperature, if a magnet pulls it, and if it sinks or floats. Use the clues to open the locks!",
   winStamp: "MEASURED ✓", winH: "Sharp scientist!", winP: "You tested if an object sinks, picked the right tool, and named a property. Measuring matter helps us describe and compare objects."
  },
  clues: [
   {id:"c1",ico:"⚖️",nm:"Mass",title:"Mass",body:"Mass is how much matter is in an object. We measure it with a scale or balance."},
   {id:"c2",ico:"🌡️",nm:"Temperature",title:"Temperature",body:"Temperature is how hot or cold something is. We measure it with a thermometer."},
   {id:"c3",ico:"🧲",nm:"Magnetism",title:"Magnetism",body:"We can test if a magnet pulls an object. Some metals, like iron, are magnetic."},
   {id:"c4",ico:"🛁",nm:"Sink or Float",title:"Sink or Float",body:"We can test if an object sinks or floats in water. A rock sinks; a cork floats."},
   {id:"c5",ico:"📓",nm:"Record",title:"Write It Down",body:"A scientist records each measurement to describe and compare objects."},
   {id:"c6",ico:"🦒",nm:"Tall Fact",title:"A Giraffe Fact",body:"A giraffe is the tallest animal on land. That is true and cool — but it is not a way to measure matter."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#5b3a9e",title:"Sink or Float Test",q:"Test if a rock sinks. Put it in order. Tap the pads in order.",
    pads:[{k:"sink",e:"⬇️ It sinks to the bottom",c:"#2f6fe0"},{k:"pick",e:"🪨 Pick up the rock",c:"#5b3a9e"},{k:"drop",e:"💧 Drop it in the water",c:"#0d9488"}],
    answer:["pick","drop","sink"],reason:"Pick the rock, drop it in water, and watch it sink. Testing sink-or-float is one way to measure matter."},
   {id:"L2",type:"mc",color:"#0d9488",title:"Pick the Tool",q:"Which tool measures how hot or cold an object is?",
    options:["A scale.","A thermometer.","A magnet."],
    answerIndex:1,reason:"A thermometer measures temperature. A scale measures mass and a magnet tests magnetism."},
   {id:"L3",type:"multi",color:"#e0902a",title:"Ways to Measure Matter",q:"Tap ONLY the ways scientists measure or test matter. Leave out the fun fact.",
    items:[{t:"Its mass on a scale.",strong:true},{t:"If a magnet pulls it.",strong:true},{t:"If it sinks or floats.",strong:true},{t:"A giraffe is the tallest land animal.",strong:false}],
    reason:"Mass, magnetism, and sink-or-float are all ways to test matter. The giraffe fact is true but does not measure the object."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"The amount of matter in an object, measured on a scale, is its ____. Type the word.",
    answer:["mass","masa"],reason:"Mass is how much matter an object has. Measuring properties like mass helps us describe matter."}
  ]
 },

 "forces-distance": {
  id: "sci3-forces-distance", teks: "3.7(A)", concept: "Forces at a Distance",
  ui: {
   h1: "Pull Without Touching", sub: "Can a force work without touching? Read the clues and open all four locks.",
   briefH: "Feel the force", briefP: "Some forces push or pull by touching. Others — like magnetism and gravity — can pull from a distance, without touching at all. Use the clues to open the locks!",
   winStamp: "FORCE FOUND ✓", winH: "Force expert!", winP: "You watched gravity pull a ball down, named the force, and found the forces that work at a distance. Magnetism and gravity can pull without touching."
  },
  clues: [
   {id:"c1",ico:"👋",nm:"Touch",title:"Contact Forces",body:"Some forces work by touching. A hand pushing a box is a contact force."},
   {id:"c2",ico:"🧲",nm:"Magnetism",title:"Magnetism",body:"A magnet can pull some metals, like iron, without touching them. That is a force at a distance."},
   {id:"c3",ico:"🌍",nm:"Gravity",title:"Gravity",body:"Gravity is a force that pulls objects down toward Earth, without touching them."},
   {id:"c4",ico:"🍎",nm:"Falling",title:"Things Fall",body:"Drop a ball and gravity pulls it straight down to the ground."},
   {id:"c5",ico:"🌙",nm:"Far Reach",title:"Even in Space",body:"Gravity even reaches into space — Earth's gravity keeps the Moon orbiting around it."},
   {id:"c6",ico:"🐙",nm:"Sea Fact",title:"An Octopus Fact",body:"An octopus has three hearts. That is true and neat — but it is not about forces."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#5b3a9e",title:"Drop a Ball",q:"You drop a ball. Put it in order. Tap the pads in order.",
    pads:[{k:"land",e:"⬇️ It lands on the ground",c:"#2f6fe0"},{k:"let",e:"✋ You let go of the ball",c:"#5b3a9e"},{k:"pull",e:"🌍 Gravity pulls it down",c:"#0d9488"}],
    answer:["let","pull","land"],reason:"You let go, gravity pulls the ball down, and it lands. Gravity works without touching the ball."},
   {id:"L2",type:"mc",color:"#0d9488",title:"What Pulls It Down?",q:"Which force pulls a dropped ball down to the ground?",
    options:["Magnetism.","Gravity.","A push from your hand."],
    answerIndex:1,reason:"Gravity pulls objects down toward Earth. Magnetism only pulls certain metals."},
   {id:"L3",type:"multi",color:"#e0902a",title:"Forces at a Distance",q:"Tap ONLY the forces that work WITHOUT touching. Leave out the fun fact.",
    items:[{t:"A magnet pulling a paper clip.",strong:true},{t:"Gravity pulling a ball down.",strong:true},{t:"Earth's gravity holding the Moon.",strong:true},{t:"An octopus has three hearts.",strong:false}],
    reason:"Magnetism and gravity pull from a distance, without touching. The octopus fact is true but is not a force."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"The force that pulls everything down toward Earth, without touching it, is ____. Type the word.",
    answer:["gravity","gravedad"],reason:"Gravity pulls objects toward Earth from a distance. Naming forces helps us explain how things move."}
  ]
 },

 "energy-forms": {
  id: "sci3-energy-forms", teks: "3.8(A)", concept: "Forms of Energy",
  ui: {
   h1: "Energy Everywhere", sub: "Light, sound, heat, motion — read the clues and open all four locks.",
   briefH: "Spot the energy", briefP: "Energy is all around us in many forms: light, sound, thermal (heat), and mechanical (motion). Use the clues to open the locks!",
   winStamp: "ENERGY FOUND ✓", winH: "Energy expert!", winP: "You watched a ball gain mechanical energy, matched a form of energy, and named one. Energy comes in many forms all around us."
  },
  clues: [
   {id:"c1",ico:"💡",nm:"Light",title:"Light Energy",body:"Light energy lets us see. It comes from the Sun, a lamp, or a flashlight."},
   {id:"c2",ico:"🔊",nm:"Sound",title:"Sound Energy",body:"Sound energy is what we hear. A drum or a bell gives off sound energy."},
   {id:"c3",ico:"🔥",nm:"Thermal",title:"Thermal (Heat) Energy",body:"Thermal energy is heat. A stove and the Sun give off thermal energy."},
   {id:"c4",ico:"⚙️",nm:"Mechanical",title:"Mechanical Energy",body:"Mechanical energy is the energy of a moving object, like a rolling ball or a swinging swing."},
   {id:"c5",ico:"🏃",nm:"Faster",title:"Faster = More",body:"A faster-moving object has more mechanical energy than a slow one."},
   {id:"c6",ico:"🦜",nm:"Bird Fact",title:"A Parrot Fact",body:"Some parrots can copy words. That is true and fun — but it is not a form of energy."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#5b3a9e",title:"Down the Hill",q:"A ball rolls down a hill. Order it from slowest to fastest. Tap the pads in order.",
    pads:[{k:"bottom",e:"🏁 At the bottom (fastest)",c:"#2f6fe0"},{k:"top",e:"⛰️ At the top (still)",c:"#5b3a9e"},{k:"middle",e:"🏃 Rolling faster",c:"#0d9488"}],
    answer:["top","middle","bottom"],reason:"The ball starts still at the top and speeds up going down. A faster ball has more mechanical energy."},
   {id:"L2",type:"mc",color:"#0d9488",title:"From a Lamp",q:"Which form of energy does a lamp give off?",
    options:["Sound energy.","Light energy.","Mechanical energy."],
    answerIndex:1,reason:"A lamp gives off light energy that lets us see. A drum would give off sound energy."},
   {id:"L3",type:"multi",color:"#e0902a",title:"Forms of Energy",q:"Tap ONLY the forms of energy. Leave out the fun fact.",
    items:[{t:"Light from a lamp.",strong:true},{t:"Sound from a drum.",strong:true},{t:"Heat from a stove.",strong:true},{t:"A parrot copying words.",strong:false}],
    reason:"Light, sound, and heat are all forms of energy. The parrot fact is true but is not a form of energy."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"A drum gives off the kind of energy that we hear. It is ____ energy. Type the word.",
    answer:["sound","sonido"],reason:"Sound energy is what we hear. Naming forms of energy helps us spot them everywhere."}
  ]
 },

 "weathering-soil": {
  id: "sci3-weathering-soil", teks: "3.10(B)", concept: "How Soil Forms",
  ui: {
   h1: "Where Does Soil Come From?", sub: "How is dirt made? Read the clues and open all four locks.",
   briefH: "Make some soil", briefP: "Soil forms very slowly, from broken-down rock and rotted plants and animals. Use the clues to open the locks!",
   winStamp: "SOIL MADE ✓", winH: "Great digging!", winP: "You watched soil form, named what breaks rocks apart, and found what makes soil. Soil is weathered rock mixed with rotted plant and animal bits."
  },
  clues: [
   {id:"c1",ico:"🪨",nm:"Rocks",title:"It Starts With Rock",body:"Soil begins as solid rock. Over a very long time, the rock breaks into tiny bits."},
   {id:"c2",ico:"💨",nm:"Weathering",title:"Weathering",body:"Weathering breaks rock into small pieces. Wind, water, and freezing can slowly crack and wear rock apart."},
   {id:"c3",ico:"🍂",nm:"Decomposition",title:"Rotting Bits",body:"Dead plants and animals rot and break down. This is called decomposition, and it mixes into the soil."},
   {id:"c4",ico:"🌱",nm:"Rich Soil",title:"Good for Plants",body:"Soil is weathered rock mixed with rotted plant and animal bits. That mix is what plants grow in."},
   {id:"c5",ico:"⏳",nm:"Slowly",title:"It Takes Time",body:"Making soil takes a very long time — many, many years."},
   {id:"c6",ico:"🐨",nm:"Sleepy Fact",title:"A Koala Fact",body:"Koalas sleep most of the day. That is true and cute — but it is not how soil forms."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#5b3a9e",title:"Make Soil",q:"Put the steps of making soil in order. Tap the pads in order.",
    pads:[{k:"soil",e:"🌱 Soil forms",c:"#0d9488"},{k:"rock",e:"🪨 Solid rock",c:"#5b3a9e"},{k:"break",e:"💨 Weathering breaks it into bits",c:"#e0902a"}],
    answer:["rock","break","soil"],reason:"Solid rock is broken into bits by weathering, and rotted plants mix in to form soil. It takes a very long time."},
   {id:"L2",type:"mc",color:"#0d9488",title:"What Breaks Rock?",q:"What slowly breaks big rocks into tiny bits?",
    options:["Weathering (wind, water, and freezing).","A magnet.","Sunlight only."],
    answerIndex:0,reason:"Weathering — wind, water, and freezing — slowly breaks rock into small pieces that become soil."},
   {id:"L3",type:"multi",color:"#e0902a",title:"What Makes Soil?",q:"Tap ONLY the things that help make soil. Leave out the fun fact.",
    items:[{t:"Weathering breaking rocks into bits.",strong:true},{t:"Dead plants rotting and mixing in.",strong:true},{t:"Dead animals breaking down.",strong:true},{t:"Koalas sleep most of the day.",strong:false}],
    reason:"Weathered rock plus rotted plants and animals make soil. The koala fact is true but does not make soil."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"Weathered rock mixed with rotted plant and animal bits is ____. Type the word.",
    answer:["soil","dirt","suelo","tierra"],reason:"Soil is weathered rock plus rotted living things. Knowing how it forms explains why it helps plants grow."}
  ]
 },

 "rapid-changes": {
  id: "sci3-rapid-changes", teks: "3.10(C)", concept: "Rapid Earth Changes",
  ui: {
   h1: "Earth in a Hurry", sub: "Some changes to Earth happen fast! Read the clues and open all four locks.",
   briefH: "Watch it change fast", briefP: "Weathering changes Earth slowly. But volcanoes, earthquakes, and landslides can change the land very fast. Use the clues to open the locks!",
   winStamp: "SHAKEN ✓", winH: "Earth scientist!", winP: "You watched a volcano erupt, found a fast change, and named one. Volcanoes, earthquakes, and landslides change Earth's surface quickly."
  },
  clues: [
   {id:"c1",ico:"⏳",nm:"Slow",title:"Slow Changes",body:"Some changes to Earth happen very slowly, like a rock wearing away over many years."},
   {id:"c2",ico:"🌋",nm:"Volcano",title:"Volcanoes",body:"A volcano can erupt and send out lava that quickly cools into new rock and land."},
   {id:"c3",ico:"🌎",nm:"Earthquake",title:"Earthquakes",body:"An earthquake shakes the ground and can crack Earth's surface in seconds."},
   {id:"c4",ico:"⛰️",nm:"Landslide",title:"Landslides",body:"A landslide sends rocks and dirt sliding fast down a steep hill."},
   {id:"c5",ico:"⚡",nm:"Fast",title:"Rapid Changes",body:"Volcanoes, earthquakes, and landslides are rapid changes — they change the land quickly."},
   {id:"c6",ico:"🦩",nm:"Pink Fact",title:"A Flamingo Fact",body:"Flamingos are pink from the food they eat. That is true and fun — but it is not a change to Earth's surface."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#5b3a9e",title:"A Volcano Erupts",q:"Put a volcano's eruption in order. Tap the pads in order.",
    pads:[{k:"cool",e:"🪨 Lava cools into new rock",c:"#0d9488"},{k:"build",e:"🔥 Pressure builds up",c:"#5b3a9e"},{k:"erupt",e:"🌋 The volcano erupts",c:"#e0533a"}],
    answer:["build","erupt","cool"],reason:"Pressure builds, the volcano erupts, and the lava cools into new rock. A volcano changes the land quickly."},
   {id:"L2",type:"mc",color:"#0d9488",title:"Fast Change",q:"Which is a RAPID (fast) change to Earth's surface?",
    options:["A rock slowly wearing away.","An earthquake cracking the ground.","Soil forming over many years."],
    answerIndex:1,reason:"An earthquake changes the land in seconds — a rapid change. Wearing away and soil forming are slow changes."},
   {id:"L3",type:"multi",color:"#e0902a",title:"Rapid Changes",q:"Tap ONLY the rapid (fast) changes to Earth. Leave out the fun fact.",
    items:[{t:"A volcanic eruption.",strong:true},{t:"An earthquake.",strong:true},{t:"A landslide.",strong:true},{t:"Flamingos are pink from their food.",strong:false}],
    reason:"Volcanoes, earthquakes, and landslides all change the land quickly. The flamingo fact is true but is not an Earth change."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"A sudden shaking that can crack the ground in seconds is an ____. Type the word.",
    answer:["earthquake","earthquakes","terremoto","temblor"],reason:"An earthquake is a rapid change to Earth's surface. Naming it helps us tell fast changes from slow ones."}
  ]
 },

 "food-chain": {
  id: "sci3-food-chain", teks: "3.12(B)", concept: "Energy in a Food Chain",
  ui: {
   h1: "Follow the Energy", sub: "How does energy move through living things? Read the clues and open all four locks.",
   briefH: "Trace the chain", briefP: "A food chain shows how energy flows from the Sun to plants to animals. Change one part, and the whole chain feels it. Use the clues to open the locks!",
   winStamp: "CHAIN TRACED ✓", winH: "Ecosystem expert!", winP: "You built a food chain, found where the energy starts, and named it. Energy flows from the Sun through plants to animals — and every part depends on the others."
  },
  clues: [
   {id:"c1",ico:"☀️",nm:"The Sun",title:"Energy Starts Here",body:"The energy in a food chain starts with the Sun. Plants use sunlight to make food."},
   {id:"c2",ico:"🌿",nm:"Producers",title:"Plants Make Food",body:"Plants are producers. They make their own food and store energy in it."},
   {id:"c3",ico:"🐛",nm:"Flow Up",title:"Energy Flows",body:"Energy flows up the chain: a plant is eaten by a plant-eater, which is eaten by a meat-eater."},
   {id:"c4",ico:"🔗",nm:"All Connected",title:"One Change, Big Effect",body:"If one part of the chain is removed, the whole chain is affected. Remove the frogs, and the bugs they ate may grow in number."},
   {id:"c5",ico:"🐸",nm:"Example",title:"Pond Chain",body:"In a pond: sunlight helps plants grow, bugs eat the plants, and frogs eat the bugs."},
   {id:"c6",ico:"🌋",nm:"Hot Fact",title:"A Volcano Fact",body:"A volcano can shoot lava high in the air. That is true and wild — but it is not part of a food chain."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#5b3a9e",title:"Build the Chain",q:"Put the food chain in order, starting with the Sun. Tap the pads in order.",
    pads:[{k:"frog",e:"🐸 Frog eats the grasshopper",c:"#0d9488"},{k:"sun",e:"☀️ The Sun shines",c:"#5b3a9e"},{k:"grass",e:"🌿 Grass grows",c:"#e0902a"},{k:"hop",e:"🦗 Grasshopper eats the grass",c:"#2f6fe0"}],
    answer:["sun","grass","hop","frog"],reason:"The Sun helps grass grow, a grasshopper eats the grass, and a frog eats the grasshopper. Energy flows up the chain."},
   {id:"L2",type:"mc",color:"#0d9488",title:"Where It Starts",q:"Where does the energy in a food chain start?",
    options:["With the meat-eaters.","With the Sun, which plants use to make food.","With the soil."],
    answerIndex:1,reason:"The energy starts with the Sun. Plants capture sunlight to make food, which feeds the rest of the chain."},
   {id:"L3",type:"multi",color:"#e0902a",title:"True About Food Chains",q:"Tap ONLY the true clues about food chains. Leave out the fun fact.",
    items:[{t:"Energy flows from plants to animals.",strong:true},{t:"The energy starts with the Sun.",strong:true},{t:"Removing one part changes the whole chain.",strong:true},{t:"A volcano can shoot lava high.",strong:false}],
    reason:"Energy flows up from the Sun and plants, and every part is connected. The volcano fact is true but is not part of a food chain."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"The thing that flows from the Sun through plants and animals in a food chain is ____. Type the word.",
    answer:["energy","energía","energia"],reason:"Energy flows through a food chain, starting with the Sun. Tracing it shows how living things depend on each other."}
  ]
 },

 "fossils": {
  id: "sci3-fossils", teks: "3.12(D)", concept: "Fossils",
  ui: {
   h1: "Clues From Long Ago", sub: "What can a fossil tell us? Read the clues and open all four locks.",
   briefH: "Read the rocks", briefP: "Fossils are the preserved remains or prints of living things from long ago. They are evidence of what once lived on Earth. Use the clues to open the locks!",
   winStamp: "DUG UP ✓", winH: "Fossil hunter!", winP: "You watched a fossil form, learned what it can tell us, and named it. Fossils are evidence of the plants and animals that lived long ago."
  },
  clues: [
   {id:"c1",ico:"🦴",nm:"Fossil",title:"What a Fossil Is",body:"A fossil is the preserved remains or print of a plant or animal that lived a very long time ago."},
   {id:"c2",ico:"🪨",nm:"Turns to Rock",title:"How It Forms",body:"A plant or animal gets buried, and over a very long time its shape turns to rock — a fossil."},
   {id:"c3",ico:"🔍",nm:"Evidence",title:"Evidence of the Past",body:"Fossils are evidence. They tell scientists what kinds of living things lived long ago."},
   {id:"c4",ico:"🦕",nm:"Footprints",title:"Prints Count Too",body:"Even a footprint pressed into mud that hardened into rock can be a fossil."},
   {id:"c5",ico:"🐚",nm:"Texas Fossils",title:"Under the Sea",body:"Texas has many fossils of sea creatures — a clue that Texas was once covered by an ocean."},
   {id:"c6",ico:"🎈",nm:"Party Fact",title:"A Balloon Fact",body:"A balloon floats when filled with helium. That is true and fun — but it is not about fossils."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#5b3a9e",title:"How a Fossil Forms",q:"Put the steps of making a fossil in order. Tap the pads in order.",
    pads:[{k:"rock",e:"🪨 It slowly turns to rock",c:"#0d9488"},{k:"die",e:"🦕 An animal dies",c:"#5b3a9e"},{k:"bury",e:"⛰️ It gets buried in mud",c:"#e0902a"}],
    answer:["die","bury","rock"],reason:"An animal dies, gets buried, and over a very long time turns to rock — a fossil. That fossil is left as evidence."},
   {id:"L2",type:"mc",color:"#0d9488",title:"What It Tells Us",q:"What can a fossil tell scientists?",
    options:["What the weather is like today.","What kinds of living things lived long ago.","How to build a house."],
    answerIndex:1,reason:"A fossil is evidence of the past — it shows what plants and animals lived long ago."},
   {id:"L3",type:"multi",color:"#e0902a",title:"True About Fossils",q:"Tap ONLY the true clues about fossils. Leave out the fun fact.",
    items:[{t:"They are evidence of past living things.",strong:true},{t:"They form over a very long time.",strong:true},{t:"A footprint hardened in rock can be a fossil.",strong:true},{t:"A helium balloon floats.",strong:false}],
    reason:"Fossils are slow-forming evidence of the past, including footprints in rock. The balloon fact is true but is not about fossils."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"The preserved remains or print of a living thing from long ago is a ____. Type the word.",
    answer:["fossil","fossils","fósil","fosil"],reason:"A fossil is evidence of past life. Reading fossils tells us about Earth long ago."}
  ]
 },

 "survival-structures": {
  id: "sci3-survival-structures", teks: "3.13(A)", concept: "Structures for Survival",
  ui: {
   h1: "Built to Survive", sub: "How do animal body parts help them live? Read the clues and open all four locks.",
   briefH: "Match the body part", briefP: "Animals have body parts, called structures, that help them find food, move, and survive where they live. Use the clues to open the locks!",
   winStamp: "SURVIVED ✓", winH: "Animal expert!", winP: "You saw how a giraffe eats, found what helps a duck swim, and named a bird's tool. Animal structures help them survive in their homes."
  },
  clues: [
   {id:"c1",ico:"🦒",nm:"Long Neck",title:"A Giraffe's Neck",body:"A giraffe's long neck helps it reach leaves high up in tall trees where other animals cannot."},
   {id:"c2",ico:"🦆",nm:"Webbed Feet",title:"A Duck's Feet",body:"A duck's webbed feet act like paddles to help it swim through water."},
   {id:"c3","ico":"🐦","nm":"Beak","title":"A Bird's Beak",body:"A bird uses its beak to catch and eat food. Different beak shapes eat different foods."},
   {id:"c4",ico:"🐾",nm:"Claws",title:"Sharp Claws",body:"Sharp claws help some animals catch food or climb trees."},
   {id:"c5",ico:"🏠",nm:"Match the Home",title:"Fit for the Habitat",body:"An animal's structures match where it lives — swimmers have fins or webbed feet, climbers have claws."},
   {id:"c6",ico:"⚡",nm:"Sky Fact",title:"A Lightning Fact",body:"Lightning is very hot. That is true and powerful — but it is not an animal body part."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#5b3a9e",title:"How a Giraffe Eats",q:"Put it in order to show how a giraffe reaches high leaves. Tap the pads in order.",
    pads:[{k:"eat",e:"😋 It eats the high leaves",c:"#0d9488"},{k:"tree",e:"🌳 Leaves grow high on a tree",c:"#5b3a9e"},{k:"stretch",e:"🦒 It stretches its long neck up",c:"#e0902a"}],
    answer:["tree","stretch","eat"],reason:"The leaves are high, the giraffe stretches its long neck up, and it eats. Its neck is a structure that helps it survive."},
   {id:"L2",type:"mc",color:"#0d9488",title:"Swimming Help",q:"What body part helps a duck swim in water?",
    options:["Its beak.","Its webbed feet.","Its wings only."],
    answerIndex:1,reason:"A duck's webbed feet work like paddles to push it through water."},
   {id:"L3",type:"multi",color:"#e0902a",title:"Structures That Help",q:"Tap ONLY the body structures that help an animal survive. Leave out the fun fact.",
    items:[{t:"A giraffe's long neck for high leaves.",strong:true},{t:"A duck's webbed feet for swimming.",strong:true},{t:"Sharp claws for catching food.",strong:true},{t:"Lightning is very hot.",strong:false}],
    reason:"A neck, webbed feet, and claws all help animals survive. The lightning fact is true but is not a body part."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"A bird uses its ____ to catch and eat food. Type the word.",
    answer:["beak","beaks","bill","pico"],reason:"A bird's beak helps it eat. Body structures like the beak help animals survive in their homes."}
  ]
 }

};
