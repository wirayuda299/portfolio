import { ProjectCard } from '@/components/index';
import { getCaseStudies } from '@/utils/caseStudies';

export default async function CaseStudies() {
	const caseStudies = await getCaseStudies('all');

	return (
		<div className='h-full w-full'>
			<div className='mx-auto h-full w-full '>
				<div className='mx-auto max-w-[700px] p-[0.5px] sm:p-0'>
					<h1 className='px-4 text-center text-3xl font-bold leading-normal dark:text-white md:px-0 lg:text-[64px]'>
						Recent{' '}
						<span className='relative z-[1] inline-block w-max  before:absolute before:bottom-2 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary lg:before:bottom-5 lg:before:h-4'>
							Case Studies
						</span>
					</h1>
					<p className='mx-auto max-w-full px-1 pt-5 text-center text-sm text-white-500 lg:text-xl'>
						Dive into my recent success stories and discover how I&apos;ve
						helped clients overcome challenges, innovate, and achieve their
						goals
					</p>
				</div>
				<section className='mt-20 bg-white px-5 py-10 dark:bg-black-200'>
					<div className='mx-auto flex max-w-[1400px] flex-wrap justify-center gap-9 '>
						{caseStudies.map((project) => (
							<ProjectCard {...project} key={project.title} />
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
