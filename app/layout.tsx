import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { Navbar } from '@/components/index';

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Personal website',
};

const poppins = Poppins({
	display: 'swap',
	subsets: ['latin'],
	fallback: ['sans-serif'],
	weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Navbar />
				<main className='max-w-[1470px] mx-auto p-5'>{children}</main>
			</body>
		</html>
	);
}
