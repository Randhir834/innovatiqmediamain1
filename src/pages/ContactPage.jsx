import { useState } from 'react'
import { contactAPI } from '../services/api'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('')
  const [validationErrors, setValidationErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: undefined,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')
    setValidationErrors({})
    
    try {
      // Submit to Laravel API
      const response = await contactAPI.submit(formData)
      
      if (response.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      
      if (error.response) {
        // Server responded with error
        if (error.response.status === 422 && error.response.data.errors) {
          // Validation errors
          setValidationErrors(error.response.data.errors)
          setErrorMessage('Please check the form for errors.')
        } else {
          // Other server errors
          setErrorMessage(
            error.response.data.message || 
            'An error occurred while sending your message. Please try again.'
          )
        }
      } else if (error.request) {
        // Network error
        setErrorMessage('Unable to connect to the server. Please check your internet connection and try again.')
      } else {
        // Other errors
        setErrorMessage('An unexpected error occurred. Please try again.')
      }
      
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Form Section */}
      <section className="relative pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-16 sm:pb-24 md:pb-32 lg:pb-40 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            
            {/* Left Column - Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight pb-2">
                Send us a message
              </h2>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-green-900">Message sent successfully!</p>
                      <p className="text-sm text-green-700 mt-1">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && errorMessage && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-red-900">Error</p>
                      <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                        validationErrors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-gray-900'
                      }`}
                      placeholder="John Doe"
                    />
                    {validationErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.name[0]}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                        validationErrors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-gray-900'
                      }`}
                      placeholder="john@example.com"
                    />
                    {validationErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.email[0]}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                      validationErrors.subject 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 focus:border-gray-900'
                    }`}
                    placeholder="How can we help?"
                  />
                  {validationErrors.subject && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.subject[0]}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none ${
                      validationErrors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 focus:border-gray-900'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {validationErrors.message && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.message[0]}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Right Column - Info & Hours */}
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              
              {/* Business Hours */}
              <div>
                <div className="text-xs sm:text-sm font-mono text-gray-400 mb-3 sm:mb-4">01</div>
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Business hours
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-2 leading-relaxed">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-2 leading-relaxed">
                  Saturday: 10:00 AM - 4:00 PM
                </p>
                <p className="text-sm text-gray-500">
                  Sunday: Closed
                </p>
                <div className="mt-8 sm:mt-10 md:mt-12 h-px bg-gray-200"></div>
              </div>

              {/* Response Time */}
              <div>
                <div className="text-xs sm:text-sm font-mono text-gray-400 mb-3 sm:mb-4">02</div>
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Response time
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-2 leading-relaxed">
                  We aim to respond to all inquiries within 24 hours during business days.
                </p>
                <p className="text-sm text-gray-500">
                  Urgent matters? Give us a call directly.
                </p>
                <div className="mt-8 sm:mt-10 md:mt-12 h-px bg-gray-200"></div>
              </div>

              {/* What to Expect */}
              <div>
                <div className="text-xs sm:text-sm font-mono text-gray-400 mb-3 sm:mb-4">03</div>
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  What to expect
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-2 leading-relaxed">
                  After you reach out, we'll schedule a discovery call to understand your needs and goals.
                </p>
                <p className="text-sm text-gray-500">
                  Then we'll create a custom strategy for your business.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ContactPage
