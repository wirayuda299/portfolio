import Image from 'next/image';

type ProjectLinkProps = {
	githubLink: string;
	demoLink: string;
};

export default function ProjectLink({
	demoLink,
	githubLink,
}: ProjectLinkProps) {
	return (
		<div className='flex justify-center gap-5 pt-6'>
			<a
				href={demoLink}
				target='_blank'
				rel='noopener noreferrer'
				className='inline-flex items-center gap-1 text-sm font-semibold text-primary-light lg:text-lg'
			>
				<Image
					className='h-3 w-4'
					src='/assets/icons/globe.svg'
					width={40}
					height={40}
					alt='globe icon'
				/>
				<span>Demo Site</span>
				<Image
					className='h-3 w-4 '
					src='/assets/icons/next-blue.svg'
					width={40}
					height={40}
					alt='arrow icon'
				/>
			</a>
			<a
				href={githubLink}
				target='_blank'
				rel='noopener noreferrer'
				className='inline-flex items-center gap-1 text-sm font-semibold text-primary-light lg:text-lg'
			>
				<Image
					className='h-3 w-3 '
					src='/assets/icons/skills/github.svg'
					width={40}
					height={40}
					alt='github icon'
				/>
				<span>Source Code</span>
				<Image
					className='h-3 w-3 !text-primary-light '
					src='/assets/icons/next-blue.svg'
					width={40}
					height={40}
					alt='arrow icon'
				/>
			</a>
		</div>
	);
}
