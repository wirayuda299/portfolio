import Github from '../home/Skills/icons/github';
import { NextIcon } from '../shared/next-icon';

function GlobeIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none'>
			<path
				d='M9 1a8 8 0 1 0 0 16A8 8 0 1 0 9 1zm6.667 5.76c-.12.394-.321.759-.588 1.073a2.98 2.98 0 0 1-.967.749 5.01 5.01 0 0 0-1.066-2.005 5.02 5.02 0 0 0-1.841-1.329 1.78 1.78 0 0 1 .702-.969c-.382-.249-.889-.373-1.191.062-.471.613 0 1.431.187 1.778v.124A2.73 2.73 0 0 1 9.8 4.964a4.62 4.62 0 0 0-2.453.613 3.06 3.06 0 0 1 .142-1.493 1.96 1.96 0 0 0 .942-.142 1.96 1.96 0 0 0 .764-.569c.409-.462-.116-1.049-.524-1.404h.32c1.21-.008 2.402.298 3.458.889.597.441 1.088 1.01 1.437 1.665s.548 1.38.581 2.121c.213 0 .622-.489.809-.818a6.99 6.99 0 0 1 .391.933zM9 15.969c-1.822-1.849.222-3.333-.889-4.658-.818-.755-2.036-.231-2.764-1.093-.123-.643-.07-1.307.154-1.922s.61-1.158 1.117-1.571c.462-.391 3.556-.889 4.818.196a4.64 4.64 0 0 1 1.484 2.436 2.09 2.09 0 0 0 1.173-.258c.365 2.649-2.8 5.991-5.093 6.871zM5.578 2.858c.34-.13.713-.142 1.061-.036a1.63 1.63 0 0 1 .859.623 2.6 2.6 0 0 1-1.333.64c.018-.262.075-.519.169-.764l-.756-.462z'
				fill='#0252cd'
			/>
		</svg>
	);
}

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
				<Github height={24} width={25} />
				<span>Source Code</span>
				<NextIcon color='#0252cd' />
			</a>
		</div>
	);
}
