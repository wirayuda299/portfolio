import Image from 'next/image';

import { jobLists } from '@/constant';
const importantKeywords = [
	'git for version control',
	'asana',
	'full-stack',
	'team meetings',
	'mentors',
	'frontend',
	'high-quality',
	'skill enhancement',
	'challenges',
	'goals',
];
const highlightRegex = () =>
	new RegExp(`\\b(${importantKeywords.join('|')})\\b`, 'gi');

const highlightKeywords = (text: string) => {
	return text.split(highlightRegex()).map((part) => {
		const isInclude = importantKeywords.includes(part.toLowerCase());
		return isInclude ? (
			<span
				key={part}
				className='relative inline-block w-max font-bold text-secondary before:absolute before:bottom-1 before:left-0 before:z-[-1] before:h-3  before:w-1/2 '
			>
				{part}
			</span>
		) : (
			part
		);
	});
};

export default function Background() {
	return (
		<div className='flex flex-1 flex-col items-start'>
			<div className='ease group flex w-full cursor-pointer flex-row items-center justify-start gap-3 '>
				<Image
					className='ease block object-contain brightness-[10%] filter transition-colors duration-500 group-hover:filter-none dark:brightness-0 dark:grayscale-0 dark:invert'
					src={'/assets/jsm.png'}
					width={50}
					loading='lazy'
					height={50}
					alt={'Javascript Mastery'}
				/>
				<div>
					<h3 className='text-base font-semibold dark:text-white lg:text-2xl'>
						Javascript Mastery
					</h3>
					<p className='text-xs font-medium uppercase dark:text-white'>
						1 July 2023 - Now
					</p>
				</div>
			</div>
			<ul className='mt-5 flex list-disc flex-col items-start gap-8 pl-5 dark:text-white'>
				{jobLists.map((job) => (
					<li
						key={job}
						className='text-xs text-black dark:text-slate-200 md:text-base '
					>
						{highlightKeywords(job)}
					</li>
				))}
			</ul>
		</div>
	);
}
