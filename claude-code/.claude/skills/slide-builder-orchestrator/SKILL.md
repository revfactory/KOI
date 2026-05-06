---
name: slide-builder-orchestrator
description: 회차별 학생 핸드아웃을 모던하고 세련된 단일 HTML 슬라이드 웹페이지로 빌드하는 오케스트레이터. 4인 에이전트 팀(slide-architect, slide-image-generator, slide-web-builder, slide-qa-reviewer)을 조율한다. 표준 모드(12~16장) + 고밀도 모드(60분 70~90장 / 120분 110~140장) 모두 지원. 트리거 - "발표자료", "슬라이드", "프레젠테이션", "프레젠", "deck", "slide", "1회차 발표", "회차 N 발표자료", "회차 N 슬라이드", "발표 페이지", "발표 웹페이지", "PT 자료", "강의 슬라이드", "애니메이션 배경", "모던한 슬라이드", "회차 슬라이드 만들어", "발표자료 만들어", "1회차부터", "슬라이드 다시", "슬라이드 수정", "특정 슬라이드만 다시", "이미지 다시", "디자인 톤 바꿔", "1시간 강의", "60분 강의", "N페이지 슬라이드", "N장 슬라이드", "고밀도", "전면 재수정" 등이 나오면 반드시 사용. 이미 빌드된 회차의 부분 수정·재빌드 요청도 모두 이 스킬로 처리한다.
---

# Slide Builder Orchestrator

회차별 학생 핸드아웃을 **모던 슬라이드 웹페이지**로 빌드. 4인 팀이 파이프라인 + 부분 팬아웃으로 작업.

## 실행 모드: 에이전트 팀 (파이프라인 + 부분 팬아웃)

- Phase 1: `slide-architect` 단독 (선행)
- Phase 2: `slide-image-generator` + `slide-web-builder` 병렬
- Phase 3: `slide-web-builder` 이미지 통합 마무리
- Phase 4: `slide-qa-reviewer` 검수
- Phase 5: 메인이 사용자 리뷰 가능 상태로 보고

## 에이전트 구성

- **architect** (`slide-architect`) — 슬라이드 플랜 JSON
- **imager** (`slide-image-generator`) — 이미지 PNG (gpt-image-2 호출)
- **builder** (`slide-web-builder`) — HTML/CSS/JS 빌드
- **qa** (`slide-qa-reviewer`) — 검수 리포트

모든 에이전트는 `model: "opus"`.

## 워크플로우

### Phase 0: 컨텍스트 확인

1. 사용자가 어느 회차를 요청했는지 파악 (1회차, 2회차 등). 명시 없으면 1회차부터.
2. **모드 결정**:
   - 사용자가 "1시간", "60분", "N페이지 / N장" 명시 → `dense-60` 모드 (목표 80장)
   - 사용자가 "2시간 자세히", "풀 스케일" 명시 → `dense-120` 모드 (목표 120장)
   - 그 외 → `standard` 모드 (12~16장)
   - 페이지 수가 명시되면 그 숫자에 ±10% 오차로 맞춤
3. `outputs/슬라이드/{N}회차/` 존재 여부 확인:
   - **미존재** → 초기 빌드. Phase 1로 진행
   - **존재 + 부분 수정 요청** (예: "표지 이미지만 다시", "5번 슬라이드 톤 변경") → 해당 에이전트만 재호출
   - **존재 + 전체 재빌드 / "전면 재수정"** → 기존 `outputs/슬라이드/{N}회차/`를 `outputs/슬라이드/{N}회차_archive_{YYYYMMDD_HHMMSS}/`로 이동 후 신규 실행
4. `_workspace/slides/{N}회차/` 디렉토리 생성

### 부분 재실행 매핑

- "슬라이드 분해 다시" / "슬라이드 N 추가·삭제" / "흐름 바꿔" → architect
- "이미지만 다시" / "특정 슬라이드 이미지" / "톤 바꿔" → imager
- "디자인만 손봐" / "키보드 안 먹어" / "인쇄 모드 깨짐" → builder
- "QA 다시" / "검수 보고서 갱신" → qa
- "전체 다시" → Phase 1부터

### Phase 1: 슬라이드 분해 (architect 단독)

`Agent` 도구로 architect를 호출:

- subagent_type: `slide-architect`, model: `"opus"`
- 입력: 회차 N의 `outputs/회차별/{N}회차_*.md` + 핵심 메시지 + 디자인 톤 (기본: "modern minimal dark + animated gradient mesh") + **`mode`** + **`target_slides`**
- 출력: `_workspace/slides/{N}회차/01_slide_plan.json`

산출물 검증 (모드별):
- `standard`: total_slides 12~16, 표지·closing 동일 핵심 메시지, 모든 슬라이드 id·kind·title 있음
- `dense-60`: total_slides 70~90 (목표 ±10%), 5~10장마다 `kind: section` 디바이더, 모든 슬라이드 `time_hint` 30~120초
- `dense-120`: total_slides 110~140, 그 외 dense-60과 동일

### Phase 2: 이미지 + 웹빌드 병렬 (imager + builder)

팀 구성:

```
TeamCreate(
  team_name: "slide-build-team-{N}",
  description: "{N}회차 슬라이드 이미지 생성 + 웹페이지 빌드 병렬"
)
```

두 에이전트를 동시 spawn (각 model: `"opus"`):

1. **imager** (`slide-image-generator`)
   - 입력: `01_slide_plan.json`
   - 출력: `outputs/슬라이드/{N}회차/assets/img/*.png` + `_workspace/slides/{N}회차/02_image_index.json`
   - 도구: `gpt-image2` 스킬을 통해 이미지 생성

2. **builder** (`slide-web-builder`)
   - 입력: `01_slide_plan.json` (이미지는 placeholder로 우선 빌드)
   - 출력: `outputs/슬라이드/{N}회차/index.html` + `assets/css/slides.css` + `assets/js/slides.js`
   - 도구: `slide-design-system` + `slide-web-build` 스킬

두 에이전트는 SendMessage로 의문점·이미지 누락 등을 직접 소통.

### Phase 3: 이미지 통합 마무리 (builder)

imager 완료 신호를 받으면 builder가 한 번 더 검토:
- 모든 image_slot의 이미지 파일이 `assets/img/`에 실제 존재하는지
- 누락된 슬라이드는 그라디언트 박스로 fallback 마크업
- HTML의 `<img src="...">` 경로가 정확한지

### Phase 4: 검수 (qa)

`Agent` 도구로 qa 호출:
- subagent_type: `slide-qa-reviewer`, model: `"opus"`
- 입력: 빌드 산출물 전체 + plan + image_index + 회차 핸드아웃
- 출력: `outputs/슬라이드/{N}회차/QA리포트.md`

P0 발견 시 builder/imager에게 재작업 요청 → P0 0건이 될 때까지 1~2회 반복

### Phase 5: 사용자 리뷰

메인이 다음을 확인:
- 빌드된 산출물 경로 안내: `outputs/슬라이드/{N}회차/index.html`
- QA 리포트 한 줄 결론
- 사용자가 브라우저로 열어 리뷰할 수 있도록 안내 (`open` 또는 `python -m http.server` 명령 안내)
- 사용자 피드백 수집 → 부분 재실행 매핑에 따라 처리

## 데이터 흐름

```
outputs/회차별/{N}회차_*.md   (입력: 학생 핸드아웃 v2.0)
       │
       ▼
[architect]
       │  → _workspace/slides/{N}회차/01_slide_plan.json
       ▼
[imager + builder 병렬]
       │
       ├── imager → outputs/슬라이드/{N}회차/assets/img/*.png
       │           _workspace/slides/{N}회차/02_image_index.json
       │
       └── builder → outputs/슬라이드/{N}회차/index.html + assets/css|js/
       │
       ▼
[builder] 이미지 통합
       │
       ▼
[qa] → outputs/슬라이드/{N}회차/QA리포트.md
       │
       ▼
사용자 리뷰
```

## 에러 핸들링

- **architect 실패** (핸드아웃 못 읽음) → 사용자에게 회차 번호·파일 경로 확인 요청
- **imager gpt-image-2 실패** → 해당 슬라이드만 image_slot=none으로 fallback, builder에 통보
- **builder HTML 깨짐** → 1회 재빌드, 재실패 시 에러 위치 보고
- **qa P0 무한 반복** → 2회까지만 자동 재작업, 3회째는 사용자 결정 필요

## 산출물

```
outputs/슬라이드/{N}회차/
├── index.html
├── assets/
│   ├── css/slides.css
│   ├── js/slides.js
│   └── img/*.png
└── QA리포트.md

_workspace/slides/{N}회차/
├── 01_slide_plan.json
└── 02_image_index.json
```

## 후속 작업 지원

- "1회차 슬라이드 다시" → 전체 재빌드 (Phase 1부터)
- "1회차 표지 이미지만 다시" → imager만 재호출, s01만 갱신
- "1회차 디자인 톤 바꿔 (라이트 모드 기본)" → builder 재호출, CSS만 수정
- "1회차 슬라이드 N 추가" → architect 재호출 → builder 재호출
- "2회차도 같은 톤으로 만들어" → 2회차로 Phase 1부터 새 빌드, design_tone 1회차와 동일

## 테스트 시나리오

**정상 흐름**: 사용자 "1회차 발표자료 만들어줘" → Phase 0 미존재 → architect → imager+builder 병렬 → qa 통과 → 사용자에게 `index.html` 경로 보고

**에러 흐름**: 사용자 "1회차 발표자료 만들어줘" → imager가 gpt-image-2 정책 거부 → 해당 슬라이드만 fallback → builder가 그라디언트 박스로 마무리 → qa는 P1로 표기 → 사용자에게 "이미지 N장 미생성, fallback 적용" 보고
