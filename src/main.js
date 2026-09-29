import './styles.css';

const icon = (name) => {
  const icons = {
    support: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 13h3v6H5a1 1 0 0 1-1-1v-5Zm16 0h-3v6h2a1 1 0 0 0 1-1v-5Z" />
        <path d="M17 19c0 1.1-1.6 2-3.5 2H12" />
      </svg>`,
    guide: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="7" r="3" />
        <path d="M3.5 20v-2.2A4.8 4.8 0 0 1 8.3 13h1.4a4.8 4.8 0 0 1 4.8 4.8V20" />
        <path d="M15 4.5h5v8h-5" />
        <path d="m17 8 1.3 1.3L21 6.5" />
      </svg>`,
    insight: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 14v-3m5 3V8m5 6v-5" />
        <path d="M8 21h8" />
      </svg>`,
    plan: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4h14v16H5z" />
        <path d="M8 2v4m8-4v4M8 10h8m-8 4h5" />
      </svg>`,
    track: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V9m5 10V5m5 14v-7m5 7V8" />
        <path d="m4 8 5-4 5 7 5-4" />
      </svg>`,
    review: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m16 16 5 5M8 11l2 2 4-4" />
      </svg>`,
    arrow: `
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13m-5-5 5 5-5 5" /></svg>`,
  };
  return icons[name] ?? icons.arrow;
};

const featureCards = [
  {
    icon: 'support',
    title: 'Clear support path',
    description: 'A calm starting point for understanding the product and finding the next useful action.',
  },
  {
    icon: 'guide',
    title: 'Guided decisions',
    description: 'Structure goals, priorities, and trade-offs with information designed to stay easy to scan.',
  },
  {
    icon: 'insight',
    title: 'Focused insights',
    description: 'Bring the most relevant signals forward without overwhelming the rest of your financial picture.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Set your priorities',
    copy: 'Choose the financial goals and time horizons that matter most to you.',
  },
  {
    number: '02',
    title: 'Organise the picture',
    copy: 'Group what you want to plan, track, and review in one consistent view.',
  },
  {
    number: '03',
    title: 'Review with context',
    copy: 'Return to a concise summary and decide what deserves attention next.',
  },
];

const serviceCards = [
  {
    icon: 'plan',
    title: 'Goal planning',
    description: 'Create a simple structure around upcoming priorities and milestones.',
  },
  {
    icon: 'track',
    title: 'Portfolio overview',
    description: 'Keep holdings and progress visible in a compact, readable workspace.',
  },
  {
    icon: 'review',
    title: 'Review workspace',
    description: 'Surface the items worth revisiting without turning the page into a data wall.',
  },
];

const renderFeatureCard = ({ icon: iconName, title, description }) => `
  <article class="feature-card">
    <span class="feature-card__corner" aria-hidden="true"></span>
    <div class="icon-tile">${icon(iconName)}</div>
    <h3>${title}</h3>
    <p>${description}</p>
    <a class="text-link" href="#services">Read more ${icon('arrow')}</a>
  </article>
`;

const renderProcessStep = ({ number, title, copy }) => `
  <article class="process-step">
    <span>${number}</span>
    <div>
      <h3>${title}</h3>
      <p>${copy}</p>
    </div>
    <span class="process-step__arrow" aria-hidden="true">${icon('arrow')}</span>
  </article>
`;

const renderServiceCard = ({ icon: iconName, title, description }) => `
  <article class="service-card">
    <div class="service-card__icon">${icon(iconName)}</div>
    <h3>${title}</h3>
    <p>${description}</p>
    <a class="service-card__link" href="#contact">Explore ${icon('arrow')}</a>
  </article>
`;

document.querySelector('#app').innerHTML = `
  <header class="site-header" data-header>
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="Neo Wealth home">
        <span class="brand-mark" aria-hidden="true">
          <span></span><span></span><span></span>
        </span>
        <span>Neo Wealth</span>
      </a>

      <button
        class="nav-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="primary-navigation"
        aria-label="Open navigation"
        data-nav-toggle
      >
        <span></span><span></span><span></span>
      </button>

      <nav class="primary-nav" id="primary-navigation" aria-label="Primary navigation" data-nav>
        <a href="#why">Why Neo</a>
        <a href="#process">How it works</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <a class="button button--small header-cta" href="#process">Get started</a>
    </div>
  </header>

  <main id="main-content">
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-orb hero-orb--one" aria-hidden="true"></div>
      <div class="hero-orb hero-orb--two" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow"><span>Concept preview</span> Financial clarity, designed to feel calm</p>
          <h1 id="hero-title">Your wealth, organised around what matters.</h1>
          <p class="hero-lede">
            A modern Neo Wealth landing-page concept for planning, tracking, and reviewing your financial picture without unnecessary noise.
          </p>
          <div class="hero-actions">
            <a class="button" href="#process">Explore the flow ${icon('arrow')}</a>
            <a class="button button--ghost" href="#services">View focus areas</a>
          </div>
          <dl class="hero-stats" aria-label="Landing page structure highlights">
            <div><dt>3</dt><dd>focus areas</dd></div>
            <div><dt>1</dt><dd>connected view</dd></div>
            <div><dt>3</dt><dd>guided steps</dd></div>
          </dl>
        </div>

        <div class="hero-visual" aria-label="Illustrative wealth dashboard preview">
          <div class="spark spark--a" aria-hidden="true">✦</div>
          <div class="spark spark--b" aria-hidden="true">•</div>
          <div class="dashboard-shell">
            <div class="dashboard-topline">
              <span class="dashboard-kicker">Overview</span>
              <span class="dashboard-status"><i></i> Concept data</span>
            </div>
            <div class="balance-panel">
              <span>Portfolio snapshot</span>
              <strong>Balanced view</strong>
              <small>Placeholder UI — replace with approved product data</small>
            </div>
            <div class="chart-panel" aria-hidden="true">
              <div class="chart-grid"></div>
              <svg viewBox="0 0 420 180" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="rgba(220, 177, 81, .38)" />
                    <stop offset="100%" stop-color="rgba(220, 177, 81, 0)" />
                  </linearGradient>
                </defs>
                <path class="chart-area" d="M0 148 C44 140 58 118 92 122 C126 126 132 78 176 91 C220 104 238 53 274 63 C310 73 326 36 362 46 C386 52 400 34 420 24 L420 180 L0 180 Z" />
                <path class="chart-line" d="M0 148 C44 140 58 118 92 122 C126 126 132 78 176 91 C220 104 238 53 274 63 C310 73 326 36 362 46 C386 52 400 34 420 24" />
              </svg>
            </div>
            <div class="dashboard-metrics">
              <div><span>Plan</span><strong>Goals</strong></div>
              <div><span>Track</span><strong>Holdings</strong></div>
              <div><span>Review</span><strong>Progress</strong></div>
            </div>
          </div>
          <div class="floating-card floating-card--left">
            <span class="mini-icon">${icon('track')}</span>
            <div><small>Focus</small><strong>Progress</strong></div>
          </div>
          <div class="floating-card floating-card--right">
            <span class="mini-icon">${icon('review')}</span>
            <div><small>Next</small><strong>Review</strong></div>
          </div>
        </div>
      </div>

      <div class="hero-transition" aria-hidden="true">
        <svg viewBox="0 0 1600 170" preserveAspectRatio="none">
          <path class="transition-shadow" d="M0 68 C220 138 310 24 520 70 C720 114 736 166 890 112 C1040 60 1130 112 1294 118 C1428 122 1504 62 1600 44 L1600 170 L0 170 Z" />
          <path class="transition-main" d="M0 84 C220 154 314 42 520 86 C720 130 748 180 902 126 C1048 76 1138 126 1298 132 C1434 138 1512 76 1600 60 L1600 170 L0 170 Z" />
        </svg>
      </div>
    </section>

    <section class="section reasons" id="why" aria-labelledby="reasons-title">
      <div class="container">
        <div class="section-heading section-heading--center">
          <p class="eyebrow eyebrow--dark">Designed for clarity</p>
          <h2 id="reasons-title">Three reasons to choose a calmer financial experience</h2>
          <p>Reusable, responsive cards mirror the reference structure while keeping the content specific to Neo Wealth.</p>
        </div>
        <div class="feature-grid">
          ${featureCards.map(renderFeatureCard).join('')}
        </div>
      </div>
    </section>

    <section class="section process" id="process" aria-labelledby="process-title">
      <div class="container">
        <div class="section-heading section-heading--center section-heading--narrow">
          <p class="eyebrow eyebrow--dark">A simple path</p>
          <h2 id="process-title">Three steps to organise your next financial review</h2>
        </div>

        <div class="process-layout">
          <div class="process-list">
            ${processSteps.map(renderProcessStep).join('')}
          </div>

          <div class="process-visual" aria-label="Abstract Neo Wealth review workspace illustration">
            <div class="visual-ring visual-ring--outer"></div>
            <div class="visual-ring visual-ring--inner"></div>
            <div class="phone-card">
              <div class="phone-card__header">
                <span>Neo Wealth</span>
                <span class="phone-dot"></span>
              </div>
              <p>Today</p>
              <h3>Review what matters next.</h3>
              <div class="phone-card__bars" aria-hidden="true">
                <span style="--bar: 72%"></span>
                <span style="--bar: 48%"></span>
                <span style="--bar: 84%"></span>
              </div>
              <div class="phone-card__pill">Concept workspace</div>
            </div>
          </div>

          <dl class="process-stats" aria-label="Page structure statistics">
            <div><dt>03</dt><dd>guided steps</dd></div>
            <div><dt>03</dt><dd>feature cards</dd></div>
            <div><dt>03</dt><dd>focus areas</dd></div>
            <div><dt>01</dt><dd>clear path</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="section services" id="services" aria-labelledby="services-title">
      <div class="services-decoration services-decoration--one" aria-hidden="true">✦</div>
      <div class="services-decoration services-decoration--two" aria-hidden="true">•</div>
      <div class="container">
        <div class="section-heading section-heading--light section-heading--center">
          <p class="eyebrow">Explore the concept</p>
          <h2 id="services-title">Popular focus areas for Neo Wealth</h2>
          <p>Placeholder service content keeps the layout ready for approved product copy.</p>
        </div>
        <div class="services-grid">
          ${serviceCards.map(renderServiceCard).join('')}
        </div>
      </div>
    </section>

    <section class="section final-cta" id="contact" aria-labelledby="final-title">
      <div class="container final-cta__inner">
        <div>
          <p class="eyebrow eyebrow--dark">Ready for approved product content</p>
          <h2 id="final-title">A premium landing-page foundation, built to adapt.</h2>
        </div>
        <a class="button button--dark" href="#top">Back to top ${icon('arrow')}</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <a class="brand brand--footer" href="#top" aria-label="Neo Wealth home">
        <span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span>
        <span>Neo Wealth</span>
      </a>
      <p>Concept landing page. Replace placeholder content with approved product information before production use.</p>
    </div>
  </footer>
`;

const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

const setNavOpen = (isOpen) => {
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('nav-open', isOpen);
};

navToggle.addEventListener('click', () => {
  setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true');
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setNavOpen(false);
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 860) setNavOpen(false);
});
