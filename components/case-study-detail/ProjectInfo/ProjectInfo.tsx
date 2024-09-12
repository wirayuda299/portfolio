import Image from 'next/image';

import ProjectInfoLabel from './Label';
import { Projects } from '@/types/project';

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

type IconObject = {
	name: string;
	_key: string;
	icon: string;
};

type IconArray = IconObject;

type IconData = [IconArray, IconArray];

export default function ProjectInfo({
	projectInfo,
	techStacks,
}: ProjectInfoProps) {
	const { role, startDate, endDate } = projectInfo[0];
	const frontend = techStacks.frontend;
	const backend = techStacks?.backend;
	const allTechStacks = [
		...frontend,
		...(backend ?? []),
	] as unknown as IconData;

	return (
		<section className='mt-10 size-full bg-black-200'>
			<div className='mx-auto max-w-880 pb-10'>
				<div className='flex flex-wrap justify-between gap-x-20 gap-y-6 px-5 py-10 sm:px-2 md:px-7'>
					<ProjectInfoLabel label='Role' value={role} />
					<ProjectInfoLabel label='Start Date' value={startDate} />
					<ProjectInfoLabel label='End Date' value={endDate} />
				</div>
				<div className='mt-20 flex flex-col items-start p-5'>
					<p className='text-sm font-semibold text-primary-light'>
						Technologies used
					</p>
					<h2 className='text-3xl font-semibold  text-white'>
						Tech Stack
					</h2>
					<div className=' flex flex-wrap gap-9 pt-7'>
						{allTechStacks.map((tech) => (
							<div
								key={tech._key}
								className='size-16 rounded-full p-3 shadow-lg bg-black-300'
							>
								<Image className='size-10' src={tech.icon} alt={tech.name} width={40} height={40} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
