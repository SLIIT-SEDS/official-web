import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import image1 from '../../assets/divisions/image1.png';
import image2 from '../../assets/divisions/image2.png';
import image3 from '../../assets/divisions/image3.png';
import image4 from '../../assets/divisions/image4.png';

gsap.registerPlugin(ScrollTrigger);

const divisionsData = [
  {
    id: 1,
    title: 'Observation and\nCamping Division',
    image: image1,
    link: '#',
  },
  {
    id: 2,
    title: 'Data Analysis and\nSoftware Division',
    image: image2,
    link: '#',
  },
  {
    id: 3,
    title: 'Robotics and\nRover Division',
    image: image3,
    link: '#',
  },
  {
    id: 4,
    title: 'Biotechnical\nDivision',
    image: image4,
    link: '#',
  },
];

const Divisions = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Title Letter Reveal
    if (titleRef.current) {
      const headerText = titleRef.current.innerText;
      titleRef.current.innerHTML = '';
      headerText.split('').forEach((char) => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.className = 'div-char opacity-0 filter blur-sm';
        titleRef.current?.appendChild(span);
      });

      gsap.fromTo('.div-char',
        { y: 30 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Subtitle reveal
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // 2. Cyber-Grid perspective warp on scroll
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current,
        {
          rotationX: 65,
          z: -300,
          y: 100,
          opacity: 0.25
        },
        {
          rotationX: 45,
          z: 0,
          y: -100,
          opacity: 0.55,
          scrollTrigger: {
            trigger: '.divisions-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="divisions-section relative z-20 py-16 md:py-28 px-4 md:px-12 lg:px-20 bg-transparent flex flex-col items-center overflow-hidden">

      {/* Cyber space grid matrix background */}
      <div
        className="absolute inset-0 pointer-events-none z-0 flex justify-center items-end"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <div
          ref={gridRef}
          className="w-[200%] h-[150%] opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(224, 182, 228, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(224, 182, 228, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transformOrigin: 'bottom center',
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl flex flex-col items-center mb-10 md:mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wider text-white mb-6 select-none text-center"
        >
          OUR DIVISIONS
        </h2>
        <p
          ref={textRef}
          className="text-white text-base sm:text-lg md:text-xl md:leading-relaxed font-light max-w-4xl text-center select-none"
        >
          Explore our specialized divisions driving innovation and research in
          space exploration.
        </p>
      </div>

      {/* Horizontal Marquee Container */}
      <div className="w-full max-w-[1600px] mx-auto pb-10 relative z-10 px-4 overflow-hidden group/marquee">
        {/* Soft fade-out gradients at the boundaries */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#090709] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#090709] to-transparent z-20 pointer-events-none" />

        {/* Scroll Track */}
        <div className="flex flex-row gap-6 w-max animate-[horizontal-marquee_30s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
          {/* Duplicated list for infinite seamless loop */}
          {[...divisionsData, ...divisionsData].map((division, idx) => (
            <div key={`${division.id}-${idx}`} className="w-[280px] sm:w-[320px] md:w-[380px] shrink-0 px-2 py-4">
              <div
                className="division-glow-card relative rounded-[1.8rem] md:rounded-[2.5rem] overflow-hidden group border border-white/5 w-full h-[320px] sm:h-[360px] md:h-[380px] transition-all duration-500 backdrop-blur-md"
                style={{
                  backgroundImage: `url(${division.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/80 pointer-events-none group-hover:from-black/35 group-hover:to-black/70 transition-colors duration-500 z-10" />

                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between" style={{ zIndex: 15 }}>
                  <h3
                    className="text-2xl md:text-3xl text-white font-light tracking-wide whitespace-pre-line leading-tight group-hover:text-glow transition-all duration-500"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {division.title}
                  </h3>
                  <div className="mt-auto">
                    <a
                      href={division.link}
                      className="inline-flex items-center justify-center px-7 py-2 bg-transparent text-white hover:text-white border border-white/10 hover:border-[#E0B6E4]/50 rounded-full transition-all duration-300 backdrop-blur-sm text-sm md:text-base font-light tracking-wide hover:shadow-[0_0_15px_rgba(224,182,228,0.2)]"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes horizontal-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .division-glow-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 25px 50px rgba(224, 182, 228, 0.08);
        }
      `,
        }}
      />
    </section>
  );
};

export default Divisions;
