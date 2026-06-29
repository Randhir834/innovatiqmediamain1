import { useState } from 'react'
import { motion } from 'framer-motion'
import LiquidButton from './animations/LiquidButton'
import ShimmerText from './animations/ShimmerText'
import WaveAnimation from './animations/WaveAnimation'
import ParticleEffect from './animations/ParticleEffect'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to API
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="relative bg-gradient-to-br from-red-600 via-pink-600 to-red-700 py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <ParticleEffect count={30} color="#ffffff" />
      <WaveAnimation className="h-32" color="#ffffff" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center sm:text-left">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ShimmerText className="bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text">
              Get updates & offers
            </ShimmerText>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our newsletter for tips, deals, and project inspiration
          </motion.p>

          {subscribed ? (
            <motion.div 
              className="bg-white text-green-600 py-4 sm:py-5 px-8 sm:px-10 inline-flex items-center gap-3 font-bold text-base sm:text-lg rounded-2xl shadow-2xl"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </motion.svg>
              Thanks! Check your inbox
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="flex-1 relative"
                animate={{
                  scale: focused ? 1.02 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  required
                  placeholder="Your email address"
                  className="w-full text-sm sm:text-base px-6 py-4 sm:py-5 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-white/50 focus:border-white focus:outline-none focus:ring-4 focus:ring-white/20 transition-all shadow-xl"
                />
                {focused && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-white/20"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                  />
                )}
              </motion.div>
              <LiquidButton
                className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold whitespace-nowrap text-sm sm:text-base rounded-2xl shadow-2xl shadow-gray-900/50 border-2 border-white/10"
              >
                Subscribe Now
              </LiquidButton>
            </motion.form>
          )}
          
          <motion.p 
            className="mt-6 text-sm text-white/70 text-center sm:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            🔒 We respect your privacy. Unsubscribe anytime.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
