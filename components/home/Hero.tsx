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

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="flex flex-col items-center space-y-16 xl:space-y-24">
          
          {/* Top Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            <SectionLabel accent className="justify-center">{wpData?.acf?.hero_label || "Suriname's First Digital Asset"}</SectionLabel>
            <h1 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-display font-extrabold text-white mb-8 leading-[1.05] tracking-tighter max-w-4xl">
              {title.includes('Tradition') ? (
                <>Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tradition</span> Meets Innovation</>
              ) : title}
            </h1>
            <p className="text-muted text-lg md:text-xl xl:text-2xl mb-12 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button href={SBC_CONFIG.links.buy} className="w-full sm:w-auto px-12 py-5 text-lg">
                Buy SBC Now
              </Button>
              <Button href="/whitepaper" variant="ghost" className="w-full sm:w-auto px-12 py-5 text-lg">
                Read Whitepaper
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">{wpData?.acf?.launch_tax || "0%"}</p>
                <p className="text-[10px] md:text-xs text-muted uppercase tracking-widest font-bold">Launch Tax</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">{buyTax}</p>
                <p className="text-[10px] md:text-xs text-muted uppercase tracking-widest font-bold">Buy Tax</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">{sellTax}</p>
                <p className="text-[10px] md:text-xs text-muted uppercase tracking-widest font-bold">Sell Tax</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-xl"
          >
            {/* Floating Coin Illustration */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <img 
              src="https://surinamebitcoin.finance/wp-content/uploads/2024/02/OBJECT-ILLUSTRATION-01-300x300.png" 
              alt="SBC Coin" 
              className="absolute -top-12 -right-10 w-32 h-32 object-contain z-20 animate-bounce [animation-duration:6s]"
            />

            <Card className="relative z-10 p-8 md:p-10 border-primary/20 shadow-[0_0_80px_rgba(0,0,0,0.6)] text-left">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-muted text-sm font-medium">Network</span>
                  <span className="text-white font-bold">{SBC_CONFIG.network}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-muted text-sm font-medium">Token Symbol</span>
                  <span className="text-primary font-bold">{SBC_CONFIG.ticker}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-muted text-sm font-medium">Max Wallet</span>
                  <span className="text-white font-bold">{wpData?.acf?.max_wallet || "5%"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted text-sm font-medium">SBC Contract</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-primary truncate max-w-[150px] sm:max-w-none">
                      {contract}
                    </span>
                    <button className="text-muted hover:text-white transition-colors" title="Copy Address">
                      <Zap size={14} />
                    </button>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <a href={SBC_CONFIG.links.dextools} target="_blank" className="bg-bg3 border border-white/5 rounded-xl p-4 text-center hover:border-secondary/50 transition-colors group">
                    <span className="text-[10px] text-muted uppercase block mb-1 font-bold tracking-widest">Dextools</span>
                    <span className="text-xs text-secondary font-bold group-hover:underline">Chart View →</span>
                  </a>
                  <a href={SBC_CONFIG.links.gecko} target="_blank" className="bg-bg3 border border-white/5 rounded-xl p-4 text-center hover:border-secondary/50 transition-colors group">
                    <span className="text-[10px] text-muted uppercase block mb-1 font-bold tracking-widest">GeckoTerminal</span>
                    <span className="text-xs text-secondary font-bold group-hover:underline">Pool Info →</span>
                  </a>
                </div>

                <Button href={SBC_CONFIG.links.buy} className="w-full py-4 text-base">
                  Trade Now on Poocoin
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
