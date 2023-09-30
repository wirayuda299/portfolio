'use client';

import Image from 'next/image';

import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useInterSectionObserver';

type ThumbnailProps = {
	thumbnail: string;
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
			src={thumbnail}
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
