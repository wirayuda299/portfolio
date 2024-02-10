import {
	Hero,
	Skills,
	Experience,
	Services,
	Testimonial,
	FeaturedProject,
	CallToAction,
} from '@/components/index';
import { Suspense } from 'react';

export default async function Home() {
	return (
		<>
			<Hero />
			<Skills />
			<Services />
			<Experience />
			<Suspense fallback='Loading...'>
				<FeaturedProject />
			</Suspense>
			<Suspense fallback='Loading...'>
				<Testimonial />
			</Suspense>
			<CallToAction />
		</>
	);
}
