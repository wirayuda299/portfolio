'use client';

import { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';

type ServiceCardProps = {
	title: string;
	lightIcon: JSX.Element;
	text: string;
};

export default function ServiceCard({
	title,
	lightIcon,
	text,
}: ServiceCardProps) {
	const ref = useRef<HTMLDivElement>(null);

	useIntersectionObserver(ref, 'animate-fade-up');

	return (
		<div
			ref={ref}
			className='group opacity-0 transition-all duration-500 ease-in-out'
		>
			<div className='ease group mx-auto aspect-square w-80 rounded-lg bg-white-800 px-5 py-7 shadow-md transition-all duration-500 hover:translate-y-10  hover:bg-primary-light dark:bg-black-200 dark:shadow-light-blue dark:hover:bg-primary-dark dark:hover:shadow-lg hover:dark:shadow-primary-dark sm:w-72'>
				<div className='flex size-14 items-center justify-center rounded-lg group-hover:brightness-0 group-hover:invert'>
					{lightIcon}
				</div>
				<h3 className='pt-9 text-2xl font-semibold text-black group-hover:text-white dark:text-white-800'>
					{title}
				</h3>
				<p className='pt-4 text-sm group-hover:text-white dark:text-white'>
					{text}
				</p>
			</div>
		</div>
	);
}
