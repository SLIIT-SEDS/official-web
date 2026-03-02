import { Carousel } from "antd";

import image1 from "../../assets/divisions/image1.png";
import image2 from "../../assets/divisions/image2.png";
import image3 from "../../assets/divisions/image3.png";
import image4 from "../../assets/divisions/image4.png";

const divisionsData = [
  {
    id: 1,
    title: "Observation and\nCamping Division",
    image: image1,
    link: "/about#observation",
  },
  {
    id: 2,
    title: "Data Analysis and\nSoftware Division",
    image: image2,
    link: "/about#data-analysis",
  },
  {
    id: 3,
    title: "Robotics and\nRover Division",
    image: image3,
    link: "/about#robotics",
  },
  {
    id: 4,
    title: "Biotechnical\nDivision",
    image: image4,
    link: "/about#biotechnical",
  },
];

const Divisions = () => {
  const carouselSettings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 bg-transparent snap-start overflow-hidden">
      {/* Purple ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-purple-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl flex flex-col items-center mb-16">
        <h2 className="text-5xl md:text-6xl font-light tracking-wider text-white mb-8 select-none text-center animate-fade-in-up">
          OUR DIVISIONS
        </h2>
      </div>

      <div className="w-full max-w-[1600px] mx-auto pb-10">
        <Carousel {...carouselSettings} className="divisions-carousel">
          {divisionsData.map((division) => (
            <div key={division.id} className="px-3 py-4">
              <div
                className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] max-h-[450px] rounded-[2rem] overflow-hidden group border border-white/10 mx-auto transition-transform hover:-translate-y-2 duration-300 backdrop-blur-md"
                style={{
                  backgroundImage: `url(${division.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none group-hover:from-black/40 group-hover:to-black/60 transition-colors duration-300" />

                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <h3
                    className="text-2xl sm:text-2xl text-white font-light tracking-wide whitespace-pre-line leading-tight"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {division.title}
                  </h3>

                  <div className="mt-auto">
                    <a
                      href={division.link}
                      className="inline-flex items-center justify-center px-6 py-2 bg-transparent text-gray-300 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-300 backdrop-blur-sm text-base md:text-lg font-light tracking-wide"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .divisions-carousel .slick-track {
          display: flex !important;
          align-items: stretch;
        }
        .divisions-carousel .slick-slide {
          height: auto;
        }
        .divisions-carousel .slick-slide > div {
          height: 100%;
        }
      `,
        }}
      />
    </section>
  );
};

export default Divisions;
