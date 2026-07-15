import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ApplyNowFormSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. ScrollTrigger Entrance Animation for Heading & Form
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    tl.fromTo(headingRef.current,
      { opacity: 0, y: 35, filter: 'blur(5px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(formCardRef.current,
        { opacity: 0, y: 50, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.2)' },
        '-=0.4'
      );

    // 2. Slow Ambient Floating Motion for Nebula Glow
    gsap.to(nebulaRef.current, {
      x: '+=30',
      y: '-=40',
      rotation: 18,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.nebula-glow-2', {
      x: '-=30',
      y: '+=20',
      rotation: -12,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-12 md:py-28 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Background Animated Nebulas */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div
          ref={nebulaRef}
          className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#E0B6E4]/30 to-transparent blur-[100px] mix-blend-screen"
        />
        <div
          className="nebula-glow-2 absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-l from-primary/20 to-transparent blur-[120px] mix-blend-screen"
        />
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="mb-10 md:mb-16 text-center font-light tracking-wider bg-gradient-to-r from-white to-[#E0B6E4] bg-clip-text text-transparent select-none opacity-0"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          READY TO EXPLORE SPACE?
        </h2>

        {/* Form Card */}
        <div
          ref={formCardRef}
          className="w-full max-w-[500px] bg-[#0f0b14]/50 border border-white/5 rounded-[2.5rem] p-5 sm:p-10 md:p-12 backdrop-blur-md relative overflow-hidden opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-white/10 transition-colors duration-500"
        >
          {/* Top light beam accent */}
          <div className="absolute top-0 inset-x-10 h-[1px] bg-gradient-to-r from-transparent via-[#E0B6E4]/40 to-transparent" />

          <h3
            className="mb-10 text-center font-light text-white tracking-wide select-none"
            style={{ fontSize: '2.2rem', fontFamily: "'Rajdhani', sans-serif" }}
          >
            Apply Now!
          </h3>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col gap-8"
            onSubmit={(e) => {
              e.preventDefault();
              // Web3Forms integration logic goes here
            }}
          >
            {/* Full Name */}
            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="name" className="text-sm font-light text-gray-400 pl-1 tracking-wider uppercase group-focus-within:text-[#E0B6E4] transition-colors duration-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/5 focus:border-[#E0B6E4]/30 focus:shadow-[0_0_15px_rgba(224,182,228,0.06)]"
                style={{
                  background: 'rgba(0, 0, 0, 0.45)',
                }}
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="email" className="text-sm font-light text-gray-400 pl-1 tracking-wider uppercase group-focus-within:text-[#E0B6E4] transition-colors duration-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/5 focus:border-[#E0B6E4]/30 focus:shadow-[0_0_15px_rgba(224,182,228,0.06)]"
                style={{
                  background: 'rgba(0, 0, 0, 0.45)',
                }}
              />
            </div>

            {/* Year of Study */}
            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="year" className="text-sm font-light text-gray-400 pl-1 tracking-wider uppercase group-focus-within:text-[#E0B6E4] transition-colors duration-300">
                Year of study
              </label>
              <input
                type="text"
                id="year"
                name="year"
                required
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/5 focus:border-[#E0B6E4]/30 focus:shadow-[0_0_15px_rgba(224,182,228,0.06)]"
                style={{
                  background: 'rgba(0, 0, 0, 0.45)',
                }}
              />
            </div>

            {/* Premium Submit Button with magnetic zoom */}
            <button
              type="submit"
              className="join-button mt-6 w-full rounded-xl bg-white py-4 text-[12px] font-bold uppercase tracking-[0.25em] text-[#090709] transition-all duration-500 hover:bg-gray-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              JOIN THE MISSION
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyNowFormSection;
