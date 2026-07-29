# CODEX MASTER BUILD PLAN
# PlotPoint: A Literature Learning Arcade for Grades 6-12

Build a privacy-first, multilingual, accessible, static literature learning hub for grades 6-12.

Working project name:

# PlotPoint
## Read. Reason. Play.

Public-facing subtitle:

> A Literature Learning Arcade for Grades 6-12

The hub will contain standalone learning experiences for selected classic and acclaimed books. Each title must include a varied mix of literary investigation, critical thinking, vocabulary, arcade play, multiple-choice questions, short written responses, printable materials, and optional teacher-directed Gen AI support.

The project must combine:

- ACE Framework: Articulate, Connect, Extend
- SOLO Taxonomy
- Critical thinking
- Optional, accountable Gen AI use
- Relic Rooms-style artifact investigations
- Critical Thinking Online Breakouts
- One literary arcade game per text
- Vocabulary and literary-analysis activities
- Multiple-choice and short-response assessments
- Print-ready student materials
- Separate teacher materials and answer keys
- Texas ELAR TEKS
- Current Texas ELPS
- Common Core ELA
- CAST UDL Guidelines 3.0
- Seven-language support modeled on the existing PST collection
- WCAG 2.1 AA accessibility
- No accounts, analytics, advertising, or student data collection

Reference sites:

- Source collection:
  https://franklinstrong.substack.com/p/more-than-100-classic-and-acclaimed

- PST language-switcher and activity structure:
  https://mglearn.github.io/tcea/pst/

- Relic Rooms:
  https://mglearn.github.io/tcea/relic-rooms/

- Critical Thinking Online Breakouts:
  https://mglearn.github.io/tcea/activities/

- Texas ELAR TEKS:
  https://tea.texas.gov/laws-and-rules/texas-administrative-code/19-tac-chapter-110

- Texas ELPS:
  https://tea.texas.gov/curriculum-and-instruction/english-language-proficiency-standards

- Common Core ELA:
  https://www.corestandards.org/ELA-Literacy/

- CAST UDL Guidelines:
  https://udlguidelines.cast.org/

---

# 1. Working Rules for Codex

Complete the project in phases.

Do not attempt to generate every title before the shared system works.

For each phase:

1. Inspect the existing repository before changing files
2. Reuse working patterns from PST, Relic Rooms, and CTOBs where available
3. Keep shared logic in reusable modules
4. Keep title-specific content in data files
5. Run all required validation
6. Fix failures before moving forward
7. Update `BUILD_STATUS.md`
8. Record unresolved questions as `Needs review`
9. Continue to the next phase only after the current phase passes its gate

Do not invent:

- Quotations
- Plot details
- Standards codes
- Historical facts
- Copyright status
- Edition information
- Answer-key evidence
- Translation accuracy
- Source citations

When reliable information is unavailable, write:

> Needs review

Do not expose secrets, tokens, API keys, private answer keys, or student information.

The public site must function as static files. Development scripts may use Node.js or Python, but the deployed student site must not require a server, database, account, login, or build service.

---

# 2. Product Identity

Use the working identity:

## PlotPoint

Tagline:

> Read. Reason. Play.

Long description:

> PlotPoint is a literature learning arcade for grades 6-12. Students investigate artifacts, crack evidence-based breakouts, play literary arcade games, analyze texts, and explain their thinking through the ACE Framework.

Design goals:

- Positive
- Curious
- Literary
- Mature enough for high school
- Approachable for middle school
- Not childish
- Not politically framed
- Not presented as a banned-books campaign
- Focused on reading, reasoning, evidence, interpretation, and transfer

Alternative names may be recorded in project notes but do not change the working title without approval:

- StorySignal
- PageTurn
- LitLaunch
- StoryWorks
- TextTrail
- The Reading Room Arcade

---

# 3. Core Learning Model

Every title must be a standalone learning room.

Teachers must be able to assign:

- One activity
- A short pathway
- A full title sequence

Every title room should include these sections:

1. Enter the Story
2. Build Your Vocabulary
3. Explore the Relic Room
4. Crack the Case
5. Play the Arcade Game
6. Analyze the Text
7. Extend the Idea
8. Print Student Materials
9. Teacher Guide
10. Standards and Supports

---

# 4. ACE Framework

Use the ACE Framework consistently.

## A: Articulate

Student goal:

> Explain the idea in your own words.

Typical SOLO levels:

- Uni-structural
- Multi-structural

Students may:

- Identify
- Define
- Describe
- Sequence
- Summarize
- Name one relevant idea
- List several relevant ideas
- Explain a term using an example

Student prompt:

> Explain one important idea from the text in your own words. Include one detail that helped you understand it.

## C: Connect

Student goal:

> Show how ideas fit together and explain why the connection matters.

Typical SOLO level:

- Relational

Students may:

- Connect character and conflict
- Connect setting and mood
- Connect symbol and theme
- Explain cause and effect
- Compare perspectives
- Explain how evidence supports an interpretation
- Link literary choices to reader impact

Student prompt:

> Connect two details from the text. Explain how the connection changes your understanding of a character, conflict, or theme.

## E: Extend

Student goal:

> Apply the learning in a new situation.

Typical SOLO level:

- Extended abstract

Students may:

- Transfer a theme to another situation
- Test an interpretation
- Create an alternative perspective
- Advise a character
- Compare the text to another work
- Design a new artifact
- Propose a different solution
- Identify where a comparison stops working

Student prompt:

> Apply one idea from the text to a new situation. Explain what transfers, what changes, and where the comparison stops working.

---

# 5. SOLO Taxonomy and Gen AI Guidance

Use the following progression throughout the hub.

| SOLO level | Student understanding | ACE stage | Gen AI role |
|---|---|---|---|
| Pre-structural | Little or no understanding yet | Before ACE | Do not send the student to Gen AI. Use teacher modeling, visuals, read-alouds, examples, and guided discussion |
| Uni-structural | One relevant idea or fact | Articulate begins | Gen AI may clarify vocabulary or provide one example after the student attempts the work |
| Multi-structural | Several ideas not yet connected | Articulate develops | Gen AI may quiz, organize notes, sort information, or summarize student-provided material |
| Relational | Ideas are connected and explained | Connect | Gen AI may ask why and how questions, compare interpretations, challenge reasoning, or provide feedback |
| Extended abstract | Ideas transfer into a new situation | Extend | Gen AI may brainstorm, critique, simulate alternatives, or help test a proposed solution |

Display this rule prominently:

> Think first. Use Gen AI after effort, not before it. Never let Gen AI replace your reasoning.

---

# 6. Gen AI Must Be Optional

The entire site must work without a Gen AI service.

Do not require:

- ChatGPT
- Gemini
- Claude
- BoodleBox
- An API key
- An account
- A district-approved AI platform

Do not connect directly to a Gen AI API in the initial release.

Instead, create an optional `Gen AI Thinking Partner` panel containing:

- A teacher-controlled enable or disable setting
- Copyable prompts
- A warning not to paste names or private information
- A student thinking receipt
- A reminder to use only district-approved tools
- A non-AI alternative for every task

Store the teacher preference only in local browser storage.

Do not transmit the setting.

---

# 7. Gen AI Student Receipt

Whenever students use Gen AI, require this structure:

## Before Gen AI

1. My first explanation
2. My initial evidence
3. My unanswered question

## Gen AI Interaction

4. What I asked
5. What the tool suggested

## After Gen AI

6. What I accepted
7. What I changed
8. What I rejected
9. Why I made those choices
10. My evidence from the text
11. My final ACE response

Provide this as:

- An online form that remains local
- A printable page
- A copyable text template

Never collect or submit the responses to a server.

---

# 8. Gen AI Prompt Patterns

Provide these prompts as optional copyable supports.

## Articulate Prompt

> I am learning about [concept] in [title]. Do not answer for me. Ask me one question at a time that helps me explain the concept in my own words. After I answer, point out one part that is clear and one part that needs more explanation.

## Vocabulary Prompt

> I am trying to understand the word [word] as it is used in [context]. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it.

## Connect Prompt

> I think [idea one] connects to [idea two] because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text.

## Evidence Prompt

> Here is my claim: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph.

## Extend Prompt

> I want to apply the theme [theme] to [new situation]. Give me two competing ways the comparison might work and one reason each comparison might fail. I will decide which ideas are supported.

## Critique Prompt

> Review my interpretation for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting the response.

---

# 9. Required Activities for Every Title

Every title room must contain the following.

## 9.1 Enter the Story

Include:

- Title
- Author
- Suggested grade range
- Genre
- Historical or literary context
- Reading stage:
  - Before reading
  - During reading
  - After reading
- Estimated time
- Spoiler level:
  - No spoilers
  - Partial spoilers
  - Full-text spoilers
- Text-access requirement
- Copyright note
- Content-review note
- Vocabulary preview
- Optional audio directions
- Learning goals
- ACE phase indicators

Do not include a long plot summary.

## 9.2 Vocabulary Activity

Include eight to twelve terms.

Provide:

- Matching mode
- Context-clue mode
- Definition mode
- Example and nonexample mode
- Optional Word Forge arcade mode
- Printable vocabulary cards
- Printable matching sheet
- Answer key

Definitions must be appropriate for the suggested grade band.

Do not use definitions copied from commercial study guides.

## 9.3 Relic Room Investigation

Create five to seven artifacts.

Artifacts may include original or properly sourced:

- Letters
- Tickets
- Maps
- Advertisements
- Logs
- Reports
- Receipts
- Diagrams
- Household objects
- Clothing items
- Newspaper fragments
- Public-domain images
- Original illustrations
- Recreated historical documents
- Invented artifacts clearly labeled as instructional reconstructions

For each artifact, ask students to:

1. Identify it
2. Explain its likely purpose
3. Connect it to the text
4. Explain its literary significance
5. State what it reveals
6. State what it may conceal
7. Complete an ACE response

Do not reproduce copyrighted illustrations or long copyrighted passages.

## 9.4 Critical Thinking Online Breakout

Create four to six clues.

Use at least four lock types:

- Digit
- Word
- Multiple choice
- Sequence
- Evidence sort
- Timeline
- Character-to-motive match
- Claim-evidence-reasoning sort

Requirements:

- Every answer must be directly inferable from supplied evidence
- No guessing
- No obscure trivia
- No answer that depends on remembering an unprovided page number
- Include progressive hints
- Hints guide without revealing answers
- Provide restart and reset controls
- Provide a printable evidence sheet
- Keep the teacher answer key separate

## 9.5 One Title-Specific Arcade Game

Every text must have one unique arcade game.

The mechanic must teach a literary skill.

Do not merely reskin the same game with different character names.

Required features:

- Clear instructions
- Practice round
- Keyboard controls
- Touch controls
- Mouse controls
- Reduced-motion mode
- Pause
- Reset
- Accessible status feedback
- No required timer
- No random-click reward
- No inaccessible lives system
- Scoring based on reasoning
- Explanatory feedback
- Replay option
- Print or discussion follow-up

## 9.6 Literary Analysis

Include:

- Five multiple-choice questions
- Three short-response questions
- One evidence-based paragraph prompt
- One ACE reflection
- One optional discussion protocol
- One optional Gen AI critique protocol

Questions should assess:

- Textual evidence
- Theme
- Character
- Conflict
- Setting
- Point of view
- Structure
- Word choice
- Symbolism
- Author’s craft
- Rhetoric, where appropriate
- Connections among ideas

Create both:

- Digital interactive version
- Printable version

## 9.7 Extend Task

Create a transfer activity that requires students to use an idea in a genuinely new situation.

Possible formats:

- Character advice memo
- Alternative perspective
- New artifact
- Historical comparison
- Contemporary comparison
- Theme transfer
- Adaptation proposal
- Ethical recommendation
- Design challenge
- Structured argument
- Cross-text comparison

Require:

- Evidence from the text
- An explanation of what transfers
- An explanation of what changes
- An explanation of where the comparison breaks down
- Optional Gen AI critique
- Final student-owned response

---

# 10. Arcade Game Pattern Library

Use these patterns to create variety.

## Evidence Runner

Students move through a setting and collect evidence supporting a claim.

Distractors represent:

- Irrelevant evidence
- Unsupported assumptions
- Contradictory evidence
- Mere plot details that do not support the claim

## Timeline Repair

Students restore:

- Chronological order
- Narrative order
- Cause-and-effect order
- Document sequence

## Perspective Shift

Students examine the same event through multiple narrators.

They identify:

- What changes
- What remains consistent
- What each narrator knows
- What each narrator cannot know
- Possible bias

## Symbol Circuit

Students connect:

- Object
- Scene
- Character
- Conflict
- Theme

Incorrect links weaken the circuit.

## Quote Defender

Students protect a claim by selecting the strongest evidence.

Include:

- Strong evidence
- Weak evidence
- Related but insufficient evidence
- Contradictory evidence

## Motive Maze

Students navigate by choosing actions that fit:

- Character goals
- Pressures
- Beliefs
- Previous decisions
- Conflicts

## Context Decoder

Students connect historical or cultural context to textual details.

Do not turn the activity into a trivia quiz.

## Word Forge

Students build vocabulary through:

- Roots
- Context clues
- Definitions
- Examples
- Nonexamples
- Synonyms
- Antonyms

---

# 11. Initial Title Collection

Treat each title as a standalone room.

Suggested grade ranges are starting points only.

Every title must include a note that districts should review:

- Edition
- Maturity level
- Local policy
- Instructional purpose
- Student needs
- Community expectations

## 11.1 Bullfinch’s Mythology or Selected Myths

Suggested grades:

- Grades 6-9

Relic Room:

> The Museum of Lost Myths

Students investigate artifacts connected to:

- Gods
- Quests
- Archetypes
- Transformations
- Symbols

CTOB:

> Who Stole the Fire?

Arcade:

> Hero’s Path

Game skill:

- Identify archetypes
- Match obstacles to transformations
- Recognize quest patterns
- Transfer myth patterns to modern stories

Print activities:

- Archetype matching
- Allusion hunt
- Character-role chart
- Modern myth response
- ACE transfer organizer

Primary Common Core targets:

- RL.6.1 through RL.9-10.1
- RL.6.2 through RL.9-10.2
- RL.6.9 through RL.9-10.9
- W.6.9 through W.9-10.9
- SL.6.1 through SL.9-10.1

## 11.2 The Giver

Suggested grades:

- Grades 7-9

Relic Room:

> The Memory Vault

CTOB:

> The Missing Memory

Arcade:

> Memory Runner

Game skill:

Students distinguish among:

- Freedom
- Safety
- Conformity
- Memory
- Choice
- Responsibility

Print activities:

- Community rule-impact chart
- Theme evidence sort
- Character decision matrix
- Ethical argument
- ACE reflection

Primary Common Core targets:

- RL.7.1 through RL.9-10.1
- RL.7.2 through RL.9-10.2
- RL.7.3 through RL.9-10.3
- W.7.1 through W.9-10.1
- SL.7.1 through SL.9-10.1

## 11.3 Murder on the Orient Express

Suggested grades:

- Grades 7-10

Relic Room:

> The Evidence Carriage

Artifacts may include:

- Tickets
- Clocks
- Luggage
- Notes
- Passenger records
- Timelines

CTOB:

> The Locked Compartment

Arcade:

> Timeline Switchboard

Game skill:

- Sequence statements
- Identify contradictions
- Test reliability
- Separate clue from assumption
- Build an evidence-supported verdict

Print activities:

- Suspect matrix
- Reliability scale
- Evidence chart
- Timeline
- Defended verdict

Primary Common Core targets:

- RL.7.1 through RL.9-10.1
- RL.7.3 through RL.9-10.3
- RL.7.6 through RL.9-10.6
- W.7.1 through W.9-10.1
- SL.7.4 through SL.9-10.4

## 11.4 The House on Mango Street

Suggested grades:

- Grades 8-10

Relic Room:

> Esperanza’s Neighborhood

CTOB:

> The Missing Vignette

Arcade:

> Mango Street Mapper

Game skill:

- Connect place and identity
- Recognize symbols
- Analyze changing perceptions
- Match voice to experience

Print activities:

- Voice analysis
- Figurative-language matching
- Place and identity chart
- Original place-based vignette
- ACE reflection

Primary Common Core targets:

- RL.8.1 through RL.9-10.1
- RL.8.4 through RL.9-10.4
- RL.8.5 through RL.9-10.5
- RL.8.6 through RL.9-10.6
- W.8.3 through W.9-10.3

## 11.5 The Martian Chronicles

Suggested grades:

- Grades 8-10

Relic Room:

> The Abandoned Colony

CTOB:

> The Last Transmission

Arcade:

> Mars Signal

Game skill:

Students distinguish among:

- Fact
- Rumor
- Fear
- Cultural assumption
- Reliable evidence
- Conflicting accounts

Print activities:

- Theme comparison
- Story chronology
- Perspective chart
- Exploration ethics response
- ACE transfer

Primary Common Core targets:

- RL.8.1 through RL.9-10.1
- RL.8.2 through RL.9-10.2
- RL.8.5 through RL.9-10.5
- W.8.1 through W.9-10.1
- SL.8.1 through SL.9-10.1

## 11.6 Maus I

Suggested grades:

- Grades 8-10

Relic Room:

> The Archive Box

Artifacts may include:

- Maps
- Photographs
- Records
- Timelines
- Symbolic objects
- Original document reconstructions

CTOB:

> The Broken Testimony

Arcade:

> Panel Detective

Game skill:

- Analyze sequence
- Connect visual choices to meaning
- Examine caption-image relationships
- Identify symbolism
- Distinguish memory from documentation

Print activities:

- Visual-text analysis
- Symbol chart
- Panel sequence
- Evidence response
- ACE reflection

Primary Common Core targets:

- RL.8.1 through RL.9-10.1
- RL.8.7 through RL.9-10.7
- RH.6-8.1
- RH.6-8.7
- W.8.9 through W.9-10.9

Content and copyright review are required.

## 11.7 The Metamorphosis

Suggested grades:

- Grades 9-12

Relic Room:

> Gregor’s Room

CTOB:

> The Locked Door

Arcade:

> Routine Breakdown

Game skill:

Students navigate:

- Obligation
- Family pressure
- Isolation
- Identity
- Changing relationships
- Symbolic meaning

Print activities:

- Symbol analysis
- Family response matrix
- Character change chart
- Theme argument
- ACE transfer

Primary Common Core targets:

- RL.9-10.1
- RL.11-12.1
- RL.9-10.2
- RL.11-12.2
- RL.9-10.5
- RL.11-12.5
- RL.9-10.6
- RL.11-12.6
- W.9-10.2
- W.11-12.2

## 11.8 Dracula

Suggested grades:

- Grades 9-12

Relic Room:

> The Demeter Archive

Artifacts may include:

- Ship logs
- Maps
- Letters
- Newspaper reports
- Medical notes
- Correspondence

CTOB:

> The Missing Ship Log

Arcade:

> Night Route

Game skill:

- Reconstruct movement
- Sequence documents
- Evaluate narrators
- Connect setting and suspense
- Analyze epistolary structure

Print activities:

- Narrator reliability
- Document sequence
- Setting and mood chart
- Adaptation comparison
- ACE response

Primary Common Core targets:

- RL.9-10.1
- RL.11-12.1
- RL.9-10.5
- RL.11-12.5
- RL.9-10.6
- RL.11-12.6
- RL.9-10.7
- RL.11-12.7

Verify the exact public-domain edition before using text.

## 11.9 In the Time of the Butterflies

Suggested grades:

- Grades 9-12

Relic Room:

> The Hidden Resistance Cache

CTOB:

> Code of the Butterflies

Arcade:

> Clandestine Courier

Game skill:

- Analyze risk
- Compare perspectives
- Identify motivation
- Connect historical context
- Evaluate resistance decisions

Print activities:

- Voice comparison
- Historical context chart
- Resistance analysis
- Character decision matrix
- ACE transfer

Primary Common Core targets:

- RL.9-10.3
- RL.11-12.3
- RL.9-10.6
- RL.11-12.6
- W.9-10.2
- W.11-12.2
- W.9-10.9
- W.11-12.9

## 11.10 Kindred

Suggested grades:

- Grades 10-12

Relic Room:

> The Family Archive

CTOB:

> The Broken Ledger

Arcade:

> Timeline Repair

Game skill:

- Reconstruct chronology
- Analyze cause and effect
- Compare historical and fictional evidence
- Examine perspective across time

Print activities:

- Fiction and history comparison
- Timeline
- Perspective chart
- Evidence essay
- ACE transfer

Primary Common Core targets:

- RL.9-10.1
- RL.11-12.1
- RL.9-10.3
- RL.11-12.3
- RL.9-10.6
- RL.11-12.6
- RH.9-10.1
- RH.11-12.1
- W.9-10.7 through W.11-12.9

## 11.11 Brave New World

Suggested grades:

- Grades 10-12

Relic Room:

> The World State Systems Lab

CTOB:

> The Forbidden Book

Arcade:

> Slogan Scramble

Game skill:

- Identify propaganda
- Analyze euphemism
- Recognize manipulation
- Compare social control systems
- Separate slogan from supported claim

Print activities:

- Propaganda audit
- Theme network
- Systems analysis
- Structured argument
- ACE transfer

Primary Common Core targets:

- RL.9-10.2
- RL.11-12.2
- RL.9-10.4
- RL.11-12.4
- RL.9-10.6
- RL.11-12.6
- W.9-10.1
- W.11-12.1
- SL.9-10.1
- SL.11-12.1

## 11.12 Just Mercy

Suggested grades:

- Grades 10-12

Relic Room:

> The Appeals Case File

CTOB:

> The Missing Evidence

Arcade:

> Claim or Proof

Game skill:

Students sort:

- Claims
- Evidence
- Assumptions
- Allegations
- Conclusions
- Counterclaims

Print activities:

- Rhetorical analysis
- Argument map
- Evidence audit
- Written appeal
- ACE reflection

Primary Common Core targets:

- RI.9-10.1
- RI.11-12.1
- RI.9-10.2
- RI.11-12.2
- RI.9-10.6
- RI.11-12.6
- RI.9-10.8
- RI.11-12.8
- W.9-10.1
- W.11-12.1

## 11.13 The Canterbury Tales

Suggested grades:

- Grades 11-12

Relic Room:

> The Pilgrims’ Luggage

CTOB:

> The Missing Tale

Arcade:

> Pilgrim Road

Game skill:

- Match traveler and object
- Analyze motivation
- Identify satire
- Interpret social roles
- Connect frame story and tale

Print activities:

- Satire matching
- Frame-story analysis
- Pilgrim profile
- Modern pilgrim creation
- ACE response

Primary Common Core targets:

- RL.11-12.1
- RL.11-12.4
- RL.11-12.5
- RL.11-12.6
- W.11-12.3
- W.11-12.9

---

# 12. Recommended Student Pathways

Every title should offer three assignment routes.

## Quick Play

Estimated time:

- Fifteen to twenty-five minutes

Includes:

- Vocabulary preview
- Arcade game
- Five-question check
- One Articulate response

## Investigation

Estimated time:

- Thirty to forty-five minutes

Includes:

- Relic Room
- Evidence organizer
- Connect response
- Optional discussion

## Complete Case

Estimated time:

- Sixty to ninety minutes or multiple class periods

Includes:

- Vocabulary
- Relic Room
- CTOB
- Arcade game
- Literary analysis
- Extend task
- ACE reflection

---

# 13. Hub Filters

The home page must allow filtering by:

- Grade band
- Title
- Author
- Genre
- Activity type
- Reading stage
- Estimated time
- ACE phase
- SOLO level
- Gen AI use
- Standards
- Spoiler level
- Full-text requirement
- Printable availability
- Public-domain or copyrighted status
- Individual, partner, or group mode

Every book card should display concise tags such as:

- Grades 7-9
- Mystery
- During or after reading
- Thirty to forty-five minutes
- CTOB
- Arcade
- Printable
- Gen AI optional
- Partial spoilers

---

# 14. Language Switcher

Inspect the existing PST language switcher.

Match its:

- Language names
- Locale codes
- Order
- Interface pattern
- Storage behavior
- Mobile behavior

Initial expected language set:

- English: `en`
- Spanish: `es`
- Vietnamese: `vi`
- Arabic: `ar`
- Simplified Chinese: `zh`
- Hindi: `hi`
- Urdu: `ur`

Verify the exact existing implementation before coding.

Requirements:

- Persistent globe or language button
- Language selection available on every page
- Store choice in `localStorage`
- Set the HTML `lang` attribute
- Set `dir="rtl"` for Arabic and Urdu
- Support RTL layout
- Translate:
  - Navigation
  - Instructions
  - Hints
  - Buttons
  - Feedback
  - Game directions
  - Assessment directions
  - Printable materials
- Keep recognized book titles and author names in appropriate published form
- Do not call an external translation service
- Do not transmit student writing
- Do not automatically translate copyrighted passages
- Provide bilingual display where practical
- Flag translations for human review
- Include a translation completeness test

Suggested structure:

```text
languages/
  en.json
  es.json
  vi.json
  ar.json
  zh.json
  hi.json
  ur.json
