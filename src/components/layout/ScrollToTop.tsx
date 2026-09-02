import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const state = useLocation().state;

  useEffect(() => {
    // Skip the reset when arriving with an explicit scroll intent (e.g. navbar
    // Contact Us), since the target section handles its own scrolling.
    if (!hash && state?.scrollTo === undefined) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, state?.scrollTo]);

  return null;
};

export default ScrollToTop;