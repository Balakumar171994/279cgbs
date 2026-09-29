import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'
import { vegAi } from '../data'
import vegLogo from '../assets/products/vegai-logo.png'
import './VegAi.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  radar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 12l6-6" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z" />
      <path d="M4 19a2 2 0 0 1 2-2h13M9 8h6M9 11h4" />
    </>
  ),
  loop: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5" />
      <path d="M20 4v4.5h-4.5" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.5" />
      <path d="M4 20v-4.5h4.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  auto: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v3M12 18.5v3M4.2 5.6l2.1 2.1M17.7 16.3l2.1 2.1M2.5 12h3M18.5 12h3M4.2 18.4l2.1-2.1M17.7 7.7l2.1-2.1" />
    </>
  ),
  spark: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />,
  bell: (
    <>
      <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2z" />
      <path d="M10 20.5a2 2 0 0 0 4 0" />
    </>
  ),
  root: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <path d="M12 7.2V13M12 13l-6 4M12 13l6 4M12 13v5" />
      <circle cx="6" cy="18.5" r="1.6" />
      <circle cx="18" cy="18.5" r="1.6" />
      <circle cx="12" cy="19.5" r="1.6" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 18l4-5" />
      <circle cx="12" cy="18" r="1.3" />
    </>
  ),
  pulse: <path d="M3 12h4l2-5 4 10 2-5h6" />,
  grow: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  brain: (
    <>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h0a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h0a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
    </>
  ),
  hybrid: (
    <>
      <path d="M8 11h8a3 3 0 0 0 .4-5.97A4.5 4.5 0 0 0 7.8 4.6 3.3 3.3 0 0 0 8 11z" />
      <rect x="6" y="16" width="12" height="5" rx="1.2" />
      <path d="M12 11v5" />
    </>
  ),
  cloud: <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.5 4.5 0 0 0 7 18z" />,
  fast: (
    <>
      <circle cx="13" cy="13" r="8" />
      <path d="M13 9v4l3 2M2 8h3M1 12h3M2 16h3" />
    </>
  ),
}

function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

function Head({ eyebrow, dark = false, left = false, children }) {
  return (
    <div className={`vg-head${left ? ' vg-head--left' : ''}`}>
      <span className={`vg-eyebrow${dark ? ' vg-eyebrow--dark' : ''}`}>{eyebrow}</span>
      {children}
    </div>
  )
}

/* ---------- 1. Banner ---------- */
function VegHero() {
  const d = vegAi
  const c = d.console

  return (
    <section className="vg-hero">
      <div className="container-xl vg-hero__inner">
        <div className="vg-hero__text">
          <img src={vegLogo} alt="VegAI — Intelligent IT Services & Solutions" className="vg-hero__logo" />
          <span className="vg-eyebrow vg-hero__badge">{d.eyebrow}</span>

          <h1 className="vg-hero__title">
            {d.title} <span className="vg-highlight">{d.highlight}</span>
          </h1>
          <p className="vg-hero__lead">{d.intro[0]}</p>
          <p className="vg-hero__intro">{d.intro[1]}</p>

          <Link to={d.cta.href} className="vg-btn">
            {d.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Operations console: VegAI spots the warning before the threshold is crossed */}
        <div className="vg-console" aria-hidden="true">
          <div className="vg-console__head">
            <span className="vg-console__dots">
              <i />
              <i />
              <i />
            </span>
            <span className="vg-console__name">{c.name}</span>
            <span className="vg-console__live">
              <span className="vg-console__live-dot" /> Live
            </span>
          </div>

          <div className="vg-console__chart">
            <svg viewBox="0 0 400 150" preserveAspectRatio="none">
              <line x1="0" y1="38" x2="400" y2="38" className="vg-chart__threshold" />
              <path
                d="M0 112 L30 108 L60 114 L90 104 L120 110 L150 100 L180 106 L210 94 L240 88"
                className="vg-chart__line"
              />
              <path d="M240 88 L270 72 L300 58 L330 44 L360 30 L400 18" className="vg-chart__forecast" />
              <path d="M240 150 V0" className="vg-chart__now" />
            </svg>
            <span className="vg-chart__threshold-label">Threshold</span>
            <span className="vg-chart__marker" />
            <span className="vg-chart__signal">{c.signal}</span>
          </div>

          <div className="vg-console__runbook">
            <span className="vg-console__runbook-icon">
              <Icon name="book" />
            </span>
            <span>{c.runbook}</span>
            <span className="vg-console__runbook-bar">
              <span />
            </span>
          </div>

          <ul className="vg-console__pillars">
            {c.pillars.map((p, i) => (
              <li key={p} style={{ animationDelay: `${1.6 + i * 0.12}s` }}>
                <span className="vg-console__ok" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- 2. What Makes VegAI Different ---------- */
function VegDifferent() {
  const d = vegAi.different
  const [ref, inView] = useInView(0.15)

  return (
    <section ref={ref} className={`vg-diff${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={d.eyebrow} />

        {/* Reacting vs anticipating, side by side */}
        <div className="vg-compare" aria-hidden="true">
          <div className="vg-compare__row vg-compare__row--old">
            <span className="vg-compare__label">{d.reactiveLabel}</span>
            <ol>
              {d.reactive.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
          <div className="vg-compare__row vg-compare__row--new">
            <span className="vg-compare__label">{d.proactiveLabel}</span>
            <ol>
              {d.proactive.map((s, i) => (
                <li key={s} style={{ '--d': `${i * 0.9}s` }}>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <ul className="vg-diff__grid">
          {d.items.map((item, i) => (
            <li key={item.title} className="vg-diff__card" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
              <div className="vg-diff__top">
                <span className={`vg-diff__icon${i % 2 ? ' vg-diff__icon--alt' : ''}`}>
                  <Icon name={item.icon} />
                </span>
                <span className="vg-diff__num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- 3. VegAI Capabilities ---------- */
function VegCapabilities() {
  const c = vegAi.capabilities
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} className={`vg-cap${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={c.eyebrow} dark />

        <ul className="vg-cap__grid">
          {c.items.map((item, i) => (
            <li key={item.title} style={{ animationDelay: `${i * 0.06}s` }}>
              <span className="vg-cap__led" style={{ animationDelay: `${(i * 0.37) % 2}s` }} aria-hidden="true" />
              <span className={`vg-cap__icon${i % 2 ? ' vg-cap__icon--alt' : ''}`}>
                <Icon name={item.icon} />
              </span>
              <strong>{item.title}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- 4. Built for the Modern SAP Enterprise ---------- */
function VegModern() {
  const m = vegAi.modern
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`vg-mod${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={m.eyebrow}>
          <p className="vg-head__text">{m.text}</p>
        </Head>

        <div className="vg-layer">
          <div className="vg-layer__band">
            <img src={vegLogo} alt="" className="vg-layer__logo" aria-hidden="true" />
            <span className="vg-layer__name">{m.layer}</span>
            <ul className="vg-layer__tags">
              {m.tags.map((t, i) => (
                <li key={t} style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Beams from the layer down into every landscape */}
          <div className="vg-layer__beams" aria-hidden="true">
            {m.landscapes.map((l, i) => (
              <span key={l.label}>
                <i style={{ animationDelay: `${i * 0.35}s` }} />
              </span>
            ))}
          </div>

          <ul className="vg-layer__lands">
            {m.landscapes.map((l, i) => (
              <li key={l.label} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <span className="vg-layer__icon">
                  <Icon name={l.icon} />
                </span>
                {l.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- 5. The Outcome ---------- */
function VegOutcome() {
  const o = vegAi.outcome
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`vg-out${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <div className="vg-out__grid">
          <div>
            <Head eyebrow={o.eyebrow} dark left />
            <h2 className="vg-out__title">
              {o.title} <span className="vg-highlight--dark">{o.highlight}</span>
            </h2>
            <p className="vg-out__text">{o.text}</p>
          </div>

          {/* Firefighting goes down as foresight goes up */}
          <div className="vg-meters" aria-hidden="true">
            {o.meters.map((m) => (
              <div key={m.label} className={`vg-meter vg-meter--${m.dir}`}>
                <span className="vg-meter__label">
                  {m.label}
                  <b>{m.dir === 'up' ? '▲' : '▼'}</b>
                </span>
                <span className="vg-meter__track">
                  <span className="vg-meter__fill" />
                </span>
              </div>
            ))}
          </div>
        </div>

        <ul className="vg-out__results">
          {o.results.map((r, i) => (
            <li key={r.text} style={{ animationDelay: `${0.4 + i * 0.12}s` }}>
              <span className="vg-out__icon">
                <Icon name={r.icon} />
              </span>
              <span className="vg-out__result-text">{r.text}</span>
              <span className={`vg-out__dir vg-out__dir--${r.dir}`} aria-hidden="true">
                {r.dir === 'up' ? '↑' : '↓'}
              </span>
            </li>
          ))}
        </ul>

        <div className="vg-out__brand">
          <div className="vg-out__logo">
            <img src={vegLogo} alt="VegAI" />
          </div>
          <p className="vg-out__tagline">
            {o.tagline.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </p>
          <Link to={vegAi.cta.href} className="vg-btn vg-btn--gold">
            {vegAi.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function VegAi() {
  return (
    <>
      <VegHero />
      <VegDifferent />
      <VegCapabilities />
      <VegModern />
      <VegOutcome />
    </>
  )
}
