/* =========================================================================
   TPOTN — main.js
   The one script every page includes. It wires up the shared components
   and the scroll-reveal system that every section on every page can opt
   into just by adding a [data-reveal] attribute.
   ========================================================================= */

/**
 * Reveals [data-reveal] elements within `root` as they enter the viewport.
 * Elements can add [data-reveal-delay="1"] (etc.) to stagger a group
 * slightly. Respects prefers-reduced-motion by doing nothing — the CSS
 * fallback for that media query already shows everything at full opacity.
 *
 * Exposed globally (not wrapped in an IIFE) because pages that render
 * content dynamically *after* DOMContentLoaded — like district.js,
 * populating public/pages/district.html from districts-data.js — need to
 * re-run this against their own container once that content exists.
 */
function initScrollRevealFor(root) {
  root = root || document;
  const targets = root.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.revealDelay || 0);
        setTimeout(() => entry.target.classList.add('is-visible'), delay * 80);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFooterYear();
  initScrollRevealFor(document);
  if (typeof initTNMap === 'function') initTNMap();
});
