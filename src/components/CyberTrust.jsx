import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'
import { cyberTrust } from '../data'
import earthBg from '../assets/banner/banner-bg.jpg'
import './CyberTrust.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
    </>
  ),
  app: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  api: (
    <>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
      <path d="M13.5 5l-3 14" />
    </>
  ),
  device: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
    </>
  ),
  cloud: <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.5 4.5 0 0 0 7 18z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.3-4.3" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.8 2.8L16.5 9" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4h11l-2 4 2 4H5" />
    </>
  ),
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3.5 17.2a1.8 1.8 0 0 0 2.5 2.5l5.8-5.8a4 4 0 0 0 5.1-5.4l-2.5 2.5-2.2-.4-.4-2.2 2.9-2.1z" />,
  refresh: (
    <>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 4v4h-4" />
    </>
  ),
  iot: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 10h4a1 1 0 0 1 1 1v10M3 21h18M8 8h3M8 12h3M8 16h3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18M7 21h10M5 7h14" />
      <path d="M5 7l-3 7a3 3 0 0 0 6 0L5 7zM19 7l-3 7a3 3 0 0 0 6 0l-3-7z" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4.5" />
      <path d="M11.2 11.8L20 3M16 7l3 3M14 9l2 2" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 12l6-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14.5v2.5" />
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

// Position on a circle, in % of the container (angle 0 = 12 o'clock)
function onRing(i, count, radius) {
  const a = ((-90 + (i * 360) / count) * Math.PI) / 180
  return { x: 50 + radius * Math.cos(a), y: 50 + radius * Math.sin(a) }
}

function Head({ eyebrow, title, highlight, dark = false, children }) {
  return (
    <div className="ct-head">
      <span className={`ct-eyebrow${dark ? ' ct-eyebrow--dark' : ''}`}>{eyebrow}</span>
      {title && (
        <h2 className="ct-head__title">
          {title} <span className={dark ? 'ct-highlight--dark' : 'ct-highlight'}>{highlight}</span>
        </h2>
      )}
      {children}
    </div>
  )
}

/* ---------- 1. Banner ---------- */
function CyberHero() {
  const d = cyberTrust

  return (
    <section className="ct-hero">
      <div className="container-xl ct-hero__inner">
        <div className="ct-hero__text">
          <span className="ct-eyebrow ct-hero__badge">{d.eyebrow}</span>
          <h1 className="ct-hero__title">
            {d.title} <span className="ct-highlight">{d.highlight}</span>
          </h1>

          <p className="ct-hero__lead">{d.lead}</p>
          <ul className="ct-hero__every">
            {d.everything.map((e, i) => (
              <li key={e} style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                {e}
              </li>
            ))}
          </ul>

          {d.intro.map((p) => (
            <p key={p} className="ct-hero__intro">
              {p}
            </p>
          ))}

          <p className="ct-hero__tagline">
            {d.tagline.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </p>

          <Link to={d.cta.href} className="ct-btn">
            {d.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Shield at the centre, every connection verified in turn */}
        <div className="ct-orbit" aria-hidden="true">
          <svg className="ct-orbit__lines" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" className="ct-orbit__ring" />
            <circle cx="50" cy="50" r="27" className="ct-orbit__ring ct-orbit__ring--inner" />
            {d.orbit.map((n, i) => {
              const p = onRing(i, d.orbit.length, 40)
              return (
                <line
                  key={n.label}
                  x1={p.x}
                  y1={p.y}
                  x2="50"
                  y2="50"
                  className="ct-orbit__spoke"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              )
            })}
          </svg>

          <span className="ct-orbit__scan" />

          <div className="ct-orbit__shield">
            <Icon name="lock" />
          </div>

          {d.orbit.map((n, i) => {
            const p = onRing(i, d.orbit.length, 40)
            return (
              <div
                key={n.label}
                className="ct-orbit__node"
                style={{ left: `${p.x}%`, top: `${p.y}%`, '--d': `${i}s`, '--in': `${0.4 + i * 0.1}s` }}
              >
                <span className="ct-orbit__icon">
                  <Icon name={n.icon} />
                </span>
                <span className="ct-orbit__label">{n.label}</span>
                <span className="ct-orbit__ok">Verified</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- 2. Security Begins With Knowing ---------- */
function CyberKnowing() {
  const k = cyberTrust.knowing
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`ct-know${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <div className="ct-know__grid">
          <div className="ct-know__text">
            <Head eyebrow={k.eyebrow} title={k.title} highlight={k.highlight} />
            <p className="ct-lead">{k.lead}</p>
            <p className="ct-know__surface">{k.surface}</p>
            <p className="ct-body">{k.closing}</p>
          </div>

          {/* Live feed: each change adds to the attack surface */}
          <div className="ct-feed" aria-hidden="true">
            <div className="ct-feed__head">
              <span>Attack Surface</span>
              <span className="ct-live">
                <span className="ct-live__dot" /> Changing
              </span>
            </div>
            <ul className="ct-feed__list">
              {k.changes.map((c, i) => (
                <li key={c.text} style={{ animationDelay: `${0.3 + i * 0.35}s` }}>
                  <span className="ct-feed__icon">
                    <Icon name={c.icon} />
                  </span>
                  {c.text}
                  <span className="ct-feed__tag">+ exposure</span>
                </li>
              ))}
            </ul>
            <div className="ct-feed__meter">
              <span>Exposure</span>
              <span className="ct-feed__bar">
                <span />
              </span>
            </div>
          </div>
        </div>

        <ol className="ct-steps">
          {k.steps.map((s, i) => (
            <li key={s} style={{ animationDelay: `${0.4 + i * 0.15}s` }}>
              <span className="ct-steps__num">{String(i + 1).padStart(2, '0')}</span>
              {s}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- 3. VAPT ---------- */
function CyberVapt() {
  const v = cyberTrust.vapt
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`ct-vapt${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={v.eyebrow} title={v.title} highlight={v.highlight} dark />

        <div className="ct-vapt__grid">
          <div className="ct-vapt__left">
            <div className="ct-report" aria-hidden="true">
              <div className="ct-report__head">
                <Icon name="app" /> vulnerability-report.pdf
              </div>
              <span className="ct-report__line ct-report__line--crit" />
              <span className="ct-report__line ct-report__line--high" />
              <span className="ct-report__line" />
              <span className="ct-report__line ct-report__line--short" />
            </div>
            <p className="ct-vapt__report">{v.report}</p>

            <div className="ct-vapt__question">
              <span>{v.questionLabel}</span>
              <p>{v.question}</p>
            </div>
          </div>

          <div className="ct-vapt__right">
            <ol className="ct-pipe">
              <span className="ct-pipe__track" aria-hidden="true">
                <span className="ct-pipe__fill" />
              </span>
              {v.stages.map((s, i) => (
                <li key={s.title} style={{ '--d': `${0.4 + i * 0.35}s` }}>
                  <span className="ct-pipe__icon">
                    <Icon name={s.icon} />
                  </span>
                  <span className="ct-pipe__num">{String(i + 1).padStart(2, '0')}</span>
                  <strong>{s.title}</strong>
                </li>
              ))}
            </ol>
            <p className="ct-vapt__text">{v.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- 4. Your Perimeter Has Changed ---------- */
function CyberPerimeter() {
  const p = cyberTrust.perimeter
  const [ref, inView] = useInView(0.25)
  const count = p.nodes.length
  const pts = p.nodes.map((_, i) => onRing(i, count, 40))

  return (
    <section ref={ref} className={`ct-peri${inView ? ' is-in' : ''}`}>
      <div className="container-xl ct-peri__grid">
        <div className="ct-peri__text">
          <Head eyebrow={p.eyebrow} title={p.title} highlight={p.highlight} />
          <p className="ct-lead">{p.lead}</p>
          <p className="ct-peri__span">{p.spanLabel}</p>
          <ol className="ct-peri__chain">
            {p.nodes.map((n) => (
              <li key={n.label}>{n.label}</li>
            ))}
          </ol>
          <p className="ct-body">{p.text}</p>
        </div>

        {/* The old perimeter is a small ring; the enterprise now lives far outside it */}
        <div className="ct-web" aria-hidden="true">
          <svg className="ct-web__lines" viewBox="0 0 100 100">
            {pts.map((a, i) => {
              const b = pts[(i + 1) % count]
              const c = pts[(i + 3) % count]
              return (
                <g key={i}>
                  <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} className="ct-web__link" style={{ animationDelay: `${i * 0.15}s` }} />
                  <line x1={a.x} y1={a.y} x2={c.x} y2={c.y} className="ct-web__chord" />
                </g>
              )
            })}
          </svg>

          <div className="ct-web__old">
            <Icon name="lock" />
            <span>{p.oldPerimeter}</span>
          </div>

          {p.nodes.map((n, i) => (
            <div
              key={n.label}
              className="ct-web__node"
              style={{ left: `${pts[i].x}%`, top: `${pts[i].y}%`, animationDelay: `${i * 0.08}s` }}
            >
              <span className="ct-web__icon">
                <Icon name={n.icon} />
              </span>
              <span className="ct-web__label">{n.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 5. Zero Trust ---------- */
function CyberZeroTrust() {
  const z = cyberTrust.zeroTrust
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`ct-zt${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={z.eyebrow} title={z.title} highlight={z.highlight}>
          <p className="ct-head__text">{z.text}</p>
        </Head>

        {/* An access request passes every checkpoint, left to right */}
        <ol className="ct-gates" style={{ '--n': z.principles.length }}>
          <span className="ct-gates__track" aria-hidden="true">
            <span className="ct-gates__token">
              <Icon name="key" />
            </span>
          </span>
          {z.principles.map((g, i) => (
            <li key={g.title} className="ct-gate" style={{ '--d': `${i}s`, '--in': `${0.2 + i * 0.12}s` }}>
              <span className="ct-gate__icon">
                <Icon name={g.icon} />
              </span>
              <span className="ct-gate__num">{String(i + 1).padStart(2, '0')}</span>
              <strong>{g.title}</strong>
              <p>{g.text}</p>
            </li>
          ))}
        </ol>

        <p className="ct-zt__closing">{z.closing}</p>
      </div>
    </section>
  )
}

/* ---------- 6. Security for the Connected Enterprise ---------- */
function CyberEnvironments() {
  const e = cyberTrust.environments
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} className={`ct-env${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={e.eyebrow} title={e.title} highlight={e.highlight} />

        <ul className="ct-env__grid">
          {e.items.map((item, i) => (
            <li key={item.title} className="ct-env__card" style={{ animationDelay: `${i * 0.09}s` }}>
              <span className="ct-env__scan" aria-hidden="true" />
              <div className="ct-env__top">
                <span className={`ct-env__icon${i % 2 ? ' ct-env__icon--alt' : ''}`}>
                  <Icon name={item.icon} />
                </span>
                <span className="ct-env__badge" aria-hidden="true">
                  <Icon name="shield" />
                </span>
              </div>
              <h3 className="ct-env__title">{item.title}</h3>
              <p className="ct-env__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- 7. Security That Keeps Watching ---------- */
function CyberWatching() {
  const w = cyberTrust.watching
  const [ref, inView] = useInView(0.25)
  const count = w.steps.length

  return (
    <section ref={ref} className={`ct-soc${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <div className="ct-soc__panel">
          <div className="ct-soc__text">
            <Head eyebrow={w.eyebrow} title={w.title} highlight={w.highlight} dark />
            <p className="ct-soc__lead">{w.lead}</p>
            <p className="ct-soc__body">{w.text}</p>

            <ol className="ct-soc__list">
              {w.steps.map((s, i) => (
                <li key={s.title} style={{ '--d': `${i}s` }}>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Radar sweep: each stage lights as the beam passes it */}
          <div className="ct-radar" aria-hidden="true">
            <span className="ct-radar__rings" />
            <span className="ct-radar__sweep" />
            <span className="ct-radar__blip" style={{ left: '34%', top: '38%' }} />
            <span className="ct-radar__blip" style={{ left: '62%', top: '58%', animationDelay: '1.6s' }} />
            <span className="ct-radar__blip" style={{ left: '44%', top: '66%', animationDelay: '3.1s' }} />
            <span className="ct-radar__core">24×7</span>

            {w.steps.map((s, i) => {
              const p = onRing(i, count, 44)
              return (
                <div
                  key={s.title}
                  className="ct-radar__node"
                  style={{ left: `${p.x}%`, top: `${p.y}%`, '--d': `${i}s` }}
                >
                  <span className="ct-radar__icon">
                    <Icon name={s.icon} />
                  </span>
                  <span className="ct-radar__label">{s.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- 8. From Security Posture to Digital Trust ---------- */
function CyberTrustPillars() {
  const t = cyberTrust.trust
  const [ref, inView] = useInView(0.2)
  const half = Math.ceil(t.pillars.length / 2)

  const card = (p, i) => (
    <li key={p.title} className="ct-trust__card" style={{ animationDelay: `${i * 0.1}s` }}>
      <span className={`ct-trust__icon${i % 2 ? ' ct-trust__icon--alt' : ''}`}>
        <Icon name={p.icon} />
      </span>
      <div>
        <strong>{p.title}</strong>
        <span>{p.text}</span>
      </div>
    </li>
  )

  return (
    <section ref={ref} className={`ct-trust${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={t.eyebrow} title={t.title} highlight={t.highlight}>
          <p className="ct-head__text">{t.text}</p>
          <p className="ct-head__text ct-head__text--strong">{t.through}</p>
        </Head>

        <div className="ct-trust__layout">
          <ul className="ct-trust__col ct-trust__col--left">{t.pillars.slice(0, half).map((p, i) => card(p, i))}</ul>

          <div className="ct-trust__core" aria-hidden="true">
            <span className="ct-trust__halo" />
            <span className="ct-trust__halo" style={{ animationDelay: '1.5s' }} />
            <svg viewBox="0 0 24 24" className="ct-trust__shield">
              <path d="M12 2.5l8.5 3.2v6.1c0 5.3-3.7 8.6-8.5 9.7-4.8-1.1-8.5-4.4-8.5-9.7V5.7L12 2.5z" />
            </svg>
            <span className="ct-trust__core-text">{t.center}</span>
          </div>

          <ul className="ct-trust__col ct-trust__col--right">
            {t.pillars.slice(half).map((p, i) => card(p, i + half))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- 9. Security That Evolves ---------- */
function CyberEvolves() {
  const e = cyberTrust.evolves
  const [ref, inView] = useInView(0.3)
  const n = e.additions.length

  return (
    <section ref={ref} className={`ct-evo${inView ? ' is-in' : ''}`}>
      <div className="container-xl ct-evo__grid">
        <div className="ct-evo__text">
          <Head eyebrow={e.eyebrow} title={e.title} highlight={e.highlight} />
          <p className="ct-body">{e.text}</p>
        </div>

        {/* As the business grows, the security line rises with it */}
        <div className="ct-evo__chart" aria-hidden="true">
          <div className="ct-evo__bars">
            {e.additions.map((a, i) => (
              <div key={a} className="ct-evo__col" style={{ '--h': `${30 + (i * 70) / (n - 1)}%`, '--d': `${0.3 + i * 0.18}s` }}>
                <span className="ct-evo__bar">
                  <span className="ct-evo__guard">
                    <Icon name="shield" />
                  </span>
                </span>
                <span className="ct-evo__label">+ {a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- 10. Closing call to action ---------- */
function CyberFinal() {
  const f = cyberTrust.final
  const [ref, inView] = useInView(0.3)

  return (
    <section ref={ref} className={`ct-final${inView ? ' is-in' : ''}`}>
      <img src={earthBg} alt="" className="ct-final__bg" aria-hidden="true" />
      <div className="container-xl ct-final__content">
        <h2 className="ct-final__title">
          {f.title}
          <span className="ct-highlight--dark">{f.highlight}</span>
        </h2>
        <p className="ct-final__text">{f.text}</p>

        <ul className="ct-final__words">
          {f.words.map((w, i) => (
            <li key={w} style={{ animationDelay: `${0.3 + i * 0.2}s` }}>
              {w}
            </li>
          ))}
        </ul>

        <Link to={f.cta.href} className="ct-btn ct-btn--gold">
          {f.cta.label}
          <span aria-hidden="true">→</span>
        </Link>

        <p className="ct-final__sig">{f.signature}</p>
      </div>
    </section>
  )
}

export default function CyberTrust() {
  return (
    <>
      <CyberHero />
      <CyberKnowing />
      <CyberVapt />
      <CyberPerimeter />
      <CyberZeroTrust />
      <CyberEnvironments />
      <CyberWatching />
      <CyberTrustPillars />
      <CyberEvolves />
      <CyberFinal />
    </>
  )
}
