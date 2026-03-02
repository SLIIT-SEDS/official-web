import humanHandImg from "../../assets/human_hand.png";
import robotHandImg from "../../assets/robot_hand.png";

const ReadySection = () => {
    return (
        <section className="relative z-20 min-h-screen flex flex-col items-center justify-center bg-transparent snap-start overflow-hidden">
            {/* Purple ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full filter blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full filter blur-[120px] pointer-events-none" />

            {/* Hands */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                {/* Human hand */}
                <div className="flex items-center animate-slide-in-left" style={{ width: "50%", justifyContent: "flex-start" }}>
                    <img
                        src={humanHandImg}
                        alt="Human hand reaching out"
                        className="w-full h-auto object-contain"
                        style={{
                            maxHeight: "90vh",
                            filter: "drop-shadow(0 0 40px rgba(168, 85, 247, 0.5))",
                            mixBlendMode: "screen",
                            marginLeft: "-5%",
                        }}
                    />
                </div>

                {/* Center glow spark */}
                <div className="relative flex-shrink-0 flex items-center justify-center z-10">
                    <div className="absolute w-12 h-12 bg-purple-400/50 rounded-full filter blur-[18px] animate-pulse" />
                    <div className="absolute w-4 h-4 bg-white/80 rounded-full filter blur-[4px] animate-pulse" />
                </div>

                {/* Robot hand */}
                <div className="flex items-center animate-slide-in-right" style={{ width: "50%", justifyContent: "flex-end" }}>
                    <img
                        src={robotHandImg}
                        alt="Robot hand reaching out"
                        className="w-full h-auto object-contain"
                        style={{
                            maxHeight: "90vh",
                            filter: "drop-shadow(0 0 40px rgba(168, 85, 247, 0.5))",
                            mixBlendMode: "screen",
                            marginRight: "-5%",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default ReadySection;
