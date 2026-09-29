import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'
import { carinAi } from '../data'
import carinLogo from '../assets/products/carinai-logo.png'
import sapLogo from '../assets/partner/SAP.png'
import './CarinAi.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.8 2.8L16.5 9" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
      <path d="M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2.4 11h10.8L21 7H6.2" />
      <circle cx="9" cy="19.5" r="1.5" />
      <circle cx="17" cy="19.5" r="1.5" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="9" cy="7" rx="6" ry="2.5" />
      <path d="M3 7v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V7" />
      <path d="M9 16.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4c0-1.4-2.7-2.5-6-2.5" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4.5" />
      <path d="M11.2 11.8L20 3M16 7l3 3M14 9l2 2" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5M3 17.5l9 5 9-5" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 15l-3-3c1-4.5 4.5-8 10-9-1 5.5-4.5 9-7 12z" />
      <path d="M9 12l-4 1-2 3 4 .5M12 15l-1 4-3 2-.5-4" />
      <circle cx="15" cy="9" r="1.5" />
    </>
  ),
  grow: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  flow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 6h5a3 3 0 0 1 3 3v6" />
      <path d="M14.5 12.5L17 15l2.5-2.5" />
    </>
  ),
  hand: (
    <>
      <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12M11 11V4.5a1.5 1.5 0 0 1 3 0V12M14 11.5V6a1.5 1.5 0 0 1 3 0v8" />
      <path d="M8 13l-1.6-1.6a1.6 1.6 0 0 0-2.3 2.3L8 18c1.3 1.8 3 3 5.5 3h.5a5 5 0 0 0 5-5v-4" />
    </>
  ),
  fast: (
    <>
      <circle cx="13" cy="13" r="8" />
      <path d="M13 9v4l3 2M2 8h3M1 12h3M2 16h3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  agile: (
    <>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 4v4h-4M12 8v4l2.5 2.5" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
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
    <div className={`ci-head${left ? ' ci-head--left' : ''}`}>
      <span className={`ci-eyebrow${dark ? ' ci-eyebrow--dark' : ''}`}>{eyebrow}</span>
      {children}
    </div>
  )
}

// Position on a circle, in % of the container (angle 0 = 12 o'clock)
function onRing(i, count, radius) {
  const a = ((-90 + (i * 360) / count) * Math.PI) / 180
  return { x: 50 + radius * Math.cos(a), y: 50 + radius * Math.sin(a) }
}

/* ---------- 1. Banner ---------- */
function CarinHero() {
  const d = carinAi
  const s = d.stack

  return (
    <section className="ci-hero">
      <div className="container-xl ci-hero__inner">
        <div className="ci-hero__text">
          <img src={carinLogo} alt="CarinAI — Optimizing SAP with AI Intelligence" className="ci-hero__logo" />
          <span className="ci-eyebrow ci-hero__badge">{d.eyebrow}</span>

          <h1 className="ci-hero__title">
            {d.title} <span className="ci-highlight">{d.highlight}</span>
          </h1>
          <p className="ci-hero__sub">{d.subtitle}</p>
          <p className="ci-hero__lead">{d.lead}</p>
          {d.intro.map((p) => (
            <p key={p} className="ci-hero__intro">
              {p}
            </p>
          ))}

          <p className="ci-hero__tagline">
            {d.tagline.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </p>

          <Link to={d.cta.href} className="ci-btn">
            {d.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Platform stack: SAP core → BTP → CarinAI engine → intelligent workflows */}
        <div className="ci-stack" aria-hidden="true">
          <div className="ci-stack__outcome">
            <Icon name="spark" />
            {s.outcome}
          </div>

          <div className="ci-stack__link">
            <i />
            <i style={{ animationDelay: '0.5s' }} />
            <i style={{ animationDelay: '1s' }} />
          </div>

          <div className="ci-stack__engine">
            <img src={carinLogo} alt="" className="ci-stack__engine-logo" />
            <ul>
              {s.engine.map((e, i) => (
                <li key={e} style={{ '--d': `${i * 0.9}s` }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="ci-stack__link">
            <i />
            <i style={{ animationDelay: '0.5s' }} />
            <i style={{ animationDelay: '1s' }} />
          </div>

          <div className="ci-stack__btp">{s.platform}</div>

          <div className="ci-stack__core">
            <img src={sapLogo} alt="" />
            {s.core}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- 2. Intelligence Beyond the SAP Core ---------- */
function CarinBeyond() {
  const b = carinAi.beyond
  const [ref, inView] = useInView(0.25)
  const count = b.areas.length

  return (
    <section ref={ref} className={`ci-beyond${inView ? ' is-in' : ''}`}>
      <div className="container-xl ci-beyond__grid">
        <div>
          <Head eyebrow={b.eyebrow} left />
          <p className="ci-lead">{b.text}</p>
          <p className="ci-body">{b.closing}</p>

          <div className="ci-legend" aria-hidden="true">
            <span className="ci-legend__item ci-legend__item--manual">{b.manual}</span>
            <span className="ci-legend__arrow">→</span>
            <span className="ci-legend__item ci-legend__item--smart">{b.intelligent}</span>
          </div>
        </div>

        {/* SAP core at the centre, CarinAI ring around it, processes turn intelligent one by one */}
        <div className="ci-orbit" aria-hidden="true">
          <svg className="ci-orbit__lines" viewBox="0 0 100 100">
            {b.areas.map((a, i) => {
              const p = onRing(i, count, 40)
              return <line key={a.label} x1="50" y1="50" x2={p.x} y2={p.y} className="ci-orbit__spoke" style={{ '--d': `${0.4 + i * 0.35}s` }} />
            })}
          </svg>

          <span className="ci-orbit__ring">
            <span className="ci-orbit__ring-label">CarinAI</span>
          </span>

          <div className="ci-orbit__core">
            <img src={sapLogo} alt="" />
            <span>Core</span>
          </div>

          {b.areas.map((a, i) => {
            const p = onRing(i, count, 40)
            return (
              <div
                key={a.label}
                className="ci-orbit__node"
                style={{ left: `${p.x}%`, top: `${p.y}%`, '--d': `${0.4 + i * 0.35}s` }}
              >
                <span className="ci-orbit__icon">
                  <Icon name={a.icon} />
                </span>
                <span className="ci-orbit__label">{a.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- 3. Why CarinAI? ---------- */
function WhyVisual({ type, w }) {
  if (type === 'native') {
    return (
      <div className="ci-v-native">
        {w.nativeLayers.map((l, i) => (
          <span key={l} className={`ci-v-native__layer ci-v-native__layer--${i}`} style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
            {l}
          </span>
        ))}
      </div>
    )
  }
  if (type === 'value') {
    return (
      <div className="ci-v-value">
        <span>{w.valueSteps[0]}</span>
        <span className="ci-v-value__track">
          <i />
        </span>
        <span>{w.valueSteps[1]}</span>
      </div>
    )
  }
  if (type === 'scale') {
    return (
      <div className="ci-v-scale">
        {Array.from({ length: 12 }, (_, i) => (
          <i key={i} style={{ animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>
    )
  }
  if (type === 'control') {
    return (
      <ul className="ci-v-control">
        {w.controlParts.map((c, i) => (
          <li key={c} style={{ animationDelay: `${i * 0.6}s` }}>
            {c}
          </li>
        ))}
      </ul>
    )
  }
  return (
    <div className="ci-v-evolve">
      <span>{w.evolveFrom}</span>
      <span className="ci-v-evolve__bar">
        <i />
      </span>
      <strong>{w.evolveTo}</strong>
    </div>
  )
}

function CarinWhy() {
  const w = carinAi.why
  const [ref, inView] = useInView(0.15)

  return (
    <section ref={ref} className={`ci-why${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={w.eyebrow} dark />

        <ul className="ci-why__grid">
          {w.items.map((item, i) => (
            <li
              key={item.title}
              className={`ci-why__card${i === 0 ? ' ci-why__card--wide' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="ci-why__top">
                <span className={`ci-why__icon${i % 2 ? ' ci-why__icon--alt' : ''}`}>
                  <Icon name={item.icon} />
                </span>
                <span className="ci-why__num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="ci-why__visual" aria-hidden="true">
                <WhyVisual type={item.visual} w={w} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- 4. The CarinAI Advantage ---------- */
function CarinAdvantage() {
  const a = carinAi.advantage
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} className={`ci-adv${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={a.eyebrow} />

        <ul className="ci-adv__grid">
          {a.items.map((item, i) => (
            <li key={item.title} className="ci-adv__card" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className={`ci-adv__icon${i % 2 ? ' ci-adv__icon--alt' : ''}`}>
                <Icon name={item.icon} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <span className="ci-adv__line" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- 5. The Future of SAP ---------- */
function CarinFinal() {
  const f = carinAi.final
  const [ref, inView] = useInView(0.3)

  return (
    <section ref={ref} className={`ci-final${inView ? ' is-in' : ''}`}>
      <div className="container-xl ci-final__inner">
        <h2 className="ci-final__title">
          {f.title}
          <span className="ci-highlight--dark">{f.highlight}</span>
        </h2>
        <p className="ci-final__text">{f.text}</p>

        <ol className="ci-final__steps" aria-hidden="true">
          {f.steps.map((s, i) => (
            <li key={s} style={{ '--d': `${i}s` }}>
              {s}
            </li>
          ))}
        </ol>

        <div className="ci-final__brand">
          <img src={carinLogo} alt="CarinAI" />
          <span>{f.byline}</span>
        </div>

        <p className="ci-final__tagline">
          {f.tagline.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </p>

        <Link to={carinAi.cta.href} className="ci-btn ci-btn--gold">
          {carinAi.cta.label}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

export default function CarinAi() {
  return (
    <>
      <CarinHero />
      <CarinBeyond />
      <CarinWhy />
      <CarinAdvantage />
      <CarinFinal />
    </>
  )
}
