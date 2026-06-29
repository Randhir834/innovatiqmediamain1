import { motion } from 'framer-motion'
import FadeIn from './animations/FadeIn'
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer'
import TextReveal from './animations/TextReveal'
import TiltCard from './animations/TiltCard'

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
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-pink-50/50"
        animate={{
          background: [
            'linear-gradient(to bottom right, rgba(254, 242, 242, 0.5), rgba(252, 231, 243, 0.5))',
            'linear-gradient(to bottom right, rgba(252, 231, 243, 0.5), rgba(254, 242, 242, 0.5))',
            'linear-gradient(to bottom right, rgba(254, 242, 242, 0.5), rgba(252, 231, 243, 0.5))'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative">
        {/* Header */}
        <FadeIn direction="up">
          <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
            <TextReveal className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
              What happy clients say
            </TextReveal>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Real stories from businesses we've helped grow and succeed
            </motion.p>
          </div>
        </FadeIn>

        {/* Testimonials Grid with Advanced Animations */}
        <StaggerContainer className="grid sm:grid-cols-2 gap-6 sm:gap-8" staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <TiltCard intensity={5}>
                <motion.div
                  className="bg-white p-6 sm:p-8 md:p-10 h-full relative overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    y: -5
                  }}
                >
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-pink-50/0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    whileHover={{
                      background: 'linear-gradient(to bottom right, rgba(254, 242, 242, 0.3), rgba(252, 231, 243, 0.3))'
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Quote mark with animation */}
                  <motion.div 
                    className="text-4xl sm:text-5xl md:text-6xl text-gray-200 group-hover:text-red-200 font-serif mb-4 sm:mb-6 transition-colors relative z-10"
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    "
                  </motion.div>

                  {/* Testimonial text */}
                  <motion.p 
                    className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {testimonial.text}
                  </motion.p>

                  {/* Author with slide-in animation */}
                  <motion.div 
                    className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-100 relative z-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    <motion.img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-white group-hover:ring-red-100 transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    />
                    <div>
                      <div className="font-bold text-sm sm:text-base text-gray-900">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </motion.div>

                  {/* Decorative corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-bl-full opacity-0 group-hover:opacity-30"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default Testimonials
