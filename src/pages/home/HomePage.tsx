import HeroSection from '@/features/home/components/HeroSection';
import AboutSection from '@/features/home/components/AboutSection';
import Divisions from '@/features/home/components/DivisionsSection';
import Hands3D from '@/features/home/components/Hands3D';
import ApplyNowFormSection from '@/features/home/components/ApplyNowFormSection';

const HomePage = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-10 flex flex-col w-full">
        <HeroSection />
        <AboutSection />
        <Divisions />
        <Hands3D />
        <ApplyNowFormSection />
      </div>
    </main>
  );
};

export default HomePage;
