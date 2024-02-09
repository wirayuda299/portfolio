import { CallToAction } from '@/components/index';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			{children}
			<CallToAction />
		</>
	);
}
