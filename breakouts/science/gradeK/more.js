/* Kindergarten "More" — very short single-concept Critical Thinking Online Breakouts,
   one per key TEKS concept (§112.2), for the youngest learners. The player (play.html)
   merges MORE_BASE_UI with each entry's ui overrides and hands the result to the shared
   engine. 6 short picture clues (1 decoy) + 4 locks (seq/mc/multi/word). */
window.MORE_BASE_UI = {
  en: {
    "sect.clues": "🔍 The Clues",
    "sect.cluesHint": "Tap each clue to see it. You can open them again anytime.",
    "sect.locks": "🔒 The Locks",
    "sect.locksHint": "Use the clues to open each lock.",
    "crumb.teacher": "‹ More Kindergarten breakouts",
    "crumb.suite": "Kindergarten Science",
    "ui.reset": "↺ Start over", "ui.check": "Check", "ui.gotit": "Got it", "ui.playagain": "Play Again",
    "ui.solved": "🔓 Open!", "ui.pcount": "{n} of {total} locks open",
    "ui.wordph": "Type here", "ui.clear": "clear",
    "fb.digit": "Not yet. Look again.",
    "fb.word": "Look at the clues for the word.",
    "fb.mc": "Not that one. Look again.",
    "fb.multiExtra": "One pick is not right. Pick only the ones that fit.",
    "fb.multiMissing": "You missed one. Find them all.",
    "fb.seq": "Not that order. Try again.",
    "footer.privacy": "Privacy & compliance", "footer.text": "Kindergarten Science · Critical Thinking Online Breakouts · Runs in your browser — no logins, no data collected.",
    "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.2, Kindergarten). Good-faith paraphrase; confirm before adoption.",
    "header.eyebrow": "Kindergarten Science · Quick Breakout",
    "brief.label": "🎈 Let's Go"
  }
};

window.MORE = {

 "properties": {
  id: "sciK-properties", teks: "K.6", concept: "Sorting Objects",
  ui: {
   h1: "Sort It!", sub: "How can we sort things? Tap the clues and open all four locks.",
   briefH: "Look and sort", briefP: "We can sort things by how they look — their color, shape, and size. Tap the clues and open the locks!",
   winStamp: "SORTED ✓", winH: "Great sorting!", winP: "You put things in size order, found how to sort, and named a way. Color, shape, and size all help us sort!"
  },
  clues: [
   {id:"c1",ico:"🎨",nm:"Color",title:"Color",body:"We can sort by color. Things can be red, blue, or green."},
   {id:"c2",ico:"⬛",nm:"Shape",title:"Shape",body:"We can sort by shape. Things can be round or square."},
   {id:"c3",ico:"📏",nm:"Size",title:"Size",body:"We can sort by size. Some things are big and some are small."},
   {id:"c4",ico:"✋",nm:"Feel",title:"How It Feels",body:"We can sort by how it feels. Things can be soft or hard."},
   {id:"c5",ico:"🧺",nm:"Groups",title:"Make Groups",body:"When we sort, we put things that go together into groups."},
   {id:"c6",ico:"🐟",nm:"Fish Fact",title:"A Fish Fact",body:"A fish can swim. That is true and fun — but it is not a way to sort."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0e7490",title:"Small to Big",q:"Put these in order from SMALL to BIG. Tap the pads in order.",
    pads:[{k:"big",e:"🐘 Elephant",c:"#e11d48"},{k:"small",e:"🐜 Ant",c:"#0e7490"},{k:"mid",e:"🐱 Cat",c:"#f59e0b"}],
    answer:["small","mid","big"],reason:"An ant is small, a cat is bigger, and an elephant is biggest. That is sorting by size!"},
   {id:"L2",type:"mc",color:"#f59e0b",title:"Sort by Color",q:"Red, blue, and green tell the ____ of a thing.",
    options:["Color.","Size.","Shape."],
    answerIndex:0,reason:"Red, blue, and green are colors. We can sort things by their color."},
   {id:"L3",type:"multi",color:"#e11d48",title:"Ways to Sort",q:"Tap ONLY the ways we can sort things. Leave out the fun fact.",
    items:[{t:"By color.",strong:true},{t:"By size.",strong:true},{t:"By shape.",strong:true},{t:"A fish can swim.",strong:false}],
    reason:"Color, size, and shape are ways to sort. The fish fact is true but does not sort things."},
   {id:"L4",type:"word",color:"#16a34a",title:"Name a Way",q:"Big and small tell the ____ of a thing. Type the word.",
    answer:["size","sizes","tamaño","tamano"],reason:"Size tells if a thing is big or small. We can sort by size!"}
  ]
 },

 "magnets": {
  id: "sciK-magnets", teks: "K.7", concept: "Magnets, Push & Pull",
  ui: {
   h1: "Magnet Magic", sub: "What can a magnet do? Tap the clues and open all four locks.",
   briefH: "Try a magnet", briefP: "A magnet can pull some things toward it. A push moves things away. Tap the clues and open the locks!",
   winStamp: "MAGNET ✓", winH: "Great work!", winP: "You used a magnet to pull a paper clip, found what it grabs, and named the pull. Magnets pull, and a push sends things away!"
  },
  clues: [
   {id:"c1",ico:"🧲",nm:"Magnet",title:"A Magnet",body:"A magnet can pull some things toward it, like a paper clip."},
   {id:"c2",ico:"📎",nm:"Metal",title:"Metal Things",body:"Magnets pull some metal things, like paper clips and nails."},
   {id:"c3",ico:"🧸",nm:"Not All",title:"Not Everything",body:"A magnet does not pull a toy, paper, or wood. Only some metal."},
   {id:"c4",ico:"👋",nm:"Push",title:"A Push",body:"A push moves something away from you."},
   {id:"c5",ico:"🤚",nm:"Pull",title:"A Pull",body:"A pull moves something toward you. A magnet gives a pull."},
   {id:"c6",ico:"🐧",nm:"Bird Fact",title:"A Penguin Fact",body:"A penguin cannot fly. That is true and fun — but it is not about magnets."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0e7490",title:"Grab the Clip",q:"Use a magnet to grab a paper clip. Put it in order. Tap the pads in order.",
    pads:[{k:"jump",e:"📎 The clip jumps to the magnet",c:"#e11d48"},{k:"hold",e:"🧲 Hold the magnet near",c:"#0e7490"},{k:"near",e:"➡️ Move it close to the clip",c:"#f59e0b"}],
    answer:["hold","near","jump"],reason:"Hold the magnet, move it near the clip, and the clip jumps to it. The magnet pulls the metal clip."},
   {id:"L2",type:"mc",color:"#f59e0b",title:"What Sticks?",q:"Which one will a magnet pull?",
    options:["A wooden block.","A metal paper clip.","A paper."],
    answerIndex:1,reason:"A magnet pulls some metal, like a paper clip. It does not pull wood or paper."},
   {id:"L3",type:"multi",color:"#e11d48",title:"Magnet or Not?",q:"Tap ONLY the things a magnet can pull. Leave out the fun fact.",
    items:[{t:"A paper clip.",strong:true},{t:"A metal nail.",strong:true},{t:"A metal key.",strong:true},{t:"A penguin cannot fly.",strong:false}],
    reason:"A magnet pulls metal things like clips, nails, and keys. The penguin fact is true but is not about magnets."},
   {id:"L4",type:"word",color:"#16a34a",title:"Name It",q:"A magnet gives a ____ that brings the clip toward it. Type the word.",
    answer:["pull","pulls","jalón","jalon","tirón","tiron"],reason:"A magnet gives a pull. A pull brings things toward you; a push moves them away."}
  ]
 },

 "day-night": {
  id: "sciK-day-night", teks: "K.9(A)", concept: "Day and Night",
  ui: {
   h1: "Day and Night", sub: "What comes after day? Tap the clues and open all four locks.",
   briefH: "Watch the sky", briefP: "Day and night take turns, over and over. Tap the clues and open the locks!",
   winStamp: "SKY DONE ✓", winH: "Nice work!", winP: "You put day and night in order, found the daytime light, and named the night. Day and night take turns in a pattern!"
  },
  clues: [
   {id:"c1",ico:"☀️",nm:"Day",title:"Daytime",body:"In the day, the Sun is up and the sky is light. We can see well."},
   {id:"c2",ico:"🌙",nm:"Night",title:"Nighttime",body:"At night, the Sun is down and the sky is dark. We see the Moon and stars."},
   {id:"c3",ico:"🔁",nm:"Take Turns",title:"They Repeat",body:"Day and night take turns, over and over. That is a pattern."},
   {id:"c4",ico:"🛌",nm:"Sleep",title:"We Sleep at Night",body:"We are awake in the day and sleep at night."},
   {id:"c5",ico:"⭐",nm:"Stars",title:"Stars at Night",body:"We can see the stars at night, when the sky is dark."},
   {id:"c6",ico:"🐟",nm:"Fish Fact",title:"A Fish Fact",body:"A fish can swim. That is true and fun — but it is not about day and night."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0e7490",title:"Day Then Night",q:"Put the sky in order, starting with morning. Tap the pads in order.",
    pads:[{k:"night",e:"🌙 Night (dark sky)",c:"#e11d48"},{k:"day",e:"☀️ Day (Sun is up)",c:"#0e7490"},{k:"even",e:"🌆 Evening (Sun going down)",c:"#f59e0b"}],
    answer:["day","even","night"],reason:"First day, then evening, then night. Day and night take turns in a pattern."},
   {id:"L2",type:"mc",color:"#f59e0b",title:"Daytime Light",q:"What lights up the sky in the daytime?",
    options:["The Moon.","The Sun.","The stars."],
    answerIndex:1,reason:"The Sun lights the sky in the day. The Moon and stars come out at night."},
   {id:"L3",type:"multi",color:"#e11d48",title:"That's Night",q:"Tap ONLY the things we see or do at NIGHT. Leave out the fun fact.",
    items:[{t:"We see the Moon.",strong:true},{t:"We see the stars.",strong:true},{t:"We sleep.",strong:true},{t:"A fish can swim.",strong:false}],
    reason:"The Moon, the stars, and sleeping all happen at night. The fish fact is true but is not about night."},
   {id:"L4",type:"word",color:"#16a34a",title:"Name It",q:"The dark time when we see the Moon and stars is ____. Type the word.",
    answer:["night","nighttime","noche"],reason:"Night is the dark time. Day and night take turns over and over."}
  ]
 },

 "sky": {
  id: "sciK-sky", teks: "K.9(B)", concept: "Things in the Sky",
  ui: {
   h1: "Look Up!", sub: "What is in the sky? Tap the clues and open all four locks.",
   briefH: "Find the sky things", briefP: "The sky is full of things — the Sun, the Moon, stars, and clouds. Tap the clues and open the locks!",
   winStamp: "SKY DONE ✓", winH: "Sky watcher!", winP: "You found the daytime sky, spotted what makes rain, and named the fluffy ones. The sky is full of things to see!"
  },
  clues: [
   {id:"c1",ico:"☀️",nm:"Sun",title:"The Sun",body:"The Sun is a big light in the sky in the daytime. It is warm and bright."},
   {id:"c2",ico:"🌙",nm:"Moon",title:"The Moon",body:"The Moon is in the sky, mostly at night. It looks white or silver."},
   {id:"c3",ico:"⭐",nm:"Stars",title:"Stars",body:"Stars are tiny lights we see in the dark night sky."},
   {id:"c4",ico:"☁️",nm:"Clouds",title:"Clouds",body:"Clouds are white and fluffy. Dark clouds can bring rain."},
   {id:"c5",ico:"👀",nm:"Look Up",title:"We Look Up",body:"We look up to see the Sun, Moon, stars, and clouds."},
   {id:"c6",ico:"🐢",nm:"Turtle Fact",title:"A Turtle Fact",body:"A turtle has a hard shell. That is true and neat — but it is not in the sky."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0e7490",title:"Day to Night Sky",q:"Put the sky in order, from bright day to dark night. Tap the pads in order.",
    pads:[{k:"stars",e:"⭐ Stars come out (night)",c:"#e11d48"},{k:"sun",e:"☀️ The Sun (day)",c:"#0e7490"},{k:"moon",e:"🌙 The Moon (evening)",c:"#f59e0b"}],
    answer:["sun","moon","stars"],reason:"The Sun shines in the day, the Moon comes in the evening, and the stars come out at night."},
   {id:"L2",type:"mc",color:"#f59e0b",title:"Rain Maker",q:"What in the sky can bring us rain?",
    options:["The Sun.","Dark clouds.","The stars."],
    answerIndex:1,reason:"Dark clouds can bring rain. The Sun and stars do not make rain."},
   {id:"L3",type:"multi",color:"#e11d48",title:"In the Sky",q:"Tap ONLY the things we see in the sky. Leave out the fun fact.",
    items:[{t:"The Sun.",strong:true},{t:"The Moon.",strong:true},{t:"Clouds.",strong:true},{t:"A turtle has a hard shell.",strong:false}],
    reason:"The Sun, Moon, and clouds are all in the sky. The turtle fact is true but is not in the sky."},
   {id:"L4",type:"word",color:"#16a34a",title:"Name It",q:"The white, fluffy things in the sky that can bring rain are ____. Type the word.",
    answer:["clouds","cloud","nubes","nube"],reason:"Clouds are the fluffy sky things. Dark clouds can bring rain."}
  ]
 },

 "rocks": {
  id: "sciK-rocks", teks: "K.10(A)", concept: "Sorting Rocks",
  ui: {
   h1: "Rock Sort", sub: "How are rocks different? Tap the clues and open all four locks.",
   briefH: "Look at rocks", briefP: "Rocks come in many sizes, colors, and feels. We can sort them! Tap the clues and open the locks!",
   winStamp: "SORTED ✓", winH: "Rock star!", winP: "You put rocks in size order, found a way to sort, and named the earth thing. Rocks come in all sizes, colors, and feels!"
  },
  clues: [
   {id:"c1",ico:"🪨",nm:"Rocks",title:"Rocks",body:"Rocks are hard pieces of the earth. We find them on the ground."},
   {id:"c2",ico:"📏",nm:"Size",title:"Big or Small",body:"Some rocks are big. Some are tiny, like pebbles."},
   {id:"c3",ico:"🎨",nm:"Color",title:"Rock Colors",body:"Rocks can be gray, brown, black, or white."},
   {id:"c4",ico:"✋",nm:"Feel",title:"Smooth or Rough",body:"Some rocks are smooth. Some are bumpy and rough."},
   {id:"c5",ico:"🧺",nm:"Sort",title:"Sort Them",body:"We can sort rocks into groups by size, color, or feel."},
   {id:"c6",ico:"🐧",nm:"Bird Fact",title:"A Penguin Fact",body:"A penguin cannot fly. That is true and fun — but it is not about rocks."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0e7490",title:"Small Rock to Big Rock",q:"Put the rocks in order from SMALL to BIG. Tap the pads in order.",
    pads:[{k:"boulder",e:"🪨 A big boulder",c:"#e11d48"},{k:"pebble",e:"⚪ A tiny pebble",c:"#0e7490"},{k:"stone",e:"🪨 A hand-sized stone",c:"#f59e0b"}],
    answer:["pebble","stone","boulder"],reason:"A pebble is smallest, then a stone, then a big boulder. That is sorting rocks by size!"},
   {id:"L2",type:"mc",color:"#f59e0b",title:"Bumpy Rock",q:"A bumpy rock tells us how it ____.",
    options:["Feels.","Tastes.","Sounds."],
    answerIndex:0,reason:"Bumpy or smooth tells how a rock feels. We can sort rocks by feel."},
   {id:"L3",type:"multi",color:"#e11d48",title:"Ways to Sort Rocks",q:"Tap ONLY the ways we can sort rocks. Leave out the fun fact.",
    items:[{t:"By size.",strong:true},{t:"By color.",strong:true},{t:"By how they feel.",strong:true},{t:"A penguin cannot fly.",strong:false}],
    reason:"Size, color, and feel are ways to sort rocks. The penguin fact is true but does not sort rocks."},
   {id:"L4",type:"word",color:"#16a34a",title:"Name It",q:"A hard piece of the earth we find on the ground is a ____. Type the word.",
    answer:["rock","rocks","stone","roca","piedra"],reason:"A rock is a hard piece of the earth. We can sort rocks by size, color, and feel."}
  ]
 },

 "weather": {
  id: "sciK-weather", teks: "K.10(B)", concept: "Weather",
  ui: {
   h1: "What's the Weather?", sub: "Sunny or rainy? Tap the clues and open all four locks.",
   briefH: "Look outside", briefP: "Weather is what the sky is doing. It can change every day! Tap the clues and open the locks!",
   winStamp: "WEATHER ✓", winH: "Weather star!", winP: "You got ready for a rainy day, picked the right clothes, and named the word. Weather changes, and it helps us pick what to wear!"
  },
  clues: [
   {id:"c1",ico:"☀️",nm:"Sunny",title:"Sunny",body:"Sunny weather is bright and warm."},
   {id:"c2",ico:"🌧️",nm:"Rainy",title:"Rainy",body:"Rainy weather has rain falling from clouds."},
   {id:"c3",ico:"💨",nm:"Windy",title:"Windy",body:"Windy weather has air moving fast. It can blow leaves."},
   {id:"c4",ico:"❄️",nm:"Cold",title:"Cold & Snowy",body:"Cold weather can bring snow. We wear warm coats."},
   {id:"c5",ico:"👕",nm:"Dress",title:"Dress for It",body:"We use the weather to pick our clothes — a coat when cold, a raincoat when wet."},
   {id:"c6",ico:"🐟",nm:"Fish Fact",title:"A Fish Fact",body:"A fish can swim. That is true and fun — but it is not weather."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0e7490",title:"A Rainy Day",q:"It is raining! Put your morning in order. Tap the pads in order.",
    pads:[{k:"dry",e:"🙂 You stay dry",c:"#e11d48"},{k:"see",e:"🌧️ You see the rain",c:"#0e7490"},{k:"coat",e:"🧥 You grab a raincoat",c:"#f59e0b"}],
    answer:["see","coat","dry"],reason:"You see the rain, grab a raincoat, and stay dry. Weather helps us pick what to wear!"},
   {id:"L2",type:"mc",color:"#f59e0b",title:"Cold Day",q:"It is cold and snowy. What should you wear?",
    options:["A warm coat.","A swimsuit.","Nothing extra."],
    answerIndex:0,reason:"On a cold, snowy day we wear a warm coat to stay warm."},
   {id:"L3",type:"multi",color:"#e11d48",title:"Kinds of Weather",q:"Tap ONLY the kinds of weather. Leave out the fun fact.",
    items:[{t:"Sunny.",strong:true},{t:"Rainy.",strong:true},{t:"Windy.",strong:true},{t:"A fish can swim.",strong:false}],
    reason:"Sunny, rainy, and windy are all weather. The fish fact is true but is not weather."},
   {id:"L4",type:"word",color:"#16a34a",title:"Name It",q:"Sunny, rainy, and snowy all tell the ____ outside. Type the word.",
    answer:["weather","clima","tiempo"],reason:"Weather is what the sky is doing. It helps us pick what to wear!"}
  ]
 },

 "air-wind": {
  id: "sciK-air-wind", teks: "K.10(C)", concept: "Air & Wind",
  ui: {
   h1: "Feel the Wind", sub: "What is wind? Tap the clues and open all four locks.",
   briefH: "Catch the air", briefP: "Air is all around us, even though we can't see it. Moving air is called wind! Tap the clues and open the locks!",
   winStamp: "WINDY ✓", winH: "Nice work!", winP: "You flew a kite with the wind, found what moving air is called, and named it. Air is all around us, and moving air is wind!"
  },
  clues: [
   {id:"c1",ico:"🌬️",nm:"Air",title:"Air Everywhere",body:"Air is all around us. We can't see it, but it is there."},
   {id:"c2",ico:"💨",nm:"Wind",title:"Wind",body:"Moving air is called wind. We can feel it on our faces."},
   {id:"c3",ico:"🪁",nm:"Kite",title:"Wind Lifts a Kite",body:"The wind can lift a kite high into the sky."},
   {id:"c4",ico:"🍃",nm:"Leaves",title:"Wind Moves Things",body:"The wind can blow leaves, flags, and a pinwheel around."},
   {id:"c5",ico:"🎈",nm:"Balloon",title:"Air Fills It",body:"Air fills up a balloon and makes it bigger."},
   {id:"c6",ico:"🐢",nm:"Turtle Fact",title:"A Turtle Fact",body:"A turtle has a hard shell. That is true and neat — but it is not about air or wind."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0e7490",title:"Fly a Kite",q:"Fly a kite with the wind. Put it in order. Tap the pads in order.",
    pads:[{k:"high",e:"🪁 The kite flies high",c:"#e11d48"},{k:"hold",e:"🧍 You hold the kite",c:"#0e7490"},{k:"blow",e:"💨 The wind blows",c:"#f59e0b"}],
    answer:["hold","blow","high"],reason:"You hold the kite, the wind blows, and the kite flies high. Moving air — wind — lifts the kite!"},
   {id:"L2",type:"mc",color:"#f59e0b",title:"Moving Air",q:"What do we call moving air?",
    options:["Wind.","A rock.","Water."],
    answerIndex:0,reason:"Moving air is called wind. We can feel it and it can move things."},
   {id:"L3",type:"multi",color:"#e11d48",title:"The Wind Can...",q:"Tap ONLY the things the wind can do. Leave out the fun fact.",
    items:[{t:"Lift a kite.",strong:true},{t:"Blow leaves around.",strong:true},{t:"Spin a pinwheel.",strong:true},{t:"A turtle has a hard shell.",strong:false}],
    reason:"The wind can lift kites, blow leaves, and spin pinwheels. The turtle fact is true but is not about wind."},
   {id:"L4",type:"word",color:"#16a34a",title:"Name It",q:"Moving air that can fly a kite is called ____. Type the word.",
    answer:["wind","viento"],reason:"Wind is moving air. Air is all around us, and when it moves we call it wind!"}
  ]
 },

 "plant-needs": {
  id: "sciK-plant-needs", teks: "K.12(A)", concept: "What Plants Need",
  ui: {
   h1: "Help a Plant Grow", sub: "What do plants need? Tap the clues and open all four locks.",
   briefH: "Grow a plant", briefP: "Plants need a few things to live and grow — sunlight, water, air, and soil. Tap the clues and open the locks!",
   winStamp: "GREW ✓", winH: "Green thumb!", winP: "You grew a plant, found what it needs, and named the wet one. Plants need sunlight, water, air, and soil to grow!"
  },
  clues: [
   {id:"c1",ico:"☀️",nm:"Sunlight",title:"Sunlight",body:"Plants need sunlight to grow. They use it to make their food."},
   {id:"c2",ico:"💧",nm:"Water",title:"Water",body:"Plants need water. We water them so they don't dry out."},
   {id:"c3",ico:"🌬️",nm:"Air",title:"Air",body:"Plants need air, just like we do."},
   {id:"c4",ico:"🟤",nm:"Soil",title:"Soil",body:"Plants grow in soil. Their roots hold on and drink up water."},
   {id:"c5",ico:"🌱",nm:"Grow",title:"They Grow",body:"With sunlight, water, air, and soil, a plant can grow big and healthy."},
   {id:"c6",ico:"🐧",nm:"Bird Fact",title:"A Penguin Fact",body:"A penguin cannot fly. That is true and fun — but it is not what a plant needs."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0e7490",title:"Grow a Flower",q:"Grow a flower. Put it in order. Tap the pads in order.",
    pads:[{k:"flower",e:"🌻 A flower grows",c:"#e11d48"},{k:"seed",e:"🌰 Plant a seed in soil",c:"#0e7490"},{k:"water",e:"💧 Give it water and sunlight",c:"#f59e0b"}],
    answer:["seed","water","flower"],reason:"Plant a seed, give it water and sunlight, and a flower grows. Plants need those things to grow!"},
   {id:"L2",type:"mc",color:"#f59e0b",title:"Plant Food",q:"What do plants use to make their food?",
    options:["Sunlight.","A magnet.","A rock."],
    answerIndex:0,reason:"Plants use sunlight to make their food. They also need water, air, and soil."},
   {id:"L3",type:"multi",color:"#e11d48",title:"Plants Need...",q:"Tap ONLY the things a plant needs to grow. Leave out the fun fact.",
    items:[{t:"Sunlight.",strong:true},{t:"Water.",strong:true},{t:"Soil.",strong:true},{t:"A penguin cannot fly.",strong:false}],
    reason:"Plants need sunlight, water, and soil (and air). The penguin fact is true but is not what a plant needs."},
   {id:"L4",type:"word",color:"#16a34a",title:"Name It",q:"Plants need this wet thing to drink so they do not dry out: ____. Type the word.",
    answer:["water","agua"],reason:"Plants need water to grow. They also need sunlight, air, and soil."}
  ]
 },

 "animal-needs": {
  id: "sciK-animal-needs", teks: "K.12(B)", concept: "What Animals Need",
  ui: {
   h1: "What Animals Need", sub: "What do animals need to live? Tap the clues and open all four locks.",
   briefH: "Help an animal", briefP: "Animals need food, water, air, and a home to live. Tap the clues and open the locks!",
   winStamp: "CARED ✓", winH: "Animal helper!", winP: "You fed a hungry animal, found what it needs, and named its home. Animals need food, water, air, and shelter!"
  },
  clues: [
   {id:"c1",ico:"🍎",nm:"Food",title:"Food",body:"Animals need food to eat so they have energy to live and grow."},
   {id:"c2",ico:"💧",nm:"Water",title:"Water",body:"Animals need water to drink."},
   {id:"c3",ico:"🌬️",nm:"Air",title:"Air",body:"Animals need air to breathe."},
   {id:"c4",ico:"🏠",nm:"Shelter",title:"Shelter",body:"Animals need a home, or shelter, to stay safe — a nest, a den, or a burrow."},
   {id:"c5",ico:"🐾",nm:"Space",title:"Space",body:"Animals need space to move around, find food, and live."},
   {id:"c6",ico:"🐟",nm:"Fish Fact",title:"A Fish Fact",body:"A fish can swim. That is true and fun — but it is not something all animals need."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0e7490",title:"Feed a Hungry Bird",q:"Help a hungry bird. Put it in order. Tap the pads in order.",
    pads:[{k:"happy",e:"🐦 The bird is full and happy",c:"#e11d48"},{k:"hungry",e:"🐦 A hungry bird",c:"#0e7490"},{k:"eat",e:"🍎 It finds food to eat",c:"#f59e0b"}],
    answer:["hungry","eat","happy"],reason:"A hungry bird finds food, eats, and is happy. Animals need food to live and grow!"},
   {id:"L2",type:"mc",color:"#f59e0b",title:"A Safe Home",q:"What do we call an animal's safe home, like a nest or a den?",
    options:["Shelter.","A rock.","A cloud."],
    answerIndex:0,reason:"Shelter is an animal's safe home, like a nest, den, or burrow."},
   {id:"L3",type:"multi",color:"#e11d48",title:"Animals Need...",q:"Tap ONLY the things an animal needs to live. Leave out the fun fact.",
    items:[{t:"Food.",strong:true},{t:"Water.",strong:true},{t:"Shelter.",strong:true},{t:"A fish can swim.",strong:false}],
    reason:"Animals need food, water, and shelter (and air). The fish fact is true but is not something all animals need."},
   {id:"L4",type:"word",color:"#16a34a",title:"Name It",q:"Animals eat ____ to get energy to live and grow. Type the word.",
    answer:["food","comida","alimento"],reason:"Animals need food to eat. They also need water, air, and shelter."}
  ]
 },

 "plant-parts": {
  id: "sciK-plant-parts", teks: "K.13(A,C)", concept: "Plant Parts & Growing",
  ui: {
   h1: "Parts of a Plant", sub: "What are a plant's parts, and how does it grow? Tap the clues and open all four locks.",
   briefH: "Meet a plant", briefP: "A plant has parts that help it live, and it grows from a tiny seed. Tap the clues and open the locks!",
   winStamp: "GROWN ✓", winH: "Plant expert!", winP: "You grew a plant from a seed, found the drinking part, and named the roots. Plants have parts that help them live and grow!"
  },
  clues: [
   {id:"c1",ico:"🌱",nm:"Roots",title:"Roots",body:"Roots grow down into the soil. They hold the plant and drink up water."},
   {id:"c2",ico:"🌿",nm:"Stem",title:"Stem",body:"The stem holds the plant up and carries water to the leaves."},
   {id:"c3",ico:"🍃",nm:"Leaves",title:"Leaves",body:"Leaves catch sunlight to help the plant make food."},
   {id:"c4",ico:"🌸",nm:"Flower",title:"Flower",body:"Many plants grow flowers. Flowers can become fruit with seeds."},
   {id:"c5",ico:"🌰",nm:"Seed",title:"From a Seed",body:"A plant starts as a tiny seed. The seed grows into a seedling, then a big plant. A baby plant looks like its parent."},
   {id:"c6",ico:"🐧",nm:"Bird Fact",title:"A Penguin Fact",body:"A penguin cannot fly. That is true and fun — but it is not a plant part."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#0e7490",title:"Seed to Plant",q:"Put a plant's life in order. Tap the pads in order.",
    pads:[{k:"plant",e:"🌻 A big plant",c:"#e11d48"},{k:"seed",e:"🌰 A tiny seed",c:"#0e7490"},{k:"sprout",e:"🌱 A little seedling",c:"#f59e0b"}],
    answer:["seed","sprout","plant"],reason:"A seed grows into a seedling, then a big plant. A baby plant looks like its parent plant!"},
   {id:"L2",type:"mc",color:"#f59e0b",title:"Catching Sunlight",q:"Which plant part catches sunlight to help make food?",
    options:["The roots.","The leaves.","The seed."],
    answerIndex:1,reason:"Leaves catch sunlight to help the plant make its food. Roots drink water; the stem holds it up."},
   {id:"L3",type:"multi",color:"#e11d48",title:"Parts of a Plant",q:"Tap ONLY the parts of a plant. Leave out the fun fact.",
    items:[{t:"Roots.",strong:true},{t:"Stem.",strong:true},{t:"Leaves.",strong:true},{t:"A penguin cannot fly.",strong:false}],
    reason:"Roots, stem, and leaves are all plant parts. The penguin fact is true but is not a plant part."},
   {id:"L4",type:"word",color:"#16a34a",title:"Name It",q:"The plant part that grows down into the soil and drinks up water is the ____. Type the word.",
    answer:["roots","root","raíz","raiz","raíces","raices"],reason:"Roots grow down and drink water. Every plant part helps the plant live and grow."}
  ]
 }

};
