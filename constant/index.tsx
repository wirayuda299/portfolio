import { SunIcon, MoonIcon, DesktopIcon } from '@radix-ui/react-icons';

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
	{
		label: 'system',
		title: 'System',
		icon: <DesktopIcon />,
	},
] as const;
export const jobLists = [
	'Collaborated with a diverse international team, employing Git for version control and Asana for efficient project management and task tracking.',
	'Led the development lifecycle of various projects, starting from frontend design and ending with robust full-stack applications, ensuring seamless user experiences and high-quality code.',
	'Facilitated daily team meetings to discuss progress, challenges, and goals, fostering a collaborative environment and maintaining project momentum.',
	'Engaged in regular one-on-one meetings with mentors, discussing technical challenges, career development, and skill enhancement, leading to personal and professional growth.',
] as const;

export const services = [
	{
		title: 'Analytics & SEO',
		text: 'Implement tracking & analytics tools to monitor website performance & improve SEO.',
		lightIcon: '/assets/icons/services/pencil-light.svg',
	},
	{
		title: 'Front-End Dev',
		text: 'Front-end dev includes creating the user interface and interactive elements of websites and apps.',
		lightIcon: '/assets/icons/services/cursor-light.svg',
	},
	{
		title: 'Back-End Dev',
		text: 'Backend dev focus on server-side, databases, and APIs, ensuring seamless data management and communication between the user interface and the server.',
		lightIcon: '/assets/icons/services/code-light.svg',
	},
	{
		title: 'Web Optimization',
		text: 'Web optimization focuses on improving website performance for a smoother user experience',
		lightIcon: '/assets/icons/services/speed-light.svg',
	},
] as const;

export const skills = [
	{
		label: 'Javascript',
		lightIcon: '/assets/icons/skills/javascript-light.svg',
	},
	{
		label: 'React Js',
		lightIcon: '/assets/icons/skills/react-light.svg',
	},
	{
		label: 'Redux',
		lightIcon: '/assets/icons/skills/redux-light.svg',
	},
	{
		label: 'Next Js',
		lightIcon: '/assets/icons/skills/nextjs-light.svg',
	},
	{
		label: 'Typescript',
		lightIcon: '/assets/icons/skills/typescript-light.svg',
	},
	{
		label: 'Html',
		lightIcon: '/assets/icons/skills/html-light.svg',
	},
	{
		label: 'CSS',
		lightIcon: '/assets/icons/skills/css-light.svg',
	},
	{
		label: 'Sass',
		lightIcon: '/assets/icons/skills/sass-light.svg',
	},
	{
		label: 'Material UI',
		lightIcon: '/assets/icons/skills/mui-light.svg',
	},
	{
		label: 'Tailwind CSS',
		lightIcon: '/assets/icons/skills/tailwind-light.svg',
	},
	{
		label: 'Framer Motion',
		lightIcon: '/assets/icons/skills/framer-motion-light.svg',
	},
	{
		label: 'Git',
		lightIcon: '/assets/icons/skills/git-light.svg',
	},
	{
		label: 'Github',
		lightIcon: '/assets/icons/skills/github-light.svg',
	},
	{
		label: 'Node JS',
		lightIcon: '/assets/icons/skills/nodejs-light.svg',
	},
	{
		label: 'Express JS',
		lightIcon: '/assets/icons/skills/express-light.svg',
	},
	{
		label: 'Mongo DB',
		lightIcon: '/assets/icons/skills/mongo-light.svg',
	},
] as const;

export const socialLinks = [
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
