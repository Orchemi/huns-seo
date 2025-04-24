import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { GOOGLE } from './google.config';

export default function GoogleProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<GoogleAnalytics gaId={GOOGLE.ANALYTICS_ID} />
			{children}
			<GoogleTagManager gtmId={GOOGLE.TAG_MANAGER_ID} />
		</>
	);
}
