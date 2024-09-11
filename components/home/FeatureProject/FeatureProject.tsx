import Link from 'next/link';

import FeatureProjectCard from './Card';
import FeatureProjectTitle from './Title';
import { getCaseStudies } from '@/sanity/actions/caseStudies';
import { ArrowRight } from 'lucide-react';

export default async function FeatureProject() {
	const projects = await getCaseStudies('featured');

	return (
		<section className='px-5 pt-20 bg-black-200'>
			<div className='mx-auto max-w-1400'>
				<FeatureProjectTitle />
				<div className='mt-9 flex flex-col gap-5'>
					{projects.map((item) => (
						<FeatureProjectCard
							backgroundColor={item.backgroundColor}
							techStacks={item.techStacks}
							thumbnail={item.thumbnail}
							title={item.title}
							_id={item._id}
							subTitle={item.subTitle}
							key={item.title}
						/>
					))}
					<Link
						title='See more case studies'
						href='/case-studies'
						className='mx-auto my-10 inline-flex max-w-350 animate-fade-up items-center gap-5 truncate rounded-full px-5 py-3 text-xs text-white opacity-0 bg-primary-dark sm:px-10 sm:text-sm'
					>
						See more case studies
						<ArrowRight color='#fff' />
					</Link>
				</div>
			</div>
		</section>
	);
}
