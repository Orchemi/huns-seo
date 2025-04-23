import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

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
			{ name: '소개', href: '/about' },
			{ name: '채용', href: '/recruit' },
			{ name: '블로그', href: '/blog' },
		],
	},
	{
		title: '서비스',
		links: [
			{ name: '금액 정책', href: '/pricing' },
			{ name: 'SEO 컨설팅', href: '/services' },
		],
	},
	{
		title: '법적',
		links: [
			{ name: '이용약관', href: '/terms' },
			{ name: '개인정보처리방침', href: '/privacy' },
		],
	},
];

export const Footer = () => {
	return (
		<footer className="border-t bg-background">
			<div className="container py-12">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					{/* Company Info */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">{companyInfo.name}</h3>
						<div className="space-y-2 text-sm text-muted-foreground">
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
							<h3 className="text-lg font-semibold">{section.title}</h3>
							<ul className="space-y-2 text-sm text-muted-foreground">
								{section.links.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="hover:text-primary transition-colors"
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
				<div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
					<p>
						© {new Date().getFullYear()} {companyInfo.name}. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
