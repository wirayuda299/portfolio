import Image from 'next/image';

export default function Testimonial() {
	return (
		<section className='min-h-[500px] pt-24 dark:bg-black-300'>
			<h2 className='w-full text-center text-4xl font-bold dark:text-white md:text-5xl'>
				What{' '}
				<span className='relative z-[1] w-max before:absolute before:bottom-3 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary'>
					they say
				</span>{' '}
				about me
			</h2>
			<div className='pt-16'>
				<div className=' grid max-w-6xl grid-cols-1 items-start justify-center gap-10 sm:grid-cols-2 md:px-20 md:py-16'>
					<Image
						className='aspect-square h-full w-full object-cover'
						src='/assets/images/profile.png'
						width={500}
						height={500}
						alt='profile'
					/>
					<div>
						<div className='inline-flex gap-3'>
							{[1, 2, 3, 4, 5].map((star) => (
								<Image
									className='w-7 rounded-lg '
									key={star}
									src='/assets/icons/starFilled.svg'
									width={40}
									height={40}
									alt='star'
								/>
							))}
						</div>
						<p className='pt-4 text-base font-normal text-white-500 dark:text-white-800 sm:text-lg'>
							I have had the pleasure of working with Adrian as a Software
							Developer and can confidently say that he is a valuable asset to
							any team. He is highly skilled in ReactJS, NextJS, Javascript,
							Material UI, Tailwind CSS, Redux, and GitHub, and consistently
							delivers high-quality code.{' '}
						</p>
						<h3 className='pt-6 text-lg font-semibold text-black dark:text-white-800'>
							— Adrian Hajdin
						</h3>
						<p className='text-sm font-normal text-white-500 dark:text-white-800'>
							Founder & CEO at JS Mastery
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
