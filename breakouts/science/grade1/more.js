/* Grade 1 "More" — short single-concept Critical Thinking Online Breakouts, one per
   key TEKS concept (§112.3), written for early readers. The player (play.html) merges
   MORE_BASE_UI with each entry's ui overrides and hands the result to the shared engine.
   6 short clues (1 decoy) + 4 locks (seq/mc/multi/word); each reason names the move. */
window.MORE_BASE_UI = {
  en: {
    "sect.clues": "🔍 The Clues",
    "sect.cluesHint": "Tap each clue to read it. You can open them again anytime.",
    "sect.locks": "🔒 The Locks",
    "sect.locksHint": "Use the clues to open each lock.",
    "crumb.teacher": "‹ More Grade 1 breakouts",
    "crumb.suite": "Grade 1 Science",
    "ui.reset": "↺ Start over", "ui.check": "Check", "ui.gotit": "Got it", "ui.playagain": "Play Again",
    "ui.solved": "🔓 Open!", "ui.pcount": "{n} of {total} locks open",
    "ui.wordph": "Type here", "ui.clear": "clear",
    "fb.digit": "Not yet. Look at the clues again.",
    "fb.word": "Look at the clues for the right word.",
    "fb.mc": "Not that one. Check the clues again.",
    "fb.multiExtra": "One pick is not right. Pick only the ones that fit.",
    "fb.multiMissing": "You missed one. Find them all.",
    "fb.seq": "Not that order. Try again.",
    "footer.privacy": "Privacy & compliance", "footer.text": "Grade 1 Science · Critical Thinking Online Breakouts · Runs in your browser — no logins, no data collected.",
    "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.3, Grade 1). Good-faith paraphrase; confirm before adoption.",
    "header.eyebrow": "Grade 1 Science · Quick Breakout",
    "brief.label": "🎈 Let's Go"
  }
};

window.MORE = {

 "properties": {
  id: "sci1-properties", teks: "1.6(A)", concept: "Sorting by Properties",
  ui: {
   h1: "Sort It Out", sub: "Big or small? Smooth or rough? Read the clues and open all four locks to sort things.",
   briefH: "Look and sort", briefP: "We can sort things by how they look and feel — color, shape, size, and what they are made of. Tap the clues and open the locks!",
   winStamp: "SORTED ✓", winH: "Great sorting!", winP: "You put things in size order, found how something feels, and named a way to sort. Color, shape, size, and texture all help us sort things."
  },
  clues: [
   {id:"c1",ico:"🎨",nm:"Color",title:"Color",body:"Color is one way to sort. Things can be red, blue, green, and more."},
   {id:"c2",ico:"⬛",nm:"Shape",title:"Shape",body:"Shape is a way to sort too. Things can be round, square, or long."},
   {id:"c3",ico:"✋",nm:"Texture",title:"How It Feels",body:"Texture is how something feels. It can be smooth or rough, soft or hard."},
   {id:"c4",ico:"📏",nm:"Size",title:"Big or Small",body:"We can sort by size. Some things are big and some are small."},
   {id:"c5",ico:"🧱",nm:"Made Of",title:"What It Is Made Of",body:"We can sort by what a thing is made of, like wood, metal, or plastic."},
   {id:"c6",ico:"🌈",nm:"Sky Fact",title:"A Rainbow Fact","body":"A rainbow has seven colors. That is true and pretty — but it is not a way to sort your toys."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#e88b1a",title:"Small to Big",q:"Put these in order from the SMALLEST to the BIGGEST. Tap the pads in order.",
    pads:[{k:"eleph",e:"🐘 Elephant",c:"#2f6fe0"},{k:"ant",e:"🐜 Ant",c:"#e88b1a"},{k:"cat",e:"🐱 Cat",c:"#2f8f7f"}],
    answer:["ant","cat","eleph"],reason:"An ant is smallest, then a cat, then an elephant. Sorting by size means putting them in order small to big."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"How Does It Feel?",q:"A rock is bumpy and hard. Which word tells how it FEELS?",
    options:["Red.","Rough.","Round."],
    answerIndex:1,reason:"Rough tells texture — how something feels. Red tells color and round tells shape."},
   {id:"L3",type:"multi",color:"#2f6fe0",title:"Ways to Sort",q:"Tap ONLY the ways we can sort things. Leave out the fun fact.",
    items:[{t:"By color.",strong:true},{t:"By size.",strong:true},{t:"By what it is made of.",strong:true},{t:"A rainbow has seven colors.",strong:false}],
    reason:"Color, size, and material are all ways to sort. The rainbow fact is true but does not help you sort."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name a Way",q:"Red, blue, and green are all this. We can sort by ____. Type the word.",
    answer:["color","colour","colores"],reason:"Color is one way to sort things. Naming a property helps us describe and sort."}
  ]
 },

 "heat-changes": {
  id: "sci1-heat-changes", teks: "1.6(B), 1.8", concept: "Heating & Cooling",
  ui: {
   h1: "Hot and Cold", sub: "What does heat do? Read the clues and open all four locks.",
   briefH: "Watch it change", briefP: "Heat can change things. It can melt ice and cook food. Cold can make water turn to ice. Tap the clues and open the locks!",
   winStamp: "CHANGED ✓", winH: "Nice work!", winP: "You melted an ice cube, found what heat does, and named the change. Heat and cold can change things all around us."
  },
  clues: [
   {id:"c1",ico:"🔥",nm:"Heat",title:"Heat Changes Things",body:"Heat is warm energy. It can change things, like melting ice or cooking food."},
   {id:"c2",ico:"🧊",nm:"Melt",title:"Ice Melts",body:"When ice gets warm, it melts and turns into water."},
   {id:"c3",ico:"❄️",nm:"Freeze",title:"Water Freezes",body:"When water gets very cold, it freezes and turns into ice."},
   {id:"c4",ico:"🍳",nm:"Cook",title:"Heat Cooks",body:"We use heat to cook food. Once an egg is cooked, it cannot go back to being raw."},
   {id:"c5",ico:"🧺",nm:"Dry",title:"Heat Dries",body:"A clothes dryer uses heat to dry wet clothes."},
   {id:"c6",ico:"🦉",nm:"Owl Fact",title:"An Owl Fact",body:"An owl can turn its head almost all the way around. That is true and cool — but it is not about heat."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#e88b1a",title:"Melting Ice",q:"An ice cube gets warm. Put it in order. Tap the pads in order.",
    pads:[{k:"water",e:"💧 It is a puddle of water",c:"#2f6fe0"},{k:"ice",e:"🧊 A cold ice cube",c:"#e88b1a"},{k:"melt",e:"🔥 It gets warm and melts",c:"#e0533a"}],
    answer:["ice","melt","water"],reason:"A cold ice cube gets warm, melts, and becomes water. Heat changes ice into water."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"What Melts It?",q:"What makes an ice cube melt?",
    options:["Heat (getting warm).","Cold (getting colder).","A push."],
    answerIndex:0,reason:"Heat makes ice melt into water. Cold would keep it frozen."},
   {id:"L3",type:"multi",color:"#2f6fe0",title:"What Heat Can Do",q:"Tap ONLY the things HEAT can do. Leave out the fun fact.",
    items:[{t:"Melt an ice cube.",strong:true},{t:"Cook an egg.",strong:true},{t:"Dry wet clothes.",strong:true},{t:"An owl can turn its head far around.",strong:false}],
    reason:"Heat can melt, cook, and dry. The owl fact is true but is not about heat."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name the Change",q:"Ice gets warm and turns to water. We say the ice will ____. Type the word.",
    answer:["melt","melts","derretir","derrite"],reason:"Ice melts when it gets warm. Naming the change helps us tell what heat did."}
  ]
 },

 "seasons": {
  id: "sci1-seasons", teks: "1.9", concept: "Seasons",
  ui: {
   h1: "Round the Year", sub: "Winter, spring, summer, fall — read the clues and open all four locks.",
   briefH: "Follow the seasons", briefP: "The four seasons come in the same order every year. Tap the clues and open the locks to learn the pattern!",
   winStamp: "SEASONS DONE ✓", winH: "Well done!", winP: "You put the seasons in order and found what happens in each one. The seasons repeat in a pattern all year long."
  },
  clues: [
   {id:"c1",ico:"🌸",nm:"Spring",title:"Spring",body:"In spring it gets warmer. Flowers grow and baby animals are born."},
   {id:"c2",ico:"☀️",nm:"Summer",title:"Summer",body:"Summer is hot with long, sunny days."},
   {id:"c3",ico:"🍂",nm:"Fall",title:"Fall",body:"In fall it cools down. Leaves change color and drop from the trees."},
   {id:"c4",ico:"❄️",nm:"Winter",title:"Winter",body:"Winter is cold. Some places get snow and days are short."},
   {id:"c5",ico:"🔁",nm:"Pattern",title:"They Repeat",body:"The seasons come in the same order every year. That is a pattern."},
   {id:"c6",ico:"🐧",nm:"Bird Fact",title:"A Penguin Fact",body:"Penguins cannot fly but they are great swimmers. That is true and fun — but it is not about seasons."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#e88b1a",title:"Season Order",q:"Put the seasons in order, starting with spring. Tap the pads in order.",
    pads:[{k:"fall",e:"🍂 Fall",c:"#e0533a"},{k:"spring",e:"🌸 Spring",c:"#2f8f7f"},{k:"winter",e:"❄️ Winter",c:"#2f6fe0"},{k:"summer",e:"☀️ Summer",c:"#e88b1a"}],
    answer:["spring","summer","fall","winter"],reason:"Spring, then summer, then fall, then winter. The seasons follow the same order every year — a pattern."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"The Hot One",q:"Which season is hot with long, sunny days?",
    options:["Winter.","Summer.","Fall."],
    answerIndex:1,reason:"Summer is hot with long days. Winter is cold with short days."},
   {id:"L3",type:"multi",color:"#2f6fe0",title:"Fall Time",q:"Tap ONLY the things that happen in FALL. Leave out the fun fact.",
    items:[{t:"Leaves change color.",strong:true},{t:"Leaves drop from the trees.",strong:true},{t:"The weather gets cooler.",strong:true},{t:"Penguins are great swimmers.",strong:false}],
    reason:"In fall, leaves change and drop and it cools down. The penguin fact is true but is not about fall."},
   {id:"L4",type:"word",color:"#e0533a",title:"The Cold One",q:"The cold season with short days, when some places get snow, is ____. Type the word.",
    answer:["winter","invierno"],reason:"Winter is the cold season. Naming each season helps us see the year's pattern."}
  ]
 },

 "soil": {
  id: "sci1-soil", teks: "1.10(A)", concept: "Soil",
  ui: {
   h1: "All About Soil", sub: "What is under your feet? Read the clues and open all four locks.",
   briefH: "Dig into soil", briefP: "Soil is the dirt on the ground. It comes in different colors and feels. Plants grow in it! Tap the clues and open the locks.",
   winStamp: "DUG IN ✓", winH: "Good digging!", winP: "You grew a plant in soil, found the best soil for plants, and named it. Soil helps plants grow and comes in many kinds."
  },
  clues: [
   {id:"c1",ico:"🟤",nm:"Soil",title:"Soil",body:"Soil is the dirt on the ground. Plants grow in it."},
   {id:"c2",ico:"🌱",nm:"Topsoil",title:"Topsoil",body:"Topsoil is dark and full of food for plants. It is the best soil for growing."},
   {id:"c3",ico:"🏖️",nm:"Sand",title:"Sand",body:"Sand is soil made of tiny, loose grains. It feels grainy and water runs right through it."},
   {id:"c4",ico:"🧱",nm:"Clay",title:"Clay",body:"Clay is soil that is sticky when wet. It holds together in a ball."},
   {id:"c5",ico:"🎨",nm:"Colors",title:"Different Soils",body:"Soils can be different colors and can feel smooth, grainy, or sticky."},
   {id:"c6",ico:"🐙",nm:"Sea Fact",title:"An Octopus Fact",body:"An octopus has eight arms. That is true and neat — but it is not about soil."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#e88b1a",title:"Grow a Plant",q:"Put these in order to grow a plant. Tap the pads in order.",
    pads:[{k:"plant",e:"🌻 A plant grows up",c:"#2f8f7f"},{k:"seed",e:"🌰 Plant a seed in the soil",c:"#e88b1a"},{k:"roots",e:"🌱 Roots grow down",c:"#2f6fe0"}],
    answer:["seed","roots","plant"],reason:"A seed goes in the soil, roots grow down, and a plant grows up. Soil helps a plant grow."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"Best for Plants",q:"Which soil is the best for growing plants?",
    options:["Sand.","Topsoil.","No soil at all."],
    answerIndex:1,reason:"Topsoil is dark and full of food for plants, so it is best for growing."},
   {id:"L3",type:"multi",color:"#2f6fe0",title:"How Soils Are Different",q:"Tap ONLY the ways soils can be different. Leave out the fun fact.",
    items:[{t:"Their color.",strong:true},{t:"How they feel.",strong:true},{t:"The size of the grains.",strong:true},{t:"An octopus has eight arms.",strong:false}],
    reason:"Soils differ in color, feel, and grain size. The octopus fact is true but is not about soil."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"The dirt on the ground that plants grow in is called ____. Type the word.",
    answer:["soil","dirt","suelo","tierra"],reason:"Soil is the ground that plants grow in. Naming it helps us talk about the earth."}
  ]
 },

 "water-earth": {
  id: "sci1-water-earth", teks: "1.10(C)", concept: "Water on Earth",
  ui: {
   h1: "Water Everywhere", sub: "Puddles, ponds, and the big blue sea! Read the clues and open all four locks.",
   briefH: "Find the water", briefP: "Water is in many places on Earth, from tiny puddles to the huge ocean. Some water is fresh and some is salty. Tap the clues and open the locks!",
   winStamp: "WATER FOUND ✓", winH: "Splash-tastic!", winP: "You put water places in size order, found the salty one, and named it. Water on Earth comes in all sizes, fresh and salty."
  },
  clues: [
   {id:"c1",ico:"💧",nm:"Puddle",title:"Puddle",body:"A puddle is a tiny bit of water on the ground after it rains."},
   {id:"c2",ico:"🏞️",nm:"Pond",title:"Pond & Lake",body:"A pond is small and a lake is bigger. Their water is fresh, not salty."},
   {id:"c3",ico:"🌊",nm:"Ocean",title:"Ocean",body:"The ocean is the biggest water of all. Ocean water is salty."},
   {id:"c4",ico:"🥤",nm:"Fresh",title:"Fresh vs. Salty",body:"Fresh water has no salt. We can drink it. Salt water is too salty to drink."},
   {id:"c5",ico:"🏊",nm:"Rivers",title:"Rivers",body:"A river is water that flows along the ground. River water is usually fresh."},
   {id:"c6",ico:"🦒",nm:"Tall Fact",title:"A Giraffe Fact",body:"A giraffe is the tallest animal. That is true and cool — but it is not about water."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#e88b1a",title:"Small to Big",q:"Put these water places in order from SMALLEST to BIGGEST. Tap the pads in order.",
    pads:[{k:"ocean",e:"🌊 Ocean",c:"#2f6fe0"},{k:"puddle",e:"💧 Puddle",c:"#e88b1a"},{k:"pond",e:"🏞️ Pond",c:"#2f8f7f"}],
    answer:["puddle","pond","ocean"],reason:"A puddle is smallest, then a pond, then the huge ocean. Water comes in many sizes."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"The Salty One",q:"Which water is salty?",
    options:["A pond.","The ocean.","A puddle."],
    answerIndex:1,reason:"Ocean water is salty. Ponds and rivers are fresh water."},
   {id:"L3",type:"multi",color:"#2f6fe0",title:"Where Is Water?",q:"Tap ONLY the places you find water. Leave out the fun fact.",
    items:[{t:"In a pond.",strong:true},{t:"In a river.",strong:true},{t:"In the ocean.",strong:true},{t:"A giraffe is the tallest animal.",strong:false}],
    reason:"Ponds, rivers, and oceans all hold water. The giraffe fact is true but is not about water."},
   {id:"L4",type:"word",color:"#e0533a",title:"The Big One",q:"The biggest, saltiest water on Earth is the ____. Type the word.",
    answer:["ocean","sea","océano","oceano","mar"],reason:"The ocean is the biggest water and it is salty. Naming water places helps us describe Earth."}
  ]
 },

 "weather": {
  id: "sci1-weather", teks: "1.10(D)", concept: "Weather",
  ui: {
   h1: "What's the Weather?", sub: "Sunny, rainy, or snowy? Read the clues and open all four locks.",
   briefH: "Check the sky", briefP: "Weather is what the sky and air are doing today. It helps us pick what to wear. Tap the clues and open the locks!",
   winStamp: "FORECAST ✓", winH: "Weather star!", winP: "You got ready for the rain, picked the right clothes, and named the word. Weather changes, and it helps us plan our day."
  },
  clues: [
   {id:"c1",ico:"☀️",nm:"Sunny",title:"Sunny",body:"Sunny weather is bright and warm with a clear sky."},
   {id:"c2",ico:"🌧️",nm:"Rainy",title:"Rainy",body:"Rainy weather has clouds and water falling from the sky."},
   {id:"c3",ico:"💨",nm:"Windy",title:"Windy",body:"Windy weather has air moving fast. It can push kites and leaves."},
   {id:"c4",ico:"❄️",nm:"Snowy",title:"Cold & Snowy",body:"Cold weather can bring snow and ice. We bundle up to stay warm."},
   {id:"c5",ico:"👕",nm:"What to Wear",title:"Dress for It",body:"We use the weather to choose our clothes — a coat when cold, a raincoat when wet."},
   {id:"c6",ico:"🐝",nm:"Bee Fact",title:"A Bee Fact",body:"Bees make honey. That is true and sweet — but it is not weather."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#e88b1a",title:"A Rainy Day",q:"It is raining. Put your morning in order to stay dry. Tap the pads in order.",
    pads:[{k:"dry",e:"🙂 You stay dry outside",c:"#2f8f7f"},{k:"see",e:"🌧️ You see rain out the window",c:"#e88b1a"},{k:"coat",e:"🧥 You grab a raincoat",c:"#2f6fe0"}],
    answer:["see","coat","dry"],reason:"You see the rain, grab a raincoat, and stay dry. Weather helps us choose what to wear."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"Cold Day Clothes",q:"It is cold and snowy. What should you wear?",
    options:["A warm coat.","A swimsuit.","Nothing extra."],
    answerIndex:0,reason:"On a cold, snowy day we wear a warm coat. Weather helps us stay comfortable."},
   {id:"L3",type:"multi",color:"#2f6fe0",title:"Kinds of Weather",q:"Tap ONLY the kinds of weather. Leave out the fun fact.",
    items:[{t:"Rainy.",strong:true},{t:"Sunny.",strong:true},{t:"Windy.",strong:true},{t:"Bees make honey.",strong:false}],
    reason:"Rainy, sunny, and windy are all weather. The bee fact is true but is not weather."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"Sunny, rainy, and snowy all tell the ____ outside. Type the word.",
    answer:["weather","clima","tiempo"],reason:"Weather is what the sky and air are doing. Naming it helps us plan our day."}
  ]
 },

 "conserve-water": {
  id: "sci1-conserve-water", teks: "1.11(B,C)", concept: "Saving Water",
  ui: {
   h1: "Save the Water", sub: "Water is important. Read the clues and open all four locks to help save it.",
   briefH: "Be a water helper", briefP: "We need water to drink, wash, and grow food. We should not waste it. Tap the clues and open the locks to learn how to save water!",
   winStamp: "WATER SAVED ✓", winH: "Water hero!", winP: "You saved water while brushing your teeth, found ways to help, and named the word. Saving water keeps this important resource for everyone."
  },
  clues: [
   {id:"c1",ico:"🚰",nm:"We Need It",title:"Water Is Important",body:"We need water to drink, to wash, and to grow our food."},
   {id:"c2",ico:"🪥",nm:"Faucet Off",title:"Turn It Off",body:"Turn off the faucet while you brush your teeth. Do not let water run and run."},
   {id:"c3",ico:"🚿",nm:"Short Showers",title:"Short Showers",body:"Taking a short shower uses less water than a long one."},
   {id:"c4",ico:"🗑️",nm:"Keep It Clean",title:"No Trash",body:"Keep trash out of ponds and rivers so the water stays clean."},
   {id:"c5",ico:"♻️",nm:"Don't Waste","title":"Do Not Waste",body:"Saving water means not wasting it. Every drop counts."},
   {id:"c6",ico:"🐨",nm:"Koala Fact",title:"A Koala Fact",body:"Koalas sleep most of the day. That is true and cute — but it is not about saving water."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#e88b1a",title:"Brush and Save",q:"Put these in order to save water while brushing. Tap the pads in order.",
    pads:[{k:"brush",e:"🪥 Brush your teeth",c:"#2f8f7f"},{k:"wet",e:"💧 Wet your brush",c:"#e88b1a"},{k:"off",e:"🚫 Turn the faucet OFF",c:"#2f6fe0"}],
    answer:["wet","off","brush"],reason:"Wet the brush, turn the faucet off, then brush. Turning off the water saves a lot of it."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"Save While Brushing",q:"How can you save water when you brush your teeth?",
    options:["Let the faucet run the whole time.","Turn the faucet off while you brush.","Use two faucets."],
    answerIndex:1,reason:"Turning the faucet off while you brush saves water that would run down the drain."},
   {id:"L3",type:"multi",color:"#2f6fe0",title:"Ways to Help",q:"Tap ONLY the ways to save or protect water. Leave out the fun fact.",
    items:[{t:"Turn off the faucet when not using it.",strong:true},{t:"Take short showers.",strong:true},{t:"Keep trash out of rivers.",strong:true},{t:"Koalas sleep most of the day.",strong:false}],
    reason:"Turning off water, short showers, and no trash all help. The koala fact is true but does not save water."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"When we do not waste water, we ____ it. Type the word.",
    answer:["save","conserve","ahorrar","ahorra"],reason:"To save water is to use only what we need. Saving keeps water for everyone."}
  ]
 },

 "living-nonliving": {
  id: "sci1-living-nonliving", teks: "1.12(A)", concept: "Living or Nonliving",
  ui: {
   h1: "Living or Not?", sub: "What is alive, and what is not? Read the clues and open all four locks.",
   briefH: "Sort the alive things", briefP: "Living things grow, need food and water, and have babies. Nonliving things do not. Tap the clues and open the locks!",
   winStamp: "SORTED ✓", winH: "You know life!", winP: "You watched a puppy grow, found the living thing, and named it. Living things grow and need food, water, and air."
  },
  clues: [
   {id:"c1",ico:"🌱",nm:"Living",title:"Living Things",body:"Living things grow, need food, water, and air, and can have babies. A dog and a tree are living."},
   {id:"c2",ico:"🪨",nm:"Nonliving",title:"Nonliving Things",body:"Nonliving things do not grow, eat, or have babies. A rock and a toy are nonliving."},
   {id:"c3",ico:"🍎",nm:"Needs",title:"Basic Needs",body:"Living things need food, water, air, and space to live and grow."},
   {id:"c4",ico:"🐣",nm:"Babies",title:"They Have Young",body:"Living things can make young, or babies, that grow up like them."},
   {id:"c5",ico:"📈",nm:"Grow",title:"They Grow",body:"Living things start small and grow bigger over time."},
   {id:"c6",ico:"🚌",nm:"Bus Fact",title:"A Bus Fact",body:"School buses are painted yellow so they are easy to see. That is true — but a bus is not alive."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#e88b1a",title:"Puppy Grows",q:"Living things grow. Put the puppy in order. Tap the pads in order.",
    pads:[{k:"dog",e:"🐕 A big dog",c:"#2f6fe0"},{k:"puppy",e:"🐶 A tiny puppy",c:"#e88b1a"},{k:"eat",e:"🍖 It eats and grows",c:"#2f8f7f"}],
    answer:["puppy","eat","dog"],reason:"A tiny puppy eats, grows, and becomes a big dog. Growing is something only living things do."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"Which Is Alive?",q:"Which one is a LIVING thing?",
    options:["A rock.","A tree.","A toy car."],
    answerIndex:1,reason:"A tree is living — it grows and needs water and air. A rock and a toy are nonliving."},
   {id:"L3",type:"multi",color:"#2f6fe0",title:"Find the Living Things",q:"Tap ONLY the living things. Leave out the fun fact.",
    items:[{t:"A dog.",strong:true},{t:"A flower.",strong:true},{t:"A fish.",strong:true},{t:"School buses are yellow.",strong:false}],
    reason:"A dog, a flower, and a fish are all alive — they grow and need food and water. The bus fact is true but a bus is not alive."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"A thing that grows, eats, and has babies is a ____ thing. Type the word.",
    answer:["living","alive","vivo","viviente"],reason:"Living things grow and need food, water, and air. Sorting living from nonliving is real science."}
  ]
 },

 "food-chains": {
  id: "sci1-food-chains", teks: "1.12(C)", concept: "Food Chains",
  ui: {
   h1: "Who Eats What?", sub: "Follow the food! Read the clues and open all four locks.",
   briefH: "Follow the food", briefP: "Living things need food. A food chain shows who eats what, starting with the Sun and plants. Tap the clues and open the locks!",
   winStamp: "CHAIN LINKED ✓", winH: "Food chain pro!", winP: "You built a food chain, found what plants need, and named it. Every living thing needs food, and food chains show how they are all connected."
  },
  clues: [
   {id:"c1",ico:"☀️",nm:"Sun",title:"The Sun",body:"The Sun gives light. Plants use sunlight to grow and make their own food."},
   {id:"c2",ico:"🌿",nm:"Plants",title:"Plants",body:"Plants make food using sunlight and water. Many animals eat plants."},
   {id:"c3",ico:"🐛",nm:"Plant Eaters",title:"Plant Eaters",body:"Some animals eat plants, like a caterpillar eating a leaf."},
   {id:"c4",ico:"🐦",nm:"Animal Eaters",title:"Animal Eaters",body:"Some animals eat other animals, like a bird eating a caterpillar."},
   {id:"c5",ico:"🔗",nm:"Food Chain",title:"A Food Chain",body:"A food chain shows who eats what: Sun to plant to plant-eater to animal-eater."},
   {id:"c6",ico:"🌋",nm:"Rock Fact",title:"A Volcano Fact",body:"A volcano can shoot out hot lava. That is true and wild — but it is not part of a food chain."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#e88b1a",title:"Build the Chain",q:"Put the food chain in order, starting with the Sun. Tap the pads in order.",
    pads:[{k:"bird",e:"🐦 Bird eats the bug",c:"#2f6fe0"},{k:"sun",e:"☀️ Sun shines",c:"#e88b1a"},{k:"grass",e:"🌿 Grass grows",c:"#2f8f7f"},{k:"bug",e:"🐛 Bug eats the grass",c:"#7c5cbf"}],
    answer:["sun","grass","bug","bird"],reason:"The Sun helps grass grow, a bug eats the grass, and a bird eats the bug. That is a food chain."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"Plant Food",q:"What do plants need to grow and make their food?",
    options:["Sunlight and water.","A push.","A rock."],
    answerIndex:0,reason:"Plants use sunlight and water to make food. That food feeds the rest of the chain."},
   {id:"L3",type:"multi",color:"#2f6fe0",title:"Who Eats Who?",q:"Tap ONLY the ones where something eats another thing. Leave out the fun fact.",
    items:[{t:"A bird eats a bug.",strong:true},{t:"A cow eats grass.",strong:true},{t:"A big fish eats a small fish.",strong:true},{t:"A volcano shoots out lava.",strong:false}],
    reason:"A bird, a cow, and a fish all eat something in a food chain. The volcano fact is true but is not eating."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"Every living thing needs ____ to live and grow. Type the word.",
    answer:["food","comida","alimento"],reason:"All living things need food. A food chain shows how food moves from one living thing to the next."}
  ]
 },

 "animals": {
  id: "sci1-animals", teks: "1.13", concept: "Animal Bodies & Babies",
  ui: {
   h1: "Animal Bodies & Babies", sub: "How do animal bodies help them? Read the clues and open all four locks.",
   briefH: "Meet the animals", briefP: "Animals have body parts that help them live and move. Baby animals look like their parents. Tap the clues and open the locks!",
   winStamp: "ANIMALS DONE ✓", winH: "Animal expert!", winP: "You grew a chick into a hen, found what helps a fish swim, and named who a baby looks like. Animal bodies help them live, and babies look like their parents."
  },
  clues: [
   {id:"c1",ico:"🪽",nm:"Wings",title:"Wings",body:"Wings help a bird fly through the air."},
   {id:"c2",ico:"🐟",nm:"Fins",title:"Fins",body:"Fins help a fish swim through the water."},
   {id:"c3",ico:"🦵",nm:"Legs",title:"Legs",body:"Strong legs help animals run, jump, and walk."},
   {id:"c4",ico:"👪",nm:"Look-Alikes",title:"Babies Look Alike",body:"Baby animals look a lot like their parents. A puppy looks like its dog parent."},
   {id:"c5",ico:"🐣",nm:"Grow Up",title:"Life Cycle",body:"Animals grow. A chicken starts as an egg, becomes a chick, then grows into a hen."},
   {id:"c6",ico:"⚡",nm:"Sky Fact",title:"A Lightning Fact",body:"Lightning is very hot. That is true and powerful — but it is not an animal body part."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#e88b1a",title:"Chicken Life",q:"Put the chicken's life in order. Tap the pads in order.",
    pads:[{k:"hen",e:"🐔 A grown hen",c:"#2f6fe0"},{k:"egg",e:"🥚 An egg",c:"#e88b1a"},{k:"chick",e:"🐥 A baby chick",c:"#2f8f7f"}],
    answer:["egg","chick","hen"],reason:"An egg hatches into a chick, and the chick grows into a hen. That is the animal's life cycle."},
   {id:"L2",type:"mc",color:"#2f8f7f",title:"Swim Help",q:"What body part helps a fish move in the water?",
    options:["Wings.","Fins.","Legs."],
    answerIndex:1,reason:"Fins help a fish swim. Wings help birds fly and legs help animals run."},
   {id:"L3",type:"multi",color:"#2f6fe0",title:"Body Parts That Help",q:"Tap ONLY the body parts that help an animal move. Leave out the fun fact.",
    items:[{t:"Wings help a bird fly.",strong:true},{t:"Fins help a fish swim.",strong:true},{t:"Legs help a rabbit hop.",strong:true},{t:"Lightning is very hot.",strong:false}],
    reason:"Wings, fins, and legs all help animals move. The lightning fact is true but is not a body part."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"A baby animal looks a lot like its ____. Type the word.",
    answer:["parent","parents","mom","dad","padre","madre"],reason:"Baby animals look like their parents. Noticing how young resemble parents is a science idea."}
  ]
 }

};
