import { pageHeaders } from '../data'
import PageHeader from '../components/PageHeader'
import CTA from '../components/CTA'

export default function ContactPage() {
  return (
    <>
      <PageHeader {...pageHeaders.contact} />
      <CTA />
    </>
  )
}
