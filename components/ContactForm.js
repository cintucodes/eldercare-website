"use client"
import { useState, useRef } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  // Clears error status automatically when user starts typing
  const handleChange = (setter) => (e) => {
    setter(e.target.value)
    if (status?.type === 'error') {
      setStatus(null)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()
    const trimmedName = name.trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    setStatus(null)
    
    if (!trimmedEmail) {
      setStatus({ type: 'error', message: 'Please provide an email.' })
      emailRef.current?.focus()
      return
    }
    if (!emailRegex.test(trimmedEmail)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      emailRef.current?.focus()
      return
    }
    if (!trimmedMessage) {
      setStatus({ type: 'error', message: 'Please provide a message.' })
      messageRef.current?.focus()
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, message: trimmedMessage }),
      })
      let data = {}
      try {
        const ct = res.headers.get('content-type') || ''
        if (ct.includes('application/json')) {
          data = await res.json()
        }
      } catch (parseErr) {
        data = {}
      }

      if (res.ok) {
        const successMsg = data.message || 'Message sent successfully.'
        setStatus({ type: 'success', message: successMsg })
        setName('')
        setEmail('')
        setMessage('')
        setToastMessage(successMsg)
        setShowToast(true)
        setTimeout(() => setShowToast(false), 4000)
      } else {
        const errMsg = data.error || 'Submission failed. Please try again.'
        setStatus({ type: 'error', message: errMsg })
        
        const lowered = errMsg.toLowerCase()
        if (lowered.includes('email')) emailRef.current?.focus()
        else if (lowered.includes('message')) messageRef.current?.focus()
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Name (optional)</label>
        <input ref={nameRef} id="contact-name" name="name" value={name} onChange={handleChange(setName)} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 outline-none transition" />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Email</label>
        <input ref={emailRef} id="contact-email" name="email" required type="email" value={email} onChange={handleChange(setEmail)} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 outline-none transition" />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea ref={messageRef} id="contact-message" name="message" required value={message} onChange={handleChange(setMessage)} rows={4} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 outline-none transition" />
      </div>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={loading} aria-busy={loading} className="bg-primary text-white px-4 py-2 rounded">
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {status && (
          <p role="status" aria-live="polite" className={status.type === 'error' ? 'text-red-600' : 'text-green-600'}>{status.message}</p>
        )}
      </div>
      {/* Toast */}
      {showToast && (
        <div role="status" aria-live="polite" className="fixed bottom-8 right-8 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-2xl animate-fade-in-up">
          {toastMessage}
        </div>
      )}
    </form>
  )
}
