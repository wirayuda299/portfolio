import Link from 'next/link';

import { getReview } from '@/sanity/actions/review';
import Content from './Content';
import TestimonialTitle from './Title';

export default async function Testimonial() {
	const review = await getReview();

	return (
		<section className='dark:bg-black-300 min-h-[500px] py-24' id='review'>
			<TestimonialTitle />
			<Content review={review} />
			<div className='flex w-full justify-center'>
				<Link
					href={'/review'}
					className='bg-primary-light dark:bg-primary-dark mt-10 rounded-full px-5 py-3 text-xs font-semibold text-white'
				>
					Give your feedback
				</Link>
			</div>
		</section>
	);
}
