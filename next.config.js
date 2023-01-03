/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    PUSHER_APP_ID: process.env.PUSHER_APP_ID,
    PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
    PUSHER_APP_SECRET: process.env.PUSHER_APP_SECRET,
    PUSHER_APP_CLUSTER: process.env.PUSHER_APP_CLUSTER
  },
  experimental: {
    appDir: true
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
