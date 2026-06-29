import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './animations/MagneticButton'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (scrollTop / docHeight) * 100
      
      setScrollProgress(progress)
      
      if (scrollTop > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <MagneticButton strength={0.3}>
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full shadow-2xl shadow-red-500/30 flex items-center justify-center overflow-hidden group"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: 'spring', 
              stiffness: 260, 
              damping: 20 
            }}
          >
            {/* Circular Progress Ring */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="white"
                strokeWidth="3"
                fill="none"
                opacity="0.2"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * scrollProgress) / 100}
                strokeLinecap="round"
                initial={{ strokeDashoffset: 283 }}
              />
            </svg>

            {/* Pulsing Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* Arrow Icon */}
            <motion.svg 
              className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ 
                y: [-2, 2, -2] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </motion.svg>

            {/* Hover Ripple Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white"
              initial={{ scale: 0, opacity: 0.5 }}
              whileHover={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </MagneticButton>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
