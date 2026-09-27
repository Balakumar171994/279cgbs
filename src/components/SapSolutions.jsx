import { useEffect, useRef, useState } from 'react'
import NetworkCanvas from './NetworkCanvas'
import sapLogo from '../assets/partner/SAP.png'
import { sapSolutions } from '../data'
import './SapSolutions.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  s4hana: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 12.5l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </>
  ),
  grow: (
    <>
      <path d="M4 19l5-6 4 3 7-9" />
      <path d="M15 7h5v5" />
    </>
  ),
  rise: (
    <>
      <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.5 4.5 0 0 0 7 18z" />
      <path d="M12 16v-5M9.5 13.5L12 11l2.5 2.5" />
    </>
  ),
  btp: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
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
  fiori: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  abap: (
    <>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </>
  ),
  automation: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1" />
    </>
  ),
}

export default function SapSolutions() {
  const gridRef = useRef(null)
  const [inView, setInView] = useState(false)

  // Reveal the cards when the grid scrolls into view
  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
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
      <section className="sap-sol-hero">
        <NetworkCanvas className="sap-sol-hero__canvas" />
        <div className="container-xl sap-sol-hero__content">
          <div className="sap-sol-hero__badge">
            <img src={sapLogo} alt="SAP" className="sap-sol-hero__badge-logo" />
            <span>{sapSolutions.eyebrow}</span>
          </div>
          <h1 className="sap-sol-hero__title">
            {sapSolutions.title}{' '}
            <span className="sap-sol-hero__highlight">{sapSolutions.highlight}</span>
          </h1>
          <p className="sap-sol-hero__intro">{sapSolutions.intro}</p>
        </div>
      </section>

      <section id="sap-solutions" className="sap-sol">
        <div className="container-xl">
          <ul ref={gridRef} className={`sap-sol__grid${inView ? ' is-in' : ''}`}>
            {sapSolutions.items.map((item, i) => (
              <li
                key={item.title}
                className="sap-sol__card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="sap-sol__card-top">
                  <span className={`sap-sol__icon${i % 2 ? ' sap-sol__icon--alt' : ''}`}>
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
                  <span className="sap-sol__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="sap-sol__title">{item.title}</h2>
                <p className="sap-sol__text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
