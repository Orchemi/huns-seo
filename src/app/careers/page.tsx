import { Metadata } from 'next';
import { CommonLayout } from '@/components/layout/common-layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Users, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
	title: '채용',
	description:
		'훈세씨오와 함께 성장할 인재를 찾습니다. SEO와 디지털 마케팅 분야에서 혁신을 이끌어갈 열정 있는 분들을 기다립니다.',
};

const benefits = [
	{
		icon: Building2,
		title: '최신 업무 환경',
		description:
			'강남 중심가에 위치한 쾌적한 오피스, 자율 좌석제, 최신 장비 지원',
	},
	{
		icon: Users,
		title: '자기 계발 지원',
		description: '연간 교육비 지원, 도서 구매 무제한 지원, 컨퍼런스 참가 지원',
	},
	{
		icon: Briefcase,
		title: '유연한 근무제도',
		description: '자율 출퇴근제, 재택근무 가능, 자유로운 연차 사용',
	},
];

const positions = [
	{
		id: 'seo-consultant',
		title: 'SEO 컨설턴트',
		department: '컨설팅팀',
		type: '정규직',
		experience: '경력 3년 이상',
		description:
			'기업 고객사의 검색엔진 최적화 전략 수립 및 실행을 담당합니다.',
	},
	{
		id: 'data-analyst',
		title: '데이터 분석가',
		department: '데이터팀',
		type: '정규직',
		experience: '경력 무관',
		description: '웹 로그 분석 및 SEO 성과 분석, 대시보드 구축을 담당합니다.',
	},
	{
		id: 'frontend-developer',
		title: '프론트엔드 개발자',
		department: '개발팀',
		type: '정규직',
		experience: '경력 2년 이상',
		description: 'SEO 분석 도구 및 대시보드 프론트엔드 개발을 담당합니다.',
	},
	{
		id: 'content-strategist',
		title: '콘텐츠 전략가',
		department: '콘텐츠팀',
		type: '정규직',
		experience: '경력 2년 이상',
		description: 'SEO 최적화된 콘텐츠 전략 수립 및 제작을 담당합니다.',
	},
];

export default function Careers() {
	return (
		<CommonLayout>
			<div className="flex flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
				{/* Hero Section */}
				<section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 text-center">
					<h1 className="break-keep text-balance text-4xl font-bold tracking-tight sm:text-5xl">
						훈세씨오와 함께
						<br />
						<span className="text-primary">디지털 마케팅의 미래</span>를
						만들어갈
						<br />
						인재를 찾습니다
					</h1>
					<p className="break-keep text-balance max-w-[42rem] text-lg text-muted-foreground">
						SEO와 디지털 마케팅 분야에서 혁신을 이끌어갈 열정 있는 분들을
						기다립니다. 훈세씨오에서 함께 성장하며 새로운 가치를 만들어보세요.
					</p>
				</section>

				{/* Benefits Section */}
				<section className="mx-auto w-full max-w-7xl">
					<h2 className="mb-8 text-2xl font-bold">복리후생</h2>
					<div className="grid gap-8 md:grid-cols-3">
						{benefits.map((benefit) => (
							<div
								key={benefit.title}
								className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
								<div className="relative">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
										<benefit.icon className="h-6 w-6" />
									</div>
									<h3 className="mb-2 text-xl font-semibold">
										{benefit.title}
									</h3>
									<p className="text-muted-foreground">{benefit.description}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Open Positions Section */}
				<section className="mx-auto w-full max-w-7xl">
					<h2 className="mb-8 text-2xl font-bold">채용 중인 포지션</h2>
					<div className="grid gap-4">
						{positions.map((position) => (
							<Link
								key={position.id}
								href={`/careers/${position.id}`}
								className="group relative overflow-hidden rounded-lg border bg-white p-6 transition-all hover:shadow-md"
							>
								<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
									<div>
										<h3 className="text-xl font-semibold">{position.title}</h3>
										<div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
											<span>{position.department}</span>
											<span>•</span>
											<span>{position.type}</span>
											<span>•</span>
											<span>{position.experience}</span>
										</div>
										<p className="mt-2 text-muted-foreground">
											{position.description}
										</p>
									</div>
									<Button variant="ghost" className="mt-4 sm:mt-0">
										자세히 보기
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</div>
							</Link>
						))}
					</div>
				</section>

				{/* CTA Section */}
				<section className="mx-auto w-full max-w-7xl rounded-lg bg-primary/5 p-8 text-center">
					<h2 className="break-keep text-balance text-2xl font-bold">
						나에게 맞는 포지션이 없나요?
					</h2>
					<p className="break-keep text-balance mx-auto mt-4 max-w-[42rem] text-muted-foreground">
						수시 채용도 진행하고 있습니다. 이력서를 보내주시면 추후 채용 시
						우선적으로 검토하겠습니다.
					</p>
					<Button className="mt-6" asChild>
						<Link href="/careers/apply">
							이력서 보내기
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</section>
			</div>
		</CommonLayout>
	);
}
