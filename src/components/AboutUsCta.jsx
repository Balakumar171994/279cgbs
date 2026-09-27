import { Link } from 'react-router-dom'
import NetworkCanvas from './NetworkCanvas'
import useInView from '../hooks/useInView'
import { aboutPage } from '../data'

export default function AboutUsCta() {
  const { cta } = aboutPage
  const [ref, inView] = useInView(0.3)

  return (
    <section ref={ref} className={`au-cta${inView ? ' is-in' : ''}`}>
      <div className="container-xl">
        <div className="au-cta__panel">
          <NetworkCanvas className="au-cta__canvas" />
          <span className="au-cta__ring au-cta__ring--1" aria-hidden="true" />
          <span className="au-cta__ring au-cta__ring--2" aria-hidden="true" />

          <div className="au-cta__content">
            <h2 className="au-cta__title">
              {cta.title} <span className="au-cta__highlight">{cta.highlight}</span>
            </h2>

            <div className="au-cta__lines">
              {cta.lines.map((l, i) => (
                <p key={l} className={`au-cta__line au-cta__line--${i}`}>
                  {l}
                </p>
              ))}
            </div>

            <p className="au-cta__text">{cta.text}</p>
            <p className="au-cta__tagline">{cta.tagline}</p>

            <div className="au-cta__buttons">
              <Link to={cta.primaryCta.href} className="au-cta__btn au-cta__btn--primary">
                {cta.primaryCta.label}
                <span aria-hidden="true">→</span>
              </Link>
              <Link to={cta.secondaryCta.href} className="au-cta__btn au-cta__btn--ghost">
                {cta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
