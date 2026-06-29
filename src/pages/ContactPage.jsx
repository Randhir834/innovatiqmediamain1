import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { contactAPI } from '../services/api'
import FadeIn from '../components/animations/FadeIn'
import TextReveal from '../components/animations/TextReveal'
import SpotlightCard from '../components/animations/SpotlightCard'
import LiquidButton from '../components/animations/LiquidButton'
import BackgroundBeams from '../components/animations/BackgroundBeams'
import ParticleEffect from '../components/animations/ParticleEffect'

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
  const [focusedField, setFocusedField] = useState(null)

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <BackgroundBeams className="opacity-20" />
      <ParticleEffect count={30} color="#ef4444" />
      
      {/* Form Section */}
      <section className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-16 sm:pb-24 md:pb-32 lg:pb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <FadeIn direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <TextReveal className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight pb-2" style={{letterSpacing: '-0.02em', lineHeight: '1.2'}}>
                Let's talk
              </TextReveal>
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Have a project in mind? We'd love to hear from you
              </motion.p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start max-w-7xl mx-auto">
            
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <SpotlightCard className="backdrop-blur-sm bg-white/80 p-8 sm:p-10 rounded-3xl border border-gray-200/50 shadow-2xl">
                
                {/* Success Message with Animation */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div 
                      className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-2xl overflow-hidden relative"
                      initial={{ opacity: 0, scale: 0.8, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ type: 'spring', duration: 0.5 }}
                    >
                      <div className="flex items-start relative z-10">
                        <motion.svg 
                          className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: 'spring' }}
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </motion.svg>
                        <div>
                          <p className="font-bold text-green-900 text-lg">Message sent successfully!</p>
                          <p className="text-sm text-green-700 mt-1">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                        </div>
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Error Message */}
                <AnimatePresence>
                  {submitStatus === 'error' && errorMessage && (
                    <motion.div 
                      className="mb-6 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-500 rounded-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-bold text-red-900 text-lg">Error</p>
                          <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Your name *
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all ${
                          validationErrors.name 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                        }`}
                        placeholder="John Doe"
                        animate={{
                          scale: focusedField === 'name' ? 1.02 : 1
                        }}
                      />
                      {validationErrors.name && (
                        <motion.p 
                          className="mt-2 text-sm text-red-600 font-medium"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {validationErrors.name[0]}
                        </motion.p>
                      )}
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Email address *
                      </label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all ${
                          validationErrors.email 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                        }`}
                        placeholder="john@example.com"
                        animate={{
                          scale: focusedField === 'email' ? 1.02 : 1
                        }}
                      />
                      {validationErrors.email && (
                        <motion.p 
                          className="mt-2 text-sm text-red-600 font-medium"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {validationErrors.email[0]}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Subject *
                    </label>
                    <motion.input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all ${
                        validationErrors.subject 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                      }`}
                      placeholder="How can we help?"
                      animate={{
                        scale: focusedField === 'subject' ? 1.01 : 1
                      }}
                    />
                    {validationErrors.subject && (
                      <motion.p 
                        className="mt-2 text-sm text-red-600 font-medium"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {validationErrors.subject[0]}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Message *
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="6"
                      className={`w-full px-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all resize-none ${
                        validationErrors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                      }`}
                      placeholder="Tell us about your project..."
                      animate={{
                        scale: focusedField === 'message' ? 1.01 : 1
                      }}
                    />
                    {validationErrors.message && (
                      <motion.p 
                        className="mt-2 text-sm text-red-600 font-medium"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {validationErrors.message[0]}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <LiquidButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-5 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl shadow-2xl shadow-red-500/30 disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <motion.svg 
                          className="h-6 w-6 text-white" 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </motion.svg>
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>Send message</span>
                        <motion.svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </span>
                    )}
                  </LiquidButton>
                </form>
              </SpotlightCard>
            </motion.div>
            
            {/* Right Column - Info & Hours with Animations */}
            <motion.div 
              className="space-y-8 sm:space-y-10 md:space-y-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              
              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SpotlightCard className="backdrop-blur-sm bg-white/60 p-6 sm:p-8 rounded-2xl border border-gray-200/50">
                  <motion.div 
                    className="text-xs sm:text-sm font-mono text-gray-400 mb-3 sm:mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    01
                  </motion.div>
                  <motion.h3 
                    className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Business hours
                  </motion.h3>
                  <motion.p 
                    className="text-base sm:text-lg text-gray-600 mb-2 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </motion.p>
                  <motion.p 
                    className="text-base sm:text-lg text-gray-600 mb-2 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Saturday: 10:00 AM - 4:00 PM
                  </motion.p>
                  <motion.p 
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Sunday: Closed
                  </motion.p>
                </SpotlightCard>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <SpotlightCard className="backdrop-blur-sm bg-white/60 p-6 sm:p-8 rounded-2xl border border-gray-200/50">
                  <motion.div 
                    className="text-xs sm:text-sm font-mono text-gray-400 mb-3 sm:mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    02
                  </motion.div>
                  <motion.h3 
                    className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Response time
                  </motion.h3>
                  <motion.p 
                    className="text-base sm:text-lg text-gray-600 mb-2 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    We aim to respond to all inquiries within 24 hours during business days.
                  </motion.p>
                  <motion.p 
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Urgent matters? Give us a call directly.
                  </motion.p>
                </SpotlightCard>
              </motion.div>

              {/* What to Expect */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <SpotlightCard className="backdrop-blur-sm bg-white/60 p-6 sm:p-8 rounded-2xl border border-gray-200/50">
                  <motion.div 
                    className="text-xs sm:text-sm font-mono text-gray-400 mb-3 sm:mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    03
                  </motion.div>
                  <motion.h3 
                    className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    What to expect
                  </motion.h3>
                  <motion.p 
                    className="text-base sm:text-lg text-gray-600 mb-2 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    After you reach out, we'll schedule a discovery call to understand your needs and goals.
                  </motion.p>
                  <motion.p 
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Then we'll create a custom strategy for your business.
                  </motion.p>
                </SpotlightCard>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ContactPage
