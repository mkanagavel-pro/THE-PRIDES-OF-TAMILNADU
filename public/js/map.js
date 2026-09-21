/* =========================================================================
   TPOTN — map.js
   Drives the interactive Tamil Nadu district map (svg/tamil-nadu-map.svg,
   inlined wherever it's used so these handlers can reach its <path>
   elements directly). Generic and page-agnostic: it only looks for
   `.tn-map-wrap svg.tn-map` and a `.tn-tooltip` sibling, and announces
   selection via a CustomEvent rather than touching any page-specific
   markup — so the same script works on pages/explore.html without
   modification.

   Consumers listen for:
     document.addEventListener('tpotn:districtselect', (e) => {
       e.detail.slug   // e.g. "thanjavur"
       e.detail.name   // e.g. "Thanjavur"
       e.detail.el     // the <path> element itself
     });

   Also supports arriving with ?district=<slug> in the URL (see bottom of
   initTNMap) — used by the Home page's mini map so tapping a district
   there auto-selects it here and scrolls it into view, instead of
   landing on a blank map.
   ========================================================================= */

function initTNMap() {
  const wrap = document.querySelector('.tn-map-wrap');
  const svg = wrap && wrap.querySelector('svg.tn-map');
  if (!wrap || !svg) return;

  const tooltip = wrap.parentElement.querySelector('.tn-tooltip') || createTooltip(wrap);
  const districts = Array.from(svg.querySelectorAll('.district'));
  let activeEl = null;

  function createTooltip(container) {
    const el = document.createElement('div');
    el.className = 'tn-tooltip';
    el.setAttribute('role', 'status');
    container.parentElement.appendChild(el);
    return el;
  }

  function showTooltip(name, x, y) {
    tooltip.textContent = name;
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    tooltip.classList.add('is-visible');
  }

  function hideTooltip() {
    tooltip.classList.remove('is-visible');
  }

  function selectDistrict(el) {
    if (activeEl) activeEl.classList.remove('is-active');
    el.classList.add('is-active');
    activeEl = el;

    const slug = el.id;
    const name = el.dataset.district;

    document.dispatchEvent(
      new CustomEvent('tpotn:districtselect', { detail: { slug, name, el } })
    );
  }

  districts.forEach((path) => {
    const name = path.dataset.district;

    // Mouse: tooltip follows the cursor.
    path.addEventListener('mouseenter', (e) => showTooltip(name, e.clientX, e.clientY));
    path.addEventListener('mousemove', (e) => showTooltip(name, e.clientX, e.clientY));
    path.addEventListener('mouseleave', hideTooltip);

    // Keyboard: tooltip anchors to the shape's own on-screen position.
    path.addEventListener('focus', () => {
      const rect = path.getBoundingClientRect();
      showTooltip(name, rect.left + rect.width / 2, rect.top);
    });
    path.addEventListener('blur', hideTooltip);

    // Selection: mouse click or Enter/Space when focused (touch taps fire
    // a click too, so this covers mobile without any extra wiring).
    path.addEventListener('click', () => selectDistrict(path));
    path.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectDistrict(path);
      }
    });
  });

  // Optional "clear selection" control, if the page provides one.
  const resetBtn = document.querySelector('[data-map-reset]');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (activeEl) activeEl.classList.remove('is-active');
      activeEl = null;
      hideTooltip();
      document.dispatchEvent(new CustomEvent('tpotn:districtselect', { detail: null }));
    });
  }

  // Arriving with ?district=slug (e.g. tapped from the Home page's mini
  // map) auto-selects that district and scrolls the map into view, so
  // the visitor lands straight on the district they picked rather than
  // a blank map they have to search again.
  const preselectSlug = new URLSearchParams(window.location.search).get('district');
  if (preselectSlug) {
    const target = districts.find((el) => el.id === preselectSlug);
    if (target) {
      selectDistrict(target);
      requestAnimationFrame(() => {
        (wrap.closest('.tn-map-card') || wrap).scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
  }
}
