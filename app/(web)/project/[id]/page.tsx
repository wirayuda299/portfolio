import Image from 'next/image';

import {
	Design,
	Process,
	ProjectInfo,
	ProjectLink,
	CaseStudies,
	ProjectTitle,
	ProjectProblem,
	ChallengesLearning,
	CallToAction,
} from '@/components/index';
import { getSingleCaseStudy } from '@/sanity/actions/caseStudies';

type Params = {
	params: { id: string };
};

export default async function ProjectDetail({ params: { id } }: Params) {
	const caseStudy = await getSingleCaseStudy(id);

	return (
		<div className='h-full w-full '>
			<ProjectTitle title={caseStudy.title} shortDesc={caseStudy.subTitle} />
			<section className='pt-7'>
				<Image
					className='mx-auto'
					src={caseStudy.mockup}
					width={500}
					priority
					fetchPriority='high'
					height={500}
					alt={caseStudy.title}
				/>
				<ProjectLink
					demoLink={caseStudy.demoSite}
					githubLink={caseStudy.sourceCode}
				/>
			</section>

			<ProjectInfo
				projectInfo={caseStudy.projectInfo}
				techStacks={caseStudy.techStacks}
			/>
			<section className='mx-auto mt-7 flex max-w-880 flex-col gap-5 px-4 py-10'>
				<p className='text-left text-sm text-white-500 first-letter:capitalize dark:text-white lg:text-lg'>
					{caseStudy.descriptions}
				</p>
			</section>
			<ProjectProblem
				text={caseStudy.problem.description}
				image={caseStudy.problem.image}
			/>
			<Design design={caseStudy.design} />
			<Process process={caseStudy.process} />
			<ChallengesLearning
				challenges={caseStudy?.challenges}
				learnings={caseStudy?.learnings}
			/>
			<CaseStudies id={caseStudy._id} />
			<CallToAction />
		</div>
	);
}
