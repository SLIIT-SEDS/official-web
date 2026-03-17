import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '0%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-black pb-24 pt-0"
    >
      {/* Hands image - Full width at top, non-overlapping */}
      <motion.div
        className="relative w-full z-0"
        style={{ y: imageY, opacity }}
      >
        {/* White-purple glow behind hands
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] rounded-full blur-[120px] pointer-events-none z-[-1]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(224,182,228,0.2) 60%, transparent 100%)'
          }}
        /> */}
        <img
          src="/cta-hands.png"
          alt="Hands"
          className="w-full h-auto object-cover"
          style={{ mixBlendMode: 'screen' }}
          loading="lazy"
        />
        {/* Subtle fade at the bottom of the image */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"
        />
      </motion.div>

      {/* Content Container - For centered heading and card */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 flex flex-col items-center">
        {/* Heading - Now below the image */}
        <motion.h2
          className="mt-8 mb-16 text-center font-light tracking-wider bg-gradient-to-r from-white to-[#E0B6E4] bg-clip-text text-transparent select-none"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          READY TO EXPLORE SPACE?
        </motion.h2>

        {/* Form Card */}
        <motion.div
          className="w-full max-w-[500px] bg-[#0f0b14]/60 border-t border-l border-r border-b-0 border-white/10 rounded-t-[2.5rem] p-12 backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h3
            className="mb-12 text-center font-light text-white tracking-wide"
            style={{ fontSize: '2rem' }}
          >
            Apply Now!
          </h3>

          <div className="flex flex-col gap-8">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-light text-gray-400 pl-1 tracking-wider uppercase">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/10 focus:border-white/30"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                }}
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-light text-gray-400 pl-1 tracking-wider uppercase">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/10 focus:border-white/30"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                }}
              />
            </div>

            {/* Year of Study */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-light text-gray-400 pl-1 tracking-wider uppercase">
                Year of study
              </label>
              <input
                type="text"
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300 border border-white/10 focus:border-white/30"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                }}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="button"
              className="mt-6 w-full rounded-lg bg-white py-4 text-[12px] font-bold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              JOIN THE MISSION
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;