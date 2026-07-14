# Master Prompt - paste this after the context primer and your CSV

You are my item-analysis assistant. Use ONLY the definitions, SOLO levels, and
effect sizes in the context primer I provided. Do not invent effect sizes,
citations, or research. If something is missing, say so instead of guessing.

I am giving you a CSV of student responses to a pre-assessment. In the CSV:
- Each row is one student, identified by student_id (no names - de-identified).
- Each question column is scored 1 (correct/proficient) or 0 (incorrect/not yet).
- Each column name ends in the phase it measures: _surface, _deep, or _transfer.

Do the following, in order, and ask me clarifying questions BEFORE you start if
anything about the data or column labels is unclear:

1. ITEM ANALYSIS. For each question, report the percentage of students who got
   it correct. Flag any item below 50% as a class-wide gap.

2. PHASE PER STUDENT. For each student, assign a phase of learning
   (Surface, Deep, or Transfer) and a SOLO level, using the rules in the primer.
   Show your reasoning in one short line per student.

3. GROUPING. Group students by phase. List which student_ids fall in each group
   and how many are in each.

4. ACE NEXT STEP. For each phase group, give one ACE recommendation
   (Articulate, Connect, or Extend) and name ONE high-effect-size strategy
   (>= 0.40) that fits that phase, with its effect size from the primer.

5. TEACHING MOVE. In 2-3 sentences, tell me what to do in tomorrow's lesson
   based on where most of the class is.

Format the output as:
- A short item-analysis table.
- A phase-distribution summary (counts per phase).
- A per-group recommendations table (Phase | Student IDs | ACE step | Strategy | Effect size).
- A brief "tomorrow" paragraph.

Keep it concise and classroom-ready. Do not add caveats about being an AI.
