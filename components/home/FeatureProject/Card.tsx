import Image from 'next/image';

import FeaturedProjectTechStacks from './TechStacks';
import ProjectTitle from './ProjectTitle';
import { Projects } from '@/types/project';
import { cn } from '@/lib/utils';
import { loader } from '@/utils/image-loader';

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

  const blurDataUrl = loader(300, 300)
  return (
    <div
      className='w-full rounded-lg p-5 md:px-0 md:py-9'
      style={{
        backgroundColor,
      }}
    >
      <div className='grid w-full grid-cols-1 items-center justify-between gap-6 overflow-hidden lg:grid-cols-2 lg:gap-x-11'>
        <div
          className={cn('w-fit whitespace-pre-wrap sm:pl-10 md:pl-12', title === 'Morrent' ? 'pl-0 lg:!order-2' : ''
          )}
        >
          <ProjectTitle title={title} subTitle={subTitle} />
          <FeaturedProjectTechStacks techStacks={techStacks} _id={_id} />
        </div>
        <Image
          src={thumbnail}
          width={800}
          className={cn('w-full object-cover object-center', title === 'Morrent' ? 'lg:order-1 lg:-ml-12 ' : 'order-2 lg:ml-8'
          )}
          height={800}
          loading='lazy'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder='blur'
          blurDataURL={blurDataUrl}
          alt={title}
        />
      </div>
    </div>
  );
}
