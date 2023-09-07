import Card from './Card';
import Background from './Background';
import { backgrounds } from '@/constant';

export default function Experience() {
	return (
		<section className='-ml-5 h-full w-screen'>
			<div className='grid w-full grid-cols-1 justify-between gap-6 bg-white p-5 pt-16 dark:bg-black-200 md1:grid-cols-2 '>
				<Card />
				<div className='flex w-full flex-col justify-between gap-5 [&>*:nth-child(2)]:shadow-xl dark:[&>*:nth-child(2)]:bg-black-300'>
					{backgrounds.map((background) => (
						<Background {...background} key={background.title} />
					))}
				</div>
			</div>
		</section>
	);
}
