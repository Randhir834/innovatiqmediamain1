import { motion } from 'framer-motion'

function GradientText({ children, className = '', animate: shouldAnimate = true }) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent ${className}`}
      style={{
        backgroundSize: shouldAnimate ? '200% 200%' : '100% 100%'
      }}
      animate={shouldAnimate ? {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      } : {}}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      {children}
    </motion.span>
  )
}

export default GradientText
