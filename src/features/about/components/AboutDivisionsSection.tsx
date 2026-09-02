import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import image1 from "@/assets/divisions/image1.png";
import image2 from "@/assets/divisions/image2.png";
import image3 from "@/assets/divisions/image3.png";
import image4 from "@/assets/divisions/image4.png";

interface Division {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
}

const divisions: Division[] = [
  {
    id: 1,
    slug: "observation-camping",
    title: "Observation and Camping Division",
    image: image1,
    description: "SEDS SLIIT’s Observation & Camping Division offers unforgettable stargazing experiences through dark-sky camping expeditions, astronomy observation nights, and hands-on workshops. From identifying stars and planets to astrophotography and telescope handling, we provide practical learning for all skill levels. Through community outreach and public events, we share the beauty of the night sky and inspire curiosity about the universe among students and the wider public."
  },
  {
    id: 2,
    slug: "data-analysis-software",
    title: "Data Analysis and Software Division",
    image: image2,
    description: "SEDS SLIIT’s Data Analysis & Software Division focuses on applying data science and software engineering to space exploration. Through hands-on projects and workshops, members gain experience in data processing, analysis, and software development, including satellite data analysis and mission-related applications. By working on collaborative, real-world initiatives across divisions, we equip students with practical skills and an innovation-driven mindset to solve data-driven challenges in the space domain."
  },
  {
    id: 3,
    slug: "robotics-rover",
    title: "Robotics and Rover Division",
    image: image3,
    description: "SEDS SLIIT’s Robotics & Rover Division advances space exploration through hands-on robotics and autonomous systems that act as humanity’s extensions beyond Earth. Members design, build, and operate robotic platforms while gaining practical skills in engineering, programming through real-world projects and mentorship. Alongside technical innovation, the division promotes space science awareness through outreach and public events, inspiring curiosity and shaping the next generation of space explorers—one robot at a time."
  },
  {
    id: 4,
    slug: "biotechnical",
    title: "Biotechnical Division",
    image: image4,
    description: "SEDS SLIIT’s Biotechnical Division explores the intersection of biology and space through research in genetic engineering, bioinformatics, and synthetic biology. The division focuses on developing bioengineering solutions for space exploration, including astronaut health, sustainable life-support systems, and resilient ecosystems for extreme environments. Through innovation, collaboration, and research-driven projects, we aim to enable human survival and growth beyond Earth."
  }
];

const AboutDivisionsSection: React.FC = () => {
  const { hash } = useLocation();

  // Scroll to the matched division when arriving via /about#slug (home Read More, etc.)
  useEffect(() => {
    if (!hash) return;

    const targetId = hash.replace("#", "");
    const scrollToTarget = () => {
      const el = document.getElementById(targetId);
      if (!el) return false;
      // Lenis controls scrolling, so drive it through the global instance if
      // present; otherwise fall back to native scrollIntoView.
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -100, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return true;
    };

    // Retry briefly so layout/images can settle on mobile & desktop
    if (scrollToTarget()) return;

    const timeouts = [100, 300, 600].map((delay) =>
      window.setTimeout(scrollToTarget, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [hash]);

  return (
    <section id="divisions" className="w-full pb-32 px-6 md:px-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-16 md:mb-24">
          <h2
            className="text-5xl md:text-6xl font-light text-white mb-6 tracking-widest leading-tight"
            style={{ fontFamily: "'Exo 2', 'Rajdhani', sans-serif" }}
          >
            DIVISIONS
          </h2>
        </div>

        {/* DIVISIONS LIST */}
        <div className="space-y-24 md:space-y-32">
          {divisions.map((division) => {
            return (
              <div
                key={division.id}
                id={division.slug}
                className="scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center"
              >
                {/* IMAGE CONTAINER */}
                <div
                  className="relative overflow-hidden rounded-[2rem] border border-white/10 hover:border-white/20 transition-all duration-500 group shadow-lg"
                >
                  <img
                    src={division.image}
                    alt={division.title}
                    className="w-full aspect-square md:aspect-[4/3] object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle purple-hued dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* TEXT CONTAINER */}
                <div className="flex flex-col justify-center">
                  <h3
                    className="text-3xl md:text-4xl font-normal text-white mb-6 tracking-wide leading-tight"
                    style={{ fontFamily: "'Exo 2', 'Rajdhani', sans-serif" }}
                  >
                    {division.title}
                  </h3>
                  <p
                    className="text-white text-lg md:text-xl leading-relaxed font-light"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {division.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutDivisionsSection;
