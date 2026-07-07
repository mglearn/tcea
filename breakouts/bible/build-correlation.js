#!/usr/bin/env node
/* build-correlation.js — regenerate the TEKS correlation tables for ALL 31 breakouts
   and splice them into correlation.html between <!--CORR:START--> / <!--CORR:END-->.
   Titles are read live from grades/<key>.js so they stay in sync. TEKS citations are
   good-faith, paraphrased alignment references (see the disclaimer in correlation.html).

   Run:  node breakouts/bible/build-correlation.js */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname, GRADES = path.join(ROOT, 'grades');

const ORDER = {
  'K–2': ['k2', 'k2-noah-ark', 'k2-good-samaritan', 'k2-solomon-choice', 'k2-jonah-fish', 'k2-moses-rules', 'k2-you-are-special'],
  '3–5': ['g35', 'g35-noah-flood', 'g35-jonah-second-chance', 'g35-good-samaritan-35', 'g35-moses-ten', 'g35-last-supper', 'g35-humility', 'g35-moses-red-sea'],
  '6–8': ['g68', 'g68-jonah-irony', 'g68-good-samaritan-68', 'g68-psalms-poetry', 'g68-esther-plot', 'g68-solomon-judgment', 'g68-do-not-be-anxious', 'g68-ecclesiastes'],
  '9–12': ['g912', 'g912-noah-archetype', 'g912-psalm-23', 'g912-lamentations', 'g912-good-samaritan-law', 'g912-solomon-wisdom', 'g912-job', 'g912-corinthians-love'],
};

const R = (lock, skill, strand, teks, clear, strategy) => ({ lock, skill, strand, teks, clear, strategy });

const DATA = {
  // ---- featured (transcribed from the original hand-authored tables) ----
  'k2': { sources: 'Book of Genesis (creation) · the Golden Rule — Bluebonnet K/1 units', rows: [
    R('L1 · Sequence', 'Order the events of a story as the text presents them', 'Comprehension — retell/sequence with support', '§110.2(6), §110.4(6)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L2 · Golden Rule', 'Identify what a text plainly states', 'Comprehension — make inferences using text evidence', '§110.2(6)(F)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Evidence sort', 'Separate what the story says from a true-but-irrelevant fact', 'Response — use text evidence to support a response', '§110.2(7)(C)', 'Alternatives', 'Classifying/sorting d≈0.60'),
    R('L4 · Name the book', 'Attribute a text to its source', 'Multiple Genres — recognize characteristics of texts', '§110.2(8)', 'Lens', 'Vocabulary/knowledge d≈0.62') ] },
  'g35': { sources: "David & Goliath · Daniel in the lions' den (2025 required list) · King Solomon (Bluebonnet)", rows: [
    R('L1 · Theme', 'Determine a theme shared across two texts', 'Multiple Genres — determine theme using text evidence', '§110.7(8)(A)', 'Claim', 'Feedback d≈0.70'),
    R('L2 · Evidence', 'Gather only evidence that supports the claim', 'Response — use text evidence to support an appropriate response', '§110.7(7)(C)', 'Evidence', 'Classifying/sorting d≈0.60'),
    R('L3 · Counter-example', 'Test a pattern against a case where it breaks', 'Comprehension — make/correct/confirm inferences', '§110.6(6)(F)', 'Alternatives', 'Metacognitive strategies d≈0.55'),
    R('L4 · Source', 'Situate texts in their larger collection/context', 'Inquiry & Research — identify/gather relevant sources', '§110.7(12)', 'Lens', 'Prior knowledge activation d≈0.55') ] },
  'g68': { sources: 'Parable of the Prodigal Son (Luke) · Sermon on the Mount — Bluebonnet / required list', rows: [
    R('L1 · Genre', 'Name the parable genre from its defining traits', 'Multiple Genres — analyze genre characteristics & structures', '§110.22–24(8)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Claim', 'State a theme grounded in what the text dramatizes', 'Comprehension — synthesize/evaluate details', '§110.22–24(6)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Techniques', 'Identify rhetorical/literary devices in the text', "Author's Purpose & Craft — analyze author's use of craft", '§110.22–24(9)(D)', 'Evidence', 'Classifying/sorting d≈0.60'),
    R('L4 · Connection', 'Transfer a device (anaphora) to another text', 'Response — analyze/make connections across texts', '§110.22–24(7)', 'Response', 'Transfer strategies d≈0.86') ] },
  'g912': { sources: 'Adam & Eve (Genesis) · Queen Esther — required list / Bluebonnet', rows: [
    R('L1 · Archetype', "Name a narrative archetype (the 'fall')", 'Multiple Genres — analyze relationships/thematic links', '§110.36(6) English I', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Allusion', 'Trace an allusion to its source text', "Author's Purpose & Craft — analyze allusion & rhetorical devices", '§110.36(9), §110.36(7)', 'Evidence', 'Elaborative interrogation d≈0.55'),
    R('L3 · Text vs. interpretation', 'Distinguish textual fact from reader interpretation', 'Comprehension — evaluate details; distinguish fact/interpretation', '§110.36(5)(F)(H)', 'Alternatives', 'Critical/evaluative thinking d≈0.55'),
    R('L4 · Constitutional line', 'Explain why a text is studied academically vs. devotionally', 'Response — evaluate relevance/credibility by context & source', '§110.36(4)(H)', 'Response', 'Metacognitive strategies d≈0.55') ] },

  // ---- Grades K–2 (new) ----
  'k2-noah-ark': { sources: 'Noah / the Flood (Genesis)', rows: [
    R('L1 · Sequence', 'Order story events as the text presents them', 'Comprehension — retell/sequence events with support', '§110.4(6)(E)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L2 · Detail', 'Answer from an explicit detail in the text', 'Comprehension — make inferences using text evidence', '§110.4(6)(F)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Evidence sort', 'Separate story facts from a true-but-off-topic fact', 'Response — use text evidence to support a response', '§110.4(7)(C)', 'Alternatives', 'Classifying/sorting d≈0.60'),
    R('L4 · Name the book', 'Attribute a text to its source', 'Multiple Genres — recognize characteristics of texts', '§110.4(8)', 'Lens', 'Vocabulary/knowledge d≈0.62') ] },
  'k2-good-samaritan': { sources: 'The Good Samaritan (Luke)', rows: [
    R('L1 · Detail', 'Identify who acts, from the text', 'Comprehension — make inferences using text evidence', '§110.4(6)(F)', 'Claim', 'Feedback d≈0.70'),
    R('L2 · Sequence', 'Order events to see cause and effect', 'Comprehension — retell/sequence events', '§110.4(6)(E)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L3 · Evidence sort', 'Separate story details from an off-topic fact', 'Response — use text evidence to support a response', '§110.4(7)(C)', 'Alternatives', 'Classifying/sorting d≈0.60'),
    R('L4 · Key word', 'Name the lesson word the text uses', 'Comprehension — identify the central idea', '§110.4(6)(G)', 'Lens', 'Vocabulary/knowledge d≈0.62') ] },
  'k2-solomon-choice': { sources: "Solomon's judgment (1 Kings)", rows: [
    R('L1 · Problem', "Identify the story's problem from the text", 'Comprehension — make inferences using text evidence', '§110.4(6)(F)', 'Claim', 'Feedback d≈0.70'),
    R('L2 · Sequence', 'Order how a character solves a problem', 'Comprehension — retell/sequence events', '§110.4(6)(E)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L3 · Evidence sort', 'Separate story facts from an off-topic fact', 'Response — use text evidence to support a response', '§110.4(7)(C)', 'Alternatives', 'Classifying/sorting d≈0.60'),
    R('L4 · Character trait', 'Name a trait the text states', 'Comprehension — describe characters in a story', '§110.4(7)(B)', 'Lens', 'Vocabulary/knowledge d≈0.62') ] },
  'k2-jonah-fish': { sources: 'Jonah (Book of Jonah)', rows: [
    R('L1 · Sequence', 'Order the events of a longer story', 'Comprehension — retell/sequence events', '§110.4(6)(E)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L2 · Detail', 'Answer from the exact wording of the text', 'Comprehension — make inferences using text evidence', '§110.4(6)(F)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Evidence sort', 'Separate story facts from an off-topic fact', 'Response — use text evidence to support a response', '§110.4(7)(C)', 'Alternatives', 'Classifying/sorting d≈0.60'),
    R('L4 · Name the book', 'Attribute a text to its source', 'Multiple Genres — recognize characteristics of texts', '§110.4(8)', 'Lens', 'Vocabulary/knowledge d≈0.62') ] },
  'k2-moses-rules': { sources: 'Moses & the Ten Commandments (Exodus)', rows: [
    R('L1 · Detail', 'Read carefully for an exact number', 'Comprehension — make inferences using text evidence', '§110.4(6)(F)', 'Claim', 'Feedback d≈0.70'),
    R('L2 · Sequence', 'Order events as the text builds them', 'Comprehension — retell/sequence events', '§110.4(6)(E)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L3 · Evidence sort', 'Separate story facts from an off-topic fact', 'Response — use text evidence to support a response', '§110.4(7)(C)', 'Alternatives', 'Classifying/sorting d≈0.60'),
    R('L4 · Name the book', 'Attribute a text to its source', 'Multiple Genres — recognize characteristics of texts', '§110.4(8)', 'Lens', 'Vocabulary/knowledge d≈0.62') ] },

  // ---- Grades 3–5 (new) ----
  'g35-noah-flood': { sources: 'Noah / the Flood (Genesis)', rows: [
    R('L1 · Sequence', 'Order key events to see structure', 'Comprehension — make/confirm inferences', '§110.6(6)(F)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L2 · Theme', 'Determine the theme the story teaches', 'Multiple Genres — determine theme using text evidence', '§110.6(8)(A)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Evidence', 'Gather only evidence that supports the theme', 'Response — use text evidence to support a response', '§110.6(7)(C)', 'Alternatives', 'Classifying/sorting d≈0.60'),
    R('L4 · Source', 'Name the source book/context', 'Inquiry & Research — identify/gather relevant sources', '§110.6(12)', 'Lens', 'Prior knowledge activation d≈0.55') ] },
  'g35-jonah-second-chance': { sources: 'Jonah (Book of Jonah)', rows: [
    R('L1 · Theme', 'Determine the theme from the whole story', 'Multiple Genres — determine theme using text evidence', '§110.7(8)(A)', 'Claim', 'Feedback d≈0.70'),
    R('L2 · Cause & effect', 'Order events to trace cause and effect', 'Comprehension — make/confirm inferences', '§110.7(6)(F)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L3 · Evidence', 'Gather only theme-supporting evidence', 'Response — use text evidence to support a response', '§110.7(7)(C)', 'Alternatives', 'Classifying/sorting d≈0.60'),
    R('L4 · Source', 'Situate a text in its larger collection', 'Inquiry & Research — identify/gather relevant sources', '§110.7(12)', 'Lens', 'Prior knowledge activation d≈0.55') ] },
  'g35-good-samaritan-35': { sources: 'The Good Samaritan (Gospel of Luke)', rows: [
    R('L1 · Theme', 'Determine the theme (who is a neighbor)', 'Multiple Genres — determine theme using text evidence', '§110.7(8)(A)', 'Claim', 'Feedback d≈0.70'),
    R('L2 · Evidence', 'Gather only evidence that supports the theme', 'Response — use text evidence to support a response', '§110.7(7)(C)', 'Evidence', 'Classifying/sorting d≈0.60'),
    R('L3 · Source', 'Name the Gospel the parable comes from', 'Inquiry & Research — identify/gather relevant sources', '§110.7(12)', 'Lens', 'Prior knowledge activation d≈0.55'),
    R('L4 · Sequence', 'Order how characters are introduced', 'Comprehension — make/confirm inferences', '§110.6(6)(F)', 'Alternatives', 'Advance organizers d≈0.42') ] },
  'g35-moses-ten': { sources: 'Ten Commandments (Exodus)', rows: [
    R('L1 · Text type', 'Identify the kind of text (a law code)', 'Multiple Genres — recognize/analyze genre characteristics', '§110.7(8)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Evidence', 'Gather what the text states about the rules', 'Response — use text evidence to support a response', '§110.7(7)(C)', 'Evidence', 'Classifying/sorting d≈0.60'),
    R('L3 · Source', 'Name the source book', 'Inquiry & Research — identify/gather relevant sources', '§110.7(12)', 'Lens', 'Prior knowledge activation d≈0.55'),
    R('L4 · Sequence', 'Order events to the key moment', 'Comprehension — make/confirm inferences', '§110.6(6)(F)', 'Alternatives', 'Advance organizers d≈0.42') ] },
  'g35-last-supper': { sources: "Gospels + Da Vinci's The Last Supper (5th-grade art history)", rows: [
    R('L1 · Text vs. image', 'Distinguish what a text states from an image', 'Comprehension — evaluate details; make connections', '§110.7(6)(F)', 'Alternatives', 'Critical/evaluative thinking d≈0.55'),
    R('L2 · Evidence', 'Sort what the text says vs. what the painting adds', 'Response — use text evidence to support a response', '§110.7(7)(C)', 'Evidence', 'Classifying/sorting d≈0.60'),
    R('L3 · Sequence', 'Order the events the Gospel narrates', 'Comprehension — make/confirm inferences', '§110.7(6)(F)', 'Lens', 'Advance organizers d≈0.42'),
    R('L4 · Source', 'Name the source collection', 'Inquiry & Research — identify/gather relevant sources', '§110.7(12)', 'Response', 'Prior knowledge activation d≈0.55') ] },

  // ---- Grades 6–8 (new) ----
  'g68-jonah-irony': { sources: 'Jonah (Book of Jonah) — irony', rows: [
    R('L1 · Genre', 'Name the genre from its traits', 'Multiple Genres — analyze genre characteristics & structures', '§110.22–24(8)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Irony', 'Identify the central irony', "Author's Purpose & Craft — analyze the use of literary devices", '§110.22–24(9)(D)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Evidence', 'Distinguish ironic reversals from an off-topic fact', 'Response — use text evidence; analyze across texts', '§110.22–24(7)', 'Evidence', 'Classifying/sorting d≈0.60'),
    R('L4 · Sequence', 'Order reversals to see how they build', 'Comprehension — synthesize/evaluate details', '§110.22–24(6)', 'Alternatives', 'Advance organizers d≈0.42') ] },
  'g68-good-samaritan-68': { sources: 'The Good Samaritan (Luke) — parable craft', rows: [
    R('L1 · Genre', 'Name the parable genre', 'Multiple Genres — analyze genre characteristics', '§110.22–24(8)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Sequence', 'Order events so the reversal lands', 'Comprehension — synthesize/evaluate details', '§110.22–24(6)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L3 · Technique', "Identify a craft technique ('show, don't tell')", "Author's Purpose & Craft — analyze author's craft", '§110.22–24(9)(D)', 'Claim', 'Feedback d≈0.70'),
    R('L4 · Evidence', 'Separate craft evidence from an off-topic fact', 'Response — use text evidence to support analysis', '§110.22–24(7)', 'Alternatives', 'Classifying/sorting d≈0.60') ] },
  'g68-psalms-poetry': { sources: 'Psalms (with the Frost & Williams pairing)', rows: [
    R('L1 · Genre', 'Name the poetic genre', 'Multiple Genres — analyze poetic forms & structures', '§110.22–24(8)(B)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Device', 'Identify parallelism', "Author's Purpose & Craft — analyze literary devices", '§110.22–24(9)(D)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Sequence', 'Order the concepts of an analysis', 'Comprehension — synthesize/evaluate details', '§110.22–24(6)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L4 · Connection', 'Connect a device to modern poems', 'Response — analyze/make connections across texts', '§110.22–24(7)', 'Response', 'Transfer strategies d≈0.86') ] },
  'g68-esther-plot': { sources: 'The Book of Esther — plot & dramatic irony', rows: [
    R('L1 · Device', "Name the technique (dramatic irony)", "Author's Purpose & Craft — analyze literary devices", '§110.22–24(9)(D)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Reversal', 'Identify the reversal of fortune', 'Multiple Genres — analyze plot elements', '§110.22–24(8)(A)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Sequence', 'Order plot to see setup and payoff', 'Comprehension — synthesize/evaluate details', '§110.22–24(6)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L4 · Evidence', 'Separate craft evidence from an off-topic fact', 'Response — use text evidence to support analysis', '§110.22–24(7)', 'Alternatives', 'Classifying/sorting d≈0.60') ] },
  'g68-solomon-judgment': { sources: "Solomon's judgment (1 Kings) — argument & logic", rows: [
    R('L1 · Logic', 'Explain why the test works', 'Comprehension — synthesize/evaluate details', '§110.22–24(6)', 'Claim', 'Feedback d≈0.70'),
    R('L2 · Genre', 'Name the reasoning form (a logic puzzle)', 'Multiple Genres — analyze genre characteristics', '§110.22–24(8)', 'Lens', 'Concept mapping d≈0.64'),
    R('L3 · Sequence', 'Order the steps of an argument', "Author's Purpose & Craft — analyze how an argument is built", '§110.22–24(9)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L4 · Evidence', 'Separate argument evidence from an off-topic detail', 'Response — use text evidence to support analysis', '§110.22–24(7)', 'Alternatives', 'Classifying/sorting d≈0.60') ] },

  // ---- Grades 9–12 (new) ----
  'g912-noah-archetype': { sources: 'Noah / the Flood (Genesis) + the Epic of Gilgamesh', rows: [
    R('L1 · Archetype', 'Name a recurring narrative archetype', 'Multiple Genres — analyze thematic/structural links across texts', '§110.36(6)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Sequence', 'Verify textual facts via sequence', 'Comprehension — evaluate details', '§110.36(5)(F)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L3 · Text vs. interpretation', 'Distinguish textual fact from interpretation', 'Comprehension — distinguish fact from inference/interpretation', '§110.36(5)(F)(H)', 'Alternatives', 'Critical/evaluative thinking d≈0.55'),
    R('L4 · Allusion', 'Trace a cross-cultural parallel/allusion', "Author's Purpose & Craft — analyze allusion", '§110.36(9)', 'Response', 'Elaborative interrogation d≈0.55') ] },
  'g912-psalm-23': { sources: 'Psalm 23', rows: [
    R('L1 · Device', 'Name the central device (extended metaphor)', "Author's Purpose & Craft — analyze figurative language", '§110.36(7)(D)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Genre', 'Name the poetic genre', 'Multiple Genres — analyze poetic forms', '§110.36(6)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Sequence', 'Trace the image sequence/arc', 'Comprehension — evaluate details', '§110.36(5)(F)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L4 · Text vs. interpretation', "Separate the poem's image from interpretation", 'Comprehension — distinguish fact/interpretation', '§110.36(5)(H)', 'Alternatives', 'Critical/evaluative thinking d≈0.55') ] },
  'g912-lamentations': { sources: 'Lamentations 3 — the lament genre', rows: [
    R('L1 · Genre', 'Name the poetic genre (lament)', 'Multiple Genres — analyze genre characteristics', '§110.36(6)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Structure', 'Name a structural device (acrostic)', "Author's Purpose & Craft — analyze text structure", '§110.36(8)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Sequence', "Order the poem's movements (the volta)", 'Comprehension — evaluate details', '§110.36(5)(F)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L4 · Text vs. interpretation', 'Separate what the text shows from interpretation', 'Comprehension — distinguish fact/interpretation', '§110.36(5)(H)', 'Alternatives', 'Critical/evaluative thinking d≈0.55') ] },
  'g912-good-samaritan-law': { sources: "The Good Samaritan → 'Good Samaritan laws'", rows: [
    R('L1 · Genre', 'Identify the literary form (parable)', 'Multiple Genres — analyze genre characteristics', '§110.36(6)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Allusion', 'Name the device carrying a text into culture', "Author's Purpose & Craft — analyze allusion", '§110.36(9)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Text vs. interpretation', 'Separate what a text narrates from later interpretation', 'Comprehension — distinguish fact/interpretation', '§110.36(5)(H)', 'Alternatives', 'Critical/evaluative thinking d≈0.55'),
    R('L4 · Sequence', 'Order how a text influences law over time', 'Response — evaluate relevance/credibility by context & source', '§110.36(4)(H)', 'Response', 'Transfer strategies d≈0.86') ] },
  'g912-solomon-wisdom': { sources: "Solomon's judgment + wisdom literature", rows: [
    R('L1 · Genre', 'Name the genre (wisdom literature)', 'Multiple Genres — analyze genre characteristics', '§110.36(6)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Rhetoric', 'Name the rhetorical strategy (the clever test)', "Author's Purpose & Craft — analyze rhetorical devices", '§110.36(9)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Sequence', 'Order the steps of a rhetorical proof', "Author's Purpose & Craft — analyze how an argument is built", '§110.36(9)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L4 · Text vs. interpretation', "Separate the text's ruling from its 'lesson'", 'Comprehension — distinguish fact/interpretation', '§110.36(5)(H)', 'Alternatives', 'Critical/evaluative thinking d≈0.55') ] },

  // ---- gap-filling breakouts (official required-list coverage) ----
  'k2-you-are-special': { sources: 'You Are Special by Max Lucado (Kindergarten required list) — a modern allegory, Bible-connected but NOT itself scripture; companion to The Berenstain Bears and the Golden Rule, likewise a modern book, not a biblical text', rows: [
    R('L1 · Sequence', 'Order story events as the text presents them', 'Comprehension — retell/sequence events with support', '§110.2(6)(E)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L2 · Inference', "Answer from what a character believes, from the text", 'Comprehension — make inferences using text evidence', '§110.2(6)(F)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Evidence sort', 'Separate story details from a true-but-off-topic fact', 'Response — use text evidence to support a response', '§110.2(7)(C)', 'Alternatives', 'Classifying/sorting d≈0.60'),
    R('L4 · Name the maker', 'Recall a name the text gives', 'Comprehension — describe characters in a story', '§110.2(7)(B)', 'Lens', 'Vocabulary/knowledge d≈0.62') ] },

  'g35-humility': { sources: 'The Necessity of Humility — the parable of the places of honor (Luke 14:7–11), Grade 4 required list', rows: [
    R('L1 · Theme', 'Determine the theme of a parable', 'Multiple Genres — determine theme using text evidence', '§110.6(8)(A)', 'Claim', 'Feedback d≈0.70'),
    R('L2 · Evidence', 'Gather only evidence that supports the theme', 'Response — use text evidence to support a response', '§110.6(7)(C)', 'Evidence', 'Classifying/sorting d≈0.60'),
    R('L3 · Sequence', 'Order the steps of the advice', 'Comprehension — make/confirm inferences', '§110.6(6)(F)', 'Alternatives', 'Advance organizers d≈0.42'),
    R('L4 · Source', 'Name the Gospel the parable comes from', 'Inquiry & Research — identify/gather relevant sources', '§110.6(12)', 'Lens', 'Prior knowledge activation d≈0.55') ] },
  'g35-moses-red-sea': { sources: 'Moses: the burning bush (Exodus 3) and the parting of the sea (Exodus 14), Grade 5 required list', rows: [
    R('L1 · Sequence', 'Order key events to see structure', 'Comprehension — make/confirm inferences', '§110.7(6)(F)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L2 · Theme', 'Determine the theme across two scenes', 'Multiple Genres — determine theme using text evidence', '§110.7(8)(A)', 'Claim', 'Feedback d≈0.70'),
    R('L3 · Evidence', 'Gather only theme-supporting evidence', 'Response — use text evidence to support a response', '§110.7(7)(C)', 'Alternatives', 'Classifying/sorting d≈0.60'),
    R('L4 · Source', 'Name the source book and chapters', 'Inquiry & Research — identify/gather relevant sources', '§110.7(12)', 'Lens', 'Prior knowledge activation d≈0.55') ] },

  'g68-do-not-be-anxious': { sources: 'Do Not Be Anxious (Matthew 6:25–34), from the Sermon on the Mount — Grade 6 required list', rows: [
    R('L1 · Technique', 'Identify the argument move (lesser-to-greater)', "Author's Purpose & Craft — analyze rhetorical/argument moves", '§110.22–24(9)(D)', 'Claim', 'Feedback d≈0.70'),
    R('L2 · Evidence', 'Distinguish craft evidence from an off-topic fact', 'Response — use text evidence to support analysis', '§110.22–24(7)', 'Evidence', 'Classifying/sorting d≈0.60'),
    R('L3 · Sequence', 'Order how examples build to a claim', 'Comprehension — synthesize/evaluate details', '§110.22–24(6)', 'Alternatives', 'Advance organizers d≈0.42'),
    R('L4 · Genre & source', 'Name the sermon/Gospel the passage belongs to', 'Multiple Genres — analyze genre characteristics', '§110.22–24(8)', 'Lens', 'Concept mapping d≈0.64') ] },
  'g68-ecclesiastes': { sources: 'Ecclesiastes 3 — "a time for everything," Hebrew wisdom poetry — Grade 8 required list', rows: [
    R('L1 · Genre', 'Name the poetic genre from its traits', 'Multiple Genres — analyze poetic forms & structures', '§110.22–24(8)(B)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Evidence', 'Separate structural evidence from an off-topic fact', 'Response — use text evidence to support analysis', '§110.22–24(7)', 'Evidence', 'Classifying/sorting d≈0.60'),
    R('L3 · Sequence', "Order the poem's opening, list, and claim", 'Comprehension — synthesize/evaluate details', '§110.22–24(6)', 'Alternatives', 'Advance organizers d≈0.42'),
    R('L4 · Device', 'Name the repeated word that carries the parallelism', "Author's Purpose & Craft — analyze literary devices", '§110.22–24(9)(D)', 'Claim', 'Feedback d≈0.70') ] },

  'g912-job': { sources: 'Book of Job excerpts — the innocent-sufferer archetype; wisdom literature — English II required list', rows: [
    R('L1 · Archetype', 'Name a narrative archetype (the innocent sufferer)', 'Multiple Genres — analyze thematic/structural links across texts', '§110.37(6)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Text vs. interpretation', 'Distinguish what the text states from interpretation', 'Comprehension — distinguish fact from inference/interpretation', '§110.37(5)(H)', 'Alternatives', 'Critical/evaluative thinking d≈0.55'),
    R('L3 · Sequence', "Trace the book's frame–debate–answer structure", 'Comprehension — evaluate details', '§110.37(5)(F)', 'Evidence', 'Advance organizers d≈0.42'),
    R('L4 · Allusion', 'Trace an allusion into everyday language', "Author's Purpose & Craft — analyze allusion", '§110.37(9)', 'Response', 'Elaborative interrogation d≈0.55') ] },
  'g912-corinthians-love': { sources: 'The Definition of Love (1 Corinthians 13) — definition by attribute; text vs. cultural afterlife — English IV required list', rows: [
    R('L1 · Form & device', 'Name the form (epistle) and definition-by-attribute', 'Multiple Genres — analyze genre characteristics', '§110.39(6)', 'Lens', 'Concept mapping d≈0.64'),
    R('L2 · Evidence', 'Gather evidence for how the passage defines love', 'Response — use text evidence to support analysis', '§110.39(7)', 'Evidence', 'Classifying/sorting d≈0.60'),
    R('L3 · Sequence', 'Order the argument to its climax', "Author's Purpose & Craft — analyze how a text builds", '§110.39(9)', 'Alternatives', 'Advance organizers d≈0.42'),
    R('L4 · Close reading', 'Read the passage’s climax closely (the word it lands on)', 'Comprehension — evaluate key details; text vs. context', '§110.39(5)(F)(H)', 'Response', 'Critical/evaluative thinking d≈0.55') ] },
};

function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function title(key) {
  try { const w = {}; eval(fs.readFileSync(path.join(GRADES, key + '.js'), 'utf8').replace('window.BREAKOUT', 'w.BREAKOUT')); return w.BREAKOUT.UI.en['header.h1']; }
  catch (e) { return key; }
}

let out = '\n', n = 0;
for (const band of Object.keys(ORDER)) {
  out += `  <h2>Grades ${esc(band)}</h2>\n`;
  for (const key of ORDER[band]) {
    const d = DATA[key]; if (!d) { console.error('no correlation data for', key); continue; }
    out += `  <h3>${esc(title(key))}</h3>\n`;
    if (d.sources) out += `  <div class="band-sub">Source: ${esc(d.sources)}</div>\n`;
    out += '  <table>\n    <tr><th>Lock</th><th>Skill</th><th>ELAR strand (aligned to)</th><th>CLEAR · strategy</th></tr>\n';
    for (const r of d.rows) {
      out += `    <tr><td data-l="Lock"><strong>${esc(r.lock)}</strong></td><td data-l="Skill">${esc(r.skill)}</td>` +
        `<td data-l="Strand">${esc(r.strand)} <span class="teks">${esc(r.teks)}</span></td>` +
        `<td data-l="CLEAR">${esc(r.clear)} <span class="es">${esc(r.strategy)}</span></td></tr>\n`;
      n++;
    }
    out += '  </table>\n';
  }
}

const p = path.join(ROOT, 'correlation.html');
let html = fs.readFileSync(p, 'utf8');
html = html.replace(/<!--CORR:START-->[\s\S]*<!--CORR:END-->/, '<!--CORR:START-->' + out + '  <!--CORR:END-->');
fs.writeFileSync(p, html);
console.log(`correlation: ${Object.values(ORDER).flat().length} breakouts, ${n} lock rows written.`);
