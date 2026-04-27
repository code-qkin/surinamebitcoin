'use client'

import { motion } from 'framer-motion'
import { SBC_CONFIG } from '@/lib/config'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Card } from '@/components/ui/Card'
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react'

export const Hero = () => {
  const wpData = typeof window !== 'undefined' ? (window as any).SBC_WP_DATA : null;

  const title = wpData?.acf?.hero_title || "Where Tradition Meets Innovation";
  const subtitle = wpData?.acf?.hero_subtitle || "The pioneering cryptocurrency of Suriname. Secure, transparent, and built for financial inclusion on the BNB Smart Chain.";
  const buyTax = wpData?.acf?.buy_tax || "1%";
  const sellTax = wpData?.acf?.sell_tax || "1%";
  const contract = wpData?.acf?.contract_address || SBC_CONFIG.contract;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -mr-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/15 blur-[120px] rounded-full -ml-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionLabel accent>{wpData?.acf?.hero_label || "Suriname's First Digital Asset"}</SectionLabel>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              {title.includes('Tradition') ? (
                <>Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tradition</span> Meets Innovation</>
              ) : title}
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button href={SBC_CONFIG.links.buy} className="w-full sm:w-auto px-10">
                Buy SBC Now
              </Button>
              <Button href="/whitepaper" variant="ghost" className="w-full sm:w-auto px-10">
                Read Whitepaper
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-2xl font-bold text-white">{wpData?.acf?.launch_tax || "0%"}</p>
                <p className="text-xs text-muted uppercase tracking-wider">Launch Tax</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{buyTax}</p>
                <p className="text-xs text-muted uppercase tracking-wider">Buy Tax</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{sellTax}</p>
                <p className="text-xs text-muted uppercase tracking-wider">Sell Tax</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content / Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Floating Coin Illustration Placeholder */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <img 
              src="https://surinamebitcoin.finance/wp-content/uploads/2024/02/OBJECT-ILLUSTRATION-01-300x300.png" 
              alt="SBC Coin" 
              className="absolute -top-20 -right-10 w-40 h-40 object-contain z-20 animate-bounce [animation-duration:6s]"
            />

            <Card className="relative z-10 p-8 border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-muted text-sm">Network</span>
                  <span className="text-white font-bold">{SBC_CONFIG.network}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-muted text-sm">Token Symbol</span>
                  <span className="text-primary font-bold">{SBC_CONFIG.ticker}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-muted text-sm">Max Wallet</span>
                  <span className="text-white font-bold">{wpData?.acf?.max_wallet || "5%"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted text-sm">SBC Contract</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-primary truncate max-w-[150px]">
                      {contract}
                    </span>
                    <button className="text-muted hover:text-white transition-colors">
                      <Zap size={14} />
                    </button>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <a href={SBC_CONFIG.links.dextools} target="_blank" className="bg-bg3 border border-white/5 rounded-xl p-3 text-center hover:border-secondary/50 transition-colors group">
                    <span className="text-[10px] text-muted uppercase block mb-1">Dextools</span>
                    <span className="text-xs text-secondary font-bold group-hover:underline">Chart →</span>
                  </a>
                  <a href={SBC_CONFIG.links.gecko} target="_blank" className="bg-bg3 border border-white/5 rounded-xl p-3 text-center hover:border-secondary/50 transition-colors group">
                    <span className="text-[10px] text-muted uppercase block mb-1">GeckoTerminal</span>
                    <span className="text-xs text-secondary font-bold group-hover:underline">Pool →</span>
                  </a>
                </div>

                <Button href={SBC_CONFIG.links.buy} className="w-full">
                  Trade on Poocoin
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
