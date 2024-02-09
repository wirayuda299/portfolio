'use client';

import { useTheme } from 'next-themes';

import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import { themeOptions } from '@/constant';

function SunIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='animate-icon-up'
			width='20'
			height='21'
			fill='#0252cd'
		>
			<path d='M9 1.5a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6 9a5 5 0 1 1-10 0 5 5 0 1 1 10 0zm-5 7a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1zM2.929 4.843a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.636 5.55l-.707-.707zM14.95 15.45a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 0zM1 11.5a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2H1zm16-1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2h-1a1 1 0 0 0-1 1zM3.748 17.051a1 1 0 1 1-1.286-1.532l.766-.643a1 1 0 0 1 1.286 1.532l-.766.643zM15.362 6a1 1 0 0 0 1.409.123l.766-.643a1 1 0 0 0-1.285-1.532l-.766.643A1 1 0 0 0 15.362 6z' />
		</svg>
	);
}

function MoonIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='animate-icon-up'
			width='20'
			height='21'
			fill='none'
		>
			<path
				d='M10.685 11.185a7.02 7.02 0 0 0 0-9.923c-.281-.281-.103-.799.293-.76a9.98 9.98 0 0 1 6.086 2.886c3.915 3.915 3.915 10.261 0 14.176s-10.261 3.915-14.176 0a9.98 9.98 0 0 1-2.886-6.086c-.04-.396.478-.574.76-.293a7.02 7.02 0 0 0 9.923 0z'
				fill='#428dff'
			/>
		</svg>
	);
}

export default function ThemeSwitch() {
	const { setTheme, theme } = useTheme();

	const switchTheme = (label: string) => setTheme(label);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				key={theme}
				title='Switch theme'
				className='size-7 overflow-hidden'
			>
				{theme === 'light' ? <SunIcon /> : <MoonIcon />}
			</DropdownMenuTrigger>
			<DropdownMenuContent className='!border-none'>
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
