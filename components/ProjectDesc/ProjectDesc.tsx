import { projectDescriptions } from '@/constant';

export default function ProjectDesc() {
	return (
		<section className='mx-auto mt-7 flex max-w-600 flex-col gap-5 px-9 py-10 sm:px-3'>
			{projectDescriptions.map((desc) => (
				<p
					key={desc}
					className='text-sm text-white-500 dark:text-white lg:text-base'
				>
					{desc}
				</p>
			))}
		</section>
	);
}
