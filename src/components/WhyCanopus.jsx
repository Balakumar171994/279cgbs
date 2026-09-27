import { useEffect, useState } from 'react'
import { whyCanopus } from '../data'
import office1 from '../assets/office/office-1.jpg'
import office2 from '../assets/office/office-2.jpg'
import office3 from '../assets/office/office-3.jpg'
import office4 from '../assets/office/office-4.jpg'
import './WhyCanopus.css'

const SLIDE_DELAY = 4500 // how long each photo stays

// Each photo change uses the next effect in this list
const EFFECTS = ['zoom', 'wipe', 'circle', 'split']

const photos = [
  { src: office1, alt: 'Canopus GBS office' },
  { src: office2, alt: 'Canopus GBS team celebrating a client success' },
  { src: office3, alt: 'Canopus GBS consultants collaborating' },
  { src: office4, alt: 'Canopus GBS workspace' },
]

// Line icons (24x24, stroke = currentColor)
const icons = {
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 12a8 8 0 0 1-14.3 4.9M4 12a8 8 0 0 1 14.3-4.9" />
      <path d="M18.5 3v4.2h-4.2M5.5 21v-4.2h4.2" />
    </>
  ),
}

export default function WhyCanopus() {
  const [active, setActive] = useState(0)
  const [previous, setPrevious] = useState(null)
  const [paused, setPaused] = useState(false)
  const [openPoint, setOpenPoint] = useState(0)

  const goTo = (i) => {
    if (i === active) return
    setPrevious(active)
    setActive(i)
  }

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduceMotion) return
    const t = setTimeout(() => goTo((active + 1) % photos.length), SLIDE_DELAY)
    return () => clearTimeout(t)
  })

  return (
    <section id="why-canopus" className="why">
      <div className="container-xl why__inner">
        <div className="why__content">
          <span className="section-eyebrow why__eyebrow">{whyCanopus.eyebrow}</span>
          <h2 className="why__title">
            {whyCanopus.title} <span className="why__highlight">{whyCanopus.highlight}</span>
          </h2>
          {whyCanopus.intro.map((p) => (
            <p className="why__intro" key={p}>
              {p}
            </p>
          ))}

          {/* Accordion: click a heading to show its text; one open at a time */}
          <ul className="why__points">
            {whyCanopus.points.map((pt, i) => {
              const isOpen = openPoint === i
              return (
                <li className={`why__point ${isOpen ? 'is-open' : ''}`} key={pt.title}>
                  <h3 className="why__point-heading">
                    <button
                      type="button"
                      id={`why-point-head-${i}`}
                      className="why__point-head"
                      aria-expanded={isOpen}
                      aria-controls={`why-point-${i}`}
                      onClick={() => setOpenPoint(isOpen ? null : i)}
                    >
                      <span className={`why__icon ${i % 2 ? 'why__icon--alt' : ''}`}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          {icons[pt.icon]}
                        </svg>
                      </span>
                      <span className="why__point-title">{pt.title}</span>
                      <span className="why__arrow" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    className="why__point-body"
                    id={`why-point-${i}`}
                    role="region"
                    aria-labelledby={`why-point-head-${i}`}
                  >
                    <div className="why__point-inner">
                      <p className="why__point-text">{pt.text}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="why__media">
          <div className="why__frame-wrap">
            <div
              className="why__frame"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {photos.map((ph, i) => {
                const state = i === active ? 'is-active' : i === previous ? 'is-leaving' : ''
                const effect = `fx-${EFFECTS[i % EFFECTS.length]}`
                return (
                  <div
                    key={ph.src}
                    className={`why__slide ${effect} ${state}`}
                    aria-hidden={i !== active}
                  >
                    <img src={ph.src} alt={ph.alt} loading="lazy" />
                  </div>
                )
              })}
              <span className="why__shade" />
              <span
                key={active}
                className={`why__progress ${paused ? 'is-paused' : ''}`}
                style={{ animationDuration: `${SLIDE_DELAY}ms` }}
              />

              <div className="why__badge">
                <span className="why__badge-value">10+ Years</span>
                <span className="why__badge-label">SAP &amp; IT Experience</span>
              </div>
            </div>
          </div>

          <div className="why__dots" role="tablist" aria-label="Office photos">
            {photos.map((ph, i) => (
              <button
                key={ph.src}
                role="tab"
                aria-selected={i === active}
                aria-label={`Show photo ${i + 1}`}
                className={`why__dot ${i === active ? 'is-active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
