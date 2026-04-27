'use client'

import { motion } from 'framer-motion'
import { ROADMAP } from '@/lib/roadmap'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, Clock, PlayCircle } from 'lucide-react'

export const RoadmapPreview = () => {
  return (
    <section className="py-24 bg-bg2 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <SectionLabel>Roadmap</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              The Path to Digital Autonomy
            </h2>
          </div>
          <Button href="/roadmap" variant="ghost">View Full Roadmap</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={`h-full relative overflow-hidden border-t-4 ${
                phase.status === 'done' ? 'border-t-accent' : 
                phase.status === 'active' ? 'border-t-primary' : 
                'border-t-muted'
              }`}>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl font-display font-black text-white/10">0{phase.number}</span>
                  {phase.status === 'done' && <CheckCircle2 className="text-accent" size={20} />}
                  {phase.status === 'active' && <PlayCircle className="text-primary animate-pulse" size={20} />}
                  {phase.status === 'upcoming' && <Clock className="text-muted" size={20} />}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6">{phase.title}</h3>
                
                <ul className="space-y-3">
                  {phase.items.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-muted">
                      <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${
                        phase.status === 'done' ? 'bg-accent' : 
                        phase.status === 'active' ? 'bg-primary' : 
                        'bg-muted'
                      }`} />
                      <span>{item}</span>
                    </li>
                  ))}
                  {phase.items.length > 3 && (
                    <li className="text-[10px] text-primary font-bold italic pt-2">
                      + {phase.items.length - 3} more objectives
                    </li>
                  )}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
