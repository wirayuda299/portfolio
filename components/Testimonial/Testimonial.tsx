import Link from 'next/link';
import { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';
import { getReview } from '@/sanity/actions/review';
import Content from './Content';

export default async function Testimonial() {
	const review = await getReview();
	const ref = useRef<HTMLDivElement>(null);

	useIntersectionObserver(ref, ['animate-fade-up', 'animate-once']);

	return (
		<section className='dark:bg-black-300 min-h-[500px] py-24' id='review'>
			<h2 className='w-full text-center text-4xl  font-bold dark:text-white md:text-5xl'>
				What{' '}
				<span className='before:bg-secondary relative z-[1] w-max before:absolute before:bottom-3 before:left-0 before:z-[-1] before:h-3 before:w-full'>
					they say
				</span>{' '}
				about me
			</h2>
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
