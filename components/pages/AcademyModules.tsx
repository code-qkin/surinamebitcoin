'use client'

import { motion } from 'framer-motion'
import { MODULES } from '@/lib/academy'
import { Card } from '@/components/ui/Card'
import { CheckCircle2 } from 'lucide-react'

export const AcademyModules = () => {
  const photos = [
    "https://surinamebitcoin.finance/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-01-at-12.53.21-768x1152.jpeg",
    "https://surinamebitcoin.finance/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-01-at-12.52.56-1024x683.jpeg",
    "https://surinamebitcoin.finance/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-01-at-12.47.09-683x1024.jpeg",
    "https://surinamebitcoin.finance/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-01-at-12.47.58-200x300.jpeg"
  ]

  return (
    <div className="space-y-24">
      {/* Photo 2 (Landscape, Full-Width Header) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="w-full h-80 rounded-3xl overflow-hidden relative"
      >
        <img src={photos[1]} alt="Academy Classroom" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        <div className="absolute bottom-10 left-10">
          <h3 className="text-3xl font-bold text-white">What to Expect</h3>
          <p className="text-muted">A hands-on approach to digital literacy.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {MODULES.map((module, i) => (
          <motion.div
            key={module.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: (i % 2) * 0.1 }}
          >
            <Card className="h-full border-primary/10 hover:border-primary/30 p-10">
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-5xl font-display font-black text-primary/10">0{module.number}</span>
                <h3 className="text-2xl font-bold text-white leading-tight">{module.title}</h3>
              </div>
              <ul className="space-y-4">
                {module.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 group">
                    <CheckCircle2 size={18} className="text-secondary mt-1 group-hover:text-primary transition-colors" />
                    <span className="text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Strategic photo placement */}
              {module.number === 4 && (
                <div className="mt-8 rounded-2xl overflow-hidden h-64 border border-white/5">
                  <img src={photos[2]} alt="Project Evaluation" className="w-full h-full object-cover" />
                </div>
              )}
              {module.number === 5 && (
                <div className="mt-8 rounded-2xl overflow-hidden h-64 border border-white/5">
                  <img src={photos[3]} alt="Practical Use Cases" className="w-full h-full object-cover" />
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Why Education Matters section with photo 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h3 className="text-3xl font-bold text-white mb-6">Why Education Matters</h3>
          <div className="space-y-4 text-muted">
            <p>Cryptocurrency is a powerful tool, but like any financial instrument, it requires knowledge to use effectively and safely. In Suriname, where the financial landscape is evolving rapidly, digital literacy is the foundation of economic empowerment.</p>
            <p>Our Academy provides the essential building blocks for understanding this new economy, from securing your first wallet to evaluating the risks and potential of emerging projects.</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 rounded-3xl overflow-hidden h-[500px] border border-primary/20">
          <img src={photos[0]} alt="SBC Education" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}
