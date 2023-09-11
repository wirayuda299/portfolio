import React from 'react';
import type { ReactNode } from 'react';

import { Footer, Navbar, CallToAction } from '../../components/index';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<main>
			<Navbar />
			{children}
			<CallToAction />
			<Footer />
		</main>
	);
}
