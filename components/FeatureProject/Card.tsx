import Image from 'next/image';

import { Button } from '../ui/button';
import Link from 'next/link';

type FeatureProjectCardProps = {
	title: string;
	techStacks: {
		frontend: string[];
		backend: string[];
	};
	backgroundColor: string;
	image: string;
	label: string;
};

export default function FeatureProjectCard({
	backgroundColor,
	techStacks: { backend, frontend },
	image,
	title,
	label,
}: FeatureProjectCardProps) {
	return (
		<div
			className={` w-full rounded-lg p-6 lg:p-20`}
			style={{
				backgroundColor,
			}}
		>
			<div className='grid w-full grid-cols-1 items-center  justify-start gap-6 lg:grid-cols-2 lg:justify-between lg:gap-x-11'>
				<div
					className={`${
						label === 'jobit' ? 'lg:!order-2' : ''
					} w-fit whitespace-pre-wrap sm:pl-10 md:pl-12 lg:pl-0`}
				>
					<h3 className='w-fit pt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
						{title}
					</h3>
					<div className='flex flex-col'>
						<div className='mt-6 inline-flex gap-4'>
							<Button className='bg-[#ffffff33] text-[10px] text-white hover:text-black'>
								{frontend.map((tech) => tech)}
							</Button>
							<Button className='bg-[#ffffff33] text-[10px] text-white hover:text-black'>
								{backend.map((tech) => tech)}
							</Button>
						</div>
						<Link
							href='/'
							className='inline-flex items-center gap-3 pt-10 text-sm font-semibold text-white'
						>
							See Detail project
							<Image
								src='/assets/icons/arrow.svg'
								width={50}
								height={50}
								alt='Arrow icon'
							/>
						</Link>
					</div>
				</div>
				<Image
					src={image}
					width={800}
					className={`${
						label === 'jobit' ? 'lg:order-1' : 'order-2'
					} object-cover`}
					height={800}
					alt='Morent'
				/>
			</div>
		</div>
	);
}
