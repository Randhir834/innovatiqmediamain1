import { useState } from 'react'

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! 👋 How can we help you today?' }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    // Add user message
    setMessages([...messages, { sender: 'user', text: inputMessage }])
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'Thanks for your message! Our team will get back to you shortly. 😊' 
      }])
    }, 1000)

    setInputMessage('')
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full shadow-2xl hover:scale-110 transition transform flex items-center justify-center text-xl sm:text-2xl"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-md h-[500px] sm:h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold">Chat with us!</h3>
            <p className="text-xs sm:text-sm text-white/80">We're here to help 24/7</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 sm:space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] sm:max-w-[70%] p-2.5 sm:p-3 rounded-2xl text-sm sm:text-base ${
                    msg.sender === 'user'
                      ? 'bg-red-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 sm:p-4 bg-white border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-bold hover:shadow-lg transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default ChatWidget
