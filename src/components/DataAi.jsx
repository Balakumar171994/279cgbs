import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'
import { dataAi } from '../data'
import sapLogo from '../assets/partner/SAP.png'
import './DataAi.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  pipeline: (
    <>
      <rect x="2.5" y="4" width="6" height="5" rx="1.2" />
      <rect x="15.5" y="4" width="6" height="5" rx="1.2" />
      <rect x="9" y="15" width="6" height="5" rx="1.2" />
      <path d="M5.5 9v2.5a1 1 0 0 0 1 1H12m6.5-3.5v2.5a1 1 0 0 1-1 1H12m0 0V15" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 13v4M12 12v5M16 14v3" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-5 3 3 5-6" />
      <circle cx="19" cy="7" r="1.3" />
    </>
  ),
  brain: (
    <>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h0a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h0a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    </>
  ),
  agent: (
    <>
      <rect x="4" y="8" width="16" height="11" rx="3" />
      <path d="M12 4v4M9 13h.01M15 13h.01M9.5 16.5h5" />
      <circle cx="12" cy="3.5" r="1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  cloud: <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.5 4.5 0 0 0 7 18z" />,
  iot: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.3c2.1.7 3.5 2.8 3.5 5.7" />
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

function Head({ eyebrow, title, highlight, dark = false, left = false, children }) {
  return (
    <div className={`da-head${left ? ' da-head--left' : ''}`}>
      <span className={`da-eyebrow${dark ? ' da-eyebrow--dark' : ''}`}>{eyebrow}</span>
      {title && (
        <h2 className="da-head__title">
          {title} <span className={dark ? 'da-highlight--dark' : 'da-highlight'}>{highlight}</span>
        </h2>
      )}
      {children}
    </div>
  )
}

const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- 1. Banner ---------- */
// Banner graphic geometry (viewBox 480 x 420)
const SRC_Y = (i) => 36 + i * 66 // centre of each source chip
const ANS_Y = [110, 210, 310] // centre of each answer card
const CORE = { x: 250, y: 210, r: 58 }

function DataHero() {
  const d = dataAi

  return (
    <section className="da-hero">
      <div className="container-xl da-hero__inner">
        <div className="da-hero__text">
          <span className="da-eyebrow da-hero__badge">{d.eyebrow}</span>
          <h1 className="da-hero__title">
            {d.title} <span className="da-highlight">{d.highlight}</span>
          </h1>
          <p className="da-hero__lead">{d.lead}</p>
          <p className="da-hero__intro">{d.intro}</p>
          <p className="da-hero__twist">{d.twist}</p>
          <p className="da-hero__intro">{d.body}</p>

          <p className="da-hero__tagline">
            <span className="da-hero__noise">{d.tagline[0]}</span>
            <span className="da-hero__signal">{d.tagline[1]}</span>
          </p>

          <Link to={d.cta.href} className="da-btn">
            {d.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Scattered sources → AI core → three answers */}
        <div className="da-flow" aria-hidden="true">
          <svg viewBox="0 0 480 420" className="da-flow__svg">
            <defs>
              <radialGradient id="daCoreGlow">
                <stop offset="0%" stopColor="#f3cf55" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#2a6aae" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="daCore" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0a2c6e" />
                <stop offset="100%" stopColor="#2a6aae" />
              </linearGradient>
            </defs>

            {d.sources.map((s, i) => {
              const y = SRC_Y(i)
              return (
                <path
                  key={s}
                  id={`da-in-${i}`}
                  d={`M120 ${y} C 180 ${y}, 170 ${CORE.y}, ${CORE.x - CORE.r} ${CORE.y}`}
                  className="da-flow__path"
                />
              )
            })}
            {ANS_Y.map((y, i) => (
              <path
                key={y}
                id={`da-out-${i}`}
                d={`M${CORE.x + CORE.r} ${CORE.y} C 325 ${CORE.y}, 320 ${y}, 340 ${y}`}
                className="da-flow__path da-flow__path--out"
              />
            ))}

            {/* Data packets travelling along the paths */}
            {!reduceMotion &&
              d.sources.map((s, i) => (
                <circle key={s} r="3.5" className="da-flow__packet">
                  <animateMotion dur="2.6s" begin={`${i * 0.43}s`} repeatCount="indefinite">
                    <mpath href={`#da-in-${i}`} />
                  </animateMotion>
                </circle>
              ))}
            {!reduceMotion &&
              ANS_Y.map((y, i) => (
                <circle key={y} r="4" className="da-flow__packet da-flow__packet--out">
                  <animateMotion dur="1.8s" begin={`${0.6 + i * 0.6}s`} repeatCount="indefinite">
                    <mpath href={`#da-out-${i}`} />
                  </animateMotion>
                </circle>
              ))}

            {d.sources.map((s, i) => (
              <g key={s} className="da-flow__src" style={{ animationDelay: `${0.2 + i * 0.08}s` }}>
                <rect x="0" y={SRC_Y(i) - 17} width="120" height="34" rx="17" />
                <text x="60" y={SRC_Y(i) + 4} textAnchor="middle">
                  {s}
                </text>
              </g>
            ))}

            <circle cx={CORE.x} cy={CORE.y} r="100" fill="url(#daCoreGlow)" className="da-flow__glow" />
            <circle cx={CORE.x} cy={CORE.y} r={CORE.r + 12} className="da-flow__ring" />
            <circle cx={CORE.x} cy={CORE.y} r={CORE.r} fill="url(#daCore)" />
            <text x={CORE.x} y={CORE.y - 2} textAnchor="middle" className="da-flow__core-big">
              AI
            </text>
            <text x={CORE.x} y={CORE.y + 18} textAnchor="middle" className="da-flow__core-small">
              INTELLIGENCE
            </text>

            {d.answers.map((a, i) => (
              <g key={a} className="da-flow__ans" style={{ '--d': `${i * 1.2}s` }}>
                <rect x="340" y={ANS_Y[i] - 26} width="140" height="52" rx="14" />
                <text x="410" y={ANS_Y[i] + 4} textAnchor="middle">
                  {a}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
}

/* ---------- 2. Your Data Knows More ---------- */
function DataDashboards() {
  const s = dataAi.dashboards
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`da-dash${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <div className="da-dash__grid">
          <div>
            <Head eyebrow={s.eyebrow} title={s.title} highlight={s.highlight} left />
            <p className="da-lead">{s.shortage}</p>
            <p className="da-body">{s.spread}</p>
            <p className="da-body da-body--strong">{s.closing}</p>
          </div>

          {/* Separate silos merge into one clear view */}
          <div className="da-silos" aria-hidden="true">
            <div className="da-silos__row">
              {s.silos.map((name, i) => (
                <div key={name} className="da-silo" style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className="da-silo__block" />
                  <span className="da-silo__block" />
                  <span className="da-silo__block" />
                  <span className="da-silo__name">{name}</span>
                  <span className="da-silo__drop">
                    <span style={{ animationDelay: `${i * 0.35}s` }} />
                  </span>
                </div>
              ))}
            </div>

            <div className="da-view">
              <div className="da-view__head">
                <span>{s.view}</span>
                <span className="da-view__dots">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <svg viewBox="0 0 300 90" preserveAspectRatio="none" className="da-view__chart">
                <path d="M0 90 L0 70 L40 62 L80 66 L120 48 L160 52 L200 34 L240 30 L300 12 L300 90 Z" className="da-view__area" />
                <path d="M0 70 L40 62 L80 66 L120 48 L160 52 L200 34 L240 30 L300 12" className="da-view__line" />
              </svg>
            </div>
          </div>
        </div>

        <ol className="da-chevrons">
          {s.cycle.map((c, i) => (
            <li key={c} style={{ '--d': `${i}s`, '--in': `${0.3 + i * 0.12}s` }}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {c}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- 3. What We Bring Together ---------- */
function DataCapabilities() {
  const c = dataAi.capabilities
  const [ref, inView] = useInView(0.15)

  return (
    <section ref={ref} className={`da-cap${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={c.eyebrow} />

        <ul className="da-bento">
          {c.items.map((item, i) => (
            <li
              key={item.title}
              className={`da-bento__card${item.visual ? ' da-bento__card--wide' : ''}${item.featured ? ' da-bento__card--dark' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className={`da-bento__icon${i % 2 ? ' da-bento__icon--alt' : ''}`}>
                <Icon name={item.icon} />
              </span>
              <div className="da-bento__body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              {item.visual === 'bars' && (
                <div className="da-bento__bars" aria-hidden="true">
                  {[42, 64, 38, 80, 56, 92, 70].map((h, j) => (
                    <span key={j} style={{ '--h': `${h}%`, animationDelay: `${j * 0.15}s` }} />
                  ))}
                </div>
              )}

              {item.visual === 'agent' && (
                <ol className="da-bento__agent" aria-hidden="true">
                  {c.agentSteps.map((step, j) => (
                    <li key={step} style={{ '--d': `${j * 1}s` }}>
                      {step}
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- 4. Intelligence That Fits ---------- */
function DataFits() {
  const f = dataAi.fits
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`da-fits${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={f.eyebrow}>
          <p className="da-head__text">{f.text}</p>
        </Head>

        <div className="da-layer" aria-hidden="true">
          <div className="da-layer__bar">
            <strong>{f.layer}</strong>
            <span>{f.layerSub}</span>
          </div>

          <div className="da-layer__links">
            {f.sources.map((s, i) => (
              <span key={s.label}>
                <i style={{ animationDelay: `${i * 0.3}s` }} />
              </span>
            ))}
          </div>

          <ul className="da-layer__sources">
            {f.sources.map((s, i) => (
              <li key={s.label} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <span className="da-layer__icon">
                  {s.icon === 'sap' ? <img src={sapLogo} alt="" /> : <Icon name={s.icon} />}
                </span>
                {s.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- 5. From Dashboards to Digital Intelligence ---------- */
function DataMaturity() {
  const m = dataAi.maturity
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`da-mat${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={m.eyebrow} dark />

        <ol className="da-stairs">
          {m.stages.map((s, i) => (
            <li key={s.title} className="da-stair" style={{ '--h': `${55 + i * 15}%`, '--in': `${0.2 + i * 0.2}s` }}>
              <span className="da-stair__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="da-stair__icon">
                <Icon name={s.icon} />
              </span>
              <strong className="da-stair__q">{s.question}</strong>
              <span className="da-stair__title">{s.title}</span>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <p className="da-mat__closing">{m.closing}</p>
      </div>
    </section>
  )
}

/* ---------- 6. The Outcome ---------- */
function DataOutcome() {
  const o = dataAi.outcome
  const [ref, inView] = useInView(0.3)

  return (
    <section ref={ref} className={`da-out${inView ? ' is-in' : ''}`}>
      <div className="container-xl da-out__inner">
        <span className="da-eyebrow da-eyebrow--dark">{o.eyebrow}</span>

        <ul className="da-out__list">
          {o.outcomes.map((item, i) => (
            <li key={item} style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {item}
            </li>
          ))}
        </ul>

        <p className="da-out__text">{o.text}</p>

        <Link to={dataAi.cta.href} className="da-btn da-btn--gold">
          {dataAi.cta.label}
          <span aria-hidden="true">→</span>
        </Link>

        <p className="da-out__sig">{o.signature}</p>
      </div>
    </section>
  )
}

export default function DataAi() {
  return (
    <>
      <DataHero />
      <DataDashboards />
      <DataCapabilities />
      <DataFits />
      <DataMaturity />
      <DataOutcome />
    </>
  )
}
