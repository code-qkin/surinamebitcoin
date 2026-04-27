'use client'

import { motion } from 'framer-motion'
import { ALLOCATIONS } from '@/lib/tokenomics'
import { DonutChart } from '@/components/ui/DonutChart'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Card } from '@/components/ui/Card'

export const Tokenomics = () => {
  return (
    <section className="py-24 bg-bg2 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -ml-64 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center">Tokenomics</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Sustainable Allocation Model
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
              <DonutChart allocations={ALLOCATIONS} />
            </div>
            
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
              <Card className="text-center py-4 bg-bg/40">
                <p className="text-[10px] text-muted uppercase tracking-widest mb-1">Buy Tax</p>
                <p className="text-xl font-bold text-accent">1%</p>
              </Card>
              <Card className="text-center py-4 bg-bg/40">
                <p className="text-[10px] text-muted uppercase tracking-widest mb-1">Sell Tax</p>
                <p className="text-xl font-bold text-accent">1%</p>
              </Card>
              <Card className="text-center py-4 bg-bg/40 col-span-2 sm:col-span-1">
                <p className="text-[10px] text-muted uppercase tracking-widest mb-1">Max Wallet</p>
                <p className="text-xl font-bold text-white">5%</p>
              </Card>
            </div>
          </motion.div>

          {/* Right: List */}
          <div className="space-y-4">
            {ALLOCATIONS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-5 bg-bg3/50 border border-white/5 rounded-2xl hover:border-primary/20 transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }} 
                  />
                  <span className="text-white font-medium group-hover:text-primary transition-colors">{item.label}</span>
                </div>
                <span className="text-xl font-bold text-white">{item.pct}%</span>
              </motion.div>
            ))}

            <div className="mt-8 p-6 rounded-2xl border border-primary/10 bg-primary/5">
              <p className="text-sm text-muted italic">
                "Our tokenomics are designed to ensure long-term sustainability, project growth, and community rewards through a balanced tax and allocation strategy."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
