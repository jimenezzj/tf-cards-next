/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, opts) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    }
    return config;
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/blog/:bid',
  //       destination: '/blog/notFound',
  //       permanent: false
  //     }
  //   ]
  // }
}

module.exports = nextConfig
