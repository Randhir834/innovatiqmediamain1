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
      
      {/* Final CTA Section */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden" style={{backgroundColor: '#1a0f0f'}}>
        {/* Elegant warm gradient accents */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-br from-rose-900/30 via-red-900/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-tl from-amber-900/20 via-orange-900/15 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main CTA content */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
              Let's talk about business solutions
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-rose-100/60 mb-8 sm:mb-10 md:mb-12 font-light leading-relaxed px-4">
              Ready to grow your business with smart digital marketing? Request a free callback and let's discuss your goals
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-14 md:mb-16">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-4 md:py-5 text-base md:text-lg bg-white text-gray-900 font-semibold rounded-full hover:bg-rose-50 transition-colors"
              >
                <span className="truncate">Request Free CallBack</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="tel:+918651792079" 
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-4 md:py-5 text-base md:text-lg border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="truncate">Call Now</span>
              </a>
            </div>

            {/* Contact info grid */}
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-14 md:pt-16 border-t border-white/10">
              <div className="text-center sm:text-left">
                <div className="text-rose-100/40 text-xs sm:text-sm mb-2">Email</div>
                <a href="mailto:info@innovatiqmedia.com" className="text-sm sm:text-base text-white hover:text-rose-100 transition-colors break-all">
                  info@innovatiqmedia.com
                </a>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="text-rose-100/40 text-xs sm:text-sm mb-2">Phone</div>
                <a href="tel:+918651792079" className="text-sm sm:text-base text-white hover:text-rose-100 transition-colors">
                  INDIA (+91) 8651792079
                </a>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="text-rose-100/40 text-xs sm:text-sm mb-2">Business Hours</div>
                <div className="text-sm sm:text-base text-white">
                  Mon - Sat: 9AM - 8PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
