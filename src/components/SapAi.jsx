import useInView from '../hooks/useInView'
import { sapAi } from '../data'
import './SapAi.css'

const sparkle = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3L12 3z" />
    <path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15z" />
  </svg>
)

export default function SapAi() {
  const [gridRef, gridIn] = useInView(0.15)
  const [chainRef, chainIn] = useInView(0.4)

  return (
    <section id="sap-ai" className="sap-ai">
      <div className="container-xl">
        <div className="sap-ai__header">
          <span className="pill-eyebrow">{sapAi.eyebrow}</span>
          <h2 className="sap-ai__title">
            {sapAi.title} <span className="grad-text sap-ai__highlight">{sapAi.highlight}</span>
          </h2>
          {sapAi.intro.map((p) => (
            <p className="sap-ai__intro" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </div>

        <h3 className="sap-ai__subhead">
          <span className="sap-ai__subhead-icon">{sparkle}</span>
          {sapAi.possibilitiesTitle}
        </h3>

        <ul ref={gridRef} className={`sap-ai__grid${gridIn ? ' is-in' : ''}`}>
          {sapAi.possibilities.map((p, i) => (
            <li
              key={p}
              className="sap-ai__card"
              style={{ animationDelay: `${i * 0.08}s`, '--shimmer-delay': `${i * 0.4}s` }}
            >
              <span className="sap-ai__card-icon">{sparkle}</span>
              <span className="sap-ai__card-text">{p}</span>
            </li>
          ))}
        </ul>

        {/* Automation -> Intelligence -> Business Impact */}
        <div ref={chainRef} className={`sap-ai__chain${chainIn ? ' is-in' : ''}`}>
          <div className="sap-ai__chain-row">
            {sapAi.chain.map((c, i) => (
              <div className="sap-ai__chain-part" key={c}>
                {i > 0 && (
                  <span className="sap-ai__link" aria-hidden="true">
                    <span className="sap-ai__link-dot" style={{ animationDelay: `${i * 0.5}s` }} />
                  </span>
                )}
                <span
                  className={`sap-ai__chain-node sap-ai__chain-node--${i}`}
                  style={{ animationDelay: `${0.2 + i * 0.35}s` }}
                >
                  {c}
                </span>
              </div>
            ))}
          </div>
          <p className="sap-ai__tagline">{sapAi.tagline}</p>
        </div>
      </div>
    </section>
  )
}
