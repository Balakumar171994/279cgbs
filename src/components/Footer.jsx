import { Link } from 'react-router-dom'
import { footerLinks, offices, socials } from '../data'
import Flag from './Flag'
import logo from '../assets/cgbs white.png'
import './Footer.css'

const pathFor = (label) => {
  const map = {
    'SAP Solutions': '/sap-solutions',
    'SAP Managed Services': '/sap-managed-services',
    'Digital Infrastructure & Cloud': '/digital-services/infrastructure-cloud',
    'Cybersecurity & Digital Trust': '/digital-services/cybersecurity-digital-trust',
    'Data, Analytics & AI': '/digital-services/data-analytics-ai',
    'Digital Workplace & Automation': '/digital-services/digital-workplace-automation',
    'CarinAI': '/products/carinai',
    'VegAI': '/products/vegai',
    'SMARTOPS': '/products/smartops',
    'About Us': '/about',
    'Blogs': '/resources#blogs',
    // Placeholder until the Digital Library content is ready (same as the Resources menu)
    'Digital Library': '/resources',
    'FAQ': '/resources#faq',
    'Contact': '/contact',
  }
  return map[label] || '/'
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-xl footer__top">
        <div className="footer__brand">
          <img src={logo} alt="Canopus GBS" className="footer__logo" />
          <p className="footer__tagline">
            AI Transformation Partner for Enterprise Growth — SAP, Cloud, Cybersecurity, Data & AI,
            and proprietary AI products under one roof.
          </p>
          <div className="footer__social">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className={`footer__social-link footer__social-link--${s.key}`}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__cols">
          {Object.entries(footerLinks).map(([col, links]) => (
            <div className="footer__col" key={col}>
              <h4>{col}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <Link to={pathFor(link)}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container-xl footer__offices">
        <div className="footer__offices-head">
          <h3 className="footer__offices-title">{offices.title}</h3>
          <p className="footer__offices-sub">{offices.subtitle}</p>
        </div>

        <div className="footer__offices-grid">
          {offices.list.map((o) => (
            <address className="footer__office" key={o.address[0]}>
              <div className="footer__office-country">
                <Flag code={o.flag} className="footer__flag" />
                {o.country}
              </div>
              {o.company && <div className="footer__office-company">{o.company}</div>}
              <p className="footer__office-address">
                {o.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
              <a className="footer__office-contact" href={`tel:${o.phone.replace(/[^\d+]/g, '')}`}>
                <span>Phone:</span> {o.phone}
              </a>
              {o.email && (
                <a className="footer__office-contact" href={`mailto:${o.email}`}>
                  <span>Email:</span> {o.email}
                </a>
              )}
            </address>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container-xl footer__bottom-inner">
          <span>&copy; {new Date().getFullYear()} Canopus GBS. All rights reserved.</span>
          <div className="footer__legal">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
