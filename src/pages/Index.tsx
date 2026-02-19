import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BlogsSection from "@/components/BlogsSection";
import EventsSection from "@/components/EventsSection";
import BoardSection from "@/components/BoardSection";
import ContactSection from "@/components/ContactSection";
import { useMemo } from "react";

const GlobalStars = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${2.5 + Math.random() * 5}s`,
        size: Math.random() > 0.85 ? 3 : Math.random() > 0.5 ? 2 : 1,
        opacity: 0.15 + Math.random() * 0.35,
      })),
    []
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-foreground/60"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration} ease-in-out infinite`,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <main className="relative">
      <GlobalStars />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <BlogsSection />
        <EventsSection />
        <BoardSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
