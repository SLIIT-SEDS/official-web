import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative z-20 min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 bg-transparent snap-start">
      {/* Purple ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full filter blur-[180px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl flex flex-col items-center">
        {/* Header Text */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-light tracking-wider text-white mb-8 select-none animate-fade-in-up">
            WHO WE ARE
          </h2>
          <p className="text-gray-300 text-lg md:text-xl md:leading-relaxed font-light max-w-4xl text-center animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            SEDS SLIIT is a student-led organization advancing space exploration
            and <br className="hidden lg:block" />
            development at Sri Lanka Institute of Information Technology.{" "}
            <br className="hidden lg:block" />
            As an official chapter of Students for the Exploration and
            Development of Space, <br className="hidden lg:block" />
            we empower students to explore, build, and innovate beyond the
            classroom.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 w-full mb-16">
          {/* Card 1 */}
          <div className="group relative bg-[#0f0b14]/60 border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col gap-4 backdrop-blur-md transition-all hover:-translate-y-2 duration-300 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide relative z-10">
              Shared Mission
            </h3>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed relative z-10">
              SEDS SLIIT brings together students from diverse academic
              backgrounds, united by a shared vision to shape the future of
              space science and technology.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-[#0f0b14]/60 border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col gap-4 backdrop-blur-md transition-all hover:-translate-y-2 duration-300 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide relative z-10">
              Exploration Mode
            </h3>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed relative z-10">
              Through research, competitions, and technical challenges, we
              encourage hands-on experimentation and problem-solving in
              aerospace and engineering.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-[#0f0b14]/60 border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col gap-4 backdrop-blur-md transition-all hover:-translate-y-2 duration-300 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide relative z-10">
              Beyond Academics
            </h3>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed relative z-10">
              Workshops, events, and outreach programs connect classroom
              knowledge with real-world applications, giving members practical
              industry exposure.
            </p>
          </div>
        </div>

        {/* Read More Button — navigates to About Us page */}
        <div className="flex justify-center">
          <Button
            className="!bg-transparent border-white/20 text-gray-300 hover:text-white hover:border-white/40"
            onClick={() => navigate("/about")}
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
