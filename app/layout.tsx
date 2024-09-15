import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Toaster } from "@/components/ui/sonner"
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    template: '%s - React Developer - Wirayuda',
    default: 'React Developer - Wirayuda',
  },
  openGraph: {
    title: 'Personal portfolio website',
    siteName: 'wirayuda',
    url: new URL('https://wirayuda.vercel.app')
  },
  description:
    'Looking for a skilled React developer? Wirayuda offers expert web development services tailored to your needs. Contact us today for top-notch solutions!',
  keywords: [
    'React developer', 'JavaScript', 'front-end development', 'web development',
    'Tech community', 'portfolio', 'Next.js developer', 'Indonesia',
    'SEO', 'UI/UX design', 'custom software solutions', 'progressive web apps',
    'agile software development', 'responsive web design', 'mobile-friendly web development',
    'React.js consulting', 'frontend optimization', 'JavaScript developer'
  ],
  creator: 'Wirayuda',
  referrer: 'origin-when-cross-origin',
  robots: {
    follow: true,
    index: true,
    notranslate: true,
  },
  authors: [
    { name: 'Wirayuda', url: 'https://wirayuda.vercel.app' },
  ],
  publisher: 'Wirayuda',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://wirayuda.vercel.app'),
  category: 'Web Development',
};

const poppins = Poppins({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  preload: true,
  weight: ['400', '600'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('text-white bg-black-300', poppins.className)}>
        <Toaster />
        <main className="size-full select-none">{children}</main>
      </body>
    </html>
  );
}

