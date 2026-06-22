function ServicesOverview() {
  // Get URLs from environment variables
  const servicesPortalUrl = import.meta.env.VITE_SERVICES_PORTAL_URL || 'http://localhost:3001'
  
  const services = [
    {
      number: "01",
      title: "Web Design & Development",
      description: "Your website is often the first impression customers have of your business. Our web design and development services create stunning, responsive websites that are not only visually appealing but also user-friendly and optimized for conversions.",
      features: ["Responsive Design", "User-Friendly UI/UX", "Conversion Optimization"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80"
    },
    {
      number: "02",
      title: "Performance Marketing",
      description: "Maximize your ROI with performance marketing campaigns that focus on achieving specific goals such as sales, leads, or clicks. We specialize in using platforms like Google Ads, Meta Ads, LinkedIn, and more to ensure your marketing dollars are spent wisely.",
      features: ["Google Ads", "Meta Ads", "LinkedIn Campaigns"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
    },
    {
      number: "03",
      title: "Social Media Marketing",
      description: "Engage with your audience and build a strong social media presence across platforms like Facebook, Instagram, LinkedIn, Twitter, and TikTok. We create tailored social media strategies to boost brand engagement and drive traffic to your website.",
      features: ["Multi-Platform Strategy", "Brand Engagement", "Traffic Growth"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80"
    },
    {
      number: "04",
      title: "Content Marketing",
      description: "Great content is the foundation of any successful digital marketing campaign. Our content marketing services help you attract, engage, and retain your audience with high-quality content that resonates with them.",
      features: ["SEO Content", "Audience Engagement", "Brand Storytelling"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80"
    }
  ]

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden" style={{backgroundColor: '#1a0f0f'}}>
      {/* Sophisticated gradient accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-bl from-red-900/30 via-rose-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-amber-900/20 via-orange-900/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
            Our digital marketing services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-rose-100/70 font-light leading-relaxed">
            Comprehensive solutions from strategy to execution that drive real results
          </p>
        </div>

        {/* Services - Alternating layout */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-4 sm:space-y-5 md:space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/20 leading-none pb-2">{service.number}</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight pb-2">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-rose-100/60 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-rose-100/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 sm:pt-6">
                  <a 
                    href="/services" 
                    className="inline-flex items-center gap-2 text-sm sm:text-base text-white font-semibold group"
                  >
                    <span>Learn more</span>
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 sm:mt-24 md:mt-32 text-center">
          <a 
            href={servicesPortalUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-4 md:py-5 text-base md:text-lg bg-white text-gray-900 font-semibold rounded-full hover:bg-rose-50 transition-colors"
          >
            View all services
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
