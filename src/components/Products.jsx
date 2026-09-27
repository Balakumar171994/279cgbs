import { Link } from 'react-router-dom'
import { products } from '../data'
import './Products.css'

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="container-xl">
        <div className="products__head">
          <span className="section-eyebrow section-eyebrow--light">Innovation &amp; Products</span>
          <h2 className="products__title">Proprietary AI, Built for SAP</h2>
          <p className="products__subtitle">
            Not generic tooling — purpose-built platforms engineered specifically for the SAP
            ecosystem.
          </p>
        </div>

        <div className="products__grid">
          {products.map((p) => (
            <div className={`products__card`} id={p.id} key={p.id}>
              <div className={`products__accent bg-gradient-to-br ${p.accent}`} />
              <div className="products__body">
                <h3>{p.name}</h3>
                <span className="products__tagline">{p.tagline}</span>
                <p>{p.desc}</p>
                <Link to="/contact" className="products__link">
                  See {p.name} in action &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
