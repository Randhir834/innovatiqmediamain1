import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './animations/MagneticButton'
import GradientText from './animations/GradientText'
import MorphingBlob from './animations/MorphingBlob'

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const slides = [
    {
      title: "Scaling Brands",
      titleAccent: "with Smart Ads",
      subtitle: "Innovatiq Media is a creative and performance-focused digital marketing agency that helps brands grow faster online. We create powerful ad campaigns, smart strategies, and eye-catching content that turn viewers into loyal customers.",
      cta: "Book a Free Call Now",
      ctaSecondary: "View Our Services",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=90"
    },
    {
      title: "Drive Business Growth",
      titleAccent: "With Smart Digital Solutions",
      subtitle: "We blend cutting-edge technology with data-driven marketing strategies to help your brand thrive online. From ROI-focused campaigns to scalable growth, we turn your goals into measurable success.",
      cta: "Start Your Project",
      ctaSecondary: "Learn More",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1920&h=1080&fit=crop&q=90"
    },
    {
      title: "Award-Winning",
      titleAccent: "Marketing Agency",
      subtitle: "Recognized for excellence in strategy, creativity, and ROI-driven campaigns. We help brands stand out and scale in the digital world with measurable results.",
      cta: "Get Started",
      ctaSecondary: "See Portfolio",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=90"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70"></div>
          </motion.div>
          
          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-transparent to-blue-900/20"></div>
          
          {/* Animated grain texture */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>

          {/* Morphing blobs */}
          <MorphingBlob className="top-20 left-20 w-72 h-72" colors={['#ef4444', '#ec4899', '#f97316']} />
          <MorphingBlob className="bottom-20 right-20 w-96 h-96" colors={['#ec4899', '#f97316', '#ef4444']} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 w-full py-20 md:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-5xl">
            {/* Main heading */}
            <AnimatePresence mode="wait">
              <motion.h1 
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                className="mb-6 overflow-visible"
              >
                <motion.span 
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white mb-2 leading-tight pb-2" 
                  style={{lineHeight: '1.2'}}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.span>
                <GradientText 
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight pb-2"
                  animate={true}
                >
                  <motion.span
                    style={{lineHeight: '1.2', display: 'block'}}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slides[currentSlide].titleAccent}
                  </motion.span>
                </GradientText>
              </motion.h1>
            </AnimatePresence>
            
            {/* Subtitle */}
            <AnimatePresence mode="wait">
              <motion.p 
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl font-light leading-relaxed"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </AnimatePresence>
            
            {/* CTA Buttons with Magnetic Effect */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 md:mb-16"
            >
              <MagneticButton strength={0.2}>
                <motion.a 
                  href="/contact" 
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold text-white overflow-hidden rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center gap-2">
                    <span className="truncate">{slides[currentSlide].cta}</span>
                    <motion.svg 
                      className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                </motion.a>
              </MagneticButton>
              
              <MagneticButton strength={0.2}>
                <motion.a 
                  href={import.meta.env.VITE_SERVICES_PORTAL_URL || 'http://localhost:3001'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold text-white border-2 border-white/30 rounded-xl backdrop-blur-sm transition-all duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <span className="truncate">{slides[currentSlide].ctaSecondary}</span>
                    <motion.svg 
                      className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </span>
                </motion.a>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Progress Indicators */}
      <div className="absolute bottom-8 sm:bottom-12 left-4 sm:left-6 lg:left-12 xl:left-16 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <MagneticButton key={index} strength={0.1}>
            <motion.button
              onClick={() => setCurrentSlide(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className={`h-0.5 sm:h-1 rounded-full transition-all duration-500 ${
                currentSlide === index 
                  ? 'w-12 sm:w-16 bg-gradient-to-r from-red-500 to-pink-500' 
                  : 'w-6 sm:w-8 bg-white/30 group-hover:bg-white/50 group-hover:w-10 group-hover:sm:w-12'
              }`}></div>
            </motion.button>
          </MagneticButton>
        ))}
      </div>
    </div>
  )
}

export default Hero
