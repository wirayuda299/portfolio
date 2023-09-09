import Image from 'next/image';

type TechIconProps = {
	label: string;
	lightIcon: string;
};

export default function TechIcon({ label, lightIcon }: TechIconProps) {
	return (
		<div
			title={label}
			className='ease flex h-[53px] w-[53px] items-center justify-center rounded-full bg-white-800 transition-all duration-500 hover:shadow-lg dark:bg-black-300 md:h-24 md:w-24'
		>
			<Image
				className='ease h-10 w-10 p-1 grayscale filter hover:filter-none md:h-14 md:w-14 md:p-0'
				src={lightIcon}
				width={55}
				height={55}
				alt={label}
			/>
		</div>
	);
}
