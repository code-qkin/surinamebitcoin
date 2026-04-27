import { PageHero } from '@/components/ui/PageHero'
import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { SBC_CONFIG } from '@/lib/config'

export default function OverviewPage() {
  const sections = [
    {
      title: "Introduction to SBC & SUDOBA",
      content: "Suriname Bitcoin (SBC) is more than just a digital currency; it is the cornerstone of the SUDOBA Blockchain ecosystem. Our mission is to modernize the financial infrastructure of Suriname, providing a secure, transparent, and inclusive platform for all citizens.",
      image: "https://surinamebitcoin.finance/wp-content/uploads/2024/02/OBJECT-ILLUSTRATION-19-300x300.png"
    },
    {
      title: "SBC on BNB Smart Chain",
      content: "We chose the BNB Smart Chain (BSC) as our launchpad due to its high throughput, low transaction costs, and robust security. This strategic alliance allows SBC to offer rapid processing speeds that are essential for everyday transactions and global scalability.",
      image: "https://surinamebitcoin.finance/wp-content/uploads/2024/02/OBJECT-ILLUSTRATION-23-300x300.png"
    },
    {
      title: "The SUDOBA Vision",
      content: "SUDOBA addresses the economic challenges faced by Suriname, including high inflation and limited access to banking services. By leveraging blockchain technology, we aim to empower the Surinamese people with a decentralized ecosystem that fosters economic stability.",
      image: "https://surinamebitcoin.finance/wp-content/uploads/2024/02/OBJECT-ILLUSTRATION-22-300x300.png"
    }
  ]

  return (
    <main>
      <PageHero 
        title="Quick Overview" 
        subtitle="Understand the mission, technology, and future of the Suriname Bitcoin project."
        label="Project Insights"
      />
      
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {sections.map((sec, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <SectionLabel>Section 0{i+1}</SectionLabel>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">{sec.title}</h2>
                  <p className="text-muted text-lg leading-relaxed mb-8">
                    {sec.content}
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                    <img src={sec.image} alt={sec.title} className="w-80 h-80 object-contain relative z-10 animate-float" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-40 text-center">
            <Card className="p-16 max-w-4xl mx-auto border-primary/30 bg-primary/5">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Deep Dive into SBC</h2>
              <p className="text-muted text-lg mb-10">
                For a comprehensive technical understanding of our protocol, tokenomics, and long-term roadmap, please review our official whitepaper.
              </p>
              <Button href={SBC_CONFIG.links.whitepaper} className="px-12">Download Whitepaper</Button>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
