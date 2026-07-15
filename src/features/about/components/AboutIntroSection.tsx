import React from "react";
import planets from "@/assets/globals.svg";

const AboutIntroSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-32 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-start relative">

          {/* LEFT COLUMN */}
          <div className="max-w-xl z-10">
            <div className="relative inline-block mb-6">
              {/* Dynamic CSS Title Glow */}
              <div 
                className="absolute rounded-full pointer-events-none -z-10 mix-blend-screen w-[450px] h-[450px] sm:w-[750px] sm:h-[750px] md:w-[1000px] md:h-[1000px] lg:w-[1300px] lg:h-[1300px]"
                style={{
                  left: '40%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(circle, rgba(224, 182, 228, 0.25) 0%, rgba(224, 182, 228, 0) 70%)',
                  filter: 'blur(130px)'
                }}
              />
              <h2
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wider text-white uppercase select-none relative z-10"
                style={{ fontFamily: "'Exo 2', 'Rajdhani', sans-serif" }}
              >
                ABOUT US
              </h2>
            </div>

            <p className="text-white text-base md:text-lg leading-relaxed">
              SEDS SLIIT is the official space exploration student organization at Sri
              Lanka Institute of Technology, and a recognized chapter of Students for
              the Exploration and Development of Space. Founded in 2019 by a student
              team led by Saditha Dissanayaka and Ravindu Piyapema, the chapter
              promotes space exploration through projects, events, research, and
              outreach.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex justify-center md:justify-end items-center z-10">
            <img
              src={planets}
              alt="planet stack"
              className="
                w-[280px] sm:w-[350px] md:w-[480px] object-contain
                md:-mt-20
                drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
