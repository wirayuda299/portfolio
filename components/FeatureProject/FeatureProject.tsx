import Image from 'next/image';
import Link from 'next/link';

import { featureProjects } from '@/constant';
import FeatureProjectCard from './Card';

export default function FeatureProject() {
	return (
		<section className='px-5 pt-20 dark:bg-black-200'>
			<div className='mx-auto max-w-[1400px]'>
				<div className='w-full text-center '>
					<h2 className=' w-full text-4xl font-bold text-black dark:text-white md:text-5xl'>
						Featured{' '}
						<span className='relative z-[1] inline-block w-max before:absolute before:bottom-2 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary'>
							Projects
						</span>
					</h2>
				</div>
				<div className='mt-9 flex flex-col gap-5'>
					{featureProjects.map((item, i) => (
						<FeatureProjectCard {...item} key={item.title} />
					))}
					<Link
						href='/case-studies'
						className='mx-auto my-10 inline-flex max-w-[350px] gap-5 rounded-full bg-primary-light px-10 py-3 text-white dark:bg-primary-dark'
					>
						See more case studies
						<Image
							className='h-auto w-5'
							src={'/assets/icons/short-arrow.svg'}
							width={40}
							height={40}
							alt='arrow icon'
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}
