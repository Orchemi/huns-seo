'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

const navigationItems = [
	{ name: '홈', href: '/' },
	{ name: '소개', href: '/about' },
	{ name: '블로그', href: '/blog' },
	{ name: '채용', href: '/recruit' },
	{ name: '금액 정책', href: '/pricing' },
];

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
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
							{item.name}
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
				<div className="container space-y-2 pb-4">
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
