import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './animations/MagneticButton'
import LiquidButton from './animations/LiquidButton'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('/')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Get URLs from environment variables
  const servicesPortalUrl = import.meta.env.VITE_SERVICES_PORTAL_URL || 'http://localhost:3001'
  const shopWebsiteUrl = import.meta.env.VITE_SHOP_WEBSITE_URL || 'http://localhost:3002'

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`bg-white/80 backdrop-blur-xl sticky top-0 z-40 transition-all duration-300 border-b ${
        scrolled ? 'shadow-lg border-gray-200/50' : 'border-transparent shadow-md'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Magnetic Effect */}
          <MagneticButton strength={0.15}>
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group" onClick={() => setActiveLink('/')}>
              <motion.img 
                src="/icons/LOGO.png" 
                alt="InnovatiqMedia Logo" 
                className="h-8 sm:h-10 md:h-12 w-auto"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </Link>
          </MagneticButton>
          
          {/* Desktop Navigation with Liquid Indicator */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-gray-100/50 rounded-full px-2 py-2">
            {navLinks.map((link) => (
              <MagneticButton key={link.to} strength={0.12}>
                <Link 
                  to={link.to} 
                  onClick={() => setActiveLink(link.to)}
                  className="relative"
                >
                  <motion.div
                    className={`px-4 lg:px-6 py-2 text-sm lg:text-base font-semibold rounded-full transition-colors ${
                      activeLink === link.to ? 'text-white' : 'text-gray-700 hover:text-gray-900'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.div>
                  {activeLink === link.to && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              </MagneticButton>
            ))}
          </div>

          {/* CTA Buttons with Liquid Effect */}
          <div className="hidden lg:flex items-center space-x-2 lg:space-x-3">
            <MagneticButton strength={0.2}>
              <LiquidButton 
                className="px-3 lg:px-6 py-2.5 text-xs lg:text-sm bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold whitespace-nowrap rounded-full shadow-lg shadow-red-500/30"
                onClick={() => window.open(servicesPortalUrl, '_blank')}
              >
                Services
              </LiquidButton>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <LiquidButton 
                className="px-3 lg:px-6 py-2.5 text-xs lg:text-sm bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold whitespace-nowrap rounded-full shadow-lg shadow-red-500/30"
                onClick={() => window.open(shopWebsiteUrl, '_blank')}
              >
                Print Media
              </LiquidButton>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button with Animation */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors duration-200 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Menu with Stagger Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="md:hidden mt-4 pt-4 pb-4 border-t border-gray-200/50 space-y-2 overflow-hidden backdrop-blur-sm"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.to} 
                    onClick={() => { setMobileMenuOpen(false); setActiveLink(link.to); }}
                    className="block py-3 text-base text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200 font-semibold rounded-lg px-4"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            <motion.div 
              className="pt-4 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              <LiquidButton
                className="w-full px-6 py-3 text-center text-sm bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg"
                onClick={() => window.open(servicesPortalUrl, '_blank')}
              >
                Services
              </LiquidButton>
              <LiquidButton
                className="w-full px-6 py-3 text-center text-sm bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg"
                onClick={() => window.open(shopWebsiteUrl, '_blank')}
              >
                Print Media
              </LiquidButton>
            </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
