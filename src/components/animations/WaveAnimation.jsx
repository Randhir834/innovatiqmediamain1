import { motion } from 'framer-motion'

function WaveAnimation({ className = '', color = '#ef4444' }) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,0 C300,50 600,50 900,0 L900,120 L0,120 Z"
          fill={color}
          fillOpacity="0.1"
          animate={{
            d: [
              'M0,0 C300,50 600,50 900,0 L900,120 L0,120 Z',
              'M0,30 C300,0 600,0 900,30 L900,120 L0,120 Z',
              'M0,0 C300,50 600,50 900,0 L900,120 L0,120 Z'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.path
          d="M0,20 C300,70 600,70 900,20 L900,120 L0,120 Z"
          fill={color}
          fillOpacity="0.05"
          animate={{
            d: [
              'M0,20 C300,70 600,70 900,20 L900,120 L0,120 Z',
              'M0,50 C300,20 600,20 900,50 L900,120 L0,120 Z',
              'M0,20 C300,70 600,70 900,20 L900,120 L0,120 Z'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }}
        />
      </svg>
    </div>
  )
}

export default WaveAnimation
