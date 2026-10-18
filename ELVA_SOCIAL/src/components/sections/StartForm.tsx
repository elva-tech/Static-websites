import { useState, type FormEvent, type ReactNode } from 'react'
import { ArrowRight, CircleCheck, Loader2 } from 'lucide-react'
import { FORMSUBMIT_ENDPOINT } from '../../config/formsubmit'

const BUSINESS_TYPES = [
  'Retail / e-commerce',
  'Restaurant / hospitality',
  'Real estate',
  'Education / coaching',
  'Healthcare / wellness',
  'Professional services',
  'Agency / consultancy',
  'Other',
]
const PLATFORMS = ['LinkedIn', 'Instagram', 'Facebook']
const COOLDOWN_KEY = 'elva-social-sent-at'
const COOLDOWN_MS = 30_000

type Status = 'idle' | 'sending' | 'success' | 'error' | 'cooldown'
type Errors = Partial<Record<'name' | 'company' | 'email' | 'phone' | 'city' | 'businessType', string>>

const normalisePhone = (raw: string) => {
  const digits = raw.replace(/\D/g, '')
  return digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits
}

export function StartForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return
    const form = e.currentTarget
    const d = new FormData(form)
    if (String(d.get('_honey') || '').trim()) return

    const v = (k: string) => String(d.get(k) || '').trim()
    const name = v('name')
    const email = v('email')
    const phone = normalisePhone(v('phone'))
    const next: Errors = {}

    if (!name) next.name = 'Please enter your name'
    else if (name.length < 2 || !/[a-zA-Z]/.test(name)) next.name = 'Enter a valid name'
    if (!v('company')) next.company = 'Please enter your business name'
    if (!email) next.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = 'Enter a valid email address'
    if (!phone) next.phone = 'Please enter your mobile number'
    else if (!/^[6-9]\d{9}$/.test(phone)) next.phone = 'Enter a valid 10-digit Indian mobile number'
    if (!v('city')) next.city = 'Please enter your city'
    if (!v('businessType')) next.businessType = 'Select your business type'

    setErrors(next)
    const firstInvalid = Object.keys(next)[0]
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    const sentAt = Number(localStorage.getItem(COOLDOWN_KEY) || 0)
    if (sentAt && Date.now() - sentAt < COOLDOWN_MS) {
      setStatus('cooldown')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          company: v('company'),
          email,
          phone,
          city: v('city'),
          businessType: v('businessType'),
          platforms: d.getAll('platforms').map(String).join(', ') || 'Not specified',
          message: v('message'),
          _subject: 'New ELVA Social AI Enquiry',
          _replyto: email,
          _template: 'table',
          _url: window.location.href,
          _honey: '',
        }),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error(result.message || 'Submission failed')
      }
      localStorage.setItem(COOLDOWN_KEY, String(Date.now()))
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="start-form start-success" role="status">
        <CircleCheck size={40} />
        <h3>Thank you for contacting ELVA.</h3>
        <p>Your request has been sent. Our team will get in touch with you shortly.</p>
        <button type="button" className="start-again" onClick={() => setStatus('idle')}>
          Submit another request
        </button>
      </div>
    )
  }

  const field = (name: keyof Errors, label: string, input: ReactNode) => (
    <label className="start-field">
      <span>{label}</span>
      {input}
      {errors[name] && (
        <em id={`start-${name}-error`} role="alert">
          {errors[name]}
        </em>
      )}
    </label>
  )
  const a = (name: keyof Errors) => ({
    name,
    'aria-invalid': !!errors[name],
    'aria-describedby': errors[name] ? `start-${name}-error` : undefined,
  })

  return (
    <form className="start-form" noValidate onSubmit={onSubmit} aria-label="Get started with ELVA Social AI">
      <label className="start-honey" aria-hidden="true">
        Leave this field empty
        <input name="_honey" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="start-grid">
        {field('name', 'Name', <input {...a('name')} autoComplete="name" />)}
        {field('company', 'Business name', <input {...a('company')} autoComplete="organization" />)}
        {field('email', 'Work email', <input {...a('email')} type="email" autoComplete="email" placeholder="you@company.com" />)}
        {field(
          'phone',
          'Mobile number',
          <input {...a('phone')} type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile number" />,
        )}
        {field('city', 'City', <input {...a('city')} autoComplete="address-level2" />)}
        {field(
          'businessType',
          'Business type',
          <select {...a('businessType')} defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>,
        )}
      </div>

      <fieldset className="start-platforms">
        <legend>Platforms you want ELVA to manage</legend>
        <div>
          {PLATFORMS.map((p) => (
            <label key={p}>
              <input type="checkbox" name="platforms" value={p} defaultChecked />
              <span>{p}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="start-field">
        <span>Message (optional)</span>
        <textarea name="message" rows={4} placeholder="Tell us about your business and the content you need" />
      </label>

      {status === 'error' && (
        <p className="start-status" role="alert">
          We couldn't send your request. Please try again in a moment.
        </p>
      )}
      {status === 'cooldown' && (
        <p className="start-status" role="status">
          Please wait 30 seconds before sending another request.
        </p>
      )}

      <button type="submit" className="cta start-submit" disabled={status === 'sending'}>
        {status === 'sending' ? (
          <>
            <Loader2 size={17} className="start-spin" /> Sending…
          </>
        ) : (
          <>
            Start creating <ArrowRight size={17} />
          </>
        )}
      </button>
      <p className="start-note">Your details are sent securely to the ELVA team by email.</p>
    </form>
  )
}
