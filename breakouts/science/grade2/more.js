/* Grade 2 "More" — short single-concept Critical Thinking Online Breakouts, one per
   key TEKS concept (§112.4), written for early readers. The player (play.html) merges
   MORE_BASE_UI with each entry's ui overrides and hands the result to the shared engine.
   6 short clues (1 decoy) + 4 locks (seq/mc/multi/word); each reason names the move. */
window.MORE_BASE_UI = {
  en: {
    "sect.clues": "🔍 The Clues",
    "sect.cluesHint": "Tap each clue to read it. You can open them again anytime.",
    "sect.locks": "🔒 The Locks",
    "sect.locksHint": "Use the clues to open each lock.",
    "crumb.teacher": "‹ More Grade 2 breakouts",
    "crumb.suite": "Grade 2 Science",
    "ui.reset": "↺ Start over", "ui.check": "Check", "ui.gotit": "Got it", "ui.playagain": "Play Again",
    "ui.solved": "🔓 Open!", "ui.pcount": "{n} of {total} locks open",
    "ui.wordph": "Type here", "ui.clear": "clear",
    "fb.digit": "Not yet. Look at the clues again.",
    "fb.word": "Look at the clues for the right word.",
    "fb.mc": "Not that one. Check the clues again.",
    "fb.multiExtra": "One pick is not right. Pick only the ones that fit.",
    "fb.multiMissing": "You missed one. Find them all.",
    "fb.seq": "Not that order. Try again.",
    "footer.privacy": "Privacy & compliance", "footer.text": "Grade 2 Science · Critical Thinking Online Breakouts · Runs in your browser — no logins, no data collected.",
    "footer.disclaimer": "Aligned to the 2021 Texas Essential Knowledge and Skills for Science (§112.4, Grade 2). Good-faith paraphrase; confirm before adoption.",
    "header.eyebrow": "Grade 2 Science · Quick Breakout",
    "brief.label": "🎈 Let's Go"
  }
};

window.MORE = {

 "solid-liquid": {
  id: "sci2-solid-liquid", teks: "2.6(A)", concept: "Solids & Liquids",
  ui: {
   h1: "Solid or Liquid?", sub: "Does it keep its shape, or does it flow? Read the clues and open all four locks.",
   briefH: "Sort them out", briefP: "A solid keeps its shape. A liquid flows and takes the shape of its cup. Tap the clues and open the locks to sort them!",
   winStamp: "SORTED ✓", winH: "Great sorting!", winP: "You watched a solid melt into a liquid, found the liquid, and named it. Solids keep their shape and liquids flow."
  },
  clues: [
   {id:"c1",ico:"🧊",nm:"Solid",title:"Solids",body:"A solid keeps its own shape. A block, a rock, and an ice cube are solids."},
   {id:"c2",ico:"💧",nm:"Liquid",title:"Liquids",body:"A liquid flows and takes the shape of its cup or bottle. Water and juice are liquids."},
   {id:"c3",ico:"✋",nm:"Feel",title:"Texture",body:"We can sort solids by how they feel — rough or smooth, hard or soft."},
   {id:"c4",ico:"🤸",nm:"Bendy",title:"Flexible",body:"Some solids bend easily (they are flexible), like a rubber band. Some are stiff, like a spoon."},
   {id:"c5",ico:"🌡️",nm:"Warm or Cold",title:"Temperature",body:"We can also sort things by warm or cold. An ice cube is cold; warm soup is hot."},
   {id:"c6",ico:"🦋",nm:"Bug Fact",title:"A Butterfly Fact",body:"A butterfly tastes with its feet. That is true and fun — but it is not about solids or liquids."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#2b5fa5",title:"Ice Pop Melts",q:"An ice pop gets warm. Put it in order. Tap the pads in order.",
    pads:[{k:"drip",e:"💧 It drips as a liquid",c:"#2f8f7f"},{k:"solid",e:"🧊 A hard, frozen ice pop",c:"#2b5fa5"},{k:"warm",e:"☀️ It gets warm",c:"#e0902a"}],
    answer:["solid","warm","drip"],reason:"A hard, frozen ice pop is a solid. When it gets warm it melts and drips as a liquid. Solids can turn into liquids."},
   {id:"L2",type:"mc",color:"#7c5cbf",title:"Which Is a Liquid?",q:"Which one is a liquid?",
    options:["A wooden block.","Juice in a cup.","A rock."],
    answerIndex:1,reason:"Juice flows and takes the shape of its cup, so it is a liquid. A block and a rock keep their shape, so they are solids."},
   {id:"L3",type:"multi",color:"#2f8f7f",title:"Ways to Describe a Solid",q:"Tap ONLY the ways we can describe a solid. Leave out the fun fact.",
    items:[{t:"How it feels (rough or smooth).",strong:true},{t:"If it bends or is stiff.",strong:true},{t:"If it is warm or cold.",strong:true},{t:"A butterfly tastes with its feet.",strong:false}],
    reason:"Texture, flexibility, and temperature all describe a solid. The butterfly fact is true but does not describe the object."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"Water and juice flow and take the shape of the cup. They are ____. Type the word.",
    answer:["liquid","liquids","líquido","liquido"],reason:"A liquid flows and takes its cup's shape. Naming it helps us sort matter."}
  ]
 },

 "change-it": {
  id: "sci2-change-it", teks: "2.6(B)", concept: "Changing Matter",
  ui: {
   h1: "Change It!", sub: "Cut, fold, melt, freeze — how do we change things? Read the clues and open all four locks.",
   briefH: "Make a change", briefP: "We can change how something looks by cutting, folding, melting, or freezing it. Tap the clues and open the locks!",
   winStamp: "CHANGED ✓", winH: "Nice work!", winP: "You made a paper snowflake, found how to make ice, and named the change. We can change matter in many ways."
  },
  clues: [
   {id:"c1",ico:"✂️",nm:"Cut",title:"Cutting",body:"Cutting changes the shape of paper or string into smaller pieces."},
   {id:"c2",ico:"📄",nm:"Fold",title:"Folding",body:"Folding paper changes its shape. Fold and cut it to make a snowflake!"},
   {id:"c3",ico:"🪵",nm:"Sand",title:"Sanding",body:"Sanding rough wood makes it smooth. It changes the texture."},
   {id:"c4",ico:"🔥",nm:"Melt",title:"Melting",body:"Heat can melt a solid into a liquid, like butter melting in a warm pan."},
   {id:"c5",ico:"❄️",nm:"Freeze",title:"Freezing",body:"Cold can freeze a liquid into a solid. Water freezes into ice."},
   {id:"c6",ico:"🐧",nm:"Bird Fact",title:"A Penguin Fact",body:"Penguins cannot fly but they swim fast. That is true and fun — but it is not a way to change matter."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#2b5fa5",title:"Make a Snowflake",q:"Make a paper snowflake. Put it in order. Tap the pads in order.",
    pads:[{k:"flake",e:"❄️ Unfold a snowflake",c:"#2f8f7f"},{k:"flat",e:"📄 A flat sheet of paper",c:"#2b5fa5"},{k:"fold",e:"🔺 Fold and cut it",c:"#7c5cbf"}],
    answer:["flat","fold","flake"],reason:"Start with a flat sheet, fold and cut it, then unfold a snowflake. Folding and cutting change the paper's shape."},
   {id:"L2",type:"mc",color:"#7c5cbf",title:"Make Ice",q:"How do you change water into ice?",
    options:["Freeze it (make it very cold).","Cut it.","Fold it."],
    answerIndex:0,reason:"Freezing makes water very cold so it turns into solid ice."},
   {id:"L3",type:"multi",color:"#2f8f7f",title:"Ways to Change Matter",q:"Tap ONLY the ways we can change matter. Leave out the fun fact.",
    items:[{t:"Cut it.",strong:true},{t:"Fold it.",strong:true},{t:"Melt it.",strong:true},{t:"Penguins swim fast.",strong:false}],
    reason:"Cutting, folding, and melting all change matter. The penguin fact is true but does not change matter."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"When water gets very cold, it turns to ice. We say it will ____. Type the word.",
    answer:["freeze","freezes","frozen","congelar","congela"],reason:"Cold makes water freeze into ice. Naming the change tells what we did to the matter."}
  ]
 },

 "push-collide": {
  id: "sci2-push-collide", teks: "2.7", concept: "Pushes & Collisions",
  ui: {
   h1: "Push and Bump", sub: "What happens when things push and bump? Read the clues and open all four locks.",
   briefH: "Give it a push", briefP: "A push can move things and even change their shape. When two things bump, they can change how they move. Tap the clues and open the locks!",
   winStamp: "BUMP ✓", winH: "Force pro!", winP: "You bounced a ball off a wall, squished some clay, and named the force. A push can move things and change their shape."
  },
  clues: [
   {id:"c1",ico:"👋",nm:"Push",title:"A Push",body:"A push is a force. A hard push moves a thing more than a soft push."},
   {id:"c2",ico:"💥",nm:"Bump",title:"Things Bump",body:"When two things touch or bump, they can change how they are moving."},
   {id:"c3",ico:"🏀",nm:"Bounce",title:"Change Direction",body:"A ball that hits a wall bounces back. It changes direction."},
   {id:"c4",ico:"🟤",nm:"Squish",title:"Change Shape","body":"Some things change shape when you push on them, like clay that squishes flat."},
   {id:"c5",ico:"💪",nm:"Strong or Soft",title:"How Hard You Push",body:"A strong push makes something go faster and farther. A soft push moves it a little."},
   {id:"c6",ico:"🦒",nm:"Tall Fact",title:"A Giraffe Fact",body:"A giraffe is the tallest animal. That is true and cool — but it is not about pushes."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#2b5fa5",title:"Ball and Wall",q:"You roll a ball at a wall. Put it in order. Tap the pads in order.",
    pads:[{k:"back",e:"↩️ It bounces back",c:"#2f8f7f"},{k:"roll",e:"🏀 The ball rolls",c:"#2b5fa5"},{k:"hit",e:"🧱 It hits the wall",c:"#7c5cbf"}],
    answer:["roll","hit","back"],reason:"The ball rolls, hits the wall, and bounces back. The bump changes the ball's direction."},
   {id:"L2",type:"mc",color:"#7c5cbf",title:"Squish the Clay",q:"What happens when you press hard on soft clay?",
    options:["It changes shape (it squishes).","It turns into a liquid.","Nothing happens."],
    answerIndex:0,reason:"A push can change an object's shape. Soft clay squishes when you press it."},
   {id:"L3",type:"multi",color:"#2f8f7f",title:"What a Push Can Do",q:"Tap ONLY the things a push can do. Leave out the fun fact.",
    items:[{t:"A hard kick sends a ball far.",strong:true},{t:"Pressing clay changes its shape.",strong:true},{t:"Two carts bump and stop.",strong:true},{t:"A giraffe is the tallest animal.",strong:false}],
    reason:"A push can move a ball, change a shape, and stop a cart. The giraffe fact is true but is not a push."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"When you move something away from you, you give it a ____. Type the word.",
    answer:["push","pushes","empuje","empujón","empujon"],reason:"A push is the force that moves things away. Naming the force helps us explain how things move."}
  ]
 },

 "sun-moon": {
  id: "sci2-sun-moon", teks: "2.9", concept: "Sun & Moon",
  ui: {
   h1: "Sun and Moon", sub: "Why does the Moon shine? Read the clues and open all four locks.",
   briefH: "Look up!", briefP: "The Sun is a star that gives light and heat. The Moon does not make its own light — it borrows it from the Sun. Tap the clues and open the locks!",
   winStamp: "SKY DONE ✓", winH: "Star gazer!", winP: "You saw how the Moon shines, learned the Sun is a star, and named it. The Moon glows because sunlight bounces off it."
  },
  clues: [
   {id:"c1",ico:"☀️",nm:"The Sun",title:"The Sun Is a Star",body:"The Sun is a star. It gives Earth light and heat every day."},
   {id:"c2",ico:"🌙",nm:"The Moon",title:"The Moon's Light",body:"The Moon does not make its own light. It reflects (bounces back) the Sun's light."},
   {id:"c3",ico:"✨",nm:"Stars",title:"Faraway Stars",body:"Stars are suns that are very, very far away, so they look tiny to us."},
   {id:"c4",ico:"🔭",nm:"Telescope",title:"Use a Tool",body:"A telescope is a tool that helps us see sky objects bigger and clearer than with just our eyes."},
   {id:"c5",ico:"🌗",nm:"Bounce",title:"Light Bounces",body:"We see the Moon because sunlight hits it and bounces to our eyes."},
   {id:"c6",ico:"🐙",nm:"Sea Fact",title:"An Octopus Fact",body:"An octopus has eight arms. That is true and neat — but it is not about the Sun or Moon."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#2b5fa5",title:"Why the Moon Shines",q:"Put it in order to show why we see the Moon. Tap the pads in order.",
    pads:[{k:"see",e:"👀 We see the Moon glow",c:"#2f8f7f"},{k:"sun",e:"☀️ The Sun makes light",c:"#2b5fa5"},{k:"hit",e:"🌙 Light hits the Moon",c:"#7c5cbf"}],
    answer:["sun","hit","see"],reason:"The Sun makes light, the light hits the Moon, and it bounces to us so we see the Moon glow. The Moon does not make its own light."},
   {id:"L2",type:"mc",color:"#7c5cbf",title:"What Is the Sun?",q:"The Sun is a ____.",
    options:["A planet.","A star.","A moon."],
    answerIndex:1,reason:"The Sun is a star. It gives Earth light and heat."},
   {id:"L3",type:"multi",color:"#2f8f7f",title:"About the Moon's Light",q:"Tap ONLY the true clues about the Moon's light. Leave out the fun fact.",
    items:[{t:"The Moon does not make its own light.",strong:true},{t:"The Moon reflects the Sun's light.",strong:true},{t:"We see the Moon because sunlight bounces off it.",strong:true},{t:"An octopus has eight arms.",strong:false}],
    reason:"The Moon shines by bouncing the Sun's light. The octopus fact is true but is not about the Moon."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"The Sun gives us light and heat. The Sun is a ____. Type the word.",
    answer:["star","stars","estrella"],reason:"The Sun is a star. Knowing this helps us understand the sky."}
  ]
 },

 "wind-water": {
  id: "sci2-wind-water", teks: "2.10(A)", concept: "Wind & Water Move Earth",
  ui: {
   h1: "Moving Earth", sub: "How do sand and rocks move? Read the clues and open all four locks.",
   briefH: "Watch it move", briefP: "Wind and water are strong! They can slowly move sand and rocks from place to place. Tap the clues and open the locks!",
   winStamp: "MOVED ✓", winH: "Earth mover!", winP: "You built a sand dune with the wind, found what moves the sand, and named it. Wind and water slowly change the land."
  },
  clues: [
   {id:"c1",ico:"💨",nm:"Wind",title:"Wind Moves Sand",body:"Wind can pick up and move sand. On a beach it blows sand into big piles called dunes."},
   {id:"c2",ico:"🌊",nm:"Water",title:"Water Moves Rocks",body:"A river's moving water can carry sand and rocks along and drop them far away."},
   {id:"c3",ico:"🏜️",nm:"Dunes",title:"Sand Dunes",body:"A dune is a hill of sand made by the wind piling sand up over time."},
   {id:"c4",ico:"⏳",nm:"Slowly",title:"It Takes Time",body:"Wind and water change the land slowly, a little at a time."},
   {id:"c5",ico:"🪨",nm:"Rocks Roll",title:"Rolling Rocks",body:"Fast water in a river can tumble and move small rocks downstream."},
   {id:"c6",ico:"🦩",nm:"Pink Fact",title:"A Flamingo Fact",body:"Flamingos are pink from the food they eat. That is true and fun — but it does not move sand or rocks."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#2b5fa5",title:"Build a Dune",q:"How does the wind make a sand dune? Put it in order. Tap the pads in order.",
    pads:[{k:"dune",e:"🏜️ Sand piles into a dune",c:"#2f8f7f"},{k:"wind",e:"💨 The wind blows",c:"#2b5fa5"},{k:"move",e:"🏖️ Sand moves along",c:"#7c5cbf"}],
    answer:["wind","move","dune"],reason:"The wind blows, sand moves along, and it piles into a dune. Wind slowly moves the sand."},
   {id:"L2",type:"mc",color:"#7c5cbf",title:"What Moves the Sand?",q:"What can blow sand on a beach into a big pile?",
    options:["The wind.","A magnet.","The Moon."],
    answerIndex:0,reason:"Wind can pick up and move sand into dunes."},
   {id:"L3",type:"multi",color:"#2f8f7f",title:"What Moves Earth?",q:"Tap ONLY the things that can move soil and rocks. Leave out the fun fact.",
    items:[{t:"Wind blowing sand.",strong:true},{t:"A river carrying rocks.",strong:true},{t:"Rain washing away dirt.",strong:true},{t:"Flamingos are pink from their food.",strong:false}],
    reason:"Wind, rivers, and rain all move soil and rocks. The flamingo fact is true but moves nothing."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"Moving air that can blow sand into dunes is called ____. Type the word.",
    answer:["wind","viento"],reason:"Wind is moving air that can move sand. Naming it helps us explain how land changes."}
  ]
 },

 "weather-severe": {
  id: "sci2-weather-severe", teks: "2.10(B,C)", concept: "Measuring & Wild Weather",
  ui: {
   h1: "Wild Weather", sub: "How do we measure weather, and what is a storm? Read the clues and open all four locks.",
   briefH: "Track the sky", briefP: "We use tools to measure the weather, and sometimes weather gets wild — like storms and floods. Tap the clues and open the locks!",
   winStamp: "TRACKED ✓", winH: "Weather watcher!", winP: "You watched a storm grow, found the tool for temperature, and named a wild weather. Tools help us measure weather, and some weather is severe."
  },
  clues: [
   {id:"c1",ico:"🌡️",nm:"Thermometer",title:"Measure Heat",body:"A thermometer is a tool that tells how hot or cold it is (the temperature)."},
   {id:"c2",ico:"🌧️",nm:"Rain Gauge",title:"Measure Rain",body:"A rain gauge is a tool that measures how much rain falls."},
   {id:"c3",ico:"🌀",nm:"Hurricane",title:"Hurricane",body:"A hurricane is a huge storm with strong wind and lots of rain."},
   {id:"c4",ico:"🌪️",nm:"Tornado",title:"Tornado",body:"A tornado is a fast, spinning wind that can pick things up."},
   {id:"c5",ico:"🌊",nm:"Flood",title:"Flood",body:"A flood is when too much water covers land that is usually dry."},
   {id:"c6",ico:"🐨",nm:"Sleepy Fact",title:"A Koala Fact",body:"Koalas sleep most of the day. That is true and cute — but it is not weather."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#2b5fa5",title:"A Storm Grows",q:"Put a rainstorm in order, from calm to a flood. Tap the pads in order.",
    pads:[{k:"flood",e:"🌊 Too much water floods",c:"#2f8f7f"},{k:"clouds",e:"☁️ Dark clouds gather",c:"#2b5fa5"},{k:"rain",e:"🌧️ Heavy rain falls",c:"#7c5cbf"}],
    answer:["clouds","rain","flood"],reason:"Clouds gather, heavy rain falls, and too much water can flood the land. Weather can change from calm to severe."},
   {id:"L2",type:"mc",color:"#7c5cbf",title:"Measure the Heat",q:"Which tool tells you how hot or cold it is?",
    options:["A rain gauge.","A thermometer.","A telescope."],
    answerIndex:1,reason:"A thermometer measures temperature — how hot or cold it is. A rain gauge measures rain."},
   {id:"L3",type:"multi",color:"#2f8f7f",title:"Wild Weather",q:"Tap ONLY the kinds of severe (wild) weather. Leave out the fun fact.",
    items:[{t:"A hurricane.",strong:true},{t:"A tornado.",strong:true},{t:"A flood.",strong:true},{t:"Koalas sleep most of the day.",strong:false}],
    reason:"Hurricanes, tornadoes, and floods are all severe weather. The koala fact is true but is not weather."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"A fast, spinning wind that can pick things up is a ____. Type the word.",
    answer:["tornado","twister","tornados"],reason:"A tornado is a spinning windstorm. Naming wild weather helps us stay safe."}
  ]
 },

 "recycle": {
  id: "sci2-recycle", teks: "2.11", concept: "Resources & Recycling",
  ui: {
   h1: "Reduce, Reuse, Recycle", sub: "How do we take care of Earth's stuff? Read the clues and open all four locks.",
   briefH: "Help the Earth", briefP: "Some things come from nature and some are made by people. We can reduce, reuse, and recycle to take care of Earth. Tap the clues and open the locks!",
   winStamp: "RECYCLED ✓", winH: "Earth helper!", winP: "You recycled a can, found a natural resource, and named the word. Reducing, reusing, and recycling all help take care of Earth."
  },
  clues: [
   {id:"c1",ico:"🌳",nm:"Natural",title:"Natural Resources",body:"Natural resources come from nature, like water, wood, and rocks."},
   {id:"c2",ico:"🏭",nm:"Manmade",title:"Manmade Things",body:"Manmade things are made by people, like a plastic bottle or a metal can."},
   {id:"c3",ico:"📉",nm:"Reduce",title:"Reduce",body:"Reduce means to use less, like turning off lights you are not using."},
   {id:"c4",ico:"🔁",nm:"Reuse",title:"Reuse",body:"Reuse means to use something again, like refilling a water bottle."},
   {id:"c5",ico:"♻️",nm:"Recycle",title:"Recycle",body:"Recycle means to turn old paper, plastic, or metal into something new."},
   {id:"c6",ico:"🦜",nm:"Bird Fact",title:"A Parrot Fact",body:"Some parrots can copy words. That is true and fun — but it is not about recycling."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#2b5fa5",title:"Recycle a Can",q:"Put it in order to recycle a can. Tap the pads in order.",
    pads:[{k:"new",e:"✨ It becomes a new can",c:"#2f8f7f"},{k:"use",e:"🥤 You use the can",c:"#2b5fa5"},{k:"bin",e:"♻️ Put it in the recycle bin",c:"#7c5cbf"}],
    answer:["use","bin","new"],reason:"Use the can, put it in the recycle bin, and it becomes a new can. Recycling turns old things into new things."},
   {id:"L2",type:"mc",color:"#7c5cbf",title:"From Nature",q:"Which one is a NATURAL resource?",
    options:["A plastic toy.","Water.","A metal can."],
    answerIndex:1,reason:"Water comes from nature, so it is a natural resource. Plastic toys and metal cans are made by people."},
   {id:"L3",type:"multi",color:"#2f8f7f",title:"Help the Earth",q:"Tap ONLY the ways to take care of Earth's stuff. Leave out the fun fact.",
    items:[{t:"Reduce — use less.",strong:true},{t:"Reuse — use it again.",strong:true},{t:"Recycle — make it into something new.",strong:true},{t:"Some parrots can copy words.",strong:false}],
    reason:"Reduce, reuse, and recycle all help the Earth. The parrot fact is true but does not help resources."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"To turn old paper, plastic, or metal into something new is to ____. Type the word.",
    answer:["recycle","recycling","reciclar","recicla"],reason:"To recycle is to make old things new again. It helps save Earth's resources."}
  ]
 },

 "producers-consumers": {
  id: "sci2-producers-consumers", teks: "2.12(B)", concept: "Producers & Consumers",
  ui: {
   h1: "Who Makes Food?", sub: "Which living things make food, and which ones eat it? Read the clues and open all four locks.",
   briefH: "Follow the food", briefP: "Plants make their own food. Animals eat other living things. A food chain shows how they connect. Tap the clues and open the locks!",
   winStamp: "CHAIN LINKED ✓", winH: "Food chain pro!", winP: "You built a food chain, found the food maker, and named it. Producers make food and consumers eat other living things."
  },
  clues: [
   {id:"c1",ico:"🌿",nm:"Producer",title:"Producers",body:"A producer makes its own food. Plants are producers — they use sunlight to make food."},
   {id:"c2",ico:"🐰",nm:"Consumer",title:"Consumers",body:"A consumer cannot make its own food, so it eats other living things. Animals are consumers."},
   {id:"c3",ico:"☀️",nm:"Sunlight",title:"Plants Use the Sun",body:"Plants use sunlight and water to make their food."},
   {id:"c4",ico:"🔗",nm:"Food Chain",title:"A Food Chain",body:"A food chain shows who eats what: plant to plant-eater to animal-eater."},
   {id:"c5",ico:"🦊",nm:"Depend",title:"Animals Need Plants",body:"Consumers depend on producers. Without plants, plant-eaters would have no food."},
   {id:"c6",ico:"🌋",nm:"Hot Fact",title:"A Volcano Fact",body:"A volcano shoots out hot lava. That is true and wild — but it is not part of a food chain."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#2b5fa5",title:"Build the Chain",q:"Put the food chain in order, starting with the plant. Tap the pads in order.",
    pads:[{k:"fox",e:"🦊 Fox eats the rabbit",c:"#2f8f7f"},{k:"plant",e:"🌿 Plant makes food",c:"#2b5fa5"},{k:"rabbit",e:"🐰 Rabbit eats the plant",c:"#7c5cbf"}],
    answer:["plant","rabbit","fox"],reason:"The plant (producer) makes food, a rabbit eats the plant, and a fox eats the rabbit. Consumers depend on producers."},
   {id:"L2",type:"mc",color:"#7c5cbf",title:"The Food Maker",q:"Which one is a producer that makes its own food?",
    options:["A fox.","A plant.","A rabbit."],
    answerIndex:1,reason:"A plant is a producer — it makes its own food from sunlight. Foxes and rabbits are consumers."},
   {id:"L3",type:"multi",color:"#2f8f7f",title:"Find the Consumers",q:"Tap ONLY the consumers (living things that eat other living things). Leave out the fun fact.",
    items:[{t:"A rabbit.",strong:true},{t:"A fox.",strong:true},{t:"A bird.",strong:true},{t:"A volcano shoots out lava.",strong:false}],
    reason:"A rabbit, a fox, and a bird all eat other living things, so they are consumers. The volcano fact is true but does not eat."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"A living thing that makes its own food, like a plant, is a ____. Type the word.",
    answer:["producer","producers","productor"],reason:"A producer makes its own food. It is the start of every food chain."}
  ]
 },

 "pollination": {
  id: "sci2-pollination", teks: "2.12(C)", concept: "Moving Pollen & Seeds",
  ui: {
   h1: "Moving Seeds & Pollen", sub: "How do plants get help to spread? Read the clues and open all four locks.",
   briefH: "Help the plants", briefP: "Plants cannot walk, so they get help moving pollen and seeds — from bees, wind, and animals. Tap the clues and open the locks!",
   winStamp: "SPREAD ✓", winH: "Plant helper!", winP: "You helped a bee move pollen, found what moves seeds, and named it. Bees, wind, and animals all help plants spread and grow."
  },
  clues: [
   {id:"c1",ico:"🐝",nm:"Bees",title:"Bees Carry Pollen",body:"A bee lands on a flower, gets pollen on its body, and carries it to the next flower."},
   {id:"c2",ico:"💨",nm:"Wind",title:"Wind Moves Seeds",body:"The wind can blow light seeds, like a dandelion's fluffy seeds, to a new spot."},
   {id:"c3",ico:"🐾",nm:"Animals",title:"Animals Carry Seeds",body:"Sticky seeds, like burrs, can stick to an animal's fur and ride to a new place."},
   {id:"c4",ico:"🌸",nm:"Pollen",title:"What Pollen Does",body:"Moving pollen from flower to flower helps plants make new seeds."},
   {id:"c5",ico:"🌱",nm:"New Plants",title:"New Plants Grow",body:"When seeds land in a new spot, new plants can grow there."},
   {id:"c6",ico:"⚡",nm:"Sky Fact",title:"A Lightning Fact",body:"Lightning is very hot. That is true and powerful — but it does not move pollen or seeds."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#2b5fa5",title:"A Busy Bee",q:"How does a bee help a flower? Put it in order. Tap the pads in order.",
    pads:[{k:"next",e:"🌼 Carries pollen to the next flower",c:"#2f8f7f"},{k:"land",e:"🐝 Bee lands on a flower",c:"#2b5fa5"},{k:"stick",e:"🌸 Pollen sticks to the bee",c:"#7c5cbf"}],
    answer:["land","stick","next"],reason:"The bee lands, pollen sticks to it, and it carries the pollen to the next flower. That helps the plant make seeds."},
   {id:"L2",type:"mc",color:"#7c5cbf",title:"Move the Seeds",q:"What helps move a dandelion's fluffy seeds to a new spot?",
    options:["The wind.","A magnet.","The Moon."],
    answerIndex:0,reason:"The wind can blow light dandelion seeds to a new place where new plants can grow."},
   {id:"L3",type:"multi",color:"#2f8f7f",title:"Helping Plants Spread",q:"Tap ONLY the things that help move pollen or seeds. Leave out the fun fact.",
    items:[{t:"A bee carrying pollen.",strong:true},{t:"Wind blowing seeds.",strong:true},{t:"A burr sticking to an animal's fur.",strong:true},{t:"Lightning is very hot.",strong:false}],
    reason:"Bees, wind, and animals all move pollen and seeds. The lightning fact is true but moves nothing."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"The yellow dust that bees carry from flower to flower is ____. Type the word.",
    answer:["pollen","polen"],reason:"Pollen moves from flower to flower to help plants make seeds. Naming it explains how plants spread."}
  ]
 },

 "metamorphosis": {
  id: "sci2-metamorphosis", teks: "2.13(D)", concept: "Growing Up Different",
  ui: {
   h1: "Baby Look-Alikes?", sub: "Do all babies look like their parents? Read the clues and open all four locks.",
   briefH: "Watch them change", briefP: "Most baby animals look like their parents — but some change a LOT as they grow, like a caterpillar into a butterfly! Tap the clues and open the locks.",
   winStamp: "GREW UP ✓", winH: "Life cycle pro!", winP: "You grew a butterfly, found what a caterpillar becomes, and named it. Some animals change so much that the baby does not look like the parent!"
  },
  clues: [
   {id:"c1",ico:"🐱",nm:"Look Alike",title:"Most Babies Match",body:"Most baby animals look like their parents. A kitten looks like a cat."},
   {id:"c2",ico:"🐛",nm:"Caterpillar",title:"A Big Change",body:"A caterpillar does NOT look like a butterfly, but it grows and changes into one!"},
   {id:"c3",ico:"🦋",nm:"Butterfly",title:"Butterfly Life",body:"A butterfly starts as an egg, becomes a caterpillar, makes a chrysalis, then turns into a butterfly."},
   {id:"c4",ico:"🐸",nm:"Frog",title:"Frog Life",body:"A frog starts as an egg, hatches into a tadpole with a tail, then grows legs and becomes a frog."},
   {id:"c5",ico:"🔄",nm:"Metamorphosis",title:"Changing a Lot",body:"When an animal changes shape a lot as it grows, we call it metamorphosis."},
   {id:"c6",ico:"🐘",nm:"Big Fact",title:"An Elephant Fact",body:"Elephants can hear with their feet. That is true and amazing — but it is not about growing up."}
  ],
  locks: [
   {id:"L1",type:"seq",color:"#2b5fa5",title:"Grow a Butterfly",q:"Put the butterfly's life in order. Tap the pads in order.",
    pads:[{k:"fly",e:"🦋 Butterfly",c:"#2f8f7f"},{k:"egg",e:"🥚 Egg",c:"#2b5fa5"},{k:"cat",e:"🐛 Caterpillar",c:"#e0902a"},{k:"chrys",e:"🛡️ Chrysalis",c:"#7c5cbf"}],
    answer:["egg","cat","chrys","fly"],reason:"Egg, then caterpillar, then chrysalis, then butterfly. The animal changes a lot — that is metamorphosis."},
   {id:"L2",type:"mc",color:"#7c5cbf",title:"What Does It Become?",q:"What does a caterpillar turn into?",
    options:["A frog.","A butterfly.","A bird."],
    answerIndex:1,reason:"A caterpillar grows and changes into a butterfly. The baby looks nothing like the grown-up!"},
   {id:"L3",type:"multi",color:"#2f8f7f",title:"Babies That Look Different",q:"Tap ONLY the true clues about animals whose babies look different. Leave out the fun fact.",
    items:[{t:"A caterpillar grows into a butterfly.",strong:true},{t:"A tadpole grows into a frog.",strong:true},{t:"These babies look very different from their parents.",strong:true},{t:"Elephants can hear with their feet.",strong:false}],
    reason:"Caterpillars and tadpoles change a lot as they grow up. The elephant fact is true but is not about growing up."},
   {id:"L4",type:"word",color:"#e0533a",title:"Name It",q:"A caterpillar grows up to become a ____. Type the word.",
    answer:["butterfly","butterflies","mariposa"],reason:"A caterpillar becomes a butterfly. Some animals change so much the baby and parent look different."}
  ]
 }

};
