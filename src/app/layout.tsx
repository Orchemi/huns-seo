import type { Metadata } from 'next';
import './globals.css';
import { BASE_CONFIG } from '@/config/base.config';
import { BASE_METADATA } from '@/config/metadata.config';
import { GOOGLE } from '@/config/google.config';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { WebsiteJsonLd } from '@/components/config/JsonLd';

export const metadata: Metadata = {
	metadataBase: BASE_METADATA.BASE_URL,
	title: {
		template: `%s | ${BASE_CONFIG.TITLE}`,
		default: BASE_CONFIG.TITLE,
	},
	description: BASE_CONFIG.DESCRIPTION,
	keywords: BASE_CONFIG.KEYWORDS,
	authors: {
		name: BASE_CONFIG.AUTHOR.NAME,
		url: BASE_CONFIG.AUTHOR.GITHUB_URL,
	},
	creator: BASE_CONFIG.CREATOR,
	publisher: BASE_CONFIG.PUBLISHER,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	icons: {
		icon: '/favicon.png',
	},
	openGraph: {
		title: BASE_CONFIG.TITLE,
		description: BASE_CONFIG.DESCRIPTION,
		url: BASE_CONFIG.URL,
		siteName: BASE_CONFIG.SITE_NAME,
		images: BASE_METADATA.IMAGES,
		locale: BASE_CONFIG.LOCALE,
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: BASE_CONFIG.TITLE,
		description: BASE_CONFIG.DESCRIPTION,
		creator: '@orchemi',
		images: BASE_CONFIG.IMAGES,
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
	robots: BASE_METADATA.ROBOTS,
	verification: BASE_METADATA.VERIFICATION,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<GoogleAnalytics gaId={GOOGLE.ANALYTICS_ID} />
			<WebsiteJsonLd />
			<body>{children}</body>
			<GoogleTagManager gtmId={GOOGLE.TAG_MANAGER_ID} />
		</html>
	);
}
