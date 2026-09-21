/* =========================================================================
   TPOTN — pages/category.js
   Shared renderer for every category page. Reads
   document.body.dataset.category (e.g. "culture"), fetches that
   category's content from GET /api/categories/:key, and fetches the
   district list from GET /api/districts to build the "see it in each
   district" cross-link grid. Building the next category page means
   adding a category document in the database + a thin HTML shell —
   not touching this file.
   ========================================================================= */

(function () {
  const ICONS = {
    culture: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 20V10l6-6 6 6v10" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 20v-6h6v6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 20h16" stroke-linecap="round"/></svg>',
    food: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M3 11h18a9 9 0 0 1-18 0Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 11c0-2 1-4 4-4s4 2 4 4" stroke-linecap="round"/></svg>',
    arts: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><ellipse cx="12" cy="6" rx="7" ry="3"/><ellipse cx="12" cy="18" rx="7" ry="3"/><path d="M5 6v12M19 6v12" stroke-linecap="round"/></svg>',
    festivals: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 3c2 3 1 4 0 6-2-1-3-3-1-6Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 17c0-2 4-3 8-3s8 1 8 3" stroke-linecap="round"/><path d="M4 20h16" stroke-linecap="round"/></svg>',
    history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M5 21h14M6 21V9M18 21V9M4 9h16M6 9l6-5 6 5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="8" r="3.2"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6" stroke-linecap="round"/></svg>',
    places: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12Z" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="9" r="2.4"/></svg>',
    quote: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h4v4c0 2.5-1.5 4.5-4 5v-2c1-.3 1.7-1 2-2H7V7Zm7 0h4v4c0 2.5-1.5 4.5-4 5v-2c1-.3 1.7-1 2-2h-2V7Z"/></svg>'
  };

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  /** Pulls a one-line teaser for a category out of a district's data. */
  function getDistrictTeaser(d, categoryKey) {
    const extractors = {
      culture: () => d.highlights.culture,
      food: () => d.highlights.food,
      arts: () => d.highlights.arts,
      history: () => d.highlights.heritage,
      festivals: () => (d.festivals && d.festivals[0] ? d.festivals[0].name : ''),
      people: () => (d.people && d.people[0] ? d.people[0].title : ''),
      places: () => (d.places && d.places[0] ? d.places[0].name : '')
    };
    return extractors[categoryKey] ? extractors[categoryKey]() : '';
  }

  function renderHeroPhoto(heroImage) {
    const container = document.getElementById('categoryPhotoContainer');
    if (!container) return;
    if (!heroImage) {
      container.innerHTML = '';
      return;
    }
    container.innerHTML = `
      <img class="category-hero__photo" src="../${heroImage}" alt=""
           onerror="this.parentElement.innerHTML=''">
      <div class="category-hero__photo-overlay"></div>
    `;
  }

  async function render(categoryKey) {
    let cat, districts;
    try {
      const [catRes, listRes] = await Promise.all([
        fetch(`/api/categories/${encodeURIComponent(categoryKey)}`),
        fetch('/api/districts')
      ]);
      if (!catRes.ok) throw new Error(`Category "${categoryKey}" request failed (${catRes.status})`);
      cat = await catRes.json();
      districts = listRes.ok ? await listRes.json() : [];
    } catch (err) {
      console.error('[category.js] Failed to load category page data:', err.message);
      return;
    }

    document.body.dataset.catAccent = cat.accent;
    document.title = `${cat.name} — TPOTN`;
    const metaDesc = document.getElementById('pageDescription');
    if (metaDesc) metaDesc.setAttribute('content', `${cat.name} across Tamil Nadu — ${cat.tagline}.`);

    const glyphEl = document.getElementById('categoryGlyph');
    if (glyphEl) glyphEl.innerHTML = ICONS[cat.glyph] || '';
    renderHeroPhoto(cat.heroImage);

    document.getElementById('categoryName').textContent = cat.name;
    document.getElementById('categoryTamilName').textContent = cat.tamilName;
    document.getElementById('categoryTagline').textContent = cat.tagline;
    document.getElementById('categoryIntro').textContent = cat.intro;

    document.getElementById('overviewGrid').innerHTML = cat.overview.map((o) => `
      <div class="card overview-card" data-reveal>
        <span class="overview-card__mark">${ICONS.quote}</span>
        <h3 class="overview-card__title">${escapeHtml(o.title)}</h3>
        <p class="overview-card__text">${o.text}</p>
      </div>
    `).join('');

    const grid = document.getElementById('districtLinkGrid');
    if (grid) {
      grid.innerHTML = districts.map((d) => {
        const teaser = getDistrictTeaser(d, cat.districtField);
        return `
          <a href="district.html?district=${d.slug}" class="card district-link-card" data-reveal>
            <span class="district-link-card__tamil tamil-accent">${d.tamilName}</span>
            <h3 class="district-link-card__name">${escapeHtml(d.name)}</h3>
            <p class="district-link-card__teaser">${escapeHtml(teaser)}</p>
            <span class="district-link-card__cta">View District →</span>
          </a>
        `;
      }).join('');
    }

    if (typeof initScrollRevealFor === 'function') {
      initScrollRevealFor(document.body);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const categoryKey = document.body.dataset.category;
    if (categoryKey) render(categoryKey);
  });
})();
