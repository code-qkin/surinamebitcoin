'use client'

import { PageHero } from '@/components/ui/PageHero'
import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'

export default function TermsPage() {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content: "By accessing or using the Suriname Bitcoin (SBC) website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services."
    },
    {
      title: "2. Intellectual Property Rights",
      content: "Unless otherwise stated, we own the intellectual property rights for all material on Suriname Bitcoin. All intellectual property rights are reserved."
    },
    {
      title: "3. User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your account information, including your wallet private keys. Suriname Bitcoin is not liable for any loss resulting from unauthorized access to your account."
    },
    {
      title: "4. Risk Disclosure",
      content: "Investing in cryptocurrencies involves significant risk. Prices are highly volatile, and you may lose your entire investment. Suriname Bitcoin does not provide financial advice."
    },
    {
      title: "5. Limitation of Liability",
      content: "In no event shall Suriname Bitcoin be held liable for any damages arising out of the use or inability to use the materials on our website."
    }
  ]

  return (
    <main>
      <PageHero 
        title="Terms & Conditions" 
        subtitle="The legal framework governing your use of the SBC platform."
        label="Legal"
      />
      
      <section className="py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 space-y-12 border-white/5 bg-bg2/40">
            {sections.map((sec, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold text-white mb-4">{sec.title}</h3>
                <p className="text-muted leading-relaxed">
                  {sec.content}
                </p>
              </div>
            ))}
            
            <div className="pt-12 border-t border-white/5">
              <SectionLabel>Inquiries</SectionLabel>
              <p className="text-muted">
                If you have any questions regarding our terms, please contact us at <span className="text-primary">sales@surinamebitcoin.finance</span>.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
