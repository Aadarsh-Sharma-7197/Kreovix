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
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_25px_rgba(162,89,255,0.25)]"
            : "bg-background/20 backdrop-blur-lg border-b border-white/5"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 outline-none focus:outline-none">
            <motion.img
              src="/logo.png"
              alt="Kreovix Logo"
              className="h-[40px] w-auto opacity-90 hover:opacity-100 transition"
              style={{
                filter: "drop-shadow(0 0 12px rgba(162,89,255,0.35))"
              }}
              whileHover={{ scale: 1.06 }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group px-1 outline-none focus:outline-none"
                >
                  <span
                    className={`text-[1.05rem] font-medium transition-colors inline-block ${
                      active ? "text-neonPurple" : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>

                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-[6px] h-[3px] rounded-full 
                      bg-gradient-to-r from-neonPurple to-neonTeal"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 22,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden md:block">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.07, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-neonPurple to-neonTeal 
                font-semibold text-white shadow-lg shadow-neonPurple/20 relative overflow-hidden outline-none focus:outline-none"
              >
                <span className="relative z-10">Let's Create</span>

                {/* SHIMMER */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  translate-x-[-100%]"
                  animate={{ x: ["-100%", "300%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                />
              </motion.button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl 
            bg-white/5 backdrop-blur-lg border border-white/20 text-white outline-none focus:outline-none"
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
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 space-y-3">
                {navItems.map((item) => {
                  const active = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all outline-none focus:outline-none ${
                        active
                          ? "bg-gradient-to-r from-neonPurple/25 to-neonTeal/25 text-white border-l-2 border-neonPurple"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-neonPurple to-neonTeal 
                  text-white text-center font-semibold mt-2"
                >
                  Let's Create
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
