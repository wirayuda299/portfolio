import Image from 'next/image';

type BackgroundProps = {
	title: string;
	subTitle: string;
	lightIcon: string;
};

export default function Background({
	title,
	lightIcon,
	subTitle,
}: BackgroundProps) {
	return (
		<div className='ease group flex w-full cursor-pointer flex-col items-start justify-start gap-3 rounded-lg bg-white p-5 shadow-xl shadow-white-100 transition-all duration-500 hover:shadow-white-100 dark:bg-black-200 dark:hover:bg-black-300 dark:hover:shadow-black-100 md:flex-row md:shadow-2xl md:shadow-transparent'>
			<Image
				className='ease block brightness-[10%] filter transition-colors duration-500  group-hover:filter-none dark:brightness-0 dark:grayscale-0 dark:invert'
				src={lightIcon}
				width={50}
				height={50}
				alt={title}
			/>
			<div>
				<h3 className='text-base font-semibold dark:text-white lg:text-2xl'>
					{title}
				</h3>
				<p className='pt-2 text-sm text-white-500 dark:text-white'>
					{subTitle}
				</p>
			</div>
		</div>
	);
}
