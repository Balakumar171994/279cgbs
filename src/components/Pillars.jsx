import { pillars } from '../data'
import './Pillars.css'

export default function Pillars() {
  return (
    <section className="pillars">
      <div className="container-xl">
        <div className="pillars__grid">
          {pillars.map((p, i) => (
            <div className="pillars__card" key={p.title} style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="pillars__tag">{p.tag}</span>
              <h3 className="pillars__title">{p.title}</h3>
              <ul className="pillars__list">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
