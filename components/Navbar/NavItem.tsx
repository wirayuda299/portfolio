'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';

type NavItemProps = {
	path: string;
	title: string;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	delay: number;
	isOpen: boolean;
};

export default function NavItem({
	path,
	title,
	setIsOpen,
	delay,
	isOpen,
}: NavItemProps) {
	const pathname = usePathname();

	return (
		<li
			style={{
				animationDelay: `${delay * 200}ms`,
			}}
			onClick={() => setIsOpen(false)}
			className={`before:ease 
			 relative z-[1] flex ${
					isOpen ? 'animate-fade-in' : ''
				} text-white-500 before:bg-primary-light dark:before:bg-primary-dark items-center opacity-0 before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-1 before:w-full before:scale-x-0 before:rounded-full before:transition-all before:duration-300 hover:before:scale-x-100 dark:text-white md:opacity-100`}
		>
			{title !== 'Resume' ? (
				<Link
					href={path}
					className={`${
						pathname === path
							? 'text-primary-light font-semibold'
							: 'text-sm font-normal'
					}`}
				>
					<span>{title}</span>
				</Link>
			) : (
				<div className='inline-flex items-center gap-2'>
					<Image
						className='h-5 w-5 gap-3 dark:invert'
						src={'/assets/icons/download.svg'}
						width={40}
						height={40}
						alt='download icon'
					/>
					<a download href='/assets/resume/cv.pdf'>
						Resume
					</a>
				</div>
			)}
		</li>
	);
}
