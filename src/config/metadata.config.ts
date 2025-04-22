import {
	ResolvedVerification,
	Robots,
	TemplateString,
} from 'next/dist/lib/metadata/types/metadata-types';
import { BASE_CONFIG } from './base.config';
import { filePrefix } from '@/share/env/env.constant';
import { GOOGLE } from './google.config';

const TITLE: TemplateString = {
	default: BASE_CONFIG.TITLE,
	template: `%s | ${BASE_CONFIG.TITLE}`,
	absolute: BASE_CONFIG.TITLE,
};

const IMAGES = [
	{
		url: `${filePrefix}/og-image.png`,
		width: 1200,
		height: 630,
	},
];

const BASE_URL: URL = new URL(BASE_CONFIG.URL);

const ROBOTS: Robots = {
	index: true,
	follow: true,
	nocache: true,
};

const NAVER_VERIFICATION_KEY = 'd032c0ac6e42db330a3fa3455f7d90f569976e6b';

const VERIFICATION: ResolvedVerification = {
	google: [GOOGLE.SITE_VERIFICATION],
	other: {
		'naver-site-verification': [NAVER_VERIFICATION_KEY],
	},
};

export const BASE_METADATA = {
	BASE_URL,
	TITLE,
	IMAGES,
	ROBOTS,
	VERIFICATION,
};
