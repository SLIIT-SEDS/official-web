import { useEffect } from 'react';
import { eventsData } from '@/data/events';
import { boardMembers } from '@/data/board';

const preloadImage = (src: string) => {
  if (!src) return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.fetchpriority = 'high';
  document.head.appendChild(link);

  const img = new Image();
  img.src = src;
};

const ImagePreloader = () => {
  useEffect(() => {
    const images = [
      '/eventBG.png',
      ...eventsData.map((event) => event.image),
      ...new Set(boardMembers.map((member) => member.image)),
    ];

    const run = () => images.forEach(preloadImage);

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(run);
      return () => window.cancelIdleCallback(id);
    }

    const timeoutId = setTimeout(run, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  return null;
};

export default ImagePreloader;