// npm rss - https://www.npmjs.com/package/rss
// npm rss 설정 레퍼런스 - https://pusha.tistory.com/entry/Nextjs-RSS-Feed%ED%94%BC%EB%93%9C-%EC%84%A4%EC%A0%95%EB%B0%A9%EB%B2%95

import { BASE_CONFIG } from '@/config/base.config';
import { ROUTE_NAME, ROUTE_PATH } from '@/share/route/route.constant';
import { MAIN_ROUTES } from '@/share/route/route.constant';
import RSS from 'rss';
export const GET = async () => {
	const feed = new RSS({
		title: BASE_CONFIG.TITLE,
		description: BASE_CONFIG.DESCRIPTION,
		site_url: BASE_CONFIG.URL,
		feed_url: `${BASE_CONFIG.URL}/feed.xml`,
		image_url: `${BASE_CONFIG.URL}/og-image.png`,
		copyright: `All rights reserved by ${BASE_CONFIG.AUTHOR.NAME}`,
		pubDate: new Date(),
	});

	feed.item({
		title: BASE_CONFIG.TITLE,
		description: BASE_CONFIG.DESCRIPTION,
		url: BASE_CONFIG.URL,
		date: new Date(),
	});

	MAIN_ROUTES.forEach((route) => {
		feed.item({
			title: ROUTE_NAME[route],
			description: '',
			url: `${BASE_CONFIG.URL}${ROUTE_PATH[route]()}`,
			date: new Date(),
		});
	});

	return new Response(feed.xml({ indent: true }), {
		headers: {
			'Content-Type': 'application/atom+xml; charset=utf-8',
			'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
		},
	});
};
