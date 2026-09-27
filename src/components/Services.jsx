import { Link } from 'react-router-dom'
import { services } from '../data'
import './Services.css'

const icons = ['⚙️', '🛡️', '☁️', '🔐', '📊', '💻']

// `ids` limits the cards shown (e.g. only the SAP ones); `showHead` hides the
// generic heading when the page already has its own header.
export default function Services({ id = 'services', ids, showHead = true }) {
  const list = services
    .map((s, i) => ({ ...s, icon: icons[i % icons.length] }))
    .filter((s) => !ids || ids.includes(s.id))

  return (
    <section id={id} className="services">
      <div className="container-xl">
        {showHead && (
          <div className="services__head">
            <span className="section-eyebrow">Our Services</span>
            <h2 className="services__title">
              Cutting-Edge Services, <span>Tailored to Your Enterprise</span>
            </h2>
            <p className="services__subtitle">
              Whether you're migrating to S/4HANA, hardening your cloud security, or automating IT
              operations with AI — our teams cover the full stack.
            </p>
          </div>
        )}

        <div className="services__grid">
          {list.map((s) => (
            <div className="services__card" id={s.id} key={s.id}>
              <div className="services__icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <Link to="/contact" className="services__link">
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
