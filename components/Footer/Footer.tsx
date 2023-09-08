import Image from 'next/image';

const socialIcons = [
	{
		link: 'https://www.instagram.com/wiiiraaaaa_/',
		label: 'Instagram',
		darkIcon: '/assets/icons/footer/instagram.svg',
		lightIcon: '/assets/icons/footer/instagram-light.svg',
	},
	{
		link: 'https://www.linkedin.com/in/wira-yuda29/',
		label: 'Linkedln',
		darkIcon: '/assets/icons/footer/linkedln.svg',
		lightIcon: '/assets/icons/footer/linkedln-light.svg',
	},
	{
		link: 'https://github.com/footer/wirayuda299',
		label: 'Github',
		darkIcon: '/assets/icons/footer/github.svg',
		lightIcon: '/assets/icons/footer/github-light.svg',
	},
];

export default function Footer() {
	return (
		<footer>
			<div className=' w-full border-t bg-white  dark:border-t-black-300 dark:bg-black-200'>
				<div className='flex  h-full flex-col items-center gap-4 px-3 py-4 sm:h-20  sm:flex-row sm:justify-between sm:px-8'>
					<div className='text-center text-xs text-white-500 dark:text-white sm:text-sm md:text-lg'>
						<p className='whitespace-nowrap'>
							© 2023 Wirayuda. <span>All rights reserved.</span>
						</p>
					</div>
					<div className='inline-flex gap-6'>
						{socialIcons.map((icon) => (
							<a
								href={icon.link}
								key={icon.label}
								target='_blank'
								title={icon.label}
							>
								<Image
									src={icon.darkIcon}
									width={40}
									className='h-5 w-5 dark:hidden'
									height={40}
									alt='social icon'
								/>
								<Image
									src={icon.lightIcon}
									width={40}
									className='hidden h-5 w-5 dark:block'
									height={40}
									alt='social icon'
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
