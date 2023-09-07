import { services } from '@/constant';
import ServiceCard from './Card';
import Title from './Title';

export default function Services() {
	return (
		<section className='w-full pt-24 h-full min-h-[500px]'>
			<Title />
			<div className='pt-10 flex flex-wrap xl:[&>*:nth-child(2)]:translate-y-12 [&>*:nth-child(2)]:shadow-primary-light [&>*:nth-child(2)]:bg-primary-light justify-center gap-10 '>
				{services.map((service, i) => (
					<ServiceCard {...service} key={service.title} index={i} />
				))}
			</div>
		</section>
	);
}
