import React from 'react'
import { motion } from 'framer-motion'
import FadeIn from './animations/FadeIn'
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer'
import TextReveal from './animations/TextReveal'

function Clients() {
  // Automatically generate array of client images (1 to 26)
  const clientLogos = Array.from({ length: 26 }, (_, i) => ({
    id: i + 1,
    src: `/images/${i + 1}.jpg`,
    alt: `Client ${i + 1}`
  }))

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <TextReveal className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.01em' }}>
              Our Clients
            </TextReveal>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Trusted by leading brands across industries to deliver innovative solutions and drive measurable results
            </motion.p>
          </div>
        </FadeIn>

        {/* Clean, Full Grid Display with Advanced Animations */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4" staggerDelay={0.05}>
          {clientLogos.map((client) => (
            <StaggerItem key={client.id}>
              <motion.div
                className="bg-white rounded-xl p-4 sm:p-6 flex items-center justify-center border border-gray-200 min-h-[120px] sm:min-h-[140px] relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: '#e5e7eb',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.img
                  src={client.src}
                  alt={client.alt}
                  className="max-w-full max-h-[70px] sm:max-h-[85px] w-auto h-auto object-contain relative z-10"
                  loading="lazy"
                  whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
                  style={{ filter: 'grayscale(20%)' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}

export default Clients