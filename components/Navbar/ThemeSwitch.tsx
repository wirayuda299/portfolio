'use client';

import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect } from 'react';

import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import { themeOptions } from '@/constant';

type ThemeSwitchProps = {
	theme: string;
	setTheme: Dispatch<SetStateAction<string>>;
};

export default function ThemeSwitch({ theme, setTheme }: ThemeSwitchProps) {
	useEffect(() => {
		const prefersDarkMode = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		const selectedTheme =
			theme || localStorage.theme || (prefersDarkMode ? 'dark' : 'light');

		document.documentElement.classList.toggle('dark', selectedTheme === 'dark');
		localStorage.theme = selectedTheme;
	}, [theme]);

	const switchTheme = (label: string) => {
		const prefersDarkMode = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		const mode = prefersDarkMode ? 'dark' : 'light';
		setTheme(label === 'system' ? mode : label);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger title='Switch theme'>
				<Image
					src={`/assets/icons/${theme === 'light' ? 'sun.svg' : 'moon.svg'}`}
					width={40}
					height={40}
					alt='menu'
					className='h-6 w-6'
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{themeOptions.map((item) => (
					<DropdownMenuItem
						key={item.label}
						onClick={() => switchTheme(item.label)}
					>
						{item.icon}
						<span className='pl-1'>{item.title}</span>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
