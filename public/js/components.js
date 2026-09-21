/* =========================================================================
   TPOTN — components.js
   Behavior for the two components every page shares: the navbar and the
   footer. The markup itself lives directly in each page's HTML (kept
   deliberately simple rather than injected via JS — one less moving part,
   no flash-of-no-navbar while a script loads). When a new page is built,
   copy the <header class="navbar">…</header> and <footer class="site-footer">
   blocks from index.html as-is, mark the active link, and this file will
   already know how to drive them.
   ========================================================================= */

/**
 * Turns the navbar solid once the user scrolls past the hero, and wires
 * up the mobile hamburger toggle. Safe to call on every page — it no-ops
 * quietly if the expected elements aren't on the page.
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const toggle = navbar.querySelector('.navbar__toggle');
  const links = navbar.querySelector('.navbar__links');

  const SCROLL_THRESHOLD = 40;
  const setScrolledState = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > SCROLL_THRESHOLD);
  };
  setScrolledState();
  window.addEventListener('scroll', setScrolledState, { passive: true });

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close the mobile menu after picking a link.
    links.querySelectorAll('.navbar__link').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
}

/**
 * Fills in the footer's copyright year automatically so it never goes
 * stale — small detail, but it's the kind of thing that quietly signals
 * a site is actually maintained.
 */
function initFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
