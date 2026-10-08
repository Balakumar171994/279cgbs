import { useEffect, useRef, useState } from 'react'
import { industries } from '../data'
import useLoopCarousel, { useResponsiveValue } from '../hooks/useLoopCarousel'
import './Industries.css'

const SLIDE_MS = 200 // one move takes 0.2 seconds
const AUTO_DELAY = 3000 // wait between automatic moves

// Line icons (24x24, stroke = currentColor)
const icons = {
  factory: (
    <>
      <path d="M3 21V10l6 4v-4l6 4V6l6 4v11H3z" />
      <path d="M7 17h2M12 17h2M17 17h1" />
    </>
  ),
  // Oil & Gas: oil drop
  oil: (
    <>
      <path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11z" />
      <path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z" />
  ),
  health: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  bag: (
    <>
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
    </>
  ),
  // Alcobev: bottle and glass
  bottle: (
    <>
      <path d="M9 2h3M9.5 2v4.5L7.5 10v11h6V10l-2-3.5V2" />
      <path d="M7.5 14h6" />
      <path d="M16 11h5l-.6 5a1.9 1.9 0 0 1-3.8 0L16 11zM18.5 18v3M17 21h3" />
    </>
  ),
  // Semi-conductors: microchip
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.8" />
      <path d="M9 2.5V6M12 2.5V6M15 2.5V6M9 18v3.5M12 18v3.5M15 18v3.5M2.5 9H6M2.5 12H6M2.5 15H6M18 9h3.5M18 12h3.5M18 15h3.5" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V4h10v17M14 9h6v12M2 21h20" />
      <path d="M8 8h2M8 12h2M8 16h2M17 13h1M17 17h1" />
    </>
  ),
}

function cardsPerView(w) {
  if (w < 640) return 1
  if (w < 960) return 2
  if (w < 1200) return 3
  return 4
}

export default function Industries() {
  const { items } = industries
  const perView = useResponsiveValue(cardsPerView)
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const { index, copies, move, reset, setPaused, onTransitionEnd, trackStyle } = useLoopCarousel(items, {
    perView,
    slideMs: SLIDE_MS,
    delay: AUTO_DELAY,
    active: visible,
  })

  // Every time the section scrolls into view, start again from the first card
  // (Alcobev) and auto-scroll; stop while it is off screen
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reset()
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reset])

  return (
    <section id="industries" className="industries" ref={sectionRef}>
      <div className="container-xl">
        <div className="industries__header">
          <span className="section-eyebrow industries__eyebrow">{industries.eyebrow}</span>
          <h2 className="industries__title">
            {industries.title}{' '}
            <span className="industries__highlight">{industries.highlight}</span>
          </h2>
          <p className="industries__intro">{industries.intro}</p>
          <p className="industries__intro">{industries.lead}</p>
        </div>

        <div
          className="industries__box"
          role="region"
          aria-roledescription="carousel"
          aria-label="Industries we serve"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            className="industries__arrow industries__arrow--prev"
            onClick={() => move(-1)}
            aria-label="Previous industry"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          <div className="industries__viewport">
            <ul
              className="industries__track"
              style={trackStyle}
              onTransitionEnd={onTransitionEnd}
            >
              {copies.map((item, i) => (
                <li
                  key={i}
                  className="industries__slide"
                  style={{ flexBasis: `${100 / perView}%` }}
                  aria-hidden={i < index || i >= index + perView}
                >
                  <div className="industries__card">
                    <span className={`industries__icon ${i % 2 ? 'industries__icon--alt' : ''}`}>
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
                    <span className="industries__label">{item.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="industries__arrow industries__arrow--next"
            onClick={() => move(1)}
            aria-label="Next industry"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
