import { useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  type: 'upcoming' | 'past';
  image: string;
}

const Events = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'past'>('all');

  const eventsData: Event[] = [
    {
      id: 1,
      title: 'Galactic Space Hackathon',
      description: 'An intense 48-hour challenge to design solutions for outer-space living conditions and data visualization.',
      date: 'July 18, 2026',
      location: 'SLIIT Malabe Campus, Auditorium',
      type: 'upcoming',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Introduction to Model Rocketry',
      description: 'Learn the fundamentals of hybrid propulsion systems, aerodynamics, and safety regulations of amateur model rockets.',
      date: 'August 05, 2026',
      location: 'Online Webinar & Lab Session',
      type: 'upcoming',
      image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Stargazing & Deep Sky Imaging Night',
      description: 'An overnight astronomical observation session utilizing high-grade telescopes to capture nebulas and planets.',
      date: 'May 12, 2026',
      location: 'SLIIT Grounds',
      type: 'past',
      image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Astro-Physics Symposium 2026',
      description: 'A platform inviting leading researchers to share insights on dark matter, gravity waves, and quantum mechanics.',
      date: 'March 20, 2026',
      location: 'Main Conference Hall',
      type: 'past',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600&auto=format&fit=crop',
    },
  ];

  const filteredEvents = eventsData.filter(event => {
    if (activeTab === 'all') return true;
    return event.type === activeTab;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wider text-white mb-4 text-glow">
          SEDS SLIIT EVENTS
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light">
          Join our mission to explore space science and technology. Browse through our upcoming challenges, hands-on workshops, and past initiatives.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        {(['all', 'upcoming', 'past'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-medium text-sm tracking-wide uppercase transition-all duration-300 border ${
              activeTab === tab
                ? 'bg-[#E0B6E4] text-[#090709] border-[#E0B6E4] shadow-[0_0_15px_rgba(224,182,228,0.3)]'
                : 'bg-transparent text-white/70 border-white/10 hover:text-white hover:border-white/30'
            }`}
          >
            {tab} Events
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="group relative bg-[#0f0b14]/40 border border-white/5 hover:border-[#E0B6E4]/20 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(224,182,228,0.05)] flex flex-col sm:flex-row h-full"
          >
            {/* Image Wrapper */}
            <div className="w-full sm:w-[40%] h-48 sm:h-full relative overflow-hidden shrink-0">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#090709]/80 to-transparent sm:hidden" />
              {/* Badge */}
              <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                event.type === 'upcoming'
                  ? 'bg-purple-500/80 text-white'
                  : 'bg-white/20 text-white/90'
              }`}>
                {event.type}
              </span>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-light text-white mb-3 group-hover:text-[#E0B6E4] transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>

              <div className="flex flex-col gap-2.5 border-t border-white/5 pt-4 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#E0B6E4]" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#E0B6E4]" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
