import { Link } from 'react-router-dom'
import NetworkCanvas from './NetworkCanvas'
import sapLogo from '../assets/partner/SAP.png'
import { sapHero } from '../data'
import './SapHero.css'

export default function SapHero() {
  const { orbit } = sapHero

  return (
    <section className="sap-hero">
      <NetworkCanvas className="sap-hero__canvas" />

      <div className="container-xl sap-hero__inner">
        <div className="sap-hero__text">
          <h1 className="sap-hero__title">
            {sapHero.title}{' '}
            <span className="sap-hero__highlight">{sapHero.highlight}</span>
          </h1>

          {sapHero.paragraphs.map((p) => (
            <p className="sap-hero__para" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}

          <div className="sap-hero__cta-row">
            <Link to={sapHero.primaryCta.href} className="sap-hero__btn sap-hero__btn--primary">
              {sapHero.primaryCta.label}
              <span aria-hidden="true">→</span>
            </Link>
            <Link to={sapHero.secondaryCta.href} className="sap-hero__btn sap-hero__btn--ghost">
              {sapHero.secondaryCta.label}
            </Link>
          </div>
        </div>

        {/* SAP core with the SAP offerings circling it */}
        <div className="sap-hero__visual" aria-hidden="true">
          <span className="sap-hero__ring sap-hero__ring--outer" />
          <span className="sap-hero__ring sap-hero__ring--inner" />

          <div className="sap-hero__orbit">
            {orbit.map((label, i) => (
              <span
                key={label}
                className={`sap-hero__chip${i % 2 ? ' sap-hero__chip--alt' : ''}`}
                style={{ '--angle': `${(360 / orbit.length) * i}deg` }}
              >
                <span className="sap-hero__chip-inner">{label}</span>
              </span>
            ))}
          </div>

          <div className="sap-hero__core">
            <span className="sap-hero__pulse" />
            <span className="sap-hero__pulse sap-hero__pulse--delay" />
            <div className="sap-hero__core-inner">
              <img src={sapLogo} alt="" className="sap-hero__logo" />
              <span className="sap-hero__core-label">Digital Core</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
