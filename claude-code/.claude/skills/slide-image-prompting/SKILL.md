---
name: slide-image-prompting
description: 슬라이드용 이미지를 gpt-image-2로 생성할 때 회차 간 시각 일관성을 유지하는 프롬프팅 가이드. 스타일 프리픽스, 사이즈 결정, 텍스트 회피, 트레이드마크 회피, 폴백 전략을 정의한다. slide-image-generator 에이전트가 사용한다.
---

# Slide Image Prompting Guide

`gpt-image2` 스킬을 호출할 때, 슬라이드용 이미지가 6주 전체에서 일관된 톤을 유지하도록 프롬프트 구조와 정책을 정의한다.

## 핵심 원칙

1. **스타일 프리픽스 고정** — 한 회차 내, 그리고 회차 간 가능하면 동일한 시각 어휘 유지
2. **이미지 안 텍스트 금지** — 슬라이드 텍스트는 HTML이 그린다. 이미지에 글자 들어가면 충돌
3. **트레이드마크 직접 묘사 금지** — GitHub Octocat·OpenAI 로고·Anthropic 로고 등은 추상화
4. **추상·기하·풍경·기물 메타포 우선, 사람 얼굴은 회피**

## 표준 스타일 프리픽스 (1회차 기본값)

```
Minimalist editorial illustration, soft pastel palette with deep navy and violet accents,
generous whitespace, abstract geometric composition, subtle gradient lighting,
no text or letters in the image, dreamy futuristic mood
```

회차마다 design_tone이 바뀌면 프리픽스도 갱신. 하지만 같은 회차 내에서는 변경 금지.

## 슬라이드 종류 → 사이즈

- `cover`, `closing`, `image-focus` — `landscape`(1792×1024)
- `concept`, `bullets`, `compare`, `code` — `square`(1024×1024)
- 표지·마무리는 quality `high`. 본문 이미지는 quality `medium`도 가능 (페이지 무게 조절)

## 프롬프트 결합 패턴

```
{style_prefix}, {brief}.
Composition: centered subject with breathing room, soft focus background.
Color: navy #0a0e1a base with violet #7c5cff and mint #00d9c0 accents.
Avoid: text, logos, watermarks, recognizable brand marks, human faces.
```

`brief`는 slide-architect의 `image_slot` 한 줄 그대로 + 위 가드레일 부착.

## 메타포 사전 (오픈소스 강의 도메인)

상황별 추천 메타포:

- **오픈소스 / 협업** → "interconnected glowing nodes", "constellation of geometric stars", "translucent overlapping shapes"
- **GitHub / 저장소** → "abstract code repository graph", "branching pathways made of light"
- **Pull Request / 머지** → "two streams converging into one river", "puzzle pieces clicking together"
- **AI / 멀티 에이전트** → "neural network glyph", "cluster of orbiting satellites", "hexagonal mesh"
- **라이선스 / 신뢰** → "transparent layered glass tablets", "circular seal with abstract crest"
- **커리어 / 성장** → "ascending staircase of light", "growing crystalline tree"

GitHub Octocat은 절대 그리지 말 것 — 트레이드마크. 대신 "branching graph" 같은 추상 표현.

## 호출 절차 (gpt-image2 스킬과 결합)

1. slide-architect의 plan에서 image_slot != "none" 슬라이드 추출
2. 각 slide_id에 대해:
   - `prompt = style_prefix + ", " + brief + ", " + 가드레일 문장들`
   - `size = landscape 또는 square` (kind에 따라)
   - `quality = high` (cover/closing) / `medium` (본문)
3. gpt-image2 스킬 호출 → 결과 PNG를 `outputs/슬라이드/{N}회차/assets/img/{slide_id}.png` 로 저장
4. 인덱스 JSON에 prompt 원문 저장 (재생성 가능하도록)

## 폴백 / 재생성

- gpt-image-2 응답이 content policy로 거부 → brief에서 민감어 제거 후 1회 재시도
- 톤이 어두워서 슬라이드와 안 어울림 → 프롬프트에 "bright pastel" 추가해 재생성
- 재시도 후에도 실패 → image_slot을 `"none"`으로 변경하고 web-builder에게 통보. web-builder가 그라디언트 박스로 대체.

## 회차별 design_tone 가이드

회차마다 어울리는 톤(slide-architect가 결정, 본 스킬은 어휘만 제공):

- **1회차 (왜)** — futuristic, dreamy, opening
- **2회차 (어떻게/협업)** — connected, branching, network
- **3회차 (라이선스/신뢰)** — structural, layered, glass
- **4회차 (AI 도구)** — luminous, fluid, augmented
- **5회차 (멀티 에이전트)** — orbital, multi-node, harmonic
- **6회차 (발표/커리어)** — ascending, celebratory, milestone

## 이미지 무게 관리

- PNG가 1MB 초과면 quality 한 단계 낮춰 재생성
- 회차당 이미지 합 4MB 목표 (페이지 LCP 2초 이내 위해)
- 표지·closing은 와이드 1792×1024로 화려하게, 본문은 1024×1024로 가볍게
