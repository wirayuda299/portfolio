import Image from 'next/image';

export default function Design() {
	return (
		<section className=' mx-auto max-w-[1400px]'>
			<div className='bg-primary-light py-4 dark:bg-primary-dark '>
				<h2 className='text-center text-sm font-semibold uppercase text-white lg:text-3xl'>
					High-Fidelity Figma Design
				</h2>
			</div>
			<div className='relative min-h-[500px] w-full'>
				<Image
					fill
					className='object-cover'
					src={'/assets/images/design.png'}
					alt='figma design image'
				/>
			</div>
		</section>
	);
}
