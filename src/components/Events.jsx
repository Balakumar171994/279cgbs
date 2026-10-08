import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import useInView from '../hooks/useInView'
import { eventsPage } from '../data'
import './Events.css'

// Photo file name -> bundled URL (replace files in src/assets/events to swap photos).
// Only lower-case image extensions are picked up: an original dropped in as
// ".JPG" is ignored instead of breaking the build or being bundled unused.
const photos = import.meta.glob('../assets/events/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})
const photoUrl = (file) => photos[`../assets/events/${file}`]

const SLIDE_MS = 5000

// Line icons (24x24, stroke = currentColor)
const icons = {
  sparkle: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
    </>
  ),
  screen: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4M10 8.5l4 1.5-4 1.5v-3z" />
    </>
  ),
  booth: (
    <>
      <path d="M3 9l2-5h14l2 5" />
      <path d="M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0V9zM5 13v7h14v-7" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 10v4a1 1 0 0 0 1 1h3l6 4V5L7 9H4a1 1 0 0 0-1 1z" />
      <path d="M17 8a5 5 0 0 1 0 8M19.5 5.5a8.5 8.5 0 0 1 0 13" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 10h4a1 1 0 0 1 1 1v10M3 21h18M8 8h3M8 12h3M8 16h3" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4z" />
      <path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M9 17h6" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
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

const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- Banner: All-Hands Meeting carousel ---------- */
function EventsHero() {
  const { allHands, eyebrow, title, highlight, intro } = eventsPage
  const slides = allHands.slides
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((i) => setActive((i + slides.length) % slides.length), [slides.length])

  useEffect(() => {
    if (paused || reduceMotion) return
    const id = setTimeout(() => go(active + 1), SLIDE_MS)
    return () => clearTimeout(id)
  }, [active, paused, go])

  const current = slides[active]

  return (
    <section
      className="ev-hero"
      aria-roledescription="carousel"
      aria-label={allHands.label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <img
          key={s.file}
          src={photoUrl(s.file)}
          style={s.position ? { objectPosition: s.position } : undefined}
          alt={s.title}
          className={`ev-hero__img${i === active ? ' is-active' : ''}`}
          aria-hidden={i !== active}
        />
      ))}
      <span className="ev-hero__shade" aria-hidden="true" />

      <div className="container-xl ev-hero__content">
        <div className="ev-hero__main">
          <span className="ev-eyebrow">{eyebrow}</span>
          <h1 className="ev-hero__title">
            {title} <span className="ev-highlight">{highlight}</span>
          </h1>
          <p className="ev-hero__intro">{intro}</p>
        </div>

        <div className="ev-hero__side">
          <div className="ev-hero__caption" key={current.file}>
            <span className="ev-hero__tag">{allHands.label}</span>
            <strong>{current.title}</strong>
            <p>{current.caption}</p>
          </div>

          <div className="ev-hero__controls">
            <button type="button" className="ev-hero__arrow" onClick={() => go(active - 1)} aria-label="Previous slide">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <div className="ev-hero__dots">
              {slides.map((s, i) => (
                <button
                  key={s.file}
                  type="button"
                  className={`ev-hero__dot${i === active ? ' is-active' : ''}`}
                  onClick={() => go(i)}
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === active}
                >
                  {i === active && !paused && !reduceMotion && <span className="ev-hero__dot-fill" />}
                </button>
              ))}
            </div>
            <button type="button" className="ev-hero__arrow" onClick={() => go(active + 1)} aria-label="Next slide">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <span className="ev-hero__count">
              {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Full-screen photo viewer ---------- */
function Lightbox({ items, index, onClose, onMove }) {
  const item = items[index]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose, onMove])

  return (
    <div className="ev-lightbox" role="dialog" aria-modal="true" aria-label={item.caption} onClick={onClose}>
      <figure className="ev-lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={photoUrl(item.file)} alt={item.caption} />
        <figcaption>
          <span>{item.category}</span>
          <strong>{item.caption}</strong>
          <small>
            {index + 1} / {items.length}
          </small>
        </figcaption>
      </figure>

      <button type="button" className="ev-lightbox__close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <button
        type="button"
        className="ev-lightbox__nav ev-lightbox__nav--prev"
        onClick={(e) => {
          e.stopPropagation()
          onMove(-1)
        }}
        aria-label="Previous photo"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button
        type="button"
        className="ev-lightbox__nav ev-lightbox__nav--next"
        onClick={(e) => {
          e.stopPropagation()
          onMove(1)
        }}
        aria-label="Next photo"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

/* ---------- Category cards + gallery ---------- */
function EventsGallery() {
  const { categories, galleryTitle, galleryHighlight, allLabel } = eventsPage
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)
  const galleryRef = useRef(null)
  const [cardsRef, cardsIn] = useInView(0.15)

  const allPhotos = useMemo(
    () => categories.flatMap((c) => c.photos.map((p) => ({ ...p, category: c.name, categoryId: c.id }))),
    [categories]
  )
  const shown = filter === 'all' ? allPhotos : allPhotos.filter((p) => p.categoryId === filter)
  const activeName = filter === 'all' ? allLabel : categories.find((c) => c.id === filter).name

  const pick = (id) => {
    setFilter(id)
    galleryRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }

  const close = useCallback(() => setOpen(null), [])
  const move = useCallback((step) => setOpen((i) => (i + step + shown.length) % shown.length), [shown.length])

  return (
    <>
      <section className="ev-cats">
        <div className="container-xl">
          <div className="ev-head">
            <span className="ev-eyebrow ev-eyebrow--light">Event Categories</span>
            <h2 className="ev-head__title">
              {galleryTitle} <span className="ev-highlight">{galleryHighlight}</span>
            </h2>
          </div>

          <ul ref={cardsRef} className={`ev-cats__grid${cardsIn ? ' is-in' : ''}`}>
            {categories.map((c, i) => (
              <li key={c.id} style={{ animationDelay: `${i * 0.08}s` }}>
                <button
                  type="button"
                  className={`ev-cat${filter === c.id ? ' is-active' : ''}`}
                  onClick={() => pick(c.id)}
                  aria-pressed={filter === c.id}
                >
                  <span className="ev-cat__cover">
                    <img src={photoUrl(c.photos[0].file)} alt="" loading="lazy" />
                  </span>
                  <span className="ev-cat__body">
                    <span className={`ev-cat__icon${i % 2 ? ' ev-cat__icon--alt' : ''}`}>
                      <Icon name={c.icon} />
                    </span>
                    <span className="ev-cat__name">{c.name}</span>
                    <span className="ev-cat__text">{c.text}</span>
                    <span className="ev-cat__meta">
                      {c.photos.length} photos <b aria-hidden="true">→</b>
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section ref={galleryRef} className="ev-gallery" id="gallery">
        <div className="container-xl">
          <div className="ev-filter" role="tablist" aria-label="Filter photos by category">
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'all'}
              className={`ev-filter__btn${filter === 'all' ? ' is-active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <Icon name="grid" />
              {allLabel}
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={filter === c.id}
                className={`ev-filter__btn${filter === c.id ? ' is-active' : ''}`}
                onClick={() => setFilter(c.id)}
              >
                <Icon name={c.icon} />
                {c.name}
              </button>
            ))}
          </div>

          <p className="ev-gallery__count">
            <strong>{activeName}</strong> · {shown.length} photos
          </p>

          <ul className="ev-gallery__grid" key={filter}>
            {shown.map((p, i) => (
              <li key={p.file} style={{ animationDelay: `${Math.min(i, 12) * 0.04}s` }}>
                <button type="button" className="ev-photo" onClick={() => setOpen(i)}>
                  <img src={photoUrl(p.file)} alt={p.caption} loading="lazy" />
                  <span className="ev-photo__info">
                    <span className="ev-photo__cat">{p.category}</span>
                    <span className="ev-photo__caption">{p.caption}</span>
                  </span>
                  <span className="ev-photo__zoom" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="6.5" />
                      <path d="M20 20l-4.3-4.3M11 8.5v5M8.5 11h5" />
                    </svg>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {open !== null && <Lightbox items={shown} index={open} onClose={close} onMove={move} />}
    </>
  )
}

export default function Events() {
  return (
    <>
      <EventsHero />
      <EventsGallery />
    </>
  )
}
