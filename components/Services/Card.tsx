'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';

type ServiceCardProps = {
	title: string;
	lightIcon: string;
	text: string;
	index: number;
};

export default function ServiceCard({
	title,
	lightIcon,
	text,
	index,
}: ServiceCardProps) {
	const ref = useRef<HTMLDivElement>(null);

	const stylesOdd = ['animate-fade-left', 'md:animate-fade-up'];
	const styleven = ['animate-fade-right', 'md:animate-fade-up'];

	useIntersectionObserver(ref, index % 2 !== 0 ? stylesOdd : styleven);

	return (
		<div
			ref={ref}
			className='ease group mx-auto aspect-square w-80 rounded-lg bg-white-800 px-5 py-7 opacity-0 shadow-md transition-all duration-500 hover:animate-down hover:bg-primary-light dark:bg-black-200 dark:shadow-light-blue dark:hover:bg-primary-dark dark:hover:shadow-lg hover:dark:shadow-primary-dark sm:w-72'
		>
			<div className=' flex h-16 w-16 items-center rounded-md bg-primary-light p-3 shadow-lg group-hover:bg-white'>
				<Image
					className='mx-auto aspect-auto h-8 w-8 object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 dark:group-hover:brightness-200'
					src={lightIcon}
					width={50}
					height={50}
					alt={title}
				/>
			</div>
			<h3 className='pt-9 text-2xl font-semibold text-black group-hover:text-white dark:text-white-800'>
				{title}
			</h3>
			<p className='pt-10 text-sm group-hover:text-white dark:text-white'>
				{text}
			</p>
		</div>
	);
}
