import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function ParallaxText({ children, speed = 0.5, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200])

  return (
    <div ref={ref}>
      <motion.div style={{ y }} className={className}>
        {children}
      </motion.div>
    </div>
  )
}

export default ParallaxText
