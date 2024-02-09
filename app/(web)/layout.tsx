import type { ReactNode } from 'react';

import { Footer, Navbar } from '@/components/index';
import { ThemeProvider } from '@/Provider/ThemeProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='light'
			enableSystem={false}
			disableTransitionOnChange
			themes={['dark', 'light']}
		>
			<Navbar />
			{children}
			<Footer />
		</ThemeProvider>
	);
}
