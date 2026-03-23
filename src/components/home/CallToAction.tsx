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


    </section>
  );
};

export default CallToAction;