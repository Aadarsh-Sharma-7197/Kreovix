import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const loadingTexts = [
    "Initializing Creative Engine...",
    "Loading Video Editing Tools...", 
    "Setting up Animation Studio...",
    "Preparing Your Experience...",
    "Almost Ready!"
  ];

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 12 + 8;
        
        // Change text based on progress
        const textIndex = Math.min(Math.floor(newProgress / 20), loadingTexts.length - 1);
        setCurrentText(textIndex);
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 1000);
          }, 800);
          return 100;
        }
        return newProgress;
      });
    }, 180);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.95,
            filter: 'blur(20px)'
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 bg-background z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0">
            {/* Background Rectangles Animation */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-neonPurple/10 bg-gradient-to-br from-neonPurple/5 to-neonTeal/5"
                style={{
                  width: `${60 + Math.random() * 120}px`,
                  height: `${40 + Math.random() * 80}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: Math.random() * 360,
                }}
                animate={{
                  opacity: [0, 0.3, 0.1, 0.4, 0],
                  scale: [0, 1, 1.2, 0.8, 1],
                  rotate: [
                    Math.random() * 360, 
                    Math.random() * 360 + 180, 
                    Math.random() * 360 + 360
                  ],
                  x: [0, Math.random() * 100 - 50, 0],
                  y: [0, Math.random() * 100 - 50, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Floating Rectangle Particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute bg-gradient-to-r from-neonPurple to-neonTeal opacity-20"
                style={{
                  width: `${4 + Math.random() * 8}px`,
                  height: `${4 + Math.random() * 8}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100 - Math.random() * 200, -300 - Math.random() * 200],
                  x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
                  rotate: [0, 180, 360],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 text-center max-w-md mx-auto px-6">
            {/* Animated Rectangle Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-8 relative"
            >
              <motion.div
                className="relative w-24 h-24 mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                {/* Main Rectangle */}
                <motion.div
                  className="w-24 h-24 border-4 border-neonPurple bg-gradient-to-br from-neonPurple/20 to-neonTeal/20"
                  animate={{
                    borderRadius: ["0%", "25%", "0%", "15%", "0%"],
                    borderColor: [
                      "#A259FF", 
                      "#00F5D4", 
                      "#A259FF", 
                      "#00F5D4", 
                      "#A259FF"
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Inner Rectangle */}
                <motion.div
                  className="absolute inset-4 border-2 border-neonTeal"
                  animate={{
                    rotate: [0, 180, 360],
                    borderRadius: ["0%", "30%", "0%"],
                    scale: [1, 0.8, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Corner Rectangles */}
                {[0, 90, 180, 270].map((rotation, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-3 h-3 bg-neonTeal"
                    style={{
                      transformOrigin: '48px 48px',
                    }}
                    animate={{
                      rotate: [rotation, rotation + 360],
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                {/* Orbiting Lines */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent border-t-neonPurple border-r-neonTeal"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="text-4xl font-bold gradient-text mb-8 tracking-wide"
            >
              KREOVIX
            </motion.h1>

            {/* Loading Text with Typewriter Effect */}
            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 h-6"
            >
              <motion.p 
                className="text-gray-300 text-lg font-light"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {loadingTexts[currentText]}
              </motion.p>
            </motion.div>

            {/* Progress Bar with Rectangle Animation */}
            <div className="w-full bg-white/5 rounded-none h-1 mb-4 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-neonPurple to-neonTeal relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              {/* Moving Rectangle Indicator */}
              <motion.div
                className="absolute top-0 h-full w-8 bg-white/30"
                animate={{ 
                  x: [`${Math.max(0, progress - 8)}%`, `${progress}%`],
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.p
              className="text-sm text-gray-400 font-mono mb-6"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.6, 1, 0.6] 
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {Math.round(progress)}%
            </motion.p>

            {/* Loading Rectangles */}
            <div className="flex justify-center gap-2">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-neonTeal"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                    rotate: [0, 90, 180, 270, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Edge Rectangle Animations */}
          {/* Top Edge */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neonPurple via-neonTeal to-neonPurple"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Bottom Edge */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neonTeal via-neonPurple to-neonTeal"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
          />

          {/* Side Edges */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neonPurple via-neonTeal to-neonPurple"
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.75, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neonTeal via-neonPurple to-neonTeal"
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 2.25, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
