import { lazy, Suspense, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import SmoothScroll from '@/components/layout/SmoothScroll';
import { preloadImages } from '@/lib/preload';

const HomePage = lazy(() => import('@/pages/home/HomePage'));
const AboutPage = lazy(() => import('@/pages/about/AboutPage'));
const EventsPage = lazy(() => import('@/pages/events/EventsPage'));
const BoardPage = lazy(() => import('@/pages/board/BoardPage'));
const NotFoundPage = lazy(() => import('@/pages/not-found/NotFoundPage'));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#090709]">
    <span
      className="text-white text-xl tracking-widest uppercase animate-pulse select-none"
      style={{ fontFamily: "'Rajdhani', 'Exo 2', sans-serif" }}
    >
      SEDS SLIIT
    </span>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />
          <Route
            path="/events"
            element={
              <PageTransition>
                <EventsPage />
              </PageTransition>
            }
          />
          <Route
            path="/board"
            element={
              <PageTransition>
                <BoardPage />
              </PageTransition>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    preloadImages(['/eventBG.png']);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <SmoothScroll /> */}
        <ScrollToTop />
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
