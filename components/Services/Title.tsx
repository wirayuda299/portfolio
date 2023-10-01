'use client';

import { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';

export default function Title() {
	const ref = useRef<HTMLSpanElement>(null);

	useIntersectionObserver(ref, ['before:animate-increasing']);

	return (
		<h2 className='  flex w-full flex-wrap justify-center gap-2 space-x-2 px-2 text-center text-4xl font-bold dark:text-white-800 md:text-5xl'>
			What
			<span
				ref={ref}
				className='relative bottom-0 z-0 whitespace-nowrap before:absolute  before:bottom-0 before:left-0 before:z-[-1] before:h-3 before:w-0 before:bg-secondary'
			>
				service
			</span>
			do I provide
		</h2>
	);
}
