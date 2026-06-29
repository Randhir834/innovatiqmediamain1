import { motion } from 'framer-motion'

function ShimmerText({ children, className = '' }) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundPosition: '-200% 0'
      }}
      animate={{
        backgroundPosition: ['200% 0', '-200% 0']
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      {children}
    </motion.span>
  )
}

export default ShimmerText
