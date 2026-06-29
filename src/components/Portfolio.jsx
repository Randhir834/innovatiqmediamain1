import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './animations/FadeIn'
import TiltCard from './animations/TiltCard'
import TextReveal from './animations/TextReveal'
import MagneticButton from './animations/MagneticButton'

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Digital' },
    { id: 'brand', label: 'Marketing' }
  ]
  
  const projects = [
    {
      title: "Lead Generation Campaign",
      category: "web",
      client: "Happy Dental Clinic",
      year: "2024",
      description: "We generated a revenue of 12X the spends in one month",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop&q=80",
      featured: true
    },
    {
      title: "Surgeon Marketing Campaign",
      category: "brand",
      client: "Dr. Mehta",
      year: "2024",
      description: "We generated a revenue of 10X the spends in one month",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "Digital Growth Strategy",
      category: "web",
      client: "Growth EYE",
      year: "2024",
      description: "We generated a revenue of 10X the spends in one month",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "Performance Marketing",
      category: "brand",
      client: "MEPL",
      year: "2024",
      description: "We generated a revenue of 5X the spends in one month",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="relative pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          <FadeIn direction="up" className="max-w-2xl">
            <TextReveal className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
              Case studies
            </TextReveal>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Success stories from our recent client partnerships
            </motion.p>
          </FadeIn>

          {/* Filter tabs with magnetic effect */}
          <motion.div 
            className="flex gap-2 flex-wrap"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((cat) => (
              <MagneticButton key={cat.id} strength={0.15}>
                <motion.button
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.label}
                </motion.button>
              </MagneticButton>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid - Magazine Style with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => {
            // First project takes full width, then alternating layouts
            const isFeatured = index === 0
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                className={`group relative ${
                  isFeatured 
                    ? 'lg:col-span-12' 
                    : isEven 
                      ? 'lg:col-span-7' 
                      : 'lg:col-span-5'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TiltCard intensity={8}>
                  <a href="#" className="block">
                    {/* Image Container */}
                    <motion.div 
                      className={`relative overflow-hidden bg-gray-100 rounded-lg ${
                        isFeatured ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[4/3]'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                      />
                      {/* Overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Hover indicator */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                          whileHover={{ scale: 1.2, rotate: 90 }}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Project Info */}
                    <div className="mt-4 sm:mt-6">
                      <motion.div 
                        className="flex items-center justify-between mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
                          {project.client}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-400">
                          {project.year}
                        </span>
                      </motion.div>
                      <motion.h3 
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300 leading-tight pb-1"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                    </div>
                  </a>
                </TiltCard>
              </motion.div>
            )
          })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio
