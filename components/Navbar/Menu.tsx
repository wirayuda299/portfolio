import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';

type MenuProps = {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	theme: string;
};

export default function Menu({ theme, setIsOpen }: MenuProps) {
	return (
		<button
			className='md:hidden'
			type='button'
			onClick={() => setIsOpen((prev) => !prev)}
		>
			<Image
				src={`/assets/icons/${
					theme === 'dark' ? 'menu-white.svg' : 'menu.svg'
				}`}
				width={40}
				height={40}
				alt='menu'
				className='h-6 w-6'
			/>
		</button>
	);
}
