import Image from 'next/image';

import Content from './Content';

export default function Hero() {
	return (
		<section className='min-h-screen w-full'>
			<div className='mx-auto grid h-full w-full max-w-1400 grid-cols-1 justify-between gap-6 overflow-hidden p-5 md:justify-between lg:max-h-700 lg:grid-cols-2 lg:p-11'>
				<Content />
				<div className='h-full w-full'>
					<Image
						className='h-full max-h-600 w-full animate-fade-left object-contain object-right lg:max-w-600'
						src={'/assets/images/hero.png'}
						alt='illustration image'
						priority
						fetchPriority='high'
						width={823}
						height={523}
					/>
				</div>
			</div>
		</section>
	);
}
