/* Grade 6 "More" — short single-concept Critical Thinking Online Breakouts, one per
   key TEKS concept (§112.26). Each entry is a compact record; the player (play.html)
   merges MORE_BASE_UI with the entry's ui overrides and hands the result to the shared
   engine. 6 clues (1 decoy) + 4 locks (seq/mc/multi/word), each reason names the move. */
window.MORE_BASE_UI = {
  en: {
    "sect.clues": "🔍 The Evidence",
    "sect.cluesHint": "Tap each piece of evidence to read it. (You can reopen them anytime.)",
    "sect.locks": "🔒 The Locks",
    "sect.locksHint": "Solve each lock using only the evidence above.",
    "crumb.teacher": "‹ More Grade 6 breakouts",
    "crumb.suite": "Grade 6 Science",
    "ui.reset": "↺ Reset", "ui.check": "Check", "ui.gotit": "Got it", "ui.playagain": "Play Again",
    "ui.solved": "🔓 Solved!", "ui.pcount": "{n} of {total} locks open",
    "ui.wordph": "Type your answer", "ui.clear": "clear",
    "fb.digit": "That number doesn't match the evidence. Check again.",
    "fb.word": "Check the evidence for the word that fits.",
    "fb.mc": "That one isn't supported by the evidence. Look again.",
    "fb.multiExtra": "One pick isn't strong evidence. Strong means what the evidence actually proves.",
    "fb.multiMissing": "You're missing a piece of strong evidence. Find them all.",
    "fb.seq": "That order doesn't match the evidence. Try again.",
    "footer.privacy": "Privacy & compliance", "footer.text": "Grade 6 Science · Critical Thinking Online Breakouts · Runs entirely in your browser — no logins, no data collected.",
    "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.26, Grade 6). Good-faith paraphrase; confirm before adoption.",
    "header.eyebrow": "Grade 6 Science · Quick Concept Breakout",
    "brief.label": "🎯 Warm-Up"
  }
};

window.MORE = {

 "states-matter": {
  id: "sci6-states-matter", teks: "6.6(A)", concept: "States of Matter",
  ui: {
   h1: "States of Matter", sub: "Solid, liquid, or gas? It all comes down to how the tiny particles move. Read the evidence and open all four locks.",
   briefH: "Same stuff, different states", briefP: "A block of ice, a puddle, and steam are all water — but the particles behave very differently in each. Use the evidence to sort out solids, liquids, and gases.",
   winStamp: "STATES SORTED ✓", winH: "You know your states!", winP: "You ordered the states by particle energy, spotted what makes a gas a gas, and named the energy of moving particles. That's how matter changes form."
  },
  clues: [
   {id:"c1",ico:"🧊",nm:"Solid",title:"Solids Hold Their Shape",body:"In a solid, particles are packed close and only vibrate in place. A solid keeps its own shape and volume."},
   {id:"c2",ico:"💧",nm:"Liquid",title:"Liquids Flow",body:"In a liquid, particles are close but slide past each other. A liquid keeps its volume but takes the shape of its container."},
   {id:"c3",ico:"💨",nm:"Gas",title:"Gases Fill Up",body:"In a gas, particles are far apart and zip around fast. A gas spreads out to fill any container it is in."},
   {id:"c4",ico:"🔥",nm:"Add Heat",title:"Heat Adds Energy",body:"Heating matter gives its particles more kinetic energy, so they move faster and spread apart. Enough heat can melt a solid or boil a liquid."},
   {id:"c5",ico:"❄️",nm:"Remove Heat",title:"Cooling Slows It",body:"Cooling takes energy away, so particles slow down and pack closer. That is how a gas condenses or a liquid freezes."},
   {id:"c6",ico:"☁️",nm:"Sky Fact",title:"A Cloud Fact",body:"A large cumulus cloud can hold over a million pounds of water droplets. It's a fun fact — but it doesn't tell you how particles move in a solid, liquid, or gas."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0a6b52",title:"Order by Particle Energy",q:"Order the three states from the LEAST particle energy and spacing to the MOST. Tap the pads in order.",
    pads:[{k:"gas",e:"💨 Gas",c:"#2f6fe0"},{k:"solid",e:"🧊 Solid",c:"#1aa3b8"},{k:"liquid",e:"💧 Liquid",c:"#f0a316"}],
    answer:["solid","liquid","gas"],reason:"Particles have the least energy and spacing in a solid and the most in a gas. Ordering by particle motion is how we explain states of matter."},
   {id:"L2",type:"mc",color:"#2f6fe0",title:"Which Is a Gas?",q:"Which description matches a gas?",
    options:["Particles are packed tight and only vibrate in place.","Particles are far apart, move fast, and fill any container.","Particles slide past each other but keep a fixed volume."],
    answerIndex:1,reason:"A gas has fast, far-apart particles that spread to fill its container — that's what separates it from a solid or liquid."},
   {id:"L3",type:"multi",color:"#f0a316",title:"Melting Ice",q:"Check ONLY the strong evidence that heating ice can melt it. Leave out the true-but-off-topic fact.",
    items:[{t:"Heat gives the particles more energy so they move faster.",strong:true},{t:"Faster particles spread apart, so the solid can become a liquid.",strong:true},{t:"Adding energy is what changes a solid toward a liquid.",strong:true},{t:"A cumulus cloud can hold over a million pounds of water.",strong:false}],
    reason:"Melting happens because added energy speeds particles until they slide past each other. The cloud fact is true but has nothing to do with melting."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name the Energy",q:"The energy of moving particles — the energy that increases when you heat matter — is called ____ energy. Type the word.",
    answer:["kinetic","cinética","cinetica"],reason:"Kinetic energy is the energy of motion. Heating raises particles' kinetic energy, which is why matter can change state."}
  ]
 },

 "mixtures": {
  id: "sci6-mixtures", teks: "6.6(B)", concept: "Mixtures & Pure Substances",
  ui: {
   h1: "Mixture or Pure?", sub: "Trail mix, salt water, pure gold — which is which? Investigate the evidence and open all four locks.",
   briefH: "Sort the substances", briefP: "Some materials are one pure substance; others are mixtures you could pull back apart. Use the evidence to tell pure substances from evenly-mixed and unevenly-mixed mixtures.",
   winStamp: "SORTED ✓", winH: "Mixture master!", winP: "You separated a mixture, spotted an even mixture, and named it. Because a mixture isn't chemically joined, you can always take it apart again."
  },
  clues: [
   {id:"c1",ico:"💎",nm:"Pure",title:"Pure Substances",body:"A pure substance is made of just one kind of particle, like pure water or pure gold. It can't be separated by simple physical steps."},
   {id:"c2",ico:"🥣",nm:"Mixture",title:"Mixtures",body:"A mixture is two or more materials mixed together but NOT chemically joined. Because of that, you can separate them again."},
   {id:"c3",ico:"🧂",nm:"Even",title:"Evenly Mixed",body:"A homogeneous mixture is mixed so evenly it looks the same throughout — like salt water. You can't see the separate parts."},
   {id:"c4",ico:"🥜",nm:"Uneven",title:"Unevenly Mixed",body:"A heterogeneous mixture has parts you can still see and separate, like trail mix or a salad."},
   {id:"c5",ico:"☀️",nm:"Separate",title:"Pulling It Apart",body:"You can separate salt water by letting the water evaporate — the salt is left behind. This works because the mixture was never chemically joined."},
   {id:"c6",ico:"🐝",nm:"Bee Fact",title:"A Honey Fact",body:"Honeybees visit about two million flowers to make one pound of honey. It's true and amazing — but it won't help you classify a mixture."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0a6b52",title:"Separate the Salt Water",q:"Order the steps to separate salt from salt water. Tap the pads in order.",
    pads:[{k:"salt",e:"🧂 Salt is left behind",c:"#1aa3b8"},{k:"pour",e:"🥣 Pour the salt water in a dish",c:"#f0a316"},{k:"evap",e:"☀️ Water evaporates away",c:"#2f6fe0"}],
    answer:["pour","evap","salt"],reason:"Pour it out, let the water evaporate, and the salt remains. It separates because a mixture is not chemically joined."},
   {id:"L2",type:"mc",color:"#2f6fe0",title:"Which Is Homogeneous?",q:"Which of these is a homogeneous (evenly mixed) mixture?",
    options:["Trail mix with nuts and raisins.","Salt water that looks the same throughout.","A pile of pure copper."],
    answerIndex:1,reason:"Salt water is mixed so evenly it looks uniform — homogeneous. Trail mix is uneven, and pure copper isn't a mixture at all."},
   {id:"L3",type:"multi",color:"#f0a316",title:"Is Trail Mix a Mixture?",q:"Check ONLY the strong evidence that trail mix is a heterogeneous mixture. Leave out the true-but-off-topic fact.",
    items:[{t:"You can see the separate nuts and raisins.",strong:true},{t:"You can pick the pieces apart without a chemical reaction.",strong:true},{t:"The parts are not spread out evenly.",strong:true},{t:"Honeybees visit about two million flowers per pound of honey.",strong:false}],
    reason:"Trail mix is heterogeneous because its parts are visible, uneven, and separable. The honey fact is true but off-topic."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name the Even Mixture",q:"A mixture that is blended so evenly it looks the same everywhere (like salt water) is called a ____ mixture. Type the word.",
    answer:["homogeneous","homogenous","homogénea","homogenea","solution"],reason:"A homogeneous mixture looks uniform throughout. Naming the type is how scientists classify what they observe."}
  ]
 },

 "periodic-table": {
  id: "sci6-periodic-table", teks: "6.6(C)", concept: "The Periodic Table",
  ui: {
   h1: "Reading the Periodic Table", sub: "Metals, nonmetals, and the in-betweeners. Use the evidence and open all four locks.",
   briefH: "Meet the elements", briefP: "The periodic table sorts every element by its properties. Use the evidence to tell metals from nonmetals — and spot the metalloids that sit between them.",
   winStamp: "ELEMENTS DECODED ✓", winH: "Table master!", winP: "You lined up the element types, matched a metal's properties, and named the in-between elements. The periodic table is a map of properties."
  },
  clues: [
   {id:"c1",ico:"🔩",nm:"Metals",title:"Metals",body:"Most elements are metals. They are usually shiny, bend without breaking, and conduct heat and electricity. They sit on the left and middle of the table."},
   {id:"c2",ico:"🎈",nm:"Nonmetals",title:"Nonmetals",body:"Nonmetals are often dull, brittle, and do NOT conduct well. They sit on the right side of the table (except hydrogen)."},
   {id:"c3",ico:"🪜",nm:"In Between",title:"Metalloids",body:"Metalloids sit along the 'staircase' between metals and nonmetals. They have some properties of each — silicon, used in computer chips, is one."},
   {id:"c4",ico:"📱",nm:"Rare Earth",title:"Rare-Earth Elements",body:"Rare-earth elements are special metals used in phones, magnets, and screens. Modern technology depends on them."},
   {id:"c5",ico:"🔤",nm:"Symbols",title:"Element Symbols",body:"Each element has a one- or two-letter symbol, like O for oxygen or Fe for iron. The table is arranged by these elements' properties."},
   {id:"c6",ico:"🦈",nm:"Ocean Fact",title:"A Shark Fact",body:"A shark can have thousands of teeth over its lifetime, replacing them constantly. It's a true fact — but it won't help you read the periodic table."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0a6b52",title:"Left to Right",q:"Moving across the table, order these groups from the LEFT side to the RIGHT side. Tap the pads in order.",
    pads:[{k:"non",e:"🎈 Nonmetals",c:"#2f6fe0"},{k:"met",e:"🔩 Metals",c:"#1aa3b8"},{k:"loid",e:"🪜 Metalloids",c:"#f0a316"}],
    answer:["met","loid","non"],reason:"Metals fill the left and middle, metalloids form the staircase, and nonmetals sit on the right. The table's position tells you an element's properties."},
   {id:"L2",type:"mc",color:"#2f6fe0",title:"Spot the Metal",q:"Which set of properties describes a metal?",
    options:["Dull, brittle, and a poor conductor.","Shiny, bendable, and conducts electricity.","A gas that fills its container."],
    answerIndex:1,reason:"Metals are shiny, bendable, and good conductors. Dull-and-brittle describes nonmetals."},
   {id:"L3",type:"multi",color:"#f0a316",title:"Why Silicon Is a Metalloid",q:"Check ONLY the strong evidence that silicon is a metalloid. Leave out the true-but-off-topic fact.",
    items:[{t:"It sits along the staircase between metals and nonmetals.",strong:true},{t:"It has some properties of metals and some of nonmetals.",strong:true},{t:"It is used in computer chips as a semiconductor.",strong:true},{t:"A shark can grow thousands of teeth over its life.",strong:false}],
    reason:"A metalloid sits between the two groups and shares properties of both. The shark fact is true but irrelevant."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name the In-Betweeners",q:"Elements along the staircase that share properties of metals AND nonmetals are called ____. Type the word.",
    answer:["metalloid","metalloids","metaloide","metaloides"],reason:"Metalloids sit between metals and nonmetals. Naming a category from its properties is core science thinking."}
  ]
 },

 "density": {
  id: "sci6-density", teks: "6.6(D)", concept: "Density & Buoyancy",
  ui: {
   h1: "Density: Sink or Float?", sub: "Why does a heavy ship float but a small coin sink? Use the evidence and open all four locks.",
   briefH: "Crack the float code", briefP: "Floating isn't about being heavy or light — it's about density compared to the fluid. Use the evidence to predict what sinks and what floats.",
   winStamp: "FLOAT CRACKED ✓", winH: "Density detective!", winP: "You stacked liquids by density, explained why ice floats, and named the idea. Density — mass packed into volume — decides who floats."
  },
  clues: [
   {id:"c1",ico:"⚖️",nm:"Density",title:"What Density Is",body:"Density is how much mass is packed into a space: density = mass ÷ volume. Two objects the same size can have very different densities."},
   {id:"c2",ico:"🎈",nm:"Float Rule",title:"The Float Rule",body:"An object floats in a fluid when its density is LESS than the fluid's, and sinks when its density is MORE."},
   {id:"c3",ico:"🫗",nm:"Oil & Water",title:"Liquids Stack",body:"Pour oil, water, and honey together and they layer up. The least dense liquid (oil) floats on top; the densest (honey) sinks to the bottom."},
   {id:"c4",ico:"🧊",nm:"Ice Floats",title:"Ice on Water",body:"Ice floats because frozen water is LESS dense than liquid water. That's unusual — most solids sink in their own liquid."},
   {id:"c5",ico:"🛶",nm:"Shape Matters",title:"Shape Changes Density",body:"A ball of clay sinks, but flatten the same clay into a boat and it floats. The boat shape holds more volume, lowering its overall density."},
   {id:"c6",ico:"🐋",nm:"Whale Fact",title:"A Whale Fact",body:"A blue whale's heart is about the size of a small car. It's a true, amazing fact — but it won't tell you whether something floats."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0a6b52",title:"Stack the Liquids",q:"Order the liquids from the TOP layer to the BOTTOM layer (least dense to most dense). Tap the pads in order.",
    pads:[{k:"honey",e:"🍯 Honey",c:"#f0a316"},{k:"oil",e:"🫗 Oil",c:"#1aa3b8"},{k:"water",e:"💧 Water",c:"#2f6fe0"}],
    answer:["oil","water","honey"],reason:"The least dense liquid floats on top and the densest sinks to the bottom. Ordering by density predicts the layers."},
   {id:"L2",type:"mc",color:"#2f6fe0",title:"Why Ice Floats",q:"Why does an ice cube float in a glass of water?",
    options:["Because ice is colder than the water.","Because ice is less dense than liquid water.","Because ice weighs nothing."],
    answerIndex:1,reason:"Floating depends on density, not temperature or weight. Ice is less dense than liquid water, so it floats."},
   {id:"L3",type:"multi",color:"#f0a316",title:"Clay Ball vs. Clay Boat",q:"Check ONLY the strong evidence that a clay boat floats while a clay ball sinks. Leave out the true-but-off-topic fact.",
    items:[{t:"The boat shape spreads the same mass over more volume.",strong:true},{t:"More volume lowers the clay's overall density.",strong:true},{t:"With density below the water's, the boat floats.",strong:true},{t:"A blue whale's heart is about the size of a small car.",strong:false}],
    reason:"Same mass in more volume means lower density, so the boat floats. The whale fact is true but off-topic."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name the Idea",q:"Mass ÷ volume — the amount of mass packed into a space, which decides floating — is called ____. Type the word.",
    answer:["density","densidad"],reason:"Density is mass per volume. Comparing an object's density to a fluid's tells you if it floats."}
  ]
 },

 "chemical-change": {
  id: "sci6-chemical-change", teks: "6.6(E)", concept: "Chemical Change",
  ui: {
   h1: "Chemical Change Detective", sub: "Did a NEW substance form, or did it just change shape? Use the evidence and open all four locks.",
   briefH: "New substance or not?", briefP: "A chemical change makes a brand-new substance; a physical change does not. Use the evidence to read the clues a reaction leaves behind.",
   winStamp: "CASE SOLVED ✓", winH: "Sharp detective!", winP: "You tracked rust forming, spotted the sign of a new gas, and named the change. Gas, color, heat, or a new solid all signal a chemical change."
  },
  clues: [
   {id:"c1",ico:"⚗️",nm:"Chemical",title:"Chemical Change",body:"In a chemical change, atoms rearrange to make a NEW substance with new properties. It usually cannot be easily undone."},
   {id:"c2",ico:"🫧",nm:"Gas Sign",title:"Sign: A New Gas",body:"Bubbles of a new gas forming (without boiling) are a sign that a chemical change is happening."},
   {id:"c3",ico:"🌡️",nm:"Heat Sign",title:"Sign: Energy Change",body:"A change in temperature — the mixture getting hot or cold on its own — can signal a chemical change."},
   {id:"c4",ico:"🎨",nm:"Color Sign",title:"Sign: Color & Solids",body:"A surprising color change, or a new solid (a precipitate) forming in a liquid, are also signs of a chemical change."},
   {id:"c5",ico:"✂️",nm:"Physical",title:"Physical Change",body:"Cutting, melting, or crushing are PHYSICAL changes — the substance looks different but is still the same material, and no new substance forms."},
   {id:"c6",ico:"🦩",nm:"Bird Fact",title:"A Flamingo Fact",body:"Flamingos turn pink from pigments in the food they eat. It's a true fact about color — but eating shrimp isn't the chemical-change sign you're testing here."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0a6b52",title:"Watch Iron Rust",q:"Order what happens as iron rusts over time. Tap the pads in order.",
    pads:[{k:"rust",e:"🟤 Brown rust (new substance) forms",c:"#f0a316"},{k:"iron",e:"🔩 Shiny iron",c:"#1aa3b8"},{k:"air",e:"💧 Exposed to air and water",c:"#2f6fe0"}],
    answer:["iron","air","rust"],reason:"Shiny iron meets air and water, and a new substance — rust — forms. A new substance is the mark of a chemical change."},
   {id:"L2",type:"mc",color:"#2f6fe0",title:"Which Is Chemical?",q:"Which of these is evidence of a CHEMICAL change?",
    options:["An ice cube melting into water.","Bubbles of a new gas forming when two liquids mix.","A wire being bent into a new shape."],
    answerIndex:1,reason:"A new gas signals a new substance — a chemical change. Melting and bending are physical changes."},
   {id:"L3",type:"multi",color:"#f0a316",title:"Cooking an Egg",q:"Check ONLY the strong evidence that cooking an egg is a chemical change. Leave out the true-but-off-topic fact.",
    items:[{t:"The clear part turns solid and white — a new substance.",strong:true},{t:"The change can't be reversed back to a raw egg.",strong:true},{t:"Its texture and properties change permanently.",strong:true},{t:"Flamingos turn pink from pigments in their food.",strong:false}],
    reason:"A new, unchangeable substance with new properties means a chemical change. The flamingo fact is true but off-topic."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name the Change",q:"A change that forms a brand-new substance (shown by gas, color, heat, or a new solid) is a ____ change. Type the word.",
    answer:["chemical","química","quimica"],reason:"A chemical change makes a new substance. Reading the signs is how scientists tell it from a physical change."}
  ]
 },

 "forces": {
  id: "sci6-forces", teks: "6.7(A,B,C)", concept: "Forces & Net Force",
  ui: {
   h1: "Balanced or Unbalanced?", sub: "What makes an object start, stop, or keep still? Use the evidence and open all four locks.",
   briefH: "Add up the forces", briefP: "Forces are pushes and pulls. When they add up to zero, motion doesn't change; when they don't, it does. Use the evidence to reason about forces.",
   winStamp: "FORCES FIGURED ✓", winH: "Force pro!", winP: "You followed a ball through balanced and unbalanced forces, read a tug-of-war, and spotted a Newton's Third Law pair. Net force decides motion."
  },
  clues: [
   {id:"c1",ico:"👐",nm:"Force",title:"Forces Are Pushes & Pulls",body:"A force is a push or a pull. Gravity, friction, magnetism, an applied push, and the normal (support) force are all forces."},
   {id:"c2",ico:"➕",nm:"Net Force",title:"Net Force",body:"The net force is what's left after you add up all the forces on an object, including their directions."},
   {id:"c3",ico:"⚖️",nm:"Balanced",title:"Balanced Forces",body:"When forces add up to ZERO, they are balanced. A balanced net force means the object's motion does NOT change — it stays still or keeps moving the same."},
   {id:"c4",ico:"💥",nm:"Unbalanced",title:"Unbalanced Forces",body:"When forces do NOT add up to zero, they are unbalanced. An unbalanced net force makes an object speed up, slow down, or change direction."},
   {id:"c5",ico:"🔁",nm:"Third Law",title:"Newton's Third Law",body:"For every force there is an equal and opposite force on the OTHER object. A rocket pushes gas down; the gas pushes the rocket up."},
   {id:"c6",ico:"🐆",nm:"Speed Fact",title:"A Cheetah Fact",body:"A cheetah can reach about 70 miles per hour in short bursts. It's a true fact about speed — but it won't tell you if forces are balanced."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0a6b52",title:"Follow the Soccer Ball",q:"Order what happens to a soccer ball. Tap the pads in order.",
    pads:[{k:"kick",e:"💥 Kicked — unbalanced force",c:"#f0a316"},{k:"rest",e:"⚖️ Sitting still — balanced",c:"#1aa3b8"},{k:"slow",e:"🛑 Rolls and slows — friction",c:"#2f6fe0"}],
    answer:["rest","kick","slow"],reason:"Still (balanced) → kicked (unbalanced) → slowed by friction (unbalanced again). A change in motion always means an unbalanced net force."},
   {id:"L2",type:"mc",color:"#2f6fe0",title:"The Frozen Rope",q:"In tug-of-war, both teams pull hard but the rope doesn't move. What's true?",
    options:["The forces are unbalanced.","The forces are balanced, so the net force is zero.","No one is pulling."],
    answerIndex:1,reason:"The rope doesn't move because the pulls cancel — balanced forces, net force zero. Big forces can still add to zero."},
   {id:"L3",type:"multi",color:"#f0a316",title:"Rocket Liftoff",q:"Check ONLY the strong evidence that a rocket lifting off shows Newton's Third Law. Leave out the true-but-off-topic fact.",
    items:[{t:"The engine pushes hot gas downward.",strong:true},{t:"The gas pushes the rocket upward with an equal force.",strong:true},{t:"The two forces are equal, opposite, and act on different objects.",strong:true},{t:"A cheetah can run about 70 miles per hour.",strong:false}],
    reason:"Third-Law pairs are equal, opposite, and act on different objects — the gas and the rocket. The cheetah fact is true but off-topic."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name the Force",q:"The force that resists sliding and slows a rolling ball — the rubbing force between surfaces — is called ____. Type the word.",
    answer:["friction","fricción","friccion"],reason:"Friction opposes motion between surfaces. Naming each force is the first step to adding them into a net force."}
  ]
 },

 "waves": {
  id: "sci6-waves", teks: "6.8(C)", concept: "Waves",
  ui: {
   h1: "Waves: Two Kinds", sub: "How do sound and light carry energy? Use the evidence and open all four locks.",
   briefH: "Ride the wave", briefP: "Waves carry energy from place to place. Some wiggle side-to-side, others squeeze and stretch. Use the evidence to tell transverse from longitudinal waves.",
   winStamp: "WAVES READ ✓", winH: "Wave rider!", winP: "You traced how sound travels, matched a wave type, and named the side-to-side kind. Waves move energy — not the stuff they pass through."
  },
  clues: [
   {id:"c1",ico:"🌊",nm:"Waves Carry",title:"Waves Carry Energy",body:"A wave carries ENERGY from one place to another. The material it passes through mostly stays put — only the energy moves along."},
   {id:"c2",ico:"〰️",nm:"Transverse",title:"Transverse Waves",body:"In a transverse wave, the material moves up and down — at a right angle to the direction the wave travels. Light and water ripples are transverse."},
   {id:"c3",ico:"🎚️",nm:"Longitudinal",title:"Longitudinal Waves",body:"In a longitudinal wave, the material squeezes together and spreads apart — back and forth in the SAME direction the wave travels. Sound is longitudinal."},
   {id:"c4",ico:"📏",nm:"Amplitude",title:"Amplitude",body:"Amplitude is the size of a wave. A bigger amplitude carries more energy — a louder sound or a taller water wave."},
   {id:"c5",ico:"🦆",nm:"Bobbing Duck",title:"The Bobbing Duck",body:"When waves pass under a floating duck, the duck bobs up and down but stays in roughly the same spot. The energy moves on; the duck does not travel with it."},
   {id:"c6",ico:"🐘",nm:"Animal Fact",title:"An Elephant Fact",body:"Elephants can sense low rumbles through the ground with their feet. It's a true fact — but it isn't evidence about wave type here."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0a6b52",title:"How Sound Travels",q:"Order how a sound wave reaches your ear. Tap the pads in order.",
    pads:[{k:"ear",e:"👂 Reaches your ear",c:"#2f6fe0"},{k:"buzz",e:"🔔 An object vibrates",c:"#1aa3b8"},{k:"push",e:"🎚️ Air squeezes and spreads",c:"#f0a316"}],
    answer:["buzz","push","ear"],reason:"A vibration pushes air into squeezes and spreads (a longitudinal wave) that reach your ear. Energy travels; the air doesn't fly across the room."},
   {id:"L2",type:"mc",color:"#2f6fe0",title:"What Kind Is Sound?",q:"Sound is which type of wave?",
    options:["Transverse — the material moves up and down.","Longitudinal — the material moves back and forth in the wave's direction.","Neither — sound is not a wave."],
    answerIndex:1,reason:"Sound squeezes and spreads the air along its path — a longitudinal wave."},
   {id:"L3",type:"multi",color:"#f0a316",title:"Energy, Not Matter",q:"Check ONLY the strong evidence that a wave moves energy, not the material. Leave out the true-but-off-topic fact.",
    items:[{t:"A floating duck bobs up and down but stays in place.",strong:true},{t:"The water returns to where it was after the wave passes.",strong:true},{t:"Only the energy moves forward along the wave.",strong:true},{t:"Elephants can sense rumbles through their feet.",strong:false}],
    reason:"The duck staying put shows the water isn't carried along — only energy is. The elephant fact is true but off-topic."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name the Wave",q:"A wave whose material moves up and down, at a right angle to the wave's direction (like light or a water ripple), is a ____ wave. Type the word.",
    answer:["transverse","transversal"],reason:"A transverse wave wiggles at a right angle to its travel direction. Naming the type is how we classify waves."}
  ]
 },

 "earth-sun-moon": {
  id: "sci6-earth-sun-moon", teks: "6.9(A,B)", concept: "Seasons & Tides",
  ui: {
   h1: "The Reason for Seasons", sub: "Why do we have summer and winter — and what makes the tides? Use the evidence and open all four locks.",
   briefH: "Tilt, don't blame distance", briefP: "Many people think summer means Earth is closer to the Sun. It doesn't! Use the evidence to find the real cause of seasons and tides.",
   winStamp: "MYTH BUSTED ✓", winH: "Season sleuth!", winP: "You traced the tilt through the year, busted the distance myth, and named the cause. Earth's tilt — not its distance — makes the seasons."
  },
  clues: [
   {id:"c1",ico:"🌍",nm:"The Tilt",title:"Earth Is Tilted",body:"Earth is tilted about 23.5° as it orbits the Sun. That tilt stays pointed the same way all year."},
   {id:"c2",ico:"☀️",nm:"Direct Light",title:"Direct vs. Slanted",body:"When your half of Earth tilts TOWARD the Sun, sunlight hits more directly — that's summer. Tilt away and the light is slanted and weaker — that's winter."},
   {id:"c3",ico:"🗓️",nm:"Not Distance",title:"Distance Doesn't Do It",body:"Earth is actually CLOSEST to the Sun in early January — winter in the north. So distance can't be what causes the seasons."},
   {id:"c4",ico:"🌗",nm:"Opposite Seasons",title:"Opposite Halves",body:"When it's summer in the Northern Hemisphere, it's winter in the Southern Hemisphere. Both are the same distance from the Sun at once."},
   {id:"c5",ico:"🌙",nm:"Tides",title:"The Moon & Tides",body:"The Moon's gravity pulls on Earth's oceans, creating high and low tides as Earth rotates."},
   {id:"c6",ico:"🦉",nm:"Night Fact",title:"An Owl Fact",body:"An owl can turn its head about 270 degrees. It's a true, cool fact — but it won't explain the seasons."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0a6b52",title:"A Year of Tilt (North)",q:"For the Northern Hemisphere, order these as the year goes from summer toward winter. Tap the pads in order.",
    pads:[{k:"away",e:"❄️ Tilted away — winter",c:"#2f6fe0"},{k:"toward",e:"☀️ Tilted toward — summer",c:"#f0a316"},{k:"neither",e:"🍂 Tilt sideways — fall",c:"#1aa3b8"}],
    answer:["toward","neither","away"],reason:"Tilted toward the Sun (summer) → sideways (fall) → tilted away (winter). It's the tilt, changing how directly light hits, that drives the seasons."},
   {id:"L2",type:"mc",color:"#2f6fe0",title:"What Causes Seasons?",q:"What actually causes Earth's seasons?",
    options:["Earth moving closer to and farther from the Sun.","Earth's tilt changing how directly sunlight hits each hemisphere.","The Sun getting hotter and cooler."],
    answerIndex:1,reason:"Seasons come from Earth's tilt, not its distance. The tilt changes how directly sunlight strikes each hemisphere."},
   {id:"L3",type:"multi",color:"#f0a316",title:"Bust the Distance Myth",q:"Check ONLY the strong evidence that tilt (not distance) causes seasons. Leave out the true-but-off-topic fact.",
    items:[{t:"Earth is closest to the Sun in January, during northern winter.",strong:true},{t:"The two hemispheres have opposite seasons at the same time.",strong:true},{t:"A hemisphere tilted toward the Sun gets more direct light.",strong:true},{t:"An owl can turn its head about 270 degrees.",strong:false}],
    reason:"Opposite seasons at the same distance, plus closest-in-January, prove distance isn't the cause — tilt is. The owl fact is true but off-topic."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name the Cause",q:"The real cause of the seasons is Earth's ____ — the 23.5° lean that changes how directly sunlight hits. Type the word.",
    answer:["tilt","axial tilt","inclinación","inclinacion"],reason:"Earth's tilt is the cause of the seasons. Naming it — and ruling out distance — is the key reasoning move."}
  ]
 },

 "earth-systems": {
  id: "sci6-earth-systems", teks: "6.10", concept: "Earth's Layers & Rock Cycle",
  ui: {
   h1: "Inside the Earth", sub: "What's under your feet, and how do rocks change? Use the evidence and open all four locks.",
   briefH: "Dig into Earth's systems", briefP: "Earth has layers inside and rocks that slowly change from one type to another. Use the evidence to map the layers and follow the rock cycle.",
   winStamp: "EARTH MAPPED ✓", winH: "Geo genius!", winP: "You ordered Earth's layers, matched how igneous rock forms, and named a layer. Earth's rocks are always slowly recycling."
  },
  clues: [
   {id:"c1",ico:"🌐",nm:"Layers",title:"Earth's Layers",body:"From the outside in, Earth has the crust (thin, rocky surface), the mantle (thick, hot rock that flows slowly), the outer core (liquid metal), and the inner core (solid metal)."},
   {id:"c2",ico:"🌋",nm:"Igneous",title:"Igneous Rock",body:"Igneous rock forms when melted rock (magma or lava) cools and hardens — like the rock from a volcano."},
   {id:"c3",ico:"🏖️",nm:"Sedimentary",title:"Sedimentary Rock",body:"Sedimentary rock forms when bits of sand, mud, and shells settle in layers and get pressed and cemented together over time."},
   {id:"c4",ico:"💎",nm:"Metamorphic",title:"Metamorphic Rock",body:"Metamorphic rock forms when heat and pressure deep underground change an existing rock into a new kind, without fully melting it."},
   {id:"c5",ico:"🔄",nm:"Rock Cycle",title:"The Rock Cycle",body:"Any rock can slowly become another type over time — melting, cooling, weathering, or being squeezed and heated. That's the rock cycle."},
   {id:"c6",ico:"🐙",nm:"Sea Fact",title:"An Octopus Fact",body:"An octopus has three hearts and blue blood. It's a true, amazing fact — but it won't help you order Earth's layers."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0a6b52",title:"Surface to Center",q:"Order Earth's layers from the SURFACE down to the CENTER. Tap the pads in order.",
    pads:[{k:"inner",e:"⚪ Inner core",c:"#e0533a"},{k:"crust",e:"🌐 Crust",c:"#1aa3b8"},{k:"outer",e:"🟠 Outer core",c:"#f0a316"},{k:"mantle",e:"🟤 Mantle",c:"#2f6fe0"}],
    answer:["crust","mantle","outer","inner"],reason:"Crust, then mantle, then outer core, then inner core. Knowing the order is how we model Earth as a system of layers."},
   {id:"L2",type:"mc",color:"#2f6fe0",title:"How Igneous Forms",q:"Which rock forms when melted rock cools and hardens?",
    options:["Sedimentary rock.","Igneous rock.","Metamorphic rock."],
    answerIndex:1,reason:"Igneous rock comes from cooled magma or lava. Sedimentary forms from settled bits; metamorphic from heat and pressure."},
   {id:"L3",type:"multi",color:"#f0a316",title:"Rocks Change",q:"Check ONLY the strong evidence that rocks change type over time (the rock cycle). Leave out the true-but-off-topic fact.",
    items:[{t:"Heat and pressure can change one rock into a metamorphic rock.",strong:true},{t:"Settling and cementing bits of sediment makes sedimentary rock.",strong:true},{t:"Melting and cooling can turn a rock into igneous rock.",strong:true},{t:"An octopus has three hearts and blue blood.",strong:false}],
    reason:"Melting, settling, and heat-and-pressure are the paths of the rock cycle. The octopus fact is true but off-topic."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name the Layer",q:"The thick layer of hot rock that flows slowly, just below the crust, is the ____. Type the word.",
    answer:["mantle","manto"],reason:"The mantle sits between the crust and core. Naming the layers builds a model of Earth's structure."}
  ]
 },

 "living-systems": {
  id: "sci6-living-systems", teks: "6.12,6.13", concept: "Ecosystems & Cells",
  ui: {
   h1: "Living Systems", sub: "How do living things depend on each other — and what are they made of? Use the evidence and open all four locks.",
   briefH: "Life connects", briefP: "Every living thing is built from cells and connected to others in an ecosystem. Use the evidence to reason about organisms, relationships, and cells.",
   winStamp: "LIFE LINKED ✓", winH: "Life scientist!", winP: "You ordered the levels of life, spotted a partnership, and named life's building block. From cells to communities, living things depend on one another."
  },
  clues: [
   {id:"c1",ico:"🌱",nm:"Ecosystem",title:"Ecosystems",body:"An ecosystem is all the living things (biotic) and nonliving things (abiotic) in an area, interacting together — like a pond with fish, plants, water, and sunlight."},
   {id:"c2",ico:"🪜",nm:"Levels",title:"Levels of Life",body:"Living things are organized from small to large: one organism, then a population (same kind), then a community (many kinds together)."},
   {id:"c3",ico:"🤝",nm:"Mutualism",title:"Helping Each Other",body:"In mutualism, BOTH partners benefit — like a bee getting nectar while it pollinates a flower."},
   {id:"c4",ico:"🦟",nm:"Parasitism",title:"One Wins, One Loses",body:"In parasitism, one benefits and the other is harmed — like a tick feeding on a dog."},
   {id:"c5",ico:"🔬",nm:"Cells",title:"Made of Cells",body:"All living things are made of one or more cells. The cell is the basic unit of life, and new cells come from existing cells."},
   {id:"c6",ico:"⚡",nm:"Weather Fact",title:"A Lightning Fact",body:"A bolt of lightning is about five times hotter than the surface of the Sun. It's a true fact — but it isn't about living systems."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0a6b52",title:"Small to Large",q:"Order the levels of life from the SMALLEST group to the LARGEST. Tap the pads in order.",
    pads:[{k:"comm",e:"🌳 Community",c:"#f0a316"},{k:"org",e:"🐟 One organism",c:"#1aa3b8"},{k:"pop",e:"🐟🐟 Population",c:"#2f6fe0"}],
    answer:["org","pop","comm"],reason:"One organism, then a population of the same kind, then a community of many kinds. Levels of organization show how life is structured."},
   {id:"L2",type:"mc",color:"#2f6fe0",title:"Name the Relationship",q:"A bee sips nectar while pollinating a flower, and both benefit. This relationship is:",
    options:["Parasitism — one is harmed.","Mutualism — both benefit.","Neither one is affected."],
    answerIndex:1,reason:"When both partners benefit, it's mutualism. Parasitism would harm one of them."},
   {id:"L3",type:"multi",color:"#f0a316",title:"Everything Is Cells",q:"Check ONLY the strong evidence for cell theory. Leave out the true-but-off-topic fact.",
    items:[{t:"All living things are made of one or more cells.",strong:true},{t:"The cell is the basic unit of structure and function in life.",strong:true},{t:"New cells come from cells that already exist.",strong:true},{t:"Lightning is about five times hotter than the Sun's surface.",strong:false}],
    reason:"Those three statements are cell theory. The lightning fact is true but has nothing to do with cells."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name the Unit",q:"The basic building block that every living thing is made of is the ____. Type the word.",
    answer:["cell","cells","célula","celula"],reason:"The cell is the basic unit of life. Naming it anchors everything from organisms to ecosystems."}
  ]
 }

};
