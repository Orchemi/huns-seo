'use client';

import { BASE_CONFIG } from '@/config/base.config';
import { filePrefix } from '@/share/env/env.constant';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

const generateWebsiteJsonLdData = (path: string) => {
	return {
		'@context': 'https://schema.org/',
		'@type': 'WebSite',
		name: BASE_CONFIG.TITLE,
		url: `${BASE_CONFIG.URL}${path}`,
		inLanguage: 'ko-KR',
		author: {
			'@type': 'Person',
			name: BASE_CONFIG.AUTHOR.NAME,
			url: BASE_CONFIG.AUTHOR.GITHUB_URL,
			email: BASE_CONFIG.AUTHOR.MAIL,
			image: `${filePrefix}${BASE_CONFIG.AUTHOR.PROFILE_IMAGE}`,
			logo: {
				'@type': 'ImageObject',
				url: `${filePrefix}${BASE_CONFIG.AUTHOR.PROFILE_IMAGE}`,
			},
		},
	};
};

export const WebsiteJsonLd = () => {
	const path = usePathname();
	const websiteJsonLd = generateWebsiteJsonLdData(path);
	return (
		<Script
			id={'website-json-ld'}
			type={'application/ld+json'}
			dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
		/>
	);
};
