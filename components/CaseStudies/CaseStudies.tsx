import Image from 'next/image';
import { Button } from '../ui/button';

export default function CaseStudies() {
	return (
		<section className='dark:bg-black-300'>
			<div className='mx-auto mt-7 flex max-w-[650px] flex-col  gap-5 px-9 py-10 sm:px-3'>
				<p className='text-left text-sm font-semibold text-primary-light'>
					Projects
				</p>
				<h2 className='text-2xl font-semibold text-black dark:text-white'>
					Other Case Studies
				</h2>
				<div className='flex flex-wrap justify-center gap-6'>
					{[1, 2].map((p) => (
						<div
							className='max-w-[300px] rounded-lg bg-white shadow-md dark:bg-black-300 '
							key={p}
						>
							<Image
								className=' rounded-lg'
								src={'/assets/images/jobit.png'}
								width={500}
								height={500}
								alt='Jobit'
							/>
							<div className='p-4'>
								<h3 className='text-base font-semibold text-primary-light'>
									JobIt
								</h3>
								<p className='py-3  text-sm text-white-500 dark:text-white'>
									Jobit, a web app made with React and JSearch API, links
									developers to millions of job openings. It offers easy job
									search by...
								</p>
								<Button className='w-full rounded-full bg-primary-light text-white dark:bg-primary-dark'>
									See Case Study
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
