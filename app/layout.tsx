import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { CallToAction, Navbar } from '@/components/index';

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
				<main className='mx-auto max-w-[1400px] bg-white-800 p-5 text-black dark:bg-black-300'>
					<Navbar />
					{children}
					<CallToAction />
				</main>
			</body>
		</html>
	);
}
