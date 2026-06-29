import { motion } from 'framer-motion'

const ScaleIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        scale: 0.8
      }}
      whileInView={{ 
        opacity: 1,
        scale: 1
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration,
        delay,
        ease: [0.34, 1.56, 0.64, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ScaleIn
