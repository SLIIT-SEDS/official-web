import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#090709] px-6 pt-24 pb-12">
      {/* Ambient background space glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] rounded-full mix-blend-screen opacity-50"
          style={{
            background:
              'radial-gradient(circle, rgba(224, 182, 228, 0.18) 0%, rgba(9, 7, 9, 0) 70%)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-4 md:gap-6">
        <h1
          className="text-glow font-light tracking-wider text-white leading-tight relative select-none"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
          }}
        >
          <span className="relative inline-block">
            {/* SHADE IMAGE BEHIND HEADING */}
            <img
              src="/shade.png"
              alt="shade background glow"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] sm:w-[700px] md:w-[900px] lg:w-[1100px] max-w-none opacity-60 pointer-events-none select-none mix-blend-screen"
            />
            404 — Lost in Space!
          </span>
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-2xl"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          The page you&apos;re looking for doesn&apos;t exist, has moved, or is
          currently exploring another galaxy.
        </p>
        <Link
          to="/"
          className="mt-2 inline-flex px-8 py-3 text-sm md:text-base rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
