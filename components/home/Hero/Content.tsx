import Image from 'next/image';
import CallToAction from './CallToAction';

export default function Content() {
	return (
		<div className='flex size-full max-h-full flex-col justify-center lg:max-w-500'>
			<h1 className=' animate-fade-up text-sm uppercase text-primary-light dark:text-white md:pb-7 md:text-xl'>
				Hi, I am Wirayuda
			</h1>
			<h2 className='z-0 w-fit animate-fade-up pt-5 text-3xl font-bold text-black-200  dark:text-white sm:text-5xl xl:text-16'>
				Professional{' '}
				<span className='ease relative whitespace-nowrap py-3 transition-all duration-500 after:absolute after:bottom-4 after:left-0 after:z-[-1] after:h-3 after:w-0 after:animate-increasing after:bg-secondary md:after:h-5 lg:after:bottom-7'>
					Web Developer
				</span>{' '}
				based in Bali
				<Image
					alt='flower'
					src='/assets/images/flower.png'
					width={50}
					height={50}
					className='inline-block size-12 animate-fade-right object-contain lg:size-14'
				/>
			</h2>
			<p className='animate-fade-up pt-4 text-xs text-white-500 dark:text-white sm:text-sm'>
				Transforming the web one line of code at a time: Crafting cutting-edge
				digital experiences with precision, passion, and a profound commitment
				to excellence
			</p>
			<CallToAction />
		</div>
	);
}
