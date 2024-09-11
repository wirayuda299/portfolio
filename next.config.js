
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**/*',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/**/*',
        port: ''
      },
    ],
  },
  //compiler: {
  //  removeConsole: process.env.NODE_ENV === 'production',
  //},

  env: {
    UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_WRITE_TOKEN: process.env.SANITY_WRITE_TOKEN,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_API_KEY: process.env.EMAILJS_API_KEY
  },

}
module.exports = nextConfig
