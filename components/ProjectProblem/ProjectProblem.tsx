import Image from 'next/image';

export default function ProjectProblem() {
	return (
		<section className='mt-10 h-full w-full  bg-white dark:bg-black-200'>
			<div className='mx-auto mt-7 flex max-w-[600px] flex-col gap-5 px-9 py-10 sm:px-3'>
				<p className='text-sm font-semibold text-primary-light'>Problem</p>
				<h2 className='text-lg font-semibold dark:text-white'>
					Problem Statement
				</h2>
				<p className='py-6 text-sm text-white-500 dark:text-white lg:text-base'>
					One of the main problems that people face when looking to rent a car
					is the hassle of finding a reliable and user-friendly platform to
					search for and book rental cars. In addition, car owners who want to
					rent out their vehicles often struggle to find a suitable platform to
					list their cars and manage their rentals.
				</p>
				<Image
					className='w-full object-cover'
					src={'/assets/images/car.png'}
					width={500}
					height={500}
					alt='car image'
				/>
			</div>
		</section>
	);
}
