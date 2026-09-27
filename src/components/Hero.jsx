import NetworkCanvas from './NetworkCanvas'
import CountUp from './CountUp'
import { Link } from 'react-router-dom'
import { hero } from '../data'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <NetworkCanvas className="hero__canvas" />
      </div>

      <div className="container-xl hero__content">
        <h1 className="hero__title">
          {hero.title.map((line) => (
            <span className="hero__title-line" key={line}>
              {line}
            </span>
          ))}
        </h1>
        <div className="hero__intro-box">
          <p className="hero__subtitle">{hero.subtitle}</p>
        </div>

        <div className="hero__cta-row">
          <Link to={hero.primaryCta.href} className="hero__btn hero__btn--primary">
            {hero.primaryCta.label}
          </Link>
          <Link to={hero.secondaryCta.href} className="hero__btn hero__btn--ghost">
            {hero.secondaryCta.label}
          </Link>
        </div>

        <div className="hero__stats-box">
          <h2 className="hero__stats-heading">{hero.statsHeading}</h2>
          <div className="hero__stats">
            {hero.stats.map((s) => (
              <div className="hero__stat" key={s.label}>
                <CountUp value={s.value} className="hero__stat-value" />
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

