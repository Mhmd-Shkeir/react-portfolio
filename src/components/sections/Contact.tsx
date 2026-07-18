import { useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiSend, FiXCircle } from 'react-icons/fi'
import SectionHeading from '@/components/ui/SectionHeading'

type Status = 'idle' | 'sending' | 'success' | 'error'

const inputClasses =
  'w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(serviceId, templateId, form, {
        publicKey,
      })
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        description="Have a project in mind or just want to say hi? Send a message."
      />

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className={inputClasses}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={inputClasses}
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          rows={5}
          className={`${inputClasses} resize-none`}
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 disabled:opacity-60"
        >
          <FiSend size={16} />
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>

        {status === 'success' && (
          <p className="flex items-center gap-2 text-sm text-emerald-400">
            <FiCheckCircle size={16} /> Message sent — I'll get back to you
            soon.
          </p>
        )}
        {status === 'error' && (
          <p className="flex items-center gap-2 text-sm text-red-400">
            <FiXCircle size={16} /> Something went wrong. Please try again or
            email me directly.
          </p>
        )}
      </motion.form>
    </section>
  )
}
