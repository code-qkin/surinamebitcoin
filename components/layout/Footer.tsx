import Link from 'next/link'
import Image from 'next/image'
import { SBC_CONFIG } from '@/lib/config'
import { MessageCircle, Send, PlayCircle, Globe } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-bg2 border-t border-primary/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <div className="relative w-56 h-14">
                <Image 
                  src="https://surinamebitcoin.finance/wp-content/uploads/2024/02/cropped-Logo-transparent.png" 
                  alt="Suriname Bitcoin" 
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              {SBC_CONFIG.tagline}. The pioneering cryptocurrency built for financial inclusion in Suriname.
            </p>
            <div className="flex items-center space-x-4">
              <a href={SBC_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-secondary transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href={SBC_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"/>
                </svg>
              </a>
              <a href={SBC_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-secondary transition-colors">
                <PlayCircle size={20} />
              </a>
              <a href={SBC_CONFIG.social.telegram} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-secondary transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about/overview" className="text-muted hover:text-primary transition-colors">Quick Overview</Link></li>
              <li><Link href="/academy" className="text-muted hover:text-primary transition-colors">SBC Academy</Link></li>
              <li><Link href="/roadmap" className="text-muted hover:text-primary transition-colors">Roadmap</Link></li>
              <li><Link href="/faq" className="text-muted hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Trade */}
          <div>
            <h4 className="text-white font-bold mb-6">Trade</h4>
            <ul className="space-y-4 text-sm">
              <li><a href={SBC_CONFIG.links.buy} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">Poocoin</a></li>
              <li><a href={SBC_CONFIG.links.dextools} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">Dextools</a></li>
              <li><a href={SBC_CONFIG.links.bscscan} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">BSCScan</a></li>
              <li><a href={SBC_CONFIG.links.cmc} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">CoinMarketCap</a></li>
              <li><a href={SBC_CONFIG.links.gecko} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">GeckoTerminal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Network</h4>
            <div className="space-y-4 text-sm">
              <p className="text-muted">
                <span className="block text-white font-medium mb-1">BNB Smart Chain</span>
                Pioneering the future of finance in Suriname.
              </p>
              <div className="pt-4">
                <p className="text-xs text-muted mb-2 uppercase tracking-widest font-bold">Official Website</p>
                <p className="text-primary font-mono">surinamebitcoin.finance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted space-y-4 md:space-y-0">
          <p>© 2026 {SBC_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
