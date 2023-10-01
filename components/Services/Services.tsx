import { services } from '@/constant';
import ServiceCard from './Card';
import Title from './Title';

export default function Services() {
	return (
		<section className='h-full min-h-500 w-full pt-24'>
			<div className='mx-auto max-w-1400'>
				<Title />
				<div className='mt-10 flex flex-wrap justify-center gap-x-5 gap-y-14 px-5 '>
					{services.map((service, index) => (
						<ServiceCard {...service} key={service.title} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
