'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
  { href: '/algemene-voorwaarden', label: 'Voorwaarden' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  if (pathname?.startsWith('/admin')) return null

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'background 0.35s ease, border-color 0.35s ease',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>

            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <span className="font-condensed" style={{ fontSize: '1.375rem', fontWeight: 800, letterSpacing: '0.08em', color: '#f4f4f5' }}>
                LVK
              </span>
              <span className="font-condensed" style={{ fontSize: '1.375rem', fontWeight: 800, letterSpacing: '0.08em', color: '#2563eb', marginLeft: '6px' }}>
                EVENTS
              </span>
            </Link>

            {/* Desktop links — CRITICAL: no display in inline style, only in className */}
            <div
              className="hidden lg:flex"
              style={{ alignItems: 'center', gap: '2rem' }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: pathname === link.href ? '#f4f4f5' : '#71717a',
                    transition: 'color 0.2s',
                    position: 'relative',
                  }}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: '#2563eb',
                    }} />
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary"
                style={{ padding: '0.625rem 1.5rem' }}
              >
                Offerte
              </Link>
            </div>

            {/* Hamburger — phone only via className, no display in inline style */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Sluit menu' : 'Open menu'}
              className="lg:hidden"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                flexDirection: 'column',
                gap: '5px',
                display: 'flex',
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '22px',
                    height: '2px',
                    background: '#f4f4f5',
                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                    transform: open
                      ? i === 0
                        ? 'translateY(7px) rotate(45deg)'
                        : i === 2
                          ? 'translateY(-7px) rotate(-45deg)'
                          : 'none'
                      : 'none',
                    opacity: open && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer — hidden on large screens */}
      <div
        className="lg:hidden"
        style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          zIndex: 49,
          background: 'rgba(10,10,10,0.98)',
          borderBottom: '1px solid #1a1a1a',
          backdropFilter: 'blur(16px)',
          maxHeight: open ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <div style={{ padding: '1.5rem 1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-condensed"
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: pathname === link.href ? '#2563eb' : '#f4f4f5',
                padding: '0.625rem 0',
                borderBottom: '1px solid #141414',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary"
            style={{ alignSelf: 'flex-start', marginTop: '1.25rem' }}
          >
            Offerte aanvragen →
          </Link>
        </div>
      </div>
    </>
  )
}
