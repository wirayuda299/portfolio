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
