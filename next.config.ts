import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // If we are building for WordPress, use the theme path. 
  // Otherwise, use the standard root path.
  assetPrefix: process.env.NODE_ENV === 'production' ? '/wp-content/themes/sbc-theme/' : '',
}

export default nextConfig
