/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    qualities: [75, 95],
  },

  // Removed the serverActions as it is not needed in next version 14.2.32
};

export default nextConfig;
