import Image from 'next/image';

import { Button } from '../ui/button';

export default function CallToAction() {
	return (
		<div className='py-5 flex flex-col gap-5 md:flex-row'>
			<Button
				variant='primary'
				className=' w-full min-w-[150px] h-12 text-white text-sm rounded-full'
			>
				My Work
			</Button>
			<Button
				variant='contact'
				title='Contact:wirayuda233@gmail.com'
				className='w-full text-center h-12 rounded-full '
			>
				<a
					className='flex text-xs justify-center items-center gap-x-5 px-5 w-full'
					href='mailto:wirayuda233@gmail.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					wirayuda233@gmail.com
					<Image
						className='w-5 h-5'
						src='/assets/icons/copy.svg'
						width={40}
						height={40}
						alt='copy icon'
					/>
				</a>
			</Button>
		</div>
	);
}
