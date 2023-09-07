'use client';
import { useState } from 'react';

import Menu from './Menu';
import NavItem from './NavItem';
import { navItems } from '@/constant';
import CloseButton from './Close';
import ThemeSwitch from './ThemeSwitch';

export default function NavContainer() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [theme, setTheme] = useState<string>('light');

	return (
		<>
			<ul
				className={`transition-all ease duration-500 list-container ${
					isOpen ? 'left-0' : '!-left-[200%]'
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
		</>
	);
}
