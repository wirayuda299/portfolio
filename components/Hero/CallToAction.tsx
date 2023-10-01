'use client';

import Image from 'next/image';

import { Button } from '../ui/button';
import { copyText } from '@/utils/copy';
import Link from 'next/link';

export default function CallToAction() {
	return (
		<div className='flex flex-col gap-5 pt-5 md:flex-row'>
			<Link
				href={'/case-studies'}
				className=' flex h-12 w-full min-w-[150px] animate-fade-right items-center justify-center rounded-full bg-primary-light text-center text-sm text-white animate-once dark:bg-primary-dark'
			>
				My Work
			</Link>
			<Button
				variant='contact'
				title='wirayuda233@gmail.com'
				className='h-12 w-full animate-fade-right rounded-full text-center animate-once'
				onClick={() => copyText('wirayuda233@gmail.com')}
			>
				<p className='flex w-full items-center justify-center gap-x-5 px-5 text-xs md:w-56'>
					wirayuda233@gmail.com
					<Image
						className='h-5 w-5'
						src='/assets/icons/copy.svg'
						width={40}
						height={40}
						alt='copy icon'
					/>
				</p>
			</Button>
		</div>
	);
}
