import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const SERVICES_TICKER = [
  'Lighttech', 'Rigger', 'Stagehand', 'Magazijn Prep',
  'Allround Technieker', 'Transporten B', 'Opbouw & Afbouw', 'Permanentie',
]

const SERVICE_CARDS = [
  {
    title: 'Preproductie &\nLichtdesign',
    desc: 'Van idee tot uitwerking. Design, plannen en programmatie zodat de show op de dag vlekkeloos verloopt.',
    badges: ['MA2', 'ChamSys', 'Vectorworks', 'Capture'],
  },
  {
    title: 'Warehouse\nPrep',
    desc: 'Professionele voorbereiding in het magazijn: controle, labeling en sub-assemblage. Snellere opbouw op site.',
    badges: ['QA', 'Label', 'Pack'],
  },
  {
    title: 'On-site\nSupport',
    desc: 'Van opbouw tot afbouw. Rigger, lighttech, stagehand of allround technieker. Permanentie tijdens het event.',
    badges: ['Rigger', 'Operator', 'Stagehand'],
  },
  {
    title: '3D Ontwerp\n& Printing',
    desc: 'Custom onderdelen voor de show — brackets, adapters, showstukken. Ontwerp en print in-house.',
    badges: ['Fusion', 'PLA', 'PETG'],
  },
]

const CERTS = ['Rijbewijs B', 'VCA Basis', 'Vorkheftruck', 'IPAF — Hoogtewerker / Schaarlift']
const SOFTWARE = ['grandMA2', 'Chamsys', 'ELC', 'DMXlan', 'Luminex Arena', 'Vectorworks', 'Capture']

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section
        className="dot-grid"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '7rem 1.5rem 5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <p className="section-label animate-fade-in delay-100" style={{ marginBottom: '2rem' }}>
            Licht · Geluid · Rigging · Video
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <h1
              className="font-condensed animate-fade-in-up delay-200"
              style={{ fontSize: 'clamp(5rem, 18vw, 14rem)', fontWeight: 900, color: '#f4f4f5', letterSpacing: '-0.01em', display: 'block', lineHeight: 0.88 }}
            >
              LVK
            </h1>
            <h1
              className="font-condensed text-stroke-white animate-fade-in-up delay-300"
              style={{ fontSize: 'clamp(5rem, 18vw, 14rem)', fontWeight: 900, letterSpacing: '-0.01em', display: 'block', lineHeight: 0.88 }}
            >
              EVENTS
            </h1>
          </div>

          <div className="accent-line animate-expand delay-500" style={{ maxWidth: '560px', marginBottom: '2.5rem' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '520px' }}>
            <p
              className="font-condensed animate-fade-in delay-600"
              style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.625rem)', fontWeight: 700, letterSpacing: '0.12em', color: '#52525b', textTransform: 'uppercase' }}
            >
              Licht. Geluid. Perfectie.
            </p>
            <p
              className="font-body animate-fade-in delay-700"
              style={{ fontSize: '1rem', color: '#52525b', lineHeight: 1.8 }}
            >
              LVK Events is een studenten onderneming opgericht door Louis Van Krunkelsven —
              een technieker met een passie voor licht, geluid, video en rigging. Actief in
              België, Nederland en omgeving.
            </p>
          </div>

          <div className="animate-fade-in delay-800" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2.5rem' }}>
            <Link href="/contact" className="btn-primary">Neem Contact Op →</Link>
            <Link href="/over-ons" className="btn-ghost">Onze Services</Link>
          </div>
        </div>

        <div className="animate-fade-in delay-900" style={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        }}>
          <span className="font-body" style={{ fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2a2a2a' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #2a2a2a, transparent)' }} />
        </div>
      </section>

      {/* ─── TICKER ────────────────────────────────────────── */}
      <div style={{
        background: '#0f0f0f',
        borderTop: '1px solid #1a1a1a',
        borderBottom: '1px solid #1a1a1a',
        padding: '1.125rem 0',
        overflow: 'hidden',
      }}>
        <div className="animate-marquee" style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...SERVICES_TICKER, ...SERVICES_TICKER].map((s, i) => (
            <span key={i} className="font-condensed" style={{
              fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#2e2e2e', padding: '0 2.5rem',
              display: 'inline-flex', alignItems: 'center', gap: '2.5rem',
            }}>
              {s}
              <span style={{ color: '#2563eb', fontSize: '0.4375rem' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── SERVICES ──────────────────────────────────────── */}
      <section style={{ padding: '7rem 1.5rem', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Wat we doen</p>
            <h2
              className="font-condensed"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 900,
                color: '#f4f4f5',
                lineHeight: 0.95,
                marginBottom: '4rem',
              }}
            >
              Van eerste hamer<br />
              <span className="text-stroke-white">tot laatste kabel.</span>
            </h2>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1px',
            background: '#1a1a1a',
          }}>
            {SERVICE_CARDS.map((card, i) => (
              <ScrollReveal key={i} delay={i * 70} style={{ height: '100%' }}>
                <div
                  className="home-card"
                  style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    height: '100%',
                  }}
                >
                  {/* Short blue accent bar — replaces numbers */}
                  <div style={{ width: '32px', height: '3px', background: '#2563eb', flexShrink: 0 }} />

                  <h3
                    className="font-condensed"
                    style={{
                      fontSize: 'clamp(1.375rem, 2.5vw, 1.625rem)',
                      fontWeight: 800,
                      color: '#f4f4f5',
                      lineHeight: 1.1,
                      textTransform: 'uppercase',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {card.title}
                  </h3>

                  <p className="font-body" style={{ fontSize: '0.875rem', color: '#71717a', lineHeight: 1.75, flexGrow: 1 }}>
                    {card.desc}
                  </p>

                  {/* Skill badges — all equal, no order implied */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', paddingTop: '1rem', borderTop: '1px solid #1a1a1a' }}>
                    {card.badges.map((badge) => (
                      <span
                        key={badge}
                        className="font-body"
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#3f3f46',
                          border: '1px solid #1e1e1e',
                          padding: '0.25rem 0.625rem',
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT — photo-style layout ────────────────────── */}
      <section style={{
        background: '#111111',
        borderTop: '1px solid #1a1a1a',
        borderBottom: '1px solid #1a1a1a',
        padding: '7rem 1.5rem',
      }}>
        <div className="about-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Left: photo placeholder with diagonal stripe texture */}
          <ScrollReveal>
            <div style={{
              position: 'relative',
              aspectRatio: '3 / 4',
              background: '#161616',
              border: '1px solid #1e1e1e',
              overflow: 'hidden',
              backgroundImage: `
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 6px,
                  rgba(255,255,255,0.018) 6px,
                  rgba(255,255,255,0.018) 7px
                )
              `,
            }}>
              {/* EST. badge */}
              <div style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.25rem',
                background: '#2563eb',
                color: '#fff',
                fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '0.375rem 0.875rem',
              }}>
                EST. 2025
              </div>

              {/* Caption */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                fontSize: '0.625rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#2a2a2a',
                whiteSpace: 'nowrap',
                border: '1px solid #1e1e1e',
                padding: '0.375rem 1rem',
              }}>
                [ FOTO · LOUIS @ CONSOLE ]
              </div>
            </div>
          </ScrollReveal>

          {/* Right: content */}
          <ScrollReveal delay={120}>
            <p className="section-label" style={{ marginBottom: '1.5rem' }}>
              / Over LVK Events
            </p>

            <h2
              className="font-condensed"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)',
                fontWeight: 900,
                color: '#f4f4f5',
                lineHeight: 0.92,
                letterSpacing: '-0.01em',
                marginBottom: '1.75rem',
              }}
            >
              Studenten<br />
              Onderneming<br />
              <span style={{ color: '#2563eb' }}>Met</span> Pro<br />
              Aanpak.
            </h2>

            <p className="font-body" style={{ fontSize: '1rem', color: '#71717a', lineHeight: 1.85, marginBottom: '2.5rem' }}>
              LVK Events is opgericht door Louis Van Krunkelsven — een technicus die zich
              specialiseert in licht en rigging maar houdt van afwisseling. Of het nu gaat om
              een intieme productie of een groot evenement, dezelfde zorg en vakmanschap
              worden elke keer meegebracht.
            </p>

            {/* Certs + software two-column info block */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
              border: '1px solid #1e1e1e',
              marginBottom: '2.5rem',
            }}>
              {/* Certificates */}
              <div style={{ padding: '1.5rem', borderRight: '1px solid #1e1e1e' }}>
                <p className="font-body" style={{
                  fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#3f3f46', marginBottom: '1rem',
                }}>
                  Certificaten
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {CERTS.map((c) => (
                    <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                      <span style={{
                        display: 'inline-block', width: '6px', height: '6px',
                        background: '#2563eb', flexShrink: 0, marginTop: '5px',
                      }} />
                      <span className="font-body" style={{ fontSize: '0.8125rem', color: '#71717a', lineHeight: 1.5 }}>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Software */}
              <div style={{ padding: '1.5rem' }}>
                <p className="font-body" style={{
                  fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#3f3f46', marginBottom: '1rem',
                }}>
                  Software · Geen Geheimen
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {SOFTWARE.map((sw) => (
                    <span
                      key={sw}
                      className="font-body"
                      style={{
                        fontSize: '0.75rem',
                        color: '#71717a',
                        background: '#0f0f0f',
                        border: '1px solid #1e1e1e',
                        padding: '0.25rem 0.625rem',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/over-ons" className="btn-primary">Meer Over Ons</Link>
              <Link href="/team" className="btn-ghost">Meet het Team</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────────── */}
      <section style={{
        padding: '8rem 1.5rem',
        background: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <ScrollReveal>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}>
            <p className="section-label" style={{ marginBottom: '1.5rem' }}>Klaar voor je project?</p>
            <h2
              className="font-condensed"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, color: '#f4f4f5', lineHeight: 0.95, marginBottom: '1.5rem' }}
            >
              Laten we<br />samenwerken.
            </h2>
            <p className="font-body" style={{ fontSize: '1rem', color: '#52525b', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Ik sta open voor zowel korte als langdurige opdrachten. Neem vrijblijvend contact op
              en bespreek wat ik voor jouw event kan betekenen.
            </p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '0.875rem', padding: '1rem 2.5rem' }}>
              Vrijblijvend Contact →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
