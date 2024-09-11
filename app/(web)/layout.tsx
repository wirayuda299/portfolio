import type { ReactNode } from 'react';

import { Footer, Navbar } from '@/components/index';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
    <>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
