export default function Card() {
	return (
		<div className='justify-center-center flex aspect-square max-h-[500px] w-full flex-col rounded-lg bg-black p-12 text-white dark:bg-white dark:text-black sm:p-24 md:h-full md:p-16 lg:p-24'>
			<h2 className='relative z-[1] w-max text-4xl font-bold sm:text-5xl'>
				Work{' '}
				<span className='block before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-4 before:!w-1/2 before:bg-secondary'>
					Experience
				</span>
			</h2>
			<p className='pt-6 text-sm font-normal sm:text-base'>
				Progress and milestones: A simple walkthrough of roles, projects, and
				achievements in my career.
			</p>
			<div className='flex items-center pt-10'>
				<hr className='h-2 w-full ' />
				<div className='rounded-full ring-1 ring-white dark:ring-black'>
					<div className='m-2 h-8 w-8  rounded-full bg-white dark:bg-black'></div>
				</div>
			</div>
		</div>
	);
}
