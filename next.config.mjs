/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "upload.wikimedia.org",
      "source.unsplash.com",
    ],
  },
};

export default nextConfig;
