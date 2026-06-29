import { motion } from 'framer-motion'

function BackgroundBeams({ className = '', colors = ['#ef4444', '#ec4899', '#f97316'] }) {
  const beams = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.4,
    duration: 8 + i * 0.5,
    left: `${10 + i * 12}%`
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {beams.map((beam, index) => (
        <motion.div
          key={beam.id}
          className="absolute w-px h-full"
          style={{
            left: beam.left,
            background: `linear-gradient(to bottom, transparent, ${colors[index % colors.length]}40, transparent)`
          }}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{
            y: ['100%', '-100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            delay: beam.delay,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundBeams
