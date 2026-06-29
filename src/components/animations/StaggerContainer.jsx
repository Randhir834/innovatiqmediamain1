import { motion } from 'framer-motion'

const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1,
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1]
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default StaggerContainer
