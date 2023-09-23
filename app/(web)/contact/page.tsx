import { ContactForm, MyInfo } from '@/components/index';

export default function Contact() {
	return (
		<section>
			<div className='w-full py-6 text-center'>
				<h1 className=' mx-auto w-max  animate-fade-up text-4xl font-bold animate-once md:text-5xl'>
					<span className='relative z-[1] w-full before:absolute before:bottom-2 before:left-0 before:z-[-1] before:h-2 before:w-0 before:animate-increasing before:bg-secondary dark:text-white lg:before:bottom-3 lg:before:h-4 '>
						Get in Touch
					</span>
				</h1>
				<p className='animate-fade-up pt-5 text-center text-xs text-white-500 animate-once dark:text-white'>
					Let&apos;s Collaborate on Your Next Project
				</p>
			</div>
			<div className='flex flex-col items-center gap-10 bg-white p-8 dark:bg-black-200 md:flex-row-reverse md:items-start md:justify-center md:gap-14 md:p-12'>
				<ContactForm />
				<MyInfo />
			</div>
		</section>
	);
}
