/* Grade 5 "More" — short single-concept Critical Thinking Online Breakouts, one per
   key TEKS concept (§112.7), pitched to upper-elementary readers. The player (play.html)
   merges MORE_BASE_UI with each entry's ui overrides and hands the result to the shared
   engine. 6 clues (1 decoy) + 4 locks (seq/mc/multi/word); each reason names the move. */
window.MORE_BASE_UI = {
  en: {
    "sect.clues": "🔍 The Clues",
    "sect.cluesHint": "Tap each clue to read it. You can open them again anytime.",
    "sect.locks": "🔒 The Locks",
    "sect.locksHint": "Use the clues to open each lock.",
    "crumb.teacher": "‹ More Grade 5 breakouts",
    "crumb.suite": "Grade 5 Science",
    "ui.reset": "↺ Start over", "ui.check": "Check", "ui.gotit": "Got it", "ui.playagain": "Play Again",
    "ui.solved": "🔓 Open!", "ui.pcount": "{n} of {total} locks open",
    "ui.wordph": "Type your answer", "ui.clear": "clear",
    "fb.digit": "Not quite. Look at the clues again.",
    "fb.word": "Look at the clues for the word that fits.",
    "fb.mc": "That one isn't supported by the clues. Look again.",
    "fb.multiExtra": "One pick isn't strong evidence. Pick only what the clues show.",
    "fb.multiMissing": "You're missing one. Find them all.",
    "fb.seq": "That order doesn't match the clues. Try again.",
    "footer.privacy": "Privacy & compliance", "footer.text": "Grade 5 Science · Critical Thinking Online Breakouts · Runs in your browser — no logins, no data collected.",
    "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.7, Grade 5). Good-faith paraphrase; confirm before adoption.",
    "header.eyebrow": "Grade 5 Science · Quick Breakout",
    "brief.label": "🎯 Warm-Up"
  }
};

window.MORE = {

 "mixtures-keep-properties": {
  id: "sci5-mixtures-keep-properties", teks: "5.6(B)", concept: "Separating Mixtures",
  ui: {
   h1: "Take It Apart", sub: "How do you separate a mixture? Read the clues and open all four locks.",
   briefH: "Pull it apart", briefP: "In many mixtures, the parts keep their own properties — so you can use those properties to separate them. Use the clues to open the locks!",
   winStamp: "SEPARATED ✓", winH: "Mixture master!", winP: "You pulled iron out of sand with a magnet, found the trick, and named the tool. Because the parts of a mixture keep their properties, you can separate them."
  },
  clues: [
   {id:"c1",ico:"🧲",nm:"Iron & Sand",title:"Iron Filings in Sand",body:"Mix iron filings into sand and the iron is still magnetic. A magnet can pull the iron right back out."},
   {id:"c2",ico:"🥣",nm:"Keep Properties",title:"Parts Stay the Same",body:"In many mixtures, each part keeps its own properties. Nothing changes — the parts are just mixed together."},
   {id:"c3",ico:"💧",nm:"Sand & Water",title:"Sand in Water",body:"Stir sand into water and the sand settles to the bottom. You can pour off the water or filter the sand out."},
   {id:"c4",ico:"🔍",nm:"Use a Property",title:"Separate by Property",body:"To separate a mixture, use a property of one part — magnetism, size, or how it settles."},
   {id:"c5",ico:"🧪",nm:"Filter",title:"Filtering",body:"A filter lets water pass through but traps larger bits like sand, separating the mixture."},
   {id:"c6",ico:"🦋",nm:"Bug Fact",title:"A Butterfly Fact",body:"A butterfly tastes with its feet. That is true and fun — but it is not about separating mixtures."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#9f1239",title:"Pull Out the Iron",q:"Separate iron filings from sand. Put it in order. Tap the pads in order.",
    pads:[{k:"jump",e:"🧲 Iron jumps to the magnet",c:"#16a34a"},{k:"mix",e:"🥣 Iron filings mixed in sand",c:"#9f1239"},{k:"hold",e:"⬇️ Hold a magnet over it",c:"#ca8a04"}],
    answer:["mix","hold","jump"],reason:"The iron filings are mixed in sand, you hold a magnet over it, and the iron jumps to the magnet. The iron kept its magnetic property."},
   {id:"L2",type:"mc",color:"#0891b2",title:"Best Tool",q:"How can you separate iron filings from sand?",
    options:["Use a magnet — the iron is still magnetic.","Heat it until it melts.","Add more sand."],
    answerIndex:0,reason:"The iron keeps its magnetic property in the mixture, so a magnet pulls it out."},
   {id:"L3",type:"multi",color:"#ca8a04",title:"True About Mixtures",q:"Tap ONLY the true clues about separating mixtures. Leave out the fun fact.",
    items:[{t:"The parts of a mixture keep their own properties.",strong:true},{t:"A magnet can pull iron out of sand.",strong:true},{t:"Sand settles out of water and can be filtered.",strong:true},{t:"A butterfly tastes with its feet.",strong:false}],
    reason:"Parts keep their properties, so magnetism or filtering can separate them. The butterfly fact is true but is not about mixtures."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name the Tool",q:"You can pull iron filings out of sand with a ____, because iron is magnetic. Type the word.",
    answer:["magnet","magnets","imán","iman"],reason:"A magnet separates the iron because it kept its magnetic property in the mixture."}
  ]
 },

 "particles": {
  id: "sci5-particles", teks: "5.6(D)", concept: "Matter Is Made of Particles",
  ui: {
   h1: "Too Small to See", sub: "What is everything made of? Read the clues and open all four locks.",
   briefH: "Find the tiny bits", briefP: "All matter — even air you can't see — is made of tiny particles too small to see. Use the clues to open the locks!",
   winStamp: "ZOOMED IN ✓", winH: "Nice thinking!", winP: "You filled a balloon with invisible air particles, found what air is made of, and named them. All matter is built from tiny particles too small to see."
  },
  clues: [
   {id:"c1",ico:"🔬",nm:"Particles",title:"Tiny Particles",body:"All matter is made of tiny particles that are far too small to see, even with your eyes."},
   {id:"c2",ico:"🎈",nm:"Air",title:"Air Is Real",body:"Air is made of particles. You can't see them, but they fill a balloon and take up space."},
   {id:"c3",ico:"👃",nm:"A Smell",title:"A Smell Spreads",body:"When cookies bake, the smell spreads across the room. That is invisible particles moving through the air."},
   {id:"c4",ico:"⚖️",nm:"Takes Space",title:"They Take Up Space",body:"Even though you can't see them, air particles take up space and can push on things."},
   {id:"c5",ico:"💨",nm:"Push Out",title:"Pushing the Balloon",body:"Blow into a balloon and the air particles push out on it, making it grow bigger."},
   {id:"c6",ico:"🐧",nm:"Bird Fact",title:"A Penguin Fact",body:"Penguins huddle together to stay warm. That is true and cute — but it is not about particles."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#9f1239",title:"Blow Up a Balloon",q:"Fill a balloon with air. Put it in order. Tap the pads in order.",
    pads:[{k:"grow",e:"🎈 The balloon grows bigger",c:"#16a34a"},{k:"empty",e:"🎈 An empty, flat balloon",c:"#9f1239"},{k:"blow",e:"💨 You blow air particles in",c:"#ca8a04"}],
    answer:["empty","blow","grow"],reason:"You blow air particles into a flat balloon and it grows. The invisible particles take up space and push it out."},
   {id:"L2",type:"mc",color:"#0891b2",title:"What Is Air?",q:"What is air made of?",
    options:["Nothing — it's empty.","Tiny particles too small to see.","Only water."],
    answerIndex:1,reason:"Air is made of tiny particles too small to see. They take up space and can push on things, like a balloon."},
   {id:"L3",type:"multi",color:"#ca8a04",title:"Proof of Particles",q:"Tap ONLY the clues that show matter is made of tiny particles. Leave out the fun fact.",
    items:[{t:"Air fills a balloon and takes up space.",strong:true},{t:"A smell spreads across a room.",strong:true},{t:"Air particles push on things even when invisible.",strong:true},{t:"Penguins huddle to stay warm.",strong:false}],
    reason:"Filling a balloon, spreading smells, and pushing forces all show invisible particles. The penguin fact is true but is not about particles."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name Them",q:"All matter, even air, is made of tiny bits too small to see, called ____. Type the word.",
    answer:["particles","particle","partículas","particulas"],reason:"Matter is made of particles too small to see. They take up space and make up everything."}
  ]
 },

 "forces-motion": {
  id: "sci5-forces-motion", teks: "5.7(A)", concept: "Equal & Unequal Forces",
  ui: {
   h1: "Balanced or Not?", sub: "When do forces change how something moves? Read the clues and open all four locks.",
   briefH: "Add up the forces", briefP: "When forces on an object are equal, its motion stays the same. When they are unequal, its motion changes. Use the clues to open the locks!",
   winStamp: "FIGURED OUT ✓", winH: "Force pro!", winP: "You won a tug-of-war with an unequal force, saw what unbalanced forces do, and named the push or pull. Unequal forces change motion; equal forces keep it steady."
  },
  clues: [
   {id:"c1",ico:"👐",nm:"Force",title:"Forces",body:"A force is a push or a pull. Forces can start, stop, speed up, slow, or turn an object."},
   {id:"c2",ico:"⚖️",nm:"Equal",title:"Equal Forces",body:"When the forces on an object are equal (balanced), they cancel out and its motion does not change."},
   {id:"c3",ico:"💥",nm:"Unequal",title:"Unequal Forces",body:"When the forces are unequal (unbalanced), the object's motion changes — it speeds up, slows down, or turns."},
   {id:"c4",ico:"💪",nm:"Bigger Force",title:"Bigger Change",body:"A bigger unequal force causes a bigger change in motion."},
   {id:"c5",ico:"⚾",nm:"Transfer",title:"Passing Energy",body:"A force can transfer energy. A bat hitting a ball pushes on it and sends it flying."},
   {id:"c6",ico:"🦒",nm:"Tall Fact",title:"A Giraffe Fact",body:"A giraffe is the tallest land animal. That is true and cool — but it is not about forces."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#9f1239",title:"Win the Tug-of-War",q:"Put the tug-of-war in order. Tap the pads in order.",
    pads:[{k:"move",e:"➡️ The rope moves toward the winners",c:"#16a34a"},{k:"even",e:"⚖️ Both teams pull equally (no move)",c:"#9f1239"},{k:"harder",e:"💪 One team pulls harder (unequal)",c:"#ca8a04"}],
    answer:["even","harder","move"],reason:"When both teams pull equally, nothing moves. When one pulls harder, the forces are unequal and the rope moves. Unequal forces change motion."},
   {id:"L2",type:"mc",color:"#0891b2",title:"Unbalanced Forces",q:"What happens when the forces on an object are UNEQUAL (unbalanced)?",
    options:["Nothing changes.","Its motion changes — it speeds up, slows, or turns.","It disappears."],
    answerIndex:1,reason:"Unequal forces don't cancel, so the object's motion changes. Equal forces would keep the motion steady."},
   {id:"L3",type:"multi",color:"#ca8a04",title:"Unequal Forces at Work",q:"Tap ONLY the ways an unequal force changes motion. Leave out the fun fact.",
    items:[{t:"A hard kick sends a ball flying.",strong:true},{t:"A stronger tug-of-war team pulls the rope over.",strong:true},{t:"A push speeds up a cart.",strong:true},{t:"A giraffe is the tallest land animal.",strong:false}],
    reason:"Kicking, pulling harder, and pushing are all unequal forces changing motion. The giraffe fact is true but is not a force."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"A push or a pull that can change how something moves is a ____. Type the word.",
    answer:["force","forces","fuerza"],reason:"A force is a push or pull. Equal forces keep motion steady; unequal forces change it."}
  ]
 },

 "energy-transform": {
  id: "sci5-energy-transform", teks: "5.8(A)", concept: "Energy Transformations",
  ui: {
   h1: "Chain of Energy", sub: "How does energy change from one form to another? Read the clues and open all four locks.",
   briefH: "Follow the change", briefP: "Energy is never made or lost — but it can change from one form to another. That is an energy transformation. Use the clues to open the locks!",
   winStamp: "TRANSFORMED ✓", winH: "Energy expert!", winP: "You traced a flashlight's energy, found the first change, and named what transforms. Energy just changes form — chemical to electrical to light and beyond."
  },
  clues: [
   {id:"c1",ico:"🔄",nm:"Transform",title:"Changing Form",body:"Energy can change from one form to another. This is called an energy transformation."},
   {id:"c2",ico:"🔦",nm:"Flashlight",title:"A Flashlight",body:"In a flashlight, the battery's chemical energy becomes electrical energy, which becomes light energy."},
   {id:"c3",ico:"♻️",nm:"Never Lost",title:"Nothing Is Lost",body:"Energy is never made or destroyed. It only changes form."},
   {id:"c4",ico:"🍞",nm:"Toaster",title:"A Toaster",body:"A toaster changes electrical energy into thermal (heat) energy to toast the bread."},
   {id:"c5",ico:"🪀",nm:"Wind-Up Toy",title:"A Wind-Up Toy",body:"A wind-up toy stores energy when you wind it, then changes it into motion energy."},
   {id:"c6",ico:"🦜",nm:"Bird Fact",title:"A Parrot Fact",body:"Some parrots can copy words. That is true and fun — but it is not an energy transformation."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#9f1239",title:"Flashlight Chain",q:"Order the energy changes inside a flashlight. Tap the pads in order.",
    pads:[{k:"light",e:"💡 Light energy",c:"#16a34a"},{k:"chem",e:"🔋 Chemical energy (battery)",c:"#9f1239"},{k:"elec",e:"⚡ Electrical energy",c:"#ca8a04"}],
    answer:["chem","elec","light"],reason:"The battery's chemical energy becomes electrical energy, which becomes light. Energy just changes form, one step at a time."},
   {id:"L2",type:"mc",color:"#0891b2",title:"First Change",q:"In a flashlight, what does the battery's chemical energy turn into first?",
    options:["Sound energy.","Electrical energy (which then becomes light).","Nothing."],
    answerIndex:1,reason:"The chemical energy first becomes electrical energy, which then becomes light energy at the bulb."},
   {id:"L3",type:"multi",color:"#ca8a04",title:"Energy Transformations",q:"Tap ONLY the energy transformations. Leave out the fun fact.",
    items:[{t:"A flashlight turns a battery's energy into light.",strong:true},{t:"A toaster turns electricity into heat.",strong:true},{t:"A wind-up toy turns stored energy into motion.",strong:true},{t:"A parrot copies words.",strong:false}],
    reason:"Each device changes energy from one form to another. The parrot fact is true but is not an energy transformation."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"The thing that changes form (but is never lost) in a flashlight or toaster is ____. Type the word.",
    answer:["energy","energía","energia"],reason:"Energy changes form but is never made or lost. Tracing the changes is an energy transformation."}
  ]
 },

 "light": {
  id: "sci5-light", teks: "5.8(C)", concept: "How Light Behaves",
  ui: {
   h1: "Bounce, Bend, or Soak", sub: "What can light do? Read the clues and open all four locks.",
   briefH: "Follow the light", briefP: "Light travels in a straight line, but it can bounce off, bend, or be soaked up. Use the clues to open the locks!",
   winStamp: "LIT UP ✓", winH: "Light expert!", winP: "You bounced light off a mirror, named what it does, and sorted its tricks. Light travels straight, but it can reflect, refract, or be absorbed."
  },
  clues: [
   {id:"c1",ico:"➡️",nm:"Straight",title:"Straight Lines",body:"Light travels in a straight line until it hits something."},
   {id:"c2",ico:"🪞",nm:"Reflect",title:"Reflection",body:"When light hits a mirror, it bounces off. That bouncing is called reflection."},
   {id:"c3",ico:"🥤",nm:"Refract",title:"Refraction",body:"When light passes into water or a lens, it bends. That bending is called refraction — a straw looks bent in a glass of water."},
   {id:"c4",ico:"⚫",nm:"Absorb",title:"Absorption",body:"When light hits a dark object, it can be soaked up. That is absorption — a black shirt gets hot in the sun."},
   {id:"c5",ico:"👁️",nm:"We See",title:"Seeing Things",body:"We see objects when light bounces off them and into our eyes."},
   {id:"c6",ico:"🐙",nm:"Sea Fact",title:"An Octopus Fact",body:"An octopus has three hearts. That is true and neat — but it is not about light."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#9f1239",title:"Light Meets a Mirror",q:"A beam of light hits a mirror. Put it in order. Tap the pads in order.",
    pads:[{k:"bounce",e:"↩️ It bounces off (reflects)",c:"#16a34a"},{k:"travel",e:"➡️ Light travels in a straight line",c:"#9f1239"},{k:"hit",e:"🪞 It hits the mirror",c:"#ca8a04"}],
    answer:["travel","hit","bounce"],reason:"Light travels straight, hits the mirror, and bounces off. Bouncing off a surface is reflection."},
   {id:"L2",type:"mc",color:"#0891b2",title:"Bouncing Light",q:"What is it called when light bounces off a mirror?",
    options:["Refraction.","Reflection.","Absorption."],
    answerIndex:1,reason:"Light bouncing off a surface is reflection. Bending is refraction; being soaked up is absorption."},
   {id:"L3",type:"multi",color:"#ca8a04",title:"What Light Can Do",q:"Tap ONLY the things light can do. Leave out the fun fact.",
    items:[{t:"Bounce off a mirror (reflect).",strong:true},{t:"Bend passing into water (refract).",strong:true},{t:"Be soaked up by a dark object (absorb).",strong:true},{t:"An octopus has three hearts.",strong:false}],
    reason:"Light can reflect, refract, and be absorbed. The octopus fact is true but is not about light."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"When light bounces off a mirror, that is ____. Type the word.",
    answer:["reflection","reflect","reflects","reflejo","reflexión","reflexion"],reason:"Light bouncing off a surface is reflection — one of the things light can do besides traveling straight."}
  ]
 },

 "sedimentary-fossil-fuels": {
  id: "sci5-sedimentary-fossil-fuels", teks: "5.10(B)", concept: "Sedimentary Rock & Fossil Fuels",
  ui: {
   h1: "Layers of Time", sub: "How do rock layers and fossil fuels form? Read the clues and open all four locks.",
   briefH: "Build the layers", briefP: "Over huge amounts of time, layers of sediment become rock, and buried living things become fossil fuels. Use the clues to open the locks!",
   winStamp: "LAYERED ✓", winH: "Earth scientist!", winP: "You pressed sediment into rock, learned how fossil fuels form, and named the layered rock. Both take a very long time, deep under pressure."
  },
  clues: [
   {id:"c1",ico:"🏖️",nm:"Sediment",title:"Bits Settle",body:"Sediment — sand, mud, and shells — settles into layers at the bottom of lakes and seas."},
   {id:"c2",ico:"🪨",nm:"Pressed",title:"Pressed & Cemented",body:"Over a long time, the layers get pressed down and cemented together into sedimentary rock."},
   {id:"c3",ico:"📚",nm:"Older Below",title:"Bottom Is Oldest",body:"Each layer settles on top of the last, so the lower layers are older than the ones above."},
   {id:"c4",ico:"🦕",nm:"Buried Life",title:"Fossil Fuels",body:"Fossil fuels — coal, oil, and natural gas — form from the buried remains of ancient living things, pressed for millions of years."},
   {id:"c5",ico:"🔥",nm:"For Energy",title:"We Burn Them",body:"We dig up and burn fossil fuels for energy, but they took millions of years to form."},
   {id:"c6",ico:"🎈",nm:"Party Fact",title:"A Balloon Fact",body:"A helium balloon floats. That is true and fun — but it is not about rocks or fuels."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#9f1239",title:"Make Sedimentary Rock",q:"Put the forming of sedimentary rock in order. Tap the pads in order.",
    pads:[{k:"rock",e:"🪨 It cements into sedimentary rock",c:"#16a34a"},{k:"settle",e:"🏖️ Sediment settles in layers",c:"#9f1239"},{k:"press",e:"⬇️ The layers get pressed down",c:"#ca8a04"}],
    answer:["settle","press","rock"],reason:"Sediment settles in layers, gets pressed down over a long time, and cements into sedimentary rock. Lower layers form first."},
   {id:"L2",type:"mc",color:"#0891b2",title:"Where Fossil Fuels Come From",q:"How do fossil fuels like coal and oil form?",
    options:["They are made in factories.","From the buried remains of ancient living things, pressed for millions of years.","They fall from the sky."],
    answerIndex:1,reason:"Fossil fuels form from ancient living things buried and pressed for millions of years — that's why they can run out."},
   {id:"L3",type:"multi",color:"#ca8a04",title:"Layers of Time",q:"Tap ONLY the true clues about rock layers and fossil fuels. Leave out the fun fact.",
    items:[{t:"Sedimentary rock forms from pressed layers of sediment.",strong:true},{t:"Lower layers are older than the ones above.",strong:true},{t:"Fossil fuels form from ancient buried living things.",strong:true},{t:"A helium balloon floats.",strong:false}],
    reason:"Layered sediment, older-below, and buried life all describe how these form. The balloon fact is true but is off-topic."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name the Rock",q:"Rock made from pressed and cemented layers of sediment is ____ rock. Type the word.",
    answer:["sedimentary","sediment","sedimentaria","sedimentario"],reason:"Sedimentary rock forms from pressed layers of sediment, with the oldest layers on the bottom."}
  ]
 },

 "landforms": {
  id: "sci5-landforms", teks: "5.10(C)", concept: "Landforms",
  ui: {
   h1: "Shaping the Land", sub: "How do wind, water, and ice build landforms? Read the clues and open all four locks.",
   briefH: "Carve the land", briefP: "Over a very long time, wind, water, and ice slowly shape the land into landforms like deltas, canyons, and dunes. Use the clues to open the locks!",
   winStamp: "SHAPED ✓", winH: "Land shaper!", winP: "You carved a canyon, found the wind's landform, and named a river's carving. Wind, water, and ice slowly build the land we live on."
  },
  clues: [
   {id:"c1",ico:"🏞️",nm:"Landforms",title:"What Landforms Are",body:"Landforms are the shapes of the land, like canyons, deltas, and sand dunes."},
   {id:"c2",ico:"🌊",nm:"Delta",title:"A Delta",body:"Where a river meets the sea, it drops the sediment it carried, building up a flat landform called a delta."},
   {id:"c3",ico:"🏔️",nm:"Canyon",title:"A Canyon",body:"A river can slowly cut down through rock over a very long time, carving a deep canyon."},
   {id:"c4",ico:"🏜️",nm:"Dune",title:"A Sand Dune",body:"Wind can pile sand into a hill called a sand dune, and slowly move it along."},
   {id:"c5",ico:"⏳",nm:"Slowly",title:"It Takes Time",body:"Wind, water, and ice shape the land slowly — over hundreds or thousands of years."},
   {id:"c6",ico:"🦩",nm:"Pink Fact",title:"A Flamingo Fact",body:"Flamingos are pink from the food they eat. That is true and fun — but it is not a landform."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#9f1239",title:"Carve a Canyon",q:"How does a river carve a canyon? Put it in order. Tap the pads in order.",
    pads:[{k:"canyon",e:"🏔️ A deep canyon forms",c:"#16a34a"},{k:"flow",e:"🌊 A river flows over rock",c:"#9f1239"},{k:"cut",e:"⬇️ It slowly cuts down through the rock",c:"#ca8a04"}],
    answer:["flow","cut","canyon"],reason:"A river flows over rock and slowly cuts down through it, carving a deep canyon over a very long time."},
   {id:"L2",type:"mc",color:"#0891b2",title:"Wind's Landform",q:"What landform does wind build by piling up sand?",
    options:["A delta.","A sand dune.","A canyon."],
    answerIndex:1,reason:"Wind piles sand into a dune. A delta is built by a river's sediment, and a canyon is carved by a river."},
   {id:"L3",type:"multi",color:"#ca8a04",title:"Wind, Water & Ice",q:"Tap ONLY the landforms shaped by wind, water, or ice. Leave out the fun fact.",
    items:[{t:"A delta built where a river meets the sea.",strong:true},{t:"A canyon carved by a river.",strong:true},{t:"A sand dune piled up by wind.",strong:true},{t:"Flamingos are pink from their food.",strong:false}],
    reason:"Deltas, canyons, and dunes are all shaped by wind, water, or ice. The flamingo fact is true but is not a landform."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"A deep valley carved by a river cutting down through rock is a ____. Type the word.",
    answer:["canyon","canyons","cañón","canon","cañon"],reason:"A canyon is carved by a river over a long time. Wind, water, and ice each shape different landforms."}
  ]
 },

 "ecosystem-changes": {
  id: "sci5-ecosystem-changes", teks: "5.12(B)", concept: "Changes in Ecosystems",
  ui: {
   h1: "Ripple Effect", sub: "What happens when an ecosystem changes? Read the clues and open all four locks.",
   briefH: "Predict the change", briefP: "An ecosystem is a web of living things. Change one part, and it ripples through the whole web. Use the clues to open the locks!",
   winStamp: "PREDICTED ✓", winH: "Ecosystem expert!", winP: "You predicted a ripple through the food web, saw how change spreads, and named the system. Every part of an ecosystem is connected."
  },
  clues: [
   {id:"c1",ico:"🕸️",nm:"Web",title:"A Connected Web",body:"In an ecosystem, energy flows and matter cycles through a food web of many living things."},
   {id:"c2",ico:"🐸",nm:"Remove a Part",title:"One Change Matters",body:"If one part of the web changes, it affects the others. Remove the frogs and the whole web feels it."},
   {id:"c3",ico:"🦗",nm:"More Insects",title:"Insects Increase",body:"With no frogs to eat them, the insects the frogs used to eat may grow in number."},
   {id:"c4",ico:"🐍",nm:"Hungry Snakes",title:"Snakes Go Hungry",body:"Snakes that ate the frogs now have less food, so their numbers may drop."},
   {id:"c5",ico:"🔗",nm:"Ripple",title:"It Ripples Through",body:"A single change ripples through the whole ecosystem, up and down the food web."},
   {id:"c6",ico:"🌋",nm:"Hot Fact",title:"A Volcano Fact",body:"A volcano can shoot lava high in the air. That is true and wild — but it is not part of a food web."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#9f1239",title:"If the Frogs Disappear",q:"Predict what happens if the frogs are removed. Put it in order. Tap the pads in order.",
    pads:[{k:"snakes",e:"🐍 Snakes that ate frogs go hungry",c:"#16a34a"},{k:"remove",e:"🐸 The frogs are removed",c:"#9f1239"},{k:"insects",e:"🦗 The insects frogs ate increase",c:"#ca8a04"}],
    answer:["remove","insects","snakes"],reason:"Remove the frogs, and the insects they ate increase while the snakes that ate frogs go hungry. The change ripples through the whole web."},
   {id:"L2",type:"mc",color:"#0891b2",title:"One Small Change",q:"What happens to a food web when one animal is removed?",
    options:["Nothing else changes.","The change ripples through and affects the whole web.","Only that one animal matters."],
    answerIndex:1,reason:"Everything in a food web is connected, so removing one part ripples up and down the whole web."},
   {id:"L3",type:"multi",color:"#ca8a04",title:"Ripple Effects",q:"Tap ONLY the effects of removing the frogs from the web. Leave out the fun fact.",
    items:[{t:"The insects the frogs ate increase.",strong:true},{t:"Snakes that ate frogs have less food.",strong:true},{t:"The whole web is affected.",strong:true},{t:"A volcano can shoot lava high.",strong:false}],
    reason:"Fewer frogs means more insects and hungrier snakes — the web is affected. The volcano fact is true but is off-topic."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"A community of living and nonliving things connected in a web is an ____. Type the word.",
    answer:["ecosystem","ecosystems","ecosistema"],reason:"An ecosystem is a connected web. A change to one part ripples through the whole thing."}
  ]
 },

 "human-impact": {
  id: "sci5-human-impact", teks: "5.12(C)", concept: "Humans & Ecosystems",
  ui: {
   h1: "Help or Harm?", sub: "How do people affect ecosystems? Read the clues and open all four locks.",
   briefH: "Make a difference", briefP: "Humans are part of ecosystems. Some of our choices harm them, and some help them heal. Use the clues to open the locks!",
   winStamp: "PROTECTED ✓", winH: "Earth guardian!", winP: "You cleaned up a pond, found a helpful action, and named the harm. Our choices can hurt or heal an ecosystem — so we choose wisely."
  },
  clues: [
   {id:"c1",ico:"🌎",nm:"We're Part of It",title:"People and Nature",body:"Humans are part of ecosystems. What we do affects the living and nonliving things around us."},
   {id:"c2",ico:"🏭",nm:"Harm",title:"Harmful Choices",body:"Pollution, cutting down forests, and littering in water can harm an ecosystem."},
   {id:"c3",ico:"🌳",nm:"Help",title:"Helpful Choices",body:"Recycling, planting trees, cleaning up trash, and protecting habitats can help an ecosystem heal."},
   {id:"c4",ico:"💧",nm:"Healthy",title:"A Healthy Ecosystem",body:"A healthy ecosystem has clean water and air and many kinds of living things."},
   {id:"c5",ico:"♻️",nm:"Our Choices",title:"It Adds Up",body:"Small choices add up. Many people helping can protect a whole ecosystem."},
   {id:"c6",ico:"🐨",nm:"Sleepy Fact",title:"A Koala Fact",body:"Koalas sleep most of the day. That is true and cute — but it is not about human impact."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#9f1239",title:"Heal a Pond",q:"Put the pond's story in order, from harmed to healthy. Tap the pads in order.",
    pads:[{k:"healthy",e:"💧 The pond becomes healthy again",c:"#16a34a"},{k:"trash",e:"🗑️ Trash pollutes the pond",c:"#9f1239"},{k:"clean",e:"♻️ People clean it up and recycle",c:"#ca8a04"}],
    answer:["trash","clean","healthy"],reason:"Trash harms the pond, people clean it up and recycle, and the pond becomes healthy. Human choices can hurt or heal an ecosystem."},
   {id:"L2",type:"mc",color:"#0891b2",title:"A Helpful Action",q:"Which human action HELPS an ecosystem?",
    options:["Littering in a stream.","Planting trees.","Cutting down a forest."],
    answerIndex:1,reason:"Planting trees helps an ecosystem. Littering and cutting down forests harm it."},
   {id:"L3",type:"multi",color:"#ca8a04",title:"What Harms an Ecosystem?",q:"Tap ONLY the human actions that HARM an ecosystem. Leave out the fun fact.",
    items:[{t:"Polluting the water.",strong:true},{t:"Cutting down a forest.",strong:true},{t:"Littering trash on the ground.",strong:true},{t:"Koalas sleep most of the day.",strong:false}],
    reason:"Pollution, deforestation, and littering all harm ecosystems. The koala fact is true but is not a human impact."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"Trash and dirty water and air that harm an ecosystem are called ____. Type the word.",
    answer:["pollution","pollutants","contaminación","contaminacion"],reason:"Pollution harms ecosystems. Our choices — like recycling and cleaning up — can help protect them."}
  ]
 },

 "instinct-learned": {
  id: "sci5-instinct-learned", teks: "5.13(B)", concept: "Instinct & Learned Behavior",
  ui: {
   h1: "Born to Do It, or Taught?", sub: "Which animal behaviors are built in, and which are learned? Read the clues and open all four locks.",
   briefH: "Sort the behaviors", briefP: "Some animal behaviors are instincts — animals are born knowing them. Others are learned from experience. Use the clues to open the locks!",
   winStamp: "SORTED ✓", winH: "Behavior detective!", winP: "You watched a sea turtle's instinct, found the built-in behavior, and named it. Instincts are born-in; learned behaviors come from experience."
  },
  clues: [
   {id:"c1",ico:"🧠",nm:"Instinct",title:"Instincts",body:"An instinct is a behavior an animal is born knowing. No one teaches it — it happens automatically."},
   {id:"c2",ico:"🐢",nm:"Sea Turtles",title:"Turtles Head to Sea",body:"Baby sea turtles crawl straight to the ocean the moment they hatch, with no one showing them. That is an instinct."},
   {id:"c3",ico:"🎓",nm:"Learned",title:"Learned Behaviors",body:"A learned behavior comes from experience or being taught. Animals practice and remember it."},
   {id:"c4",ico:"🐋",nm:"Orcas Hunt",title:"Orcas Learn to Hunt",body:"Orcas learn to hunt in packs by watching and practicing with their family. That is a learned behavior."},
   {id:"c5",ico:"🕸️",nm:"Spider Web",title:"Built-In Skills",body:"A spider spinning a web and a bird building its first nest are instincts — they are born knowing how."},
   {id:"c6",ico:"⚡",nm:"Sky Fact",title:"A Lightning Fact",body:"Lightning is very hot. That is true and powerful — but it is not an animal behavior."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#9f1239",title:"A Turtle's Instinct",q:"Put the sea turtle's instinct in order. Tap the pads in order.",
    pads:[{k:"crawl",e:"🌊 They crawl straight to the water",c:"#16a34a"},{k:"hatch",e:"🥚 The eggs hatch on the beach",c:"#9f1239"},{k:"know",e:"🧠 The hatchlings know to head to sea",c:"#ca8a04"}],
    answer:["hatch","know","crawl"],reason:"The eggs hatch, the babies already know to head to the sea, and they crawl to the water — with no one teaching them. That is an instinct."},
   {id:"L2",type:"mc",color:"#0891b2",title:"Born Knowing It",q:"Baby sea turtles head to the sea with no one teaching them. This is a(n) ____ behavior.",
    options:["Learned.","Instinctual (born knowing it).","Taught by their parents."],
    answerIndex:1,reason:"An instinct is a behavior an animal is born knowing, like turtles heading to the sea. A learned behavior would need experience or teaching."},
   {id:"L3",type:"multi",color:"#ca8a04",title:"Find the Instincts",q:"Tap ONLY the instinctual (born-in) behaviors. Leave out the fun fact.",
    items:[{t:"A spider spinning its web.",strong:true},{t:"A baby turtle heading to the sea.",strong:true},{t:"A bird building its first nest.",strong:true},{t:"Lightning is very hot.",strong:false}],
    reason:"Spinning a web, heading to the sea, and building a first nest are all instincts. The lightning fact is true but is not a behavior."},
   {id:"L4",type:"word",color:"#7c3aed",title:"Name It",q:"A behavior an animal is born knowing, with no one teaching it, is an ____. Type the word.",
    answer:["instinct","instincts","instinctual","instinto"],reason:"An instinct is a born-in behavior; a learned behavior comes from experience. Sorting them is a key life-science idea."}
  ]
 }

};
