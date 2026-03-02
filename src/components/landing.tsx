import HeroSection from "./home/HeroSection";
import AboutSection from "./home/AboutSection";
import Divisions from "./home/Divisions";
import ReadySection from "./home/ReadySection";
import ApplySection from "./home/ApplySection";

const Landing = () => {
  return (
    <div className="snap-y snap-mandatory">
      <HeroSection />
      <AboutSection />
      <Divisions />
      <ReadySection />
      <ApplySection />
    </div>
  );
};

export default Landing;
