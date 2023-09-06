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
			className='absolute top-5 right-5 md:hidden text-white'
			onClick={() => setIsOpen(false)}
		>
			<Image
				src={'/assets/icons/cross.png'}
				width={40}
				height={40}
				alt='menu'
				className='w-6 h-6'
			/>
		</button>
	);
}
