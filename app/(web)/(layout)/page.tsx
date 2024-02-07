import {
	Hero,
	Skills,
	Experience,
	Services,
	Testimonial,
	FeaturedProject,
} from '../../../components/index';
import { getCaseStudies } from '../../../sanity/actions/caseStudies';
import { Suspense } from 'react';

export default async function Home() {
	const caseStudies = await getCaseStudies('featured');

	return (
		<main className='w-full'>
			<Hero />
			<Skills />
			<Services />
			<Experience />
			<Suspense>
				<FeaturedProject projects={caseStudies} />
			</Suspense>
			<Suspense fallback={'loading...'}>
				<Testimonial />
			</Suspense>
		</main>
	);
}
