import { services } from '@/constant';
import ServiceCard from './Card';
import Title from './Title';

export default function Services() {
	return (
		<section className='h-full min-h-[500px] w-full pt-24'>
			<Title />
			<div className='flex flex-wrap justify-center gap-10 pt-10 '>
				{services.map((service) => (
					<ServiceCard {...service} key={service.title} />
				))}
			</div>
		</section>
	);
}
