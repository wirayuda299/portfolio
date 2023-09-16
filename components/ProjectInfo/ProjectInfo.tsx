import Image from 'next/image';

import ProjectInfoLabel from './Label';
import { urlForImage } from '@/sanity/lib/image';

type ProjectInfoProps = {
	projectInfo: {
		endDate: string;
		_type: string;
		_key: string;
		startDate: string;
		role: string;
	}[];
	techStacks: Pick<Projects, 'techStacks'>['techStacks'];
};

export default function ProjectInfo({
	projectInfo,
	techStacks,
}: ProjectInfoProps) {
	const { role, startDate, endDate } = projectInfo[0];
	const frontend = techStacks[0].frontend;
	const backend = techStacks[0]?.backend;
	const allTechStacks = [...frontend, ...(backend ?? [])];

	return (
		<section className='mt-10 h-full w-full bg-white dark:bg-black-200'>
			<div className='mx-auto max-w-600 pb-10'>
				<div className='flex flex-wrap justify-start gap-x-20 gap-y-6 px-5 py-10 sm:px-2'>
					<ProjectInfoLabel label='Role' value={role} />
					<ProjectInfoLabel label='Start Date' value={startDate} />
					<ProjectInfoLabel label='End Date' value={endDate} />
				</div>
				<div className='mt-20 flex flex-col items-start p-5 sm:p-3'>
					<p className='text-sm font-semibold text-primary-light'>
						Technologies used
					</p>
					<h2 className='text-3xl font-semibold text-black dark:text-white'>
						Tech Stack
					</h2>
					<div className=' flex flex-wrap gap-9 pt-7'>
						{allTechStacks.map((tech) => (
							<div
								key={tech._key}
								className='h-16 w-16 rounded-full bg-white-800 p-3 shadow-lg dark:bg-black-300
                  '
							>
								<Image
									src={urlForImage(tech.icon).url()}
									alt={tech.name}
									width={40}
									height={40}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}