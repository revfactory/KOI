# Output Specs

## Shared Rules

- Write in Korean unless the user asks otherwise.
- Use Markdown with one clear H1 per file.
- Keep claims traceable to `source.txt`; label assumptions explicitly.
- Keep the 6-session course promise, two project tracks, mentoring outputs, AI usage log, and public evidence outcome consistent across files.
- Prefer compact tables for schedules, deliverables, evaluation, and session maps.

## Education Plan

Default path: `docs/00-education-plan.md`

Purpose: Explain why the course exists, who it serves, how it is operated, what outcomes it promises, and how quality will be judged.

Required structure:

1. Course identity
   - Course title
   - One-line introduction
   - Target learners
   - Duration, schedule, and session format

2. Planning background
   - Why open source matters in the AI era
   - Why the course emphasizes actual contribution/operation instead of passive GitHub usage
   - Constraints or citation gaps from `source.txt`

3. Learning goals
   - Ecosystem and culture
   - GitHub collaboration workflow
   - License, governance, and community operations
   - AI-assisted contribution, review, documentation, and testing
   - Team project operation or external contribution
   - Portfolio-ready public evidence

4. Operating model
   - 90-minute lecture plus 60-minute mentoring model
   - Required weekly short practice block
   - Team roles: Maintainer, Contributor, Docs, AI/Automation
   - Track A and Track B selection criteria

5. Deliverables
   - Weekly deliverables
   - Final team deliverables
   - Individual reflection or AI usage log

6. Evaluation
   - Use the source evaluation weights unless the user asks to change them.
   - Explain what evidence is accepted for each evaluation item.

7. Risks and mitigations
   - Skill gap across learners
   - External PR not merged within 6 weeks
   - License/legal misunderstanding
   - AI-generated mistakes
   - Weak public artifacts

8. Success criteria
   - Public repository or external contribution trace
   - Issue/PR/review/commit records
   - README, license, contribution guide, and project roadmap
   - Final presentation and next contribution plan

## Curriculum

Default path: `docs/01-curriculum.md`

Purpose: Convert the plan into a session-by-session teaching map with objectives, topics, activities, mentoring outputs, assignments, and assessment links.

Required structure:

1. Course overview table
   - Title, audience, period, format, final outcome, tracks

2. Competency map
   - Open source literacy
   - GitHub collaboration
   - Maintainer operations
   - AI-assisted development workflow
   - Portfolio/public evidence

3. Full schedule table
   - Session number
   - Date and time
   - Topic
   - Core question
   - Practice block
   - Mentoring output

4. Session details
   - Session 1: AI 시대의 오픈소스: 왜 지금 다시 중요한가
   - Session 2: GitHub 협업 워크플로우와 오픈소스 운영 기본기
   - Session 3: 오픈소스 라이선스, 거버넌스, 커뮤니티 운영
   - Session 4: AI를 활용한 오픈소스 기여와 운영 자동화
   - Session 5: AI 멀티 에이전트로 오픈소스 프로젝트 개발하기
   - Session 6: 프로젝트 발표, 오픈소스 커리어, 다음 기여로 이어가기

5. Project tracks
   - Track A: external open source contribution
   - Track B: self-operated AI/open source project
   - Include selection guide, minimum evidence, and fallback plan.

6. Assessment rubric
   - Open source understanding: 20%
   - GitHub collaboration: 20%
   - Actual contribution/operation: 25%
   - AI usage capability: 20%
   - Presentation/documentation: 15%

7. Instructor preparation
   - GitHub demo repositories or examples
   - License examples
   - AI tool usage boundaries
   - Mentoring checklist

## Lecture Material

Default paths: `docs/lectures/session-01.md` through `docs/lectures/session-06.md`

Purpose: Give the instructor a usable teaching packet for each 2-hour session.

Each session file must include:

1. Metadata
   - Session number, date/time, topic, core message, target output

2. Learning objectives
   - 3 to 5 measurable objectives

3. Pre-class preparation
   - Instructor prep
   - Learner prep
   - Accounts, tools, repositories, or reading

4. Time plan
   - Opening
   - Concept lecture
   - Demo or case analysis
   - Hands-on practice
   - Mentoring
   - Wrap-up

5. Core lecture notes
   - Key concepts
   - Examples or demos
   - Discussion prompts
   - Common misconceptions

6. Practice block
   - Goal
   - Steps
   - Expected artifact
   - Instructor check criteria

7. Mentoring guide
   - Team questions
   - Decisions to make
   - Required output by the end of mentoring

8. AI usage guide
   - Suggested prompts
   - What AI may help with
   - What humans must verify

9. Assignment
   - Team assignment
   - Individual reflection or AI usage log
   - Submission evidence

10. Source notes
   - Source sections used
   - Citation gaps or facts needing verification

## QA Review

Default path: `docs/99-quality-review.md`

Purpose: Record consistency checks, missing citations, unresolved assumptions, and recommended edits before delivery.
