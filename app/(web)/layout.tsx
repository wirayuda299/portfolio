import type { ReactNode } from 'react';

import { Footer, Navbar } from '../../components/index';
import { ThemeProvider } from '@/Provider/ThemeProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
			enableColorScheme
		>
			<Navbar />
			{children}
			<Footer />
		</ThemeProvider>
	);
}
