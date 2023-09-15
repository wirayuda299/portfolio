import Image from 'next/image';
import Link from 'next/link';
import type { Image as SanityImage } from 'sanity';

import { Button } from '../ui/button';
import { urlForImage } from '@/sanity/lib/image';

type TechStacks = Pick<Projects, 'techStacks'>['techStacks'];

type FeatureProjectCardProps = {
	title: string;
	techStacks: TechStacks;
	backgroundColor: string;
	thumbnail: SanityImage;
	_id: string;
	subTitle: string;
};

export default function FeatureProjectCard({
	backgroundColor,
	techStacks,
	thumbnail,
	title,
	_id,
	subTitle,
}: FeatureProjectCardProps) {
	return (
		<div
			className={`w-full rounded-lg p-5 md:px-0 md:py-9`}
			style={{
				backgroundColor,
			}}
		>
			<div className='grid w-full grid-cols-1 items-center justify-between gap-6 overflow-hidden lg:grid-cols-2  lg:gap-x-11 '>
				<div
					className={`${
						title === 'Morrent' ? 'pl-0 lg:!order-2' : ''
					} w-fit whitespace-pre-wrap sm:pl-10 md:pl-12 `}
				>
					<h3 className='w-fit pt-6 text-3xl font-bold capitalize text-white md:text-4xl lg:px-4 lg:text-5xl'>
						{title} - <span>{subTitle}</span>
					</h3>
					<div className='flex flex-col lg:px-4'>
						<div className='mt-6 inline-flex flex-wrap gap-4'>
							<Button className='truncate bg-[#ffffff33]  text-[10px] uppercase text-white hover:bg-white hover:text-black'>
								{techStacks[0].frontend?.map((tech, index) => (
									<span key={tech.name}>
										{index > 0 && ', '} <span>{tech.name}</span>
									</span>
								))}
							</Button>
							{techStacks[0]?.backend && (
								<Button className='flex truncate bg-[#ffffff33]  text-[10px]  uppercase text-white hover:bg-white hover:text-black'>
									{techStacks[0]?.backend?.map((tech, index) => (
										<span key={tech.name}>
											{index > 0 && ', '} <span>{tech.name}</span>
										</span>
									))}
								</Button>
							)}
						</div>
						<Link
							href={`/project/${_id}`}
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
					src={urlForImage(thumbnail).url()}
					width={800}
					className={`${
						title === 'Morrent' ? 'lg:order-1 lg:-ml-12 ' : 'order-2 lg:ml-8'
					} object-cover object-center`}
					height={800}
					alt='Morent'
				/>
			</div>
		</div>
	);
}
