export const SBC_CONFIG = {
  name:     'Suriname Bitcoin',
  ticker:   'SBC',
  tagline:  'Where Tradition Meets Innovation in Finance',
  contract: '0x85c19b229c0c52ed8a7aa63622cb64f583b22ffb',
  network:  'BNB Smart Chain',

  announce: {
    text: '🚀 SBC is LIVE on BNB Chain! Buy Now on Poocoin',
    link: 'https://poocoin.app/tokens/0x85c19b229c0c52ed8a7aa63622cb64f583b22ffb',
  },

  tokenomics: {
    buyTax:    '1%',
    sellTax:   '1%',
    maxWallet: '5%',
  },

  links: {
    buy:        'https://poocoin.app/tokens/0x85c19b229c0c52ed8a7aa63622cb64f583b22ffb',
    dextools:   'https://www.dextools.io/app/en/bnb/pair-explorer/0xaf21135cfd26429298d35dc37f450efae5a972ad',
    bscscan:    'https://bscscan.com/token/0x85C19B229C0C52ed8A7aA63622cB64f583B22FFB',
    cmc:        'https://coinmarketcap.com/dexscan/bsc/0xaf21135cfd26429298d35dc37f450efae5a972ad/',
    gecko:      'https://www.geckoterminal.com/bsc/pools/0xaf21135cfd26429298d35dc37f450efae5a972ad',
    audit:      'https://cyberscope.io/audits/6-sbc',
    whitepaper: 'https://surinamebitcoin.finance/whitepaper/',
  },

  social: {
    telegram: 'https://t.me/surinamebitcoingroup',
    twitter:  'https://twitter.com/SBC_Coin',
    youtube:  'https://www.youtube.com/@SurinameBitcoin',
    facebook: 'https://www.facebook.com/profile.php?id=61556105472204',
  },

  audit: {
    score:   84,
    risk:    'Low Risk',
    auditor: 'CyberScope',
    url:     'https://cyberscope.io/audits/6-sbc',
  },
} as const
