import { getReview } from '@/sanity/actions/review';
import TestimonialTitle from './Title';
import Content from './Content';

export default async function Testimonial() {
	const review = await getReview();
	if (review.length < 1) return null;
	return (
		<section
			className='min-h-500 scroll-mt-10 py-24 dark:bg-black-300'
			id='review'
		>
			<TestimonialTitle />

			<Content review={review} />
		</section>
	);
}
