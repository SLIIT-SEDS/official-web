import { useState } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventsData } from '@/data/events';

const EventsList = () => {
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null);

  const expandedEvent = eventsData.find(e => e.id === expandedEventId);

  return (
    <section className="w-full py-32 px-6 md:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-left mb-12 max-w-xl">
          <div className="relative inline-block mb-6">
            {/* Dynamic CSS Title Glow */}
            <div 
              className="absolute rounded-full pointer-events-none -z-10 mix-blend-screen w-[450px] h-[450px] sm:w-[750px] sm:h-[750px] md:w-[1000px] md:h-[1000px] lg:w-[1300px] lg:h-[1300px]"
              style={{
                left: '40%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(224, 182, 228, 0.25) 0%, rgba(224, 182, 228, 0) 70%)',
                filter: 'blur(130px)'
              }}
            />
            <h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wider text-white uppercase select-none relative z-10"
              style={{ fontFamily: "'Exo 2', 'Rajdhani', sans-serif" }}
            >
              EVENTS
            </h1>
          </div>
          <p className="text-white text-base md:text-lg leading-relaxed select-none">
            SEDS SLIIT is the official space exploration student organization at Sri Lanka Institute of Technology, and a recognized chapter of Students for the Exploration and Development of Space. Founded in 2019 by a student team led by Saditha Dissanayaka and Ravindu Piyapema, the chapter promotes space exploration through projects, events, research, and outreach.
          </p>
        </div>

      <AnimatePresence mode="wait">
        {!expandedEventId ? (
          <motion.div
            key="grid-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
          >
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="group relative bg-[#0f0b14]/50 border border-white/5 hover:border-purple-500/20 rounded-[1.8rem] sm:rounded-[2.5rem] p-5 sm:p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(224,182,228,0.05)] flex flex-col h-full"
              >
                {/* Image Wrapper */}
                <div className="w-full aspect-[4/3] relative rounded-[1.2rem] sm:rounded-[1.8rem] overflow-hidden mb-5 sm:mb-6 shrink-0">
                  <img
                    src={event.image}
                    alt={`${event.category} ${event.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 px-2">
                  <span className="text-[#a5a1aa] font-semibold text-xs tracking-widest uppercase mb-1.5 select-none">
                    {event.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-white mb-4 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base font-light leading-relaxed mb-6 flex-grow">
                    {event.description}
                  </p>

                  {/* Action Button */}
                  <div className="mt-auto pt-2">
                    <button
                      onClick={() => setExpandedEventId(event.id)}
                      className="group/btn w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#E0B6E4] hover:border-[#E0B6E4]/50 hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <ArrowUpRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          expandedEvent && (
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} // smooth easeOutExpo
              className="bg-[#0f0b14]/50 border border-white/5 rounded-[1.8rem] sm:rounded-[2.5rem] p-5 sm:p-8 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full"
            >
              {/* Back Button */}
              <button
                onClick={() => setExpandedEventId(null)}
                className="flex items-center gap-2 text-white/70 hover:text-[#E0B6E4] mb-6 sm:mb-8 transition-colors text-sm uppercase tracking-wider font-medium group"
              >
                <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Events
              </button>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                {/* Left Side: Large Image */}
                <div className="w-full lg:w-[45%] aspect-[4/3] rounded-[1.2rem] sm:rounded-[1.8rem] overflow-hidden shrink-0 border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                  <img
                    src={expandedEvent.image}
                    alt={`${expandedEvent.category} ${expandedEvent.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Side: Details */}
                <div className="flex-1 w-full">
                  <span className="text-[#a5a1aa] font-semibold text-xs tracking-widest uppercase mb-2 block select-none">
                    {expandedEvent.category}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 leading-tight uppercase">
                    {expandedEvent.title}
                  </h2>
                  <div className="space-y-4 sm:space-y-6 text-white text-sm sm:text-base md:text-lg font-light leading-relaxed">
                    {expandedEvent.longDescription.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>
      </div>
    </section>
  );
};

export default EventsList;

