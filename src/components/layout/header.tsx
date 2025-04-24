'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import GACta from '@/share/google/GACta';
import { GA_CTA_EVENTS } from '@/share/google/ga.constant';

const navigationItems = [
	{ name: '소개', href: '/about' },
	{ name: '블로그', href: '/blog' },
	{ name: '채용', href: '/careers' },
	{ name: '금액', href: '/pricing' },
	{ name: '문의', href: '/contact' },
];

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link href="/" className="flex items-center space-x-2">
					<span className="text-xl font-bold">훈세씨오</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-6">
					{navigationItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							<GACta event={GA_CTA_EVENTS.onClickNavigation}>{item.name}</GACta>
						</Link>
					))}
				</nav>

				{/* Mobile Navigation Button */}
				<button
					className="md:hidden"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>

			{/* Mobile Navigation Menu */}
			<motion.div
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				variants={{
					open: { opacity: 1, height: 'auto' },
					closed: { opacity: 0, height: 0 },
				}}
				className="md:hidden"
			>
				<div className="mx-auto w-full max-w-7xl space-y-2 px-4 py-4 sm:px-6 lg:px-8">
					{navigationItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="block py-2 text-sm font-medium transition-colors hover:text-primary"
							onClick={() => setIsOpen(false)}
						>
							{item.name}
						</Link>
					))}
				</div>
			</motion.div>
		</header>
	);
};
