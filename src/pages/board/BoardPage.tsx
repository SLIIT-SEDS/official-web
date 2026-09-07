import BoardMembersSection from '@/features/board/components/BoardMembersSection';
import { boardMembers } from '@/data/board';
import { usePreloadImages } from '@/hooks/usePreloadImages';

const BoardPage = () => {
  usePreloadImages(boardMembers.map((m) => m.image));

  return (
    <div className="min-h-screen pt-24 pb-20 relative flex flex-col items-center justify-start bg-[#090709] overflow-hidden">
      {/* Ambient background space glow (clean shading without astronaut figure) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] rounded-full mix-blend-screen opacity-50"
          style={{
            background:
              'radial-gradient(circle, rgba(224, 182, 228, 0.18) 0%, rgba(9, 7, 9, 0) 70%)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        <BoardMembersSection />
      </div>
    </div>
  );
};

export default BoardPage;
