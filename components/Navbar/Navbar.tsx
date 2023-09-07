'use client';

import { useState } from 'react';

import Menu from './Menu';
import Logo from './Logo';
import NavItem from './NavItem';
import { navItems } from '@/constant';
import CloseButton from './Close';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [theme, setTheme] = useState<string>('light');

	return (
		<nav className='top-0 flex items-center md:sticky md:z-50 md:bg-opacity-50 md:backdrop-blur-sm'>
			<div className='relative flex w-full items-center justify-between gap-x-5 p-5 md:p-6'>
				<Logo />
				<ul
					className={`ease list-container transition-all duration-500 ${
						isOpen ? 'left-0' : '-left-full'
					}`}
				>
					{navItems.map((item) => (
						<NavItem key={item.title} {...item} theme={theme} />
					))}

					<CloseButton setIsOpen={setIsOpen} />
				</ul>

				<div className='inline-flex gap-5'>
					<ThemeSwitch setTheme={setTheme} theme={theme} />
					<Menu setIsOpen={setIsOpen} theme={theme} />
				</div>
			</div>
		</nav>
	);
}
