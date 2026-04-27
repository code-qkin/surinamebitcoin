import { PageHero } from '@/components/ui/PageHero'
import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { SBC_CONFIG } from '@/lib/config'
import { FileText, Download, Eye, Shield, Globe, Cpu, BarChart3 } from 'lucide-react'

export default function WhitepaperPage() {
  const chapters = [
    {
      title: "Executive Summary",
      desc: "An overview of Suriname Bitcoin's mission to bridge traditional finance with blockchain innovation.",
      icon: <FileText className="text-primary" />
    },
    {
      title: "Problem Statement",
      desc: "Analysis of the current financial challenges in Suriname, including inflation and banking accessibility.",
      icon: <Shield className="text-primary" />
    },
    {
      title: "SUDOBA Technology",
      desc: "Technical specifications of the underlying blockchain infrastructure and the BNB Smart Chain alliance.",
      icon: <Cpu className="text-primary" />
    },
    {
      title: "Tokenomics",
      desc: "Detailed breakdown of the 1% tax model, supply allocation, and liquidity phase strategy.",
      icon: <BarChart3 className="text-primary" />
    },
    {
      title: "Ecosystem Roadmap",
      desc: "Strategic phases for the rollout of the payment gateway, mobile wallet, and CEX listings.",
      icon: <Globe className="text-primary" />
    }
  ]

  return (
    <main>
      <PageHero 
        title="Whitepaper" 
        subtitle="The comprehensive technical and strategic blueprint of the Suriname Bitcoin ecosystem."
        label="Documentation"
      />
      
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left: Content Summary */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <SectionLabel>Abstract</SectionLabel>
                <h2 className="text-3xl font-display font-bold text-white mb-6">Foundations of Digital Autonomy</h2>
                <p className="text-muted text-lg leading-relaxed">
                  Suriname Bitcoin (SBC) represents a paradigm shift in the Surinamese financial landscape. By leveraging the security and efficiency of the BNB Smart Chain, SBC provides a robust foundation for a decentralized economy. This document outlines the technological framework, economic incentives, and long-term vision for the project.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {chapters.map((chapter, i) => (
                  <Card key={i} className="p-8 border-white/5 hover:border-primary/20 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      {chapter.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{chapter.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{chapter.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right: Sticky Download Card */}
            <div className="sticky top-32">
              <Card className="p-10 border-primary/30 bg-primary/5 shadow-[0_0_50px_rgba(235,6,249,0.1)]">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/20">
                    <Download className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Technical Paper</h3>
                  <p className="text-muted text-sm mb-8">Version 1.2 • PDF format • 4.8 MB</p>
                  
                  <div className="space-y-4">
                    <Button href={SBC_CONFIG.links.whitepaper} className="w-full flex items-center justify-center space-x-3">
                      <Download size={18} />
                      <span>Download PDF</span>
                    </Button>
                    <a 
                      href={SBC_CONFIG.links.whitepaper} 
                      target="_blank" 
                      className="block w-full text-center py-3.5 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Eye size={16} />
                        <span>Read Online</span>
                      </div>
                    </a>
                  </div>

                  <p className="mt-8 text-[10px] text-muted uppercase tracking-widest font-bold">
                    Last Updated: April 2026
                  </p>
                </div>
              </Card>

              <div className="mt-8 p-6 rounded-2xl border border-white/5 bg-bg2 text-center">
                <p className="text-xs text-muted leading-relaxed">
                  Join our <a href={SBC_CONFIG.social.telegram} className="text-primary hover:underline">Telegram</a> to discuss the technical aspects of the whitepaper with the developers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
