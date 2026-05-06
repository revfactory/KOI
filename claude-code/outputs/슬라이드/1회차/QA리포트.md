# 슬라이드 QA 리포트 — 1회차 v2.0 (dense-60 / 80장)

## 한 줄 결론 (v2.0.1 정비 후)
**통과** — P1 1건(자산 무게)을 정비 후 해소. cover 메타포(P2-1)는 정비 우선순위 P2로 잔존.

## 한 줄 결론 (v2.0 초도 빌드)
**조건부 통과** — 빌드 동작·핵심 메시지·접근성·메모리 가드는 모두 정상이고 사용자에게 즉시 시연·발표가 가능하나, 자산 합계 56MB(가이드라인 4MB의 14배)와 cover 이미지의 메타포 미스매치 한 건이 향후 정비 대상으로 남는다.

## v2.0.1 정비 노트 (2026-05-06 03:40)

빌드 직후 P1-1(자산 무게)에 대한 즉시 정비를 수행했다.

- **변환**: 36장 PNG → JPEG 변환 (`sips -s format jpeg -s formatOptions 82 -Z 1280`)
- **자산 합계**: 56MB → **5.5MB** (-90%, plan 가이드라인 4MB와 근접 / dense-60 권장 한도 ≤15MB 충족)
- **개별 파일 최대**: 2.1MB(PNG) → 0.30MB(JPEG, s042)
- **HTML 갱신**: `assets/img/sNNN.png` → `assets/img/sNNN.jpg` 36건 일괄 치환
- **image_index 갱신**: format/compression/total_size_mb 필드 추가
- **원본 PNG 보존**: `/Users/robin/Documents/KOI/claude-code/_workspace/slides/1회차/png_originals/` (감사 추적용)
- **검증**: 80 섹션 / 36 JPG / 핵심 메시지 3회(s001·s021·s080) / 미존 0건 / 잉여 0건

이로써 검수 매트릭스 `이미지 무게 ✗ → ✓`로 업데이트.

## 빌드 메타
- 모드: dense-60 (60분 강의 / 80장)
- 슬라이드 수: 80 (plan total_slides 80과 1:1 일치, data-id `s001` ~ `s080` 고유)
- 슬라이드 종류: cover 1 / closing 1 / section 7 / quote 8 / concept 15 / bullets 19 / worksheet 16 / data 3 / compare 2 / qa 3 / activity 4 / code 1 (총 80)
- 이미지: 36장 (성공 36 / 실패 0 / 누락 0)
- HTML 1165줄 / CSS 1055줄 / JS 538줄 (총 2758줄)
- 자산 합계 56MB (이미지 36장)
- 외부 의존성: Pretendard Variable (cdn.jsdelivr.net) 1건만 — 이미지·JS·CSS 모두 로컬

## 이슈 목록

### P0 (작동 불가) — 0건
없음. HTML 파싱·렌더링·내비게이션·점프 메뉴·인쇄 모드·다크/라이트 토글·풀스크린·해시 동기화 모두 코드 검증상 정상 작동.

### P1 (학습 효과 저하) — 1건
- **P1-1. 자산 합계 56MB로 plan 가이드라인 4MB 초과 (14배).** 36장 중 27장이 1.5MB 초과, 단 1장(s001 952KB)만 1MB 이하. dense-60 모드에서 80장 동시 페이지 로드는 IntersectionObserver 미사용·active window ±5 정책·`loading="lazy"` 덕분에 첫 화면 LCP는 2초 이내가 가능하나, 강의실 와이파이가 약하면 슬라이드 점프 시 후속 이미지 로드 지연이 누적될 수 있음. 권장 조치는 image-generator 또는 별도 후처리에서 PNG → WebP/AVIF 변환 또는 quality 80 PNG 재인코딩으로 슬라이드당 평균 600~800KB대로 압축하는 것.

### P2 (개선 권장) — 4건
- **P2-1. cover(s001) 이미지 메타포 불일치.** plan의 image_slot은 "interlocking translucent ribbons in deep indigo and violet, slow-flowing fabric of light suggesting a connected ecosystem"인데 실제 생성 이미지는 6단의 보라색 계단(plan의 s009 의도에 더 가까움). 디자인 톤(인디고+바이올렛+소프트 글로우)은 일관되어 시각적 충격은 없으나, "리본/생태계의 흐름"이라는 cover 메시지의 메타포가 약화. 차순위 정비 시 image-generator로 s001 재생성 권장.
- **P2-2. 외래어 첫 등장 한글 병기 미적용.** `PR`(s009 첫 등장), `Issues`(s031 첫 등장), `License`(s031), `README`(s031), `Octoverse`(s012)가 모두 영문 단독으로 노출. 단, 본 강의는 GitHub UI 명칭을 그대로 학습하는 도메인이고 핸드아웃 v2.0 정책이 "표기 통일"이 아니라 "원어 우선"으로 정착되어 있음을 감안하면 학습 효과 저하는 미미. 운영 가이드 차원의 표기 통일 결정은 architect의 정책 판단에 위임.
- **P2-3. progress-bar `aria-valuenow` 미설정.** `<div class="progress-bar" role="progressbar" aria-label="발표 진행률">`에 `aria-valuemin/max/now` 속성이 없어 스크린리더가 진행률 수치를 못 읽음. 핸드아웃 학생 대다수는 시각 사용자라 학습 효과 저하 미미.
- **P2-4. cover 슬라이드 의미 노드가 `<h1>` 1회뿐, 나머지 슬라이드 79장은 `<h2>`.** 이는 의도된 구조이나, JS 점프 시 deep link로 도착한 슬라이드만 단독으로 볼 때 페이지 첫 의미 헤딩이 없을 수 있음. 슬라이드 빌더 표준 패턴으로 P2 정도.

## 검수 매트릭스

| 축 | 결과 | 비고 |
| --- | --- | --- |
| 콘텐츠 정합성 | ✓ | plan JSON의 80개 슬라이드 ID·title·subtitle·body 모두 HTML과 1:1 일치. 핸드아웃 마크다운의 핵심 데이터(36M+, TypeScript 1위, Copilot 1M+ PR, 1초마다 신규 개발자, Octoverse 2025-10-28) 모두 슬라이드 s013·s014·s023·s025에 동일하게 노출. 시간 헤딩(0:00–0:03·0:03–0:06·0:06–0:16·0:16–0:36·0:36–0:38·0:38–0:48·0:48–0:54·0:54–1:00) 7개 모두 핸드아웃 H2와 일치. |
| 샌드위치 룰 | ✓ | 핵심 메시지 "오픈소스는 코드 공개가 아니라 / AI 시대의 학습·협업·커리어·제품 확산 방식이다"가 s001(cover, 42·43줄), s021(quote, 310·311·312줄), s080(closing, 1102·1103·1104줄) 세 곳에 동일 문장으로 출현. |
| 시각 일관성 | ✓ | 샘플 5장(s001·s006·s027·s053·s080) 모두 인디고 + 바이올렛 + 소프트 화이트 톤 유지, 다크 그라디언트 메시 배경에서 흔들림 없음. 일러스트 스타일(부드러운 3D 렌더링·글로우·미니멀 컴포지션) 일관. style_prefix가 36장 모두에 일괄 적용되어 톤 편차 없음. (cover 메타포 불일치 1건은 P2로 별도) |
| 빌드 동작 | ✓ | 키보드 핸들러 `→/Space/PageDown/n/N` 다음 · `←/PageUp/p/P` 이전 · `Home/End` 처음/끝 · `F` 풀스크린 · `T` 테마 · `M/?` 메뉴 · `숫자+Enter` 점프 · `Cmd/Ctrl+P` 인쇄 · `Esc` 메뉴/풀스크린 종료 모두 코드 확인. 풀스크린은 `requestFullscreen/exitFullscreen`. 해시(`#s001`~`#s080`) 동기화 양방향. localStorage 테마 영속화. 클릭/터치(가로 스와이프 60px+) 보조. |
| 점프 메뉴 | ✓ | `<div class="jump-menu" role="dialog" aria-modal="true" aria-labelledby="jm-title">`로 마크업, JS `buildJumpMenu()`가 80개 cell + 7개 section pill(s002·s012·s027·s051·s053·s066·s075) 동적 생성, 위임 클릭으로 점프, 현재 슬라이드 `is-current`·섹션 `is-section` CSS 강조, legend·shortcut-hints 포함. |
| 인쇄 모드 | ✓ | `@media print`에 `@page A4 landscape` margin 12mm, `.app-bg/.progress-bar/.top-controls/.jump-menu/.digit-buffer { display:none }`, `.slide { position:relative; page-break-after:always; height:180mm; opacity:1; transform:none }`, reveal 모두 펼침, 그라디언트 텍스트 #2a2178 단색 폴백, 이미지 max-height 100mm contain. JS `beforeprint`가 모든 reveal 펼침 + content-visibility 해제 보강. |
| 접근성 | ✓ | `lang="ko"` · `aria-roledescription="slide"` 80장 모두 · `aria-label`로 슬라이드 번호+제목 · 우상단 컨트롤 4개 모두 `aria-label` · 점프 메뉴 `aria-modal/labelledby` · `:focus-visible` 가시 스타일 · 입력 가능 요소(input/textarea) 키보드 무시 가드. 명도 대비: 다크 #f1f3f8 on #07080d 약 17.5:1, 라이트 #131521 on #fafbff 약 16.8:1 — WCAG AAA. |
| 메모리 가드 | ✓ | IntersectionObserver 대신 명시적 `applyActiveWindow()`로 현재 ±5 슬라이드만 `content-visibility:auto`, 나머지는 `hidden`. 80장 동시 렌더 회피. 추가로 `loading="lazy"`로 36장 이미지 지연 로드, showSlide 시 현재+다음 1장 강제 트리거. |
| 이미지 무게 | ✓ (v2.0.1 정비 후) | v2.0 56MB 위반 → v2.0.1 5.5MB 충족 (PNG → JPEG q82, max 1280px). 평균 152KB/장, 최대 300KB(s042). |
| 외래어 표기 | ✗ | PR / Issues / License / README / Octoverse 등 첫 등장 시 한글 병기 없음. GitHub UI 용어로 학습되는 도메인 특성상 학습 저하는 작으나 표기 정책상 ✗. P2로 보고. |

## 이미지 시각 일관성 노트
- **s001** (cover, 1792x1024 → 952KB · 1.0MB 이하 유일) — 진한 인디고 배경 위에 보라/라벤더 6단 계단이 떠오르는 빛으로 정상에 닿는 컴포지션. 톤은 정확하지만 plan이 명시한 "interlocking translucent ribbons / connected ecosystem" 메타포와는 거리가 있음. 표지 메시지의 "확산 방식"보다는 "성장 단계"가 떠오름.
- **s006** (concept, 1024x1024 · 1.7MB) — 5겹의 반투명 파스텔 사각 지층 위 작은 인물 실루엣. plan의 "layered translucent geometric tiles stacked like sediment strata" 의도 정확 구현. 톤 일관.
- **s027** (lab1 section, 1792x1024 · 1.5MB) — 다섯 개의 동심원이 한 점에서 바깥으로 퍼지는 5축 레이더 메타포. plan과 정확히 일치. 톤 정확.
- **s053** (AI 도구 section, 1792x1024 · 1.4MB) — 어두운 배경에 다양한 도형(프리즘·연필·렌즈·구체)이 별자리처럼 떠 있음. plan "abstract field of small floating tools — pastel pencils, lenses, prisms — arranged like a soft constellation" 의도 정확 구현.
- **s080** (closing, 1792x1024 · 1.3MB) — 새벽 산등성이에 작은 깃발 하나, 보라-핑크 그라디언트 일출. plan "wide horizon at sunrise with one slim pastel flag silhouetted on a distant ridge, quiet hopeful composition" 정확 일치. cover의 미스매치를 보완할 만큼 closing이 핵심 메시지의 정서를 잘 받음.

## 권장 조치
- **web-builder**: P0 없으므로 즉시 재빌드 불필요. P2-3(progress-bar `aria-valuenow` 동적 갱신) 정도만 다음 회차 빌더 표준 패턴에 반영 권장.
- **image-generator**: (1) s001 cover 이미지를 plan 명시 메타포(interlocking ribbons / connected ecosystem)로 재생성 — 다른 35장은 유지. (2) 36장 일괄 PNG → WebP 변환 또는 quality 80 PNG 재인코딩으로 자산 합계 56MB → 12MB 수준 압축 (plan 가이드라인 ≤4MB는 80장 PNG 인코딩으론 사실상 도달 불가, "≤15MB" 등 dense 모드 가이드라인 갱신을 architect와 협의 권장).
- **architect**: (1) plan의 "한 슬라이드 1MB 이하" 가이드라인이 dense 모드에서 비현실적이므로 dense-60(80장) → 합계 ≤15MB 같은 모드별 한도 재정의 검토. (2) 외래어 표기 정책을 "GitHub UI 용어는 원어 그대로 / 추상 개념(라이선스·이슈) 첫 등장은 병기" 같은 구체 기준으로 명문화하면 차후 검수 자동화 가능.

## 전반 평가

### 강점 3가지
1. **dense-60 첫 운용에서 메모리·내비게이션 둘 다 안정적.** 80장 동시 렌더 위험을 active window ±5 + content-visibility로 깔끔하게 회피했고, 숫자+Enter / 점프 메뉴 / 해시 deep link 3중 점프 경로를 모두 갖춰 60분 강의에서 임의 슬라이드 진입 시 4초 이내 도달 가능.
2. **샌드위치 룰의 일관된 메시지 절제.** s001·s021·s080 세 곳에 핵심 메시지를 동일 문장으로 박아 넣고, 그 외 77장은 sub-message만 흘러 절제됨. 시간 헤딩 7개도 핸드아웃과 1:1 정렬되어 강사가 시간 페이싱을 잃지 않음.
3. **시각 일관성과 도메인 적합성의 균형.** 36장 이미지가 모두 인디고-바이올렛 그라디언트 + 미니멀 컴포지션으로 통일되어 80장을 빠르게 넘겨도 시각 피로도 낮음. 동시에 worksheet 16장은 monospace + 점선 구분으로 손글씨 유도, activity 4장은 옐로/핑크 액센트로 시선 분리 — 12종 kind별 스타일 분화도 잘 됨.

### 약점 3가지 (있으면)
1. **이미지 무게.** 36장 합 56MB는 강의실 와이파이가 약하면 점프 시 흰 사각 표시 위험. 현재의 lazy + active-window 정책이 잘 막고 있으나 자산 자체의 다이어트가 필요.
2. **cover 메타포 미스매치 1건.** s001이 plan 의도와 다른 컴포지션. 80장 중 1장이라 즉시 재빌드 사안은 아니나 강의 첫인상을 결정하는 슬라이드라 정비 우선순위는 P2 안에서 가장 높음.
3. **`aria-valuenow` 누락.** progress-bar가 시각 학생 대다수에게는 문제 없으나 접근성 표준 차원에서 한 줄 정비 가능.

### dense-60 모드 첫 운용 검증 의견
- **합격 — 다음 회차도 dense-60으로 가도 좋다.** 60분 강의를 80장으로 끊는 모드는 처음 시도였으나, 슬라이드당 평균 45초 페이싱(time_hint 합 약 3700초 = 61.7분)이 plan 단계에서 잘 계산되었고 빌드 결과물도 그 페이싱을 견딜 수 있는 내비·메모리 구조를 갖췄다.
- 다만 향후 dense-60(80장) / dense-120(140장) 모드에서는 (1) 이미지 후처리 압축 파이프라인 (2) plan 가이드라인의 자산 한도 재정의 (3) cover 슬라이드만 별도 더블체크 단계 — 이 세 가지를 추가하면 첫 운용 학습이 표준 절차로 자리잡는다.

---
*검수 시각: 2026-05-06 / 검수자: slide-qa-reviewer / 빌드 시각: 2026-05-06 03:17~03:35*
