---
name: slide-design-system
description: 6주 OSS 강의 슬라이드 웹페이지의 디자인 토큰·타이포·컬러·애니메이션·간격 표준을 정의하는 디자인 시스템. slide-web-builder가 HTML/CSS를 작성할 때 반드시 따른다. 다크 모드 기본 + 애니메이션 그라디언트 메시 배경 + frosted glass 카드 + Pretendard 타이포 조합.
---

# Slide Design System

6주 강의 슬라이드 웹페이지의 단일 디자인 표준. 회차가 달라도 같은 톤을 유지한다.

## 디자인 톤 한 줄

**Modern minimal dark + animated gradient mesh + frosted glass cards** — 미니멀 다크 베이스 위에 부드럽게 흐르는 그라디언트, 글래스모피즘 카드로 콘텐츠 강조. Pretendard 한국어 타이포로 가독성 확보.

## 디자인 토큰 (CSS 변수)

```css
:root {
  /* Dark mode (default) */
  --bg-base: #0a0e1a;            /* deep navy */
  --bg-elevated: rgba(20, 26, 44, 0.6);  /* glass card */
  --fg-primary: #f3f4f8;
  --fg-secondary: #a8b0c5;
  --fg-muted: #6b7388;
  --accent-primary: #7c5cff;     /* violet */
  --accent-secondary: #00d9c0;   /* mint */
  --accent-warn: #ff8a3d;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --gradient-1: radial-gradient(circle at 20% 30%, #7c5cff33 0%, transparent 40%);
  --gradient-2: radial-gradient(circle at 80% 70%, #00d9c033 0%, transparent 40%);
  --gradient-3: radial-gradient(circle at 50% 50%, #ff8a3d22 0%, transparent 60%);

  /* Typography */
  --font-sans: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;
  --fs-display: clamp(2.5rem, 5vw, 4rem);
  --fs-h1: clamp(2rem, 4vw, 3rem);
  --fs-h2: clamp(1.5rem, 3vw, 2rem);
  --fs-body: clamp(1.05rem, 1.5vw, 1.25rem);
  --fs-caption: 0.875rem;
  --lh-tight: 1.2;
  --lh-normal: 1.55;

  /* Spacing (8pt grid) */
  --s-1: 0.5rem;
  --s-2: 1rem;
  --s-3: 1.5rem;
  --s-4: 2rem;
  --s-5: 3rem;
  --s-6: 4rem;
  --s-8: 6rem;

  /* Radius / blur */
  --radius-card: 24px;
  --radius-pill: 999px;
  --blur-glass: 24px;

  /* Motion */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-slow: 800ms;
  --duration-base: 400ms;
  --duration-fast: 200ms;
}

[data-theme="light"] {
  --bg-base: #f5f6fa;
  --bg-elevated: rgba(255, 255, 255, 0.7);
  --fg-primary: #0a0e1a;
  --fg-secondary: #41475a;
  --fg-muted: #8a92a8;
  --border-subtle: rgba(10, 14, 26, 0.08);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: 0.01ms !important; }
}
```

## 슬라이드 레이아웃 표준

- 슬라이드는 `100vw × 100vh` 풀 뷰포트
- 컨텐츠는 `max-width: 1200px`, 중앙 정렬
- 카드(`.slide-card`)는 `padding: var(--s-5) var(--s-6)`, `border-radius: var(--radius-card)`, `backdrop-filter: blur(var(--blur-glass))`, `background: var(--bg-elevated)`, `border: 1px solid var(--border-subtle)`
- 표지·closing은 카드 없이 큰 타이포만
- 텍스트는 카드 안쪽, 이미지는 카드 옆 또는 카드 위 (`kind: image-focus`는 전체)

## 애니메이션 배경

`.slide-bg[data-anim="gradient-mesh"]` 표준 패턴:

```css
.slide-bg {
  position: absolute; inset: 0; z-index: 0;
  background: var(--bg-base);
  overflow: hidden;
}
.slide-bg::before, .slide-bg::after {
  content: ''; position: absolute; inset: -25%;
  background: var(--gradient-1), var(--gradient-2), var(--gradient-3);
  filter: blur(60px);
  animation: meshShift 18s ease-in-out infinite alternate;
}
.slide-bg::after { animation-direction: alternate-reverse; animation-duration: 24s; }
@keyframes meshShift {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(2%, -2%) scale(1.05); }
  100% { transform: translate(-2%, 3%) scale(1.02); }
}
```

reduced-motion 환경에서는 자동 정지.

## 슬라이드 진입 애니메이션

```css
.slide.is-active .slide-card { animation: cardIn var(--duration-slow) var(--ease-out); }
@keyframes cardIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
.slide-body li { opacity: 0; transform: translateY(8px); transition: all var(--duration-base) var(--ease-out); }
.slide-body li.is-revealed { opacity: 1; transform: translateY(0); }
```

`slides.js`가 `is-active` / `is-revealed` 클래스를 토글한다.

## 인쇄 모드 (`@media print`)

- 슬라이드 1장 = 인쇄 1쪽 (A4 가로)
- 애니메이션 배경 제거, 카드 배경 흰색, 텍스트 검정
- 페이지 번호 footer만 유지

## 한국어·외래어 표기

- 본문 폰트는 Pretendard (KR/EN 모두 우수). 코드는 JetBrains Mono.
- 외래어 첫 등장 시 영문(한글, 약어) 병기. 두 번째부터 약어 또는 한글.

## 슬라이드 종류별 레이아웃

- `cover` — 화면 중앙 큰 타이포(display) + 배경 풀 그라디언트, 카드 없음
- `concept` — 좌 텍스트 / 우 이미지 2단
- `bullets` — 카드 안 H2 + 불릿(점진적 노출)
- `quote` — 큰 인용 + 작은 출처
- `image-focus` — 이미지 풀화면 + 하단 한 줄 캡션
- `code` — 카드 안 코드 블록(JetBrains Mono) + 좌측 짧은 설명
- `compare` — 카드 안 좌/우 2단(불릿 vs 불릿)
- `closing` — cover와 같은 레이아웃, 다른 핵심 메시지 재노출

## 검증 체크리스트

- 명도 대비 — 본문 텍스트 4.5:1 이상 (`--fg-primary` ↔ `--bg-base`)
- 키보드 포커스 — 활성 슬라이드 내비게이션 도트가 outline으로 가시
- 라이트 모드에서도 그라디언트 배경이 너무 강하지 않은지 (배경 alpha 낮춤)
- 인쇄 미리보기에서 13장이 13쪽으로 떨어지는지
