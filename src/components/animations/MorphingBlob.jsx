import { motion } from 'framer-motion'

function MorphingBlob({ className = '', colors = ['#ef4444', '#ec4899', '#f97316'] }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        borderRadius: [
          '60% 40% 30% 70% / 60% 30% 70% 40%',
          '30% 60% 70% 40% / 50% 60% 30% 60%',
          '70% 40% 60% 30% / 40% 70% 60% 50%',
          '60% 40% 30% 70% / 60% 30% 70% 40%'
        ],
        rotate: [0, 90, 180, 270, 360]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        background: `linear-gradient(135deg, ${colors.join(', ')})`,
        filter: 'blur(60px)',
        opacity: 0.3
      }}
    />
  )
}

export default MorphingBlob
