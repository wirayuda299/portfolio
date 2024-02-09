import { Github } from 'lucide-react';
import { NextIcon } from '../shared/next-icon';

type ProjectLinkProps = {
	githubLink: string;
	demoLink: string;
};

function GlobeIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none'>
			<path
				d='M9 1a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm6.667 5.76c-.12.394-.321.759-.588 1.073s-.597.569-.967.749c-.197-.741-.562-1.427-1.066-2.005s-1.134-1.032-1.841-1.329a1.78 1.78 0 0 1 .702-.969c-.382-.249-.889-.373-1.191.062-.471.613 0 1.431.187 1.778v.124A2.73 2.73 0 0 1 9.8 4.964a4.62 4.62 0 0 0-2.453.613 3.06 3.06 0 0 1 .142-1.493c.321.031.645-.018.942-.142s.56-.319.764-.569c.409-.462-.116-1.049-.524-1.404h.32c1.21-.008 2.402.298 3.458.889.597.441 1.088 1.01 1.437 1.665s.548 1.38.581 2.121c.213 0 .622-.489.809-.818a6.99 6.99 0 0 1 .391.933zM9 15.969c-1.822-1.849.222-3.333-.889-4.658-.818-.755-2.036-.231-2.764-1.093-.123-.643-.07-1.307.154-1.922s.61-1.158 1.117-1.571c.462-.391 3.556-.889 4.818.196a4.64 4.64 0 0 1 1.484 2.436 2.09 2.09 0 0 0 1.173-.258c.365 2.649-2.8 5.991-5.093 6.871zM5.578 2.858c.34-.13.713-.142 1.061-.036s.65.325.859.623a2.6 2.6 0 0 1-1.333.64c.018-.262.075-.519.169-.764l-.756-.462z'
				fill='#0252cd'
			/>
		</svg>
	);
}
// stroke='#0252cd'

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
				<GlobeIcon />
				<span>Demo Site</span>
				<NextIcon color='#0252cd' />
			</a>
			<a
				href={githubLink}
				target='_blank'
				rel='noopener noreferrer'
				className='inline-flex items-center gap-1 text-sm font-semibold text-primary-light lg:text-lg'
			>
				<Github stroke='#000' />
				<span>Source Code</span>
				<NextIcon color='#0252cd' />
			</a>
		</div>
	);
}
