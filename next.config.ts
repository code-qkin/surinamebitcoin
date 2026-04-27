import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // CRITICAL: This ensures all scripts and styles load correctly 
  // from the WordPress theme folder.
  assetPrefix: '/wp-content/themes/sbc-theme/',
}

export default nextConfig
