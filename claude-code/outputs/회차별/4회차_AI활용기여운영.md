# 4회차 — AI를 활용한 오픈소스 기여와 운영 자동화

> **지난주에 우리는 저장소를 신뢰할 수 있게 만들었다. LICENSE, CONTRIBUTING.md, CODE_OF_CONDUCT, SECURITY, Issue/PR Template — 외부 사람이 들어와도 "여기 안전하다"고 느낄 수 있는 신뢰 골격을 갖췄다. 오늘부터는 그 위에서 AI를 본격적으로 손에 쥔다. 단, 잊지 말자 — 1·2·3회차에서도 우리는 이미 매주 AI를 써왔다. 1회차에 후보 프로젝트 README를 AI에게 요약시켰고, 2회차에 PR 본문을 AI로 다듬었고, 3회차에 라이선스 리스크를 AI에게 물었다. 4회차는 처음 쓰는 게 아니라, 본격화하는 회차다. AI는 코드를 대신 써주는 도구가 아니라, 오픈소스 기여의 진입장벽을 낮춰주는 기여 보조 시스템이다.**

---

## 0. 회차 메타 정보

> **핵심 메시지 (도입·마무리 양쪽 노출, 샌드위치 룰)**
>
> **AI는 코드를 대신 써주는 도구가 아니라, 오픈소스 기여의 진입장벽을 낮춰주는 기여 보조 시스템이다.**

> **선수 지식 (이번 회차 들어올 때 챙겨와야 할 것)**
>
> - 1·2·3회차 누적 산출물 (팀 저장소 + LICENSE + CONTRIBUTING + Issue Template + PR Template + README v2)
> - GitHub 계정 + 본인 노트북에 git CLI + VS Code 또는 Cursor 또는 IDE
> - AI 도구 1개 로그인 상태 — Claude (claude.ai 웹) 또는 GitHub Copilot Free, 둘 다면 더 좋음
> - 트랙 확정 (A: 외부 OSS 기여 / B: 자체 공개 저장소 운영)
> - 팀 저장소에 우리 트랙용 작업 후보 Issue 1~3개 (멘토링 약속 카드에 적은 것)

> **이 회차가 끝나면 학생은**
>
> - **LO 1.** 낯선 저장소를 AI 보조로 30분 안에 구조 파악할 수 있다. 여기에는 언어, 의존성, 핵심 모듈, 기여 진입점 확인이 포함된다.
> - **LO 2.** 이슈 → 재현 → 수정 범위 산정 → PR 본문 → 리뷰 대응 흐름의 각 단계에서 AI를 도구로 쓰고, 사람이 무엇을 검증해야 하는지 구분할 수 있다.
> - **LO 3.** RAG, MCP, A2A의 개념적 위치를 한 줄씩 정의할 수 있다. RAG는 검색 기반, MCP는 도구 연결, A2A는 에이전트 간 협업이다.

회차 정보는 다음과 같다.

- **일자**: 2026-05-21(목) 19:00~21:00
- **강의 90분**: 19:00~20:30
- **멘토링 60분**: 20:30~21:30
- **핵심 실습**: 도입 훅 10분, 본격 PR 30분, README·changelog 자동 보강 10분
- **AI 활용 분량**: **40분 (회차 정점)** — 1·2·3회차 누적 32분 위에서 본격화
- **A/B 트랙 분기**: 본격 PR 30분에서 분기한다. 양 트랙 모두 AI 사용 로그는 같은 형식을 쓴다.

---

## 1. 사전 학습 (수업 전 30분)

강의 시작과 동시에 낯선 저장소 분석에 들어갈 수 있도록, 아래 자료를 가볍게 읽고 환경을 확인한다.

### 1.1 읽기 (15분)

1. **Claude Code 공식 문서 — Quickstart**
   URL: https://docs.claude.com/en/docs/claude-code
   읽을 부분: "낯선 저장소 분석" 섹션 또는 init/explain 명령어를 한 번 훑는다.

2. **GitHub Copilot — Pull request summaries**
   URL: https://docs.github.com/en/copilot
   읽을 부분: PR 본문 자동 생성 기능 1페이지를 확인한다.

3. **RAG 원논문 abstract만 (5분)**
   URL: https://arxiv.org/abs/2005.11401
   읽을 부분: "외부 검색 + 모델 파라미터 결합"이라는 한 문장만 머리에 남긴다.

4. **MCP — Introduction**
   URL: https://modelcontextprotocol.io/
   읽을 부분: "LLM이 외부 도구·데이터에 표준 방식으로 연결"이라는 한 문장을 확인한다.

5. **A2A — Home**
   URL: https://a2a-protocol.org/latest/
   읽을 부분: "에이전트(agent) 간 협업 표준"이라는 한 문장을 확인한다.

### 1.2 환경 점검 (10분)

```bash
# 1) 본인 노트북에 다음 중 1개 이상 작동 상태 확인
claude --version          # Claude Code (CLI)
code --version            # VS Code (+ Copilot 또는 Continue 확장 설치)
cursor --version          # Cursor (선택)
gh --version              # GitHub CLI (PR 작성에 권장)

# 2) AI 도구 1개 로그인 (둘 다면 더 좋음)
#    - Claude: claude.ai 웹에서 로그인
#    - GitHub Copilot Free: github.com/settings/copilot 활성화
#    - Cursor: cursor.com 로그인

# 3) 본인 GitHub에 1·2·3회차 산출물 잘 있는지 확인
gh repo view <팀 저장소> --web
```

### 1.3 도입 훅에 답할 준비 (5분)

강의 0:03부터 5분 안에 "처음 보는 OSS 저장소의 핵심 모듈 3개 + 첫 이슈 1개"를 찾아야 한다. AI **없이** 먼저 한다. 사전에 본인이 평소 어떻게 낯선 저장소를 훑는지 1분 메모한다.

평소 동선 예: README → 디렉토리 트리 → src 또는 lib → package.json/pyproject.toml → CONTRIBUTING.md → Issues → good-first-issue 라벨.

이 동선이 5분 안에 가능한가? 가능하지 않다면 오늘 강의가 답을 준다.

---

## 2. 0:00~0:03 — 직전 전이 (3분)

### 슬라이드 S1 — 직전 전이

```text
[H2] 지난 3주, 우리가 쌓아온 것

1회차 (5/6): 후보 프로젝트 3개 + 팀 + 프로필 README 초안
   ↓
2회차 (5/7): 팀 저장소 + Issue 5개 + 첫 머지 PR + 트랙 확정
   ↓
3회차 (5/14): LICENSE + CONTRIBUTING + COC + SECURITY + Templates + README v2
   ↓
4회차 (오늘): 그 위에서 — AI를 본격적으로 손에 쥔다
```

지난주에 우리는 저장소에 신뢰의 골격을 세웠다. 외부 사람이 들어와도 라이선스가 있고, CONTRIBUTING이 있고, 행동 강령이 있어 "여기 안전하다"고 느낄 수 있는 상태다.

그런데 잠깐 — 1회차에 후보 프로젝트 README를 AI에 붙여 한 줄 요약을 받았던 것을 기억하는가? 2회차에 PR 본문을 AI로 다듬었고, 3회차에 라이선스 리스크를 AI에게 물었다. 우리는 이미 3주 동안 32분 어치 AI 활동을 누적해 왔다. **4회차는 처음 쓰는 게 아니라, 본격화하는 회차다.**

### 학생 활동 (1분)

옆 사람과 1줄로 답한다: "내가 1·2·3회차에서 AI에게 시킨 것 중 가장 도움이 됐던 것은 ____."

이 답은 0:16~0:30의 5단계 흐름을 볼 때 다시 연결한다.

---

## 3. 0:03~0:13 — 도입 훅: 낯선 저장소 5분 — AI 없이 vs AI와 함께 (10분)

AI의 가치는 설명으로만 이해하기 어렵다. 먼저 5분 동안 직접 헤매고, 그다음 5분 동안 AI와 함께 같은 일을 다시 해본다.

### 슬라이드 S-Hook — "낯선 저장소 5분"

```text
[H2] 5분 안에 답하라
- 핵심 모듈 3개?
- 좋은 첫 이슈 1개?

[H3] 1차 — AI 없이 (5분)
[H3] 2차 — AI와 함께 (5분)
[H3] 손드는 사람 수를 비교한다
```

수업에서 사용할 수 있는 중간 규모 OSS 저장소 후보는 다음과 같다.

- **1순위**: `astral-sh/ruff` — Python 린터, 활발, ruff/rules/ 디렉토리에 작은 PR 적합. 한국어 README 없음.
- **2순위**: `continuedev/continue` — OSS AI 코딩 어시스턴트, Apache-2.0.
- **3순위**: `aider-AI/aider` — git-aware AI pair programmer, Apache-2.0.
- **백업**: `huggingface/transformers` docs 디렉토리만.

### 1차 (5분, AI 없이)

지금부터 5분. AI 도구는 모두 끄고, 브라우저와 GitHub 원본만 사용한다. 5분 안에 핵심 모듈 3개와 좋은 첫 이슈 1개를 찾는다.

```bash
# 학생이 실제로 할 동선 (참고)
1. github.com/astral-sh/ruff → README 스크롤
2. 디렉토리 트리 — crates/, ruff/, scripts/ 등 어디서 막히는지 관찰
3. Issues 탭 → 라벨 필터 → "good first issue" 클릭
4. 라벨 안에 어떤 게 첫 이슈로 좋은지 판단
```

### 2차 (5분, AI와 함께)

같은 5분, 같은 과제다. 단, **AI 출력을 그대로 답으로 내지 말 것**. 사람은 검증하고, AI는 보조한다.

```text
# 학생용 권장 프롬프트

[Claude / Copilot Chat]
이 저장소를 처음 본다고 가정하고 답해줘:
1) 핵심 모듈 3개 (디렉토리 단위로)
2) 각 모듈이 무슨 일을 하는지 한 줄
3) 기여 진입점으로 좋은 첫 이슈 1개 (URL 포함)
참고: github.com/astral-sh/ruff

조건: 추측 금지. README와 CONTRIBUTING.md를 근거로 답해줘.
근거가 부족하면 "확실치 않음"이라고 말해줘.
```

예상 응답은 이런 구조가 된다.

```text
핵심 모듈 3개:
1. crates/ruff_linter/ — 실제 린트 룰 구현 (수백 개 룰 각각 파일)
2. crates/ruff_python_parser/ — Python 파서, 룰의 입력 AST 생성
3. crates/ruff_workspace/ — 설정 파일 (ruff.toml, pyproject.toml) 처리

첫 이슈 1개:
https://github.com/astral-sh/ruff/labels/good%20first%20issue
위 라벨에서 "rule: ..." 로 시작하는 이슈 — 룰 1개 추가는 정해진 패턴이 있어
첫 PR로 적합. (단, 실제 URL은 내가 접근할 수 없으니 사람이 라벨 페이지 직접 확인 권장)

확실치 않은 부분: 룰 추가의 최신 가이드라인 — CONTRIBUTING.md 직접 확인 필요.
```

### 비교 토론 (1분)

1차에서 답을 찾은 사람 수와 2차에서 답을 찾은 사람 수를 비교한다. 중요한 질문은 "AI가 빨랐는가?"가 아니라 "AI가 확실치 않다고 말한 부분을 사람이 직접 확인했는가?"이다.

### 슬라이드 S-Hook 마무리

```text
[H2] AI 활용 능력 = 검증 능력

AI가 "확실하다"고 한 것 ≠ 사실
사람이 라벨 페이지에 가서 이슈 URL을 직접 확인하는 1분 = AI 활용의 본체
```

---

## 4. 0:13~0:16 — LO 노출 + 산출물 약속 + AI 로그 양식 (3분)

### 슬라이드 S2 — 학습 목표 (LO 박스, 핸드아웃 첫 페이지에도 동일 박스)

```text
┌─────────────────────────────────────────────────────────┐
│ 4회차 학습 목표                                            │
│                                                          │
│ LO 1. 학생은 낯선 저장소를 AI 보조로 30분 안에 구조 파악       │
│       (언어, 의존성, 핵심 모듈, 기여 진입점)할 수 있다.        │
│                                                          │
│ LO 2. 학생은 이슈 → 재현 → 수정 범위 산정 → PR 본문 →        │
│       리뷰 대응 흐름의 각 단계에서 AI를 도구로 쓰고, 사람이    │
│       무엇을 검증해야 하는지 구분할 수 있다.                  │
│                                                          │
│ LO 3. 학생은 RAG, MCP, A2A의 개념적 위치를 한 줄씩 정의할     │
│       수 있다 (RAG=검색 기반, MCP=도구 연결, A2A=에이전트     │
│       간 협업).                                            │
└─────────────────────────────────────────────────────────┘
```

### 슬라이드 S2-2 — 오늘의 산출물 약속 4개 (학생 GitHub에 남는 것)

```text
[H2] 21:30에 너희 팀 GitHub에 무엇이 남아 있어야 하나

1. 본격 PR 1개 (drafted)
   - A트랙: 외부 OSS 기여 PR 초안 (small fix / docs / test)
   - B트랙: 자체 프로젝트 기능 PR

2. AI 사용 로그 (PR 본문)
   - 어떤 단계에 / 어떤 도구를 / 어떤 프롬프트로 / 사람이 무엇을 검증했나

3. 테스트·문서·리뷰 체크리스트 (PR description 또는 .github/ 안)

4. RAG/MCP/A2A 한 줄 정의 노트 (팀 저장소 docs/ 또는 회고 노트)
```

### 슬라이드 S2-3 — AI 사용 로그 양식 (강제 필드)

```markdown
## AI 사용 로그

- **분석**
  - AI 도구: Claude
  - 프롬프트 요약: 이 저장소 핵심 모듈 3개
  - AI 출력 요약: crates/ruff_linter 등
  - 사람이 검증한 것: 디렉토리 트리 직접 확인
  - 결과: 채택

- **구현**
  - AI 도구: Copilot
  - 프롬프트 요약: 이 룰의 테스트 케이스 5개
  - AI 출력 요약: test_*.py 5개
  - 사람이 검증한 것: 1개는 잘못됨 → 수정
  - 결과: 수정 채택

- **리뷰**
  - AI 도구: Claude
  - 프롬프트 요약: PR 본문 점검
  - AI 출력 요약: 누락 항목 2개
  - 사람이 검증한 것: 본문 1줄 수정
  - 결과: 채택

- **문서**
  - AI 도구:
  - 프롬프트 요약:
  - AI 출력 요약:
  - 사람이 검증한 것:
  - 결과:
```

> 이 로그가 비어 있거나 "사람이 검증한 것" 칸에 해당하는 기록이 모두 비어 있으면 AI 활용 능력 점수는 거의 인정받기 어렵다. 채점 룰은 "썼는가"가 아니라 **"쓰고 검증했는가"**이다.

---

## 5. 0:16~0:30 — 개념 1블록: 5단계 흐름과 AI/사람 분리 (14분)

도입 훅에서 확인한 핵심은 "AI 활용 = 검증 능력"이다. 이제 그 검증을 어느 단계에서 어떻게 적용할지 5단계로 나눈다.

### 슬라이드 S3 — 5단계 흐름 다이어그램

```text
[H2] 외부 OSS 기여 또는 자체 기능 PR의 5단계

   이슈 (Issue)
       │
       ▼
   재현 (Reproduce)
       │
       ▼
   수정 범위 산정 (Scope)
       │
       ▼
   PR 본문 작성 (PR Body)
       │
       ▼
   리뷰 대응 (Review)
```

### 슬라이드 S3-2 — 단계별 AI / 사람 분리 (오늘의 핵심)

#### 1. 이슈 (Issue)

- **AI가 도와줄 수 있는 것**: 이슈 본문 요약, 비슷한 이슈 검색, 라벨 추천.
- **사람이 반드시 할 것**: 진짜로 메인테이너가 원하는 작업인지 확인한다. 이미 누가 하고 있는지 `Assignees`, 최근 코멘트, linked PR을 직접 본다.
- **위험 신호**: AI가 "쉬운 이슈"라고 했지만 실제로는 RFC가 진행 중이거나, 이미 다른 사람이 맡은 이슈일 수 있다.

#### 2. 재현 (Reproduce)

- **AI가 도와줄 수 있는 것**: 최소 재현 코드 생성, 환경 셋업 명령어 정리.
- **사람이 반드시 할 것**: 본인 PC에서 **실제로** 재현되는지 실행한다. 환경 의존이 있는지 Python/Node/Rust 버전과 OS를 확인한다.
- **위험 신호**: AI가 만든 재현 코드가 동작하지 않으면 이슈 자체를 잘못 이해했을 가능성이 크다.

#### 3. 수정 범위 (Scope)

- **AI가 도와줄 수 있는 것**: 영향 받는 파일 목록 추정, 함수 호출 흐름 추적.
- **사람이 반드시 할 것**: "한 줄 수정"이 진짜 한 줄인지 확인한다. `rg`나 `git grep`으로 호출 위치를 직접 찾고, 테스트가 있는지도 본다.
- **위험 신호**: AI가 "간단한 수정"이라고 한 것이 실제로는 11파일 변경으로 번질 수 있다.

#### 4. PR 본문 (PR Body)

- **AI가 도와줄 수 있는 것**: 변경 요약, 관련 이슈 링크, 체크리스트 초안 작성.
- **사람이 반드시 할 것**: 변경 요약의 모든 줄이 사실인지 diff와 대조한다. 빠진 변경이 없는지, 없는 변경을 적지 않았는지 확인한다.
- **위험 신호**: AI가 "테스트 추가"라고 적었는데 실제 diff에는 테스트가 0개일 수 있다.

#### 5. 리뷰 대응 (Review)

- **AI가 도와줄 수 있는 것**: 리뷰 코멘트 의도 해석, 답변 초안, 패치 안 제안.
- **사람이 반드시 할 것**: 리뷰어의 진짜 우려를 본인이 이해했는지 확인한다. 모든 코멘트에 응답했는지 직접 체크한다.
- **위험 신호**: AI가 만든 답변이 형식적인 감사 문장에 그치면 머지 가능성이 낮아진다.

### 30초 페어 토크

> 30초 페어 토크 — 옆 사람과 30초: 방금 들은 도구 1개를 자기 후보 OSS에 어떻게 적용할지 한 줄로 말합니다.

### 슬라이드 S3-3 — 회차 내내 머리에 둘 한 문장

```text
[H1, 큼] AI는 5단계 모두에 들어온다. 사람은 5단계 모두에서 검증한다.
```

---

## 6. 0:30~1:00 — 본격 PR 1개 만들기 (30분, 트랙 분기, 회차 핵심)

지금부터 30분 동안 양 트랙 모두 같은 산출물 형식을 만든다. 목표는 **PR draft 1개 + AI 사용 로그 채워짐**이다.

### 슬라이드 S-PR — 30분 분배

```text
0:00~0:05  이슈 1개 선택 + AI에게 첫 분석 (5분)
0:05~0:15  재현 + 수정 범위 산정 + 코드 변경 시작 (10분)
0:15~0:25  코드 완성 + 테스트 + PR 본문 초안 (10분)
0:25~0:30  PR draft 푸시 + AI 사용 로그 마감 (5분)
```

### 6.1 A트랙 — 외부 OSS 기여 PR 초안

대상 후보는 다음과 같다.

- `astral-sh/ruff` — 룰 1개 추가, docs/typo, test 추가
- `continuedev/continue` — OSS AI 코딩 도구에 직접 기여
- `aider-AI/aider` — README 보강, docs PR
- `huggingface/transformers` — docs/ 디렉토리 한정
- `firstcontributions/first-contributions` — 가장 부드러운 첫 PR
- 한국어 친화 후보: `toss/slash`, `daangn/seed-design`, `kakao/khaiii`

#### A트랙 단계별 가이드

**0:00~0:05 — 이슈 선택 + AI 첫 분석 (5분)**

```bash
# 1) 본인이 사전에 골라둔 저장소로 이동
gh repo view astral-sh/ruff --web

# 2) good-first-issue 라벨로 이슈 1개 선택
gh issue list --repo astral-sh/ruff --label "good first issue" --limit 10
```

```text
# Claude / Copilot Chat 첫 프롬프트

저장소: astral-sh/ruff
이슈 번호: <#XXXX>
이슈 본문: <이슈 URL 또는 본문 붙여넣기>

다음을 답해줘:
1) 이슈가 요청하는 변경 한 문장 요약
2) 변경이 영향을 줄 가능성이 큰 파일 / 디렉토리 (확실치 않으면 "추정")
3) 이슈에 이미 PR이 연결되어 있는가? (Linked PR 섹션 확인 권장)
4) CONTRIBUTING.md에 이 종류의 기여를 위한 별도 절차가 있는가?

조건: 추측 명시. 확실치 않으면 "확실치 않음"이라고 답할 것.
```

사람이 즉시 검증할 것:

- [ ] 이슈에 이미 다른 사람이 Assigned 되어 있나? (이슈 페이지 우측)
- [ ] 최근 30일 내 메인테이너 코멘트가 있나?
- [ ] CONTRIBUTING.md에 명시된 PR 절차를 1번 이상 읽었나?

**0:05~0:15 — 재현 + 수정 범위 산정 + 코드 변경 시작 (10분)**

```bash
# 1) Fork & clone
gh repo fork astral-sh/ruff --clone --remote
cd ruff
git checkout -b fix/issue-XXXX

# 2) AI에게 재현 코드 요청 — 단, 본인이 직접 실행
```

```text
# Claude Code 또는 Cursor 챗 프롬프트

이슈 #XXXX의 버그를 재현하는 최소 코드를 작성해줘.
환경: Python 3.11 / ruff main 브랜치 / macOS.
본인이 직접 cargo build && cargo run 으로 검증할 거다.
```

사람이 즉시 검증할 것:

- [ ] AI가 만든 재현 코드를 실제로 실행했나? (출력 캡처)
- [ ] 재현 안 되면 — AI가 이슈를 잘못 이해한 것이니 다시 분석
- [ ] 영향 파일 목록을 `git grep` 또는 `rg`로 직접 확인

```bash
# 영향 범위를 사람이 확인하는 명령어
rg "변경할_함수명" --type rust
git grep "변경할_함수명"
```

**0:15~0:25 — 코드 완성 + 테스트 + PR 본문 초안 (10분)**

```text
# Claude Code 프롬프트 (멀티파일 컨텍스트로)

다음 파일들을 함께 보고 답해줘:
- crates/ruff_linter/src/rules/<룰>.rs (현재 구현)
- crates/ruff_linter/src/rules/<룰>_test.rs (현재 테스트)

이슈 #XXXX 기준으로:
1) 위 파일에서 변경할 라인을 정확히 짚어줘 (라인 번호)
2) 추가할 테스트 케이스 3개 (입력 코드 / 기대 출력)
3) 변경하지 말아야 할 부분 (회귀 위험)

조건: 변경할 라인 번호가 확실치 않으면 "확실치 않음"이라고 답할 것.
```

사람이 즉시 검증할 것:

- [ ] AI가 짚은 라인 번호가 실제 라인과 일치하나? (직접 열어 확인)
- [ ] 추가할 테스트 3개 중 1개 이상을 사람이 직접 손으로 짠 결과와 비교
- [ ] `cargo test` 또는 프로젝트 표준 테스트 명령어로 통과 확인

**0:25~0:30 — PR draft 푸시 + AI 로그 마감 (5분)**

```bash
git add .
git commit -m "fix(linter): handle XXXX edge case in YYYY rule

Closes #XXXX
Co-authored-by: AI Assistance (see PR body)"

git push origin fix/issue-XXXX
gh pr create --draft --title "fix(linter): handle XXXX edge case" \
  --body-file .github/pr_body.md
```

```markdown
<!-- .github/pr_body.md -->
## What

이슈 #XXXX 의 edge case를 처리합니다.

## Why

기존 `YYYY` 룰이 `<특정 입력>` 에 대해 잘못된 진단을 내는 문제.

## How

- `crates/ruff_linter/src/rules/YYYY.rs` 의 12~14번 라인 수정
- 테스트 3개 추가 (`crates/ruff_linter/src/rules/YYYY_test.rs`)

## Verification

- [x] `cargo test --package ruff_linter` 모두 통과
- [x] 본 PR이 회귀를 일으키지 않음 (기존 테스트 N개 전부 통과)
- [x] CONTRIBUTING.md 의 PR 절차를 따랐음

## AI 사용 로그

- **분석**
  - AI 도구: Claude
  - 프롬프트 요약: 이슈 #XXXX 요약 + 영향 범위
  - AI 출력 요약: 영향 파일 2개 추정
  - 사람이 검증한 것: `rg`로 5개 파일 추가 발견
  - 결과: 수정 채택

- **재현**
  - AI 도구: Claude Code
  - 프롬프트 요약: 재현 코드 생성
  - AI 출력 요약: Python 3.11 코드
  - 사람이 검증한 것: 본인 PC에서 실행, 재현 OK
  - 결과: 채택

- **구현**
  - AI 도구: Cursor
  - 프롬프트 요약: 룰 변경 라인 짚기
  - AI 출력 요약: 라인 12~14
  - 사람이 검증한 것: 직접 열어 라인 13~15임을 확인
  - 결과: 수정 채택

- **테스트**
  - AI 도구: Claude
  - 프롬프트 요약: 테스트 케이스 3개
  - AI 출력 요약: 3개 코드
  - 사람이 검증한 것: 1개 잘못됨 → 직접 수정
  - 결과: 부분 채택

- **PR 본문**
  - AI 도구: Claude
  - 프롬프트 요약: 본문 초안
  - AI 출력 요약: 5섹션
  - 사람이 검증한 것: "Verification" 섹션 1줄 추가
  - 결과: 채택

Closes #XXXX
```

#### A트랙 체크리스트 (PR 푸시 전 사람이 확인)

- [ ] 본인이 fork → clone → 새 브랜치 생성을 직접 했다
- [ ] AI가 만든 재현 코드를 본인 PC에서 실제로 실행했다
- [ ] PR diff의 모든 변경 줄을 본인이 한 번 이상 읽었다
- [ ] PR 본문의 모든 문장이 diff와 일치한다 (없는 변경 적지 않음)
- [ ] CONTRIBUTING.md 의 PR 절차 (DCO 서명, conventional commit, 등)를 따랐다
- [ ] AI 사용 로그의 "사람이 검증한 것" 항목이 5단계 모두 비어있지 않다
- [ ] PR이 draft 상태로 푸시됐다 (메인테이너 응답 받기 전 마지막 점검 위해)

#### A트랙 fallback (외부 응답 SLA 늦거나 maintainer 비활성)

1. 첫 후보 저장소에 응답이 늦을 가능성이 있으면 **두 번째 작은 PR을 같은 또는 다른 OSS에 동시 시도**한다.
2. docs PR / typo 수정 PR은 응답이 평균적으로 빠르다. 예: `mui/material-ui`, `vercel/next.js` docs/, `mdn/translated-content` 한국어 번역.
3. 그래도 안 되면 B트랙 하이브리드, 즉 자체 mini-tool 보강 PR로 우회한다.

### 6.2 B트랙 — 자체 프로젝트 기능 PR

대상은 2회차에 만든 팀 자체 저장소다.

#### B트랙 단계별 가이드

**0:00~0:05 — 이슈 선택 + AI 첫 분석 (5분)**

```bash
# 팀 자체 저장소의 Issue 1개 선택
gh issue list --repo <our-team>/<repo> --label "feature" --limit 5
```

```text
# Claude / Copilot Chat 첫 프롬프트

우리 팀 저장소: <our-team>/<repo>
선택한 이슈: <#XXX>
이슈 본문: <붙여넣기>

다음을 답해줘:
1) 이 이슈를 구현하면 영향 받는 파일 / 모듈
2) 비슷한 패턴이 이미 코드베이스에 있는가? (있다면 파일 명)
3) 새 의존성이 필요한가? package.json/pyproject.toml에 추가할 것?
4) 추가해야 할 테스트의 종류 (단위 / 통합 / E2E)

조건: 추측 명시. 확실치 않으면 "확실치 않음".
```

사람이 즉시 검증할 것:

- [ ] AI가 짚은 영향 파일을 본인이 열어 확인
- [ ] 새 의존성을 추가하면 — 라이선스 호환성 (3회차 라이선스 매트릭스) 확인

**0:05~0:15 — 설계 합의 + 코드 변경 시작 (10분)**

자체 프로젝트는 외부 OSS와 다르게 팀 내 합의가 1차 게이트다.

```text
# Claude Code 멀티파일 프롬프트

다음 파일들을 함께 보고 새 기능을 구현해줘:
- src/<관련 모듈>.ts (현재 구현)
- src/<관련 모듈>.test.ts (테스트)

요구사항: 이슈 #XXX 의 acceptance criteria 그대로.

조건:
- 기존 코드 스타일 (eslint config 따르기) 유지
- 새 함수마다 JSDoc 추가
- 테스트 먼저 작성 (TDD 스타일)
```

사람이 즉시 검증할 것:

- [ ] AI가 만든 코드가 우리 팀 코딩 컨벤션을 따르는가
- [ ] AI가 사용한 라이브러리가 우리 의존성에 이미 있는가 (없으면 추가 시 라이선스 확인)

**0:15~0:25 — 테스트 + PR 본문 초안 (10분)**

```bash
npm test         # 또는 pytest, cargo test
npm run lint
```

```text
# Claude / Copilot 프롬프트

방금 변경한 diff:
<git diff 출력 붙여넣기>

PR 본문을 작성해줘:
- What: 무엇을 했나
- Why: 왜 했나 (이슈 링크)
- How: 어떻게 했나 (핵심 파일 / 함수)
- Verification: 어떻게 검증했나 (테스트 명령어 / 결과)
- Screenshots: <UI라면>
- AI 사용 로그: 단계별 목록

조건: diff에 없는 변경은 본문에도 적지 말 것.
```

사람이 즉시 검증할 것:

- [ ] PR 본문의 모든 문장이 diff에 실제로 있는가
- [ ] Screenshots 섹션이 있다면 실제 스크린샷을 본인이 찍었는가

**0:25~0:30 — PR draft 푸시 + AI 로그 마감 (5분)**

```bash
git push origin feature/issue-XXX
gh pr create --draft --title "feat: implement XXX feature (closes #XXX)" \
  --body-file .github/pr_body.md
```

#### B트랙 체크리스트 (PR 푸시 전 사람이 확인)

- [ ] 새 의존성을 추가했다면 라이선스 호환 (3회차 매트릭스) 확인
- [ ] 테스트가 통과한다 (`npm test` 또는 동일 명령어)
- [ ] 린트 / 포매터 통과 (`npm run lint`)
- [ ] PR 본문의 모든 줄이 diff와 일치한다
- [ ] AI 사용 로그의 "사람이 검증한 것" 항목이 5단계 모두 채워짐
- [ ] 팀 내 다른 멤버 1명에게 1줄 코멘트 받았다 (멘토링 시간에 가능)

#### B트랙 fallback

자체 프로젝트 코드가 아직 충분하지 않으면 **CI 설정 PR 또는 README 보강 PR**로 우회한다. 두 종류 모두 "기능 PR"의 자격을 충족할 수 있다.

### 6.3 양 트랙 공통 — 마무리 5분 (0:25~0:30)

#### AI 사용 로그 마감 (3분)

PR 본문 마지막에 AI 사용 로그가 5단계 모두 채워졌는지 확인한다. "사람이 검증한 것"에 해당하는 항목이 비어 있으면 지금 채운다.

#### 막힌 지점 기록 (2분)

PR draft를 못 푸시했다면 무엇이 막혔는지 한 줄로 적는다. 멘토링 시간에는 이 한 줄을 기준으로 우선 해결한다.

#### 양 트랙 합류 — 다음 단계 예고

```text
[H2] 0:30~1:00 양 트랙이 만든 것:
- A: 외부 OSS PR draft 1개 + AI 로그
- B: 자체 저장소 PR draft 1개 + AI 로그

[H2] 1:00~ 다음 13분: RAG / MCP / A2A — 다음 주의 약어 미리 보기
```

---

## 7. 1:00~1:13 — 개념 2블록: RAG / MCP / A2A 한 줄 정의 (13분)

4회차 핵심 메시지는 "AI는 기여 보조 시스템"이다. 그 시스템이 어떻게 데이터를 끌어오고 (RAG), 도구에 연결하고 (MCP), 다른 에이전트와 협업하는지 (A2A) 이름만 알아도 다음 회차 멀티 에이전트 강의에 즉시 들어갈 수 있다. 오늘은 **위치만** 잡는다.

### 슬라이드 S4 — 1다이어그램

```text
[H2] 4회차에서 위치만 잡고, 5회차에 깊이로 간다.

           외부 데이터·도구
                │
                ▼
       ┌────────────────┐
       │     LLM         │── A2A ──→  다른 LLM/에이전트
       │     (모델)       │
       └────────────────┘
                ▲
                │
           검색 결과
              ↑
            RAG    (외부 검색)
            MCP    (외부 도구·데이터를 표준 방식으로)
```

### 슬라이드 S4-2 — 한 줄 정의 (학생이 노트에 적기)

- **RAG**: 외부 검색 결과를 LLM 답변에 결합하는 패턴.
  1차 출처: Lewis et al., arXiv:2005.11401 (2020) [9].

- **MCP**: LLM 애플리케이션이 외부 데이터·도구에 표준 방식으로 연결되는 오픈 프로토콜.
  1차 출처: modelcontextprotocol.io [10].

- **A2A**: 서로 다른 프레임워크/벤더의 AI 에이전트가 통신·협업하는 오픈 표준.
  1차 출처: a2a-protocol.org (Linux Foundation 이관, 2025) [11].

#### 7.1 RAG (3분)

RAG는 2020년 Lewis 외 9인 논문에서 시작했다. 한 문장으로는 "모델이 답하기 전에 외부에서 자료를 검색해 그 자료를 함께 보고 답한다"이다.

LLM은 학습 시점 이후의 정보를 모른다. 오늘의 뉴스나 방금 업데이트된 저장소 상태를 알려면 외부 자료가 필요하다. 오픈소스 기여에서는 낯선 저장소를 분석할 때 README와 CONTRIBUTING.md를 AI에게 같이 주는 것이 가장 단순한 RAG다. **사람이 직접 검색 결과를 가져다 붙여넣는 RAG**라고 이해하면 된다.

노트 한 줄: **RAG = 외부 검색 + LLM 답변**.

#### 7.2 MCP — Model Context Protocol (3분)

MCP는 LLM 앱이 외부 데이터와 도구에 표준 방식으로 연결되도록 하는 통신 규약이다.

AI 도구가 GitHub, Slack, Postgres에 연결할 때마다 각자 다른 방식으로 만들면 재사용이 어렵다. MCP는 이런 연결에 표준을 만들겠다는 접근이다. MCP 서버 1개를 만들면 Claude Code, Cursor, Continue 같은 도구에서 같은 방식으로 외부 도구를 쓸 수 있다.

오픈소스 기여에서는 "GitHub 이슈 가져와서 분석해"라고 AI에게 시킬 때, AI가 GitHub MCP 서버를 통해 이슈를 가져오는 구조를 떠올리면 된다.

노트 한 줄: **MCP = LLM이 외부 도구에 표준 방식으로 연결**.

#### 7.3 A2A — Agent2Agent (3분)

A2A는 서로 다른 프레임워크/벤더의 AI 에이전트가 통신하고 협업하는 표준이다.

MCP와의 차이는 분명하다. **MCP는 도구 연결 (LLM ↔ 도구), A2A는 에이전트 간 협업 (에이전트 ↔ 에이전트)**이다.

다음 회차에는 Planner, Coder, Reviewer, Tester, Documenter 역할로 나뉜 멀티 에이전트 흐름을 본다. 직접 표준을 구현하지는 않지만, 표준이 있다는 사실을 알고 들어간다.

노트 한 줄: **A2A = 에이전트 간 협업 표준**.

### 슬라이드 S4-3 — 5회차 예고

```text
[H2] 다음 주에 깊이로 들어간다

다음 회차의 멀티 에이전트 실습:
- Planner / Coder / Reviewer / Tester / Documenter
- MCP 레퍼런스 서버 1개 띄우기 (filesystem 또는 github)
- 안전 장치 4종 (hallucination / 보안 / 라이선스 / 의존성)

오늘은 이름만 외워도 된다. "MCP는 도구 연결, A2A는 에이전트 간 협업."
```

### 학생 활동 (1분)

본인 노트에 3줄 적기:

1. RAG = ____________________________________
2. MCP = ____________________________________
3. A2A = ____________________________________

---

## 8. 1:13~1:23 — AI로 README/changelog 자동 보강 (10분)

운영 자동화 첫 경험이다. PR 본문이 아니라 **저장소 자체의 운영 문서**를 AI가 보조한다.

### 슬라이드 S-Docs — 두 갈래 중 1개 선택

```text
[H2] 둘 중 하나 — 10분 안에 머지

선택 A: README 보강
- 우리 저장소 README 가 0:30~1:00에 만든 PR로 어떤 게 바뀌었나?
- AI에게 README의 한 단락을 다시 쓰게 한다
- 사람이 검수 → 머지

선택 B: changelog 자동 생성
- 우리 저장소의 최근 5개 commit
- AI에게 CHANGELOG.md 한 항목 작성하게 한다
- 사람이 검수 → 머지
```

### 8.1 선택 A — README 보강

```bash
# 1) 우리 저장소의 현재 README 읽기
cat README.md

# 2) 0:30~1:00 PR diff 가져오기
git diff main..HEAD --stat
```

```text
# Claude / Copilot 프롬프트

우리 저장소 README.md (현재):
<README.md 내용 붙여넣기>

방금 머지된 PR 변경:
<git diff --stat 출력 붙여넣기>

다음을 해줘:
1) README의 "Features" 섹션에 새 기능 1줄 추가
2) "Usage" 섹션에 새 기능 사용 예시 1개 추가
3) 변경한 라인만 diff 형태로 보여줘

조건:
- 기존 README 톤·문체 유지
- 사실에 없는 기능 추가하지 말 것
- 한국어 README면 한국어, 영어면 영어로
```

사람이 검수할 것:

- [ ] AI가 추가한 기능이 실제 PR diff에 있는 기능인가
- [ ] Usage 예시 코드가 실제로 동작하는가 (1번 실행)
- [ ] 기존 README의 다른 섹션에 영향 없는가

```bash
# 사람이 검수 후 직접 수정 → 커밋 → PR
git checkout -b docs/readme-update
# README.md 수정 (AI 출력에서 사실 검증된 부분만)
git add README.md
git commit -m "docs(readme): add XXX feature to Features and Usage"
git push origin docs/readme-update
gh pr create --title "docs: update README for new XXX feature" --body "..."
```

### 8.2 선택 B — changelog 자동 생성

```bash
# 1) 최근 5개 commit
git log --oneline -5

# 2) Conventional Commits 라면 더 좋음
git log --pretty=format:"%h %s" -5
```

```text
# Claude / Copilot 프롬프트

우리 저장소의 최근 5개 commit:
abc1234 feat(api): add user search endpoint
def5678 fix(ui): correct button alignment in dark mode
... (실제 git log 붙여넣기)

CHANGELOG.md 의 "Unreleased" 섹션에 들어갈 항목을
Keep a Changelog 형식으로 작성해줘:

### Added
- ...

### Fixed
- ...

조건:
- commit 메시지에 없는 변경 추가 금지
- breaking change면 ### Changed (BREAKING) 로 분류
```

사람이 검수할 것:

- [ ] 5개 commit 모두 changelog에 반영됐나
- [ ] BREAKING change 표기가 정확한가
- [ ] 사용자 관점 (기능 영향) 으로 다시 쓰였나 (commit 메시지를 그대로 베껴 쓰지 않았는가)

```bash
# CHANGELOG.md 생성 또는 갱신
# 사람이 1줄 이상 손으로 수정 후 커밋
git add CHANGELOG.md
git commit -m "docs(changelog): add unreleased section for v0.2.0"
git push origin main
```

### 8.3 체크리스트

- [ ] README 또는 CHANGELOG 머지 PR 또는 commit 1개 푸시됨
- [ ] AI 출력을 그대로 쓰지 않고 1줄 이상 사람이 수정함
- [ ] 변경이 사실에 근거함 (실제 PR diff 또는 git log 와 일치)
- [ ] AI 사용 로그의 "문서" 행에 이 활동 1줄 추가됨

시간이 부족하면 changelog만 작성하고, README 보강은 멘토링에서 이어간다.

---

## 9. 1:23~1:25 — 정리: AI 사용 로그 = 평가 핵심 (2분)

### 슬라이드 S5 — PR 템플릿 강제 필드 룰

```markdown
[H2] 4회차부터 PR 템플릿 강제 필드

모든 팀의 .github/pull_request_template.md 에 다음 추가:

## AI 사용 로그

- **단계명**
  - AI 도구:
  - 프롬프트 요약:
  - AI 출력 요약:
  - 사람이 검증한 것:
  - 결과:

"사람이 검증한 것"에 해당하는 항목이 모두 비면
→ AI 활용 능력 20% 만점 중 0~5점.
```

왜 강제 필드인가? 메인테이너가 PR을 봤을 때 "AI가 만든 PR이구나"를 30초 안에 알아챌 수 있는 시대다. 그때 AI 출력만 있고 사람의 검증 흔적이 없으면 그 PR은 닫힌다. 평가도 같다.

4회차부터 6회차까지 모든 PR에 이 로그가 붙는다. 메인테이너도 보고, 미래의 팀원도 보고, 발표 때도 증거로 쓴다.

---

## 10. 1:25~1:30 — KPT + 다음 회차 전이 (5분)

### KPT 5분 (학생 개인, 1줄씩)

```text
회차 4 / 학생명 ___

K (Keep — 잘된 것):
___________________________________

P (Problem — 막힌 것):
___________________________________

T (Try — 다음 회차에 시도할 것):
___________________________________

오늘 GitHub에 남긴 흔적 (URL 1개):
___________________________________

다음 회차 들어올 때 챙겨올 것:
___________________________________
```

### 슬라이드 S6 — 다음 회차로의 전이 + 핵심 메시지 재노출

```text
[H1] 오늘 우리는 AI를 "도구"로 썼다.
     다음 주에는 AI를 "협업자로 조직한다."

5회차 (5/28 목): AI 멀티 에이전트로 오픈소스 프로젝트 개발하기
- Planner / Coder / Reviewer / Tester / Documenter — 5역할 분리
- MCP·A2A 깊이 — 오늘 한 줄 정의가 코드와 만난다
- 안전 장치 4종 (hallucination / 보안 / 라이선스 / 의존성)
- 발표 초안 5분 시간 측정 시작

[H1] (샌드위치 — 도입과 동일)
AI는 코드를 대신 써주는 도구가 아니라,
오픈소스 기여의 진입장벽을 낮춰주는 기여 보조 시스템이다.
```

오늘은 한 명의 AI를 도구로 썼다. 분석에 한 번, 재현에 한 번, 구현에 한 번, 본문 작성에 한 번, 문서화에 한 번. 다음 주에는 그 한 명을 다섯 역할로 쪼갠다. Planner는 일을 분해하고, Coder는 짜고, Reviewer는 다른 관점에서 보고, Tester는 테스트를 만들고, Documenter는 문서를 쓴다.

그러려면 오늘 만든 PR draft 1개와 AI 사용 로그가 베이스라인이 되어야 한다.

---

## 11. 멘토링 약속 카드 (4회차→5회차)

```text
[팀명] ___________________
회차 4 → 5 약속

다음 회차 시작 전까지 우리는 다음을 한다:

1. (필수) PR draft → "Ready for review" 전환
   - A트랙: 외부 메인테이너 리뷰 요청 또는 응답 추적
   - B트랙: 팀 내부 리뷰 1명 이상 + main 머지 시도

2. (강력 권장) AI 사용 로그를 PR description 외에도
   docs/ai_logs/회차4.md 에 누적 기록

3. (선택) RAG / MCP / A2A 1차 출처 [9][10][11] 중 1개 더 깊이 읽기
   - 5회차 멀티 에이전트 실습이 가벼워진다

차단 요인 (있다면): _________________________________

멘토에게 비동기로 도움받을 채널: ☐ GitHub Discussions ☐ 단톡방 ☐ 1:1 DM

작성자: __________ 멘토 사인: __________ 일자: 2026-05-21
```

본 양식 1장은 팀 저장소 `docs/mentoring/회차4_약속.md` 로 누적 보관한다.

---

## 12. 사후 과제 (5/22 ~ 5/27, 다음 회차 전)

분량은 학생 1인 기준 60~120분, 팀 기준 2~3시간 분산이다.

### 12.1 필수 과제

1. **PR draft → "Ready for review" 전환**
   분량: 30분.
   산출물: PR URL을 멘토 채널에 공유.

2. **AI 사용 로그를 `docs/ai_logs/회차4.md` 에 누적 정리**
   분량: 20분.
   산출물: 파일 1개 푸시.

3. **A트랙만: 외부 메인테이너 응답 추적**
   분량: 24시간마다 1번 확인.
   산출물: 로그 1줄/일.

4. **RAG/MCP/A2A 한 줄 정의를 팀 저장소 `docs/glossary.md` 로 정리**
   분량: 15분.
   산출물: 파일 1개 푸시.

### 12.2 강력 권장 과제

5. **5회차 사전 학습 — Claude Code sub-agents 또는 CrewAI quickstart 1개**
   분량: 30분.
   산출물: 메모 1쪽.

6. **MCP 레퍼런스 서버 1개 띄우기 (filesystem 권장)**
   분량: 30분.
   산출물: 캡처 1장.

7. **같은 팀의 다른 PR에 1줄 리뷰 코멘트 1개**
   분량: 10분.
   산출물: 코멘트 URL.

### 12.3 선택 과제

8. **RAG 원논문 abstract + 1번째 섹션 정독**
   분량: 30분.
   산출물: 1쪽 메모.

9. **A2A Codelab — Purchasing Concierge 한 단계**
   분량: 60분.
   산출물: 캡처.

10. **본인이 평소 쓰는 OSS의 PR 템플릿에 AI 사용 로그 필드 추가 PR 시도**
    분량: 60분.
    산출물: PR URL.

### 12.4 사후 과제용 슬랙/Discussions 헬프 채널

- GitHub Discussions `ai-help` 카테고리 사용 — 막히면 24시간 내 답변
- 단톡방은 "공지 + 시급한 차단" 전용
- 21:00~21:30 강의 종료 후 보충 슬롯에서 1:1 가능

---

## 13. AI 도구별 권장 프롬프트 카탈로그

### 13.1 단계 1 — 이슈 분석

#### Claude (claude.ai 웹 챗) — 긴 컨텍스트 강점

```text
너는 오픈소스 기여 보조다. 다음 이슈를 분석해줘.

저장소: <owner/repo>
이슈 번호: #<NN>
이슈 본문 (전체):
"""
<이슈 본문 그대로 붙여넣기>
"""

CONTRIBUTING.md 핵심 (있다면):
"""
<CONTRIBUTING.md 본문 또는 요약>
"""

답:
1. 이슈가 요청하는 변경 한 문장
2. 영향 줄 가능성 큰 파일/디렉토리 (확실치 않으면 "추정")
3. 이미 PR이 연결됐는지 확인 권장 사항
4. 이 종류 기여의 정형 절차가 CONTRIBUTING에 있는지

조건: 추측 명시. 확실치 않으면 "확실치 않음".
```

#### GitHub Copilot Chat (VS Code) — IDE 안에서 빠르게

```text
@workspace 이슈 #<NN> 분석:
- 영향 받을 파일 추정
- 비슷한 패턴이 코드베이스에 있나?
- 추가할 테스트 종류
조건: 추측엔 "추정" 표시.
```

#### Claude Code (CLI) — 저장소 전체 컨텍스트

```bash
claude
> 이 저장소를 처음 본다고 가정. 핵심 모듈 3개와 good-first-issue 라벨에서 첫 PR로 좋은 이슈 1개 추천. 추측엔 "추정" 표기.
```

#### Cursor — 멀티파일 컨텍스트

```text
@codebase 이슈 #<NN> 의 acceptance criteria 를 만족하려면
어떤 파일을 수정해야 하나? 각 파일의 변경 라인 추정.
```

### 13.2 단계 2 — 재현

#### Claude

```text
이슈 #<NN>을 재현하는 최소 코드를 작성해줘.
환경: <Python 3.11 / Node 20 / Rust stable / 본인 환경>
실행 방법도 함께. 본인이 직접 실행해 검증할 거다.

조건: 재현이 환경 의존이면 어떤 환경 변수가 영향 주는지 명시.
```

#### Aider (CLI, git-aware) — 자동 재현·패치 흐름

```bash
aider --message "이슈 #<NN> 재현 코드 + 가능하면 fix 시도. 단, 사람이 검증할 거니 일단 draft 패치만."
```

### 13.3 단계 3 — 수정 범위 산정

#### 어떤 도구든 — 직접 grep/rg 결과를 같이 주기

```bash
# 사람이 먼저
rg "변경할_함수명" --type rust > /tmp/scope.txt
git grep "변경할_함수명" >> /tmp/scope.txt
```

```text
# 그 다음 AI에게
다음 grep 결과를 보고 변경할 범위를 산정해줘.

grep 결과:
"""
<scope.txt 내용>
"""

이 중 실제로 수정해야 할 곳과 그대로 둘 곳을 분리해줘.
조건: 모르겠으면 "확실치 않음".
```

### 13.4 단계 4 — PR 본문 작성

#### Claude / Copilot — diff 기반

```text
다음 git diff 를 보고 PR 본문을 작성해줘.

diff:
"""
<git diff main..HEAD 출력>
"""

형식:
## What
## Why  (이슈 #NN 링크)
## How (핵심 파일/함수)
## Verification (테스트 명령어 + 결과)
## AI 사용 로그 (단계별 목록)

조건: diff에 없는 변경은 본문에도 적지 말 것.
PR 본문은 30초 안에 읽힐 수 있게 짧게.
```

#### Claude Code — 자동 PR 생성

```bash
# Claude Code 안에서
> 방금 만든 변경으로 PR 본문을 작성하고 gh pr create --draft 까지 실행해줘.
> 단, AI 사용 로그는 비워두고 사람이 채울 칸으로 둬.
```

### 13.5 단계 5 — 리뷰 대응

```text
# Claude / Copilot 프롬프트

리뷰어 코멘트 (원문):
"""
<리뷰어가 단 코멘트 그대로>
"""

내가 짠 코드 (관련 파일):
"""
<코드 붙여넣기>
"""

질문:
1. 리뷰어가 진짜로 우려하는 게 뭔가?
2. 그에 답할 한 줄 답변 초안 (짧게)
3. 코드를 바꿔야 한다면 어떤 패치?

조건: "thanks for the review!" 같은 영혼 없는 답 만들지 말 것.
리뷰어 의도를 다시 묻는 게 더 나으면 그렇게 답할 것.
```

---

## 14. 외래어 용어 통일

> 외래어 표기 원칙: 첫 등장 시 한국어/영어를 병기하고, 이후 표기를 일관되게 유지한다.

- **오픈소스 / Open Source**: 첫 등장 §1. 이후 "오픈소스".
- **저장소 / Repository**: 첫 등장 §1.2. 이후 "저장소".
- **풀 리퀘스트 / Pull Request**: 첫 등장 §2. 이후 "PR".
- **이슈 / Issue**: 첫 등장 §2. 이후 "Issue" 또는 "이슈" 혼용.
- **브랜치 / Branch**: 첫 등장 §6. 이후 "브랜치".
- **커밋 / Commit**: 첫 등장 §6. 이후 "커밋".
- **머지 / Merge**: 첫 등장 §6. 이후 "머지".
- **포크 / Fork**: 첫 등장 §6.1. 이후 "포크".
- **리뷰 / Review**: 첫 등장 §5. 이후 "리뷰".
- **라이선스 / License**: 첫 등장 §5. 이후 "라이선스".
- **메인테이너 / Maintainer**: 첫 등장 §5. 이후 "메인테이너".
- **에이전트 / Agent**: 첫 등장 §7. 이후 "에이전트".
- **프롬프트 / Prompt**: 첫 등장 §4. 이후 "프롬프트".
- **환각 / Hallucination**: 첫 등장 시 "환각 (hallucination)"으로 쓰고 이후 "환각".
- **의존성 / Dependency**: 첫 등장 §12. 이후 "의존성".
- **모델 가중치 / Model Weights**: 3회차에서 이월된 표현. 이후 "weights" 영어 표기를 허용한다.

---

## 15. 인용 출처

### 15.1 1차 출처

- **[1] Octoverse: A new developer joins GitHub every second...**
  발행처: The GitHub Blog.
  발행일: 2025-10-28.
  URL: https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
  사용처: 직전 전이 선택 인용.

- **[2] About pull requests**
  발행처: GitHub Docs.
  발행일: live (조회: 2026-05-21).
  URL: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  사용처: PR draft, PR 템플릿.

- **[9] Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks**
  발행처: arXiv (Lewis, Perez, Piktus et al.).
  발행일: 2020-05-22.
  URL: https://arxiv.org/abs/2005.11401
  사용처: RAG 한 줄 정의.

- **[10] Model Context Protocol — Specification**
  발행처: modelcontextprotocol.io.
  발행일: 2025-11-25.
  URL: https://modelcontextprotocol.io/specification/2025-11-25
  사용처: MCP 한 줄 정의.

- **[10-루트] Model Context Protocol — Introduction**
  발행처: modelcontextprotocol.io.
  발행일: live.
  URL: https://modelcontextprotocol.io/
  사용처: 사전 학습.

- **[11] Agent2Agent (A2A) Protocol Specification**
  발행처: Linux Foundation (구 Google A2A).
  발행일: v1.0.0-rc.
  URL: https://a2a-protocol.org/latest/specification/
  사용처: A2A 한 줄 정의.

- **[11-루트] Agent2Agent (A2A) Protocol — Home**
  발행처: a2a-protocol.org.
  발행일: live.
  URL: https://a2a-protocol.org/latest/
  사용처: 사전 학습.

### 15.2 보조 출처

- **Claude Code Documentation**
  발행처: docs.claude.com.
  URL: https://docs.claude.com/en/docs/claude-code
  사용처: 사전 학습, 본격 PR 실습.

- **GitHub Copilot Documentation**
  발행처: GitHub Docs.
  URL: https://docs.github.com/en/copilot
  사용처: 사전 학습, README/changelog 보강.

- **MCP Quickstart for server developers**
  발행처: modelcontextprotocol.io.
  URL: https://modelcontextprotocol.io/quickstart/server
  사용처: 사후 과제.

- **Getting Started with A2A — Purchasing Concierge**
  발행처: Google Codelabs.
  URL: https://codelabs.developers.google.com/intro-a2a-purchasing-concierge
  사용처: 선택 과제.

- **Octoverse 2025**
  발행처: GitHub.
  URL: https://octoverse.github.com/
  사용처: 직전 전이 선택 인용.

### 15.3 사례 저장소

- **langchain-ai/langchain** — MIT. 백업 도입 훅 후보.
- **run-llama/llama_index** — MIT. RAG 1차 사례 선택 노출.
- **continuedev/continue** — Apache-2.0. 도입 훅 후보, A트랙 후보.
- **aider-AI/aider** — Apache-2.0. 도입 훅 후보, A트랙 후보.
- **OpenInterpreter/open-interpreter** — AGPL-3.0. 라이선스 주의 사례.
- **huggingface/transformers (docs/)** — Apache-2.0. 도입 훅 백업, A트랙 후보.
- **astral-sh/ruff** — MIT. 도입 훅 1순위, A트랙 후보.
- **firstcontributions/first-contributions** — MIT. A트랙 부드러운 첫 PR 후보.

### 15.4 한국 OSS 후보

- **toss/slash** — MIT. 한국어 친화 후보.
- **daangn/seed-design** — Apache-2.0. 한국어 친화 후보.
- **kakao/khaiii** — Apache-2.0. 한국어 친화 후보.

### 15.5 AI 도구 카탈로그

- **Claude Code (CLI)**: 4·5회차 저장소 분석, sub-agent에 권장. 무료 티어 + 학생 크레딧 활용.
- **GitHub Copilot Free**: 1·2회차 PR 본문, 자동완성에 활용. 월 채팅 50회 + 자동완성 2000회.
- **Cursor**: 4회차 멀티파일 편집에 활용. 무료 티어.
- **Continue.dev (OSS)**: 5회차 BYOM 실험에 활용. OSS 무료.
- **Aider (OSS CLI)**: 5회차 CLI 자동화에 활용. OSS 무료, API 비용 별도.
- **Gemini Code Assist**: 자유 선택 도구. 무료 개인 티어.

도구 선택의 한 문장 결론: 품질·자율성 = Claude Code, IDE 일체형 = Cursor, 비용효율 = Copilot Free, BYOM·OSS = Continue/Aider. 학생은 무료 티어부터 시작한다.

---

## 16. 회차 종료 — 학생이 GitHub에 남긴 흔적 (체크리스트)

이 체크리스트는 학생이 21:30 강의 종료 시점에 본인 GitHub 활동 그래프에 무엇이 남았는지 자기 점검하는 용도다.

### 16.1 학생 개인 흔적

- [ ] 팀 저장소에 본인 commit 1개 이상 추가 (4회차 작업 분량)
- [ ] PR draft 1개 (본인 또는 팀이 만든 것) 에 본인 코멘트 1줄 이상
- [ ] 본인 GitHub 활동 그래프에 5/21 점이 찍혀 있다 (commit 또는 PR 활동)

### 16.2 팀 흔적

- [ ] 팀 저장소에 새 PR draft 1개 (외부 또는 자체) URL 존재
- [ ] PR description 안에 AI 사용 로그가 5단계 모두 채워짐
- [ ] 테스트·문서·리뷰 체크리스트가 PR description 또는 `.github/` 안에 있음
- [ ] `docs/glossary.md` 또는 동등 위치에 RAG/MCP/A2A 한 줄 정의 노트
- [ ] `docs/mentoring/회차4_약속.md` 가 멘토 사인 후 푸시됨

### 16.3 다음 회차에 들어올 때 챙겨야 할 것

- [ ] PR draft URL (멘토에게 공유)
- [ ] AI 사용 로그가 비어있지 않은 상태
- [ ] A트랙: 외부 메인테이너 응답 추적 로그 1줄/일
- [ ] 5회차 사전 학습 — Claude Code sub-agents 또는 CrewAI 1개 훑기

---

## 17. 회차 마무리 — 핵심 메시지 (샌드위치 닫기)

> **AI는 코드를 대신 써주는 도구가 아니라, 오픈소스 기여의 진입장벽을 낮춰주는 기여 보조 시스템이다.**
>
> 오늘 너희가 만든 PR draft 1개와 그 안의 AI 사용 로그는 — 6주 후 6회차 발표에서 "AI를 어떻게 활용했고 사람이 무엇을 검증했는가" 항목의 1차 증거가 된다.
>
> 다음 주에 만나자. 한 명의 AI를 다섯 명으로 쪼개는 시간이다.
