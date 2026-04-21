'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.refresh()
    } else {
      setError('Ongeldig wachtwoord.')
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
    }}>
      <div style={{ width: '100%', maxWidth: '380px' }}>
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <span className="font-condensed" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.08em', color: '#f4f4f5' }}>
            LVK <span style={{ color: '#2563eb' }}>EVENTS</span>
          </span>
          <p className="font-body" style={{ fontSize: '0.875rem', color: '#52525b', marginTop: '0.5rem' }}>
            Admin Dashboard
          </p>
        </div>

        <div style={{
          background: '#111111',
          border: '1px solid #1a1a1a',
          padding: '2rem',
        }}>
          <p className="section-label" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Inloggen</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label
                htmlFor="password"
                className="font-body"
                style={{ display: 'block', fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#52525b', fontWeight: 600, marginBottom: '0.5rem' }}
              >
                Wachtwoord
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="form-input"
                placeholder="••••••••"
                autoFocus
              />
            </div>

            {error && (
              <p className="font-body" style={{ fontSize: '0.875rem', color: '#ef4444' }}>{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ justifyContent: 'center', marginTop: '0.5rem', opacity: loading ? 0.6 : 1 }}
            >
              {loading ? 'Laden...' : 'Inloggen →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
