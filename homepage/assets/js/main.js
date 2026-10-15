(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');

  var header = document.querySelector('.header');
  var toggle = document.querySelector('.menu-toggle');
  var toTop = document.querySelector('.to-top');

  /* Header state on scroll + back-to-top button */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('is-scrolled', y > 40);
    if (toTop) toTop.classList.toggle('is-visible', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900 && header.classList.contains('is-open')) toggle.click();
    });
  }

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Reveal on scroll */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Spotlight cards: glow follows the pointer */
  document.querySelectorAll('.spot').forEach(function (el) {
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty('--x', (e.clientX - r.left) + 'px');
      el.style.setProperty('--y', (e.clientY - r.top) + 'px');
    });
  });

  /* Statement: words light up as the block scrolls through the viewport */
  var statement = document.querySelector('.statement__text');
  if (statement) {
    var html = '';
    statement.childNodes.forEach(function (node) {
      var hl = node.nodeType === 1 && node.tagName === 'EM';
      node.textContent.split(/(\s+)/).forEach(function (part) {
        if (!part) return;
        html += /^\s+$/.test(part) ? part : '<span class="w' + (hl ? ' hl' : '') + '">' + part + '</span>';
      });
    });
    statement.innerHTML = html;
    var stWords = statement.querySelectorAll('.w');
    var paint = function () {
      var r = statement.getBoundingClientRect();
      var vh = window.innerHeight;
      var p = (vh * 0.85 - r.top) / (r.height + vh * 0.35);
      var n = Math.round(Math.max(0, Math.min(1, p)) * stWords.length);
      for (var i = 0; i < stWords.length; i++) stWords[i].classList.toggle('on', i < n);
    };
    window.addEventListener('scroll', paint, { passive: true });
    window.addEventListener('resize', paint);
    paint();
  }

  /* Hero word rotator */
  var rotator = document.querySelector('.hero__rotator');
  if (rotator) {
    var words = rotator.querySelectorAll('span');
    var current = 0;
    words[0].classList.add('is-active');
    setInterval(function () {
      var prev = words[current];
      current = (current + 1) % words.length;
      prev.classList.remove('is-active');
      prev.classList.add('is-leaving');
      words[current].classList.remove('is-leaving');
      words[current].classList.add('is-active');
      setTimeout(function () { prev.classList.remove('is-leaving'); }, 800);
    }, 2800);
  }

  /* Count-up numbers */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / 1400, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        co.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* Certificate lightbox */
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    var lbCap = lightbox.querySelector('figcaption');
    var lastFocus = null;

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    }

    document.querySelectorAll('[data-lightbox]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        lastFocus = btn;
        lbImg.src = btn.getAttribute('data-lightbox');
        lbImg.alt = btn.getAttribute('data-caption') || '';
        lbCap.textContent = btn.getAttribute('data-caption') || '';
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        lightbox.querySelector('.lightbox__close').focus();
      });
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.closest('.lightbox__close')) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });
  }
})();
