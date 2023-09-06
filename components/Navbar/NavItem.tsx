import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

type NavItemProps = {
	path: string;
	title: string;
	theme: string;
};

export default function NavItem({ path, title, theme }: NavItemProps) {
	const pathname = usePathname();

	return (
		<li className='text-white-500 flex items-center dark:text-white'>
			{title !== 'Resume' ? (
				<Link
					href={path}
					className={`${
						pathname === path
							? 'font-semibold text-primary-light'
							: 'font-normal text-sm'
					}`}
				>
					<span>{title}</span>
				</Link>
			) : (
				<div className='inline-flex items-center gap-2'>
					<Image
						className='w-5 h-5 gap-3'
						src={`/assets/icons/${
							theme === 'light' ? 'download.svg' : 'download-light.svg'
						}`}
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
