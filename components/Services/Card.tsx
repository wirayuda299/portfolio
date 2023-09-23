'use client';
import { useRef, useState } from 'react';
import CardImage from './CardImage';
import useIntersectionObserver from '@/hooks/useInterSectionObserver';

type ServiceCardProps = {
	title: string;
	darkIcon: string;
	lightIcon: string;
	text: string;
	index: number;
};

export default function ServiceCard({
	title,
	darkIcon,
	lightIcon,
	text,
	index,
}: ServiceCardProps) {
	const [isHover, setIsHover] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement>(null);

	const stylesOdd = ['animate-fade-left', 'animate-once', 'md:animate-fade-up'];
	const styleven = ['animate-fade-right', 'animate-once', 'md:animate-fade-up'];

	useIntersectionObserver(ref, index % 2 !== 0 ? stylesOdd : styleven);

	return (
		<div
			ref={ref}
			className='ease group mx-auto aspect-square w-80 rounded-lg bg-white-800 px-5 py-7 opacity-0 shadow-lg transition-all duration-500 hover:translate-y-10 hover:bg-primary-light dark:bg-black-200 dark:shadow-[#1F2E48] dark:hover:bg-primary-dark hover:dark:shadow-primary-dark sm:w-72'
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<CardImage
				isHover={isHover}
				darkIcon={darkIcon}
				lightIcon={lightIcon}
				title={title}
			/>
			<h3 className='dar pt-9 text-2xl font-semibold text-black group-hover:text-white dark:text-white-800'>
				{title}
			</h3>
			<p className='pt-[10px] text-sm group-hover:text-white dark:text-white'>
				{text}
			</p>
		</div>
	);
}
