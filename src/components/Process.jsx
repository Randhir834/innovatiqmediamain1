function Process() {
  const steps = [
    {
      title: "Select a project",
      description: "Start by choosing the digital service that aligns with your goals—whether it's SEO, social media marketing, PPC, content creation, or complete brand management.",
      details: ["Choose service", "Share requirements", "Get consultation"]
    },
    {
      title: "Project analysis",
      description: "Our expert team conducts a thorough analysis of your brand, market, competition, and target audience to identify growth opportunities.",
      details: ["Brand analysis", "Market research", "Strategy planning"]
    },
    {
      title: "Plan Execute",
      description: "We craft a custom strategy tailored for your brand, then our skilled team gets to work—designing, optimizing, advertising, and managing your digital presence with precision.",
      details: ["Custom strategy", "Campaign execution", "Performance optimization"]
    },
    {
      title: "Deliver result",
      description: "We don't just deliver services—we deliver results. Expect transparent reporting, data-driven improvements, and real performance that supports your long-term business growth.",
      details: ["Transparent reporting", "Data insights", "Continuous growth"]
    }
  ]

  return (
    <section className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-0 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header - Centered */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
            How we work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Our proven process to deliver exceptional results for your business
          </p>
        </div>

        {/* Process Steps - 2x2 Grid on desktop, single column on mobile */}
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative pb-8 sm:pb-12"
              >
                {/* Step Container - Centered */}
                <div className="flex flex-col items-center text-center px-4 sm:px-6">
                  {/* Number */}
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200 group-hover:text-red-200 transition-colors mb-4 sm:mb-6">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight pb-1">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
                      {step.details.map((detail, idx) => (
                        <span
                          key={idx}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 bg-gray-50 rounded-full"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center pb-8">
          <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
            Ready to start?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-4 md:py-5 text-base md:text-lg bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
          >
            <span>Let's talk</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process
