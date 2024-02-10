import dynamic from 'next/dynamic';

import { socialLinks } from '@/constant';

const ContactForm = dynamic(() =>
	import('@/components/index').then((mod) => mod.ContactForm)
);

export const metadata = {
	title: 'Contact',
};

function PhoneIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'>
			<path
				fillRule='evenodd'
				d='M11.532 12.472c3.989 3.988 4.894-.626 7.434 1.912 2.449 2.448 3.856 2.938.754 6.04-.389.312-2.858 4.07-11.535-4.605S3.262 4.672 3.574 4.284c3.11-3.11 3.592-1.695 6.041.753 2.54 2.539-2.072 3.447 1.917 7.435z'
				fill='#778295'
			/>
		</svg>
	);
}

export default function Contact() {
	return (
		<main className='w-full'>
			<div className='w-full py-6 text-center'>
				<h1 className='mx-auto w-max animate-fade-up text-4xl font-bold md:text-5xl'>
					<span className='relative z-[1] w-full before:absolute before:bottom-1 before:left-0 before:z-[-1] before:h-3 before:w-0 before:animate-increasing before:bg-secondary dark:text-white '>
						Get in Touch
					</span>
				</h1>
				<p className='animate-fade-up pt-5 text-center text-xs text-white-500 dark:text-white'>
					Let&apos;s Collaborate on Your Next Project
				</p>
			</div>
			<section className='flex flex-col items-center gap-10 bg-white p-8 dark:bg-black-200 md:flex-row-reverse md:items-start md:justify-center md:gap-14 md:p-12'>
				<ContactForm />
				<section className='flex w-full max-w-xl animate-fade-right flex-col justify-self-start opacity-0 sm1:pl-10 md:w-auto md:pl-0'>
					<div>
						<h2 className='text-sm font-light text-black dark:text-white'>
							My Socials
						</h2>
						<div className='inline-flex gap-6 pt-3'>
							{socialLinks.map((item) => (
								<a
									className='invert dark:invert-0'
									href={item.link}
									key={item.label}
									target='_blank'
									title={item.label}
								>
									{item.darkIcon}
								</a>
							))}
						</div>
						<div className='pt-9'>
							<h2 className='text-sm font-light text-black dark:text-white'>
								Phone Number
							</h2>
							<div className='inline-flex gap-x-2 pt-1'>
								<PhoneIcon />
								<a
									href='tel:+6287 833 328 287'
									className='text-base font-semibold text-white-500 dark:text-white'
								>
									+6287 833 328 287
								</a>
							</div>
						</div>
						<div className='pt-9'>
							<h2 className='text-sm font-light text-black dark:text-white'>
								Email Address
							</h2>
							<a
								href='mailto:wirayuda233@gmail.com'
								target='_blank'
								className='text-base font-semibold text-white-500 dark:text-white'
							>
								wirayuda233@gmail.com
							</a>
						</div>
					</div>
				</section>
			</section>
		</main>
	);
}
