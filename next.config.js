/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.resolve.extensions.push('.ts', '.tsx');
        // config.module.rules.push({
        //     test: /\.svg$/i,
        //     issuer: /\.[jt]sx?$/,
        //     use: ['@svgr/webpack'],
        // })
        return config;
      }
}

module.exports = nextConfig
