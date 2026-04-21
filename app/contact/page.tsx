import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem contact op met LVK Events voor ondersteuning bij uw volgende project of evenement.',
}

export default function ContactPage() {
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
          bottom: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label animate-fade-in delay-100" style={{ marginBottom: '1.5rem' }}>
            Laten we praten
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
            Neem<br />
            <span className="text-stroke-white">Contact Op.</span>
          </h1>
          <div className="accent-line animate-expand delay-400" style={{ maxWidth: '300px', marginTop: '2rem', marginBottom: '2rem' }} />
          <p
            className="font-body animate-fade-in delay-500"
            style={{ fontSize: '1.0625rem', color: '#71717a', lineHeight: 1.8, maxWidth: '560px' }}
          >
            Heb je ondersteuning nodig bij je volgende project of evenement? Ik sta open voor
            zowel korte als langdurige opdrachten en bekijk graag samen wat ik voor jou kan betekenen.
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem 8rem', background: '#111111', borderTop: '1px solid #1a1a1a' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Contact form */}
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: '1.75rem' }}>Stuur een bericht</p>
            <ContactForm />
          </ScrollReveal>

          {/* Contact details */}
          <ScrollReveal delay={120}>
            <p className="section-label" style={{ marginBottom: '1.75rem' }}>Directe contact</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Email */}
              <div style={{ borderLeft: '2px solid #1a1a1a', paddingLeft: '1.25rem' }}>
                <p className="font-body" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#52525b', marginBottom: '0.375rem', fontWeight: 600 }}>
                  Email
                </p>
                <a
                  href="mailto:Louis.vankrunkelsven@gmail.com"
                  className="font-grotesk link-contact"
                  style={{ fontSize: '1rem', fontWeight: 500 }}
                >
                  Louis.vankrunkelsven@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div style={{ borderLeft: '2px solid #1a1a1a', paddingLeft: '1.25rem' }}>
                <p className="font-body" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#52525b', marginBottom: '0.375rem', fontWeight: 600 }}>
                  GSM
                </p>
                <a
                  href="tel:0494254139"
                  className="font-grotesk link-contact"
                  style={{ fontSize: '1rem', fontWeight: 500 }}
                >
                  0494 25 41 39
                </a>
              </div>

              {/* Region */}
              <div style={{ borderLeft: '2px solid #1a1a1a', paddingLeft: '1.25rem' }}>
                <p className="font-body" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#52525b', marginBottom: '0.375rem', fontWeight: 600 }}>
                  Regio
                </p>
                <p className="font-grotesk" style={{ fontSize: '1rem', color: '#a1a1aa', fontWeight: 500 }}>
                  België · Nederland · en omgeving
                </p>
              </div>

              {/* Note */}
              <div style={{
                background: 'rgba(37,99,235,0.06)',
                border: '1px solid rgba(37,99,235,0.15)',
                padding: '1.25rem',
                marginTop: '1rem',
              }}>
                <p className="font-body" style={{ fontSize: '0.875rem', color: '#71717a', lineHeight: 1.7 }}>
                  <span style={{ color: '#2563eb', fontWeight: 600 }}>Vrijblijvend.</span> Elk gesprek begint
                  zonder verplichtingen. We bekijken samen wat mogelijk is voor jouw project of evenement.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
