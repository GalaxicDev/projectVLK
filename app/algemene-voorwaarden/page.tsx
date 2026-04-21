import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden',
  description: 'Algemene voorwaarden van LVK Events.',
}

const ARTICLES = [
  {
    nr: '1',
    title: 'Algemeen',
    content: `Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en
overeenkomsten tussen LVK EVENTS en opdrachtgevers, tenzij schriftelijk anders overeengekomen.
Door het aangaan van een overeenkomst accepteert de opdrachtgever deze voorwaarden.`,
  },
  {
    nr: '2',
    title: 'Prijzen & Offertes',
    content: `Prijzen zijn steeds te bespreken. Uurprijs, dagprijs, enzovoort — dit wordt per opdracht
bepaald in overleg met de opdrachtgever. De algemene voorwaarden op de factuur zijn steeds van toepassing.`,
  },
  {
    nr: '3',
    title: 'Uitvoering',
    content: `De uitvoering wordt steeds gedaan zoals beschreven staat op de crewcall. LVK Events
verbindt zich ertoe de overeengekomen werkzaamheden professioneel en naar beste vermogen uit te voeren.`,
  },
  {
    nr: '4',
    title: 'Aansprakelijkheid',
    content: `LVK Events beschikt over een beroepsaansprakelijkheidsverzekering.`,
    list: [
      'Fouten van derden',
      'Indirecte schade',
      'Gevolgschade',
      'Overmacht situaties',
    ],
    listIntro: 'LVK Events is niet aansprakelijk voor:',
  },
  {
    nr: '5',
    title: 'Annulering',
    content: `Bij annulering van een opdracht gelden de volgende tarieven:`,
    table: [
      { when: 'Meer dan 30 dagen voor de prestatie', cost: 'Geen kost' },
      { when: 'Binnen 30 dagen voor de prestatie', cost: '25%' },
      { when: 'Binnen 14 dagen voor de prestatie', cost: '50%' },
      { when: 'Binnen 7 dagen voor de prestatie', cost: '75%' },
      { when: 'Binnen 3 dagen voor de prestatie', cost: '100%' },
    ],
  },
  {
    nr: '6',
    title: 'Betaling',
    content: `De betaaltermijn staat steeds gespecificeerd op de factuur — dit is meestal 14 of 30 dagen.
Bij bedragen boven de €5.000 kan een voorschot opgevraagd worden. Laattijdige betalingen kunnen aanleiding
geven tot het aanrekenen van verwijlinteresten conform de Wet Betalingsachterstand.`,
  },
]

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      {/* ─── PAGE HEADER ─────────────────────────────────── */}
      <section style={{
        paddingTop: '9rem',
        paddingBottom: '5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        background: '#0a0a0a',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="section-label animate-fade-in delay-100" style={{ marginBottom: '1.5rem' }}>
            Juridisch
          </p>
          <h1
            className="font-condensed animate-fade-in-up delay-200"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              fontWeight: 900,
              color: '#f4f4f5',
              lineHeight: 0.92,
              letterSpacing: '-0.01em',
            }}
          >
            Algemene<br />
            <span className="text-stroke-white">Voorwaarden</span>
          </h1>
          <div className="accent-line animate-expand delay-400" style={{ maxWidth: '280px', marginTop: '2rem' }} />
        </div>
      </section>

      {/* ─── ARTICLES ────────────────────────────────────── */}
      <section style={{ padding: '4rem 1.5rem 8rem', background: '#111111', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {ARTICLES.map((article, i) => (
            <div
              key={i}
              style={{
                borderBottom: '1px solid #1a1a1a',
                padding: '3rem 0',
                display: 'grid',
                gridTemplateColumns: '3rem 1fr',
                gap: '2rem',
                alignItems: 'start',
              }}
            >
              {/* Number */}
              <span
                className="font-condensed"
                style={{ fontSize: '2.5rem', fontWeight: 900, color: '#1e1e1e', lineHeight: 1 }}
              >
                {article.nr}
              </span>

              {/* Content */}
              <div>
                <h2
                  className="font-grotesk"
                  style={{ fontSize: '1.125rem', fontWeight: 600, color: '#f4f4f5', marginBottom: '1rem' }}
                >
                  {article.title}
                </h2>
                <p className="font-body" style={{ fontSize: '0.9375rem', color: '#71717a', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
                  {article.content}
                </p>

                {/* Optional list */}
                {article.listIntro && (
                  <p className="font-body" style={{ fontSize: '0.9375rem', color: '#71717a', marginTop: '1rem', marginBottom: '0.75rem' }}>
                    {article.listIntro}
                  </p>
                )}
                {article.list && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {article.list.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                        <span style={{ color: '#2563eb', fontSize: '0.4375rem', flexShrink: 0 }}>◆</span>
                        <span className="font-body" style={{ fontSize: '0.9375rem', color: '#71717a' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Optional table */}
                {article.table && (
                  <div style={{ marginTop: '1.25rem', border: '1px solid #1a1a1a', overflow: 'hidden' }}>
                    {article.table.map((row, j) => (
                      <div
                        key={j}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr auto',
                          gap: '1rem',
                          padding: '0.875rem 1.25rem',
                          borderBottom: j < article.table!.length - 1 ? '1px solid #1a1a1a' : 'none',
                          background: j % 2 === 0 ? '#0d0d0d' : '#111111',
                          alignItems: 'center',
                        }}
                      >
                        <span className="font-body" style={{ fontSize: '0.875rem', color: '#71717a' }}>{row.when}</span>
                        <span
                          className="font-grotesk"
                          style={{
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: row.cost === 'Geen kost' ? '#22c55e' : '#f4f4f5',
                            textAlign: 'right',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {row.cost}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          <p className="font-body" style={{ fontSize: '0.8125rem', color: '#3f3f46', lineHeight: 1.7, paddingTop: '2rem' }}>
            Laatste update: 2025. Bij vragen over deze voorwaarden kunt u contact opnemen via{' '}
            <a href="mailto:Louis.vankrunkelsven@gmail.com" style={{ color: '#52525b', textDecoration: 'underline' }}>
              Louis.vankrunkelsven@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
