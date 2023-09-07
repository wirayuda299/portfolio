import Image from 'next/image';

type BackgroundProps = {
	title: string;
	subTitle: string;
	lightIcon: string;
	darkIcon: string;
};

export default function Background({
	title,
	lightIcon,
	subTitle,
	darkIcon,
}: BackgroundProps) {
	return (
		<div className='flex  flex-col items-start justify-start gap-3 rounded-lg bg-white p-5  dark:bg-black-200 md:flex-row'>
			<Image
				className='hidden dark:block'
				src={darkIcon}
				width={50}
				height={50}
				alt={title}
			/>
			<Image
				className='block dark:hidden'
				src={lightIcon}
				width={50}
				height={50}
				alt={title}
			/>
			<div>
				<h3 className='text-base font-semibold dark:text-white md:text-2xl'>
					{title}
				</h3>
				<p className='pt-2 text-sm text-white-500 dark:text-white'>
					{subTitle}
				</p>
			</div>
		</div>
	);
}
