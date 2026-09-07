import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import HomePage from '@/pages/home/HomePage';
import AboutPage from '@/pages/about/AboutPage';
import EventsPage from '@/pages/events/EventsPage';
import BoardPage from '@/pages/board/BoardPage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import SmoothScroll from '@/components/layout/SmoothScroll';
import { eventsData } from '@/data/events';
import { boardMembers } from '@/data/board';
import { usePreloadImages } from '@/hooks/usePreloadImages';

const queryClient = new QueryClient();

const preloadSources = [
  '/eventBG.png',
  ...eventsData.map((e) => e.image),
  ...boardMembers.map((m) => m.image),
];

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
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
    </AnimatePresence>
  );
};

const App = () => {
  usePreloadImages(preloadSources);

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
