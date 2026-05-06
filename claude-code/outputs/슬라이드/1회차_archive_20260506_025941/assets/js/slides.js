(() => {
  'use strict';

  const deck = document.getElementById('deck');
  const slides = Array.from(deck.querySelectorAll('.slide'));
  const total = slides.length;
  const totalEl = document.getElementById('total');
  const curEl = document.getElementById('cur');
  const progressEl = document.getElementById('progress');
  if (totalEl) totalEl.textContent = String(total);

  let idx = 0;
  let step = 0;

  function activeSlide() { return slides[idx]; }
  function maxStep(slide) { return Number(slide.dataset.revealSteps || 0); }

  function render() {
    slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    const slide = activeSlide();
    const items = slide.querySelectorAll('.slide-body [data-step]');
    if (items.length) {
      items.forEach((el) => {
        const s = Number(el.dataset.step);
        el.classList.toggle('is-revealed', s <= step);
      });
    } else {
      slide.querySelectorAll('.slide-body li').forEach((li) => li.classList.add('is-revealed'));
    }

    if (curEl) curEl.textContent = String(idx + 1);
    if (progressEl) {
      const pct = total > 1 ? (idx / (total - 1)) * 100 : 0;
      progressEl.style.width = pct + '%';
    }

    const id = slide.dataset.id;
    if (id) {
      try { history.replaceState(null, '', '#' + id); } catch (e) { /* ignore */ }
    }
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
    const i = slides.findIndex((s) => s.dataset.id === id);
    if (i >= 0) { idx = i; step = 0; render(); }
  }

  function toggleTheme() {
    const cur = document.documentElement.dataset.theme || 'dark';
    const nxt = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nxt;
    try { localStorage.setItem('slide-theme', nxt); } catch (e) { /* ignore */ }
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      document.documentElement.requestFullscreen?.();
    }
  }

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.target && e.target.matches && e.target.matches('input, textarea, [contenteditable]')) return;
    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
        e.preventDefault();
        next();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        prev();
        break;
      case 'Home':
        e.preventDefault();
        idx = 0; step = 0; render();
        break;
      case 'End':
        e.preventDefault();
        idx = total - 1; step = maxStep(slides[idx]); render();
        break;
      case 'f': case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'Escape':
        if (document.fullscreenElement) document.exitFullscreen?.();
        break;
      case 'p': case 'P':
        e.preventDefault();
        window.print();
        break;
      case 't': case 'T':
        e.preventDefault();
        toggleTheme();
        break;
    }
  });

  // Controls click
  document.querySelectorAll('.deck-controls [data-action]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const a = btn.dataset.action;
      if (a === 'next') next();
      else if (a === 'prev') prev();
      else if (a === 'theme') toggleTheme();
      else if (a === 'fullscreen') toggleFullscreen();
      else if (a === 'print') window.print();
      else if (a === 'home') { idx = 0; step = 0; render(); }
    });
  });

  // Touch swipe
  let touchStartX = 0;
  let touchStartY = 0;
  deck.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  deck.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(); else prev();
    }
  });

  // Restore theme
  try {
    const saved = localStorage.getItem('slide-theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.dataset.theme = saved;
    }
  } catch (e) { /* ignore */ }

  // Initial render — hash 진입 또는 처음
  if (location.hash) {
    go(location.hash.slice(1));
  } else {
    render();
  }
})();
