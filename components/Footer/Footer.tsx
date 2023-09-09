import Image from 'next/image';

import { footerData } from '@/constant';

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
						{footerData.map((item) => (
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
				</div>
			</div>
		</footer>
	);
}
