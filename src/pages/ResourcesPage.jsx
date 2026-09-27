import { pageHeaders } from '../data'
import PageHeader from '../components/PageHeader'
import Blogs from '../components/Blogs'
import CaseStudies from '../components/CaseStudies'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

export default function ResourcesPage() {
  return (
    <>
      <PageHeader {...pageHeaders.resources} />
      <Blogs />
      <CaseStudies />
      <FAQ />
      <CTA />
    </>
  )
}
