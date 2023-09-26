import CallToAction from './CallToAction';

export default function Content() {
	return (
		<div className='flex h-full w-full flex-col justify-center lg:max-w-xl'>
			<h1 className='pb-5 text-sm uppercase text-primary-light md:pb-7 md:text-xl'>
				Hi, I am Wirayuda
			</h1>
			<h2 className=' z-0 w-fit py-[14px] text-3xl font-bold leading-normal text-black-200 dark:text-white sm:text-5xl lg:text-[64px]'>
				Professional{' '}
				<span className='relative whitespace-nowrap py-4 before:absolute before:bottom-[19px] before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary sm:before:bottom-7 sm:before:h-4 '>
					Web Developer
				</span>{' '}
				based in Bali
			</h2>
			<p className='text-xs text-white-500 dark:text-white sm:text-sm'>
				Transforming the web one line of code at a time: Crafting cutting-edge
				digital experiences with precision, passion, and a profound commitment
				to excellence
			</p>
			<CallToAction />
		</div>
	);
}
