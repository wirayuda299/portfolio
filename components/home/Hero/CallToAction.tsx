'use client';

import Link from 'next/link';
import { CheckIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import Image from 'next/image';

import { copyText } from '@/utils/copy';

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
				<button onClick={handleCLick}>
					{isChecked ? (
						<CheckIcon color='#FFBE62' className='size-5' />
					) : (
						<Image
							className='w-5 object-contain'
							src={'/assets/icons/copy.svg'}
							alt='copy icon'
							width={40}
							height={40}
							priority
						/>
					)}
				</button>
			</div>
		</div>
	);
}
