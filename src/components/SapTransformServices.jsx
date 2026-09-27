import { useEffect, useRef, useState } from 'react'
import { sapTransformServices } from '../data'
import './SapTransformServices.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  implement: (
    <>
      <path d="M4 20h16" />
      <rect x="5" y="11" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="13" rx="1" />
      <rect x="15" y="3" width="4" height="17" rx="1" />
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
  cloud: (
    <>
      <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.5 4.5 0 0 0 7 18z" />
      <path d="M9 21h6" />
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
  optimize: (
    <>
      <path d="M12 21a9 9 0 1 1 9-9" />
      <path d="M12 12l5-5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
}

export default function SapTransformServices() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  // Start the animations when the section scrolls into view
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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sap-transformation-services"
      className={`sap-ts${inView ? ' is-in' : ''}`}
    >
      <div className="container-xl sap-ts__inner">
        <div className="sap-ts__text">
          <span className="sap-ts__eyebrow">{sapTransformServices.eyebrow}</span>
          <h2 className="sap-ts__title">
            {sapTransformServices.title}{' '}
            <span className="sap-ts__highlight">{sapTransformServices.highlight}</span>
          </h2>
          <p className="sap-ts__intro">{sapTransformServices.intro}</p>

          {/* Legacy blocks flowing into a modern SAP core */}
          <div className="sap-ts__visual" aria-hidden="true">
            <div className="sap-ts__legacy">
              <span className="sap-ts__block" />
              <span className="sap-ts__block" />
              <span className="sap-ts__block" />
              <span className="sap-ts__caption">Legacy</span>
            </div>

            <div className="sap-ts__flow">
              <span className="sap-ts__flow-dot" />
              <span className="sap-ts__flow-dot" />
              <span className="sap-ts__flow-dot" />
            </div>

            <div className="sap-ts__core">
              <span className="sap-ts__core-ring" />
              <span className="sap-ts__core-inner">
                S/4HANA
                <small>Digital Core</small>
              </span>
            </div>
          </div>
        </div>

        <ul className="sap-ts__grid">
          {sapTransformServices.items.map((item, i) => (
            <li
              key={item.title}
              className="sap-ts__card"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <span className={`sap-ts__icon${i % 2 ? ' sap-ts__icon--alt' : ''}`}>
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
              <span className="sap-ts__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="sap-ts__card-title">{item.title}</h3>
              <p className="sap-ts__card-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
