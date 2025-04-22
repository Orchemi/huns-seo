import { Metadata } from 'next';
import './globals.css';
import { BASE_CONFIG } from '@/config/base.config';
import { BASE_METADATA } from '@/config/metadata.config';
import GoogleScripts from '@/component/GoogleScripts';
import NoScriptTagManager from '@/component/NoScriptTagManager';

export const metadata: Metadata = {
	metadataBase: BASE_METADATA.BASE_URL,
	title: BASE_CONFIG.TITLE,
	description: BASE_CONFIG.DESCRIPTION,
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
			<GoogleScripts />
			<body>
				{children}
				<NoScriptTagManager />
			</body>
		</html>
	);
}
