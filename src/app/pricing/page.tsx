import { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

export const metadata: Metadata = {
	title: '요금제 안내',
	description:
		'기업의 규모와 목표에 맞는 최적의 SEO 컨설팅 플랜을 제공합니다. 스타트업부터 대기업까지, 맞춤형 SEO 전략으로 비즈니스 성장을 지원합니다.',
};

const plans = [
	{
		name: 'Starter',
		price: '1,500,000',
		description: '성장하는 스타트업을 위한 기본 SEO 컨설팅',
		features: [
			{
				text: '기초 키워드 분석 (월 20개)',
				tooltip: '주요 키워드의 검색량, 경쟁강도, 트렌드 분석',
			},
			{
				text: '기술적 SEO 진단',
				tooltip: '웹사이트의 기본적인 기술적 문제점 진단',
			},
			{
				text: '월간 리포트',
				tooltip: '주요 지표 변화와 개선사항 리포트 제공',
			},
			{
				text: '이메일/채팅 기술지원',
				tooltip: '평일 10-18시 이메일/채팅 문의 응대',
			},
			{
				text: '기본 컨설팅 (월 1회)',
				tooltip: '온라인 미팅을 통한 전략 리뷰 및 조언',
			},
		],
		highlight: false,
		period: '월',
	},
	{
		name: 'Professional',
		price: '3,500,000',
		description: '전문적인 SEO 최적화가 필요한 중견기업',
		features: [
			{
				text: '심화 키워드 분석 (월 50개)',
				tooltip: '확장된 키워드 분석과 경쟁사 벤치마킹',
			},
			{
				text: '기술적 SEO 진단 및 개선',
				tooltip: '상세한 기술적 분석과 개선 가이드 제공',
			},
			{
				text: '콘텐츠 최적화 가이드',
				tooltip: '키워드 기반 콘텐츠 전략 수립 및 최적화 가이드',
			},
			{
				text: '주간 리포트',
				tooltip: '상세 성과 분석과 개선점 리포트 제공',
			},
			{
				text: '전담 컨설턴트 배정',
				tooltip: '프로젝트 전담 컨설턴트의 지속적인 관리',
			},
			{
				text: '정기 컨설팅 (월 2회)',
				tooltip: '대면/비대면 정기 미팅 및 전략 수립',
			},
			{
				text: '24/5 기술지원',
				tooltip: '평일 24시간 긴급 기술 지원',
			},
		],
		highlight: true,
		period: '월',
	},
	{
		name: 'Enterprise',
		price: '협의',
		description: '대규모 프로젝트를 위한 맞춤형 컨설팅',
		features: [
			{
				text: '무제한 키워드 분석',
				tooltip: '전체 키워드 생태계 분석 및 전략 수립',
			},
			{
				text: '맞춤형 기술 솔루션',
				tooltip: '기업 맞춤형 SEO 도구 및 솔루션 개발',
			},
			{
				text: 'AI 기반 콘텐츠 전략',
				tooltip: 'AI를 활용한 콘텐츠 최적화 및 생성 지원',
			},
			{
				text: '실시간 대시보드',
				tooltip: '실시간 성과 모니터링 대시보드 제공',
			},
			{
				text: '전담팀 구성',
				tooltip: 'SEO 전문가팀의 프로젝트 전담 운영',
			},
			{
				text: '주간 미팅',
				tooltip: '정기적인 전략 미팅 및 성과 보고',
			},
			{
				text: '24/7 기술지원',
				tooltip: '연중무휴 24시간 긴급 기술 지원',
			},
			{
				text: '맞춤형 교육 프로그램',
				tooltip: '사내 담당자 대상 SEO 교육 프로그램 제공',
			},
		],
		highlight: false,
		period: '연간 계약',
	},
];

const additionalServices = [
	{
		title: '기술 SEO 컨설팅',
		items: [
			'사이트 구조 최적화',
			'모바일 최적화',
			'페이지 속도 개선',
			'Core Web Vitals 최적화',
		],
	},
	{
		title: '콘텐츠 SEO',
		items: [
			'콘텐츠 전략 수립',
			'키워드 맵 작성',
			'콘텐츠 최적화 가이드',
			'콘텐츠 제작 지원',
		],
	},
	{
		title: '링크 빌딩',
		items: [
			'백링크 분석',
			'링크 빌딩 전략',
			'유해 링크 제거',
			'브랜드 멘션 모니터링',
		],
	},
	{
		title: '로컬 SEO',
		items: [
			'구글 비즈니스 프로필 최적화',
			'지역 키워드 전략',
			'리뷰 관리 전략',
			'로컬 백링크 구축',
		],
	},
];

export default function Pricing() {
	return (
		<Layout>
			<div className="flex flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
				{/* Hero Section */}
				<section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 text-center">
					<h1 className="break-keep text-balance text-4xl font-bold tracking-tight sm:text-5xl">
						비즈니스 성장을 위한
						<br />
						<span className="text-primary">최적의 SEO 컨설팅</span> 플랜
					</h1>
					<p className="break-keep text-balance max-w-[42rem] text-lg text-muted-foreground">
						기업의 규모와 목표에 맞는 맞춤형 SEO 전략을 제공합니다. 체계적인
						프로세스와 전문가의 밀착 케어로 검색 엔진 최적화 목표를 달성하세요.
					</p>
				</section>

				{/* Pricing Plans */}
				<section className="mx-auto w-full max-w-7xl">
					<div className="grid gap-8 lg:grid-cols-3">
						{plans.map((plan) => (
							<div
								key={plan.name}
								className={`relative flex h-full flex-col rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-md ${
									plan.highlight
										? 'border-primary ring-2 ring-primary ring-offset-2'
										: ''
								}`}
							>
								{plan.highlight && (
									<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-white">
										추천
									</div>
								)}
								<div className="mb-6">
									<h3 className="text-2xl font-bold">{plan.name}</h3>
									<p className="mt-2 text-muted-foreground">
										{plan.description}
									</p>
								</div>
								<div className="mb-6">
									<div className="flex items-baseline">
										<span className="text-3xl font-bold">₩</span>
										<span className="text-4xl font-bold">{plan.price}</span>
										<span className="ml-2 text-muted-foreground">
											/{plan.period}
										</span>
									</div>
								</div>
								<ul className="mb-8 flex-1 space-y-4">
									{plan.features.map((feature) => (
										<li key={feature.text} className="flex items-start gap-2">
											<Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
											<span className="flex items-center gap-1">
												{feature.text}
												<TooltipProvider>
													<Tooltip>
														<TooltipTrigger>
															<HelpCircle className="h-4 w-4 text-muted-foreground" />
														</TooltipTrigger>
														<TooltipContent>
															<p>{feature.tooltip}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</span>
										</li>
									))}
								</ul>
								<Button className="w-full" asChild>
									<Link href="/contact">
										{plan.name === 'Enterprise' ? '문의하기' : '시작하기'}
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						))}
					</div>
				</section>

				{/* Additional Services */}
				<section className="mx-auto w-full max-w-7xl">
					<h2 className="mb-8 text-2xl font-bold">추가 서비스</h2>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{additionalServices.map((service) => (
							<div
								key={service.title}
								className="rounded-lg border bg-white p-6"
							>
								<h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
								<ul className="space-y-2">
									{service.items.map((item) => (
										<li key={item} className="flex items-center gap-2">
											<Check className="h-4 w-4 text-primary" />
											<span className="text-muted-foreground">{item}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				{/* CTA Section */}
				<section className="mx-auto w-full max-w-7xl rounded-lg bg-primary/5 p-8 text-center">
					<h2 className="break-keep text-balance text-2xl font-bold">
						맞춤형 컨설팅이 필요하신가요?
					</h2>
					<p className="break-keep text-balance mx-auto mt-4 max-w-[42rem] text-muted-foreground">
						기업의 특성과 목표에 맞는 맞춤형 SEO 전략을 제안해드립니다. 지금
						바로 문의하세요.
					</p>
					<Button className="mt-6" size="lg" asChild>
						<Link href="/contact">
							무료 상담 신청
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</section>
			</div>
		</Layout>
	);
}
