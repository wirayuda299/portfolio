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
		path: '/assets/icons/javascript.svg',
	},
	{
		label: 'React Js',
		path: '/assets/icons/react.svg',
	},
	{
		label: 'Redux',
		path: '/assets/icons/redux.svg',
	},
	{
		label: 'Next Js',
		path: '/assets/icons/nextjs.svg',
	},
	{
		label: 'Typescript',
		path: '/assets/icons/typescript.svg',
	},
	{
		label: 'Html',
		path: '/assets/icons/html.svg',
	},
	{
		label: 'CSS',
		path: '/assets/icons/css.svg',
	},
	{
		label: 'Sass',
		path: '/assets/icons/sass.svg',
	},
	{
		label: 'Material UI',
		path: '/assets/icons/mui.svg',
	},
	{
		label: 'Tailwind CSS',
		path: '/assets/icons/tailwind.svg',
	},
	{
		label: 'Framer Motion',
		path: '/assets/icons/framer-motion.svg',
	},
	{
		label: 'Git',
		path: '/assets/icons/git.svg',
	},
	{
		label: 'Github',
		path: '/assets/icons/github.svg',
	},
	{
		label: 'Node JS',
		path: '/assets/icons/nodejs.svg',
	},
	{
		label: 'Express JS',
		path: '/assets/icons/express.svg',
	},
	{
		label: 'Mongo DB',
		path: '/assets/icons/mongo.svg',
	},
];

export const featureProjects = [
	{
		title: 'Morrent - A Car Rental Application',
		backgroundColor: '#416CEA',
		image: '/assets/images/mockup/morent_.png',
		techStacks: {
			frontend: ['ReactJS, NextJS'],
			backend: ['NodeJS, MongoDB'],
		},
	},
	{
		title: 'JobIT - A Job Finding Application',
		backgroundColor: '#0BAB7C',
		image: '/assets/images/mockup/JobIt.png',

		techStacks: {
			frontend: ['ReactJS, NextJS'],
			backend: ['NodeJS, MongoDB'],
		},
	},
	{
		title: 'Hipnode - A Social Media Application',
		backgroundColor: '#FF6934',
		image: '/assets/images/mockup/Hipnode.png',
		techStacks: {
			frontend: ['ReactJS, NextJS'],
			backend: ['NodeJS, MongoDB'],
		},
	},
];
