import { ArrowRight, GlobeIcon } from 'lucide-react';
import Image from 'next/image';

import {
  CaseStudies,
  ChallengesLearning,
  CallToAction,
} from '@/components/index';
import { getSingleCaseStudy } from '@/sanity/actions';

type Props = Readonly<{ params: { id: string } }>;

export default async function ProjectDetail({ params: { id } }: Props) {
  const caseStudy = await getSingleCaseStudy(id);

  return (
    <main className='size-full'>
      <p className='text-center text-sm font-semibold uppercase text-primary-light'>
        web dev project
      </p>
      <h1 className='mx-auto max-w-880 py-5 text-center text-3xl font-bold text-white lg:text-5xl '>
        <span className='relative z-[1] before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary lg:before:bottom-2'>
          {caseStudy.title}
        </span>{' '}
        - {caseStudy.subTitle}
      </h1>
      <section className='pt-7 max-w-[500px] mx-auto relative min-h-[300px]'>
        <Image
          className='w-full h-full object-cover object-center rounded-md aspect-auto'
          src={caseStudy.mockup}
          priority
          fill
          sizes='500px'
          fetchPriority='high'
          alt={caseStudy.title}
        />
      </section>
      <div className='flex justify-center gap-5 pt-6'>
        <a
          href={caseStudy.demoSite}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-1 text-sm font-semibold text-primary-light lg:text-lg'
        >
          <GlobeIcon />
          <span>Demo Site</span>
          <ArrowRight color='#0252cd' />
        </a>
        <a
          href={caseStudy.sourceCode}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-1 text-sm font-semibold text-primary-light lg:text-lg'
        >
          <Image src='/assets/icons/github.svg' width={20} height={20} alt='github' />
          <span>Source Code</span>
          <ArrowRight color='#0252cd' />
        </a>
      </div>

      <section className='mx-auto mt-7 flex max-w-880 flex-col gap-5 px-4 py-10'>
        <p className='text-left text-sm first-letter:capitalize text-white lg:text-lg'>
          {caseStudy.descriptions}
        </p>
      </section>
      <section className='mx-auto mt-7 flex max-w-880 flex-col gap-5 px-4 py-10'>
        <h2 className='text-2xl font-semibold text-white'>
          Tech Stack
        </h2>
        <div className='flex items-center gap-3'>
          {caseStudy.techStacks.map(tech => (
            <Image
              className='object-contain size-12 object-cover'
              key={tech.name}
              src={tech.icon}
              sizes='40px'
              width={40}
              loading='lazy'
              height={40}
              alt={tech.name}
            />
          ))}
        </div>
      </section>
      <ChallengesLearning
        challenges={caseStudy?.challenges}
        learnings={caseStudy?.learnings}
      />
      <CaseStudies id={caseStudy?._id} />
      <CallToAction />
    </main>
  );
}
