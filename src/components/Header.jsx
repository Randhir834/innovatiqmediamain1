import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Get URLs from environment variables
  const servicesPortalUrl = import.meta.env.VITE_SERVICES_PORTAL_URL || 'http://localhost:3001'
  const shopWebsiteUrl = import.meta.env.VITE_SHOP_WEBSITE_URL || 'http://localhost:3002'

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity duration-200">
            <img 
              src="/icons/LOGO.png" 
              alt="InnovatiqMedia Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link to="/" className="text-sm lg:text-base text-gray-700 hover:text-red-600 transition-colors duration-200 font-semibold">
              Home
            </Link>
            <Link to="/about" className="text-sm lg:text-base text-gray-700 hover:text-red-600 transition-colors duration-200 font-semibold">
              About
            </Link>
            <Link to="/contact" className="text-sm lg:text-base text-gray-700 hover:text-red-600 transition-colors duration-200 font-semibold">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2 lg:space-x-3">
            <a 
              href={servicesPortalUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 lg:px-6 py-2 text-xs lg:text-sm bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-200 whitespace-nowrap rounded"
            >
              Services
            </a>
            <a 
              href={shopWebsiteUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 lg:px-6 py-2 text-xs lg:text-sm border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-all duration-200 whitespace-nowrap rounded"
            >
              Shop
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-4 border-t border-gray-200 space-y-3 animate-fadeIn">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-base text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-200 font-semibold rounded px-2"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-base text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-200 font-semibold rounded px-2"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-base text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-200 font-semibold rounded px-2"
            >
              Contact
            </Link>
            <div className="pt-4 space-y-3">
              <a 
                href={servicesPortalUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-center text-sm bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-200 rounded"
              >
                Services
              </a>
              <a 
                href={shopWebsiteUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-center text-sm border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-all duration-200 rounded"
              >
                Shop
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
