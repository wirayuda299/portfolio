import Image from 'next/image';

import Content from './Content';

export default function Hero() {
	return (
		<section className='min-h-screen w-full'>
			<div className='mx-auto grid size-full max-w-1400 grid-cols-1 justify-between gap-6 overflow-hidden p-5 md:justify-between lg:max-h-750 lg:grid-cols-2 lg:p-10'>
				<Content />
				<div className='size-full'>
					<Image
						className='	size-full animate-fade-left object-cover object-center md2:max-h-750 lg:max-w-600 xl:object-contain xl:pt-5'
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
