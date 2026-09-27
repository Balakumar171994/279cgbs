import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { sapCloudPath } from '../data'
import './SapCloudPath.css'

const icons = {
  grow: (
    <>
      <path d="M4 19l5-6 4 3 7-9" />
      <path d="M15 7h5v5" />
    </>
  ),
  rise: (
    <>
      <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.5 4.5 0 0 0 7 18z" />
      <path d="M12 16v-5M9.5 13.5L12 11l2.5 2.5" />
    </>
  ),
}

// Adds `is-in` once the element scrolls into view
function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

export default function SapCloudPath() {
  const { paths, value } = sapCloudPath
  const [pathsRef, pathsIn] = useInView(0.2)
  const [valueRef, valueIn] = useInView(0.3)
  const [step, setStep] = useState(0)

  // Light up the value steps one after another
  useEffect(() => {
    if (!valueIn) return
    const id = setInterval(() => setStep((s) => (s + 1) % value.steps.length), 1300)
    return () => clearInterval(id)
  }, [valueIn, value.steps.length])

  return (
    <section id="sap-cloud-path" className="sap-cloud">
      <div className="container-xl">
        <div className="sap-cloud__header">
          <span className="sap-cloud__eyebrow">{sapCloudPath.eyebrow}</span>
          <h2 className="sap-cloud__title">
            {sapCloudPath.title}{' '}
            <span className="sap-cloud__highlight">{sapCloudPath.highlight}</span>
          </h2>
          {sapCloudPath.intro.map((p) => (
            <p className="sap-cloud__intro" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </div>

        {/* GROW vs RISE */}
        <div ref={pathsRef} className={`sap-cloud__paths${pathsIn ? ' is-in' : ''}`}>
          {paths.map((path, i) => (
            <article
              key={path.title}
              className={`sap-cloud__path sap-cloud__path--${path.icon}`}
            >
              <div className="sap-cloud__path-head">
                <span className="sap-cloud__path-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {icons[path.icon]}
                  </svg>
                </span>
                <div>
                  <h3 className="sap-cloud__path-title">{path.title}</h3>
                  <p className="sap-cloud__path-tagline">{path.tagline}</p>
                </div>
              </div>

              <ul className="sap-cloud__points">
                {path.points.map((point, j) => (
                  <li
                    key={point}
                    className="sap-cloud__point"
                    style={{ transitionDelay: `${0.35 + i * 0.15 + j * 0.08}s` }}
                  >
                    <span className="sap-cloud__check" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <span className="sap-cloud__or" aria-hidden="true">OR</span>
        </div>

        {/* From SAP Vision to SAP Value */}
        <div ref={valueRef} className={`sap-cloud__value${valueIn ? ' is-in' : ''}`}>
          <h3 className="sap-cloud__value-title">
            {value.title}{' '}
            <span className="sap-cloud__value-highlight">{value.highlight}</span>
          </h3>

          <ol className="sap-cloud__steps">
            {value.steps.map((s, i) => {
              const classes = ['sap-cloud__step']
              if (i === step) classes.push('is-active')
              if (i < step) classes.push('is-done')
              return (
                <li
                  key={s}
                  className={classes.join(' ')}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <span className="sap-cloud__step-num">{i + 1}</span>
                  <span className="sap-cloud__step-label">{s}</span>
                </li>
              )
            })}
          </ol>

          <Link to={value.cta.href} className="sap-cloud__cta">
            {value.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
