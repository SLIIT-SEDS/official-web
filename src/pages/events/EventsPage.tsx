import Events from '@/components/events/Events';

const EventsPage = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat pt-28 pb-20 relative flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url('/eventBG.png')` }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/75 z-0" />
      
      {/* Background Star Overlay or subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090709]/50 to-[#090709] z-0" />
      
      <Events />
    </div>
  );
};

export default EventsPage;
