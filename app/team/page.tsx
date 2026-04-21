import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Leer Louis Van Krunkelsven kennen — zaakvoerder en technieker bij LVK Events.',
}

const ROLES = ['Zaakvoerder', 'Technieker', 'Systeem', 'Operator']

const CERTS = [
  {
    label: 'Rijbewijs B',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="20" height="13" rx="1.5" stroke="#2563eb" strokeWidth="1.5"/>
        <circle cx="7.5" cy="16" r="2" stroke="#2563eb" strokeWidth="1.5"/>
        <circle cx="16.5" cy="16" r="2" stroke="#2563eb" strokeWidth="1.5"/>
        <line x1="9.5" y1="16" x2="14.5" y2="16" stroke="#2563eb" strokeWidth="1.5"/>
        <path d="M4 9h6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'VCA Basis',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v5c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V7L12 2z" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Vorkheftruck Certified',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 18h2V8l4-4h2v14" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="8" y1="4" x2="8" y2="18" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="10" y="12" width="10" height="6" rx="1" stroke="#2563eb" strokeWidth="1.5"/>
        <circle cx="13" cy="20" r="1.5" stroke="#2563eb" strokeWidth="1.5"/>
        <circle cx="18" cy="20" r="1.5" stroke="#2563eb" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Hoogtewerker / Schaarlift IPAF',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="14" width="10" height="7" rx="1" stroke="#2563eb" strokeWidth="1.5"/>
        <path d="M10 14V8M14 14V8" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="8" x2="16" y2="8" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 8V4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 5l2-2 2 2" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const SOFTWARE_GROUPS = [
  {
    category: 'Licht',
    items: ['GrandMA2', 'ChamSys'],
  },
  {
    category: 'Netwerk',
    items: ['DMXlan (ELC)', 'Luminex Arena'],
  },
  {
    category: 'Design & Visualisatie',
    items: ['Vectorworks', 'Capture'],
  },
]

export default function TeamPage() {
  return (
    <>
      {/* ─── PAGE HEADER ─────────────────────────────────── */}
      <section style={{
        paddingTop: '9rem',
        paddingBottom: '5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        background: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label animate-fade-in delay-100" style={{ marginBottom: '1.5rem' }}>
            Het Team
          </p>
          <h1
            className="font-condensed animate-fade-in-up delay-200"
            style={{
              fontSize: 'clamp(3rem, 9vw, 7rem)',
              fontWeight: 900,
              color: '#f4f4f5',
              lineHeight: 0.92,
              letterSpacing: '-0.01em',
            }}
          >
            Meet<br />
            <span className="text-stroke-white">Louis.</span>
          </h1>
          <div className="accent-line animate-expand delay-400" style={{ maxWidth: '240px', marginTop: '2rem' }} />
        </div>
      </section>

      {/* ─── PROFILE ─────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', background: '#111111', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>
            {/* Identity */}
            <ScrollReveal>
              <div style={{
                width: '96px',
                height: '96px',
                background: '#161616',
                border: '1px solid #1a1a1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.75rem',
              }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="15" r="7" stroke="#2563eb" strokeWidth="1.5"/>
                  <path d="M6 36c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>

              <h2
                className="font-condensed"
                style={{ fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)', fontWeight: 900, color: '#f4f4f5', lineHeight: 0.92, letterSpacing: '-0.01em', marginBottom: '1.25rem' }}
              >
                Louis Van<br />Krunkelsven
              </h2>

              {/* All roles as equal tags — no visual hierarchy between them */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {ROLES.map((role) => (
                  <span
                    key={role}
                    className="font-body"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '0.4rem 0.875rem',
                      background: '#161616',
                      border: '1px solid #1e1e1e',
                      color: '#71717a',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="font-body" style={{ fontSize: '0.9375rem', color: '#71717a', lineHeight: 1.85 }}>
                Als studenten technieker breng ik professionalisme, technisch inzicht en een
                hands-on mentaliteit mee naar elk evenement. Mijn specialisatie ligt bij licht en
                rigging, maar ik ben thuis in het volledige technische plaatje van een productie.
              </p>
            </ScrollReveal>

            {/* Quick facts */}
            <ScrollReveal delay={100}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1a1a1a' }}>
                {[
                  { label: 'Regio', value: 'België · Nederland' },
                  { label: 'Beschikbaarheid', value: 'Korte & langdurige opdrachten' },
                  { label: 'Specialisatie', value: 'Licht & Rigging' },
                  { label: 'Aansprakelijkheid', value: 'Beroepsaansprakelijkheidsverzekering' },
                ].map((item) => (
                  <div key={item.label} style={{
                    background: '#111111',
                    padding: '1.125rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}>
                    <span className="font-body" style={{ fontSize: '0.75rem', color: '#52525b', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, flexShrink: 0 }}>
                      {item.label}
                    </span>
                    <span className="font-grotesk" style={{ fontSize: '0.9rem', color: '#a1a1aa', fontWeight: 500, textAlign: 'right' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATES ────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Kwalificaties</p>
            <h2
              className="font-condensed"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#f4f4f5', lineHeight: 1, marginBottom: '3rem' }}
            >
              Rijbewijzen &<br />Certificaten
            </h2>
          </ScrollReveal>

          {/* Equal card grid — no numbers, no visual ranking */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1px',
            background: '#1a1a1a',
          }}>
            {CERTS.map((cert) => (
              <ScrollReveal key={cert.label} style={{ height: '100%' }}>
                <div style={{
                  background: '#0a0a0a',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  height: '100%',
                  borderLeft: '2px solid #1a1a1a',
                  transition: 'border-color 0.25s',
                }} className="service-card">
                  <div style={{
                    width: '44px',
                    height: '44px',
                    background: 'rgba(37,99,235,0.06)',
                    border: '1px solid rgba(37,99,235,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {cert.icon}
                  </div>
                  <p className="font-grotesk" style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f4f4f5', lineHeight: 1.4 }}>
                    {cert.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOFTWARE ────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', background: '#111111', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Expertise</p>
            <h2
              className="font-condensed"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#f4f4f5', lineHeight: 1, marginBottom: '0.75rem' }}
            >
              Programma&apos;s
            </h2>
            <p className="font-body" style={{ fontSize: '0.9375rem', color: '#71717a', marginBottom: '3.5rem' }}>
              Software waar geen geheimen voor zijn.
            </p>
          </ScrollReveal>

          {/* Grouped by category — within each group cards are equal siblings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {SOFTWARE_GROUPS.map((group, gi) => (
              <ScrollReveal key={group.category} delay={gi * 80}>
                <p className="section-label" style={{ marginBottom: '1rem' }}>{group.category}</p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '1px',
                  background: '#1a1a1a',
                }}>
                  {group.items.map((name) => (
                    <div
                      key={name}
                      className="service-card"
                      style={{
                        background: '#111111',
                        padding: '1.5rem 1.75rem',
                        borderLeft: '2px solid #1a1a1a',
                        transition: 'border-color 0.25s',
                      }}
                    >
                      <p
                        className="font-grotesk"
                        style={{ fontSize: '1rem', fontWeight: 600, color: '#f4f4f5', lineHeight: 1.3 }}
                      >
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', background: '#0a0a0a' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              className="font-condensed"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#f4f4f5', lineHeight: 1, marginBottom: '1rem' }}
            >
              Wil je samenwerken?
            </h2>
            <p className="font-body" style={{ color: '#71717a', lineHeight: 1.75, marginBottom: '2rem' }}>
              Neem contact op en bespreek jouw project.
            </p>
            <Link href="/contact" className="btn-primary">
              Neem Contact Op →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
