import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'
import { sapFinalCta } from '../data'
import './SapFinalCta.css'

// Orbiting SAP offerings in the background graphic: [label, cx, cy]
const satellites = [
  ['S/4HANA', 760, 120],
  ['RISE', 1010, 150],
  ['GROW', 1110, 330],
  ['BTP', 990, 520],
  ['AMS', 740, 540],
  ['AI', 640, 330],
]

// Circuit traces running from the left edge into the core
const traces = [
  'M0 90 H300 L360 150 H560',
  'M0 250 H220 L280 310 H600',
  'M0 420 H340 L400 360 H600',
  'M0 560 H260 L320 500 H520',
]

export default function SapFinalCta() {
  const [ref, inView] = useInView(0.3)

  return (
    <section ref={ref} className={`sap-final${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <div className="sap-final__panel">
          {/* Background graphic: circuit traces feeding an SAP core with orbiting offerings */}
          <svg
            className="sap-final__art"
            viewBox="0 0 1200 660"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <pattern id="sapFinalGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
              <radialGradient id="sapFinalGlow">
                <stop offset="0%" stopColor="#f3cf55" stopOpacity="0.55" />
                <stop offset="45%" stopColor="#2a6aae" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#2a6aae" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="sapFinalTrace" x1="0" x2="1">
                <stop offset="0%" stopColor="#8fc0f5" stopOpacity="0" />
                <stop offset="100%" stopColor="#8fc0f5" stopOpacity="0.55" />
              </linearGradient>
            </defs>

            <rect width="1200" height="660" fill="url(#sapFinalGrid)" />

            {traces.map((d, i) => (
              <g key={d}>
                <path d={d} className="sap-final__trace" stroke="url(#sapFinalTrace)" />
                <path d={d} className="sap-final__trace-run" style={{ animationDelay: `${i * 0.7}s` }} />
              </g>
            ))}

            <circle cx="880" cy="330" r="260" fill="url(#sapFinalGlow)" className="sap-final__glow" />
            <ellipse cx="880" cy="330" rx="250" ry="210" className="sap-final__orbit" />
            <ellipse cx="880" cy="330" rx="170" ry="140" className="sap-final__orbit sap-final__orbit--inner" />

            {satellites.map(([label, x, y], i) => (
              <g key={label} className="sap-final__sat" style={{ animationDelay: `${i * 0.4}s` }}>
                <line x1="880" y1="330" x2={x} y2={y} className="sap-final__spoke" />
                <circle cx={x} cy={y} r="38" className="sap-final__sat-dot" />
                <text x={x} y={y + 4} textAnchor="middle" className="sap-final__sat-label">
                  {label}
                </text>
              </g>
            ))}

            <circle cx="880" cy="330" r="74" className="sap-final__core-ring" />
            <circle cx="880" cy="330" r="58" className="sap-final__core" />
            <text x="880" y="338" textAnchor="middle" className="sap-final__core-label">
              SAP
            </text>
          </svg>

          <div className="sap-final__content">
            <h2 className="sap-final__title">
              {sapFinalCta.title}{' '}
              <span className="sap-final__highlight">{sapFinalCta.highlight}</span>
            </h2>
            <p className="sap-final__text">{sapFinalCta.text}</p>
            <p className="sap-final__tagline">{sapFinalCta.tagline}</p>

            <div className="sap-final__ctas">
              <Link to={sapFinalCta.primaryCta.href} className="sap-final__btn sap-final__btn--primary">
                {sapFinalCta.primaryCta.label}
                <span aria-hidden="true">→</span>
              </Link>
              <Link to={sapFinalCta.secondaryCta.href} className="sap-final__btn sap-final__btn--ghost">
                {sapFinalCta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
