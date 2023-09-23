import Link from 'next/link';

import { getReview } from '@/sanity/actions/review';
import Content from './Content';
import TestimonialTitle from './Title';

export default async function Testimonial() {
	const review = await getReview();

	return (
		<section className='min-h-[500px] py-24 dark:bg-black-300' id='review'>
			<TestimonialTitle />
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
