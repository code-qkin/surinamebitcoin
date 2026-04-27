'use client'

import { motion } from 'framer-motion'
import { ROADMAP } from '@/lib/roadmap'
import { Card } from '@/components/ui/Card'
import { CheckCircle2, Clock, PlayCircle } from 'lucide-react'

export const RoadmapTimeline = () => {
  const wpData = typeof window !== 'undefined' ? (window as any).SBC_WP_DATA : null;
  
  // Use client data if available, otherwise fallback to local constant
  const displayRoadmap = wpData?.acf?.roadmap_items || ROADMAP;

  return (
    <div className="relative max-w-4xl mx-auto py-20">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 md:-translate-x-1/2" />

      <div className="space-y-24">
        {displayRoadmap.map((phase: any, i: number) => {
          const isLeft = i % 2 === 0
          
          return (
            <motion.div
              key={phase.number || i}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Node */}
              <div className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-bg border-2 flex items-center justify-center z-10 md:-translate-x-1/2 ${
                phase.status === 'done' ? 'border-accent shadow-[0_0_15px_#00ff88]' : 
                phase.status === 'active' ? 'border-primary shadow-[0_0_15px_#eb06f9] animate-pulse' : 
                'border-muted'
              }`}>
                {phase.status === 'done' && <CheckCircle2 size={14} className="text-accent" />}
                {phase.status === 'active' && <div className="w-2 h-2 rounded-full bg-primary" />}
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-[45%] ml-12 md:ml-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                <Card className={`relative border-t-4 ${
                  phase.status === 'done' ? 'border-t-accent' : 
                  phase.status === 'active' ? 'border-t-primary' : 
                  'border-t-muted'
                }`}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Phase 0{phase.number || i + 1}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      phase.status === 'done' ? 'bg-accent/10 text-accent' : 
                      phase.status === 'active' ? 'bg-primary/10 text-primary animate-pulse' : 
                      'bg-muted/10 text-muted'
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">{phase.title}</h3>
                  <ul className="space-y-3">
                    {(phase.items || []).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm text-muted">
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                          phase.status === 'done' ? 'bg-accent' : 
                          phase.status === 'active' ? 'bg-primary' : 
                          'bg-muted'
                        }`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Spacer for other side */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
