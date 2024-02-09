import { socialLinks } from '@/constant';

export default function Footer() {
	return (
		<footer className='w-full border-t bg-white dark:border-t-black-300 dark:bg-black-200 '>
			<div className='mx-auto w-full max-w-1400'>
				<div className='flex h-full flex-col items-center gap-4 px-3 py-4 sm:h-20  sm:flex-row sm:justify-between sm:px-8'>
					<div className='text-center text-xs text-white-500 dark:text-white sm:text-sm md:text-lg'>
						<p className='whitespace-nowrap'>
							© 2023 Wirayuda. <span>All rights reserved.</span>
						</p>
					</div>
					<div className='inline-flex gap-6'>
						{socialLinks.map((item) => (
							<a
								href={item.link}
								key={item.label}
								target='_blank'
								title={item.label}
							>
								{item.darkIcon}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
