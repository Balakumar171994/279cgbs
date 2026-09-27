import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nav, socials } from '../data'
import logo from '../assets/canopus-logo-landscape.png'
import './Navbar.css'

const linkedin = socials.find((s) => s.key === 'linkedin')

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const { pathname, hash } = useLocation()

  // Close any open menu once a link has taken us somewhere
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
    >
      <div className="navbar__inner container-xl">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Canopus GBS" />
        </Link>

        {/* Desktop menu */}
        <nav className="navbar__menu">
          {nav.map((item) => (
            <div
              key={item.label}
              className="navbar__item"
              onMouseEnter={() => item.dropdown && setOpenMenu(item.label)}
              onMouseLeave={() => item.dropdown && setOpenMenu(null)}
            >
              <Link
                to={item.href}
                className={`navbar__link ${isCurrent(item.href, pathname) ? 'navbar__link--active' : ''}`}
              >
                {item.label}
                {item.dropdown && <span className="navbar__caret" />}
              </Link>

              {item.dropdown && (
                <div
                  className={`navbar__dropdown ${
                    openMenu === item.label ? 'navbar__dropdown--open' : ''
                  }`}
                >
                  {item.dropdown.map((sub) => (
                    <Link key={sub.label} to={sub.href} className="navbar__dropdown-link">
                      <span className="navbar__dropdown-title">{sub.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <a
          href={linkedin.href}
          className="navbar__linkedin"
          aria-label="Canopus GBS on LinkedIn"
          {...(linkedin.href !== '#' && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={linkedin.path} />
          </svg>
        </a>

        {/* Mobile toggle */}
        <button
          className={`navbar__burger ${mobileOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        {nav.map((item) => (
          <MobileItem key={item.label} item={item} />
        ))}
      </div>
    </header>
  )
}

// Top-level item is highlighted while on its page (Home only on the home page)
function isCurrent(href, pathname) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

function MobileItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar__mobile-item">
      <div
        className="navbar__mobile-link"
        onClick={() => item.dropdown && setOpen((v) => !v)}
      >
        <Link to={item.href} onClick={(e) => item.dropdown && e.preventDefault()}>
          {item.label}
        </Link>
        {item.dropdown && (
          <span className={`navbar__caret ${open ? 'navbar__caret--open' : ''}`} />
        )}
      </div>
      {item.dropdown && (
        <div className={`navbar__mobile-sub ${open ? 'navbar__mobile-sub--open' : ''}`}>
          {item.dropdown.map((sub) => (
            <Link key={sub.label} to={sub.href}>
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
