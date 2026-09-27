import { useEffect, useRef, useState } from 'react'

// Counts the number inside `value` (e.g. "270+", "10+ Years") up from 0
// every time it scrolls into view, and resets when it leaves, so it runs
// again whether the visitor scrolls down or back up.
export default function CountUp({ value, duration = 1800, className = '' }) {
  const match = String(value).match(/^(\D*)(\d+)(.*)$/)
  const target = match ? parseInt(match[2], 10) : 0
  const ref = useRef(null)
  const [current, setCurrent] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? target : 0
  )

  useEffect(() => {
    if (!match) return
    const el = ref.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame
    const run = () => {
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3) // ease-out: fast start, gentle finish
        setCurrent(Math.round(eased * target))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(frame)
        if (entry.isIntersecting) run()
        else setCurrent(0)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, duration]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!match) return <span className={className}>{value}</span>

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden="true">
        {match[1]}
        {current}
        {match[3]}
      </span>
    </span>
  )
}
