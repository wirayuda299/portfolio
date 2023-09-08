import { skills } from '@/constant';
import TechIcon from './Tech';
import Title from './Title';

export default function Skills() {
	return (
		<section className='bg-white p-12 dark:bg-black-200 md:p-16'>
			<Title />
			<div className='mt-10 flex flex-wrap justify-center gap-4 md:gap-8'>
				{skills.map((skill) => (
					<TechIcon {...skill} key={skill.label} />
				))}
			</div>
		</section>
	);
}
