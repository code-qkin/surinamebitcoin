'use client'

import { PageHero } from '@/components/ui/PageHero'
import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'

export default function CookiesPage() {
  const sections = [
    {
      title: "1. Introduction",
      content: "Suriname Bitcoin uses cookies to enhance your experience on our website. By continuing to use our site, you consent to the use of cookies."
    },
    {
      title: "2. What Are Cookies?",
      content: "Cookies are small text files placed on your device to collect standard internet log information and visitor behavior information in an anonymous form."
    },
    {
      title: "3. How We Use Cookies",
      content: "We use cookies to understand how you use our site and to improve your experience. This includes keeping you signed in, remembering your site preferences, and providing content tailored to your interests."
    },
    {
      title: "4. Types of Cookies We Use",
      content: "• Essential Cookies: Necessary for the operation of our site.\n• Performance Cookies: Help us understand how visitors interact with our website.\n• Functionality Cookies: Enable us to provide enhanced functionality and personalization."
    },
    {
      title: "5. Your Choices",
      content: "You can set your browser not to accept cookies, and our website will inform you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result."
    }
  ]

  return (
    <main>
      <PageHero 
        title="Cookies Policy" 
        subtitle="Understanding how we use tracking technologies to improve your experience."
        label="Policy"
      />
      
      <section className="py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 space-y-12 border-white/5 bg-bg2/40">
            {sections.map((sec, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold text-white mb-4">{sec.title}</h3>
                <p className="text-muted leading-relaxed whitespace-pre-line">
                  {sec.content}
                </p>
              </div>
            ))}
            
            <div className="pt-12 border-t border-white/5">
              <SectionLabel>More Info</SectionLabel>
              <p className="text-muted">
                For more detailed information on how we use cookies, please contact us at <span className="text-primary">sales@surinamebitcoin.finance</span>.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
