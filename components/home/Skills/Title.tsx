'use client';

import { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';

export default function Title() {
	const ref = useRef<HTMLSpanElement | null>(null);
	useIntersectionObserver(ref, 'before:animate-increasing');

	return (
		<h2 className='py-3 text-center text-4xl font-bold dark:text-white md:text-5xl'>
			<span
				ref={ref}
				className='relative z-0 before:absolute before:bottom-1 before:z-[-1] before:h-3 before:w-0 before:bg-secondary md:before:h-4 '
			>
				My Skills
			</span>
		</h2>
	);
}
