export type Phase = {
  number:  number
  title:   string
  status:  'done' | 'active' | 'upcoming'
  items:   string[]
}

export const ROADMAP: Phase[] = [
  {
    number: 1, title: 'Foundation', status: 'done',
    items: [
      'Token creation & smart contract deployment',
      'CyberScope security audit (84% — Low Risk)',
      'Website & whitepaper launch',
      'Initial liquidity added',
      'Community channels opened',
    ],
  },
  {
    number: 2, title: 'Growth', status: 'done',
    items: [
      'Listed on Poocoin & Dextools',
      'CoinMarketCap dexscan listing',
      'GeckoTerminal integration',
      'BSCScan token verification',
      'SBC Academy launched',
      'Community AMA sessions',
    ],
  },
  {
    number: 3, title: 'Expansion', status: 'active',
    items: [
      'Liquidity Phase 2 rollout (25%)',
      'Partnerships with local Surinamese businesses',
      'SRD direct transaction support — first ever',
      'Mobile wallet features',
      'Ambassador program launch',
    ],
  },
  {
    number: 4, title: 'Integration', status: 'upcoming',
    items: [
      'Tier-1 CEX exchange listings',
      'DeFi lending & staking protocol',
      'NFT marketplace',
      'Liquidity Phase 3 launch (25%)',
      'SBC payment gateway',
      'SUDOBA Blockchain development begins',
    ],
  },
]
