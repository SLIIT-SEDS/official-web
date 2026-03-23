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
      className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-transparent pb-24 pt-0"
    >
      {/* Hands image - Full width at top, non-overlapping */}
      <motion.div
        className="relative w-full z-0"
        style={{ y: imageY, opacity }}
      >
        <img
          src="/cta-hands.png"
          alt="Hands"
          className="w-full h-auto object-cover"
          style={{ mixBlendMode: 'screen' }}
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default CallToAction;