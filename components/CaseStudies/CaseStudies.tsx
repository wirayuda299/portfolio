import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import { getSimilarCaseStudies } from '@/sanity/actions/caseStudies';

export default async function CaseStudies({ id }: { id: string }) {
	const similarCaseStudies = await getSimilarCaseStudies(id);

	return (
		<section className='dark:bg-black-300'>
			<div className='mx-auto mt-7 flex max-w-880 flex-col gap-5 px-3 py-10'>
				<p className='text-left text-sm font-semibold text-primary-light'>
					Projects
				</p>
				<h2 className='text-2xl font-semibold text-black dark:text-white'>
					Other Case Studies
				</h2>
				<div className='flex h-fit snap-x snap-mandatory gap-6 overflow-x-scroll'>
					{similarCaseStudies?.map((p) => (
						<div
							className='h-min min-w-300 max-w-450 snap-start rounded-lg bg-white p-3 shadow-md dark:bg-black-300 dark:shadow-light-shadow'
							key={p._id}
						>
							<Image
								className='h-full w-full rounded-lg object-contain '
								src={p.mockup}
								width={500}
								height={500}
								alt={p.title}
							/>
							<div className='p-4'>
								<h3 className='text-base font-semibold text-primary-light'>
									{p.title}
								</h3>
								<p className='py-3 text-sm text-white-500 first-letter:capitalize dark:text-white'>
									{p.descriptions?.slice(0, 100)}
								</p>
								<Link href={`/project/${p._id}`}>
									<Button
										variant={'primary'}
										className='w-full rounded-full text-white'
									>
										See Case Study
									</Button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
