'use client'

import { PageHero } from '@/components/ui/PageHero'
import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'

export default function PrivacyPage() {
  const wpData = typeof window !== 'undefined' ? (window as any).SBC_WP_DATA : null;

  const sections = [
    {
      title: "1. Introduction",
      content: "Welcome to Suriname Bitcoin. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy policy or our practices with regard to your personal information, please contact us at sales@surinamebitcoin.finance."
    },
    {
      title: "2. Information We Collect",
      content: "We collect personal information that you provide to us when registering on our site, such as your name, email address, and transaction data."
    },
    {
      title: "3. How We Use Your Information",
      content: "We use the information we collect primarily to provide, maintain, and improve our services. This includes using the information for account management, providing customer support, and enhancing our website’s functionality."
    },
    {
      title: "4. Sharing Your Information",
      content: "We do not share or sell your personal information to third parties for marketing purposes. We only share information as necessary to comply with laws or to protect our rights or the rights of others."
    },
    {
      title: "5. Security",
      content: "We prioritize the security of your data and employ various security measures to protect your personal information."
    },
    {
      title: "6. Cookies and Other Tracking Technologies",
      content: "We may use cookies and similar tracking technologies to access or store information to enhance your experience on our website."
    },
    {
      title: "7. Your Privacy Rights",
      content: "Depending on where you reside, you may have rights regarding your personal data, including the right to access, correct, or delete the information we hold about you."
    },
    {
      title: "8. Changes to This Policy",
      content: "We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date."
    }
  ]

  return (
    <main>
      <PageHero 
        title="Privacy Policy" 
        subtitle="How we handle and protect your personal information within the SBC ecosystem."
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
              <SectionLabel>Contact</SectionLabel>
              <p className="text-muted">
                For more information about our privacy practices, please contact us at <span className="text-primary">sales@surinamebitcoin.finance</span>.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
