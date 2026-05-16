/** @type {import('next').NextConfig} */
const nextConfig = {
  // If deploying to Netlify/Vercel with API routes, avoid 'output: export'.
  // We keep unoptimized images for compatibility with phone mockup presentation.
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopack: {
      root: __dirname,
    },
  },
}

module.exports = nextConfig
