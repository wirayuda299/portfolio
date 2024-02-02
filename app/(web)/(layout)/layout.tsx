import { CallToAction } from '@/components/index';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className='w-full'>
			{children}
			<CallToAction />
		</div>
	);
}
