import humanHandImg from "../../assets/human_hand.png";
import robotHandImg from "../../assets/robot_hand.png";

const ReadySection = () => {
    return (
        <section className="relative z-20 min-h-screen flex flex-col items-center justify-center bg-transparent snap-start overflow-hidden">
            {/* Purple ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full filter blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full filter blur-[120px] pointer-events-none" />

            {/* Hands row — side by side, full images visible */}
            <div className="w-full max-w-6xl mx-auto px-4 md:px-12 flex items-center justify-center gap-0 md:gap-4">
                {/* Human hand */}
                <div className="flex-1 flex justify-end animate-slide-in-left">
                    <img
                        src={humanHandImg}
                        alt="Human hand reaching out"
                        className="w-full max-w-[450px] h-auto object-contain"
                        style={{
                            filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))",
                            mixBlendMode: "screen",
                        }}
                    />
                </div>

                {/* Center glow spark */}
                <div className="relative flex-shrink-0 w-2 flex items-center justify-center">
                    <div className="absolute w-8 h-8 bg-purple-400/40 rounded-full filter blur-[14px] animate-pulse" />
                    <div className="absolute w-3 h-3 bg-white/70 rounded-full filter blur-[3px] animate-pulse" />
                </div>

                {/* Robot hand */}
                <div className="flex-1 flex justify-start animate-slide-in-right">
                    <img
                        src={robotHandImg}
                        alt="Robot hand reaching out"
                        className="w-full max-w-[450px] h-auto object-contain"
                        style={{
                            filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))",
                            mixBlendMode: "screen",
                        }}
                    />
                </div>
            </div>

            {/* Ready to explore space? */}
            <h2
                className="mt-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider text-center select-none leading-tight px-6 relative z-10 bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent animate-fade-in-up"
            >
                Ready to explore space?
            </h2>
        </section>
    );
};

export default ReadySection;
