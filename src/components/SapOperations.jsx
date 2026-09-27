import { useEffect, useRef, useState } from 'react'
import { sapOperations } from '../data'
import './SapOperations.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M6 12h3l2-4 2 6 2-3h3M9 21h6M12 17v4" />
    </>
  ),
  detect: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4M11 8v3M11 14h.01" />
    </>
  ),
  resolve: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z" />
    </>
  ),
  prevent: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  optimize: (
    <>
      <path d="M12 21a9 9 0 1 1 9-9" />
      <path d="M12 12l5-5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  innovate: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3z" />
    </>
  ),
}

const iconSvg = (name) => (
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

// Node positions around the wheel (percent of the wheel box)
const RADIUS = 41

function nodePosition(i, total) {
  const angle = (i / total) * Math.PI * 2 - Math.PI / 2
  return { x: 50 + RADIUS * Math.cos(angle), y: 50 + RADIUS * Math.sin(angle) }
}

export default function SapOperations() {
  const { steps } = sapOperations
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(null)

  // Start when the section scrolls into view
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Go round the cycle; hovering a step takes over
  useEffect(() => {
    if (!inView || hovered !== null) return
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), 2200)
    return () => clearInterval(id)
  }, [inView, hovered, steps.length])

  const current = hovered ?? active
  const pick = (i) => setHovered(i)
  const release = (i) => {
    setActive(i)
    setHovered(null)
  }

  return (
    <section
      ref={sectionRef}
      id="sap-operations"
      className={`sap-ops${inView ? ' is-in' : ''}`}
      style={{ '--turn': `${(current * 360) / steps.length}deg` }}
    >
      <div className="container-xl">
        <div className="sap-ops__header">
          <span className="sap-ops__eyebrow">
            <span className="sap-ops__eyebrow-dot" />
            {sapOperations.eyebrow}
          </span>
          <h2 className="sap-ops__title">
            {sapOperations.title}{' '}
            <span className="sap-ops__highlight">{sapOperations.highlight}</span>
          </h2>

          <div className="sap-ops__compare">
            <div className="sap-ops__side sap-ops__side--reactive">
              <span className="sap-ops__tag">Reactive</span>
              <p>{sapOperations.reactive}</p>
            </div>
            <span className="sap-ops__arrow" aria-hidden="true">→</span>
            <div className="sap-ops__side sap-ops__side--proactive">
              <span className="sap-ops__tag">Proactive</span>
              <p>{sapOperations.proactive}</p>
            </div>
          </div>
        </div>

        <div className="sap-ops__body">
          {/* Operations wheel */}
          <div className="sap-ops__wheel" aria-hidden="true">
            <span className="sap-ops__ring" />
            <span className="sap-ops__sweep" />

            <div className="sap-ops__center">
              <span className="sap-ops__clock">24/7</span>
              <span className="sap-ops__center-title" key={`t${current}`}>
                {steps[current].title}
              </span>
              <span className="sap-ops__center-text" key={`x${current}`}>
                {steps[current].text}
              </span>
            </div>

            {steps.map((s, i) => {
              const { x, y } = nodePosition(i, steps.length)
              return (
                <span
                  key={s.title}
                  className={`sap-ops__node${i === current ? ' is-active' : ''}`}
                  style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${0.2 + i * 0.12}s` }}
                  onMouseEnter={() => pick(i)}
                  onMouseLeave={() => release(i)}
                >
                  {iconSvg(s.icon)}
                  <span className="sap-ops__node-label">{s.title}</span>
                </span>
              )
            })}
          </div>

          {/* Step list, kept in sync with the wheel */}
          <ol className="sap-ops__list">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className={`sap-ops__item${i === current ? ' is-active' : ''}`}
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                onMouseEnter={() => pick(i)}
                onMouseLeave={() => release(i)}
              >
                <span className="sap-ops__item-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="sap-ops__item-title">{s.title}</h3>
                  <p className="sap-ops__item-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
