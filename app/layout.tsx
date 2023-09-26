import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';

import { Toaster } from '@/components/ui/toaster';
import { ourFileRouter } from './api/uploadthing/core';
import './globals.css';

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Personal website',
};
export const dynamic = 'force-dynamic';

const poppins = Poppins({
	display: 'swap',
	subsets: ['latin'],
	fallback: ['sans-serif'],
	weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={`bg-white-800 dark:bg-black-300 text-black ${poppins.className}`}
			>
				<Toaster />
				<main className='h-full w-full'>{children}</main>
				<NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
			</body>
		</html>
	);
}
