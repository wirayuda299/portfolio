import Image from 'next/image';

type TechIconProps = {
	label: string;
	lightIcon: string;
};

export default function TechIcon({ label, lightIcon }: TechIconProps) {
	return (
		<div
			title={label}
			className='ease flex h-[53px] w-[53px] items-center justify-center rounded-full bg-white-800 grayscale filter transition-all duration-500  hover:shadow-lg hover:filter-none dark:bg-black-200 dark:bg-opacity-30 md:h-24 md:w-24'
		>
			<Image
				className='ease h-12 w-12 p-1 md:h-14 md:w-14 md:p-0'
				src={lightIcon}
				width={55}
				height={55}
				alt={label}
			/>
		</div>
	);
}
