import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '0%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-black px-6 pb-24"
    >
      {/* Hands image - full width at top */}
      <motion.div
        className="relative w-full max-w-lg mx-auto mb-8"
        style={{ y: imageY, opacity }}
      >
        <img
          src="/cta-hands.png"
          alt="Human and robotic hands reaching toward each other"
          className="w-full object-cover"
          style={{ maxHeight: '280px', objectPosition: 'center top' }}
          loading="lazy"
        />
        {/* Fade bottom edge into black */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: 'linear-gradient(to bottom, transparent, black)',
          }}
        />
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="relative z-10 mb-10 text-center font-light text-white"
        style={{ fontSize: 'clamp(1.6rem, 5vw, 2.8rem)', letterSpacing: '0.02em' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Ready to explore space?
      </motion.h2>

      {/* Form Card */}
      <motion.div
        className="relative z-10 w-full max-w-sm rounded-2xl px-8 py-8"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(16px)',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        <h3
          className="mb-6 text-center font-normal text-white"
          style={{ fontSize: '1.25rem', letterSpacing: '0.03em' }}
        >
          Apply Now!
        </h3>

        <div className="flex flex-col gap-4">
          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-light text-gray-300" style={{ letterSpacing: '0.04em' }}>
              Full Name
            </label>
            <input
              type="text"
              className="w-full rounded-md px-3 py-2 text-sm text-white outline-none transition-colors focus:border-purple-400/60"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-light text-gray-300" style={{ letterSpacing: '0.04em' }}>
              Email Address
            </label>
            <input
              type="email"
              className="w-full rounded-md px-3 py-2 text-sm text-white outline-none transition-colors focus:border-purple-400/60"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            />
          </div>

          {/* Year of Study */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-light text-gray-300" style={{ letterSpacing: '0.04em' }}>
              Year of study
            </label>
            <input
              type="text"
              className="w-full rounded-md px-3 py-2 text-sm text-white outline-none transition-colors focus:border-purple-400/60"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="button"
            className="mt-2 w-full rounded-full py-3 text-xs font-semibold tracking-[0.25em] text-white transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
            whileHover={{
              background: 'rgba(139,92,246,0.25)',
              borderColor: 'rgba(167,139,250,0.5)',
              boxShadow: '0 0 20px rgba(139,92,246,0.3)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            JOIN THE MISSION
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;