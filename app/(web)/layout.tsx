import type { ReactNode } from 'react';

import { Footer, Navbar, CallToAction } from '../../components/index';
import { ThemeProvider } from '@/Provider/ThemeProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
		>
			<Navbar />
			{children}
			<CallToAction />
			<Footer />
		</ThemeProvider>
	);
}
