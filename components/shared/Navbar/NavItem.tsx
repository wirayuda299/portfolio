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
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='21'
			fill='none'
		>
			<path
				d='M5 17.167c-.458 0-.851-.163-1.178-.49a1.6 1.6 0 0 1-.489-1.177V13H5v2.5h10V13h1.667v2.5c0 .458-.163.851-.49 1.177a1.6 1.6 0 0 1-1.177.489H5zm5-3.333L5.833 9.667 7 8.458l2.167 2.167V3.833h1.667v6.792L13 8.458l1.167 1.208L10 13.833z'
				fill='#151e2c'
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
