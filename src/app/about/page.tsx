import { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import { GrowthChart } from '@/components/charts/GrowthChart';

export const metadata: Metadata = {
	title: '회사 소개 | 훈세씨오 - SEO 컨설팅 전문 기업',
	description:
		'훈세씨오는 데이터 기반의 SEO 컨설팅으로 고객의 온라인 가시성을 높이고 비즈니스 성장을 지원합니다.',
};

const companyInfo = {
	name: '훈세씨오(hunsseo Corp.)',
	founded: '2020년 3월',
	capital: '5억원',
	revenue: '15억원 (2023년 기준)',
	employees: '25명',
	location: '서울 용산구 한강대로 123',
	ceo: '박승훈',
};

const historyData = [
	{ year: '2020', events: ['회사 설립', '초기 고객사 확보'] },
	{ year: '2021', events: ['SEO 분석 도구 개발', '직원 10명 확보'] },
	{ year: '2022', events: ['해외 진출', '연 매출 10억 돌파'] },
	{ year: '2023', events: ['AI 기반 분석 시스템 도입', '직원 25명 확보'] },
];

const growthData = [
	{
		id: '매출액',
		data: [
			{ x: '2020', y: 2 },
			{ x: '2021', y: 5 },
			{ x: '2022', y: 10 },
			{ x: '2023', y: 15 },
		],
	},
	{
		id: '고객사 수',
		data: [
			{ x: '2020', y: 5 },
			{ x: '2021', y: 15 },
			{ x: '2022', y: 30 },
			{ x: '2023', y: 50 },
		],
	},
];

export default function About() {
	return (
		<Layout>
			<div className="flex flex-col gap-16 px-4 sm:px-6 lg:px-8">
				{/* Hero Section */}
				<section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 py-16 text-center">
					<h1 className="break-keep text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
						데이터 기반의
						<br />
						<span className="text-primary">SEO 컨설팅</span> 전문 기업
					</h1>
					<p className="break-keep text-balance max-w-[42rem] text-lg text-muted-foreground">
						훈세씨오는 검색 엔진 최적화를 통해 고객의 비즈니스 성장을 돕는 전문
						컨설팅 기업입니다.
					</p>
				</section>

				{/* Company Info Section */}
				<section className="mx-auto w-full max-w-7xl">
					<div className="grid gap-8 md:grid-cols-2">
						<div className="space-y-6">
							<h2 className="text-2xl font-bold">회사 개요</h2>
							<div className="grid gap-4">
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-1">
										<p className="text-sm text-muted-foreground">설립일</p>
										<p className="font-medium">{companyInfo.founded}</p>
									</div>
									<div className="space-y-1">
										<p className="text-sm text-muted-foreground">자본금</p>
										<p className="font-medium">{companyInfo.capital}</p>
									</div>
									<div className="space-y-1">
										<p className="text-sm text-muted-foreground">매출액</p>
										<p className="font-medium">{companyInfo.revenue}</p>
									</div>
									<div className="space-y-1">
										<p className="text-sm text-muted-foreground">직원수</p>
										<p className="font-medium">{companyInfo.employees}</p>
									</div>
								</div>
								<div className="space-y-1">
									<p className="text-sm text-muted-foreground">대표이사</p>
									<p className="font-medium">{companyInfo.ceo}</p>
								</div>
								<div className="space-y-1">
									<p className="text-sm text-muted-foreground">회사 위치</p>
									<p className="font-medium">{companyInfo.location}</p>
								</div>
							</div>
						</div>

						{/* Growth Chart */}
						<div className="h-[300px] w-full">
							<GrowthChart data={growthData} />
						</div>
					</div>
				</section>

				{/* History Section */}
				<section className="mx-auto w-full max-w-7xl">
					<h2 className="mb-8 text-2xl font-bold">회사 연혁</h2>
					<div className="grid gap-8 md:grid-cols-2">
						{/* History Stats Grid */}
						<div className="grid grid-cols-2 gap-4 self-start rounded-lg bg-gray-50 p-6">
							<div className="space-y-4">
								<div className="overflow-hidden rounded-lg bg-white p-4 shadow-sm">
									<div className="mb-2 text-2xl font-bold text-primary">
										25명
									</div>
									<div className="text-sm text-muted-foreground">
										현재 직원 수
									</div>
								</div>
								<div className="overflow-hidden rounded-lg bg-white p-4 shadow-sm">
									<div className="mb-2 text-2xl font-bold text-primary">
										15억
									</div>
									<div className="text-sm text-muted-foreground">
										연간 매출액
									</div>
								</div>
								<div className="overflow-hidden rounded-lg bg-white p-4 shadow-sm">
									<div className="mb-2 text-2xl font-bold text-primary">
										3개국
									</div>
									<div className="text-sm text-muted-foreground">해외 진출</div>
								</div>
							</div>
							<div className="space-y-4">
								<div className="overflow-hidden rounded-lg bg-white p-4 shadow-sm">
									<div className="mb-2 text-2xl font-bold text-primary">
										50+
									</div>
									<div className="text-sm text-muted-foreground">고객사 수</div>
								</div>
								<div className="overflow-hidden rounded-lg bg-white p-4 shadow-sm">
									<div className="mb-2 text-2xl font-bold text-primary">
										4년
									</div>
									<div className="text-sm text-muted-foreground">설립 연차</div>
								</div>
								<div className="overflow-hidden rounded-lg bg-white p-4 shadow-sm">
									<div className="mb-2 text-2xl font-bold text-primary">
										98%
									</div>
									<div className="text-sm text-muted-foreground">
										고객 만족도
									</div>
								</div>
							</div>
						</div>

						{/* Timeline */}
						<div className="relative">
							<div className="absolute left-[15px] h-full w-0.5 bg-gray-200" />
							<div className="space-y-12">
								{historyData.map((item, index) => (
									<div key={item.year} className="relative flex items-start">
										<div className="flex w-16 items-center">
											<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
												<span className="text-sm font-medium text-white">
													{index + 1}
												</span>
											</div>
										</div>
										<div className="flex-1">
											<h3 className="mb-3 text-xl font-semibold">
												{item.year}
											</h3>
											<ul className="space-y-3">
												{item.events.map((event) => (
													<li
														key={event}
														className="flex items-start gap-2 text-muted-foreground"
													>
														<span className="text-primary">•</span>
														<span>{event}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Values Section */}
				<section className="mx-auto w-full max-w-7xl">
					<h2 className="mb-8 text-2xl font-bold">핵심 가치</h2>
					<div className="grid gap-8 md:grid-cols-3">
						<div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
							<div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
							<div className="relative">
								<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-lightbulb"
									>
										<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
										<path d="M9 18h6" />
										<path d="M10 22h4" />
									</svg>
								</div>
								<h3 className="mb-2 text-xl font-semibold">혁신과 창의성</h3>
								<p className="text-muted-foreground">
									끊임없는 연구와 혁신을 통해 SEO 업계의 새로운 기준을
									제시합니다. 기존의 방식에 안주하지 않고 항상 더 나은 해결책을
									모색합니다.
								</p>
							</div>
						</div>

						<div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
							<div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
							<div className="relative">
								<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-target"
									>
										<circle cx="12" cy="12" r="10" />
										<circle cx="12" cy="12" r="6" />
										<circle cx="12" cy="12" r="2" />
									</svg>
								</div>
								<h3 className="mb-2 text-xl font-semibold">데이터 중심 접근</h3>
								<p className="text-muted-foreground">
									모든 의사결정과 전략은 정확한 데이터 분석을 기반으로 합니다.
									객관적인 지표를 통해 실질적인 성과를 도출하고 검증합니다.
								</p>
							</div>
						</div>

						<div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
							<div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
							<div className="relative">
								<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-users"
									>
										<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
										<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								</div>
								<h3 className="mb-2 text-xl font-semibold">고객 성공 중심</h3>
								<p className="text-muted-foreground">
									고객의 성공이 곧 우리의 성공입니다. 고객의 비즈니스를 깊이
									이해하고 장기적인 성장을 함께 만들어갑니다.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Vision Section */}
				<section className="mx-auto w-full max-w-7xl rounded-lg bg-primary/5 p-8">
					<h2 className="mb-4 text-2xl font-bold">비전</h2>
					<p className="break-keep text-balance text-lg text-muted-foreground">
						훈세씨오는 데이터 기반의 SEO 컨설팅을 통해 고객의 비즈니스 성장을
						돕는 것을 목표로 합니다. 최신 기술과 분석 방법을 활용하여 고객의
						온라인 가시성을 높이고, 지속 가능한 성장을 지원합니다.
					</p>
				</section>
			</div>
		</Layout>
	);
}
