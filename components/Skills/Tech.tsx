'use client';

import { useState } from 'react';
import Image from 'next/image';

type TechIconProps = {
	label: string;
	lightIcon: string;
	darkIcon: string;
};

export default function TechIcon({
	label,
	darkIcon,
	lightIcon,
}: TechIconProps) {
	const [isHover, setIsHover] = useState<boolean>(false);

	return (
		<div
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			title={label}
			className='ease flex h-[53px] w-[53px] items-center justify-center rounded-full bg-white-800 shadow-lg transition-all duration-500 dark:bg-black-200 md:h-24 md:w-24'
		>
			<Image
				className='h-10 w-10 p-1 md:h-14 md:w-14 md:p-0'
				src={isHover ? lightIcon : darkIcon}
				width={55}
				height={55}
				alt={label}
			/>
		</div>
	);
}
