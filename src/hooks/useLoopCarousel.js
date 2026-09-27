import { useCallback, useEffect, useRef, useState } from 'react'

// Endless one-step-at-a-time carousel.
// Render `copies` (three copies of the items) and apply `trackStyle` +
// `onTransitionEnd` to the track. We stay in the middle copy and silently
// jump back by one copy after each move, so it loops in both directions.
export default function useLoopCarousel(items, { perView, slideMs, delay }) {
  const count = items.length
  const [index, setIndex] = useState(count)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const moving = useRef(false)

  const move = useCallback((dir) => {
    if (moving.current) return
    moving.current = true
    setAnimate(true)
    setIndex((i) => i + dir)
  }, [])

  const onTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return
    moving.current = false
    if (index >= count * 2 || index < count) {
      setAnimate(false)
      setIndex((i) => (i >= count * 2 ? i - count : i + count))
    }
  }

  // Turn the transition back on after a silent jump has been painted
  useEffect(() => {
    if (animate) return
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
    return () => cancelAnimationFrame(id)
  }, [animate])

  // Auto move right-to-left; any move restarts the wait
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduceMotion) return
    const t = setTimeout(() => move(1), delay)
    return () => clearTimeout(t)
  }, [index, paused, move, delay])

  return {
    index,
    copies: [...items, ...items, ...items],
    move,
    setPaused,
    onTransitionEnd,
    trackStyle: {
      transform: `translateX(-${(index * 100) / perView}%)`,
      transition: animate ? `transform ${slideMs}ms ease-in-out` : 'none',
    },
  }
}

// Re-evaluates `pick(window.innerWidth)` on resize
export function useResponsiveValue(pick) {
  const [value, setValue] = useState(() => pick(window.innerWidth))
  useEffect(() => {
    const onResize = () => setValue(pick(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [pick])
  return value
}
