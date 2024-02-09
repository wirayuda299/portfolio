'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Dispatch, SetStateAction } from 'react';

type NavItemProps = {
	path: string;
	title: string;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	delay: number;
	isOpen: boolean;
};

function DonwloadIcon() {
	return (
		<svg
			className='dark:invert'
			width='20'
			height='21'
			viewBox='0 0 20 21'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4.99992 17.1667C4.54159 17.1667 4.14909 17.0033 3.82242 16.6767C3.49575 16.35 3.3327 15.9578 3.33325 15.5V13H4.99992V15.5H14.9999V13H16.6666V15.5C16.6666 15.9583 16.5033 16.3508 16.1766 16.6775C15.8499 17.0042 15.4577 17.1672 14.9999 17.1667H4.99992ZM9.99992 13.8333L5.83325 9.66667L6.99992 8.45833L9.16659 10.625V3.83333H10.8333V10.625L12.9999 8.45833L14.1666 9.66667L9.99992 13.8333Z'
				fill='#151E2C'
			/>
		</svg>
	);
}

export default function NavItem({
	path,
	title,
	setIsOpen,
	delay,
	isOpen,
}: NavItemProps) {
	const pathname = usePathname();

	return (
		<div
			style={{
				animationDelay: `${delay * 200}ms`,
			}}
			onClick={() => setIsOpen(false)}
			className={`${
				isOpen ? 'animate-fade-up' : ''
			} before:ease ease relative z-[1] flex items-center text-white-500 opacity-0 transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-1 before:w-full before:scale-x-0 before:rounded-full before:bg-primary-light before:transition-all before:duration-300 hover:before:scale-x-100 dark:text-white dark:before:bg-primary-dark md:opacity-100`}
		>
			{title !== 'Resume' ? (
				<Link
					href={path}
					className={`text-lg font-normal uppercase md:text-sm md:capitalize ${
						pathname === path ? 'font-semibold' : ''
					}`}
				>
					<span>{title}</span>
				</Link>
			) : (
				<div className='inline-flex items-center gap-2'>
					<DonwloadIcon />
					<a
						download
						href='/assets/resume/cv.pdf'
						className='text-lg font-normal uppercase md:text-sm md:capitalize'
					>
						Resume
					</a>
				</div>
			)}
		</div>
	);
}
