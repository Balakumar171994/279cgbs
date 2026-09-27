import { pageHeaders } from '../data'
import PageHeader from '../components/PageHeader'
import Services from '../components/Services'
import CTA from '../components/CTA'

export default function DigitalServicesPage() {
  return (
    <>
      <PageHeader {...pageHeaders.digital} />
      <Services
        id="digital-services"
        ids={['digital-infra', 'cybersecurity', 'data-ai', 'digital-workplace']}
        showHead={false}
      />
      <CTA />
    </>
  )
}
