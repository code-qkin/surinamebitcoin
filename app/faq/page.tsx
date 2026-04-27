'use client'

import { useState } from 'react'
import { PageHero } from '@/components/ui/PageHero'
import { Card } from '@/components/ui/Card'
import { ChevronDown } from 'lucide-react'

export default function FAQPage() {
  const faqs = [
    {
      q: "What is Suriname Bitcoin (SBC)?",
      a: "Suriname Bitcoin (SBC) is a pioneering cryptocurrency built on the BNB Smart Chain, designed to foster financial inclusion and modern economic growth in Suriname. It serves as the utility token for the upcoming SUDOBA blockchain ecosystem."
    },
    {
      q: "How can I buy SBC?",
      a: "You can buy SBC on Poocoin or PancakeSwap by swapping BNB for SBC. You will need a digital wallet like MetaMask or Trust Wallet configured for the BNB Smart Chain."
    },
    {
      q: "What is the SUDOBA Blockchain?",
      a: "SUDOBA is a planned blockchain ecosystem tailored for the Surinamese economy, aiming to provide infrastructure for tokenized funding, inclusive digital services, and decentralized finance."
    },
    {
      q: "Is SBC audited?",
      a: "Yes, SBC has been audited by CyberScope, a leading blockchain security firm, achieving a score of 84% and a classification of 'Low Risk'."
    },
    {
      q: "What are the tokenomics of SBC?",
      a: "SBC has a 1% buy tax and a 1% sell tax, with a 5% maximum wallet limit to prevent whale manipulation and ensure fair distribution."
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main>
      <PageHero 
        title="Frequently Asked Questions" 
        subtitle="Common questions about Suriname Bitcoin, the SUDOBA project, and how to get started."
        label="Knowledge Base"
      />
      
      <section className="py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i} className={`p-0 overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-primary/50 bg-primary/5' : 'border-white/5'}`}>
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold text-lg ${openIndex === i ? 'text-primary' : 'text-white'}`}>{faq.q}</span>
                  <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-primary' : 'text-muted'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-muted leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-muted mb-6">Still have questions?</p>
            <a href="/contact" className="text-primary font-bold hover:underline">Contact our support team →</a>
          </div>
        </div>
      </section>
    </main>
  )
}
