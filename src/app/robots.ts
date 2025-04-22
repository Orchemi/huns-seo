// docs: Next.js - robots - https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

import { BASE_CONFIG } from '@/config/base.config';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: '/private/',
			},
		],
		sitemap: `${BASE_CONFIG.URL}/sitemap.xml`,
	};
}
