import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './animations/FadeIn'
import TextReveal from './animations/TextReveal'
import SpotlightCard from './animations/SpotlightCard'
import MagneticButton from './animations/MagneticButton'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Why you need SEO for your business website?",
      answer: "SEO (Search Engine Optimization) helps your website rank higher on search engines like Google, making it easier for potential customers to find you. It drives organic traffic, builds credibility, and increases conversions without ongoing ad spend."
    },
    {
      question: "Why Facebook ads matter?",
      answer: "Facebook ads allow you to reach a highly targeted audience based on demographics, interests, and behaviors. With over 2 billion active users, it's one of the most cost-effective ways to generate leads, increase brand awareness, and drive sales."
    },
    {
      question: "Why you need a website?",
      answer: "A website is your digital storefront, available 24/7 to showcase your products, services, and brand. It builds credibility, helps you reach a global audience, and serves as the foundation for all your digital marketing efforts."
    },
    {
      question: "What services does Innovatiq Media offer?",
      answer: "We offer comprehensive digital marketing services including website design & development, performance marketing, social media marketing, content marketing, email marketing, SEO, and complete brand management solutions."
    },
    {
      question: "How can I get started with Innovatiq Media?",
      answer: "Simply book a free consultation call with us. We'll discuss your business goals, analyze your current digital presence, and create a custom strategy tailored to your needs. Contact us via phone at +91 8651792079 or email at info@innovatiqmedia.com."
    }
  ]

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative">
        {/* Header - Centered */}
        <FadeIn direction="up">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 md:mb-32">
            <TextReveal className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
              Questions & Answers
            </TextReveal>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Everything you need to know about working with us
            </motion.p>
          </div>
        </FadeIn>

        {/* FAQ List - Glassmorphic Cards */}
        <div className="max-w-5xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard 
                className="group backdrop-blur-sm bg-white/60 border border-gray-200/50 rounded-2xl overflow-hidden hover:border-red-200 transition-colors"
                spotlightColor="rgba(239, 68, 68, 0.15)"
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full py-6 sm:py-8 px-6 sm:px-8 flex items-center justify-between text-left"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-4 sm:gap-6 flex-1 pr-4">
                    <motion.span 
                      className="text-xs sm:text-sm font-bold text-gray-400 pt-1 min-w-[30px] sm:min-w-[40px]"
                      animate={{
                        color: openIndex === index ? '#ef4444' : '#9ca3af'
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.span>
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      openIndex === index 
                        ? 'bg-gradient-to-r from-red-600 to-pink-600' 
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}
                    animate={{
                      rotate: openIndex === index ? 180 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg 
                      className={`w-5 h-5 transition-colors ${openIndex === index ? 'text-white' : 'text-gray-600'}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        className="px-6 sm:px-8 pb-6 sm:pb-8 pl-16 sm:pl-20 text-base sm:text-lg text-gray-600 leading-relaxed"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA with Magnetic Button */}
        <FadeIn delay={0.5}>
          <div className="mt-20 sm:mt-24 md:mt-32 text-center">
            <motion.p 
              className="text-gray-600 mb-6 text-base sm:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Have more questions?
            </motion.p>
            <MagneticButton strength={0.25}>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 text-base md:text-lg bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-full shadow-xl shadow-red-500/30 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's talk</span>
                <motion.svg 
                  className="w-5 h-5 relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-700 to-pink-700"
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

export default FAQ
