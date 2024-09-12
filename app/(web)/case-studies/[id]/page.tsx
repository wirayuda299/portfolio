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

type Props = Readonly<{
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
}>;

export default async function ProjectDetail({ params: { id } }: Props) {
	const caseStudy = await getSingleCaseStudy(id);

	return (
		<main className='size-full'>
			<ProjectTitle title={caseStudy.title} shortDesc={caseStudy.subTitle} />
			<section className='pt-7 max-w-[500px] mx-auto relative min-h-[300px]'>
				<Image
					className='w-full h-full object-cover object-center aspect-auto'
					src={caseStudy.mockup}
					priority
          fill
          sizes='500px'
					fetchPriority='high'
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
				<p className='text-left text-sm first-letter:capitalize text-white lg:text-lg'>
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
		</main>
	);
}
