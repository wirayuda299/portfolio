import './globals.css';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	metadataBase: new URL('https://wirayuda.vercel.app'),
	title: {
		template:
			'%s - React Developer - Wirayuda',
		default:
			'- React Developer - Wirayuda',
		absolute: '',
	},
	description:
		'Looking for a skilled React developer? Wirayuda offers expert web development services tailored to your needs. Contact us today for top-notch solutions!',
	keywords: [
		'React developer ',
		'javascript',
		'front end development',
		'bali tech community',
		'react js',
		'web development ',
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
		'React development ',
		' React developer',
		'wira',
		'wirayuda',
		'bali',
		'Full-stack developer ',
		'React Native development Indonesia',
		'Single-page applications ',
		'Cross-platform development ',
		'E-commerce website developer ',
		'Progressive web apps Indonesia',
		' tech solutions',
		'User interface design ',
		'Web development company Indonesia',
		'Agile software development ',
		'Modern web design ',
		'Custom software solutions Indonesia',
		'Frontend optimization ',
		'SEO-friendly web development ',
		'Code optimization services Indonesia',
		'Frontend development Indonesia',
		'UI/UX design ',
		'Web development services ',
		'JavaScript developer ',
		'Responsive web design Indonesia',
		'React.js consulting ',
		' software development',
		'Web app development ',
		'Best React developers Indonesia',
		'Hire React developer ',
		'Custom web solutions ',
		'Mobile-friendly web development ',
		'Professional React development ',
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
	category: 'Web Development',
};

const poppins = Poppins({
	subsets: ['latin'],
	fallback: ['sans-serif'],
  preload:false,
	weight: ['400', '600'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={cn(' text-white bg-black-300', poppins.className)}
			>
				<Toaster />
				<main className='size-full select-none'>{children}</main>
			</body>
		</html>
	);
}
