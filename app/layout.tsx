import './globals.css';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';

import { Toaster } from '@/components/ui/toaster';
import { ourFileRouter } from './api/uploadthing/core';

export const metadata: Metadata = {
	title: 'Home | Wirayuda',
	description: 'React developer who translate code into high quality website',
	keywords: [
		'react developer',
		'frontend developer',
		'portfolio',
		'nextjs developer',
		'indonesia',
		'bali',
	],
	creator: 'wirayuda',
	referrer: 'origin-when-cross-origin',
	robots: {
		follow: true,
		index: true,
		notranslate: true,
	},
	authors: [
		{ name: 'Wirayuda' },
		{ name: 'Wirayuda', url: 'https://wirayuda.vercel.app' },
	],
	colorScheme: 'dark',
	publisher: 'Wirayuda',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},

	category: 'technology',
};

const poppins = Poppins({
	display: 'swap',
	subsets: ['latin'],
	preload: true,
	fallback: ['sans-serif'],
	weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={`bg-white-800 text-black dark:bg-black-300 ${poppins.className}`}
			>
				<Toaster />
				<main className='h-full w-full select-none'>{children}</main>
				<NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
			</body>
		</html>
	);
}
