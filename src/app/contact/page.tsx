import { Metadata } from 'next';
import { CommonLayout } from '@/components/layout/common-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
	title: '문의하기',
	description:
		'SEO 컨설팅 문의나 견적 요청을 위한 상담을 신청하세요. 전문 컨설턴트가 기업에 맞는 최적의 SEO 전략을 제안해드립니다.',
};

const contactInfo = [
	{
		icon: Building2,
		title: '회사',
		content: '훈세씨오 (HunsSEO)',
	},
	{
		icon: MapPin,
		title: '주소',
		content: '서울특별시 강남구 테헤란로 123 훈세씨오빌딩 4층',
	},
	{
		icon: Phone,
		title: '전화',
		content: '02-1234-5678',
	},
	{
		icon: Mail,
		title: '이메일',
		content: 'contact@hunsseo.com',
	},
];

const budgetRanges = [
	{ value: 'under-2m', label: '200만원 미만' },
	{ value: '2m-5m', label: '200만원 - 500만원' },
	{ value: '5m-10m', label: '500만원 - 1,000만원' },
	{ value: 'over-10m', label: '1,000만원 이상' },
	{ value: 'undecided', label: '미정' },
];

const businessTypes = [
	{ value: 'startup', label: '스타트업' },
	{ value: 'sme', label: '중소기업' },
	{ value: 'enterprise', label: '대기업' },
	{ value: 'agency', label: '에이전시' },
	{ value: 'personal', label: '개인' },
	{ value: 'other', label: '기타' },
];

export default function Contact() {
	return (
		<CommonLayout>
			<div className="flex flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
				{/* Hero Section */}
				<section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 text-center">
					<h1 className="break-keep text-balance text-4xl font-bold tracking-tight sm:text-5xl">
						SEO 전문가와 상담하세요
					</h1>
					<p className="break-keep text-balance max-w-[42rem] text-lg text-muted-foreground">
						기업의 디지털 성장을 위한 첫걸음, 훈세씨오가 함께하겠습니다. 무료
						상담을 통해 최적의 SEO 전략을 제안해드립니다.
					</p>
				</section>

				<div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2">
					{/* Contact Information */}
					<div className="flex flex-col gap-8">
						<div className="grid gap-6 sm:grid-cols-2">
							{contactInfo.map((info) => (
								<Card key={info.title}>
									<CardHeader className="space-y-1">
										<CardTitle className="flex items-center gap-2 text-lg">
											<info.icon className="h-5 w-5 text-primary" />
											{info.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-muted-foreground">{info.content}</p>
									</CardContent>
								</Card>
							))}
						</div>
						<Card>
							<CardHeader>
								<CardTitle>상담 가능 시간</CardTitle>
								<CardDescription>평일 오전 10시 - 오후 6시</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground">
									* 문의 접수 후 1영업일 이내에 답변드립니다.
									<br />* 긴급한 문의는 전화로 연락 부탁드립니다.
								</p>
							</CardContent>
						</Card>
					</div>

					{/* Contact Form */}
					<Card>
						<CardHeader>
							<CardTitle>문의하기</CardTitle>
							<CardDescription>
								아래 양식을 작성하시면 전문 컨설턴트가 검토 후 연락드립니다.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form className="space-y-6">
								<div className="grid gap-4 sm:grid-cols-2">
									<div className="space-y-2">
										<Label htmlFor="name">이름 *</Label>
										<Input
											id="name"
											name="name"
											placeholder="홍길동"
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="company">회사명 *</Label>
										<Input
											id="company"
											name="company"
											placeholder="주식회사 훈세씨오"
											required
										/>
									</div>
								</div>

								<div className="grid gap-4 sm:grid-cols-2">
									<div className="space-y-2">
										<Label htmlFor="email">이메일 *</Label>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder="email@example.com"
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="phone">연락처 *</Label>
										<Input
											id="phone"
											name="phone"
											type="tel"
											placeholder="010-1234-5678"
											required
										/>
									</div>
								</div>

								<div className="grid gap-4 sm:grid-cols-2">
									<div className="space-y-2">
										<Label htmlFor="business-type">기업 구분 *</Label>
										<Select name="business-type" required>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="기업 유형을 선택하세요" />
											</SelectTrigger>
											<SelectContent>
												{businessTypes.map((type) => (
													<SelectItem key={type.value} value={type.value}>
														{type.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>
									<div className="space-y-2">
										<Label htmlFor="budget">예산 범위</Label>
										<Select name="budget">
											<SelectTrigger className="w-full">
												<SelectValue placeholder="예산 범위를 선택하세요" />
											</SelectTrigger>
											<SelectContent>
												{budgetRanges.map((range) => (
													<SelectItem key={range.value} value={range.value}>
														{range.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="website">웹사이트 URL</Label>
									<Input
										id="website"
										name="website"
										type="url"
										placeholder="https://example.com"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="message">문의 내용 *</Label>
									<Textarea
										id="message"
										name="message"
										placeholder="SEO 컨설팅 관련 문의사항을 자세히 작성해주세요."
										className="h-32"
										required
									/>
								</div>

								<Button type="submit" className="w-full">
									문의하기
								</Button>

								<p className="text-sm text-muted-foreground">
									* 표시된 항목은 필수 입력 사항입니다.
								</p>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</CommonLayout>
	);
}
