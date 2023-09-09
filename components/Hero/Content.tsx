import CallToAction from './CallToAction';

export default function Content() {
	return (
		<div className='h-full w-full  '>
			<div className='flex h-full w-full flex-col justify-center md:max-w-lg'>
				<h1 className='pb-5 text-sm uppercase text-primary-light md:pb-7 md:text-xl'>
					Hi, I am Wirayuda
				</h1>
				<h2 className=' z-0 w-fit py-[14px] text-3xl font-bold text-black-200 dark:text-white sm:text-5xl lg:text-[64px]'>
					Professional{' '}
					<div className='relative whitespace-nowrap py-3 after:absolute after:bottom-4 after:left-0 after:z-[-1] after:h-3 after:w-full after:bg-secondary md:after:h-5 '>
						Web Developer
					</div>{' '}
					based in Bali
				</h2>
				<p className='text-xs text-white-500 dark:text-white sm:text-sm'>
					Transforming the web one line of code at a time: Crafting cutting-edge
					digital experiences with precision, passion, and a profound commitment
					to excellence
				</p>
				<CallToAction />
			</div>
		</div>
	);
}
