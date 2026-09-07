import EventsList from '@/features/events/components/EventsList';
import { eventsData } from '@/data/events';
import { usePreloadImages } from '@/hooks/usePreloadImages';

const EventsPage = () => {
  usePreloadImages(['/eventBG.png', ...eventsData.map((e) => e.image)]);

  return (
    <div className="min-h-screen pt-24 pb-20 relative flex flex-col items-center justify-start bg-[#090709]">
      {/* Full Page Background Image */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <img
          src="/eventBG.png"
          alt="Events Background"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-100 brightness-125 select-none pointer-events-none"
        />
      </div>

      {/* Blend overlays for content readability */}
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-black/60 via-[#090709]/25 to-transparent z-0 pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent via-[#090709]/30 to-[#090709] z-0 pointer-events-none" />

      <EventsList />
    </div>
  );
};

export default EventsPage;
