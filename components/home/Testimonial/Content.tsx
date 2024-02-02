'use client';

import Image from 'next/image';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Content({ review }: { review: Review[] }) {
	return (
		<div className='mx-auto max-w-1400 px-5 pt-16'>
			<Swiper
				autoplay={{
					delay: 7000,
					disableOnInteraction: false,
				}}
				fadeEffect={{
					crossFade: true,
				}}
				effect='fade'
				spaceBetween={50}
				loop={true}
				grabCursor={true}
				pagination={true}
				slidesPerView={1}
				navigation={true}
				modules={[Navigation, Pagination, Autoplay, EffectFade]}
			>
				{review.map((item) => (
					<SwiperSlide key={item._id}>
						<div className=' mx-auto flex w-full max-w-7xl grid-cols-1 flex-wrap items-center gap-6 md:justify-center  md:py-16'>
							<Image
								className='aspect-square size-full max-h-500 rounded-lg object-cover md:max-h-400 md:max-w-450'
								src={item.profile}
								width={400}
								height={400}
								alt='profile'
								loading='lazy'
							/>
							<div className='max-w-450 md:min-h-400'>
								<div className='inline-flex gap-3'>
									{Array.from({ length: item.star })
										.fill(item.star)
										.map((star, i) => (
											<Image
												className='w-6 rounded-lg '
												key={Number(star) * Math.random() * i}
												src='/assets/icons/starFilled.svg'
												width={40}
												height={40}
												alt='star'
											/>
										))}
								</div>
								<p className='pt-4 text-justify text-sm font-normal leading-relaxed text-white-500 dark:text-white-800 lg:pt-4 lg:text-lg'>
									{item.comments}
								</p>
								<h3 className='pt-8 text-base font-semibold capitalize text-black dark:text-white-800'>
									— {item.name}
								</h3>
								<p className='text-xs font-normal capitalize text-white-500 dark:text-white-800'>
									{item.role}
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
