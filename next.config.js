/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        localDetection: false,
        locales: ["en", "es"],
        defaultLocale: "en"
    },
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true
    }
};

module.exports = nextConfig;