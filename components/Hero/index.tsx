import Image from 'next/image';

import Content from './Content';

export default function Hero() {
	return (
		<section className='max-w-1400 mx-auto grid h-full w-full grid-cols-1 items-center justify-between  gap-6 p-5  md:justify-between lg:max-h-[600px] lg:grid-cols-2  lg:p-10'>
			<Content />
			<div className=' h-full w-full '>
				<Image
					className='animate-fade-left animate-once lg:max-w-600 h-full max-h-[500px] w-full object-contain object-right md:object-fill'
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
