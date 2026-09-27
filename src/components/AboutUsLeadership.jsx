import useInView from '../hooks/useInView'
import { aboutPage } from '../data'

// Photo file name -> bundled URL
const photos = import.meta.glob('../assets/team/*', { eager: true, import: 'default' })
const photoUrl = (file) => photos[`../assets/team/${file}`]

const linkedinPath =
  'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z'

export default function AboutUsLeadership() {
  const [ref, inView] = useInView(0.1)
  const { eyebrow, intro, people } = aboutPage.leadership

  return (
    <section id="leadership" className="au-team">
      <div className="container-xl">
        <div className="au-team__header">
          <span className="pill-eyebrow">{eyebrow}</span>
          <p className="au-team__intro">{intro}</p>
        </div>

        <ul ref={ref} className={`au-team__grid${inView ? ' is-in' : ''}`}>
          {people.map((p, i) => (
            <li
              key={p.name}
              className="au-team__card"
              style={{ animationDelay: `${(i % 5) * 0.08 + Math.floor(i / 5) * 0.2}s` }}
            >
              <div className="au-team__photo">
                <img src={photoUrl(p.photo)} alt={p.name} loading="lazy" />
                <div className="au-team__overlay">
                  <p className="au-team__bio">{p.bio}</p>
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="au-team__linkedin"
                    aria-label={`${p.name} on LinkedIn`}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={linkedinPath} fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="au-team__info">
                <h3 className="au-team__name">{p.name}</h3>
                <p className="au-team__role">{p.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
