import Image from 'next/image';

type TechIconProps = {
	label: string;
	path: string;
};

export default function TechIcon({ label, path }: TechIconProps) {
	return (
		<div
			title={label}
			className='w-[53px] h-[53px] md:w-24 md:h-24 rounded-full shadow-lg bg-white-800 dark:bg-black-200 flex items-center justify-center'
		>
			<Image
				className='w-10 h-10 p-1 md:p-0 md:w-14 md:h-14'
				src={path}
				width={50}
				height={50}
				alt={label}
			/>
		</div>
	);
}
