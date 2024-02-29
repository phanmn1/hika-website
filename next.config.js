/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "source.unsplash.com" }],
  },
  webpack: (config) => {
    config.module.rules.push({ test: /\.handlebars$/, loader: "handlebars-loader" })
    return config
  }
};

module.exports = nextConfig
