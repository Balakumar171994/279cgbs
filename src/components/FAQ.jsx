import { useState } from 'react'
import { faqs } from '../data'
import './FAQ.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="container-xl faq__inner">
        <span className="section-eyebrow" style={{ display: 'block', textAlign: 'center' }}>
          FAQ
        </span>
        <h2 className="faq__title">Questions, Answered</h2>

        <div className="faq__list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`} key={item.q}>
                <button
                  className="faq__question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="faq__icon">{isOpen ? '\u2212' : '+'}</span>
                </button>
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
