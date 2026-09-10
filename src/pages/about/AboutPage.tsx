import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutIntroSection from '@/features/about/components/AboutIntroSection';
import AboutDivisionsSection from '@/features/about/components/AboutDivisionsSection';

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen pt-24 pb-20 relative flex flex-col items-center justify-start bg-[#090709]">
      <div className="relative z-10 w-full">
        <AboutIntroSection />
        <AboutDivisionsSection />
      </div>
    </div>
  );
};

export default AboutPage;
