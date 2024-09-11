import { Github, Linkedin } from "lucide-react";

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
		icon: <Linkedin />,
	},
	{
		link: 'https://github.com/wirayuda299',
		label: 'Github',
		icon: <Github  />,
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
