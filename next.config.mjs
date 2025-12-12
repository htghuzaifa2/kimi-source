/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export', // Static HTML export for Cloudflare Pages
    images: {
        unoptimized: true, // Required for static export
    },
    trailingSlash: true, // Better for static hosting
};

export default nextConfig;
