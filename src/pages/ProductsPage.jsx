import { pageHeaders } from '../data'
import PageHeader from '../components/PageHeader'
import Products from '../components/Products'
import CTA from '../components/CTA'

export default function ProductsPage() {
  return (
    <>
      <PageHeader {...pageHeaders.products} />
      <Products />
      <CTA />
    </>
  )
}
