import { useEffect, useRef, useState } from 'react'
import NetworkCanvas from './NetworkCanvas'
import sapLogo from '../assets/partner/SAP.png'
import { sapManaged } from '../data'
import './SapManaged.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  ams: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14h3v5H5a1 1 0 0 1-1-1v-4zM20 14h-3v5h2a1 1 0 0 0 1-1v-4z" />
      <path d="M17 19c0 1.5-2 2-5 2" />
    </>
  ),
  basis: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
    </>
  ),
  grc: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
      <path d="M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.5 4.5 0 0 0 7 18z" />
      <path d="M9 21h6" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M6 12h3l2-4 2 6 2-3h3M9 21h6M12 17v4" />
    </>
  ),
  support: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6" />
    </>
  ),
  optimize: (
    <>
      <path d="M12 21a9 9 0 1 1 9-9" />
      <path d="M12 12l5-5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
}

export default function SapManaged() {
  const gridRef = useRef(null)
  const [gridIn, setGridIn] = useState(false)

  // Reveal the service cards when they scroll into view
  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridIn(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="sap-ms-hero">
        <NetworkCanvas className="sap-ms-hero__canvas" />

        <div className="container-xl sap-ms-hero__inner">
          <div className="sap-ms-hero__text">
            <div className="sap-ms-hero__badge">
              <img src={sapLogo} alt="SAP" className="sap-ms-hero__badge-logo" />
              <span>{sapManaged.eyebrow}</span>
            </div>

            <h1 className="sap-ms-hero__title">
              {sapManaged.title}
              <span className="sap-ms-hero__words">
                {sapManaged.highlight.map((word, i) => (
                  <span
                    key={word}
                    className="sap-ms-hero__word"
                    style={{ animationDelay: `${0.35 + i * 0.25}s` }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </h1>

            <p className="sap-ms-hero__lead">{sapManaged.lead}</p>
            <p className="sap-ms-hero__intro">{sapManaged.intro}</p>
          </div>

          {/* Live "system health" panel */}
          <div className="sap-ms-panel" aria-hidden="true">
            <div className="sap-ms-panel__head">
              <span className="sap-ms-panel__dots">
                <i />
                <i />
                <i />
              </span>
              <span className="sap-ms-panel__name">SAP Landscape</span>
              <span className="sap-ms-panel__live">
                <span className="sap-ms-panel__live-dot" /> Live
              </span>
            </div>

            <div className="sap-ms-panel__status">
              <span className="sap-ms-panel__ring">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5 9-10" />
                </svg>
              </span>
              <div>
                <strong>System Healthy</strong>
                <small>Stable · Secure · Optimized</small>
              </div>
            </div>

            <div className="sap-ms-panel__pulse">
              <svg viewBox="0 0 300 60" preserveAspectRatio="none">
                <path
                  className="sap-ms-panel__beat"
                  d="M0 30 H60 L72 30 L80 12 L90 48 L100 22 L108 30 H170 L182 30 L190 10 L200 50 L210 24 L218 30 H300"
                />
              </svg>
            </div>

            <ul className="sap-ms-panel__checks">
              {sapManaged.health.map((h, i) => (
                <li key={h} style={{ animationDelay: `${i * 0.6}s` }}>
                  <span className="sap-ms-panel__check" />
                  {h}
                  <span className="sap-ms-panel__bar">
                    <span style={{ animationDelay: `${i * 0.3}s` }} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="sap-managed-services" className="sap-ms">
        <div className="container-xl">
          <div className="sap-ms__header">
            <span className="sap-ms__eyebrow">{sapManaged.servicesEyebrow}</span>
          </div>

          <ul ref={gridRef} className={`sap-ms__grid${gridIn ? ' is-in' : ''}`}>
            {sapManaged.services.map((item, i) => (
              <li
                key={item.title}
                className="sap-ms__card"
                style={{ animationDelay: `${i * 0.09}s` }}
              >
                <div className="sap-ms__card-top">
                  <span className={`sap-ms__icon${i % 2 ? ' sap-ms__icon--alt' : ''}`}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {icons[item.icon]}
                    </svg>
                  </span>
                  <span className="sap-ms__status" aria-hidden="true">
                    <span className="sap-ms__status-dot" style={{ animationDelay: `${i * 0.25}s` }} />
                    Active
                  </span>
                </div>
                <h2 className="sap-ms__title">{item.title}</h2>
                <p className="sap-ms__text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
