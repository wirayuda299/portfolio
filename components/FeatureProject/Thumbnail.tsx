'use client';

import Image from 'next/image';
import type { Image as SanityImage } from 'sanity';

import { urlForImage } from '@/sanity/lib/image';
import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useInterSectionObserver';

type ThumbnailProps = {
	thumbnail: SanityImage;
	title: string;
};

export default function Thumbnail({ title, thumbnail }: ThumbnailProps) {
	const ref = useRef<HTMLImageElement>(null);

	useIntersectionObserver(
		ref,
		title === 'Morrent' ? ['animate-fade-left'] : ['animate-fade-right']
	);

	return (
		<Image
			ref={ref}
			src={urlForImage(thumbnail).url()}
			width={800}
			priority
			className={`opacity-0 ${
				title === 'Morrent' ? 'lg:order-1 lg:-ml-12 ' : 'order-2 lg:ml-8'
			} object-cover object-center`}
			height={800}
			alt='Morent'
		/>
	);
}
