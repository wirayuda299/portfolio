type ProjectTitleProps = {
	title: string;
	shortDesc: string;
};

export default function ProjectTitle({ title, shortDesc }: ProjectTitleProps) {
	return (
		<section>
			<p className='text-center text-sm font-semibold uppercase text-primary-light'>
				web dev project
			</p>
			<h1 className='mx-auto max-w-880 pt-3 text-center text-3xl font-bold text-white lg:text-6xl'>
				<span className='relative z-[1] before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary lg:before:bottom-2'>
					{title}
				</span>{' '}
				- {shortDesc}
			</h1>
		</section>
	);
}
