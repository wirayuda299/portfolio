import { skills } from '@/constant';
import TechIcon from './Tech';
import Title from './Title';

export default function Skills() {
	return (
		<section className='w-full bg-white p-6 dark:bg-black-200 md:p-16'>
			<div className='mx-auto w-full max-w-1400'>
				<Title />
				<div className='mt-10 flex flex-wrap justify-center gap-4 md:gap-8'>
					{skills.map((skill, i) => (
						<TechIcon {...skill} key={skill.label} delay={i} />
					))}
				</div>
			</div>
		</section>
	);
}
