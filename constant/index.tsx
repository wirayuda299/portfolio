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
];

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
];

export const services = [
	{
		title: 'Analytics & SEO',
		text: 'Implement tracking & analytics tools to monitor website performance & improve SEO.',
		lightIcon: '/assets/icons/services/pencil-light.svg',
		darkIcon: '/assets/icons/services/pencil-dark.svg',
	},
	{
		title: 'Front-End Dev',
		text: 'Front-end dev includes creating the user interface and interactive elements of websites and apps.',
		lightIcon: '/assets/icons/services/cursor-light.svg',
		darkIcon: '/assets/icons/services/cursor-dark.svg',
	},
	{
		title: 'Back-End Dev',
		text: 'Front-end includes creating the user interface and interactive elements of websites and apps.',
		lightIcon: '/assets/icons/services/code-light.svg',
		darkIcon: '/assets/icons/services/code-dark.svg',
	},
	{
		title: 'Web Optimization',
		text: 'Web optimization focuses on improving website performance for a smoother user experience',
		lightIcon: '/assets/icons/services/speed-light.svg',
		darkIcon: '/assets/icons/services/speed-dark.svg',
	},
];

export const backgrounds = [
	{
		title: 'Slack',
		lightIcon: '/assets/icons/slack.svg',
		subTitle: 'Product Design - 4 Years Experince',
		darkIcon: '/assets/icons/slack-dark.svg',
	},
	{
		title: 'Firefox',
		lightIcon: '/assets/icons/firefox.svg',
		subTitle: 'Product Design - 4 Years Experince',
		darkIcon: '/assets/icons/firefox.svg',
	},
	{
		title: 'Digital Ocean',
		lightIcon: '/assets/icons/digital-ocean.svg',
		subTitle: 'Product Design - 4 Years Experince',
		darkIcon: '/assets/icons/digital-ocean-dark.svg',
	},
	{
		title: 'Mailchimp',
		lightIcon: '/assets/icons/mailchimp.svg',
		subTitle: 'Product Design - 4 Years Experince',
		darkIcon: '/assets/icons/mailchimp-dark.svg',
	},
];

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
];

export const footerData = [
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

export const featureProjects = [
	{
		label: 'morrent',
		title: 'Morrent - A Car Rental Application',
		backgroundColor: '#416CEA',
		image: '/assets/images/mockup/morent_.png',
		techStacks: {
			frontend: ['ReactJS, NextJS'],
			backend: ['NodeJS, MongoDB'],
		},
	},
	{
		label: 'jobit',
		title: 'JobIT - A Job Finding Application',
		backgroundColor: '#0BAB7C',
		image: '/assets/images/mockup/JobIt.png',
		techStacks: {
			frontend: ['ReactJS, NextJS'],
			backend: ['NodeJS, MongoDB'],
		},
	},
	{
		label: 'hipnode',
		title: 'Hipnode - A Social Media Application',
		backgroundColor: '#FF6934',
		image: '/assets/images/mockup/Hipnode.png',
		techStacks: {
			frontend: ['ReactJS, NextJS'],
			backend: ['NodeJS, MongoDB'],
		},
	},
];

export const caseStudies = [
	{
		title: 'Morrent',
		subTitle: 'Car Rental Application',
		image: '/assets/images/morent.png',
		backgroundColor: '#5CAFFC',
	},
	{
		title: 'JobIt',
		subTitle: 'Job Finding Application',
		image: '/assets/images/JobIT-Laptop.png',
		backgroundColor: '#0BAB7C',
	},
	{
		title: 'HipNode',
		subTitle: 'Social Platform for Developers',
		image: '/assets/images/Hipnode-Laptop.png',
		backgroundColor: '#FF6934',
	},
	{
		title: 'Trip Guide ',
		subTitle: 'Booking Platform',
		image: '/assets/images/TripGuide-Laptop.png',
		backgroundColor: '#316BFF',
	},
	{
		title: 'Virtue',
		subTitle: 'Crowdfunding Application',
		image: '/assets/images/Virtue-Laptop.png',
		backgroundColor: '#4ACD8D',
	},
	{
		title: 'Filmpire',
		subTitle: 'AI-Powered Movie Application',
		image: '/assets/images/Filmpire-Laptop.png',
		backgroundColor: '#DB202C',
	},
];
