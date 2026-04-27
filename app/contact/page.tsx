'use client'

import { PageHero } from '@/components/ui/PageHero'
import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { SBC_CONFIG } from '@/lib/config'
import { Send, MessageCircle, PlayCircle, Globe } from 'lucide-react'

export default function ContactPage() {
  const socials = [
    { name: 'Telegram', link: SBC_CONFIG.social.telegram, icon: <Send size={24} />, color: 'text-[#26A5E4]' },
    { 
      name: 'Twitter', 
      link: SBC_CONFIG.social.twitter, 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"/>
        </svg>
      ), 
      color: 'text-white' 
    },
    { name: 'Facebook', link: SBC_CONFIG.social.facebook, icon: <MessageCircle size={24} />, color: 'text-[#4267B2]' },
    { name: 'YouTube', link: SBC_CONFIG.social.youtube, icon: <PlayCircle size={24} />, color: 'text-[#FF0000]' },
  ]

  return (
    <main>
      <PageHero 
        title="Contact Us" 
        subtitle="Have questions? Reach out to our team or join our community channels."
        label="Support"
      />
      
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Socials */}
            <div>
              <SectionLabel>Get in Touch</SectionLabel>
              <h2 className="text-3xl font-display font-bold text-white mb-8">Connect with Our Community</h2>
              <p className="text-muted text-lg mb-12">
                The fastest way to get support is through our official Telegram group. For business inquiries, please use the contact form or social channels.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {socials.map((social) => (
                  <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                    <Card className="flex items-center space-x-4 p-6 hover:border-primary/40 transition-colors">
                      <div className={social.color}>{social.icon}</div>
                      <div>
                        <h4 className="text-white font-bold">{social.name}</h4>
                        <p className="text-xs text-muted">Join Channel</p>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <Card className="p-10 border-primary/20 bg-bg2/40">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted uppercase tracking-widest">Full Name</label>
                      <input type="text" className="w-full bg-bg3 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted uppercase tracking-widest">Email Address</label>
                      <input type="email" className="w-full bg-bg3 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted uppercase tracking-widest">Subject</label>
                    <input type="text" className="w-full bg-bg3 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50" placeholder="Inquiry about..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted uppercase tracking-widest">Message</label>
                    <textarea className="w-full bg-bg3 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 min-h-[150px]" placeholder="Your message here..." />
                  </div>
                  <Button className="w-full py-4">Send Message</Button>
                </form>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
