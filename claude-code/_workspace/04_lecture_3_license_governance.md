# 3회차 — 오픈소스 라이선스, 거버넌스, 커뮤니티 운영

> **일자**: 2026-05-14 (목) 19:00~21:00 (강의 90분 + 멘토링 60분)
> **강의명**: AI 시대의 오픈소스 실전: 기여자에서 메인테이너까지

---

## 0. 강사용 메타 (Lecture Meta)

> **이 회차의 한 줄 요약**: 라이선스를 "법률 지식"이 아니라 **"오픈소스 운영의 신뢰 구조"**의 1페이지로 가르치는 회차다. LICENSE 한 파일만 만드는 게 아니라 LICENSE/CONTRIBUTING/COC/SECURITY/Templates 5종 세트를 한 호흡에 묶어 학생 저장소에 박는다. (source.txt 보강 요청 1번 직접 반영)

### 0.1 핵심 메시지 (샌드위치 룰 — 도입과 마무리에 동일 문장 등장)

> **오픈소스는 "공개"가 아니라 사용·수정·배포·기여를 허용하는 규칙과 신뢰 구조다. 라이선스는 그 신뢰의 첫 페이지다.**

### 0.2 학습 목표 (LO 3개 — 0:10 LO 노출 슬라이드에 그대로 박기)

| # | LO |
|---|---|
| LO 1 | 학생은 MIT, Apache-2.0, GPL, AGPL, LGPL, MPL의 핵심 차이를 사용 시나리오(개인/기업/SaaS/연구) 단위로 매핑해 설명할 수 있다. |
| LO 2 | 학생은 자기 팀 저장소에 LICENSE, CONTRIBUTING.md, CODE_OF_CONDUCT.md, SECURITY.md, Issue/PR Template을 추가하고, 그 이유를 설명할 수 있다. |
| LO 3 | 학생은 AI 시대의 라이선스 쟁점(모델 weights, 학습 데이터, OSI Open Source AI Definition)을 한 사례 이상으로 설명할 수 있다. |

### 0.3 선수 지식

- 2회차 완료: 팀 GitHub 저장소 보유 + 첫 머지 PR 경험 + 트랙 확정 (A/B)
- Issue/Branch/Commit/PR/Review 5단어를 자기 손으로 한 사이클 굴려본 경험
- AI 도구 1개 이상 (Claude / Copilot / Cursor 중)에 본인 계정 보유

### 0.4 이 회차가 끝나면 (학생 GitHub에 남는 것)

| # | 산출물 | 어디에 |
|---|------|------|
| 1 | LICENSE 파일 (선택 + 이유 1단락) | 팀 저장소 루트 |
| 2 | CONTRIBUTING.md 초안 | 팀 저장소 루트 또는 `.github/` |
| 3 | CODE_OF_CONDUCT.md | 팀 저장소 루트 또는 `.github/` |
| 4 | SECURITY.md | 팀 저장소 루트 또는 `.github/` |
| 5 | Issue Template 1개 + PR Template 1개 | `.github/ISSUE_TEMPLATE/` + `.github/pull_request_template.md` |
| 6 | README v2 (운영 규칙 섹션 포함) | 팀 저장소 루트 |
| 7 | "라이선스 정책" 섹션이 추가된 CONTRIBUTING.md (EX-3C 결과) | 팀 저장소 루트 |

### 0.5 진행표 (Run-of-Show 압축, 90분 강의 + 60분 멘토링)

| 시각 | 분량 | 모드 | 활동 |
|----|---|----|----|
| 0:00~0:03 | 3분 | 강의 | 직전 전이 + 핵심 메시지 |
| 0:03~0:10 | 7분 | **EX-3A** 도입 훅 — Llama·DeepSeek·Mistral 함정 투표 |
| 0:10~0:13 | 3분 | 강의 | LO 3개 + 오늘 산출물 6개 노출 |
| 0:13~0:30 | 17분 | 강의 | 개념 1블록 — 라이선스 6종 비교 매트릭스 |
| 0:30~0:55 | 25분 | **EX-3B** 실습 — 신뢰 구조 5종 세트 추가 (A/B 분기) |
| 0:55~1:10 | 15분 | 강의 | 개념 2블록 — AI 시대 라이선스 쟁점 |
| 1:10~1:22 | 12분 | **EX-3C** AI 미니 — 라이선스 리스크 질문 (보강 1+2) |
| 1:22~1:25 | 3분 | 정리 | 메인테이너 4가지 책임 |
| 1:25~1:30 | 5분 | 회고 | KPT 5분 + 다음 회차 전이 + 핵심 메시지 재노출 |
| **1:30~2:30** | **60분** | 멘토링 | 5종 세트 품질 검토 + 호환성 점검 + 외부 contributor 받을 준비 점검 |

### 0.6 3회차에서 가장 가능성 높은 위험과 완충 (마스터 플랜 §5)

| 위험 | 신호 | 완충 |
|----|----|----|
| **라이선스/보안 사고** (§5.5) | 학생이 GPL 코드를 MIT 프로젝트에 복붙 / 비밀키 커밋 | 강사가 회수 절차를 즉석 시연 (revert / `git filter-repo` / BFG) — 본 회차 트러블슈팅 §11에 절차서 |
| **A트랙 외부 응답 지연** (§5.2) | A트랙 팀이 2회차에 외부 OSS 응답을 못 받음 | 멘토링 60분에 "응답 SLA가 빠른 OSS"로 교체 의사결정 — 본 자료 풀 [3.2 / 2A] 후보 활용 |
| **실력 격차** (§5.1) | 5종 세트 추가가 60분이 지나도 끝나지 않는 팀 30%↑ | 강사 라이브로 1팀 풀세트를 시연하고, 팀이 모방. 핸드아웃 §10 "복붙 가능 템플릿"으로 시간 절약 |

### 0.7 회차 간 인과 사슬 (마스터 플랜 §2 — 끊지 말 것)

```
[2회차 산출물]                          [3회차 진입 상태]
  팀 저장소 (살아있음)            →     "외부 사람이 들어와도 신뢰할까?"
  Issue 5개 + 첫 머지 PR          →     "운영 규칙은?"
  트랙 확정 (A/B)                 →     "라이선스 호환성은?"

      ↓ 본 회차에서 채워 넣는 것

  LICENSE + CONTRIBUTING + COC +
  SECURITY + Templates + README v2  →   [4회차 진입 상태]
  "라이선스 정책" 섹션              →   "신뢰 골격을 갖춘 저장소 위에서 AI를 본격 활용"
```

---

## 1. 사전 학습 (수업 전 30분)

> **왜 지금 이걸 미리 보는가**: 회차 90분 안에 라이선스 6종을 처음부터 끝까지 강의로 풀려면 시간이 모자란다. 사전 학습으로 학생이 "MIT는 자유, GPL은 카피레프트" 정도의 1차 직관을 미리 갖고 들어오게 한다. 그러면 90분 안에 우리는 "그래서 우리 팀 저장소에 무엇을 박을까"의 의사결정에 시간을 쓸 수 있다.

### 1.1 30분 안에 끝나는 사전 학습 (필수)

| 분량 | 자료 | URL | 보고 와야 하는 것 |
|----|----|-----|------------|
| 5분 | OSI — *The Open Source Definition* (한 페이지) | https://opensource.org/osd | "오픈소스 = 공개" 가 틀린 이유 1줄 |
| 5분 | OSI — *The Open Source AI Definition 1.0* | https://opensource.org/ai/open-source-ai-definition | OSI가 요구하는 4 freedoms 4개 단어 |
| 5분 | GitHub — *Choose a License* | https://choosealicense.com/ | MIT / Apache-2.0 / GPL 카드 3장 훑기 |
| 10분 | (블로그) Hunton — *Part 1: Open Source AI Models: How Open Are They Really?* (2025) | https://www.hunton.com/insights/publications/part-1-open-source-ai-models-how-open-are-they-really | Llama·Mistral·DeepSeek 중 OSI 기준 진짜 OSS는 몇 개인지 추측 |
| 5분 | 자기 팀 저장소의 현재 LICENSE 파일 확인 | (각자 팀 저장소) | 있으면 어떤 라이선스인지 / 없으면 "없음" 메모 |

### 1.2 사전 학습 자가 점검 (수업 시작 전 5분)

학생은 수업 시작 5분 전까지 다음 4문항을 머릿속으로 답해본다. 강사는 0:03 도입 훅에서 1번을 직접 묻는다.

```
1. Llama, DeepSeek, Mistral Large 3 — OSI Open Source AI Definition 기준으로
   진짜 오픈소스 AI는 몇 개일까? (0/1/2/3)

2. MIT 라이선스의 의무는 무엇인가? (한 줄)

3. GPL과 AGPL의 가장 큰 차이는 무엇인가? (한 줄)

4. 우리 팀 저장소에 LICENSE 파일이 있는가? (있다/없다/모른다)
```

> **강사 노트**: 1번은 정답이 "0개"다. 학생 다수가 "셋 다" 또는 "2개"라고 답한다. 그 인지 충격이 본 회차의 동력이다.

---

## 2. 0:00~0:03 — 직전 전이 + 핵심 메시지 (3분)

> **why-now**: 학생은 지난주에 저장소를 "살아있게" 만들었다. 이번 주는 그 저장소를 "외부에서 들어와도 신뢰할 수 있게" 만든다. 첫 3분에 그 다리를 놓지 않으면 학생은 라이선스 강의를 "갑자기 튀어나온 법률 시간"으로 느낀다.

### 2.1 슬라이드 1 — 직전 전이 (3-1)

```
지난주에 우리는 저장소를 살아있게 만들었다.
  - Issue 5개
  - 첫 머지 PR
  - 트랙 확정 (A or B)

그런데 외부 사람이 우리 저장소에 들어왔을 때
"여기 안전하고 신뢰할 수 있다"고 느낄까?

오늘은 그 신뢰의 골격을 세운다.
```

**강사 멘트**:

> "지난주 우리 손으로 저장소를 만들었지. 첫 PR도 머지했고. 그런데 — 잠깐, 너희 저장소에 지금 누가 처음 들어왔다고 쳐. 그 사람이 5초 안에 '아, 여기는 어떻게 돌아가는 곳이구나' 알 수 있나? 라이선스가 뭔지 보여? 기여하려면 뭘 해야 하는지 적혀 있어? 비밀번호 같은 게 새면 어디로 신고해? — 오늘은 그걸 박는 날이다. 라이선스만이 아니다. **운영의 신뢰 구조 5종 세트**를 한 호흡에 박는다."

### 2.2 슬라이드 2 — 본 회차 핵심 메시지 (3-2, 샌드위치 도입)

> **오픈소스는 "공개"가 아니라 사용·수정·배포·기여를 허용하는 규칙과 신뢰 구조다.**
> **라이선스는 그 신뢰의 첫 페이지다.**

**강사 멘트**:

> "이 한 문장은 오늘 마지막 5분에 또 나온다. 머리에 박아둬라. 라이선스는 끝이 아니라 첫 페이지다. 그 뒤에 CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, Issue/PR Template — 다섯 페이지가 더 있다. 오늘 그 책 한 권을 우리 손으로 묶는다."

---

## 3. 0:03~0:10 — 도입 훅: Llama·DeepSeek·Mistral 함정 투표 (EX-3A, 7분)

> **why-now**: 라이선스를 "법률"로 시작하면 학생은 90분 동안 깬 채로 잘 거다. 우리는 학생이 자기 입으로 답한 답이 틀렸다는 인지 충격에서 시작한다. 학생이 "내가 안다고 생각했는데 몰랐네"라고 자각하는 그 7분이, 다음 80분의 동력이다.

### 3.1 슬라이드 3 — 함정 질문 (3-3)

```
다음 셋 중, OSI Open Source AI Definition 1.0 기준으로
"진짜 오픈소스 AI"는 몇 개일까요?

  ☐ Llama 4 (Meta)
  ☐ DeepSeek R1
  ☐ Mistral Large 3 (2025-12 Apache-2.0 전환 이후)

   1) 0개   2) 1개   3) 2개   4) 3개
```

### 3.2 진행 절차 (7분 정확히)

| 시각 | 진행 |
|----|----|
| 0:03~0:04 (1분) | 슬라이드 띄움 + 학생 손들기 투표 (1/2/3/4 중) |
| 0:04~0:05 (1분) | 강사가 칠판에 인원 수 적기. 다수가 보통 "2개" 또는 "3개"로 답함 |
| 0:05~0:08 (3분) | OSI Open Source AI Definition 1.0의 **4 freedoms** 슬라이드 띄움 — Use / Study / Modify / Share. 그리고 그 자유를 행사하려면 (1) 학습 데이터 정보, (2) 완전한 학습·실행 코드, (3) 모델 파라미터 — 3가지에 접근할 수 있어야 한다는 점 폭로 |
| 0:08~0:09 (1분) | 결과: **0개**. 셋 다 "학습 데이터 정보" 요건을 충족하지 못한다 |
| 0:09~0:10 (1분) | 진짜 오픈소스 AI 사례 1개 — **OLMo 2 (Allen AI, Apache-2.0, 코드+weights+학습 데이터+평가 모두 공개)** 보여주기 |

### 3.3 슬라이드 4 — OSI 정답 폭로 (3-4)

```
정답: 0개

  Llama 4              →  "Built with Llama" 의무 + 700M MAU 별도 허가
                          → OSI는 명시적으로 "오픈소스 아님"이라고 분류
  DeepSeek R1          →  weights는 MIT, 학습 데이터 비공개
                          → OSI 기준 미충족
  Mistral Large 3      →  weights·코드 Apache-2.0, 학습 데이터 비공개
                          → OSI 기준 미충족

진짜 오픈소스 AI 사례:
  ★ OLMo 2 (Allen AI) — Apache-2.0, 코드 + weights + 학습 데이터 + 평가 모두 공개
```

> 출처: OSI, *The Open Source AI Definition 1.0* (2024-10-28). https://opensource.org/ai/open-source-ai-definition
> Llama 4 Community License. https://www.llama.com/llama4/license/
> 자료 풀 §5.2 [라이선스 케이스북]

### 3.4 강사 멘트 (이 7분의 마무리 한 줄)

> "**오픈소스라는 단어가 마케팅에 도용되고 있다. 우리는 정확하게 안다.** 그리고 다음 80분 안에, 우리 저장소에 OSI 기준으로 '진짜 오픈소스'라고 부를 수 있는 신뢰 구조를 직접 박는다."

### 3.5 fallback (학생이 모델명을 모를 때)

- 강사가 "Llama가 뭔지 들어본 분?" 하고 손들기 1회 — 인지도 측정.
- 그래도 어색하면 "Llama는 메타가 만든 거대 언어 모델이고, 메타가 '오픈소스로 풀었다'고 마케팅한 모델이다"로 1줄 설명 후 본 투표 진행.

---

## 4. 0:10~0:13 — LO 3개 + 오늘 산출물 약속 (3분)

> **why-now**: 마스터 플랜 §7 작가 규칙 4번 — "LO 3개는 회차 시작 5분 안에 학생에게 명시." 학생이 90분 동안 어디로 가는지 모르면 길을 잃는다.

### 4.1 슬라이드 5 — LO 3개 (3-5)

```
오늘 끝나면 너희는 다음 셋을 할 수 있다.

  LO 1.  MIT / Apache-2.0 / GPL / AGPL / LGPL / MPL의 핵심 차이를
         사용 시나리오(개인 / 기업 / SaaS / 연구) 단위로 매핑해서 설명할 수 있다.

  LO 2.  너희 팀 저장소에 LICENSE, CONTRIBUTING.md, CODE_OF_CONDUCT.md,
         SECURITY.md, Issue/PR Template을 추가하고, 그 "이유"를 설명할 수 있다.

  LO 3.  AI 시대의 라이선스 쟁점(모델 weights, 학습 데이터,
         OSI Open Source AI Definition)을 한 사례 이상으로 설명할 수 있다.
```

### 4.2 슬라이드 6 — 오늘 산출물 약속 6개 (3-6, 보강 요청 1번 명시)

```
오늘 GitHub에 남길 것 (산출물 약속)

  ① LICENSE              ← 라이선스 (선택 + 이유 1단락)
  ② CONTRIBUTING.md      ← 기여 가이드
  ③ CODE_OF_CONDUCT.md   ← 행동 강령
  ④ SECURITY.md          ← 보안 정책
  ⑤ Issue/PR Template    ← .github/ 디렉터리
  ⑥ README v2            ← 운영 규칙 섹션 포함

★ 오늘은 라이선스 "법률 강의"가 아니다.
  운영의 신뢰 구조 5종 세트를 한 호흡에 박는 날이다.
```

**강사 멘트**:

> "위 6개가 90분 안에 너희 저장소에 PR로 올라가야 한다. 이게 오늘의 평가 매핑이다. — 이해도 20% 중 라이선스 부분 / 발표·문서화 15%의 누적 시작점. **이 6개가 안 올라가면 어느 평가 항목에서 점수를 잃는지 핸드아웃 상단에 명시했다.** (마스터 플랜 §3.1)"

---

## 5. 0:13~0:30 — 개념 1블록: 라이선스 6종 비교 매트릭스 (17분)

> **why-now**: 학생은 라이선스 6종을 외울 필요가 없다. 단, "내가 만든 프로젝트가 라이브러리면 어떤 라이선스를 쓸지", "내가 SaaS를 만들면 무엇을 피해야 하는지"를 시나리오로 답할 수 있어야 한다. 17분 안에 그 매핑을 끝낸다.

### 5.1 슬라이드 7 — 라이선스 6종 한 줄 정의 (3-7)

| 라이선스 (SPDX) | 핵심 한 줄 | 카피레프트 강도 |
|------|-------|---------|
| **MIT** | 거의 자유, 출처/저작권 표시만 | 없음 |
| **Apache-2.0** | MIT + 특허 권리 명시 + NOTICE 파일 | 없음 |
| **GPL-2.0 / GPL-3.0** | 파생물도 GPL로 공개 (강 카피레프트) | 강함 |
| **AGPL-3.0** | GPL + 네트워크 사용도 공개 의무 | 가장 강함 |
| **LGPL-2.1 / LGPL-3.0** | 라이브러리 동적 링크는 비공개 가능 | 약 카피레프트 |
| **MPL-2.0** | 파일 단위 카피레프트 | 약 |

> 출처: OSI Approved Licenses. https://opensource.org/licenses
> SPDX License List. https://spdx.org/licenses/
> 자료 풀 §5.1

**강사 멘트** (5분):

> "외울 필요는 없다. 다만 '카피레프트' 한 단어는 머리에 박아라. 카피레프트(copyleft) = '내 코드를 가져다 쓰면 너도 같은 라이선스로 공개해야 한다'는 뜻. MIT/Apache는 그게 없고, GPL은 강하고, AGPL은 가장 강하다. 이 한 줄이 오늘의 30%다."

### 5.2 슬라이드 8 — 사용 시나리오 매핑 (3-8, LO 1 직접 측정점)

```
                          개인 프로젝트   기업 라이브러리   SaaS 서비스   연구 코드
MIT                       ★ 추천         ★ 추천          ★ 추천         ★ 추천
Apache-2.0                ★ 추천         ★★ 강추         ★ 추천         ★ 추천
GPL-3.0                   ★ 가능         △ 신중          ○ 가능*        △ 신중
AGPL-3.0                  ○              ✗ 기피 多        ✗ 매우 신중    △ 신중
LGPL                      ○              ★ 라이브러리     ○             ○
MPL-2.0                   ○              ○              ○              ○
```

`*` GPL 코드를 SaaS로만 제공하면 공개 의무가 발동하지 않는다 (네트워크 = 배포 아님). AGPL은 그 빈틈을 막은 라이선스.

**강사 멘트** (4분):

> "표를 외울 필요는 없다. 패턴만 보자. 기업·라이브러리·범용 = MIT/Apache. 자유 보장 강조 = GPL. SaaS 시대에 '서비스도 GPL로 묶고 싶다' = AGPL. 라이브러리지만 동적 링크는 자유롭게 = LGPL. — 너희 팀이 30분 후에 LICENSE를 고를 때 이 표 한 장을 보면 된다."

### 5.3 슬라이드 9 — 대표 프로젝트 매핑 (실물 사례, 3-9)

| 라이선스 | 대표 프로젝트 (실물) |
|------|------------------|
| **MIT** | React, Vue, Next.js, Express, Ruff, uv, toss/slash |
| **Apache-2.0** | Kubernetes, TensorFlow, Airflow, Mistral Large 3, OLMo 2, kakao/khaiii |
| **GPL-2.0** | Linux, Bash, GIMP, WordPress |
| **AGPL-3.0** | Nextcloud, Mastodon, OpenInterpreter, MongoDB(과거) |
| **LGPL** | glibc, FFmpeg(부분), Qt(부분) |
| **MPL-2.0** | Mozilla 제품군 (Firefox 일부, pdf.js — 일부 Apache 전환) |

> 자료 풀 §5.1 라이선스 케이스북. 강의자료 §3.3 회차 3 사례 저장소 참조.

**강사 멘트** (3분):

> "Express는 MIT, Linux는 GPL, Mastodon은 AGPL. 머리에 '추상' 말고 '실물'을 박아라. 'AGPL이 뭐야?' 라고 누가 물으면 'Mastodon이 쓰는 거. SaaS로 돌려도 코드 공개해야 함' 이렇게 답하면 된다."

### 5.4 슬라이드 10 — 라이선스 호환성 1페이지 메모 (3-10)

```
MIT / BSD / Apache-2.0  →  모든 곳에 흡수 가능 (가장 자유로운 흐름)
GPL                      →  다른 GPL 프로젝트와만 결합 가능
                            (GPL-2.0과 Apache-2.0은 충돌 — GPL-3.0은 호환)
AGPL                     →  가장 제약 강함 — SaaS 의무까지
LGPL                     →  라이브러리 동적 링크면 비공개 OK

핵심 원칙: 강한 카피레프트(GPL/AGPL) 코드를 약한 라이선스(MIT)
프로젝트에 "복사·붙여넣기 하면 안 된다."
복사하는 순간 너의 프로젝트 전체가 GPL/AGPL 의무 발동.
```

> 자료 풀 §5.4 라이선스 호환성 핵심.

### 5.5 졸음 신호 시 깨우기 (강사 운영 노트)

학생이 5분이라도 졸기 시작하면 다음 30초 활동:

> "옆 사람에게 30초 안에 답해보세요 — '내가 만든 프로젝트가 누구나 쓸 수 있는 라이브러리면, 어떤 라이선스를 쓸 거야? 그리고 왜?'"

답이 안 나오는 학생에게는 강사가 슬라이드 8을 다시 띄우고 "기업 라이브러리 컬럼 보세요" 한 줄.

### 5.6 핸드아웃 라이선스 결정 트리 (학생용 1페이지)

```
START — 너희 팀 프로젝트는 무엇인가?

  ├ 라이브러리 또는 도구 (남이 가져다 쓸 것) ?
  │   ├ 가장 자유롭게 퍼지길 원함 → MIT
  │   ├ 기업이 안전하게 쓰길 원함 (특허 보호) → Apache-2.0
  │   └ 라이브러리지만 GPL적 자유 보장 → LGPL-3.0
  │
  ├ 애플리케이션 / 도구 / 서비스 ?
  │   ├ 자유 보장이 핵심 가치 → GPL-3.0
  │   ├ SaaS여도 코드 공개 강제 → AGPL-3.0
  │   └ 기업 친화 + 자유 균형 → Apache-2.0 또는 MIT
  │
  └ 잘 모르겠음 / 학생 학습 프로젝트
      → 일단 MIT (가장 안전한 출발점)

★ 결정 못 하면 https://choosealicense.com/ 에서 5분 결정.
```

---

## 6. 0:30~0:55 — 실습 EX-3B: 신뢰 구조 5종 세트 추가 (25분, A/B 분기)

> **why-now**: 본 회차의 핵심 25분. 학생은 라이선스 6종을 "들은" 게 아니라, 실제로 자기 저장소에 5개 파일을 PR로 올린다. 끝나는 순간 GitHub 알림에 "X added LICENSE..." 가 뜨는 그 시점이 회차 평가 매핑 측정점.

### 6.1 실습 ID와 산출물

| 항목 | 값 |
|----|----|
| **실습 ID** | **EX-3B** (3회차 두 번째 등장) |
| **분량** | 25분 |
| **트랙** | A/B 분기 첫 등장 |
| **산출물** | 5개 파일 PR (LICENSE / CONTRIBUTING.md / CODE_OF_CONDUCT.md / SECURITY.md / Issue·PR Template) + README v2 |
| **난이도** | ★★★ |

### 6.2 공통 본문 (5분, 0:30~0:35)

#### 6.2.1 슬라이드 11 — 5종 세트가 무엇이고 왜 한 호흡에 박는가 (3-11)

```
                    [ 신뢰 구조 5종 세트 ]

  LICENSE            "쓸 수 있는가? 어떤 의무를 지니는가?"
       ↓
  CONTRIBUTING.md    "기여하려면 무엇을 해야 하는가?"
       ↓
  CODE_OF_CONDUCT    "어떻게 행동해야 하는가? 신고는 누구에게?"
       ↓
  SECURITY.md        "취약점 발견하면 어디로 보고?"
       ↓
  Issue/PR Template  "이슈/PR을 어떻게 작성?"

  ────  README v2 가 위 5개를 한눈에 연결한다  ────
```

#### 6.2.2 강사 멘트 (5분 안에 끝)

> "한국어로 '오픈소스 운영 5종 세트'다. GitHub은 이 5개를 통해 저장소의 'Community Standards' 점수를 자동 계산한다 — Settings → Insights → Community 가면 너희 저장소가 5개 중 몇 개를 채웠는지 표시된다. 오늘 끝나면 100% 가 떠야 한다. **공통 본문 5분, 그 다음 20분은 트랙별로 갈라진다.**"

> 출처: GitHub Docs, *Setting up your project for healthy contributions*. https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions

### 6.3 A트랙 박스 — 외부 OSS 분석 + 모방 (20분, 0:35~0:55)

> **A트랙은**: 외부 OSS에 기여하는 팀. 본인이 깃발 꽂은 외부 프로젝트의 5종 세트를 먼저 **분석**하고, 그것을 모방해서 팀 분석 저장소(2회차에 만든 분석/실험용 저장소)에 동일 구조를 박는다.

#### 6.3.1 A트랙 단계별 절차

| 시각 | 분량 | 활동 | 명령어/링크 |
|----|---|----|--------|
| 0:35~0:42 | 7분 | 외부 프로젝트 5종 세트 분석 | `gh repo view <외부OSS> --web` 또는 직접 GitHub 접속 → `Insights → Community` |
| 0:42~0:55 | 13분 | 팀 분석 저장소에 5개 파일 모방 + PR 머지 | 아래 명령어 시퀀스 |

#### 6.3.2 A트랙 명령어 시퀀스 (복붙 가능)

```bash
# 1. 팀 분석 저장소 클론 (이미 있으면 pull)
git clone https://github.com/<팀이름>/<분석저장소>.git
cd <분석저장소>

# 2. 신뢰 구조 5종 세트 브랜치
git checkout -b feat/community-standards

# 3. 외부 OSS의 LICENSE 라이선스 종류 확인 (예: Apache-2.0)
gh api repos/<owner>/<repo>/license --jq '.license.spdx_id'
# 예시 출력: "Apache-2.0"

# 4. 분석 저장소에 같은 라이선스 추가
# (단, 분석 저장소는 외부 코드를 포함하지 않으므로 자기 라이선스 선택 가능)
# 학생은 본인 분석 저장소에 무엇을 쓸지 별도 결정. 보통 MIT 또는 Apache-2.0
gh license list
gh license create MIT --repo <팀이름>/<분석저장소>
# 또는 https://choosealicense.com/ 에서 텍스트 복사 → LICENSE 파일에 저장

# 5. .github 디렉터리 + Templates 추가
mkdir -p .github/ISSUE_TEMPLATE
touch CONTRIBUTING.md CODE_OF_CONDUCT.md SECURITY.md
touch .github/ISSUE_TEMPLATE/bug_report.md
touch .github/pull_request_template.md

# 6. 외부 OSS의 CONTRIBUTING.md 를 참고로 직접 다시 쓰기 (복붙 금지 — 라이선스 호환성)
# 분석 저장소이므로 외부 프로젝트의 톤을 참조하되 표현은 우리 것

# 7. README v2 — 운영 규칙 섹션 추가
# (본 자료 §10 표준 골격 사용)

# 8. 커밋 + PR
git add LICENSE CONTRIBUTING.md CODE_OF_CONDUCT.md SECURITY.md .github/ README.md
git commit -m "feat: add community standards 5-set + README v2"
git push -u origin feat/community-standards
gh pr create --title "feat: 신뢰 구조 5종 세트 + README v2" \
  --body "외부 프로젝트(<owner>/<repo>) 운영 규칙 분석 결과를 우리 분석 저장소에 적용. \n- LICENSE: MIT 선택 (이유: 분석 결과물 자유 배포)\n- CONTRIBUTING/COC/SECURITY/Templates 첫 초안\n- README v2 운영 규칙 섹션 추가"
```

#### 6.3.3 A트랙 체크리스트 (멘토용)

```
☐ 외부 프로젝트의 5종 세트 어디에 있는지 URL 5개 메모
☐ 외부 프로젝트의 LICENSE SPDX 식별자 1줄 메모 (예: "Apache-2.0")
☐ 분석 저장소에 LICENSE 파일 추가 (외부 OSS와 호환되는 라이선스 선택)
☐ CONTRIBUTING/COC/SECURITY/Templates 5개 파일 추가
☐ 외부 vs 우리 = 차이점 1줄 메모 (`docs/external-vs-ours.md`)
☐ README v2 운영 규칙 섹션 추가
☐ PR 머지 (팀 내 self-review 가능)
☐ GitHub Insights → Community에서 항목 5개 모두 ✓ 확인
```

#### 6.3.4 A트랙 예상 산출물 (스크린샷 묘사)

> 멘토가 PR 화면을 열어서 학생에게 보여줘야 할 것:
>
> - PR 제목: `feat: 신뢰 구조 5종 세트 + README v2`
> - PR 본문에 외부 OSS 비교 표 1개
> - Files Changed 탭에 6~7개 파일 (.github 디렉터리 포함)
> - PR 머지 후 저장소 메인에 "Code of conduct" 배지 자동 표시 (GitHub 자동)
> - Insights → Community Standards 화면에서 5개 항목 ✅

### 6.4 B트랙 박스 — 자체 저장소에 직접 작성 (20분, 0:35~0:55)

> **B트랙은**: 자체 공개 저장소를 운영하는 팀. 본인 저장소에 5개 파일을 **직접 작성**하고 머지한다. A트랙보다 작성량이 많지만, 그게 본 트랙의 핵심 학습.

#### 6.4.1 B트랙 단계별 절차

| 시각 | 분량 | 활동 | 명령어/도구 |
|----|---|----|--------|
| 0:35~0:40 | 5분 | 라이선스 결정 (§5.6 결정 트리 사용) | https://choosealicense.com/ |
| 0:40~0:55 | 15분 | 5개 파일 작성 + README v2 + PR 머지 | 아래 명령어 시퀀스 |

#### 6.4.2 B트랙 명령어 시퀀스 (복붙 가능)

```bash
# 1. 팀 저장소 클론
git clone https://github.com/<팀이름>/<저장소>.git
cd <저장소>

# 2. 신뢰 구조 5종 세트 브랜치
git checkout -b feat/community-standards

# 3. LICENSE 추가 (예: Apache-2.0 — 기업 친화 + 특허 보호)
gh license create Apache-2.0 --repo <팀이름>/<저장소>
# 또는 GitHub 웹에서 "Add file > Create new file > LICENSE" → 라이선스 템플릿 자동 제안

# 4. CONTRIBUTING.md / CODE_OF_CONDUCT.md / SECURITY.md 추가
# GitHub Web UI에서 .github/ 폴더 만들고 빈 파일 생성 → 우측 "Suggest a file" 활용 가능
# 또는 로컬에서:
mkdir -p .github/ISSUE_TEMPLATE
cat > CONTRIBUTING.md  # 본 자료 §10.2 템플릿 복붙
cat > CODE_OF_CONDUCT.md  # 본 자료 §10.3 — Contributor Covenant 2.1 권장
cat > SECURITY.md  # 본 자료 §10.4 템플릿
cat > .github/ISSUE_TEMPLATE/bug_report.yml  # 본 자료 §10.5
cat > .github/pull_request_template.md  # 본 자료 §10.6

# 5. README v2 — 운영 규칙 섹션 추가 (§10.1 골격)

# 6. 커밋 + PR
git add LICENSE CONTRIBUTING.md CODE_OF_CONDUCT.md SECURITY.md .github/ README.md
git commit -m "feat: add community standards 5-set + README v2 (운영 규칙 섹션 포함)"
git push -u origin feat/community-standards
gh pr create --title "feat: 신뢰 구조 5종 세트 + README v2" \
  --body "$(cat <<'EOF'
## 변경 사항
- LICENSE: Apache-2.0 (이유: 기업 친화 + 특허 보호)
- CONTRIBUTING.md: 기여 절차 / 코드 스타일 / 라이선스 정책
- CODE_OF_CONDUCT.md: Contributor Covenant 2.1
- SECURITY.md: 취약점 보고 채널
- Issue Template: bug_report.yml
- PR Template: pull_request_template.md
- README v2: 운영 규칙 섹션 추가

## 체크리스트
- [x] LICENSE SPDX 식별자 명시
- [x] CONTRIBUTING에 라이선스 정책 섹션
- [x] CoC에 신고 이메일 명시
- [x] SECURITY에 SLA 명시
EOF
)"

# 7. 자체 저장소이므로 self-review 후 머지
gh pr merge --squash
```

#### 6.4.3 B트랙 체크리스트 (멘토용)

```
☐ LICENSE 선택: SPDX 식별자 1개 (MIT / Apache-2.0 / GPL-3.0 / AGPL-3.0 / LGPL / MPL-2.0)
☐ LICENSE 선택 이유 1단락 (CONTRIBUTING.md에 작성)
☐ CONTRIBUTING.md — 기여 절차 + 코드 스타일 + 라이선스 정책 3섹션
☐ CODE_OF_CONDUCT.md — Contributor Covenant 2.1 또는 동등
☐ SECURITY.md — 보고 채널 + SLA
☐ Issue Template — bug_report.yml 또는 .md
☐ PR Template — 변경 요약 + 체크리스트
☐ README v2 — "운영 규칙" 섹션 추가
☐ PR 머지
☐ Insights → Community Standards 5개 항목 ✓
```

#### 6.4.4 B트랙 예상 산출물 (스크린샷 묘사)

> 멘토가 학생 저장소를 열어서 확인해야 할 것:
>
> - 저장소 메인 페이지 우측 사이드바에 "License" 배지 (예: Apache-2.0)
> - "Code of conduct" 배지
> - "Security policy" 배지
> - 새 Issue 작성 시 템플릿이 자동 표시 (`Bug report` 카드)
> - 새 PR 작성 시 본문에 PR Template이 자동 채워짐
> - Insights → Community Standards: **6/6 또는 5/5 ✅** (저장소 종류에 따라 6개 = README/CoC/Contributing/License/Issue Template/PR Template 또는 5개)

### 6.5 트랙 합류 (0:55 종료 시점)

| 항목 | A트랙 | B트랙 |
|----|------|------|
| LICENSE | 외부 OSS와 호환되는 라이선스 선택 | 자기 프로젝트 성격에 맞는 라이선스 선택 |
| CONTRIBUTING | 외부 OSS의 톤을 참조해 새로 작성 | 자체 작성 |
| 결과물 형식 | PR 머지 + 외부 vs 우리 비교 메모 | PR 머지 + LICENSE 선택 이유 메모 |
| **공통** | **5종 세트 6/6 ✓ + README v2 + PR 머지** | **(동일)** |

> **합류 원칙**: 6회차 발표 시 두 트랙 모두 "라이선스와 운영 정책" 항목으로 발표. 그 발표 내용의 1차 재료가 본 25분의 산출물이다.

### 6.6 fallback (예상 사고)

| 사고 | 대응 |
|----|----|
| 라이선스를 못 고르는 팀 | 멘토가 §5.6 결정 트리를 1장 띄우고 5분 안에 결정 도와줌 — 못 정하면 일단 MIT |
| GitHub Web UI에서 LICENSE 자동 생성을 모름 | "Add file" → 파일명 `LICENSE` → GitHub이 자동으로 라이선스 템플릿 제안 (스크린샷 묘사: 우측에 "Choose a license template" 카드 5장) |
| `.github/` 디렉터리 만들기를 모름 | 로컬에서 `mkdir -p .github/ISSUE_TEMPLATE` 또는 GitHub Web UI에서 "Add file > Create new file > .github/pull_request_template.md" |
| Templates가 적용 안 됨 (새 PR/Issue에서 안 보임) | (1) 파일 위치 확인 — 반드시 `.github/` 또는 루트 또는 `docs/` (2) 브랜치 확인 — `main` 브랜치에 있어야 |
| 시간 초과 (25분에 못 끝냄) | 5종 중 LICENSE + PR Template 2개 우선 머지 → 나머지는 멘토링 60분에 완성 |

---

## 7. 0:55~1:10 — 개념 2블록: AI 시대 라이선스 쟁점 (15분)

> **why-now**: 학생은 5종 세트를 박았다. 그런데 그 세트가 "AI 시대"에 충분한가? 모델 weights는? 학습 데이터는? AI가 짠 코드의 라이선스 출처는? — 이 15분은 다음 주(4회차) AI 본격 활용 전에 반드시 깔아야 할 안전망이다.

### 7.1 슬라이드 12 — 왜 AI 시대에 라이선스가 다시 문제인가 (3-12)

```
3가지 새로운 질문

  1. 모델 weights 라이선스
     →  코드는 OSS인데 weights는 비상업적이면?
        예: Stable Diffusion 3 — 코드 OSS, weights 비상업적

  2. 학습 데이터의 출처
     →  GPL 코드가 학습 데이터에 들어갔으면 출력물도 GPL?
        (법원 판례 정착 중. 2026년 시점 진행형 이슈)

  3. AI가 생성한 코드의 라이선스
     →  Copilot이 짠 코드를 우리 MIT 프로젝트에 머지해도 되나?
        →  학습 데이터에 GPL 코드가 있다면?
        ★ 그래서 5회차에 "AI 코드 라이선스 출처 의심 시 머지 금지" 룰 명문화
```

### 7.2 슬라이드 13 — OSI Open Source AI Definition 1.0 (3-13, LO 3 직접 측정점)

```
OSI가 정의한 "Open Source AI System"의 4 freedoms

  Use     —  목적 제한 없이 사용 (허가 받지 않고)
  Study   —  시스템이 어떻게 동작하는지 검사
  Modify  —  목적에 맞게 수정 (출력 변경 포함)
  Share   —  수정 여부와 무관하게 재배포

이 자유를 행사하려면 다음 3가지 접근이 필요:

  (1) 데이터 정보   학습 데이터에 대한 충분한 설명
                     (※ 데이터 자체 공개가 아니라 "정보" — 합법성 고려)
  (2) 코드          학습·실행에 사용된 완전한 소스 코드
  (3) 파라미터      모델 weights / configuration
```

> 출처: OSI, *The Open Source AI Definition – 1.0* (2024-10-28). https://opensource.org/ai/open-source-ai-definition

### 7.3 슬라이드 14 — Llama vs Apache-2.0 (3-14)

```
              Llama 4 Community License (Meta)        Apache-2.0 (OLMo 2)
  ─────────  ─────────────────────────────  ──────────────────────────
  사용         O (조건부)                              O
  수정         O (조건부)                              O
  공유         O ("Built with Llama" 의무)             O
  특허 권리    명시 X                                  명시 O
  사용자 한계  ✗ 700M MAU 이상 별도 허가              없음
  학습 데이터  비공개                                  공개
  OSI 인정    ✗ 명시적으로 부정                       ★ 적합 (OLMo 2 사례)
```

> 자료 풀 §5.2.

**강사 멘트** (5분):

> "Llama 4 라이선스가 'Llama Community License'라는 이름이라서 학생들 다수가 '커뮤니티니까 오픈소스겠지' 싶다. 아니다. **이름에 속지 마라.** OSI 인증 없는 라이선스는 OSS가 아니다. 우리가 OSI 인증된 라이선스 6종을 본 이유가 이거다. — 그렇다고 Llama 못 쓰는 건 아니다. 그건 **'사용 가능 모델'이지 '오픈소스 모델'은 아니다**. 마케팅 단어와 OSI 정의를 분리해서 말하는 능력이 오늘의 LO 3이다."

### 7.4 슬라이드 15 — 메타데이터 케이스: AI 모델별 라이선스 표 (3-15)

| 모델/프로젝트 | 라이선스 | OSI 정의 적합? | 핵심 쟁점 |
|----|----|----|----|
| **Llama 4 (Meta)** | Llama Community License | ✗ 부적합 | "Built with Llama" 의무 + 700M MAU 별도 허가 |
| **Mistral Large 3 (2025-12)** | Apache-2.0 (코드+weights) | △ 부분 적합 | 학습 데이터 정보 미충족 |
| **OLMo 2 (Allen AI)** | Apache-2.0 (모두) | ✓ 적합 | OSI 정의 충족 첫 사례 중 하나 |
| **DeepSeek R1** | MIT (weights) | △ 부분 적합 | 학습 데이터 비공개 |
| **Qwen 3** | Apache-2.0 | △ | Mistral과 비슷 |
| **Stable Diffusion 3** | Stability AI 비상업적 | ✗ 부적합 | "오픈" 마케팅 vs 라이선스 실체 차이 |

> 자료 풀 §5.2 라이선스 케이스북 (AI 영역).

### 7.5 4회차 빌드업 한 줄 (마지막 1분)

> **강사 멘트**: "다음 주에 우리는 AI를 본격 도구로 쓴다 — 그 AI가 짠 코드를 너희 MIT 프로젝트에 머지하기 전에, 오늘 배운 'OSI 정의 + 라이선스 호환성'이 다시 등장한다. **AI가 GPL 코드를 학습했다면 그 출력물도 GPL일 가능성?** 그건 5회차에서 '머지 금지 룰'로 매듭짓는다. 오늘은 거기까지 가는 다리를 놓은 거다."

---

## 8. 1:10~1:22 — 실습 EX-3C: AI에게 라이선스 리스크 질문 (12분, AI 미니, 보강 1+2)

> **why-now**: 라이선스를 외운 학생은 6주 뒤에 잊는다. 라이선스를 **자기 프로젝트에 적용해서 6개월 뒤 시뮬레이션 한 학생**은 안 잊는다. 그리고 그 시뮬레이션을 AI에게 시켜서 **사람이 검증**하는 흐름이 4회차 본격화의 예고편이다. 이 12분이 보강 요청 1과 2를 동시에 채운다.

### 8.1 실습 ID와 산출물

| 항목 | 값 |
|----|----|
| **실습 ID** | **EX-3C** (3회차 세 번째 등장) |
| **분량** | 12분 |
| **트랙** | 공통 (A/B 모두) |
| **AI 도구** | Claude / Copilot / Cursor 중 1개 (학생 본인 계정) |
| **산출물** | (1) AI 출력 + (2) 사람 검증 메모 + (3) CONTRIBUTING.md "라이선스 정책" 섹션 추가 PR |

### 8.2 슬라이드 16 — EX-3C 진행 절차 (3-16)

```
12분 안에 너희가 할 일

  STEP 1 (3분)  너희 라이선스 + 프로젝트 한 줄 요약을 AI에 입력
  STEP 2 (3분)  AI에 다음 질문:
                "이 라이선스를 우리 프로젝트에 쓸 때
                 6개월 뒤 발생할 수 있는 리스크 3개"
  STEP 3 (3분)  AI 답변 받음 + 1개 이상 사람이 검증
                (자료 풀 §5 / OSI / choosealicense.com 으로 확인)
  STEP 4 (3분)  검증 결과를 CONTRIBUTING.md "라이선스 정책" 섹션에 녹임
                + PR 머지

★ AI 답변을 그대로 안 쓴다. 사람이 1줄이라도 수정/확인한 흔적이 남아야 한다.
```

### 8.3 슬라이드 17 — 실제 프롬프트 예시 (3-17)

#### 프롬프트 (학생이 복붙 가능)

```
나는 [팀명]이다. 우리는 [프로젝트 한 줄 설명]을 만들고 있다.
저장소 URL은 [https://github.com/...]이다.
우리는 [라이선스 SPDX] 라이선스를 선택했다.

이 라이선스를 우리 프로젝트에 쓸 때 6개월 뒤 발생할 수 있는
리스크 3개를 구체적 시나리오와 함께 알려줘.
각 리스크마다:
  1. 시나리오 1줄
  2. 발동 조건 1줄
  3. 우리가 미리 할 수 있는 대응 1줄

마지막에 OSI 또는 choosealicense.com URL 1개 이상을
검증 자료로 함께 제공해줘.
```

#### 예상 응답 패턴 (Claude/Copilot가 보통 답하는 형태)

```
리스크 1: 의존성 라이선스 충돌
  시나리오: 너희 MIT 프로젝트가 GPL 라이브러리를 의존성으로 추가하면,
           너희 프로젝트 전체가 GPL 의무에 묶일 가능성.
  발동 조건: GPL 라이브러리를 직접 import 하고, 너희 코드와 같은
           바이너리/배포물에 포함될 때.
  대응: 의존성 추가 전 SPDX 라이선스 확인 + ScanCode/FOSSA 자동 검사
       워크플로우 추가.
  검증: https://choosealicense.com/licenses/mit/

리스크 2: 특허권 분쟁
  시나리오: MIT는 특허 권리를 명시하지 않으므로, 기여자가 자기
           특허를 주장하면 사용자가 분쟁에 휘말릴 수 있음.
  발동 조건: 외부 contributor가 특허 보유한 알고리즘을 기여하고
           추후 권리 주장.
  대응: Apache-2.0으로 변경 검토 (특허 권리 명시) 또는 CLA 도입.
  검증: https://opensource.org/licenses/MIT vs https://opensource.org/licenses/Apache-2.0

리스크 3: 외부 contributor 부재
  시나리오: MIT가 너무 자유로워서 외부 contributor가 "왜 굳이 기여?"
           라고 느낄 수 있음 — 카피레프트로 자유 보장 호소력 부재.
  발동 조건: 6개월 뒤에도 외부 PR이 0건일 때.
  대응: 이슈 라벨 정비 + good-first-issue 풀 + 응답 SLA 약속.
  검증: https://opensource.guide/best-practices/
```

### 8.4 사람 검증 단계 (학생이 1개 이상 해야 하는 일)

> 학생은 위 답변 중 **최소 1개 리스크에 대해** 다음 중 하나를 한다:

```
☐ 검증 방법 A — 답변에 나온 URL 직접 방문해서 1줄 인용 추가
☐ 검증 방법 B — 자료 풀 §5 라이선스 케이스북에서 같은 사례 찾기
☐ 검증 방법 C — choosealicense.com 또는 opensource.org에서 반대 의견 찾기
☐ 검증 방법 D — AI 답변이 틀렸다고 판단하면 그 이유를 1줄로 적기

검증 결과는 다음 형식으로 CONTRIBUTING.md에 녹임:

## 라이선스 정책
우리는 [라이선스 이름]을 선택했다. 이유: ...

### 알려진 리스크 (AI 분석 + 사람 검증)
- 리스크 1: [한 줄 시나리오]
  - 대응: [한 줄]
  - 검증 출처: [URL]
- 리스크 2: ...
- 리스크 3: ...

### AI 사용 로그
| 단계 | 도구 | 프롬프트 | 사람이 검증한 것 |
|----|----|------|-----------|
| 라이선스 리스크 분석 | Claude | "6개월 뒤 리스크 3개..." | 리스크 1 URL 직접 확인 / 리스크 2는 OSI 페이지 추가 |
```

### 8.5 fallback

| 상황 | 대응 |
|----|----|
| AI 답변이 너무 일반적 ("리스크: 라이선스 위반") | 강사가 1개 구체 사례 시연: "GPL 라이브러리를 MIT 프로젝트에 import 하면 어떻게 되나? — Linux 커널이 GPL이라 우리가 import 하는 순간 우리도 GPL." |
| AI 답변에 환각 (없는 URL, 가짜 사례) | 그 사실 자체가 가장 좋은 학습 — 검증 없는 AI 사용의 위험을 학생이 자기 손으로 발견. CONTRIBUTING에 "AI 답변 환각 발견 사례 1건" 메모 |
| 학생이 AI 도구 접근 권한 없음 | 옆 사람과 페어. 본인이 프롬프트 입력, 옆 사람이 검증 |
| 12분 안에 CONTRIBUTING 머지 못 함 | AI 출력 + 검증 메모는 GitHub Issue 1개로 우선 발행 → 멘토링 60분에 PR 머지 |

### 8.6 강사 마무리 한 줄 (1:22)

> "**AI 활용 능력 = 검증 능력**이다. 평가 채점에서 'AI 썼나?'가 아니라 '사용하고 검증했나?'로 본다. 오늘 너희 CONTRIBUTING.md에 한 줄이라도 사람이 검증한 흔적이 남으면, 그게 4회차 본격화의 첫 돌이다."

---

## 9. 1:22~1:30 — 메인테이너 4가지 책임 + KPT 5분 + 다음 회차 전이 (8분)

### 9.1 슬라이드 18 — 메인테이너의 4가지 책임 (3-18, 3분, 1:22~1:25)

```
오픈소스 메인테이너(maintainer)의 4가지 책임

  1. 이슈 분류 (Triage)
     - 새 이슈를 24~72시간 안에 라벨링
     - 중복/유효성 판단
     - good-first-issue 큐레이션

  2. PR 리뷰
     - PR 응답 SLA 명시 (예: 평일 7일 내)
     - 코드 리뷰 + 라이선스 호환성 + 테스트 통과 확인

  3. 릴리즈
     - SemVer (MAJOR.MINOR.PATCH) 준수
     - CHANGELOG.md 유지
     - GitHub Releases 노트 작성

  4. 로드맵
     - 분기/연 단위 방향 공유 (Discussions / Wiki / Issue)
     - 큰 변경 전 RFC 절차

★ 다음 회차부터 너희가 메인테이너가 된다.
   — 너희 저장소에 외부 PR이 들어오면 24~72시간 안에 응답해야 한다.
```

> 출처: GitHub Docs, *Setting up your project for healthy contributions*. https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions

### 9.2 KPT 5분 (1:25~1:30)

#### 슬라이드 19 — 핵심 메시지 재노출 (샌드위치 마무리, 3-19)

> **오픈소스는 "공개"가 아니라 사용·수정·배포·기여를 허용하는 규칙과 신뢰 구조다.**
> **라이선스는 그 신뢰의 첫 페이지다.**
>
> 오늘 너희 GitHub에 6개의 흔적이 남았다.
> LICENSE / CONTRIBUTING / COC / SECURITY / Templates / README v2.

#### KPT 양식 (학생 1줄씩, 5분)

```
회차 3 / 학생명 ___

K (Keep — 잘된 것):
  __________________________________

P (Problem — 막힌 것):
  __________________________________

T (Try — 다음 회차에 시도할 것):
  __________________________________

오늘 GitHub에 남긴 흔적: __________________
다음 회차 들어올 때 챙겨올 것: ____________
```

> 제출 형식: 포스트잇 / 노션 / 단톡방 댓글 — 운영 환경에 맞게 택1.

### 9.3 슬라이드 20 — 다음 회차 전이 (3-20)

```
이제 우리 저장소는 외부 신뢰를 받을 준비가 됐다.
LICENSE도 있고, 기여 가이드도 있고, 보안 채널도 있고.

다음 주에는 이 위에서 AI를 본격 도구로 쓴다.
  - 낯선 코드 분석
  - 이슈 재현
  - PR 본문 작성
  - 운영 자동화

단, 1·2·3회차에서도 이미 AI를 써왔다는 걸 잊지 마라.
4회차는 처음 쓰는 게 아니라, 본격화하는 회차다.
```

**강사 멘트**:

> "오늘 너희가 만든 5종 세트가 다음 주에 다시 등장한다. AI가 짠 코드를 머지하기 전에 — '이거 GPL 코드 학습한 거 아닌가?' 라고 자문할 때, 너희 CONTRIBUTING.md의 '라이선스 정책' 섹션이 답을 준다. 오늘 만든 게 다음 주의 안전망이다. **그게 운영 신뢰 구조의 의미다.**"

---

## 10. 부록: 신뢰 구조 5종 세트 표준 템플릿 (학생 복붙용)

> **사용법**: 본 §10은 EX-3B 25분 안에 5개 파일을 머지하기 위한 스타터 템플릿. 학생은 그대로 복붙하지 말고 **자기 프로젝트 이름과 라이선스 선택을 적어 넣은 뒤** 머지한다.
>
> **출처**: GitHub Docs, *Setting up your project for healthy contributions* (https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions) / Contributor Covenant 2.1 (https://www.contributor-covenant.org/version/2/1/code_of_conduct/) / 자료 풀 §3.3 + §1.1.

### 10.1 README v2 표준 골격

```markdown
# [프로젝트 이름]

[한 줄 소개 — 무엇을 / 누구를 위해 / 왜]

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![Code of Conduct](https://img.shields.io/badge/Code_of_Conduct-Contributor_Covenant-purple.svg)](CODE_OF_CONDUCT.md)

## 시작하기 (Getting Started)

```bash
git clone https://github.com/<owner>/<repo>.git
cd <repo>
# 설치 명령어
```

## 사용법 (Usage)

[3줄 이내 사용 예시]

## 기여 (Contributing)

기여를 환영합니다. [CONTRIBUTING.md](CONTRIBUTING.md)를 먼저 읽어주세요.
- Issue를 발행하기 전에 [Issue Template](.github/ISSUE_TEMPLATE/)을 사용해주세요.
- PR 응답 SLA: 평일 7일 이내.

## 운영 규칙 (Governance) ★ 본 회차에 추가된 섹션

이 프로젝트는 다음 6개 문서로 운영됩니다.
- [LICENSE](LICENSE) — 라이선스 (SPDX: [Apache-2.0])
- [CONTRIBUTING.md](CONTRIBUTING.md) — 기여 절차와 라이선스 정책
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — 행동 강령 (Contributor Covenant 2.1)
- [SECURITY.md](SECURITY.md) — 보안 취약점 보고 채널
- [.github/ISSUE_TEMPLATE/](.github/ISSUE_TEMPLATE/) — Issue 양식
- [.github/pull_request_template.md](.github/pull_request_template.md) — PR 양식

메인테이너 책임 (3회차 강의 §9.1 인용):
1. Issue 분류 — 24~72시간 내 라벨링
2. PR 리뷰 — 평일 7일 SLA
3. 릴리즈 — SemVer 준수
4. 로드맵 — Discussions에서 공유

## 라이선스

이 프로젝트는 [Apache-2.0](LICENSE) 라이선스로 배포됩니다.
선택 이유는 [CONTRIBUTING.md#라이선스-정책](CONTRIBUTING.md)을 참조하세요.

## 메인테이너

- [@user1](https://github.com/user1)
- [@user2](https://github.com/user2)

## 감사

이 프로젝트는 "AI 시대의 오픈소스 실전" 강의(2026 봄)의 결과물입니다.
```

### 10.2 CONTRIBUTING.md 표준 템플릿

```markdown
# 기여 가이드 (Contributing)

[프로젝트 이름]에 기여해주셔서 감사합니다. 본 문서는 우리 프로젝트의
기여 절차와 정책을 설명합니다.

## 시작하기 전에

1. [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)를 읽어주세요.
2. [Issue 목록](../../issues)에서 작업하려는 내용이 이미 있는지 확인하세요.
3. 처음이라면 [`good-first-issue`](../../labels/good%20first%20issue) 라벨을 보세요.

## 기여 절차

1. **Fork 또는 브랜치 생성**
   ```bash
   git checkout -b feat/<짧은-설명>
   ```
2. **커밋 메시지** — Conventional Commits 권장
   - `feat:` 새 기능 / `fix:` 버그 수정 / `docs:` 문서 / `test:` 테스트 / `refactor:` 리팩터링
3. **PR 작성** — [PR Template](.github/pull_request_template.md) 채우기
4. **리뷰 대응** — 평일 7일 내 응답이 SLA. 응답 없으면 `@maintainer` 멘션.

## 코드 스타일

- [언어별 표준 스타일 가이드 링크]
- 들여쓰기: 2 spaces (또는 프로젝트 표준)
- 테스트: 모든 새 기능에 테스트 추가

## 라이선스 정책 ★ EX-3C 결과 녹이는 자리

이 프로젝트는 **[Apache-2.0]** 라이선스로 배포됩니다.

### 라이선스 선택 이유 (1단락)

[왜 Apache-2.0을 골랐는지 1단락. 예: 기업이 안전하게 사용하길 원하고,
특허 권리 명시가 필요하며, OSI 인증된 메이저 라이선스 중 가장
산업 친화적이라고 판단했다.]

### 알려진 리스크 (AI 분석 + 사람 검증)

- **리스크 1**: [시나리오 1줄] — 대응: [1줄] — 검증: [URL]
- **리스크 2**: [시나리오 1줄] — 대응: [1줄] — 검증: [URL]
- **리스크 3**: [시나리오 1줄] — 대응: [1줄] — 검증: [URL]

### 외부 라이브러리 라이선스 호환성 룰

1. **새 의존성을 추가할 때 SPDX 식별자를 확인한다.**
2. GPL/AGPL 라이브러리를 직접 import 하지 않는다 (우리 라이선스가 강 카피레프트가 아니라면).
3. 의심되면 [ScanCode Toolkit](https://github.com/aboutcode-org/scancode-toolkit) 또는
   [FOSSA](https://github.com/marketplace/fossa)로 자동 검사.
4. **AI가 제안한 코드의 라이선스 출처가 의심되면 머지하지 않는다** (5회차에서 추가될 룰).

### AI 사용 로그 (4회차부터 PR 템플릿 강제 필드)

기여 시 AI를 사용했다면 PR 본문의 "AI 사용 로그" 표를 채워주세요.

| 단계 | AI 도구 | 프롬프트 (요약) | 사람이 검증한 것 |
|----|------|----------|-----------|
| ... | ... | ... | ... |

## 메인테이너 책임 (참고)

이 프로젝트의 메인테이너는 다음 4가지를 약속합니다.
- Issue 분류: 24~72시간 내 라벨링
- PR 리뷰: 평일 7일 SLA
- 릴리즈: SemVer 준수, CHANGELOG.md 유지
- 로드맵: 분기 단위 Discussions에서 공유
```

### 10.3 CODE_OF_CONDUCT.md 표준 템플릿 (Contributor Covenant 2.1)

```markdown
# 행동 강령 (Code of Conduct)

## 우리의 약속

우리는 모든 사람에게 차별 없는 환경을 보장하기 위해 다음을 약속합니다.

[Contributor Covenant 2.1 한국어 번역 본문 — https://www.contributor-covenant.org/ko/version/2/1/code_of_conduct/ 에서 복사]

## 신고 방법

행동 강령 위반을 발견하면 다음 채널로 신고해주세요.

- 이메일: [team-conduct@example.com]
- 익명 폼: [https://forms.example.com/...]

신고는 비공개로 처리됩니다. 신고자 정체는 보호됩니다.

## 적용 범위

이 행동 강령은 프로젝트의 모든 공간(GitHub Issues / PRs / Discussions /
단톡방 / 외부 발표 등)에서 적용됩니다.

## 출처

본 문서는 [Contributor Covenant](https://www.contributor-covenant.org), 버전 2.1을
바탕으로 작성되었습니다.
```

> 출처: Contributor Covenant 2.1. https://www.contributor-covenant.org/version/2/1/code_of_conduct/
> 한국어판: https://www.contributor-covenant.org/ko/version/2/1/code_of_conduct/

### 10.4 SECURITY.md 표준 템플릿

```markdown
# 보안 정책 (Security Policy)

## 지원되는 버전

| 버전 | 보안 패치 지원 |
|----|--------|
| 1.x.x | ✅ |
| 0.x.x | ⛔ (마이그레이션 권장) |

## 취약점 보고

**이슈 트래커에 공개로 보고하지 마세요.**

대신 다음 채널로 비공개 보고해주세요.

- **GitHub Private Vulnerability Reporting**:
  저장소의 [Security 탭](../../security) → "Report a vulnerability"
- **이메일**: [team-security@example.com]
- **GPG 키**: [keys.openpgp.org/...](선택)

## 보고 후 절차

1. **수신 확인**: 24시간 내 (영업일 기준)
2. **재현 시도**: 7일 내
3. **수정 패치**: 30일 내 (심각도에 따라 가변)
4. **공개 disclosure**: 패치 배포 후 30일 내 (CVE 발급 시)

## 알려진 위험

- 우리 프로젝트는 [위험 1] 영역에서 다음 가정에 의존합니다: ...
- 외부 의존성의 취약점은 [Dependabot](../../security/dependabot)으로 추적합니다.

## 안전 장치

- secret scanning 활성화 ✅
- Dependabot 활성화 ✅
- 의존성 라이선스 스캔 (ScanCode/FOSSA) — 분기 1회

## 출처

본 정책은 GitHub의 *About supply chain security*
(https://docs.github.com/en/code-security/supply-chain-security)와
OWASP Top 10 for LLM Applications
(https://owasp.org/www-project-top-10-for-large-language-model-applications/)를
참고했습니다.
```

> 출처: GitHub Docs, *About supply chain security*. https://docs.github.com/en/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview

### 10.5 Issue Template — bug_report.yml (GitHub Issue Forms)

```yaml
name: 버그 리포트
description: 우리 프로젝트의 버그를 발견했을 때 사용해주세요.
title: "[Bug] "
labels: ["bug", "needs-triage"]
body:
  - type: markdown
    attributes:
      value: |
        ## 버그 리포트
        보고 전 [기존 Issue](../../issues?q=is%3Aissue)에 같은 버그가 있는지 확인해주세요.

  - type: textarea
    id: what-happened
    attributes:
      label: 무슨 일이 일어났나요?
      description: 발생한 현상을 1~3줄로 설명해주세요.
    validations:
      required: true

  - type: textarea
    id: reproduce
    attributes:
      label: 재현 절차
      description: 1, 2, 3 단계로 적어주세요. AI에게 재현 절차를 정리해달라고 요청해도 좋습니다 (사람이 검증 필수).
      placeholder: |
        1. ...
        2. ...
        3. ...
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: 기대한 동작
    validations:
      required: true

  - type: input
    id: version
    attributes:
      label: 버전
      placeholder: "v1.2.3 또는 commit SHA"
    validations:
      required: true

  - type: input
    id: env
    attributes:
      label: 환경
      placeholder: "macOS 14.5 / Node 20.10"

  - type: textarea
    id: logs
    attributes:
      label: 로그 또는 스크린샷
      render: shell

  - type: checkboxes
    id: terms
    attributes:
      label: 행동 강령
      options:
        - label: "[CODE_OF_CONDUCT.md](../blob/main/CODE_OF_CONDUCT.md)를 읽었고 동의합니다."
          required: true
```

> 출처: GitHub Docs, *Configuring issue templates for your repository*. https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository

### 10.6 PR Template — pull_request_template.md

```markdown
## 변경 사항 요약 (3줄 이내)

[무엇을 / 왜 / 어떻게]

## 관련 Issue

Closes #___

## 변경 유형

- [ ] 새 기능 (feat)
- [ ] 버그 수정 (fix)
- [ ] 문서 (docs)
- [ ] 테스트 (test)
- [ ] 리팩터링 (refactor)
- [ ] 운영/CI (chore)

## 체크리스트

- [ ] 로컬에서 테스트 통과
- [ ] CHANGELOG.md 업데이트 (해당 시)
- [ ] 문서 업데이트 (해당 시)
- [ ] 의존성 추가 시 SPDX 라이선스 확인 완료
- [ ] [CONTRIBUTING.md](CONTRIBUTING.md)의 라이선스 정책 준수

## 스크린샷 / 데모 (해당 시)

(이미지 또는 GIF)

## AI 사용 로그 (4회차부터 강제 필드 — 3회차는 권장)

이 PR을 만드는 데 AI를 사용했다면 표를 채워주세요.

| 단계 | AI 도구 | 프롬프트 (요약) | 사람이 검증한 것 |
|----|------|----------|-----------|
| | | | |

## 라이선스 출처 확인 (4회차부터 강제)

- [ ] AI가 제안한 코드의 라이선스 출처를 확인했다.
- [ ] 의심되는 부분이 있으면 머지하지 않고 멘토에게 문의했다.

## 리뷰어에게

- 특별히 봐주셨으면 하는 부분: ___
- 검토 후 머지 가능 여부: ___
```

> 출처: GitHub Docs, *Creating a pull request template for your repository*. https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository

### 10.7 LICENSE 파일 — Apache-2.0 예시 시작

```
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   [... 전문은 https://www.apache.org/licenses/LICENSE-2.0.txt ...]

   Copyright [2026] [팀명 또는 본인 이름]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

> **편한 방법**: `gh license create Apache-2.0 --repo <owner>/<repo>` 또는 GitHub Web UI에서 새 파일 이름 `LICENSE`를 입력하면 우측에 라이선스 템플릿 카드가 자동 등장. SPDX 식별자만 고르면 본문 자동 입력.

> 출처: Apache License 2.0 전문. https://www.apache.org/licenses/LICENSE-2.0
> SPDX License List. https://spdx.org/licenses/Apache-2.0.html

---

## 11. 부록: 강사 트러블슈팅 가이드

> **사용법**: 본 §11은 강의 중 사고가 발생했을 때 강사가 30초 안에 결정하기 위한 의사결정 카드. 사전에 한 번 읽어두기.

### 11.1 라이선스/보안 사고 대응 (위험 §5.5 직접 완충)

#### 11.1.1 사고 1 — 학생이 GPL 코드를 MIT 프로젝트에 복붙

```
신호: PR diff에 외부 GPL 프로젝트의 함수가 그대로 들어옴 (식별: 주석 헤더, 변수명 패턴)

대응 1단계 (1분):
  - 즉시 PR 머지 중단
  - 학생에게 "이 코드 어디서 가져왔어?" 직접 질문

대응 2단계 (5분):
  - 머지가 이미 됐다면 즉시 revert 커밋:
    git revert <머지-커밋-SHA>
    git push origin main
  - 머지 전이라면 PR close + 학생이 동일 기능을 본인 손으로 다시 작성

대응 3단계 (히스토리 정리, 필요 시):
  # main 브랜치에서 해당 파일을 영구히 제거
  git filter-repo --path <파일경로> --invert-paths
  # 또는 BFG Repo Cleaner
  java -jar bfg.jar --delete-files <파일이름>.java <저장소>.git
  cd <저장소>
  git reflog expire --expire=now --all && git gc --prune=now --aggressive
  git push --force  # ★ 위험. 팀과 합의 후에만.

대응 4단계 (재발 방지):
  - CONTRIBUTING.md 라이선스 정책 섹션 강화
  - PR Template "라이선스 출처 확인" 체크박스 강제
```

> 출처: BFG Repo-Cleaner. https://rtyley.github.io/bfg-repo-cleaner/
> git-filter-repo. https://github.com/newren/git-filter-repo

#### 11.1.2 사고 2 — 비밀키(API 키)를 커밋

```
신호: PR diff에 sk-..., AKIA..., AIza..., glpat-... 같은 토큰

대응 1단계 (즉시, 1분):
  ★ 그 토큰을 발급한 서비스에서 즉시 폐기/회전
    (GitHub: Settings → Developer Settings → Personal access tokens → Revoke)
    (AWS: IAM → Access Keys → Deactivate → Delete)
    (OpenAI/Anthropic: API Keys → Revoke)

대응 2단계 (5분):
  - 새 키 발급
  - 환경 변수 또는 secret manager로 이전
  - .env 또는 secrets 파일을 .gitignore에 추가

대응 3단계 (히스토리 정리):
  git filter-repo --path .env --invert-paths
  # 또는 BFG로 패턴 제거
  java -jar bfg.jar --replace-text passwords.txt <저장소>.git
  git push --force  # ★ 팀 합의 + 영향받는 fork에 통보

대응 4단계 (재발 방지):
  - GitHub Settings → Code security → Secret scanning ON
  - .gitignore 표준 템플릿 적용 (https://github.com/github/gitignore)
  - pre-commit hook 추가: gitleaks (https://github.com/gitleaks/gitleaks)
```

> 출처: GitHub Docs, *Removing sensitive data from a repository*. https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository

### 11.2 25분 안에 5종 세트 PR이 안 끝나는 팀

```
신호: 0:50에 LICENSE만 머지, 나머지 4개 미작성

대응 1단계 (1분 진단):
  - "어디서 막혔어?" 1줄 질문
  - 보통 답: "CONTRIBUTING 본문을 처음부터 쓰려고 했어요"

대응 2단계 (3분):
  - 본 자료 §10.2 템플릿을 단톡방에 즉시 공유
  - "복붙해서 프로젝트 이름만 바꿔" 1줄 명령

대응 3단계 (시간 부족 시):
  - 5종 중 우선순위 2개만 본 회차에 머지: LICENSE + PR Template
  - 나머지 3개는 멘토링 60분에 완성
```

### 11.3 라이선스를 못 고르는 팀

```
대응 (5분):
  1. §5.6 결정 트리 슬라이드 띄우기
  2. "라이브러리야? 애플리케이션이야?" 1줄 질문
  3. 답이 안 나오면 — 일단 MIT
     이유: "가장 안전한 출발점. 6개월 뒤 Apache-2.0으로 변경 가능"
  4. https://choosealicense.com/ 5분 결정
```

### 11.4 AI 답변에 환각 (없는 URL, 가짜 사례)이 들어옴

```
대응:
  1. ★ 학습 기회로 전환:
     "방금 이 답변에 가짜 URL이 들어갔다. 사람이 검증 안 하면
      너희 CONTRIBUTING.md에 거짓이 박힌다."
  2. 학생이 검증 단계에서 환각을 발견한 사실을 CONTRIBUTING에 메모
  3. EX-3C 산출물에 "AI 환각 발견 사례 1건"으로 기록
```

### 11.5 GitHub Insights → Community Standards가 100% 안 됨

```
신호: 5개 파일을 다 박았는데 Community Standards가 4/5 또는 5/6

진단 체크리스트:
  ☐ LICENSE 파일이 루트에 있나? (.github/ 안에 있으면 인식 안 됨)
  ☐ 파일 이름이 정확한가?
     - LICENSE (대문자)
     - CODE_OF_CONDUCT.md (대소문자 정확)
     - SECURITY.md
  ☐ ISSUE_TEMPLATE는 디렉터리 (.github/ISSUE_TEMPLATE/) 안에 있나?
  ☐ pull_request_template.md (소문자 + 언더바)
  ☐ 모든 파일이 main 브랜치에 있나?
  ☐ 저장소가 public 또는 internal인가? (private은 일부 항목 미체크)

대응:
  파일을 올바른 위치로 이동 → 5분 안에 100% 됨.
```

> 출처: GitHub Docs, *About community profiles for public repositories*. https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories

### 11.6 학생이 AI 도구 접근 권한 없음

```
대응:
  1. 옆 사람과 페어 — 본인이 프롬프트 작성, 옆 사람이 입력
  2. 무료 옵션 안내:
     - Claude (claude.ai) — 가입 즉시 무료 사용
     - GitHub Copilot Free (https://github.com/features/copilot) — GitHub 계정 있으면 즉시
     - Gemini (https://gemini.google.com) — Google 계정 있으면 즉시
  3. 회차 종료 후 30분 보충 슬롯에 계정 셋업 도와주기
```

### 11.7 학생이 "왜 5개 다 만들어야 해요? 라이선스만 있으면 안 되나요?" 라고 질문

```
대응 (1분):
  "라이선스는 '사용 가능한가'를 답한다. 그 다음 4개는:
   - CONTRIBUTING: 어떻게 도울 수 있나
   - CoC: 어떻게 행동해야 하나
   - SECURITY: 위험을 어디로 보고하나
   - Templates: 어떻게 소통하나

   외부 사람이 너희 저장소에 처음 들어오면 5초 안에 위 4개 질문이 떠오른다.
   답을 안 줘 두면 = 그 사람은 떠난다.

   라이선스는 첫 페이지다. 그 뒤에 4페이지가 더 있다.
   GitHub이 'Community Standards'라는 이름으로 이걸 6개 항목으로 점수 매긴다.
   100%로 만드는 게 오늘의 약속."
```

---

## 12. 멘토링 60분 가이드 (1:30~2:30)

> **이 60분의 위치**: 강의 90분에서 학생이 박은 5종 세트의 **품질 검토** + **라이선스 호환성 점검** + **외부 contributor 받을 준비됐는지** 점검. A트랙은 외부 응답 SLA 추가 점검(위험 §5.2 완충).

### 12.1 60분 운영 표준 (운영표 §4.2)

| 시각 (멘토링 시작 = 0:00) | 분량 | 활동 |
|----------------|---|----|
| 0:00~0:10 | 10분 | 팀 헬스 체크 — 팀별 1분씩 순회 |
| 0:10~0:45 | 35분 | 팀별 5종 세트 라이브 점검 (팀당 5~7분) |
| 0:45~0:55 | 10분 | 다음 주 약속 카드 작성 + 멘토 사인 |
| 0:55~1:00 | 5분 | 마무리 + 비동기 채널 안내 |

### 12.2 3회차 팀별 점검 체크리스트 (운영표 §4.3 — 3회차 행)

```
공통:
  ☐ 지난 회차 누적 산출물(저장소·Issue·첫 PR)이 GitHub에 살아있는가?
  ☐ 팀 헌법(1회차 작성)이 준수되고 있는가?
  ☐ 팀원 전원이 첫 commit 이상 했는가?
  ☐ AI 사용 로그가 채워지고 있는가? (보강 요청 2)
  ☐ 다음 회차(4회차) 도입 훅("낯선 저장소 5분 분석")에 답할 준비인가?

3회차 추가:
  ☐ LICENSE                    (SPDX 식별자 / 선택 이유 1단락)
  ☐ CONTRIBUTING.md            (기여 절차 + 라이선스 정책 + AI 사용 로그 표)
  ☐ CODE_OF_CONDUCT.md         (Contributor Covenant 2.1 또는 동등 + 신고 채널)
  ☐ SECURITY.md                (보고 채널 + SLA)
  ☐ Issue/PR Templates         (.github/ 위치 / main 브랜치)
  ☐ README v2 (운영 규칙 섹션)
  ☐ GitHub Insights → Community Standards: 100%
  ☐ EX-3C 결과: AI 라이선스 리스크 분석 + 사람 검증 1건 이상 + CONTRIBUTING에 녹아들어감

A트랙 추가 점검 (위험 5.2):
  ☐ 외부 OSS의 메인테이너 응답 SLA 빠른가? (최근 PR 응답 시간 측정)
  ☐ 안 빠르면 "두 번째 작은 PR을 다른 OSS에 동시 시도" 의사결정
```

### 12.3 멘토 대화 스크립트 (팀당 5~7분)

```
[멘토] "안녕. 5종 세트 어디까지 했어? — Community Standards 보여줘."
[학생] (Insights → Community 화면 띄움)

if 100%:
  [멘토] "좋아. CONTRIBUTING 라이선스 정책 섹션 보여줘. AI 출력 + 사람 검증 흔적 있어?"
  [학생] (CONTRIBUTING.md 띄움)

  if 사람 검증 흔적 있음:
    [멘토] "이 라이선스 6개월 뒤에 외부 contributor가 들어와서 의존성 충돌 일으키면 어떻게 대응할 거야?"
    (학생이 답 못 하면 §5.4 호환성 표 한 번 더 짚어주기)

  else (검증 흔적 없음):
    [멘토] "AI 답변 그대로면 4·5회차 평가에서 점수가 0~5점이다. 1줄이라도 사람이 검증해."
    → 5분 안에 1개 검증해서 추가 PR 머지

else (90% 이하):
  [멘토] "어디서 막혔어?"
  → §11.5 또는 §11.2 트러블슈팅으로 진행

마무리:
  [멘토] "다음 주 4회차 도입 훅: '낯선 저장소를 5분 안에 분석하기 — AI 없이 vs AI와 함께'.
          너희 외부 OSS에서 미리 1개 골라와. 안 그러면 그 자리에서 결정해야 한다."
```

### 12.4 다음 주 약속 카드 (운영표 §4.4)

```
[팀명] _______________
회차 3 → 회차 4 약속

다음 회차(4회차, 5/21) 시작 전까지 우리는 다음을 한다:

  1. (필수) 5종 세트 6/6 ✓ + EX-3C "라이선스 정책" 섹션 머지 완료
            URL: https://github.com/.../pull/___

  2. (강력 권장) 4회차에 분석할 외부 OSS (또는 자체 저장소의 Issue) 1개 사전 결정
              저장소: ___________________________

  3. (선택) GitHub Issue 1개 추가로 — 4회차 EX-4B "본격 PR" 후보로 사용

차단 요인 (있다면): ___________________________________
멘토에게 비동기로 도움받을 채널: ☐ GitHub Discussions ☐ 단톡방 ☐ 1:1 DM

작성자: __________   멘토 사인: __________   일자: 2026-05-14
```

> 보관 위치: 팀 저장소 `docs/mentoring/2026-05-14.md`. 6회차 액션 플랜 작성 시 입력 자료로 누적.

### 12.5 비동기 채널 안내 (5분, 마무리)

```
GitHub Discussions 카테고리:
  - general          — 모든 질문
  - track-A          — A트랙 외부 OSS 관련
  - track-B          — B트랙 자체 저장소 관련
  - ai-help          — AI 도구 활용 질문
  - license-help     ★ 본 회차부터 추가 — 라이선스 호환성/사고 질문

응답 SLA: 멘토 24시간 이내.

다음 회차(4회차) 도입 훅 사전 예고:
  "낯선 저장소를 5분 안에 분석하라. AI 없이 vs AI와 함께. 어느 쪽이 빠를까?"
```

---

## 13. 사후 과제 (수업 후 다음 주까지)

> **why-now**: 본 회차 산출물 6개는 1주일 뒤에 4회차에서 다시 등장한다. AI가 짠 코드를 머지할 때 "라이선스 출처 확인" 룰을 발동시킨다. 그 룰을 다음 주에 흔들림 없이 쓰려면 1주일 동안 5종 세트가 살아있어야 한다.

### 13.1 필수 과제 (1시간 이내)

| # | 과제 | 산출물 | 마감 |
|---|----|------|----|
| 1 | 본 회차에 머지 못 한 5종 세트 항목 마무리 | Community Standards 100% | 5/18(일) 23:59 |
| 2 | EX-3C "라이선스 정책" 섹션을 CONTRIBUTING.md에 녹임 | PR 1개 머지 | 5/18(일) 23:59 |
| 3 | 4회차에 분석할 외부 OSS 1개 또는 자체 저장소 Issue 1개 사전 결정 | 팀 단톡방 또는 Discussions에 URL 공유 | 5/20(화) 23:59 |

### 13.2 강력 권장 과제 (1시간 이내)

| # | 과제 | 산출물 |
|---|----|------|
| 1 | GitHub Settings → Code security → Secret scanning ON / Dependabot ON | 스크린샷 1장 |
| 2 | `.gitignore` 표준 템플릿 적용 (https://github.com/github/gitignore) | PR 머지 |
| 3 | 우리 팀이 고른 라이선스의 OSI 인증 페이지 1줄 인용을 CONTRIBUTING에 추가 | PR 머지 |

### 13.3 선택 과제 (시간 여유 있을 때)

| # | 과제 |
|---|----|
| 1 | ScanCode Toolkit (https://github.com/aboutcode-org/scancode-toolkit) 를 자기 저장소에 1회 돌려보고 결과 캡처 |
| 2 | 다른 팀의 5종 세트를 봐주고 PR 코멘트 1개 남기기 (상호 리뷰) |
| 3 | OLMo 2 (https://github.com/allenai/OLMo) 의 LICENSE/CONTRIBUTING/COC를 분석하고 우리와 비교 메모 1장 |

### 13.4 4회차 사전 학습 (다음 주 수업 전 30분)

> **상세는 4회차 강의자료 §1에서 안내**. 미리 보면 좋은 것:
>
> - Claude Code (CLI) 또는 Cursor 설치 (학생 무료 옵션)
> - 자료 풀 §4 AI 도구 카탈로그 — 6종 비교표 1회 훑기
> - "낯선 저장소"로 분석할 후보 1개 결정 (4회차 EX-4A에서 5분 안에 분석)

---

## 14. 부록: 슬라이드 변환 가이드

> **사용법**: 본 회차 자료를 Slidev/Marp로 변환할 때 H2/H3가 슬라이드 단위. 본 §14는 슬라이드 번호와 본문 §의 매핑.

### 14.1 슬라이드 인덱스

| 슬라이드 # | 본문 § | 제목 | 시각 |
|------|----|----|----|
| 3-1 | §2.1 | 직전 전이 | 0:00 |
| 3-2 | §2.2 | 핵심 메시지 (샌드위치 도입) | 0:01 |
| 3-3 | §3.1 | 함정 질문 — Llama·DeepSeek·Mistral | 0:03 |
| 3-4 | §3.3 | OSI 정답 폭로 | 0:08 |
| 3-5 | §4.1 | LO 3개 | 0:10 |
| 3-6 | §4.2 | 오늘 산출물 약속 6개 | 0:11 |
| 3-7 | §5.1 | 라이선스 6종 한 줄 정의 | 0:13 |
| 3-8 | §5.2 | 사용 시나리오 매핑 | 0:18 |
| 3-9 | §5.3 | 대표 프로젝트 매핑 (실물) | 0:23 |
| 3-10 | §5.4 | 라이선스 호환성 1페이지 메모 | 0:26 |
| 3-10b (전환) | §5.6 | 라이선스 결정 트리 | 0:28 |
| 3-11 | §6.2 | 신뢰 구조 5종 세트 (실습 도입) | 0:30 |
| (3-11A) | §6.3 | A트랙 박스 — 외부 OSS 분석 + 모방 | 0:35 |
| (3-11B) | §6.4 | B트랙 박스 — 자체 저장소에 직접 작성 | 0:35 |
| 3-12 | §7.1 | 왜 AI 시대에 라이선스가 다시 문제인가 | 0:55 |
| 3-13 | §7.2 | OSI Open Source AI Definition 4 freedoms | 1:00 |
| 3-14 | §7.3 | Llama vs Apache-2.0 비교 | 1:04 |
| 3-15 | §7.4 | AI 모델별 라이선스 표 | 1:07 |
| 3-16 | §8.2 | EX-3C 진행 절차 | 1:10 |
| 3-17 | §8.3 | EX-3C 프롬프트 + 예상 응답 | 1:13 |
| 3-18 | §9.1 | 메인테이너 4가지 책임 | 1:22 |
| 3-19 | §9.2 | 핵심 메시지 재노출 (샌드위치 마무리) | 1:25 |
| 3-20 | §9.3 | 다음 회차 전이 | 1:29 |

### 14.2 슬라이드 디자인 원칙

- **1슬라이드 1메시지**: 표 1개 또는 불릿 5개 이하
- **시간 마커 포함**: 우상단에 "0:13~0:30" 같은 시각 표기
- **샌드위치 슬라이드 강조**: 3-2와 3-19는 동일 디자인(같은 핵심 메시지) — 학생이 "아, 한 바퀴 돌았다" 자각
- **트랙 분기 슬라이드는 좌-A / 우-B 2단**: 6.3 + 6.4를 한 슬라이드로 배치 가능
- **인용은 슬라이드 하단**: "출처: OSI, 2024-10-28" 형식

### 14.3 시각화 권장

| 슬라이드 | 권장 시각화 |
|----|----|
| 3-3 (함정 질문) | 3개 모델 로고 가로 배치 + 손들기 아이콘 |
| 3-7 (라이선스 6종) | 카피레프트 강도를 막대 바로 시각화 |
| 3-8 (시나리오 매핑) | 4×6 매트릭스 + 색상 코딩 (★ 추천 = 녹색, ✗ 기피 = 빨강) |
| 3-11 (5종 세트) | 세로로 5개 박스 + 화살표 + README v2가 감싸는 형태 |
| 3-13 (4 freedoms) | 4개 자유 + 3개 접근(데이터/코드/파라미터)의 2단 다이어그램 |
| 3-18 (메인테이너 4책임) | 시계 모양 4분면 + 각 분면에 SLA 표기 |

---

## 15. 부록: 인용 출처 (Reference)

> **양식**: 자료 풀 §1 마스터 표의 형식 그대로. 본문 §과 매핑.

### 15.1 본 회차 핵심 인용

| # | 자료 | 발행처 | URL | 본문 위치 |
|---|----|----|-----|------|
| [6] | The Open Source Definition | OSI | https://opensource.org/osd | §1.1, §3.3 |
| [7] | The Open Source AI Definition – 1.0 | OSI (2024-10-28) | https://opensource.org/ai/open-source-ai-definition | §3.3, §7.2, §7.3 |
| OSI-Approved | OSI Approved Licenses | OSI | https://opensource.org/licenses | §5.1, §13.2 |
| Choose-License | Choose an open source license | GitHub | https://choosealicense.com/ | §1.1, §5.6, §11.3 |
| GH-CoC | Adding a code of conduct to your project | GitHub Docs | https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project | §10.3 |
| GH-Templates | Configuring issue templates / Creating PR template | GitHub Docs | https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests | §10.5, §10.6 |
| GH-Security | About supply chain security | GitHub Docs | https://docs.github.com/en/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview | §10.4, §13.2 |
| GH-Healthy | Setting up your project for healthy contributions | GitHub Docs | https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions | §6.2, §9.1 |
| GH-Community-Profile | About community profiles | GitHub Docs | https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories | §11.5 |
| Contributor-Covenant-2.1 | Contributor Covenant 2.1 | (Coraline Ada Ehmke et al.) | https://www.contributor-covenant.org/version/2/1/code_of_conduct/ | §10.3 |
| Apache-2.0 | Apache License 2.0 (전문) | Apache Software Foundation | https://www.apache.org/licenses/LICENSE-2.0 | §10.7 |
| SPDX-License-List | SPDX License List | SPDX | https://spdx.org/licenses/ | §5.1, §10.7 |

### 15.2 라이선스 케이스북 인용 (자료 풀 §5)

| 케이스 | 자료 풀 위치 | URL |
|----|----|----|
| Llama 4 Community License (원문) | §3.3 C / §5.2 | https://www.llama.com/llama4/license/ |
| Mistral Large 3 Apache-2.0 전환 발표 | §3.3 C / §5.2 | https://mistral.ai/news/ |
| OLMo 2 (Allen AI) | §3.3 A 3A-8 / §5.2 | https://github.com/allenai/OLMo |
| Hunton — Open Source AI Models: How Open Are They Really? (2025) | §3.3 C | https://www.hunton.com/insights/publications/part-1-open-source-ai-models-how-open-are-they-really |

### 15.3 운영 신뢰 구조 모범 저장소 (자료 풀 §3.3 A)

| # | 저장소 | 라이선스 | 모범 항목 | URL |
|---|----|----|----|----|
| 3A-1 | expressjs/express | MIT | LICENSE + CONTRIBUTING + CoC + Triagers Guide | https://github.com/expressjs/express |
| 3A-2 | apache/airflow | Apache-2.0 | NOTICE + CLA + SECURITY | https://github.com/apache/airflow |
| 3A-3 | torvalds/linux | GPL-2.0 | Lieutenant 거버넌스 | https://github.com/torvalds/linux |
| 3A-4 | nextcloud/server | AGPL-3.0 | SaaS-aware 라이선스 | https://github.com/nextcloud/server |
| 3A-5 | mozilla/pdf.js | Apache-2.0 | MPL 모기업 사례 | https://github.com/mozilla/pdf.js |
| 3A-6 | facebook/react | MIT | CONTRIBUTING + CoC + RFC | https://github.com/facebook/react |
| 3A-7 | kubernetes/community | Apache-2.0 | 거대 커뮤니티 거버넌스 | https://github.com/kubernetes/community |
| 3A-8 | allenai/OLMo | Apache-2.0 (모두 공개) | OSI 정의 충족 첫 사례 | https://github.com/allenai/OLMo |

### 15.4 라이선스 스캔/검증 도구

| 도구 | 용도 | URL |
|----|----|----|
| ScanCode Toolkit | 의존성 라이선스 스캔 (OSS) | https://github.com/aboutcode-org/scancode-toolkit |
| FOSSA | PR 라이선스 충돌 검출 (학생 무료 한도) | https://github.com/marketplace/fossa |
| GitHub License Detector | 자동 SPDX 감지 (GitHub 내장) | (Insights → Community) |
| BFG Repo-Cleaner | 비밀키/큰 파일 히스토리 정리 | https://rtyley.github.io/bfg-repo-cleaner/ |
| git-filter-repo | 히스토리 정리 (BFG 후속) | https://github.com/newren/git-filter-repo |
| gitleaks | pre-commit 비밀키 스캔 | https://github.com/gitleaks/gitleaks |

### 15.5 (한국어 자료) [KO]

| 자료 | URL |
|----|----|
| GitHub Docs 한국어 — Setting up healthy contributions | https://docs.github.com/ko/communities/setting-up-your-project-for-healthy-contributions |
| Contributor Covenant 2.1 한국어 | https://www.contributor-covenant.org/ko/version/2/1/code_of_conduct/ |
| 정보통신산업진흥원 OSS 포털 | https://www.oss.kr |

---

## 16. 부록: 강의자료 작가의 가정 (Assumptions)

본 강의자료는 다음 가정을 전제로 작성되었다. 운영 시 다르면 해당 섹션을 사용자 피드백 후 수정.

| 가정 | 본문 영향 위치 | 근거 |
|----|----|----|
| 학생은 2회차 종료 시 팀 저장소를 보유 (트랙 확정) | §0.3 선수 지식, §2.1 직전 전이, §6 실습 | 마스터 플랜 §3.3 2회차 누적 산출물 |
| 학생은 GitHub Web UI + `gh` CLI 둘 다 접근 가능 | §6.3, §6.4 명령어 시퀀스 | 1·2회차에서 이미 사용 |
| 학생은 AI 도구 1개 본인 계정 보유 (Claude/Copilot/Cursor 중) | §8 EX-3C | 2회차 EX-2D에서 이미 사용 |
| 멘토는 1인당 2~3팀 분담 가능 | §12 멘토링 60분 | 마스터 플랜 §9 |
| 한 팀의 인원은 3~5인 | §6 실습, §12 멘토링 | 마스터 플랜 §0 |
| 강의는 한국어로 진행, 슬라이드는 한국어 본문 + 영어 SPDX 식별자 혼용 | 전체 | 한국 대학생 청중 |
| 90분 안에 5종 세트 6/6 머지가 일부 팀에 빠듯할 수 있음 | §0.6 위험, §11.2 트러블슈팅 | 첫 회차 운영에서 확인 후 갱신 |
| Apache-2.0이 학습 프로젝트의 기본 추천 | §10.7 LICENSE 예시 | OLMo 2 사례 + 기업 친화 + 특허 보호 |

---

## 17. 갱신 이력

| 일자 | 변경 내용 | 변경자 |
|----|----|----|
| 2026-05-04 | 초기 3회차 강의자료 작성 (마스터 플랜 §3.4 + 운영표 §2.3 + 자료 풀 §3.3 기반) | lecture-author 3 |

---

> **다음 회차로의 핸드오프 (4회차 lecture-author에게)**
>
> 본 3회차의 산출물 — 5종 세트 + EX-3C "라이선스 정책" 섹션 — 은 4회차 EX-4B/EX-4C에서 직접 활용된다.
> 특히 §10.6 PR Template의 "AI 사용 로그" / "라이선스 출처 확인" 두 필드는 4회차에서 강제 필드로 전환된다.
> §11 트러블슈팅 §11.1 라이선스 사고 절차는 5회차 안전 장치 룰("AI 코드 라이선스 출처 의심 시 머지 금지") 명문화의 1차 재료다.
> 본 회차 자료에 모순/누락 발견 시 SendMessage로 즉시 통보.

---

## 핵심 메시지 재노출 (회차 마지막 줄)

> **오픈소스는 "공개"가 아니라 사용·수정·배포·기여를 허용하는 규칙과 신뢰 구조다.**
> **라이선스는 그 신뢰의 첫 페이지다. 오늘 너희는 그 책 한 권을 직접 묶었다.**
