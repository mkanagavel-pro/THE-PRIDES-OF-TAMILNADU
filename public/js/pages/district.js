/* =========================================================================
   TPOTN — pages/district.js
   Drives the single reusable District Details template
   (public/pages/district.html). Reads ?district=<slug> from the URL and
   fetches that district's content from the API
   (GET /api/districts/:slug), plus the light district list
   (GET /api/districts) for the "not found" chips and prev/next nav.
   Adding a new district later means adding it to the database — this
   file and district.html never change.
   ========================================================================= */

(function () {
  const ICONS = {
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m12 3 2.6 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.3 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    culture: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 20V10l6-6 6 6v10" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 20v-6h6v6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 20h16" stroke-linecap="round"/></svg>',
    food: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 11h18a9 9 0 0 1-18 0Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 11c0-2 1-4 4-4s4 2 4 4" stroke-linecap="round"/></svg>',
    arts: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="6" rx="7" ry="3"/><ellipse cx="12" cy="18" rx="7" ry="3"/><path d="M5 6v12M19 6v12" stroke-linecap="round"/></svg>',
    heritage: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 21h14M6 21V9M18 21V9M4 9h16M6 9l6-5 6 5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3c2 3 1 4 0 6-2-1-3-3-1-6Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 17c0-2 4-3 8-3s8 1 8 3" stroke-linecap="round"/><path d="M4 20h16" stroke-linecap="round"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12Z" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="9" r="2.4"/></svg>',
    quote: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h4v4c0 2.5-1.5 4.5-4 5v-2c1-.3 1.7-1 2-2H7V7Zm7 0h4v4c0 2.5-1.5 4.5-4 5v-2c1-.3 1.7-1 2-2h-2V7Z"/></svg>',
    hills: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M2 19 8 9l3.5 5L15 8l7 11H2Z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    temple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 20V10l6-6 6 6v10" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 20v-6h6v6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 20h16" stroke-linecap="round"/></svg>',
    waves: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M2 9c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke-linecap="round"/><path d="M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke-linecap="round"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="3.2"/><path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6" stroke-linecap="round"/></svg>',
    pot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M8 4h8" stroke-linecap="round"/><path d="M9 4c0 3-2 4-2 7a5 5 0 0 0 10 0c0-3-2-4-2-7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    horizon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="14" r="4"/><path d="M3 18h18" stroke-linecap="round"/><path d="M12 6V3M6.5 8 5 6.5M17.5 8 19 6.5" stroke-linecap="round"/></svg>'
  };

  function getSlug() {
    const params = new URLSearchParams(window.location.search);
    return (params.get('district') || '').toLowerCase().trim();
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function renderNotFound(list) {
    document.getElementById('notFoundState').hidden = false;
    document.getElementById('districtContent').hidden = true;

    const chips = document.getElementById('notFoundChips');
    chips.innerHTML = list.map((d) =>
      `<a class="chip chip--gold" href="district.html?district=${d.slug}">${escapeHtml(d.name)}</a>`
    ).join('');
  }

  function renderHeroPhoto(heroImage) {
    const container = document.getElementById('heroPhotoContainer');
    if (!container) return;
    if (!heroImage) {
      container.innerHTML = '';
      return;
    }
    container.innerHTML = `
      <img class="district-hero__photo" src="../${heroImage}" alt=""
           onerror="this.parentElement.innerHTML=''">
      <div class="district-hero__photo-overlay"></div>
    `;
  }

  function spotlightCard({ glyph, tag, tagClass, title, desc, image }) {
    const tagHtml = tag
      ? `<span class="chip ${tagClass || 'chip--gold'} spotlight-card__tag">${escapeHtml(tag)}</span>`
      : '';
    const photoHtml = image
      ? `<img class="spotlight-card__photo" src="../${image}" alt="" loading="lazy"
             onerror="this.remove()"
             onload="this.nextElementSibling && (this.nextElementSibling.style.display='none')">`
      : '';
    return `
      <div class="card spotlight-card spotlight-card--compact" data-reveal>
        <div class="spotlight-card__art">
          <div class="spotlight-card__art-bg card-art"></div>
          ${photoHtml}
          <div class="spotlight-card__glyph">${glyph}</div>
          ${tagHtml}
        </div>
        <div class="spotlight-card__body">
          <h3 class="spotlight-card__title">${escapeHtml(title)}</h3>
          <p class="spotlight-card__desc">${desc}</p>
        </div>
      </div>
    `;
  }

  function renderDistrict(d, list) {
    document.getElementById('notFoundState').hidden = true;
    document.getElementById('districtContent').hidden = false;

    document.body.dataset.accent = d.accent;
    document.title = `${d.name} — TPOTN`;
    const metaDesc = document.getElementById('pageDescription');
    if (metaDesc) metaDesc.setAttribute('content', `${d.name}, Tamil Nadu — ${d.tagline}. Culture, food, arts, festivals, history, and hidden gems.`);

    document.getElementById('heroGlyph').innerHTML = ICONS[d.glyph] || '';
    renderHeroPhoto(d.heroImage);
    document.getElementById('districtName').textContent = d.name;
    document.getElementById('districtTamilName').textContent = d.tamilName;
    document.getElementById('districtTagline').textContent = d.tagline;
    document.getElementById('districtIntro').textContent = d.intro;

    const h = d.highlights;
    const highlightItems = [
      { icon: ICONS.star, label: 'Famous For', value: h.famousFor },
      { icon: ICONS.culture, label: 'Culture', value: h.culture },
      { icon: ICONS.food, label: 'Food', value: h.food },
      { icon: ICONS.arts, label: 'Arts', value: h.arts },
      { icon: ICONS.heritage, label: 'Heritage', value: h.heritage }
    ];
    document.getElementById('highlightStrip').innerHTML = highlightItems.map((i) => `
      <div class="highlight-item">
        <span class="highlight-item__icon">${i.icon}</span>
        <span class="highlight-item__label">${i.label}</span>
        <span class="highlight-item__value">${escapeHtml(i.value)}</span>
      </div>
    `).join('');

    document.getElementById('cultureGrid').innerHTML = d.culture.map((c) => `
      <div class="card story-card" data-reveal>
        <span class="story-card__mark">${ICONS.quote}</span>
        <h3 class="story-card__title">${escapeHtml(c.title)}</h3>
        <p class="story-card__text">${c.text}</p>
      </div>
    `).join('');

    document.getElementById('foodGrid').innerHTML = d.food.map((f) =>
      spotlightCard({ glyph: ICONS.food, title: f.name, desc: f.desc, image: f.image })
    ).join('');

    document.getElementById('artsGrid').innerHTML = d.arts.map((a) =>
      spotlightCard({ glyph: ICONS.arts, title: a.name, desc: a.desc, image: a.image })
    ).join('');

    document.getElementById('festivalsGrid').innerHTML = d.festivals.map((f) =>
      spotlightCard({ glyph: ICONS.flame, title: f.name, desc: f.desc, image: f.image })
    ).join('');

    document.getElementById('historyTimeline').innerHTML = d.history.map((h) => `
      <div class="timeline__item">
        <span class="timeline__dot" aria-hidden="true"></span>
        <p class="timeline__era">${escapeHtml(h.era)}</p>
        <h3 class="timeline__title">${escapeHtml(h.title)}</h3>
        <p class="timeline__text">${h.text}</p>
      </div>
    `).join('');

    document.getElementById('peopleGrid').innerHTML = d.people.map((p) => `
      <div class="card person-card" data-reveal>
        <span class="person-card__avatar">${escapeHtml(p.title.charAt(0))}</span>
        <div>
          <h3 class="person-card__title">${escapeHtml(p.title)}</h3>
          <p class="person-card__text">${p.text}</p>
        </div>
      </div>
    `).join('');

    document.getElementById('placesGrid').innerHTML = d.places.map((p) =>
      spotlightCard({
        glyph: ICONS.pin,
        tag: p.hidden ? 'Hidden Gem' : 'Popular',
        tagClass: p.hidden ? 'place-tag--hidden' : 'chip--gold',
        title: p.name,
        desc: p.desc,
        image: p.image
      })
    ).join('');

    // Prev / Next district navigation — order comes from the API list
    // (alphabetical by name), not a hardcoded sequence.
    const i = list.findIndex((x) => x.slug === d.slug);
    const prev = list[(i - 1 + list.length) % list.length];
    const next = list[(i + 1) % list.length];
    document.getElementById('districtNav').innerHTML = `
      <a class="district-nav__link" href="district.html?district=${prev.slug}">
        <span class="district-nav__label">← Previous</span>
        <span class="district-nav__name">${escapeHtml(prev.name)}</span>
      </a>
      <a class="district-nav__link district-nav__link--next" href="district.html?district=${next.slug}">
        <span class="district-nav__label">Next →</span>
        <span class="district-nav__name">${escapeHtml(next.name)}</span>
      </a>
    `;

    if (typeof initScrollRevealFor === 'function') {
      initScrollRevealFor(document.getElementById('districtContent'));
    } else {
      document.querySelectorAll('#districtContent [data-reveal]').forEach((el) => el.classList.add('is-visible'));
    }
  }

  document.addEventListener('DOMContentLoaded', async () => {
    const slug = getSlug();

    let list = [];
    try {
      const listRes = await fetch('/api/districts');
      if (listRes.ok) list = await listRes.json();
    } catch (err) {
      console.error('[district.js] Could not load district list:', err.message);
    }

    if (!slug) return renderNotFound(list);

    try {
      const res = await fetch(`/api/districts/${encodeURIComponent(slug)}`);
      if (!res.ok) return renderNotFound(list);
      const district = await res.json();
      renderDistrict(district, list);
    } catch (err) {
      console.error('[district.js] Could not load district:', err.message);
      renderNotFound(list);
    }
  });
})();
