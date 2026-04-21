'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import type { ContactSubmission } from '@/lib/supabase'

type DayView = { date: string; count: number }
type PageStat = { page: string; count: number }

type Stats = {
  pageViews: {
    total: number
    last30days: number
    last7days: number
    byDay: DayView[]
    byPage: PageStat[]
  }
  contacts: {
    total: number
    unread: number
    submissions: ContactSubmission[]
  }
}

type Tab = 'overview' | 'submissions'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('nl-BE', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

function BarChart({ data }: { data: DayView[] }) {
  const max = Math.max(...data.map((d) => d.count), 1)
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '100px', padding: '0 0 0.5rem' }}>
      {data.map((d, i) => (
        <div
          key={i}
          title={`${d.date}: ${d.count} bezoeken`}
          style={{
            flex: 1,
            height: `${Math.max((d.count / max) * 100, d.count > 0 ? 4 : 1)}%`,
            background: d.count > 0 ? '#2563eb' : '#1a1a1a',
            opacity: d.count > 0 ? 0.7 + (d.count / max) * 0.3 : 1,
            transition: 'height 0.4s ease',
            cursor: 'default',
            borderRadius: '1px 1px 0 0',
          }}
        />
      ))}
    </div>
  )
}

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div style={{ background: '#111111', border: '1px solid #1a1a1a', padding: '1.5rem' }}>
      <p className="font-body" style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#52525b', fontWeight: 600, marginBottom: '0.5rem' }}>
        {label}
      </p>
      <p className="font-condensed" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f4f4f5', lineHeight: 1 }}>
        {value}
      </p>
      {sub && (
        <p className="font-body" style={{ fontSize: '0.8125rem', color: '#3f3f46', marginTop: '0.375rem' }}>{sub}</p>
      )}
    </div>
  )
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<Tab>('overview')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const router = useRouter()

  const fetchStats = useCallback(async () => {
    const res = await fetch('/api/admin/stats')
    if (res.status === 401) { router.refresh(); return }
    const data = await res.json()
    setStats(data)
    setLoading(false)
  }, [router])

  useEffect(() => { fetchStats() }, [fetchStats])

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.refresh()
  }

  async function markRead(id: string, read: boolean) {
    await fetch('/api/admin/mark-read', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, read }),
    })
    await fetchStats()
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)' }}>
      {/* Top bar */}
      <div style={{
        background: '#0a0a0a',
        borderBottom: '1px solid #1a1a1a',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span className="font-condensed" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.08em', color: '#f4f4f5' }}>
            LVK <span style={{ color: '#2563eb' }}>ADMIN</span>
          </span>
          <span style={{ width: '1px', height: '20px', background: '#1a1a1a' }} />
          <nav style={{ display: 'flex', gap: '0.25rem' }}>
            {(['overview', 'submissions'] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 0.875rem',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  fontFamily: 'inherit',
                  color: tab === t ? '#f4f4f5' : '#52525b',
                  borderBottom: tab === t ? '2px solid #2563eb' : '2px solid transparent',
                  transition: 'color 0.2s',
                  textTransform: 'capitalize',
                }}
              >
                {t === 'overview' ? 'Overzicht' : 'Berichten'}
                {t === 'submissions' && stats && stats.contacts.unread > 0 && (
                  <span style={{
                    marginLeft: '6px',
                    background: '#2563eb',
                    color: 'white',
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    padding: '1px 5px',
                    borderRadius: '999px',
                  }}>
                    {stats.contacts.unread}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <a href="/" style={{ fontSize: '0.8125rem', color: '#52525b', textDecoration: 'none' }}>← Site</a>
          <button onClick={handleLogout} className="btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}>
            Uitloggen
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '6rem 0', color: '#52525b' }}>
            <p className="font-body">Laden...</p>
          </div>
        ) : stats ? (
          <>
            {/* ─── OVERVIEW TAB ──────────────────────────────── */}
            {tab === 'overview' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Stat cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', background: '#1a1a1a' }}>
                  <StatCard label="Totale Bezoeken" value={stats.pageViews.total} sub="Alle tijd" />
                  <StatCard label="Bezoeken (30d)" value={stats.pageViews.last30days} sub="Laatste 30 dagen" />
                  <StatCard label="Bezoeken (7d)" value={stats.pageViews.last7days} sub="Laatste 7 dagen" />
                  <StatCard label="Berichten" value={stats.contacts.total} sub={`${stats.contacts.unread} ongelezen`} />
                </div>

                {/* Charts row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: '#1a1a1a' }}>
                  {/* Page views chart */}
                  <div style={{ background: '#111111', border: '0', padding: '1.75rem' }}>
                    <p className="font-body" style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#52525b', fontWeight: 600, marginBottom: '1.25rem' }}>
                      Bezoeken per dag — 30 dagen
                    </p>
                    <BarChart data={stats.pageViews.byDay} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                      <span className="font-body" style={{ fontSize: '0.6875rem', color: '#3f3f46' }}>
                        {stats.pageViews.byDay[0]?.date}
                      </span>
                      <span className="font-body" style={{ fontSize: '0.6875rem', color: '#3f3f46' }}>
                        Vandaag
                      </span>
                    </div>
                  </div>

                  {/* Top pages */}
                  <div style={{ background: '#111111', padding: '1.75rem' }}>
                    <p className="font-body" style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#52525b', fontWeight: 600, marginBottom: '1.25rem' }}>
                      Meest bezochte pagina&apos;s
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                      {stats.pageViews.byPage.length === 0 ? (
                        <p className="font-body" style={{ fontSize: '0.875rem', color: '#3f3f46' }}>Geen data beschikbaar.</p>
                      ) : stats.pageViews.byPage.map((p, i) => {
                        const maxCount = stats.pageViews.byPage[0].count
                        return (
                          <div key={i}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                              <span className="font-body" style={{ fontSize: '0.8125rem', color: '#a1a1aa' }}>{p.page || '/'}</span>
                              <span className="font-body" style={{ fontSize: '0.8125rem', color: '#52525b', fontWeight: 600 }}>{p.count}</span>
                            </div>
                            <div style={{ height: '3px', background: '#1a1a1a', borderRadius: '2px', overflow: 'hidden' }}>
                              <div style={{
                                height: '100%',
                                width: `${(p.count / maxCount) * 100}%`,
                                background: '#2563eb',
                                borderRadius: '2px',
                                opacity: 0.6,
                              }} />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── SUBMISSIONS TAB ───────────────────────────── */}
            {tab === 'submissions' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <p className="font-body" style={{ fontSize: '0.875rem', color: '#52525b' }}>
                    {stats.contacts.total} berichten totaal · {stats.contacts.unread} ongelezen
                  </p>
                  <button
                    onClick={fetchStats}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#52525b', fontSize: '0.8125rem', fontFamily: 'inherit' }}
                  >
                    ↻ Vernieuwen
                  </button>
                </div>

                {stats.contacts.submissions.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '5rem 0', color: '#3f3f46' }}>
                    <p className="font-body">Nog geen berichten ontvangen.</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1a1a1a' }}>
                    {stats.contacts.submissions.map((sub) => (
                      <div key={sub.id} style={{ background: sub.read ? '#0d0d0d' : '#111111' }}>
                        {/* Collapsed row */}
                        <button
                          onClick={() => setExpandedId(expandedId === sub.id ? null : sub.id)}
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '8px 1fr 1fr auto auto',
                            gap: '1rem',
                            alignItems: 'center',
                            width: '100%',
                            padding: '1rem 1.25rem',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            textAlign: 'left',
                            fontFamily: 'inherit',
                          }}
                        >
                          {/* Unread dot */}
                          <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: sub.read ? 'transparent' : '#2563eb',
                          }} />

                          <div>
                            <p className="font-grotesk" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f4f4f5', marginBottom: '2px' }}>
                              {sub.naam}
                            </p>
                            <p className="font-body" style={{ fontSize: '0.8125rem', color: '#52525b' }}>{sub.email}</p>
                          </div>

                          <p className="font-body" style={{ fontSize: '0.8125rem', color: '#71717a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {sub.bericht.slice(0, 80)}{sub.bericht.length > 80 ? '...' : ''}
                          </p>

                          <p className="font-body" style={{ fontSize: '0.75rem', color: '#3f3f46', whiteSpace: 'nowrap' }}>
                            {formatDate(sub.submitted_at)}
                          </p>

                          <span style={{ color: '#3f3f46', fontSize: '0.875rem' }}>
                            {expandedId === sub.id ? '▲' : '▼'}
                          </span>
                        </button>

                        {/* Expanded detail */}
                        {expandedId === sub.id && (
                          <div style={{ borderTop: '1px solid #1a1a1a', padding: '1.25rem 1.25rem 1.25rem calc(1.25rem + 8px + 1rem)' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                              {[
                                { label: 'Naam', value: sub.naam },
                                { label: 'Email', value: sub.email },
                                { label: 'Telefoon', value: sub.telefoon ?? '—' },
                                { label: 'Ontvangen', value: formatDate(sub.submitted_at) },
                              ].map((f) => (
                                <div key={f.label}>
                                  <p className="font-body" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3f3f46', fontWeight: 600, marginBottom: '0.25rem' }}>
                                    {f.label}
                                  </p>
                                  <p className="font-body" style={{ fontSize: '0.9rem', color: '#a1a1aa' }}>{f.value}</p>
                                </div>
                              ))}
                            </div>
                            <div style={{ marginBottom: '1.25rem' }}>
                              <p className="font-body" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3f3f46', fontWeight: 600, marginBottom: '0.5rem' }}>
                                Bericht
                              </p>
                              <p className="font-body" style={{ fontSize: '0.9375rem', color: '#a1a1aa', lineHeight: 1.75, whiteSpace: 'pre-wrap' }}>
                                {sub.bericht}
                              </p>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                              <a href={`mailto:${sub.email}`} className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}>
                                Beantwoorden →
                              </a>
                              <button
                                onClick={() => markRead(sub.id, !sub.read)}
                                className="btn-ghost"
                                style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem', fontFamily: 'inherit' }}
                              >
                                {sub.read ? 'Markeer als ongelezen' : 'Markeer als gelezen'}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <p className="font-body" style={{ color: '#ef4444', textAlign: 'center', padding: '4rem 0' }}>
            Kon statistieken niet laden.
          </p>
        )}
      </div>
    </div>
  )
}
