import CallToAction from './CallToAction';

export default function Content() {
	return (
		<div className='w-full h-full  '>
			<div className='w-full h-full flex flex-col justify-center md:max-w-lg'>
				<h1 className='text-primary-light text-sm md:text-xl uppercase pb-5 md:pb-7'>
					Hi, I am Wirayuda
				</h1>
				<h2 className='text-3xl w-fit z-0 sm:text-5xl lg:text-[64px] py-[14px] relative font-bold text-black-200 dark:text-white'>
					Professional{' '}
					<div className='py-3 whitespace-nowrap after:absolute after:bg-secondary after:h-5 after:w-full after:left-0 after:bottom-[53px] sm:after:bottom-16 lg:after:bottom-[84px] after:z-[-1]'>
						Web Developer
					</div>{' '}
					based in Bali
				</h2>
				<p className='text-xs text-white-500 sm:text-sm dark:text-white'>
					Transforming the web one line of code at a time: Crafting cutting-edge
					digital experiences with precision, passion, and a profound commitment
					to excellence
				</p>
				<CallToAction />
			</div>
		</div>
	);
}
