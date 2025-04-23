import { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
	title: '블로그',
	description:
		'SEO 전문가의 시선으로 바라본 최신 디지털 마케팅 트렌드와 검색엔진 최적화 전략. 실용적인 SEO 팁과 성공 사례를 공유합니다.',
};

// 임시 데이터 - 실제로는 CMS나 데이터베이스에서 가져올 예정
const posts = [
	{
		id: 1,
		title: '2024년 SEO 트렌드: AI와 검색 알고리즘의 변화',
		description:
			'ChatGPT와 같은 AI 기술의 발전이 검색 엔진 최적화에 미치는 영향과 이에 대응하는 전략을 알아봅니다.',
		date: '2024-01-15',
		category: 'SEO 트렌드',
		imageUrl: '/images/blog/seo-trends-2024.jpg',
		readTime: '8분',
	},
	{
		id: 2,
		title: '기술 블로그 SEO 최적화 가이드',
		description:
			'개발자와 기술 회사를 위한 블로그 최적화 전략. 코드 블록과 기술 문서의 검색 노출을 높이는 방법을 소개합니다.',
		date: '2024-01-10',
		category: '테크니컬 SEO',
		imageUrl: '/images/blog/tech-blog-seo.jpg',
		readTime: '10분',
	},
	{
		id: 3,
		title: '구글 검색 성능 보고서 완벽 가이드',
		description:
			'구글 서치 콘솔의 검색 성능 보고서를 활용하여 웹사이트의 검색 노출을 개선하는 방법을 알아봅니다.',
		date: '2024-01-05',
		category: '데이터 분석',
		imageUrl: '/images/blog/search-console-guide.jpg',
		readTime: '12분',
	},
	{
		id: 4,
		title: 'E-커머스 제품 페이지 SEO 최적화',
		description:
			'전자상거래 웹사이트의 제품 페이지 최적화 전략. 제품 설명, 이미지, 리뷰 등의 최적화 방법을 다룹니다.',
		date: '2023-12-28',
		category: 'E-커머스',
		imageUrl: '/images/blog/ecommerce-seo.jpg',
		readTime: '9분',
	},
	{
		id: 5,
		title: '모바일 SEO: 페이지 속도 최적화',
		description:
			'모바일 사용자 경험을 개선하고 검색 순위를 높이기 위한 페이지 속도 최적화 기법을 소개합니다.',
		date: '2023-12-20',
		category: '모바일 SEO',
		imageUrl: '/images/blog/mobile-speed.jpg',
		readTime: '7분',
	},
];

const featuredPost = posts[0]; // 첫 번째 포스트를 featured로 사용

export default function Blog() {
	return (
		<Layout>
			<div className="flex flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto w-full max-w-7xl">
					<h1 className="mb-8 text-3xl font-bold sm:text-4xl">블로그</h1>

					{/* Featured Post */}
					<div className="mb-16">
						<Link
							href={`/blog/${featuredPost.id}`}
							className="group relative block overflow-hidden rounded-2xl bg-gray-100"
						>
							<div className="aspect-h-9 aspect-w-16 relative">
								<Image
									src={featuredPost.imageUrl}
									alt={featuredPost.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
							<div className="absolute bottom-0 p-6 sm:p-8">
								<div className="mb-2 flex items-center gap-3">
									<span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
										{featuredPost.category}
									</span>
									<span className="text-sm text-gray-300">
										{featuredPost.readTime} 읽기
									</span>
								</div>
								<h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
									{featuredPost.title}
								</h2>
								<p className="text-gray-300">{featuredPost.description}</p>
							</div>
						</Link>
					</div>

					{/* Posts Grid */}
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{posts.slice(1).map((post) => (
							<Link
								key={post.id}
								href={`/blog/${post.id}`}
								className="group block overflow-hidden rounded-lg bg-white transition-all hover:shadow-md"
							>
								<div className="aspect-h-9 aspect-w-16 relative">
									<Image
										src={post.imageUrl}
										alt={post.title}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
								<div className="p-6">
									<div className="mb-2 flex items-center gap-3">
										<span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
											{post.category}
										</span>
										<span className="text-sm text-muted-foreground">
											{post.readTime} 읽기
										</span>
									</div>
									<h3 className="mb-2 text-xl font-bold">{post.title}</h3>
									<p className="mb-4 text-muted-foreground">
										{post.description}
									</p>
									<time
										dateTime={post.date}
										className="text-sm text-muted-foreground"
									>
										{new Date(post.date).toLocaleDateString('ko-KR', {
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										})}
									</time>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
}
