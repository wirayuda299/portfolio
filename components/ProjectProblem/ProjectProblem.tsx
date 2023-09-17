import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import { Image as SanityImage } from 'sanity';

type ProjectProblemProps = {
	text: string;
	image: SanityImage;
};

export default function ProjectProblem({ text, image }: ProjectProblemProps) {
	return (
		<section className='mt-10 h-full w-full bg-white dark:bg-black-200'>
			<div className='mx-auto mt-7 flex max-w-600 flex-col gap-5 px-9 py-10 sm:px-3'>
				<p className='text-sm font-semibold text-primary-light'>Problem</p>
				<h2 className='text-lg font-semibold dark:text-white'>
					Problem Statement
				</h2>
				<p className='py-6 text-sm text-white-500 dark:text-white lg:text-base'>
					{text}
				</p>
				<Image
					className='w-full object-cover'
					src={urlForImage(image).url()}
					width={500}
					height={500}
					alt='illustration image'
				/>
			</div>
		</section>
	);
}
