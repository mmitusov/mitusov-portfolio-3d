/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  //Here is "Next config" if you want to display any images in nextjs app from accross the internet
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  }
}

export default nextConfig;
