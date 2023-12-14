/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/webapi/api.php/:path*',
          destination: 'https://app.gokidogo.com/webapi/api.php/:path*',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  

