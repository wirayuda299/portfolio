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
		<li className='flex items-center text-slate-600 dark:text-white'>
			{title !== 'Resume' ? (
				<Link
					href={path}
					className={`${
						pathname === path
							? 'font-semibold text-primary-light'
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
