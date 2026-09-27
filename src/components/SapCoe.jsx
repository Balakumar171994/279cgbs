import useInView from '../hooks/useInView'
import { sapCoe } from '../data'
import './SapCoe.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  best: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14.5L8 22l4-2 4 2-1-7.5" />
    </>
  ),
  expert: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  auto: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1" />
    </>
  ),
  gov: (
    <>
      <path d="M3 10l9-6 9 6" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18" />
    </>
  ),
  improve: (
    <>
      <path d="M4 12a8 8 0 0 1 14-5.3L20 9" />
      <path d="M20 4v5h-5" />
      <path d="M20 12a8 8 0 0 1-14 5.3L4 15" />
      <path d="M4 20v-5h5" />
    </>
  ),
  knowledge: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z" />
      <path d="M4 19a2 2 0 0 1 2-2h13M9 7h6M9 11h4" />
    </>
  ),
}

export default function SapCoe() {
  const [ref, inView] = useInView(0.15)

  return (
    <section ref={ref} id="sap-coe" className={`sap-coe${inView ? ' is-in' : ''}`}>
      {/* Decorative honeycomb in the background */}
      <span className="sap-coe__honey" aria-hidden="true" />

      <div className="container-xl sap-coe__inner">
        <div className="sap-coe__text">
          <span className="pill-eyebrow">{sapCoe.eyebrow}</span>
          <h2 className="sap-coe__title">
            {sapCoe.title}{' '}
            <span className="grad-text sap-coe__highlight">{sapCoe.highlight}</span>
          </h2>
          <p className="sap-coe__intro">{sapCoe.intro}</p>

          <div className="sap-coe__badge" aria-hidden="true">
            <span className="sap-coe__badge-hex">CoE</span>
            <span className="sap-coe__badge-text">
              Centre of
              <strong>Excellence</strong>
            </span>
          </div>
        </div>

        <div>
          <h3 className="sap-coe__subhead">{sapCoe.enablesTitle}</h3>
          <ul className="sap-coe__grid">
            {sapCoe.items.map((item, i) => (
              <li
                key={item.title}
                className="sap-coe__card"
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
              >
                <span className={`sap-coe__hex${i % 2 ? ' sap-coe__hex--alt' : ''}`}>
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
                <div>
                  <h4 className="sap-coe__card-title">{item.title}</h4>
                  <p className="sap-coe__card-text">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
