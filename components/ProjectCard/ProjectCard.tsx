import Image from 'next/image';

type ProjectCardProps = {
	backgroundColor: string;
	image: string;
	title: string;
	subTitle: string;
};

export default function ProjectCard({
	backgroundColor,
	image,
	subTitle,
	title,
}: ProjectCardProps) {
	return (
		<div className='h-full w-full max-w-[400px]'>
			<Image
				style={{
					backgroundColor,
				}}
				src={image}
				width={500}
				height={500}
				alt={title}
				className='mx-auto rounded-md object-cover object-bottom px-5 pt-5 lg:px-10 lg:pt-10'
			/>
			<h2 className='pt-5 text-xl font-semibold dark:text-white'>{title}</h2>
			<p className='text-sm text-white-500'>{subTitle}</p>
		</div>
	);
}
