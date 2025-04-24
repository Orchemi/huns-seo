import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ROUTE, ROUTE_NAME, ROUTE_PATH } from '@/share/route/route.constant';

const companyInfo = {
	name: '훈세씨오(hunsseo Corp.)',
	email: 'official@hunsseo.com',
	phone: '02-1234-5678',
	address: '서울 용산구 한강대로 123',
	ceo: '박승훈',
};

const footerLinks = [
	{
		title: '회사',
		links: [
			{ name: ROUTE_NAME[ROUTE.ABOUT], href: ROUTE_PATH[ROUTE.ABOUT]() },
			{ name: ROUTE_NAME[ROUTE.CAREERS], href: ROUTE_PATH[ROUTE.CAREERS]() },
			{ name: ROUTE_NAME[ROUTE.BLOG], href: ROUTE_PATH[ROUTE.BLOG]() },
		],
	},
	{
		title: '서비스',
		links: [
			{ name: '금액 정책', href: ROUTE_PATH[ROUTE.PRICING]() },
			{ name: 'SEO 컨설팅', href: ROUTE_PATH[ROUTE.CONTACT]() },
		],
	},
	{
		title: '법적',
		links: [
			{ name: '이용약관', href: '/' },
			{ name: '개인정보처리방침', href: '/' },
		],
	},
];

export const Footer = () => {
	return (
		<footer className="border-t border-gray-800 bg-gray-900 text-gray-100 mt-8">
			<div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					{/* Company Info */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">
							{companyInfo.name}
						</h3>
						<div className="space-y-2 text-sm text-gray-200">
							<p className="flex items-center gap-2">
								<Mail className="h-4 w-4" />
								{companyInfo.email}
							</p>
							<p className="flex items-center gap-2">
								<Phone className="h-4 w-4" />
								{companyInfo.phone}
							</p>
							<p className="flex items-center gap-2">
								<MapPin className="h-4 w-4" />
								{companyInfo.address}
							</p>
						</div>
					</div>

					{/* Footer Links */}
					{footerLinks.map((section) => (
						<div key={section.title} className="space-y-4">
							<h3 className="text-lg font-semibold text-white">
								{section.title}
							</h3>
							<ul className="space-y-2 text-sm text-gray-400">
								{section.links.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="hover:text-white transition-colors"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Copyright */}
				<div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-300">
					<p>
						© {new Date().getFullYear()} {companyInfo.name}. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
