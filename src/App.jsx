import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SapPage from './pages/SapPage'
import SapSolutionsPage from './pages/SapSolutionsPage'
import SapManagedPage from './pages/SapManagedPage'
import DigitalServicesPage from './pages/DigitalServicesPage'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'
import ResourcesPage from './pages/ResourcesPage'
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
          <Route path="/digital-services" element={<DigitalServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
