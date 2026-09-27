import { blogs } from '../data'
import './Blogs.css'

export default function Blogs() {
  return (
    <section id="blogs" className="blogs">
      <div className="container-xl">
        <span className="section-eyebrow" style={{ display: 'block', textAlign: 'center' }}>
          Blogs / FAQ
        </span>
        <h2 className="blogs__title">Insights from Our Team</h2>
        <p className="blogs__subtitle">
          Practical thinking on SAP, cloud, and AI-driven operations — from the people delivering it.
        </p>

        <div className="blogs__grid">
          {blogs.map((post) => (
            <article className="blogs__card" key={post.title}>
              <div className="blogs__date">{post.date}</div>
              <h3 className="blogs__card-title">{post.title}</h3>
              <p className="blogs__excerpt">{post.excerpt}</p>
              <a href="#blogs" className="blogs__link">
                Read More <span aria-hidden="true">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
