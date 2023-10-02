import Link from 'next/link';

import { getReview } from '@/sanity/actions/review';
import TestimonialTitle from './Title';
import Content from './Content';
import { ReviewForm } from '../index';

export default async function Testimonial() {
	const review = await getReview();
	const style = '!bg-slate-100 dark:!bg-black-200';

	return (
		<section
			className='min-h-500 scroll-mt-10 py-24 dark:bg-black-300'
			id='review'
		>
			<TestimonialTitle />
			{review.length < 1 ? (
				<div className='w-full overflow-x-hidden p-5'>
					<p className='pt-5 text-center text-xs font-semibold text-slate-400 md:text-sm'>
						Be the first person to provide feedback.
					</p>
					<ReviewForm styles={style} />
				</div>
			) : (
				<Content review={review} />
			)}
			{review.length > 0 && (
				<div className='flex w-full justify-center'>
					<Link
						href={'/review'}
						className='mt-10 rounded-full bg-primary-light px-5 py-3 text-xs font-semibold text-white dark:bg-primary-dark'
					>
						Give your feedback
					</Link>
				</div>
			)}
		</section>
	);
}
