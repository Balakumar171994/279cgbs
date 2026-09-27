import { about } from '../data'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container-xl about__grid">
        <div className="about__copy">
          <span className="section-eyebrow">{about.eyebrow}</span>
          <h2 className="about__title">{about.title}</h2>
          {about.body.map((para, i) => (
            <p className="about__para" key={i}>
              {para}
            </p>
          ))}
        </div>

        <div className="about__highlights">
          {about.highlights.map((h) => (
            <div className="about__highlight-card" key={h.label}>
              <div className="about__highlight-value">{h.value}</div>
              <div className="about__highlight-label">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
