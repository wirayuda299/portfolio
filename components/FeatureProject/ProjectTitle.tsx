'use client';

import { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';

type FeatureProjectTitleProps = {
	title: string;
	subTitle: string;
};

export default function ProjectTitle({
	title,
	subTitle,
}: FeatureProjectTitleProps) {
	const ref = useRef<HTMLHeadingElement>(null);
	useIntersectionObserver(ref, ['animate-fade-up']);

	return (
		<h3
			ref={ref}
			className='w-fit pt-6 text-3xl font-bold capitalize text-white opacity-0 animate-once md:text-4xl lg:px-4 lg:text-5xl'
		>
			{title} - <span className='capitalize'>{subTitle}</span>
		</h3>
	);
}
