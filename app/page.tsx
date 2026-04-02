import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { InputSection } from '@/components/InputSection';
import {LogosSection} from '@/components/LogosSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { SocialMediaSection } from '@/components/SocialMediaSection';
import { SolutionsSection } from '@/components/SolutionsSection';
import { WorkflowSection } from '@/components/WorkflowSection';
import { AffiliationSection } from '@/components/AffiliationSection';
import { FaqSection } from '@/components/FaqSection';
import BoostSection from '@/components/BootSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full pt-20 bg-[var(--color-bg-secondary)]">
      <Header />
      <Hero />
      <InputSection />
      <LogosSection />
      <FeaturesSection />
      <SocialMediaSection />
      <SolutionsSection />
      <WorkflowSection />
      <AffiliationSection />
      <FaqSection />
      <BoostSection/>
      <Footer/>
    </main>
  );
}
