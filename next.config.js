/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["flagcdn.com"],
	},
	i18n: {
		locales: ["en", "fr", "nl"],
		defaultLocale: "en",
	},
};

module.exports = nextConfig;
