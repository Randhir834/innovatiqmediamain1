import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to API
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="bg-red-600 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
            Get updates & offers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-5 sm:mb-6">
            Join our newsletter for tips, deals, and project inspiration
          </p>

          {subscribed ? (
            <div className="bg-white text-green-600 py-3 sm:py-4 px-6 sm:px-8 inline-flex items-center gap-2 font-semibold text-sm sm:text-base rounded shadow-lg">
              ✓ Thanks! Check your inbox
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email"
                className="flex-1 input-field text-sm sm:text-base px-4 py-3 rounded"
              />
              <button
                type="submit"
                className="px-6 sm:px-8 py-3 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap text-sm sm:text-base rounded shadow-lg"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
