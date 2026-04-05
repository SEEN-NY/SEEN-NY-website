/* ============================================================
   SEEN NY — Main JS
   ============================================================ */

(function () {
  'use strict';

  // ── MOBILE MENU ──────────────────────────────────────────────

  const toggle   = document.getElementById('menuToggle');
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('overlay');

  function openMenu() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      sidebar.classList.contains('open') ? closeMenu() : openMenu();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Close menu when nav link clicked on mobile
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  // ── SCROLL SPY ───────────────────────────────────────────────

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function getCurrentSection() {
    const scrollY = window.scrollY + 100;
    let current = '';

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    return current;
  }

  function updateActiveLink() {
    const current = getCurrentSection();

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      const href = link.getAttribute('href').replace('#', '');
      if (href === current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // ── INVEST FORM ──────────────────────────────────────────────

  const form = document.getElementById('investForm');
  const note = document.getElementById('formNote');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name    = form.querySelector('#f-name').value.trim();
      const email   = form.querySelector('#f-email').value.trim();
      const interest = form.querySelector('#f-interest').value;

      if (!name || !email) {
        if (note) {
          note.textContent = 'Please fill in your name and email.';
          note.style.color = '#c00';
        }
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        if (note) {
          note.textContent = 'Please enter a valid email address.';
          note.style.color = '#c00';
        }
        return;
      }

      // Build mailto as fallback (replace with backend/Formspree in production)
      const subject = encodeURIComponent('SEEN NY Investment Interest — ' + (interest || 'General'));
      const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Organization: ' + (form.querySelector('#f-org').value.trim() || '—') + '\n' +
        'Interest Area: ' + (interest || '—') + '\n\n' +
        'Message:\n' + (form.querySelector('#f-message').value.trim() || '—')
      );

      window.location.href = 'mailto:info@seenny.org?subject=' + subject + '&body=' + body;

      if (note) {
        note.textContent = 'Thank you. Your email client should open with your message pre-filled.';
        note.style.color = '#156939';
      }
    });
  }

  // ── SMOOTH SCROLL POLYFILL FOR SAFARI < 15.4 ────────────────

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
