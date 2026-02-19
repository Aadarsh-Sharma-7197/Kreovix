import React, { useState, useRef, useMemo } from 'react';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Grid3X3,
  Film,
  Video,
  Camera,
  Palette,
  Edit3,
  Share2,
  Play,
  X,
  Sparkles
} from 'lucide-react';

// Imports
import ph1 from "../assets/ph-1.jpg";
import ph2 from "../assets/ph-2.JPG";
import ph3 from "../assets/ph-3.jpg";
import ph4 from "../assets/ph-4.JPG";
import ph5 from "../assets/ph-5.jpg";
import ph6 from "../assets/ph-6.JPG";

import gd1 from "../assets/gd-1.png";
import gd2 from "../assets/gd-2.png";
import gd3 from "../assets/gd-3.png";
import gd4 from "../assets/gd-4.png";

import mg1 from "../assets/mg-1.jpg";
import mg2 from "../assets/mg-2.jpg";
import mg3 from "../assets/mg-3.jpg";
import mg4 from "../assets/mg-4.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const portfolioRef = useRef(null);

  // Define filter categories
  const filters = [
    { id: 'all', label: 'All Work', icon: Grid3X3 },
    { id: 'shorts', label: 'Shorts', icon: Film },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'motion', label: 'Motion', icon: Edit3 },
    { id: 'social', label: 'Social', icon: Share2 }
  ];

  // Portfolio data
  const portfolioData = useMemo(() => ({
    shorts: [
      { id: 's1', youtubeId: '_J8eCsRXvcI', thumbnail: 'https://img.youtube.com/vi/_J8eCsRXvcI/mqdefault.jpg' }, // Optimized thumbnail
      { id: 's2', youtubeId: '7ldCgaTFgiM', thumbnail: 'https://img.youtube.com/vi/7ldCgaTFgiM/mqdefault.jpg' },
      { id: 's3', youtubeId: 'IObybxqi0zs', thumbnail: 'https://img.youtube.com/vi/IObybxqi0zs/mqdefault.jpg' },
      { id: 's4', youtubeId: 'VkFnmTwqSuE', thumbnail: 'https://img.youtube.com/vi/VkFnmTwqSuE/mqdefault.jpg' },
      { id: 's5', youtubeId: 'd0UgUMYJ49w', thumbnail: 'https://img.youtube.com/vi/d0UgUMYJ49w/mqdefault.jpg' }
    ],
    videos: [
      { id: 'v1', youtubeId: 'uz6purXLVnU', thumbnail: 'https://img.youtube.com/vi/uz6purXLVnU/mqdefault.jpg' },
      { id: 'v2', youtubeId: '9C6yastA1qA', thumbnail: 'https://img.youtube.com/vi/9C6yastA1qA/mqdefault.jpg' },
      { id: 'v3', youtubeId: 'HsySiWymOEw', thumbnail: 'https://img.youtube.com/vi/HsySiWymOEw/mqdefault.jpg' },
      { id: 'v4', youtubeId: 'UvIHzsadU6Q', thumbnail: 'https://img.youtube.com/vi/UvIHzsadU6Q/mqdefault.jpg' }
    ],
    photography: [
      { id: 'p1', path: ph1 },
      { id: 'p2', path: ph2 },
      { id: 'p3', path: ph3 },
      { id: 'p4', path: ph4 },
      { id: 'p5', path: ph5 },
      { id: 'p6', path: ph6 }
    ],
    design: [
      { id: 'd1', path: gd1 },
      { id: 'd2', path: gd2 },
      { id: 'd3', path: gd3 },
      { id: 'd4', path: gd4 }
    ],
    motion: [
      { id: 'm1', path: mg1 },
      { id: 'm2', path: mg2 },
      { id: 'm3', path: mg3 },
      { id: 'm4', path: mg4 }
    ],
    social: [
      { id: 'so1', path: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80' },
      { id: 'so2', path: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80' },
      { id: 'so3', path: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80' }
    ]
  }), []);

  // Helper to get all items for "All" view
  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') {
      const allItems = [];
      Object.entries(portfolioData).forEach(([type, items]) => {
        items.forEach(item => allItems.push({ ...item, type }));
      });
      return allItems;
    }
    return portfolioData[activeFilter].map(item => ({ ...item, type: activeFilter }));
  }, [activeFilter, portfolioData]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects - Simplified for Performance */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonPurple/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonTeal/5 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative z-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glassmorphism border border-white/10 mb-6"
            >
              <Sparkles size={16} className="text-neonTeal" />
              <span className="text-sm font-medium text-white tracking-wide">PORTFOLIO SHOWCASE</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Our </span>
              <span className="gradient-text">Masterpieces</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              A curated collection of our finest work, pushing the boundaries of <span className="text-neonTeal">creativity</span> and <span className="text-neonPurple">innovation</span>.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-neonPurple to-neonTeal text-white shadow-lg shadow-neonPurple/20'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <filter.icon size={16} />
                <span>{filter.label}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Masonry Grid - High Performance */}
      <section className="max-w-[1800px] mx-auto px-6 pb-24 relative z-10" ref={portfolioRef}>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="break-inside-avoid relative group rounded-xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer will-change-transform"
                onClick={() => setSelectedMedia(item)}
              >
                {/* Image/Thumbnail */}
                <div className="relative w-full bg-white/5">
                  <img
                    src={item.thumbnail || item.path}
                    alt=""
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Overlay - Simplified */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    {(item.youtubeId || item.type === 'videos' || item.type === 'shorts') ? (
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-sm">
                        <Play size={24} className="text-white fill-current ml-1" />
                      </div>
                    ) : (
                      <div className="px-4 py-2 bg-black/60 rounded-full text-sm font-medium text-white border border-white/20">
                        View
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-50 focus:outline-none"
            >
              <X size={20} />
            </button>

            <motion.div
              layoutId={selectedMedia.id}
              className={`relative w-full max-h-[90vh] ${
                selectedMedia.type === 'shorts' ? 'max-w-md aspect-[9/16]' : 'max-w-6xl aspect-video'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-black shadow-2xl border border-white/10">
                {selectedMedia.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedMedia.youtubeId}?autoplay=1&rel=0`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={selectedMedia.path}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer/>
    </div>
  );
};

export default Portfolio;
