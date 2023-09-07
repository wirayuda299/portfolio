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
		icon: '/assets/icons/pencil.svg',
	},
	{
		title: 'Front-End Dev',
		text: 'Front-end dev includes creating the user interface and interactive elements of websites and apps.',
		icon: '/assets/icons/cursor.svg',
	},
	{
		title: 'Back-End Dev',
		text: 'Front-end includes creating the user interface and interactive elements of websites and apps.',
		icon: '/assets/icons/code.svg',
	},
	{
		title: 'Web Optimization',
		text: 'Web optimization focuses on improving website performance for a smoother user experience',
		icon: '/assets/icons/speed.svg',
	},
];
