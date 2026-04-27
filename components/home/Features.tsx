'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Shield, Users, TrendingUp, CheckCircle } from 'lucide-react'

export const Features = () => {
  const features = [
    {
      title: "Secure & Transparent",
      desc: "Built on a blockchain decentralized ledger, ensuring every transaction is immutable and verifiable.",
      icon: <Shield className="text-secondary" size={28} />,
      image: "https://surinamebitcoin.finance/wp-content/uploads/2024/02/Cyber-Security-150x150.png"
    },
    {
      title: "Designed for Everyone",
      desc: "An intuitive ecosystem user-friendly for all Surinamese citizens, regardless of technical background.",
      icon: <Users className="text-secondary" size={28} />,
      image: "https://surinamebitcoin.finance/wp-content/uploads/2024/02/Digital-Key-150x150.png"
    },
    {
      title: "Supporting Local Economy",
      desc: "Fostering growth by providing a modern digital tool for Surinamese trade and global connection.",
      icon: <TrendingUp className="text-secondary" size={28} />,
      image: "https://surinamebitcoin.finance/wp-content/uploads/2024/02/OBJECT-ILLUSTRATION-18-300x300.png"
    },
    {
      title: "Audited & Safe",
      desc: "CyberScope 84% Low Risk rating. We prioritize security and community confidence above all else.",
      icon: <CheckCircle className="text-accent" size={28} />,
      image: "https://surinamebitcoin.finance/wp-content/uploads/2024/02/OBJECT-ILLUSTRATION-16-300x300.png"
    }
  ]

  return (
    <section className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center">Core Pillars</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Built for the Future of Suriname
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
            >
              <Card glow className="h-full flex flex-col items-center text-center p-8">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                  <img src={f.image} alt={f.title} className="w-20 h-20 object-contain relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {f.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
