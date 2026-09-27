import useInView from '../hooks/useInView'
import { aboutPage } from '../data'

const eye = (
  <>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </>
)

const target = (
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" />
  </>
)

function Card({ data, icon, variant, delay }) {
  return (
    <article className={`au-vm__card au-vm__card--${variant}`} style={{ animationDelay: delay }}>
      <span className="au-vm__watermark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          {icon}
        </svg>
      </span>
      <div className="au-vm__head">
        <span className="au-vm__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {icon}
          </svg>
        </span>
        <span className="au-vm__eyebrow">{data.eyebrow}</span>
      </div>
      <h2 className="au-vm__title">{data.title}</h2>
      <blockquote className="au-vm__statement">{data.statement}</blockquote>
      {data.text && <p className="au-vm__text">{data.text}</p>}
    </article>
  )
}

export default function AboutUsVision() {
  const [ref, inView] = useInView(0.2)
  const { vision, mission } = aboutPage

  return (
    <section ref={ref} className={`au-vm${inView ? ' is-in' : ''}`}>
      <div className="container-xl au-vm__grid">
        <Card data={vision} icon={eye} variant="vision" delay="0s" />
        <Card data={mission} icon={target} variant="mission" delay="0.2s" />
      </div>
    </section>
  )
}
