import astronomyImg from '@/assets/astronomy.png';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6 z-20 md:col-span-12 lg:col-span-8">
          <h1
            className="text-glow font-light tracking-wider text-white whitespace-normal md:whitespace-nowrap leading-none w-full"
            style={{ fontSize: 'clamp(3.8rem, 12vw, 7.5rem)' }}
          >
            SEDS SLIIT
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white max-w-lg leading-relaxed font-light mt-2">
            Student for the Exploration and{' '}
            <br className="hidden sm:block" />
            Development of Space
          </p>
          <Button className="mt-2 md:mt-4">JOIN US</Button>
        </div>

        {/* Astronaut Image - Background on mobile/tablet, side-by-side on desktop */}
        <div className="absolute lg:relative inset-0 lg:inset-auto z-10 flex lg:col-span-4 justify-center lg:justify-end items-center pointer-events-none">
          <div className="absolute lg:relative opacity-30 lg:opacity-80 top-1/2 left-1/2 -translate-x-[63%] sm:-translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:top-auto lg:left-auto lg:-ml-40 lg:-mr-20 w-[180%] max-w-[800px] sm:max-w-none sm:w-[600px] md:w-[750px] lg:min-w-[800px] lg:w-[220%] pointer-events-none">
            <img
              src={astronomyImg}
              alt="Astronaut Background"
              className="w-full h-auto object-contain scale-110 lg:scale-125 origin-center lg:origin-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
