import Hero from '../components/Hero'
import Features from '../components/Features'
import ServicesOverview from '../components/ServicesOverview'
import Process from '../components/Process'
import Portfolio from '../components/Portfolio'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'

function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <ServicesOverview />
      <Process />
      <Portfolio />
      <Clients />
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default HomePage
