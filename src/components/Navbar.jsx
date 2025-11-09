import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => setIsMobileMenuOpen(false), [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar container - UPDATED COLORS */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-xl border-b border-neonPurple/30 shadow-lg shadow-neonPurple/10' 
          : 'bg-background/80 backdrop-blur-md border-b border-white/10'
      }`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Left - Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/logo.png"
              alt="Kreovix Logo"
              className="h-[40px] w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(162, 89, 255, 0.3))'
              }}
            />
          </Link>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-lg font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-neonPurple"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-neonPurple to-neonTeal rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 22,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right - CTA - UPDATED BUTTON */}
          <div className="hidden md:block">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative px-6 py-2 bg-gradient-to-r from-neonPurple to-neonTeal rounded-full text-white text-lg font-semibold overflow-hidden group"
              >
                <span className="relative z-10">Let's Create</span>
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg glassmorphism border border-white/20 text-white"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Dropdown - UPDATED COLORS */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="py-3 space-y-1 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                      location.pathname === item.path
                        ? "bg-gradient-to-r from-neonPurple/20 to-neonTeal/20 text-neonPurple border-l-2 border-neonPurple"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-2">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-2 bg-gradient-to-r from-neonPurple to-neonTeal rounded-full text-white text-center text-sm font-semibold"
                  >
                    Let's Create
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to prevent overlap - REDUCED */}
      <div className="h-[60px]" />
    </>
  );
};

export default Navbar;
