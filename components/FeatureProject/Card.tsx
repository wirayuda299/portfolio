import type { Image as SanityImage } from 'sanity';

import FeaturedProjectTechStacks from './TechStacks';
import Thumbnail from './Thumbnail';
import ProjectTitle from './ProjectTitle';

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
			<div className='grid w-full grid-cols-1 items-center justify-between gap-6 overflow-hidden lg:grid-cols-2 lg:gap-x-11'>
				<div
					className={`${
						title === 'Morrent' ? 'pl-0 lg:!order-2' : ''
					} w-fit whitespace-pre-wrap sm:pl-10 md:pl-12 `}
				>
					<ProjectTitle title={title} subTitle={subTitle} />
					<FeaturedProjectTechStacks techStacks={techStacks} _id={_id} />
				</div>
				<Thumbnail thumbnail={thumbnail} title={title} />
			</div>
		</div>
	);
}
