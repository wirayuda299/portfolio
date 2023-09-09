import Image from 'next/image';

import { skills } from '@/constant';
import { Button } from '@/components/ui/button';
const projectInfo = [
	{
		label: 'My Role',
		text: 'Software Engineer',
	},
	{
		label: 'Start Date',
		text: '24/01/2023',
	},
	{
		label: 'End Date',
		text: '02/03/2023',
	},
];

const projectDescriptions = [
	'Morent, a cutting-edge car rental application that was developed using the MERN stack. The app boasts a dynamic homepage that showcases featured vehicles, along with convenient pickup & drop-off location options & a comprehensive list of available cars.',
	'My team and I also developed the car listing page which offers a search bar and various filtering options for users to find the perfect vehicle. Additionally, it has a car details page which provides users with detailed information along with suggestions for other recommended vehicles.',
	'Car owners are also able to list their cars for rent through our Add Car page, while users can easily track their rented and rented-out cars through their profile page. Overall, we have ve created an intuitive and user-friendly MVP version of the platform that will make renting a car a breeze',
];

const process = [
	{
		label: 'Definition',
		icon: '/assets/icons/pencil_underline.svg',
	},
	{
		label: 'Design',
		icon: '/assets/icons/picture.svg',
	},
	{
		label: 'Planning',
		icon: '/assets/icons/note.svg',
	},
	{
		label: 'Development',
		icon: '/assets/icons/code.svg',
	},
	{
		label: 'Deployment',
		icon: '/assets/icons/computer.svg',
	},
];

const challenges = [
	'Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.',
	'We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us, and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project. ',
	'However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.',
];
const learnings = [
	'Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols such as JSON Web Tokens.',
	'Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.',
	'Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app is data is organized & easily accessible while keeping it secure.',
	'Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.',
];

export default function ProjectDetail() {
	return (
		<div className='w-full'>
			<section>
				<p className='text-center text-sm font-semibold uppercase text-primary-light'>
					web dev project
				</p>
				<h1 className='mx-auto max-w-4xl pt-3 text-center text-3xl font-bold dark:text-white lg:text-5xl'>
					<span className='relative z-[1] before:absolute before:bottom-1 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary lg:before:bottom-2'>
						Morrent
					</span>{' '}
					- A Car Rental Website
				</h1>
			</section>
			<section>
				<div className=' px-3 pt-7'>
					<Image
						className='mx-auto'
						src='/assets/images/mockup/morent_.png'
						width={500}
						height={500}
						alt='Morent'
					/>
					<div className='flex justify-center gap-5 pt-6'>
						<a
							href='/'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-1 text-sm font-semibold text-primary-light'
						>
							<Image
								className='h-3 w-3'
								src='/assets/icons/globe.svg'
								width={40}
								height={40}
								alt='globe icon'
							/>
							<span>Demo Site</span>
							<Image
								className='h-3 w-3 invert dark:filter-none'
								src='/assets/icons/next.svg'
								width={40}
								height={40}
								alt='arrow icon'
							/>
						</a>
						<a
							href='/'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-1 text-sm font-semibold text-primary-light'
						>
							<Image
								className='h-3 w-3 '
								src='/assets/icons/skills/github.svg'
								width={40}
								height={40}
								alt='github icon'
							/>
							<span>Source Code</span>
							<Image
								className='h-3 w-3 !text-primary-light invert  dark:filter-none'
								src='/assets/icons/next.svg'
								width={40}
								height={40}
								alt='arrow icon'
							/>
						</a>
					</div>
				</div>
			</section>
			<section className='mt-10 h-full w-full  bg-white dark:bg-black-200'>
				<div className='mx-auto max-w-[600px] pb-10'>
					<div className='flex flex-wrap justify-start gap-9 px-5 py-10 sm:px-2'>
						{projectInfo.map((info) => (
							<div key={info.label} className='max-w-[200px]'>
								<h2 className='text-sm font-semibold text-white-500'>
									{info.label}
								</h2>
								<p className='pt-2 text-xl font-semibold dark:text-white'>
									{info.text}
								</p>
							</div>
						))}
					</div>
					<div className='mt-20 flex flex-col items-start p-5 sm:p-3'>
						<p className='text-sm font-semibold text-primary-light'>
							Technologies used
						</p>
						<h2 className='text-3xl font-semibold text-black dark:text-white'>
							Tech Stack
						</h2>
						<div className=' flex flex-wrap gap-9 pt-7'>
							{skills.map((skill) => (
								<div
									key={skill.label}
									className='h-16 w-16 rounded-full bg-white-800 p-3 shadow-lg dark:bg-black-300
                  '
								>
									<Image
										src={skill.lightIcon}
										alt={skill.label}
										width={40}
										height={40}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
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
			<section className='mt-10 h-full w-full  bg-white dark:bg-black-200'>
				<div className='mx-auto mt-7 flex max-w-[600px] flex-col gap-5 px-9 py-10 sm:px-3'>
					<p className='text-sm font-semibold text-primary-light'>Problem</p>
					<h2 className='text-lg font-semibold dark:text-white'>
						Problem Statement
					</h2>
					<p className='py-6 text-sm text-white-500 dark:text-white lg:text-base'>
						One of the main problems that people face when looking to rent a car
						is the hassle of finding a reliable and user-friendly platform to
						search for and book rental cars. In addition, car owners who want to
						rent out their vehicles often struggle to find a suitable platform
						to list their cars and manage their rentals.
					</p>
					<Image
						className='w-full object-cover'
						src={'/assets/images/car.png'}
						width={500}
						height={500}
						alt='car image'
					/>
				</div>
			</section>
			<section className=' mx-auto max-w-[1400px]'>
				<div className='bg-primary-light py-4 dark:bg-primary-dark '>
					<h2 className='text-center text-sm font-semibold uppercase text-white lg:text-3xl'>
						High-Fidelity Figma Design
					</h2>
				</div>
				<div className='relative min-h-[500px] w-full'>
					<Image
						fill
						className='object-cover'
						src={'/assets/images/design.png'}
						alt='figma design image'
					/>
				</div>
			</section>
			<section className='bg-white py-10 dark:bg-black-200'>
				<div className='mx-auto mt-7 flex max-w-[600px] flex-col gap-5 px-9 py-10 sm:px-3'>
					<p className='text-sm font-semibold text-primary-light'>
						Way of work
					</p>
					<h2 className='pt-1 text-lg font-semibold text-black dark:text-white'>
						My Process
					</h2>
					<div className='flex flex-wrap justify-center gap-11 pt-8'>
						{process.map((p) => (
							<div key={p.label} className='flex flex-col items-center'>
								<div className=' flex h-16 w-16 items-center justify-center rounded-full bg-white-800 dark:bg-black-300'>
									<Image
										src={p.icon}
										className='mx-auto'
										width={40}
										height={40}
										alt={p.label}
									/>
								</div>
								<p className='py-2 text-center text-sm font-semibold text-black dark:text-white'>
									{p.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className='bg-white dark:bg-black-200'>
				<div className='mx-auto flex max-w-[600px] flex-col gap-5 px-9 py-10 sm:px-3'>
					<p className='text-sm font-semibold text-primary-light'>Problem</p>
					<h2 className='text-2xl font-semibold text-black dark:text-white'>
						Challenges & Learnings
					</h2>
					<div className='bg-white-800 p-5 dark:bg-black-300'>
						<h3 className='text-lg font-semibold uppercase text-[#E15A46]'>
							Challenges
						</h3>
						<div className='flex flex-col gap-5 pt-9'>
							{challenges.map((challenge) => (
								<div key={challenge} className='flex gap-3'>
									<Image
										src={'/assets/icons/challenge.svg'}
										width={40}
										height={40}
										alt='challenge icon'
									/>
									<p className='text-sm text-white-500 dark:text-white'>
										{challenge}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className='mt-5  bg-white-800 p-5 dark:bg-black-300'>
						<h3 className='text-lg font-semibold uppercase text-[#02BC7D]'>
							Learnings
						</h3>
						<div className='flex flex-col gap-5 pt-9'>
							{learnings.map((learning) => (
								<div key={learning} className='flex gap-3'>
									<Image
										src={'/assets/icons/check.svg'}
										width={40}
										height={40}
										alt='check icon'
									/>
									<p className='text-sm text-white-500 dark:text-white'>
										{learning}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className='dark:bg-black-300'>
				<div className='mx-auto mt-7 flex max-w-[650px] flex-col  gap-5 px-9 py-10 sm:px-3'>
					<p className='text-left text-sm font-semibold text-primary-light'>
						Projects
					</p>
					<h2 className='text-2xl font-semibold text-black dark:text-white'>
						Other Case Studies
					</h2>
					<div className='flex flex-wrap justify-center gap-6'>
						{[1, 2].map((p) => (
							<div
								className='max-w-[300px] rounded-lg bg-white shadow-md dark:bg-black-300 '
								key={p}
							>
								<Image
									className=' rounded-lg'
									src={'/assets/images/jobit.png'}
									width={500}
									height={500}
									alt='Jobit'
								/>
								<div className='p-4'>
									<h3 className='text-base font-semibold text-primary-light'>
										JobIt
									</h3>
									<p className='py-3  text-sm text-white-500 dark:text-white'>
										Jobit, a web app made with React and JSearch API, links
										developers to millions of job openings. It offers easy job
										search by...
									</p>
									<Button className='w-full rounded-full bg-primary-light text-white dark:bg-primary-dark'>
										See Case Study
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
