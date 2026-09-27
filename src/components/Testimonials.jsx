import { useState } from 'react'
import { testimonials } from '../data'
import './Testimonials.css'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  const go = (dir) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials">
      <div className="container-xl">
        <span className="section-eyebrow" style={{ display: 'block', textAlign: 'center' }}>
          Customer Speaks
        </span>
        <h2 className="testimonials__title">Trusted by Enterprise IT Leaders</h2>

        <div className="testimonials__card">
          <div className="testimonials__quote-mark">&ldquo;</div>
          <p className="testimonials__quote">{t.quote}</p>
          <div className="testimonials__author">
            <div className="testimonials__avatar">{t.name.charAt(0)}</div>
            <div>
              <div className="testimonials__name">{t.name}</div>
              <div className="testimonials__role">{t.role}</div>
            </div>
          </div>

          <div className="testimonials__nav">
            <button onClick={() => go(-1)} aria-label="Previous testimonial">
              &larr;
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`testimonials__dot ${i === index ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next testimonial">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
