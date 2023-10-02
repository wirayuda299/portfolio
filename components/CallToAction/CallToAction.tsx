import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';

export default function CallToAction() {
	return (
		<section className=' flex h-full min-h-500 w-full items-center p-3 dark:bg-black-200 sm:p-6'>
			<div className="mx-auto flex h-full w-full max-w-1400 flex-col items-center justify-center rounded-xl bg-[url('/assets/images/cta.png')] bg-auto bg-center bg-no-repeat p-4 sm:aspect-video sm:h-[330px] sm:bg-cover sm:p-10 md:flex-row md:justify-between lg:p-12">
				<div className='max-w-xl'>
					<h2 className='p-5 text-3xl font-bold sm:text-center md:text-left md:text-[32px] lg:text-5xl'>
						Have a project in mind that requires technical expertise?
					</h2>
				</div>
				<Link
					href={'/contact'}
					className='w-full pt-4 min-[350px]:w-auto sm:pt-7'
				>
					<Button className='flex w-full items-center  gap-3 truncate rounded-full bg-primary-light text-sm font-semibold hover:bg-blue-600 dark:bg-primary-dark dark:text-white sm:text-xs'>
						Get in Touch with Me
						<Image
							className='w-4'
							src={'/assets/icons/next.svg'}
							width={40}
							height={40}
							alt='next arrow icon'
						/>
					</Button>
				</Link>
			</div>
		</section>
	);
}
