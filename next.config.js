/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add Cloudinary (or another remote host) here later, e.g.:
    // remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
