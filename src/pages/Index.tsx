import { useMemo } from "react";
import Landing from "../components/landingPage";

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
    [],
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
    <main className="relative min-h-screen">
      <GlobalStars />
      <div className="relative z-10 flex flex-col w-full">
        <Landing />
      </div>
    </main>
  );
};

export default Index;
