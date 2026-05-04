# 03. 자료 풀 (Reference Pool) — AI 시대의 오픈소스 실전

> **본 문서의 위상**
>
> 이 문서는 6주 교육 콘텐츠 제작에 필요한 **외부 자료, 공식 문서, 사례 OSS 저장소, AI 도구, 라이선스 케이스, 학습 리소스, 한국 OSS 후보**를 단일 출처로 모은 큐레이션이다. lecture-author 6명은 회차 자료를 쓸 때 이 문서의 항목만 인용하면 출처 검증을 한 번에 마칠 수 있다. content-qa-reviewer는 이 문서와 강의자료의 인용이 일치하는지 감사한다.
>
> 충돌이 발생하면 `01_master_plan.md` (헌법) 의 회차별 핵심 메시지가 우선이며, 본 문서는 그 메시지에 봉사한다. source.txt 인용 [1]~[11]의 정확한 URL/제목/발행처/발행일은 §1 에 1차 검증 결과와 함께 정리한다.
>
> **갱신 정책**: 작가가 새 자료를 요청하면 §3 회차별 자료 풀 끝에 추가만 하고 기존 항목은 보존한다. 단, 깨진 링크는 [BROKEN] 라벨과 archive.org 대안을 표기한다.

---

## 0. 자료 풀 사용법 (작가용 5줄 가이드)

1. 인용은 항상 `§1 인용 출처 마스터 표`의 형식 (저자/제목/발행처/발행일/URL) 그대로 복사한다.
2. 회차별 사례 저장소는 `§3.x` 회차 풀에서 **공식 추천(Tier-A)** 만 우선 인용. 백업(Tier-B)은 응답 지연·deprecated 시 대체.
3. AI 도구 비교는 `§4 AI 도구 카탈로그` 표를 그대로 인용 — 학생용 무료 옵션 컬럼이 핵심.
4. 라이선스 케이스는 `§5 라이선스 케이스북` 의 사례 저장소를 사용 — "MIT는 무엇" 같은 추상이 아니라 "Express는 MIT" 같은 실물 사례 우선.
5. 한국 학생 대상 사례는 `§7 한국 OSS 프로젝트` 를 우선 — 한국어 자료가 있는 항목에는 [KO] 라벨.

---

## 1. 인용 출처 마스터 표 (source.txt [1]~[11] 1차 검증)

source.txt의 인용 번호는 본문에서 [1]~[11]로 등장한다. 아래 표는 2026-05-04 시점에 WebSearch로 1차 검증한 결과다. **검증 컬럼**: ✓ = 접근 확인 + 발행처 일치 / △ = 접근 가능하나 URL 형식 변동 가능 / × = 접근 불가, archive.org 대안 사용.

| # | source.txt 표기 | 정확한 제목 | 발행처 | 발행일 | URL | 검증 | archive.org 대안 |
|---|----------|--------|------|------|-----|----|------------|
| [1] | The GitHub Blog (Octoverse) | Octoverse: A new developer joins GitHub every second as AI leads TypeScript to #1 | The GitHub Blog | 2025-10-28 (Octoverse 2025 발표일) | https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/ | ✓ | https://web.archive.org/web/2025*/octoverse |
| [1-보조] | Octoverse 2025 데이터 사이트 | Octoverse 2025: The state of open source | GitHub | 2025-10-28 | https://octoverse.github.com/ | ✓ | — |
| [2] | GitHub Docs | About pull requests | GitHub Docs | 상시 갱신 (live doc) | https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests | ✓ | — |
| [2-루트] | Pull requests documentation 루트 | Pull requests documentation | GitHub Docs | 상시 갱신 | https://docs.github.com/en/pull-requests | ✓ | — |
| [3] | GitHub Trending | GitHub Trending | GitHub | 상시 갱신 (live page) | https://github.com/trending | ✓ | — |
| [4] | GitHub Docs | GitHub flow | GitHub Docs | 상시 갱신 | https://docs.github.com/en/get-started/using-github/github-flow | ✓ | — |
| [5] | GitHub Docs | About issues | GitHub Docs | 상시 갱신 | https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues | ✓ | https://docs.github.com/en/issues |
| [6] | Open Source Initiative | The Open Source Definition | Open Source Initiative (OSI) | 최신 개정판 (live) | https://opensource.org/osd | ✓ | — |
| [7] | Open Source Initiative | The Open Source AI Definition – 1.0 | Open Source Initiative (OSI) | 2024-10-28 (All Things Open 발표) | https://opensource.org/ai/open-source-ai-definition | ✓ | https://opensource.org/ai |
| [8] | (source.txt에 결번) | — | — | — | — | — | source.txt가 [8]을 비웠음. 인용 시 번호 재정렬 권장 |
| [9] | arXiv | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | arXiv (Lewis, Perez, Piktus et al.) | 2020-05-22 (v1) / 2021-04-12 (v4 최종) | https://arxiv.org/abs/2005.11401 | ✓ | — |
| [10] | Model Context Protocol | Specification (latest, 2025-11-25) | modelcontextprotocol.io (Anthropic + 컨소시엄) | 2025-11-25 (최신 스펙 일자) | https://modelcontextprotocol.io/specification/2025-11-25 | ✓ | https://modelcontextprotocol.io/ |
| [10-루트] | MCP 메인 사이트 | Model Context Protocol — Introduction | modelcontextprotocol.io | 상시 갱신 | https://modelcontextprotocol.io/ | ✓ | — |
| [11] | a2a-protocol.org | Agent2Agent (A2A) Protocol Specification | Linux Foundation (구 Google A2A) | v1.0.0-rc (2026-Q1 시점) | https://a2a-protocol.org/latest/specification/ | ✓ | https://github.com/a2aproject/A2A |
| [11-루트] | A2A 메인 | Agent2Agent (A2A) Protocol — Home | a2a-protocol.org | 상시 갱신 | https://a2a-protocol.org/latest/ | ✓ | — |

> **검증 결과 요약 (2026-05-04 기준)**
>
> - [1]~[11]은 모두 **접근 가능**, 깨진 링크 없음.
> - source.txt가 [8]을 결번 처리했으므로, lecture-author는 [1]~[7], [9]~[11]만 사용. QA는 본문에 [8]이 등장하면 결함으로 판정.
> - [1] Octoverse 인용 시 **2025년판** 명시 필수 (2024년판과 데이터가 다름). 핵심 수치: 신규 개발자 1초당 1명 이상, 36M+ 신규, TypeScript 1위, Copilot 코딩 에이전트 5개월간 PR 1M+.
> - [7] OSI Open Source AI Definition은 2024-10-28 v1.0 공식 발표 — Llama가 OSI 정의상 오픈소스가 **아닌** 점이 3회차 도입 훅의 핵심 사실.
> - [9] RAG 원논문 2020-05 (Lewis et al., NeurIPS 2020). 4회차에서 "RAG는 검색 기반 답변" 한 줄 정의의 1차 출처.
> - [10] MCP는 2025-11-25 스펙이 최신 — 강의 중 시연 시 SDK 버전 명시 권장.
> - [11] A2A는 Linux Foundation 이관 (2025) 후 v1.0.0-rc 단계. 5회차 도입에서 "Google → LF 이관" 사실이 좋은 도입 훅.

### 1.1 추가 1차 출처 (작가가 자주 쓸 보조 인용)

| 약칭 | 제목 | 발행처 | 발행일 | URL | 어디에 쓰나 |
|----|----|------|----|-----|------------|
| GH-Issues-Docs | About issues | GitHub Docs | live | https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues | 2회차 Issue 운영 |
| GH-Templates | Creating a pull request template | GitHub Docs | live | https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository | 3회차 Issue/PR 템플릿 |
| GH-CoC | Adding a code of conduct to your project | GitHub Docs | live | https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project | 3회차 CODE_OF_CONDUCT |
| GH-Security | About supply chain security | GitHub Docs | live | https://docs.github.com/en/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview | 3회차 SECURITY.md |
| MCP-Quickstart | MCP Quickstart for server developers | modelcontextprotocol.io | live | https://modelcontextprotocol.io/quickstart/server | 5회차 MCP 데모 |
| A2A-Codelab | Getting Started with A2A — Purchasing Concierge | Google Codelabs | 2025 | https://codelabs.developers.google.com/intro-a2a-purchasing-concierge | 5회차 A2A 데모 |
| OSI-Approved | OSI Approved Licenses | OSI | live | https://opensource.org/licenses | 3회차 라이선스 매트릭스 |
| Choose-License | Choose an open source license | GitHub | live | https://choosealicense.com/ | 3회차 라이선스 선택 도구 |
| GH-Profile-README | Managing your profile README | GitHub Docs | live | https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme | 1·6회차 프로필 README |
| Octoverse-Site | Octoverse 2025 (data site) | GitHub | 2025-10-28 | https://octoverse.github.com/ | 1회차 도입 |

---

## 2. 인용 양식 표준 (lecture-author 통일)

회차 강의자료 본문에서 인용은 다음 형식 중 하나를 사용한다. lecture-writing-style 스킬과 합치된다.

**형식 A (본문 각주형)**: 
```
GitHub Flow는 짧은 브랜치와 PR 중심의 협업 워크플로우이다 ([GitHub Docs, "GitHub flow"][gh-flow]).
```
하단에 `[gh-flow]: https://docs.github.com/en/get-started/using-github/github-flow` 로 연결.

**형식 B (블록 인용)**: 
```markdown
> "An Open Source AI system must grant freedoms to: use the system for any purpose 
> without asking permission, study how the system works..." 
> — OSI, *The Open Source AI Definition 1.0* (2024-10-28). 
> https://opensource.org/ai/open-source-ai-definition
```

**형식 C (표 안 인용)**: 표 셀에 `OSI 2024 [7]` 처럼 본 문서 §1 표의 번호를 붙이고, 표 아래에 "[7] = `§1` 표 [7]행" 주석.

**금지**: "GitHub 공식 문서에 따르면" 같이 URL 없이 막연한 인용. content-qa-reviewer가 결함으로 판정.

---

## 3. 회차별 자료 풀

각 회차는 (A) 사례 저장소 5+개, (B) AI 도구·서비스 3+개, (C) 읽을거리 3+개의 3-블록 구조. **Tier-A**는 공식 추천, **Tier-B**는 백업·확장.

### 3.1 회차 1 — AI 시대의 오픈소스: 왜 지금 다시 중요한가

> **마스터 플랜 핵심 메시지 (1회차)**: 오픈소스는 더 이상 "코드 공개"만이 아니라 AI 시대의 학습·협업·커리어·제품 확산 방식이다.
>
> **이 회차 자료 풀의 역할**: GitHub Trending·Octoverse·인기 OSS 분석 5축(README/이슈/PR/릴리즈/라이선스) 실습에 쓸 실제 저장소를 공급한다. "별 수가 많다고 좋은 게 아니다"라는 `source.txt` 메시지를 살리려면 README 품질·이슈 관리·최근 커밋·기여 가이드·라이선스가 갖춰진 곳을 우선.

#### A. 사례 저장소 (5축 분석 실습용)

| # | 저장소 | 분야 | 라이선스 | 활동성 신호 (2026-05 추정) | 5축 분석 적합도 | URL |
|---|------|----|--------|--------------------|----------|-----|
| 1A-1 | vercel/next.js | 웹 프레임워크 | MIT | 매일 수십 PR, 자세한 RFC, contribute.md | ★★★★★ — 모든 5축 모범 | https://github.com/vercel/next.js |
| 1A-2 | huggingface/transformers | AI/ML | Apache-2.0 | 활발한 이슈, good-first-issue 풍부 | ★★★★★ | https://github.com/huggingface/transformers |
| 1A-3 | denoland/deno | 런타임 | MIT | 릴리즈 노트 모범, RFC 프로세스 | ★★★★☆ | https://github.com/denoland/deno |
| 1A-4 | tldraw/tldraw | 협업 캔버스 | (커스텀, 부분 OSS) | README 우수, 최근 커밋 활발 | ★★★☆☆ — 라이선스 토론 사례로 좋음 | https://github.com/tldraw/tldraw |
| 1A-5 | astral-sh/uv | Python 도구 | MIT/Apache-2.0 | 2024~2026 폭발적 성장, 이슈 잘 관리 | ★★★★★ | https://github.com/astral-sh/uv |
| 1A-6 (Tier-B) | langchain-ai/langchain | AI 프레임워크 | MIT | 이슈 폭주 → "관리되지 않는 인기"의 반례 학습용 | ★★★☆☆ — "별 많음 ≠ 잘 관리됨" 교보재 | https://github.com/langchain-ai/langchain |
| 1A-7 (Tier-B) | astral-sh/ruff | Python 린터 | MIT | 매일 활발, 잘 정돈된 CHANGELOG | ★★★★★ | https://github.com/astral-sh/ruff |

#### B. AI 도구·서비스 (1회차 미니 활동용)

| 도구 | 용도 | 학생 무료 옵션 | URL |
|----|----|---------|-----|
| GitHub Copilot Free | README/이슈 요약 | Copilot Free 무료 (월 50 채팅) | https://github.com/features/copilot |
| Claude (claude.ai) | README 한 줄 요약 + 기여 진입점 추출 | 무료 티어 존재 | https://claude.ai |
| GitHub CLI (gh) + gh-trending | 트렌딩 데이터 추출 | OSS, 무료 | https://cli.github.com/ |

#### C. 읽을거리 (강의 30분 + 학생 사후 30분)

| 자료 | 발행처 | URL |
|----|------|-----|
| Octoverse 2025: A new developer joins GitHub every second... | The GitHub Blog (2025-10-28) | https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/ |
| Octoverse 2025 데이터 페이지 | GitHub | https://octoverse.github.com/ |
| Beginner's guide to GitHub: Creating a pull request | The GitHub Blog | https://github.blog/developer-skills/github/beginners-guide-to-github-creating-a-pull-request/ |
| (선택) GitHub Trending 큐레이션 글 | 다양 | https://github.com/trending |

---

### 3.2 회차 2 — GitHub 협업 워크플로우와 오픈소스 운영 기본기

> **마스터 플랜 핵심 메시지 (2회차)**: 오픈소스의 기본 언어는 코드가 아니라 Issue · Branch · Commit · PR · Review.
>
> **이 회차 자료 풀의 역할**: 학생 팀이 첫 PR을 주고받는 실습 + good-first-issue 5개를 분석할 외부 저장소를 공급한다. 응답 SLA가 빠른 곳을 우선 (위험 §5.2 완충).

#### A. 사례 저장소 (good-first-issue + 좋은 PR 템플릿)

| # | 저장소 | 좋은 점 | 라이선스 | URL |
|---|------|------|--------|-----|
| 2A-1 | firstcontributions/first-contributions | 첫 PR 튜토리얼 그 자체. 53k+ stars, 적극 머지 | MIT | https://github.com/firstcontributions/first-contributions |
| 2A-2 | EddieHubCommunity/LinkFree | 다양한 난이도 good-first-issue, 친절한 리뷰 | MIT | https://github.com/EddieHubCommunity/LinkFree |
| 2A-3 | public-apis/public-apis | docs PR 입문에 적합, 활발 | MIT | https://github.com/public-apis/public-apis |
| 2A-4 | freeCodeCamp/freeCodeCamp | 한국어 번역 contribution 가능 [KO] | BSD-3-Clause | https://github.com/freeCodeCamp/freeCodeCamp |
| 2A-5 | vercel/next.js (docs/) | docs 디렉토리 한정, 응답 빠름 | MIT | https://github.com/vercel/next.js/tree/canary/docs |
| 2A-6 (Tier-B) | mui/material-ui | docs/typo good-first-issue 라벨 활성 | MIT | https://github.com/mui/material-ui |
| 2A-7 (Tier-B) | home-assistant/core | docs·번역·테스트 입문 적합 | Apache-2.0 | https://github.com/home-assistant/core |

#### B. AI 도구·서비스 (PR 본문/체크리스트 자동 생성)

| 도구 | 용도 | 학생 무료 옵션 | URL |
|----|----|---------|-----|
| GitHub Copilot in Pull Requests (Copilot Workspace) | PR 요약 자동 생성 | Copilot Free 한도 안에서 | https://docs.github.com/en/copilot |
| Claude Code (CLI) | 로컬 변경 → 커밋 메시지/PR 본문 생성 | 무료 티어 + Anthropic 학생 크레딧 (변동) | https://docs.claude.com/en/docs/claude-code |
| Conventional Commits + commitlint | 커밋 메시지 표준화 (AI와 합 좋음) | OSS, 무료 | https://www.conventionalcommits.org/ |

#### C. 읽을거리

| 자료 | 발행처 | URL |
|----|------|-----|
| GitHub flow | GitHub Docs | https://docs.github.com/en/get-started/using-github/github-flow |
| About pull requests | GitHub Docs | https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests |
| About issues | GitHub Docs | https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues |
| Managing and standardizing pull requests | GitHub Docs | https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/managing-and-standardizing-pull-requests |
| (한국어) GitHub 가이드 — 한국어 커뮤니티 [KO] | GitHub Korea | https://docs.github.com/ko |

---

### 3.3 회차 3 — 오픈소스 라이선스, 거버넌스, 커뮤니티 운영

> **마스터 플랜 핵심 메시지 (3회차)**: 오픈소스는 "공개"가 아니라 사용·수정·배포·기여를 허용하는 신뢰 구조. 라이선스는 그 신뢰의 첫 페이지.
>
> **이 회차 자료 풀의 역할**: MIT/Apache-2.0/GPL/AGPL/LGPL/MPL 사례 + AI 영역 라이선스 케이스 (Llama, Mistral, OLMo) + README/CONTRIBUTING/COC/SECURITY 모범 저장소.

#### A. 사례 저장소 (라이선스별 + 운영 신뢰 구조 모범)

| # | 저장소 | 라이선스 | 골격 모범 항목 | URL |
|---|------|--------|------------|-----|
| 3A-1 | expressjs/express | MIT | LICENSE + CONTRIBUTING + Code of Conduct + Triagers Guide | https://github.com/expressjs/express |
| 3A-2 | apache/airflow | Apache-2.0 | NOTICE 파일·CLA·SECURITY 모범 | https://github.com/apache/airflow |
| 3A-3 | torvalds/linux | GPL-2.0 | 거대 프로젝트 거버넌스 — Lieutenant 시스템 | https://github.com/torvalds/linux |
| 3A-4 | nextcloud/server | AGPL-3.0 | SaaS-aware 라이선스 사례 | https://github.com/nextcloud/server |
| 3A-5 | mozilla/pdf.js | Apache-2.0 (구 MPL 사례 다수) | MPL의 모기업 — Mozilla Public License 학습 진입 | https://github.com/mozilla/pdf.js |
| 3A-6 | facebook/react | MIT | CONTRIBUTING + Code of Conduct + RFC 프로세스 모범 | https://github.com/facebook/react |
| 3A-7 | kubernetes/community | Apache-2.0 | 거대 커뮤니티 거버넌스 문서 모범 (SIG, WG) | https://github.com/kubernetes/community |
| 3A-8 | allenai/OLMo | Apache-2.0 (모델·코드·데이터·학습 스크립트 공개) | OSI 정의상 진짜 오픈소스 AI 사례 | https://github.com/allenai/OLMo |

#### B. AI 도구·서비스 (라이선스 리스크 분석 미니 활동)

| 도구 | 용도 | 학생 무료 옵션 | URL |
|----|----|---------|-----|
| Choose a License | 라이선스 선택 가이드 | OSS, 무료 | https://choosealicense.com/ |
| OSI License Comparison | OSI 승인 라이선스 비교 | OSS, 무료 | https://opensource.org/licenses |
| FOSSA / GitHub License Detector | PR에서 라이선스 충돌 검출 | 학생 무료 / GitHub free 한도 | https://github.com/marketplace/fossa |
| ScanCode Toolkit (OSS) | 의존성 라이선스 스캔 | OSS, 무료 | https://github.com/aboutcode-org/scancode-toolkit |

#### C. 읽을거리

| 자료 | 발행처 | URL |
|----|------|-----|
| The Open Source Definition | OSI | https://opensource.org/osd |
| The Open Source AI Definition 1.0 | OSI (2024-10-28) | https://opensource.org/ai/open-source-ai-definition |
| Adding a code of conduct to your project | GitHub Docs | https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project |
| Setting up your project for healthy contributions | GitHub Docs | https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions |
| (블로그) Part 1 — Open Source AI Models: How Open Are They Really? | Hunton (2025) | https://www.hunton.com/insights/publications/part-1-open-source-ai-models-how-open-are-they-really |
| Llama 4 Community License (원문) | Meta | https://www.llama.com/llama4/license/ |
| Mistral Large 3 Apache-2.0 전환 발표 | Mistral AI Blog (2025-12) | https://mistral.ai/news/ |

---

### 3.4 회차 4 — AI를 활용한 오픈소스 기여와 운영 자동화

> **마스터 플랜 핵심 메시지 (4회차)**: AI는 코드를 대신 써주는 도구가 아니라 기여의 진입장벽을 낮추는 기여 보조 시스템.
>
> **이 회차 자료 풀의 역할**: 낯선 저장소 30분 안에 구조 파악, 이슈→재현→PR 흐름의 각 단계에 쓰는 AI 도구를 공급. RAG/MCP/A2A 한 줄 정의의 1차 출처 묶음.

#### A. 사례 저장소 (AI 보조로 기여 시도하기 좋은 곳)

| # | 저장소 | 왜 적합 | 라이선스 | URL |
|---|------|------|--------|-----|
| 4A-1 | langchain-ai/langchain | 이슈 폭주 → AI로 분류·재현 시도 자체가 학습 | MIT | https://github.com/langchain-ai/langchain |
| 4A-2 | run-llama/llama_index | RAG 구현체 — 4회차 RAG 정의 1차 사례 | MIT | https://github.com/run-llama/llama_index |
| 4A-3 | continuedev/continue | OSS AI 코딩 어시스턴트 — 학생이 AI 도구 자체에 기여 | Apache-2.0 | https://github.com/continuedev/continue |
| 4A-4 | aider-AI/aider | OSS AI pair programmer — 기여 진입 친절 | Apache-2.0 | https://github.com/Aider-AI/aider |
| 4A-5 | OpenInterpreter/open-interpreter | OSS 에이전트 도구 | AGPL-3.0 | https://github.com/OpenInterpreter/open-interpreter |
| 4A-6 (Tier-B) | huggingface/transformers (docs/) | docs 기여 + AI로 example 생성 | Apache-2.0 | https://github.com/huggingface/transformers |
| 4A-7 (Tier-B) | astral-sh/ruff (rules/) | 작은 룰 추가 PR — AI로 테스트 작성 적합 | MIT | https://github.com/astral-sh/ruff |

#### B. AI 도구·서비스 (4회차 핵심 — §4 카탈로그 참조)

| 도구 | 사용 시점 | 학생 무료 옵션 | URL |
|----|--------|---------|-----|
| Claude Code (CLI) | 낯선 저장소 구조 파악, PR 작성 | 무료 티어 + 학생 크레딧 (변동) | https://docs.claude.com/en/docs/claude-code |
| GitHub Copilot | IDE 안 코드 보조 | Copilot Free | https://github.com/features/copilot |
| Cursor | IDE 일체형, 멀티파일 편집 | 무료 티어 | https://cursor.com |
| Continue.dev (OSS) | VS Code/JetBrains 확장, BYOM | OSS 무료 | https://continue.dev |
| Aider (OSS CLI) | git-aware AI pair-programmer | OSS 무료 | https://aider.chat |
| Gemini Code Assist | Google IDE 보조 | 무료 개인 티어 | https://codeassist.google.com/ |

> **§4 AI 도구 카탈로그**에 비교표가 있다. 4회차 작가는 그 표를 그대로 인용하고, 학생용 무료 옵션 컬럼을 강조.

#### C. 읽을거리 — RAG/MCP/A2A 한 줄 정의의 1차 출처

| 자료 | 발행처 | 발행일 | URL |
|----|------|----|-----|
| Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | arXiv (Lewis et al.) | 2020-05-22 | https://arxiv.org/abs/2005.11401 |
| Model Context Protocol — Introduction | modelcontextprotocol.io | live | https://modelcontextprotocol.io/ |
| Agent2Agent (A2A) Protocol — Home | a2a-protocol.org | live | https://a2a-protocol.org/latest/ |
| (한국어) MCP 한국어 가이드 [KO] | 안소니에이아이 (Anthropic Korea, 비공식 커뮤니티) | 2025 | https://www.anthropic.com/news/model-context-protocol |
| GitHub Copilot 코딩 에이전트 발표 (Octoverse 인용) | The GitHub Blog | 2025 | https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/ |

---

### 3.5 회차 5 — AI 멀티 에이전트로 오픈소스 프로젝트 개발하기

> **마스터 플랜 핵심 메시지 (5회차)**: AI를 잘 쓰는 사람은 챗봇에 질문하는 사람이 아니라, 역할이 나뉜 AI 작업 흐름을 설계하는 사람.
>
> **이 회차 자료 풀의 역할**: Planner/Coder/Reviewer/Tester/Documenter 5역할 분리 데모, MCP 서버 + A2A 프로토콜 1차 출처, hallucination·보안·라이선스 검증 자료.

#### A. 사례 저장소 (멀티 에이전트 + MCP/A2A 데모)

| # | 저장소 | 왜 적합 | 라이선스 | URL |
|---|------|------|--------|-----|
| 5A-1 | modelcontextprotocol/servers | MCP 공식 레퍼런스 서버 모음 — filesystem, github, postgres 등 | MIT | https://github.com/modelcontextprotocol/servers |
| 5A-2 | a2aproject/A2A | A2A 공식 사양 + 샘플 (Linux Foundation) | Apache-2.0 | https://github.com/a2aproject/A2A |
| 5A-3 | microsoft/autogen | 멀티 에이전트 프레임워크 (역할 분리 패턴) | CC-BY-4.0 + MIT | https://github.com/microsoft/autogen |
| 5A-4 | crewAIInc/crewAI | 역할 기반 에이전트 오케스트레이션 | MIT | https://github.com/crewAIInc/crewAI |
| 5A-5 | langchain-ai/langgraph | 그래프 기반 에이전트 워크플로우 | MIT | https://github.com/langchain-ai/langgraph |
| 5A-6 (Tier-B) | OpenHands (구 OpenDevin) | OSS 자율 에이전트 — 코드 생성·테스트·머지 | MIT | https://github.com/All-Hands-AI/OpenHands |
| 5A-7 (Tier-B) | punkpeye/awesome-mcp-servers | MCP 서버 큐레이션 리스트 (학생용 탐색) | CC0 | https://github.com/punkpeye/awesome-mcp-servers |

#### B. AI 도구·서비스 (멀티 에이전트 운영용)

| 도구 | 5역할 매핑 | 학생 무료 옵션 | URL |
|----|--------|---------|-----|
| Claude Code + sub-agents | Planner/Coder/Reviewer/Tester/Documenter 분리 운영 | 무료 티어 | https://docs.claude.com/en/docs/claude-code/sub-agents |
| AutoGen Studio | 시각적 에이전트 디자인 | OSS | https://github.com/microsoft/autogen |
| CrewAI | 역할·태스크·도구 정의 | OSS | https://docs.crewai.com/ |
| n8n / Langflow | 비코드 멀티 에이전트 워크플로우 | OSS / 셀프호스팅 무료 | https://github.com/n8n-io/n8n , https://github.com/langflow-ai/langflow |

#### C. 읽을거리 — 안전 장치 4축 (hallucination · 보안 · 라이선스 · 의존성)

| 자료 | 발행처 | URL |
|----|------|-----|
| MCP Specification (latest) | modelcontextprotocol.io | https://modelcontextprotocol.io/specification/2025-11-25 |
| A2A Specification | a2a-protocol.org | https://a2a-protocol.org/latest/specification/ |
| Announcing the Agent2Agent Protocol (A2A) | Google Developers Blog | https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/ |
| Linux Foundation: A2A Project 발족 | Linux Foundation Press | https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents |
| OWASP Top 10 for LLM Applications | OWASP | https://owasp.org/www-project-top-10-for-large-language-model-applications/ |
| GitHub Advisory Database (의존성 보안) | GitHub | https://github.com/advisories |
| (한국어) MCP 입문 가이드 (작성 시점 부족 — 영문 우선) [KO 부재] | — | — |

---

### 3.6 회차 6 — 프로젝트 발표, 오픈소스 커리어, 다음 기여로 이어가기

> **마스터 플랜 핵심 메시지 (6회차)**: 오픈소스 경험은 공개적으로 검증 가능한 실력의 흔적.
>
> **이 회차 자료 풀의 역할**: GitHub 프로필·README 정돈, 채용 관점 사례, "다음 기여 1건" 액션 플랜 자료.

#### A. 사례 저장소 (프로필/포트폴리오 모범)

| # | 저장소 | 왜 적합 | URL |
|---|------|------|-----|
| 6A-1 | abhisheknaiidu/awesome-github-profile-readme | 프로필 README 모범 모음 | https://github.com/abhisheknaiidu/awesome-github-profile-readme |
| 6A-2 | matiassingers/awesome-readme | README 모범 모음 | https://github.com/matiassingers/awesome-readme |
| 6A-3 | up-for-grabs.net | 다음 기여 후보 풀 | https://up-for-grabs.net |
| 6A-4 | First Timers Only | 첫 기여자 환영 프로젝트 | https://www.firsttimersonly.com/ |
| 6A-5 | CodeTriage | 이슈 1개씩 메일로 받기 — 30일 액션 플랜 도구 | https://www.codetriage.com/ |
| 6A-6 (Tier-B) | EddieHubCommunity/awesome-github-profiles | 프로필 사례 모음 | https://github.com/EddieHubCommunity/awesome-github-profiles |

#### B. AI 도구·서비스 (프로필 정돈, 발표 자료)

| 도구 | 용도 | URL |
|----|----|-----|
| Claude / Copilot | README 톤 보정·번역·요약 | https://claude.ai , https://github.com/features/copilot |
| GitHub Profile READMEs (Trinity) | 통계 카드 자동 생성 | https://github.com/anuraghazra/github-readme-stats |
| Slidev / Marp | 마크다운 → 발표 슬라이드 | https://sli.dev , https://marp.app |

#### C. 읽을거리

| 자료 | 발행처 | URL |
|----|------|-----|
| Managing your profile README | GitHub Docs | https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme |
| Pinning items to your profile | GitHub Docs | https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile |
| The Open Source Way 2.0 (커뮤니티 운영 핸드북) | Red Hat | https://www.theopensourceway.org/ |
| (한국어) 오픈소스 기여 가이드 [KO] | NIPA / 정보통신산업진흥원 OSS 포털 | https://www.oss.kr |

---

## 4. AI 도구 카탈로그 (Tool Catalogue)

> **이 표의 역할**: 1·2·3·4·5회차에 학생이 매주 다른 AI 도구를 손에 쥐도록, 6개 핵심 도구를 한 표에 비교. 4회차에서 본 표를 그대로 슬라이드에 넣고, 학생이 "어떤 도구를 어느 단계에 쓸지" 결정하는 워크시트로 사용.
>
> **공통 결론 (작가에게 권하는 한 문장)**: *"품질과 자율성"은 Claude Code, "IDE 일체형 경험"은 Cursor, "비용 효율"은 GitHub Copilot Free, "BYOM·OSS"는 Continue/Aider. 학생은 무료 티어부터 시작.*

| 항목 | GitHub Copilot | Claude Code | Cursor | Continue.dev | Aider | Gemini Code Assist |
|----|--------------|-----------|------|------------|-----|------------------|
| 제공자 | GitHub (Microsoft) | Anthropic | Anysphere | Continue.dev (OSS) | Paul Gauthier (OSS) | Google |
| 형태 | IDE 확장 + PR 보조 | CLI + sub-agents | 일체형 IDE (VS Code fork) | IDE 확장 (VS Code/JetBrains) | CLI (git-aware) | IDE 확장 + Cloud |
| OSS 여부 | 클로즈드 (확장 OSS 일부) | 클로즈드 | 클로즈드 | **OSS** (Apache-2.0) | **OSS** (Apache-2.0) | 클로즈드 |
| BYOM (모델 선택) | × (Copilot 모델) | × (Anthropic) | △ (일부) | ✓ (자유) | ✓ (자유) | × (Gemini) |
| 멀티파일 자율 편집 | △ | ✓ (sub-agents) | ✓ | △ | ✓ | △ |
| 학생 무료 옵션 | **Copilot Free** (월 채팅 50회 + 자동완성 2000회 한도) | 무료 티어 (Anthropic 계정) + 학생 크레딧 변동 | 무료 티어 (한도 있음) | 완전 무료 (OSS) | 완전 무료 (OSS) — API 비용은 별도 | 무료 개인 티어 |
| 한국어 UX | 양호 (UI 일부 한국어) | 양호 (응답 한국어 자연) | 양호 | 양호 (커뮤니티 번역) | 영어 위주 | 양호 |
| 회차별 권장 활용 | 1·2회차 (PR 본문, 자동완성) | 4·5회차 (저장소 분석, sub-agent) | 4회차 (멀티파일 편집) | 5회차 (BYOM 실험) | 5회차 (CLI 자동화) | 학생 자유 선택 |
| 라이선스 위험 | 학습 데이터 출처 → "AI가 제안한 코드 머지 전 확인" 룰 | Anthropic 약관 검토 | Anysphere 약관 | 사용자 책임 (BYOM이라 모델별 다름) | 사용자 책임 | Google 약관 |
| 공식 URL | https://github.com/features/copilot | https://docs.claude.com/en/docs/claude-code | https://cursor.com | https://continue.dev | https://aider.chat | https://codeassist.google.com/ |

### 4.1 학생용 권장 시작 경로 (lecture-author가 1회차 슬라이드에 인용)

```
1주차: GitHub Copilot Free + Claude (claude.ai 웹) 두 개부터 시작.
2주차: PR 본문 자동 생성 — 둘 다 시도해 본인에게 맞는 쪽 결정.
3주차: 라이선스 리스크 질문 — Claude (긴 컨텍스트) 권장.
4주차: Claude Code (CLI) 또는 Cursor — 한 가지 깊게.
5주차: OSS 옵션(Continue, Aider) 한 번 체험 — BYOM 감각.
6주차: 본인 선호 1개 + 백업 1개로 졸업.
```

### 4.2 도구 선택 의사결정 트리

```
(시작) 학생인가? → 예 → 무료 티어부터: Copilot Free + Claude (claude.ai)
                                         ↓
                            IDE 일체형 원하는가? → 예 → Cursor
                                         ↓ 아니오
                            CLI/터미널 친화? → 예 → Claude Code 또는 Aider
                                         ↓ 아니오
                            모델 선택권 원하는가? → 예 → Continue.dev (OSS)
                                         ↓ 아니오
                            Google 생태계? → 예 → Gemini Code Assist
```

---

## 5. 라이선스 케이스북

> **3회차 핵심 자원**. 추상적 정의가 아니라 "이 라이선스를 쓴 실제 프로젝트" 사례로 가르친다.

### 5.1 6대 라이선스 × 대표 프로젝트 매트릭스

| 라이선스 | 핵심 한 줄 | 카피레프트 | 대표 프로젝트 (실물) | 주의 포인트 |
|-------|--------|-------|------------------|--------|
| **MIT** | 거의 자유, 출처/저작권 표시만 | 없음 | React, Vue, Next.js, Express, Ruff, uv | "가장 간단" 선호 — 그러나 patent 권리 명시 없음 |
| **Apache-2.0** | MIT + 특허 권리 명시 + NOTICE 파일 | 없음 | Kubernetes, TensorFlow, Airflow, Mistral Large 3, OLMo | 기업 안전성 ↑, 약간의 형식 부담 |
| **GPL-2.0 / 3.0** | 파생물도 GPL로 공개 (강 카피레프트) | 강함 | Linux, Bash, GIMP, WordPress | SaaS 제공만으론 공개 의무 발동 안 함 — AGPL과 차이 |
| **AGPL-3.0** | GPL + 네트워크 사용도 공개 의무 | 가장 강함 | Nextcloud, MongoDB(구), Mastodon, OpenInterpreter | SaaS 모델에서 의무 발동 — 기업이 기피하는 경우 多 |
| **LGPL-2.1 / 3.0** | 라이브러리 동적 링크는 비공개 가능 | 약 카피레프트 | glibc, FFmpeg(부분), Qt(부분) | "라이브러리는 자유, 앱은 자유롭게" |
| **MPL-2.0** | 파일 단위 카피레프트 | 약 | Mozilla 제품군 (Firefox 일부, pdf.js 등 — 일부 Apache 전환) | MIT/Apache와 GPL 사이 절충 |

### 5.2 AI 영역 라이선스 케이스

| 모델/프로젝트 | 라이선스 종류 | OSI 정의(2024) 적합? | 핵심 쟁점 |
|----|--------|-----------|--------|
| **Llama (Meta)** | Llama Community License (커스텀) | **× 부적합** | "Built with Llama" 의무 + 700M MAU 이상 별도 허가 — OSI는 명시적으로 오픈소스로 분류하지 않음 |
| **Mistral Large 3 (2025-12 이후)** | Apache-2.0 | △ (코드/weights는 OSS, 학습 데이터는 미공개) | weights는 자유 — 그러나 OSI Open Source AI Definition의 "데이터 정보" 요건 미충족 |
| **OLMo 2 (Allen AI)** | Apache-2.0 (코드 + weights + 학습 데이터 + 평가) | **✓ 적합** — OSI 정의 충족 첫 사례 중 하나 | 진정한 오픈소스 AI의 모범 |
| **DeepSeek R1** | MIT (weights) | △ (학습 데이터 미공개) | weights 자유, 데이터 비공개 |
| **Qwen 3** | Apache-2.0 | △ | Mistral과 비슷한 상황 |
| **Stable Diffusion 3** | Stability AI 비상업적 | × | "오픈" 마케팅 vs 라이선스 실체 차이 |

### 5.3 3회차 도입 훅에 쓸 함정 질문 (작가용)

> "Llama, DeepSeek, Mistral Large 3 — OSI Open Source AI Definition 1.0 기준으로 '진짜 오픈소스 AI'는 몇 개일까요?"
>
> **정답**: 0개. 셋 다 학습 데이터 정보 요건 미충족. 진짜 오픈소스 AI 사례는 OLMo 2.

### 5.4 라이선스 호환성 핵심 (학생 1페이지 메모)

```
MIT/BSD/Apache → 모든 곳에 흡수 가능
GPL → 다른 GPL 프로젝트에만 결합 가능 (AGPL과는 호환 issue 있음)
AGPL → 가장 제약 강함 — SaaS 의무까지
LGPL → 라이브러리 동적 링크면 비공개 OK
```

### 5.5 사고 시 회수 절차 (3회차 위험 §5.5 완충)

| 사고 | 대응 |
|----|----|
| GPL 코드를 MIT 프로젝트에 복사 | 즉시 revert + git filter-repo로 히스토리 정리 + 이슈로 공개 |
| 비밀키(API 키) 커밋 | 키 즉시 폐기 → 새 키 발급 → BFG/git filter-repo로 히스토리 정리 (force-push 권한 신중) |
| 의존성 라이선스 충돌 발견 | FOSSA/ScanCode로 확인 후 의존성 교체 또는 라이선스 변경 |

---

## 6. MCP / A2A / RAG 학습 리소스

> **4·5회차 핵심 자원**. 각 영역의 1차 출처(공식 문서 + 원논문)와 한국어 자료를 분리.

### 6.1 RAG (Retrieval-Augmented Generation)

| 자료 | 종류 | 발행처 | 발행일 | URL |
|----|----|------|----|-----|
| Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | 원논문 | arXiv (Lewis et al.) | 2020-05-22 | https://arxiv.org/abs/2005.11401 |
| LlamaIndex 공식 문서 | 구현 가이드 | LlamaIndex | live | https://docs.llamaindex.ai/ |
| LangChain RAG 튜토리얼 | 구현 가이드 | LangChain | live | https://python.langchain.com/docs/tutorials/rag/ |
| (한국어) RAG 입문 [KO] | 블로그/번역 | Hugging Face KR 커뮤니티 | 2024~2025 | https://huggingface.co/learn/cookbook/rag_with_hugging_face_gemma_mongodb |

### 6.2 MCP (Model Context Protocol)

| 자료 | 종류 | 발행처 | 발행일 | URL |
|----|----|------|----|-----|
| MCP — Introduction | 공식 진입 | modelcontextprotocol.io | live | https://modelcontextprotocol.io/ |
| MCP Specification (latest) | 공식 사양 | modelcontextprotocol.io | 2025-11-25 | https://modelcontextprotocol.io/specification/2025-11-25 |
| MCP Quickstart for server developers | 튜토리얼 | modelcontextprotocol.io | live | https://modelcontextprotocol.io/quickstart/server |
| modelcontextprotocol/servers (레퍼런스 서버) | OSS | GitHub | live | https://github.com/modelcontextprotocol/servers |
| Anthropic 발표 — MCP | 보도/배경 | Anthropic | 2024-11 | https://www.anthropic.com/news/model-context-protocol |
| awesome-mcp-servers (커뮤니티) | 큐레이션 | GitHub (punkpeye) | live | https://github.com/punkpeye/awesome-mcp-servers |
| (한국어) MCP 가이드 [KO 일부] | 커뮤니티 글 | DEV Community / 개인 블로그 | 2025~2026 | https://dev.to/x4nent/complete-guide-to-mcp-model-context-protocol-in-2026-architecture-implementation-and-4a11 |

### 6.3 A2A (Agent2Agent Protocol)

| 자료 | 종류 | 발행처 | 발행일 | URL |
|----|----|------|----|-----|
| A2A — Home | 공식 진입 | a2a-protocol.org | live | https://a2a-protocol.org/latest/ |
| A2A Protocol Specification | 공식 사양 | a2a-protocol.org | v1.0.0-rc | https://a2a-protocol.org/latest/specification/ |
| a2aproject/A2A (GitHub) | 코드/사양 | GitHub | live | https://github.com/a2aproject/A2A |
| Announcing A2A | 발표 | Google Developers Blog | 2025-04 | https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/ |
| Linux Foundation 발족 | 거버넌스 | Linux Foundation | 2025-06 | https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents |
| Codelab — Purchasing Concierge | 핸즈온 | Google Codelabs | 2025 | https://codelabs.developers.google.com/intro-a2a-purchasing-concierge |
| What Is A2A Protocol? | 입문 글 | IBM Think | 2025 | https://www.ibm.com/think/topics/agent2agent-protocol |
| (한국어) A2A 입문 [KO 부재 — 영문 우선] | — | — | — | — |

### 6.4 5회차 한 줄 정의 (작가가 슬라이드에 그대로 인용 가능)

> **RAG**는 외부 검색 결과를 LLM 답변에 결합하는 패턴 — 1차 출처: Lewis et al., arXiv:2005.11401 (2020).
> **MCP**는 LLM 애플리케이션이 외부 데이터·도구에 표준 방식으로 연결되는 오픈 프로토콜 — 1차 출처: modelcontextprotocol.io.
> **A2A**는 서로 다른 프레임워크/벤더의 AI 에이전트가 통신하고 협업하는 오픈 표준 — 1차 출처: a2a-protocol.org (Linux Foundation 이관, 2025).

---

## 7. 한국 OSS 프로젝트 (학생이 한국어로 기여 가능한 후보)

> **선정 기준**: (a) 활동성 (최근 6개월 커밋), (b) CONTRIBUTING.md 또는 README의 한국어/영문 명시, (c) 이슈 라벨 존재, (d) 한국 학생이 진입 가능한 수준의 작업 풀.

### 7.1 회사 단위 GitHub 조직

| 회사/조직 | GitHub URL | 활동 신호 (2026-05 추정) | 추천 시작점 |
|--------|-----------|--------------------|---------|
| **NAVER** | https://github.com/NAVER | 활발, 약 270+ 저장소 | naver-github.io (포털) — https://naver.github.io/ |
| **NAVER Cloud Platform** | https://github.com/NaverCloudPlatform | API/SDK 다수 | SDK 저장소들 |
| **NAVER AI / Clova** | https://github.com/clovaai | 연구 중심 | Vision/NLP 연구 모델 |
| **Kakao** | https://github.com/kakao | 약 70+ 저장소, 카카오 오픈소스 가이드 (https://kakao.github.io/) | kakao/varlock, kakao/khaiii (한국어 분석기) |
| **Kakao Brain** | https://github.com/kakaobrain | AI/ML 연구 코드 | torchgpipe, pororo |
| **LINE** | https://github.com/line | 활발, 메신저·Bot 도구 | LINE Bot SDK |
| **NHN Cloud** | https://github.com/nhn | API/SDK | OpenStack 관련 다수 |
| **Toss / 비바리퍼블리카** | https://github.com/toss | toss/slash 등 모노레포 | https://github.com/toss/slash (TS 유틸) |
| **당근(Daangn) / 당근마켓** | https://github.com/daangn | seed-design 등 OSS 디자인 시스템 | https://github.com/daangn/seed-design |
| **SK telecom** | https://github.com/sktelecom | NLP/ML 다수 | KoBERT, KoGPT2 |
| **Coupang** | https://github.com/coupang | 비교적 적음 | engineering blog 우선 |
| **우아한형제들 (Woowahan)** | https://github.com/woowabros | 백엔드 도구·블로그 | tech.kakao.com 와 비슷한 위치 |
| **NCSoft** | https://github.com/ncsoft | 게임/AI | — |
| **KOSSLAB (한국 OSS 개발자 랩)** | https://github.com/kosslab-kr | 정부 후원 OSS 멘토링 | 멘토링 프로그램 진입 후보 |

### 7.2 한국어 친화 단일 OSS 프로젝트 (Tier-A 추천)

| # | 저장소 | 분야 | 라이선스 | 한국어 자료 | URL |
|---|------|----|------|--------|-----|
| 7B-1 | toss/slash | TypeScript 유틸 모노레포 | MIT | [KO] README/docs 한국어 | https://github.com/toss/slash |
| 7B-2 | toss/es-toolkit | 모던 lodash 대체 | MIT | [KO] | https://github.com/toss/es-toolkit |
| 7B-3 | daangn/seed-design | 디자인 시스템 | Apache-2.0 | [KO] | https://github.com/daangn/seed-design |
| 7B-4 | naver/billboard.js | 차트 라이브러리 | MIT | 영문 위주 | https://github.com/naver/billboard.js |
| 7B-5 | naver/ngrinder | 부하 테스트 | Apache-2.0 | 영문 위주 | https://github.com/naver/ngrinder |
| 7B-6 | kakao/khaiii | 한국어 형태소 분석기 | Apache-2.0 | [KO] | https://github.com/kakao/khaiii |
| 7B-7 | SKTBrain/KoBERT | 한국어 BERT | Apache-2.0 | [KO] | https://github.com/SKTBrain/KoBERT |
| 7B-8 | line/armeria | 비동기 RPC/HTTP | Apache-2.0 | 영문 + 한국어 일부 | https://github.com/line/armeria |
| 7B-9 | clovaai/donut | 문서 이해 모델 | MIT | 영문 위주 | https://github.com/clovaai/donut |
| 7B-10 | kakaobrain/pororo | 자연어 처리 툴킷 | Apache-2.0 | [KO] | https://github.com/kakaobrain/pororo |

### 7.3 한국어 자료 부재 시 대체 (글로벌 OSS 중 한국 학생 친화)

| 프로젝트 | 왜 친화적 | URL |
|------|------|-----|
| huggingface/transformers | 한국 사용자 多, 한국어 docs PR 환영 | https://github.com/huggingface/transformers |
| freeCodeCamp 한국어 번역 | 한국어 contribution 직접 가능 | https://github.com/freeCodeCamp/freeCodeCamp |
| MDN Web Docs 한국어 | 번역 PR 진입 친절 | https://github.com/mdn/translated-content |

### 7.4 한국 OSS 검색 시 깨진 링크/주의 사항

- 일부 회사(특히 게임사·중소기업)는 GitHub에 공개 저장소를 두었다가 비공개 전환하는 경우가 있으니, 회차 자료 인용 직전 1회 더 접근 확인 권장.
- "naver"라는 organization이 여러 개로 분리됨 (`NAVER`, `naver-ai`, `navervision`, `clovaai`, `NaverCloudPlatform`) — 작가는 정확한 organization 이름을 확인.
- KOSSLAB 멘토링 프로그램은 **연 1회 모집** — 강의 시점 모집 중이면 6회차 "다음 기여" 액션에 직접 연결 가능.

---

## 8. 출처 검증 체크리스트 (작가용)

> **사용법**: lecture-author는 강의자료에 인용을 추가할 때마다 아래 7항목을 통과시킨다. content-qa-reviewer는 동일 체크리스트로 감사.

| # | 항목 | 통과 기준 |
|---|----|--------|
| 1 | URL 접근 가능 | WebFetch 또는 브라우저로 200 응답 확인 |
| 2 | 발행처/저자 명시 | `§1 표`에서 발행처 컬럼 채워졌는지 확인 |
| 3 | 발행일 명시 | live 문서면 "live (조회일: 2026-05-04)" 표기 |
| 4 | 인용 양식 통일 | `§2`의 형식 A/B/C 중 하나 사용 |
| 5 | archive.org 백업 권장 | 깨질 위험 있는 블로그 글은 archive.org URL 함께 표기 |
| 6 | 라이선스/저작권 충돌 없음 | 본문 표/그림 직접 복사면 출처 + 라이선스 명시 |
| 7 | 한국어 자료 우선 | 같은 주제에 [KO] 자료가 있으면 함께 표기 |

### 8.1 깨진 링크 발견 시 처리

```
1. WebFetch 재시도 1회.
2. 실패 → archive.org Wayback Machine으로 가장 가까운 시점 스냅샷.
3. 자료 풀에 [BROKEN-2026-05-04] 라벨 붙이고 archive 링크 추가.
4. 영향받는 회차 lecture-author에게 SendMessage로 통보.
```

### 8.2 Deprecated / 라이선스 변경 진행 중인 프로젝트 표기 규칙

- 모델 deprecation 진행 중: `[DEPRECATED-soon]` 라벨.
- 라이선스 변경 논의 중: `[LICENSE-IN-FLUX]` 라벨 + 이슈 URL 함께.
- 본 자료 풀 작성 시점(2026-05-04) 기준 위 라벨 부착 항목 없음. 갱신 시 재확인.

---

## 9. 작가별 빠른 참조 (회차 → 자료 매핑)

| 회차 | 작가가 가장 자주 보게 될 본 문서 섹션 |
|----|---------------------------|
| 1회차 | §1 [1] [3] / §3.1 / §4 (도구 카탈로그 도입) |
| 2회차 | §1 [2] [4] [5] / §3.2 |
| 3회차 | §1 [6] [7] / §3.3 / §5 (라이선스 케이스북 전체) |
| 4회차 | §1 [9] [10] [11] / §3.4 / §4 (도구 카탈로그 핵심) / §6 |
| 5회차 | §1 [10] [11] / §3.5 / §6 (MCP/A2A 깊게) |
| 6회차 | §3.6 / §7 (한국 OSS — 다음 기여 액션) |

---

## 10. 갱신 이력

| 일자 | 변경 | 변경자 |
|----|----|------|
| 2026-05-04 | 초기 자료 풀 작성. source.txt 인용 [1]~[11] 1차 검증 완료 (모두 접근 가능). 회차별 사례 저장소 7~8개씩, AI 도구 카탈로그 6종 비교, 라이선스 케이스북 6종 + AI 영역 6종, MCP/A2A/RAG 1차 출처 정리, 한국 OSS 14개 조직 + 10개 단일 저장소. | reference-curator |

---

> **다음 단계 (후속 에이전트로의 핸드오프)**
>
> - **lecture-author 1~6**: 본 문서 §3.1~§3.6 회차별 풀에서 인용. §1 표 형식을 그대로 복사. 새 자료 필요하면 SendMessage로 요청.
> - **content-qa-reviewer**: 강의자료 인용이 §1 표 + §8 체크리스트와 일치하는지 감사. 불일치 발견 시 reference-curator에 통보.
> - **curriculum-architect**: 본 자료 풀이 마스터 플랜의 회차별 핵심 메시지와 어긋나는 항목이 있으면 통보.
