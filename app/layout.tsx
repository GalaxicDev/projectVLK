import type { Metadata } from 'next'
import { Barlow_Condensed, Space_Grotesk, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTracker from '@/components/PageTracker'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'LVK Events — Licht, Geluid & Rigging',
    template: '%s | LVK Events',
  },
  description:
    'LVK Events is een studenten onderneming gespecialiseerd in licht, geluid, video en rigging voor live evenementen in België en Nederland.',
  keywords: [
    'lighttech',
    'rigger',
    'stagehand',
    'evenementen technieker',
    'licht programmatie',
    'België',
    'Nederland',
  ],
  openGraph: {
    title: 'LVK Events — Licht, Geluid & Rigging',
    description:
      'Professionele event techniek voor elk evenement. Lighttech, rigging, stagehand en meer.',
    type: 'website',
    locale: 'nl_BE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="nl"
      className={`${barlowCondensed.variable} ${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body>
        <PageTracker />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
