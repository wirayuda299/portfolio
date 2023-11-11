import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';

type CloseButtonProps = {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function CloseButton({ setIsOpen }: CloseButtonProps) {
	return (
		<button
			type='button'
			title='close'
			className='absolute right-5 top-5 text-white md:hidden'
			onClick={() => setIsOpen(false)}
		>
			<Image
				src={'/assets/icons/cross.png'}
				width={40}
				height={40}
				alt='menu'
				className='h-6 w-6 '
			/>
		</button>
	);
}
