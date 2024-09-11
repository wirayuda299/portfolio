import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

function LinkedIn() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='25'
			viewBox='0 0 24 25'
			fill='none'
		>
			<path
				d='M22.2975 1H2.69805C1.75918 1 1 1.74121 1 2.65762V22.3379C1 23.2543 1.75918 24 2.69805 24H22.2975C23.2363 24 24 23.2543 24 22.3424V2.65762C24 1.74121 23.2363 1 22.2975 1ZM7.82363 20.5994H4.40957V9.62051H7.82363V20.5994ZM6.1166 8.12461C5.02051 8.12461 4.13555 7.23965 4.13555 6.14805C4.13555 5.05645 5.02051 4.17148 6.1166 4.17148C7.2082 4.17148 8.09316 5.05645 8.09316 6.14805C8.09316 7.23516 7.2082 8.12461 6.1166 8.12461ZM20.5994 20.5994H17.1898V15.2627C17.1898 13.9914 17.1674 12.3518 15.4154 12.3518C13.641 12.3518 13.3715 13.7398 13.3715 15.1729V20.5994H9.96641V9.62051H13.2367V11.1209H13.2816C13.7354 10.2584 14.8494 9.34648 16.507 9.34648C19.9615 9.34648 20.5994 11.6195 20.5994 14.5754V20.5994Z'
				fill='#fff'
			/>
		</svg>
	);
}

export const navItems = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'Case Studies',
		path: '/case-studies',
	},
	{
		title: 'Contact',
		path: '/contact',
	},
	{
		title: 'Resume',
		path: '',
	},
] as const;

export const themeOptions = [
	{
		label: 'light',
		title: 'Light',
		icon: <SunIcon />,
	},
	{
		label: 'dark',
		title: 'Dark',
		icon: <MoonIcon />,
	},
] as const;

export const jobLists = [
	'Collaborated with a diverse international team, employing Git for version control and Asana for efficient project management and task tracking.',
	'Led the development lifecycle of various projects, starting from frontend design and ending with robust full-stack applications, ensuring seamless user experiences and high-quality code.',
	'Facilitated daily team meetings to discuss progress, challenges, and goals, fostering a collaborative environment and maintaining project momentum.',
	'Engaged in regular one-on-one meetings with Mentors, discussing technical challenges, career development, and skill enhancement, leading to personal and professional growth.',
] as const;

export const services = [
	{
		title: 'Analytics & SEO',
		text: 'Implement tracking & analytics tools to monitor website performance & improve SEO.',
		icon:'/assets/icons/pencil.svg'
	},
	{
		title: 'Front-End Dev',
		text: 'Front-end dev includes creating the user interface and interactive elements of websites and apps.',
      icon:'/assets/icons/cursor.svg'
	},
	{
		title: 'Back-End Dev',
		text: 'Focus on server-side, ensuring seamless data management and communication between the user interface and the server.',
		icon:'/assets/icons/code.svg'
	},
	{
		title: 'Web Optimization',
		text: 'Web optimization focuses on improving website performance for a smoother user experience',
		icon: '/assets/icons/speed.svg'
	},
] as const;

export const skills = [
	{
		label: 'Javascript',
		icon: '/assets/icons/js.svg',
	},
	{
		label: 'React Js',
		icon: '/assets/icons/react.svg'
	},
	{
		label: 'Redux',
		icon:  '/assets/icons/redux.svg'
	},
	{
		label: 'Next Js',
		icon: '/assets/icons/nextjs.svg'
	},
	{
		label: 'Typescript',
		icon:  '/assets/icons/ts.svg'
	},
	{
		label: 'Html',
		icon:  '/assets/icons/html.svg'
	},
	{
		label: 'CSS',
		icon:  '/assets/icons/css.svg'
	},
	{
		label: 'Sass',
		icon: '/assets/icons/sass.svg'
	},
	{
		label: 'Material UI',
		icon:  '/assets/icons/mui.svg'
	},
	{
		label: 'Tailwind CSS',
		icon:  '/assets/icons/tw.svg'
	},
	{
		label: 'Git',
		icon:  '/assets/icons/git.svg'
	},
	{
		label: 'Github',
		icon: '/assets/icons/github.svg'

	},
	{
		label: 'Node JS',
		icon: '/assets/icons/nodejs.svg'
	},
	{
		label: 'Express JS',
		icon:  '/assets/icons/express.svg'
	},
	{
		label: 'Mongo DB',
		icon:  '/assets/icons/mongo.svg'
	},
] as const;

export const socialLinks = [
	{
		link: 'https://www.linkedin.com/in/wira-yuda29/',
		label: 'Linkedln',
		darkIcon: <LinkedIn />,
	},
	{
		link: 'https://github.com/wirayuda299',
		label: 'Github',
		darkIcon: <LinkedIn  />,
	},
] as const;

export const formFields = [
	{
		label: 'name',
		title: 'What’s your name?',
		subTitle: '',
	},
	{
		label: 'email',
		title: 'What is your email?',
		subTitle: '',
	},
	{
		label: 'messageText',
		title: 'Write something about your project goals and timeframe',
		subTitle: '',
	},
	{
		label: 'senderContact',
		title: 'How to reach out to you back?',
		subTitle: 'eg. phone number or email ',
	},
] as const;

export const formReviewFields = [
	{
		label: 'star',
		title: 'Rating',
	},

	{
		label: 'name',
		title: 'Your Name',
	},
	{
		label: 'role',
		title: 'Your Role',
	},
	{
		label: 'comments',
		title: 'Give your feedback',
	},
] as const;
