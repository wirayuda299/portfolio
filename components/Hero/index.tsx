import Image from 'next/image';

import Content from './Content';

export default function Hero() {
	return (
		<section className='mx-auto grid h-full w-full max-w-1400 grid-cols-1 items-center justify-between gap-6 p-5 md:justify-between lg:h-screen lg:max-h-600 lg:grid-cols-2 lg:p-11'>
			<Content />
			<div className='h-full w-full'>
				<Image
					className='h-full max-h-600 w-full animate-fade-left object-contain object-right animate-once lg:max-w-600'
					src={'/assets/images/hero.png'}
					alt='illustration image'
					priority
					fetchPriority='high'
					width={500}
					height={500}
				/>
			</div>
		</section>
	);
}
