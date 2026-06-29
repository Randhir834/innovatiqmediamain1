import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

function GlassmorphicCard({ 
  children, 
  className = '',
  glowColor = '#ef4444',
  intensity = 20
}) {
  const cardRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    setRotateY(((x - centerX) / centerX) * intensity)
    setRotateX(((centerY - y) / centerY) * intensity)
    setGlowPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlowPosition({ x: 50, y: 50 })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      animate={{
        rotateX,
        rotateY
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}40, transparent 50%)`,
          filter: 'blur(20px)'
        }}
        animate={{
          opacity: [0, 1]
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}80, transparent 50%)`,
          maskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          maskComposite: 'exclude',
          padding: '1px'
        }}
        animate={{
          opacity: [0, 0.6]
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
    </motion.div>
  )
}

export default GlassmorphicCard
