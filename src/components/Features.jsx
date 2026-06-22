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

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left: Heading */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
              Why choose us
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8 sm:mb-12">
              More than 5+ years of experience providing IT services and driving business growth
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">90%</div>
                <div className="text-xs sm:text-sm text-gray-600">Business Growth</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">Quality Products</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">100+</div>
                <div className="text-xs sm:text-sm text-gray-600">Active Clients</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">5+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right: Features List */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group"
              >
                {/* Number */}
                <div className="text-xs sm:text-sm font-mono text-gray-400 mb-3 sm:mb-4">{feature.number}</div>
                
                {/* Content */}
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors">
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
                  <div className="mt-8 sm:mt-10 md:mt-12 h-px bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
