import Image from 'next/image';

type ContentProps = {
	title: string;
	contents: string[];
	image: string;
};
export default function Content({ contents, image, title }: ContentProps) {
	return (
		<div className='bg-white-800 p-5 dark:bg-black-300'>
			<h3 className='text-lg font-semibold uppercase text-tomato'>{title}</h3>
			<div className='flex flex-col gap-5 pt-9'>
				{contents.map((c) => (
					<div key={c} className='flex gap-3'>
						<Image
							className='h-5 w-5'
							src={image}
							width={40}
							height={40}
							alt='icon'
						/>
						<p className='text-sm text-white-500 dark:text-white'>{c}</p>
					</div>
				))}
			</div>
		</div>
	);
}
