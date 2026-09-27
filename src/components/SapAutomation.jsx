import useInView from '../hooks/useInView'
import { sapAutomation } from '../data'
import './SapAutomation.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  process: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1" />
    </>
  ),
  it: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M6 12h3l2-4 2 6 2-3h3M9 21h6" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M6 9v4a2 2 0 0 0 2 2h7" />
      <path d="M13 13l2 2-2 2" />
    </>
  ),
  ops: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 12.5l9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  ai: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M10 10h4v4h-4z" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </>
  ),
}

export default function SapAutomation() {
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} id="sap-automation" className={`sap-auto${inView ? ' is-in' : ''}`}>
      <div className="container-xl sap-auto__inner">
        <div className="sap-auto__text">
          <span className="pill-eyebrow">{sapAutomation.eyebrow}</span>
          <h2 className="sap-auto__title">
            {sapAutomation.title}{' '}
            <span className="grad-text sap-auto__highlight">{sapAutomation.highlight}</span>
          </h2>
          {sapAutomation.intro.map((p) => (
            <p className="sap-auto__intro" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}

          {/* Manual -> Intelligent meter */}
          <div className="sap-auto__meter">
            <div className="sap-auto__meter-labels">
              <span>Manual</span>
              <span>Intelligent</span>
            </div>
            <div className="sap-auto__meter-bar">
              <span className="sap-auto__meter-fill" />
              <span className="sap-auto__meter-knob" />
            </div>
            <p className="sap-auto__tagline">
              <span>{sapAutomation.tagline[0]}</span>{' '}
              <span className="grad-text">{sapAutomation.tagline[1]}</span>
            </p>
          </div>
        </div>

        {/* Automation pipeline */}
        <div className="sap-auto__pipe">
          <span className="sap-auto__rail" aria-hidden="true">
            <span className="sap-auto__pulse" />
            <span className="sap-auto__pulse sap-auto__pulse--2" />
          </span>
          <ul className="sap-auto__list">
            {sapAutomation.items.map((item, i) => (
              <li
                key={item.label}
                className="sap-auto__item"
                style={{ '--i': i, animationDelay: `${0.15 + i * 0.1}s` }}
              >
                <span className="sap-auto__node" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icons[item.icon]}
                  </svg>
                </span>
                <span className="sap-auto__label">{item.label}</span>
                <span className="sap-auto__bolt" aria-hidden="true">⚡</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
