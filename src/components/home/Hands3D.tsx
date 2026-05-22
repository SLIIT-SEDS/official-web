import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hands3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track the scroll progress of the container relative to the viewport.
  // "start 75%" - The animation starts ONLY after the top of the container is 75% down the screen (fully visible and comfortable).
  // "center center" - The animation finishes exactly when the center of the container is in the center of the viewport.
  const isMobile = windowWidth < 640;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Mobile: animation completes as you scroll PAST the section ("end 30%" = bottom of section at 30% viewport height)
    // Desktop: animation completes when section center hits viewport center
    offset: isMobile ? ["start 90%", "end 1%"] : ["start 50%", "center center"]
  });

  // Add smooth spring physics to scroll progress for fluid inertia and lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Calculate hand size based on viewport width
  const handWidth = windowWidth * (windowWidth >= 1024 ? 0.6 : windowWidth >= 640 ? 0.7 : 0.75);

  // Maintain the exact visual vertical offset ratio of -0.316 relative to hand size
  const rightHandTop = -0.316 * handWidth;

  // Calculate translation range based on viewport width
  // On desktop (>=1024px): 260px
  // On tablet (>=640px): 180px
  // On mobile (<640px): 110px
  const translationDistance = windowWidth >= 1024 ? 260 : windowWidth >= 640 ? 180 : 110;

  // Map scroll progress to horizontal translation (X)
  // At scroll progress 0 (fully visible but separated): Left hand is shifted left
  // At scroll progress 0.95 (center meeting point): Left hand is at 0px (stopped)
  const leftHandX = useTransform(smoothProgress, [0, 0.95], [-translationDistance, 0]);

  // At scroll progress 0 (fully visible but separated): Right hand is shifted right
  // At scroll progress 0.95 (center meeting point): Right hand is at 0px (stopped)
  const rightHandX = useTransform(smoothProgress, [0, 0.95], [translationDistance, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] sm:h-[550px] lg:h-[650px] overflow-hidden bg-transparent flex items-center justify-center select-none"
    >
      {/* Left Hand (Human) - Large scale, slides from the left margin on scroll */}
      <motion.div
        style={{ x: leftHandX }}
        className="absolute left-[-2%] sm:left-[-3%] md:left-[-4%] lg:left-[-5%] top-[8%] sm:top-[0%] -translate-y-1/2 w-[75%] sm:w-[70%] md:w-[65%] lg:w-[60%] max-w-[1000px] aspect-square flex items-center justify-center pointer-events-none z-10"
      >
        <img
          src="/lefttransparent.png"
          alt="Human Hand (Left)"
          className="w-full h-full object-contain select-none pointer-events-none"
        />
      </motion.div>

      {/* Right Hand (Robotic) - Large scale, slides from the right margin on scroll */}
      <motion.div
        style={{ x: rightHandX, top: isMobile ? `${rightHandTop + 40}px` : `${rightHandTop}px` }}
        className="absolute right-[-2%] sm:right-[-3%] md:right-[-4%] lg:right-[-5%] -translate-y-1/2 w-[75%] sm:w-[70%] md:w-[65%] lg:w-[60%] max-w-[1000px] aspect-square flex items-center justify-center pointer-events-none z-10"
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
