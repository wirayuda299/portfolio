import Image from 'next/image';

import Content from './Content';

export default function Hero() {
	return (
		<section className='grid h-full w-full grid-cols-1 justify-between gap-6 p-5 md:grid-cols-2'>
			<Content />
			<div className=' h-full w-full max-w-xl'>
				<Image
					width={1000}
					height={500}
					className=' h-full object-contain object-center'
					src={'/assets/images/illustration.png'}
					alt='illustration image'
					priority
				/>
			</div>
		</section>
	);
}
