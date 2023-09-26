import Card from './Card';
import Background from './Background';
import { backgrounds } from '@/constant';

export default function Experience() {
	return (
		<section className=' mt-20 h-full w-full !overflow-hidden bg-white dark:bg-black-200'>
			<div className='mx-auto flex w-full max-w-1400 flex-col items-center justify-center gap-6 bg-white p-5 dark:bg-black-200 lg:flex-row lg:p-14'>
				<Card />
				<div className='flex w-full min-w-max flex-1 flex-col justify-between gap-8'>
					{backgrounds.map((background) => (
						<Background {...background} key={background.title} />
					))}
				</div>
			</div>
		</section>
	);
}
