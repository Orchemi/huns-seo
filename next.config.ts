import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			{
				source: '/sitemap.xml',
				destination: '/sitemap/1',
			},
		];
	},
};

export default nextConfig;
