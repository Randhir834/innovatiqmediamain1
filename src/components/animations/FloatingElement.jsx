import { motion } from 'framer-motion'

function FloatingElement({ 
  children, 
  className = '', 
  duration = 3,
  yOffset = [-10, 10],
  xOffset = [0, 0],
  rotate = [0, 0]
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: yOffset,
        x: xOffset,
        rotate: rotate
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  )
}

export default FloatingElement
