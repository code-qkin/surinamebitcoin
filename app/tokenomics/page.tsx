'use client'

import { motion } from 'framer-motion'
import { PageHero } from '@/components/ui/PageHero'
import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DonutChart } from '@/components/ui/DonutChart'
import { ALLOCATIONS } from '@/lib/tokenomics'
import { SBC_CONFIG } from '@/lib/config'
import { ShieldCheck, BarChart3, Coins, PieChart, Info } from 'lucide-react'

export default function TokenomicsPage() {
  const taxFeatures = [
    {
      title: "1% Buy Tax",
      desc: "Applied to all purchases to support marketing and liquidity stability.",
      icon: <Coins className="text-accent" />
    },
    {
      title: "1% Sell Tax",
      desc: "Applied to all sales to discourage day-trading and reward long-term holders.",
      icon: <BarChart3 className="text-accent" />
    },
    {
      title: "5% Max Wallet",
      desc: "Protects the community from whale manipulation and ensures decentralization.",
      icon: <ShieldCheck className="text-accent" />
    }
  ]

  return (
    <main>
      <PageHero 
        title="Tokenomics" 
        subtitle="A sustainable, transparent, and growth-oriented economic model for the Suriname Bitcoin ecosystem."
        label="Economics"
      />
      
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Allocation Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              className="flex justify-center relative"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full" />
              <DonutChart allocations={ALLOCATIONS} />
            </motion.div>

            <div className="space-y-8">
              <SectionLabel>Supply Allocation</SectionLabel>
              <h2 className="text-4xl font-display font-bold text-white leading-tight">
                Transparent Distribution for <span className="text-primary">Long-Term</span> Stability
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                The distribution of SBC is strategically designed to ensure sufficient liquidity for the market while reserving resources for ongoing development, marketing, and the community.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ALLOCATIONS.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-bg2/50 border border-white/5"
                  >
                    <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }} />
                    <div>
                      <p className="text-white font-bold text-sm">{item.pct}%</p>
                      <p className="text-muted text-xs uppercase tracking-wider">{item.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Tax Structure */}
          <div className="mb-40">
            <div className="text-center mb-16">
              <SectionLabel className="justify-center">Transaction Mechanics</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Tax Structure & Protection</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {taxFeatures.map((tax, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border-primary/10 hover:border-primary/30 p-10 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
                      {tax.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{tax.title}</h3>
                    <p className="text-muted leading-relaxed">{tax.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <Card className="p-12 border-primary/20 bg-primary/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-primary opacity-20">
                <Info size={120} />
              </div>
              <div className="relative z-10 max-w-4xl">
                <h3 className="text-3xl font-bold text-white mb-6">Strategic Reserve & Vesting</h3>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  To maintain market integrity and build investor confidence, all team and development allocations are subject to a structured vesting schedule. This prevents market flooding and aligns the team's incentives with the long-term success of the Suriname Bitcoin project.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-3">
                    <PieChart className="text-primary" size={20} />
                    <span className="text-white font-medium italic">Liquidity Locked: 365+ Days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="text-primary" size={20} />
                    <span className="text-white font-medium italic">Verified Contract on BSCScan</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </section>
    </main>
  )
}
