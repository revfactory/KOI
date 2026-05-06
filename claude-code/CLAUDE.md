# CLAUDE.md — KOI/claude-code 프로젝트

## 하네스 1: 6주 오픈소스 x AI 교육 콘텐츠 제작

**목표:** 대학생·대학원생 대상 "AI 시대의 오픈소스 실전" 6주 교육 과정의 교육 기획서, 전체 커리큘럼, 6개 회차 강의자료를 마크다운으로 생성·갱신한다.

**트리거:** 오픈소스 교육·강의·커리큘럼·회차 강의안·교육 기획서·운영 계획·자료 풀 관련 작업 요청 시 `oss-edu-orchestrator` 스킬을 사용하라. 단순 질문(예: "1회차에 뭐 가르쳐?")은 `outputs/`를 직접 읽어 응답 가능.

**핵심 입력:** `source.txt` (1차 커리큘럼 초안)
**최종 산출물:** `outputs/` 디렉토리
**중간 산출물:** `_workspace/` 디렉토리 (보존, 감사 추적용)

## 하네스 2: 회차별 슬라이드 웹페이지 빌드

**목표:** 정제된 회차 학생 핸드아웃(`outputs/회차별/{N}회차_*.md`)을 모던하고 세련된 단일 HTML 슬라이드 웹페이지로 빌드. 애니메이션 그라디언트 메시 배경 + frosted glass 카드 + gpt-image-2 생성 이미지.

**트리거:** "발표자료", "슬라이드", "프레젠테이션", "1회차 발표", "회차 N 슬라이드" 등 슬라이드 관련 작업 요청 시 `slide-builder-orchestrator` 스킬을 사용하라.

**산출물 위치:** `outputs/슬라이드/{N}회차/index.html` + `assets/css|js|img/`

**변경 이력:**
| 날짜 | 변경 내용 | 대상 | 사유 |
|------|----------|------|------|
| 2026-05-04 | 초기 하네스 구성 | 전체 (5인 에이전트 팀 + 오케스트레이터 + 라이팅 스타일 스킬) | source.txt 기반 6주 교육 콘텐츠 제작 |
| 2026-05-04 | 초기 콘텐츠 생성 (v1.0) | outputs/ 7개 (README + 교육기획서 + 전체커리큘럼 + 운영가이드 + 자료풀 + QA리포트 + 회차별×6) | 5인 에이전트 팀 실행 — Phase 1·2·3 완료, QA 조건부 통과 (P0 0 / P1 5 / P2 8) |
| 2026-05-04 | QA 보완 v1.1 — codex-cli 병렬 적용 | 회차별/×6 + 03_자료풀.md (총 7개) | OpenAI gpt-5.5(codex exec workspace-write)로 P1 5건·P2 8건 모두 반영. 변경 보고서 `/tmp/codex-edu/report-{1..7}.md`. 90분 합산·핵심 메시지·EX ID 모두 보존. |
| 2026-05-04 | 학생 핸드아웃 정제 v2.0 — codex-cli 병렬 적용 | 회차별/×6 (총 6개) | (1) 모든 마크다운 표를 불릿/단락/순서 리스트로 변환(155개 표 제거), (2) `EX-{숫자}{알파벳}` 실습 ID 토큰 213개 제거, (3) 강사 메시지 블록 147개 삭제. 라인 9413 → 7595 (-1818줄, -19%). 변경 보고서 `/tmp/codex-edu/v2-report-{1..6}.md`. 시간 헤딩·핵심 메시지·LO 보존. |
| 2026-05-04 | 메타 문서 정제 v3.0 — codex-cli 병렬 적용 | 00·01·02·03·04 (총 5개) | 표 최소화(보존 51 / 변환·삭제 53) + 작가/메타 문구 일괄 삭제. 02 운영가이드는 보존성 우선(802→776), 04 QA리포트는 stale 부분 대거 정리(564→136). 라인 합계 2614 → 1955 (-659줄, -25%). 변경 보고서 `/tmp/codex-edu/v3-report-{00..04}.md`. |
| 2026-05-04 | 슬라이드 빌드 하네스 추가 | 4 에이전트(slide-architect, slide-image-generator, slide-web-builder, slide-qa-reviewer) + 4 스킬(slide-design-system, slide-web-build, slide-image-prompting, slide-builder-orchestrator) | 회차 핸드아웃을 모던 HTML 슬라이드로 빌드. 애니메이션 그라디언트 메시 배경 + gpt-image-2 이미지. 1회차부터 단계적 빌드. |
| 2026-05-06 | 60분/80장 고밀도 모드 추가 | slide-architect / slide-web-builder / slide-image-generator / slide-builder-orchestrator + lecture-author | 사용자 요청 "1회차 60분 / 약 80페이지". 표준 90분/12~16장 외에 dense-60(60분/70~90장)·dense-120(120분/110~140장) 모드 추가. architect는 `mode`·`target_slides`·`time_hint` 필드, builder는 점프 메뉴(M키)·진행률 바·메모리 가드·14 kind 마크업, imager는 codex-image 5장 병렬 모드, lecture-author는 60분 단일 강의 골격 8블록 추가. |
| 2026-05-06 | 1회차 핸드아웃 60분 버전 재작성 (v3.0) | outputs/회차별/1회차_AI시대의_오픈소스.md (846 → 695줄, -18%) | 90분+멘토링60분(150분) → 60분 단일 강의로 압축. 이전 본 outputs/회차별/_archive/1회차_AI시대의_오픈소스_v2.1_2026-05-04.md 보존. 8블록(0:00~0:03 도입, 0:03~0:06 LO+6주, 0:06~0:16 풍경, 0:16~0:36 5축실습, 0:36~0:38 전이, 0:38~0:48 AI도구, 0:48~0:54 팀헌법, 0:54~1:00 마무리). 핵심 메시지·LO 3개·5축 실습·팀 헌법 양식 모두 보존. 멘토링은 별도 운영 부록으로 분리. |
| 2026-05-06 | 1회차 슬라이드 80장 신규 빌드 (v2.0) | outputs/슬라이드/1회차/ (index.html + assets) | 기존 13장 standard 빌드를 outputs/슬라이드/1회차_archive_20260506_025941로 보존 후 dense-60 모드로 신규 빌드. plan 80장(7 section 디바이더), 이미지 36장(landscape 9 + square 27, codex exec image_gen 5병렬, ~13분 소요). HTML 1165줄 + CSS 1055줄 + JS 538줄, 14 kind 마크업, 점프 메뉴(M키)/숫자키 점프/active-window 메모리 가드/풀스크린/인쇄/다크라이트 토글. QA 매트릭스 10/12 ✓, P0 0/P1 1(자산 56MB)/P2 4. |
| 2026-05-06 | 1회차 슬라이드 v2.0.1 정비 — 자산 다이어트 | outputs/슬라이드/1회차/assets/img/ + index.html | P1-1(자산 56MB) 즉시 정비. PNG 36장 → JPEG q82 max 1280px 일괄 변환(sips), HTML src .png→.jpg 36건 치환, image_index 갱신. 자산 56MB → 5.5MB (-90%). 원본 PNG는 _workspace/slides/1회차/png_originals/에 보존. QA 결론 "조건부 통과" → **"통과"** 갱신. cover 메타포 미스매치(P2-1)는 차순위 정비 항목으로 잔존. |
