import { ArrowRight, GlobeIcon } from 'lucide-react';
import Image from 'next/image';

import {
  ProjectInfo,
  CaseStudies,
  ChallengesLearning,
  CallToAction,
} from '@/components/index';
import { getSingleCaseStudy } from '@/sanity/actions/caseStudies';

type Props = Readonly<{
  params: { id: string };
}>;

export default async function ProjectDetail({ params: { id } }: Props) {
  const caseStudy = await getSingleCaseStudy(id);

  return (
    <main className='size-full'>
      <p className='text-center text-sm font-semibold uppercase text-primary-light'>
        web dev project
      </p>
      <h1 className='mx-auto max-w-880 pt-3 text-center text-3xl font-bold text-white lg:text-6xl'>
        <span className='relative z-[1] before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary lg:before:bottom-2'>
          {caseStudy.title}
        </span>{' '}
        - {caseStudy.subTitle}
      </h1>

      <section className='pt-7 max-w-[500px] mx-auto relative min-h-[300px]'>
        <Image
          className='w-full h-full object-cover object-center aspect-auto'
          src={caseStudy.mockup}
          priority
          fill
          sizes='500px'
          fetchPriority='high'
          alt={caseStudy.title}
        />

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
      </section>

      <ProjectInfo
        projectInfo={caseStudy.projectInfo}
        techStacks={caseStudy.techStacks}
      />
      <section className='mx-auto mt-7 flex max-w-880 flex-col gap-5 px-4 py-10'>
        <p className='text-left text-sm first-letter:capitalize text-white lg:text-lg'>
          {caseStudy.descriptions}
        </p>
      </section>
      <section className='mt-10 size-full bg-black-200'>
        <div className='mx-auto mt-7 flex max-w-880 flex-col gap-5 px-3 py-10 '>
          <p className='text-sm font-semibold text-primary-light'>Problem</p>
          <h2 className='text-lg font-semibold text-white'>
            Problem Statement
          </h2>
          <p className='py-6 text-sm text-white lg:text-lg'>
            {caseStudy.problem.description}
          </p>
          <Image
            width={1000}
            height={500}
            sizes='100vw'
            className='mb-6 w-full object-contain'
            src={caseStudy.problem.image}
            loading='lazy'
            alt='illustration image'
          />
        </div>
      </section>

      <section className='mx-auto max-w-1400 '>
        <div className=' py-4 bg-primary-dark'>
          <h2 className='text-center text-sm font-semibold uppercase text-white lg:text-3xl'>
            High-Fidelity Figma Design
          </h2>
        </div>
        <div className='relative min-h-500 w-full'>
          <Image
            fill
            sizes='100vw'
            className='size-full object-cover'
            src={caseStudy.design}
            priority
            fetchPriority='high'
            alt='figma design image'
          />
        </div>
      </section>

      <section className=' py-10 bg-black-200'>
        <div className='mx-auto mt-7 flex max-w-880 flex-col gap-5 px-3 py-10 sm:px-3'>
          <p className='text-sm font-semibold text-primary-light'>Way of work</p>
          <h2 className='pt-1 text-lg font-semibold text-white'>
            My Process
          </h2>
          <div className='flex flex-wrap justify-start gap-11 pt-8'>
            {caseStudy.process.map((p) => (
              <div key={p._key} className='flex flex-col items-center'>
                <div className=' flex size-16 items-center justify-center rounded-full bg-black-300'>
                  <Image
                    src={p.icon}
                    className='mx-auto size-8'
                    width={40}
                    height={40}
                    alt={p.title}
                  />
                </div>
                <p className='py-2 text-center text-sm font-semibold text-white'>
                  {p.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ChallengesLearning
        challenges={caseStudy?.challenges}
        learnings={caseStudy?.learnings}
      />
      <CaseStudies id={caseStudy._id} />
      <CallToAction />
    </main>
  );
}
