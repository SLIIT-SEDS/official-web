import { useState } from "react";

const ApplySection = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        yearOfStudy: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 bg-transparent snap-start gap-8">
            {/* Purple ambient glow */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full filter blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full filter blur-[120px] pointer-events-none" />

            {/* Section heading — outside and above the card */}
            <h2
                className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wider text-center select-none leading-tight animate-fade-in-up"
                style={{
                    background: "linear-gradient(90deg, #ffffff 0%, #c084fc 50%, #a855f7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                }}
            >
                Ready to explore space?
            </h2>

            {/* Card container */}
            <div className="w-full max-w-xl bg-[#0f0b14]/40 border border-white/10 rounded-2xl backdrop-blur-md p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-3xl sm:text-4xl font-light tracking-wider text-white mb-10 select-none text-center">
                    Apply Now!
                </h3>

                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="fullName"
                            className="text-gray-300 text-sm font-light tracking-wide"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-transparent border border-white/15 rounded-lg text-white placeholder-gray-500 font-light text-base focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="text-gray-300 text-sm font-light tracking-wide"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-transparent border border-white/15 rounded-lg text-white placeholder-gray-500 font-light text-base focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="yearOfStudy"
                            className="text-gray-300 text-sm font-light tracking-wide"
                        >
                            Year of study
                        </label>
                        <input
                            type="text"
                            id="yearOfStudy"
                            name="yearOfStudy"
                            value={formData.yearOfStudy}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-transparent border border-white/15 rounded-lg text-white placeholder-gray-500 font-light text-base focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                            required
                        />
                    </div>

                    <div className="flex justify-center mt-4">
                        <button
                            type="submit"
                            className="px-10 py-3 bg-white text-black font-semibold text-sm tracking-wider rounded-full hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 uppercase"
                        >
                            JOIN THE MISSION
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ApplySection;
