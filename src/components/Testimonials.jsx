function Testimonials() {
  const testimonials = [
    {
      name: "David Fernandes",
      role: "CEO",
      company: "Anaton",
      text: "Working with Innovatiq Media has honestly been one of the best decisions we've made for our business. Their team really took the time to understand what we needed and delivered a lead generation strategy that actually worked — not just more traffic, but the right kind of leads.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Jackline Techie",
      role: "CEO",
      company: "Kormola",
      text: "Working with innovatiq media on performance marketing has been such a refreshing experience. They didn't just run campaigns; they actually took the time to understand our goals, fine-tuned everything, and the results spoke for themselves. Super easy to work with, super responsive, and most importantly — they deliver.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Abraham Khalil",
      role: "CEO",
      company: "Anatora",
      text: "Working with innovatiq media on our website was such a great experience. They really got what we were going for and turned it into something that looks amazing and works flawlessly. The whole process felt easy, and the end result was even better than we expected.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Md Sumon Mia",
      role: "CEO",
      company: "Rimasu",
      text: "Working with Innovatiq Media on our SEO has been awesome. We used to struggle to get noticed online, but now we're showing up on the first page for the keywords that really matter. They're easy to talk to, know their stuff, and genuinely want to help us grow.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80"
    }
  ]

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
            What happy clients say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Real stories from businesses we've helped grow and succeed
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote mark */}
              <div className="text-4xl sm:text-5xl md:text-6xl text-gray-200 font-serif mb-4 sm:mb-6">"</div>

              {/* Testimonial text */}
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className="font-bold text-sm sm:text-base text-gray-900">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
