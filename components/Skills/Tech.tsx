'use client';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';
import Image from 'next/image';
import { useRef } from 'react';

type TechIconProps = {
	label: string;
	lightIcon: string;
	delay: number;
};

export default function TechIcon({ label, lightIcon, delay }: TechIconProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	useIntersectionObserver(ref, ['animate-fade-up']);

	return (
		<div
			ref={ref}
			style={{
				animationDelay: `${delay * 100}ms`,
			}}
			title={label}
			className={`ease bg-white-800 dark:bg-black-200 flex  h-[53px] w-[53px] items-center justify-center rounded-full opacity-0 grayscale filter transition-all  duration-500 hover:shadow-lg hover:filter-none dark:bg-opacity-30 md:h-24 md:w-24`}
		>
			<Image
				className={`ease h-10 w-10  p-1  md:h-14 md:w-14 md:p-0`}
				src={lightIcon}
				width={55}
				height={55}
				alt={label}
			/>
		</div>
	);
}
