'use client';

import Image from 'next/image';
import { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';
import { jobLists } from '@/constant';

export default function Background() {
	const ref = useRef<HTMLDivElement>(null);

	useIntersectionObserver(ref, ['animate-fade-left']);

	return (
		<div className='flex flex-1 flex-col items-start p-5' ref={ref}>
			<div className='ease group flex w-full cursor-pointer  flex-row items-center justify-start gap-3 '>
				<Image
					className='ease block brightness-[10%] filter transition-colors duration-500 group-hover:filter-none dark:brightness-0 dark:grayscale-0 dark:invert'
					src={'/assets/jsm.png'}
					width={50}
					height={50}
					alt={'Javascript Mastery'}
				/>
				<div>
					<h3 className='text-base font-semibold dark:text-white lg:text-2xl'>
						Javascript Mastery
					</h3>
				</div>
			</div>
			<ul className='mt-5 flex list-disc flex-col items-start gap-3 pl-5 dark:text-white'>
				{jobLists.map((job) => (
					<li
						key={job}
						className='text-xs font-semibold  md:text-base lg:text-lg'
					>
						{job}
					</li>
				))}
			</ul>
		</div>
	);
}
