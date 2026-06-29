import { motion } from 'framer-motion'
import Newsletter from './Newsletter'
import GradientText from './animations/GradientText'
import MagneticButton from './animations/MagneticButton'

function Footer() {
  // Get URLs from environment variables
  const servicesPortalUrl = import.meta.env.VITE_SERVICES_PORTAL_URL || 'http://localhost:3001'
  const shopWebsiteUrl = import.meta.env.VITE_SHOP_WEBSITE_URL || 'http://localhost:3002'
  
  return (
    <>
      <Newsletter />
      <footer className="bg-gray-100 text-gray-900 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, #ef4444 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {/* Company Info */}
            <motion.div 
              className="sm:col-span-2 lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img 
                  src="/icons/LOGO.png" 
                  alt="InnovatiqMedia Logo" 
                  className="h-10 sm:h-12 w-auto"
                />
              </motion.div>
              <motion.p 
                className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Digital solutions for modern businesses. We create innovative products and services 
                that help your business grow and succeed in the digital age.
              </motion.p>
              <motion.div 
                className="flex gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <MagneticButton strength={0.2}>
                  <motion.a 
                    href="https://twitter.com/innovatiqmedia" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-300 text-gray-700 flex items-center justify-center rounded shadow-sm relative overflow-hidden group" 
                    aria-label="Twitter"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </motion.a>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <motion.a 
                    href="https://facebook.com/innovatiqmedia" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-300 text-gray-700 flex items-center justify-center rounded shadow-sm relative overflow-hidden group" 
                    aria-label="Facebook"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </motion.a>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <motion.a 
                    href="https://instagram.com/innovatiqmedia" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-300 text-gray-700 flex items-center justify-center rounded shadow-sm relative overflow-hidden group" 
                    aria-label="Instagram"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.a>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <motion.a 
                    href="https://www.linkedin.com/company/innovatiq-media" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-300 text-gray-700 flex items-center justify-center rounded shadow-sm relative overflow-hidden group" 
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                </MagneticButton>
              </motion.div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h4>
              <motion.ul 
                className="space-y-2 sm:space-y-3"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" }
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <motion.a 
                      href={link.href} 
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-xs sm:text-sm md:text-base inline-flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="w-0 h-0.5 bg-gradient-to-r from-red-600 to-pink-600 group-hover:w-4 transition-all duration-300"
                      />
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Our Services</h4>
              <motion.ul 
                className="space-y-2 sm:space-y-3"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { href: servicesPortalUrl, label: "Services Portal", external: true },
                  { href: shopWebsiteUrl, label: "Shop", external: true },
                  { href: "/about", label: "Our Portfolio", external: false }
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <motion.a 
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-xs sm:text-sm md:text-base inline-flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="w-0 h-0.5 bg-gradient-to-r from-red-600 to-pink-600 group-hover:w-4 transition-all duration-300"
                      />
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contact Info</h4>
              <motion.ul 
                className="space-y-2 sm:space-y-3 text-gray-600 text-xs sm:text-sm md:text-base"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li 
                  className="flex items-start gap-2"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <motion.svg 
                    className="w-5 h-5 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </motion.svg>
                  <motion.a 
                    href="mailto:info@innovatiqmedia.com" 
                    className="hover:text-gray-900 transition-colors break-words"
                    whileHover={{ x: 5 }}
                  >
                    info@innovatiqmedia.com
                  </motion.a>
                </motion.li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+918651792079" className="hover:text-gray-900 transition-colors">
                    (+91) 8651792079
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Business Street<br />Suite 100, City, State 12345</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon-Fri: 9AM - 6PM<br />Sat: 10AM - 4PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <motion.div 
            className="border-t border-gray-300 pt-6 sm:pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <motion.p 
                className="text-gray-600 text-center md:text-left text-xs sm:text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                &copy; 2026 <GradientText>InnovatiqMedia</GradientText>. All rights reserved.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-600 text-xs sm:text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {[
                  { href: "/privacy", label: "Privacy Policy" },
                  { href: "/terms", label: "Terms of Service" },
                  { href: "/cookies", label: "Cookie Policy" }
                ].map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.href} 
                    className="hover:text-gray-900 transition-colors duration-200 relative"
                    whileHover={{ y: -2 }}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-pink-600"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  )
}

export default Footer
