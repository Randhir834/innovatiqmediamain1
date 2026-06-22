import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition transform hover:scale-105"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-full font-bold hover:bg-red-600 hover:text-white transition transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-gray-600 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services" className="text-red-600 hover:underline font-medium">
              Our Services
            </Link>
            <Link to="/about" className="text-red-600 hover:underline font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-red-600 hover:underline font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
