export const ROUTE = {
	HOME: 'home',
	ABOUT: 'about',
	BLOG: 'blog',
	CAREERS: 'careers',
	PRICING: 'pricing',
	CONTACT: 'contact',
} as const;

export type Route = (typeof ROUTE)[keyof typeof ROUTE];

export const ROUTE_PATH: Record<Route, () => string> = {
	home: () => '/',
	about: () => '/about',
	blog: () => '/blog',
	careers: () => '/careers',
	pricing: () => '/pricing',
	contact: () => '/contact',
} as const;

export const ROUTE_NAME: Record<Route, string> = {
	home: '홈',
	about: '소개',
	blog: '블로그',
	careers: '채용',
	pricing: '가격',
	contact: '문의',
} as const;

export const MAIN_ROUTES: Route[] = [
	ROUTE.ABOUT,
	ROUTE.BLOG,
	ROUTE.CAREERS,
	ROUTE.PRICING,
	ROUTE.CONTACT,
];
