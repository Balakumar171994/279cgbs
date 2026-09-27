import { useEffect, useRef, useState } from 'react'
import sapLogo from '../assets/partner/SAP.png'
import { sapJourney } from '../data'
import './SapJourney.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  transform: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3L12 3z" />
      <path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15z" />
    </>
  ),
  migrate: (
    <>
      <rect x="3" y="4" width="7" height="16" rx="1.5" />
      <rect x="14" y="4" width="7" height="16" rx="1.5" />
      <path d="M8 12h8M13.5 9.5L16 12l-2.5 2.5" />
    </>
  ),
  enhance: (
    <>
      <path d="M10 4h4v3a2 2 0 1 0 4 0h2v6h-3a2 2 0 1 0 0 4h3v3h-6v-3a2 2 0 1 0-4 0v3H4v-6h3a2 2 0 1 0 0-4H4V4h6z" />
    </>
  ),
  manage: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
}

export default function SapJourney() {
  const { stages } = sapJourney
  const pathRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(null)

  // Start the journey animation when it scrolls into view
  useEffect(() => {
    const el = pathRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Walk through the stages in order; hovering one takes over
  useEffect(() => {
    if (!inView || hovered !== null) return
    const id = setInterval(() => setActive((a) => (a + 1) % stages.length), 2600)
    return () => clearInterval(id)
  }, [inView, hovered, stages.length])

  const current = hovered ?? active

  return (
    <section id="sap-journey" className="sap-journey">
      <div className="container-xl">
        <div className="sap-journey__header">
          <div className="sap-journey__badge">
            <img src={sapLogo} alt="SAP" className="sap-journey__badge-logo" />
            <span className="sap-journey__badge-text">{sapJourney.eyebrow}</span>
          </div>

          <h2 className="sap-journey__title">
            {sapJourney.title}
            <span className="sap-journey__highlight">{sapJourney.highlight}</span>
          </h2>

          {sapJourney.intro.map((p) => (
            <p className="sap-journey__intro" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </div>

        <div
          ref={pathRef}
          className={`sap-journey__path${inView ? ' is-in' : ''}`}
          style={{ '--step': current, '--steps': stages.length }}
        >
          <div className="sap-journey__track" aria-hidden="true">
            <span className="sap-journey__track-fill" />
            <span className="sap-journey__runner" />
          </div>

          <ol className="sap-journey__stages">
            {stages.map((stage, i) => {
              const classes = ['sap-journey__stage']
              if (i === current) classes.push('is-active')
              if (i < current) classes.push('is-done')

              return (
                <li
                  key={stage.title}
                  className={classes.join(' ')}
                  style={{ animationDelay: `${0.2 + i * 0.18}s` }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => {
                    setActive(i)
                    setHovered(null)
                  }}
                >
                  <div className="sap-journey__node">
                    <span className="sap-journey__num">{String(i + 1).padStart(2, '0')}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {icons[stage.icon]}
                    </svg>
                  </div>

                  <div className="sap-journey__card">
                    <h3 className="sap-journey__stage-title">{stage.title}</h3>
                    <p className="sap-journey__stage-text">{stage.text}</p>
                  </div>
                </li>
              )
            })}
          </ol>

          {/* Manage loops back to Transform */}
          <div className="sap-journey__loop" aria-hidden="true">
            <svg viewBox="0 0 1000 60" preserveAspectRatio="none" className="sap-journey__loop-svg">
              <path
                className="sap-journey__loop-line"
                d="M875 4 C875 46, 860 50, 820 50 L180 50 C140 50, 125 46, 125 4"
              />
            </svg>
            <span className="sap-journey__loop-label">
              <span className="sap-journey__loop-icon">↻</span> Continuous Innovation
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
