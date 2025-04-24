// 출처: https://velog.io/@clydehan/Next.js-14app-router%EC%97%90%EC%84%9C-GA4-GTM-nextthird-parties-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function useGAPageView() {
	const pathname = usePathname();

	useEffect(() => {
		sendGAEvent('page_view', { page_path: pathname }); // 페이지 경로가 변경될 때마다 페이지뷰 이벤트를 전송한다.
	}, [pathname]);

	return null;
}

export function GAPageView() {
	useGAPageView();
	return null;
}
