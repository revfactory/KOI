---
name: open-source-ai-course-md
description: Create Korean Markdown education planning documents, curriculum documents, and session-by-session lecture materials from source.txt or similar course briefs. Use when Codex needs to extract course requirements, design or refine a multi-session education program, scaffold Markdown deliverables, write instructor-facing lecture materials, align outputs across planning/curriculum/session files, or QA an Open Source x AI course documentation set.
---

# Open Source AI Course Markdown

## Overview

Use this skill to turn `source.txt` into a coherent Korean Markdown documentation set for the 6-session "AI 시대의 오픈소스 실전: 기여자에서 메인테이너까지" course. Keep the work source-grounded, instructor-ready, and internally consistent across the education plan, curriculum, and each session's lecture material.

## Workflow

1. Read `source.txt` first.
   - Extract course title, audience, goals, schedule, session themes, team tracks, mentoring outputs, final outputs, evaluation criteria, and cited claims.
   - Normalize dates with the current year when the source implies the live schedule. For this project, the listed schedule maps to 2026-05-06, 2026-05-07, 2026-05-14, 2026-05-21, 2026-05-28, and 2026-06-04 in Korea time unless the user says otherwise.
   - Treat missing reference-link definitions in `source.txt` as a citation gap to flag during QA.

2. Choose the requested deliverable.
   - Education plan: use `references/output-specs.md#education-plan`.
   - Curriculum document: use `references/output-specs.md#curriculum`.
   - Session lecture material: use `references/output-specs.md#lecture-material`.
   - Full package: scaffold files first, then write in this order: plan, curriculum, session 1-6, QA review.

3. Keep a source map while writing.
   - Mark which source section supports each major claim or requirement.
   - Do not invent objectives, dates, tools, grading weights, or deliverables that conflict with the source.
   - If adding new external facts, current tool recommendations, legal/license guidance, or "latest" claims, verify with primary or official sources before writing.

4. Write in professional Korean Markdown.
   - Use clear headings, compact tables, and action-oriented wording.
   - Distinguish instructor notes, learner activities, mentoring tasks, assignments, and final deliverables.
   - Make each lecture material usable for a 2-hour session with lecture, demo/practice, and mentoring blocks.

5. Validate before handoff.
   - Use `references/quality-checklist.md`.
   - Check every session has objectives, agenda, key concepts, practice activity, mentoring output, homework, and evidence of AI-human verification.
   - Confirm the plan, curriculum, and lecture files use the same course goals, schedule, tracks, outputs, and evaluation logic.

## File Layout

Prefer this output layout unless the user gives another one:

```text
docs/
├── 00-education-plan.md
├── 01-curriculum.md
├── lectures/
│   ├── session-01.md
│   ├── session-02.md
│   ├── session-03.md
│   ├── session-04.md
│   ├── session-05.md
│   └── session-06.md
└── 99-quality-review.md
```

When starting a full package, optionally run:

```bash
python3 .codex/skills/open-source-ai-course-md/scripts/scaffold_course_docs.py --out-dir docs
```

The scaffold script creates empty Markdown shells only. It does not replace content judgment or source analysis.

## Writing Rules

- Preserve the course's central promise: after 6 weeks, every team should operate one public repository or leave a real contribution trail in an external open source project.
- Keep the two project tracks visible throughout: external open source contribution and self-operated AI/open source project.
- Treat AI as a repeated weekly practice, not only a week 4-5 topic.
- Keep legal/license material practical and operational: connect license, README, CONTRIBUTING, code of conduct, security, templates, and maintainer trust.
- Use "public evidence" as the final outcome frame: issues, PRs, commits, review history, README, license, AI usage log, and presentation artifacts.
- For lecture material, write for the instructor/facilitator, not as a learner-facing blog post.
- Do not overquote from sources. Summarize, cite briefly, and flag missing source URLs.

## Resources

- `references/output-specs.md`: Required structure for education plan, curriculum, and lecture materials.
- `references/quality-checklist.md`: Final review criteria for source fidelity, instructional quality, and Markdown hygiene.
- `scripts/scaffold_course_docs.py`: Optional Markdown file scaffold generator.
