import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: '훈세씨오',
	description: 'SEO 연구 프로젝트',
	icons: {
		icon: '/favicon.png',
	},
	openGraph: {
		title: '훈세씨오',
		description: 'SEO 연구 프로젝트',
		url: 'https://seo.huns.site',
		siteName: 'huns-seo',
		images: [
			{
				url: 'https://seo.huns.site/og-image.png',
				width: 1200,
				height: 630,
			},
		],
		locale: 'ko_KR',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '훈세씨오',
		description: 'SEO 연구 프로젝트',
		creator: '@orchemi',
		images: ['https://seo.huns.site/og-image.png'],
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body>{children}</body>
		</html>
	);
}
