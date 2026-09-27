import { caseStudies } from '../data'
import './CaseStudies.css'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="case-studies">
      <div className="container-xl">
        <span className="section-eyebrow" style={{ display: 'block', textAlign: 'center' }}>
          Case Studies
        </span>
        <h2 className="case-studies__title">Proven Outcomes, Real Engagements</h2>

        <div className="case-studies__grid">
          {caseStudies.map((cs, i) => (
            <div className="case-studies__card" key={cs.title}>
              <div className="case-studies__index">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="case-studies__card-title">{cs.title}</h3>
              <p className="case-studies__outcome">{cs.outcome}</p>
              <a href="#case-studies" className="case-studies__link">
                Read Case Study <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
