import Image from 'next/image';

type ServiceCardProps = {
	title: string;
	icon: string;
	index: number;
	text: string;
};

export default function ServiceCard({
	title,
	icon,
	index,
	text,
}: ServiceCardProps) {
	return (
		<div
			key={title}
			className={` rounded-lg shadow-lg dark:shadow-md w-80 sm:w-72 aspect-square py-7 px-5  ${
				index !== 1
					? 'bg-white-800 dark:bg-black-200 dark:shadow-white-500'
					: 'bg-primary-light dark:!bg-primary-dark dark:!shadow-primary-dark'
			}`}
		>
			<div
				className={`${
					index === 1 ? 'bg-white ' : 'bg-primary-light '
				} w-16 h-16 rounded-md flex items-center shadow-lg p-3`}
			>
				<Image
					className='w-8 h-8 mx-auto '
					src={icon}
					width={50}
					height={50}
					alt={title}
				/>
			</div>
			<h3
				className={`pt-9 text-2xl font-semibold ${
					index === 1 ? 'text-white' : 'text-black dark:text-white-800'
				}`}
			>
				{title}
			</h3>

			<p
				className={`text-sm pt-[10px] ${
					index === 1 ? 'text-white' : 'text-white-500 dark:text-white-800 '
				}`}
			>
				{text}
			</p>
		</div>
	);
}
