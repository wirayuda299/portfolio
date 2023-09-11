import {
	Hero,
	Skills,
	Experience,
	Services,
	Testimonial,
	FeatureProject,
} from '@/components/index';

export default function Home() {
	return (
		<>
			<Hero />
			<Skills />
			<Services />
			<Experience />
			<FeatureProject />
			<Testimonial />
		</>
	);
}
