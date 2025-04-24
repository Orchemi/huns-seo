// docs: Next.js - sitemap - https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
// docs: Next.js - generateSitemaps - https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps

import { BASE_CONFIG } from '@/config/base.config';
import { MAIN_ROUTES, ROUTE_PATH } from '@/share/route/route.constant';
import { MetadataRoute } from 'next';

// route
const mainRouteSiteMap: MetadataRoute.Sitemap = [
	{
		url: `${BASE_CONFIG.URL}`,
		lastModified: new Date(),
		changeFrequency: 'daily',
		priority: 1,
	},
	...MAIN_ROUTES.map((route) => ({
		url: `${BASE_CONFIG.URL}${ROUTE_PATH[route]()}`,
		lastModified: new Date(),
		changeFrequency: 'daily' as const,
		priority: 0.9,
	})),
];

// docs: TroubleShooting - Fix dynamic sitemap detection - https://github.com/vercel/next.js/pull/60356
// 생성되는 사이트맵 경로 : {URL}/sitemap/1.xml
export async function generateSitemaps() {
	return [{ id: 1 }];
}

export default function sitemap(): MetadataRoute.Sitemap {
	return [...mainRouteSiteMap];
}
