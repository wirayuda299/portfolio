import { Suspense } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Loader from '@/components/shared/Loader';
import { getCaseStudies } from '@/sanity/actions/caseStudies';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
	title: 'Case Studies | Wirayuda',
};
export default async function CaseStudies() {
	const caseStudies = await getCaseStudies('all');

	return (
		<div className='mx-auto size-full '>
			<div className='mx-auto max-w-700 p-0.5 sm:p-0'>
				<h1 className='ease animate-fade-up px-4 text-center text-3xl font-bold leading-normal transition-all duration-500 dark:text-white md:px-0 lg:text-16'>
					Recent{' '}
					<span className='relative z-[1] inline-block w-max  before:absolute before:bottom-1 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary lg:before:bottom-5 lg:before:h-4'>
						Case Studies
					</span>
				</h1>
				<p className='ease mx-auto max-w-650 animate-fade-up px-3 py-5 text-center text-sm text-black-300 transition-all duration-500 dark:text-white-100 lg:text-base'>
					Dive into my recent success stories and discover how I&apos;ve helped
					clients overcome challenges, innovate, and achieve their goals
				</p>
			</div>
			<section className='bg-white px-5 py-10 pt-20 dark:bg-black-200'>
				<div className='mx-auto flex max-w-1400 flex-wrap justify-center gap-9 '>
					{caseStudies.map((project, i) => (
						<Suspense key={project.title} fallback={<Loader />}>
							<Link
								style={{
									animationDelay: `${i * 100}ms`,
								}}
								className='size-full max-w-400 animate-fade-in opacity-0'
								href={`/project/${project._id}`}
								prefetch={false}
							>
								<Image
									style={{
										backgroundColor: project.backgroundColor,
									}}
									src={project.mockup}
									width={500}
									height={500}
									priority
									fetchPriority='high'
									alt={project.title}
									className='mx-auto rounded-md object-cover object-bottom px-5 pt-5 lg:px-10 lg:pt-10'
								/>
								<h2 className='pt-5 text-xl font-semibold dark:text-white'>
									{project.title}
								</h2>
								<p className='text-sm text-white-500'>{project.subTitle}</p>
							</Link>
						</Suspense>
					))}
				</div>
			</section>
		</div>
	);
}
