import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import { AnnounceBar } from '@/components/layout/AnnounceBar'
import { Navbar }      from '@/components/layout/Navbar'
import { ContractBar } from '@/components/layout/ContractBar'
import { Newsletter }  from '@/components/layout/Newsletter'
import { Footer }      from '@/components/layout/Footer'
import { SBC_CONFIG }  from '@/lib/config'

const syne   = Syne({ subsets:['latin'], variable:'--font-display', weight:['400','600','700','800'] })
const dmSans = DM_Sans({ subsets:['latin'], variable:'--font-body',    weight:['300','400','500'] })

export const metadata: Metadata = {
  title:       `${SBC_CONFIG.name} — ${SBC_CONFIG.tagline}`,
  description: 'The pioneering cryptocurrency of Suriname. Secure, transparent, and built for financial inclusion on BNB Smart Chain.',
  keywords:    ['Suriname Bitcoin','SBC','cryptocurrency','BNB Chain','blockchain','Suriname'],
  openGraph: {
    title:       SBC_CONFIG.name,
    description: SBC_CONFIG.tagline,
    url:         'https://surinamebitcoin.finance',
    siteName:    SBC_CONFIG.name,
    type:        'website',
  },
  twitter: {
    card:    'summary_large_image',
    creator: '@SBC_Coin',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <AnnounceBar />
        <Navbar />
        <ContractBar />
        <main>{children}</main>
        <Newsletter />
        <Footer />
      </body>
    </html>
  )
}
