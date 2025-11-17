import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

// Scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    // Ensure loading screen lasts at least 800ms
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  return (
    <div className="bg-background text-white min-h-screen overflow-x-hidden">
      <Router>
        <Navbar />

          <ScrollToTop />

          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen key="loader" onComplete={handleLoadingComplete} />
            ) : (
              <Routes key="routes">
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
            )}
          </AnimatePresence>
        
      </Router>
    </div>
  );
}

export default App;
