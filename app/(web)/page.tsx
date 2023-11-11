import {
	Hero,
	Skills,
	Experience,
	Services,
	Testimonial,
	FeaturedProject,
	CallToAction,
} from '@/components/index';
import { getCaseStudies } from '@/sanity/actions/caseStudies';

export default async function Home() {
	const caseStudies = await getCaseStudies('featured');

	return (
		<>
			<Hero />
			<Skills />
			<Services />
			<Experience />
			<FeaturedProject projects={caseStudies} />
			<Testimonial />
			<CallToAction />
		</>
	);
}
