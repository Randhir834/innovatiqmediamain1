import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from './animations/FadeIn'
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer'
import CountUp from './animations/CountUp'
import ParallaxText from './animations/ParallaxText'

function Features() {
  const features = [
    {
      number: "01",
      title: "Business Growth",
      description: "90% average business growth rate",
      detail: "Data-driven strategies that deliver measurable results"
    },
    {
      number: "02",
      title: "Quality Products",
      description: "95% client satisfaction rate",
      detail: "Premium digital solutions that exceed expectations"
    },
    {
      number: "03",
      title: "Active Clients",
      description: "100+ satisfied clients worldwide",
      detail: "Long-term partnerships built on trust and results"
    },
    {
      number: "04",
      title: "Experience",
      description: "5+ years of proven expertise",
      detail: "Deep knowledge in IT and digital marketing"
    }
  ]

  // Counter animation hook
  const useCountAnimation = (end, duration = 2000, suffix = '') => {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const countRef = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            
            const startTime = Date.now()
            const startValue = 0
            
            const animate = () => {
              const currentTime = Date.now()
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              const currentCount = Math.floor(easeOutQuart * end)
              
              setCount(currentCount)
              
              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(end)
              }
            }
            
            requestAnimationFrame(animate)
          }
        },
        { threshold: 0.5 }
      )

      if (countRef.current) {
        observer.observe(countRef.current)
      }

      return () => {
        if (countRef.current) {
          observer.unobserve(countRef.current)
        }
      }
    }, [end, duration, hasAnimated])

    return [count, countRef]
  }

  // Initialize counters
  const [count1, ref1] = useCountAnimation(90)
  const [count2, ref2] = useCountAnimation(95)
  const [count3, ref3] = useCountAnimation(100)
  const [count4, ref4] = useCountAnimation(5)

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-red-100 to-pink-100 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative">
        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left: Heading */}
          <div className="lg:sticky lg:top-32">
            <ParallaxText speed={0.3}>
              <FadeIn direction="up">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
                  Why choose us
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8 sm:mb-12">
                  More than 5+ years of experience providing IT services and driving business growth
                </p>
              </FadeIn>
            </ParallaxText>
            
            {/* Stats with CountUp animation */}
            <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              <StaggerItem>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="transition-transform relative group cursor-pointer"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="relative p-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-1">
                      <CountUp end={90} suffix="%" duration={2.5} />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">Business Growth</div>
                  </div>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="transition-transform relative group cursor-pointer"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="relative p-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-1">
                      <CountUp end={95} suffix="%" duration={2.5} />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">Quality Products</div>
                  </div>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="transition-transform relative group cursor-pointer"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="relative p-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-1">
                      <CountUp end={100} suffix="+" duration={2.5} />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">Active Clients</div>
                  </div>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="transition-transform relative group cursor-pointer"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="relative p-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-1">
                      <CountUp end={5} suffix="+" duration={2.5} />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                  </div>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right: Features List */}
          <StaggerContainer className="space-y-8 sm:space-y-10 md:space-y-12">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group relative"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover indicator */}
                  <motion.div 
                    className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Number */}
                  <div className="text-xs sm:text-sm font-mono text-gray-400 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors">{feature.number}</div>
                  
                  {/* Content */}
                  <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-2 leading-relaxed">
                    {feature.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {feature.detail}
                  </p>

                  {/* Divider */}
                  {index < features.length - 1 && (
                    <motion.div 
                      className="mt-8 sm:mt-10 md:mt-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

export default Features
