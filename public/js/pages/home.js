/* =========================================================================
   TPOTN — pages/home.js
   Home-page-only behavior: fetches the "Did You Know?" pool from
   GET /api/facts, renders three random cards, flips a card on
   click/keyboard, and lets the visitor shuffle in a new set.
   ========================================================================= */

(function () {
  const grid = document.getElementById('factGrid');
  const shuffleBtn = document.getElementById('shuffleFacts');
  if (!grid) return;

  let facts = [];
  let lastShown = [];

  function pickThreeFacts() {
    const pool = [...facts];
    // Fisher-Yates shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    let picked = pool.slice(0, 3);

    // Avoid handing back the exact same trio twice in a row.
    const sameAsLast =
      lastShown.length &&
      picked.every((f) => lastShown.includes(f.question));
    if (sameAsLast && pool.length > 3) {
      picked = [...pool.slice(1, 4)];
    }

    lastShown = picked.map((f) => f.question);
    return picked;
  }

  function factCardMarkup(fact) {
    return `
      <div class="fact-card reveal" data-reveal tabindex="0" role="button"
           aria-label="Did you know: ${fact.question} Tap to reveal the answer.">
        <div class="fact-card__inner">
          <div class="fact-card__face fact-card__face--front">
            <span class="fact-card__prompt">Did you know?</span>
            <p class="fact-card__question">${fact.question}</p>
            <span class="fact-card__hint fact-card__hint-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 12a8 8 0 1 1 8 8" stroke-linecap="round"/>
                <path d="M4 20v-6h6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Tap to reveal
            </span>
          </div>
          <div class="fact-card__face fact-card__face--back">
            <span class="fact-card__prompt">The answer</span>
            <p class="fact-card__answer">${fact.answer}</p>
            <span class="fact-card__hint">Tap to flip back</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderFacts() {
    if (!facts.length) return;
    const picked = pickThreeFacts();
    grid.innerHTML = picked.map(factCardMarkup).join('');

    grid.querySelectorAll('.fact-card').forEach((card) => {
      const flip = () => card.classList.toggle('is-flipped');
      card.addEventListener('click', flip);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          flip();
        }
      });
      requestAnimationFrame(() => card.classList.add('is-visible'));
    });
  }

  async function init() {
    try {
      const res = await fetch('/api/facts');
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      facts = await res.json();
      renderFacts();
    } catch (err) {
      console.error('[home.js] Could not load facts:', err.message);
    }
  }

  init();

  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', renderFacts);
  }
})();
