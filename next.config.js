/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        BASE_URL: "http://127.0.0.1:8000/api",
    },
    output: 'standalone',
}

module.exports = nextConfig
