export default function Content() {
	return (
		<div className='w-full h-full  '>
			<div className='w-full h-full flex flex-col justify-center md:max-w-lg'>
				<h1 className='text-primary-light text-sm md:text-xl uppercase pb-5 md:pb-7'>
					Hi, I am Wirayuda
				</h1>
				<h2 className='text-3xl sm:text-5xl lg:text-[64px] py-[14px] font-bold text-black-200 '>
					Professional <span className=''>Web Developer</span> based in USA{' '}
				</h2>
				<p className='text-xs text-white-500 sm:text-sm'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
					labore deleniti. Consectetur, voluptatem eaque? Cum laboriosam, illo
					odit est molestias eius maiores non, eos reiciendis accusamus nulla
					tempora incidunt ad!
				</p>
				<div className='py-5 flex flex-col gap-5'>
					<button className='bg-primary-light w-full h-12 text-white text-sm rounded-full'>
						My Work
					</button>
					<button
						title='Contact:wirayuda233@gmail.com'
						className='bg-white truncate w-full text-center h-12 rounded-full text-xs font-semibold text-white-500'
					>
						<a
							href='mailto:wirayuda233@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							Contact: Wirayuda233@gmail.com
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}
