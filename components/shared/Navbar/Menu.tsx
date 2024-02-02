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
				loading='lazy'
				className='aspect-auto size-6 object-contain invert dark:invert-0'
			/>
		</button>
	);
}
