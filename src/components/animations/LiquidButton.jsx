import { motion } from 'framer-motion'
import { useState } from 'react'

function LiquidButton({ children, className = '', onClick }) {
  const [ripples, setRipples] = useState([])

  const handleClick = (e) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      x,
      y,
      id: Date.now()
    }

    setRipples([...ripples, newRipple])

    setTimeout(() => {
      setRipples(ripples => ripples.filter(r => r.id !== newRipple.id))
    }, 800)

    if (onClick) onClick(e)
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{
            width: 500,
            height: 500,
            opacity: 0,
            x: -250,
            y: -250
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export default LiquidButton
