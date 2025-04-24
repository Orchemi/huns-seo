import { ArrowRight, BarChart, Search, Target } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { CommonLayout } from '@/components/layout/common-layout';
import { BASE_CONFIG } from '@/config/base.config';

export const metadata: Metadata = {
	title: {
		absolute: BASE_CONFIG.TITLE,
	},
	description: BASE_CONFIG.DESCRIPTION,
	openGraph: {
		title: BASE_CONFIG.TITLE,
		description: BASE_CONFIG.DESCRIPTION,
		type: 'website',
		locale: 'ko_KR',
		siteName: BASE_CONFIG.SITE_NAME,
	},
};

const features = [
	{
		title: '정확한 분석',
		description:
			'데이터 기반의 정확한 SEO 분석으로 효과적인 전략을 제시합니다.',
		icon: Search,
	},
	{
		title: '실시간 모니터링',
		description: '검색 순위와 웹사이트 성능을 실시간으로 모니터링합니다.',
		icon: BarChart,
	},
	{
		title: '목표 달성',
		description: '고객의 비즈니스 목표에 맞춘 맞춤형 SEO 전략을 제공합니다.',
		icon: Target,
	},
];

export default function Home() {
	return (
		<CommonLayout>
			<div className="flex flex-col gap-16 px-4 sm:px-6 lg:px-8">
				{/* Hero Section */}
				<section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 py-16 text-center">
					<h1 className="break-keep text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
						검색 엔진 최적화로
						<br />
						<span className="text-primary">비즈니스 성장</span>을 이끄는 파트너
					</h1>
					<p className="break-keep text-balance max-w-[42rem] text-lg text-muted-foreground">
						훈세씨오는 데이터 기반의 SEO 컨설팅으로 고객의 온라인 가시성을
						높이고 비즈니스 성장을 지원합니다.
					</p>
					<div className="flex flex-col gap-4 sm:flex-row">
						<Button asChild size="lg">
							<Link href="/pricing">
								서비스 알아보기
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link href="/about">회사 소개</Link>
						</Button>
					</div>
				</section>

				{/* Features Section */}
				<section className="mx-auto w-full max-w-7xl py-16">
					<h2 className="text-2xl font-bold mb-8 ">훈세씨오의 특별한 서비스</h2>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="flex flex-col items-center gap-4 rounded-lg border p-8 text-center"
							>
								<feature.icon className="h-12 w-12 text-primary" />
								<h3 className="break-keep text-balance text-xl font-semibold">
									{feature.title}
								</h3>
								<p className="break-keep text-balance text-muted-foreground">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* CTA Section */}
				<section className="mx-auto w-full max-w-7xl rounded-lg bg-primary/5 py-16 text-center">
					<h2 className="break-keep text-balance text-3xl font-bold tracking-tight">
						지금 바로 시작하세요
					</h2>
					<p className="break-keep text-balance mx-auto mt-4 max-w-[42rem] text-lg text-muted-foreground">
						전문가와 상담하여 맞춤형 SEO 전략을 수립하세요.
					</p>
					<Button size="lg" className="mt-8" asChild>
						<Link href="/contact">
							무료 상담 신청하기
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</section>
			</div>
		</CommonLayout>
	);
}
