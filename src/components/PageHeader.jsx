import { Link } from 'react-router-dom'
import NetworkCanvas from './NetworkCanvas'
import './PageHeader.css'

// Top banner for inner pages — same white + moving network look as the home hero
export default function PageHeader({ eyebrow, title, highlight, text }) {
  return (
    <section className="page-header">
      <NetworkCanvas className="page-header__canvas" />
      <div className="container-xl page-header__content">
        <nav className="page-header__crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </nav>
        <h1 className="page-header__title">
          {title} <span className="page-header__highlight">{highlight}</span>
        </h1>
        {text && <p className="page-header__text">{text}</p>}
      </div>
    </section>
  )
}
