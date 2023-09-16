import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import { getSimilarCaseStudies } from '@/sanity/actions/caseStudies';
import { urlForImage } from '@/sanity/lib/image';

export default async function CaseStudies({ id }: { id: string }) {
	const similarCaseStudies = await getSimilarCaseStudies(id);

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
					{similarCaseStudies?.map((p) => (
						<div
							className='max-w-[300px] rounded-lg bg-white shadow-md dark:bg-black-300 dark:shadow-[#1F2C41] '
							key={p._id}
						>
							<Image
								className=' rounded-lg'
								src={urlForImage(p.mockup).url()}
								width={500}
								height={500}
								alt={p.title}
							/>
							<div className='p-4'>
								<h3 className='text-base font-semibold text-primary-light'>
									{p.title}
								</h3>
								<p className='py-3  text-sm text-white-500 dark:text-white'>
									{p.descriptions?.slice(0, 100)}
								</p>
								<Link href={`/project/${p._id}`}>
									<Button className='w-full rounded-full bg-primary-light text-sm text-white hover:bg-blue-700 dark:bg-primary-dark dark:hover:bg-blue-500'>
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
