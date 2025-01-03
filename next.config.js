/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['source.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://resume.ffzanini.dev',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
