import Image from 'next/image';

import { challenges, learnings } from '@/constant';

export default function ChallengesLearning() {
	return (
		<section className='bg-white dark:bg-black-200'>
			<div className='mx-auto flex max-w-[600px] flex-col gap-5 px-9 py-10 sm:px-3'>
				<p className='text-sm font-semibold text-primary-light'>Problem</p>
				<h2 className='text-2xl font-semibold text-black dark:text-white'>
					Challenges & Learnings
				</h2>
				<div className='bg-white-800 p-5 dark:bg-black-300'>
					<h3 className='text-lg font-semibold uppercase text-[#E15A46]'>
						Challenges
					</h3>
					<div className='flex flex-col gap-5 pt-9'>
						{challenges.map((challenge) => (
							<div key={challenge} className='flex gap-3'>
								<Image
									src={'/assets/icons/challenge.svg'}
									width={40}
									height={40}
									alt='challenge icon'
								/>
								<p className='text-sm text-white-500 dark:text-white'>
									{challenge}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className='mt-5  bg-white-800 p-5 dark:bg-black-300'>
					<h3 className='text-lg font-semibold uppercase text-[#02BC7D]'>
						Learnings
					</h3>
					<div className='flex flex-col gap-5 pt-9'>
						{learnings.map((learning) => (
							<div key={learning} className='flex gap-3'>
								<Image
									src={'/assets/icons/check.svg'}
									width={40}
									height={40}
									alt='check icon'
								/>
								<p className='text-sm text-white-500 dark:text-white'>
									{learning}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
