/* BLINKEARS — site script (v11) */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Mobile menu */
  var btn = document.querySelector('.menu-button');
  var nav = document.querySelector('.site-nav');
  function setMenu(open) {
    if (!btn || !nav) return;
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', open);
  }
  if (btn && nav) {
    btn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 720) setMenu(false); });
  }

  /* Header shadow on scroll */
  var header = document.querySelector('.site-header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Reveal on scroll */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* Active nav link (single-page sections only) */
  var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  if ('IntersectionObserver' in window && links.length) {
    var map = {};
    links.forEach(function (a) { var s = document.querySelector(a.getAttribute('href')); if (s) map[s.id] = a; });
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (l) { l.classList.remove('active'); });
          map[en.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { navIo.observe(document.getElementById(id)); });
  }

  /* Glowing fireflies — a nod to the Blinkears' antennae */
  document.querySelectorAll('.fireflies').forEach(function (box) {
    var count = window.innerWidth < 720 ? 10 : 18;
    for (var i = 0; i < count; i++) {
      var f = document.createElement('span');
      f.className = 'firefly';
      var r = function (a, b) { return a + Math.random() * (b - a); };
      f.style.left = r(2, 98) + '%';
      f.style.top = r(10, 95) + '%';
      f.style.setProperty('--s', r(3, 8).toFixed(1) + 'px');
      f.style.setProperty('--d', r(10, 22).toFixed(1) + 's');
      f.style.setProperty('--b', r(2.4, 5).toFixed(1) + 's');
      f.style.setProperty('--delay', (-r(0, 20)).toFixed(1) + 's');
      f.style.setProperty('--x', r(-60, 60).toFixed(0) + 'px');
      f.style.setProperty('--y', r(30, 120).toFixed(0) + 'px');
      box.appendChild(f);
    }
  });

  /* Toast + copy email */
  var toast = document.querySelector('.toast');
  var toastTimer;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2200);
  }
  document.querySelectorAll('.copy-mail').forEach(function (b) {
    b.addEventListener('click', function () {
      var email = b.getAttribute('data-email');
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(function () { showToast('Email copied ✓'); },
          function () { showToast(email); });
      } else { showToast(email); }
    });
  });

  /* Merch filter */
  var chips = document.querySelectorAll('.filter-chip');
  var items = document.querySelectorAll('.product');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var cat = chip.getAttribute('data-filter');
      chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c === chip)); });
      items.forEach(function (p) {
        p.hidden = !(cat === 'all' || p.getAttribute('data-cat') === cat);
      });
    });
  });

  /* Character card dialog */
  var dlg = document.querySelector('.card-dialog');
  if (dlg && typeof dlg.showModal === 'function') {
    var cards = [
      ['rumba', 'Rumba — the easygoing dad'],
      ['samba', 'Samba — the warm and creative mom'],
      ['siko', 'Siko — the curious and mischievous boy'],
      ['niki', 'Niki — the bright and cheerful girl']
    ];
    var cur = 0, lastFocus = null;
    var img = dlg.querySelector('.dlg-img'), src = dlg.querySelector('.dlg-src'), cap = dlg.querySelector('.dlg-caption');
    var show = function (i) {
      cur = (i + cards.length) % cards.length;
      var c = cards[cur];
      src.srcset = 'assets/card-' + c[0] + '.webp';
      img.src = 'assets/card-' + c[0] + '.jpg';
      img.alt = c[1] + ' — BLINKEARS character card';
      cap.textContent = c[1] + '  ·  ' + (cur + 1) + ' / ' + cards.length;
    };
    document.querySelectorAll('[data-card]').forEach(function (b) {
      b.addEventListener('click', function () {
        lastFocus = b;
        show(parseInt(b.getAttribute('data-card'), 10));
        dlg.showModal();
        document.body.classList.add('menu-open');
      });
    });
    dlg.querySelector('.dlg-close').addEventListener('click', function () { dlg.close(); });
    dlg.querySelector('.dlg-prev').addEventListener('click', function () { show(cur - 1); });
    dlg.querySelector('.dlg-next').addEventListener('click', function () { show(cur + 1); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(cur - 1);
      if (e.key === 'ArrowRight') show(cur + 1);
    });
    dlg.addEventListener('close', function () {
      document.body.classList.remove('menu-open');
      if (lastFocus) lastFocus.focus();
    });
    // simple swipe on touch screens
    var sx = null;
    dlg.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    dlg.addEventListener('touchend', function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
      sx = null;
    });
    // preload the other cards after the page is idle
    window.addEventListener('load', function () {
      setTimeout(function () { cards.forEach(function (c) { var p = new Image(); p.src = 'assets/card-' + c[0] + '.webp'; }); }, 2500);
    });
  } else if (dlg) {
    // very old browsers: open the poster directly
    document.querySelectorAll('[data-card]').forEach(function (b) {
      b.addEventListener('click', function () {
        var n = ['rumba', 'samba', 'siko', 'niki'][parseInt(b.getAttribute('data-card'), 10)];
        window.open('assets/card-' + n + '.jpg', '_blank');
      });
    });
  }

  /* Footer year */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
