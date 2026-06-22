import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Why you need SEO for your business website?",
      answer: "SEO (Search Engine Optimization) helps your website rank higher on search engines like Google, making it easier for potential customers to find you. It drives organic traffic, builds credibility, and increases conversions without ongoing ad spend."
    },
    {
      question: "Why Facebook ads matter?",
      answer: "Facebook ads allow you to reach a highly targeted audience based on demographics, interests, and behaviors. With over 2 billion active users, it's one of the most cost-effective ways to generate leads, increase brand awareness, and drive sales."
    },
    {
      question: "Why you need a website?",
      answer: "A website is your digital storefront, available 24/7 to showcase your products, services, and brand. It builds credibility, helps you reach a global audience, and serves as the foundation for all your digital marketing efforts."
    },
    {
      question: "What services does Innovatiq Media offer?",
      answer: "We offer comprehensive digital marketing services including website design & development, performance marketing, social media marketing, content marketing, email marketing, SEO, and complete brand management solutions."
    },
    {
      question: "How can I get started with Innovatiq Media?",
      answer: "Simply book a free consultation call with us. We'll discuss your business goals, analyze your current digital presence, and create a custom strategy tailored to your needs. Contact us via phone at +91 8651792079 or email at info@innovatiqmedia.com."
    }
  ]

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header - Centered */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 md:mb-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
            Questions & Answers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Everything you need to know about working with us
          </p>
        </div>

        {/* FAQ List - Clean Minimal Style */}
        <div className="max-w-5xl mx-auto space-y-0 divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full py-6 sm:py-8 md:py-10 flex items-center justify-between text-left transition-all hover:pl-2 sm:hover:pl-4"
              >
                <div className="flex items-start gap-3 sm:gap-6 md:gap-8 flex-1 pr-3">
                  <span className="text-xs sm:text-sm font-bold text-gray-400 pt-1 min-w-[30px] sm:min-w-[40px]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                    {faq.question}
                  </span>
                </div>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center flex-shrink-0 transition-all ${
                  openIndex === index ? 'bg-gray-900 border-gray-900 rotate-180' : 'group-hover:border-gray-900'
                }`}>
                  <svg 
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${openIndex === index ? 'text-white' : 'text-gray-900'}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-12 sm:pl-20 md:pl-24 pr-6 sm:pr-14 md:pr-20 pb-8 sm:pb-10 md:pb-12 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 sm:mt-24 md:mt-32 text-center">
          <div className="inline-block">
            <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
              Have more questions?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-4 md:py-5 text-base md:text-lg bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all hover:gap-4"
            >
              <span>Let's talk</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
