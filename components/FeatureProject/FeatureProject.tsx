import Image from 'next/image';

import { featureProjects } from '@/constant';
import FeatureProjectCard from './Card';
import Link from 'next/link';

export default function FeatureProject() {
	return (
		<section className='px-5 pt-20 dark:bg-black-200'>
			<div className='w-full text-center '>
				<h2 className=' w-full text-4xl font-bold text-black dark:text-white md:text-5xl'>
					Featured{' '}
					<span className='relative z-[1] before:absolute before:bottom-3 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary'>
						Projects
					</span>
				</h2>
			</div>
			<div className='mt-9 flex flex-col gap-5'>
				{featureProjects.map((item, i) => (
					<FeatureProjectCard
						{...item}
						key={item.title}
						index={i}
						background={item.backgroundColor}
					/>
				))}
				<Link
					href='/case-studies'
					className='mx-auto inline-flex max-w-[350px] gap-5 rounded-full bg-primary-light p-3 text-white dark:bg-primary-dark'
				>
					See more case studies
					<Image
						className='w-5'
						src={'/assets/icons/short-arrow.svg'}
						width={40}
						height={40}
						alt='arrow icon'
					/>
				</Link>
			</div>
		</section>
	);
}