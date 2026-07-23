import React from 'react';
import { boardMembers } from '@/data/board';

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 max-w-full">
      {/* 
        OUTER FRAME: 
        Purple gradient border (solid purple at top, fading to transparent at bottom)
      */}
      <div
        className="w-[220px] sm:w-64 h-[255px] sm:h-72 rounded-[2.2rem] sm:rounded-[2.5rem] p-[2px] sm:p-[2.5px] shadow-xl transition-transform duration-300 hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(180deg, #a385c7 0%, rgba(163, 133, 199, 0.05) 100%)'
        }}
      >
        {/* 
          INNER CONTAINER & THIN INNER BORDER: 
          Dark muted background with 0.5px inner border masking the photo.
        */}
        <div className="w-full h-full bg-[#171421] rounded-[2.1rem] sm:rounded-[2.35rem] p-1.5 flex items-center justify-center">
          <div className="w-full h-full border-[0.5px] border-white/10 rounded-[1.5rem] sm:rounded-[1.75rem] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://ui-avatars.com/api/?name=' +
                  encodeURIComponent(name) +
                  '&background=2a2a2a&color=ffffff&size=200';
              }}
            />
          </div>
        </div>
      </div>

      {/* Text Details */}
      <div className="flex flex-col items-center text-center px-2">
        {/* Role (Top line) */}
        <p className="font-semibold text-white text-base sm:text-lg leading-tight">
          {role}
        </p>
        {/* Name (Bottom line) */}
        <h3 className="font-light text-white text-xl sm:text-2xl mt-1 leading-tight">
          {name}
        </h3>
      </div>
    </div>
  );
};

const BoardMembersSection: React.FC = () => {
  const featured = boardMembers.find((m) => m.featured);
  const others = boardMembers.filter((m) => !m.featured);

  return (
    <section className="w-full min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 md:px-16 lg:px-20 relative overflow-hidden bg-transparent text-white">
      {/* ── Header ── */}
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        {/* Title + shade.png glow behind */}
        <div className="relative flex items-center justify-center mb-3 sm:mb-4 w-full">
          {/* Shade image behind title */}
          <img
            src="/shade.png"
            alt=""
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] md:w-[850px] max-w-none opacity-70 pointer-events-none select-none mix-blend-screen"
          />
          <h2
            className="relative z-10 text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-wide text-white uppercase text-center leading-none"
            style={{ fontFamily: "'Rajdhani', 'Exo 2', sans-serif" }}
          >
            BOARD MEMBERS
          </h2>
        </div>

        {/* Description */}
        <p className="text-white text-sm sm:text-lg md:text-xl font-light text-center leading-relaxed mb-10 sm:mb-16 max-w-lg px-2">
          Meet the dedicated team leading the
          <br />
          SEDS SLIIT Community
        </p>

        {/* ── Member Cards Directory ── */}
        <div className="flex flex-col items-center gap-8 sm:gap-12 w-full">
          {/* Featured card — centered top */}
          {featured && (
            <div className="flex justify-center w-full">
              <MemberCard
                name={featured.name}
                role={featured.role}
                image={featured.image}
              />
            </div>
          )}

          {/* Remaining members — 3 cards per row on md+ screens */}
          {others.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 place-items-center w-full max-w-5xl">
              {others.map((member) => (
                <MemberCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BoardMembersSection;
