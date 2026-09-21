/* =========================================================================
   TPOTN — pages/discover.js
   Three independent features on one page, each fetching its own data:
   1. Did You Know? — GET /api/facts, same flip-card mechanic as Home.
   2. The Tamil Nadu Quiz — GET /api/quiz, six random questions at a time,
      with a score screen at the end.
   3. "Explore Something New" — GET /api/districts, picks a random
      district and links straight to its page.
   ========================================================================= */

function shuffleArray(arr) {
  const pool = [...arr];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool;
}

/* ---------------------------------------------------------------------- */
/* 1. Did You Know?                                                       */
/* ---------------------------------------------------------------------- */
(function () {
  const grid = document.getElementById('factGrid');
  const shuffleBtn = document.getElementById('shuffleFacts');
  if (!grid) return;

  const CARD_COUNT = 6;
  let facts = [];
  let lastShown = [];

  function pickFacts() {
    const pool = shuffleArray(facts);
    let picked = pool.slice(0, CARD_COUNT);

    const sameAsLast =
      lastShown.length && picked.every((f) => lastShown.includes(f.question));
    if (sameAsLast && pool.length > CARD_COUNT) {
      picked = pool.slice(1, CARD_COUNT + 1);
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
    grid.innerHTML = pickFacts().map(factCardMarkup).join('');

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

  fetch('/api/facts')
    .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`Request failed (${res.status})`))))
    .then((data) => {
      facts = data;
      renderFacts();
    })
    .catch((err) => console.error('[discover.js] Could not load facts:', err.message));

  if (shuffleBtn) shuffleBtn.addEventListener('click', renderFacts);
})();

/* ---------------------------------------------------------------------- */
/* 2. The Tamil Nadu Quiz                                                 */
/* ---------------------------------------------------------------------- */
(function () {
  const container = document.getElementById('quizContainer');
  if (!container) return;

  const ROUND_SIZE = 6;
  let quizBank = [];
  let questions = [];
  let current = 0;
  let score = 0;
  let answered = false;

  function renderQuestion() {
    answered = false;
    const q = questions[current];
    container.innerHTML = `
      <div class="quiz-card">
        <p class="quiz-card__progress">Question ${current + 1} of ${questions.length}</p>
        <h3 class="quiz-card__question">${q.question}</h3>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `<button class="quiz-option" data-index="${i}">${opt}</button>`).join('')}
        </div>
        <div id="quizFeedback"></div>
      </div>
    `;
    container.querySelectorAll('.quiz-option').forEach((btn) => {
      btn.addEventListener('click', () => handleAnswer(Number(btn.dataset.index)));
    });
  }

  function handleAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const q = questions[current];
    if (selectedIndex === q.correct) score++;

    container.querySelectorAll('.quiz-option').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correct) btn.classList.add('is-correct');
      else if (i === selectedIndex) btn.classList.add('is-incorrect');
    });

    const isLast = current + 1 >= questions.length;
    document.getElementById('quizFeedback').innerHTML = `
      <p class="quiz-card__explanation">${q.explanation}</p>
      <div class="quiz-card__next">
        <button class="btn btn-primary btn--sm" id="quizNextBtn">${isLast ? 'See Results →' : 'Next Question →'}</button>
      </div>
    `;
    document.getElementById('quizNextBtn').addEventListener('click', () => {
      current++;
      if (current >= questions.length) renderResult();
      else renderQuestion();
    });
  }

  function renderResult() {
    const pct = score / questions.length;
    let message;
    if (pct >= 0.8) message = 'Semma! You really know your Tamil Nadu.';
    else if (pct >= 0.5) message = "Nalla try — a few more districts left to explore.";
    else message = "That's exactly what Discover is for — go explore a bit more!";

    container.innerHTML = `
      <div class="quiz-card quiz-result">
        <p class="quiz-card__progress">Quiz Complete</p>
        <p class="quiz-result__score">${score} / ${questions.length}</p>
        <p class="quiz-result__message">${message}</p>
        <div class="quiz-result__actions">
          <button class="btn btn-primary" id="quizAgainBtn">Play Again</button>
          <a href="explore.html" class="btn btn-ghost">Explore the Map</a>
        </div>
      </div>
    `;
    document.getElementById('quizAgainBtn').addEventListener('click', startQuiz);
  }

  function startQuiz() {
    if (!quizBank.length) return;
    questions = shuffleArray(quizBank).slice(0, ROUND_SIZE);
    current = 0;
    score = 0;
    renderQuestion();
  }

  fetch('/api/quiz')
    .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`Request failed (${res.status})`))))
    .then((data) => {
      quizBank = data;
      startQuiz();
    })
    .catch((err) => console.error('[discover.js] Could not load quiz questions:', err.message));
})();

/* ---------------------------------------------------------------------- */
/* 3. Explore Something New — random district                             */
/* ---------------------------------------------------------------------- */
(function () {
  const btn = document.getElementById('randomDistrictBtn');
  const resultEl = document.getElementById('randomDistrictResult');
  if (!btn || !resultEl) return;

  let districts = [];
  let lastSlug = null;

  fetch('/api/districts')
    .then((res) => (res.ok ? res.json() : []))
    .then((data) => { districts = data; })
    .catch((err) => console.error('[discover.js] Could not load district list:', err.message));

  btn.addEventListener('click', () => {
    if (!districts.length) return;

    let pick = districts[Math.floor(Math.random() * districts.length)];
    if (pick.slug === lastSlug && districts.length > 1) {
      const i = districts.findIndex((d) => d.slug === lastSlug);
      pick = districts[(i + 1) % districts.length];
    }
    lastSlug = pick.slug;

    resultEl.innerHTML = `You got <strong>${pick.name}</strong> — <a href="district.html?district=${pick.slug}">View District →</a>`;
  });
})();
