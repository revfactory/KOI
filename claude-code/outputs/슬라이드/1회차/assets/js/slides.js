/* ============================================================
   KOI 1회차 슬라이드 컨트롤러 (dense-60 / 80 slides)
   - 키보드 내비게이션 (→/←/Space/PageUp/PageDown/Home/End/F/T/M/ESC/숫자+Enter)
   - reveal_steps 점진 노출
   - 점프 메뉴 (M)
   - URL 해시 동기화
   - IntersectionObserver 미사용 — 위치 기반 active 토글로 메모리 가드
   - 인쇄/풀스크린 토글
   ============================================================ */

(function () {
  'use strict';

  // ------------------------------------------------------------
  // 상태
  // ------------------------------------------------------------
  const deck = document.querySelector('.deck');
  if (!deck) return;
  const slides = Array.from(deck.querySelectorAll('.slide'));
  const total = slides.length;

  const state = {
    index: 0,
    revealCursor: 0,         // 현재 슬라이드의 reveal 단계 (0 = 모두 가려짐, N = 모두 보임)
    isMenuOpen: false,
    digitBuffer: '',
    digitTimer: null,
    activeWindow: 5,         // ±N 슬라이드만 DOM-active (메모리 가드)
    isPrinting: false,
  };

  // DOM refs
  const progressBar = document.querySelector('.progress-bar');
  const counterEl = document.querySelector('[data-role="counter"]');
  const counterPctEl = document.querySelector('[data-role="counter-pct"]');
  const trackEl = document.querySelector('[data-role="track"]');
  const jumpMenu = document.querySelector('.jump-menu');
  const jumpGrid = document.querySelector('.jump-grid');
  const sectionRow = document.querySelector('.jump-section-row');
  const themeBtn = document.querySelector('[data-action="theme"]');
  const fsBtn = document.querySelector('[data-action="fullscreen"]');
  const menuBtn = document.querySelector('[data-action="menu"]');
  const printBtn = document.querySelector('[data-action="print"]');
  const closeBtn = document.querySelector('.jump-menu .close-btn');
  const digitBufferEl = document.querySelector('.digit-buffer');
  const digitDigitsEl = document.querySelector('.digit-buffer .digits');

  const sectionDividers = (window.__SLIDE_META__ && window.__SLIDE_META__.sectionDividers) || [];
  const sectionTitles = (window.__SLIDE_META__ && window.__SLIDE_META__.sectionTitles) || {};

  // ------------------------------------------------------------
  // 유틸
  // ------------------------------------------------------------
  function pad3(n) { return String(n).padStart(3, '0'); }

  function findSlideByHash() {
    const h = (location.hash || '').replace('#', '').trim();
    if (!h) return -1;
    // s5, s05, s005 모두 인식
    const m = h.match(/^s0*(\d+)$/i);
    if (!m) return -1;
    const n = parseInt(m[1], 10);
    if (Number.isNaN(n)) return -1;
    return Math.max(0, Math.min(total - 1, n - 1));
  }

  function updateHash(idx, replace) {
    const id = `s${pad3(idx + 1)}`;
    const newHash = `#${id}`;
    if (location.hash === newHash) return;
    if (replace && history.replaceState) {
      history.replaceState(null, '', newHash);
    } else {
      location.hash = newHash;
    }
  }

  function getRevealItems(slide) {
    return Array.from(slide.querySelectorAll('[data-step]'));
  }

  // ------------------------------------------------------------
  // active window — 메모리 가드
  // ------------------------------------------------------------
  function applyActiveWindow() {
    const lo = Math.max(0, state.index - state.activeWindow);
    const hi = Math.min(total - 1, state.index + state.activeWindow);
    for (let i = 0; i < total; i++) {
      const s = slides[i];
      if (i >= lo && i <= hi) {
        s.style.contentVisibility = 'auto';
        s.removeAttribute('hidden');
      } else {
        s.style.contentVisibility = 'hidden';
        // hidden 속성은 active 슬라이드 토글에 영향 주므로 사용 안함
      }
    }
  }

  // ------------------------------------------------------------
  // 슬라이드 보여주기
  // ------------------------------------------------------------
  function showSlide(idx, opts) {
    opts = opts || {};
    const next = Math.max(0, Math.min(total - 1, idx));
    if (next === state.index && !opts.force) return;

    // 이전 슬라이드 정리
    slides.forEach((s, i) => {
      s.classList.remove('active', 'exit-prev');
      if (i < next) s.classList.add('exit-prev');
    });

    const target = slides[next];
    target.classList.add('active');
    state.index = next;

    // reveal 비활성화 — 모든 step 항목을 즉시 노출
    target.querySelectorAll('[data-step]').forEach(li => li.classList.add('revealed'));
    state.revealCursor = 0;

    updateChrome();
    applyActiveWindow();
    updateHash(next, true);

    // lazy 이미지 강제 로딩 (현재 + 다음 1장)
    [next, next + 1].forEach(i => {
      const sl = slides[i];
      if (!sl) return;
      sl.querySelectorAll('img[loading="lazy"]').forEach(img => {
        if (!img.complete) {
          // 강제 트리거 — src 재할당
          const src = img.getAttribute('src');
          if (src) img.setAttribute('src', src);
        }
      });
    });

    // 포커스를 active 슬라이드로 (스크린리더용)
    if (opts.focus) {
      target.setAttribute('tabindex', '-1');
      try { target.focus({ preventScroll: true }); } catch (e) { /* noop */ }
    }
  }

  function updateChrome() {
    const human = state.index + 1;
    const pct = total > 1 ? Math.round((state.index / (total - 1)) * 100) : 0;
    if (progressBar) progressBar.style.width = pct + '%';
    if (counterEl) counterEl.innerHTML = `<strong>${human}</strong> / ${total}`;
    if (counterPctEl) counterPctEl.textContent = pct + '%';

    // 점프 메뉴 셀 강조
    if (jumpGrid) {
      const cells = jumpGrid.querySelectorAll('.jump-cell');
      cells.forEach((c, i) => c.classList.toggle('is-current', i === state.index));
    }
  }

  // ------------------------------------------------------------
  // 다음 / 이전 — reveal_steps 비활성화, 슬라이드 단위로만 이동
  // ------------------------------------------------------------
  function next() {
    if (state.index < total - 1) {
      showSlide(state.index + 1, { fromForward: true });
    }
  }

  function prev() {
    if (state.index > 0) showSlide(state.index - 1, { fromForward: false });
  }

  // ------------------------------------------------------------
  // 풀스크린 / 테마 / 인쇄
  // ------------------------------------------------------------
  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }

  function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('koi-slide-theme', next); } catch (e) {}
    if (themeBtn) themeBtn.setAttribute('aria-label', next === 'dark' ? '라이트 모드로' : '다크 모드로');
  }

  function loadTheme() {
    let saved = 'dark';
    try { saved = localStorage.getItem('koi-slide-theme') || 'dark'; } catch (e) {}
    document.documentElement.setAttribute('data-theme', saved);
  }

  function doPrint() {
    state.isPrinting = true;
    // 모든 슬라이드의 reveal을 모두 펼쳐 두기
    slides.forEach(s => {
      s.querySelectorAll('[data-step]').forEach(li => li.classList.add('revealed'));
      s.style.contentVisibility = 'visible';
    });
    setTimeout(() => {
      window.print();
      state.isPrinting = false;
    }, 150);
  }

  // ------------------------------------------------------------
  // 점프 메뉴
  // ------------------------------------------------------------
  function buildJumpMenu() {
    if (!jumpGrid || !sectionRow) return;
    // 섹션 핀
    sectionDividers.forEach(id => {
      const m = id.match(/^s0*(\d+)$/);
      if (!m) return;
      const idx = parseInt(m[1], 10) - 1;
      if (idx < 0 || idx >= total) return;
      const btn = document.createElement('button');
      btn.className = 'section-pill';
      const title = sectionTitles[id] || id;
      btn.innerHTML = `<span class="num">${id}</span>${title}`;
      btn.setAttribute('data-jump', String(idx));
      btn.setAttribute('aria-label', `섹션으로 이동 — ${title}`);
      sectionRow.appendChild(btn);
    });

    // 80 셀
    for (let i = 0; i < total; i++) {
      const cell = document.createElement('button');
      cell.className = 'jump-cell';
      cell.textContent = String(i + 1);
      cell.setAttribute('data-jump', String(i));
      const slide = slides[i];
      const sid = slide.getAttribute('data-id');
      const title = slide.querySelector('.slide-title')?.textContent || '';
      cell.title = `${sid} · ${title}`;
      cell.setAttribute('aria-label', `슬라이드 ${i + 1}로 이동: ${title}`);
      if (sectionDividers.includes(sid)) cell.classList.add('is-section');
      jumpGrid.appendChild(cell);
    }

    // 위임 클릭
    [jumpGrid, sectionRow].forEach(host => {
      host.addEventListener('click', (e) => {
        const t = e.target.closest('[data-jump]');
        if (!t) return;
        const idx = parseInt(t.getAttribute('data-jump'), 10);
        if (Number.isNaN(idx)) return;
        showSlide(idx, { focus: true });
        closeMenu();
      });
    });
  }

  function openMenu() {
    if (!jumpMenu) return;
    jumpMenu.setAttribute('aria-hidden', 'false');
    state.isMenuOpen = true;
    // 현재 셀 강조 + 포커스
    updateChrome();
    const cur = jumpGrid?.children[state.index];
    setTimeout(() => { try { cur?.focus(); } catch (e) {} }, 50);
  }

  function closeMenu() {
    if (!jumpMenu) return;
    jumpMenu.setAttribute('aria-hidden', 'true');
    state.isMenuOpen = false;
  }

  function toggleMenu() {
    if (state.isMenuOpen) closeMenu();
    else openMenu();
  }

  // ------------------------------------------------------------
  // 숫자 버퍼 (NN+Enter)
  // ------------------------------------------------------------
  function showDigitBuffer() {
    if (!digitBufferEl) return;
    if (state.digitBuffer.length === 0) {
      digitBufferEl.classList.remove('visible');
      return;
    }
    digitBufferEl.classList.add('visible');
    digitDigitsEl.textContent = state.digitBuffer;
  }

  function pushDigit(d) {
    state.digitBuffer = (state.digitBuffer + d).slice(0, 3);
    showDigitBuffer();
    if (state.digitTimer) clearTimeout(state.digitTimer);
    state.digitTimer = setTimeout(() => {
      state.digitBuffer = '';
      showDigitBuffer();
    }, 1800);
  }

  function commitDigit() {
    if (state.digitBuffer.length === 0) return;
    const n = parseInt(state.digitBuffer, 10);
    state.digitBuffer = '';
    showDigitBuffer();
    if (state.digitTimer) clearTimeout(state.digitTimer);
    if (Number.isNaN(n)) return;
    const idx = Math.max(0, Math.min(total - 1, n - 1));
    showSlide(idx, { focus: true });
  }

  // ------------------------------------------------------------
  // 키보드
  // ------------------------------------------------------------
  function onKeydown(e) {
    // 메뉴 모드
    if (state.isMenuOpen) {
      if (e.key === 'Escape' || e.key === 'm' || e.key === 'M') {
        closeMenu();
        e.preventDefault();
      }
      return;
    }

    // 입력 가능한 곳에서는 무시
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;

    // 숫자 버퍼링
    if (/^\d$/.test(e.key)) {
      pushDigit(e.key);
      e.preventDefault();
      return;
    }

    if (e.key === 'Enter') {
      if (state.digitBuffer.length > 0) {
        commitDigit();
        e.preventDefault();
        return;
      }
    }

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
      case 'n':
      case 'N':
        next();
        e.preventDefault();
        break;
      case 'ArrowLeft':
      case 'PageUp':
      case 'p':
      case 'P':
        if (e.key === 'p' || e.key === 'P') {
          // p 인쇄 vs 이전 — Cmd/Ctrl+P 는 인쇄, p 단독은 이전으로
          if (e.metaKey || e.ctrlKey) {
            doPrint();
            e.preventDefault();
            break;
          }
        }
        prev();
        e.preventDefault();
        break;
      case 'Home':
        showSlide(0, { focus: true });
        e.preventDefault();
        break;
      case 'End':
        showSlide(total - 1, { focus: true });
        e.preventDefault();
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        e.preventDefault();
        break;
      case 't':
      case 'T':
        toggleTheme();
        e.preventDefault();
        break;
      case 'm':
      case 'M':
        toggleMenu();
        e.preventDefault();
        break;
      case 'Escape':
        if (document.fullscreenElement) document.exitFullscreen();
        break;
      case '?':
        toggleMenu();
        e.preventDefault();
        break;
      default:
        break;
    }
  }

  // ------------------------------------------------------------
  // 클릭 / 터치 — 좌측 = 이전, 우측 = 다음 (가장자리 25%)
  // ------------------------------------------------------------
  function onDeckClick(e) {
    if (state.isMenuOpen) return;
    // 인터랙티브 요소(버튼, 이미지 a 등) 클릭은 무시
    if (e.target.closest('button, a, input, textarea')) return;
    const x = e.clientX;
    const w = window.innerWidth;
    if (x < w * 0.25) prev();
    else if (x > w * 0.75) next();
    else next();
  }

  // 터치 스와이프
  let touchStartX = 0;
  let touchStartY = 0;
  function onTouchStart(e) {
    if (!e.touches[0]) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }
  function onTouchEnd(e) {
    if (!e.changedTouches[0]) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next(); else prev();
  }

  // ------------------------------------------------------------
  // 이미지 fallback — 깨진 이미지 발견 시 placeholder
  // ------------------------------------------------------------
  function bindImageFallbacks() {
    document.querySelectorAll('.slide-image img').forEach(img => {
      img.addEventListener('error', () => {
        const fig = img.parentElement;
        if (!fig) return;
        const sid = fig.closest('.slide')?.getAttribute('data-id') || '';
        const fb = document.createElement('div');
        fb.className = 'image-fallback';
        fb.innerHTML = `<span>${sid} · 시각 일러스트 (생성 중)</span>`;
        fig.replaceChildren(fb);
      });
    });
  }

  // ------------------------------------------------------------
  // 해시 변경
  // ------------------------------------------------------------
  function onHashChange() {
    const idx = findSlideByHash();
    if (idx >= 0 && idx !== state.index) showSlide(idx);
  }

  // ------------------------------------------------------------
  // 인쇄 이벤트 — beforeprint 시 전체 펼침
  // ------------------------------------------------------------
  function bindPrintEvents() {
    window.addEventListener('beforeprint', () => {
      slides.forEach(s => {
        s.querySelectorAll('[data-step]').forEach(li => li.classList.add('revealed'));
        s.style.contentVisibility = 'visible';
      });
    });
    window.addEventListener('afterprint', () => {
      if (!state.isPrinting) {
        applyActiveWindow();
      }
    });
  }

  // ------------------------------------------------------------
  // 초기화
  // ------------------------------------------------------------
  function init() {
    loadTheme();
    buildJumpMenu();
    bindImageFallbacks();
    bindPrintEvents();

    // chrome 버튼
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if (fsBtn) fsBtn.addEventListener('click', toggleFullscreen);
    if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if (printBtn) printBtn.addEventListener('click', doPrint);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (jumpMenu) jumpMenu.addEventListener('click', (e) => {
      if (e.target === jumpMenu) closeMenu();
    });

    // 키보드 / 마우스 / 터치
    window.addEventListener('keydown', onKeydown, false);
    deck.addEventListener('click', onDeckClick, false);
    deck.addEventListener('touchstart', onTouchStart, { passive: true });
    deck.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('hashchange', onHashChange, false);

    // 트랙
    if (trackEl && window.__SLIDE_META__) {
      trackEl.textContent = window.__SLIDE_META__.track || '';
    }

    // 초기 인덱스 결정
    const fromHash = findSlideByHash();
    const startIdx = fromHash >= 0 ? fromHash : 0;
    showSlide(startIdx, { force: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 디버그용 글로벌 — 콘솔에서 window.__deck.diag(13) 호출 가능
  window.__deck = {
    next, prev,
    go: (n) => showSlide(n - 1, { focus: true }),
    state,
    diag: (n) => {
      const sl = slides[n - 1];
      if (!sl) return console.error('slide not found:', n);
      const cs = window.getComputedStyle(sl);
      const reveal = sl.querySelectorAll('[data-step]');
      console.log({
        slideNum: n,
        id: sl.getAttribute('data-id'),
        kind: sl.getAttribute('data-kind'),
        active: sl.classList.contains('active'),
        opacity: cs.opacity,
        visibility: cs.visibility,
        display: cs.display,
        contentVisibility: cs.contentVisibility,
        revealItems: reveal.length,
        currentIndex: state.index,
      });
      return sl;
    },
  };
})();
