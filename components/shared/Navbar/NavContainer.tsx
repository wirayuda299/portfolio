'use client';

import { memo, useState } from 'react';

import NavItem from './NavItem';
import CloseButton from './Close';
import ThemeSwitch from './ThemeSwitch';
import { navItems } from '@/constant';
import MenuIcon from './MenuIcon';

const NavContainer = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<>
			<ul
				className={`ease fixed top-0 z-50 flex h-screen w-full flex-col  items-center justify-evenly overflow-hidden bg-white-800 pr-3 backdrop-blur transition-all duration-500 dark:border-r-white-500 dark:bg-black-200 md:static md:h-auto md:flex-row  md:justify-end  md:gap-x-9  md:border-r-2 md:!bg-transparent md:!bg-none md:backdrop-blur-0 ${
					!isOpen ? '-left-full' : 'left-0'
				}`}
			>
				{navItems.map((item, i) => (
					<li key={item.title}>
						<NavItem
							path={item.path}
							title={item.title}
							setIsOpen={setIsOpen}
							delay={i}
							isOpen={isOpen}
						/>
						<CloseButton setIsOpen={setIsOpen} />
					</li>
				))}
			</ul>
			<div className='inline-flex gap-5'>
				<ThemeSwitch />
				<button
					title='menu'
					aria-label='menu'
					name='menu'
					className='md:hidden'
					type='button'
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<MenuIcon />
				</button>
			</div>
		</>
	);
};
export default memo(NavContainer);
