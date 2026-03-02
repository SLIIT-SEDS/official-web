import planetsImg from "../assets/planets.png";
import GlobalStars from "../components/GlobalStars";
import image1 from "../assets/divisions/image1.png";
import image2 from "../assets/divisions/image2.png";
import image3 from "../assets/divisions/image3.png";
import image4 from "../assets/divisions/image4.png";

const divisionsDetail = [
    {
        id: 1,
        slug: "observation",
        title: "Observation and Camping Division",
        image: image1,
        description: [
            "SEDS SLIIT's Observation & Camping Division offers unforgettable stargazing experiences through dark-sky camping expeditions, astronomy observation nights, and hands-on workshops.",
            "From identifying stars and planets to astrophotography and telescope handling, we provide practical learning for all skill levels.",
            "Through community outreach and public events, we share the beauty of the night sky and inspire curiosity about the universe among students and the wider public.",
        ],
    },
    {
        id: 2,
        slug: "data-analysis",
        title: "Data Analysis and Software Division",
        image: image2,
        description: [
            "SEDS SLIIT's Data Analysis & Software Division focuses on applying data science and software engineering to space exploration. Through hands-on projects and workshops, members gain expertise in data processing, analysis, and software development, including satellite data analysis and mission-related applications.",
            "By working on collaborative, real-world initiatives across divisions, we equip students with practical skills and an innovation-driven mindset to solve data-driven challenges in the space domain.",
        ],
    },
    {
        id: 3,
        slug: "robotics",
        title: "Robotics and Rover Division",
        image: image3,
        description: [
            "The Robotics & Rover Division is where engineering meets exploration. Members design, build, and program robotic systems and rover prototypes inspired by real-world space missions.",
            "From prototype construction to autonomous navigation, we encourage students to develop technical skills in mechanical design, embedded systems, and AI-guided robotics.",
            "Our division actively participates in national and international robotics competitions, pushing boundaries and inspiring the next wave of space engineers.",
        ],
    },
    {
        id: 4,
        slug: "biotechnical",
        title: "Biotechnical Division",
        image: image4,
        description: [
            "The Biotechnical Division explores the intersection of biology and space technology. Members investigate topics like astrobiology, life support systems, and bio-inspired engineering for space applications.",
            "Through research projects, lab workshops, and cross-disciplinary collaboration, we aim to push the frontiers of what we know about life in extreme environments.",
        ],
    },
];



const AboutUs = () => {
    return (
        <main className="relative min-h-screen">
            <GlobalStars />
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-20 pb-16 overflow-hidden">
                    {/* Purple glow decorations */}
                    <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full filter blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/8 rounded-full filter blur-[100px] pointer-events-none" />

                    {/* Planets Image — positioned in the right area */}
                    <div className="absolute top-1/2 right-8 lg:right-20 -translate-y-1/2 w-[40%] max-w-[550px] pointer-events-none">
                        <div className="absolute inset-0 bg-purple-600/5 rounded-full filter blur-[80px]" />
                        <img
                            src={planetsImg}
                            alt="Solar system planets"
                            className="w-full h-auto object-contain relative z-10 drop-shadow-2xl grayscale"
                        />
                    </div>

                    {/* Text Content — bottom left with padding like Home hero */}
                    <div className="relative z-20 flex flex-col gap-6 max-w-2xl">
                        <h1
                            className="text-glow text-glow-purple font-light tracking-wider text-white leading-none"
                            style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)" }}
                        >
                            ABOUT US
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light max-w-xl">
                            SEDS SLIIT is the official space exploration student organization
                            at Sri Lanka Institute of Technology, and a recognized chapter of
                            Students for the Exploration and Development of Space. Founded in
                            2019 by a student team led by Saditha Dissanayaka and Ravindu
                            Piyapenna, the chapter promotes space exploration through
                            projects, events, research, and outreach.
                        </p>
                    </div>
                </section>

                {/* Purple divider line */}
                <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                </div>

                {/* Divisions Detail Section */}
                <section className="relative py-20 px-6 md:px-12 lg:px-20">
                    {/* Background glow */}
                    <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-700/5 rounded-full filter blur-[150px] pointer-events-none" />

                    <div className="container mx-auto max-w-7xl">
                        <h2
                            className="text-glow font-light tracking-wider text-white mb-16"
                            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                        >
                            DIVISIONS
                        </h2>

                        <div className="flex flex-col gap-24">
                            {divisionsDetail.map((division) => (
                                <div
                                    key={division.id}
                                    id={division.slug}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-24"
                                >
                                    {/* Image — always on the left */}
                                    <div>
                                        <div className="relative group">
                                            <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/20 via-transparent to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#0f0b14]/60 backdrop-blur-md">
                                                <img
                                                    src={division.image}
                                                    alt={division.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text — always on the right */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide">
                                            {division.title}
                                        </h3>
                                        <div className="flex flex-col gap-4">
                                            {division.description.map((para, pIndex) => (
                                                <p
                                                    key={pIndex}
                                                    className="text-gray-400 text-sm md:text-base font-light leading-relaxed"
                                                >
                                                    {para}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AboutUs;
