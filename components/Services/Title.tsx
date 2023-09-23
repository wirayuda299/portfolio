'use client';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';
import { useRef } from 'react';

export default function Title() {
	const ref = useRef<HTMLSpanElement>(null);

	useIntersectionObserver(ref, ['before:animate-increasing']);

	return (
		<h2 className='relative z-0 w-full px-1 text-center text-4xl font-bold dark:text-white-800 lg:text-5xl'>
			What{' '}
			<span
				ref={ref}
				className='relative whitespace-nowrap before:absolute before:bottom-2 before:left-0 before:z-[-1] before:h-3 before:w-0 before:bg-secondary md:before:h-4 lg:before:bottom-3  '
			>
				service
			</span>{' '}
			do I provide
		</h2>
	);
}
