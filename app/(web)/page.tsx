import {
  Hero,
  Skills,
  Experience,
  Services,
  FeaturedProject,
  CallToAction,
} from '@/components/index';

export const metadata = {
  title: 'Home'
}
export default async function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Experience />
      <FeaturedProject />
      <CallToAction />
    </>
  );
}
