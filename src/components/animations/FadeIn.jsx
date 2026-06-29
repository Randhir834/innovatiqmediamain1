import { motion } from 'framer-motion'

const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  direction = 'up',
  className = '',
  ...props 
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1,
        y: 0,
        x: 0
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
