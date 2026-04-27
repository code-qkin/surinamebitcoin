'use client'

import { motion } from 'framer-motion'
import { SBC_CONFIG } from '@/lib/config'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Card } from '@/components/ui/Card'
import { Send, PlayCircle, MessageCircle, Globe, ExternalLink } from 'lucide-react'

export const Community = () => {
  const socials = [
    { name: 'Telegram', link: SBC_CONFIG.social.telegram, icon: <Send size={32} />, color: 'hover:text-[#26A5E4]', desc: 'Join the discussion' },
    { 
      name: 'Twitter', 
      link: SBC_CONFIG.social.twitter, 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"/>
        </svg>
      ), 
      color: 'hover:text-white', 
      desc: 'Follow for updates' 
    },
    { name: 'Facebook', link: SBC_CONFIG.social.facebook, icon: <MessageCircle size={32} />, color: 'hover:text-[#4267B2]', desc: 'Connect on FB' },
    { name: 'YouTube', link: SBC_CONFIG.social.youtube, icon: <PlayCircle size={32} />, color: 'hover:text-[#FF0000]', desc: 'Watch our content' },
  ]

  return (
    <section className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center" accent>Global Community</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Join the Movement
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
              className="block group"
            >
              <Card className={`h-full text-center p-10 transition-all duration-500 border-white/5 hover:border-primary/30 hover:-translate-y-2`}>
                <div className={`mb-6 transition-colors duration-300 ${social.color} flex justify-center`}>
                  {social.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{social.name}</h3>
                <p className="text-muted text-sm mb-6">{social.desc}</p>
                <div className="flex items-center justify-center space-x-2 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Join Now</span>
                  <ExternalLink size={12} />
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
