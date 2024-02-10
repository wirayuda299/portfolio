'use client';

import dynamic from 'next/dynamic';

import config from '@/sanity.config';

const NextStudio = dynamic(() =>
	import('next-sanity/studio').then((mod) => mod.NextStudio)
);
export default function StudioPage() {
	return <NextStudio config={config} />;
}
