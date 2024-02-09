import MuiIcon from '@/components/home/Skills/icons/MUI';
import CssIcon from '@/components/home/Skills/icons/css';
import Express from '@/components/home/Skills/icons/express';
import FramerMotion from '@/components/home/Skills/icons/framer-motion';
import Git from '@/components/home/Skills/icons/git';
import Github from '@/components/home/Skills/icons/github';
import HtmlIcon from '@/components/home/Skills/icons/html';
import JavascriptIcon from '@/components/home/Skills/icons/javascript';
import Mongodb from '@/components/home/Skills/icons/mongodb';
import NextJSIcon from '@/components/home/Skills/icons/nextjs';
import Nodejs from '@/components/home/Skills/icons/nodejs';
import ReactIcon from '@/components/home/Skills/icons/react';
import ReduxIcon from '@/components/home/Skills/icons/redux';
import SassIcon from '@/components/home/Skills/icons/sass';
import TailwindIcon from '@/components/home/Skills/icons/tailwind';
import TypescriptIcon from '@/components/home/Skills/icons/typescript';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

function PencilLight() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='25'
			height='24'
			viewBox='0 0 25 24'
			fill='none'
		>
			<path
				d='M3.49989 17.25V21H7.24989L18.3099 9.93001L14.5599 6.18001L3.49989 17.25ZM23.1099 18.36L18.8599 22.61L13.6599 17.41L15.4299 15.64L16.4299 16.64L18.8999 14.16L20.3199 15.58L18.8599 17L19.9199 18L21.3399 16.6L23.1099 18.36ZM7.10989 10.83L1.88989 5.64001L6.13989 1.39001L7.89989 3.16001L5.42989 5.64001L6.49989 6.70001L8.95989 4.22001L10.3799 5.64001L8.95989 7.05001L9.95989 8.05001L7.10989 10.83ZM21.2099 7.00001C21.5999 6.61001 21.5999 6.00001 21.2099 5.59001L18.8699 3.29001C18.4999 2.90001 17.8499 2.90001 17.4599 3.29001L15.6199 5.12001L19.3699 8.87001L21.2099 7.00001Z'
				fill='#0252cd'
			/>
		</svg>
	);
}

function Cursor() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' fill='none'>
			<path
				d='M21.526 13.21a1 1 0 0 0-.396-1.024l-14-10a1 1 0 0 0-1.092-.049 1 1 0 0 0-.483.98l2 17a1 1 0 0 0 .713.843 1 1 0 0 0 1.054-.327l3.612-4.416 3.377 5.46 1.701-1.052-3.357-5.428 6.089-1.218c.191-.037.367-.13.506-.267s.235-.311.276-.502z'
				fill='#0252cd'
			/>
		</svg>
	);
}

function Code() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='25'
			height='24'
			viewBox='0 0 25 24'
			fill='none'
		>
			<g clipPath='url(#clip0_3313_11557)'>
				<path
					d='M22.7491 2H2.44137C1.95174 2 1.48216 2.19156 1.13594 2.53253C0.78972 2.87351 0.595215 3.33597 0.595215 3.81818V20.1818C0.595215 20.664 0.78972 21.1265 1.13594 21.4675C1.48216 21.8084 1.95174 22 2.44137 22H22.7491C23.2387 22 23.7083 21.8084 24.0545 21.4675C24.4007 21.1265 24.5952 20.664 24.5952 20.1818V3.81818C24.5952 3.33597 24.4007 2.87351 24.0545 2.53253C23.7083 2.19156 23.2387 2 22.7491 2ZM8.53368 14C8.72953 14.1447 8.85901 14.36 8.89363 14.5987C8.92825 14.8374 8.86518 15.0798 8.71829 15.2727C8.5714 15.4656 8.35273 15.5931 8.11037 15.6272C7.86802 15.6613 7.62184 15.5992 7.42598 15.4545L3.73368 12.7273C3.61903 12.6426 3.52598 12.5328 3.4619 12.4066C3.39781 12.2803 3.36445 12.1411 3.36445 12C3.36445 11.8589 3.39781 11.7197 3.4619 11.5934C3.52598 11.4672 3.61903 11.3574 3.73368 11.2727L7.42598 8.54545C7.62184 8.40079 7.86802 8.33868 8.11037 8.37277C8.35273 8.40687 8.5714 8.53439 8.71829 8.72727C8.86518 8.92016 8.92825 9.16261 8.89363 9.40129C8.85901 9.63998 8.72953 9.85534 8.53368 10L5.8256 12L8.53368 14ZM15.3287 5.88636L11.6364 18.6136C11.6049 18.7305 11.5501 18.8399 11.4752 18.9356C11.4002 19.0314 11.3067 19.1114 11.1999 19.1711C11.0932 19.2307 10.9755 19.2689 10.8536 19.2832C10.7318 19.2975 10.6082 19.2878 10.4903 19.2546C10.3723 19.2213 10.2622 19.1652 10.1665 19.0896C10.0708 19.014 9.99132 18.9203 9.9328 18.814C9.87427 18.7078 9.83785 18.5912 9.82565 18.4709C9.81345 18.3506 9.82572 18.2292 9.86175 18.1136L13.5541 5.38636C13.625 5.15879 13.7838 4.96771 13.9963 4.85419C14.2087 4.74066 14.458 4.71375 14.6904 4.77923C14.9228 4.84471 15.1198 4.99736 15.2392 5.20437C15.3585 5.41139 15.3907 5.65626 15.3287 5.88636ZM21.4568 12.7273L17.7644 15.4545C17.5686 15.5992 17.3224 15.6613 17.0801 15.6272C16.8377 15.5931 16.619 15.4656 16.4721 15.2727C16.3252 15.0798 16.2622 14.8374 16.2968 14.5987C16.3314 14.36 16.4609 14.1447 16.6568 14L19.3648 12L16.6568 10C16.5598 9.92837 16.4781 9.83863 16.4163 9.7359C16.3546 9.63318 16.3139 9.51948 16.2968 9.40129C16.2797 9.28311 16.2863 9.16276 16.3164 9.04711C16.3465 8.93146 16.3994 8.82278 16.4721 8.72727C16.5449 8.63177 16.636 8.5513 16.7403 8.49048C16.8446 8.42965 16.9601 8.38966 17.0801 8.37277C17.2001 8.35589 17.3223 8.36245 17.4397 8.39208C17.5571 8.42171 17.6675 8.47382 17.7644 8.54545L21.4568 11.2727C21.5714 11.3574 21.6644 11.4672 21.7285 11.5934C21.7926 11.7197 21.826 11.8589 21.826 12C21.826 12.1411 21.7926 12.2803 21.7285 12.4066C21.6644 12.5328 21.5714 12.6426 21.4568 12.7273Z'
					fill='#0252cd'
				/>
			</g>
			<defs>
				<clipPath id='clip0_3313_11557'>
					<rect
						width='24'
						height='24'
						fill='white'
						transform='translate(0.595215)'
					/>
				</clipPath>
			</defs>
		</svg>
	);
}

function Speed() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='31' height='24' fill='none'>
			<path
				d='M12.817 17.25c.6.6 1.375.894 2.325.882s1.65-.356 2.1-1.032l8.4-12.6-12.6 8.4c-.675.45-1.031 1.137-1.068 2.063s.244 1.687.843 2.287zM15.142 0a14.6 14.6 0 0 1 4.257.62c1.363.413 2.644 1.031 3.843 1.855l-2.85 1.8a11.35 11.35 0 0 0-2.568-.956c-.887-.212-1.781-.319-2.682-.32-3.325 0-6.157 1.168-8.495 3.505S3.141 11.674 3.142 15c0 1.05.144 2.087.432 3.113S4.268 20.1 4.792 21h20.7c.575-.95.994-1.937 1.257-2.962s.394-2.088.393-3.188a10.76 10.76 0 0 0-.319-2.625 10.96 10.96 0 0 0-.956-2.475l1.8-2.85c.75 1.175 1.344 2.425 1.782 3.75s.669 2.7.693 4.125-.137 2.787-.488 4.088-.862 2.537-1.537 3.712c-.275.45-.65.8-1.125 1.05s-.975.375-1.5.375h-20.7c-.525 0-1.025-.125-1.5-.375s-.85-.6-1.125-1.05c-.65-1.125-1.15-2.319-1.5-3.582S.142 16.399.142 15c0-2.075.394-4.019 1.182-5.832s1.863-3.4 3.225-4.761 2.955-2.439 4.779-3.226S13.09-.001 15.142 0z'
				fill='#0252cd'
			/>
		</svg>
	);
}

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
		lightIcon: <PencilLight />,
	},
	{
		title: 'Front-End Dev',
		text: 'Front-end dev includes creating the user interface and interactive elements of websites and apps.',
		lightIcon: <Cursor />,
	},
	{
		title: 'Back-End Dev',
		text: 'Focus on server-side, ensuring seamless data management and communication between the user interface and the server.',
		lightIcon: <Code />,
	},
	{
		title: 'Web Optimization',
		text: 'Web optimization focuses on improving website performance for a smoother user experience',
		lightIcon: <Speed />,
	},
] as const;

export const skills = [
	{
		label: 'Javascript',
		lightIcon: <JavascriptIcon />,
	},
	{
		label: 'React Js',
		lightIcon: <ReactIcon />,
	},
	{
		label: 'Redux',
		lightIcon: <ReduxIcon />,
	},
	{
		label: 'Next Js',
		lightIcon: <NextJSIcon />,
	},
	{
		label: 'Typescript',
		lightIcon: <TypescriptIcon />,
	},
	{
		label: 'Html',
		lightIcon: <HtmlIcon />,
	},
	{
		label: 'CSS',
		lightIcon: <CssIcon />,
	},
	{
		label: 'Sass',
		lightIcon: <SassIcon />,
	},
	{
		label: 'Material UI',
		lightIcon: <MuiIcon />,
	},
	{
		label: 'Tailwind CSS',
		lightIcon: <TailwindIcon />,
	},
	{
		label: 'Framer Motion',
		lightIcon: <FramerMotion />,
	},
	{
		label: 'Git',
		lightIcon: <Git />,
	},
	{
		label: 'Github',
		lightIcon: <Github height={50} width={50} />,
	},
	{
		label: 'Node JS',
		lightIcon: <Nodejs />,
	},
	{
		label: 'Express JS',
		lightIcon: <Express />,
	},
	{
		label: 'Mongo DB',
		lightIcon: <Mongodb />,
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
		darkIcon: <Github width={25} height={24} />,
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
