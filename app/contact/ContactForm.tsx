'use client'

import { useState, FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      naam: (form.elements.namedItem('naam') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      telefoon: (form.elements.namedItem('telefoon') as HTMLInputElement).value,
      bericht: (form.elements.namedItem('bericht') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMsg('Er is iets misgelopen. Probeer het opnieuw of stuur een e-mail.')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        background: 'rgba(37,99,235,0.06)',
        border: '1px solid rgba(37,99,235,0.2)',
        padding: '3rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
        <h3 className="font-grotesk" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#f4f4f5', marginBottom: '0.75rem' }}>
          Bericht verzonden!
        </h3>
        <p className="font-body" style={{ fontSize: '0.9375rem', color: '#71717a', lineHeight: 1.7 }}>
          Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-ghost"
          style={{ marginTop: '1.5rem', fontSize: '0.8125rem' }}
        >
          Nieuw bericht sturen
        </button>
      </div>
    )
  }

  const isLoading = status === 'loading'

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Naam */}
      <div>
        <label
          htmlFor="naam"
          className="font-body"
          style={{ display: 'block', fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#52525b', fontWeight: 600, marginBottom: '0.5rem' }}
        >
          Naam *
        </label>
        <input
          id="naam"
          name="naam"
          type="text"
          required
          disabled={isLoading}
          placeholder="Jouw naam"
          className="form-input"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="font-body"
          style={{ display: 'block', fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#52525b', fontWeight: 600, marginBottom: '0.5rem' }}
        >
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={isLoading}
          placeholder="jouw@email.com"
          className="form-input"
        />
      </div>

      {/* Telefoon */}
      <div>
        <label
          htmlFor="telefoon"
          className="font-body"
          style={{ display: 'block', fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#52525b', fontWeight: 600, marginBottom: '0.5rem' }}
        >
          Telefoonnummer <span style={{ color: '#3f3f46' }}>(optioneel)</span>
        </label>
        <input
          id="telefoon"
          name="telefoon"
          type="tel"
          disabled={isLoading}
          placeholder="+32 ..."
          className="form-input"
        />
      </div>

      {/* Bericht */}
      <div>
        <label
          htmlFor="bericht"
          className="font-body"
          style={{ display: 'block', fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#52525b', fontWeight: 600, marginBottom: '0.5rem' }}
        >
          Bericht *
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          disabled={isLoading}
          rows={6}
          placeholder="Vertel over jouw project, de datum, locatie en wat je nodig hebt..."
          className="form-input"
          style={{ resize: 'vertical', minHeight: '140px' }}
        />
      </div>

      {errorMsg && (
        <p className="font-body" style={{ fontSize: '0.875rem', color: '#ef4444', padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary"
        style={{ justifyContent: 'center', opacity: isLoading ? 0.6 : 1 }}
      >
        {isLoading ? 'Verzenden...' : 'Verzenden →'}
      </button>

      <p className="font-body" style={{ fontSize: '0.75rem', color: '#3f3f46', lineHeight: 1.6 }}>
        Door dit formulier te verzenden ga je akkoord met onze{' '}
        <a href="/algemene-voorwaarden" style={{ color: '#52525b', textDecoration: 'underline' }}>
          algemene voorwaarden
        </a>
        .
      </p>
    </form>
  )
}
