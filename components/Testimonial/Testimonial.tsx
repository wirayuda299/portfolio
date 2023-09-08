'use client';

import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
				<Swiper
					spaceBetween={50}
					loop={true}
					slidesPerView={1}
					navigation={true}
					pagination={{
						clickable: true,
					}}
					modules={[Navigation, Pagination]}
				>
					{[1, 2, 3, 4, 5, 6, 7].map((review) => (
						<SwiperSlide key={review}>
							<div className=' grid max-w-6xl grid-cols-1 items-center justify-center gap-10 sm:grid-cols-2 md:px-20 md:py-16'>
								<Image
									className='aspect-square max-h-[400px] w-full rounded-lg object-cover sm:max-w-[400px]'
									src='/assets/images/profile.png'
									width={400}
									height={400}
									alt='profile'
									priority
								/>
								<div>
									<div className='inline-flex gap-3 '>
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
									<p className='pt-7 text-base font-normal leading-relaxed text-white-500 dark:text-white-800 sm:text-lg'>
										I have had the pleasure of working with Adrian as a Software
										Developer and can confidently say that he is a valuable
										asset to any team. He is highly skilled in ReactJS, NextJS,
										Javascript, Material UI, Tailwind CSS, Redux, and GitHub,
										and consistently delivers high-quality code.{' '}
									</p>
									<h3 className='pt-8 text-lg font-semibold text-black dark:text-white-800'>
										— Adrian Hajdin
									</h3>
									<p className='text-sm font-normal text-white-500 dark:text-white-800'>
										Founder & CEO at JS Mastery
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
