import Image from 'next/image';

import { projectInfo, skills } from '@/constant';

export default function ProjectInfo() {
	return (
		<section className='mt-10 h-full w-full bg-white dark:bg-black-200'>
			<div className='mx-auto max-w-600 pb-10'>
				<div className='flex flex-wrap justify-start gap-9 px-5 py-10 sm:px-2'>
					{projectInfo.map((info) => (
						<div key={info.label} className='max-w-[200px]'>
							<h2 className='text-sm font-semibold text-white-500'>
								{info.label}
							</h2>
							<p className='pt-2 text-xl font-semibold dark:text-white'>
								{info.text}
							</p>
						</div>
					))}
				</div>
				<div className='mt-20 flex flex-col items-start p-5 sm:p-3'>
					<p className='text-sm font-semibold text-primary-light'>
						Technologies used
					</p>
					<h2 className='text-3xl font-semibold text-black dark:text-white'>
						Tech Stack
					</h2>
					<div className=' flex flex-wrap gap-9 pt-7'>
						{skills.map((skill) => (
							<div
								key={skill.label}
								className='h-16 w-16 rounded-full bg-white-800 p-3 shadow-lg dark:bg-black-300
                  '
							>
								<Image
									src={skill.lightIcon}
									alt={skill.label}
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
