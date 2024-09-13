'use client';

import { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';
import Image from 'next/image';
import { loader } from '@/utils/image-loader';

type TechIconProps = {
  label: string;
  icon: string
  delay: number;
};



export default function TechIcon({ label, icon, delay }: TechIconProps) {
  const ref = useRef(null);
  useIntersectionObserver(ref, 'animate-fade-up');

  const blurDataUrl = loader(50, 50)
  return (
    <div
      style={{
        animationDelay: delay * 50 + 'ms'
      }}

      className='ease group flex w-20  object-contain aspect-auto object-center items-center justify-center rounded-full opacity-0 grayscale filter transition-all duration-500 hover:shadow-lg hover:filter-none bg-black-200/30 md:size-24' ref={ref}>
      <Image
        src={icon}
        alt={label}
        width={70}
        loading='lazy'
        fetchPriority='low'
        height={70}
        placeholder={blurDataUrl}
      />
    </div>
  )
}
