import { useState, useEffect, useRef } from 'react'

function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef(null)

  // Generate array of client images (1-26)
  const clientLogos = Array.from({ length: 26 }, (_, i) => ({
    id: i + 1,
    src: `/images/${i + 1}.jpg`,
    alt: `Client ${i + 1}`
  }))

  // Number of logos to show at once based on screen size
  const logosPerView = 6

  const totalSlides = Math.ceil(clientLogos.length / logosPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 3000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{letterSpacing: '-0.01em'}}>
            Our Clients
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Trusted by leading brands across industries to deliver innovative solutions and drive measurable results
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto px-12 sm:px-16 lg:px-20"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group border border-gray-200"
            aria-label="Previous clients"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Logos Container */}
          <div className="overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="min-w-full flex gap-4 sm:gap-6 lg:gap-8"
                >
                  {clientLogos
                    .slice(slideIndex * logosPerView, slideIndex * logosPerView + logosPerView)
                    .map((client) => (
                      <div
                        key={client.id}
                        className="flex-1 bg-white rounded-xl p-4 sm:p-6 flex items-center justify-center border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 min-h-[120px] sm:min-h-[140px]"
                      >
                        <img
                          src={client.src}
                          alt={client.alt}
                          className="max-w-full max-h-[80px] sm:max-h-[100px] w-auto h-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group border border-gray-200"
            aria-label="Next clients"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gray-900 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
