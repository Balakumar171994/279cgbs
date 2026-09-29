import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'
import { digitalInfra } from '../data'
import awsLogo from '../assets/partner/AWS.jpg'
import azureLogo from '../assets/partner/azure.png'
import './DigitalInfra.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  cloud: <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.5 4.5 0 0 0 7 18z" />,
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="19" r="2.2" />
      <circle cx="19" cy="19" r="2.2" />
      <path d="M12 7.2v4.3M12 11.5l-5.5 5.7M12 11.5l5.5 5.7M7.2 19h9.6" />
    </>
  ),
  storage: (
    <>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
      <path d="M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </>
  ),
  datacenter: (
    <>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M8 21v-4h8v4M8 10h8M8 13.5h8M3 21h18" />
    </>
  ),
  hybrid: (
    <>
      <path d="M8 11h8a3 3 0 0 0 .4-5.97A4.5 4.5 0 0 0 7.8 4.6 3.3 3.3 0 0 0 8 11z" />
      <rect x="6" y="16" width="12" height="5" rx="1.2" />
      <path d="M12 11v5M9.5 13.5L12 16l2.5-2.5" />
    </>
  ),
  observability: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M6 12h3l2-4 2 6 2-3h3M9 21h6M12 17v4" />
    </>
  ),
  managed: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </>
  ),
  lock: (
    <>
      <path d="M7 16h10a3.5 3.5 0 0 0 .5-6.96A5.5 5.5 0 0 0 6.6 8.3 4 4 0 0 0 7 16z" />
      <rect x="9.5" y="15" width="5" height="5" rx="1" />
      <path d="M10.5 15v-1.5a1.5 1.5 0 0 1 3 0V15" />
    </>
  ),
  apps: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5M3 17.5l9 5 9-5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.3-4.3M11 8v3.5M11 14h.01" />
    </>
  ),
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.8 2.8L16.5 9" />
    </>
  ),
  trend: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
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

// Icon per layer of the banner's stack graphic
const stackIcons = {
  Cloud: 'cloud',
  Hybrid: 'hybrid',
  Network: 'network',
  Compute: 'server',
  Storage: 'storage',
  'Data Center': 'datacenter',
}

function DigitalInfraHero() {
  const d = digitalInfra

  return (
    <section className="di-hero">
      <div className="container-xl di-hero__inner">
        <div className="di-hero__text">
          <span className="di-eyebrow di-hero__badge">{d.eyebrow}</span>

          <h1 className="di-hero__title">
            {d.title} <span className="di-hero__highlight">{d.highlight}</span>
          </h1>

          <p className="di-hero__lead">{d.lead}</p>
          {d.intro.map((p) => (
            <p key={p} className="di-hero__intro">
              {p}
            </p>
          ))}

          <ul className="di-hero__pillars">
            {d.pillars.map((p, i) => (
              <li key={p} style={{ animationDelay: `${1.1 + i * 0.15}s` }}>
                {p}
              </li>
            ))}
          </ul>

          <Link to={d.cta.href} className="di-btn">
            {d.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Infrastructure stack: layers light up as data flows through them */}
        <div className="di-stack" aria-hidden="true">
          <div className="di-stack__head">
            <span className="di-stack__name">Digital Foundation</span>
            <span className="di-stack__live">
              <span className="di-stack__live-dot" /> 24×7
            </span>
          </div>

          <div className="di-stack__body">
            <span className="di-stack__rail">
              <span className="di-stack__packet" />
              <span className="di-stack__packet" style={{ animationDelay: '1.2s' }} />
              <span className="di-stack__packet" style={{ animationDelay: '2.4s' }} />
            </span>

            <ul className="di-stack__layers">
              {d.stack.map((layer, i) => (
                <li
                  key={layer}
                  className="di-stack__layer"
                  style={{ '--i': i, animationDelay: `${0.4 + i * 0.12}s` }}
                >
                  <span className={`di-stack__icon${i % 2 ? ' di-stack__icon--alt' : ''}`}>
                    <Icon name={stackIcons[layer]} />
                  </span>
                  <span className="di-stack__label">{layer}</span>
                  <span className="di-stack__bar">
                    <span style={{ animationDelay: `${i * 0.3}s` }} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function DigitalInfraReimagined() {
  const r = digitalInfra.reimagined
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`di-re${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <div className="di-head">
          <span className="di-eyebrow">{r.eyebrow}</span>
          <h2 className="di-head__title">
            {r.title} <span className="di-highlight">{r.highlight}</span>
          </h2>
          <p className="di-head__text">{r.problem}</p>
        </div>

        <div className="di-re__flow">
          <div className="di-re__card di-re__card--from">
            <span className="di-re__label">{r.from.label}</span>
            <ul className="di-re__chips">
              {r.from.points.map((p, i) => (
                <li key={p} style={{ '--i': i }}>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="di-re__arrow" aria-hidden="true">
            <span className="di-re__arrow-line" />
            <span className="di-re__arrow-head" />
          </div>

          <div className="di-re__card di-re__card--to">
            <span className="di-re__label">{r.to.label}</span>
            <ul className="di-re__checks">
              {r.to.points.map((p, i) => (
                <li key={p} style={{ animationDelay: `${0.9 + i * 0.15}s` }}>
                  <span className="di-re__check" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="di-re__closing">{r.closing}</p>
      </div>
    </section>
  )
}

const AUTO_ADVANCE_MS = 4500

function DigitalInfraCapabilities() {
  const d = digitalInfra
  const [ref, inView] = useInView(0.2)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  // Walk through the capabilities until the visitor picks one themselves
  useEffect(() => {
    if (!inView || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive((a) => (a + 1) % d.capabilities.length), AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [inView, paused, d.capabilities.length])

  const pick = (i) => {
    setActive(i)
    setPaused(true)
  }

  const current = d.capabilities[active]
  const count = d.capabilities.length

  return (
    <section id="what-we-bring" ref={ref} className={`di-cap${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <div className="di-head">
          <span className="di-eyebrow">{d.capabilitiesEyebrow}</span>
          <p className="di-head__text">{d.capabilitiesIntro}</p>
        </div>

        <div className="di-cap__layout">
          {/* Hub-and-spoke: every capability connects into one foundation */}
          <div className="di-hub">
            <svg className="di-hub__lines" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="38" className="di-hub__orbit" />
              {d.capabilities.map((c, i) => {
                const a = ((-90 + (i * 360) / count) * Math.PI) / 180
                return (
                  <line
                    key={c.title}
                    x1="50"
                    y1="50"
                    x2={50 + 38 * Math.cos(a)}
                    y2={50 + 38 * Math.sin(a)}
                    className={`di-hub__spoke${i === active ? ' is-active' : ''}`}
                  />
                )
              })}
            </svg>

            <div className="di-hub__core">
              <span>One Connected</span>
              <strong>Digital Foundation</strong>
            </div>

            {d.capabilities.map((c, i) => {
              const a = ((-90 + (i * 360) / count) * Math.PI) / 180
              return (
                <button
                  key={c.title}
                  type="button"
                  className={`di-hub__node${i === active ? ' is-active' : ''}`}
                  style={{
                    left: `${50 + 38 * Math.cos(a)}%`,
                    top: `${50 + 38 * Math.sin(a)}%`,
                    animationDelay: `${i * 0.08}s`,
                  }}
                  onClick={() => pick(i)}
                  aria-pressed={i === active}
                  aria-label={c.title}
                >
                  <span className="di-hub__node-icon">
                    <Icon name={c.icon} />
                  </span>
                  <span className="di-hub__node-label">{c.short}</span>
                </button>
              )
            })}
          </div>

          <article key={current.title} className="di-detail" aria-live="polite">
            <div className="di-detail__top">
              <span className="di-detail__icon">
                <Icon name={current.icon} />
              </span>
              <span className="di-detail__count">
                {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
              </span>
            </div>
            <h3 className="di-detail__title">{current.title}</h3>
            <p className="di-detail__text">{current.text}</p>
            <ul className="di-detail__items">
              {current.items.map((item, i) => (
                <li key={item} style={{ animationDelay: `${0.15 + i * 0.07}s` }}>
                  {item}
                </li>
              ))}
            </ul>

            <div className="di-detail__progress" aria-hidden="true">
              {d.capabilities.map((c, i) => (
                <button
                  key={c.title}
                  type="button"
                  tabIndex={-1}
                  className={i === active ? 'is-active' : ''}
                  onClick={() => pick(i)}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function DigitalInfraCloud() {
  const c = digitalInfra.cloud
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`di-cloud${inView ? ' is-in' : ''}`}>
      <div className="container-xl di-cloud__inner">
        <div className="di-cloud__text">
          <span className="di-eyebrow">{c.eyebrow}</span>
          <h2 className="di-head__title di-cloud__title">
            {c.title[0]}
            <br />
            <span className="di-cloud__title-line">
              {c.title[1]} <span className="di-highlight">{c.highlight}</span>
            </span>
          </h2>
          <p className="di-cloud__lead">{c.lead}</p>
          <p className="di-cloud__body">{c.text}</p>

          <ol className="di-cloud__cycle">
            {c.lifecycle.map((step, i) => (
              <li key={step} style={{ animationDelay: `${0.3 + i * 0.12}s` }}>
                {step}
              </li>
            ))}
          </ol>

          <div className="di-cloud__partners">
            <span>{c.expertiseLabel}</span>
            <img src={awsLogo} alt="AWS" />
            <img src={azureLogo} alt="Microsoft Azure" />
          </div>
        </div>

        {/* A workload token visits each environment in turn: right place per workload */}
        <div className="di-env" aria-hidden="true">
          <div className="di-env__core">
            <span className="di-env__core-icon">
              <Icon name="apps" />
            </span>
            Workload
          </div>
          {c.environments.map((env, i) => (
            <div
              key={env.title}
              className={`di-env__card di-env__card--${i}`}
              style={{ '--d': `${i * 2}s`, '--in': `${0.2 + i * 0.12}s` }}
            >
              <span className="di-env__icon">
                <Icon name={env.icon} />
              </span>
              <strong>{env.title}</strong>
              <span className="di-env__fit">Right fit</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DigitalInfraWorkloads() {
  const w = digitalInfra.workloads
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} className={`di-wl${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <div className="di-head">
          <span className="di-eyebrow">{w.eyebrow}</span>
          <p className="di-head__text">{w.text}</p>
        </div>

        <ul className="di-wl__grid">
          {w.items.map((item, i) => (
            <li key={item.title} className="di-wl__card" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className={`di-wl__icon${i % 2 ? ' di-wl__icon--alt' : ''}`}>
                <Icon name={item.icon === 'sap' ? 'layers' : item.icon} />
              </span>
              <h3 className="di-wl__title">{item.title}</h3>
              <p className="di-wl__text">{item.text}</p>
              <span className="di-wl__link" aria-hidden="true">
                <span style={{ animationDelay: `${i * 0.3}s` }} />
              </span>
            </li>
          ))}
        </ul>

        <div className="di-wl__base">
          <Icon name="server" />
          {w.base}
        </div>
      </div>
    </section>
  )
}

function DigitalInfraAlwaysOn() {
  const a = digitalInfra.alwaysOn
  const [ref, inView] = useInView(0.3)

  return (
    <section ref={ref} className={`di-ops${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <div className="di-ops__panel">
          <div className="di-head di-ops__head">
            <span className="di-eyebrow di-eyebrow--dark">{a.eyebrow}</span>
            <h2 className="di-head__title">
              {a.title} <span className="di-ops__highlight">{a.highlight}</span>
            </h2>
            <p className="di-head__text">{a.text}</p>
          </div>

          <ol className="di-ops__steps" style={{ '--n': a.steps.length }}>
            <span className="di-ops__track" aria-hidden="true">
              <span className="di-ops__runner" />
            </span>
            {a.steps.map((step, i) => (
              <li
                key={step.title}
                className="di-ops__step"
                style={{ '--d': `${i}s`, '--in': `${0.2 + i * 0.15}s` }}
              >
                <span className="di-ops__icon">
                  <Icon name={step.icon} />
                </span>
                <span className="di-ops__num">{String(i + 1).padStart(2, '0')}</span>
                <strong>{step.title}</strong>
              </li>
            ))}
          </ol>

          <p className="di-ops__loop" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v4h-4" />
            </svg>
            Continuous, 24×7
          </p>
        </div>
      </div>
    </section>
  )
}

function DigitalInfraBusiness() {
  const b = digitalInfra.business
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`di-biz${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <div className="di-head">
          <span className="di-eyebrow">{b.eyebrow}</span>
          <h2 className="di-head__title">
            {b.title} <span className="di-highlight">{b.highlight}</span>
          </h2>
          <p className="di-head__text">{b.text}</p>
        </div>

        <ul className="di-biz__factors">
          {b.factors.map((f, i) => (
            <li key={f} style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="di-biz__num">{String(i + 1).padStart(2, '0')}</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Every factor funnels into one tailored result */}
        <svg className="di-biz__funnel" viewBox="0 0 600 70" preserveAspectRatio="none" aria-hidden="true">
          {[50, 150, 250, 350, 450, 550].map((x, i) => (
            <path
              key={x}
              d={`M${x} 0 C ${x} 40, 300 30, 300 70`}
              className="di-biz__strand"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>

        <div className="di-biz__result">
          <span className="di-biz__result-label">{b.resultLabel}</span>
          <p>{b.result}</p>
          <Link to={digitalInfra.cta.href} className="di-btn di-btn--light">
            {digitalInfra.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function DigitalInfra() {
  return (
    <>
      <DigitalInfraHero />
      <DigitalInfraReimagined />
      <DigitalInfraCapabilities />
      <DigitalInfraCloud />
      <DigitalInfraWorkloads />
      <DigitalInfraAlwaysOn />
      <DigitalInfraBusiness />
    </>
  )
}
