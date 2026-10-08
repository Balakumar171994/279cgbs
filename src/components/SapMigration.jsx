import { useEffect, useRef, useState } from 'react'
import { sapMigration } from '../data'
import './SapMigration.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  cloud: (
    <>
      <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.5 4.5 0 0 0 7 18z" />
      <path d="M12 16v-5M9.5 13.5L12 11l2.5 2.5" />
    </>
  ),
  convert: (
    <>
      <path d="M4 9a8 8 0 0 1 14.3-3.9L20 7" />
      <path d="M20 3v4h-4" />
      <path d="M20 15a8 8 0 0 1-14.3 3.9L4 17" />
      <path d="M4 21v-4h4" />
    </>
  ),
  legacy: (
    <>
      <rect x="3" y="5" width="7" height="14" rx="1.5" />
      <path d="M13 12h8M18 9l3 3-3 3" />
    </>
  ),
  erp: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
      <path d="M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </>
  ),
  integration: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6h7M6 8.5v7M18 8.5v7M8.5 18h7" />
    </>
  ),
}

// Adds `is-in` once the element scrolls into view
function useInView(threshold) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

export default function SapMigration() {
  const { capabilities, approach } = sapMigration
  const [gridRef, gridIn] = useInView(0.15)
  const [roadRef, roadIn] = useInView(0.35)
  // Step under the mouse (or keyboard focus); -1 = none
  const [step, setStep] = useState(-1)

  return (
    <section id="sap-migration" className="sap-mig">
      <div className="container-xl">
        <div className="sap-mig__header">
          <span className="sap-mig__eyebrow">{sapMigration.eyebrow}</span>
          <h2 className="sap-mig__title">
            {sapMigration.title}{' '}
            <span className="sap-mig__highlight">{sapMigration.highlight}</span>
          </h2>
          {sapMigration.intro.map((p) => (
            <p className="sap-mig__intro" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </div>

        <h3 className="sap-mig__subhead">{sapMigration.capabilitiesTitle}</h3>

        <ul ref={gridRef} className={`sap-mig__grid${gridIn ? ' is-in' : ''}`}>
          {capabilities.map((item, i) => (
            <li
              key={item.title}
              className="sap-mig__card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className={`sap-mig__icon${i % 2 ? ' sap-mig__icon--alt' : ''}`}>
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
              <div className="sap-mig__card-body">
                <h4 className="sap-mig__card-title">{item.title}</h4>
                <p className="sap-mig__card-text">{item.text}</p>
              </div>
              <span className="sap-mig__card-arrow" aria-hidden="true">→</span>
            </li>
          ))}
        </ul>

        {/* Migration approach roadmap */}
        <div
          ref={roadRef}
          className={`sap-mig__road${roadIn ? ' is-in' : ''}`}
          style={{ '--step': Math.max(step, 0), '--steps': approach.length }}
        >
          <h3 className="sap-mig__road-title">{sapMigration.approachTitle}</h3>

          <div className="sap-mig__route">
            <div className="sap-mig__track" aria-hidden="true">
              <span className="sap-mig__track-fill" />
            </div>

            <ol className="sap-mig__steps">
              {approach.map((s, i) => {
                const classes = ['sap-mig__step']
                if (i === step) classes.push('is-active')
                if (i < step) classes.push('is-done')
                return (
                  <li
                    key={s}
                    className={classes.join(' ')}
                    style={{ animationDelay: `${i * 0.1}s` }}
                    tabIndex={0}
                    onMouseEnter={() => setStep(i)}
                    onMouseLeave={() => setStep(-1)}
                    onFocus={() => setStep(i)}
                    onBlur={() => setStep(-1)}
                  >
                    <span className="sap-mig__milestone">{i + 1}</span>
                    <span className="sap-mig__step-label">{s}</span>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
