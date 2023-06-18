// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


module.exports = {
	reactStrictMode: true,
};
const withPWA = require('next-pwa')({
    dest: 'public'
  })
  
  module.exports = withPWA({
    // next.js config
  })