import AboutIntroSection from './aboutUs/AboutIntroSection';
import AboutDivisionsSection from './aboutUs/AboutDivisionsSection';

const AboutPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <AboutIntroSection />
      <AboutDivisionsSection />
    </div>
  );
};

export default AboutPage;

