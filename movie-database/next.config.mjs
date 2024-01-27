/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "image.tmdb.org" }],
  },
  env: {
    API_AUTHENTICATOR: process.env.API_AUTHENTICATOR,
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
