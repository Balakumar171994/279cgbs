import { Fragment } from 'react'
import useInView from '../hooks/useInView'
import { sapCustomApps } from '../data'
import './SapCustomApps.css'

export default function SapCustomApps() {
  const [gridRef, gridIn] = useInView(0.2)
  const [eqRef, eqIn] = useInView(0.5)
  const { equation } = sapCustomApps

  return (
    <section id="sap-custom-apps" className="sap-apps">
      <div className="container-xl">
        <div className="sap-apps__header">
          <span className="pill-eyebrow">{sapCustomApps.eyebrow}</span>
          <h2 className="sap-apps__title">
            {sapCustomApps.title}{' '}
            <span className="grad-text sap-apps__highlight">{sapCustomApps.highlight}</span>
          </h2>
          <p className="sap-apps__lead">{sapCustomApps.lead}</p>
          {sapCustomApps.intro.map((p) => (
            <p className="sap-apps__intro" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </div>

        <ul ref={gridRef} className={`sap-apps__grid${gridIn ? ' is-in' : ''}`}>
          {sapCustomApps.techs.map((t, i) => (
            <li
              key={t.key}
              className={`sap-apps__card sap-apps__card--${t.key}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <span className="sap-apps__mark" aria-hidden="true">
                {t.mark}
              </span>
              <h3 className="sap-apps__card-title">{t.title}</h3>
              <p className="sap-apps__card-text">{t.text}</p>
              <span className="sap-apps__plug" aria-hidden="true" />
            </li>
          ))}
        </ul>

        {/* SAP Core + Custom Applications + Integrations = Connected Enterprise */}
        <div ref={eqRef} className={`sap-apps__eq${eqIn ? ' is-in' : ''}`}>
          {equation.map((term, i) => (
            <Fragment key={term}>
              {i > 0 && (
                <span className="sap-apps__op" style={{ animationDelay: `${i * 0.4 - 0.2}s` }}>
                  +
                </span>
              )}
              <span className="sap-apps__term" style={{ animationDelay: `${i * 0.4}s` }}>
                {term}
              </span>
            </Fragment>
          ))}
          <span
            className="sap-apps__op sap-apps__op--eq"
            style={{ animationDelay: `${equation.length * 0.4 - 0.2}s` }}
          >
            =
          </span>
          <span
            className="sap-apps__result"
            style={{ animationDelay: `${equation.length * 0.4}s` }}
          >
            {sapCustomApps.result}
          </span>
        </div>
      </div>
    </section>
  )
}
