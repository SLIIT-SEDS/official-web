import astronomyImg from "../../assets/astronomy.png";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-start px-6 md:px-12 lg:px-20 pb-12 overflow-hidden snap-start">
      {/* Purple ambient glows — more prominent */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/15 rounded-full filter blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/12 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-700/10 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Astronaut Image — background on all screens */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
        <div className="opacity-15 md:opacity-20 lg:opacity-70 w-[800px] lg:w-[900px] xl:w-[1100px] mr-[-5%] lg:mr-0">
          <img
            src={astronomyImg}
            alt="Astronaut Background"
            className="w-full h-auto object-contain animate-float"
          />
        </div>
      </div>

      {/* Text Content*/}
      <div className="relative z-20 flex flex-col items-start text-left gap-4 md:gap-6 max-w-2xl">
        <h1
          className="text-glow text-glow-purple font-light tracking-wider text-white whitespace-nowrap leading-none animate-fade-in-up"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)" }}
        >
          SEDS SLIIT
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-lg leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Student for the Exploration and
          <br className="hidden sm:block" />
          Development of Space
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button className="mt-2 md:mt-4 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]">JOIN US</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
