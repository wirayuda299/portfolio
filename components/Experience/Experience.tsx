import Card from './Card';
import Background from './Background';
import { backgrounds } from '@/constant';

export default function Experience() {
	return (
		<section className=' dark:bg-black-200 mt-20 h-full w-full !overflow-hidden bg-white'>
			<div className='max-w-1400 dark:bg-black-200 mx-auto flex w-full flex-col items-center justify-center gap-6 bg-white p-5 lg:flex-row lg:p-14'>
				<Card />
				<div className='flex w-full flex-col justify-between gap-8 '>
					{backgrounds.map((background, i) => (
						<Background {...background} key={background.title} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
