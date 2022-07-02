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
	swcMinify: false,

	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.pdf$/i,
			type: "asset/source",
		});

		return config;
	},
};

module.exports = nextConfig;
