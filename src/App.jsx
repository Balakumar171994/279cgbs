import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SapPage from './pages/SapPage'
import SapSolutionsPage from './pages/SapSolutionsPage'
import SapManagedPage from './pages/SapManagedPage'
import DigitalInfraPage from './pages/DigitalInfraPage'
import CyberTrustPage from './pages/CyberTrustPage'
import DataAiPage from './pages/DataAiPage'
import DigitalWorkplacePage from './pages/DigitalWorkplacePage'
import LyraPage from './pages/LyraPage'
import VegAiPage from './pages/VegAiPage'
import SmartOpsPage from './pages/SmartOpsPage'
import AboutPage from './pages/AboutPage'
import ResourcesPage from './pages/ResourcesPage'
import EventsPage from './pages/EventsPage'
import ContactPage from './pages/ContactPage'

// New page -> start at the top; link with #section -> jump to that section
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    const el = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sap" element={<SapPage />} />
          <Route path="/sap-solutions" element={<SapSolutionsPage />} />
          <Route path="/sap-managed-services" element={<SapManagedPage />} />
          <Route path="/digital-services/infrastructure-cloud" element={<DigitalInfraPage />} />
          <Route path="/digital-services/cybersecurity-digital-trust" element={<CyberTrustPage />} />
          <Route path="/digital-services/data-analytics-ai" element={<DataAiPage />} />
          <Route path="/digital-services/digital-workplace-automation" element={<DigitalWorkplacePage />} />
          <Route path="/products/lyra" element={<LyraPage />} />
          {/* Old address from before the CarinAI → Lyra rename */}
          <Route path="/products/carinai" element={<Navigate to="/products/lyra" replace />} />
          <Route path="/products/vegai" element={<VegAiPage />} />
          <Route path="/products/smartops" element={<SmartOpsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
