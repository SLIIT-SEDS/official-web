import { useEffect, useRef } from 'react';
import { Carousel } from 'antd';
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

      gsap.to('.div-char', {
        opacity: 1,
        filter: 'blur(0px)',
        y: [30, 0],
        duration: 0.8,
        stagger: 0.04,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
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

  // Carousel settings for smooth, infinite linear scrolling
  const carouselSettings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: 'linear',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="divisions-section relative z-20 py-28 px-6 md:px-12 lg:px-20 bg-transparent flex flex-col items-center overflow-hidden">
      
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

      <div className="container mx-auto max-w-6xl flex flex-col items-center mb-20 relative z-10">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-light tracking-wider text-white mb-8 select-none text-center"
        >
          OUR DIVISIONS
        </h2>
        <p 
          ref={textRef}
          className="text-gray-300 text-lg md:text-xl md:leading-relaxed font-light max-w-4xl text-center select-none"
        >
          Explore our specialized divisions driving innovation and research in
          space exploration.
        </p>
      </div>

      {/* Carousel list of Divisions with Neon border draws */}
      <div className="w-full max-w-[1600px] mx-auto pb-10 relative z-10">
        <Carousel {...carouselSettings} className="divisions-carousel">
          {divisionsData.map((division) => (
            <div key={division.id} className="px-3 py-6">
              <div
                className="division-glow-card relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] max-h-[460px] rounded-[2.5rem] overflow-hidden group border border-white/5 mx-auto transition-all duration-500 backdrop-blur-md"
                style={{
                  backgroundImage: `url(${division.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Neon Path Drawing Overlay */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-[#E0B6E4]/0 group-hover:border-[#E0B6E4]/25 transition-all duration-500 pointer-events-none z-20">
                  <svg className="absolute inset-0 w-full h-full" fill="none">
                    <rect
                      x="1" y="1" width="99%" height="99%" rx="38" ry="38"
                      stroke="url(#neonBorderGradient)"
                      strokeWidth="2"
                      className="neon-draw-rect"
                    />
                  </svg>
                </div>

                {/* Gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/80 pointer-events-none group-hover:from-black/35 group-hover:to-black/70 transition-colors duration-500 z-10" />

                <div className="absolute inset-0 p-10 flex flex-col justify-between z-15">
                  {/* Title (Top-left) */}
                  <h3
                    className="text-2xl sm:text-3xl text-white font-light tracking-wide whitespace-pre-line leading-tight group-hover:text-glow transition-all duration-500"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {division.title}
                  </h3>

                  {/* Read More Button (Bottom-left) */}
                  <div className="mt-auto">
                    <a
                      href={division.link}
                      className="inline-flex items-center justify-center px-7 py-2.5 bg-transparent text-gray-300 hover:text-white border border-white/10 hover:border-[#E0B6E4]/50 rounded-full transition-all duration-300 backdrop-blur-sm text-base md:text-lg font-light tracking-wide hover:shadow-[0_0_15px_rgba(224,182,228,0.2)]"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* SVG Definitions for Conic Border Drawing */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="neonBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0B6E4" />
            <stop offset="35%" stopColor="#7F6A81" />
            <stop offset="70%" stopColor="#090709" />
            <stop offset="100%" stopColor="#E0B6E4" />
          </linearGradient>
        </defs>
      </svg>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .divisions-carousel .slick-track {
          display: flex !important;
          align-items: stretch;
        }
        .divisions-carousel .slick-slide {
          height: auto;
        }
        .divisions-carousel .slick-slide > div {
          height: 100%;
        }
        
        /* Interactive Neon Border Drawing Animation */
        .neon-draw-rect {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          transition: stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .division-glow-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 25px 50px rgba(224, 182, 228, 0.08);
        }
        .division-glow-card:hover .neon-draw-rect {
          stroke-dashoffset: 0;
        }
      `,
        }}
      />
    </section>
  );
};

export default Divisions;
