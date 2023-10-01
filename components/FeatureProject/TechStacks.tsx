'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

import { Button } from '../ui/button';
import useIntersectionObserver from '@/hooks/useInterSectionObserver';

type TechStacks = Pick<Projects, 'techStacks'>['techStacks'];

type FeaturedProjectTechStacksProps = {
	techStacks: TechStacks;
	_id: string;
};

export default function FeaturedProjectTechStacks({
	techStacks,
	_id,
}: FeaturedProjectTechStacksProps) {
	const ref = useRef<HTMLDivElement>(null);

	useIntersectionObserver(ref, ['animate-fade-up']);

	return (
		<div className='flex flex-col lg:px-4'>
			<div ref={ref} className='mt-6 inline-flex flex-wrap gap-4 opacity-0'>
				{techStacks[0].frontend?.map((tech) => (
					<Button
						className='truncate bg-light-gray text-10 uppercase text-white hover:bg-white hover:text-black'
						key={tech.name}
					>
						<span>{tech.name}</span>
					</Button>
				))}
				{techStacks[0]?.backend &&
					techStacks[0]?.backend?.map((tech) => (
						<Button
							key={tech.name}
							className='flex truncate bg-light-gray text-10 uppercase text-white hover:bg-white hover:text-black'
						>
							<span>{tech.name}</span>
						</Button>
					))}
			</div>
			<Link
				href={`/project/${_id}`}
				className='inline-flex animate-fade-up items-center gap-3 pt-10 text-sm font-medium text-white animate-once'
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
	);
}
