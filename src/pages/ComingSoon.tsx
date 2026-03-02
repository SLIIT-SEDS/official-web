import { useMemo } from "react";
import astronomyImg from "../assets/astronomy.png";
import GlobalStars from "../components/GlobalStars";

interface ComingSoonProps {
    title: string;
}

const ComingSoon = ({ title }: ComingSoonProps) => {
    return (
        <main className="relative min-h-screen">
            <GlobalStars />
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden">
                {/* Purple ambient glows */}
                <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-purple-600/10 rounded-full filter blur-[150px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/8 rounded-full filter blur-[100px] pointer-events-none" />

                {/* Astronaut image — visible on ALL screens including mobile */}
                <div className="relative w-[250px] sm:w-[320px] md:w-[400px] lg:w-[450px] mb-8 -translate-x-6 sm:-translate-x-8 md:-translate-x-12">
                    <img
                        src={astronomyImg}
                        alt="Astronaut"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Page Title */}
                <h1
                    className="text-glow text-glow-purple font-light tracking-wider text-white text-center leading-none mb-6"
                    style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
                >
                    {title}
                </h1>

                {/* Coming Soon badge */}
                <div className="flex flex-col items-center gap-4">
                    <div className="px-8 py-3 border border-purple-500/30 rounded-full bg-purple-600/5 backdrop-blur-md">
                        <span className="text-xl md:text-2xl font-light tracking-[0.3em] text-purple-300 uppercase">
                            Coming Soon
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base font-light text-center max-w-md mt-2">
                        We're working on something amazing. Stay tuned for updates!
                    </p>
                </div>

                {/* Animated dots */}
                <div className="flex gap-2 mt-8">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
                </div>
            </div>
        </main>
    );
};

export default ComingSoon;
