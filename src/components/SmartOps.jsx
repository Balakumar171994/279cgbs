import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'
import { smartOps } from '../data'
import smartLogo from '../assets/products/smartops-logo.png'
import './SmartOps.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  service: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14h3v5H5a1 1 0 0 1-1-1v-4zM20 14h-3v5h2a1 1 0 0 0 1-1v-4z" />
    </>
  ),
  asset: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  pulse: <path d="M3 12h4l2-5 4 10 2-5h6" />,
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v3M12 18.5v3M4.2 5.6l2.1 2.1M17.7 16.3l2.1 2.1M2.5 12h3M18.5 12h3M4.2 18.4l2.1-2.1M17.7 7.7l2.1-2.1" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-5 3 3 5-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  ticket: (
    <>
      <path d="M3 8a2 2 0 0 0 0 4v4h18v-4a2 2 0 0 1 0-4V4H3v4z" transform="translate(0 2)" />
      <path d="M9 8v8" />
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
    <div className={`so-head${left ? ' so-head--left' : ''}`}>
      {eyebrow && <span className={`so-eyebrow${dark ? ' so-eyebrow--dark' : ''}`}>{eyebrow}</span>}
      {title && (
        <h2 className="so-head__title">
          {title} <span className={dark ? 'so-highlight--dark' : 'so-highlight'}>{highlight}</span>
        </h2>
      )}
      {children}
    </div>
  )
}

/* ---------- 1. Banner ---------- */
function SmartHero() {
  const d = smartOps

  return (
    <section className="so-hero">
      <div className="container-xl so-hero__inner">
        <div className="so-hero__text">
          <img src={smartLogo} alt="SMARTOPS" className="so-hero__logo" />
          <span className="so-eyebrow so-hero__badge">{d.eyebrow}</span>

          <h1 className="so-hero__title">
            {d.title} <span className="so-highlight">{d.highlight}</span>
          </h1>
          <p className="so-hero__lead">{d.lead}</p>
          <p className="so-hero__intro">{d.intro}</p>

          <ul className="so-hero__tagline">
            {d.tagline.map((t, i) => (
              <li key={t} style={{ animationDelay: `${0.8 + i * 0.1}s` }}>
                {t}
              </li>
            ))}
          </ul>

          <div className="so-hero__ctas">
            <a href={d.primaryCta.href} className="so-btn">
              {d.primaryCta.label}
              <span aria-hidden="true">↓</span>
            </a>
            <Link to={d.secondaryCta.href} className="so-btn so-btn--ghost">
              {d.secondaryCta.label}
            </Link>
          </div>
        </div>

        {/* People, processes, technology and insights feed one platform with three pillars */}
        <div className="so-hub" aria-hidden="true">
          <ul className="so-hub__inputs">
            {d.connects.map((c, i) => (
              <li key={c} style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                {c}
                <span className="so-hub__drop">
                  <i style={{ animationDelay: `${i * 0.3}s` }} />
                </span>
              </li>
            ))}
          </ul>

          <div className="so-hub__core">
            <img src={smartLogo} alt="" />
            <span>One intelligent layer</span>
          </div>

          <div className="so-hub__branches">
            <span />
            <span />
            <span />
          </div>

          <div className="so-hub__pillars">
            <div className="so-hub__pillar">
              <strong>ITSM</strong>
              <span className="so-hub__ticket">
                <Icon name="ticket" />
                <span className="so-hub__ticket-state">
                  <b>Open</b>
                  <b>Resolved</b>
                </span>
              </span>
            </div>
            <div className="so-hub__pillar">
              <strong>ITAM</strong>
              <span className="so-hub__assets">
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="so-hub__pillar">
              <strong>ITOM</strong>
              <svg viewBox="0 0 80 24" className="so-hub__pulse">
                <path d="M0 12 H22 L28 4 L34 20 L40 8 L44 12 H80" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- 2. From IT Management to Intelligent Operations ---------- */
function SmartIntelligent() {
  const s = smartOps.intelligent
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`so-int${inView ? ' is-in' : ''}`}>
      <div className="container-xl so-int__grid">
        <div>
          <Head eyebrow={s.eyebrow} left />
          <p className="so-lead">{s.text}</p>
          <p className="so-body so-body--strong">{s.closing}</p>
        </div>

        {/* Moving parts → one platform → clear answers */}
        <div className="so-clarity" aria-hidden="true">
          <ul className="so-clarity__parts">
            {s.parts.map((p, i) => (
              <li key={p} style={{ '--r': `${(i % 3) - 1}`, animationDelay: `${i * 0.3}s` }}>
                {p}
              </li>
            ))}
          </ul>
          <span className="so-clarity__arrow" />
          <div className="so-clarity__core">
            <img src={smartLogo} alt="" />
          </div>
          <span className="so-clarity__arrow" />
          <ol className="so-clarity__answers">
            {s.answers.map((a, i) => (
              <li key={a} style={{ '--d': `${i * 1.2}s` }}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {a}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ---------- 3. Three pillars ---------- */
function PillarVisual({ v }) {
  if (v.type === 'lifecycle') {
    // A ticket hops across the board: request → resolve → track → manage
    return (
      <div className="so-v-board">
        {v.steps.map((s) => (
          <div key={s} className="so-v-board__col">
            <span>{s}</span>
          </div>
        ))}
        <span className="so-v-board__card">
          <Icon name="ticket" />
        </span>
      </div>
    )
  }
  if (v.type === 'asset') {
    return (
      <div className="so-v-asset">
        <div className="so-v-asset__head">
          <span className="so-v-asset__icon">
            <Icon name="asset" />
          </span>
          <span className="so-v-asset__lines">
            <i />
            <i />
          </span>
        </div>
        <ul>
          {v.fields.map((f, i) => (
            <li key={f} style={{ '--d': `${0.4 + i * 0.3}s` }}>
              <span>{f}</span>
              <span className="so-v-asset__bar">
                <i />
              </span>
            </li>
          ))}
        </ul>
        <div className="so-v-asset__life">
          <span>{v.from}</span>
          <span className="so-v-asset__track">
            <i />
          </span>
          <span>{v.to}</span>
        </div>
      </div>
    )
  }
  return (
    <div className="so-v-events">
      <ul>
        {v.sources.map((s, i) => (
          <li key={s}>
            <span className="so-v-events__src">{s}</span>
            <span className="so-v-events__wire">
              <i style={{ animationDelay: `${i * 0.4}s` }} />
              <i style={{ animationDelay: `${1 + i * 0.4}s` }} />
            </span>
          </li>
        ))}
      </ul>
      <div className="so-v-events__layer">
        <span>{v.layer}</span>
      </div>
    </div>
  )
}

function SmartPillar({ p, index }) {
  const [ref, inView] = useInView(0.2)

  return (
    <article
      ref={ref}
      id={p.id}
      className={`so-pillar${index % 2 ? ' so-pillar--flip' : ''}${inView ? ' is-in' : ''}`}
    >
      <div className="so-pillar__content">
        <div className="so-pillar__tagrow">
          <span className="so-pillar__tag">{p.tag}</span>
          <span className="so-pillar__name">{p.name}</span>
        </div>
        <h3 className="so-pillar__title">{p.title}</h3>
        <p className="so-pillar__lead">{p.lead}</p>
        <p className="so-pillar__text">{p.text}</p>

        <span className="so-pillar__caplabel">Capabilities</span>
        <ul className="so-pillar__caps">
          {p.capabilities.map((c, i) => (
            <li key={c} style={{ animationDelay: `${0.2 + i * 0.07}s` }}>
              <span className="so-pillar__check">
                <Icon name="check" />
              </span>
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="so-pillar__side">
        <div className="so-pillar__visual" aria-hidden="true">
          <PillarVisual v={p.visual} />
        </div>
        <div className="so-pillar__outcome">
          <span>Outcome</span>
          <p>
            {p.outcome.map((o) => (
              <b key={o}>{o}</b>
            ))}
          </p>
        </div>
      </div>
    </article>
  )
}

function SmartPillars() {
  const d = smartOps

  return (
    <section id="pillars" className="so-pillars">
      <div className="container-xl">
        <Head title={d.pillarsTitle} highlight={d.pillarsHighlight}>
          <ul className="so-pillars__jump">
            {d.pillars.map((p) => (
              <li key={p.id}>
                <a href={`#${p.id}`}>{p.tag}</a>
              </li>
            ))}
          </ul>
        </Head>

        <div className="so-pillars__list">
          {d.pillars.map((p, i) => (
            <SmartPillar key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 4. From Reactive IT to Proactive IT ---------- */
function SmartProactive() {
  const r = smartOps.proactive
  const [ref, inView] = useInView(0.3)

  return (
    <section ref={ref} className={`so-pro${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head eyebrow={r.eyebrow} dark>
          <p className="so-pro__lead">{r.lead}</p>
          <p className="so-pro__shift">{r.shift}</p>
        </Head>

        <div className="so-shift" aria-hidden="true">
          <ol className="so-shift__steps" style={{ '--n': r.steps.length }}>
            <span className="so-shift__track">
              <span className="so-shift__runner" />
            </span>
            {r.steps.map((s, i) => (
              <li key={s} style={{ '--d': `${i}s` }}>
                <span className="so-shift__num">{String(i + 1).padStart(2, '0')}</span>
                {s}
              </li>
            ))}
          </ol>
        </div>

        <p className="so-pro__text">{r.text}</p>
      </div>
    </section>
  )
}

/* ---------- 5. One Digital Operations Platform. Multiple Possibilities. ---------- */
function SmartPossibilities() {
  const p = smartOps.possibilities
  const [ref, inView] = useInView(0.2)
  const half = Math.ceil(p.rows.length / 2)

  const card = (row, i) => (
    <li key={row.fn} className="so-poss__card" style={{ '--d': `${i * 0.8}s`, animationDelay: `${0.2 + i * 0.1}s` }}>
      <span className={`so-poss__icon${i % 2 ? ' so-poss__icon--alt' : ''}`}>
        <Icon name={row.icon} />
      </span>
      <div>
        <span className="so-poss__fn">{row.fn}</span>
        <p className="so-poss__helps">{row.helps}</p>
      </div>
    </li>
  )

  return (
    <section ref={ref} className={`so-poss${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head title={p.eyebrow} highlight={p.highlight}>
          <p className="so-poss__legend">
            <span>{p.colFunction}</span>
            <b aria-hidden="true">→</b>
            <span>{p.colHelps}</span>
          </p>
        </Head>

        <div className="so-poss__layout">
          <ul className="so-poss__col so-poss__col--left">{p.rows.slice(0, half).map((r, i) => card(r, i))}</ul>

          <div className="so-poss__core" aria-hidden="true">
            <span className="so-poss__ring" />
            <span className="so-poss__ring so-poss__ring--2" />
            <div className="so-poss__disc">
              <img src={smartLogo} alt="" />
              <span>Digital Operations Platform</span>
            </div>
          </div>

          <ul className="so-poss__col so-poss__col--right">
            {p.rows.slice(half).map((r, i) => card(r, i + half))}
          </ul>
        </div>

        {/* Same content as a plain table for screen readers */}
        <table className="so-sr-only">
          <caption>
            {p.eyebrow} {p.highlight}
          </caption>
          <thead>
            <tr>
              <th scope="col">{p.colFunction}</th>
              <th scope="col">{p.colHelps}</th>
            </tr>
          </thead>
          <tbody>
            {p.rows.map((r) => (
              <tr key={r.fn}>
                <th scope="row">{r.fn}</th>
                <td>{r.helps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

/* ---------- 6. Make Every IT Signal Count ---------- */
function SmartSignal() {
  const s = smartOps.signal
  const [ref, inView] = useInView(0.25)

  return (
    <section ref={ref} className={`so-sig${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <h2 className="so-sig__title">
          {s.title} <span className="so-highlight--dark">{s.highlight}</span>
        </h2>
        <p className="so-sig__text">{s.text}</p>

        {/* Signals in → platform → outcomes out */}
        <div className="so-flow" aria-hidden="true">
          <ul className="so-flow__in">
            {s.inputs.map((x, i) => (
              <li key={x} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                {x}
                <span className="so-flow__wire">
                  <i style={{ animationDelay: `${i * 0.35}s` }} />
                </span>
              </li>
            ))}
          </ul>
          <div className="so-flow__core">
            <img src={smartLogo} alt="" />
          </div>
          <ul className="so-flow__out">
            {s.outputs.map((x, i) => (
              <li key={x} style={{ animationDelay: `${0.6 + i * 0.12}s` }}>
                <span className="so-flow__wire so-flow__wire--out">
                  <i style={{ animationDelay: `${0.6 + i * 0.4}s` }} />
                </span>
                {x}
              </li>
            ))}
          </ul>
        </div>

        <p className="so-sig__closing">{s.closing}</p>
        <p className="so-sig__verbs">
          {s.verbs.map((v) => (
            <span key={v}>{v}</span>
          ))}
        </p>

        <div className="so-sig__ctas">
          <a href={smartOps.primaryCta.href} className="so-btn so-btn--gold">
            {smartOps.primaryCta.label}
            <span aria-hidden="true">↑</span>
          </a>
          <Link to={smartOps.secondaryCta.href} className="so-btn so-btn--light">
            {smartOps.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function SmartOps() {
  return (
    <>
      <SmartHero />
      <SmartIntelligent />
      <SmartPillars />
      <SmartProactive />
      <SmartPossibilities />
      <SmartSignal />
    </>
  )
}
