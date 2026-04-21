import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Over Ons',
  description: 'Leer meer over LVK Events en de services die wij aanbieden voor uw evenement.',
}

const SERVICES_TAGS = [
  'Lighttech',
  'Rigger',
  'Stagehand',
  'Magazijn Prep',
  'Allround Technieker',
  'Transporten B',
  'Opbouw & Afbouw',
  'Permanentie',
]

const SERVICE_CARDS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="6" stroke="#2563eb" strokeWidth="1.5"/>
        <line x1="16" y1="2" x2="16" y2="7" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="16" y1="25" x2="16" y2="30" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="2" y1="16" x2="7" y2="16" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="25" y1="16" x2="30" y2="16" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="6" y1="6" x2="9.5" y2="9.5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="22.5" y1="22.5" x2="26" y2="26" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="26" y1="6" x2="22.5" y2="9.5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9.5" y1="22.5" x2="6" y2="26" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Lichtprogrammatie & Design',
    desc: 'Van idee tot uitwerking. Preproductie, design, plannen en programmatie zodat de show vlekkeloos verloopt. Elk evenement verdient een doordachte aanpak.',
    tags: ['GrandMA2', 'ChamSys', 'Vectorworks', 'Capture'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="10" width="24" height="16" rx="1" stroke="#2563eb" strokeWidth="1.5"/>
        <path d="M10 10V8a6 6 0 0 1 12 0v2" stroke="#2563eb" strokeWidth="1.5"/>
        <line x1="16" y1="17" x2="16" y2="19" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Warehouse Prep',
    desc: 'Professionele voorbereiding in het magazijn is essentieel. Controleren en klaarmaken van apparatuur voor een vlotte opbouw op locatie.',
    tags: ['Inventaris check', 'Kabelbeheer', 'Patchlijsten'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="14" width="26" height="12" rx="1" stroke="#2563eb" strokeWidth="1.5"/>
        <line x1="16" y1="6" x2="16" y2="14" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="10" x2="16" y2="6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="22" y1="10" x2="16" y2="6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="20" x2="24" y2="20" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'On-site Support',
    desc: 'Van opbouw tot afbouw. Volledige ondersteuning op locatie tijdens het evenement, van eerste hamer tot laatste kabel.',
    tags: ['Opbouw', 'Afbouw', 'Permanentie', 'Rigging'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M7 24 L16 6 L25 24" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="10" y1="18" x2="22" y2="18" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="12" y="24" width="8" height="4" rx="0.5" stroke="#2563eb" strokeWidth="1.5"/>
      </svg>
    ),
    title: '3D Printing & Ontwerp',
    desc: 'Naast event support helpen we je verder met 3D ontwerpen en printing van aangepaste onderdelen voor specifieke event- of decoratiebehoeften.',
    tags: ['3D Design', 'Prototyping', 'Maatwerk'],
  },
]

export default function OverOnsPage() {
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
          bottom: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label animate-fade-in delay-100" style={{ marginBottom: '1.5rem' }}>
            Over LVK Events
          </p>
          <h1
            className="font-condensed animate-fade-in-up delay-200"
            style={{
              fontSize: 'clamp(3rem, 9vw, 7rem)',
              fontWeight: 900,
              color: '#f4f4f5',
              lineHeight: 0.92,
              letterSpacing: '-0.01em',
              maxWidth: '800px',
            }}
          >
            Wie zijn<br />
            <span className="text-stroke-white">wij?</span>
          </h1>
          <div className="accent-line delay-400 animate-expand" style={{ maxWidth: '320px', marginTop: '2rem' }} />
        </div>
      </section>

      {/* ─── INTRO ───────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', background: '#111111', borderTop: '1px solid #1a1a1a' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          <ScrollReveal>
            <p className="font-body" style={{ fontSize: '1.125rem', color: '#a1a1aa', lineHeight: 1.85 }}>
              LVK Events is een studenten onderneming opgestart door Louis Van Krunkelsven.
              Een student met een passie voor licht, geluid, video en rigging. Hij specialiseert
              zich voornamelijk in licht en rigging maar houdt van afwisseling.
            </p>
            <p className="font-body" style={{ fontSize: '1.125rem', color: '#a1a1aa', lineHeight: 1.85, marginTop: '1.5rem' }}>
              Actief in België, Nederland en omgeving — voor zowel korte als langdurige opdrachten.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="section-label" style={{ marginBottom: '1.25rem' }}>Wat we aanbieden</p>
            {/* Services as equal pill tags — no ordering implied */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {SERVICES_TAGS.map((s, i) => (
                <span
                  key={i}
                  className="font-grotesk"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.5rem 1rem',
                    background: '#0a0a0a',
                    border: '1px solid #1e1e1e',
                    color: '#a1a1aa',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SERVICE CARDS ───────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Wat we doen</p>
            <h2
              className="font-condensed"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#f4f4f5', lineHeight: 1, marginBottom: '4rem' }}
            >
              Onze diensten in detail
            </h2>
          </ScrollReveal>

          {/* 2×2 grid — visually equal, no numbers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1px',
            background: '#1a1a1a',
          }}>
            {SERVICE_CARDS.map((card, i) => (
              <ScrollReveal key={i} delay={i * 60} style={{ height: '100%' }}>
                <div
                  className="service-card"
                  style={{
                    background: '#0a0a0a',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    height: '100%',
                  }}
                >
                  {/* Icon box */}
                  <div style={{
                    width: '52px',
                    height: '52px',
                    background: 'rgba(37,99,235,0.06)',
                    border: '1px solid rgba(37,99,235,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {card.icon}
                  </div>

                  <h3
                    className="font-grotesk"
                    style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#f4f4f5', lineHeight: 1.35 }}
                  >
                    {card.title}
                  </h3>
                  <p className="font-body" style={{ fontSize: '0.9rem', color: '#71717a', lineHeight: 1.8, flexGrow: 1 }}>
                    {card.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', paddingTop: '0.5rem', borderTop: '1px solid #1a1a1a' }}>
                    {card.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="font-body"
                        style={{
                          fontSize: '0.75rem',
                          color: '#52525b',
                          background: '#111111',
                          border: '1px solid #1a1a1a',
                          padding: '0.25rem 0.625rem',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', background: '#111111', borderTop: '1px solid #1a1a1a' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              className="font-condensed"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#f4f4f5', lineHeight: 1, marginBottom: '1.25rem' }}
            >
              Klaar voor je volgende evenement?
            </h2>
            <p className="font-body" style={{ color: '#71717a', lineHeight: 1.75, marginBottom: '2rem' }}>
              Neem vrijblijvend contact op en bespreek wat LVK Events voor jou kan doen.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Opnemen →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
