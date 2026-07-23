import AboutIntroSection from '@/features/about/components/AboutIntroSection';
import AboutDivisionsSection from '@/features/about/components/AboutDivisionsSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 relative flex flex-col items-center justify-start bg-[#090709]">
      {/* Full Page Background Image */}
      <div className="fixed inset-0 -translate-y-20 h-[calc(100vh+5rem)] z-0 pointer-events-none">
        <img
          src="/eventBG.png"
          alt="About Background"
          className="w-full h-full object-cover opacity-100 brightness-125 select-none pointer-events-none"
        />
      </div>

      {/* Blend overlays for content readability and seamless shading */}
      <div className="fixed inset-0 bg-gradient-to-r from-black/60 via-[#090709]/25 to-transparent z-0 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#090709]/30 to-[#090709] z-0 pointer-events-none" />

      <div className="relative z-10 w-full">
        <AboutIntroSection />
        <AboutDivisionsSection />
      </div>
    </div>
  );
};

export default AboutPage;
