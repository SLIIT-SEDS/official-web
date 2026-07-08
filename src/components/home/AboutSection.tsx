import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // 1. Text Entrance Animation
    if (headerRef.current) {
      const headerText = headerRef.current.innerText;
      headerRef.current.innerHTML = '';
      headerText.split('').forEach((char) => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.className = 'about-char opacity-0 filter blur-sm';
        headerRef.current?.appendChild(span);
      });

      gsap.fromTo('.about-char',
        { y: 30 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Fade in paragraph description
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

    // 2. Animated Constellation Line
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();

      // Set up stroke dash properties
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // Animate line drawing on scroll
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
          end: 'bottom 60%',
          scrub: 1.2, // Smooth sync with scroll position
        },
      });
    }

    // 3. Stagger Card Reveal
    const cards = cardsRef.current?.children;
    if (cards) {
      // Collect the actual card elements (excluding the SVG container)
      const cardElements = Array.from(cards).filter(el => el.classList.contains('about-card-wrapper'));

      gsap.fromTo(
        cardElements,
        {
          opacity: 0,
          y: 60,
          rotationX: 15,
          transformOrigin: 'top center'
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          stagger: 0.25,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  // Mouse Spotlight Glow controller
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-20 py-28 px-6 md:px-12 lg:px-20 bg-transparent flex flex-col items-center overflow-hidden"
    >
      {/* Decorative stars behind About */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-[20%] left-[10%] w-[2px] h-[2px] bg-white rounded-full animate-pulse" />
        <div className="absolute top-[60%] right-[15%] w-[3px] h-[3px] bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] left-[25%] w-[1px] h-[1px] bg-white rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl flex flex-col items-center relative z-10">
        {/* Header Text */}
        <div className="text-center mb-24 flex flex-col items-center">
          <h2
            ref={headerRef}
            className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wider text-white mb-8 select-none"
          >
            WHO WE ARE
          </h2>
          <p
            ref={textRef}
            className="text-gray-300 text-lg md:text-xl md:leading-relaxed font-light max-w-4xl text-center select-none"
          >
            SEDS SLIIT is a student-led organization advancing space exploration
            and <br className="hidden lg:block" />
            development at Sri Lanka Institute of Information Technology.{' '}
            <br className="hidden lg:block" />
            As an official chapter of Students for the Exploration and
            Development of Space, <br className="hidden lg:block" />
            we empower students to explore, build, and innovate beyond the
            classroom.
          </p>
        </div>

        {/* Feature Cards Grid with Connected Constellation Line */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 w-full mb-16 relative"
          style={{ perspective: '1200px' }}
        >

          {/* Card 1 */}
          <div
            className="about-card-wrapper z-10"
            onMouseMove={handleMouseMove}
          >
            <div className="glow-card h-full bg-[#0f0b14]/50 border border-white/5 rounded-[2.5rem] p-6 sm:p-10 flex flex-col gap-5 backdrop-blur-md transition-all hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(224,182,228,0.06)] duration-500 relative overflow-hidden group">
              <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide mt-4 select-none relative z-10">
                Shared Mission
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed select-none relative z-10">
                SEDS SLIIT brings together students from diverse academic
                backgrounds, united by a shared vision to shape the future of
                space science and technology.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="about-card-wrapper z-10"
            onMouseMove={handleMouseMove}
          >
            <div className="glow-card h-full bg-[#0f0b14]/50 border border-white/5 rounded-[2.5rem] p-6 sm:p-10 flex flex-col gap-5 backdrop-blur-md transition-all hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(224,182,228,0.06)] duration-500 relative overflow-hidden group">
              <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide mt-4 select-none relative z-10">
                Exploration Mode
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed select-none relative z-10">
                Through research, competitions, and technical challenges, we
                encourage hands-on experimentation and problem-solving in
                aerospace and engineering.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="about-card-wrapper z-10"
            onMouseMove={handleMouseMove}
          >
            <div className="glow-card h-full bg-[#0f0b14]/50 border border-white/5 rounded-[2.5rem] p-6 sm:p-10 flex flex-col gap-5 backdrop-blur-md transition-all hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(224,182,228,0.06)] duration-500 relative overflow-hidden group">
              <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide mt-4 select-none relative z-10">
                Beyond Academics
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed select-none relative z-10">
                Workshops, events, and outreach programs connect classroom
                knowledge with real-world applications, giving members practical
                industry exposure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Border spotlight glow styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .glow-card {
          position: relative;
        }
        .glow-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            800px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
            rgba(224, 182, 228, 0.07),
            transparent 40%
          );
          z-index: 1;
          pointer-events: none;
          transition: background 0.3s ease;
        }
        .glow-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: radial-gradient(
            450px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
            rgba(224, 182, 228, 0.22),
            transparent 50%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: 2;
          pointer-events: none;
        }
      `,
        }}
      />
    </section>
  );
};

export default AboutSection;
