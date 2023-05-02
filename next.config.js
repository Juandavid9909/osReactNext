const nextConfig = {
    future: {
        webpack5: true
    },
    i18n: {
        localeDetection: false,
        locales: ["en"],
        defaultLocale: "en"
    },
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true
    }
};

module.exports = nextConfig;