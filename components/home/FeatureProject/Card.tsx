import Image from 'next/image';

import FeaturedProjectTechStacks from './TechStacks';
import ProjectTitle from './ProjectTitle';

type Props = {
	backgroundColor: string;
	techStacks: Projects['techStacks'];
	thumbnail: string;
	title: string;
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
}: Props) {
	return (
		<div
			className='w-full rounded-lg p-5 md:px-0 md:py-9'
			style={{
				backgroundColor,
			}}
		>
			<div className='grid w-full grid-cols-1 items-center justify-between gap-6 overflow-hidden lg:grid-cols-2 lg:gap-x-11'>
				<div
					className={`${
						title === 'Morrent' ? 'pl-0 lg:!order-2' : ''
					} w-fit whitespace-pre-wrap sm:pl-10 md:pl-12 `}
				>
					<ProjectTitle title={title} subTitle={subTitle} />
					<FeaturedProjectTechStacks techStacks={techStacks} _id={_id} />
				</div>
				<Image
					src={thumbnail}
					width={800}
					className={` ${
						title === 'Morrent' ? 'lg:order-1 lg:-ml-12 ' : 'order-2 lg:ml-8'
					} object-cover object-center`}
					height={800}
					loading='lazy'
					placeholder='blur'
					blurDataURL={thumbnail}
					alt={title}
				/>
			</div>
		</div>
	);
}
