import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import './globals.css';
import { Navbar } from '@/components/index';

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Personal website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
