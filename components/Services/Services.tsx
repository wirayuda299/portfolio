import { services } from '@/constant';
import ServiceCard from './Card';
import Title from './Title';

export default function Services() {
	return (
		<section className='h-full min-h-[500px] w-full pt-24 '>
			<div className='mx-auto max-w-[1400px]'>
				<Title />
				<div className='flex flex-wrap justify-center gap-x-5 gap-y-14 px-5 pt-10 '>
					{services.map((service) => (
						<ServiceCard {...service} key={service.title} />
					))}
				</div>
			</div>
		</section>
	);
}
