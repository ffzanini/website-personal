/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['source.unsplash.com'],
  },
  experimental: {
    middlewarePrefetch: true,
  },
}

module.exports = nextConfig
