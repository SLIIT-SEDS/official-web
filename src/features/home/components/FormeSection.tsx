import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type FormStatus = {
  type: 'success' | 'error';
  message: string;
};

const INQUIRY_API_URL = '/api/inquiry';

const FormeSection = () => {
  const { state } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus | null>(null);

  // Scroll to the form when arriving via navbar "Contact Us" (no URL hash)
  useEffect(() => {
    if (state?.scrollTo !== 'get-in-touch') return;
    const scrollToForm = () => {
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    scrollToForm();
    const timeouts = [100, 300, 600].map((delay) =>
      window.setTimeout(scrollToForm, delay)
    );
    return () => timeouts.forEach(clearTimeout);
  }, [state?.scrollTo]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const website = String(formData.get('website') ?? '').trim();

    setIsSubmitting(true);

    try {
      const response = await fetch(INQUIRY_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, website }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: 'success',
          message: 'Your inquiry was sent successfully! We will be in touch soon.',
        });
        form.reset();
      } else {
        setStatus({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Network error. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 35, filter: 'blur(5px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
    ).fromTo(
      formCardRef.current,
      { opacity: 0, y: 50, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.2)' },
      '-=0.4'
    );

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
      id="get-in-touch"
      ref={containerRef}
      className="relative w-full py-12 md:py-28 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden bg-transparent scroll-mt-24"
    >
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div
          ref={nebulaRef}
          className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#E0B6E4]/30 to-transparent blur-[100px] mix-blend-screen"
        />
        <div className="nebula-glow-2 absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-l from-primary/20 to-transparent blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto flex flex-col items-center">
        <h2
          ref={headingRef}
          className="mb-10 md:mb-16 text-center font-light tracking-wider bg-gradient-to-r from-white to-[#E0B6E4] bg-clip-text text-transparent select-none opacity-0"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          READY TO EXPLORE SPACE?
        </h2>

        <div
          ref={formCardRef}
          className="w-full max-w-[500px] bg-[#0f0b14]/50 border border-white/5 rounded-[2.5rem] p-5 sm:p-10 md:p-12 backdrop-blur-md relative overflow-hidden opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-white/10 transition-colors duration-500"
        >
          <div className="absolute top-0 inset-x-10 h-[1px] bg-gradient-to-r from-transparent via-[#E0B6E4]/40 to-transparent" />

          <h3
            className="mb-10 text-center font-light text-white tracking-wide select-none"
            style={{ fontSize: '2.2rem', fontFamily: "'Rajdhani', sans-serif" }}
          >
            Get in Touch!
          </h3>

          <form
            ref={formRef}
            className="flex flex-col gap-8"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute opacity-0 pointer-events-none h-0 w-0"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-2 relative group">
              <label
                htmlFor="name"
                className="text-sm font-light text-gray-400 pl-1 tracking-wider uppercase group-focus-within:text-[#E0B6E4] transition-colors duration-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                maxLength={100}
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/5 focus:border-[#E0B6E4]/30 focus:shadow-[0_0_15px_rgba(224,182,228,0.06)]"
                style={{
                  background: 'rgba(0, 0, 0, 0.45)',
                }}
              />
            </div>

            <div className="flex flex-col gap-2 relative group">
              <label
                htmlFor="email"
                className="text-sm font-light text-gray-400 pl-1 tracking-wider uppercase group-focus-within:text-[#E0B6E4] transition-colors duration-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={254}
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/5 focus:border-[#E0B6E4]/30 focus:shadow-[0_0_15px_rgba(224,182,228,0.06)]"
                style={{
                  background: 'rgba(0, 0, 0, 0.45)',
                }}
              />
            </div>

            <div className="flex flex-col gap-2 relative group">
              <label
                htmlFor="message"
                className="text-sm font-light text-gray-400 pl-1 tracking-wider uppercase group-focus-within:text-[#E0B6E4] transition-colors duration-300"
              >
                Your Inquiry
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={2000}
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/5 focus:border-[#E0B6E4]/30 focus:shadow-[0_0_15px_rgba(224,182,228,0.06)] resize-none"
                style={{
                  background: 'rgba(0, 0, 0, 0.45)',
                }}
              />
            </div>

            {status && (
              <p
                role="status"
                className={`text-sm text-center ${
                  status.type === 'success' ? 'text-[#E0B6E4]' : 'text-red-400'
                }`}
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="join-button mt-6 w-full rounded-xl bg-white py-4 text-[12px] font-bold uppercase tracking-[0.25em] text-[#090709] transition-all duration-500 hover:bg-gray-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              {isSubmitting ? 'SUBMITTING...' : 'SEND'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormeSection;
