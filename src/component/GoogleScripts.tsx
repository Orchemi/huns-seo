import { GOOGLE } from '@/config/google.config';
import Script from 'next/script';

const GoogleScripts = () => {
	return (
		<>
			{/* Google tag (gtag.js) */}
			<Script
				id="google-analytics"
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE.ANALYTICS_ID}`}
				strategy="afterInteractive"
			>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GOOGLE.ANALYTICS_ID}');
        `}
			</Script>
		</>
	);
};

export default GoogleScripts;
