'use client';

import Image from 'next/image';
import { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';

type TechIconProps = {
	label: string;
	lightIcon: string;
	delay: number;
};

export default function TechIcon({ label, lightIcon, delay }: TechIconProps) {
	const ref = useRef<HTMLDivElement | null>(null);
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
			<Image
				className={`ease size-12 p-1 group-hover:animate-pulse md:size-14 md:p-0`}
				src={lightIcon}
				width={55}
				priority
				height={55}
				alt={label}
			/>
		</div>
	);
}
