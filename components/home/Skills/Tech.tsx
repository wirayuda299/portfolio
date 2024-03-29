'use client';

import { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';

type TechIconProps = {
	label: string;
	lightIcon: JSX.Element;
	delay: number;
};

export default function TechIcon({ label, lightIcon, delay }: TechIconProps) {
	const ref = useRef(null);
	useIntersectionObserver(ref, 'animate-fade-up');

	return (
		<div
			ref={ref}
			style={{
				animationDelay: `${delay * 100}ms`,
			}}
			title={label}
			className='ease group flex size-14 items-center justify-center rounded-full bg-white-800 opacity-0 grayscale filter transition-all duration-500 hover:shadow-lg hover:filter-none dark:bg-black-200 dark:bg-opacity-30 md:size-24'
		>
			{lightIcon}
		</div>
	);
}
