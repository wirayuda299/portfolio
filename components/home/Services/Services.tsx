import { SERVICES } from '@/constants/index';
import ServiceCard from './Card';
import Title from './Title';

export default function Services() {
	return (
		<section className='size-full min-h-500 pt-24'>
			<div className='mx-auto max-w-1400'>
				<Title />
				<div className='mt-10 flex flex-wrap justify-center gap-x-5 gap-y-14 px-5 md:px-0'>
					{SERVICES.map((service) => (
						<ServiceCard {...service} key={service.title} />
					))}
				</div>
			</div>
		</section>
	);
}
