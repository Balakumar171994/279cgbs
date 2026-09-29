import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'
import { digitalWorkplace } from '../data'
import './DigitalWorkplace.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.3c2.1.7 3.5 2.8 3.5 5.7" />
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
  apps: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.3-4.3" />
    </>
  ),
  repeat: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5" />
      <path d="M20 4v4.5h-4.5" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.5" />
      <path d="M4 20v-4.5h4.5" />
    </>
  ),
  switch: (
    <>
      <path d="M4 7h14l-3-3M20 17H6l3 3" />
    </>
  ),
  question: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20l4-1 11-11a2.1 2.1 0 0 0-3-3L5 16l-1 4z" />
      <path d="M14 6l3 3" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v3M12 18.5v3M4.2 5.6l2.1 2.1M17.7 16.3l2.1 2.1M2.5 12h3M18.5 12h3M4.2 18.4l2.1-2.1M17.7 7.7l2.1-2.1" />
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
  inbox: (
    <>
      <path d="M3 13l3-8h12l3 8v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z" />
      <path d="M3 13h5l1.5 2.5h5L16 13h5" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-5 4V5z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  blocks: (
    <>
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
      <rect x="8" y="3" width="8" height="8" rx="1.5" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6l8.5 7 8.5-7" />
    </>
  ),
  sheet: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M4 9h16M4 15h16M10 3v18" />
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
    <div className={`dw-head${left ? ' dw-head--left' : ''}`}>
      {eyebrow && <span className={`dw-eyebrow${dark ? ' dw-eyebrow--dark' : ''}`}>{eyebrow}</span>}
      {title && (
        <h2 className="dw-head__title">
          {title} <span className={dark ? 'dw-highlight--dark' : 'dw-highlight'}>{highlight}</span>
        </h2>
      )}
      {children}
    </div>
  )
}

const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- 1. Banner ---------- */
// Snake-shaped route (viewBox 480 x 400): three rows joined by half-circle turns
const ROUTE = 'M50 330 H360 A65 65 0 0 0 360 200 H110 A65 65 0 0 1 110 70 H430'
const ROUTE_SECONDS = 6
// Where each stop sits, and how far along the route (0–1) the token reaches it
const STOPS = [
  { x: 230, y: 330, at: 0.14 },
  { x: 300, y: 200, at: 0.45 },
  { x: 160, y: 200, at: 0.55 },
  { x: 250, y: 70, at: 0.86 },
]

function WorkHero() {
  const d = digitalWorkplace

  return (
    <section className="dw-hero">
      <div className="container-xl dw-hero__inner">
        <div className="dw-hero__text">
          <span className="dw-eyebrow dw-hero__badge">{d.eyebrow}</span>
          <h1 className="dw-hero__title">
            {d.title} <span className="dw-highlight">{d.highlight}</span>
          </h1>
          <p className="dw-hero__sub">{d.subtitle}</p>
          {d.intro.map((p, i) => (
            <p key={p} className={i === 0 ? 'dw-hero__lead' : 'dw-hero__intro'}>
              {p}
            </p>
          ))}

          <ul className="dw-hero__tagline">
            {d.tagline.map((t, i) => (
              <li key={t} style={{ animationDelay: `${0.9 + i * 0.12}s` }}>
                {t}
              </li>
            ))}
          </ul>

          <Link to={d.cta.href} className="dw-btn">
            {d.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* A work item flows from intent to action, through people, processes, apps and AI */}
        <div className="dw-route" aria-hidden="true">
          <svg viewBox="0 0 480 400" className="dw-route__svg">
            <path d={ROUTE} className="dw-route__base" />
            <path d={ROUTE} className="dw-route__flow" />

            <g className="dw-route__end">
              <rect x="14" y="310" width="72" height="40" rx="20" />
              <text x="50" y="335" textAnchor="middle">
                {d.pathStart}
              </text>
            </g>
            <g className="dw-route__end dw-route__end--done">
              <rect x="390" y="50" width="80" height="40" rx="20" />
              <text x="430" y="75" textAnchor="middle">
                {d.pathEnd}
              </text>
            </g>

            {d.path.map((stop, i) => {
              const s = STOPS[i]
              return (
                <g
                  key={stop.label}
                  className="dw-route__stop"
                  style={{ '--d': `${(s.at * ROUTE_SECONDS).toFixed(2)}s` }}
                >
                  <circle cx={s.x} cy={s.y} r="26" />
                  <svg x={s.x - 12} y={s.y - 12} width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {icons[stop.icon]}
                    </g>
                  </svg>
                  <text x={s.x} y={s.y + (s.y === 70 ? -36 : 46)} textAnchor="middle">
                    {stop.label}
                  </text>
                </g>
              )
            })}

            {!reduceMotion && (
              <g className="dw-route__token">
                <circle r="11" />
                <circle r="4" className="dw-route__token-core" />
                <animateMotion dur={`${ROUTE_SECONDS}s`} repeatCount="indefinite" path={ROUTE} />
              </g>
            )}
          </svg>
        </div>
      </div>
    </section>
  )
}

/* ---------- 2. Where Work Gets Stuck ---------- */
function WorkFriction() {
  const f = digitalWorkplace.friction
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`dw-fric${inView ? ' is-in' : ''}`}>
      <div className="container-xl dw-fric__grid">
        <div>
          <Head title={f.title} highlight={f.highlight} left />
          <p className="dw-lead">{f.lead}</p>
          <p className="dw-body dw-body--strong">{f.closing}</p>
        </div>

        {/* Each stuck moment gets unblocked, one after another */}
        <ul className="dw-fric__list">
          {f.items.map((item, i) => (
            <li key={item.text} style={{ '--d': `${i * 1.2}s`, '--in': `${0.2 + i * 0.12}s` }}>
              <span className="dw-fric__icon">
                <Icon name={item.icon} />
              </span>
              <span className="dw-fric__text">{item.text}</span>
              <span className="dw-fric__status" aria-hidden="true">
                <span className="dw-fric__stuck">{f.stuck}</span>
                <span className="dw-fric__moving">{f.moving}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- 3. The New Way Work Moves ---------- */
const PHASE_MS = 5000

function WorkPhases() {
  const p = digitalWorkplace.phases
  const [ref, inView] = useInView(0.25)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  // Step through the phases until the visitor picks one
  useEffect(() => {
    if (!inView || paused || reduceMotion) return
    const id = setInterval(() => setActive((a) => (a + 1) % p.items.length), PHASE_MS)
    return () => clearInterval(id)
  }, [inView, paused, p.items.length])

  const current = p.items[active]

  return (
    <section ref={ref} className={`dw-phase${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={p.eyebrow} />

        <div className="dw-stepper" role="tablist" style={{ '--n': p.items.length, '--i': active }}>
          <span className="dw-stepper__track" aria-hidden="true">
            <span className="dw-stepper__fill" />
          </span>
          {p.items.map((item, i) => (
            <button
              key={item.verb}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`dw-stepper__btn${i === active ? ' is-active' : ''}${i < active ? ' is-done' : ''}`}
              onClick={() => {
                setActive(i)
                setPaused(true)
              }}
            >
              <span className="dw-stepper__icon">
                <Icon name={item.icon} />
              </span>
              <span className="dw-stepper__verb">{item.verb}</span>
            </button>
          ))}
        </div>

        <article key={current.verb} className="dw-phase__panel" role="tabpanel">
          <span className="dw-phase__watermark" aria-hidden="true">
            {current.verb}
          </span>
          <div className="dw-phase__main">
            <span className="dw-phase__step">
              {String(active + 1).padStart(2, '0')} · {current.verb}
            </span>
            <h3>{current.title}</h3>
            <p>{current.text}</p>
          </div>
          <ul className="dw-phase__tags">
            {current.tags.map((t, i) => (
              <li key={t} style={{ animationDelay: `${0.15 + i * 0.07}s` }}>
                {t}
              </li>
            ))}
          </ul>
          {!paused && !reduceMotion && <span className="dw-phase__timer" aria-hidden="true" />}
        </article>
      </div>
    </section>
  )
}

/* ---------- 4. From Clicks to Outcomes ---------- */
function WorkJourney() {
  const j = digitalWorkplace.journey
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`dw-jour${inView ? ' is-in' : ''}`}>
      <div className="container-xl dw-jour__grid">
        <div>
          <Head eyebrow={j.eyebrow} left />
          <p className="dw-lead">{j.lead}</p>
          <p className="dw-jour__whole">{j.text}</p>
          <div className="dw-jour__result">
            <span>{j.result}</span>
            <strong>{j.resultStrong}</strong>
          </div>
        </div>

        <ol className="dw-jour__steps" style={{ '--n': j.steps.length }}>
          <span className="dw-jour__rail" aria-hidden="true">
            <span className="dw-jour__token" />
          </span>
          {j.steps.map((s, i) => (
            <li
              key={s.label}
              className={i === j.steps.length - 1 ? 'is-outcome' : ''}
              style={{ '--d': `${i}s`, '--in': `${0.2 + i * 0.12}s` }}
            >
              <span className="dw-jour__icon">
                <Icon name={s.icon} />
              </span>
              <span className="dw-jour__num">{String(i + 1).padStart(2, '0')}</span>
              <strong>{s.label}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- 5. One Workplace. Many Possibilities. ---------- */
function WorkPossibilities() {
  const w = digitalWorkplace.workplace
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} className={`dw-poss${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <ul className="dw-poss__grid">
          <li className="dw-poss__hub">
            <span className="dw-eyebrow dw-eyebrow--dark">{w.eyebrow}</span>
            <strong>{w.hub}.</strong>
            <span className="dw-poss__hub-sub">{w.hubSub}.</span>
            <span className="dw-poss__orbit" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </li>
          {w.items.map((item, i) => (
            <li key={item.title} className="dw-poss__card" style={{ animationDelay: `${0.1 + i * 0.07}s` }}>
              <span className={`dw-poss__icon${i % 2 ? ' dw-poss__icon--alt' : ''}`}>
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- 6. Automation That Starts With People ---------- */
function WorkPeople() {
  const p = digitalWorkplace.people
  const [ref, inView] = useInView(0.3)

  return (
    <section ref={ref} className={`dw-ppl${inView ? ' is-in' : ''}`}>
      <div className="container-xl dw-ppl__grid">
        <div>
          <Head eyebrow={p.eyebrow} left />
          <p className="dw-lead">{p.lead}</p>
          <p className="dw-body">{p.text}</p>
          <p className="dw-ppl__equation">
            {p.circles.map((c, i) => (
              <span key={c}>
                {i > 0 && <b aria-hidden="true">+</b>}
                {c}
              </span>
            ))}
          </p>
          <p className="dw-ppl__not">{p.not}</p>
          <p className="dw-ppl__goal">{p.goal}</p>
        </div>

        {/* Three overlapping circles with people at the centre */}
        <div className="dw-venn" aria-hidden="true">
          {p.circles.map((c, i) => (
            <span key={c} className={`dw-venn__circle dw-venn__circle--${i}`}>
              <span className="dw-venn__label">{c}</span>
            </span>
          ))}
          <span className="dw-venn__center">
            <Icon name="users" />
            {p.center}
          </span>
        </div>
      </div>
    </section>
  )
}

/* ---------- 7. From Digital Workplace to Digital Workforce ---------- */
function WorkWorkforce() {
  const w = digitalWorkplace.workforce
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`dw-force${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={w.eyebrow} dark>
          <p className="dw-force__lead">{w.lead}</p>
        </Head>

        <ol className="dw-eras">
          {w.eras.map((era, i) => (
            <li key={era.when} className={i === w.eras.length - 1 ? 'is-now' : ''} style={{ '--in': `${0.2 + i * 0.25}s` }}>
              <span className="dw-eras__nodes" aria-hidden="true">
                {Array.from({ length: era.nodes }, (_, n) => (
                  <i key={n} />
                ))}
              </span>
              <span className="dw-eras__when">{era.when},</span>
              <p>{era.text}</p>
            </li>
          ))}
        </ol>

        <p className="dw-force__towards">{w.towards}</p>
        <ul className="dw-force__where">
          {w.where.map((item, i) => (
            <li key={item.text} style={{ animationDelay: `${0.9 + i * 0.1}s` }}>
              <span>
                <Icon name={item.icon} />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- 8. Built Around Your Business ---------- */
function WorkOfferings() {
  const o = digitalWorkplace.offerings
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} className={`dw-off${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={o.eyebrow} />
        <ul className="dw-off__grid">
          {o.items.map((item, i) => (
            <li key={item.title} style={{ animationDelay: `${i * 0.06}s` }}>
              <span className={`dw-off__icon${i % 2 ? ' dw-off__icon--alt' : ''}`}>
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

/* ---------- 9. The Canopus Difference ---------- */
function WorkDifference() {
  const d = digitalWorkplace.difference
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} className={`dw-diff${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={d.eyebrow} />

        <ol className="dw-diff__list">
          {d.items.map((item, i) => (
            <li key={item.title} style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="dw-diff__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- 10. Work Should Move Forward ---------- */
function WorkFinal() {
  const f = digitalWorkplace.final
  const [ref, inView] = useInView(0.3)

  return (
    <section ref={ref} className={`dw-final${inView ? ' is-in' : ''}`}>
      <div className="container-xl dw-final__inner">
        <h2 className="dw-final__title">
          {f.title} <span className="dw-highlight--dark">{f.highlight}</span>
        </h2>

        <ul className="dw-final__nots">
          {f.nots.map((n, i) => (
            <li key={n.text} style={{ '--in': `${0.3 + i * 0.25}s` }}>
              <span className="dw-final__icon">
                <Icon name={n.icon} />
              </span>
              <span className="dw-final__not">{n.text}</span>
            </li>
          ))}
        </ul>

        <p className="dw-final__text">{f.text}</p>

        <p className="dw-final__tagline">
          {f.tagline.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </p>

        <Link to={digitalWorkplace.cta.href} className="dw-btn dw-btn--gold">
          {digitalWorkplace.cta.label}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

export default function DigitalWorkplace() {
  return (
    <>
      <WorkHero />
      <WorkFriction />
      <WorkPhases />
      <WorkJourney />
      <WorkPossibilities />
      <WorkPeople />
      <WorkWorkforce />
      <WorkOfferings />
      <WorkDifference />
      <WorkFinal />
    </>
  )
}
