/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['localhost']
	},
	env: {
		API_URL_BASE: process.env.API_URL_BASE
	}
};

module.exports = nextConfig;
