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
} from '@/components/index';
import { getSingleCaseStudy } from '@/sanity/actions/caseStudies';
import { Metadata, ResolvingMetadata } from 'next/types';

type Props = Readonly<{
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
}>;

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const caseStudy = await getSingleCaseStudy(params.id);
	const previousImages = (await parent).openGraph?.images || [];
	return {
		title: caseStudy.title,
		openGraph: {
			images: [caseStudy.thumbnail, ...previousImages],
			description: caseStudy.descriptions,
			title: caseStudy.title,
		},
		twitter: {
			images: caseStudy.thumbnail,
			title: caseStudy.title,
			description: caseStudy.descriptions,
			card: 'summary_large_image',
		},
		description: caseStudy.descriptions,
	};
}

export default async function ProjectDetail({ params: { id } }: Props) {
	const caseStudy = await getSingleCaseStudy(id);

	return (
		<main className='size-full'>
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
		</main>
	);
}
