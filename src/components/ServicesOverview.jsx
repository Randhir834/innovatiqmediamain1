import { motion } from 'framer-motion'
import FadeIn from './animations/FadeIn'
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer'

function ServicesOverview() {
  // Get URLs from environment variables
  const servicesPortalUrl = import.meta.env.VITE_SERVICES_PORTAL_URL || 'http://localhost:3001'
  
  const services = [
    {
      number: "01",
      title: "Web Design & Development",
      description: "Your website is often the first impression customers have of your business. Our web design and development services create stunning, responsive websites that are not only visually appealing but also user-friendly and optimized for conversions.",
      features: ["Responsive Design", "User-Friendly UI/UX", "Conversion Optimization"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80"
    },
    {
      number: "02",
      title: "Performance Marketing",
      description: "Maximize your ROI with performance marketing campaigns that focus on achieving specific goals such as sales, leads, or clicks. We specialize in using platforms like Google Ads, Meta Ads, LinkedIn, and more to ensure your marketing dollars are spent wisely.",
      features: ["Google Ads", "Meta Ads", "LinkedIn Campaigns"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
    },
    {
      number: "03",
      title: "Social Media Marketing",
      description: "Engage with your audience and build a strong social media presence across platforms like Facebook, Instagram, LinkedIn, Twitter, and TikTok. We create tailored social media strategies to boost brand engagement and drive traffic to your website.",
      features: ["Multi-Platform Strategy", "Brand Engagement", "Traffic Growth"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80"
    },
    {
      number: "04",
      title: "Content Marketing",
      description: "Great content is the foundation of any successful digital marketing campaign. Our content marketing services help you attract, engage, and retain your audience with high-quality content that resonates with them.",
      features: ["SEO Content", "Audience Engagement", "Brand Storytelling"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80"
    }
  ]

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden" style={{backgroundColor: '#1a0f0f'}}>
      {/* Sophisticated gradient accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-bl from-red-900/30 via-rose-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-amber-900/20 via-orange-900/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative">
        {/* Header */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-16 sm:mb-20 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
              Our digital marketing services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-rose-100/70 font-light leading-relaxed">
              Comprehensive solutions from strategy to execution that drive real results
            </p>
          </div>
        </FadeIn>

        {/* Services - Alternating layout */}
        <StaggerContainer className="space-y-16 sm:space-y-24 md:space-y-32" staggerDelay={0.15}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div
                className={`grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <motion.div 
                  className={`space-y-4 sm:space-y-5 md:space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/20 leading-none pb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    {service.number}
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight pb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-rose-100/60 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-rose-100/70"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="pt-4 sm:pt-6">
                    <motion.a 
                      href="/services" 
                      className="inline-flex items-center gap-2 text-sm sm:text-base text-white font-semibold group"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Learn more</span>
                      <motion.svg 
                        className="w-4 h-4 sm:w-5 sm:h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div 
                  className={`relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 relative">
                    <motion.img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {/* Floating decoration */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.3} className="mt-20 sm:mt-24 md:mt-32 text-center">
          <motion.a 
            href={servicesPortalUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-4 md:py-5 text-base md:text-lg bg-white text-gray-900 font-semibold rounded-full transition-colors relative overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 group-hover:text-gray-900">View all services</span>
            <motion.svg 
              className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-rose-50 to-pink-50"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  )
}

export default ServicesOverview
