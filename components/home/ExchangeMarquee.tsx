'use client'

export const ExchangeMarquee = () => {
  const items = [
    'Poocoin', 'Dextools', 'BSCScan', 'CoinMarketCap', 'GeckoTerminal', 
    'PancakeSwap', 'CyberScope Audited', 'BNB Smart Chain'
  ]

  return (
    <div className="w-full bg-bg2 border-y border-white/5 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item) => (
              <div key={item} className="flex items-center mx-8">
                <span className="text-muted/60 text-sm font-bold uppercase tracking-widest">{item}</span>
                <span className="ml-8 text-primary font-bold">·</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
