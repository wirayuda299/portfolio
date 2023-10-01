import Image from 'next/image';

import { socialLinks } from '@/constant';

export default function MyInfo() {
	return (
		<section className='flex w-full max-w-xl animate-fade-right flex-col justify-self-start opacity-0 animate-once sm1:pl-10 md:w-auto md:pl-0'>
			<div>
				<h2 className='text-sm font-light text-black dark:text-white'>
					My Socials
				</h2>
				<div className='inline-flex gap-6 pt-3'>
					{socialLinks.map((item) => (
						<a
							href={item.link}
							key={item.label}
							target='_blank'
							title={item.label}
						>
							<Image
								src={item.darkIcon}
								width={40}
								className='h-5 w-5 dark:hidden'
								height={40}
								alt='social icon'
							/>
							<Image
								src={item.lightIcon}
								width={40}
								className='hidden h-5 w-5 dark:block'
								height={40}
								alt='social icon'
							/>
						</a>
					))}
				</div>
				<div className='pt-9'>
					<h2 className='text-sm font-light text-black dark:text-white'>
						Phone Number
					</h2>
					<div className='inline-flex gap-x-2 pt-1'>
						<Image
							src={'/assets/icons/phone.svg'}
							width={40}
							className='h-5 w-5 dark:hidden'
							height={40}
							alt='social icon'
						/>
						<span className='text-base font-semibold text-white-500 dark:text-white'>
							+6287 833 328 287
						</span>
					</div>
				</div>
				<div className='pt-9'>
					<h2 className='text-sm font-light text-black dark:text-white'>
						Email Address
					</h2>
					<p className='text-base font-semibold text-white-500 dark:text-white'>
						wirayuda233@gmail.com
					</p>
				</div>
			</div>
		</section>
	);
}
