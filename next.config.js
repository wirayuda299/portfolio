/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**/*',
        port: ''
      }
    ],
    dangerouslyAllowSVG: true
  },

}

module.exports = nextConfig
