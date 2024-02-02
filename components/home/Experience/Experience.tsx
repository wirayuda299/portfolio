import Card from './Card';
import Background from './Background';

export default function Experience() {
	return (
		<section className=' mt-20 size-full !overflow-hidden bg-white dark:bg-black-200'>
			<div className='mx-auto flex w-full max-w-1400 flex-col items-start justify-center gap-6 bg-white p-5 dark:bg-black-200 lg:flex-row lg:p-14'>
				<Card />
				<div className='flex w-full flex-col  justify-between gap-8 '>
					<Background />
				</div>
			</div>
		</section>
	);
}
