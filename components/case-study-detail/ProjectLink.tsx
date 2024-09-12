import { ArrowRight, GlobeIcon } from 'lucide-react';
import Image from 'next/image';


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
        <Image src='/assets/icons/github.svg' width={20} height={20} alt='github'/>
				<span>Source Code</span>
				<ArrowRight color='#0252cd' />
			</a>
		</div>
	);
}
