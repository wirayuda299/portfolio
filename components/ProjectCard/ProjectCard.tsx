import Image from 'next/image';
import Link from 'next/link';
import type { Image as SanityImage } from 'sanity';

import { urlForImage } from '@/sanity/lib/image';

type ProjectCardProps = {
	backgroundColor: string;
	mockup: SanityImage;
	title: string;
	subTitle: string;
	_id: string;
	index: number;
};

export default function ProjectCard({
	backgroundColor,
	mockup,
	subTitle,
	title,
	_id,
	index,
}: ProjectCardProps) {
	return (
		<Link
			style={{
				animationDelay: `${index * 100}ms`,
			}}
			className='h-full w-full max-w-[400px] animate-fade-in opacity-0'
			href={`/project/${_id}`}
			prefetch={false}
		>
			<Image
				style={{
					backgroundColor,
				}}
				src={urlForImage(mockup).url()}
				width={500}
				height={500}
				priority
				fetchPriority='high'
				alt={title}
				className='mx-auto rounded-md object-cover object-bottom px-5 pt-5 lg:px-10 lg:pt-10'
			/>
			<h2 className='pt-5 text-xl font-semibold dark:text-white'>{title}</h2>
			<p className='text-sm text-white-500'>{subTitle}</p>
		</Link>
	);
}
