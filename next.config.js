/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        BASE_URL: "http://localhost/api",
    },
    output: 'standalone',
}

module.exports = nextConfig
