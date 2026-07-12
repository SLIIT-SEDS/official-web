import AboutIntroSection from '@/features/about/components/AboutIntroSection';
import AboutDivisionsSection from '@/features/about/components/AboutDivisionsSection';

const AboutPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <AboutIntroSection />
      <AboutDivisionsSection />
    </div>
  );
};

export default AboutPage;
