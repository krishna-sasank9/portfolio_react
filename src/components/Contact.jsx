import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FiCopy, FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import { profile } from '../data/profile'

const EMPTY = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState({})

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    // Clear the error as soon as the user starts correcting it.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  const validate = () => {
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (form.message.trim().length < 10) next.message = 'A little more detail, please.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submit = async (e) => {
    e.preventDefault()
    if (sending || !validate()) return

    setSending(true)
    try {
      // Firebase is ~500 kB — load it only when someone actually submits,
      // so it never costs the majority of visitors anything.
      const [{ db }, { addDoc, collection, serverTimestamp }] = await Promise.all([
        import('../firebase'),
        import('firebase/firestore'),
      ])

      await addDoc(collection(db, 'contacts'), {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        createdAt: serverTimestamp(),
      })
      toast.success('Message sent — I’ll get back to you soon.')
      setForm(EMPTY)
    } catch (error) {
      console.error('Contact form submission failed:', error)
      toast.error('Something went wrong. Try email instead?')
    } finally {
      // Runs on both paths, so a failed send can always be retried.
      setSending(false)
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      toast.success('Email copied')
    } catch {
      toast.error('Could not copy — select it manually.')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="section__inner contact__grid">
        <motion.div
          className="contact__intro"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section__label">Contact</p>
          <h2 className="section__title">Let&rsquo;s build something</h2>
          <p className="section__lead">
            Open to roles, freelance work and interesting problems. I read everything that
            lands here.
          </p>

          <button className="contact__email" onClick={copyEmail}>
            <FiMail aria-hidden="true" />
            {profile.email}
            <FiCopy className="contact__copy" aria-hidden="true" />
          </button>

          <div className="contact__socials">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FiGithub />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={submit}
          noValidate
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Field
            id="name"
            label="Name"
            value={form.name}
            onChange={update('name')}
            error={errors.name}
            placeholder="Ada Lovelace"
          />
          <Field
            id="email"
            type="email"
            label="Email"
            value={form.email}
            onChange={update('email')}
            error={errors.email}
            placeholder="ada@example.com"
          />
          <Field
            id="message"
            label="Message"
            value={form.message}
            onChange={update('message')}
            error={errors.message}
            placeholder="Tell me about the role or project…"
            textarea
          />

          <button className="btn btn--primary contact__submit" type="submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send message'}
            {!sending && <FiSend />}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

function Field({ id, label, error, textarea, ...props }) {
  const Tag = textarea ? 'textarea' : 'input'
  const errorId = `${id}-error`

  return (
    <div className={`field ${error ? 'field--error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <Tag
        id={id}
        name={id}
        rows={textarea ? 5 : undefined}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <p className="field__error" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
