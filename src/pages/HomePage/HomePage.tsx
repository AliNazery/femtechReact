import Experience from '@/components/Experience/Experience';
import Features from '@/components/Features/Features';
import AboutInHome from '@/components/Home/AboutInHome';
import { Hero } from '@/components/Home/Hero/Hero';
import Talks from '../Talks/page';
import Acheivement from '@/components/Acheivment/Acheivement';
import Study from '../studyhub/HomeStudyHub/page';
import HomeTeam from '@/components/Home/HomeTeam';
import Brands from '@/components/Home/Brands/Brands';
import Testemonials from '@/components/Home/Testemonials';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutInHome />
      <Features />
      <Experience />
      <Talks />
      <Acheivement />
      <Study />
      {/* <Innovative /> */}
      {/* <Collaborative /> */}
      {/* <BlogPost/> */}
      <HomeTeam />
      <Brands />
      <Testemonials />
    </main>
  );
}
