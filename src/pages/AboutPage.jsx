import { motion } from 'framer-motion'
import FadeIn from '../components/animations/FadeIn'
import TextReveal from '../components/animations/TextReveal'
import CountUp from '../components/animations/CountUp'
import TiltCard from '../components/animations/TiltCard'
import SpotlightCard from '../components/animations/SpotlightCard'
import GradientText from '../components/animations/GradientText'
import MagneticButton from '../components/animations/MagneticButton'
import FloatingElement from '../components/animations/FloatingElement'

function AboutPage() {
  const values = [
    {
      number: "01",
      title: "Innovation First",
      description: "We stay ahead of digital trends, constantly evolving our strategies to deliver cutting-edge solutions.",
      detail: "Embracing change to give you competitive advantage"
    },
    {
      number: "02",
      title: "Results-Driven",
      description: "Every campaign, every strategy is measured against your business growth and success.",
      detail: "Data-backed decisions that deliver ROI"
    },
    {
      number: "03",
      title: "Client Partnership",
      description: "We don't just work for you—we work with you for long-term success.",
      detail: "Your success is our success"
    },
    {
      number: "04",
      title: "Creative Excellence",
      description: "Combining data-driven insights with creative brilliance that inspires and performs.",
      detail: "Beautiful campaigns that convert"
    }
  ]

  const stats = [
    { number: "90%", label: "Business Growth Rate", description: "Average client growth" },
    { number: "100+", label: "Active Clients", description: "Worldwide partnerships" },
    { number: "95%", label: "Client Satisfaction", description: "Quality delivery rate" },
    { number: "5+", label: "Years Experience", description: "Industry expertise" }
  ]

  const team = [
    {
      name: "Digital Strategy Team",
      role: "Market Analysis & Planning",
      description: "Experts in analyzing market trends and crafting winning strategies"
    },
    {
      name: "Creative Design Team",
      role: "Visual Excellence",
      description: "Award-winning designers creating stunning brand experiences"
    },
    {
      name: "Performance Marketing Team",
      role: "ROI Optimization",
      description: "Data-driven specialists maximizing your ad performance"
    },
    {
      name: "Development Team",
      role: "Technical Innovation",
      description: "Building robust, scalable digital solutions"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Story Section - 2 Column Sticky like Features */}
      <section className="relative pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-16 sm:pb-24 md:pb-32 lg:pb-40 bg-white overflow-hidden">
        {/* Floating Elements */}
        <FloatingElement delay={0} duration={6}>
          <div className="absolute top-20 right-10 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-20" />
        </FloatingElement>
        <FloatingElement delay={2} duration={8}>
          <div className="absolute bottom-40 left-10 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-20" />
        </FloatingElement>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            {/* Left: Sticky Heading */}
            <FadeIn direction="left" className="lg:sticky lg:top-32">
              <TextReveal className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
                About <GradientText>Innovatiq Media</GradientText>
              </TextReveal>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                A forward-thinking digital marketing agency dedicated to helping businesses grow in the digital world
              </motion.p>
              
              {/* Stats with CountUp */}
              <motion.div 
                className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <SpotlightCard className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text mb-1">
                    <CountUp end={5} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </SpotlightCard>
                <SpotlightCard className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text mb-1">
                    <CountUp end={100} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Active Clients</div>
                </SpotlightCard>
                <SpotlightCard className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text mb-1">
                    <CountUp end={90} suffix="%" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Growth Rate</div>
                </SpotlightCard>
                <SpotlightCard className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text mb-1">
                    <CountUp end={95} suffix="%" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
                </SpotlightCard>
              </motion.div>
            </FadeIn>

            {/* Right: Content List */}
            <FadeIn direction="right" delay={0.3} className="space-y-8 sm:space-y-10 md:space-y-12">
              {/* Image with Tilt */}
              <TiltCard>
                <motion.div 
                  className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 ring-2 ring-gray-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </TiltCard>

              {/* Tags with Animation */}
              <motion.div 
                className="flex flex-wrap gap-2 sm:gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
              >
                {['Award-Winning Work', 'Data-Driven Results', 'Full-Service Agency'].map((tag, index) => (
                  <motion.span 
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 bg-gray-50 rounded-full border border-gray-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gray-50 overflow-hidden">
        <FloatingElement delay={1} duration={7}>
          <div className="absolute top-10 left-20 w-48 h-48 bg-red-100 rounded-full blur-3xl opacity-10" />
        </FloatingElement>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <FadeIn direction="up" className="text-center mb-16 sm:mb-20">
            <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight pb-2" style={{lineHeight: '1.2'}}>
              Our impact in <GradientText>numbers</GradientText>
            </TextReveal>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Real metrics from real client partnerships
            </motion.p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard className="bg-white p-8 rounded-xl text-center h-full">
                  <motion.div 
                    className="text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div 
                    className="text-lg font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>
                  <motion.div 
                    className="text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {stat.description}
                  </motion.div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Same Style as Features */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            {/* Left: Sticky Heading */}
            <FadeIn direction="left" className="lg:sticky lg:top-32">
              <TextReveal className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
                Our <GradientText>values</GradientText>
              </TextReveal>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Core principles that guide every strategy, campaign, and partnership
              </motion.p>
            </FadeIn>

            {/* Right: Values List */}
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="group"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <SpotlightCard className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-100">
                    <motion.div 
                      className="text-xs sm:text-sm font-mono text-gray-400 mb-3 sm:mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {value.number}
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all"
                      whileHover={{ x: 10 }}
                    >
                      {value.title}
                    </motion.h3>
                    <motion.p 
                      className="text-base sm:text-lg text-gray-600 mb-2 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {value.description}
                    </motion.p>
                    <motion.p 
                      className="text-sm text-gray-500"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {value.detail}
                    </motion.p>
                  </SpotlightCard>

                  {index < values.length - 1 && (
                    <div className="mt-8 sm:mt-10 md:mt-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Dark like Services Overview */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden" style={{backgroundColor: '#1a0f0f'}}>
        {/* Gradient Accents */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-bl from-red-900/30 via-rose-900/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-amber-900/20 via-orange-900/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative">
          {/* Header */}
          <FadeIn direction="up" className="max-w-3xl mb-16 sm:mb-20 md:mb-24">
            <TextReveal className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
              Our <GradientText>expertise</GradientText>
            </TextReveal>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-rose-100/70 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Specialized teams working together to deliver exceptional results
            </motion.p>
          </FadeIn>

          {/* Team Grid - Same as Services */}
          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {team.map((member, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-4 sm:space-y-5 md:space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/20 leading-none pb-2">{`0${index + 1}`}</div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight pb-2">
                    {member.name}
                  </h3>
                  <div className="text-sm sm:text-base text-rose-400 font-semibold">
                    {member.role}
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-rose-100/60 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10">
                    <img 
                      src={
                        index === 0 ? "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80" :
                        index === 1 ? "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&q=80" :
                        index === 2 ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80" :
                        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80"
                      }
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight pb-2" style={{lineHeight: '1.2'}}>
              Ready to grow your business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 font-light leading-relaxed">
              Let's discuss how we can help you achieve your digital marketing goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 text-base md:text-lg bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
              >
                <span>Book Free Consultation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="tel:+918651792079" 
                className="inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 text-base md:text-lg border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
