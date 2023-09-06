import Image from 'next/image';

import Content from './Content';

export default function Hero() {
	return (
		<section className='grid grid-cols-1 gap-6 w-full md:grid-cols-2 justify-between p-5 h-full'>
			<Content />
			<div className=' w-full h-full max-w-xl'>
				<Image
					width={1000}
					height={500}
					className=' h-full object-center object-contain'
					src={'/assets/images/illustration.png'}
					alt='illustration image'
					priority
				/>
			</div>
		</section>
	);
}
