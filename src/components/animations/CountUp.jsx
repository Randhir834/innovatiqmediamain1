import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

function CountUp({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  decimals = 0,
  className = ''
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)
  
  const motionValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0
  })

  const rounded = useTransform(motionValue, (latest) => 
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest)
  )

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      motionValue.set(end)
    }
  }, [isInView, hasAnimated, motionValue, end])

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default CountUp
