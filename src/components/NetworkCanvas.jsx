import { useEffect, useRef } from 'react'

// Logo colours: blue #2A6AAE, yellow #F8CF2E
const BLUE = '42, 106, 174'
const YELLOW = '232, 184, 40'
const LINK_DISTANCE = 150

// Drifting dots joined by faint lines — the moving "network" background
export default function NetworkCanvas({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let points = []
    let frame

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(110, Math.round((width * height) / 11000))
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1,
        color: Math.random() < 0.25 ? YELLOW : BLUE,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of points) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      }

      for (let i = 0; i < points.length; i++) {
        const a = points[i]
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${a.color}, ${(1 - dist / LINK_DISTANCE) * 0.35})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const p of points) {
        ctx.fillStyle = `rgba(${p.color}, 0.7)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reduceMotion) frame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
