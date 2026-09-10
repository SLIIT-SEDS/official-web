import * as React from 'react';

export function usePreloadImages(sources: string[]) {
  React.useEffect(() => {
    const unique = Array.from(new Set(sources)).filter(Boolean);
    const instances = unique.map((src) => {
      const img = new Image();
      img.src = src;
      if ('decode' in img) {
        img.decode().catch(() => {});
      }
      return img;
    });
    return () => {
      instances.forEach((img) => {
        img.src = '';
      });
    };
  }, [sources]);
}
