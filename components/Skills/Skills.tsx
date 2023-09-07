import { skills } from '@/constant';
import TechIcon from './Tech';
import Title from './Title';

export default function Skills() {
	return (
		<section className='p-12 md:p-16 bg-white dark:bg-black-200'>
			<Title />
			<div className='flex flex-wrap gap-4 md:gap-8 justify-center mt-10'>
				{skills.map((skill) => (
					<TechIcon {...skill} key={skill.label} />
				))}
			</div>
		</section>
	);
}
