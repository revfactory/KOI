---
name: oss-edu-orchestrator
description: 6주 오픈소스 x AI 교육 콘텐츠(교육 기획서, 전체 커리큘럼, 6개 회차 강의자료)를 마크다운으로 생성·갱신하는 오케스트레이터. 5인 에이전트 팀(curriculum-architect, pedagogy-designer, reference-curator, lecture-author, content-qa-reviewer)을 조율한다. 트리거 - "오픈소스 교육", "OSS 강의", "커리큘럼 작성", "강의자료 만들어", "회차 강의안", "교육 기획서", "강의 운영 계획", "AI 시대의 오픈소스" 등이 나오거나 source.txt 같은 강의 초안 문서를 다룰 때 반드시 사용. 후속 작업 - 회차 수정, 특정 회차만 다시, 인용 갱신, 운영표 수정, 자료 풀 보강, 마스터 플랜 개정, 평가 기준 갱신, "지난 산출물 기반으로 개선", "이전 결과 보완" 등 어떤 부분 수정이라도 이 스킬을 사용한다.
---

# OSS Education Orchestrator

대학생·대학원생 대상 **6주 오픈소스 x AI 교육 콘텐츠**를 5인 에이전트 팀으로 생성한다.

## 실행 모드: 에이전트 팀 (하이브리드)

| Phase | 모드 | 이유 |
|------|------|------|
| Phase 1 | 에이전트 팀 (Designer Pod) | architect/designer/curator 합의 기반 설계 |
| Phase 2 | 에이전트 팀 (Author Pod) | 회차 간 서사 연결을 위해 작가 6명 + QA가 같은 팀에서 작업 |
| Phase 3 | 메인이 직접 통합 | 단순 파일 통합 작업 |

## 에이전트 구성

| 팀원 | agent_type | 역할 | 산출물 |
|------|----------|------|------|
| architect | curriculum-architect | 6주 마스터 플랜 | `_workspace/01_master_plan.md` |
| designer | pedagogy-designer | 운영 구조 | `_workspace/02_pedagogy_runbook.md` |
| curator | reference-curator | 자료 풀 | `_workspace/03_reference_pool.md` |
| author-1 ~ author-6 | lecture-author | 회차별 강의자료 | `_workspace/04_lecture_{N}_*.md` |
| qa | content-qa-reviewer | 통합 품질 검수 | `_workspace/05_qa_report.md` |

## 워크플로우

### Phase 0: 컨텍스트 확인

1. `/Users/robin/Documents/KOI/claude-code/_workspace/` 존재 여부 확인
2. 분기:
   - **`_workspace/` 미존재** → 초기 실행. Phase 1로 진행
   - **`_workspace/` 존재 + 사용자가 부분 수정 요청** (예: "3회차만 다시", "자료 풀에 X 추가") → 부분 재실행
   - **`_workspace/` 존재 + 새 입력 제공** → 기존 `_workspace/`를 `_workspace_archive_{YYYYMMDD_HHMMSS}/`로 이동 후 신규 실행
3. 부분 재실행 매핑:

| 사용자 요청 | 호출할 에이전트 |
|------------|--------------|
| "마스터 플랜 수정" / "학습 목표 변경" | architect |
| "운영표 수정" / "실습 시간 조정" / "멘토링 절차" | designer |
| "자료 추가" / "인용 출처 변경" / "AI 도구 카탈로그" | curator |
| "{N}회차만 다시" / "{N}회차 슬라이드 수정" | author-N |
| "전체 검수 다시" | qa |

### Phase 1: 설계 Pod (architect + designer + curator)

**실행 모드:** 에이전트 팀 (3인 Pod)

1. 팀 구성:
   ```
   TeamCreate(
     team_name: "oss-edu-design-pod",
     description: "6주 OSS 교육 마스터 플랜·운영 구조·자료 풀 설계"
   )
   ```

2. 3명의 팀원을 Agent 도구로 spawn:
   - `architect` (subagent_type: `curriculum-architect`, model: opus)
   - `designer` (subagent_type: `pedagogy-designer`, model: opus)
   - `curator` (subagent_type: `reference-curator`, model: opus)

3. TaskCreate로 작업 등록:
   - T1: "마스터 플랜 작성" → architect (선행)
   - T2: "운영 Run-of-Show 작성" → designer (T1 후)
   - T3: "자료 풀 큐레이션" → curator (T1 후, T2와 병렬)

4. 팀원이 자체 조율하며 작업 — 리더는 SendMessage로 진행 모니터링

5. 모든 산출물 완성 후 팀 종료(SendMessage shutdown_request → TeamDelete)

### Phase 2: Author Pod (lecture-author × 6 + qa)

**실행 모드:** 에이전트 팀 (7인 Pod)

1. 새 팀 구성:
   ```
   TeamCreate(
     team_name: "oss-edu-author-pod",
     description: "6개 회차 강의자료 병렬 작성 + 점진적 QA"
   )
   ```

2. 팀원 spawn:
   - `author-1` ~ `author-6` (subagent_type: `lecture-author`, model: opus, 각자 담당 회차 번호 prompt에 명시)
   - `qa` (subagent_type: `content-qa-reviewer`, model: opus)

3. TaskCreate:
   - T11~T16: "{N}회차 강의자료 작성" → author-N (병렬, 모두 Phase 1 산출물에 의존)
   - T20: "회차 간 일관성 검수" → qa (T11~T16에 의존, 단 점진적으로도 검수)
   - T21: "P0/P1 이슈 수정" → 해당 author (qa의 결과에 의존, 동적 생성)

4. 점진적 QA 규칙(에이전트 정의에 명시됨):
   - author가 1개 회차 작성 완료 → qa에게 SendMessage로 즉시 검수 요청
   - qa는 P0/P1 발견 시 해당 author에게 즉시 피드백, P2는 종합 리포트로 모음
   - author는 P0/P1 받으면 즉시 수정 후 재요청

5. 모든 회차 통과 + 종합 리포트 완성 후 팀 종료

### Phase 3: 통합 (메인이 직접)

1. `_workspace/`의 산출물을 `outputs/`로 정제하여 복사:
   - `outputs/00_교육기획서.md` ← architect 마스터 플랜의 "기획서 골격" 섹션 + designer의 운영 원칙 + 평가 기준
   - `outputs/01_전체커리큘럼.md` ← architect 마스터 플랜 전문 + 회차별 매트릭스 + 평가 기준
   - `outputs/회차별/{N}회차_{슬러그}.md` ← `_workspace/04_lecture_{N}_*.md` 그대로 (필요 시 헤더 정돈)
   - `outputs/02_운영가이드.md` ← designer의 Run-of-Show + 멘토링 절차 + 회고 양식
   - `outputs/03_자료풀.md` ← curator의 자료 풀
   - `outputs/04_QA리포트.md` ← qa 종합 리포트

2. `outputs/README.md` 생성 — 6주 교육 콘텐츠 사용 가이드 (강사용)

3. `_workspace/` 보존 (감사 추적용)

4. 사용자에게 최종 결과 요약 보고

## 데이터 흐름

```
[사용자 요청 + source.txt]
        │
        ↓
   [Phase 1 Design Pod]
   architect → 01_master_plan.md
        ↓
   designer → 02_pedagogy_runbook.md
   curator  → 03_reference_pool.md
        │
        ↓ (Pod 해체)
   [Phase 2 Author Pod]
   author-1 → 04_lecture_1_*.md ──┐
   author-2 → 04_lecture_2_*.md ──┤
   author-3 → 04_lecture_3_*.md ──┼─→ qa (점진적 검수)
   author-4 → 04_lecture_4_*.md ──┤    ↓
   author-5 → 04_lecture_5_*.md ──┤   05_qa_report.md
   author-6 → 04_lecture_6_*.md ──┘
        │
        ↓ (Pod 해체)
   [Phase 3 메인 통합]
        ↓
   outputs/{교육기획서, 전체커리큘럼, 운영가이드, 자료풀, QA리포트, README, 회차별/*}
```

## 에러 핸들링

| 상황 | 전략 |
|------|------|
| 특정 author가 마스터 플랜과 충돌하는 결정 | qa가 즉시 발견 → architect에게 SendMessage → 마스터 플랜 명확화 → author 재작업 |
| curator가 인용 검증 실패 | 1회 재시도 후 "검증 필요" 표시, 작가는 검증 표시된 자료 사용 시 별도 마킹 |
| author 1명 정체(idle 5회 이상) | 메인이 SendMessage로 상태 확인, 막힌 회차 정보를 architect/curator에게 추가 자원 요청 |
| qa P0가 5개 이상 누적 | 사용자에게 보고하고 진행 여부 확인 |
| 팀원 간 데이터 충돌 | 출처 병기, 삭제 금지 |

## 테스트 시나리오

### 정상 흐름
1. 사용자가 source.txt를 제공하며 "강의자료 만들어줘"
2. Phase 0: `_workspace/` 미존재 → 초기 실행
3. Phase 1: Design Pod이 마스터 플랜·운영표·자료 풀 생성 (3개 파일)
4. Phase 2: Author Pod이 6개 회차 병렬 작성, qa 점진적 검수
5. Phase 3: outputs/ 디렉토리에 최종 산출물 생성
6. 예상 결과: 9개 마크다운 파일 (교육기획서/전체커리큘럼/운영가이드/자료풀/QA리포트/README/회차별×6)

### 후속 흐름 — "3회차만 다시"
1. Phase 0: `_workspace/` 존재 + 부분 수정 요청 → author-3만 재호출
2. author-3 단독 spawn, 기존 마스터 플랜·운영표·자료 풀·다른 회차 파일을 읽고 일관성 유지
3. qa가 변경된 회차와 인접 회차(2, 4)의 일관성만 재검수
4. `outputs/회차별/3회차_*.md`만 갱신
5. CLAUDE.md 변경 이력에 기록

### 에러 흐름
1. Phase 2에서 author-4가 idle 5회 — 메인이 SendMessage로 상태 확인
2. author-4가 "MCP 관련 자료 부족" 응답 → curator에게 추가 큐레이션 요청
3. curator가 `_workspace/03_reference_pool.md` 갱신 후 author-4에게 알림
4. author-4 재개, 정상 완료

## 산출물 디렉토리

```
/Users/robin/Documents/KOI/claude-code/
├── source.txt                    (입력)
├── CLAUDE.md                     (하네스 포인터)
├── .claude/
│   ├── agents/                   (5개 에이전트 정의)
│   └── skills/                   (이 오케스트레이터 + 보조 스킬)
├── _workspace/                   (중간 산출물 - 보존)
│   ├── 01_master_plan.md
│   ├── 02_pedagogy_runbook.md
│   ├── 03_reference_pool.md
│   ├── 04_lecture_1_*.md ~ 04_lecture_6_*.md
│   └── 05_qa_report.md
└── outputs/                      (최종 산출물)
    ├── README.md
    ├── 00_교육기획서.md
    ├── 01_전체커리큘럼.md
    ├── 02_운영가이드.md
    ├── 03_자료풀.md
    ├── 04_QA리포트.md
    └── 회차별/
        ├── 1회차_AI시대의_오픈소스.md
        ├── 2회차_GitHub협업워크플로우.md
        ├── 3회차_라이선스거버넌스.md
        ├── 4회차_AI활용기여운영.md
        ├── 5회차_멀티에이전트개발.md
        └── 6회차_프로젝트발표커리어.md
```
