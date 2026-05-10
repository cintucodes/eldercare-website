/** @type {import('next').NextConfig} */
const nextConfig = {
  // Netlify handles image optimization better with unoptimized: true for static exports, 
  // but for standard builds it ensures the phone mockups load instantly.
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
