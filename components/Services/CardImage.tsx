import Image from 'next/image';

type CardImageProps = {
	lightIcon: string;
	darkIcon: string;
	title: string;
	isHover: boolean;
};

export default function CardImage({
	lightIcon,
	darkIcon,
	title,
	isHover,
}: CardImageProps) {
	return (
		<div className='flex h-16 w-16 items-center rounded-md bg-primary-light p-3  shadow-lg group-hover:bg-white'>
			<Image
				className='mx-auto h-8 w-8 '
				src={isHover ? darkIcon : lightIcon}
				width={50}
				height={50}
				alt={title}
			/>
		</div>
	);
}
