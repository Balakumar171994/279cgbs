import { useEffect, useRef, useState } from 'react'
import sap from '../assets/partner/SAP.png'
import aws from '../assets/partner/AWS.jpg'
import kyndryl from '../assets/partner/kindryl.jpg'
import suse from '../assets/partner/suse.png'
import ibm from '../assets/partner/IBM.jpg'
import docusign from '../assets/partner/docusign.png'
import motadata from '../assets/partner/motadata.png'
import monday from '../assets/partner/monday.com.png'
import azure from '../assets/partner/azure.png'
import microsoft from '../assets/partner/microsoft.png'
import ict from '../assets/partner/ICT.png'
import hope from '../assets/partner/hope.jpg'
import upguard from '../assets/partner/upguard.jpg'
import mscMalaysia from '../assets/partner/malaysia.jpg'
import iso9001 from '../assets/partner/ISO 9001.png'
import iso27001 from '../assets/partner/ISO 27001.png'
import smartIndustry from '../assets/partner/Smart industry.png'
import nasscom from '../assets/partner/Nasscom.png'
// Softwareone.svg is really a WebP image, so the correctly named copy is used
import softwareone from '../assets/partner/softwareone.webp'
import './Partners.css'

const technologyPartners = [
  { name: 'SAP', logo: sap },
  { name: 'AWS', logo: aws },
  { name: 'Microsoft', logo: microsoft },
  { name: 'Microsoft Azure', logo: azure },
  { name: 'IBM', logo: ibm },
  { name: 'Docusign', logo: docusign },
  { name: 'Motadata', logo: motadata },
  { name: 'monday.com', logo: monday },
  { name: 'SUSE', logo: suse },
  { name: 'Kyndryl', logo: kyndryl },
  { name: 'ICT Distribution', logo: ict },
  { name: 'HOPE', logo: hope },
  { name: 'SoftwareOne', logo: softwareone },
]

// Certification cards under the moving row are hidden for now (ISO badges are in the footer)
const SHOW_CERTIFICATIONS = false

const certifications = [
  { name: 'UpGuard', logo: upguard },
  { name: 'MSC Malaysia Status Company', logo: mscMalaysia },
  { name: 'ISO 9001:2015 Certified', logo: iso9001 },
  { name: 'ISO 27001 Certified', logo: iso27001 },
  { name: 'Smart Industry Readiness Index', logo: smartIndustry },
  { name: 'NASSCOM Certified Member', logo: nasscom },
]

export default function Partners() {
  const trackRef = useRef(null)
  const timerRef = useRef(0)
  const [fast, setFast] = useState(false)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  // Speed the scrolling row up for a moment, then settle back to normal
  const speedUp = () => {
    const animation = trackRef.current?.getAnimations()[0]
    if (!animation) return

    animation.updatePlaybackRate(8)
    setFast(true)

    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      animation.updatePlaybackRate(1)
      setFast(false)
    }, 2200)
  }

  return (
    <section id="partners" className="partners">
      <div className="container-xl partners__inner">
        <div className="partners__head">
          <span className="section-eyebrow partners__eyebrow">Partners &amp; Certifications</span>
          <h2 className="partners__title">
            Trusted Technology. <span className="partners__highlight">Recognized Expertise.</span>
          </h2>
        </div>

        <div className="partners__logos">
          <div className="partners__marquee">
          {/* Two copies side by side; the track scrolls by one copy and repeats */}
          <div className="partners__viewport" role="region" aria-label="Technology partners">
            <ul className="partners__track" ref={trackRef}>
              {[...technologyPartners, ...technologyPartners].map((p, i) => (
                <li
                  key={i}
                  className="partners__slide"
                  aria-hidden={i >= technologyPartners.length}
                >
                  <img src={p.logo} alt={p.name} className="partners__logo" loading="lazy" />
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className={`partners__next${fast ? ' is-fast' : ''}`}
            onClick={speedUp}
            aria-label="Show more partners"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          </div>

          {SHOW_CERTIFICATIONS && (
            <ul className="partners__certs" aria-label="Certifications and memberships">
              {certifications.map((c) => (
                <li key={c.name} className="partners__cert">
                  <img src={c.logo} alt={c.name} className="partners__logo" loading="lazy" />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
