import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import MapVpn from '@/components/MapVpn'
import PricingPlan from '@/components/PricingPlan'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <PricingPlan />
      <MapVpn />
      <Testimonial />
      <Footer />
    </main>
  )
}
