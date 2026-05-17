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

      gsap.to('.about-char', {
        opacity: 1,
        filter: 'blur(0px)',
        y: [30, 0],
        duration: 0.8,
        stagger: 0.04,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
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
            className="text-5xl md:text-6xl font-light tracking-wider text-white mb-8 select-none"
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
          {/* Animated SVG Connector Line (Shown only on Desktop layout) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[4px] pointer-events-none hidden lg:block z-0 opacity-40">
            <svg className="w-full h-[150px] overflow-visible" viewBox="0 0 1000 150" fill="none">
              {/* Connector path running from Card 1 center to Card 2, then to Card 3 */}
              <path
                ref={pathRef}
                d="M 166 75 Q 333 130 500 75 T 833 75"
                stroke="url(#lineGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E0B6E4" />
                  <stop offset="50%" stopColor="#705B72" />
                  <stop offset="100%" stopColor="#E0B6E4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Card 1 */}
          <div 
            className="about-card-wrapper z-10"
            onMouseMove={handleMouseMove}
          >
            <div className="glow-card h-full bg-[#0f0b14]/50 border border-white/5 rounded-[2.5rem] p-10 flex flex-col gap-5 backdrop-blur-md transition-all hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(224,182,228,0.06)] duration-500 relative overflow-hidden group">
              <div className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-[#E0B6E4] group-hover:scale-110 group-hover:bg-[#E0B6E4]/10 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
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
            <div className="glow-card h-full bg-[#0f0b14]/50 border border-white/5 rounded-[2.5rem] p-10 flex flex-col gap-5 backdrop-blur-md transition-all hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(224,182,228,0.06)] duration-500 relative overflow-hidden group">
              <div className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-[#E0B6E4] group-hover:scale-110 group-hover:bg-[#E0B6E4]/10 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
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
            <div className="glow-card h-full bg-[#0f0b14]/50 border border-white/5 rounded-[2.5rem] p-10 flex flex-col gap-5 backdrop-blur-md transition-all hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(224,182,228,0.06)] duration-500 relative overflow-hidden group">
              <div className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-[#E0B6E4] group-hover:scale-110 group-hover:bg-[#E0B6E4]/10 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
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
