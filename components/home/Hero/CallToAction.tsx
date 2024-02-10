'use client';

import Link from 'next/link';
import { CheckIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { copyText } from '@/utils/copy';

function CopyIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' fill='none'>
			<path
				d='M5.2 11.3H3.8a1.4 1.4 0 0 1-1.4-1.4V4.3a1.4 1.4 0 0 1 1.4-1.4h5.6a1.4 1.4 0 0 1 1.4 1.4v1.4m-4.2 8.4h5.6a1.4 1.4 0 0 0 1.4-1.4V7.1a1.4 1.4 0 0 0-1.4-1.4H6.6a1.4 1.4 0 0 0-1.4 1.4v5.6a1.4 1.4 0 0 0 1.4 1.4z'
				stroke='#ffbe62'
			/>
		</svg>
	);
}

export default function CallToAction() {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleCLick = () => {
		setIsChecked(true);
		copyText('wirayuda233@gmail.com');
		setTimeout(() => setIsChecked(false), 2000);
	};

	return (
		<div className='flex flex-col gap-5 pt-8 md:flex-row'>
			<Link
				href={'/case-studies'}
				className='flex h-12 w-full min-w-200 animate-fade-right items-center justify-center rounded-full bg-primary-light text-center text-sm text-white  dark:bg-primary-dark'
			>
				My Work
			</Link>
			<div className='flex h-12 w-full min-w-250 animate-fade-right items-center justify-center gap-3 truncate rounded-full bg-white py-5 text-center text-white-500 hover:bg-white-800 dark:bg-black-200 dark:text-white dark:hover:bg-black-300 max-lg:min-w-250 lg:px-2'>
				<a
					href='mailto:wirayuda233@gmail.com'
					target='_blank'
					className='inline-block text-xs font-medium '
				>
					wirayuda233@gmail.com
				</a>
				<button
					title='copy'
					aria-label='copy'
					name='check'
					disabled={isChecked}
					aria-disabled={isChecked}
					onClick={handleCLick}
				>
					{isChecked ? (
						<CheckIcon color='#FFBE62' className='size-5' />
					) : (
						<CopyIcon />
					)}
				</button>
			</div>
		</div>
	);
}
