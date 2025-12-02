/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  // Skip static optimization for now to avoid build errors
  // Can be removed once the React version issue is fully resolved
  output: 'standalone',
};

export default nextConfig;
