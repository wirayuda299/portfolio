'use client';

import Link from 'next/link';
import { CheckIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { copyText } from '@/utils/copy';

function CopyIcon() {
	return (
		<svg
			width='16'
			height='17'
			viewBox='0 0 16 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M5.20002 11.3H3.80002C3.02682 11.3 2.40002 10.6732 2.40002 9.90002V4.30002C2.40002 3.52682 3.02682 2.90002 3.80002 2.90002H9.40002C10.1732 2.90002 10.8 3.52682 10.8 4.30002V5.70002M6.60002 14.1H12.2C12.9732 14.1 13.6 13.4732 13.6 12.7V7.10002C13.6 6.32682 12.9732 5.70002 12.2 5.70002H6.60002C5.82682 5.70002 5.20002 6.32682 5.20002 7.10002V12.7C5.20002 13.4732 5.82682 14.1 6.60002 14.1Z'
				stroke='#FFBE62'
				strokeWidth='1.1275'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export default function CallToAction() {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleCLick = () => {
		copyText('wirayuda233@gmail.com');
		setIsChecked(true);

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
					name='check icon'
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
