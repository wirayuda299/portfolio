'use client';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';
import { useRef } from 'react';

export default function TestimonialTitle() {
	const ref = useRef<HTMLSpanElement>(null);
	useIntersectionObserver(ref, ['before:animate-increasing']);

	return (
		<h2 className='w-full text-center text-4xl font-bold dark:text-white md:text-5xl'>
			What{' '}
			<span
				ref={ref}
				className='relative z-[1] w-max before:absolute before:bottom-3 before:left-0 before:z-[-1] before:h-3 before:w-0 before:bg-secondary'
			>
				they say
			</span>{' '}
			about me
		</h2>
	);
}
