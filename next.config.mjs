/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    staticPageGenerationTimeout: 180,
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
