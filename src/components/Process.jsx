import { motion } from 'framer-motion'
import FadeIn from './animations/FadeIn'
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer'
import TextReveal from './animations/TextReveal'
import MagneticButton from './animations/MagneticButton'
import FloatingElement from './animations/FloatingElement'

function Process() {
  const steps = [
    {
      title: "Select a project",
      description: "Start by choosing the digital service that aligns with your goals—whether it's SEO, social media marketing, PPC, content creation, or complete brand management.",
      details: ["Choose service", "Share requirements", "Get consultation"]
    },
    {
      title: "Project analysis",
      description: "Our expert team conducts a thorough analysis of your brand, market, competition, and target audience to identify growth opportunities.",
      details: ["Brand analysis", "Market research", "Strategy planning"]
    },
    {
      title: "Plan Execute",
      description: "We craft a custom strategy tailored for your brand, then our skilled team gets to work—designing, optimizing, advertising, and managing your digital presence with precision.",
      details: ["Custom strategy", "Campaign execution", "Performance optimization"]
    },
    {
      title: "Deliver result",
      description: "We don't just deliver services—we deliver results. Expect transparent reporting, data-driven improvements, and real performance that supports your long-term business growth.",
      details: ["Transparent reporting", "Data insights", "Continuous growth"]
    }
  ]

  return (
    <section className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-0 bg-white overflow-hidden">
      {/* Floating decorative elements */}
      <FloatingElement 
        className="absolute top-10 left-10 w-20 h-20 bg-red-200 rounded-full blur-2xl opacity-30"
        duration={4}
        yOffset={[-20, 20]}
      />
      <FloatingElement 
        className="absolute bottom-20 right-20 w-32 h-32 bg-pink-200 rounded-full blur-2xl opacity-30"
        duration={5}
        yOffset={[-30, 30]}
        xOffset={[-20, 20]}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative">
        {/* Header - Centered */}
        <FadeIn direction="up">
          <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 md:mb-24">
            <TextReveal className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
              How we work
            </TextReveal>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our proven process to deliver exceptional results for your business
            </motion.p>
          </div>
        </FadeIn>

        {/* Process Steps - 2x2 Grid with advanced animations */}
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid sm:grid-cols-2 gap-8 sm:gap-0" staggerDelay={0.2}>
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group relative pb-8 sm:pb-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Step Container - Centered */}
                  <div className="flex flex-col items-center text-center px-4 sm:px-6 relative z-10">
                    {/* Number with animation */}
                    <motion.div 
                      className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300 mb-4 sm:mb-6"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-3 sm:space-y-4">
                      <motion.h3 
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight pb-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p 
                        className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      >
                        {step.description}
                      </motion.p>
                      
                      {/* Details with stagger animation */}
                      <motion.div 
                        className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      >
                        {step.details.map((detail, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 bg-gray-50 group-hover:bg-white rounded-full transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 + 0.6 + idx * 0.1 }}
                            whileHover={{ scale: 1.1, backgroundColor: '#fef2f2' }}
                          >
                            {detail}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Connecting line for visual flow (on desktop only) */}
                  {index < 3 && (
                    <motion.div
                      className="hidden sm:block absolute bottom-0 left-1/2 w-px h-8 bg-gradient-to-b from-gray-200 to-transparent"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                    />
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom CTA with magnetic button */}
        <FadeIn delay={0.5}>
          <div className="mt-16 sm:mt-20 md:mt-24 text-center pb-8">
            <motion.p 
              className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to start?
            </motion.p>
            <MagneticButton strength={0.25}>
              <motion.a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-4 md:py-5 text-base md:text-lg bg-gray-900 text-white font-semibold rounded-full transition-all relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's talk</span>
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
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Process
