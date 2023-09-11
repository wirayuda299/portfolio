import Image from 'next/image';

import {
	CaseStudies,
	ChallengesLearning,
	Design,
	Process,
	ProjectDesc,
	ProjectInfo,
	ProjectLink,
	ProjectProblem,
	ProjectTitle,
} from '@/components/index';

export default function ProjectDetail() {
	return (
		<div className='w-full'>
			<ProjectTitle title='Morrent' shortDesc='A Car Rental Application' />
			<section className=' px-3 pt-7'>
				<Image
					className='mx-auto'
					src='/assets/images/mockup/morent_.png'
					width={500}
					height={500}
					alt='Morent'
				/>
				<ProjectLink demoLink='/' githubLink='/' />
			</section>

			<ProjectInfo />
			<ProjectDesc />
			<ProjectProblem />
			<Design />
			<Process />
			<ChallengesLearning />
			<CaseStudies />
		</div>
	);
}
