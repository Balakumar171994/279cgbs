import { confidenceBanner } from '../data'
import bannerBg from '../assets/banner/banner-bg.jpg'
import './ConfidenceBanner.css'

export default function ConfidenceBanner() {
  return (
    <section className="banner">
      {/* Fixed background: stays still while the page scrolls past */}
      <div className="banner__bg-clip" aria-hidden="true">
        <div className="banner__bg" style={{ backgroundImage: `url(${bannerBg})` }} />
      </div>
      <div className="banner__overlay" aria-hidden="true" />

      <div className="container-xl banner__content">
        <h2 className="banner__title">
          <span>{confidenceBanner.title}</span>
          <span className="banner__highlight">{confidenceBanner.highlight}</span>
        </h2>
        <span className="banner__rule" aria-hidden="true" />
        <p className="banner__text">{confidenceBanner.text}</p>
      </div>
    </section>
  )
}
