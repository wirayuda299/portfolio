'use client';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';
import { useRef } from 'react';

export default function FeatureProjectTitle() {
	const ref = useRef<HTMLSpanElement>(null);

	useIntersectionObserver(ref, ['before:animate-increasing']);

	return (
		<div className='w-full text-center'>
			<h2 className=' w-full text-4xl font-bold text-black dark:text-white md:text-5xl'>
				Featured{' '}
				<span
					ref={ref}
					className='relative z-[1] inline-block w-max before:absolute before:bottom-2 before:left-0 before:z-[-1] before:h-3 before:w-0 before:bg-secondary'
				>
					Projects
				</span>
			</h2>
		</div>
	);
}
