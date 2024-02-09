'use client';

import { useState } from 'react';

import NavItem from './NavItem';
import CloseButton from './Close';
import ThemeSwitch from './ThemeSwitch';
import { navItems } from '@/constant';

function MenuWhite() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='20'
			viewBox='0 0 20 14'
			fill='none'
		>
			<path
				d='M20 13.005c0 .55-.446.995-.995.995h-8.01c-.264 0-.517-.105-.704-.291s-.291-.44-.291-.704.105-.517.291-.704.44-.291.704-.291h8.01c.55 0 .995.445.995.995zM20 7c0 .55-.446.995-.995.995H.995c-.264 0-.517-.105-.704-.291S0 7.264 0 7s.105-.517.291-.704.44-.291.704-.291h18.01c.55 0 .995.446.995.995zm-.995-5.01c.264 0 .517-.105.704-.291S20 1.259 20 .995s-.105-.517-.291-.704S19.269 0 19.005 0H6.995c-.131 0-.26.026-.381.076s-.23.123-.323.216-.166.202-.216.323S6 .864 6 .995s.026.26.076.381.123.23.216.323.202.166.323.216.25.076.381.076h12.01z'
				fill='#fff'
			/>
		</svg>
	);
}

export default function NavContainer() {
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
							{...item}
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
					<MenuWhite />
				</button>
			</div>
		</>
	);
}
