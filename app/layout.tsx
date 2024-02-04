import './globals.css';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';

import { Toaster } from '@/components/ui/toaster';
import { ourFileRouter } from './api/uploadthing/core';

export const metadata: Metadata = {
	metadataBase: new URL('https://wirayuda.vercel.app'),
	title: 'Home | Wirayuda',
	description: 'React developer who translate code into high quality website',
	keywords: [
		'react developer',
		'frontend developer',
		'portfolio',
		'nextjs developer',
		'indonesia',
		'bali',
		'front end developer',
		'web developer',
		'seo',
		'expert',
		'web builder',
		'web developer service',
		'React development Bali',
		'Bali React developer',
		'wira',
		'wirayuda',
		'bali',
		'Full-stack developer Bali',
		'React Native development Indonesia',
		'Single-page applications Bali',
		'Cross-platform development Bali',
		'E-commerce website developer Bali',
		'Progressive web apps Indonesia',
		'Bali tech solutions',
		'User interface design Bali',
		'Web development company Indonesia',
		'Agile software development Bali',
		'Modern web design Bali',
		'Custom software solutions Indonesia',
		'Frontend optimization Bali',
		'SEO-friendly web development Bali',
		'Code optimization services Indonesia',
		'Frontend development Indonesia',
		'UI/UX design Bali',
		'Web development services Bali',
		'JavaScript developer Bali',
		'Responsive web design Indonesia',
		'React.js consulting Bali',
		'Bali software development',
		'Web app development Bali',
		'Best React developers Indonesia',
		'Hire React developer Bali',
		'Custom web solutions Bali',
		'Mobile-friendly web development Bali',
		'Professional React development Bali',
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
				<main className='size-full select-none'>{children}</main>
				<NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
			</body>
		</html>
	);
}
