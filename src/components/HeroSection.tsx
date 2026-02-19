import heroBg from "@/assets/hero-bg.png";
import { motion } from "framer-motion";

const Stars = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${2 + Math.random() * 4}s`,
  }));

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            "--delay": star.delay,
            "--duration": star.duration,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-l from-background/80 via-background/40 to-transparent" />
      <Stars />

      <div className="relative z-10 container mx-auto px-4 pt-20 flex justify-center md:justify-end">
        <div className="text-center md:text-right max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extralight tracking-[0.15em] sm:tracking-[0.3em] text-foreground text-glow mb-4 sm:mb-6 uppercase"
          >
            SEDS SLIIT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-base sm:text-lg md:text-xl text-muted-foreground tracking-[0.1em] sm:tracking-[0.15em] font-light mb-8 sm:mb-10 leading-relaxed"
          >
            Students for the Exploration and<br />Development of Space
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            href="#about"
            className="group relative inline-block rounded-full px-8 sm:px-10 py-3 text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-light text-foreground overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full border border-muted-foreground/40 group-hover:border-primary/60 transition-colors duration-300" />
            <span className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_2px_hsl(var(--primary))] animate-[orbit_4s_linear_infinite]" style={{ top: '-4px', left: '50%', transformOrigin: '0 calc(50% + 22px)' }} />
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
            <span className="relative z-10">Join Us</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
