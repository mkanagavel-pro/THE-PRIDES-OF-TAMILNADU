/* =========================================================================
   TPOTN — pages/explore.js
   Explore-page-only glue: listens for the generic 'tpotn:districtselect'
   event (fired by map.js) and updates the sticky side panel — name,
   description, and a running count of districts viewed this session.

   The "View District" action links to the reusable district.html template
   only for districts that actually have content — checked against a
   light district list fetched once from GET /api/districts. Districts
   not seeded yet stay disabled with an honest "coming soon" label
   rather than linking to a page with nothing to show.
   ========================================================================= */

(function () {
  const panelName = document.getElementById('panelDistrictName');
  const panelDesc = document.getElementById('panelDistrictDesc');
  const panelAction = document.getElementById('panelDistrictAction');
  const panelCount = document.getElementById('panelViewedCount');
  if (!panelName) return; // not on this page

  const seen = new Set();
  const TOTAL_DISTRICTS = 38;

  // slug -> district (light fields), fetched once so each map click can
  // check synchronously without a network round-trip per click.
  let districtsBySlug = new Map();

  fetch('/api/districts')
    .then((res) => (res.ok ? res.json() : []))
    .then((list) => {
      districtsBySlug = new Map(list.map((d) => [d.slug, d]));
    })
    .catch((err) => console.error('[explore.js] Could not load district list:', err.message));

  document.addEventListener('tpotn:districtselect', (e) => {
    const detail = e.detail;

    if (!detail) {
      panelName.textContent = 'No district selected yet';
      panelName.classList.add('district-panel__empty');
      panelDesc.textContent = 'Hover or tap any district on the map to preview it here.';
      panelAction.setAttribute('aria-disabled', 'true');
      panelAction.removeAttribute('href');
      return;
    }

    const { slug, name } = detail;
    panelName.classList.remove('district-panel__empty');
    panelName.textContent = name;

    const district = districtsBySlug.get(slug);

    if (district) {
      panelDesc.textContent = `${district.tagline} — see its culture, food, arts, festivals, history, and more.`;
      panelAction.href = `district.html?district=${slug}`;
      panelAction.removeAttribute('aria-disabled');
      panelAction.removeAttribute('title');
    } else {
      panelDesc.textContent =
        `Part of Tamil Nadu's story — the full ${name} guide (culture, food, ` +
        `history, and more) is being built next.`;
      panelAction.removeAttribute('href');
      panelAction.setAttribute('aria-disabled', 'true');
      panelAction.title = "This district's guide is coming soon";
    }

    if (!seen.has(slug)) {
      seen.add(slug);
      panelCount.textContent = `${seen.size} of ${TOTAL_DISTRICTS} districts viewed this session`;
    }
  });
})();
