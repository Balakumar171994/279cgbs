import { useMemo } from 'react'
import CountUp from './CountUp'
import Flag from './Flag'
import useInView from '../hooks/useInView'
import { aboutPage } from '../data'

// Rough continent outlines as lon/lat ellipses: [lon, lat, radiusLon, radiusLat]
const LAND = [
  // North America
  [-100, 50, 32, 16], [-88, 32, 14, 9], [-102, 24, 9, 7], [-86, 14, 6, 5],
  [-152, 63, 12, 6], [-98, 68, 28, 7], [-42, 72, 12, 8], [-70, 50, 8, 7],
  // South America
  [-60, -10, 15, 16], [-67, -34, 8, 14], [-72, 5, 9, 7],
  // Europe
  [14, 50, 20, 10], [18, 63, 9, 8], [-4, 41, 6, 5], [-3, 54, 3, 5], [32, 57, 16, 9], [26, 42, 8, 4],
  // Africa
  [18, 8, 22, 16], [25, -18, 12, 15], [10, 27, 22, 8], [40, 8, 6, 6],
  // Middle East
  [46, 26, 10, 8], [52, 34, 8, 5],
  // Asia
  [90, 57, 48, 13], [98, 40, 26, 10], [78, 21, 7, 9], [102, 16, 6, 7],
  [115, 30, 9, 10], [102, 4, 2, 4], [114, -2, 13, 4], [138, 37, 3, 6],
  [160, 60, 8, 6], [122, 12, 3, 5],
  // Australia
  [134, -25, 17, 10], [172, -42, 3, 5],
]

const STEP = 4 // degrees between dots

const toX = (lon) => lon + 180 // map box is 360 x 140
const toY = (lat) => 80 - lat

function isLand(lon, lat) {
  return LAND.some(([cx, cy, rx, ry]) => ((lon - cx) / rx) ** 2 + ((lat - cy) / ry) ** 2 <= 1)
}

export default function AboutUsPresence() {
  const { eyebrow, title, highlight, intro, stats, lead, countries } = aboutPage.presence
  const [ref, inView] = useInView(0.2)

  const dots = useMemo(() => {
    const out = []
    for (let lat = 78; lat >= -58; lat -= STEP) {
      for (let lon = -178; lon <= 178; lon += STEP) {
        if (isLand(lon, lat)) out.push([toX(lon), toY(lat)])
      }
    }
    return out
  }, [])

  return (
    <section ref={ref} className={`au-geo${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <div className="au-geo__header">
          <span className="pill-eyebrow pill-eyebrow--dark">{eyebrow}</span>
          <h2 className="au-geo__title">
            {title} <span className="au-geo__highlight">{highlight}</span>
          </h2>
          <p className="au-geo__intro">{intro}</p>
        </div>

        <div className="au-geo__map">
          <svg viewBox="0 0 360 140" className="au-geo__svg" aria-hidden="true">
            {dots.map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="0.9" className="au-geo__dot" />
            ))}
          </svg>

          {countries.map((c, i) => (
            <div
              key={c.code}
              className={`au-geo__pin au-geo__pin--${c.label}`}
              style={{
                left: `${(toX(c.lon) / 360) * 100}%`,
                top: `${(toY(c.lat) / 140) * 100}%`,
                animationDelay: `${0.3 + i * 0.2}s`,
              }}
            >
              <span className="au-geo__pin-dot" />
              <span className="au-geo__pin-label">
                <Flag code={c.code} className="au-geo__flag" />
                {c.name}
              </span>
            </div>
          ))}
        </div>

        <div className="au-geo__stats">
          {stats.map((s) => (
            <div className="au-geo__stat" key={s.label}>
              <CountUp value={s.value} className="au-geo__stat-value" />
              <span className="au-geo__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="au-geo__countries">
          <p className="au-geo__lead">{lead}</p>
          <ul>
            {countries.map((c) => (
              <li key={c.code}>
                <Flag code={c.code} className="au-geo__flag" />
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
