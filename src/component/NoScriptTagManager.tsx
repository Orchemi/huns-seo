import { GOOGLE } from '@/config/google.config';

const NoScriptTagManager = () => {
	return (
		<noscript>
			<iframe
				src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE.TAG_MANAGER_ID}`}
				height="0"
				width="0"
				style={{ display: 'none', visibility: 'hidden' }}
				title="Google Tag Manager"
			/>
		</noscript>
	);
};

export default NoScriptTagManager;
