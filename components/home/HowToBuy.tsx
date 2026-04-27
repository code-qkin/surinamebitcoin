'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Card } from '@/components/ui/Card'
import { Wallet, CreditCard, ShoppingCart, RefreshCcw } from 'lucide-react'

export const HowToBuy = () => {
  const steps = [
    {
      title: "Create a Wallet",
      desc: "Download MetaMask or Trust Wallet from the App Store or Chrome Extension.",
      icon: <Wallet className="text-primary" size={32} />
    },
    {
      title: "Get some BNB",
      desc: "Purchase BNB directly in your wallet or transfer it from an exchange.",
      icon: <CreditCard className="text-primary" size={32} />
    },
    {
      title: "Go to Poocoin",
      desc: "Connect your wallet and search for the SBC contract address.",
      icon: <ShoppingCart className="text-primary" size={32} />
    },
    {
      title: "Swap for SBC",
      desc: "Enter the amount of BNB you want to swap and hit 'Trade'.",
      icon: <RefreshCcw className="text-primary" size={32} />
    }
  ]

  return (
    <section className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center" accent>Simple Steps</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            How to Buy SBC
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full bg-bg/80 hover:bg-bg2 transition-colors border-primary/20">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(235,6,249,0.1)]">
                    {step.icon}
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-4xl font-display font-black text-primary/20">{i + 1}</span>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
