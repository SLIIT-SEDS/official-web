import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ultra-smooth exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Expose the instance so other code (e.g. hash scroll) can drive it
    (window as any).__lenis = lenis;

    // Synchronize Lenis scrolling with GSAP ScrollTrigger updates
    lenis.on('scroll', ScrollTrigger.update);

    // Tell GSAP to use Lenis requestAnimationFrame (raf)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable lag smoothing for instant responsiveness
    gsap.ticker.lagSmoothing(0);

    // Clean up on component unmount
    return () => {
      delete (window as any).__lenis;
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return null; // This component doesn't render any DOM elements
};

export default SmoothScroll;
