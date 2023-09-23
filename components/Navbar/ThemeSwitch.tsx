'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useTheme } from 'next-themes';

import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import { themeOptions } from '@/constant';

export default function ThemeSwitch() {
	const iconRef = useRef<HTMLImageElement | null>(null);
	const { setTheme, theme } = useTheme();

	const switchTheme = (label: string) => {
		setTheme(label);

		iconRef.current?.classList.add('animate-icon-up');
		setTimeout(() => {
			iconRef.current?.classList.remove('animate-icon-up');
		}, 500);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				title='Switch theme'
				className='h-7 w-7 overflow-hidden '
			>
				<Image
					ref={iconRef}
					src={`/assets/icons/${theme === 'light' ? 'sun.svg' : 'moon.svg'}`}
					width={24}
					height={24}
					alt='menu'
					className='ease h-6 w-6 transition-all duration-300 '
				/>
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
