'use client';

import { useState } from 'react';

import Menu from './Menu';
import NavItem from './NavItem';
import CloseButton from './Close';
import ThemeSwitch from './ThemeSwitch';
import { navItems } from '@/constant';

export default function NavContainer() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<>
			<ul
				className={`ease list-container overflow-x-hidden transition-all duration-500 ${
					isOpen ? 'left-0' : '!-left-[200%]'
				}`}
			>
				{navItems.map((item, i) => (
					<NavItem
						key={item.title}
						{...item}
						setIsOpen={setIsOpen}
						delay={i}
						isOpen={isOpen}
					/>
				))}

				<CloseButton setIsOpen={setIsOpen} />
			</ul>
			<div className='inline-flex gap-5'>
				<ThemeSwitch />
				<Menu setIsOpen={setIsOpen} />
			</div>
		</>
	);
}
