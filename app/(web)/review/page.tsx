import dynamic from 'next/dynamic';

export const metadata = {
	title: 'Review',
};

const CallToAction = dynamic(() =>
	import('@/components/index').then((mod) => mod.CallToAction)
);
const ReviewForm = dynamic(() =>
	import('@/components/index').then((mod) => mod.ReviewForm)
);

export default function Review() {
	return (
		<main className='w-full'>
			<div className='w-full py-6 text-center'>
				<h2 className='inline-flex flex-wrap justify-center gap-3 text-4xl font-bold capitalize dark:text-white md:text-5xl'>
					Give your{' '}
					<span className='relative z-[1] w-max before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary lg:before:h-4 '>
						Feedback
					</span>
				</h2>
				<p className='pt-5 text-center text-sm text-white-500 dark:text-white'>
					Your feedback is important
				</p>
			</div>
			<div className='flex flex-col items-center gap-10 bg-white p-8 dark:bg-black-200 md:flex-row-reverse md:items-start md:justify-center md:gap-14 md:p-12'>
				<ReviewForm />
			</div>
			<CallToAction />
		</main>
	);
}
