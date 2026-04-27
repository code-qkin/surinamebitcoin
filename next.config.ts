import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // We only use the WordPress prefix if we explicitly set BUILD_FOR_WP=true
  assetPrefix: process.env.BUILD_FOR_WP === 'true' ? '/wp-content/themes/sbc-theme/' : '',
}

export default nextConfig
