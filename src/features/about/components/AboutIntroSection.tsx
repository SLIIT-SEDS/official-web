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
              {/* SHADE IMAGE BEHIND TITLE */}
              <img
                src="/shade.png"
                alt="shade background glow"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] max-w-none opacity-60 pointer-events-none select-none mix-blend-screen"
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
          <div className="relative flex justify-end">
            <img
              src={planets}
              alt="planet stack"
              className="
                w-[280px] md:w-[420px] object-contain
                absolute md:top-[-160px] md:right-20 md:scale-100
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



