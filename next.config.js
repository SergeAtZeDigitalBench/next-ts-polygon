/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true
    },
  webpack(config, { isServer }) {
    /**
     * @description temp fix from: https://github.com/mswjs/msw/issues/1801
     */
    if (isServer) {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: 'msw/browser', alias: false })
      } else {
        config.resolve.alias['msw/browser'] = false
      }
    } else {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: 'msw/node', alias: false })
      } else {
        config.resolve.alias['msw/node'] = false
      }
    }

    return config
  },
};

module.exports = nextConfig;
