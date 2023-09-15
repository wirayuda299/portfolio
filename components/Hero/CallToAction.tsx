'use client';

import Image from 'next/image';

import { Button } from '../ui/button';
import { copyText } from '@/utils/copy';

export default function CallToAction() {
	return (
		<div className='flex flex-col gap-5 py-5 md:flex-row'>
			<Button
				variant='primary'
				className=' h-12 w-full min-w-[150px] rounded-full text-sm text-white'
			>
				My Work
			</Button>
			<Button
				variant='contact'
				title='wirayuda233@gmail.com'
				className='h-12 w-full rounded-full text-center '
				onClick={() => copyText('wirayuda233@gmail.com')}
			>
				<p className='flex w-full items-center justify-center gap-x-5 px-5 text-xs'>
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
