import { ArrowRight, GlobeIcon, Linkedin } from 'lucide-react';


export default function ProjectLink({
	demoLink,
	githubLink,
}: {
	githubLink: string;
	demoLink: string;
}) {
	return (
		<div className='flex justify-center gap-5 pt-6'>
			<a
				href={demoLink}
				target='_blank'
				rel='noopener noreferrer'
				className='inline-flex items-center gap-1 text-sm font-semibold text-primary-light lg:text-lg'
			>
				<GlobeIcon/>
				<span>Demo Site</span>
				<ArrowRight color='#0252cd' />
			</a>
			<a
				href={githubLink}
				target='_blank'
				rel='noopener noreferrer'
				className='inline-flex items-center gap-1 text-sm font-semibold text-primary-light lg:text-lg'
			>
				<Linkedin height={24} width={25} />
				<span>Source Code</span>
				<ArrowRight color='#0252cd' />
			</a>
		</div>
	);
}
