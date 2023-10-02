import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';

type MenuProps = {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Menu({ setIsOpen }: MenuProps) {
	return (
		<button
			className='md:hidden'
			type='button'
			onClick={() => setIsOpen((prev) => !prev)}
		>
			<Image
				src='/assets/icons/menu-white.svg'
				width={40}
				height={40}
				alt='menu'
				className=' h-6 w-6 invert dark:invert-0'
			/>
		</button>
	);
}
