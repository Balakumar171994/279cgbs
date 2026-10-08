import { useState } from 'react'
import useInView from '../hooks/useInView'
import lyraLogo from '../assets/products/Lyra.jpg'
import './Lyra.css'

// Lyra product page. Content comes from the lyra.canopusgbs.com prototype,
// styled to match the other product pages (VegAI, SMARTOPS).

const TOWERS = [
  {
    id: 'smartrun', n: 'SmartRun', tag: 'Run it', ab: 'SR', tone: 'blue',
    d: 'Running the estate day to day, with automation and AI doing the repeatable part. One desk for incidents, self-services, monitoring and controls.',
    mods: ['Desk', 'Self Services', 'Monitor', 'Automations', 'AI Resolution Engine', 'Security & Controls'],
  },
  {
    id: 'consult', n: 'Consult', tag: 'Change it', ab: 'CN', tone: 'navy',
    d: 'Everything that changes the estate. Plan and test the project, read the custom code you already have, then run the right change track.',
    mods: ['Plan & Test', 'Code Atlas'],
    group: { g: 'Change tracks', items: ['Clean Core', 'Upgrade', 'Migrate', 'Rollout'] },
  },
  {
    id: 'innovations', n: 'Innovations', tag: 'Extend it', ab: 'IN', tone: 'gold',
    d: 'Productised side-by-side extensions on BTP. Built once, licensed per tenant, upgraded without touching the core.',
    mods: ['NavisDMS', 'NavisMaster', 'NavisAccess'],
  },
]

const ENVS = [
  {
    id: 'demo', n: 'Demo', sub: 'Seeded', path: 'demo/', sso: false,
    hint: 'Open environment with seeded data. No customer system attached.',
    auth: 'Use your Canopus or demo account',
  },
  {
    id: 'poc', n: 'PoC', sub: 'Scoped', path: 'poc/', sso: false,
    hint: 'Scoped trial against your own system. Credentials are issued per engagement.',
    auth: 'Use the credentials issued for your PoC',
  },
  {
    id: 'prod', n: 'Production', sub: 'Live', path: '', sso: true,
    hint: 'Your live tenant. Access is granted by your own administrator.',
    auth: 'Your company identity provider',
  },
]

const WHY = [
  ['pulse', 'One view of the landscape',
    'Systems, transports, incidents and extensions in one portal, connected to your ABAP and private-cloud systems through SAP Cloud Connector.'],
  ['list', 'Automation you subscribe to',
    'Enabler workflows come from a catalogue with approvals and a run history. You turn one on rather than commission a build.'],
  ['shield', 'Your tenant, your identity',
    'Runs in your own BTP subaccount or the Canopus partner tenant, behind SAP Cloud Identity Services and your role model.'],
  ['spark', 'AI where it earns its place',
    'SAP Joule alongside Canopus-trained models for the high-volume work. Every run is logged against the user who started it.'],
]

const DEPLOY = [
  ['server', 'Your own SAP BTP', 'Customer-hosted', [
    'Runs in your global account, your region, your data residency',
    'Your identity provider, your role collections, your audit log',
    'Canopus operates it under your governance and change process',
    'Your own commercial agreement with SAP for BTP',
  ]],
  ['shield', 'Canopus partner BTP', 'Canopus-hosted', [
    'Live in days — no BTP entitlement needed on day one',
    'Your tenant is isolated: own schema, own identity, own audit log',
    'We run the platform; you run your landscape',
    'Move to your own subaccount later without rebuilding',
  ]],
]

const TRUST = [
  ['SAP Partner', '', true],
  ['SAP BTP Partner', '', true],
  ['ISO/IEC 27001', 'Information security'],
  ['SAP Cloud Identity Services', 'SSO and provisioning'],
  ['Per-tenant audit log', 'Every action, every user'],
  ['Seeded demo data only', 'No customer system in Demo or PoC'],
]

// Line icons (24x24, stroke = currentColor)
const icons = {
  pulse: <path d="M3 12h4l3 8 4-16 3 8h4" />,
  list: <path d="M4 7h16M4 12h10M4 17h7" />,
  shield: <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7z" />,
  spark: <path d="M12 3c.6 4.6 1.8 5.8 6.4 6.4-4.6.6-5.8 1.8-6.4 6.4-.6-4.6-1.8-5.8-6.4-6.4C10.2 8.8 11.4 7.6 12 3zM18.5 15.5c.3 2 .8 2.5 2.5 2.8-1.7.3-2.2.8-2.5 2.7-.3-1.9-.8-2.4-2.5-2.7 1.7-.3 2.2-.8 2.5-2.8z" />,
  server: (
    <>
      <path d="M4 5h16v6H4zM4 13h16v6H4z" />
      <path d="M7.5 8h.01M7.5 16h.01" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.5-1.5" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10.5" width="16" height="10" rx="2" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
    </>
  ),
}

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

function Head({ eyebrow, title, highlight, text, dark = false }) {
  return (
    <div className="ly-head">
      <span className={`ly-eyebrow${dark ? ' ly-eyebrow--dark' : ''}`}>{eyebrow}</span>
      <h2 className="ly-head__title">
        {title} <span className={dark ? 'ly-highlight--dark' : 'ly-highlight'}>{highlight}</span>
      </h2>
      {text && <p className="ly-head__text">{text}</p>}
    </div>
  )
}

/* ---------- Sign-in card (prototype: does not sign anyone in) ---------- */
function AccessCard() {
  const [tower, setTower] = useState('smartrun')
  const [env, setEnv] = useState('demo')
  const [note, setNote] = useState('')
  const e = ENVS.find((x) => x.id === env)

  const go = () => {
    const t = TOWERS.find((x) => x.id === tower).n
    setNote(`Prototype — this would open Lyra ${t} in ${e.n}.`)
  }

  const creds = (
    <>
      <input className="ly-input" type="email" autoComplete="username" placeholder="name@company.com" aria-label="Email" />
      <input className="ly-input" type="password" autoComplete="current-password" placeholder="Password" aria-label="Password" />
      <button className="ly-access__signin" type="button" onClick={go}>Sign in</button>
    </>
  )
  const sso = (
    <button className="ly-access__sso" type="button" onClick={go}>
      <Icon name="lock" /> Continue with company SSO
    </button>
  )
  const or = <div className="ly-access__or">or</div>

  return (
    <div className="ly-access" id="access">
      <div className="ly-access__head">
        <span className="ly-access__dots"><i /><i /><i /></span>
        <span className="ly-access__name">Enter Lyra</span>
        <span className="ly-access__env">{e.n}</span>
      </div>

      <div className="ly-access__body">
        <span className="ly-access__label">1 — Tower</span>
        <div className="ly-seg" role="group" aria-label="Choose a tower">
          {TOWERS.map((t) => (
            <button key={t.id} type="button" aria-pressed={t.id === tower} onClick={() => { setTower(t.id); setNote('') }}>
              <b>{t.n}</b><em>{t.tag}</em>
            </button>
          ))}
        </div>

        <span className="ly-access__label">2 — Environment</span>
        <div className="ly-seg" role="group" aria-label="Choose an environment">
          {ENVS.map((x) => (
            <button key={x.id} type="button" aria-pressed={x.id === env} onClick={() => { setEnv(x.id); setNote('') }}>
              <b>{x.n}</b><em>{x.sub}</em>
            </button>
          ))}
        </div>
        <p className="ly-access__hint">{e.hint}</p>

        <span className="ly-access__label">
          3 — Sign in <small>{e.auth}</small>
        </span>
        {e.sso ? <>{sso}{or}{creds}</> : <>{creds}{or}{sso}</>}
        {note && <p className="ly-access__note">{note}</p>}

        <div className="ly-access__dest">
          <Icon name="link" />
          <code>lyra.canopusgbs.com/{e.path}{tower}</code>
        </div>
        <p className="ly-access__small">
          What loads is decided by your tenant&rsquo;s licence and your role. You only ever see the modules you are entitled to.
        </p>
      </div>
    </div>
  )
}

/* ---------- 1. Banner ---------- */
function LyraHero() {
  return (
    <section className="ly-hero">
      <div className="container-xl ly-hero__inner">
        <div className="ly-hero__text">
          <img src={lyraLogo} alt="Lyra" className="ly-hero__logo" />
          <span className="ly-eyebrow ly-hero__badge">Lyra · by Canopus GBS</span>

          <h1 className="ly-hero__title">
            Run, Change and Extend SAP <span className="ly-highlight">from One Place.</span>
          </h1>
          <p className="ly-hero__lead">
            Automation and workflow are the platform — not something you build again on every project.
          </p>
          <p className="ly-hero__intro">
            Lyra is a single portal on SAP BTP for the three things an SAP estate actually needs:
            keeping it running, changing it safely, and extending it without breaking the core.
          </p>

          <ul className="ly-hero__towers">
            {TOWERS.map((t) => (
              <li key={t.id} className={`ly-chip ly-chip--${t.tone}`}>
                <i /><b>{t.n}</b> {t.tag.toLowerCase()}
              </li>
            ))}
          </ul>

          <a href="#towers" className="ly-btn">
            Explore the Towers <span aria-hidden="true">→</span>
          </a>
        </div>

        <AccessCard />
      </div>
    </section>
  )
}

/* ---------- 2. Three towers ---------- */
function LyraTowers() {
  const [ref, inView] = useInView(0.15)

  return (
    <section id="towers" ref={ref} className={`ly-towers${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head
          eyebrow="Three Towers"
          title="Each Tower Is a Product Line,"
          highlight="Not a Service Brochure."
          text="Every module below is a real application in the portal with its own permanent link, its own data and its own access rules. Consultants work in Demo and PoC; customers run in Production."
        />

        <ul className="ly-towers__grid">
          {TOWERS.map((t, i) => {
            const count = t.mods.length + (t.group ? t.group.items.length : 0)
            return (
              <li key={t.id} className={`ly-tower ly-tower--${t.tone}`} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="ly-tower__head">
                  <span className="ly-tower__tile">{t.ab}</span>
                  <div>
                    <h3 className="ly-tower__name">Lyra {t.n}</h3>
                    <span className="ly-tower__tag">{t.tag}</span>
                  </div>
                  <span className="ly-tower__count">{count} modules</span>
                </div>
                <p className="ly-tower__text">{t.d}</p>
                <div className="ly-tower__mods">
                  {t.mods.map((m) => <span key={m} className="ly-mod">{m}</span>)}
                </div>
                {t.group && (
                  <div className="ly-tower__group">
                    <span className="ly-tower__group-label">{t.group.g}</span>
                    <div className="ly-tower__mods">
                      {t.group.items.map((m) => <span key={m} className="ly-mod">{m}</span>)}
                    </div>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* ---------- 3. The platform ---------- */
function LyraPlatform() {
  const [ref, inView] = useInView(0.15)

  return (
    <section id="platform" ref={ref} className={`ly-platform${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <Head
          dark
          eyebrow="The Platform"
          title="Built on SAP BTP, Connected to"
          highlight="the Systems You Already Run."
          text="Lyra is a side-by-side application on SAP BTP — CAP services, HANA Cloud, Build Work Zone and role collections. It reaches your on-premise and private-cloud systems through SAP Cloud Connector, under your own identity provider."
        />

        <ul className="ly-platform__grid">
          {WHY.map(([icon, h, p], i) => (
            <li key={h} style={{ animationDelay: `${i * 0.12}s` }}>
              <span className={`ly-icon${i % 2 ? ' ly-icon--alt' : ''}`}><Icon name={icon} /></span>
              <strong>{h}</strong>
              <p>{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- 4. Clean core position + hosting options ---------- */
function LyraPosition() {
  const [ref, inView] = useInView(0.15)

  return (
    <section ref={ref} className={`ly-position${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <div className="ly-quote">
          <span className="ly-eyebrow">Our Position</span>
          <blockquote className="ly-quote__text">
            Keep the core clean.{' '}
            <span className="ly-highlight">Build the difference on BTP.</span>
          </blockquote>
          <p className="ly-head__text">
            That is SAP&rsquo;s clean core strategy, and it is how Lyra is built — side-by-side on SAP BTP,
            nothing added to the core, everything upgrade-safe. The question is never whether your core
            survives the next release. It is what you put beside it.
          </p>
        </div>

        <div className="ly-deploy">
          {DEPLOY.map(([icon, n, tag, items], i) => (
            <div key={n} className="ly-deploy__card" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="ly-deploy__head">
                <span className={`ly-icon${i % 2 ? ' ly-icon--alt' : ''}`}><Icon name={icon} /></span>
                <div>
                  <h3 className="ly-deploy__name">{n}</h3>
                  <span className="ly-deploy__tag">{tag}</span>
                </div>
              </div>
              <ul className="ly-deploy__list">
                {items.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 5. Security and governance ---------- */
function LyraTrust() {
  return (
    <section id="trust" className="ly-trust">
      <div className="container-xl">
        <Head eyebrow="Security and Governance" title="Whoever Hosts It," highlight="You Hold the Controls." />

        <ul className="ly-trust__chips">
          {TRUST.map(([b, s, sap]) => (
            <li key={b}>
              {sap && <span className="ly-trust__sap">SAP</span>}
              <b>{b}</b>
              {s && <span>{s}</span>}
            </li>
          ))}
        </ul>
        <p className="ly-trust__note">
          Every action in Lyra runs as the signed-in user and is written to that tenant&rsquo;s audit log with
          the user, the system and the change. Demo and PoC environments carry seeded data only — no customer
          system is attached to them.
        </p>
      </div>
    </section>
  )
}

export default function Lyra() {
  return (
    <>
      <LyraHero />
      <LyraTowers />
      <LyraPlatform />
      <LyraPosition />
      <LyraTrust />
    </>
  )
}
