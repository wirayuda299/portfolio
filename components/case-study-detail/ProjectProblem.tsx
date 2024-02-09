import Image from 'next/image';

type ProjectProblemProps = {
	text: string;
	image: string;
};

export default function ProjectProblem({ text, image }: ProjectProblemProps) {
	return (
		<section className='mt-10 size-full bg-white dark:bg-black-200'>
			<div className='mx-auto mt-7 flex max-w-880 flex-col gap-5 px-3 py-10 '>
				<p className='text-sm font-semibold text-primary-light'>Problem</p>
				<h2 className='text-lg font-semibold dark:text-white'>
					Problem Statement
				</h2>
				<p className='py-6 text-sm text-white-500 dark:text-white lg:text-lg'>
					{text}
				</p>
				<Image
					width={1000}
					height={500}
					sizes='100vw'
					className='mb-6 w-full object-contain'
					src={image}
					loading='lazy'
					alt='illustration image'
				/>
			</div>
		</section>
	);
}
