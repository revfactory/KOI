---
name: slide-web-build
description: 슬라이드 플랜 JSON과 이미지 인덱스를 받아 vanilla HTML/CSS/JS 단일 페이지 슬라이드를 빌드하는 가이드. 키보드 내비게이션·풀스크린·인쇄 모드·다크/라이트 토글·점진적 노출(reveal)·반응형을 모두 외부 의존성 없이 구현한다. slide-web-builder 에이전트 전용.
---

# Slide Web Build Guide

`slide-architect`의 plan과 `slide-image-generator`의 이미지로 단일 HTML 슬라이드 빌드.

## 산출물 구조

```
outputs/슬라이드/{N}회차/
├── index.html
├── assets/
│   ├── css/slides.css
│   ├── js/slides.js
│   └── img/s01.png ... s13.png
```

## 1. index.html 골격

```html
<!doctype html>
<html lang="ko" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title} — N회차</title>
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
<link rel="stylesheet" href="assets/css/slides.css">
<meta name="theme-color" content="#0a0e1a">
</head>
<body>
  <main id="deck" aria-label="발표 슬라이드">
    <!-- N개의 <section class="slide"> -->
  </main>
  <nav class="deck-controls" aria-label="슬라이드 컨트롤">
    <button data-action="prev" aria-label="이전">←</button>
    <span class="deck-counter"><span id="cur">1</span> / <span id="total">13</span></span>
    <button data-action="next" aria-label="다음">→</button>
    <button data-action="theme" aria-label="다크/라이트">◐</button>
    <button data-action="fullscreen" aria-label="풀스크린">⛶</button>
    <button data-action="print" aria-label="인쇄">⎙</button>
  </nav>
  <script src="assets/js/slides.js" defer></script>
</body>
</html>
```

## 2. 슬라이드 한 장 마크업 패턴

```html
<section class="slide" data-id="s05" data-kind="bullets" data-reveal-steps="3" aria-roledescription="slide" aria-label="슬라이드 5">
  <div class="slide-bg" data-anim="gradient-mesh" aria-hidden="true"></div>
  <div class="slide-card">
    <span class="slide-eyebrow">개념 1</span>
    <h2 class="slide-title">{title}</h2>
    <p class="slide-subtitle">{subtitle}</p>
    <ul class="slide-body">
      <li data-step="1">...</li>
      <li data-step="2">...</li>
      <li data-step="3">...</li>
    </ul>
    <figure class="slide-image">
      <img src="assets/img/s05.png" alt="" loading="lazy" width="1024" height="640">
    </figure>
  </div>
  <footer class="slide-footer">
    <span class="slide-num">5 / 13</span>
    <span class="slide-track">1회차 · AI 시대의 오픈소스</span>
  </footer>
</section>
```

`kind`별 변형:
- `cover` / `closing` — `.slide-card` 없이 `.slide-display`로 큰 타이포만
- `image-focus` — `.slide-image`가 풀화면, 하단 캡션
- `code` — `.slide-body`를 `<pre><code>`로
- `compare` — `.slide-body`를 두 컬럼 ul로

## 3. CSS (`assets/css/slides.css`) 골격

`slide-design-system` 스킬의 토큰을 그대로 가져와 시작. 핵심 패턴:

```css
@import url('...'); /* (Pretendard는 head에서 link로 들어가니 import 불필요) */

/* :root 변수는 slide-design-system 토큰 그대로 */

* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; overflow: hidden; }
body { font-family: var(--font-sans); background: var(--bg-base); color: var(--fg-primary); }

#deck { position: relative; width: 100vw; height: 100vh; }

.slide {
  position: absolute; inset: 0;
  display: grid; place-items: center;
  opacity: 0; pointer-events: none;
  transition: opacity var(--duration-base) var(--ease-out);
}
.slide.is-active { opacity: 1; pointer-events: auto; }

.slide-bg { position: absolute; inset: 0; z-index: 0; }
.slide-bg[data-anim="gradient-mesh"]::before,
.slide-bg[data-anim="gradient-mesh"]::after { /* 디자인 시스템 패턴 */ }

.slide-card {
  position: relative; z-index: 1;
  max-width: 1200px; width: min(92vw, 1200px);
  padding: var(--s-5) var(--s-6);
  border-radius: var(--radius-card);
  background: var(--bg-elevated);
  backdrop-filter: blur(var(--blur-glass));
  -webkit-backdrop-filter: blur(var(--blur-glass));
  border: 1px solid var(--border-subtle);
  display: grid; gap: var(--s-3);
}

.slide-display { /* cover/closing */
  position: relative; z-index: 1; text-align: center; padding: 0 var(--s-5);
}
.slide-display h1 { font-size: var(--fs-display); font-weight: 700; line-height: var(--lh-tight); }

.slide-eyebrow {
  display: inline-block; padding: 4px 12px; border-radius: var(--radius-pill);
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  color: #fff; font-size: var(--fs-caption); font-weight: 600;
}
.slide-title { font-size: var(--fs-h1); font-weight: 700; line-height: var(--lh-tight); }
.slide-subtitle { font-size: var(--fs-body); color: var(--fg-secondary); }
.slide-body li { list-style: none; padding-left: 24px; position: relative; line-height: var(--lh-normal); }
.slide-body li::before { content: '→'; position: absolute; left: 0; color: var(--accent-secondary); }
.slide-body li { opacity: 0; transform: translateY(8px); transition: all var(--duration-base) var(--ease-out); }
.slide-body li.is-revealed { opacity: 1; transform: translateY(0); }

.slide[data-kind="concept"] .slide-card { grid-template-columns: 1fr 1fr; align-items: center; }
.slide-image img { width: 100%; height: auto; border-radius: 16px; }

.slide-footer {
  position: absolute; bottom: var(--s-3); left: var(--s-4); right: var(--s-4);
  display: flex; justify-content: space-between;
  font-size: var(--fs-caption); color: var(--fg-muted);
}

.deck-controls {
  position: fixed; bottom: var(--s-3); left: 50%; transform: translateX(-50%);
  display: flex; gap: var(--s-1); padding: var(--s-1);
  background: var(--bg-elevated); backdrop-filter: blur(12px);
  border-radius: var(--radius-pill); border: 1px solid var(--border-subtle);
  z-index: 10;
}
.deck-controls button {
  background: transparent; border: 0; color: var(--fg-primary);
  width: 40px; height: 40px; border-radius: var(--radius-pill);
  cursor: pointer; font-size: 18px;
}
.deck-controls button:hover { background: var(--border-subtle); }
.deck-counter { padding: 0 var(--s-2); display: grid; place-items: center; font-variant-numeric: tabular-nums; }

@media (max-width: 768px) {
  .slide-card { padding: var(--s-3); }
  .slide[data-kind="concept"] .slide-card { grid-template-columns: 1fr; }
  .slide-footer { font-size: 11px; }
}

@media print {
  html, body { overflow: visible; height: auto; }
  #deck { display: block; height: auto; }
  .slide { position: static; opacity: 1 !important; pointer-events: auto;
           page-break-after: always; page-break-inside: avoid;
           min-height: 100vh; }
  .slide-bg { background: #fff; }
  .slide-bg::before, .slide-bg::after { display: none; }
  .slide-card { background: #fff; color: #000; border: 1px solid #ccc; backdrop-filter: none; }
  .deck-controls { display: none; }
  .slide-body li { opacity: 1 !important; transform: none !important; }
}
```

## 4. JS (`assets/js/slides.js`) 골격 — 상태 머신

```javascript
(() => {
  const deck = document.getElementById('deck');
  const slides = [...deck.querySelectorAll('.slide')];
  const total = slides.length;
  const totalEl = document.getElementById('total');
  const curEl = document.getElementById('cur');
  totalEl.textContent = total;

  let idx = 0;
  let step = 0;

  function activeSlide() { return slides[idx]; }
  function maxStep(slide) { return Number(slide.dataset.revealSteps || 0); }

  function render() {
    slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    const slide = activeSlide();
    const items = slide.querySelectorAll('.slide-body [data-step]');
    items.forEach(el => {
      const s = Number(el.dataset.step);
      el.classList.toggle('is-revealed', s <= step);
    });
    if (!items.length) {
      // body에 data-step 없으면 전체 reveal
      slide.querySelectorAll('.slide-body li').forEach(li => li.classList.add('is-revealed'));
    }
    curEl.textContent = idx + 1;
    history.replaceState(null, '', `#${slide.dataset.id}`);
  }

  function next() {
    const slide = activeSlide();
    const max = maxStep(slide);
    if (step < max) { step++; render(); return; }
    if (idx < total - 1) { idx++; step = 0; render(); }
  }
  function prev() {
    if (step > 0) { step--; render(); return; }
    if (idx > 0) { idx--; step = maxStep(slides[idx]); render(); }
  }
  function go(id) {
    const i = slides.findIndex(s => s.dataset.id === id);
    if (i >= 0) { idx = i; step = 0; render(); }
  }

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea')) return;
    switch (e.key) {
      case 'ArrowRight': case ' ': case 'PageDown': e.preventDefault(); next(); break;
      case 'ArrowLeft': case 'PageUp': e.preventDefault(); prev(); break;
      case 'Home': idx = 0; step = 0; render(); break;
      case 'End': idx = total - 1; step = maxStep(slides[idx]); render(); break;
      case 'f': case 'F': document.documentElement.requestFullscreen?.(); break;
      case 'Escape': if (document.fullscreenElement) document.exitFullscreen?.(); break;
      case 'p': case 'P': window.print(); break;
      case 't': case 'T': toggleTheme(); break;
    }
  });

  // Controls
  document.querySelectorAll('.deck-controls [data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const a = btn.dataset.action;
      if (a === 'next') next();
      else if (a === 'prev') prev();
      else if (a === 'theme') toggleTheme();
      else if (a === 'fullscreen') document.documentElement.requestFullscreen?.();
      else if (a === 'print') window.print();
    });
  });

  function toggleTheme() {
    const cur = document.documentElement.dataset.theme;
    document.documentElement.dataset.theme = cur === 'dark' ? 'light' : 'dark';
    localStorage.setItem('slide-theme', document.documentElement.dataset.theme);
  }
  const savedTheme = localStorage.getItem('slide-theme');
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;

  // Hash 진입
  if (location.hash) go(location.hash.slice(1));
  else render();

  // Touch (좌우 스와이프)
  let touchStartX = 0;
  deck.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  deck.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
  });
})();
```

## 5. 빌드 절차 (web-builder가 수행)

1. `_workspace/slides/{N}회차/01_slide_plan.json` Read
2. `_workspace/slides/{N}회차/02_image_index.json` Read
3. `outputs/슬라이드/{N}회차/assets/img/` 디렉토리 생성, image-generator 산출물이 이미 거기 있는지 확인
4. plan의 slides 배열 순회 → 위 마크업 패턴으로 HTML 생성
5. `slide-design-system` 토큰을 따라 CSS 작성
6. JS는 위 골격 그대로 + slide 수에 맞춰 동작
7. 단일 파일 산출 — `index.html` + `assets/css/slides.css` + `assets/js/slides.js`
8. 콘솔 에러 없이 로드되는지 정적 점검 (Read로 다시 확인)

## 6. 빌드 후 자가 점검

- 슬라이드 수 = plan total_slides
- 모든 image_slot의 이미지 파일이 디렉토리에 존재
- 표지·closing에 동일 핵심 메시지 노출
- `<title>` 태그가 회차 정보 포함
