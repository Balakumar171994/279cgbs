import { stats2 } from '../data'
import './ImpactStats.css'

export default function ImpactStats() {
  return (
    <section className="impact">
      <div className="container-xl impact__grid">
        {stats2.map((s) => (
          <div className="impact__item" key={s.label}>
            <div className="impact__value">{s.value}</div>
            <div className="impact__label">{s.label}</div>
            <div className="impact__note">{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
