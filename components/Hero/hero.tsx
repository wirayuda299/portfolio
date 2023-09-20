import Image from 'next/image';

import Content from './Content';

export default function Hero() {
	return (
		<section className='mx-auto grid h-full w-full max-w-1400 grid-cols-1 justify-between gap-6 p-5 md:grid-cols-2 lg:p-10'>
			<Content />
			<div className=' h-full w-full max-w-xl'>
				<Image
					width={500}
					height={500}
					className='h-full w-full object-contain object-center'
					src={'/assets/images/hero.png'}
					alt='illustration image'
					priority
					fetchPriority='high'
				/>
			</div>
		</section>
	);
}
