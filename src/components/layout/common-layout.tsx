import { Header } from './tmp-header';
import { Footer } from './tmp-footer';

interface LayoutProps {
	children: React.ReactNode;
}

export const CommonLayout = ({ children }: LayoutProps) => {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
};
