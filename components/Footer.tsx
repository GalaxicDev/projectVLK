'use client'

import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
  { href: '/algemene-voorwaarden', label: 'Algemene Voorwaarden' },
]

export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid #1a1a1a',
      padding: '4rem 1.5rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '1rem' }}>
              <span className="font-condensed" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.08em', color: '#f4f4f5' }}>LVK</span>
              <span className="font-condensed" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.08em', color: '#2563eb', marginLeft: '4px' }}>EVENTS</span>
            </Link>
            <p className="font-body" style={{ fontSize: '0.875rem', color: '#52525b', lineHeight: 1.7, maxWidth: '240px' }}>
              Studenten onderneming gespecialiseerd in licht, geluid, video en rigging.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Navigatie</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body"
                  style={{
                    fontSize: '0.875rem',
                    color: '#52525b',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#f4f4f5' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#52525b' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <a
                href="mailto:Louis.vankrunkelsven@gmail.com"
                className="font-body"
                style={{ fontSize: '0.875rem', color: '#52525b', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#f4f4f5' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#52525b' }}
              >
                Louis.vankrunkelsven@gmail.com
              </a>
              <a
                href="tel:0494254139"
                className="font-body"
                style={{ fontSize: '0.875rem', color: '#52525b', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#f4f4f5' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#52525b' }}
              >
                0494 25 41 39
              </a>
              <p className="font-body" style={{ fontSize: '0.875rem', color: '#3f3f46' }}>
                België · Nederland
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid #1a1a1a',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <p className="font-body" style={{ fontSize: '0.75rem', color: '#3f3f46' }}>
            © {new Date().getFullYear()} LVK Events — Louis Van Krunkelsven. Alle rechten voorbehouden.
          </p>
          <Link
            href="/algemene-voorwaarden"
            className="font-body"
            style={{ fontSize: '0.75rem', color: '#3f3f46', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#71717a' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#3f3f46' }}
          >
            Algemene Voorwaarden
          </Link>
        </div>
      </div>
    </footer>
  )
}
