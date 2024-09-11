'use client';

import { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useInterSectionObserver';
import Image from 'next/image';

type TechIconProps = {
  label: string;
  icon: string
  delay: number;
};

export default function TechIcon({ label, icon, delay }: TechIconProps) {
  const ref = useRef(null);
  useIntersectionObserver(ref, 'animate-fade-up');

  return (
    <Image
      src={icon}
      alt={label}
      width={40}
      height={40}
      ref={ref}
      className='ease group flex size-10 object-contain items-center justify-center rounded-full opacity-0 grayscale filter transition-all duration-500 hover:shadow-lg hover:filter-none bg-black-200/30 md:size-24'
      style={{
        animationDelay: delay * 50 + 'ms'
      }}

    />
  );
}
