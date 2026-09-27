import NetworkCanvas from './NetworkCanvas'
import useInView from '../hooks/useInView'
import { aboutPage } from '../data'

// Banner, company story and philosophy
export default function AboutUsIntro() {
  const { hero, story, philosophy } = aboutPage
  const [storyRef, storyIn] = useInView(0.15)
  const [philRef, philIn] = useInView(0.4)

  return (
    <>
      <section className="au-hero">
        <NetworkCanvas className="au-hero__canvas" />
        <div className="container-xl au-hero__content">
          <span className="pill-eyebrow au-hero__eyebrow">{hero.eyebrow}</span>
          <h1 className="au-hero__title">
            {hero.title} <span className="grad-text au-hero__highlight">{hero.highlight}</span>
          </h1>
          <p className="au-hero__intro">{hero.intro}</p>
        </div>
      </section>

      <section ref={storyRef} className={`au-story${storyIn ? ' is-in' : ''}`}>
        <div className="container-xl au-story__inner">
          <div className="au-story__text">
            <span className="pill-eyebrow">{story.eyebrow}</span>
            {story.paragraphs.map((p) => (
              <p className="au-story__para" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
            <ul className="au-story__caps">
              {story.capabilities.map((c, i) => (
                <li key={c} style={{ animationDelay: `${0.3 + i * 0.07}s` }}>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <ol className="au-story__timeline">
            <span className="au-story__line" aria-hidden="true" />
            {story.milestones.map((m, i) => (
              <li
                key={m.tag}
                className="au-story__milestone"
                style={{ animationDelay: `${0.2 + i * 0.25}s` }}
              >
                <span className="au-story__tag">{m.tag}</span>
                <div className="au-story__card">
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={philRef} className={`au-phil${philIn ? ' is-in' : ''}`}>
        <div className="container-xl">
          <p className="au-phil__lead">{philosophy.lead}</p>
          <ol className="au-phil__steps">
            {philosophy.steps.map((s, i) => (
              <li
                key={s}
                className="au-phil__step"
                style={{ animationDelay: `${0.15 + i * 0.3}s` }}
              >
                <span className="au-phil__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="au-phil__text">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
