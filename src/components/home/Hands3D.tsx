import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hands3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the container relative to the viewport.
  // "start 75%" - The animation starts ONLY after the top of the container is 75% down the screen (fully visible and comfortable).
  // "center center" - The animation finishes exactly when the center of the container is in the center of the viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "center center"]
  });

  // Add smooth spring physics to scroll progress for fluid inertia and lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Map scroll progress to horizontal translation (X)
  // At scroll progress 0 (fully visible but separated): Left hand is shifted left (-260px)
  // At scroll progress 0.95 (center meeting point): Left hand is at 0px (stopped)
  const leftHandX = useTransform(smoothProgress, [0, 0.95], [-260, 0]);

  // At scroll progress 0 (fully visible but separated): Right hand is shifted right (260px)
  // At scroll progress 0.95 (center meeting point): Right hand is at 0px (stopped)
  const rightHandX = useTransform(smoothProgress, [0, 0.95], [260, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] overflow-hidden bg-transparent flex items-center justify-center select-none"
    >
      {/* Left Hand (Human) - Large scale, slides from the left margin on scroll (moved an extra 80px higher to top-[0%]) */}
      <motion.div
        style={{ x: leftHandX }}
        className="absolute left-[-2%] sm:left-[-3%] md:left-[-4%] lg:left-[-5%] top-[0%] -translate-y-1/2 w-[75%] sm:w-[70%] md:w-[65%] lg:w-[60%] max-w-[750px] aspect-square flex items-center justify-center pointer-events-none z-10"
      >
        <img
          src="/lefttransparent.png"
          alt="Human Hand (Left)"
          className="w-full h-full object-contain select-none pointer-events-none"
        />
      </motion.div>

      {/* Right Hand (Robotic) - Large scale, slides from the right margin on scroll (moved an extra 80px higher to top-[-19%]) */}
      <motion.div
        style={{ x: rightHandX }}
        className="absolute right-[-2%] sm:right-[-3%] md:right-[-4%] lg:right-[-5%] top-[-35%] -translate-y-1/2 w-[75%] sm:w-[70%] md:w-[65%] lg:w-[60%] max-w-[750px] aspect-square flex items-center justify-center pointer-events-none z-10"
      >
        <img
          src="/right.png"
          alt="Robotic Hand (Right)"
          className="w-full h-full object-contain select-none pointer-events-none"
        />
      </motion.div>
    </div>
  );
};

export default Hands3D;
