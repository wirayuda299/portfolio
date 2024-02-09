'use client';

import Image from 'next/image';
import { useState } from 'react';

function StarFilledIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='18' height='16' fill='none'>
			<path
				fillRule='evenodd'
				d='M8.167.658a.9.9 0 0 1 .858-.629.9.9 0 0 1 .858.629l1.55 4.767h5a.91.91 0 0 1 .899.631.91.91 0 0 1-.366 1.036l-4.058 2.942 1.55 4.775a.9.9 0 0 1-.325 1.016.9.9 0 0 1-1.067-.008L9 12.842l-4.058 2.95a.9.9 0 0 1-1.067.008.9.9 0 0 1-.325-1.016l1.55-4.775-4.058-2.942a.91.91 0 0 1-.366-1.036.91.91 0 0 1 .899-.631h5L8.167.658z'
				fill='#fbad39'
			/>
		</svg>
	);
}

function Prev() {
	return (
		<svg
			className='dark:invert'
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
		>
			<path
				d='M19 12H5M5 12L12 19M5 12L12 5'
				stroke='#151E2C'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

function Next() {
	return (
		<svg
			className='dark:invert'
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
		>
			<path
				d='M5 12H19M19 12L12 5M19 12L12 19'
				stroke='#000'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export default function Content({ review }: { review: Review[] }) {
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	function handlePrev() {
		if (selectedIndex !== 0) {
			setSelectedIndex((prev) => prev - 1);
		} else {
			setSelectedIndex(review.length - 1);
		}
	}

	function handleNext() {
		if (selectedIndex === review.length - 1) {
			setSelectedIndex(0);
		} else {
			setSelectedIndex((prev) => prev + 1);
		}
	}

	return (
		<div className='relative mx-auto flex max-w-1400  justify-evenly  px-5 pt-16'>
			{review.length > 1 && (
				<button
					onClick={handlePrev}
					type='button'
					className='absolute left-0 top-1/2 flex size-10 items-center justify-center rounded-full bg-white dark:bg-[#151e2c] sm:left-3 '
				>
					<Prev />
				</button>
			)}
			<article
				key={review[selectedIndex]._id}
				className='mx-auto flex w-full animate-fade-up grid-cols-1 flex-wrap items-center  gap-6 transition-all duration-500 ease-in-out md:justify-center  md:py-16'
			>
				<Image
					className='aspect-square size-full max-h-500 rounded-lg object-cover md:max-h-400 md:max-w-450'
					src={review[selectedIndex].profile}
					width={400}
					height={400}
					alt='profile'
					loading='lazy'
					placeholder='blur'
					blurDataURL={review[selectedIndex].profile}
				/>
				<div className='max-w-450 md:min-h-400'>
					<div className='inline-flex gap-3'>
						{Array.from({ length: review[selectedIndex].star })
							.fill(review[selectedIndex].star)
							.map((_, i) => (
								<StarFilledIcon key={i} />
							))}
					</div>
					<p className='pt-4 text-justify text-sm font-normal leading-relaxed text-white-500 dark:text-white-800 lg:pt-4 lg:text-lg'>
						{review[selectedIndex].comments}
					</p>
					<h3 className='pt-8 text-base font-semibold capitalize text-black dark:text-white-800'>
						— {review[selectedIndex].name}
					</h3>
					<p className='text-xs font-normal capitalize text-white-500 dark:text-white-800'>
						{review[selectedIndex].role}
					</p>
				</div>
			</article>
			{review.length > 1 && (
				<button
					onClick={handleNext}
					type='button'
					className='absolute  right-0 top-1/2 flex size-10 items-center justify-center rounded-full bg-white dark:bg-[#151e2c] sm:right-3 '
				>
					<Next />
				</button>
			)}
		</div>
	);
}
