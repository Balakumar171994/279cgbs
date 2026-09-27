import { useEffect, useRef, useState } from 'react'
import { transformation } from '../data'
import './Transformation.css'

export default function Transformation() {
  const listRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [activeCount, setActiveCount] = useState(0)
  const [visible, setVisible] = useState(() => new Set())

  // Reveal each step once as it enters the viewport
  useEffect(() => {
    const items = listRef.current?.querySelectorAll('.transformation__item')
    if (!items) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const index = Number(entry.target.dataset.index)
          setVisible((prev) => new Set(prev).add(index))
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  // Fill the timeline line and light up steps as the page scrolls
  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const list = listRef.current
      if (!list) return

      const trigger = window.innerHeight * 0.6
      const rect = list.getBoundingClientRect()
      const next = Math.min(1, Math.max(0, (trigger - rect.top) / rect.height))
      setProgress(next)

      let count = 0
      list.querySelectorAll('.transformation__item').forEach((item) => {
        const r = item.getBoundingClientRect()
        if (r.top + r.height / 2 <= trigger) count += 1
      })
      setActiveCount(count)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const total = transformation.outcomes.length

  return (
    <section id="digital-transformation" className="transformation">
      <div className="container-xl transformation__inner">
        <div className="transformation__text">
          <span className="section-eyebrow transformation__eyebrow">{transformation.eyebrow}</span>
          <h2 className="transformation__title">
            {transformation.title}{' '}
            <span className="transformation__highlight">{transformation.highlight}</span>
          </h2>
          <p className="transformation__intro">{transformation.intro}</p>
          <p className="transformation__lead">{transformation.lead}</p>

          <div className="transformation__meter" aria-hidden="true">
            <span className="transformation__meter-count">
              {String(activeCount).padStart(2, '0')}
            </span>
            <span className="transformation__meter-bar">
              <span style={{ transform: `scaleX(${activeCount / total})` }} />
            </span>
            <span className="transformation__meter-total">{String(total).padStart(2, '0')}</span>
          </div>
        </div>

        <ol
          className="transformation__list"
          ref={listRef}
          style={{ '--progress': progress }}
        >
          <span className="transformation__track" aria-hidden="true">
            <span className="transformation__track-fill" />
          </span>

          {transformation.outcomes.map((item, index) => {
            const classes = ['transformation__item']
            if (visible.has(index)) classes.push('is-visible')
            if (index < activeCount) classes.push('is-active')

            return (
              <li className={classes.join(' ')} key={item} data-index={index}>
                <span className="transformation__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="transformation__card">
                  <span className="transformation__check" aria-hidden="true" />
                  <span className="transformation__label">{item}</span>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
