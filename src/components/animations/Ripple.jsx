import { motion } from 'framer-motion'

function Ripple({ className = '', count = 3, colors = ['#ef4444', '#ec4899'] }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: colors[i % colors.length]
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.5, 2],
            opacity: [1, 0.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeOut'
          }}
        />
      ))}
    </div>
  )
}

export default Ripple
