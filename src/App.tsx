import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/home/HomePage';
import ContactPage from '@/pages/contact/ContactPage';
import AboutPage from '@/pages/about/AboutPage';
import EventsPage from '@/pages/events/EventsPage';
import BoardPage from '@/pages/board/BoardPage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {/* <SmoothScroll /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
