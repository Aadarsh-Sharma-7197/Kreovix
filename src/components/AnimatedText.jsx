import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className, setCursorVariant }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  const letters = text.split('');

  return (
    <div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ 
            opacity: index < displayedText.length ? 1 : 0,
            y: index < displayedText.length ? 0 : 50,
            rotateX: index < displayedText.length ? 0 : -90
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut"
          }}
          className="inline-block"
          style={{
            background: index < displayedText.length 
              ? `linear-gradient(45deg, #A259FF ${Math.min(index * 15, 100)}%, #00F5D4 ${Math.max(100 - index * 10, 0)}%)`
              : 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: index < displayedText.length ? '0 0 30px rgba(162, 89, 255, 0.5)' : 'none',
            filter: index < displayedText.length ? 'drop-shadow(0 0 10px rgba(0, 245, 212, 0.3))' : 'none'
          }}
          onMouseEnter={() => setCursorVariant('text')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
      
      {/* Animated cursor */}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-1 h-16 md:h-20 bg-neonTeal ml-2"
        />
      )}
    </div>
  );
};

export default AnimatedText;
