import { Link } from 'react-router-dom'
import { finalCta } from '../data'
import './CTA.css'

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta__glow" />
      <div className="container-xl cta__inner">
        <span className="section-eyebrow">{finalCta.eyebrow}</span>
        <h2 className="cta__title">{finalCta.title}</h2>
        <p className="cta__subtitle">{finalCta.subtitle}</p>

        <div className="cta__row">
          <Link to={finalCta.primaryCta.href} className="cta__btn cta__btn--primary">
            {finalCta.primaryCta.label}
          </Link>
          <Link to={finalCta.secondaryCta.href} className="cta__btn cta__btn--ghost">
            {finalCta.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
