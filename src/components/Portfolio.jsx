import { useState } from 'react'

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
    <section className="relative pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
              Case studies
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              Success stories from our recent client partnerships
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Magazine Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => {
            // First project takes full width, then alternating layouts
            const isFeatured = index === 0
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`group relative ${
                  isFeatured 
                    ? 'lg:col-span-12' 
                    : isEven 
                      ? 'lg:col-span-7' 
                      : 'lg:col-span-5'
                }`}
              >
                <a href="#" className="block">
                  {/* Image Container */}
                  <div className={`relative overflow-hidden bg-gray-100 rounded-lg ${
                    isFeatured ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[4/3]'
                  }`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>

                  {/* Project Info */}
                  <div className="mt-4 sm:mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
                        {project.client}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-400">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight pb-1">
                      {project.title}
                    </h3>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
