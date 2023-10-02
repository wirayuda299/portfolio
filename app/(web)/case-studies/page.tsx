import { Suspense } from 'react';
import type { Metadata } from 'next';

import Loader from '@/components/Loader/Loader';
import { ProjectCard } from '@/components/index';
import { getCaseStudies } from '@/sanity/actions/caseStudies';

export const metadata: Metadata = {
	title: 'Case Studies | Wirayuda',
};
export default async function CaseStudies() {
	const caseStudies = await getCaseStudies('all');

	return (
		<div className='h-full w-full'>
			<div className='mx-auto h-full w-full '>
				<div className='mx-auto max-w-700 p-0.5 sm:p-0'>
					<h1 className='animate-once animate-fade-up px-4 text-center text-3xl font-bold leading-normal dark:text-white md:animate-fade-right md:px-0 lg:text-16'>
						Recent{' '}
						<span className='relative z-[1] inline-block w-max  before:absolute before:bottom-2 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary lg:before:bottom-5 lg:before:h-4'>
							Case Studies
						</span>
					</h1>
					<p className='animate-once mx-auto max-w-full animate-fade-up px-1 py-5 text-center text-sm text-white-100 md:animate-fade-right '>
						Dive into my recent success stories and discover how I&apos;ve
						helped clients overcome challenges, innovate, and achieve their
						goals
					</p>
				</div>
				<section className='bg-white px-5 py-10 pt-20 dark:bg-black-200'>
					<div className='mx-auto flex max-w-1400 flex-wrap justify-center gap-9 '>
						{caseStudies.map((project, i) => (
							<Suspense key={project.title} fallback={<Loader />}>
								<ProjectCard {...project} index={i} />
							</Suspense>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
