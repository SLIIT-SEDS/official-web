import astronomyImg from '../../assets/astronomy.png';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6 z-20 md:col-span-12 lg:col-span-8">
          <h1
            className="text-glow font-light tracking-wider text-white whitespace-nowrap leading-none w-full"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 7.5rem)' }}
          >
            SEDS SLIIT
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-lg leading-relaxed font-light">
            Student for the Exploration and
            <br className="hidden sm:block" />
            Development of Space
          </p>
          <Button className="mt-2 md:mt-4">JOIN US</Button>
        </div>

        {/* Astronaut Image - Hidden on mobile, shown on tablet as background, shown on desktop side-by-side */}
        <div className="relative z-10 hidden md:flex md:col-span-12 lg:col-span-4 justify-center lg:justify-end items-center mt-12 lg:mt-0">
          <div className="md:absolute lg:relative md:opacity-20 lg:opacity-80 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:top-auto lg:left-auto lg:-ml-40 lg:-mr-20 w-[900px] lg:min-w-[800px] lg:w-[220%] max-w-[1600px] pointer-events-none">
            <img
              src={astronomyImg}
              alt="Astronaut Background"
              className="w-full h-auto object-contain scale-110 lg:scale-125 origin-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
