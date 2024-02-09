'use client';

import Image from 'next/image';

function StarFilledIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='18' height='16' fill='none'>
			<path
				fillRule='evenodd'
				d='M8.167.658a.9.9 0 0 1 .858-.629.9.9 0 0 1 .858.629l1.55 4.767h5a.91.91 0 0 1 .899.631.91.91 0 0 1-.366 1.036l-4.058 2.942 1.55 4.775a.9.9 0 0 1-.325 1.016.9.9 0 0 1-1.067-.008L9 12.842l-4.058 2.95a.9.9 0 0 1-1.067.008.9.9 0 0 1-.325-1.016l1.55-4.775-4.058-2.942a.91.91 0 0 1-.366-1.036.91.91 0 0 1 .899-.631h5L8.167.658z'
				fill='#fbad39'
			/>
		</svg>
	);
}

export default function Content({ review }: { review: Review[] }) {
	return (
		<div className='mx-auto max-w-1400 snap-mandatory overflow-x-auto px-5 pt-16'>
			{review.map((item) => (
				<article
					key={item._id}
					className=' mx-auto flex w-full max-w-7xl grid-cols-1 flex-wrap items-center gap-6 md:justify-center  md:py-16'
				>
					<Image
						className='aspect-square size-full max-h-500 rounded-lg object-cover md:max-h-400 md:max-w-450'
						src={item.profile}
						width={400}
						height={400}
						alt='profile'
						loading='lazy'
						placeholder='blur'
						blurDataURL={item.profile}
					/>
					<div className='max-w-450 md:min-h-400'>
						<div className='inline-flex gap-3'>
							{Array.from({ length: item.star })
								.fill(item.star)
								.map((_, i) => (
									<StarFilledIcon key={i} />
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
				</article>
			))}
		</div>
	);
}
