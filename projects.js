/* projects.js — single source of truth for the TCEA Vibe-Coded Solutions Directory.
   Both index.html (browser) and build-feed.js (Node) read this file.
   Add / edit a project here; the page and the RSS feed both update automatically.
   Categories map to SECTIONS[].id. Set featured:true to also surface a card in the
   Featured shelf. Keep descriptions concise (the RSS feed caps them at 100 words). */
(function (root) {
  const SECTIONS = [
  {
    "id": "featured",
    "num": "01",
    "title": "Featured Vibe-Coded Solutions",
    "note": "These projects connect most directly to the vibe-coded solutions workflow and related classroom implementation examples."
  },
  {
    "id": "ai",
    "num": "02",
    "title": "AI Prompt Libraries and Adoption",
    "note": ""
  },
  {
    "id": "instruction",
    "num": "03",
    "title": "Instructional Strategy Guides",
    "note": ""
  },
  {
    "id": "dashboards",
    "num": "04",
    "title": "Dashboards and Decision Tools",
    "note": ""
  },
  {
    "id": "tools",
    "num": "05",
    "title": "Classroom Tools and Utilities",
    "note": "A compact set of classroom tools, generators, and student views. The main tools menu is listed first."
  },
  {
    "id": "courses",
    "num": "06",
    "title": "Courses and Educator Resources",
    "note": ""
  },
  {
    "id": "activities",
    "num": "07",
    "title": "Games, Activities, and Specialty Builds",
    "note": ""
  },
  {
    "id": "breakouts",
    "num": "08",
    "title": "Critical Thinking Breakouts",
    "note": "The CLEAR Crew critical-thinking system: a detective-style thinking game plus a full library of breakout activities across grade bands and subjects, translated into seven languages."
  },
  {
    "id": "assessment",
    "num": "09",
    "title": "Assessment and Reflection Tools",
    "note": "Formative assessment, item analysis, and reflection tools for classrooms and facilitators."
  },
  {
    "id": "webdecks",
    "num": "10",
    "title": "Presentations and WebDecks",
    "note": "Slide-style web decks and briefings for sessions and professional learning."
  },
  {
    "id": "assets",
    "num": "11",
    "title": "Data, Downloads, and Companion Files",
    "note": ""
  }
];

  const DOWNLOADS = [
  {
    "href": "dashboard/data.md",
    "name": "Registration Dashboard Data"
  },
  {
    "href": "Dashboard_SchoolKPIs/data.md",
    "name": "District KPI Dashboard Data"
  },
  {
    "href": "dashboardkpi/data.md",
    "name": "Technology Dashboard Data"
  },
  {
    "href": "kpi-dashboard/K12_KPI_Dashboard_README.md",
    "name": "K-12 KPI Dashboard Generator Notes"
  },
  {
    "href": "tools/INSTRUCTIONS.md",
    "name": "Tools Build Instructions"
  },
  {
    "href": "protect_rubric_v2/README.md",
    "name": "PROTECT Rubric v2.0 Notes"
  },
  {
    "href": "vibeprojects/README.md",
    "name": "Vibe Projects Notes"
  },
  {
    "href": "wds/README.md",
    "name": "When Disaster Strikes Notes"
  },
  {
    "href": "sharespace/sharespace-demo.zip",
    "name": "ShareSpace Demo Solution"
  },
  {
    "href": "vcl/libvibes-all-tools.zip",
    "name": "LibVibes — all 19 built tools"
  },
  {
    "href": "oreos/Oreo_Personality_Test.zip",
    "name": "Oreo Personality Test Download"
  }
];

  const PROJECTS = [
  {
    "category": "featured",
    "featured": true,
    "external": true,
    "href": "https://blog.tcea.org/vibe-coded-solutions/",
    "tag": "TechNotes",
    "title": "Vibe-Coded Solutions",
    "desc": "The TCEA blog post connected to this collection and the practical examples it supports."
  },
  {
    "category": "featured",
    "featured": true,
    "external": false,
    "href": "vibeprojects/index.html",
    "tag": "Classroom Projects",
    "title": "Vibe-Coding in the Classroom",
    "desc": "A grade-band project gallery for classroom-ready vibe-coding ideas and student-facing activities."
  },
  {
    "category": "featured",
    "featured": true,
    "external": false,
    "href": "sharespace/index.html",
    "tag": "Demo Build",
    "title": "Vibe Coding a Free ShareSpace",
    "desc": "A slide-style walkthrough for building a free Padlet-style sharing space with a downloadable demo solution."
  },
  {
    "category": "featured",
    "featured": true,
    "external": false,
    "href": "vcl/index.html",
    "tag": "Companion Site",
    "title": "Vibe-Coding for Librarians",
    "desc": "A companion website with librarian-focused tools, use cases, prompts, and downloadable vibe-coding resources."
  },
  {
    "category": "featured",
    "featured": true,
    "external": false,
    "href": "vpo/index.html",
    "tag": "Prompt Builder",
    "title": "Codex Project Organizer",
    "desc": "A beginner-friendly brief builder that turns a project idea into a structured Markdown prompt for AI-assisted coding, with a modular version for defining inputs, outputs, and tests."
  },
  {
    "category": "featured",
    "featured": true,
    "external": false,
    "href": "tools/index.html",
    "tag": "Tool Menu",
    "title": "TCEA Tools Menu",
    "desc": "The launch menu for classroom utilities including spinners, dice, word search, drawing, puzzles, and fortune tools."
  },
  {
    "category": "ai",
    "featured": false,
    "external": false,
    "href": "custom-instructions-library/index.html",
    "tag": "AI Library",
    "title": "TCEA AI Custom Instructions Library",
    "desc": "Reusable AI personas and custom instructions for productivity, planning, writing, and educator workflows."
  },
  {
    "category": "ai",
    "featured": false,
    "external": false,
    "href": "ai-essentials-prompt-library/index.html",
    "tag": "Prompt Library",
    "title": "AI Essentials Prompt Library of 100",
    "desc": "A searchable set of educator prompts for AI Essentials training and classroom support."
  },
  {
    "category": "ai",
    "featured": false,
    "external": false,
    "href": "k12-image-prompt-library/index.html",
    "tag": "Image Prompts",
    "title": "K-12 Image Prompt Library",
    "desc": "Classroom, library, and office-ready image prompts organized by task and instructional use."
  },
  {
    "category": "ai",
    "featured": false,
    "external": false,
    "href": "ai-adoption-checklist/index.html",
    "tag": "Checklist",
    "title": "Generative AI Adoption Checklist",
    "desc": "A step-by-step institutional checklist for thoughtful generative AI adoption."
  },
  {
    "category": "ai",
    "featured": false,
    "external": false,
    "href": "checklist/index.html",
    "tag": "Checklist Copy",
    "title": "Generative AI Adoption Checklist Folder Version",
    "desc": "A packaged folder version of the adoption checklist for distribution or embedding."
  },
  {
    "category": "ai",
    "featured": false,
    "external": false,
    "href": "ai-adoption-roadmap/index.html",
    "tag": "Roadmap",
    "title": "AI Adoption Roadmap",
    "desc": "An interactive roadmap for district and campus AI adoption stages, policies, and implementation moves."
  },
  {
    "category": "ai",
    "featured": false,
    "external": false,
    "href": "ai-adoption-roadmap/long.html",
    "tag": "Roadmap",
    "title": "AI Adoption Roadmap - Extended",
    "desc": "The longer version of the AI adoption roadmap with expanded guidance and phase detail."
  },
  {
    "category": "ai",
    "featured": false,
    "external": false,
    "href": "alf/index.html",
    "tag": "AI Framework",
    "title": "Augmented K-16 AI Learning Framework",
    "desc": "A role-based AI learning framework with scenario tools for leaders, designers, builders, facilitators, and instructional support teams."
  },
  {
    "category": "ai",
    "featured": false,
    "external": false,
    "href": "eles/index.html",
    "tag": "Alignment",
    "title": "TCEA ELEs Alignment Assistant",
    "desc": "An assistant for connecting work to TCEA Essential Learning Experiences and related instructional goals."
  },
  {
    "category": "ai",
    "featured": false,
    "external": false,
    "href": "aidesign/index.html",
    "tag": "AI Design",
    "title": "AI Design Companion",
    "desc": "A TCEA blue-and-gold strategy reference with ALDO prompts, visible learning resources, and AI-supported lesson design tools."
  },
  {
    "category": "ai",
    "featured": false,
    "external": false,
    "href": "aldo/index.html",
    "tag": "Prompt Studio",
    "title": "ALDO Prompt Studio",
    "desc": "A guided studio for building strong AI prompts with the ALDO framework, worked examples, and references."
  },
  {
    "category": "ai",
    "featured": false,
    "external": false,
    "href": "vcl/libvibes.html",
    "tag": "Prompt Library",
    "title": "LibVibes Prompt Library",
    "desc": "Nineteen library-focused vibe-coding starter prompts, each with a VIBES game plan and its own linkable page, all nineteen built and playable."
  },
  {
    "category": "instruction",
    "featured": false,
    "external": false,
    "href": "coach-tool/index.html",
    "tag": "Coaching",
    "title": "High-Effect Strategy Coach",
    "desc": "An interactive K-12 coaching tool for selecting and applying high-effect instructional strategies."
  },
  {
    "category": "instruction",
    "featured": false,
    "external": false,
    "href": "hesis/index.html",
    "tag": "Learning Phases",
    "title": "Matching the Strategy to the Phase of Learning",
    "desc": "A guide to aligning visible learning strategies with surface, deep, and transfer learning."
  },
  {
    "category": "instruction",
    "featured": false,
    "external": false,
    "href": "surface-deep-transfer/index.html",
    "tag": "Learning Phases",
    "title": "Comprehensive High-Impact Learning Phases",
    "desc": "A visual reference for surface, deep, and transfer learning with strategy recommendations."
  },
  {
    "category": "instruction",
    "featured": false,
    "external": false,
    "href": "topspreso/index.html",
    "tag": "Presentation",
    "title": "Top Instructional Strategies",
    "desc": "A presentation-style guide to instructional strategies worth embracing for stronger learning outcomes."
  },
  {
    "category": "instruction",
    "featured": false,
    "external": false,
    "href": "topstrategies/index.html",
    "tag": "Strategy Guide",
    "title": "Beyond the 20 Percent Policy",
    "desc": "Classroom strategy guidance for responding to restrictive AI policies with better instructional design."
  },
  {
    "category": "instruction",
    "featured": false,
    "external": false,
    "href": "vlet/index.html",
    "tag": "Reference",
    "title": "Visible Learning with Ed Tech",
    "desc": "A practical reference for phases, strategies, frameworks, and effect sizes for educators and leaders."
  },
  {
    "category": "instruction",
    "featured": false,
    "external": false,
    "href": "CTS/index.html",
    "tag": "Tech Integration",
    "title": "Technology Integration Resources",
    "desc": "Two companion guides: Planning and Assessing Technology Integration (PATI) and a tour of EdTech frameworks (SAMR, TPACK, TIM, Triple E, and more)."
  },
  {
    "category": "dashboards",
    "featured": false,
    "external": false,
    "href": "dashboard/index.html",
    "tag": "Registration",
    "title": "TCEA Registration Dashboard",
    "desc": "A course registration and revenue dashboard for tracking professional development activity."
  },
  {
    "category": "dashboards",
    "featured": false,
    "external": false,
    "href": "Dashboard_SchoolKPIs/index.html",
    "tag": "District KPIs",
    "title": "District KPI Dashboard",
    "desc": "A district-level KPI dashboard with an accompanying markdown data file."
  },
  {
    "category": "dashboards",
    "featured": false,
    "external": false,
    "href": "dashboardkpi/index.html",
    "tag": "Technology KPIs",
    "title": "Technology Dashboard",
    "desc": "A technology-focused dashboard with KPI views and companion data."
  },
  {
    "category": "dashboards",
    "featured": false,
    "external": false,
    "href": "kpi-dashboard/index.html",
    "tag": "K-12 KPI Builder",
    "title": "K-12 KPI Dashboard Generator",
    "desc": "A browser-only dashboard builder for district, campus, instructional, and technology KPIs with export options for JSON, CSV, Markdown, HTML, and PDF."
  },
  {
    "category": "dashboards",
    "featured": false,
    "external": false,
    "href": "buyback/index.html",
    "tag": "Assessment",
    "title": "Buyback Technology Vendor Assessment Tool",
    "desc": "A structured tool for evaluating buyback technology vendors against district priorities."
  },
  {
    "category": "dashboards",
    "featured": false,
    "external": false,
    "href": "privacy-audit/index.html",
    "tag": "Family Privacy",
    "title": "Family App Privacy Audit",
    "desc": "A 15-minute interactive guide for reviewing app permissions on a child's device."
  },
  {
    "category": "dashboards",
    "featured": false,
    "external": false,
    "href": "protect_rubric_v2/index.html",
    "tag": "Privacy Assessment",
    "title": "PROTECT Rubric v2.0",
    "desc": "A student data privacy assessor for reviewing vendor policies, terms, addenda, and security documents."
  },
  {
    "category": "dashboards",
    "featured": false,
    "external": false,
    "href": "ddp/index.html",
    "tag": "Field Guide",
    "title": "Data Display Patterns",
    "desc": "A TCEA field guide to choosing the right chart and data-display pattern for dashboards and reports."
  },
  {
    "category": "dashboards",
    "featured": false,
    "external": false,
    "href": "vibe_app_intake_package/index.html",
    "tag": "App Review",
    "title": "School District App Intake Form",
    "desc": "A teacher and staff app intake form for submitting apps for district review, with an optional Google Sheets backend for collecting requests."
  },
  {
    "category": "dashboards",
    "featured": false,
    "external": false,
    "href": "blog/dats/index.html",
    "tag": "RFP Scoring",
    "title": "Assessment System RFP Scoring Tool",
    "desc": "A weighted rubric for comparing district assessment systems, with non-negotiable gate checks and a side-by-side vendor comparison you can export to CSV."
  },
  {
    "category": "tools",
    "featured": true,
    "external": false,
    "href": "tools/index.html",
    "tag": "Menu",
    "title": "TCEA Tools Menu",
    "desc": "The top-level menu for the classroom utility collection."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/wordsearch/index.html",
    "tag": "Generator",
    "title": "Classroom Word Search Maker",
    "desc": "Create classroom word searches from custom terms and themes."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/crossword/index.html",
    "tag": "Generator",
    "title": "Crossword Puzzle Maker",
    "desc": "Build classroom crossword puzzles from custom clues and word lists."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/crossword/student.html",
    "tag": "Student View",
    "title": "Crossword Student View",
    "desc": "The student-facing view for solving generated crossword puzzles."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/letterjam/index.html",
    "tag": "Puzzle",
    "title": "LetterJam Puzzle Maker",
    "desc": "Generate letter-based word puzzles for vocabulary and language practice."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/letterjam/student.html",
    "tag": "Student View",
    "title": "LetterJam Student View",
    "desc": "The student-facing view for playing LetterJam puzzles."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/mappuzzle/index.html",
    "tag": "Geography",
    "title": "Map Puzzle Generator",
    "desc": "Generate map-based puzzles for geography and spatial-reasoning activities."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/memepuzzle/index.html",
    "tag": "Puzzle",
    "title": "Meme Puzzle Maker",
    "desc": "Create and configure meme-based puzzles for classroom use."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/memepuzzle/student.html",
    "tag": "Student View",
    "title": "Meme Puzzle Student",
    "desc": "The student-facing view for completing meme puzzle activities."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/wheelspinner/index.html",
    "tag": "Spinner",
    "title": "Classroom Wheel Spinner",
    "desc": "A customizable spinner for names, prompts, choices, and classroom routines."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/storywheel/index.html",
    "tag": "Writing",
    "title": "Story Wheel Maker",
    "desc": "A wheel-based generator for story ideas and writing prompts."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/shapespinner/index.html",
    "tag": "Spinner",
    "title": "Classroom Shape Spinner",
    "desc": "A shape spinner for math, discussion, selection, and quick classroom activities."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/dice/index.html",
    "tag": "Randomizer",
    "title": "Classroom Dice Roller",
    "desc": "A flexible dice roller for games, questions, grouping, and classroom decisions."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/coinflipping/index.html",
    "tag": "Randomizer",
    "title": "Classroom Coin Flipper",
    "desc": "A coin flipping utility with themes and classroom-friendly controls."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/dotsboxes/index.html",
    "tag": "Game",
    "title": "Dots and Boxes",
    "desc": "The classic Dots and Boxes pencil-and-paper game adapted for the classroom."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/drawsketch/index.html",
    "tag": "Drawing",
    "title": "Draw and Sketch",
    "desc": "A quick sketching surface for drawing, annotation, and visual classroom prompts."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/colorpop/index.html",
    "tag": "Drawing",
    "title": "Color Pop Magic",
    "desc": "A scratch-canvas drawing tool for revealing hidden backgrounds with a custom cover color and pen."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/dicebreakers/index.html",
    "tag": "Icebreakers",
    "title": "Dicebreaker Creator",
    "desc": "Create dice-based icebreaker activities for groups, meetings, and classes."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/dicebreakers/play.html",
    "tag": "Student View",
    "title": "Dicebreaker Roll View",
    "desc": "The play view for rolling and running a Dicebreaker activity."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/fortune/index.html",
    "tag": "Teacher Tool",
    "title": "Classroom Fortune Wheel Teacher",
    "desc": "The teacher-facing setup view for a classroom fortune wheel activity."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "tools/fortune/student.html",
    "tag": "Student View",
    "title": "Classroom Fortune Wheel Student",
    "desc": "The student-facing fortune wheel view for classroom participation."
  },
  {
    "category": "tools",
    "featured": false,
    "external": false,
    "href": "ibingo/index.html",
    "tag": "Generator",
    "title": "iBINGO Game Maker",
    "desc": "Build custom BINGO boards for review, vocabulary, and whole-class games."
  },
  {
    "category": "courses",
    "featured": false,
    "external": false,
    "href": "courses/ai_essentials.html",
    "tag": "Course",
    "title": "AI Essentials for Educators",
    "desc": "A course export/reference page for AI Essentials content, activities, and linked resources."
  },
  {
    "category": "courses",
    "featured": false,
    "external": false,
    "href": "courses/ai_essentials2.html",
    "tag": "Course Reference",
    "title": "AI Essentials for Educators - Course Reference",
    "desc": "A second course reference version with expanded AI Essentials content."
  },
  {
    "category": "courses",
    "featured": false,
    "external": false,
    "href": "dailywrite/index.html",
    "tag": "Writing",
    "title": "Daily Quick Write Generator",
    "desc": "Generate daily quick write prompts for classroom routines and literacy practice."
  },
  {
    "category": "courses",
    "featured": false,
    "external": false,
    "href": "tceaainews/index.html",
    "tag": "Newsletter",
    "title": "AI-Powered Newsletter Architecture",
    "desc": "A Lunch and Learn resource for building AI-assisted newsletter workflows for educators."
  },
  {
    "category": "activities",
    "featured": false,
    "external": false,
    "href": "wds/index.html",
    "tag": "Cybersecurity Game",
    "title": "When Disaster Strikes",
    "desc": "A K-12 cyber incident response tabletop game aligned to NIST CSF 2.0 and CISA guidance."
  },
  {
    "category": "activities",
    "featured": false,
    "external": false,
    "href": "oreos/index.html",
    "tag": "Personality Activity",
    "title": "Oreo Teaching Personality Test",
    "desc": "A light classroom or workshop activity based on how participants eat Oreo cookies."
  },
  {
    "category": "activities",
    "featured": false,
    "external": false,
    "href": "sharespace/index.html",
    "tag": "ShareSpace",
    "title": "Vibe Coding a Free ShareSpace",
    "desc": "A guided demonstration for building and adapting a free ShareSpace workflow."
  },
  {
    "category": "activities",
    "featured": false,
    "external": false,
    "href": "vibeprojects/index.html",
    "tag": "Project Gallery",
    "title": "Vibe-Coding in the Classroom",
    "desc": "Classroom project ideas and activities arranged for educator use."
  },
  {
    "category": "activities",
    "featured": false,
    "external": false,
    "href": "vcl/index.html",
    "tag": "Companion Site",
    "title": "Vibe-Coding for Librarians",
    "desc": "Library-specific vibe-coding companion site with reusable tools, prompts, and program ideas."
  },
  {
    "category": "activities",
    "featured": false,
    "external": false,
    "href": "vcll/index.html",
    "tag": "Session Site",
    "title": "Vibe Coding Projects for Librarians",
    "desc": "The session companion site with library use cases, starter prompts, and downloadable tools for vibe-coding free alternatives to Padlet, Slido, and FigJam."
  },
  {
    "category": "activities",
    "featured": false,
    "external": false,
    "href": "other/index.html",
    "tag": "Apps Showcase",
    "title": "Apps by OneScreen",
    "desc": "A showcase of purpose-built classroom apps for educators tired of AI tools that miss the mark."
  },
  {
    "category": "breakouts",
    "featured": true,
    "external": false,
    "href": "clear/index.html",
    "tag": "Thinking Game",
    "title": "The CLEAR Crew &mdash; Detective Thinking Game",
    "desc": "Crack the case one clue at a time with the CLEAR thinking process &mdash; a critical-thinking checklist for young detectives."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/clear/index.html",
    "tag": "Breakout Library",
    "title": "Critical Thinking Breakouts",
    "desc": "Grade-band breakout activities (3-5, 6-8, 9-12) across ELA, science, and social studies that teach evidence-based reasoning, available in seven languages."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/clear/correlation.html",
    "tag": "Alignment",
    "title": "Breakouts Correlation Guide",
    "desc": "A multilingual correlation guide mapping the Critical Thinking Breakouts to standards and thinking skills."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/clear/answer-key.html",
    "tag": "Facilitator",
    "title": "Breakouts Answer Key",
    "desc": "The facilitator answer key and recording sheet for running the Critical Thinking Breakouts activities."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/july4/index.html",
    "tag": "Holiday Breakouts",
    "title": "Fourth of July Critical Thinking Breakouts",
    "desc": "Twelve self-contained U.S. history escape activities across three grade bands (3-5, 6-8, 9-12). Students open clues, weigh evidence, and crack four locks each &mdash; building history knowledge and critical-thinking habits. No logins, no data collected."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/july4/correlation.html",
    "tag": "Alignment",
    "title": "Fourth of July Breakouts Correlation Guide",
    "desc": "A standards correlation guide mapping the twelve Fourth of July breakouts by grade band to Texas Essential Knowledge and Skills, Common Core literacy standards, and the CLEAR thinking process."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/july5th/index.html",
    "tag": "Holiday Breakouts",
    "title": "July 5 &amp; Black Freedom Holidays Breakouts",
    "desc": "Twelve self-contained critical thinking breakouts across three grade bands (3-5, 6-8, 9-12) exploring the freedom days the calendar often overlooks &mdash; Frederick Douglass&rsquo;s July 5 address, Juneteenth, Pinkster, Watch Night, and more. Students open clues, weigh evidence, and crack four locks each. No logins, no data collected."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/july5th/correlation.html",
    "tag": "Alignment",
    "title": "Black Freedom Holidays Breakouts Correlation Guide",
    "desc": "A standards correlation guide mapping the twelve July 5 &amp; Black Freedom Holidays breakouts by grade band to Texas Essential Knowledge and Skills, Common Core literacy standards, and the CLEAR thinking process."
  },
  {
    "category": "breakouts",
    "featured": true,
    "external": false,
    "href": "breakouts/index.html",
    "tag": "Breakout Library",
    "title": "Critical Thinking Online Breakouts &mdash; Full Library",
    "desc": "A single searchable library of every TCEA Critical Thinking Online Breakout (CTOB) &mdash; 193 self-contained, browser-based reasoning escapes across five suites (CLEAR, Fourth of July, July 5 &amp; Black Freedom Holidays, Bible as Literature, and Science) in seven languages. Search by name, topic, or grade; no logins, no data collected."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/bible/index.html",
    "tag": "Breakout Library",
    "title": "Bible as Literature Breakouts",
    "desc": "Thirty-one critical-thinking breakouts on the Texas-adopted Bible stories, studied academically &mdash; as literature and history, never devotionally. Covers every K&ndash;12 required-list Bible item (creation, Noah, David &amp; Goliath, the Psalms, the Prodigal Son, Job, 1 Corinthians 13, and more) across four grade bands, in seven languages."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/bible/correlation.html",
    "tag": "Alignment",
    "title": "Bible as Literature Breakouts Correlation Guide",
    "desc": "A TEKS correlation guide mapping each Bible as Literature breakout to the ELAR strands, the CLEAR reasoning focus, and the high-effect-size instructional strategy engineered into its locks."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/science/index.html",
    "tag": "Breakout Library",
    "title": "Science Critical Thinking Breakouts (Grades K&ndash;8)",
    "desc": "Critical Thinking Online Breakouts across the Texas science TEKS, Grades K&ndash;8 &mdash; from pushes and pulls to conservation of mass. Each grade has a featured breakout, a concept set, a hands-on STEM engineering design challenge, and a student word bank, in seven languages."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/science/correlation.html",
    "tag": "Alignment",
    "title": "Science Breakouts Correlation Guide",
    "desc": "A standards correlation guide mapping the Science Critical Thinking Breakouts by grade to the Texas science TEKS and the reasoning moves engineered into each lock."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/idioms/index.html",
    "tag": "Breakout Library",
    "title": "Idioms &amp; Sayings for Multilingual Learners",
    "desc": "A multilingual idioms &amp; sayings suite for grades 3–12 — decode English idioms with your home language as a resource (ESL) and compare sayings across languages. 12 breakouts fully translated into seven languages (including French &amp; Latin units for world-language classrooms), a 66-idiom illustrated spotlight, a three-game Idiom Arcade, printable card decks, and teacher UDL/ELPS/lesson-plan supports. Aligned to the Texas ELPS (idiomatic expressions) and WIDA; no logins, no data collected."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/idioms/index.html#arcade",
    "tag": "Games",
    "title": "Idiom Arcade — 3 Idiom Games",
    "desc": "Three fast, free, self-contained arcade games that teach English idioms: Match Blitz (timed idiom–meaning matching), Meaning Meteors (a catch-the-meaning canvas arcade), and Trap Escape (a literal-vs-figurative reflex game). Playable by touch, mouse, or keyboard; runs entirely in the browser with no logins and no data collected."
  },
  {
    "category": "breakouts",
    "featured": false,
    "external": false,
    "href": "breakouts/idioms/correlation.html",
    "tag": "Alignment",
    "title": "Idioms &amp; Sayings Standards Alignment (ELPS / TEKS)",
    "desc": "How the Idioms &amp; Sayings suite aligns to the Texas ELPS (19 TAC §74.4), the ELAR TEKS, and the LOTE TEKS for Bilingual/ESL and multilingual classrooms — with a K–12 public-school appropriateness statement and links to the Texas EL program frameworks."
  },
  {
    "category": "assessment",
    "featured": false,
    "external": false,
    "href": "reflect-tool/index.html",
    "tag": "Reflection",
    "title": "Reflection Time Assessment",
    "desc": "A guided reflection assessment for educators and learners to capture and review thinking."
  },
  {
    "category": "assessment",
    "featured": false,
    "external": false,
    "href": "reflect-tool/facilitator-dashboard.html",
    "tag": "Facilitator",
    "title": "Reflection Dashboard",
    "desc": "The facilitator dashboard view for reviewing reflection responses across a group."
  },
  {
    "category": "assessment",
    "featured": false,
    "external": false,
    "href": "sia/itema.html",
    "tag": "Item Analysis",
    "title": "Entry / Exit Ticket Item Analysis",
    "desc": "A tool for analyzing entry and exit ticket items to surface misconceptions and next steps."
  },
  {
    "category": "assessment",
    "featured": false,
    "external": false,
    "href": "sia/index.html",
    "tag": "Flashcards",
    "title": "Water Cycle Pre-Assessment Flashcards",
    "desc": "A formative pre-assessment flashcard set, an example of student interactive assessment."
  },
  {
    "category": "assessment",
    "featured": false,
    "external": false,
    "href": "sia/rec.html",
    "tag": "Recommendations",
    "title": "ACE Framework Learning Recommendations",
    "desc": "Learning recommendations generated from the ACE framework for next instructional moves."
  },
  {
    "category": "webdecks",
    "featured": false,
    "external": false,
    "href": "webdecks/aidesign/index.html",
    "tag": "WebDeck",
    "title": "AI as Your Instructional Design Partner",
    "desc": "A web-based slide deck on using AI as a partner in instructional design."
  },
  {
    "category": "webdecks",
    "featured": false,
    "external": false,
    "href": "webdecks/nsf26/index.html",
    "tag": "Briefing",
    "title": "NSF TechAccess: AI-Ready America",
    "desc": "A TCEA briefing web deck on the NSF TechAccess AI-Ready America initiative."
  }
];

  const data = { SECTIONS, PROJECTS, DOWNLOADS };
  if (typeof module !== "undefined" && module.exports) module.exports = data;
  else root.TCEA_DATA = data;
})(typeof self !== "undefined" ? self : this);
