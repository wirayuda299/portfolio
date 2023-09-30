import Link from 'next/link';

import Content from './Content';
import { getReview } from '@/sanity/actions/review';

export default async function Testimonial() {
	const review = await getReview();

	return (
		<section className='min-h-[500px] py-24 dark:bg-black-300' id='review'>
			<h2 className='w-full text-center text-4xl  font-bold dark:text-white md:text-5xl'>
				What{' '}
				<span className='relative z-[1] w-max before:absolute before:bottom-3 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary'>
					they say
				</span>{' '}
				about me
			</h2>
			<Content review={review} />
			<div className='flex w-full justify-center'>
				<Link
					href={'/review'}
					className='mt-10 rounded-full bg-primary-light px-5 py-3 text-xs font-semibold text-white dark:bg-primary-dark'
				>
					Give your feedback
				</Link>
			</div>
		</section>
	);
}
