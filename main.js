/* =========================================================
   My AdDU Journey — Motion & Interactions
   ========================================================= */

(() => {
  'use strict';

  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Scroll progress ---------- */
  const progressEl = document.getElementById('scrollProgress');
  const updateProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressEl) progressEl.style.width = pct + '%';
  };

  /* ---------- Top bar state ---------- */
  const topBar = document.querySelector('.top-bar');
  const updateTopBar = () => {
    if (!topBar) return;
    if (window.scrollY > 40) topBar.classList.add('scrolled');
    else topBar.classList.remove('scrolled');
  };

  /* ---------- Mobile menu toggle ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const topNav = document.getElementById('topNav');
  if (menuToggle && topNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = topNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    topNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        topNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Year in footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !prefersReduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Active section / side nav ---------- */
  const sections = Array.from(document.querySelectorAll('main > section'));
  const navDots = document.querySelectorAll('.nav-dot');
  const topLinks = document.querySelectorAll('.top-nav a');
  const setActive = (id) => {
    navDots.forEach(el => {
      el.classList.toggle('active', el.getAttribute('href') === `#${id}`);
    });
    topLinks.forEach(el => {
      el.classList.toggle('active', el.getAttribute('href') === `#${id}`);
    });
  };
  const activeObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 })
    : null;
  if (activeObserver) sections.forEach(s => activeObserver.observe(s));

  /* ---------- Parallax (lightweight) ---------- */
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  const applyParallax = () => {
    if (prefersReduce) return;
    const vh = window.innerHeight;
    parallaxEls.forEach(el => {
      const rate = parseFloat(el.getAttribute('data-parallax')) || 0;
      const rect = el.getBoundingClientRect();
      const offsetFromCenter = (rect.top + rect.height / 2) - vh / 2;
      const translate = offsetFromCenter * rate * -1;
      const img = el.tagName === 'IMG' ? el : el.querySelector('img');
      if (img) img.style.transform = `translate3d(0, ${translate.toFixed(1)}px, 0) scale(1.02)`;
    });
  };

  /* ---------- Hero portrait subtle tilt ---------- */
  const portrait = document.querySelector('.portrait-frame');
  if (portrait && !prefersReduce) {
    const wrap = portrait.parentElement;
    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width - 0.5;
      const my = (e.clientY - rect.top) / rect.height - 0.5;
      portrait.style.transform = `rotate(${-2 + mx * 3}deg) rotateX(${my * -4}deg) rotateY(${mx * 4}deg) translateY(${my * -6}px)`;
    };
    const reset = () => {
      portrait.style.transform = '';
    };
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', reset);
  }

  /* ---------- Smooth scroll for hash links (respects reduced motion) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReduce ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    });
  });

  /* ---------- rAF scroll loop ---------- */
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateProgress();
        updateTopBar();
        applyParallax();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateProgress();
  updateTopBar();
  applyParallax();

  /* ---------- Keyboard nav between sections (optional, J/K or arrows with modifier) ---------- */
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea, [contenteditable]')) return;
    if (!e.altKey && !e.metaKey && !(e.key === 'j' || e.key === 'k')) return;
    const currentIdx = sections.findIndex(s => {
      const r = s.getBoundingClientRect();
      return r.top <= window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.5;
    });
    let nextIdx = currentIdx;
    if (e.key === 'ArrowDown' || e.key === 'j') nextIdx = Math.min(sections.length - 1, currentIdx + 1);
    if (e.key === 'ArrowUp'   || e.key === 'k') nextIdx = Math.max(0, currentIdx - 1);
    if (nextIdx !== currentIdx && sections[nextIdx]) {
      e.preventDefault();
      sections[nextIdx].scrollIntoView({ behavior: prefersReduce ? 'auto' : 'smooth', block: 'start' });
    }
  });
})();
