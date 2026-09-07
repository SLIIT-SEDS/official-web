import { eventsData } from '@/data/events';
import { boardMembers } from '@/data/board';

const preloaded = new Set<string>();

const preloadImage = (src: string) => {
  if (!src || preloaded.has(src)) return;
  preloaded.add(src);

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);

  const img = new Image();
  img.decoding = 'async';
  img.src = src;
};

export const preloadImages = (sources: string[]) => {
  sources.forEach(preloadImage);
};

export const preloadEvents = () => {
  import('@/pages/events/EventsPage');
  preloadImages(['/eventBG.png', ...eventsData.map((event) => event.image)]);
};

export const preloadBoard = () => {
  import('@/pages/board/BoardPage');
  preloadImages(boardMembers.map((member) => member.image));
};
