import Events from '@/components/events/Events';

const EventsPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 relative flex items-center justify-center overflow-hidden bg-[#090709]">
      {/* Full Page Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/eventBG.png"
          alt="Events Background"
          className="w-full h-full object-cover opacity-35 select-none pointer-events-none"
        />
      </div>
      
      {/* Blend overlays for content readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#090709]/30 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090709]/40 to-[#090709] z-0 pointer-events-none" />
      
      <Events />
    </div>
  );
};

export default EventsPage;
